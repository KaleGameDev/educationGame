// ==========================================
// ADMIN DASHBOARD ENGINE - V20 MASTER BROADCAST EDITION
// URL Room Persistence | Auto Zombie-Room Reaper | Responsive Broadcast Phone UI
// ==========================================

document.addEventListener('DOMContentLoaded', () => {
    setTimeout(initAdminSystem, 250);
    startSmoothInterpolationLoop();
    preloadGameAssets();
});

let allStudentsData = {};
let pinnedPlayers = [];
let currentRoomCode = '';
let unsubscribeListener = null;
let currentFilter = 'ALL';
let timeOffset = 0;
let isRecordMode = false;
let isAutoPinEnabled = false;
let isDemoMode = false;
let demoIntervalId = null;
let inspectedPlayerId = null;

let previousPlayerState = {};
let activeTransitions = {};
let mgSimState = {};

function cleanText(str) {
    if (!str) return '';
    return String(str)
        .replace(/[\u{1F300}-\u{1F9FF}\u{2600}-\u{26FF}\u{2700}-\u{27BF}\u{2190}-\u{21FF}\u{2B50}\u{2728}]/gu, '')
        .replace(/\s+/g, ' ')
        .trim();
}

function isPlayerOffline(p) {
    if (!p) return false;
    const sceneId = p.liveStatus?.currentScene || p.currentScene || '';
    if (p.liveStatus?.isOnline === false) return true;
    return sceneId.includes('Gián đoạn') || sceneId.includes('Mất mạng');
}

// Tính toán ngay lập tức trạng thái giây ở góc dưới máy (Không bao giờ hiện chữ "ĐANG ĐỒNG BỘ..." gây nháy)
function getImmediateIdleHTML(p, now) {
    if (!p) return `<span class="text-slate-500">---</span>`;
    if (isPlayerOffline(p)) return `<span class="text-rose-500 font-bold">MẤT TÍN HIỆU</span>`;
    if (p.isFinished) return `<span class="text-emerald-400 font-bold">ĐÃ HOÀN TẤT</span>`;
    const mg = p.liveStatus?.minigameData;
    if (mg && mg.active && mg.status === 'playing') {
        return `<span class="text-amber-400 font-bold">ĐANG CHƠI MINIGAME</span>`;
    }
    let lastTime = p.liveStatus?.lastClickedAt || p.timeTracking?.startTime || now;
    if (p.actionLogs) {
        const logs = Object.values(p.actionLogs).sort((a, b) => b.timestamp - a.timestamp);
        if (logs.length > 0 && logs[0].timestamp > lastTime) lastTime = logs[0].timestamp;
    }
    const idleSec = Math.max(0, Math.floor((now - lastTime) / 1000));
    if (idleSec < 6) return `<span class="text-emerald-400 font-bold">ĐANG THAO TÁC (${idleSec}S)</span>`;
    if (idleSec < 15) return `<span class="text-amber-400 font-bold">ĐANG SUY NGHĨ: ${idleSec}S</span>`;
    return `<span class="text-rose-400 font-bold">ĐẮN ĐO: ${idleSec}S</span>`;
}

// ==========================================
// 1. QUẢN LÝ LỊCH SỬ PHÒNG & TỰ ĐỘNG DỌN PHÒNG QUÁ HẠN TRÊN FIREBASE
// ==========================================
function getRoomHistory() {
    try {
        return JSON.parse(localStorage.getItem('ADMIN_ROOM_HISTORY') || '[]');
    } catch (e) {
        return [];
    }
}

function saveRoomToHistory(code) {
    if (!code || !/^[0-9]{5}$/.test(code)) return;
    let list = getRoomHistory().filter(item => item.code !== code);
    list.unshift({ code: code, createdAt: Date.now() + timeOffset });
    localStorage.setItem('ADMIN_ROOM_HISTORY', JSON.stringify(list.slice(0, 15)));
}

function removeRoomFromHistory(code) {
    let list = getRoomHistory().filter(item => item.code !== code);
    localStorage.setItem('ADMIN_ROOM_HISTORY', JSON.stringify(list));
}

function savePinnedToStorage() {
    if (!currentRoomCode || isDemoMode) return;
    try {
        localStorage.setItem(`ADMIN_PINNED_${currentRoomCode}`, JSON.stringify(pinnedPlayers));
    } catch (e) {}
}

function loadPinnedFromStorage(code) {
    try {
        const arr = JSON.parse(localStorage.getItem(`ADMIN_PINNED_${code}`) || '[]');
        return Array.isArray(arr) ? arr.slice(0, 4) : [];
    } catch (e) {
        return [];
    }
}

// Tự động kiểm tra và xóa các phòng cũ quá 3 giờ do máy này từng tạo trên Firebase
function autoCleanExpiredRooms() {
    if (!window.db || !window.fbRef) return;
    const history = getRoomHistory();
    const now = Date.now() + timeOffset;
    const THREE_HOURS = 3 * 60 * 60 * 1000;

    history.forEach(item => {
        if (item.code === currentRoomCode) return;
        const rRef = window.fbRef(window.db, `sessions/${item.code}`);
        window.fbGet(rRef).then(snap => {
            if (snap.exists()) {
                const age = now - (snap.val().createdAt || item.createdAt || now);
                if (age > THREE_HOURS || snap.val().status === 'closed') {
                    window.fbUpdate(rRef, { status: 'closed' }).then(() => {
                        setTimeout(() => window.fbRemove(rRef), 1000);
                    });
                    removeRoomFromHistory(item.code);
                }
            } else {
                removeRoomFromHistory(item.code);
            }
        }).catch(() => {});
    });
}

window.openRoomHistoryModal = function() {
    const modal = document.getElementById('room-history-modal');
    modal.classList.remove('hidden');
    modal.classList.add('flex');
    renderRoomHistoryModal();
};

window.closeRoomHistoryModal = function() {
    const modal = document.getElementById('room-history-modal');
    modal.classList.add('hidden');
    modal.classList.remove('flex');
};

function renderRoomHistoryModal() {
    const body = document.getElementById('room-history-body');
    const history = getRoomHistory();
    if (history.length === 0) {
        body.innerHTML = `<div class="text-center py-8 text-slate-500 font-mono">Chưa có lịch sử phòng nào được lưu trên trình duyệt này.</div>`;
        return;
    }

    body.innerHTML = history.map(item => {
        const isCurrent = item.code === currentRoomCode && !isDemoMode;
        const timeStr = new Date(item.createdAt).toLocaleString('vi-VN');
        return `
            <div class="p-3 rounded-xl bg-slate-950 border ${isCurrent ? 'border-amber-500/60' : 'border-slate-800'} flex items-center justify-between gap-3">
                <div>
                    <div class="flex items-center gap-2">
                        <span class="text-base font-black font-mono ${isCurrent ? 'text-amber-400' : 'text-white'} tracking-widest">${item.code}</span>
                        ${isCurrent ? '<span class="px-2 py-0.5 text-[9px] font-mono bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 rounded uppercase">Đang mở</span>' : ''}
                    </div>
                    <div class="text-[10px] text-slate-500 font-mono mt-0.5">Khởi tạo: ${timeStr}</div>
                </div>
                <div class="flex items-center gap-2">
                    ${!isCurrent ? `<button onclick="switchToHistoryRoom('${item.code}')" class="px-3 py-1.5 bg-sky-600 hover:bg-sky-500 text-white rounded-lg font-bold text-[11px] transition-colors">Vào Lại Phòng</button>` : ''}
                    <button onclick="forceDeleteSpecificRoom('${item.code}')" class="px-2.5 py-1.5 bg-rose-950 hover:bg-rose-600 text-rose-400 hover:text-white rounded-lg font-bold text-[11px] border border-rose-800 transition-colors">Xóa</button>
                </div>
            </div>`;
    }).join('');
}

window.switchToHistoryRoom = function(code) {
    const roomRef = window.fbRef(window.db, `sessions/${code}`);
    window.fbGet(roomRef).then(snap => {
        if (snap.exists() && snap.val().status === 'active') {
            if (isDemoMode) window.toggleDemoMode();
            currentRoomCode = code;
            syncRoomCodeToURLAndStorage(code);
            pinnedPlayers = loadPinnedFromStorage(code);
            showRoomBadge(code);
            listenToRoom(code);
            closeRoomHistoryModal();
        } else {
            alert(`Phòng [${code}] đã đóng hoặc không còn tồn tại trên Firebase.`);
            removeRoomFromHistory(code);
            renderRoomHistoryModal();
        }
    });
};

window.forceDeleteSpecificRoom = function(code) {
    if (!confirm(`Xác nhận đóng và xóa vĩnh viễn phòng [${code}] khỏi Firebase?`)) return;
    const rRef = window.fbRef(window.db, `sessions/${code}`);
    window.fbUpdate(rRef, { status: 'closed' }).then(() => {
        setTimeout(() => window.fbRemove(rRef), 800);
    });
    removeRoomFromHistory(code);
    if (code === currentRoomCode) {
        currentRoomCode = '';
        allStudentsData = {};
        pinnedPlayers = [];
        syncRoomCodeToURLAndStorage('');
        document.getElementById('room-code-display').classList.add('hidden');
        document.getElementById('room-code-display').classList.remove('flex');
        updateTelemetryHUD();
        renderEmptyState();
    }
    renderRoomHistoryModal();
};

window.cleanupAllHistoryRooms = function() {
    const history = getRoomHistory();
    if (history.length === 0) return;
    if (!confirm("Xác nhận đóng và dọn sạch toàn bộ các phòng cũ (trừ phòng đang mở hiện tại) khỏi Firebase?")) return;
    history.forEach(item => {
        if (item.code !== currentRoomCode) {
            const rRef = window.fbRef(window.db, `sessions/${item.code}`);
            window.fbUpdate(rRef, { status: 'closed' }).then(() => setTimeout(() => window.fbRemove(rRef), 800));
            removeRoomFromHistory(item.code);
        }
    });
    renderRoomHistoryModal();
};

function syncRoomCodeToURLAndStorage(code) {
    try {
        if (code) {
            localStorage.setItem('ADMIN_OWNED_ROOM', code);
            saveRoomToHistory(code);
            const url = new URL(window.location.href);
            url.searchParams.set('room', code);
            window.history.replaceState({}, '', url.toString());
        } else {
            localStorage.removeItem('ADMIN_OWNED_ROOM');
            const url = new URL(window.location.href);
            url.searchParams.delete('room');
            window.history.replaceState({}, '', url.toString());
        }
    } catch (e) {}
}

// ==========================================
// 2. TẢI NGẦM TÀI NGUYÊN HÌNH ẢNH
// ==========================================
function preloadGameAssets() {
    const assets = [
        'assets/characters/Char_1.webp', 'assets/characters/Char_2.webp',
        'assets/characters/Char_3.webp', 'assets/characters/Char_4.webp',
        'assets/scenes/Char_1_Scene_1.webp', 'assets/scenes/Char_1_Scene_2.webp',
        'assets/scenes/Char_1_Scene_3.webp', 'assets/scenes/Char_1_Scene_4.webp',
        'assets/scenes/Char_1_Scene_5.webp', 'assets/scenes/Char_1_Scene_6.webp',
        'assets/scenes/Char_1_Scene_7.webp', 'assets/scenes/Char_1_Scene_8.webp',
        'assets/scenes/Char_1_Scene_9.webp', 'assets/scenes/Char_1_Scene_10.webp',
        'assets/scenes/Char_1_Scene_11.webp', 'assets/scenes/Char_1_Scene_12.webp',
        'assets/scenes/Char_1_Scene_13.webp', 'assets/scenes/Char_1_Scene_14.webp'
    ];
    let loaded = 0;
    const statusEl = document.getElementById('preload-status');

    assets.forEach((src, idx) => {
        setTimeout(() => {
            const img = new Image();
            img.onload = img.onerror = () => {
                loaded++;
                if (statusEl) {
                    if (loaded < assets.length) {
                        statusEl.textContent = `Đồng bộ đồ họa: ${Math.round((loaded / assets.length) * 100)}%`;
                    } else {
                        statusEl.textContent = `Bộ nhớ đệm hình ảnh: Sẵn sàng 100%`;
                        setTimeout(() => { if (statusEl) statusEl.classList.add('opacity-0'); }, 3000);
                    }
                }
            };
            img.src = src;
        }, idx * 100);
    });
}

// ==========================================
// 3. VÒNG LẶP NỘI SUY CHUYỂN ĐỘNG 60FPS CHO MINIGAME
// ==========================================
function startSmoothInterpolationLoop() {
    let lastTick = performance.now();

    function step(now) {
        const dt = Math.min(0.1, (now - lastTick) / 1000);
        lastTick = now;

        pinnedPlayers.forEach(id => {
            const p = allStudentsData[id];
            const mg = p?.liveStatus?.minigameData;
            const sim = mgSimState[id];
            if (!mg || !mg.active || mg.status !== 'playing' || !sim) return;

            const gType = mg.type || 'taptap';

            if (gType === 'timing') {
                sim.cursorPos += (sim.cursorDir || 1) * 72 * dt;
                if (sim.cursorPos >= 95) { sim.cursorPos = 95; sim.cursorDir = -1; }
                if (sim.cursorPos <= 0) { sim.cursorPos = 0; sim.cursorDir = 1; }
                const cursorEl = document.getElementById(`mg-cursor-${id}`);
                const statusEl = document.getElementById(`mg-zone-state-${id}`);
                if (cursorEl) cursorEl.style.left = `${sim.cursorPos}%`;
                if (statusEl) {
                    const inZone = sim.cursorPos >= 41 && sim.cursorPos <= 59;
                    statusEl.textContent = inZone ? 'TRONG VÙNG MỤC TIÊU' : 'ĐANG DI CHUYỂN';
                    statusEl.className = `text-[10px] font-mono font-bold ${inZone ? 'text-emerald-400' : 'text-slate-400'}`;
                }
            } else if (gType === 'balance') {
                sim.cursorPos = Math.max(8, sim.cursorPos - 15 * dt);
                const needleEl = document.getElementById(`mg-cursor-${id}`);
                if (needleEl) {
                    needleEl.style.left = `${sim.cursorPos}%`;
                    needleEl.style.backgroundColor = sim.cursorPos < 35 ? '#f43f5e' : '#ffffff';
                }
            } else if (gType === 'hold' || gType === 'stealth') {
                const rate = gType === 'stealth' ? (sim.isAlert ? -65 : 35) : 28;
                if (sim.isHolding) sim.progress = Math.max(0, Math.min(100, sim.progress + rate * dt));
                else if (gType === 'hold') sim.progress = Math.max(0, sim.progress - 45 * dt);

                const barEl = document.getElementById(`mg-bar-${id}`);
                const pctEl = document.getElementById(`mg-pct-${id}`);
                if (barEl) barEl.style.width = `${sim.progress}%`;
                if (pctEl) pctEl.textContent = `${Math.round(sim.progress)}%`;
            } else if (gType === 'taptap') {
                sim.progress = Math.max(0, sim.progress - 6 * dt);
                const barEl = document.getElementById(`mg-bar-${id}`);
                if (barEl) barEl.style.width = `${sim.progress}%`;
            }
        });

        requestAnimationFrame(step);
    }

    requestAnimationFrame(step);
}

// ==========================================
// 4. BỘ ĐẾM THỜI GIAN THỰC & TỰ ĐỘNG GHIM MỖI GIÂY
// ==========================================
setInterval(() => {
    const now = Date.now() + timeOffset;

    const clockEl = document.getElementById('broadcast-clock');
    if (clockEl) clockEl.textContent = new Date(now).toLocaleTimeString('vi-VN', { hour12: false });

    if (!currentRoomCode && !isDemoMode) return;

    if (isAutoPinEnabled && !isDemoMode) runSmartAutoPin(now);

    pinnedPlayers.forEach(id => {
        const p = allStudentsData[id];
        if (!p) return;

        const mg = p.liveStatus?.minigameData;
        const mgTimerEl = document.getElementById(`mg-live-timer-${id}`);
        if (mgTimerEl && mg && mg.active && mg.status === 'playing') {
            if (mg.startTime && !isDemoMode) {
                const elapsed = (now - mg.startTime) / 1000;
                const remain = Math.max(0, Math.ceil((mg.duration || 6) - elapsed));
                mgTimerEl.textContent = `${remain}S`;
            } else if (mg.remainText) {
                mgTimerEl.textContent = String(mg.remainText).toUpperCase();
            }
        }

        const timerEl = document.getElementById(`idle-timer-${id}`);
        if (timerEl) {
            timerEl.innerHTML = getImmediateIdleHTML(p, now);
        }
    });
}, 1000);

window.toggleAutoPin = function() {
    isAutoPinEnabled = !isAutoPinEnabled;
    const btn = document.getElementById('btn-auto-pin');
    const dot = document.getElementById('auto-pin-dot');
    if (isAutoPinEnabled) {
        btn.className = "px-3 py-2 bg-amber-500/20 text-amber-300 rounded-lg text-xs font-bold transition-all border border-amber-500/60 flex items-center gap-2";
        dot.className = "w-2 h-2 rounded-full bg-amber-400 animate-ping";
        runSmartAutoPin(Date.now() + timeOffset);
    } else {
        btn.className = "px-3 py-2 bg-slate-900 hover:bg-slate-800 text-slate-300 rounded-lg text-xs font-bold transition-all border border-slate-700 flex items-center gap-2";
        dot.className = "w-2 h-2 rounded-full bg-slate-500";
    }
};

function runSmartAutoPin(now) {
    const activeIds = Object.keys(allStudentsData).filter(id => {
        const p = allStudentsData[id];
        return p && !p.isFinished && !isPlayerOffline(p) && p.role;
    });
    if (activeIds.length === 0) return;

    activeIds.sort((a, b) => {
        const pA = allStudentsData[a], pB = allStudentsData[b];
        const mgA = pA.liveStatus?.minigameData?.active ? 1000 : 0;
        const mgB = pB.liveStatus?.minigameData?.active ? 1000 : 0;
        const idleA = Math.floor((now - (pA.liveStatus?.lastClickedAt || now)) / 1000);
        const idleB = Math.floor((now - (pB.liveStatus?.lastClickedAt || now)) / 1000);
        return (mgB + idleB) - (mgA + idleA);
    });

    let changed = false;
    for (const candidateId of activeIds) {
        if (pinnedPlayers.length >= 4) break;
        if (!pinnedPlayers.includes(candidateId)) {
            pinnedPlayers.push(candidateId);
            if (currentRoomCode && !isDemoMode && window.db) {
                const pRef = window.fbRef(window.db, `sessions/${currentRoomCode}/players/${candidateId}/liveStatus`);
                window.fbUpdate(pRef, { isPinned: true });
            }
            changed = true;
        }
    }
    if (changed) {
        savePinnedToStorage();
        updateTelemetryHUD();
        renderDashboard();
    }
}

// ==========================================
// 5. CHẾ ĐỘ DEMO 4 MÁY ẢO TỰ ĐỘNG
// ==========================================
const DEMO_SCENARIOS = {
    'demo_mai': {
        name: 'Nguyễn Ngọc Mai - 9A1',
        role: 'mai',
        scenes: [
            {
                id: 'mai_1_2',
                header: 'MAI (Cảnh 1.2: Kẻ Nặc Danh Lên Tiếng)',
                dialog: 'Hùng cay cú vì bị quê, liền lập một nick ẩn danh gửi bài lên trang Confession của trường vu khống Mai cướp bồ.',
                options: [
                    'Dùng nick thật bình luận cãi tay đôi dưới bài Confession để giải thích.',
                    'Bấm nút Report bài viết hàng loạt, hy vọng Facebook tự động xóa bài.',
                    'Cùng Bố Mẹ mang bằng chứng lên gặp thẳng Hiệu trưởng và Admin trang.'
                ],
                pickIndex: 2,
                isFail: false,
                minigame: {
                    type: 'cleaner',
                    title: 'DẬP TẮT TIN ĐỒN ĐỘC HẠI',
                    description: 'Chạm phản xạ thật nhanh vào các tin nhắn bôi nhọ để thu thập bằng chứng và khóa luồng phát tán.',
                    duration: 6,
                    target: 7
                },
                result: {
                    title: 'THÀNH CÔNG - BẢN LĨNH & LOGIC',
                    isSuccess: true,
                    img: 'assets/scenes/Char_1_Scene_2.webp',
                    desc: 'Dữ liệu thời gian trên Google Form trùng khớp hoàn toàn với camera hành lang. Hùng bị đình chỉ học tập, trang Confession độc hại bị đóng.'
                }
            },
            {
                id: 'mai_2_2',
                header: 'MAI (Cảnh 2.2: Kế Hoạch Hoàn Hảo)',
                dialog: 'Được Tổng đài 111 tư vấn, Mai báo bí mật cho thầy Giám thị và hẹn Vy ra khu vực có góc quay camera để bắt quả tang.',
                options: [
                    'Bỏ chạy thục mạng khi Vy vừa chạm tay vào phong bì.',
                    'Hét to lên để gây sự chú ý của bảo vệ.',
                    'Nói rõ ràng số tiền bị ép nộp để thiết bị ghi âm thu trọn vẹn bằng chứng.'
                ],
                pickIndex: 2,
                isFail: false,
                minigame: {
                    type: 'timing',
                    title: 'CHỚP THỜI CƠ GHI ÂM',
                    description: 'Canh chuẩn xác thời điểm con trỏ đi qua vùng mục tiêu để khóa bằng chứng ghi âm.',
                    duration: 6,
                    target: 3
                },
                result: {
                    title: 'THÀNH CÔNG - HẠ ĐO VÁN BẰNG CHỨNG',
                    isSuccess: true,
                    img: 'assets/scenes/Char_1_Scene_4.webp',
                    desc: 'Đoạn ghi âm kết hợp cùng video của thầy Giám thị khiến kẻ trấn lột hết đường chối cãi.'
                }
            }
        ]
    },
    'demo_minh': {
        name: 'Trần Hoàng Minh - 9A2',
        role: 'minh',
        scenes: [
            {
                id: 'minh_1_1',
                header: 'MINH (Cảnh 1.1: Áp Lực Sân Bóng)',
                dialog: 'Nhóm đàn anh khối trên cố tình đá bóng thẳng vào người Minh rồi vây quanh ép nộp tiền nước mỗi tuần.',
                options: [
                    'Lao vào đánh trả ngay lập tức dù đối phương đông hơn.',
                    'Im lặng rút hết tiền ăn sáng đưa cho chúng để được yên thân.',
                    'Giữ khoảng cách an toàn, quan sát hướng thoát về phía phòng Hội đồng.'
                ],
                pickIndex: 0,
                isFail: true,
                minigame: {
                    type: 'balance',
                    title: 'KIỂM SOÁT CƠN GIẬN',
                    description: 'Tác động lực liên tục để giữ kim tâm lý nằm trong vùng Lý Trí, không để cơn nóng giận chi phối.',
                    duration: 6,
                    target: 'AN TOÀN'
                },
                result: {
                    title: 'THẤT BẠI - MẮC BẪY KHIÊU KHÍCH',
                    isSuccess: false,
                    img: 'assets/scenes/Char_1_Scene_5.webp',
                    desc: 'Đánh trả tự phát khi bị bao vây vừa gây nguy hiểm bản thân, vừa khiến Minh bị quy kết vi phạm kỷ luật đánh nhau.'
                }
            }
        ]
    },
    'demo_linh': {
        name: 'Lê Phương Linh - 9A1',
        role: 'linh',
        scenes: [
            {
                id: 'linh_2_1',
                header: 'LINH (Cảnh 2.1: Chứng Kiến Trong Nhóm Kín)',
                dialog: 'Cả nhóm bạn thân đang ép Linh phải chia sẻ bức ảnh chế giễu một bạn nữ lớp bên cạnh để chứng minh sự trung thành.',
                options: [
                    'Bấm chia sẻ đại cho xong chuyện để không bị nhóm bạn cô lập.',
                    'Âm thầm lưu toàn bộ lịch sử tin nhắn và từ chối tham gia bạo lực mạng.',
                    'Chửi thẳng mặt cả nhóm ngay trong khung chat.'
                ],
                pickIndex: 1,
                isFail: false,
                minigame: {
                    type: 'hold',
                    title: 'VỮNG VÀNG TRƯỚC ÁP LỰC ĐÁM ĐÔNG',
                    description: 'Nhấn giữ liên tục để tích lũy đủ 100% bản lĩnh tâm lý, vượt qua sức ép đồng trang lứa.',
                    duration: 6,
                    target: '100%'
                },
                result: {
                    title: 'THÀNH CÔNG - NGƯỜI CHỨNG KIẾN TỈNH TÁO',
                    isSuccess: true,
                    img: 'assets/scenes/Char_1_Scene_8.webp',
                    desc: 'Không hùa theo đám đông độc hại và kịp thời lưu giữ bằng chứng giúp bảo vệ nạn nhân một cách an toàn.'
                }
            }
        ]
    },
    'demo_nam': {
        name: 'Phạm Quốc Nam - 9A3',
        role: 'nam',
        scenes: [
            {
                id: 'nam_3_1',
                header: 'NAM (Cảnh 3.1: Can Thiệp Đúng Cách)',
                dialog: 'Nam phát hiện một bạn học sinh lớp dưới đang bị chặn đánh ở khu vực cầu thang khuất sau dãy nhà B.',
                options: [
                    'Lặng lẽ quay lưng bỏ đi vì sợ liên lụy đến bản thân.',
                    'Một mình xông vào ẩu đả với nhóm côn đồ.',
                    'Đánh động từ xa và lập tức chạy tới gọi Bảo vệ cùng Giáo viên trực ban.'
                ],
                pickIndex: 2,
                isFail: false,
                minigame: {
                    type: 'taptap',
                    title: 'TỐC ĐỘ CỨU VIỆN KHẨN CẤP',
                    description: 'Nhấp liên tục tốc độ cao để nhanh chóng đưa lực lượng Bảo vệ và Giám thị tới hiện trường.',
                    duration: 6,
                    target: 30
                },
                result: {
                    title: 'THÀNH CÔNG - CAN THIỆP KỊP THỜI',
                    isSuccess: true,
                    img: 'assets/scenes/Char_1_Scene_6.webp',
                    desc: 'Sự quyết đoán và phối hợp với người lớn có thẩm quyền đã ngăn chặn vụ hành hung mà không đẩy bản thân vào nguy hiểm.'
                }
            }
        ]
    }
};

window.toggleDemoMode = function() {
    isDemoMode = !isDemoMode;
    const btn = document.getElementById('btn-demo-mode');
    const txt = document.getElementById('demo-mode-text');
    const dot = document.getElementById('demo-mode-dot');

    if (isDemoMode) {
        if (unsubscribeListener) { unsubscribeListener(); unsubscribeListener = null; }
        btn.className = "px-3 py-2 bg-amber-500 text-slate-950 rounded-lg text-xs font-black transition-all border border-amber-300 flex items-center gap-2 shadow-[0_0_20px_rgba(245,158,11,0.5)]";
        txt.textContent = "Dừng Demo 4 Máy";
        dot.className = "w-2 h-2 rounded-full bg-slate-950 animate-ping";
        startDemoSimulation();
    } else {
        if (demoIntervalId) { clearInterval(demoIntervalId); demoIntervalId = null; }
        btn.className = "px-3 py-2 bg-amber-950/50 hover:bg-amber-600 text-amber-300 hover:text-slate-950 rounded-lg text-xs font-bold transition-all border border-amber-700/60 flex items-center gap-2";
        txt.textContent = "Chạy Demo 4 Máy";
        dot.className = "w-2 h-2 rounded-full bg-amber-400";
        allStudentsData = {};
        pinnedPlayers = [];
        previousPlayerState = {};
        activeTransitions = {};
        mgSimState = {};
        document.getElementById('pinned-players-container').innerHTML = '';
        if (currentRoomCode) {
            pinnedPlayers = loadPinnedFromStorage(currentRoomCode);
            showRoomBadge(currentRoomCode);
            listenToRoom(currentRoomCode);
        } else {
            updateTelemetryHUD();
            renderEmptyState();
        }
    }
};

function startDemoSimulation() {
    const now = Date.now() + timeOffset;
    allStudentsData = {};
    pinnedPlayers = ['demo_mai', 'demo_minh', 'demo_linh', 'demo_nam'];
    previousPlayerState = {};
    activeTransitions = {};
    mgSimState = {};

    const botPhase = {};
    pinnedPlayers.forEach((id, idx) => {
        const cfg = DEMO_SCENARIOS[id];
        const sc = cfg.scenes[0];
        const spriteNum = cfg.role === 'mai' ? 1 : (cfg.role === 'linh' ? 2 : (cfg.role === 'nam' ? 3 : 4));
        botPhase[id] = { sceneIdx: 0, step: idx % 2 === 0 ? 'dialogue' : 'result', tick: idx };

        allStudentsData[id] = {
            name: cfg.name,
            role: cfg.role,
            currentScene: sc.id,
            isFinished: false,
            timeTracking: { startTime: now - 120000 },
            gameStats: { currentLogicScore: 94 - idx * 5, redoCount: idx % 2, minigameWins: 2, minigameTotal: 2 },
            actionLogs: {
                log1: { timestamp: now - 15000 - idx * 2000, action: `Chọn nhân vật: ${cfg.role.toUpperCase()}`, duration: 2.1 },
                log2: { timestamp: now - 3000 - idx * 2000, action: `Chọn: "${sc.options[sc.pickIndex]}"`, duration: 4.5 }
            },
            liveStatus: {
                isOnline: true,
                isPinned: true,
                currentScene: sc.id,
                charName: sc.header,
                charSprite: `assets/characters/Char_${spriteNum}.webp`,
                currentDialog: sc.dialog,
                currentOptions: sc.options,
                lastClickedOption: '',
                lastClickedAt: now - idx * 3000,
                resultData: idx % 2 !== 0 ? {
                    title: sc.result.title,
                    isSuccess: sc.result.isSuccess,
                    resultColor: sc.result.isSuccess ? 'text-emerald-400' : 'text-rose-400',
                    desc: sc.result.desc,
                    img: sc.result.img,
                    choices: [sc.result.isSuccess ? 'Chuyển sang Tình huống tiếp theo' : 'Suy ngẫm và Thử lại']
                } : null,
                minigameData: null
            }
        };
    });

    showRoomBadge(currentRoomCode || 'DEMO8');
    updateTelemetryHUD();
    renderDashboard();

    demoIntervalId = setInterval(() => {
        if (!isDemoMode) return;
        const tNow = Date.now() + timeOffset;

        pinnedPlayers.forEach(id => {
            const p = allStudentsData[id];
            const cfg = DEMO_SCENARIOS[id];
            const st = botPhase[id];
            if (!p || !cfg || !st) return;

            const sc = cfg.scenes[st.sceneIdx % cfg.scenes.length];
            st.tick++;

            if (st.step === 'dialogue' && st.tick >= 4) {
                st.step = 'clicking';
                st.tick = 0;
                const pickedText = sc.options[sc.pickIndex];
                p.liveStatus.lastClickedOption = pickedText;
                p.liveStatus.lastClickedAt = tNow;
                p.actionLogs['log_' + tNow] = { timestamp: tNow, action: `Chọn: "${pickedText}"`, duration: 3.8 };

                activeTransitions[id] = {
                    oldLiveStatus: { ...p.liveStatus },
                    oldSceneId: sc.id,
                    clickedOption: pickedText,
                    isFail: sc.isFail
                };
            } else if (st.step === 'clicking' && st.tick >= 2) {
                delete activeTransitions[id];
                st.step = 'minigame';
                st.tick = 0;
                const mg = sc.minigame;
                p.liveStatus.minigameData = {
                    active: true,
                    status: 'playing',
                    type: mg.type,
                    title: mg.title,
                    description: mg.description,
                    duration: mg.duration,
                    remainText: `${mg.duration}S`,
                    target: mg.target,
                    score: 1,
                    progress: 25,
                    cursorPos: 45,
                    cursorDir: 1,
                    isHolding: true,
                    isAlert: false,
                    gridItems: [
                        { text: 'TIN ĐỒN ÁC Ý #1', isDanger: true, isClicked: true },
                        { text: 'BÌNH LUẬN VU KHỐNG', isDanger: true, isClicked: false },
                        { text: 'TIN NHẮN ĐE DỌA', isDanger: true, isClicked: false }
                    ],
                    lastTapAt: tNow
                };
                mgSimState[id] = { progress: 25, cursorPos: 45, cursorDir: 1, isHolding: true, isAlert: false };
            } else if (st.step === 'minigame') {
                const mg = p.liveStatus.minigameData;
                if (mg) {
                    const rem = Math.max(1, 6 - st.tick);
                    mg.remainText = `${rem}S`;
                    mg.score = Math.min(typeof mg.target === 'number' ? mg.target : 5, st.tick + 1);
                    mg.progress = Math.min(100, 22 + st.tick * 16);
                    mg.cursorPos = 35 + ((st.tick * 17) % 45);
                    mg.isHolding = st.tick % 3 !== 0;
                    mg.lastTapAt = tNow;
                    if (mg.gridItems && mg.gridItems[st.tick % mg.gridItems.length]) {
                        mg.gridItems[st.tick % mg.gridItems.length].isClicked = (st.tick % 2 === 0);
                    }
                    if (mgSimState[id]) {
                        mgSimState[id].progress = mg.progress;
                        mgSimState[id].cursorPos = mg.cursorPos;
                        mgSimState[id].isHolding = mg.isHolding;
                    }
                }
                if (st.tick >= 5) {
                    st.step = 'result';
                    st.tick = 0;
                    delete mgSimState[id];
                    p.liveStatus.minigameData = null;
                    p.liveStatus.lastClickedAt = tNow;
                    p.liveStatus.resultData = {
                        title: sc.result.title,
                        isSuccess: sc.result.isSuccess,
                        resultColor: sc.result.isSuccess ? 'text-emerald-400' : 'text-rose-400',
                        desc: sc.result.desc,
                        img: sc.result.img,
                        choices: [sc.result.isSuccess ? 'Chuyển sang Tình huống tiếp theo' : 'Suy ngẫm và Thử lại']
                    };
                    if (!sc.result.isSuccess) {
                        p.gameStats.redoCount += 1;
                        p.gameStats.currentLogicScore = Math.max(25, p.gameStats.currentLogicScore - 8);
                    } else {
                        p.gameStats.minigameWins += 1;
                        p.gameStats.minigameTotal += 1;
                        p.gameStats.currentLogicScore = Math.min(100, p.gameStats.currentLogicScore + 4);
                    }
                }
            } else if (st.step === 'result' && st.tick >= 4) {
                st.step = 'dialogue';
                st.tick = 0;
                st.sceneIdx = (st.sceneIdx + 1) % cfg.scenes.length;
                const nextSc = cfg.scenes[st.sceneIdx];
                p.currentScene = nextSc.id;
                p.liveStatus.currentScene = nextSc.id;
                p.liveStatus.charName = nextSc.header;
                p.liveStatus.currentDialog = nextSc.dialog;
                p.liveStatus.currentOptions = nextSc.options;
                p.liveStatus.lastClickedAt = tNow;
                p.liveStatus.resultData = null;
                p.liveStatus.minigameData = null;
            }
        });

        updateTelemetryHUD();
        renderDashboard();
        if (inspectedPlayerId && allStudentsData[inspectedPlayerId]) {
            renderInspectorContent(inspectedPlayerId);
        }
    }, 1000);
}

// ==========================================
// 6. CHẾ ĐỘ GHI HÌNH (BROADCAST FULLSCREEN)
// ==========================================
window.toggleRecordMode = function() {
    isRecordMode = !isRecordMode;
    const header = document.getElementById('admin-header');
    const tickerBar = document.getElementById('live-ticker-bar');
    const broadcastHeader = document.getElementById('broadcast-header');
    const mainArea = document.getElementById('dashboard-main');
    const allPlayersSection = document.getElementById('all-players-section');
    const pinnedSection = document.getElementById('pinned-section');
    const pinnedSectionHeader = document.getElementById('pinned-section-header');

    if (isRecordMode) {
        try { document.documentElement.requestFullscreen(); } catch (e) {}
        header.classList.add('hidden');
        tickerBar.classList.add('hidden');
        if (pinnedSectionHeader) pinnedSectionHeader.classList.add('hidden');
        broadcastHeader.classList.remove('hidden');
        broadcastHeader.classList.add('flex');
        if (allPlayersSection) allPlayersSection.classList.add('hidden');
        
        mainArea.classList.remove('p-3', 'sm:p-5', 'overflow-y-auto');
        mainArea.classList.add('px-4', 'py-3', 'overflow-hidden', 'items-center', 'justify-center');
        pinnedSection.className = "w-full h-full flex flex-col justify-center bg-transparent border-none p-0";
    } else {
        try { if (document.fullscreenElement) document.exitFullscreen(); } catch (e) {}
        header.classList.remove('hidden');
        tickerBar.classList.remove('hidden');
        if (pinnedSectionHeader) pinnedSectionHeader.classList.remove('hidden');
        broadcastHeader.classList.add('hidden');
        broadcastHeader.classList.remove('flex');
        if (allPlayersSection) allPlayersSection.classList.remove('hidden');
        
        mainArea.classList.add('p-3', 'sm:p-5', 'overflow-y-auto');
        mainArea.classList.remove('px-4', 'py-3', 'overflow-hidden', 'items-center', 'justify-center');
        pinnedSection.className = "bg-slate-900/50 backdrop-blur-md border border-slate-800 rounded-2xl p-4 sm:p-5 shrink-0 shadow-xl";
    }
    document.getElementById('pinned-players-container').innerHTML = '';
    renderDashboard();
};

// ==========================================
// 7. KHỞI TẠO PHÒNG & ĐỒNG BỘ URL CHỐNG MẤT MÃ PHÒNG KHI F5
// ==========================================
function initAdminSystem() {
    if (!window.db || !window.fbRef || !window.fbGet) { setTimeout(initAdminSystem, 150); return; }
    window.fbOnValue(window.fbRef(window.db, ".info/serverTimeOffset"), (snap) => { timeOffset = snap.val() || 0; });

    // Tự động dọn dẹp các phòng quá hạn (> 3 giờ) trong lịch sử máy này
    setTimeout(autoCleanExpiredRooms, 1500);

    // Ưu tiên 1: Lấy mã phòng từ URL (?room=12345) | Ưu tiên 2: Lấy từ localStorage
    const urlParams = new URLSearchParams(window.location.search);
    const urlRoom = urlParams.get('room');
    const savedRoomCode = (urlRoom && /^[0-9]{5}$/.test(urlRoom)) ? urlRoom : localStorage.getItem('ADMIN_OWNED_ROOM');

    if (savedRoomCode && /^[0-9]{5}$/.test(savedRoomCode)) {
        const roomRef = window.fbRef(window.db, `sessions/${savedRoomCode}`);
        window.fbGet(roomRef).then((snapshot) => {
            if (snapshot.exists() && snapshot.val().status === 'active') {
                currentRoomCode = savedRoomCode;
                syncRoomCodeToURLAndStorage(currentRoomCode);
                pinnedPlayers = loadPinnedFromStorage(currentRoomCode);
                showRoomBadge(currentRoomCode);
                listenToRoom(currentRoomCode);
            } else {
                syncRoomCodeToURLAndStorage('');
                renderEmptyState();
            }
        }).catch(() => renderEmptyState());
    } else {
        renderEmptyState();
    }
}

function showRoomBadge(code) {
    const badge = document.getElementById('room-code-display');
    badge.classList.remove('hidden');
    badge.classList.add('flex');
    document.getElementById('current-room-text').textContent = code;
    const bRoom = document.getElementById('broadcast-room');
    if (bRoom) bRoom.textContent = code;
}

window.createNewRoom = function() {
    if (isDemoMode) window.toggleDemoMode();
    if (currentRoomCode) {
        if (!confirm(`Phòng [${currentRoomCode}] đang hoạt động. Bạn có muốn đóng phòng hiện tại để tạo phòng mới không?`)) return;
        const oldCode = currentRoomCode;
        const oldRef = window.fbRef(window.db, `sessions/${oldCode}`);
        window.fbUpdate(oldRef, { status: 'closed' }).then(() => setTimeout(() => window.fbRemove(oldRef), 1200));
        removeRoomFromHistory(oldCode);
    }

    currentRoomCode = Math.floor(10000 + Math.random() * 90000).toString();
    syncRoomCodeToURLAndStorage(currentRoomCode);

    const roomRef = window.fbRef(window.db, `sessions/${currentRoomCode}`);
    window.fbSet(roomRef, { status: 'active', createdAt: Date.now() + timeOffset }).then(() => {
        pinnedPlayers = [];
        allStudentsData = {};
        savePinnedToStorage();
        showRoomBadge(currentRoomCode);
        listenToRoom(currentRoomCode);
    });
};

window.joinExistingRoom = function() {
    const code = prompt("Nhập Mã Phòng 5 chữ số cần kết nối giám sát:");
    if (!code) return;
    const cleanCode = code.trim();
    if (!/^[0-9]{5}$/.test(cleanCode)) {
        alert("Mã phòng phải gồm đúng 5 chữ số.");
        return;
    }
    const roomRef = window.fbRef(window.db, `sessions/${cleanCode}`);
    window.fbGet(roomRef).then((snap) => {
        if (snap.exists() && snap.val().status === 'active') {
            if (isDemoMode) window.toggleDemoMode();
            currentRoomCode = cleanCode;
            syncRoomCodeToURLAndStorage(currentRoomCode);
            pinnedPlayers = loadPinnedFromStorage(currentRoomCode);
            showRoomBadge(currentRoomCode);
            listenToRoom(currentRoomCode);
        } else {
            alert(`Không tìm thấy phòng [${cleanCode}] đang hoạt động.`);
        }
    }).catch(() => alert("Không thể kết nối tới mã phòng này."));
};

function listenToRoom(code) {
    if (unsubscribeListener) unsubscribeListener();
    const sessionRef = window.fbRef(window.db, `sessions/${code}/players`);
    unsubscribeListener = window.fbOnValue(sessionRef, (snapshot) => {
        if (isDemoMode) return;
        const data = snapshot.val();
        if (data) {
            for (const id in data) {
                const p = data[id];
                const newScene = p.liveStatus?.currentScene || p.currentScene || 'menu';
                const prev = previousPlayerState[id];
                const mg = p.liveStatus?.minigameData;

                // Tự động khôi phục các máy đã được đánh dấu isPinned trên Firebase (khi giáo viên F5)
                if (p.liveStatus?.isPinned && !pinnedPlayers.includes(id) && pinnedPlayers.length < 4) {
                    pinnedPlayers.push(id);
                    savePinnedToStorage();
                }

                if (mg && mg.active && mg.status === 'playing') {
                    mgSimState[id] = {
                        progress: mg.progress ?? 0,
                        cursorPos: mg.cursorPos ?? 50,
                        cursorDir: mg.cursorDir ?? 1,
                        isHolding: !!mg.isHolding,
                        isAlert: !!mg.isAlert
                    };
                } else {
                    delete mgSimState[id];
                }

                const isMGNow = !!(mg && mg.active);
                if (
                    !isMGNow &&
                    pinnedPlayers.includes(id) &&
                    prev && prev.sceneId &&
                    prev.sceneId !== 'menu' &&
                    prev.sceneId !== newScene &&
                    !isPlayerOffline(p) &&
                    !activeTransitions[id]
                ) {
                    const isFailNext = !!(p.liveStatus?.resultData && !p.liveStatus.resultData.isSuccess);
                    activeTransitions[id] = {
                        oldLiveStatus: prev.liveStatus,
                        oldSceneId: prev.sceneId,
                        clickedOption: p.liveStatus?.lastClickedOption || '',
                        isFail: isFailNext
                    };
                    setTimeout(() => {
                        delete activeTransitions[id];
                        if (allStudentsData[id]) {
                            const currS = allStudentsData[id].liveStatus?.currentScene || allStudentsData[id].currentScene || 'menu';
                            previousPlayerState[id] = { sceneId: currS, liveStatus: allStudentsData[id].liveStatus };
                        }
                        renderDashboard();
                    }, 1100);
                } else if (!activeTransitions[id]) {
                    previousPlayerState[id] = { sceneId: newScene, liveStatus: p.liveStatus };
                }
            }
            allStudentsData = data;
            try { localStorage.setItem('ADMIN_LAST_BACKUP', JSON.stringify({ room: code, time: Date.now(), data: allStudentsData })); } catch (e) {}
            updateTelemetryHUD();
            renderDashboard();
            if (inspectedPlayerId && allStudentsData[inspectedPlayerId]) {
                renderInspectorContent(inspectedPlayerId);
            }
        } else {
            allStudentsData = {};
            previousPlayerState = {};
            activeTransitions = {};
            mgSimState = {};
            updateTelemetryHUD();
            renderEmptyState();
        }
    });
}

window.closeSession = function() {
    if (isDemoMode) { window.toggleDemoMode(); return; }
    if (!currentRoomCode) return;
    if (confirm(`XÁC NHẬN ĐÓNG PHÒNG [${currentRoomCode}]\n\nHệ thống sẽ tự động xuất báo cáo sao lưu và xóa phòng khỏi máy chủ Firebase.`)) {
        if (Object.keys(allStudentsData).length > 0) window.exportExcel(true);
        const closingCode = currentRoomCode;
        const roomRef = window.fbRef(window.db, `sessions/${closingCode}`);
        window.fbUpdate(roomRef, { status: 'closed' }).then(() => {
            setTimeout(() => window.fbRemove(roomRef), 1500);
            if (unsubscribeListener) unsubscribeListener();
            removeRoomFromHistory(closingCode);
            localStorage.removeItem(`ADMIN_PINNED_${closingCode}`);
            currentRoomCode = ''; allStudentsData = {}; pinnedPlayers = [];
            syncRoomCodeToURLAndStorage('');
            document.getElementById('room-code-display').classList.add('hidden');
            document.getElementById('room-code-display').classList.remove('flex');
            updateTelemetryHUD();
            renderEmptyState();
        });
    }
};

// ==========================================
// 8. CẬP NHẬT CHỈ SỐ TELEMETRY & NHẬT KÝ TRỰC TIẾP
// ==========================================
function updateTelemetryHUD() {
    const ids = Object.keys(allStudentsData);
    let onlineCount = 0, offlineCount = 0, mgCount = 0, totalLogic = 0;
    let latestLog = null;

    ids.forEach(id => {
        const p = allStudentsData[id];
        if (isPlayerOffline(p)) offlineCount++;
        else onlineCount++;

        if (p.liveStatus?.minigameData?.active) mgCount++;
        totalLogic += (p.gameStats?.currentLogicScore ?? 100);

        if (p.actionLogs) {
            Object.values(p.actionLogs).forEach(log => {
                if (!latestLog || log.timestamp > latestLog.timestamp) {
                    latestLog = { ...log, studentName: p.name || 'Học sinh', role: (p.role || '').toUpperCase() };
                }
            });
        }
    });

    const avgLogic = ids.length > 0 ? Math.round(totalLogic / ids.length) : 100;
    document.getElementById('kpi-online').textContent = `${onlineCount}/${ids.length}`;
    document.getElementById('kpi-avg-logic').textContent = `${avgLogic}%`;
    document.getElementById('kpi-minigames').textContent = mgCount;
    document.getElementById('kpi-offline').textContent = offlineCount;
    document.getElementById('pinned-count-label').textContent = pinnedPlayers.length;
    const bPinned = document.getElementById('broadcast-pinned-count');
    if (bPinned) bPinned.textContent = `${pinnedPlayers.length}/4`;

    if (latestLog) {
        const timeStr = new Date(latestLog.timestamp).toLocaleTimeString('vi-VN', { hour12: false });
        const cleanAct = cleanText(latestLog.action);
        const msg = `[${timeStr}] ${latestLog.studentName} (${latestLog.role || 'SẢNH'}): ${cleanAct} (${latestLog.duration || 0}s)`;
        document.getElementById('live-event-ticker').textContent = msg;
        const bEvent = document.getElementById('broadcast-live-event');
        if (bEvent) bEvent.textContent = msg;
    }
}

// ==========================================
// 9. BỐ CỤC MINIGAME TỐI ƯU KHÔNG KHOẢNG TRỐNG
// ==========================================
function buildMinigameSkeleton(mg, id) {
    const gType = mg.type || 'taptap';
    const titleSz = isRecordMode ? 'text-xs' : 'text-[10.5px]';
    const descSz = isRecordMode ? 'text-xs' : 'text-[11px]';
    let body = '';

    if (gType === 'cleaner' || gType === 'firewall' || gType === 'evidence_scan') {
        body = `
            <div class="flex justify-between items-center mb-3 bg-slate-950 px-3.5 py-2.5 rounded-xl border border-slate-800 text-xs font-mono">
                <span>TIẾN ĐỘ XỬ LÝ: <strong id="mg-score-${id}" class="text-sky-400 text-sm">0</strong>/${mg.target || 7}</span>
                <span id="mg-tap-state-${id}" class="text-[10px] text-slate-400 font-bold uppercase">ĐANG QUÉT</span>
            </div>
            <div id="mg-grid-${id}" class="grid grid-cols-1 gap-2 flex-1 min-h-[180px] bg-slate-950/80 p-3 rounded-xl border border-slate-800 content-start"></div>`;
    } else if (gType === 'taptap') {
        body = `
            <div class="h-5 w-full bg-slate-950 rounded-full p-0.5 mb-4 border border-slate-800 overflow-hidden">
                <div id="mg-bar-${id}" class="h-full bg-gradient-to-r from-emerald-500 to-teal-400 rounded-full transition-all duration-150 ease-out" style="width: 0%"></div>
            </div>
            <div id="mg-tap-box-${id}" class="w-full py-8 rounded-2xl bg-slate-950 border border-emerald-500/40 text-white font-black text-sm flex flex-col items-center justify-center gap-2 transition-all duration-100">
                <span id="mg-tap-state-${id}" class="tracking-widest uppercase">CHỜ TƯƠNG TÁC</span>
                <span id="mg-score-${id}" class="text-xs font-mono text-emerald-400">0 / ${mg.target || 30}</span>
            </div>`;
    } else if (gType === 'hold' || gType === 'stealth') {
        body = `
            <div class="h-6 w-full bg-slate-950 rounded-full p-0.5 mb-4 border border-slate-800 relative overflow-hidden flex items-center justify-center">
                <div id="mg-bar-${id}" class="absolute left-0 top-0 h-full bg-gradient-to-r from-indigo-600 to-sky-500 transition-all duration-100" style="width: 0%"></div>
                <span id="mg-pct-${id}" class="relative z-10 text-xs font-mono font-bold text-white">0%</span>
            </div>
            <div id="mg-alert-${id}" class="${gType === 'stealth' ? 'block' : 'hidden'} w-full py-2.5 px-3 rounded-xl border border-slate-800 bg-slate-950 text-center text-xs font-bold uppercase mb-3">AN TOÀN</div>
            <div id="mg-hold-box-${id}" class="w-full py-7 rounded-2xl border border-slate-800 bg-slate-950 text-slate-400 font-black text-sm uppercase tracking-widest text-center transition-all duration-150">
                CHƯA NHẤN GIỮ
            </div>`;
    } else if (gType === 'balance') {
        body = `
            <div class="flex justify-between text-[10px] font-mono font-bold uppercase px-1 mb-1.5">
                <span class="text-rose-400">MẤT KIỂM SOÁT</span>
                <span class="text-emerald-400">VÙNG LÝ TRÍ</span>
            </div>
            <div class="relative h-11 w-full bg-slate-950 rounded-xl mb-4 border border-slate-800 overflow-hidden">
                <div class="absolute left-0 w-[35%] h-full bg-rose-950/60 border-r border-rose-500/60"></div>
                <div class="absolute right-0 w-[65%] h-full bg-emerald-950/30"></div>
                <div id="mg-cursor-${id}" class="absolute top-0 w-3 h-full bg-white rounded-full -translate-x-1/2 shadow-[0_0_12px_#fff] transition-all duration-100 ease-out" style="left: 50%"></div>
            </div>
            <div id="mg-tap-box-${id}" class="w-full py-6 rounded-2xl bg-slate-950 border border-emerald-500/40 text-emerald-400 font-black text-xs uppercase tracking-widest text-center transition-all duration-100">
                CÂN BẰNG LÝ TRÍ
            </div>`;
    } else if (gType === 'timing') {
        body = `
            <div class="relative h-11 w-full bg-slate-950 rounded-xl mb-3.5 border border-slate-800 overflow-hidden flex items-center">
                <div class="absolute left-[43%] w-[14%] h-full bg-amber-500/30 border-x border-amber-400 flex items-center justify-center">
                    <span class="text-[9px] font-mono font-black text-amber-300">MỤC TIÊU</span>
                </div>
                <div id="mg-cursor-${id}" class="absolute top-0 w-2.5 h-full bg-white rounded-full shadow-[0_0_12px_#fff]" style="left: 0%"></div>
            </div>
            <div class="flex justify-between items-center mb-3.5 text-xs font-mono">
                <span>ĐẠT CHUẨN: <strong id="mg-score-${id}" class="text-amber-400 text-sm">0</strong>/${mg.target || 3}</span>
                <span id="mg-zone-state-${id}" class="text-[10px] text-slate-400 font-bold">ĐANG DI CHUYỂN</span>
            </div>
            <div id="mg-tap-box-${id}" class="w-full py-6 rounded-2xl bg-slate-950 border border-amber-500/40 text-amber-400 font-black text-xs uppercase tracking-widest text-center transition-all duration-100">
                CANH THỜI ĐIỂM GHI HÌNH
            </div>`;
    } else if (gType === 'shield') {
        body = `
            <div class="mb-3 text-xs font-mono flex justify-between">
                <span>CHẮN THÀNH CÔNG: <strong id="mg-score-${id}" class="text-sky-400 text-sm">0</strong>/${mg.target || 6}</span>
            </div>
            <div id="mg-shield-cols-${id}" class="grid grid-cols-3 gap-2.5 h-36"></div>`;
    } else if (gType === 'qte' || gType === 'debate') {
        body = `
            <div id="mg-qte-list-${id}" class="flex flex-col gap-2"></div>`;
    }

    return `
        <div class="flex-1 flex flex-col justify-between p-4 bg-slate-950 overflow-y-auto custom-scrollbar scene-transition">
            <div class="w-full bg-slate-900/90 border border-slate-800 rounded-2xl p-3.5 mb-3">
                <div class="text-[9px] font-mono text-amber-400 uppercase tracking-widest mb-1">NHIỆM VỤ THỬ THÁCH</div>
                <p class="${descSz} text-slate-200 leading-relaxed">${cleanText(mg.description || 'Thao tác phản xạ theo thời gian thực để vượt qua tình huống.')}</p>
            </div>
            <div class="w-full bg-slate-900 border border-amber-500/40 rounded-2xl p-4 shadow-xl my-auto">
                <div class="flex items-center justify-between mb-3.5 pb-2.5 border-b border-slate-800">
                    <div class="flex items-center gap-2 min-w-0">
                        <span class="w-2.5 h-2.5 rounded-full bg-amber-400 animate-ping shrink-0"></span>
                        <span class="${titleSz} font-black text-white uppercase tracking-wider truncate">${cleanText(mg.title || 'MINIGAME')}</span>
                    </div>
                    <span id="mg-live-timer-${id}" class="text-rose-400 text-xs font-mono font-black bg-rose-950/70 px-2.5 py-1 rounded border border-rose-500/40 shrink-0">${mg.remainText || `${mg.duration || 6}S`}</span>
                </div>
                ${body}
            </div>
            <div class="text-[10px] font-mono text-slate-500 text-center pt-2">ĐỒNG BỘ VẬT LÝ TRỰC TIẾP 60FPS</div>
        </div>`;
}

function patchMinigameDOM(mg, id) {
    const now = Date.now() + timeOffset;
    const isJustTapped = mg.lastTapAt && (now - mg.lastTapAt < 450);
    const gType = mg.type || 'taptap';

    const timerEl = document.getElementById(`mg-live-timer-${id}`);
    if (timerEl && mg.remainText) timerEl.textContent = String(mg.remainText).toUpperCase();

    if (gType === 'cleaner' || gType === 'firewall' || gType === 'evidence_scan') {
        const scoreEl = document.getElementById(`mg-score-${id}`);
        if (scoreEl) scoreEl.textContent = mg.score || 0;
        const stateEl = document.getElementById(`mg-tap-state-${id}`);
        if (stateEl) {
            stateEl.textContent = isJustTapped ? 'VỪA CHẠM XỬ LÝ' : 'ĐANG QUÉT';
            stateEl.className = `text-[10px] font-bold uppercase ${isJustTapped ? 'text-emerald-400' : 'text-slate-400'}`;
        }
        const gridEl = document.getElementById(`mg-grid-${id}`);
        if (gridEl) {
            const items = mg.gridItems || [];
            gridEl.innerHTML = items.length > 0 ? items.map(it => {
                const cls = it.isDanger
                    ? 'bg-rose-950/70 border-rose-500/60 text-rose-200'
                    : 'bg-sky-950/70 border-sky-500/60 text-sky-200';
                const activeCls = it.isClicked ? 'scale-95 opacity-40 border-emerald-400 bg-emerald-950 touch-ripple-ring' : '';
                return `<div class="px-3 py-2.5 rounded-xl border ${cls} ${activeCls} text-[11px] font-semibold flex items-center justify-between transition-all duration-150">
                            <span class="truncate pr-2">${cleanText(it.text)}</span>
                            <span class="text-[9px] font-mono uppercase px-2 py-0.5 rounded bg-black/40 shrink-0">${it.isDanger ? 'CHẶN' : 'DỮ LIỆU'}</span>
                        </div>`;
            }).join('') : `<div class="text-center text-xs text-slate-500 py-10 font-mono">Đang tạo mục tiêu...</div>`;
        }
    } else if (gType === 'taptap') {
        const pct = Math.min(100, mg.progress || 0);
        const barEl = document.getElementById(`mg-bar-${id}`);
        const scoreEl = document.getElementById(`mg-score-${id}`);
        const boxEl = document.getElementById(`mg-tap-box-${id}`);
        const stateEl = document.getElementById(`mg-tap-state-${id}`);
        if (barEl) barEl.style.width = `${pct}%`;
        if (scoreEl) scoreEl.textContent = `${mg.score || 0} / ${mg.target || 30} (${pct}%)`;
        if (boxEl) {
            boxEl.className = `w-full py-8 rounded-2xl border font-black text-sm flex flex-col items-center justify-center gap-2 transition-all duration-100 ${isJustTapped ? 'bg-emerald-600 border-white text-white scale-[0.97] shadow-[0_0_25px_rgba(16,185,129,0.75)] touch-ripple-ring' : 'bg-slate-950 border-emerald-500/40 text-slate-200'}`;
        }
        if (stateEl) stateEl.textContent = isJustTapped ? 'ĐANG NHẤP LIÊN TỤC' : 'CHỜ NHỊP BẤM';
    } else if (gType === 'hold' || gType === 'stealth') {
        const holding = !!mg.isHolding;
        const boxEl = document.getElementById(`mg-hold-box-${id}`);
        if (boxEl) {
            boxEl.className = `w-full py-7 rounded-2xl border font-black text-sm uppercase tracking-widest text-center transition-all duration-150 ${holding ? 'bg-indigo-600 border-white text-white scale-[0.98] shadow-[0_0_25px_rgba(99,102,241,0.75)]' : 'bg-slate-950 border-slate-800 text-slate-400'}`;
            boxEl.textContent = holding ? 'ĐANG NHẤN GIỮ' : 'ĐANG NHẢ TAY';
        }
        if (gType === 'stealth') {
            const alertEl = document.getElementById(`mg-alert-${id}`);
            if (alertEl) {
                alertEl.className = `w-full py-2.5 px-3 rounded-xl border text-center text-xs font-bold uppercase mb-3 ${mg.isAlert ? 'bg-rose-950 border-rose-500 text-rose-400' : 'bg-slate-950 border-emerald-500/40 text-emerald-400'}`;
                alertEl.textContent = mg.isAlert ? 'CẢNH BÁO: ĐỐI TƯỢNG QUAY LẠI' : 'TRẠNG THÁI: AN TOÀN GHI HÌNH';
            }
        }
    } else if (gType === 'balance') {
        const boxEl = document.getElementById(`mg-tap-box-${id}`);
        if (boxEl) {
            boxEl.className = `w-full py-6 rounded-2xl border font-black text-xs uppercase tracking-widest text-center transition-all duration-100 ${isJustTapped ? 'bg-emerald-600 border-white text-white scale-[0.97] touch-ripple-ring' : 'bg-slate-950 border-emerald-500/40 text-emerald-400'}`;
            boxEl.textContent = isJustTapped ? 'TÁC ĐỘNG LỰC KÉO LÝ TRÍ' : 'CÂN BẰNG LÝ TRÍ';
        }
    } else if (gType === 'timing') {
        const scoreEl = document.getElementById(`mg-score-${id}`);
        const boxEl = document.getElementById(`mg-tap-box-${id}`);
        if (scoreEl) scoreEl.textContent = mg.score || 0;
        if (boxEl) {
            boxEl.className = `w-full py-6 rounded-2xl border font-black text-xs uppercase tracking-widest text-center transition-all duration-100 ${isJustTapped ? 'bg-amber-500 border-white text-slate-950 scale-[0.97] touch-ripple-ring' : 'bg-slate-950 border-amber-500/40 text-amber-400'}`;
            boxEl.textContent = isJustTapped ? 'ĐÃ BẤM GHI HÌNH' : 'CANH THỜI ĐIỂM GHI HÌNH';
        }
    } else if (gType === 'shield') {
        const scoreEl = document.getElementById(`mg-score-${id}`);
        if (scoreEl) scoreEl.textContent = mg.score || 0;
        const colsEl = document.getElementById(`mg-shield-cols-${id}`);
        if (colsEl) {
            const cols = mg.shieldCols || [false, false, false];
            const labels = ['CỘT TRÁI', 'CỘT GIỮA', 'CỘT PHẢI'];
            colsEl.innerHTML = cols.map((act, idx) => `
                <div class="rounded-xl border flex flex-col items-center justify-center p-2 transition-all ${act ? 'bg-rose-950/90 border-rose-500 text-rose-300' : 'bg-slate-950 border-slate-800 text-slate-500'}">
                    <span class="text-[9px] font-mono mb-1">${labels[idx]}</span>
                    <span class="text-xs font-black uppercase">${act ? 'BÁO ĐỘNG' : 'CHỜ'}</span>
                </div>
            `).join('');
        }
    } else if (gType === 'qte' || gType === 'debate') {
        const listEl = document.getElementById(`mg-qte-list-${id}`);
        if (listEl) {
            const list = mg.qteList || [];
            listEl.innerHTML = list.map((txt, idx) => {
                const cTxt = cleanText(txt);
                const isPicked = mg.clickedQTE && (cleanText(mg.clickedQTE).includes(cTxt) || cTxt.includes(cleanText(mg.clickedQTE)));
                return `<div class="p-3 rounded-xl border text-xs font-bold transition-all ${isPicked ? 'bg-amber-500 border-white text-slate-950 scale-[0.98] touch-ripple-ring' : 'bg-slate-950 border-slate-800 text-slate-200'}">0${idx + 1}. ${cTxt}</div>`;
            }).join('');
        }
    }
}

// ==========================================
// 10. RENDERING DASHBOARD CHÍNH (BỐ CỤC ĐIỆN THOẠI CO GIÃN THÔNG MINH)
// ==========================================
window.setFilter = function(filterStr) { currentFilter = filterStr; renderDashboard(); };

function renderEmptyState() {
    const gridAll = document.getElementById('all-players-grid');
    const gridPinned = document.getElementById('pinned-players-container');
    if (gridAll) {
        gridAll.innerHTML = currentRoomCode
            ? `<div class="col-span-full flex flex-col items-center justify-center py-12"><p class="text-xs font-mono text-slate-400 mb-3 uppercase tracking-widest">PHÒNG THỰC NGHIỆM ĐÃ SẴN SÀNG • MÃ THAM GIA:</p><div class="text-5xl sm:text-6xl font-black text-amber-400 tracking-[0.25em] font-mono bg-slate-950 px-8 py-5 rounded-2xl border border-amber-500/40">${currentRoomCode}</div></div>`
            : `<div class="col-span-full flex flex-col items-center justify-center py-14 text-slate-500 font-mono text-xs uppercase tracking-widest gap-3"><span>CHƯA KHỞI TẠO PHÒNG THỰC NGHIỆM</span><span class="text-[11px] text-slate-600 normal-case">Bấm "TẠO PHÒNG MỚI", "LỊCH SỬ PHÒNG" hoặc bật "Chạy Demo 4 Máy" để kiểm thử hệ thống.</span></div>`;
    }
    if (gridPinned) {
        gridPinned.innerHTML = `<div class="col-span-full flex flex-col items-center justify-center p-8 border border-dashed border-slate-800 rounded-xl bg-slate-950/40 text-slate-500 font-mono text-xs uppercase tracking-widest">CHƯA CÓ THIẾT BỊ ĐƯỢC GHIM THEO DÕI</div>`;
    }
    document.getElementById('total-players-count').textContent = '0';
}

function calculateProgress(sceneId, isFinished) {
    if (isFinished || sceneId === 'Đã hoàn thành') return 100;
    if (!sceneId || sceneId === 'menu') return 0;
    const match = sceneId.match(/(\d+)/);
    if (match) return Math.min(95, Math.floor((parseInt(match[0]) / 7) * 100));
    return 15;
}

function renderDashboard() {
    const now = Date.now() + timeOffset;
    const gridAll = document.getElementById('all-players-grid');
    const gridPinned = document.getElementById('pinned-players-container');
    if (gridAll) gridAll.innerHTML = '';

    ['ALL', 'PLAYING', 'OFFLINE', 'FINISHED'].forEach(f => {
        const btn = document.getElementById(`filter-${f}`);
        if (btn) btn.className = (f === currentFilter)
            ? "flex-1 sm:flex-none px-3 py-1.5 text-[11px] font-bold rounded-lg bg-sky-600 text-white transition-all"
            : "flex-1 sm:flex-none px-3 py-1.5 text-[11px] font-bold rounded-lg text-slate-400 hover:text-white transition-all";
    });

    if (gridPinned) {
        Array.from(gridPinned.children).forEach(child => {
            const pid = child.getAttribute('data-pinned-id');
            if (!pid || !pinnedPlayers.includes(pid) || !allStudentsData[pid]) child.remove();
        });
    }

    let studentIds = Object.keys(allStudentsData).sort((a, b) => {
        const offA = isPlayerOffline(allStudentsData[a]) ? 1 : 0;
        const offB = isPlayerOffline(allStudentsData[b]) ? 1 : 0;
        if (offA !== offB) return offB - offA;
        return 0;
    });

    let count = 0;

    // 1. RENDER 4 MÀN HÌNH ĐIỆN THOẠI GHIM (TỰ ĐỘNG CO GIÃN CỠ CHỮ & ẢNH THEO CHẾ ĐỘ GHI HÌNH)
    pinnedPlayers.forEach(id => {
        const p = allStudentsData[id];
        if (!p || !gridPinned) return;

        const trans = activeTransitions[id];
        const activeLive = trans ? trans.oldLiveStatus : p.liveStatus;
        const sceneId = (trans ? trans.oldSceneId : (p.liveStatus?.currentScene || p.currentScene)) || 'menu';
        const progressPercent = calculateProgress(sceneId, p.isFinished);
        const isOffline = isPlayerOffline(p);
        const mgData = p.liveStatus?.minigameData || null;
        const resultData = activeLive?.resultData || null;

        let renderMode = 'scene';
        if (isOffline) renderMode = 'offline';
        else if (sceneId === 'menu' && !p.role) renderMode = 'lobby';
        else if (mgData && mgData.active) renderMode = `mg-${mgData.status}-${mgData.type}`;
        else if (resultData) renderMode = `result-${sceneId}-${isRecordMode ? 'rec' : 'norm'}`;
        else renderMode = `scene-${sceneId}-${trans ? 'clicked' : 'idle'}-${isRecordMode ? 'rec' : 'norm'}`;

        let trackCard = document.getElementById(`pinned-card-${id}`);
        // Tỷ lệ vàng: Không kéo dài ngoằng 88vh gây thừa chỗ trống mà giữ tỷ lệ cân đối, mở rộng chiều ngang
        const phoneSizeClass = isRecordMode
            ? 'w-full max-w-[420px] h-[82vh] max-h-[760px] min-h-[560px]'
            : 'w-full max-w-[360px] h-[540px]';

        if (trackCard && trackCard.getAttribute('data-render-mode') === renderMode && mgData?.status === 'playing') {
            patchMinigameDOM(mgData, id);
            return;
        }

        let defaultSprite = 'assets/characters/Char_1.webp';
        let charTitle = "NHÂN VẬT: MAI";
        let roleBadge = "Nạn nhân nữ chịu đựng";
        const roleKey = (p.role || '').toLowerCase();
        if (roleKey.includes('mai')) { defaultSprite = 'assets/characters/Char_1.webp'; charTitle = "NHÂN VẬT: MAI"; roleBadge = "Nạn nhân nữ chịu đựng"; }
        else if (roleKey.includes('linh')) { defaultSprite = 'assets/characters/Char_2.webp'; charTitle = "NHÂN VẬT: LINH"; roleBadge = "Người chứng kiến tâm lý"; }
        else if (roleKey.includes('nam')) { defaultSprite = 'assets/characters/Char_3.webp'; charTitle = "NHÂN VẬT: NAM"; roleBadge = "Người chứng kiến can thiệp"; }
        else if (roleKey.includes('minh')) { defaultSprite = 'assets/characters/Char_4.webp'; charTitle = "NHÂN VẬT: MINH"; roleBadge = "Nam nạn nhân phản kháng"; }

        const charSprite = activeLive?.charSprite || defaultSprite;
        const sceneHeader = cleanText(activeLive?.charName || `${charTitle} (${sceneId})`);
        const dialogText = cleanText(activeLive?.currentDialog || '');
        const choices = activeLive?.currentOptions || [];

        // Cỡ chữ động: To rõ khi ghi hình, sắc nét khi ở bảng điều khiển
        const headerFont = isRecordMode ? 'text-xs' : 'text-[11px]';
        const storyFont = isRecordMode ? 'text-[13.5px] leading-relaxed' : 'text-[11.5px] leading-relaxed';
        const btnFont = isRecordMode ? 'text-[12.5px] py-3 px-3.5' : 'text-[11px] py-2.5 px-3';
        const resImgHeight = isRecordMode ? 'h-48' : 'h-36';
        const resTitleFont = isRecordMode ? 'text-sm' : 'text-xs';

        let screenContent = '';
        if (p.isFinished) {
            screenContent = `
                <div class="flex-1 flex flex-col items-center justify-between bg-slate-950 p-4 text-center scene-transition">
                    <span class="px-3 py-1 rounded-full text-[9.5px] font-mono font-bold uppercase bg-emerald-500/15 text-emerald-400 border border-emerald-500/40">CHỨNG NHẬN HOÀN THÀNH</span>
                    <div class="my-auto flex flex-col items-center">
                        <img src="${defaultSprite}" class="h-36 w-auto object-contain mb-3 drop-shadow-[0_10px_20px_rgba(16,185,129,0.3)]">
                        <div class="text-sm font-black text-white uppercase tracking-wider mb-1">${charTitle}</div>
                        <div class="text-[11px] font-mono text-emerald-400 font-bold">ĐANG XEM HỒ SƠ TÂM LÝ CUỐI GAME</div>
                    </div>
                    <div class="w-full grid grid-cols-2 gap-2 bg-slate-900 p-3 rounded-xl border border-slate-800 font-mono text-xs">
                        <div><div class="text-[9px] text-slate-400">ĐIỂM LÝ TRÍ</div><div class="font-black text-emerald-400 mt-0.5">${p.gameStats?.currentLogicScore ?? 100}%</div></div>
                        <div><div class="text-[9px] text-slate-400">THẮNG MINIGAME</div><div class="font-black text-sky-400 mt-0.5">${p.gameStats?.minigameWins || 0}/${p.gameStats?.minigameTotal || 0}</div></div>
                    </div>
                </div>`;
        }
        if (isOffline) {
            screenContent = `
                <div class="flex-1 flex flex-col items-center justify-center bg-rose-950/20 p-6 text-center scene-transition">
                    <div class="w-14 h-14 rounded-full bg-rose-500/10 border border-rose-500/40 flex items-center justify-center mb-3.5 text-rose-500">
                        <svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18.364 5.636a9 9 0 010 12.728m0 0l-2.829-2.829m2.829 2.829L21 21M15.536 8.464a5 5 0 010 7.072m0 0l-2.829-2.829m-4.243 2.829a4.978 4.978 0 01-1.414-2.83m-1.414 5.658a9 9 0 01-2.167-9.238m7.824 2.167a1 1 0 111.414 1.414m-1.414-1.414L3 3"></path></svg>
                    </div>
                    <div class="text-sm font-black text-rose-400 uppercase tracking-widest mb-1.5">MẤT TÍN HIỆU KẾT NỐI</div>
                    <p class="text-xs text-slate-400 leading-relaxed">Học sinh đã thoát trình duyệt, chuyển tab quá 5 giây hoặc mất kết nối mạng.</p>
                </div>`;
        } else if (sceneId === 'menu' && !p.role) {
            screenContent = `
                <div class="flex-1 flex flex-col items-center justify-center p-6 text-center text-slate-500 scene-transition">
                    <div class="w-11 h-11 rounded-full border-2 border-slate-700 border-t-sky-400 animate-spin mb-3.5"></div>
                    <div class="text-xs font-mono font-bold uppercase tracking-widest text-slate-300">ĐANG Ở SẢNH CHỜ</div>
                    <p class="text-[11px] text-slate-500 mt-1">Học sinh đang xem màn hình chọn nhân vật...</p>
                </div>`;
        } else if (mgData && mgData.active) {
            if (mgData.status === 'intro') {
                screenContent = `
                    <div class="flex-1 flex flex-col items-center justify-center p-4 bg-slate-950 text-center scene-transition">
                        <div class="w-full bg-slate-900 border border-slate-700 rounded-2xl p-4 shadow-xl">
                            <span class="text-[10px] font-mono bg-amber-500/10 text-amber-400 border border-amber-500/30 px-2.5 py-0.5 rounded uppercase tracking-widest">CHUẨN BỊ THỬ THÁCH</span>
                            <h3 class="text-sm font-black text-white uppercase tracking-wide mt-2.5 mb-2.5">${cleanText(mgData.title)}</h3>
                            <p class="${storyFont} text-slate-300 bg-slate-950 p-3.5 rounded-xl border border-slate-800 text-left mb-3.5">${cleanText(mgData.description)}</p>
                            <div class="flex justify-between text-[10px] font-mono text-slate-400 border-y border-slate-800 py-2.5 mb-3.5">
                                <span>THỜI LƯỢNG: <strong class="text-white">${mgData.duration || 6}S</strong></span>
                                <span>CHỈ TIÊU: <strong class="text-emerald-400">${mgData.target || 'HOÀN THÀNH'}</strong></span>
                            </div>
                            <div class="w-full py-3 rounded-xl bg-slate-800 text-amber-400 font-mono font-bold text-[11px] uppercase tracking-widest">
                                HỌC SINH ĐANG ĐỌC HƯỚNG DẪN...
                            </div>
                        </div>
                    </div>`;
            } else if (mgData.status === 'finished') {
                const ok = mgData.isSuccess;
                screenContent = `
                    <div class="flex-1 flex flex-col items-center justify-center p-5 bg-slate-950 text-center scene-transition">
                        <div class="w-full p-6 rounded-2xl border ${ok ? 'bg-emerald-950/40 border-emerald-500/60 text-emerald-300' : 'bg-rose-950/40 border-rose-500/60 text-rose-300'}">
                            <div class="text-[10px] font-mono uppercase tracking-widest opacity-80 mb-1.5">KẾT QUẢ MINIGAME</div>
                            <div class="text-base font-black uppercase tracking-wider">${ok ? 'VƯỢT QUA THỬ THÁCH' : 'CHƯA ĐẠT YÊU CẦU'}</div>
                        </div>
                    </div>`;
            } else {
                screenContent = buildMinigameSkeleton(mgData, id);
            }
        } else if (resultData) {
            const statusLabel = resultData.isSuccess ? 'KẾT QUẢ: XỬ LÝ HỢP LÝ' : 'KẾT QUẢ: RỦI RO TÂM LÝ';
            const statusCls = resultData.isSuccess
                ? 'border-emerald-500/50 bg-emerald-950/50 text-emerald-400'
                : 'border-rose-500/50 bg-rose-950/50 text-rose-400';

            let resChoicesHtml = '';
            (resultData.choices || []).forEach(cText => {
                const cleanOpt = cleanText(cText);
                const isClicked = trans && trans.clickedOption && (cleanText(trans.clickedOption).includes(cleanOpt) || cleanOpt.includes(cleanText(trans.clickedOption)));
                const btnStyle = isClicked
                    ? "bg-amber-400 text-slate-950 border-white scale-[0.98] touch-ripple-ring"
                    : (resultData.isSuccess ? "bg-emerald-700 text-white border-emerald-500" : "bg-slate-800 text-slate-200 border-slate-700");
                resChoicesHtml += `<div class="w-full ${btnFont} rounded-xl border ${btnStyle} font-bold text-center transition-all mt-2">${cleanOpt}</div>`;
            });

            // Bố cục Kết quả lấp đầy tự nhiên (flex-1 trên hộp phân tích tâm lý), triệt tiêu khoảng trống đen
            screenContent = `
                <div class="flex-1 flex flex-col justify-between bg-slate-950 p-3.5 sm:p-4 overflow-y-auto custom-scrollbar scene-transition gap-2.5">
                    <div>
                        <div class="mb-2"><span class="inline-block px-2.5 py-1 rounded text-[9.5px] font-mono font-bold uppercase border ${statusCls}">${statusLabel}</span></div>
                        <div class="w-full ${resImgHeight} rounded-xl overflow-hidden mb-3 border border-slate-800 shrink-0 bg-slate-900 shadow-md">
                            <img src="${resultData.img}" class="w-full h-full object-cover" onerror="this.src='assets/characters/Char_1.webp'">
                        </div>
                        <h2 class="${resultData.resultColor || (resultData.isSuccess ? 'text-emerald-400' : 'text-rose-400')} font-black ${resTitleFont} uppercase tracking-wide">${cleanText(resultData.title)}</h2>
                    </div>
                    <div class="flex-1 flex flex-col justify-center bg-slate-900/90 border border-slate-800 p-3.5 rounded-xl my-1">
                        <div class="text-[9.5px] font-mono font-bold text-sky-400 uppercase tracking-wider mb-1.5">PHÂN TÍCH TÂM LÝ & HỆ QUẢ</div>
                        <p class="${storyFont} text-slate-100 font-medium">${cleanText(resultData.desc)}</p>
                    </div>
                    <div class="shrink-0">${resChoicesHtml}</div>
                </div>`;
        } else {
            let choicesHTML = '';
            if (choices.length > 0) {
                choices.forEach((opt, idx) => {
                    const cleanOpt = cleanText(opt);
                    const cleanClicked = cleanText(trans?.clickedOption || '');
                    const isClicked = trans && cleanClicked && (cleanClicked.includes(cleanOpt) || cleanOpt.includes(cleanClicked));
                    let btnClass = "bg-slate-900/95 border-slate-800 text-slate-200";
                    let statusTag = `<span class="text-[10px] font-mono text-slate-500 shrink-0">0${idx + 1}</span>`;

                    if (isClicked) {
                        if (trans.isFail) {
                            btnClass = "bg-rose-600 border-rose-300 text-white scale-[0.98] shadow-[0_0_20px_rgba(244,63,94,0.8)] touch-ripple-ring";
                            statusTag = `<span class="px-1.5 py-0.5 text-[8.5px] font-mono font-black bg-black/40 rounded text-rose-100 shrink-0">CHỌN SAI</span>`;
                        } else {
                            btnClass = "bg-emerald-600 border-emerald-300 text-white scale-[0.98] shadow-[0_0_20px_rgba(16,185,129,0.8)] touch-ripple-ring";
                            statusTag = `<span class="px-1.5 py-0.5 text-[8.5px] font-mono font-black bg-black/40 rounded text-emerald-100 shrink-0">ĐÃ CHỌN</span>`;
                        }
                    }

                    choicesHTML += `
                        <div class="w-full ${btnFont} rounded-xl border ${btnClass} font-medium transition-all duration-200 flex items-start justify-between gap-2.5">
                            <span class="leading-snug flex-1">${cleanOpt}</span>
                            ${statusTag}
                        </div>`;
                });
            }

            // Sân khấu nhân vật nâng lên 28% + Hộp câu chuyện giãn đều cùng các nút chọn, không còn hố đen ở giữa
            screenContent = `
                <div class="w-full h-[28%] shrink-0 flex items-end justify-center relative overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
                    <div class="absolute inset-0 bg-[radial-gradient(circle_at_50%_70%,rgba(56,189,248,0.14),transparent_70%)] pointer-events-none"></div>
                    <div class="absolute top-2.5 left-3.5 z-20">
                        <div class="text-[10.5px] font-black text-emerald-400 uppercase tracking-wider">${charTitle}</div>
                        <div class="text-[9px] font-mono text-slate-400">${roleBadge}</div>
                    </div>
                    <img src="${charSprite}" class="h-[94%] w-auto object-contain relative z-10 drop-shadow-[0_8px_16px_rgba(0,0,0,0.8)] transition-transform duration-300" onerror="this.src='${defaultSprite}'">
                </div>
                <div class="flex-1 flex flex-col justify-between bg-slate-950 rounded-t-2xl -mt-2 relative z-20 border-t border-slate-800 p-3.5 sm:p-4 overflow-y-auto custom-scrollbar scene-transition gap-3">
                    <div class="bg-slate-900/75 border border-slate-800/90 p-3 rounded-xl">
                        <span class="${headerFont} font-black text-sky-400 uppercase tracking-wide block mb-1.5">${sceneHeader}</span>
                        <p class="${storyFont} text-slate-100 font-medium">${dialogText}</p>
                    </div>
                    <div class="flex flex-col gap-2 my-auto w-full">
                        ${choicesHTML}
                    </div>
                </div>`;
        }

        if (!trackCard) {
            trackCard = document.createElement('div');
            trackCard.id = `pinned-card-${id}`;
            trackCard.setAttribute('data-pinned-id', id);
            gridPinned.appendChild(trackCard);
        }

        const glowClass = isOffline ? 'border-rose-600 pulse-alert' : (mgData?.active ? 'phone-mg-glow' : 'border-slate-800 phone-active-glow');
        trackCard.setAttribute('data-render-mode', renderMode);
        trackCard.className = `relative flex flex-col bg-slate-950 border-[4px] ${glowClass} rounded-[28px] overflow-hidden ${phoneSizeClass} mx-auto transition-all duration-300`;
        trackCard.innerHTML = `
            <div class="bg-slate-900 px-4 py-2.5 border-b border-slate-800 flex items-center justify-between z-30 shrink-0">
                <div class="flex items-center gap-2 min-w-0 cursor-pointer" onclick="openInspector('${id}')">
                    <span class="w-2.5 h-2.5 rounded-full ${isOffline ? 'bg-rose-500 animate-ping' : 'bg-emerald-400'} shrink-0"></span>
                    <span class="text-xs sm:text-[13px] font-black text-white truncate hover:text-sky-400 transition-colors">${p.name || 'Học sinh'}</span>
                    <span class="text-[11px] font-mono text-sky-400 font-bold">${progressPercent}%</span>
                </div>
                <button onclick="togglePin('${id}')" class="${isRecordMode ? 'hidden' : ''} text-slate-400 hover:text-rose-400 p-1 rounded transition-colors" title="Gỡ ghim">
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                </button>
            </div>
            <div class="flex-1 flex flex-col relative overflow-hidden bg-slate-950 min-h-0 phone-hud-glass">
                ${screenContent}
            </div>
            <div class="bg-slate-950 px-4 py-2 border-t border-slate-800 z-30 flex justify-between items-center shrink-0">
                <span class="text-[10px] text-slate-400 font-mono font-bold uppercase">LÝ TRÍ: <strong class="text-emerald-400">${p.gameStats?.currentLogicScore ?? 100}%</strong></span>
                <span id="idle-timer-${id}" class="text-[10px] text-right font-mono">${getImmediateIdleHTML(p, now)}</span>
            </div>
        `;

        if (mgData && mgData.active && mgData.status === 'playing') {
            patchMinigameDOM(mgData, id);
        }
    });

    if (pinnedPlayers.length === 0 && gridPinned) {
        gridPinned.innerHTML = `<div class="col-span-full flex flex-col items-center justify-center p-8 border border-dashed border-slate-800 rounded-xl bg-slate-950/40 text-slate-500 font-mono text-xs uppercase tracking-widest">CHƯA CÓ THIẾT BỊ ĐƯỢC GHIM THEO DÕI</div>`;
    }

    // 2. RENDER DANH SÁCH 30 HỌC SINH BÊN DƯỚI
    for (const id of studentIds) {
        const p = allStudentsData[id];
        const sceneId = p.liveStatus?.currentScene || p.currentScene || 'menu';
        const isOffline = isPlayerOffline(p);
        const isPinned = pinnedPlayers.includes(id);

        if (currentFilter === 'PLAYING' && (p.isFinished || isOffline)) continue;
        if (currentFilter === 'OFFLINE' && !isOffline) continue;
        if (currentFilter === 'FINISHED' && !p.isFinished) continue;

        count++;
        if (isRecordMode || !gridAll) continue;

        let cardBorder = 'border-slate-800 bg-slate-900/60';
        let statusDot = 'bg-sky-400';
        let statusLabel = sceneId;

        if (isOffline) {
            cardBorder = 'border-rose-500/80 bg-rose-950/30 pulse-alert';
            statusDot = 'bg-rose-500 animate-ping';
            statusLabel = 'MẤT KẾT NỐI / NGOẠI TUYẾN';
        } else if (p.isFinished) {
            cardBorder = 'border-emerald-500/50 bg-emerald-950/20';
            statusDot = 'bg-emerald-400';
            statusLabel = 'ĐÃ HOÀN THÀNH';
        } else if (isPinned) {
            cardBorder = 'border-amber-500/60 bg-amber-950/15';
            statusDot = 'bg-amber-400';
        }

        const card = document.createElement('div');
        card.className = `p-3.5 rounded-xl border ${cardBorder} flex flex-col gap-2.5 transition-all hover:border-slate-600`;
        card.innerHTML = `
            <div class="flex justify-between items-start gap-2">
                <div class="min-w-0 cursor-pointer flex-1" onclick="openInspector('${id}')">
                    <div class="flex items-center gap-2">
                        <span class="w-2 h-2 rounded-full ${statusDot} shrink-0"></span>
                        <span class="font-black text-sm text-white truncate hover:text-sky-400 transition-colors">${p.name || 'Vô danh'}</span>
                        ${isPinned ? '<span class="text-[8px] font-mono bg-amber-500/20 text-amber-300 border border-amber-500/40 px-1.5 py-0.5 rounded uppercase">ĐANG GHIM</span>' : ''}
                    </div>
                    <div class="text-[10px] font-mono ${isOffline ? 'text-rose-400 font-bold' : 'text-slate-400'} truncate mt-1">${statusLabel}</div>
                </div>
                <div class="flex gap-1.5 shrink-0">
                    <button onclick="openInspector('${id}')" class="px-2 py-1 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded text-[10px] font-mono border border-slate-700" title="Xem nhật ký hành vi">CHI TIẾT</button>
                    <button onclick="togglePin('${id}')" class="px-2 py-1 ${isPinned ? 'bg-amber-500 text-slate-950 font-black' : 'bg-slate-800 text-sky-400 hover:bg-sky-600 hover:text-white'} rounded text-[10px] font-mono border border-slate-700 transition-colors">${isPinned ? 'BỎ GHIM' : 'GHIM'}</button>
                    <button onclick="kickPlayer('${id}')" class="px-2 py-1 bg-rose-950/80 text-rose-400 hover:bg-rose-600 hover:text-white rounded text-[10px] font-mono border border-rose-900 transition-colors" title="Xóa thiết bị">XÓA</button>
                </div>
            </div>
            <div class="flex items-center justify-between pt-2 border-t border-slate-800/80 text-[10px] font-mono">
                <span class="px-2 py-0.5 rounded bg-slate-950 text-slate-300 border border-slate-800 uppercase">VAI: ${p.role || 'CHƯA CHỌN'}</span>
                <div class="flex items-center gap-3">
                    <span>ĐỔI Ý: <strong class="text-amber-400">${p.gameStats?.redoCount || 0}</strong></span>
                    <span>LÝ TRÍ: <strong class="text-emerald-400">${p.gameStats?.currentLogicScore ?? 100}%</strong></span>
                </div>
            </div>`;
        gridAll.appendChild(card);
    }

    document.getElementById('total-players-count').textContent = count;
}

// ==========================================
// 11. HỒ SƠ HÀNH VI TRỰC TIẾP (STUDENT INSPECTOR MODAL)
// ==========================================
window.openInspector = function(id) {
    inspectedPlayerId = id;
    const modal = document.getElementById('student-inspector-modal');
    modal.classList.remove('hidden');
    modal.classList.add('flex');
    renderInspectorContent(id);
};

window.closeInspector = function() {
    inspectedPlayerId = null;
    const modal = document.getElementById('student-inspector-modal');
    modal.classList.add('hidden');
    modal.classList.remove('flex');
};

function renderInspectorContent(id) {
    const p = allStudentsData[id];
    if (!p) return;
    document.getElementById('inspector-name').textContent = `${p.name || 'Học sinh'} — Tuyến: ${(p.role || 'Chưa chọn').toUpperCase()}`;
    const body = document.getElementById('inspector-body');

    const logs = p.actionLogs ? Object.values(p.actionLogs).sort((a, b) => b.timestamp - a.timestamp) : [];
    const logsHtml = logs.length > 0 ? logs.map(l => {
        const timeStr = new Date(l.timestamp).toLocaleTimeString('vi-VN', { hour12: false });
        const isSlow = (l.duration || 0) >= 12;
        const isImpulsive = (l.duration || 0) > 0 && (l.duration || 0) <= 1.5;
        return `
            <div class="p-2.5 rounded-lg bg-slate-950 border border-slate-800 flex items-start justify-between gap-3">
                <div>
                    <span class="text-[10px] font-mono text-slate-500 mr-2">[${timeStr}]</span>
                    <span class="text-slate-200 font-medium">${cleanText(l.action)}</span>
                </div>
                <span class="px-2 py-0.5 rounded font-mono text-[10px] shrink-0 ${isSlow ? 'bg-rose-950 text-rose-400 border border-rose-500/40' : (isImpulsive ? 'bg-amber-950 text-amber-400 border border-amber-500/40' : 'bg-slate-900 text-slate-400')}">
                    ${l.duration || 0}s
                </span>
            </div>`;
    }).join('') : `<div class="text-slate-500 font-mono text-center py-6">Chưa có dữ liệu nhật ký thao tác.</div>`;

    body.innerHTML = `
        <div class="grid grid-cols-4 gap-2.5 font-mono text-center">
            <div class="p-3 rounded-xl bg-slate-950 border border-slate-800">
                <div class="text-[9px] text-slate-500 uppercase">TRẠNG THÁI</div>
                <div class="text-xs font-black mt-1 ${isPlayerOffline(p) ? 'text-rose-400' : 'text-emerald-400'}">${isPlayerOffline(p) ? 'MẤT KẾT NỐI' : (p.isFinished ? 'HOÀN THÀNH' : 'TRỰC TUYẾN')}</div>
            </div>
            <div class="p-3 rounded-xl bg-slate-950 border border-slate-800">
                <div class="text-[9px] text-slate-500 uppercase">CẢNH HIỆN TẠI</div>
                <div class="text-xs font-black text-sky-400 mt-1 truncate">${p.liveStatus?.currentScene || p.currentScene || 'menu'}</div>
            </div>
            <div class="p-3 rounded-xl bg-slate-950 border border-slate-800">
                <div class="text-[9px] text-slate-500 uppercase">ĐIỂM LÝ TRÍ</div>
                <div class="text-xs font-black text-emerald-400 mt-1">${p.gameStats?.currentLogicScore ?? 100}%</div>
            </div>
            <div class="p-3 rounded-xl bg-slate-950 border border-slate-800">
                <div class="text-[9px] text-slate-500 uppercase">SỐ LẦN ĐỔI Ý</div>
                <div class="text-xs font-black text-amber-400 mt-1">${p.gameStats?.redoCount || 0}</div>
            </div>
        </div>
        <div>
            <div class="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-widest mb-2">DÒNG THỜI GIAN QUYẾT ĐỊNH & ĐỘ TRỄ TÂM LÝ</div>
            <div class="space-y-1.5 max-h-[45vh] overflow-y-auto custom-scrollbar pr-1">${logsHtml}</div>
        </div>
    `;
}

// ==========================================
// 12. THAO TÁC GHIM & XUẤT BÁO CÁO EXCEL / CSV AN TOÀN
// ==========================================
window.togglePin = function(id) {
    const isCurrentlyPinned = pinnedPlayers.includes(id);
    if (isCurrentlyPinned) {
        pinnedPlayers = pinnedPlayers.filter(pId => pId !== id);
        if (currentRoomCode && !isDemoMode && window.db) {
            const pRef = window.fbRef(window.db, `sessions/${currentRoomCode}/players/${id}/liveStatus`);
            window.fbUpdate(pRef, { isPinned: false });
        }
    } else {
        if (pinnedPlayers.length >= 4) {
            alert("Trạm quan sát hỗ trợ hiển thị đồng thời tối đa 4 thiết bị.");
            return;
        }
        pinnedPlayers.push(id);
        if (currentRoomCode && !isDemoMode && window.db) {
            const pRef = window.fbRef(window.db, `sessions/${currentRoomCode}/players/${id}/liveStatus`);
            window.fbUpdate(pRef, { isPinned: true });
        }
    }
    savePinnedToStorage();
    updateTelemetryHUD();
    renderDashboard();
};

window.kickPlayer = function(id) {
    const studentName = allStudentsData[id]?.name || "Học sinh này";
    if (isDemoMode) {
        delete allStudentsData[id];
        pinnedPlayers = pinnedPlayers.filter(pId => pId !== id);
        updateTelemetryHUD();
        renderDashboard();
        return;
    }
    if (confirm(`XÁC NHẬN XÓA THIẾT BỊ "${studentName}" KHỎI PHÒNG THỰC NGHIỆM?`)) {
        const playerRef = window.fbRef(window.db, `sessions/${currentRoomCode}/players/${id}`);
        window.fbRemove(playerRef).then(() => {
            pinnedPlayers = pinnedPlayers.filter(pId => pId !== id);
            savePinnedToStorage();
        });
    }
};

function downloadCSVFallback(overviewRows, fileNameBase) {
    if (!overviewRows || overviewRows.length === 0) return;
    const headers = Object.keys(overviewRows[0]);
    const csvLines = [
        headers.join(','),
        ...overviewRows.map(row => headers.map(h => `"${String(row[h] ?? '').replace(/"/g, '""')}"`).join(','))
    ];
    const blob = new Blob(["\uFEFF" + csvLines.join('\n')], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = `${fileNameBase}.csv`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

window.exportExcel = function(isAutoBackup = false) {
    let sourceData = allStudentsData;
    if (Object.keys(sourceData).length === 0) {
        try {
            const cached = JSON.parse(localStorage.getItem('ADMIN_LAST_BACKUP') || 'null');
            if (cached && cached.data && Object.keys(cached.data).length > 0) {
                sourceData = cached.data;
            }
        } catch (e) {}
    }

    if (Object.keys(sourceData).length === 0) {
        if (!isAutoBackup) alert("Chưa có dữ liệu học sinh để xuất báo cáo.");
        return;
    }

    const overviewRows = [], actionLogRows = [], analysisRows = [];
    let totalPlayers = 0, finishedPlayers = 0, totalLogic = 0, totalRedo = 0, totalMinigameWins = 0, totalMinigamePlays = 0;
    let roleStats = {}, actionStats = {}, impulsiveActions = {}, dropOffScenes = {}, playTimes = [];

    for (const id in sourceData) {
        const p = sourceData[id];
        totalPlayers++; if (p.isFinished) finishedPlayers++;
        const role = (p.role || "Chưa chọn").toUpperCase();
        if (!roleStats[role]) roleStats[role] = { count: 0, logic: 0, redo: 0, time: 0, finished: 0 };
        roleStats[role].count++; roleStats[role].logic += (p.gameStats?.currentLogicScore ?? 100); roleStats[role].redo += (p.gameStats?.redoCount || 0);
        if (p.isFinished) roleStats[role].finished++;
        totalLogic += (p.gameStats?.currentLogicScore ?? 100); totalRedo += (p.gameStats?.redoCount || 0);
        totalMinigameWins += (p.gameStats?.minigameWins || 0); totalMinigamePlays += (p.gameStats?.minigameTotal || 0);

        let startTimeStr = '', endTimeStr = '', playtimeSec = 0;
        if (p.timeTracking?.startTime) {
            startTimeStr = new Date(p.timeTracking.startTime).toLocaleString('vi-VN');
            if (p.isFinished && p.timeTracking?.endTime) {
                endTimeStr = new Date(p.timeTracking.endTime).toLocaleString('vi-VN');
                playtimeSec = (p.timeTracking.endTime - p.timeTracking.startTime) / 1000;
                if (playtimeSec > 10 && playtimeSec < 7200) { playTimes.push(playtimeSec); roleStats[role].time += playtimeSec; }
            }
        }
        if (!p.isFinished) { const dropScene = p.liveStatus?.currentScene || p.currentScene || "menu"; dropOffScenes[dropScene] = (dropOffScenes[dropScene] || 0) + 1; }

        overviewRows.push({
            "Mã HS (ID)": id,
            "Họ Tên": p.name || "",
            "Tuyến Nhân Vật": role,
            "Trạng Thái": p.isFinished ? "Đã hoàn thành" : (isPlayerOffline(p) ? "Mất kết nối" : "Đang xử lý"),
            "Cảnh Hiện Tại": p.liveStatus?.currentScene || p.currentScene || "menu",
            "Thời Gian Chơi (Giây)": playtimeSec > 0 ? playtimeSec.toFixed(0) : "Chưa xong",
            "Số Lần Đổi Ý (Undo)": p.gameStats?.redoCount || 0,
            "Thắng Minigame": `${p.gameStats?.minigameWins || 0} / ${p.gameStats?.minigameTotal || 0}`,
            "Điểm Lý Trí (%)": p.gameStats?.currentLogicScore ?? 100,
            "Bắt Đầu": startTimeStr,
            "Kết Thúc": endTimeStr
        });

        if (p.actionLogs) {
            const logsArray = Object.values(p.actionLogs).sort((a, b) => a.timestamp - b.timestamp);
            logsArray.forEach(log => {
                const cleanAct = cleanText(log.action);
                actionLogRows.push({ "Họ Tên": p.name || "Vô danh", "ID": id, "Thời Gian": new Date(log.timestamp).toLocaleString('vi-VN'), "Đắn Đo (Giây)": log.duration || 0, "Lựa Chọn": cleanAct });
                if (cleanAct && !cleanAct.includes("Hệ thống:") && !cleanAct.includes("Bắt đầu Minigame")) {
                    if (!actionStats[cleanAct]) actionStats[cleanAct] = { count: 0, totalTime: 0 };
                    actionStats[cleanAct].count += 1; actionStats[cleanAct].totalTime += (log.duration || 0);
                    if (log.duration > 0 && log.duration <= 1.5) impulsiveActions[cleanAct] = (impulsiveActions[cleanAct] || 0) + 1;
                }
            });
        }
    }

    const completionRate = totalPlayers > 0 ? ((finishedPlayers / totalPlayers) * 100).toFixed(1) : 0;
    const mgWinRate = totalMinigamePlays > 0 ? ((totalMinigameWins / totalMinigamePlays) * 100).toFixed(1) : 0;
    let avgPlayTime = 0, fastestTime = 0, slowestTime = 0;
    if (playTimes.length > 0) { avgPlayTime = (playTimes.reduce((a, b) => a + b, 0) / playTimes.length).toFixed(0); fastestTime = Math.min(...playTimes).toFixed(0); slowestTime = Math.max(...playTimes).toFixed(0); }

    let actionArr = Object.keys(actionStats).map(key => ({ action: key, count: actionStats[key].count, avgTime: (actionStats[key].totalTime / actionStats[key].count).toFixed(2) }));
    const topHesitant = [...actionArr].sort((a, b) => b.avgTime - a.avgTime).slice(0, 5);
    let impulsiveArr = Object.keys(impulsiveActions).map(key => ({ action: key, count: impulsiveActions[key] })).sort((a, b) => b.count - a.count).slice(0, 5);
    let dropOffArr = Object.keys(dropOffScenes).map(key => ({ scene: key, count: dropOffScenes[key] })).sort((a, b) => b.count - a.count).slice(0, 5);

    analysisRows.push({ "HẠNG MỤC PHÂN TÍCH": "=== 1. TỔNG QUAN THỰC NGHIỆM ===", "KẾT QUẢ": "", "GHI CHÚ": "" });
    analysisRows.push({ "HẠNG MỤC PHÂN TÍCH": "Tổng học sinh tham gia", "KẾT QUẢ": totalPlayers, "GHI CHÚ": "" });
    analysisRows.push({ "HẠNG MỤC PHÂN TÍCH": "Tỉ lệ hoàn thành", "KẾT QUẢ": `${completionRate}% (${finishedPlayers}/${totalPlayers})`, "GHI CHÚ": "" });
    analysisRows.push({ "HẠNG MỤC PHÂN TÍCH": "Điểm Lý trí trung bình", "KẾT QUẢ": `${totalPlayers ? (totalLogic / totalPlayers).toFixed(1) : 0}%`, "GHI CHÚ": "" });
    analysisRows.push({ "HẠNG MỤC PHÂN TÍCH": "Số lần Đổi ý trung bình", "KẾT QUẢ": `${totalPlayers ? (totalRedo / totalPlayers).toFixed(1) : 0} lần/người`, "GHI CHÚ": "" });
    analysisRows.push({ "HẠNG MỤC PHÂN TÍCH": "Tỉ lệ vượt qua Minigame", "KẾT QUẢ": `${mgWinRate}% (${totalMinigameWins}/${totalMinigamePlays})`, "GHI CHÚ": "" });
    analysisRows.push({});
    analysisRows.push({ "HẠNG MỤC PHÂN TÍCH": "=== 2. THỐNG KÊ THỜI GIAN ===", "KẾT QUẢ": "", "GHI CHÚ": "" });
    analysisRows.push({ "HẠNG MỤC PHÂN TÍCH": "Thời gian hoàn thành Trung bình", "KẾT QUẢ": `${avgPlayTime} giây (~${(avgPlayTime/60).toFixed(1)} phút)`, "GHI CHÚ": "" });
    analysisRows.push({ "HẠNG MỤC PHÂN TÍCH": "Hoàn thành Nhanh nhất", "KẾT QUẢ": `${fastestTime} giây`, "GHI CHÚ": "" });
    analysisRows.push({ "HẠNG MỤC PHÂN TÍCH": "Hoàn thành Chậm nhất", "KẾT QUẢ": `${slowestTime} giây`, "GHI CHÚ": "" });
    analysisRows.push({});
    analysisRows.push({ "HẠNG MỤC PHÂN TÍCH": "=== 3. PHÂN BỔ TUYẾN NHÂN VẬT ===", "KẾT QUẢ": "Số lượng", "GHI CHÚ": "Lý trí TB & Undo TB" });
    for (const [r, stats] of Object.entries(roleStats)) { let pct = ((stats.count/totalPlayers)*100).toFixed(1); let avgL = stats.count > 0 ? (stats.logic / stats.count).toFixed(1) : 0; let avgR = stats.count > 0 ? (stats.redo / stats.count).toFixed(1) : 0; analysisRows.push({ "HẠNG MỤC PHÂN TÍCH": `Nhân vật: ${r}`, "KẾT QUẢ": `${stats.count} HS (${pct}%)`, "GHI CHÚ": `Lý trí: ${avgL}% | Đổi ý: ${avgR}` }); }
    analysisRows.push({});
    analysisRows.push({ "HẠNG MỤC PHÂN TÍCH": "=== 4. CÁC QUYẾT ĐỊNH ĐẮN ĐO NHẤT ===", "KẾT QUẢ": "Thời gian TB", "GHI CHÚ": "" });
    topHesitant.forEach((item, index) => { analysisRows.push({ "HẠNG MỤC PHÂN TÍCH": `Top ${index + 1}. ${item.action}`, "KẾT QUẢ": `${item.avgTime} giây`, "GHI CHÚ": `${item.count} lượt chọn` }); });
    analysisRows.push({});
    analysisRows.push({ "HẠNG MỤC PHÂN TÍCH": "=== 5. PHẢN XẠ BỐC ĐỒNG (< 1.5 GIÂY) ===", "KẾT QUẢ": "Số lượt", "GHI CHÚ": "" });
    impulsiveArr.forEach((item, index) => { analysisRows.push({ "HẠNG MỤC PHÂN TÍCH": `Top ${index + 1}. ${item.action}`, "KẾT QUẢ": `${item.count} lượt`, "GHI CHÚ": "" }); });
    analysisRows.push({});
    analysisRows.push({ "HẠNG MỤC PHÂN TÍCH": "=== 6. ĐIỂM NÓNG NGƯNG TRỆ / BỎ CUỘC ===", "KẾT QUẢ": "Số HS", "GHI CHÚ": "" });
    dropOffArr.forEach((item, index) => { analysisRows.push({ "HẠNG MỤC PHÂN TÍCH": `Top ${index + 1}. Cảnh: ${item.scene}`, "KẾT QUẢ": `${item.count} HS`, "GHI CHÚ": "" }); });

    let fileBase = `Bao_Cao_Thuc_Nghiem_${isDemoMode ? 'DEMO' : (currentRoomCode || 'Offline')}`;
    if (isAutoBackup) fileBase = `AUTO_BACKUP_` + fileBase;

    try {
        if (typeof XLSX === 'undefined') throw new Error("CDN SheetJS bị chặn");
        const workbook = XLSX.utils.book_new();
        const wsOverview = XLSX.utils.json_to_sheet(overviewRows); wsOverview['!cols'] = [{wch:15}, {wch:25}, {wch:15}, {wch:18}, {wch:20}, {wch:18}, {wch:15}, {wch:15}, {wch:15}, {wch:22}, {wch:22}]; XLSX.utils.book_append_sheet(workbook, wsOverview, "Tổng quan");
        if (actionLogRows.length > 0) { const wsLogs = XLSX.utils.json_to_sheet(actionLogRows); wsLogs['!cols'] = [{wch:25}, {wch:15}, {wch:22}, {wch:15}, {wch:75}]; XLSX.utils.book_append_sheet(workbook, wsLogs, "Nhật ký hành vi"); }
        const wsAnalysis = XLSX.utils.json_to_sheet(analysisRows); wsAnalysis['!cols'] = [{wch:75}, {wch:20}, {wch:35}]; XLSX.utils.book_append_sheet(workbook, wsAnalysis, "Phân Tích");
        XLSX.writeFile(workbook, `${fileBase}.xlsx`);
    } catch (err) {
        downloadCSVFallback(overviewRows, fileBase);
    }
};

window.addEventListener('beforeunload', function (e) { if (currentRoomCode && !isDemoMode) { e.preventDefault(); e.returnValue = 'Phòng thực nghiệm đang hoạt động!'; } });