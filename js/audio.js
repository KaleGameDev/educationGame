// =================================================================
// HỆ THỐNG ÂM THANH KHÔNG GIAN ĐA TẦNG (V12.0 - 3-LAYER AUDIO ENGINE)
// Hỗ trợ BGM + Ambient Môi trường + SFX | Cross-fade mượt mà | Zero Bug
// =================================================================

(function() {
    // 1. TỪ ĐIỂN ĐƯỜNG DẪN ÂM THANH (Bạn có thể thay link nhạc mp3 tùy ý vào đây)
    const AUDIO_PATHS = {
        // --- LỚP 1: NHẠC NỀN (BGM) ---
        bgm_normal: 'assets/audio/bgm_normal.mp3',     // Nhạc học đường nhẹ nhàng
        bgm_tension: 'assets/audio/bgm_tension.mp3',   // Nhạc gay cấn / đối đầu
        bgm_sad: 'assets/audio/bgm_sad.mp3',           // Nhạc buồn / u uất / khóc
        bgm_victory: 'assets/audio/bgm_victory.mp3',   // Nhạc chiến thắng hào hùng

        // --- LỚP 2: ÂM THANH MÔI TRƯỜNG (AMBIENT - MỚI) ---
        amb_school: 'assets/audio/amb_school.mp3',     // Tiếng hành lang, học sinh xầm xì, chuông reo
        amb_rain: 'assets/audio/amb_rain.mp3',         // Tiếng mưa rơi / phòng kín u ám / nước giọt
        amb_spam: 'assets/audio/amb_spam.mp3',         // Tiếng tin nhắn thông báo mạng xã hội dồn dập
        amb_crowd: 'assets/audio/amb_crowd.mp3',       // Tiếng đám đông la ó / sân bóng đá

        // --- LỚP 3: TIẾNG ĐỘNG ĐIỂM NHẤN (SFX) ---
        button: 'assets/audio/sfx_button.mp3',
        progress: 'assets/audio/sfx_progress.mp3',
        complete: 'assets/audio/sfx_complete.mp3',
        fail: 'assets/audio/sfx_fail.mp3',
        sfx_heartbeat: 'assets/audio/sfx_heartbeat.mp3',
        sfx_beep: 'assets/audio/sfx_beep.mp3',
        sfx_glitch: 'assets/audio/sfx_glitch.mp3',
        'after-complete': 'assets/audio/sfx_after_complete.mp3',
        'after-fail': 'assets/audio/sfx_after_fail.mp3'
    };

    // Bộ nhớ đệm Audio Objects
    const audioPool = {};
    let currentBgmKey = '';
    let currentAmbKey = '';
    let isMuted = false;
    let isUnlocked = false;

    // 2. KHỞI TẠO & TẢI TRƯỚC ÂM THANH
    function preloadAllAudio() {
        for (const [key, path] of Object.entries(AUDIO_PATHS)) {
            const audio = new Audio();
            audio.src = path;
            audio.preload = 'auto';
            // BGM và Ambient tự động lặp lại (Loop)
            if (key.startsWith('bgm_') || key.startsWith('amb_')) {
                audio.loop = true;
            }
            audioPool[key] = audio;
        }
    }

    // MỞ KHÓA ÂM THANH (Do trình duyệt cấm tự động phát khi chưa chạm màn hình)
    function unlockAudio() {
        if (isUnlocked) return;
        isUnlocked = true;
        // Phát thầm 1 tiếng động nhỏ để kích hoạt Audio Context của trình duyệt
        for (const key in audioPool) {
            const audio = audioPool[key];
            audio.volume = 0;
            const playPromise = audio.play();
            if (playPromise !== undefined) {
                playPromise.then(() => {
                    audio.pause();
                    audio.currentTime = 0;
                }).catch(() => {});
            }
        }
    }

    // 3. THUẬT TOÁN CROSS-FADE (CHUYỂN ÂM ÊM ÁI KHÔNG BỊ GIẬT)
    function fadeOutAndStop(audio, duration = 800) {
        if (!audio || audio.paused) return;
        const step = audio.volume / (duration / 50);
        const fader = setInterval(() => {
            if (audio.volume - step > 0) {
                audio.volume -= step;
            } else {
                audio.volume = 0;
                audio.pause();
                audio.currentTime = 0;
                clearInterval(fader);
            }
        }, 50);
    }

    function fadeInAndPlay(audio, targetVolume = 0.6, duration = 800) {
        if (!audio) return;
        if (isMuted) {
            audio.volume = 0;
            audio.play().catch(() => {});
            return;
        }
        audio.volume = 0;
        const playPromise = audio.play();
        if (playPromise !== undefined) {
            playPromise.then(() => {
                const step = targetVolume / (duration / 50);
                const fader = setInterval(() => {
                    if (audio.volume + step < targetVolume) {
                        audio.volume += step;
                    } else {
                        audio.volume = targetVolume;
                        clearInterval(fader);
                    }
                }, 50);
            }).catch(() => {});
        }
    }

    // 4. ĐIỀU KHIỂN LỚP 1: BGM (NHẠC NỀN)
    function startBGM(key = 'bgm_normal') {
        if (currentBgmKey === key) return; // Nếu đang phát bài này rồi thì thôi
        if (currentBgmKey && audioPool[currentBgmKey]) {
            fadeOutAndStop(audioPool[currentBgmKey], 800);
        }
        currentBgmKey = key;
        if (audioPool[key]) {
            fadeInAndPlay(audioPool[key], 0.55, 800); // Âm lượng BGM vừa phải: 55%
        }
    }

    function stopBGM() {
        if (currentBgmKey && audioPool[currentBgmKey]) {
            fadeOutAndStop(audioPool[currentBgmKey], 500);
            currentBgmKey = '';
        }
    }

    // 5. ĐIỀU KHIỂN LỚP 2: AMBIENT (ÂM THANH MÔI TRƯỜNG - MỚI)
    function startAmbient(key) {
        if (!key) {
            stopAmbient();
            return;
        }
        if (currentAmbKey === key) return;
        if (currentAmbKey && audioPool[currentAmbKey]) {
            fadeOutAndStop(audioPool[currentAmbKey], 800);
        }
        currentAmbKey = key;
        if (audioPool[key]) {
            fadeInAndPlay(audioPool[key], 0.35, 1000); // Âm lượng Môi trường làm nền: 35%
        }
    }

    function stopAmbient() {
        if (currentAmbKey && audioPool[currentAmbKey]) {
            fadeOutAndStop(audioPool[currentAmbKey], 800);
            currentAmbKey = '';
        }
    }

    // 6. ĐIỀU KHIỂN LỚP 3: SFX (TIẾNG ĐỘNG ĐIỂM NHẤN)
    function playSound(type) {
        if (isMuted || !audioPool[type]) return;
        // Tạo clone audio để phát đè nhiều tiếng động cùng lúc (như bấm liên tục)
        const sound = audioPool[type].cloneNode();
        sound.volume = 0.8;
        sound.play().catch(() => {});
    }

    // 7. HÀM TỰ ĐỘNG PHÂN TÍCH BỐI CẢNH (GỌI TỪ main.js)
    function setBgmByContext(data) {
        unlockAudio();
        
        // --- XỬ LÝ NHẠC NỀN (LỚP 1) ---
        if (data.bgm) {
            startBGM(data.bgm);
        } else if (data.isResult) {
            let isSuccess = data.resultColor && data.resultColor.includes('emerald');
            startBGM(isSuccess ? 'bgm_victory' : 'bgm_sad');
        } else if (data.charEmotion === 'cry' || data.charEmotion === 'sad' || data.charEmotion === 'depressed') {
            startBGM('bgm_sad');
        } else if (data.charEmotion === 'angry' || data.charEmotion === 'rage' || data.charEmotion === 'panic' || data.minigame) {
            startBGM('bgm_tension');
        } else if (data.charEmotion === 'victory' || data.charEmotion === 'happy') {
            startBGM('bgm_victory');
        } else {
            startBGM('bgm_normal');
        }

        // --- XỬ LÝ ÂM THANH MÔI TRƯỜNG (LỚP 2 - MỚI) ---
        if (data.ambient) {
            startAmbient(data.ambient);
        } else if (data.story && (data.story.includes('hành lang') || data.story.includes('sân trường') || data.story.includes('căng tin') || data.story.includes('ra chơi'))) {
            startAmbient('amb_school'); // Tự động phát tiếng ồn trường học
        } else if (data.story && (data.story.includes('nhà vệ sinh') || data.story.includes('góc khuất') || data.story.includes('phòng kín') || data.story.includes('hẻm'))) {
            startAmbient('amb_rain');   // Tự động phát tiếng nước giọt / u ám
        } else if (data.story && (data.story.includes('Discord') || data.story.includes('Facebook') || data.story.includes('tin nhắn') || data.story.includes('group') || data.story.includes('mạng'))) {
            startAmbient('amb_spam');   // Tự động phát tiếng notif dồn dập
        } else if (data.story && (data.story.includes('bóng đá') || data.story.includes('khán đài') || data.story.includes('hội trường'))) {
            startAmbient('amb_crowd');  // Tự động phát tiếng đám đông
        } else {
            stopAmbient();
        }
    }

    // 8. TẮT / MỞ ÂM THANH TOÀN CỤC (MUTE TOGGLE)
    function toggleAudio() {
        isMuted = !isMuted;
        for (const key in audioPool) {
            audioPool[key].muted = isMuted;
        }
        const btnAudio = document.getElementById('btn-toggle-audio');
        if (btnAudio) {
            if (isMuted) {
                btnAudio.classList.add('bg-rose-600/80', 'text-white');
                btnAudio.innerHTML = `<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" clip-rule="evenodd"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2"></path></svg>`;
            } else {
                btnAudio.classList.remove('bg-rose-600/80', 'text-white');
                btnAudio.innerHTML = `<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"></path></svg>`;
            }
        }
        return isMuted;
    }

    // Xuất các phương thức ra window.GameAudio
    window.GameAudio = {
        preloadAllAudio, unlockAudio, playSound, playSfx: playSound,
        startBGM, stopBGM, startAmbient, stopAmbient,
        setBgmByContext, toggleAudio
    };
})();