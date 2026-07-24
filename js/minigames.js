// ==========================================
// HỆ THỐNG MINI-GAME ĐA NĂNG (GÓC KHUẤT) - V10.0 MASTER ENGINE
// Khắc phục 100% kẹt nút game Tường Lửa & Soi Bằng Chứng | Touch nhạy lập tức | Glassmorphism UI
// ==========================================
(function(){
  let activeMinigame = null;
  let minigameState = null;
  let activeTimers = [];

  function addSafeInterval(callback, delay) {
    const id = setInterval(() => {
      if (!minigameState || minigameState.completed) {
        clearInterval(id);
        return;
      }
      callback();
    }, delay);
    activeTimers.push(id);
    return id;
  }

  function clearAllTimers() {
    activeTimers.forEach(id => clearInterval(id));
    activeTimers = [];
  }

  function closeMinigame() {
    clearAllTimers();
    const overlay = document.getElementById('minigame-overlay');
    if (overlay) overlay.classList.add('hidden');
    activeMinigame = null;
    minigameState = null;
    if (window.GameAudio && window.GameAudio.startBGM) {
      window.GameAudio.startBGM('bgm_normal');
    }
  }

  function playSoundSafe(type) {
    if (window.GameAudio && window.GameAudio.playSound) {
      window.GameAudio.playSound(type);
    }
  }

  function shuffleArray(array) {
    const arr = [...array];
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }

  // 👉 HÀM CẢM ỨNG KÉP SIÊU NHẠY (CHỐNG LỖI KẸT NÚT TRÊN PC & MOBILE)
  function bindInstantTouch(el, callback) {
    const handler = (e) => {
      if (!minigameState || minigameState.completed) return;
      if (e && e.cancelable && e.type === 'touchstart') e.preventDefault();
      callback(e);
    };
    el.addEventListener('click', handler);
    el.addEventListener('touchstart', handler, { passive: false });
  }

  // ==========================================
  // BƯỚC 1: MÀN HÌNH HƯỚNG DẪN SIÊU SANG (GLASSMORPHISM)
  // ==========================================
  function showMinigame(config, onComplete) {
    const overlay = document.getElementById('minigame-overlay');
    if (!overlay) return;

    if (window.GameAudio && window.GameAudio.startBGM) {
      window.GameAudio.startBGM('bgm_tension');
    }
    playSoundSafe('sfx_heartbeat');

    overlay.className = "fixed inset-0 z-[150] w-screen h-[100dvh] bg-black/85 backdrop-blur-xl flex items-center justify-center p-4 select-none animate__animated animate__fadeIn";
    
    const gameType = config.type || 'taptap';
    let defaultInstruction = "";
    let categoryBadge = "THỬ THÁCH THỂ LỰC";
    let difficultyTag = "ĐỘ KHÓ: CAO";
    let themeColor = "sky";
    let glowColor = "rgba(14, 165, 233, 0.25)";

    if (gameType === 'taptap') {
      defaultInstruction = "Nhấp liên tục với tốc độ cực cao vào nút hành động bên dưới để bứt tốc!"; categoryBadge = "THỬ THÁCH THỂ LỰC"; themeColor = "emerald"; glowColor = "rgba(16, 185, 129, 0.25)";
    } else if (gameType === 'cleaner') {
      defaultInstruction = "Tin nhắn độc hại xuất hiện liên tục và tự biến mất sau 1 giây! Hãy phản xạ bấm ngay vào các hộp thoại màu đỏ để tiêu diệt!"; categoryBadge = "THỬ THÁCH PHẢN XẠ"; themeColor = "sky"; glowColor = "rgba(14, 165, 233, 0.25)";
    } else if (gameType === 'timing') {
      defaultInstruction = "Con trỏ di chuyển tốc độ cao! Hãy tập trung tối đa, bấm nút GHI HÌNH đúng khoảnh khắc con trỏ lọt vào vùng sáng mục tiêu!"; categoryBadge = "THỬ THÁCH ĐỘ CHÍNH XÁC"; themeColor = "amber"; glowColor = "rgba(245, 158, 11, 0.25)";
    } else if (gameType === 'hold') {
      defaultInstruction = "Nhấn và GIỮ CHẶT ngón tay không buông để duy trì sự bình tĩnh cho đến khi đạt 100%!"; categoryBadge = "THỬ THÁCH TÂM LÝ"; themeColor = "indigo"; glowColor = "rgba(99, 102, 241, 0.25)";
    } else if (gameType === 'qte' || gameType === 'debate') {
      defaultInstruction = "Tình huống sinh tử diễn ra trong tích tắc! Hãy nhìn thật kỹ và chọn đáp án CHÍNH XÁC NHẤT!"; categoryBadge = "QUYẾT ĐỊNH SINH TỬ"; difficultyTag = "ĐỘ KHÓ: CỰC HẠN"; themeColor = "rose"; glowColor = "rgba(244, 63, 94, 0.3)";
    } else if (gameType === 'balance') {
      defaultInstruction = "Bấm nhấp liên tục vào nút 'LÁI VỀ LÝ TRÍ' để giữ kim luôn nằm trong vùng Xanh an toàn suốt thời gian thi đấu!"; categoryBadge = "CÂN BẰNG ĐÁM ĐÔNG"; difficultyTag = "ĐỘ KHÓ: CAO"; themeColor = "emerald"; glowColor = "rgba(16, 185, 129, 0.3)";
    } else if (gameType === 'stealth') {
      defaultInstruction = "Nhấn GIỮ NÚT để quay lén/ghi âm. NHƯNG khi hệ thống nháy ĐỎ, phải lập tức BUÔNG TAY RA NGAY!"; categoryBadge = "THỬ THÁCH QUAY LÉN"; difficultyTag = "ĐỘ KHÓ: CỰC HẠN"; themeColor = "amber"; glowColor = "rgba(245, 158, 11, 0.3)";
    } else if (gameType === 'shield') {
      defaultInstruction = "Các mối nguy hiểm lao đến từ 3 hướng [TRÁI - GIỮA - PHẢI]. Bấm ngay vào hướng đang báo động để chắn đòn!"; categoryBadge = "TẤM KHIÊN BẢO VỆ"; difficultyTag = "ĐỘ KHÓ: CAO"; themeColor = "sky"; glowColor = "rgba(14, 165, 233, 0.3)";
    } else if (gameType === 'evidence_scan') {
      defaultInstruction = "Radar dữ liệu đang quét! Phản xạ bấm ngay vào các MẢNH BẰNG CHỨNG THẬT (Màu Xanh). Tuyệt đối KHÔNG bấm vào dữ liệu nhiễu (Màu Đỏ)!";
      categoryBadge = "SOI CHIẾU BẰNG CHỨNG"; difficultyTag = "ĐỘ KHÓ: CỰC HẠN"; themeColor = "sky"; glowColor = "rgba(14, 165, 233, 0.35)";
    } else if (gameType === 'firewall') {
      defaultInstruction = "Hệ thống đang bị tấn công! CHỈ ĐƯỢC BẤM XÓA các gói 'SPAM / DDOS (Màu Đỏ)'. Tuyệt đối ĐỂ NGUYÊN cho 'TIN BÁO CÁO THẬT (Màu Xanh)' đi qua!";
      categoryBadge = "TƯỜNG LỬA BẢO VỆ"; difficultyTag = "ĐỘ KHÓ: CỰC HẠN"; themeColor = "emerald"; glowColor = "rgba(16, 185, 129, 0.35)";
    }

    const title = config.title || "THỬ THÁCH PHẢN XẠ";
    const instructionText = config.description || defaultInstruction;

    overlay.innerHTML = `
      <div class="relative w-full max-w-xl bg-slate-900/80 backdrop-blur-2xl border border-white/15 rounded-[32px] p-6 sm:p-8 shadow-[0_25px_70px_rgba(0,0,0,0.9)] overflow-hidden flex flex-col items-center justify-center text-center text-white z-10 animate__animated animate__zoomIn">
        <div class="absolute -top-40 left-1/2 -translate-x-1/2 w-80 h-80 rounded-full blur-[120px] pointer-events-none" style="background-color: ${glowColor}"></div>
        
        <div class="flex items-center gap-2 mb-4 relative z-10">
          <span class="text-[11px] bg-white/10 text-slate-200 border border-white/15 px-3.5 py-1 rounded-full font-black uppercase tracking-widest backdrop-blur-md shadow-sm">${categoryBadge}</span>
          <span class="text-[11px] bg-rose-500/20 text-rose-300 border border-rose-500/40 px-3.5 py-1 rounded-full font-black uppercase tracking-widest backdrop-blur-md shadow-sm">${difficultyTag}</span>
        </div>

        <h3 class="text-2xl sm:text-4xl font-black mb-5 tracking-tight relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-slate-300 uppercase drop-shadow-md">${title}</h3>
        
        <div class="bg-black/40 border border-white/10 p-5 sm:p-6 rounded-2xl mb-6 w-full text-left relative z-10 shadow-inner backdrop-blur-md">
          <div class="text-${themeColor}-400 font-extrabold text-xs uppercase tracking-wider mb-2 flex items-center justify-between">
            <span class="flex items-center gap-2">
              <span class="w-2 h-2 rounded-full bg-${themeColor}-400 animate-ping"></span>
              HƯỚNG DẪN THAO TÁC
            </span>
            <span class="text-[10px] text-slate-400 font-normal">Đọc kỹ trước khi bắt đầu</span>
          </div>
          <p class="text-slate-200 text-sm sm:text-base font-medium leading-relaxed">${instructionText}</p>
        </div>

        <div class="flex items-center justify-between w-full text-xs text-slate-300 mb-6 px-2 font-bold uppercase tracking-wider relative z-10 border-y border-white/10 py-3.5">
          <span>THỜI GIAN: <strong class="text-rose-400 font-black text-sm ml-1">${(gameType === 'qte' || gameType === 'debate') ? (config.duration || 3.5) : (config.duration || 6)} GIÂY</strong></span>
          <span>MỤC TIÊU: <strong class="text-emerald-400 font-black text-sm ml-1">${config.target || 'HOÀN THÀNH'}</strong></span>
        </div>

        <button id="btn-start-minigame" class="w-full py-4.5 sm:py-5 rounded-2xl bg-gradient-to-r from-rose-600 via-red-600 to-amber-600 hover:from-rose-500 hover:to-amber-500 text-white font-black text-lg sm:text-xl shadow-[0_10px_35px_rgba(244,63,94,0.4)] border border-rose-400/40 active:scale-95 transition-all transform-gpu relative z-10 uppercase tracking-widest cursor-pointer group">
          <span class="drop-shadow-md group-hover:scale-105 inline-block transition-transform">BẮT ĐẦU NGAY</span>
        </button>
      </div>`;

    const startBtn = document.getElementById('btn-start-minigame');
    if (startBtn) {
      startBtn.onclick = () => {
        playSoundSafe('button');
        startActualGameplay(config, onComplete, categoryBadge, themeColor, glowColor);
      };
    }
  }

  // ==========================================
  // BƯỚC 2: GAMEPLAY THỰC TẾ
  // ==========================================
  function startActualGameplay(config, onComplete, categoryBadge, themeColor, glowColor) {
    const overlay = document.getElementById('minigame-overlay');
    if (!overlay) return;

    const gameType = config.type || 'taptap';
    let bodyHTML = '';

    // 1. EVIDENCE SCAN
    if (gameType === 'evidence_scan') {
      const target = config.target || 6;
      bodyHTML = `
        <div class="w-full max-w-xl animate__animated animate__fadeIn">
          <div class="flex items-center justify-between mb-3 text-xs sm:text-sm uppercase tracking-widest text-sky-400 font-black">
            <span class="flex items-center gap-1.5"><span class="w-2 h-2 rounded-full bg-sky-400 animate-ping"></span> RADAR QUÉT DỮ LIỆU</span>
            <span id="mg-timer" class="text-white text-xl font-black bg-black/60 px-3.5 py-1 rounded-xl border border-white/10">${config.duration || 6}s</span>
          </div>
          <div class="flex justify-between items-center mb-4 bg-black/50 px-4 py-3 rounded-2xl border border-white/10 text-sm font-bold text-slate-200 shadow-inner">
            <span>BẰNG CHỨNG THẬT: <span id="mg-score" class="text-sky-400 font-black text-xl ml-1">0</span>/${target}</span>
            <span class="text-xs text-amber-400 animate-pulse font-black uppercase">CHỈ BẤM NÚT XANH / VÀNG!</span>
          </div>
          <div id="mg-evidence-grid" class="grid grid-cols-1 sm:grid-cols-2 gap-3 min-h-[250px] bg-black/40 p-4 rounded-3xl border border-white/10 content-start shadow-inner relative overflow-hidden">
          </div>
        </div>`;
    }

    // 2. FIREWALL
    else if (gameType === 'firewall') {
      const target = config.target || 7;
      bodyHTML = `
        <div class="w-full max-w-xl animate__animated animate__fadeIn">
          <div class="flex items-center justify-between mb-3 text-xs sm:text-sm uppercase tracking-widest text-emerald-400 font-black">
            <span class="flex items-center gap-1.5"><span class="w-2 h-2 rounded-full bg-rose-500 animate-ping"></span> HỆ THỐNG ĐANG BỊ TẤN CÔNG</span>
            <span id="mg-timer" class="text-white text-xl font-black bg-black/60 px-3.5 py-1 rounded-xl border border-white/10">${config.duration || 7}s</span>
          </div>
          <div class="flex justify-between items-center mb-4 bg-black/50 px-4 py-3 rounded-2xl border border-white/10 text-sm font-bold text-slate-200 shadow-inner">
            <span>ĐÃ CHẶN SPAM: <span id="mg-score" class="text-emerald-400 font-black text-xl ml-1">0</span>/${target}</span>
            <span class="text-xs text-rose-400 animate-pulse font-black uppercase">CHỈ XÓA GÓI ĐỎ (ĐỂ NGUYÊN GÓI XANH)!</span>
          </div>
          <div id="mg-firewall-grid" class="grid grid-cols-1 sm:grid-cols-2 gap-3 min-h-[260px] bg-black/40 p-4 rounded-3xl border border-white/10 content-start shadow-inner">
          </div>
        </div>`;
    }

    // 3. CLEANER
    else if (gameType === 'cleaner') {
      const target = config.target || 7;
      bodyHTML = `
        <div class="w-full max-w-xl animate__animated animate__fadeIn">
          <div class="flex items-center justify-between mb-3 text-xs sm:text-sm uppercase tracking-widest text-sky-400 font-black">
            <span class="flex items-center gap-1.5"><span class="w-2 h-2 rounded-full bg-sky-400 animate-ping"></span> DIỆT TIN ĐỒN SIÊU TỐC</span>
            <span id="mg-timer" class="text-white text-xl font-black bg-black/60 px-3.5 py-1 rounded-xl border border-white/10 shadow-inner">${config.duration}s</span>
          </div>
          <div class="flex justify-between items-center mb-4 bg-black/50 px-4 py-3 rounded-2xl border border-white/10 text-sm font-bold text-slate-200 shadow-inner backdrop-blur-md">
            <span>ĐÃ XÓA: <span id="mg-score" class="text-sky-400 font-black text-xl ml-1">0</span>/${target}</span>
            <span class="text-xs text-rose-400 animate-pulse font-black uppercase tracking-wider">NHẤN VÀO HỘP THOẠI ĐỎ</span>
          </div>
          <div id="mg-cleaner-grid" class="grid grid-cols-1 sm:grid-cols-2 gap-3 min-h-[260px] bg-black/40 p-4 rounded-3xl border border-white/10 content-start shadow-inner backdrop-blur-md"></div>
        </div>`;
    }

    // 4. TIMING
    else if (gameType === 'timing') {
      const target = config.target || 3;
      bodyHTML = `
        <div class="w-full max-w-md animate__animated animate__fadeIn">
          <div class="flex items-center justify-between mb-3 text-xs sm:text-sm uppercase tracking-widest text-amber-400 font-black">
            <span class="flex items-center gap-1.5"><span class="w-2 h-2 rounded-full bg-amber-400"></span> CANH CHUẨN THỜI CƠ</span>
            <span id="mg-timer" class="text-white text-xl font-black bg-black/60 px-3.5 py-1 rounded-xl border border-white/10 shadow-inner">${config.duration}s</span>
          </div>
          <div class="relative h-14 w-full bg-black/70 rounded-2xl mb-6 border border-white/15 overflow-hidden flex items-center shadow-inner">
            <div class="absolute left-[43%] w-[14%] h-full bg-amber-500/40 border-x-2 border-amber-400 flex items-center justify-center shadow-[0_0_25px_rgba(245,158,11,0.6)] pointer-events-none">
              <span class="text-[10px] font-black tracking-widest text-amber-200 uppercase animate-ping">GHI</span>
            </div>
            <div id="mg-timing-cursor" class="absolute left-0 w-2.5 h-full bg-white shadow-[0_0_20px_#fff] rounded-full transition-all duration-75 pointer-events-none"></div>
          </div>
          <div class="flex justify-between items-center mb-4 px-2 text-sm font-bold">
            <span class="text-slate-300 uppercase tracking-wider">BẰNG CHỨNG: <span id="mg-score" class="text-amber-400 text-xl font-black ml-1">0</span>/${target}</span>
            <span id="mg-timing-feedback" class="text-xs font-black text-amber-400 h-5 flex items-center uppercase tracking-widest"></span>
          </div>
          <button id="mg-timing-btn" class="w-full py-6 rounded-2xl bg-gradient-to-r from-amber-600 via-orange-600 to-amber-500 hover:from-amber-500 hover:to-orange-500 text-slate-950 font-black text-2xl shadow-[0_10px_35px_rgba(245,158,11,0.4)] border border-amber-300/60 active:scale-95 transition-transform transform-gpu select-none cursor-pointer uppercase tracking-wider">
            <span class="pointer-events-none drop-shadow-sm">BẤM GHI HÌNH</span>
          </button>
        </div>`;
    }

    // 5. HOLD
    else if (gameType === 'hold') {
      bodyHTML = `
        <div class="w-full max-w-md animate__animated animate__fadeIn">
          <div class="flex items-center justify-between mb-3 text-xs sm:text-sm uppercase tracking-widest text-indigo-400 font-black">
            <span class="animate-pulse flex items-center gap-1.5"><span class="w-2 h-2 rounded-full bg-indigo-400"></span> GIỮ CHẶT KHÔNG BUÔNG</span>
            <span id="mg-timer" class="text-white text-xl font-black bg-black/60 px-3.5 py-1 rounded-xl border border-white/10 shadow-inner">${config.duration}s</span>
          </div>
          <div class="h-7 w-full bg-black/60 rounded-full p-1.5 mb-6 border border-white/10 shadow-inner relative overflow-hidden flex items-center justify-center">
            <div id="mg-progress" class="absolute left-0 top-0 h-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 transition-all duration-75 w-0 shadow-[0_0_20px_rgba(168,85,247,0.8)] pointer-events-none"></div>
            <span id="mg-hold-percent" class="relative z-10 text-sm font-black text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)] pointer-events-none">0%</span>
          </div>
          <button id="mg-hold-btn" class="w-full py-10 rounded-3xl bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-500 text-white font-black text-2xl shadow-[0_15px_45px_rgba(99,102,241,0.5)] border border-indigo-400/40 select-none touch-none active:scale-95 transition-all transform-gpu flex flex-col items-center justify-center gap-2 cursor-pointer uppercase tracking-wider">
            <span class="pointer-events-none drop-shadow-md">NHẤN & GIỮ CHẶT</span>
            <span class="text-xs font-semibold text-indigo-200 normal-case pointer-events-none opacity-80">(Buông tay là tụt tâm lý ngay lập tức)</span>
          </button>
        </div>`;
    }

    // 6. BALANCE
    else if (gameType === 'balance') {
      bodyHTML = `
        <div class="w-full max-w-md animate__animated animate__fadeIn">
          <div class="flex items-center justify-between mb-3 text-xs sm:text-sm uppercase tracking-widest text-emerald-400 font-black">
            <span class="animate-pulse flex items-center gap-1.5"><span class="w-2 h-2 rounded-full bg-emerald-400"></span> GIỮ KIM TRONG VÙNG XANH</span>
            <span id="mg-timer" class="text-white text-xl font-black bg-black/60 px-3.5 py-1 rounded-xl border border-white/10 shadow-inner">${config.duration || 6}s</span>
          </div>
          <div class="flex justify-between text-xs font-extrabold uppercase px-1 mb-1.5">
            <span class="text-rose-400 animate-pulse flex items-center gap-1">🚨 BẠO LỰC (ĐỎ)</span>
            <span class="text-emerald-400 flex items-center gap-1">LÝ TRÍ (XANH) 🛡️</span>
          </div>
          <div class="relative h-14 w-full bg-black/70 rounded-2xl mb-6 border border-white/15 overflow-hidden flex items-center shadow-inner">
            <div class="absolute left-0 w-[35%] h-full bg-rose-600/30 border-r-2 border-rose-500/60 flex items-center justify-start pl-3 pointer-events-none"><span class="text-[10px] font-black text-rose-300 uppercase tracking-wider opacity-75">Nguy hiểm</span></div>
            <div class="absolute right-0 w-[65%] h-full bg-emerald-600/20 flex items-center justify-end pr-3 pointer-events-none"><span class="text-[10px] font-black text-emerald-300 uppercase tracking-wider opacity-75">An toàn</span></div>
            <div id="mg-balance-needle" class="absolute left-[50%] w-4 h-full bg-white shadow-[0_0_25px_#fff] rounded-full transition-all duration-75 -translate-x-1/2 border-2 border-slate-900 pointer-events-none z-10"></div>
          </div>
          <button id="mg-balance-btn" class="w-full py-10 sm:py-12 rounded-3xl bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-500 hover:from-emerald-500 hover:to-teal-400 text-white font-black text-2xl sm:text-3xl shadow-[0_15px_45px_rgba(16,185,129,0.5)] border border-emerald-300/40 active:scale-95 transition-transform transform-gpu flex flex-col items-center justify-center gap-2 select-none cursor-pointer uppercase tracking-wider group">
            <span class="pointer-events-none drop-shadow-md group-active:scale-95 transition-transform">LÁI VỀ LÝ TRÍ</span>
            <span class="text-xs font-semibold text-emerald-200 normal-case pointer-events-none opacity-80">(Bấm liên tục để cản cơn giận trượt về Đỏ)</span>
          </button>
        </div>`;
    }

    // 7. QTE / DEBATE
    else if (gameType === 'qte' || gameType === 'debate') {
      const rawOptions = config.qteOptions || [
        { text: "NHẶT LÊN ĐƯA TRẢ NÓ", correct: false },
        { text: "LÙI LẠI (KHÔNG CHẠM TAY VÀO)", correct: true },
        { text: "HOẢNG SỢ BỎ CHẠY", correct: false }
      ];
      const options = shuffleArray(rawOptions);
      const qteDuration = config.duration || 3.5;
      let btnsHTML = options.map((opt) => `
        <button data-correct="${opt.correct}" class="qte-option-btn relative overflow-hidden w-full py-5 px-6 rounded-2xl bg-gradient-to-r from-slate-900/90 to-slate-800/90 hover:from-slate-800 hover:to-slate-700 border border-white/10 hover:border-rose-500/50 font-extrabold text-base sm:text-lg text-slate-100 active:scale-[0.98] transition-all duration-200 text-left flex items-center justify-between group shadow-[0_10px_25px_rgba(0,0,0,0.5)] cursor-pointer select-none backdrop-blur-md">
          <span class="pointer-events-none pr-3 tracking-wide drop-shadow-sm">${opt.text}</span>
          <span class="text-xs bg-rose-500/20 text-rose-300 border border-rose-500/30 group-hover:bg-rose-600 group-hover:text-white group-hover:border-rose-500 px-3.5 py-1.5 rounded-xl transition-all font-black uppercase tracking-widest pointer-events-none shrink-0 shadow-inner">CHỌN</span>
        </button>
      `).join('');
      bodyHTML = `
        <div class="w-full max-w-md animate__animated animate__fadeIn">
          <div class="flex items-center justify-between mb-3 text-xs sm:text-sm uppercase tracking-widest text-rose-400 font-black">
            <span class="animate-bounce flex items-center gap-1.5"><span class="w-2 h-2 rounded-full bg-rose-500 animate-ping"></span> CHỌN NHANH TRONG TÍCH TẮC</span>
            <span id="mg-timer" class="text-white text-2xl font-black bg-rose-600/90 px-4 py-1 rounded-xl shadow-[0_0_20px_rgba(244,63,94,0.8)] border border-rose-400/50 animate-pulse">${qteDuration}s</span>
          </div>
          <p class="text-slate-100 font-bold text-sm sm:text-base mb-6 leading-relaxed bg-black/50 p-4 rounded-2xl border border-white/10 shadow-inner backdrop-blur-md">${config.description || 'Tình huống nguy cấp! Hãy phản xạ bấm ngay hành động ĐÚNG NHẤT!'}</p>
          <div class="flex flex-col gap-3.5">${btnsHTML}</div>
        </div>`;
    }

    // 8. TAPTAP
    else if (gameType === 'taptap') {
      const target = config.target || 30;
      bodyHTML = `
        <div class="w-full max-w-md animate__animated animate__fadeIn">
          <div class="flex items-center justify-between mb-3 text-xs sm:text-sm uppercase tracking-widest text-emerald-400 font-black">
            <span class="animate-pulse flex items-center gap-1.5"><span class="w-2 h-2 rounded-full bg-emerald-400"></span> BẤM LIÊN TỤC KHÔNG DỪNG</span>
            <span id="mg-timer" class="text-white text-xl font-black bg-black/60 px-3.5 py-1 rounded-xl border border-white/10 shadow-inner">${config.duration}s</span>
          </div>
          <div class="h-5 w-full bg-black/60 rounded-full p-1 mb-6 border border-white/10 shadow-inner">
            <div id="mg-progress" class="h-full bg-gradient-to-r from-emerald-500 via-teal-400 to-yellow-400 rounded-full transition-all duration-75 w-0 shadow-[0_0_20px_rgba(16,185,129,0.8)]"></div>
          </div>
          <button id="mg-action-btn" class="w-full py-10 sm:py-12 rounded-3xl bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-500 hover:from-emerald-500 hover:to-teal-400 text-white font-black text-2xl sm:text-3xl shadow-[0_15px_45px_rgba(16,185,129,0.5)] border border-emerald-300/40 active:scale-95 transition-transform transform-gpu flex flex-col items-center justify-center gap-2 select-none cursor-pointer uppercase tracking-wider group">
            <span class="pointer-events-none drop-shadow-md">BẤM ĐỂ CHẠY</span>
            <span id="mg-score-badge" class="text-sm font-extrabold bg-black/40 px-4 py-1 rounded-full text-emerald-300 border border-emerald-500/30 pointer-events-none shadow-inner">0/${target}</span>
          </button>
        </div>`;
    }
    // 9. STEALTH & SHIELD
    else if (gameType === 'stealth') {
      bodyHTML = `
        <div class="w-full max-w-md animate__animated animate__fadeIn">
          <div class="flex items-center justify-between mb-3 text-xs sm:text-sm uppercase tracking-widest text-amber-400 font-black">
            <span id="mg-stealth-status" class="flex items-center gap-2"><span class="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping"></span> ĐANG AN TOÀN (GHI HÌNH)</span>
            <span id="mg-timer" class="text-white text-xl font-black bg-black/60 px-3.5 py-1 rounded-xl border border-white/10">${config.duration || 7}s</span>
          </div>
          <div class="h-6 w-full bg-black/60 rounded-full p-1.5 mb-6 border border-white/15 shadow-inner relative overflow-hidden flex items-center justify-center">
            <div id="mg-progress" class="absolute left-0 top-0 h-full bg-gradient-to-r from-amber-500 via-orange-500 to-yellow-400 transition-all duration-75 w-0 shadow-[0_0_20px_rgba(245,158,11,0.8)]"></div>
            <span id="mg-stealth-percent" class="relative z-10 text-xs font-black text-white drop-shadow">0%</span>
          </div>
          <div id="mg-stealth-box" class="w-full p-6 rounded-2xl bg-slate-950/80 border-2 border-emerald-500/50 mb-6 transition-all duration-200 shadow-inner flex flex-col items-center justify-center min-h-[120px]">
            <span id="mg-stealth-icon" class="text-3xl mb-1 font-black text-emerald-400 uppercase tracking-widest">[ HƯỚNG KHÁC ]</span>
            <span id="mg-stealth-desc" class="text-xs text-slate-300 font-medium">Hung thủ đang không chú ý. Hãy NHẤN GIỮ để ghi hình!</span>
          </div>
          <button id="mg-stealth-btn" class="w-full py-8 rounded-2xl bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-500 hover:to-orange-500 text-white font-black text-2xl shadow-[0_15px_40px_rgba(245,158,11,0.4)] border border-amber-300/40 select-none touch-none active:scale-95 transition-all flex flex-col items-center justify-center gap-1 cursor-pointer uppercase tracking-wider">
            <span class="pointer-events-none drop-shadow-md">GIỮ ĐỂ QUAY LÉN</span>
            <span class="text-xs font-semibold text-amber-200 normal-case pointer-events-none">(Thấy nháy đỏ lập tức nhả tay ra)</span>
          </button>
        </div>`;
    }
    else if (gameType === 'shield') {
      const target = config.target || 6;
      bodyHTML = `
        <div class="w-full max-w-lg animate__animated animate__fadeIn">
          <div class="flex items-center justify-between mb-3 text-xs sm:text-sm uppercase tracking-widest text-sky-400 font-black">
            <span class="flex items-center gap-1.5"><span class="w-2 h-2 rounded-full bg-sky-400 animate-ping"></span> CHẮN ĐÒN BẢO VỆ</span>
            <span id="mg-timer" class="text-white text-xl font-black bg-black/60 px-3.5 py-1 rounded-xl border border-white/10">${config.duration || 6}s</span>
          </div>
          <div class="flex justify-between items-center mb-4 bg-black/50 px-4 py-3 rounded-2xl border border-white/10 text-sm font-bold text-slate-200 shadow-inner">
            <span>ĐÃ CHẮN ĐÒN: <span id="mg-score" class="text-sky-400 font-black text-xl ml-1">0</span>/${target}</span>
            <span class="text-xs text-rose-400 animate-pulse font-black uppercase">BẤM VÀO CỘT ĐANG BÁO ĐỘNG ĐỎ!</span>
          </div>
          <div class="grid grid-cols-3 gap-3 min-h-[220px] mb-2">
            <button id="shield-0" class="shield-col w-full h-full rounded-2xl bg-black/40 border-2 border-white/10 flex flex-col items-center justify-center p-4 transition-all duration-150 active:scale-95 cursor-pointer group"><span class="text-xs font-bold text-slate-400 mb-2 uppercase tracking-widest">HƯỚNG TRÁI</span><div class="shield-indicator w-12 h-12 rounded-full bg-slate-800 border border-slate-600 flex items-center justify-center font-black text-lg transition-all">[ ]</div></button>
            <button id="shield-1" class="shield-col w-full h-full rounded-2xl bg-black/40 border-2 border-white/10 flex flex-col items-center justify-center p-4 transition-all duration-150 active:scale-95 cursor-pointer group"><span class="text-xs font-bold text-slate-400 mb-2 uppercase tracking-widest">CHÍNH GIỮA</span><div class="shield-indicator w-12 h-12 rounded-full bg-slate-800 border border-slate-600 flex items-center justify-center font-black text-lg transition-all">[ ]</div></button>
            <button id="shield-2" class="shield-col w-full h-full rounded-2xl bg-black/40 border-2 border-white/10 flex flex-col items-center justify-center p-4 transition-all duration-150 active:scale-95 cursor-pointer group"><span class="text-xs font-bold text-slate-400 mb-2 uppercase tracking-widest">HƯỚNG PHẢI</span><div class="shield-indicator w-12 h-12 rounded-full bg-slate-800 border border-slate-600 flex items-center justify-center font-black text-lg transition-all">[ ]</div></button>
          </div>
        </div>`;
    }

    // Render Modal chính
    overlay.innerHTML = `
      <div class="relative w-full max-w-xl bg-slate-900/80 backdrop-blur-2xl border border-white/15 rounded-[32px] p-6 sm:p-8 shadow-[0_25px_70px_rgba(0,0,0,0.9)] overflow-hidden flex flex-col items-center justify-center text-center text-white z-10">
        <div class="absolute -top-40 left-1/2 -translate-x-1/2 w-80 h-80 rounded-full blur-[120px] pointer-events-none" style="background-color: ${glowColor}"></div>
        ${bodyHTML}
      </div>`;

    activeMinigame = { config, onComplete };
    minigameState = { elapsed: 0, score: 0, completed: false, isHolding: false, timingPos: 0, timingDir: 1, isAlert: false, balancePos: 50 };

    const timerEl = document.getElementById('mg-timer');

    // ----------------------------------------------------
    // BỘ ĐẾM THỜI GIAN CHUNG (TICKER - 100ms)
    // ----------------------------------------------------
    addSafeInterval(() => {
      minigameState.elapsed += 0.1;
      const totalDur = (gameType === 'qte' || gameType === 'debate') ? (config.duration || 3.5) : (config.duration || 6);
      const remaining = Math.max(0, (totalDur - minigameState.elapsed).toFixed(1));
      if (timerEl) timerEl.textContent = `${Math.ceil(remaining)}s`;

      if (remaining <= 3 && Math.floor(remaining * 10) % 10 === 0) {
        playSoundSafe('sfx_beep');
      }

      if (gameType === 'balance') {
        minigameState.balancePos = Math.max(0, minigameState.balancePos - 1.4);
        const needle = document.getElementById('mg-balance-needle');
        if (needle) {
          needle.style.left = `${minigameState.balancePos}%`;
          if (minigameState.balancePos < 35) {
            needle.className = "absolute w-4 h-full bg-rose-500 shadow-[0_0_25px_#f43f5e] rounded-full transition-all duration-75 -translate-x-1/2 border-2 border-white pointer-events-none z-10";
          } else {
            needle.className = "absolute w-4 h-full bg-white shadow-[0_0_25px_#fff] rounded-full transition-all duration-75 -translate-x-1/2 border-2 border-slate-900 pointer-events-none z-10";
          }
        }
        if (minigameState.balancePos <= 1 && !minigameState.completed) { minigameState.completed = true; finishGame(false); return; }
      }

      if (gameType === 'stealth') {
        if (Math.floor(minigameState.elapsed * 10) % 18 === 0 && minigameState.elapsed > 0.5) {
          minigameState.isAlert = !minigameState.isAlert;
          const box = document.getElementById('mg-stealth-box'); const icon = document.getElementById('mg-stealth-icon'); const desc = document.getElementById('mg-stealth-desc'); const status = document.getElementById('mg-stealth-status');
          if (minigameState.isAlert) {
            playSoundSafe('sfx_beep');
            if (box) box.className = "w-full p-6 rounded-2xl bg-rose-950/90 border-2 border-rose-500 mb-6 transition-all duration-150 shadow-inner flex flex-col items-center justify-center min-h-[120px] animate__animated animate__headShake";
            if (icon) { icon.textContent = "HUNG THỦ QUAY LẠI"; icon.className = "text-3xl mb-1 font-black text-rose-400 uppercase tracking-widest animate-pulse"; }
            if (desc) desc.textContent = "BUÔNG TAY RA NGAY! Kẻ xấu đang nhìn về phía bạn!"; if (status) status.innerHTML = `<span class="w-2.5 h-2.5 rounded-full bg-rose-500 animate-ping"></span> BÁO ĐỘNG ĐỎ`;
          } else {
            if (box) box.className = "w-full p-6 rounded-2xl bg-slate-950/80 border-2 border-emerald-500/50 mb-6 transition-all duration-150 shadow-inner flex flex-col items-center justify-center min-h-[120px]";
            if (icon) { icon.textContent = "[ HƯỚNG KHÁC ]"; icon.className = "text-3xl mb-1 font-black text-emerald-400 uppercase tracking-widest"; }
            if (desc) desc.textContent = "Hung thủ đang không chú ý. Hãy NHẤN GIỮ để ghi hình!"; if (status) status.innerHTML = `<span class="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping"></span> ĐANG AN TOÀN (GHI HÌNH)`;
          }
        }
        if (minigameState.isHolding) { if (minigameState.isAlert) { playSoundSafe('sfx_glitch'); minigameState.score = Math.max(0, minigameState.score - 8); } else { minigameState.score = Math.min(100, minigameState.score + 4.5); } }
        const prog = document.getElementById('mg-progress'); const perc = document.getElementById('mg-stealth-percent');
        if (prog) prog.style.width = `${minigameState.score}%`; if (perc) perc.textContent = `${Math.floor(minigameState.score)}%`;
        if (minigameState.score >= 100 && !minigameState.completed) { minigameState.completed = true; finishGame(true); return; }
      }

      if (gameType === 'shield') {
        // 👉 Sửa % 12 thành % 8 để cứ 0.8 giây lại có một mục tiêu xuất hiện (tạo nhiều cơ hội bấm hơn)
        if (Math.floor(minigameState.elapsed * 10) % 8 === 0 && minigameState.elapsed > 0.1) {
          const randCol = Math.floor(Math.random() * 3);
          for (let i = 0; i < 3; i++) {
            const col = document.getElementById(`shield-${i}`); if (!col) continue;
            if (i === randCol) {
              col.setAttribute('data-active', 'true'); col.className = "shield-col w-full h-full rounded-2xl bg-rose-950/80 border-2 border-rose-500 flex flex-col items-center justify-center p-4 transition-all duration-150 cursor-pointer shadow-[0_0_25px_rgba(244,63,94,0.6)] animate__animated animate__pulse";
              col.querySelector('.shield-indicator').className = "shield-indicator w-12 h-12 rounded-full bg-rose-600 border border-rose-400 flex items-center justify-center font-black text-lg transition-all text-white animate-bounce"; col.querySelector('.shield-indicator').textContent = "CHẶN";
            } else {
              col.setAttribute('data-active', 'false'); col.className = "shield-col w-full h-full rounded-2xl bg-black/40 border-2 border-white/10 flex flex-col items-center justify-center p-4 transition-all duration-150 cursor-pointer opacity-60";
              col.querySelector('.shield-indicator').className = "shield-indicator w-12 h-12 rounded-full bg-slate-800 border border-slate-600 flex items-center justify-center font-black text-lg transition-all text-slate-500"; col.querySelector('.shield-indicator').textContent = "[ ]";
            }
          }
        }
      }

      if (gameType === 'taptap' && minigameState.score > 0) {
        minigameState.score = Math.max(0, minigameState.score - 0.2); const prog = document.getElementById('mg-progress'); const badge = document.getElementById('mg-score-badge');
        if (prog) prog.style.width = `${Math.min(100, (minigameState.score / (config.target || 30)) * 100)}%`; if (badge) badge.textContent = `${Math.floor(minigameState.score)}/${config.target || 30}`;
      }
      if (gameType === 'hold') {
        if (minigameState.isHolding) minigameState.score = Math.min(100, minigameState.score + 3.0); else minigameState.score = Math.max(0, minigameState.score - 5.5);
        const prog = document.getElementById('mg-progress'); const perc = document.getElementById('mg-hold-percent');
        if (prog) prog.style.width = `${minigameState.score}%`; if (perc) perc.textContent = `${Math.floor(minigameState.score)}%`;
        if (minigameState.score >= 100 && !minigameState.completed) { minigameState.completed = true; finishGame(true); return; }
      }
      if (gameType === 'timing') {
        minigameState.timingPos += (minigameState.timingDir * 7.0); if (minigameState.timingPos >= 95) minigameState.timingDir = -1; if (minigameState.timingPos <= 0) minigameState.timingDir = 1;
        const cursor = document.getElementById('mg-timing-cursor'); if (cursor) cursor.style.left = `${minigameState.timingPos}%`;
      }

      // HẾT GIỜ CHUNG
      if (minigameState.elapsed >= totalDur && !minigameState.completed) {
        minigameState.completed = true;
        let isSuccess = false;
        if (gameType === 'taptap' || gameType === 'cleaner' || gameType === 'timing' || gameType === 'shield' || gameType === 'evidence_scan' || gameType === 'firewall') {
          isSuccess = minigameState.score >= (config.target || 6);
        } else if (gameType === 'balance') {
          isSuccess = minigameState.balancePos >= 35;
        }
        finishGame(isSuccess);
      }
    }, 100);

    // ----------------------------------------------------
    // 👉 [BỘ MÁY SPAWNER ĐỘC LẬP TỐI ƯU HÓA HOÀN TOÀN V10.0]
    // ----------------------------------------------------
    // 1. EVIDENCE SCAN (SOI BẰNG CHỨNG)
    if (gameType === 'evidence_scan') {
      const grid = document.getElementById('mg-evidence-grid'); const scoreEl = document.getElementById('mg-score'); const target = config.target || 6;
      function spawnEvidence() {
        if (!minigameState || minigameState.completed || !grid) return;
        if (grid.children.length >= 4) return;
        const isReal = Math.random() > 0.35; // 65% là bằng chứng thật
        const node = document.createElement('button');
        if (isReal) {
          node.className = "animate__animated animate__zoomIn p-4 rounded-2xl bg-sky-950/90 hover:bg-sky-900 border-2 border-sky-400 text-sky-100 text-xs font-extrabold flex items-center justify-between shadow-xl cursor-pointer select-none backdrop-blur-md";
          node.innerHTML = `<span class="pointer-events-none">📁 DATA_iCloud_${Math.floor(Math.random()*89+10)}</span> <span class="bg-sky-500 text-white px-2.5 py-1 rounded-lg font-black text-[10px] pointer-events-none shadow-sm">SYNC</span>`;
          bindInstantTouch(node, () => {
            if (node.getAttribute('data-clicked') === 'true') return;
            node.setAttribute('data-clicked', 'true');
            playSoundSafe('button'); minigameState.score += 1; if (scoreEl) scoreEl.textContent = minigameState.score;
            node.className = "animate__animated animate__zoomOut p-4 rounded-2xl bg-emerald-950 border-2 border-emerald-400 text-emerald-300 text-xs font-black opacity-0 pointer-events-none";
            setTimeout(() => node.remove(), 150);
            if (minigameState.score >= target) { minigameState.completed = true; finishGame(true); }
          });
        } else {
          node.className = "animate__animated animate__zoomIn p-4 rounded-2xl bg-rose-950/90 hover:bg-rose-900 border-2 border-rose-500/70 text-rose-200 text-xs font-bold flex items-center justify-between shadow-xl cursor-pointer select-none opacity-90 backdrop-blur-md";
          node.innerHTML = `<span class="pointer-events-none">⚠️ CORRUPT_FILE</span> <span class="bg-rose-600 text-white px-2 py-0.5 rounded-lg font-black text-[10px] pointer-events-none shadow-sm">FAKE</span>`;
          bindInstantTouch(node, () => {
            if (node.getAttribute('data-clicked') === 'true') return;
            node.setAttribute('data-clicked', 'true');
            playSoundSafe('sfx_glitch'); minigameState.score = Math.max(0, minigameState.score - 1); if (scoreEl) scoreEl.textContent = minigameState.score;
            node.className = "animate__animated animate__headShake p-4 rounded-2xl bg-rose-600 text-white text-xs font-black pointer-events-none";
            setTimeout(() => node.remove(), 250);
          });
        }
        grid.appendChild(node);
        setTimeout(() => { if (node && node.parentNode === grid) { node.classList.replace('animate__zoomIn', 'animate__fadeOut'); setTimeout(() => { if (node.parentNode === grid) node.remove(); }, 200); } }, 1300);
      }
      addSafeInterval(spawnEvidence, 450); spawnEvidence();
    }

    // 2. FIREWALL (TƯỜNG LỬA CHẶN SPAM)
    else if (gameType === 'firewall') {
      const grid = document.getElementById('mg-firewall-grid'); const scoreEl = document.getElementById('mg-score'); const target = config.target || 7;
      function spawnFirewallPacket() {
        if (!minigameState || minigameState.completed || !grid) return;
        if (grid.children.length >= 4) return;
        const isSpam = Math.random() > 0.35; // 65% là Spam DDoS màu Đỏ cần xóa
        const pkt = document.createElement('button');
        if (isSpam) {
          pkt.className = "animate__animated animate__zoomIn p-4 rounded-2xl bg-rose-950/90 hover:bg-rose-900 border-2 border-rose-500 text-rose-100 text-xs font-black flex items-center justify-between shadow-xl cursor-pointer select-none backdrop-blur-md";
          pkt.innerHTML = `<span class="pointer-events-none">🚨 DDOS_SPAM_#${Math.floor(Math.random()*899+100)}</span> <span class="bg-rose-600 text-white px-3 py-1 rounded-lg font-extrabold text-[10px] pointer-events-none uppercase shadow-sm">CHẶN NGAY</span>`;
          bindInstantTouch(pkt, () => {
            if (pkt.getAttribute('data-clicked') === 'true') return;
            pkt.setAttribute('data-clicked', 'true');
            playSoundSafe('sfx_glitch'); minigameState.score += 1; if (scoreEl) scoreEl.textContent = minigameState.score;
            pkt.className = "animate__animated animate__zoomOut p-4 rounded-2xl bg-emerald-950 border-2 border-emerald-400 text-emerald-300 text-xs font-black opacity-0 pointer-events-none";
            setTimeout(() => pkt.remove(), 150);
            if (minigameState.score >= target) { minigameState.completed = true; finishGame(true); }
          });
        } else {
          // Gói tin thật Màu Xanh -> KHÔNG ĐƯỢC BẤM!
          pkt.className = "animate__animated animate__zoomIn p-4 rounded-2xl bg-emerald-950/90 border-2 border-emerald-500 text-emerald-100 text-xs font-bold flex items-center justify-between shadow-xl cursor-pointer select-none backdrop-blur-md opacity-95";
          pkt.innerHTML = `<span class="pointer-events-none">🛡️ TIN_BÁO_CÁO_THẬT</span> <span class="bg-emerald-600 text-white px-2.5 py-1 rounded-lg font-black text-[10px] pointer-events-none uppercase shadow-sm">ĐỂ NGUYÊN</span>`;
          bindInstantTouch(pkt, () => {
            if (pkt.getAttribute('data-clicked') === 'true') return;
            pkt.setAttribute('data-clicked', 'true');
            playSoundSafe('fail'); minigameState.score = Math.max(0, minigameState.score - 2); if (scoreEl) scoreEl.textContent = minigameState.score;
            pkt.className = "animate__animated animate__shakeX p-4 rounded-2xl bg-rose-600 text-white text-xs font-black pointer-events-none";
            setTimeout(() => pkt.remove(), 250);
          });
        }
        grid.appendChild(pkt);
        setTimeout(() => { if (pkt && pkt.parentNode === grid) { pkt.classList.replace('animate__zoomIn', 'animate__fadeOut'); setTimeout(() => { if (pkt.parentNode === grid) pkt.remove(); }, 200); } }, 1300);
      }
      addSafeInterval(spawnFirewallPacket, 450); spawnFirewallPacket();
    }

    // 3. CLEANER (DIỆT TIN ĐỒN)
    else if (gameType === 'cleaner') {
      const grid = document.getElementById('mg-cleaner-grid'); const scoreEl = document.getElementById('mg-score'); const target = config.target || 7;
      const toxicTexts = ["Ra chuồng gà đi!", "Nạn nhân giả tạo!", "Đồ búp bê pha lê!", "Bé suy vãi ò!", "Mách lẻo đáng khinh!", "Toxic vừa thôi!", "Khóc lóc cái gì?"];
      function spawnToxicBubble() {
        if (!minigameState || minigameState.completed || !grid) return;
        if (grid.children.length >= 4) return;
        const bubble = document.createElement('button'); const randomText = toxicTexts[Math.floor(Math.random() * toxicTexts.length)];
        bubble.className = "animate__animated animate__zoomIn p-4 rounded-2xl bg-rose-950/90 hover:bg-rose-900 border border-rose-500/60 text-rose-100 text-xs sm:text-sm font-bold text-left flex items-center justify-between shadow-xl transition-transform active:scale-95 cursor-pointer select-none backdrop-blur-md";
        bubble.innerHTML = `<span class="font-semibold pointer-events-none tracking-wide">"${randomText}"</span> <span class="text-[10px] bg-rose-600 text-white px-2.5 py-1 rounded-lg font-black uppercase tracking-wider pointer-events-none shadow-sm">Xóa</span>`;
        bindInstantTouch(bubble, () => {
          if (bubble.getAttribute('data-clicked') === 'true') return;
          bubble.setAttribute('data-clicked', 'true');
          playSoundSafe('sfx_glitch'); minigameState.score += 1; if (scoreEl) scoreEl.textContent = minigameState.score;
          bubble.className = "animate__animated animate__zoomOut p-4 rounded-2xl bg-emerald-950/90 border border-emerald-500 text-emerald-300 text-xs font-black opacity-0 transition-all duration-150 pointer-events-none";
          setTimeout(() => bubble.remove(), 150);
          if (minigameState.score >= target) { minigameState.completed = true; finishGame(true); }
        });
        grid.appendChild(bubble);
        setTimeout(() => { if (bubble && bubble.parentNode === grid) { bubble.classList.replace('animate__zoomIn', 'animate__fadeOut'); setTimeout(() => { if (bubble.parentNode === grid) bubble.remove(); }, 200); } }, 1200);
      }
      addSafeInterval(spawnToxicBubble, 400); spawnToxicBubble();
    }

    // ----------------------------------------------------
    // HÀM KẾT THÚC GAME
    // ----------------------------------------------------
    function finishGame(isSuccess) {
      clearAllTimers();
      const nextScene = isSuccess ? config.successScene : config.failScene;
      playSoundSafe(isSuccess ? 'complete' : 'fail');
      const card = overlay.firstElementChild;
      if (card) {
        card.style.transition = "all 0.3s"; card.style.borderColor = isSuccess ? "#10b981" : "#f43f5e"; card.style.boxShadow = isSuccess ? "0 0 90px rgba(16,185,129,0.8)" : "0 0 90px rgba(244,63,94,0.8)";
      }
      setTimeout(() => {
        closeMinigame();
        if (onComplete) {
          if (nextScene) onComplete(isSuccess, nextScene);
          else onComplete(isSuccess);
        }
      }, 500);
    }

    // ----------------------------------------------------
    // SỰ KIỆN TƯƠNG TÁC CÁC GAME KHÁC (ZERO BUG V10.0)
    // ----------------------------------------------------
    if (gameType === 'balance') {
      const btn = document.getElementById('mg-balance-btn');
      if (btn) {
        bindInstantTouch(btn, () => {
          playSoundSafe('button'); minigameState.balancePos = Math.min(95, minigameState.balancePos + 8);
          const needle = document.getElementById('mg-balance-needle');
          if (needle) { needle.style.left = `${minigameState.balancePos}%`; if (minigameState.balancePos >= 35) { needle.className = "absolute w-4 h-full bg-white shadow-[0_0_25px_#fff] rounded-full transition-all duration-75 -translate-x-1/2 border-2 border-slate-900 pointer-events-none z-10"; } }
        });
      }
    }
    else if (gameType === 'stealth') {
      const btn = document.getElementById('mg-stealth-btn');
      if (btn) {
        const startH = (e) => { if (!minigameState || minigameState.completed) return; if(e.cancelable) e.preventDefault(); minigameState.isHolding = true; btn.classList.add('scale-95', 'bg-amber-800'); };
        const endH = (e) => { if (!minigameState) return; if(e.cancelable) e.preventDefault(); minigameState.isHolding = false; btn.classList.remove('scale-95', 'bg-amber-800'); };
        btn.addEventListener('mousedown', startH); window.addEventListener('mouseup', endH);
        btn.addEventListener('touchstart', startH, {passive:false}); window.addEventListener('touchend', endH, {passive:false}); window.addEventListener('touchcancel', endH, {passive:false});
      }
    }
    else if (gameType === 'shield') {
      const scoreEl = document.getElementById('mg-score'); const target = config.target || 6;
      for (let i = 0; i < 3; i++) {
        const col = document.getElementById(`shield-${i}`); if (!col) continue;
        bindInstantTouch(col, () => {
          if (col.getAttribute('data-active') === 'true') {
            playSoundSafe('button'); minigameState.score += 1; if (scoreEl) scoreEl.textContent = minigameState.score;
            col.setAttribute('data-active', 'false'); col.className = "shield-col w-full h-full rounded-2xl bg-emerald-950/80 border-2 border-emerald-500 flex flex-col items-center justify-center p-4 transition-all";
            col.querySelector('.shield-indicator').className = "shield-indicator w-12 h-12 rounded-full bg-emerald-600 text-white flex items-center justify-center font-black"; col.querySelector('.shield-indicator').textContent = "OK";
            if (minigameState.score >= target) { minigameState.completed = true; finishGame(true); }
          } else { playSoundSafe('sfx_glitch'); }
        });
      }
    }
    else if (gameType === 'debate' || gameType === 'qte') {
      const btns = overlay.querySelectorAll('.qte-option-btn');
      btns.forEach(btn => {
        bindInstantTouch(btn, () => {
          playSoundSafe('button'); minigameState.completed = true;
          const isCorrect = btn.getAttribute('data-correct') === 'true';
          if (!isCorrect) {
            btn.classList.replace('from-slate-900/90', 'from-rose-950'); btn.classList.replace('to-slate-800/90', 'to-rose-900'); btn.classList.add('border-rose-500', 'animate__animated', 'animate__shakeX');
          } else {
            btn.classList.replace('from-slate-900/90', 'from-emerald-950'); btn.classList.replace('to-slate-800/90', 'to-emerald-900'); btn.classList.add('border-emerald-500');
          }
          btns.forEach(b => b.style.pointerEvents = 'none'); finishGame(isCorrect);
        });
      });
    }
    else if (gameType === 'taptap') {
      const btn = document.getElementById('mg-action-btn');
      if (btn) {
        bindInstantTouch(btn, () => {
          playSoundSafe('button'); minigameState.score += 1.4;
          const target = config.target || 30; const prog = document.getElementById('mg-progress'); const badge = document.getElementById('mg-score-badge');
          if (badge) badge.textContent = `${Math.floor(minigameState.score)}/${target}`; if (prog) prog.style.width = `${Math.min(100, (minigameState.score / target) * 100)}%`;
          if (minigameState.score >= target) { minigameState.completed = true; finishGame(true); }
        });
      }
    }
    else if (gameType === 'timing') {
      const btn = document.getElementById('mg-timing-btn'); const scoreEl = document.getElementById('mg-score'); const feedback = document.getElementById('mg-timing-feedback'); const target = config.target || 3;
      if (btn) {
        bindInstantTouch(btn, () => {
          playSoundSafe('button');
          if (minigameState.timingPos >= 41 && minigameState.timingPos <= 59) {
            minigameState.score += 1; if (scoreEl) scoreEl.textContent = minigameState.score;
            if (feedback) { feedback.textContent = "CHÍNH XÁC"; feedback.className = "text-xs font-black text-emerald-400 h-5 animate__animated animate__bounceIn flex items-center"; }
            if (minigameState.score >= target) { minigameState.completed = true; finishGame(true); }
          } else {
            if (feedback) { feedback.textContent = "TRƯỢT NHỊP"; feedback.className = "text-xs font-black text-rose-500 h-5 animate__animated animate__shakeX flex items-center"; }
          }
        });
      }
    }
    else if (gameType === 'hold') {
      const btn = document.getElementById('mg-hold-btn');
      if (btn) {
        const startHold = (e) => { if (!minigameState || minigameState.completed) return; if (e.cancelable) e.preventDefault(); minigameState.isHolding = true; btn.classList.add('bg-indigo-900', 'scale-95', 'border-indigo-400'); };
        const endHold = (e) => { if (!minigameState) return; if (e.cancelable) e.preventDefault(); minigameState.isHolding = false; btn.classList.remove('bg-indigo-900', 'scale-95', 'border-indigo-400'); };
        btn.addEventListener('mousedown', startHold); window.addEventListener('mouseup', endHold);
        btn.addEventListener('touchstart', startHold, { passive: false }); window.addEventListener('touchend', endHold, { passive: false }); window.addEventListener('touchcancel', endHold, { passive: false });
      }
    }
  }

  window.MinigameEngine = { showMinigame, closeMinigame };
})();