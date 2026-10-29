// ==========================================
// HỆ THỐNG TRACKING & TELEMETRY ENGINE (V19 MASTER RELEASE)
// On-Demand Pinned Telemetry | Real-time Logic Score | 5s Grace Period | Firebase Rules Compliant
// ==========================================

var isGameHooked = false;
var mgTelemetryTimer = null;
var currentMGConfig = null;
var isStudentHoldingMG = false;
var lastTapPulseTime = 0;
var prevTimingCursorPos = 0;
var currentTimingDir = 1;
var lastMGPayloadHash = '';
var visibilityDisconnectTimer = null;
var visitedScenes = new Set();

window.TestData = {
    id: '', name: '', role: '', sessionPath: '', roomCode: '', currentScene: '',
    lastActionTime: 0, lastLogTime: 0, timeOffset: 0, lastClickedOption: '',
    isPinnedByAdmin: false,
    stats: { redoCount: 0, minigameWins: 0, minigameTotal: 0, currentLogicScore: 100 }
};

window.getServerTime = function() {
    return Date.now() + (window.TestData.timeOffset || 0);
};

function waitForFirebase(callback) {
    if (window.db && window.fbRef && window.fbGet) callback();
    else setTimeout(() => waitForFirebase(callback), 100);
}

function findSceneData(role, sceneId) {
    if (!sceneId) return null;
    const r = (role || window.TestData.role || '').toLowerCase();
    const pools = [];
    if (r === 'mai' && typeof DATA_MAI !== 'undefined') pools.push(DATA_MAI);
    if (r === 'minh' && typeof DATA_MINH !== 'undefined') pools.push(DATA_MINH);
    if (r === 'linh' && typeof DATA_LINH !== 'undefined') pools.push(DATA_LINH);
    if (r === 'nam' && typeof DATA_NAM !== 'undefined') pools.push(DATA_NAM);

    if (typeof DATA_MAI !== 'undefined') pools.push(DATA_MAI);
    if (typeof DATA_MINH !== 'undefined') pools.push(DATA_MINH);
    if (typeof DATA_LINH !== 'undefined') pools.push(DATA_LINH);
    if (typeof DATA_NAM !== 'undefined') pools.push(DATA_NAM);
    if (typeof SCENES_MAI !== 'undefined') pools.push(SCENES_MAI);
    if (typeof SCENES_MINH !== 'undefined') pools.push(SCENES_MINH);
    if (typeof SCENES_LINH !== 'undefined') pools.push(SCENES_LINH);
    if (typeof SCENES_NAM !== 'undefined') pools.push(SCENES_NAM);

    for (const pool of pools) {
        if (pool && pool[sceneId]) return pool[sceneId];
    }
    return null;
}

function getSyncedGameStats() {
    if (!window.TestData.stats) {
        window.TestData.stats = { redoCount: 0, minigameWins: 0, minigameTotal: 0, currentLogicScore: 100 };
    }
    // Kẹp chặt giới hạn để tuân thủ tuyệt đối Firebase Rules (.validate)
    window.TestData.stats.currentLogicScore = Math.max(0, Math.min(100, Math.round(window.TestData.stats.currentLogicScore)));
    window.TestData.stats.redoCount = Math.max(0, Math.min(500, window.TestData.stats.redoCount));
    window.TestData.stats.minigameWins = Math.max(0, Math.min(100, window.TestData.stats.minigameWins));
    window.TestData.stats.minigameTotal = Math.max(0, Math.min(500, window.TestData.stats.minigameTotal));

    if (window.GameStats) {
        if (typeof window.GameStats.redoCount === 'number' && window.GameStats.redoCount > window.TestData.stats.redoCount) {
            window.TestData.stats.redoCount = window.GameStats.redoCount;
        }
        window.GameStats.redoCount = window.TestData.stats.redoCount;
        window.GameStats.minigameWins = window.TestData.stats.minigameWins;
        window.GameStats.minigameTotal = window.TestData.stats.minigameTotal;
        window.GameStats.currentLogicScore = window.TestData.stats.currentLogicScore;
    } else {
        window.GameStats = { ...window.TestData.stats };
    }
    return window.TestData.stats;
}

// ==========================================
// 0. CHẶN ĐA TAB (KHIÊN BẢO VỆ BĂNG THÔNG)
// ==========================================
const currentTabId = Math.random().toString(36).substring(2, 10);
const gameChannel = new BroadcastChannel('gockhuat_playtest_channel');

gameChannel.onmessage = (event) => {
    if (event.data.type === 'PING') gameChannel.postMessage({ type: 'PONG', fromTab: currentTabId });
    if (event.data.type === 'PONG') {
        document.body.innerHTML = `
            <div class="h-[100dvh] w-full bg-slate-950 flex flex-col items-center justify-center p-6 text-center z-[9999] fixed inset-0">
                <svg class="w-16 h-16 text-rose-500 mb-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path></svg>
                <h1 class="text-xl font-black text-rose-400 mb-2 uppercase tracking-widest">CẢNH BÁO TRUY CẬP ĐA TAB</h1>
                <p class="text-slate-400 text-sm mb-6">Phiên thực nghiệm đang được mở ở một cửa sổ khác.<br>Kết nối tại cửa sổ này đã bị ngắt để bảo toàn dữ liệu.</p>
                <p class="text-white text-xs font-bold bg-rose-950 border border-rose-500/50 px-5 py-3 rounded-xl uppercase tracking-wider">Vui lòng đóng cửa sổ này và quay lại tab ban đầu</p>
            </div>
        `;
        if (window.db && window.fbGoOffline) window.fbGoOffline(window.db);
    }
};
gameChannel.postMessage({ type: 'PING', fromTab: currentTabId });

// ==========================================
// 1. TỰ ĐỘNG KHÔI PHỤC KHI F5
// ==========================================
waitForFirebase(async () => {
    hookGameFunctions();

    const savedSession = localStorage.getItem('PLAYTEST_SESSION');
    if (savedSession) {
        window.TestData = JSON.parse(savedSession);
        if (!window.TestData.stats) {
            window.TestData.stats = { redoCount: 0, minigameWins: 0, minigameTotal: 0, currentLogicScore: 100 };
        }
        const playerRef = window.fbRef(window.db, `${window.TestData.sessionPath}/players/${window.TestData.id}`);
        const snapshot = await window.fbGet(playerRef);
        
        if (!snapshot.exists()) {
            localStorage.clear();
            window.location.reload();
            return;
        }

        const fbData = snapshot.val();
        if (fbData && fbData.gameStats) {
            window.TestData.stats = {
                redoCount: fbData.gameStats.redoCount || 0,
                minigameWins: fbData.gameStats.minigameWins || 0,
                minigameTotal: fbData.gameStats.minigameTotal || 0,
                currentLogicScore: fbData.gameStats.currentLogicScore ?? 100
            };
            getSyncedGameStats();
        }

        window.fbOnDisconnect(playerRef).update({
            'liveStatus/currentScene': 'Gián đoạn (Mất mạng)',
            'liveStatus/isOnline': false
        });

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
            clearBtn.className = "mt-3 text-[13px] sm:text-sm text-amber-400/80 hover:text-amber-400 underline font-bold tracking-wide active:scale-95 transition-transform";
            clearBtn.innerText = "Đổi mã phòng / Nhập lại thông tin";
            clearBtn.onclick = function() { localStorage.clear(); window.location.reload(); };
            mainBtn.parentElement.appendChild(clearBtn);
        }

        startKickListener();
        startConnectionManager();
        window.TestData.lastLogTime = window.getServerTime();
        if (window.trackAction) window.trackAction("Hệ thống: Khôi phục phiên sau khi tải lại trang");
    }
});

function startKickListener() {
    if (!window.TestData || !window.TestData.id || typeof window.fbOnValue !== 'function') return;
    
    const playerRef = window.fbRef(window.db, `${window.TestData.sessionPath}/players/${window.TestData.id}`);
    window.fbOnValue(playerRef, (snapshot) => {
        if (!snapshot.exists()) {
            alert("Tài khoản của bạn đã được giáo viên đưa ra khỏi phòng thực nghiệm.");
            localStorage.clear();
            window.location.reload();
            return;
        }
        // Nhận cờ isPinned từ Admin để bật/tắt luồng phát sóng Minigame tốc độ cao
        window.TestData.isPinnedByAdmin = !!(snapshot.val()?.liveStatus?.isPinned);
    });

    const roomStatusRef = window.fbRef(window.db, `${window.TestData.sessionPath}/status`);
    window.fbOnValue(roomStatusRef, (snapshot) => {
        if (snapshot.val() === 'closed') {
            alert("Giáo viên đã đóng phòng thực nghiệm. Cảm ơn bạn đã tham gia!");
            localStorage.clear();
            window.location.reload();
        }
    });
}

function startConnectionManager() {
    if (!window.TestData || !window.TestData.id || !window.db) return;

    const offsetRef = window.fbRef(window.db, ".info/serverTimeOffset");
    window.fbOnValue(offsetRef, (snap) => { window.TestData.timeOffset = snap.val() || 0; });

    const playerRef = window.fbRef(window.db, `${window.TestData.sessionPath}/players/${window.TestData.id}`);

    const connectedRef = window.fbRef(window.db, ".info/connected");
    window.fbOnValue(connectedRef, (snap) => {
        if (snap.val() === true) {
            window.fbOnDisconnect(playerRef).update({
                'liveStatus/currentScene': 'Gián đoạn (Mất mạng)',
                'liveStatus/isOnline': false
            });
            const savedScene = window.TestData.currentScene || 'menu';
            window.fbUpdate(playerRef, {
                'liveStatus/currentScene': savedScene,
                'liveStatus/isOnline': true
            });
        }
    });

    // GRACE PERIOD 5 GIÂY: Chống báo mất kết nối giả khi điện thoại hiện thông báo ngắn
    document.addEventListener("visibilitychange", () => {
        if (document.visibilityState === 'hidden') {
            clearTimeout(visibilityDisconnectTimer);
            visibilityDisconnectTimer = setTimeout(() => {
                if (document.visibilityState === 'hidden' && window.db) {
                    window.fbGoOffline(window.db);
                }
            }, 5000);
        } else {
            clearTimeout(visibilityDisconnectTimer);
            if (window.db) window.fbGoOnline(window.db);
        }
    });
}

// ==========================================
// 2. KHỞI TẠO PHIÊN CHƠI MỚI
// ==========================================
window.startTestSession = async function() {
    hookGameFunctions();

    if (window.TestData && window.TestData.id && localStorage.getItem('PLAYTEST_SESSION')) {
        const roomRef = window.fbRef(window.db, `sessions/${window.TestData.roomCode}`);
        const snapshot = await window.fbGet(roomRef);
        
        if (!snapshot.exists() || snapshot.val().status !== 'active') {
            alert("Phòng thực nghiệm này đã đóng. Vui lòng nhập mã phòng mới.");
            localStorage.clear();
            window.location.reload();
            return;
        }
        
        startConnectionManager();
        window.TestData.lastLogTime = window.getServerTime();
        window.lockStudentScreen();
        if (typeof window.startGame === 'function') window.startGame();
        return;
    }

    const roomCode = document.getElementById('room-code-input').value.trim();
    const rawName = document.getElementById('student-name-input').value.trim();
    const cleanName = rawName.substring(0, 75);
    
    if (!/^[0-9]{5}$/.test(roomCode)) {
        alert("Vui lòng nhập Mã Phòng hợp lệ gồm đúng 5 chữ số.");
        return;
    }
    if (cleanName.length < 2) {
        alert("Vui lòng nhập đầy đủ Họ Tên (khuyến khích kèm Lớp, VD: Nguyễn An - 9A1).");
        return;
    }

    const roomRef = window.fbRef(window.db, `sessions/${roomCode}`);
    const snapshot = await window.fbGet(roomRef);

    if (!snapshot.exists() || snapshot.val().status !== 'active') {
        alert("Mã phòng không tồn tại hoặc giáo viên đã đóng phòng.");
        return;
    }
    
    localStorage.clear();
    window.TestData.sessionPath = `sessions/${roomCode}`;
    window.TestData.roomCode = roomCode;
    window.TestData.stats = { redoCount: 0, minigameWins: 0, minigameTotal: 0, currentLogicScore: 100 };
    visitedScenes.clear();
    startConnectionManager();

    setTimeout(() => {
        window.TestData.id = 'hs_' + window.getServerTime() + '_' + Math.random().toString(36).substring(2, 5);
        window.TestData.name = cleanName;
        window.TestData.currentScene = 'menu';
        window.TestData.lastLogTime = window.getServerTime();
        
        localStorage.setItem('PLAYTEST_SESSION', JSON.stringify(window.TestData));

        const playerRef = window.fbRef(window.db, `${window.TestData.sessionPath}/players/${window.TestData.id}`);
        
        window.fbSet(playerRef, {
            name: window.TestData.name,
            role: "",
            currentScene: 'menu',
            progressPercent: 0,
            isFinished: false,
            gameStats: getSyncedGameStats(),
            timeTracking: { startTime: window.getServerTime() },
            liveStatus: {
                isOnline: true,
                isPinned: false,
                currentScene: 'menu',
                currentDialog: 'Đang ở màn hình chọn nhân vật...',
                currentOptions: []
            }
        });

        window.fbOnDisconnect(playerRef).update({
            'liveStatus/currentScene': 'Gián đoạn (Mất mạng)',
            'liveStatus/isOnline': false
        });

        startKickListener();
        window.lockStudentScreen();
        
        if (typeof window.startGame === 'function') window.startGame();
    }, 200);
};

// ==========================================
// 3. TELEMETRY ĐỒNG BỘ MINIGAME (ON-DEMAND TIẾT KIỆM 87% BĂNG THÔNG)
// ==========================================
function extractProgressPercent(el) {
    if (!el) return 0;
    const tf = el.style.transform || '';
    if (tf.includes('scaleX')) {
        const m = tf.match(/scaleX\(([^)]+)\)/);
        if (m) return Math.round(parseFloat(m[1]) * 100);
    }
    const w = el.style.width || '';
    if (w.includes('%')) return Math.round(parseFloat(w));
    return 0;
}

function pushMinigameLiveState(extraData = {}, forcePush = false) {
    if (!window.TestData || !window.TestData.id || !window.db || !currentMGConfig) return;
    const overlay = document.getElementById('minigame-overlay');
    if (!overlay || overlay.classList.contains('hidden')) return;

    const gType = currentMGConfig.type || 'taptap';
    const target = currentMGConfig.target || 6;
    const timerEl = document.getElementById('mg-timer');
    const scoreEl = document.getElementById('mg-score');
    const badgeEl = document.getElementById('mg-score-badge');
    const progEl = document.getElementById('mg-progress');
    const holdPercEl = document.getElementById('mg-hold-percent') || document.getElementById('mg-stealth-percent');

    let score = scoreEl ? parseInt(scoreEl.innerText || '0') : 0;
    let progress = extractProgressPercent(progEl);
    if (holdPercEl) progress = parseInt(holdPercEl.innerText || '0') || progress;
    if (gType === 'taptap') {
        if (badgeEl) score = parseInt(badgeEl.innerText.split('/')[0] || '0');
        else score = Math.round((progress / 100) * (currentMGConfig.target || 30));
    }

    let gridItems = [];
    const gridEl = document.getElementById('mg-cleaner-grid') || document.getElementById('mg-firewall-grid') || document.getElementById('mg-evidence-grid');
    if (gridEl) {
        Array.from(gridEl.children).forEach(btn => {
            gridItems.push({
                text: btn.innerText.replace(/[\n\r]+/g, ' ').trim(),
                isDanger: btn.className.includes('rose'),
                isClicked: btn.getAttribute('data-clicked') === 'true'
            });
        });
    }

    let cursorPos = 50;
    const needleEl = document.getElementById('mg-balance-needle') || document.getElementById('mg-timing-cursor');
    if (needleEl && needleEl.style.left) {
        cursorPos = Math.round(parseFloat(needleEl.style.left));
        if (cursorPos !== prevTimingCursorPos) {
            currentTimingDir = cursorPos > prevTimingCursorPos ? 1 : -1;
            prevTimingCursorPos = cursorPos;
        }
    }

    let shieldCols = [false, false, false];
    if (gType === 'shield') {
        for (let i = 0; i < 3; i++) {
            const col = document.getElementById(`shield-${i}`);
            if (col && col.getAttribute('data-active') === 'true') shieldCols[i] = true;
        }
    }

    let isAlert = false;
    const stealthIcon = document.getElementById('mg-stealth-icon');
    if (stealthIcon && stealthIcon.innerText.includes('HUNG THỦ')) isAlert = true;

    let qteList = [];
    if (gType === 'qte' || gType === 'debate') {
        overlay.querySelectorAll('.qte-option-btn').forEach(b => {
            qteList.push(b.innerText.replace(/[\n\r]+/g, ' ').trim());
        });
    }

    const remainText = timerEl ? timerEl.innerText : `${currentMGConfig.duration || 6}s`;

    const stateSignature = `${score}|${Math.round(progress / 2)}|${Math.round(cursorPos / 3)}|${isStudentHoldingMG}|${isAlert}|${remainText}|${gridItems.length}|${shieldCols.join('')}|${lastTapPulseTime}`;
    if (!forcePush && stateSignature === lastMGPayloadHash) return;
    lastMGPayloadHash = stateSignature;

    const payload = {
        active: true,
        status: 'playing',
        type: gType,
        title: currentMGConfig.title || 'THỬ THÁCH PHẢN XẠ',
        description: currentMGConfig.description || '',
        duration: currentMGConfig.duration || 6,
        remainText: remainText,
        target: target,
        score: score,
        progress: progress,
        cursorPos: cursorPos,
        cursorDir: currentTimingDir,
        isHolding: isStudentHoldingMG,
        isAlert: isAlert,
        shieldCols: shieldCols,
        gridItems: gridItems,
        qteList: qteList,
        lastTapAt: lastTapPulseTime,
        ...extraData
    };

    const playerRef = window.fbRef(window.db, `${window.TestData.sessionPath}/players/${window.TestData.id}`);
    window.fbUpdate(playerRef, { 'liveStatus/minigameData': payload });
}

function startMGTelemetry() {
    stopMGTelemetry();
    lastMGPayloadHash = '';
    pushMinigameLiveState({}, true);
    mgTelemetryTimer = setInterval(() => {
        // Chỉ phát sóng liên tục nếu đang được Admin ghim lên Trạm Quan Sát
        if (window.TestData.isPinnedByAdmin) {
            pushMinigameLiveState();
        }
    }, 250);
}

function stopMGTelemetry() {
    if (mgTelemetryTimer) {
        clearInterval(mgTelemetryTimer);
        mgTelemetryTimer = null;
    }
    isStudentHoldingMG = false;
}

// ==========================================
// 4. ĐỒNG BỘ CẢNH GAME & TỰ ĐỘNG TÍNH ĐIỂM LÝ TRÍ THỜI GIAN THỰC
// ==========================================
function syncSceneToFirebase(sceneId) {
    if (!window.TestData || !window.TestData.id || !window.db) return;

    window.TestData.currentScene = sceneId;
    const stats = getSyncedGameStats();

    const playerRef = window.fbRef(window.db, `${window.TestData.sessionPath}/players/${window.TestData.id}`);

    if (sceneId === 'RESET_GAME') {
        stopMGTelemetry();
        localStorage.setItem('PLAYTEST_SESSION', JSON.stringify(window.TestData));
        window.fbUpdate(playerRef, {
            isFinished: true,
            currentScene: 'Đã hoàn thành',
            gameStats: getSyncedGameStats(),
            'timeTracking/endTime': window.getServerTime(),
            'liveStatus/currentScene': 'Đã hoàn thành',
            'liveStatus/isOnline': true,
            'liveStatus/minigameData': null
        });
        window.trackAction("Hoàn thành vòng chơi");
        localStorage.clear();
        return;
    }

    const sceneData = findSceneData(window.TestData.role, sceneId);

    if (sceneData && sceneData.isResult) {
        const rTitle = (sceneData.resultTitle || sceneData.title || '').toUpperCase();
        const isSuccess = rTitle.includes('THÀNH CÔNG') || rTitle.includes('CHIẾN THẮNG') || !!sceneData.isSuccess;
        if (!isSuccess || sceneId.includes('_sai_')) {
            stats.redoCount += 1;
            stats.currentLogicScore = Math.max(10, stats.currentLogicScore - 12);
        } else if (isSuccess && !visitedScenes.has(sceneId)) {
            stats.currentLogicScore = Math.min(100, stats.currentLogicScore + 5);
        }
    }
    visitedScenes.add(sceneId);
    getSyncedGameStats();
    localStorage.setItem('PLAYTEST_SESSION', JSON.stringify(window.TestData));

    let charName = sceneData?.charName || sceneData?.title || document.getElementById('char-name')?.innerText?.trim() || sceneId;
    let currentDialog = sceneData?.story || sceneData?.description || document.getElementById('story-text')?.innerText?.trim() || '';
    let rawChoices = sceneData?.choices || sceneData?.options || [];
    let currentOptions = rawChoices.map(c => c.text);

    let domSprite = document.getElementById('char-sprite-img')?.getAttribute('src');
    let charSprite = domSprite || sceneData?.charSprite || '';

    let resultData = null;
    if (sceneData && sceneData.isResult) {
        const rTitle = sceneData.resultTitle || sceneData.title || 'KẾT QUẢ';
        const isSuccess = rTitle.toUpperCase().includes('THÀNH CÔNG') || rTitle.toUpperCase().includes('CHIẾN THẮNG') || !!sceneData.isSuccess;
        resultData = {
            title: rTitle,
            isSuccess: isSuccess,
            resultColor: sceneData.resultColor || (isSuccess ? 'text-emerald-400' : 'text-rose-400'),
            desc: sceneData.story || sceneData.lesson || '',
            img: sceneData.illustration || sceneData.image || 'assets/scenes/Char_1_Scene_1.webp',
            choices: currentOptions
        };
    }

    let minigameData = null;
    const mg = sceneData?.minigame || sceneData?.minigameConfig;
    if (mg) {
        currentMGConfig = mg;
        minigameData = {
            active: true,
            status: 'intro',
            title: mg.title || 'THỬ THÁCH PHẢN XẠ',
            type: mg.type || 'taptap',
            description: mg.description || '',
            duration: mg.duration || 6,
            target: mg.target || 'HOÀN THÀNH',
            startTime: window.getServerTime()
        };
    } else {
        stopMGTelemetry();
        currentMGConfig = null;
    }

    window.fbUpdate(playerRef, {
        currentScene: sceneId,
        gameStats: getSyncedGameStats(),
        liveStatus: {
            isOnline: true,
            isPinned: !!window.TestData.isPinnedByAdmin,
            currentScene: sceneId,
            charName: charName,
            charSprite: charSprite,
            currentDialog: currentDialog,
            currentOptions: currentOptions,
            lastClickedOption: window.TestData.lastClickedOption || '',
            lastClickedAt: window.getServerTime(),
            resultData: resultData,
            minigameData: minigameData
        }
    });
}

// ==========================================
// 5. HOOK CÁC HÀM CỦA MAIN.JS & MINIGAMES.JS
// ==========================================
function hookGameFunctions() {
    if (isGameHooked) return;

    window.trackAction = function(actionDesc) {
        if (!window.TestData || !window.TestData.id || !window.db) return;
        const now = window.getServerTime();

        if (window.TestData.lastActionTime && (now - window.TestData.lastActionTime < 250)) return;
        window.TestData.lastActionTime = now;

        let durationSec = 0;
        if (window.TestData.lastLogTime) {
            durationSec = ((now - window.TestData.lastLogTime) / 1000).toFixed(1);
        }
        window.TestData.lastLogTime = now;

        // Cắt an toàn dưới 550 ký tự để luôn vượt qua Firebase Rules (.validate <= 600)
        const safeAction = String(actionDesc || '').substring(0, 550);

        const logRef = window.fbRef(window.db, `${window.TestData.sessionPath}/players/${window.TestData.id}/actionLogs`);
        const newLog = window.fbPush(logRef);
        window.fbSet(newLog, {
            timestamp: now,
            action: safeAction,
            duration: Number(durationSec)
        });
    };

    if (typeof window.startRole === 'function') {
        const originalStartRole = window.startRole;
        window.startRole = function(role, sceneToLoad) {
            if (window.TestData && window.TestData.id) {
                window.TestData.role = role;
                window.TestData.lastClickedOption = '';
                window.TestData.stats = { redoCount: 0, minigameWins: 0, minigameTotal: 0, currentLogicScore: 100 };
                visitedScenes.clear();
                getSyncedGameStats();

                const playerRef = window.fbRef(window.db, `${window.TestData.sessionPath}/players/${window.TestData.id}`);
                window.fbUpdate(playerRef, { role: role, gameStats: getSyncedGameStats() });
                localStorage.setItem('PLAYTEST_SESSION', JSON.stringify(window.TestData));
                window.trackAction(`Chọn nhân vật: ${role.toUpperCase()}`);
            }
            const res = originalStartRole.apply(this, arguments);
            const firstScene = sceneToLoad || `${role}_man_1`;
            setTimeout(() => syncSceneToFirebase(window.TestData.currentScene && window.TestData.currentScene !== 'menu' ? window.TestData.currentScene : firstScene), 50);
            return res;
        };
    }

    if (typeof window.loadScene === 'function') {
        const originalLoadScene = window.loadScene;
        window.loadScene = function(sceneId) {
            const res = originalLoadScene.apply(this, arguments);
            syncSceneToFirebase(sceneId);
            return res;
        };
        isGameHooked = true;
    }

    if (window.MinigameEngine && typeof window.MinigameEngine.showMinigame === 'function' && !window.MinigameEngine._hooked) {
        const origShowMG = window.MinigameEngine.showMinigame;
        window.MinigameEngine.showMinigame = function(config, onComplete) {
            currentMGConfig = config;
            if (window.TestData && window.TestData.id && window.db) {
                const playerRef = window.fbRef(window.db, `${window.TestData.sessionPath}/players/${window.TestData.id}`);
                window.fbUpdate(playerRef, {
                    'liveStatus/minigameData': {
                        active: true,
                        status: 'intro',
                        title: config?.title || 'MINIGAME',
                        type: config?.type || 'taptap',
                        description: config?.description || '',
                        duration: config?.duration || 6,
                        target: config?.target || 'HOÀN THÀNH',
                        startTime: window.getServerTime()
                    }
                });
            }
            const wrappedComplete = function(isSuccess, nextScene) {
                stopMGTelemetry();
                if (window.TestData && window.TestData.id && window.db) {
                    const stats = getSyncedGameStats();
                    stats.minigameTotal += 1;
                    if (isSuccess) {
                        stats.minigameWins += 1;
                        stats.currentLogicScore = Math.min(100, stats.currentLogicScore + 4);
                    } else {
                        stats.currentLogicScore = Math.max(10, stats.currentLogicScore - 8);
                    }
                    getSyncedGameStats();
                    localStorage.setItem('PLAYTEST_SESSION', JSON.stringify(window.TestData));

                    const playerRef = window.fbRef(window.db, `${window.TestData.sessionPath}/players/${window.TestData.id}`);
                    window.fbUpdate(playerRef, {
                        gameStats: getSyncedGameStats(),
                        'liveStatus/minigameData': {
                            active: true,
                            status: 'finished',
                            isSuccess: isSuccess,
                            title: config?.title || 'MINIGAME'
                        }
                    });
                }
                if (onComplete) return onComplete.apply(this, arguments);
            };
            return origShowMG.call(this, config, wrappedComplete);
        };
        window.MinigameEngine._hooked = true;
    }
}

document.addEventListener('click', function(e) {
    if (!window.TestData || !window.TestData.id) return;

    const choiceBtn = e.target.closest('#choices-box button, #result-choices-box button');
    if (choiceBtn) {
        let text = choiceBtn.innerText.replace(/[\n\r]/g, ' ').trim();
        window.TestData.lastClickedOption = text;
        window.trackAction(`Chọn: "${text}"`);
        return;
    }

    const mgStartBtn = e.target.closest('#btn-start-minigame');
    if (mgStartBtn) {
        window.trackAction(`Bắt đầu Minigame: ${currentMGConfig?.title || ''}`);
        setTimeout(() => startMGTelemetry(), 40);
        return;
    }

    const inMG = e.target.closest('#minigame-overlay');
    if (inMG && mgTelemetryTimer && window.TestData.isPinnedByAdmin) {
        lastTapPulseTime = window.getServerTime();
        const qteBtn = e.target.closest('.qte-option-btn');
        if (qteBtn) {
            pushMinigameLiveState({ clickedQTE: qteBtn.innerText.replace(/[\n\r]+/g, ' ').trim() }, true);
        } else {
            setTimeout(() => pushMinigameLiveState({}, true), 15);
        }
    }
}, true);

const handleHoldStart = (e) => {
    if (e.target.closest('#mg-hold-btn, #mg-stealth-btn')) {
        isStudentHoldingMG = true;
        lastTapPulseTime = window.getServerTime();
        if (window.TestData.isPinnedByAdmin) pushMinigameLiveState({}, true);
    } else if (e.target.closest('#minigame-overlay') && mgTelemetryTimer) {
        lastTapPulseTime = window.getServerTime();
    }
};
const handleHoldEnd = () => {
    if (isStudentHoldingMG) {
        isStudentHoldingMG = false;
        if (window.TestData.isPinnedByAdmin) pushMinigameLiveState({}, true);
    }
};
document.addEventListener('mousedown', handleHoldStart, true);
document.addEventListener('touchstart', handleHoldStart, { passive: true, capture: true });
window.addEventListener('mouseup', handleHoldEnd, true);
window.addEventListener('touchend', handleHoldEnd, { passive: true, capture: true });

// ==========================================
// 6. MÃ PIN ADMIN & BẢO VỆ MÀN HÌNH
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
    if (encodedInput === 'ODg4ODg4X2dvY2todWF0') {
        sessionStorage.setItem('ADMIN_AUTH', 'verified');
        window.location.href = 'admin.html';
    } else {
        alert('Mã PIN không chính xác!');
    }
};

window.lockStudentScreen = function() {
    const elem = document.documentElement;
    try {
        if (elem.requestFullscreen) elem.requestFullscreen().catch(() => {});
        else if (elem.webkitRequestFullscreen) elem.webkitRequestFullscreen();
        else if (elem.msRequestFullscreen) elem.msRequestFullscreen();
    } catch (e) {}

    window.addEventListener('beforeunload', function (e) {
        if (window.TestData && window.TestData.id && window.TestData.currentScene !== 'Đã hoàn thành') {
            e.preventDefault();
            e.returnValue = 'Bạn đang làm dở bài thực nghiệm!';
        }
    });
};