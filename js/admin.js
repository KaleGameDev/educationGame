// ==========================================
// ADMIN DASHBOARD ENGINE (BẢN CYBERPUNK - TỐI ƯU AVATAR & EXCEL 3 SHEET)
// ==========================================

document.addEventListener('DOMContentLoaded', () => {
    setTimeout(checkActiveRoom, 500);
});

let allStudentsData = {};
let pinnedPlayers = [];
let currentRoomCode = '';
let unsubscribeListener = null;
let currentFilter = 'ALL';

// ==========================================
// 1. QUẢN LÝ PHÒNG & TỰ ĐỘNG DỌN DẸP
// ==========================================
function checkActiveRoom() {
    const sessionsRef = window.fbRef(window.db, 'sessions');
    
    window.fbGet(sessionsRef).then((snapshot) => {
        let foundActiveRoom = null;
        const now = Date.now();
        const FOUR_HOURS = 4 * 60 * 60 * 1000;
        
        if (snapshot.exists()) {
            const sessions = snapshot.val();
            for (const code in sessions) {
                const room = sessions[code];
                if (room.status === 'active') {
                    const roomAge = now - (room.createdAt || now);
                    if (roomAge > FOUR_HOURS) {
                        const zombieRef = window.fbRef(window.db, `sessions/${code}`);
                        window.fbUpdate(zombieRef, { status: 'closed' }).then(() => {
                            setTimeout(() => window.fbRemove(zombieRef), 2000);
                        });
                        console.warn(`[Auto-Clean] Đã dọn dẹp phòng ma: ${code}`);
                    } else {
                        foundActiveRoom = code;
                        break; 
                    }
                }
            }
        }
        
        if (foundActiveRoom) {
            currentRoomCode = foundActiveRoom;
            document.getElementById('room-code-display').classList.remove('hidden');
            document.getElementById('room-code-display').classList.add('flex');
            document.getElementById('current-room-text').innerText = currentRoomCode;
            listenToRoom(currentRoomCode);
        } else {
            renderEmptyState();
        }
    }).catch((error) => {
        console.error("Lỗi kết nối Firebase:", error);
        renderEmptyState();
    });
}

window.createNewRoom = function() {
    if (currentRoomCode) {
        alert(`Bạn đang mở phòng ${currentRoomCode}. Vui lòng Đóng phòng cũ trước khi tạo phòng mới!`);
        return;
    }
    
    currentRoomCode = Math.floor(10000 + Math.random() * 90000).toString();
    const roomRef = window.fbRef(window.db, `sessions/${currentRoomCode}`);
    
    window.fbSet(roomRef, { status: 'active', createdAt: Date.now() }).then(() => {
        document.getElementById('room-code-display').classList.remove('hidden');
        document.getElementById('room-code-display').classList.add('flex');
        document.getElementById('current-room-text').innerText = currentRoomCode;
        listenToRoom(currentRoomCode);
    });
};

function listenToRoom(code) {
    if (unsubscribeListener) unsubscribeListener(); 
    
    const sessionRef = window.fbRef(window.db, `sessions/${code}/players`);
    unsubscribeListener = window.fbOnValue(sessionRef, (snapshot) => {
        const data = snapshot.val();
        if (data) {
            allStudentsData = data;
            renderDashboard();
        } else {
            allStudentsData = {};
            pinnedPlayers = [];
            renderEmptyState();
        }
    });
}

window.closeSession = function() {
    if (!currentRoomCode) return;
    const isConfirm = confirm(`⚠️ ĐÓNG PHÒNG [${currentRoomCode}]\n\nHành động này sẽ xóa sạch dữ liệu trên máy chủ. Bạn có muốn tải báo cáo Excel về máy trước khi xóa không?`);
    
    if (isConfirm) {
        if (Object.keys(allStudentsData).length > 0) window.exportExcel(true); 

        const roomRef = window.fbRef(window.db, `sessions/${currentRoomCode}`);
        window.fbUpdate(roomRef, { status: 'closed' }).then(() => {
            setTimeout(() => { window.fbRemove(roomRef); }, 2000); 

            if (unsubscribeListener) unsubscribeListener();
            currentRoomCode = '';
            allStudentsData = {};
            pinnedPlayers = [];
            document.getElementById('room-code-display').classList.add('hidden');
            document.getElementById('room-code-display').classList.remove('flex');
            renderEmptyState();
        });
    }
};

// ==========================================
// 2. GIAO DIỆN & LỌC DỮ LIỆU
// ==========================================
window.setFilter = function(filterStr) {
    currentFilter = filterStr;
    renderDashboard();
};

function renderEmptyState() {
    const gridAll = document.getElementById('all-players-grid');
    const gridPinned = document.getElementById('pinned-players-container');
    
    if (currentRoomCode) {
        gridAll.innerHTML = `
            <div class="col-span-full flex flex-col items-center justify-center py-12 animate__animated animate__fadeIn">
                <div class="w-16 h-16 bg-sky-500/20 text-sky-400 rounded-full flex items-center justify-center mb-4 border-2 border-sky-500/50 shadow-[0_0_20px_rgba(14,165,233,0.3)] pulse-soft">
                    <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path></svg>
                </div>
                <h3 class="text-xl font-bold text-white mb-2 uppercase tracking-widest text-center">Phòng Đã Mở Thành Công!</h3>
                <p class="text-slate-400 mb-6 text-center sm:text-left">Yêu cầu học sinh nhập mã này để vào game:</p>
                <div class="text-5xl sm:text-[80px] w-full max-w-md mx-auto text-center font-black text-amber-400 tracking-[0.1em] sm:tracking-[0.25em] bg-black/80 px-4 sm:px-10 py-6 rounded-2xl sm:rounded-[32px] border-2 border-amber-500/50 select-all drop-shadow-lg break-all">${currentRoomCode}</div>
                <p class="text-sm text-slate-500 mt-8 flex items-center justify-center gap-2">
                    <svg class="w-5 h-5 animate-spin text-sky-500" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
                    Đang chờ dữ liệu...
                </p>
            </div>
        `;
    } else {
        gridAll.innerHTML = `
            <div class="col-span-full flex flex-col items-center justify-center py-16 opacity-60">
                <svg class="w-16 h-16 text-slate-600 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 002-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path></svg>
                <p class="text-slate-300 font-bold text-lg mb-1 tracking-wider uppercase">Trung tâm trống</p>
            </div>
        `;
    }
    gridPinned.innerHTML = `
        <div class="col-span-full flex flex-col items-center justify-center p-6 border border-dashed border-slate-700/50 rounded-xl bg-slate-900/20 text-slate-500">
            <svg class="w-6 h-6 mb-2 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path></svg>
            <p class="text-[11px] font-mono tracking-widest uppercase">Chưa có mục tiêu theo dõi</p>
        </div>
    `;
    document.getElementById('total-players-count').innerText = '0';
}

function calculateProgress(sceneId, isFinished) {
    if (isFinished || sceneId === 'Đã hoàn thành') return 100;
    if (!sceneId || sceneId === 'menu') return 0;
    const match = sceneId.match(/\d+/);
    if (match) {
        const step = parseInt(match[0]);
        return Math.min(95, Math.floor((step / 12) * 100)); 
    }
    return 10; 
}

function renderDashboard() {
    const gridAll = document.getElementById('all-players-grid');
    const gridPinned = document.getElementById('pinned-players-container');
    
    gridAll.innerHTML = '';
    gridPinned.innerHTML = '';
    
    ['ALL', 'PLAYING', 'FINISHED'].forEach(f => {
        const btn = document.getElementById(`filter-${f}`);
        if (btn) {
            btn.className = (f === currentFilter) 
                ? "flex-1 sm:flex-none px-4 py-1.5 text-[11px] sm:text-xs font-bold rounded-lg bg-sky-600 text-white shadow-[0_0_15px_rgba(14,165,233,0.6)] transition-all"
                : "flex-1 sm:flex-none px-4 py-1.5 text-[11px] sm:text-xs font-bold rounded-lg text-slate-500 hover:text-sky-300 hover:bg-slate-800 transition-all";
        }
    });

    let studentIds = Object.keys(allStudentsData);
    
    studentIds.sort((a, b) => {
        const pA = allStudentsData[a];
        const pB = allStudentsData[b];
        const sceneA = pA.liveStatus?.currentScene || pA.currentScene || "";
        const sceneB = pB.liveStatus?.currentScene || pB.currentScene || "";
        
        const isErrorA = sceneA.includes("Gián đoạn") || sceneA.includes("Mất mạng");
        const isErrorB = sceneB.includes("Gián đoạn") || sceneB.includes("Mất mạng");
        if (isErrorA && !isErrorB) return -1;
        if (!isErrorA && isErrorB) return 1;
        if (pA.isFinished && !pB.isFinished) return 1;
        if (!pA.isFinished && pB.isFinished) return -1;
        return 0;
    });

    let count = 0, hasPinned = false;
    
    for (const [index, id] of studentIds.entries()) {
        const p = allStudentsData[id];
        const sceneId = p.liveStatus?.currentScene || p.currentScene;
        const progressPercent = calculateProgress(sceneId, p.isFinished);
        const isPinned = pinnedPlayers.includes(id);
        
        if (currentFilter === 'PLAYING' && p.isFinished) continue;
        if (currentFilter === 'FINISHED' && !p.isFinished) continue;

        count++;
        const animDelay = (index * 0.05).toFixed(2);
        const isOffline = sceneId && (sceneId.includes("Gián đoạn") || sceneId.includes("Mất mạng"));
        
        if (isPinned) {
            hasPinned = true;
            
            // Xử lý Avatar dựa trên định dạng .webp
            // Xử lý Avatar: Ánh xạ tên nhân vật thực tế sang tên file .webp
            let avatarImg = ''; // Để trống để dùng SVG mặc định (onerror) nếu chưa chọn
            const roleKey = (p.role || '').toLowerCase();
            
            if (roleKey.includes('mai')) avatarImg = 'assets/characters/Char_1.webp';
            else if (roleKey.includes('linh')) avatarImg = 'assets/characters/Char_2.webp';
            else if (roleKey.includes('nam')) avatarImg = 'assets/characters/Char_3.webp';
            else if (roleKey.includes('minh')) avatarImg = 'assets/characters/Char_4.webp';

            const offlineClass = isOffline ? 'pulse-soft border-rose-500/80 bg-rose-950/40' : 'border-amber-500/50 bg-slate-900/80 hover:border-amber-400';

            const trackCard = document.createElement('div');
            trackCard.className = `card-enter ${offlineClass} border p-4 rounded-xl relative overflow-hidden shadow-[0_0_20px_rgba(245,158,11,0.15)] flex flex-col justify-center backdrop-blur-sm group transition-colors duration-500`;
            trackCard.style.animationDelay = `${animDelay}s`;
            trackCard.innerHTML = `
                <div class="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]"></div>
                
                <button onclick="togglePin('${id}')" class="absolute top-2 right-2 p-1.5 text-slate-500 hover:text-rose-400 hover:bg-rose-500/10 rounded-md transition-colors z-20" title="Bỏ ghim">
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                </button>

                <div class="flex items-center gap-4 mb-4 relative z-10">
                    <div class="w-14 h-14 rounded-full border-2 ${isOffline ? 'border-rose-400' : 'border-amber-400'} overflow-hidden shrink-0 shadow-[0_0_10px_rgba(0,0,0,0.5)] bg-slate-800 flex items-center justify-center">
                        <img src="${avatarImg}" alt="${p.role}" class="w-full h-full object-cover object-top" onerror="this.src='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjOTRhM2I4Ij48cGF0aCBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS13aWR0aD0iMS41IiBkPSJNMTYgN2E0IDQgMCAxMS04IDAgNCA0IDAgMDExIDggMHpNMTIgMTRhNyA3IDAgMDExNCAwaC0xNHoiLz48L3N2Zz4='">
                    </div>
                    
                    <div class="min-w-0 flex-1">
                        <span class="font-black text-amber-400 text-lg block truncate drop-shadow-[0_0_8px_rgba(252,211,77,0.6)]">${p.name || 'Vô danh'}</span>
                        <div class="flex items-center gap-2 mt-1">
                            <span class="px-2 py-0.5 rounded text-[9px] font-bold bg-amber-500/20 text-amber-300 border border-amber-500/30">Vai: ${p.role ? p.role.toUpperCase() : 'N/A'}</span>
                            <span class="text-xs ${isOffline ? 'text-rose-400 font-bold' : 'text-slate-300'} font-mono truncate border-l border-slate-600 pl-2">${sceneId || 'Sảnh chờ'}</span>
                        </div>
                    </div>
                    <span class="font-black text-white text-2xl tracking-tighter drop-shadow-md shrink-0">${progressPercent}%</span>
                </div>

                <div class="w-full bg-slate-950/80 rounded-full h-2.5 overflow-hidden border border-slate-700/50 shadow-inner relative z-10 p-[1px]">
                    <div class="bg-gradient-to-r ${isOffline ? 'from-rose-600 to-rose-400' : 'from-amber-600 via-yellow-400 to-amber-200'} h-full transition-all duration-1000 ease-out rounded-full shadow-[0_0_10px_rgba(252,211,77,0.8)] relative" style="width: ${progressPercent}%">
                        <div class="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4IiBoZWlnaHQ9IjgiPjxwYXRoIGQ9Ik0tMiAyTDYgLTEwTDEwIC02TC02IDEweiIgc3Ryb2tlPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMykiIHN0cm9rZS13aWR0aD0iMSIvPjwvc3ZnPg==')] opacity-50"></div>
                    </div>
                </div>
            `;
            gridPinned.appendChild(trackCard);
        } 
        else {
            let statusStyles = {
                border: 'border-slate-700/50', bg: 'bg-slate-800/40', textName: 'text-slate-200',
                badge: 'bg-slate-700/50 text-slate-300', sceneText: 'text-sky-400', shadow: ''
            };
            
            if (isOffline) {
                statusStyles = {
                    border: 'border-rose-500/60', bg: 'bg-rose-950/40', textName: 'text-rose-100',
                    badge: 'bg-rose-500/20 text-rose-300 border border-rose-500/30', sceneText: 'text-rose-400 font-bold',
                    shadow: 'shadow-[0_0_15px_rgba(225,29,72,0.2)] pulse-soft' 
                };
            } else if (p.isFinished) {
                statusStyles = {
                    border: 'border-emerald-500/40', bg: 'bg-emerald-950/20', textName: 'text-emerald-100',
                    badge: 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30', sceneText: 'text-emerald-400', shadow: ''
                };
            } else if (sceneId && sceneId !== 'menu') {
                statusStyles = {
                    border: 'border-sky-500/30', bg: 'bg-sky-900/10', textName: 'text-white',
                    badge: 'bg-sky-500/20 text-sky-300 border border-sky-500/30', sceneText: 'text-sky-400', shadow: 'hover:shadow-[0_0_15px_rgba(14,165,233,0.15)]'
                };
            }

            const card = document.createElement('div');
            card.className = `card-enter p-3 sm:p-4 rounded-xl border ${statusStyles.border} ${statusStyles.bg} ${statusStyles.shadow} flex flex-col gap-3 backdrop-blur-sm transition-all hover:-translate-y-1 hover:border-slate-400 group`;
            card.style.animationDelay = `${animDelay}s`;
            
            card.innerHTML = `
                <div class="flex justify-between items-start gap-2">
                    <div class="min-w-0">
                        <div class="font-black text-sm sm:text-[15px] ${statusStyles.textName} truncate drop-shadow-sm" title="${p.name}">${p.name || 'Vô danh'}</div>
                        <div class="text-[9px] sm:text-[10px] font-mono ${statusStyles.sceneText} truncate mt-1 tracking-wide" title="${sceneId}">[SCENE]: ${sceneId || 'WAITING_ROOM'}</div>
                    </div>
                    <div class="flex gap-1.5 shrink-0 opacity-100 lg:opacity-0 group-hover:opacity-100 transition-opacity">
                        <button onclick="togglePin('${id}')" class="p-1.5 bg-slate-800/80 text-sky-400 rounded hover:bg-sky-500 hover:text-white transition-all border border-slate-600 hover:border-sky-400 shadow-sm" title="Ghim lên Màn hình chính">
                            <svg class="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M16 11V5.5C16 3.57 14.43 2 12.5 2S9 3.57 9 5.5V11L7 15v2h4.5v5l1 2 1-2v-5H18v-2l-2-4zm-4-7.5c.83 0 1.5.67 1.5 1.5V11h-3V5.5c0-.83.67-1.5 1.5-1.5z"/></svg>
                        </button>
                        <button onclick="kickPlayer('${id}')" class="p-1.5 bg-rose-950/80 text-rose-400 rounded hover:bg-rose-600 hover:text-white transition-all border border-rose-900 hover:border-rose-500 shadow-sm" title="Khai trừ">
                            <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M6 18L18 6M6 6l12 12"></path></svg>
                        </button>
                    </div>
                </div>
                
                <div class="flex items-center justify-between mt-auto pt-2 border-t border-slate-700/50">
                    <span class="px-2 py-0.5 rounded text-[8px] sm:text-[9px] font-bold uppercase tracking-widest ${statusStyles.badge}">Vai: ${p.role || 'N/A'}</span>
                    <div class="flex items-center gap-2 sm:gap-3 text-[10px] sm:text-[11px] font-mono">
                        <div class="flex items-center gap-1" title="Lần chọn lại (Undo)"><span class="text-slate-500">U:</span><span class="text-rose-400 font-bold">${p.gameStats?.redoCount || 0}</span></div>
                        <div class="flex items-center gap-1" title="Điểm Lý trí"><span class="text-slate-500">L:</span><span class="text-emerald-400 font-bold">${p.gameStats?.currentLogicScore || (p.isFinished ? 100 : 0)}%</span></div>
                    </div>
                </div>
            `;
            gridAll.appendChild(card);
        }
    }
    
    document.getElementById('total-players-count').innerText = count;
    if (!hasPinned) {
        gridPinned.innerHTML = `
            <div class="col-span-full flex flex-col items-center justify-center p-6 border border-dashed border-slate-700/50 rounded-xl bg-slate-900/20 text-slate-500">
                <svg class="w-6 h-6 mb-2 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path></svg>
                <p class="text-[11px] font-mono tracking-widest uppercase">Chưa có mục tiêu theo dõi</p>
            </div>
        `;
    }
}

// ==========================================
// 3. THAO TÁC QUẢN TRỊ & XUẤT EXCEL 3 SHEET
// ==========================================
window.togglePin = function(id) {
    if (pinnedPlayers.includes(id)) {
        pinnedPlayers = pinnedPlayers.filter(pId => pId !== id);
    } else {
        if (pinnedPlayers.length >= 4) {
            alert("⚠️ Chỉ có thể ghim tối đa 4 học sinh!");
            return;
        }
        pinnedPlayers.push(id);
    }
    renderDashboard();
};

window.kickPlayer = function(id) {
    const studentName = allStudentsData[id]?.name || "Học sinh này";
    const isConfirm = confirm(`⚠️ CẢNH BÁO: Xóa "${studentName}" khỏi phòng?\n\nDữ liệu sẽ bị xóa vĩnh viễn!`);
    
    if (isConfirm) {
        const playerRef = window.fbRef(window.db, `sessions/${currentRoomCode}/players/${id}`);
        window.fbRemove(playerRef).then(() => {
            if (pinnedPlayers.includes(id)) {
                pinnedPlayers = pinnedPlayers.filter(pId => pId !== id);
            }
        });
    }
};

window.exportExcel = function(isAutoBackup = false) {
    // Thêm cảnh báo mềm (Soft Warning) cho thiết bị di động
    const isMobile = window.innerWidth < 1024 || /Mobi|Android|iPhone|iPad/i.test(navigator.userAgent);
    if (isMobile && !isAutoBackup) {
        const confirmMobile = confirm("📱 HỆ THỐNG NHẮC NHỞ\n\nBạn đang dùng thiết bị di động. Báo cáo Excel 3 Sheet sẽ khó xem trên màn hình nhỏ. Bạn có muốn tải về để gửi qua máy tính sau không?");
        if (!confirmMobile) return;
    }

    if (Object.keys(allStudentsData).length === 0) {
        if (!isAutoBackup) alert("⚠️ Không có dữ liệu để xuất!");
        return;
    }

    const overviewRows = [];
    const actionLogRows = [];
    const analysisRows = [];

    let totalPlayers = 0, finishedPlayers = 0;
    let totalLogic = 0, totalRedo = 0;
    let totalMinigameWins = 0, totalMinigamePlays = 0;
    
    let roleStats = {};        
    let actionStats = {};      
    let impulsiveActions = {}; 
    let dropOffScenes = {};    
    let playTimes = [];        

    for (const id in allStudentsData) {
        const p = allStudentsData[id];
        totalPlayers++;
        if (p.isFinished) finishedPlayers++;

        const role = (p.role || "Chưa chọn").toUpperCase();
        
        if (!roleStats[role]) roleStats[role] = { count: 0, logic: 0, redo: 0, time: 0, finished: 0 };
        roleStats[role].count++;
        roleStats[role].logic += (p.gameStats?.currentLogicScore || 0);
        roleStats[role].redo += (p.gameStats?.redoCount || 0);
        if (p.isFinished) roleStats[role].finished++;

        totalLogic += (p.gameStats?.currentLogicScore || 0);
        totalRedo += (p.gameStats?.redoCount || 0);
        totalMinigameWins += (p.gameStats?.minigameWins || 0);
        totalMinigamePlays += (p.gameStats?.minigameTotal || 0);

        let startTimeStr = '', endTimeStr = '';
        let playtimeSec = 0;

        if (p.timeTracking?.startTime) {
            startTimeStr = new Date(p.timeTracking.startTime).toLocaleString('vi-VN');
            if (p.isFinished && p.timeTracking?.endTime) {
                endTimeStr = new Date(p.timeTracking.endTime).toLocaleString('vi-VN');
                playtimeSec = (p.timeTracking.endTime - p.timeTracking.startTime) / 1000;
                if (playtimeSec > 10 && playtimeSec < 7200) { 
                    playTimes.push(playtimeSec);
                    roleStats[role].time += playtimeSec;
                }
            }
        }

        if (!p.isFinished) {
            const dropScene = p.liveStatus?.currentScene || p.currentScene || "menu";
            dropOffScenes[dropScene] = (dropOffScenes[dropScene] || 0) + 1;
        }

        overviewRows.push({
            "Mã HS (ID)": id, "Họ Tên": p.name || "", "Tuyến Nhân Vật": role,
            "Trạng Thái": p.isFinished ? "Đã hoàn thành" : "Đang chơi/Bỏ cuộc",
            "Cảnh Dừng Lại": p.liveStatus?.currentScene || p.currentScene || "menu",
            "Thời Gian Chơi (Giây)": playtimeSec > 0 ? playtimeSec.toFixed(0) : "Chưa xong",
            "Số Lần Chọn Lại (Undo)": p.gameStats?.redoCount || 0,
            "Thắng Minigame": `${p.gameStats?.minigameWins || 0} / ${p.gameStats?.minigameTotal || 0}`,
            "Điểm Lý Trí (%)": p.gameStats?.currentLogicScore || (p.isFinished ? 100 : 0),
            "Bắt Đầu": startTimeStr, "Kết Thúc": endTimeStr
        });

        if (p.actionLogs) {
            const logsArray = Object.values(p.actionLogs).sort((a, b) => a.timestamp - b.timestamp);
            logsArray.forEach(log => {
                actionLogRows.push({
                    "Họ Tên": p.name || "Vô danh", "ID": id,
                    "Thời Gian": new Date(log.timestamp).toLocaleString('vi-VN'),
                    "Đắn Đo (Giây)": log.duration || 0,
                    "Lựa Chọn": log.action
                });

                if (log.action && !log.action.includes("Hệ thống:") && !log.action.includes("Bắt đầu Minigame")) {
                    const actName = log.action;
                    if (!actionStats[actName]) actionStats[actName] = { count: 0, totalTime: 0 };
                    actionStats[actName].count += 1;
                    actionStats[actName].totalTime += (log.duration || 0);

                    if (log.duration > 0 && log.duration <= 1.5) {
                        impulsiveActions[actName] = (impulsiveActions[actName] || 0) + 1;
                    }
                }
            });
        }
    }

    const completionRate = totalPlayers > 0 ? ((finishedPlayers / totalPlayers) * 100).toFixed(1) : 0;
    const mgWinRate = totalMinigamePlays > 0 ? ((totalMinigameWins / totalMinigamePlays) * 100).toFixed(1) : 0;
    
    let avgPlayTime = 0, fastestTime = 0, slowestTime = 0;
    if (playTimes.length > 0) {
        avgPlayTime = (playTimes.reduce((a, b) => a + b, 0) / playTimes.length).toFixed(0);
        fastestTime = Math.min(...playTimes).toFixed(0);
        slowestTime = Math.max(...playTimes).toFixed(0);
    }

    let actionArr = Object.keys(actionStats).map(key => ({
        action: key, count: actionStats[key].count,
        avgTime: (actionStats[key].totalTime / actionStats[key].count).toFixed(2)
    }));
    const topHesitant = [...actionArr].sort((a, b) => b.avgTime - a.avgTime).slice(0, 5);
    
    let impulsiveArr = Object.keys(impulsiveActions).map(key => ({
        action: key, count: impulsiveActions[key]
    })).sort((a, b) => b.count - a.count).slice(0, 5);

    let dropOffArr = Object.keys(dropOffScenes).map(key => ({
        scene: key, count: dropOffScenes[key]
    })).sort((a, b) => b.count - a.count).slice(0, 5);


    analysisRows.push({ "HẠNG MỤC PHÂN TÍCH": "=== 1. TỔNG QUAN ===", "KẾT QUẢ": "", "GHI CHÚ": "" });
    analysisRows.push({ "HẠNG MỤC PHÂN TÍCH": "Tổng học sinh tham gia", "KẾT QUẢ": totalPlayers, "GHI CHÚ": "" });
    analysisRows.push({ "HẠNG MỤC PHÂN TÍCH": "Tỉ lệ hoàn thành", "KẾT QUẢ": `${completionRate}% (${finishedPlayers}/${totalPlayers})`, "GHI CHÚ": "" });
    analysisRows.push({ "HẠNG MỤC PHÂN TÍCH": "Lý trí trung bình", "KẾT QUẢ": `${totalPlayers ? (totalLogic / totalPlayers).toFixed(1) : 0}%`, "GHI CHÚ": "" });
    analysisRows.push({ "HẠNG MỤC PHÂN TÍCH": "Lần Undo trung bình", "KẾT QUẢ": `${totalPlayers ? (totalRedo / totalPlayers).toFixed(1) : 0} lần/người`, "GHI CHÚ": "" });
    analysisRows.push({ "HẠNG MỤC PHÂN TÍCH": "Tỉ lệ thắng Minigame", "KẾT QUẢ": `${mgWinRate}% (${totalMinigameWins}/${totalMinigamePlays})`, "GHI CHÚ": "" });
    analysisRows.push({}); 

    analysisRows.push({ "HẠNG MỤC PHÂN TÍCH": "=== 2. THỐNG KÊ THỜI GIAN ===", "KẾT QUẢ": "", "GHI CHÚ": "" });
    analysisRows.push({ "HẠNG MỤC PHÂN TÍCH": "Thời gian Trung bình", "KẾT QUẢ": `${avgPlayTime} giây (~${(avgPlayTime/60).toFixed(1)} phút)`, "GHI CHÚ": "" });
    analysisRows.push({ "HẠNG MỤC PHÂN TÍCH": "Chơi Nhanh nhất", "KẾT QUẢ": `${fastestTime} giây (~${(fastestTime/60).toFixed(1)} phút)`, "GHI CHÚ": "" });
    analysisRows.push({ "HẠNG MỤC PHÂN TÍCH": "Chơi Chậm nhất", "KẾT QUẢ": `${slowestTime} giây (~${(slowestTime/60).toFixed(1)} phút)`, "GHI CHÚ": "" });
    analysisRows.push({});

    analysisRows.push({ "HẠNG MỤC PHÂN TÍCH": "=== 3. TUYẾN NHÂN VẬT ===", "KẾT QUẢ": "Chọn", "GHI CHÚ": "Lý trí TB & Undo TB" });
    for (const [r, stats] of Object.entries(roleStats)) {
        let pct = ((stats.count/totalPlayers)*100).toFixed(1);
        let avgL = stats.count > 0 ? (stats.logic / stats.count).toFixed(1) : 0;
        let avgR = stats.count > 0 ? (stats.redo / stats.count).toFixed(1) : 0;
        analysisRows.push({ 
            "HẠNG MỤC PHÂN TÍCH": `Nhân vật: ${r}`, 
            "KẾT QUẢ": `${stats.count} HS (${pct}%)`, 
            "GHI CHÚ": `L: ${avgL}% | U: ${avgR}` 
        });
    }
    analysisRows.push({});

    analysisRows.push({ "HẠNG MỤC PHÂN TÍCH": "=== 4. CÁC QUYẾT ĐỊNH ĐẮN ĐO NHẤT ===", "KẾT QUẢ": "Thời gian", "GHI CHÚ": "" });
    if (topHesitant.length === 0) analysisRows.push({ "HẠNG MỤC PHÂN TÍCH": "Trống", "KẾT QUẢ": "", "GHI CHÚ": "" });
    topHesitant.forEach((item, index) => {
        analysisRows.push({ "HẠNG MỤC PHÂN TÍCH": `Top ${index + 1}. ${item.action}`, "KẾT QUẢ": `${item.avgTime} giây`, "GHI CHÚ": `Lặp ${item.count} lần` });
    });
    analysisRows.push({});

    analysisRows.push({ "HẠNG MỤC PHÂN TÍCH": "=== 5. BẤM BỐC ĐỒNG (< 1.5s) ===", "KẾT QUẢ": "Số lượt", "GHI CHÚ": "" });
    if (impulsiveArr.length === 0) analysisRows.push({ "HẠNG MỤC PHÂN TÍCH": "Trống", "KẾT QUẢ": "", "GHI CHÚ": "" });
    impulsiveArr.forEach((item, index) => {
        analysisRows.push({ "HẠNG MỤC PHÂN TÍCH": `Top ${index + 1}. ${item.action}`, "KẾT QUẢ": `${item.count} lượt`, "GHI CHÚ": "" });
    });
    analysisRows.push({});

    analysisRows.push({ "HẠNG MỤC PHÂN TÍCH": "=== 6. ĐIỂM NÓNG BỎ CUỘC ===", "KẾT QUẢ": "Số HS kẹt", "GHI CHÚ": "" });
    if (dropOffArr.length === 0) analysisRows.push({ "HẠNG MỤC PHÂN TÍCH": "Trống", "KẾT QUẢ": "", "GHI CHÚ": "" });
    dropOffArr.forEach((item, index) => {
        analysisRows.push({ "HẠNG MỤC PHÂN TÍCH": `Top ${index + 1}. Cảnh: ${item.scene}`, "KẾT QUẢ": `${item.count} HS`, "GHI CHÚ": "" });
    });

    const workbook = XLSX.utils.book_new();

    const wsOverview = XLSX.utils.json_to_sheet(overviewRows);
    wsOverview['!cols'] = [{wch:15}, {wch:25}, {wch:15}, {wch:20}, {wch:20}, {wch:15}, {wch:10}, {wch:15}, {wch:25}, {wch:25}];
    XLSX.utils.book_append_sheet(workbook, wsOverview, "Tổng quan");

    if (actionLogRows.length > 0) {
        const wsLogs = XLSX.utils.json_to_sheet(actionLogRows);
        wsLogs['!cols'] = [{wch:25}, {wch:15}, {wch:25}, {wch:15}, {wch:70}]; 
        XLSX.utils.book_append_sheet(workbook, wsLogs, "Nhật ký hành vi");
    }

    const wsAnalysis = XLSX.utils.json_to_sheet(analysisRows);
    wsAnalysis['!cols'] = [{wch:75}, {wch:15}, {wch:40}]; 
    XLSX.utils.book_append_sheet(workbook, wsAnalysis, "Phân Tích");

    let fileName = `Bao_Cao_Thuc_Nghiem_${currentRoomCode || 'Offline'}.xlsx`;
    if (isAutoBackup) fileName = `AUTO_BACKUP_` + fileName;
    XLSX.writeFile(workbook, fileName);
};

// ==========================================
// 4. KHIÊN BẢO VỆ (CHỐNG TẮT NHẦM)
// ==========================================
window.addEventListener('beforeunload', function (e) {
    if (currentRoomCode) {
        e.preventDefault();
        e.returnValue = 'Phòng thực nghiệm đang mở! Dữ liệu có thể bị gián đoạn.';
    }
});