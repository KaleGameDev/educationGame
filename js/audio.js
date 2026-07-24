// =================================================================
// HỆ THỐNG ÂM THANH KHÔNG GIAN ĐA TẦNG (V14.0 - MASTER AUDIO ENGINE)
// Hỗ trợ BGM + Ambient + SFX | Khắc phục chồng âm iOS | Khóa tiếng đồng hồ 100%
// =================================================================

(function() {
    // 1. TỪ ĐIỂN ĐƯỜNG DẪN ÂM THANH
    const AUDIO_PATHS = {
        // --- LỚP 1: NHẠC NỀN (BGM) ---
        bgm_normal: 'assets/audio/bgm_normal.mp3',     // Nhạc học đường nhẹ nhàng
        bgm_tension: 'assets/audio/bgm_tension.mp3',   // Nhạc gay cấn / đối đầu / minigame
        bgm_sad: 'assets/audio/bgm_sad.mp3',           // Nhạc buồn / u uất / khóc
        bgm_victory: 'assets/audio/bgm_victory.mp3',   // Nhạc chiến thắng hào hùng

        // --- LỚP 2: ÂM THANH MÔI TRƯỜNG (AMBIENT) ---
        amb_school: 'assets/audio/amb_school.mp3',     // Tiếng hành lang, học sinh xầm xì
        amb_rain: 'assets/audio/amb_rain.mp3',         // Tiếng mưa rơi / phòng kín u ám
        amb_spam: 'assets/audio/amb_spam.mp3',         // Tiếng tin nhắn MXH dồn dập
        amb_crowd: 'assets/audio/amb_crowd.mp3',       // Tiếng đám đông la ó / sân bóng
        sfx_heartbeat: 'assets/audio/sfx_heartbeat.mp3',// Tiếng nhịp tim / đồng hồ đếm ngược (Lặp lại)

        // --- LỚP 3: TIẾNG ĐỘNG ĐIỂM NHẤN (SFX) ---
        button: 'assets/audio/sfx_button.mp3',
        progress: 'assets/audio/sfx_progress.mp3',
        complete: 'assets/audio/sfx_complete.mp3',
        fail: 'assets/audio/sfx_fail.mp3',
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
            
            // BGM và Ambient (bao gồm cả sfx_heartbeat) tự động lặp lại (Loop)
            if (key.startsWith('bgm_') || key.startsWith('amb_') || key === 'sfx_heartbeat') {
                audio.loop = true;
            }
            audioPool[key] = audio;
        }
    }

    // MỞ KHÓA ÂM THANH (Vượt tường lửa Autoplay của iOS/Android)
    function unlockAudio() {
        if (isUnlocked) return;
        isUnlocked = true;
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

    // 3. THUẬT TOÁN CROSS-FADE AN TOÀN (CÓ BẢO VỆ CHỒNG LỆNH)
    function fadeOutAndStop(audio, duration = 600) {
        if (!audio) return;
        if (audio._fader) clearInterval(audio._fader); // Xóa nhịp fade cũ nếu đang chạy
        
        if (audio.paused) {
            audio.currentTime = 0;
            return;
        }

        const step = audio.volume / (duration / 50);
        audio._fader = setInterval(() => {
            if (audio.volume - step > 0.02) {
                audio.volume -= step;
            } else {
                audio.volume = 0;
                audio.pause();
                audio.currentTime = 0;
                clearInterval(audio._fader);
                delete audio._fader;
            }
        }, 50);
    }

    function fadeInAndPlay(audio, targetVolume = 0.6, duration = 800) {
        if (!audio) return;
        if (audio._fader) clearInterval(audio._fader);

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
                audio._fader = setInterval(() => {
                    if (audio.volume + step < targetVolume) {
                        audio.volume += step;
                    } else {
                        audio.volume = targetVolume;
                        clearInterval(audio._fader);
                        delete audio._fader;
                    }
                }, 50);
            }).catch(() => {});
        }
    }

    // 4. ĐIỀU KHIỂN LỚP 1: BGM (NHẠC NỀN) - KHÓA CHỒNG ÂM iOS
    function startBGM(key = 'bgm_normal') {
        if (currentBgmKey === key && audioPool[key] && !audioPool[key].paused) return; // Đang phát đúng bài rồi thì thôi

        // 👉 THUẬT TOÁN ANTI-BLEED: Dập tắt lập tức toàn bộ các bài BGM khác trước khi bật bài mới
        for (const k in audioPool) {
            if (k.startsWith('bgm_') && k !== key) {
                if (audioPool[k]._fader) clearInterval(audioPool[k]._fader);
                audioPool[k].pause();
                audioPool[k].currentTime = 0;
            }
        }

        currentBgmKey = key;
        if (audioPool[key]) {
            fadeInAndPlay(audioPool[key], 0.55, 800); // Âm lượng BGM chuẩn: 55%
        }
    }

    function stopBGM() {
        if (currentBgmKey && audioPool[currentBgmKey]) {
            fadeOutAndStop(audioPool[currentBgmKey], 500);
            currentBgmKey = '';
        }
    }

    // 5. ĐIỀU KHIỂN LỚP 2: AMBIENT (MÔI TRƯỜNG & TIẾNG ĐỒNG HỒ/NHỊP TIM)
    function startAmbient(key) {
        if (!key) {
            stopAmbient();
            return;
        }
        if (currentAmbKey === key && audioPool[key] && !audioPool[key].paused) return;

        // Dập tắt các âm môi trường cũ (bao gồm cả tiếng đồng hồ)
        stopAmbient();

        currentAmbKey = key;
        if (audioPool[key]) {
            // Nếu là tiếng đồng hồ / nhịp tim thì cho âm lượng to hơn chút (55%), môi trường nền thì 35%
            let vol = key === 'sfx_heartbeat' ? 0.55 : 0.35;
            fadeInAndPlay(audioPool[key], vol, 600);
        }
    }

    // 👉 LỆNH VÀNG: Tắt sạch âm thanh môi trường và ĐẶC BIỆT KẾT LIỄU TIẾNG ĐỒNG HỒ
    function stopAmbient() {
        for (const k in audioPool) {
            if (k.startsWith('amb_') || k === 'sfx_heartbeat') {
                if (audioPool[k]._fader) clearInterval(audioPool[k]._fader);
                audioPool[k].pause();
                audioPool[k].currentTime = 0;
            }
        }
        currentAmbKey = '';
    }

    // 6. ĐIỀU KHIỂN LỚP 3: SFX (TIẾNG ĐỘNG ĐIỂM NHẤN)
    function playSound(type) {
        if (isMuted || !audioPool[type]) return;

        // 👉 ĐẶC BIỆT: Nếu game gọi playSound('sfx_heartbeat'), tự động chuyển hướng sang quản lý bằng Ambient để không bị kêu vĩnh viễn!
        if (type === 'sfx_heartbeat') {
            startAmbient('sfx_heartbeat');
            return;
        }

        // Với các tiếng động ngắn (button, win, lose), tua lại 0s rồi phát ngay
        const sound = audioPool[type];
        sound.currentTime = 0;
        sound.volume = 0.8;
        sound.play().catch(() => {});
    }

    // 👉 HÀM DỌN DẸP TOÀN CỤC (SỬ DỤNG KHI RESET GAME HOẶC RA MENU)
    function stopAll() {
        stopBGM();
        stopAmbient();
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
        } else if (data.charEmotion === 'angry' || data.charEmotion === 'rage' || data.charEmotion === 'panic' || data.minigame || data.sfx === 'sfx_heartbeat') {
            startBGM('bgm_tension');
        } else if (data.charEmotion === 'victory' || data.charEmotion === 'happy') {
            startBGM('bgm_victory');
        } else {
            startBGM('bgm_normal');
        }

        // --- XỬ LÝ ÂM THANH MÔI TRƯỜNG & ĐỒNG HỒ (LỚP 2) ---
        if (data.ambient) {
            startAmbient(data.ambient);
        } else if (data.sfx === 'sfx_heartbeat' || (data.minigame && data.minigame.type === 'timing')) {
            startAmbient('sfx_heartbeat'); // Tự động bật tiếng đồng hồ/nhịp tim ở cảnh căng thẳng
        } else if (data.story && (data.story.includes('hành lang') || data.story.includes('sân trường') || data.story.includes('căng tin') || data.story.includes('ra chơi'))) {
            startAmbient('amb_school');
        } else if (data.story && (data.story.includes('nhà vệ sinh') || data.story.includes('góc khuất') || data.story.includes('phòng kín') || data.story.includes('hẻm'))) {
            startAmbient('amb_rain');
        } else if (data.story && (data.story.includes('Discord') || data.story.includes('Facebook') || data.story.includes('tin nhắn') || data.story.includes('group') || data.story.includes('mạng'))) {
            startAmbient('amb_spam');
        } else if (data.story && (data.story.includes('bóng đá') || data.story.includes('khán đài') || data.story.includes('hội trường'))) {
            startAmbient('amb_crowd');
        } else {
            stopAmbient(); // Ở các cảnh bình thường, tự động tắt tiếng đồng hồ/môi trường
        }
    }

    // 8. TẮT / MỞ ÂM THANH TOÀN CỤC (MUTE TOGGLE)
    function toggleAudio() {
        isMuted = !isMuted;
        for (const key in audioPool) {
            audioPool[key].muted = isMuted;
        }
        
        // Tắt luôn các luồng đang phát nếu Mute
        if (isMuted) {
            for (const key in audioPool) {
                audioPool[key].pause();
            }
        } else {
            if (currentBgmKey && audioPool[currentBgmKey]) audioPool[currentBgmKey].play().catch(() => {});
            if (currentAmbKey && audioPool[currentAmbKey]) audioPool[currentAmbKey].play().catch(() => {});
        }

        const iconOn = document.getElementById('icon-vol-on');
        const iconOff = document.getElementById('icon-vol-off');
        const btnAudio = document.getElementById('btn-toggle-audio');

        if (iconOn && iconOff) {
            if (isMuted) {
                iconOn.classList.add('hidden'); iconOff.classList.remove('hidden');
            } else {
                iconOn.classList.remove('hidden'); iconOff.classList.add('hidden');
            }
        }
        if (btnAudio) {
            if (isMuted) {
                btnAudio.classList.add('bg-rose-600/80', 'text-white');
            } else {
                btnAudio.classList.remove('bg-rose-600/80', 'text-white');
            }
        }
        return isMuted;
    }

    // Xuất các phương thức ra window.GameAudio
    window.GameAudio = {
        preloadAllAudio, unlockAudio, playSound, playSfx: playSound,
        startBGM, stopBGM, startAmbient, stopAmbient, stopAll,
        setBgmByContext, toggleAudio
    };
})();