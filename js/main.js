// =================================================================
// HỆ THỐNG ĐIỀU KHIỂN CHÍNH GÓC KHUẤT (V14.0 - MASTER ULTIMATE)
// Tích hợp Lệnh Vàng Dọn Dẹp Âm Thanh | Đồng bộ khung thoại 85% | Zero Bug
// =================================================================

const SAVE_KEY_PREFIX = 'bao_luc_hoc_duong_save_';
let currentPlayingRole = '';
let typewriterTimeout = null;
let transitionTimer = null;
let activeMobileCardIndex = 0;
const DEFAULT_BG = "https://images.unsplash.com/photo-1580582932707-520aed937b7b?q=80&w=1932&auto=format&fit=crop";

window.GameStats = { redoCount: 0, minigameWins: 0, minigameTotal: 0 };

const mainMenuScreen = document.getElementById('main-menu-screen');
const mainHeader = document.getElementById('main-header');
const roleScreen = document.getElementById('role-selection-screen');
const gameScreen = document.getElementById('gameplay-screen');
const container = document.getElementById('game-bg'); 
const bgOverlay = document.getElementById('bg-overlay');
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
const confirmModal = document.getElementById('confirm-reset-modal');
const saveModal = document.getElementById('save-modal');
const cinematicFlash = document.getElementById('cinematic-flash');

function preloadAllAudio() { if (window.GameAudio) window.GameAudio.preloadAllAudio(); }
document.addEventListener('DOMContentLoaded', () => { preloadAllAudio(); createFireflies(); });

function unlockAudio() { if (window.GameAudio) window.GameAudio.unlockAudio(); }
function initGlobalAudio() { 
    unlockAudio(); 
    setTimeout(() => {
        if (!currentPlayingRole || (mainMenuScreen && !mainMenuScreen.classList.contains('hidden')) || (roleScreen && !roleScreen.classList.contains('hidden'))) {
            startBGM('bgm_normal');
        }
    }, 150);
}
document.addEventListener('click', initGlobalAudio, { once: true });
document.addEventListener('touchstart', initGlobalAudio, { once: true });
document.addEventListener('keydown', initGlobalAudio, { once: true });

function playSound(type) { if (window.GameAudio) window.GameAudio.playSound(type); }
function startBGM(key) { if (window.GameAudio) window.GameAudio.startBGM(key || 'bgm_normal'); }
function stopBGM() { if (window.GameAudio) window.GameAudio.stopBGM(); }
function stopAmbient() { if (window.GameAudio && window.GameAudio.stopAmbient) window.GameAudio.stopAmbient(); }
function stopAllAudio() { if (window.GameAudio && window.GameAudio.stopAll) window.GameAudio.stopAll(); }
function toggleAudio() { if (window.GameAudio) window.GameAudio.toggleAudio(); }

function createFireflies() {
    const fireflyContainer = document.getElementById('fireflies-container');
    if (!fireflyContainer) return;
    fireflyContainer.innerHTML = '';
    for (let i = 0; i < 20; i++) {
        let firefly = document.createElement('div');
        firefly.className = 'firefly';
        let size = Math.random() * 5 + 2.5; 
        firefly.style.width = size + 'px'; firefly.style.height = size + 'px';
        firefly.style.left = Math.random() * 100 + '%'; firefly.style.top = (Math.random() * 60 + 40) + '%';
        let duration = Math.random() * 3.5 + 3.5; let delay = Math.random() * 2.5;
        firefly.style.animation = `float-up ${duration}s ease-in ${delay}s infinite`;
        fireflyContainer.appendChild(firefly);
    }
}

function typeWriter(element, text, index = 0, speed = 12) {
    if (index === 0) {
        element.textContent = ''; 
        element.classList.add('typing-cursor');
    }
    if (index < text.length) {
        element.appendChild(document.createTextNode(text.charAt(index)));
        typewriterTimeout = setTimeout(() => typeWriter(element, text, index + 1, speed), speed);
    } else {
        element.classList.remove('typing-cursor');
    }
}

function getEmotionSpritePath(baseSprite, emotion) {
    if (!baseSprite) return '';
    if (!emotion || emotion === 'normal' || emotion === 'calm') return baseSprite;
    
    const emotionMap = {
        happy: 'Happy', victory: 'Happy', smile: 'Happy', proud: 'Happy',
        cry: 'Cry', sad: 'Cry', worried: 'Cry', scare: 'Cry', depressed: 'Cry', panic: 'Cry', hurt: 'Cry',
        angry: 'Angry', rage: 'Angry', mad: 'Angry', fight: 'Angry', resist: 'Angry', confront: 'Angry', fierce: 'Angry', shout: 'Angry',
        think: 'Think', ponder: 'Think', debate: 'Think', doubt: 'Think', smart: 'Think', plan: 'Think', analyze: 'Think', serious: 'Think', focus: 'Think'
    };
    
    const suffix = emotionMap[emotion] || '';
    if (!suffix) return baseSprite;

    let cleanBase = baseSprite.replace(/(_Happy|_Cry|_Angry|_Think|_Scare|_Weak|_Defeat|_Hand|_Attack)\.webp$/i, '.webp');
    return cleanBase.replace(/\.webp$/i, `_${suffix}.webp`);
}

function applyScenePresentation(data) {
    if (charSpriteEl && data.charSprite) {
        const targetSprite = getEmotionSpritePath(data.charSprite, data.charEmotion);
        const cleanBase = data.charSprite.replace(/(_Happy|_Cry|_Angry|_Think|_Scare|_Weak|_Defeat|_Hand|_Attack)\.webp$/i, '.webp');
        
        charSpriteEl.onerror = function() {
            this.onerror = null;
            this.src = cleanBase;
        };
        charSpriteEl.src = targetSprite;

        charSpriteEl.className = "mt-auto -mb-2 sm:-mb-5 md:-mb-10 max-h-[26vh] sm:max-h-[36vh] md:max-h-[68vh] lg:max-h-[72vh] w-auto max-w-[95%] md:max-w-none object-contain object-bottom mx-auto transition-all duration-500 select-none drop-shadow-[0_10px_20px_rgba(0,0,0,0.65)] transform-gpu relative z-10 animate__animated will-change-transform";
        void charSpriteEl.offsetWidth; 

        if (data.charEmotion && ['worried', 'angry', 'cry', 'victory', 'panic', 'rage', 'debate', 'think'].includes(data.charEmotion)) {
            charSpriteEl.classList.add('char-cinematic-zoom');
        }

        if (data.charEmotion === 'depressed' || data.charEmotion === 'sad') {
            charSpriteEl.classList.add('filter-depressed');
        } else if (data.charEmotion === 'panic' || data.charEmotion === 'scare' || data.charEmotion === 'worried') {
            charSpriteEl.classList.add('filter-panic');
        } else if (data.charEmotion === 'rage' || data.charEmotion === 'angry' || data.charEmotion === 'fight') {
            charSpriteEl.classList.add('filter-rage');
        } else if (data.charEmotion === 'think' || data.charEmotion === 'debate' || data.charEmotion === 'smart') {
            charSpriteEl.classList.add('filter-mind-glow');
        } else {
            charSpriteEl.classList.add('animate__animated', 'animate__fadeIn');
        }
    }

    if (gameScreen) {
        if (data.visualEffect === 'flash-red' || data.charEmotion === 'panic' || data.charEmotion === 'rage' || data.charEmotion === 'angry') {
            gameScreen.classList.remove('flash-red'); void gameScreen.offsetWidth; gameScreen.classList.add('flash-red');
        } else if (data.visualEffect === 'flash-white' || data.charEmotion === 'victory') {
            gameScreen.classList.remove('flash-white'); void gameScreen.offsetWidth; gameScreen.classList.add('flash-white');
        }

        gameScreen.classList.add('screen-vignette');
        if (data.bgTheme && (data.bgTheme.includes('rose') || data.bgTheme.includes('amber') || data.charEmotion === 'depressed' || data.charEmotion === 'worried' || data.charEmotion === 'panic')) {
            gameScreen.classList.add('active-vignette');
        } else {
            gameScreen.classList.remove('active-vignette');
        }

        gameScreen.classList.remove('scene-transition-enter', 'scene-transition-active');
        void gameScreen.offsetWidth;
        gameScreen.classList.add('scene-transition-active');
        setTimeout(() => gameScreen.classList.add('scene-transition-enter'), 20);
    }

    if (dialogueContainer) {
        dialogueContainer.classList.remove('scene-transition-enter', 'scene-transition-active');
        void dialogueContainer.offsetWidth;
        dialogueContainer.classList.add('scene-transition-active');
        setTimeout(() => dialogueContainer.classList.add('scene-transition-enter'), 20);
    }
}

function startGame() {
    playSound('button'); initGlobalAudio(); 
    setTimeout(() => { startBGM('bgm_normal'); }, 150);
    if (mainMenuScreen) { mainMenuScreen.classList.add('hidden'); mainMenuScreen.classList.remove('flex'); }
    if (mainHeader) { mainHeader.classList.remove('hidden'); mainHeader.classList.add('flex'); }
    if (roleScreen) { roleScreen.classList.remove('hidden'); roleScreen.classList.add('flex', 'animate__fadeIn'); }
    updateMobileDots();
}

function showConfirmModal() {
    playSound('button'); 
    if (confirmModal) {
        confirmModal.classList.remove('hidden'); confirmModal.classList.add('flex', 'animate__fadeIn');
        const modalContent = confirmModal.querySelector('div');
        modalContent.classList.remove('animate__zoomIn'); void modalContent.offsetWidth; modalContent.classList.add('animate__zoomIn');
    }
}

function closeConfirmModal() {
    playSound('button'); 
    if (confirmModal) { confirmModal.classList.add('hidden'); confirmModal.classList.remove('flex', 'animate__fadeIn'); }
}

function checkSaveAndStart(role) {
    playSound('button');
    const savedScene = localStorage.getItem(SAVE_KEY_PREFIX + role);
    const startScene = role + '_man_1';

    if (savedScene && savedScene !== startScene) {
        if (saveModal) {
            saveModal.classList.remove('hidden'); saveModal.classList.add('flex', 'animate__fadeIn');
            const btnResume = document.getElementById('btn-resume-save');
            const btnRestart = document.getElementById('btn-restart-save');
            let match = savedScene.match(/_man_(\d+)/);
            let manNumber = match ? match[1] : '';
            document.getElementById('save-modal-text').innerText = `Hệ thống phát hiện bạn đang chơi dở ở Màn ${manNumber}. Bạn muốn tiếp tục hay chơi lại từ đầu?`;

            btnResume.onclick = () => {
                playSound('button'); saveModal.classList.add('hidden'); saveModal.classList.remove('flex');
                startRole(role, savedScene);
            };
            btnRestart.onclick = () => {
                playSound('button'); saveModal.classList.add('hidden'); saveModal.classList.remove('flex');
                localStorage.removeItem(SAVE_KEY_PREFIX + role); startRole(role, startScene);
            };
        }
    } else {
        startRole(role, startScene);
    }
}

function startRole(role, sceneToLoad) {
    currentPlayingRole = role;
    window.GameStats = { redoCount: 0, minigameWins: 0, minigameTotal: 0 };
    
    // 👉 LỆNH VÀNG V14.0: Dập tắt mọi âm thanh môi trường cũ trước khi vào vai
    stopAmbient();
    startBGM('bgm_normal');

    bgOverlay.className = "fixed inset-0 bg-black/80 pointer-events-none transition-colors duration-1000 z-10";
    roleScreen.classList.add('hidden'); roleScreen.classList.remove('flex');
    gameScreen.classList.remove('hidden'); gameScreen.classList.add('flex', 'animate__fadeIn');
    if (btnResetRole) { btnResetRole.classList.remove('hidden'); btnResetRole.classList.add('flex'); }

    if (role === 'mai') {
        topNavTitle.innerText = "Nhân Vật: MAI"; topNavTitle.className = "text-[14px] sm:text-lg md:text-2xl font-black tracking-widest text-emerald-400 uppercase truncate drop-shadow-md transition-colors duration-300"; topNavSub.innerText = "Nạn nhân nữ chịu đựng";
    } else if (role === 'minh') {
        topNavTitle.innerText = "Nhân Vật: MINH"; topNavTitle.className = "text-[14px] sm:text-lg md:text-2xl font-black tracking-widest text-indigo-400 uppercase truncate drop-shadow-md transition-colors duration-300"; topNavSub.innerText = "Nạn nhân nam chịu đựng";
    } else if (role === 'linh') {
        topNavTitle.innerText = "Nhân Vật: LINH"; topNavTitle.className = "text-[14px] sm:text-lg md:text-2xl font-black tracking-widest text-sky-400 uppercase truncate drop-shadow-md transition-colors duration-300"; topNavSub.innerText = "Người chứng kiến nữ";
    } else if (role === 'nam') {
        topNavTitle.innerText = "Nhân Vật: NAM"; topNavTitle.className = "text-[14px] sm:text-lg md:text-2xl font-black tracking-widest text-amber-400 uppercase truncate drop-shadow-md transition-colors duration-300"; topNavSub.innerText = "Người chứng kiến nam";
    }
    loadScene(sceneToLoad);
}

function resetGame() {
    closeConfirmModal();
    if (transitionTimer) clearTimeout(transitionTimer); 
    if (typewriterTimeout) clearTimeout(typewriterTimeout);
    
    // 👉 LỆNH VÀNG V14.0: Ra menu là phải dọn sạch 100% âm thanh cũ, chống chồng âm iOS
    stopAllAudio();

    bgOverlay.className = "fixed inset-0 bg-black/75 backdrop-blur-[3px] pointer-events-none transition-colors duration-1000 z-10";
    if (resultOverlay) { resultOverlay.classList.add('hidden'); resultOverlay.classList.remove('flex', 'animate__fadeIn'); }
    gameScreen.classList.add('hidden'); gameScreen.classList.remove('flex', 'animate__fadeIn');
    roleScreen.classList.remove('hidden'); roleScreen.classList.add('flex', 'animate__fadeIn');
    container.style.backgroundImage = `url('${DEFAULT_BG}')`;

    if (btnResetRole) { btnResetRole.classList.add('hidden'); btnResetRole.classList.remove('flex'); }
    if (topNavTitle && topNavSub) {
        topNavTitle.innerText = "CHỌN NHÂN VẬT"; topNavTitle.className = "text-[14px] sm:text-lg md:text-2xl font-black tracking-widest text-white uppercase truncate drop-shadow-md transition-colors duration-300"; topNavSub.innerText = "Giáo dục về vấn nạn bạo lực học đường";
    }
    gameScreen.className = "hidden w-full h-full shrink-0 flex-col md:flex-row items-stretch transition-opacity duration-300 min-h-0 relative mt-0";
    activeMobileCardIndex = 0; updateMobileDots();

    startBGM('bgm_normal');
}

function loadScene(sceneId) {
    if (transitionTimer) clearTimeout(transitionTimer);
    if (typewriterTimeout) clearTimeout(typewriterTimeout);
    if (resultOverlay) { resultOverlay.classList.add('hidden'); resultOverlay.classList.remove('flex', 'animate__fadeIn'); }

    // 👉 LỆNH VÀNG V14.0: Bắt buộc ngắt tiếng đồng hồ/nhịp tim của màn cũ ngay khi sang cảnh mới!
    stopAmbient();

    if (sceneId === 'RESET_GAME') {
        localStorage.removeItem(SAVE_KEY_PREFIX + currentPlayingRole);
        if (window.ReportCardEngine && window.ReportCardEngine.showReportCard) {
            window.ReportCardEngine.showReportCard(
                currentPlayingRole,
                () => { 
                    // 👉 LỆNH VÀNG V14.0: Ngắt nhạc chiến thắng và dọn dẹp âm thanh khi bấm "Chơi lại tuyến này"
                    stopAllAudio();
                    startBGM('bgm_normal'); 
                    startRole(currentPlayingRole, currentPlayingRole + '_man_1'); 
                },
                () => { resetGame(); }
            );
        } else {
            resetGame();
        }
        return;
    }

    const data = STORY_DATA[sceneId];
    if (!data) return;

    if (sceneId.includes('_man_') && !data.isResult) {
        localStorage.setItem(SAVE_KEY_PREFIX + currentPlayingRole, sceneId);
    }

    // 👉 ĐỒNG BỘ KHUNG THOẠI 85% TRÊN MOBILE: Ngăn JS viết đè làm thu nhỏ hộp thoại
    if (dialogueContainer) {
        dialogueContainer.className = `absolute md:relative bottom-0 w-full md:w-7/12 lg:w-1/2 h-[85%] sm:h-[78%] md:h-full p-3 sm:p-5 md:p-8 pb-4 sm:pb-6 md:pb-8 rounded-t-[32px] md:rounded-3xl shadow-[0_-20px_50px_rgba(0,0,0,0.8)] md:shadow-[0_15px_40px_rgba(0,0,0,0.9)] bg-slate-900/95 backdrop-blur-2xl flex flex-col min-h-0 shrink-0 z-20 border-t border-slate-700/80 md:border glass-glow pointer-events-auto ${data.bgTheme}`;
    }
    
    if (data.bgImage) { container.style.backgroundImage = `url('${data.bgImage}')`; }
    applyScenePresentation(data);

    if (window.GameAudio) window.GameAudio.setBgmByContext(data);
    if (data.sfx && window.GameAudio) window.GameAudio.playSfx(data.sfx);

    charNameEl.className = `font-black text-[15px] sm:text-xl md:text-2xl pb-1.5 tracking-wide flex items-center gap-2 border-b border-slate-700/50 shrink-0 drop-shadow-md ${data.charColor}`;
    charNameEl.innerText = data.charName;

    if (data.isResult) {
        storyTextEl.innerText = ""; storyTextEl.classList.remove('typing-cursor');
        typeWriter(storyTextEl, "Đang quan sát diễn biến và hậu quả...", 0, 20);
        choicesBoxEl.innerHTML = ''; 
        transitionTimer = setTimeout(() => { showResultOverlay(data); }, 1500); 
        return;
    }

    storyTextEl.innerText = "";
    typeWriter(storyTextEl, data.story, 0, 15);
    choicesBoxEl.innerHTML = ''; 

    if (data.minigame && window.MinigameEngine) {
        const btn = document.createElement('button');
        btn.className = "w-full py-5 sm:py-6 rounded-2xl bg-gradient-to-r from-rose-600 via-red-600 to-amber-600 hover:from-rose-500 hover:to-amber-500 text-white font-black text-lg sm:text-xl shadow-[0_10px_30px_rgba(244,63,94,0.5)] border-2 border-rose-400 active:scale-95 transition-all transform-gpu flex items-center justify-center gap-2 animate__animated animate__pulse animate__infinite select-none cursor-pointer mt-2";
        btn.innerHTML = `<svg class="w-6 h-6 animate-spin" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg><span>SẴN SÀNG ĐỐI MẶT THỬ THÁCH!</span>`;
        
        btn.onclick = () => {
            playSound('button');
            window.MinigameEngine.showMinigame({
                ...data.minigame,
                title: data.minigame.title || 'Thử thách phản xạ',
                description: data.minigame.description || 'Nhấn nhanh để giữ thế chủ động.',
                buttonText: data.minigame.buttonText || 'Bắt đầu'
            }, (won, nextSceneId) => {
                window.GameStats.minigameTotal++;
                if (won) window.GameStats.minigameWins++;

                if (nextSceneId) loadScene(nextSceneId);
                else loadScene(won ? data.minigame.successScene : data.minigame.failScene);
            });
        };
        choicesBoxEl.appendChild(btn);
        return;
    }

    let normalChoices = []; let specialChoices = [];
    data.choices.forEach(choice => {
        if (choice.isUndo || choice.nextScene === 'RESET_GAME') { specialChoices.push(choice); } 
        else { normalChoices.push(choice); }
    });
    for (let i = normalChoices.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [normalChoices[i], normalChoices[j]] = [normalChoices[j], normalChoices[i]];
    }
    const finalChoices = [...normalChoices, ...specialChoices];

    finalChoices.forEach((choice, index) => {
        const btn = document.createElement('button');
        btn.classList.add('animate__animated', 'animate__fadeInUp');
        btn.style.animationDelay = `${index * 0.1}s`; 

        if (choice.isUndo) {
            let cleanText = choice.text.replace(/^[↺↩]\s*/, '');
            btn.className += " relative overflow-hidden w-full bg-gradient-to-r from-amber-600 via-orange-600 to-yellow-600 hover:from-amber-500 hover:to-yellow-500 text-slate-950 font-black p-3.5 sm:p-4 rounded-xl sm:rounded-2xl transition-all duration-300 shadow-[0_10px_25px_rgba(245,158,11,0.3)] active:scale-[0.98] text-[14px] sm:text-lg md:text-xl flex items-center justify-center gap-2 group shrink-0 transform-gpu border border-yellow-400/40";
            btn.innerHTML = `
                <svg class="w-5 h-5 sm:w-6 sm:h-6 transform group-hover:-rotate-45 transition-transform duration-300 shrink-0 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6"></path></svg>
                <span class="drop-shadow-sm relative z-10">${cleanText}</span>
            `;
        } else {
            btn.className += " relative overflow-hidden w-full text-left bg-slate-800/80 backdrop-blur-md hover:bg-slate-700 border border-slate-600/50 hover:border-slate-400 text-slate-100 p-3 sm:p-3.5 rounded-xl transition-all duration-300 shadow-[0_4px_15px_rgba(0,0,0,0.2)] active:scale-[0.98] text-[13.5px] sm:text-base md:text-lg font-medium flex items-center justify-between group leading-snug shrink-0 transform-gpu";
            btn.innerHTML = `<span class="pr-3 drop-shadow-md relative z-10">${choice.text}</span><svg class="w-4 h-4 text-slate-400 group-hover:text-white group-hover:translate-x-1 transition-all duration-300 shrink-0 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>`;
        }
        
        btn.onclick = (e) => {
            const allBtns = choicesBoxEl.querySelectorAll('button');
            allBtns.forEach(b => b.style.pointerEvents = 'none');

            if (cinematicFlash) {
                cinematicFlash.style.opacity = '0.15'; setTimeout(() => { cinematicFlash.style.opacity = '0'; }, 200);
            }

            const rect = btn.getBoundingClientRect();
            const x = e.clientX ? e.clientX - rect.left : rect.width / 2;
            const y = e.clientY ? e.clientY - rect.top : rect.height / 2;
            const ripple = document.createElement('span');
            ripple.className = 'ripple'; ripple.style.left = `${x}px`; ripple.style.top = `${y}px`;
            btn.appendChild(ripple); btn.classList.add('btn-selected');

            const nextData = STORY_DATA[choice.nextScene];
            charSpriteEl.classList.remove('animate__headShake', 'anim-char-progress', 'anim-char-fail', 'anim-char-success');
            void charSpriteEl.offsetWidth; 

            if (choice.nextScene === 'RESET_GAME' || choice.isUndo) {
                playSound('button'); charSpriteEl.classList.add('anim-char-progress');
                if (choice.isUndo) window.GameStats.redoCount++; 
            } else if (nextData && nextData.isResult) {
                let isSuccess = nextData.resultColor && nextData.resultColor.includes('emerald');
                if (isSuccess) { playSound('complete'); charSpriteEl.classList.add('anim-char-success'); } 
                else { playSound('fail'); charSpriteEl.classList.add('anim-char-fail'); }
            } else { playSound('progress'); charSpriteEl.classList.add('anim-char-progress'); }

            setTimeout(() => { loadScene(choice.nextScene); }, 350); 
        };
        choicesBoxEl.appendChild(btn);
    });

    if (textScrollBox) textScrollBox.scrollTop = 0;
    if (choicesScrollBox) choicesScrollBox.scrollTop = 0;
}

function showResultOverlay(data) {
    if (!resultOverlay) return;
    const resultBadge = document.getElementById('result-badge');
    const resultBgGlow = document.getElementById('result-bg-glow');

    let isSuccess = data.resultColor && data.resultColor.includes('emerald');
    let badgeText = isSuccess ? "★ CAN THIỆP THÀNH CÔNG" : "⚠ HẬU QUẢ ĐÁNG TIẾC";
    playSound(isSuccess ? 'after-complete' : 'after-fail');

    if (resultBadge) {
        resultBadge.innerText = badgeText;
        if (isSuccess) {
            resultBadge.className = "inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-[11px] sm:text-sm font-extrabold uppercase tracking-widest bg-emerald-500/15 text-emerald-400 border border-emerald-500/40 shadow-[0_0_15px_rgba(16,185,129,0.3)]";
            if (resultBgGlow) resultBgGlow.className = "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vh] rounded-full blur-[140px] pointer-events-none transition-colors duration-1000 bg-emerald-600/25";
        } else {
            resultBadge.className = "inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-[11px] sm:text-sm font-extrabold uppercase tracking-widest bg-rose-500/15 text-rose-400 border border-rose-500/40 shadow-[0_0_15px_rgba(244,63,94,0.3)]";
            if (resultBgGlow) resultBgGlow.className = "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vh] rounded-full blur-[140px] pointer-events-none transition-colors duration-1000 bg-rose-600/25";
        }
    }

    resultTitle.innerText = data.resultTitle || "KẾT QUẢ";
    resultTitle.className = `text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight uppercase leading-none drop-shadow-[0_4px_4px_rgba(0,0,0,0.9)] mb-3 animate__animated animate__fadeInUp ${data.resultColor || 'text-white'}`;
    
    if (resultImg) {
        let charId = 1; 
        let charNameStr = data.charName ? data.charName.toUpperCase() : "";
        if (charNameStr.includes("LINH")) charId = 2;
        else if (charNameStr.includes("NAM")) charId = 3;
        else if (charNameStr.includes("MINH")) charId = 4;

        let randomBase = Math.floor(Math.random() * 7) + 1; 
        let imageNumber = isSuccess ? (randomBase * 2) : (randomBase * 2 - 1);
        resultImg.src = `assets/scenes/Char_${charId}_Scene_${imageNumber}.webp`;
        resultImg.parentElement.style.display = 'flex';
    }

    resultDesc.innerText = ""; storyTextEl.classList.remove('typing-cursor');
    typeWriter(resultDesc, data.story, 0, 15);
    resultChoicesBox.innerHTML = '';
    
    data.choices.forEach(choice => {
        const btn = document.createElement('button');
        if (choice.isUndo) {
            let cleanText = choice.text.replace(/^[↺↩]\s*/, '');
            btn.className = "w-full bg-gradient-to-r from-amber-600 via-orange-600 to-yellow-600 hover:from-amber-500 hover:to-yellow-500 text-slate-950 font-black p-3.5 sm:p-5 rounded-xl sm:rounded-2xl transition-all duration-200 shadow-[0_10px_25px_rgba(245,158,11,0.3)] active:scale-[0.98] text-[14.5px] sm:text-lg md:text-xl flex items-center justify-center gap-2 group border border-yellow-400/40 transform-gpu";
            btn.innerHTML = `
                <svg class="w-5 h-5 sm:w-6 sm:h-6 transform group-hover:-rotate-45 transition-transform duration-300 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6"></path></svg>
                <span class="drop-shadow-sm">${cleanText}</span>
            `;
        } else {
            btn.className = "w-full text-center bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-500 hover:from-emerald-500 hover:to-teal-400 text-white font-black p-3 sm:p-5 rounded-xl sm:rounded-2xl transition-colors duration-200 shadow-[0_10px_25px_rgba(16,185,129,0.3)] active:scale-[0.98] text-[13.5px] sm:text-lg md:text-xl flex items-center justify-center gap-2 group border border-emerald-400/30 transform-gpu";
            btn.innerHTML = `<span class="drop-shadow-sm">${choice.text}</span><svg class="w-5 h-5 sm:w-6 sm:h-6 transform group-hover:translate-x-2 transition-transform duration-300 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>`;
        }
        btn.onclick = () => {
            if (choice.isUndo) window.GameStats.redoCount++; 
            playSound('button'); loadScene(choice.nextScene); 
        };
        resultChoicesBox.appendChild(btn);
    });
    resultOverlay.classList.remove('hidden'); resultOverlay.classList.add('flex', 'animate__fadeIn');
}

function switchMobileCard(direction) {
    playSound('button'); 
    activeMobileCardIndex = (activeMobileCardIndex + direction + 4) % 4;
    const cards = [
        document.getElementById('card-mai'), document.getElementById('card-minh'),
        document.getElementById('card-linh'), document.getElementById('card-nam')
    ];
    cards.forEach((card, index) => {
        if (!card) return;
        if (index === activeMobileCardIndex) { card.classList.remove('hidden'); card.classList.add('flex', 'animate__fadeIn'); } 
        else { card.classList.add('hidden'); card.classList.remove('flex', 'animate__fadeIn'); }
    });
    updateMobileDots();
}

function updateMobileDots() {
    const colors = ["bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.8)]", "bg-indigo-500 shadow-[0_0_8px_rgba(99,102,241,0.8)]", "bg-sky-500 shadow-[0_0_8px_rgba(14,165,233,0.8)]", "bg-amber-500 shadow-[0_0_8px_rgba(245,158,11,0.8)]"];
    for (let i = 0; i < 4; i++) {
        const dot = document.getElementById(`dot-${i}`);
        if (!dot) continue;
        if (i === activeMobileCardIndex) { dot.className = `w-6 h-1.5 ${colors[i]} rounded-full transition-colors duration-300`; } 
        else { dot.className = "w-1.5 h-1.5 bg-white/20 rounded-full transition-colors duration-300"; }
    }
}