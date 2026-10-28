// ==========================================
// HỆ THỐNG TRACKING (CHỐNG SPAM, ĐO THỜI GIAN ĐẮN ĐO, AUTO-HEAL & SERVER TIME)
// ==========================================

window.TestData = {
    id: '', name: '', role: '', sessionPath: '', roomCode: '', currentScene: '',
    lastActionTime: 0, lastLogTime: 0, timeOffset: 0 // Bổ sung biến lưu độ lệch giờ
};

// VŨ KHÍ BÍ MẬT: Hàm lấy giờ chuẩn của máy chủ Google (Bỏ qua giờ bị sai trên điện thoại học sinh)
window.getServerTime = function() {
    return Date.now() + (window.TestData.timeOffset || 0);
};

// ==========================================
// 0. CHẶN ĐA TAB (KHIÊN BẢO VỆ BĂNG THÔNG)
// ==========================================
const currentTabId = Math.random().toString(36).substring(2, 10);
const gameChannel = new BroadcastChannel('gockhuat_playtest_channel');

gameChannel.onmessage = (event) => {
    // Nếu có một tab mới đang dò hỏi "Có ai ở đây không?" -> Trả lời "Có!"
    if (event.data.type === 'PING') {
        gameChannel.postMessage({ type: 'PONG', fromTab: currentTabId });
    }
    // Nếu nhận được câu trả lời "Có!" -> Mình là tab mở sau, phải tự hủy
    if (event.data.type === 'PONG') {
        document.body.innerHTML = `
            <div class="h-[100dvh] w-full bg-slate-950 flex flex-col items-center justify-center p-6 text-center z-[9999] fixed inset-0">
                <svg class="w-20 h-20 text-rose-500 mb-6 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path></svg>
                <h1 class="text-2xl font-black text-rose-400 mb-2 uppercase tracking-widest">CẢNH BÁO ĐA TAB</h1>
                <p class="text-slate-400 text-sm mb-6">Bạn đang mở trò chơi ở một thẻ (tab) hoặc cửa sổ khác.<br>Hệ thống đã khóa kết nối ở trang này để bảo vệ dữ liệu.</p>
                <p class="text-white font-bold bg-rose-900/50 border border-rose-500/50 px-6 py-3 rounded-xl">Vui lòng đóng tab này và quay lại tab ban đầu để tiếp tục.</p>
            </div>
        `;
        // Cắt đứt kết nối Firebase của tab thừa thãi này
        if (window.db && window.fbGoOffline) window.fbGoOffline(window.db);
    }
};

// Vừa vào trang là phát sóng radar dò tìm ngay
gameChannel.postMessage({ type: 'PING', fromTab: currentTabId });

// ==========================================
// 1. TỰ ĐỘNG KHÔI PHỤC KHI F5
// ==========================================
document.addEventListener('DOMContentLoaded', async () => {
    const savedSession = localStorage.getItem('PLAYTEST_SESSION');
    if (savedSession) {
        window.TestData = JSON.parse(savedSession);
        
        const playerRef = window.fbRef(window.db, `${window.TestData.sessionPath}/players/${window.TestData.id}`);
        const snapshot = await window.fbGet(playerRef);
        
        if (!snapshot.exists()) {
            localStorage.clear();
            window.TestData = { id: '', name: '', role: '', sessionPath: '', roomCode: '', currentScene: '', lastActionTime: 0, lastLogTime: 0, timeOffset: 0 };
            alert("⚠️ Phiên của bạn không hợp lệ hoặc đã bị giáo viên xóa. Vui lòng nhập lại thông tin!");
            window.location.reload();
            return;
        }

        window.fbOnDisconnect(playerRef).update({ 'liveStatus/currentScene': 'Gián đoạn (Mất mạng)' });

        const nameInput = document.getElementById('student-name-input');
        const roomInput = document.getElementById('room-code-input');
        const mainBtn = document.querySelector('button[onclick="startTestSession()"]');
        const btnText = mainBtn ? mainBtn.querySelector('span') : null;
        
        if (nameInput) { nameInput.value = window.TestData.name; nameInput.disabled = true; nameInput.classList.add('opacity-70'); }
        if (roomInput) { roomInput.value = window.TestData.roomCode; roomInput.disabled = true; roomInput.classList.add('opacity-70'); }
        if (btnText) btnText.innerText = "TIẾP TỤC CHƠI";
        
        if (mainBtn && mainBtn.parentElement && !document.getElementById('btn-clear-session')) {
            const clearBtn = document.createElement('button');
            clearBtn.id = 'btn-clear-session';
            clearBtn.className = "mt-3 text-[13px] sm:text-sm text-amber-400/80 hover:text-amber-400 underline font-bold tracking-wide active:scale-95 transition-transform drop-shadow-md";
            clearBtn.innerText = "✖ Đổi mã phòng / Nhập lại thông tin";
            clearBtn.onclick = function() {
                localStorage.clear();
                window.location.reload();
            };
            mainBtn.parentElement.appendChild(clearBtn);
        }

        startKickListener();
        startConnectionManager(); // Kích hoạt quản lý mạng khi khôi phục
        
        // Đặt lại mốc tính giờ theo Server Time thay vì Date.now()
        window.TestData.lastLogTime = window.getServerTime(); 
        if(window.trackAction) window.trackAction("Hệ thống: Tải lại trang (F5) - Đã khôi phục phiên");
    }
});

function startKickListener() {
    if (!window.TestData || !window.TestData.id || typeof window.fbOnValue !== 'function') return;
    
    const playerRef = window.fbRef(window.db, `${window.TestData.sessionPath}/players/${window.TestData.id}`);
    window.fbOnValue(playerRef, (snapshot) => {
        if (!snapshot.exists()) {
            alert("❌ Bạn đã bị giáo viên mời ra khỏi phòng!");
            localStorage.clear();
            window.location.reload();
        }
    });

    const roomStatusRef = window.fbRef(window.db, `${window.TestData.sessionPath}/status`);
    window.fbOnValue(roomStatusRef, (snapshot) => {
        if (snapshot.val() === 'closed') {
            alert("🛑 HẾT GIỜ! Giáo viên đã đóng phòng chơi. Cảm ơn bạn đã tham gia thực nghiệm.");
            localStorage.clear();
            window.location.reload();
        }
    });
}

// ==========================================
// CƠ CHẾ QUẢN TRỊ KẾT NỐI & ĐỒNG BỘ GIỜ SERVER
// ==========================================
function startConnectionManager() {
    if (!window.TestData || !window.TestData.id || !window.db) return;

    // 1. Lắng nghe độ lệch thời gian của máy chủ (Bảo vệ dữ liệu thời gian)
    const offsetRef = window.fbRef(window.db, ".info/serverTimeOffset");
    window.fbOnValue(offsetRef, (snap) => {
        window.TestData.timeOffset = snap.val() || 0;
    });

    const playerRef = window.fbRef(window.db, `${window.TestData.sessionPath}/players/${window.TestData.id}`);

    // 2. AUTO-HEAL: Khôi phục trạng thái khi có mạng lại
    const connectedRef = window.fbRef(window.db, ".info/connected");
    window.fbOnValue(connectedRef, (snap) => {
        if (snap.val() === true) {
            window.fbOnDisconnect(playerRef).update({ 'liveStatus/currentScene': 'Gián đoạn (Mất mạng)' });
            const savedScene = window.TestData.currentScene || 'menu';
            window.fbUpdate(playerRef, { 'liveStatus/currentScene': savedScene });
        }
    });

    // 3. VISIBILITY API: Cắt mạng ngay khi học sinh ẩn/chuyển tab
    document.addEventListener("visibilitychange", () => {
        if (document.visibilityState === 'hidden') {
            window.fbGoOffline(window.db); 
        } else {
            window.fbGoOnline(window.db);
        }
    });
}

// ==========================================
// 2. KHỞI TẠO PHIÊN CHƠI MỚI
// ==========================================
async function startTestSession() {
    if (window.TestData && window.TestData.id && localStorage.getItem('PLAYTEST_SESSION')) {
        const roomRef = window.fbRef(window.db, `sessions/${window.TestData.roomCode}`);
        const snapshot = await window.fbGet(roomRef);
        
        if (!snapshot.exists() || snapshot.val().status !== 'active') {
            alert("❌ Lỗi: Phòng này đã bị giáo viên đóng! Vui lòng nhập mã phòng mới.");
            localStorage.clear();
            window.location.reload();
            return;
        }
        
        startConnectionManager(); // Đảm bảo gài cơ chế mạng khi tiếp tục
        window.TestData.lastLogTime = window.getServerTime(); // Dùng giờ Server
        window.lockStudentScreen();
        if(typeof startGame === 'function') startGame();
        return;
    }

    const roomCode = document.getElementById('room-code-input').value.trim().toUpperCase();
    const nameInput = document.getElementById('student-name-input').value.trim();
    
    if (!roomCode || !nameInput) {
        alert("⚠️ Vui lòng nhập đầy đủ Mã Phòng và Họ Tên!");
        return;
    }

    const roomRef = window.fbRef(window.db, `sessions/${roomCode}`);
    const snapshot = await window.fbGet(roomRef);

    if (!snapshot.exists() || snapshot.val().status !== 'active') {
        alert("❌ Mã phòng không tồn tại hoặc giáo viên đã đóng phòng!");
        return;
    }
    
    localStorage.clear(); 
    
    window.TestData.sessionPath = `sessions/${roomCode}`;
    window.TestData.roomCode = roomCode;
    
    // Khởi động Manager ngay để kịp lấy TimeOffset trước khi tạo ID
    startConnectionManager();

    // Dùng setTimeout 200ms để đợi Firebase trả về độ lệch giờ trước khi đẩy data
    setTimeout(() => {
        window.TestData.id = 'hs_' + window.getServerTime(); 
        window.TestData.name = nameInput;
        window.TestData.lastLogTime = window.getServerTime(); 
        
        localStorage.setItem('PLAYTEST_SESSION', JSON.stringify(window.TestData));

        const playerRef = window.fbRef(window.db, `${window.TestData.sessionPath}/players/${window.TestData.id}`);
        
        window.fbSet(playerRef, {
            name: window.TestData.name,
            role: "",
            currentScene: 'menu',
            progressPercent: 0,
            isFinished: false,
            gameStats: { redoCount: 0, minigameWins: 0, minigameTotal: 0 },
            timeTracking: { startTime: window.getServerTime() } // Đẩy giờ chuẩn lên Server
        });

        window.fbOnDisconnect(playerRef).update({ 'liveStatus/currentScene': 'Gián đoạn (Mất mạng)' });

        startKickListener();
        window.lockStudentScreen();
        
        if(typeof startGame === 'function') startGame();
    }, 200);
}

// ==========================================
// 3. TRACKING GIAO TIẾP VỚI GAME GỐC
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
    
    window.trackAction = function(actionDesc) {
        if (!window.TestData || !window.TestData.id) return;
        const now = window.getServerTime(); // Tính toán mọi thứ dựa trên giờ Server

        if (window.TestData.lastActionTime && (now - window.TestData.lastActionTime < 500)) return;
        window.TestData.lastActionTime = now;

        let durationSec = 0;
        if (window.TestData.lastLogTime) {
            durationSec = ((now - window.TestData.lastLogTime) / 1000).toFixed(1);
        }
        window.TestData.lastLogTime = now; 

        const logRef = window.fbRef(window.db, `${window.TestData.sessionPath}/players/${window.TestData.id}/actionLogs`);
        const newLog = window.fbPush(logRef); 
        window.fbSet(newLog, { 
            timestamp: now, // Ghi giờ chuẩn vào Log
            action: actionDesc,
            duration: Number(durationSec) 
        });
    };

    const originalStartRole = window.startRole;
    window.startRole = function(role, sceneToLoad) {
        if (window.TestData && window.TestData.id) {
            window.TestData.role = role;
            const playerRef = window.fbRef(window.db, `${window.TestData.sessionPath}/players/${window.TestData.id}`);
            window.fbUpdate(playerRef, { role: role });
            
            localStorage.setItem('PLAYTEST_SESSION', JSON.stringify(window.TestData));
            window.trackAction(`Chọn nhân vật: ${role.toUpperCase()}`);
        }
        if(originalStartRole) originalStartRole(role, sceneToLoad);
    };

    const originalLoadScene = window.loadScene;
    window.loadScene = function(sceneId) {
        if (window.TestData && window.TestData.id) {
            window.TestData.currentScene = sceneId; // LƯU VÀO BỘ NHỚ CỤC BỘ CHO AUTO-HEAL
            
            const playerRef = window.fbRef(window.db, `${window.TestData.sessionPath}/players/${window.TestData.id}`);
            
            if (sceneId === 'RESET_GAME') {
                window.fbUpdate(playerRef, { 
                    isFinished: true,
                    'timeTracking/endTime': window.getServerTime(), // Ghi giờ kết thúc chuẩn
                    'liveStatus/currentScene': 'Đã hoàn thành'
                });
                window.trackAction("Hoàn thành vòng chơi");
                localStorage.clear();
            } else {
                window.fbUpdate(playerRef, { 
                    'liveStatus/currentScene': sceneId,
                    gameStats: window.GameStats || { redoCount: 0, minigameWins: 0, minigameTotal: 0 }
                });
            }
        }
        if(originalLoadScene) originalLoadScene(sceneId);
    };

    document.addEventListener('click', function(e) {
        const choiceBtn = e.target.closest('#choices-box button, #result-choices-box button');
        if (choiceBtn && window.TestData && window.TestData.id) {
            let text = choiceBtn.innerText.replace(/[\n\r]/g, ' ').trim(); 
            window.trackAction(`Chọn: "${text}"`);
        }
        const mgStartBtn = e.target.closest('#btn-start-minigame');
        if (mgStartBtn && window.TestData && window.TestData.id) {
            window.trackAction(`Bắt đầu Minigame`);
        }
    });
});

// ==========================================
// 4. MÃ PIN ADMIN (ĐÃ MÃ HÓA)
// ==========================================
window.openAdminPin = function() {
    document.getElementById('admin-pin-modal').classList.remove('hidden');
    document.getElementById('admin-pin-modal').classList.add('flex');
    document.getElementById('admin-pin-input').value = '';
    document.getElementById('admin-pin-input').focus();
};

window.closeAdminPin = function() {
    document.getElementById('admin-pin-modal').classList.add('hidden');
    document.getElementById('admin-pin-modal').classList.remove('flex');
};

window.checkAdminPin = function() {
    const pin = document.getElementById('admin-pin-input').value;
    const encodedInput = btoa(pin + "_gockhuat");
    
    if(encodedInput === 'ODg4ODg4X2dvY2todWF0') { 
        sessionStorage.setItem('ADMIN_AUTH', 'verified');
        window.location.href = 'admin.html';
    } else {
        alert('⚠️ Mã PIN không chính xác!');
    }
};

// ==========================================
// 5. BẢO VỆ TRẢI NGHIỆM DI ĐỘNG (FULLSCREEN & CHỐNG THOÁT)
// ==========================================
window.lockStudentScreen = function() {
    // 1. Ép trình duyệt vào chế độ Toàn màn hình (Nếu thiết bị hỗ trợ)
    const elem = document.documentElement;
    try {
        if (elem.requestFullscreen) {
            elem.requestFullscreen().catch(err => console.log("Bỏ qua lỗi Fullscreen: ", err));
        } else if (elem.webkitRequestFullscreen) { /* Safari */
            elem.webkitRequestFullscreen();
        } else if (elem.msRequestFullscreen) { /* IE11 */
            elem.msRequestFullscreen();
        }
    } catch (e) {
        console.warn("Thiết bị không hỗ trợ Fullscreen API");
    }

    // 2. Bật khiên cảnh báo nếu học sinh lỡ tay bấm F5 hoặc Tắt tab
    window.addEventListener('beforeunload', function (e) {
        // Chỉ chặn khi đang chơi (chưa hoàn thành)
        if (window.TestData && window.TestData.id && window.TestData.currentScene !== 'Đã hoàn thành') {
            e.preventDefault();
            e.returnValue = 'Bạn đang làm dở Minigame! Tiến trình chưa lưu có thể bị mất nếu bạn rời đi.';
        }
    });
};