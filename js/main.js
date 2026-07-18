// ==========================================
// THAM CHIẾU DOM UI
// ==========================================
const roleScreen = document.getElementById('role-selection-screen');
const gameScreen = document.getElementById('gameplay-screen');
const container = document.getElementById('game-container');
const charNameEl = document.getElementById('char-name');
const storyTextEl = document.getElementById('story-text');
const choicesBoxEl = document.getElementById('choices-box');
const charSpriteEl = document.getElementById('char-sprite-img');
const dialogueContainer = document.getElementById('dialogue-container');

const textScrollBox = document.getElementById('text-scroll-box');
const choicesScrollBox = document.getElementById('choices-scroll-box');

const resultOverlay = document.getElementById('result-overlay');
const resultTitle = document.getElementById('result-title');
const resultImg = document.getElementById('result-img');
const resultDesc = document.getElementById('result-desc');
const resultChoicesBox = document.getElementById('result-choices-box');

const topNavTitle = document.getElementById('top-nav-title'); 
const topNavSub = document.getElementById('top-nav-sub');     
const btnResetRole = document.getElementById('btn-reset-role'); 

let activeMobileCardIndex = 0; 
let transitionTimer = null; 
const DEFAULT_BG = "https://images.unsplash.com/photo-1580582932707-520aed937b7b?q=80&w=1932&auto=format&fit=crop";

// ==========================================
// HÀM KHỞI CHẠY GAME
// ==========================================
function startRole(role) {
    roleScreen.classList.add('hidden');
    roleScreen.classList.remove('flex');
    
    gameScreen.classList.remove('hidden');
    gameScreen.classList.add('flex', 'animate__fadeIn');

    if (btnResetRole) {
        btnResetRole.classList.remove('hidden');
        btnResetRole.classList.add('flex');
    }

    if (role === 'mai') {
        topNavTitle.innerText = "ĐANG ĐÓNG VAI: MAI";
        topNavTitle.className = "text-sm sm:text-lg md:text-2xl font-black tracking-widest text-emerald-400 uppercase truncate drop-shadow-md transition-all duration-300";
        topNavSub.innerText = "Góc nhìn: Nạn nhân nữ chịu đựng & phản kháng";
        loadScene('mai_man_1');
    } else if (role === 'minh') {
        topNavTitle.innerText = "ĐANG ĐÓNG VAI: MINH";
        topNavTitle.className = "text-sm sm:text-lg md:text-2xl font-black tracking-widest text-indigo-400 uppercase truncate drop-shadow-md transition-all duration-300";
        topNavSub.innerText = "Góc nhìn: Nạn nhân nam chịu đựng & phản kháng";
        loadScene('minh_man_1');
    } else if (role === 'linh') {
        topNavTitle.innerText = "ĐANG ĐÓNG VAI: LINH";
        topNavTitle.className = "text-sm sm:text-lg md:text-2xl font-black tracking-widest text-sky-400 uppercase truncate drop-shadow-md transition-all duration-300";
        topNavSub.innerText = "Góc nhìn: Người chứng kiến nữ & tâm lý";
        loadScene('linh_man_1');
    } else if (role === 'nam') {
        topNavTitle.innerText = "ĐANG ĐÓNG VAI: NAM";
        topNavTitle.className = "text-sm sm:text-lg md:text-2xl font-black tracking-widest text-amber-400 uppercase truncate drop-shadow-md transition-all duration-300";
        topNavSub.innerText = "Góc nhìn: Người chứng kiến nam & can thiệp";
        loadScene('nam_man_1');
    }
}

// ==========================================
// HÀM RESET GAME AN TOÀN
// ==========================================
function resetGame() {
    if (transitionTimer) clearTimeout(transitionTimer); 
    
    if (resultOverlay) {
        resultOverlay.classList.add('hidden');
        resultOverlay.classList.remove('flex', 'animate__fadeIn');
    }

    gameScreen.classList.add('hidden');
    gameScreen.classList.remove('flex', 'animate__fadeIn');
    
    roleScreen.classList.remove('hidden');
    roleScreen.classList.add('flex', 'animate__fadeIn');

    container.style.backgroundImage = `url('${DEFAULT_BG}')`;

    if (btnResetRole) {
        btnResetRole.classList.add('hidden');
        btnResetRole.classList.remove('flex');
    }

    if (topNavTitle && topNavSub) {
        topNavTitle.innerText = "GÓC KHUẤT BÀN CÙNG";
        topNavTitle.className = "text-sm sm:text-lg md:text-2xl font-black tracking-widest text-white uppercase truncate drop-shadow-md transition-all duration-300";
        topNavSub.innerText = "Giáo dục về vấn nạn bạo lực học đường";
    }

    // ĐÃ SỬA: overflow-visible để giữ hiệu ứng Pop-out
    gameScreen.className = "hidden w-full h-full max-h-[720px] shrink-0 flex-col md:flex-row items-stretch transition-all duration-300 min-h-0 overflow-visible relative mt-8 sm:mt-0";

    const cardMai = document.getElementById('card-mai');
    const cardMinh = document.getElementById('card-minh');
    const cardLinh = document.getElementById('card-linh');
    const cardNam = document.getElementById('card-nam');

    if (cardMai && cardMinh && cardLinh && cardNam) {
        cardMai.className = "role-card flex flex-1 bg-slate-900/80 border border-slate-700/50 hover:border-emerald-500/60 rounded-[20px] sm:rounded-[28px] cursor-pointer transform lg:hover:-translate-y-2 transition-all duration-500 flex-col justify-between shadow-xl hover:shadow-2xl group overflow-visible relative w-full h-full";
        cardMinh.className = "role-card hidden sm:flex flex-1 bg-slate-900/80 border border-slate-700/50 hover:border-indigo-500/60 rounded-[20px] sm:rounded-[28px] cursor-pointer transform lg:hover:-translate-y-2 transition-all duration-500 flex-col justify-between shadow-xl hover:shadow-2xl group overflow-visible relative w-full h-full";
        cardLinh.className = "role-card hidden sm:flex flex-1 bg-slate-900/80 border border-slate-700/50 hover:border-sky-500/60 rounded-[20px] sm:rounded-[28px] cursor-pointer transform lg:hover:-translate-y-2 transition-all duration-500 flex-col justify-between shadow-xl hover:shadow-2xl group overflow-visible relative w-full h-full";
        cardNam.className = "role-card hidden sm:flex flex-1 bg-slate-900/80 border border-slate-700/50 hover:border-amber-500/60 rounded-[20px] sm:rounded-[28px] cursor-pointer transform lg:hover:-translate-y-2 transition-all duration-500 flex-col justify-between shadow-xl hover:shadow-2xl group overflow-visible relative w-full h-full";
    }

    activeMobileCardIndex = 0;
    updateMobileDots();
}

// ==========================================
// HÀM NẠP KỊCH BẢN & XỬ LÝ CINEMATIC
// ==========================================
function loadScene(sceneId) {
    if (transitionTimer) clearTimeout(transitionTimer);
    
    if (resultOverlay) {
        resultOverlay.classList.add('hidden');
        resultOverlay.classList.remove('flex', 'animate__fadeIn');
    }

    if (sceneId === 'RESET_GAME') {
        resetGame();
        return;
    }

    const data = STORY_DATA[sceneId];
    if (!data) return;

    if (dialogueContainer) {
        dialogueContainer.className = `h-[52%] sm:h-[48%] md:h-full md:w-7/12 lg:w-1/2 p-3.5 sm:p-6 md:p-8 rounded-2xl sm:rounded-3xl shadow-2xl backdrop-blur-md flex flex-col justify-between min-h-0 shrink-0 z-20 border transition-colors duration-500 ${data.bgTheme}`;
    }
    
    if (data.bgImage) {
        container.style.backgroundImage = `url('${data.bgImage}')`;
    }

    if (charSpriteEl && data.charSprite) {
        charSpriteEl.src = data.charSprite;
        charSpriteEl.classList.remove('animate__pulse');
        void charSpriteEl.offsetWidth; 
        charSpriteEl.classList.add('animate__pulse');
    }

    charNameEl.className = `font-bold text-base sm:text-xl md:text-2xl pb-2 tracking-wide flex items-center gap-2 border-b border-slate-800 shrink-0 ${data.charColor}`;
    charNameEl.innerText = data.charName;

    if (data.isResult) {
        storyTextEl.innerText = "Đang quan sát diễn biến và hậu quả...";
        choicesBoxEl.innerHTML = ''; 

        transitionTimer = setTimeout(() => {
            showResultOverlay(data);
        }, 1200);

        return;
    }

    storyTextEl.innerText = data.story;
    choicesBoxEl.innerHTML = ''; 

    data.choices.forEach(choice => {
        const btn = document.createElement('button');
        if (choice.isUndo) {
            btn.className = "w-full text-left bg-amber-700/85 hover:bg-amber-600 border border-amber-600/50 text-white font-semibold p-3 sm:p-4 rounded-xl sm:rounded-2xl transition-all duration-200 shadow active:scale-[0.99] text-xs sm:text-base md:text-lg flex items-center justify-between group shrink-0";
        } else {
            btn.className = "w-full text-left bg-slate-800/90 hover:bg-slate-750 border border-slate-700 hover:border-slate-500 text-slate-100 p-3 sm:p-4 rounded-xl sm:rounded-2xl transition-all duration-200 shadow active:scale-[0.99] text-xs sm:text-base md:text-lg font-medium flex items-center justify-between group leading-normal sm:leading-relaxed shrink-0";
        }
        btn.innerHTML = `<span class="pr-2 sm:pr-4">${choice.text}</span>`;
        btn.onclick = () => loadScene(choice.nextScene);
        choicesBoxEl.appendChild(btn);
    });

    if (textScrollBox) textScrollBox.scrollTop = 0;
    if (choicesScrollBox) choicesScrollBox.scrollTop = 0;
}

// ==========================================
// HÀM HIỆN LỚP PHỦ KẾT QUẢ TOÀN MÀN HÌNH
// ==========================================
function showResultOverlay(data) {
    if (!resultOverlay) return;

    const resultBadge = document.getElementById('result-badge');
    const resultBgGlow = document.getElementById('result-bg-glow');

    let isSuccess = data.resultColor && data.resultColor.includes('emerald');
    let badgeText = isSuccess ? "★ CAN THIỆP THÀNH CÔNG" : "⚠ HẬU QUẢ ĐÁNG TIẾC";
    
    if (resultBadge) {
        resultBadge.innerText = badgeText;
        if (isSuccess) {
            resultBadge.className = "inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs md:text-sm font-extrabold uppercase tracking-widest bg-emerald-500/15 text-emerald-400 border border-emerald-500/40 shadow-[0_0_15px_rgba(16,185,129,0.3)]";
            if (resultBgGlow) resultBgGlow.className = "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vh] rounded-full blur-[140px] pointer-events-none transition-all duration-1000 bg-emerald-600/25";
        } else {
            resultBadge.className = "inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs md:text-sm font-extrabold uppercase tracking-widest bg-rose-500/15 text-rose-400 border border-rose-500/40 shadow-[0_0_15px_rgba(244,63,94,0.3)]";
            if (resultBgGlow) resultBgGlow.className = "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vh] rounded-full blur-[140px] pointer-events-none transition-all duration-1000 bg-rose-600/25";
        }
    }

    resultTitle.innerText = data.resultTitle || "KẾT QUẢ";
    resultTitle.className = `text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight uppercase leading-none drop-shadow-lg mb-4 sm:mb-6 animate__animated animate__fadeInUp ${data.resultColor || 'text-white'}`;
    
    if (resultImg) {
        if (data.illustration) {
            resultImg.src = data.illustration;
            resultImg.parentElement.style.display = 'flex';
        } else {
            resultImg.src = "https://images.unsplash.com/photo-1516534775068-ba3e7458af70?q=80&w=1000&auto=format&fit=crop";
        }
    }

    if (resultDesc) resultDesc.innerText = data.story;
    
    resultChoicesBox.innerHTML = '';
    data.choices.forEach(choice => {
        const btn = document.createElement('button');
        if (choice.isUndo) {
            btn.className = "w-full text-center bg-gradient-to-r from-amber-600 via-orange-600 to-yellow-600 hover:from-amber-500 hover:to-yellow-500 text-slate-950 font-black p-4 sm:p-5 rounded-2xl transition-all duration-200 shadow-[0_10px_25px_rgba(245,158,11,0.3)] hover:shadow-[0_15px_30px_rgba(245,158,11,0.5)] active:scale-[0.98] text-base sm:text-lg md:text-xl flex items-center justify-center gap-3 group border border-yellow-400/30";
            btn.innerHTML = `
                <svg class="w-6 h-6 transform group-hover:-rotate-45 transition-transform duration-300 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6"></path></svg>
                <span>${choice.text}</span>
            `;
        } else {
            btn.className = "w-full text-center bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-500 hover:from-emerald-500 hover:to-teal-400 text-white font-black p-4 sm:p-5 rounded-2xl transition-all duration-200 shadow-[0_10px_25px_rgba(16,185,129,0.3)] hover:shadow-[0_15px_30px_rgba(16,185,129,0.5)] active:scale-[0.98] text-base sm:text-lg md:text-xl flex items-center justify-center gap-3 group border border-emerald-400/30";
            btn.innerHTML = `
                <span>${choice.text}</span>
                <svg class="w-6 h-6 transform group-hover:translate-x-2 transition-transform duration-300 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
            `;
        }
        btn.onclick = () => loadScene(choice.nextScene);
        resultChoicesBox.appendChild(btn);
    });

    resultOverlay.classList.remove('hidden');
    resultOverlay.classList.add('flex', 'animate__fadeIn');
}

// ==========================================
// ĐIỀU KHIỂN SLIDER TRÊN ĐIỆN THOẠI (4 THẺ)
// ==========================================
function switchMobileCard(direction) {
    activeMobileCardIndex = (activeMobileCardIndex + direction + 4) % 4;
    
    const cards = [
        document.getElementById('card-mai'),
        document.getElementById('card-minh'),
        document.getElementById('card-linh'),
        document.getElementById('card-nam')
    ];

    cards.forEach((card, index) => {
        if (!card) return;
        if (index === activeMobileCardIndex) {
            card.classList.remove('hidden');
            card.classList.add('flex', 'animate__fadeIn');
        } else {
            card.classList.add('hidden');
            card.classList.remove('flex', 'animate__fadeIn');
        }
    });

    updateMobileDots();
}

function updateMobileDots() {
    const colors = [
        "bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.8)]", 
        "bg-indigo-500 shadow-[0_0_8px_rgba(99,102,241,0.8)]", 
        "bg-sky-500 shadow-[0_0_8px_rgba(14,165,233,0.8)]", 
        "bg-amber-500 shadow-[0_0_8px_rgba(245,158,11,0.8)]"
    ];
    
    for (let i = 0; i < 4; i++) {
        const dot = document.getElementById(`dot-${i}`);
        if (!dot) continue;
        if (i === activeMobileCardIndex) {
            dot.className = `w-6 h-1.5 ${colors[i]} rounded-full transition-all duration-300`;
        } else {
            dot.className = "w-1.5 h-1.5 bg-white/20 rounded-full transition-all duration-300";
        }
    }
}