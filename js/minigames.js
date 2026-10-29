// ==========================================
// HỆ THỐNG MINI-GAME ĐA NĂNG (GÓC KHUẤT) - V11.0 PERFORMANCE MASTER
// Ép xung 60FPS bằng requestAnimationFrame | GPU Acceleration | Fix rò rỉ bộ nhớ
// ==========================================
(function(){
  let activeMinigame = null;
  let minigameState = null;
  let activeTimers = [];
  let windowListeners = [];
  let rAF_ID = null;
  let lastFrameTime = 0;

  // Quản lý Timer (Chỉ dùng cho Spawner, không dùng cho Animation)
  function addSafeInterval(callback, delay) {
    const id = setInterval(() => {
      if (!minigameState || minigameState.completed) {
        clearInterval(id); return;
      }
      callback();
    }, delay);
    activeTimers.push(id);
    return id;
  }

  // Quản lý Event Listener diện rộng (Bịt lỗ hổng rò rỉ bộ nhớ)
  function addSafeWindowListener(type, handler, options = false) {
    window.addEventListener(type, handler, options);
    windowListeners.push({ type, handler, options });
  }

  function cleanUpEngine() {
    activeTimers.forEach(id => clearInterval(id));
    activeTimers = [];
    windowListeners.forEach(l => window.removeEventListener(l.type, l.handler, l.options));
    windowListeners = [];
    if (rAF_ID) { cancelAnimationFrame(rAF_ID); rAF_ID = null; }
  }

  function closeMinigame() {
    cleanUpEngine();
    const overlay = document.getElementById('minigame-overlay');
    if (overlay) overlay.classList.add('hidden');
    activeMinigame = null;
    minigameState = null;
    if (window.GameAudio && window.GameAudio.startBGM) {
      window.GameAudio.startBGM('bgm_normal');
    }
  }

  function playSoundSafe(type) {
    if (window.GameAudio && window.GameAudio.playSound) window.GameAudio.playSound(type);
  }

  function shuffleArray(array) {
    const arr = [...array];
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }

  // Cảm ứng kép chạm - nhả lập tức (Bỏ độ trễ 300ms của iOS cũ)
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
  // BƯỚC 1: MÀN HÌNH HƯỚNG DẪN SIÊU SANG
  // ==========================================
  function showMinigame(config, onComplete) {
    const overlay = document.getElementById('minigame-overlay');
    if (!overlay) return;

    cleanUpEngine(); // Xóa sạch rác từ màn chơi trước nếu có
    if (window.GameAudio && window.GameAudio.startBGM) window.GameAudio.startBGM('bgm_tension');
    playSoundSafe('sfx_heartbeat');

    overlay.className = "fixed inset-0 z-[150] w-screen h-[100dvh] bg-black/85 backdrop-blur-xl flex items-center justify-center p-4 select-none animate__animated animate__fadeIn";
    
    const gameType = config.type || 'taptap';
    let defaultInstruction = "", categoryBadge = "THỬ THÁCH THỂ LỰC", difficultyTag = "ĐỘ KHÓ: CAO", themeColor = "sky", glowColor = "rgba(14, 165, 233, 0.25)";

    if (gameType === 'taptap') {
      defaultInstruction = "Nhấp liên tục với tốc độ cực cao vào nút hành động bên dưới để bứt tốc!"; categoryBadge = "THỬ THÁCH THỂ LỰC"; themeColor = "emerald"; glowColor = "rgba(16, 185, 129, 0.25)";
    } else if (gameType === 'cleaner') {
      defaultInstruction = "Tin nhắn độc hại xuất hiện liên tục! Hãy phản xạ bấm ngay vào các hộp thoại màu đỏ để tiêu diệt!"; categoryBadge = "THỬ THÁCH PHẢN XẠ"; themeColor = "sky"; glowColor = "rgba(14, 165, 233, 0.25)";
    } else if (gameType === 'timing') {
      defaultInstruction = "Hãy tập trung tối đa, bấm nút GHI HÌNH đúng khoảnh khắc con trỏ lọt vào vùng sáng mục tiêu!"; categoryBadge = "THỬ THÁCH ĐỘ CHÍNH XÁC"; themeColor = "amber"; glowColor = "rgba(245, 158, 11, 0.25)";
    } else if (gameType === 'hold') {
      defaultInstruction = "Nhấn và GIỮ CHẶT ngón tay không buông để duy trì sự bình tĩnh cho đến khi đạt 100%!"; categoryBadge = "THỬ THÁCH TÂM LÝ"; themeColor = "indigo"; glowColor = "rgba(99, 102, 241, 0.25)";
    } else if (gameType === 'qte' || gameType === 'debate') {
      defaultInstruction = "Tình huống sinh tử diễn ra trong tích tắc! Hãy nhìn thật kỹ và chọn đáp án CHÍNH XÁC NHẤT!"; categoryBadge = "QUYẾT ĐỊNH SINH TỬ"; difficultyTag = "ĐỘ KHÓ: CỰC HẠN"; themeColor = "rose"; glowColor = "rgba(244, 63, 94, 0.3)";
    } else if (gameType === 'balance') {
      defaultInstruction = "Bấm nhấp liên tục vào nút 'LÁI VỀ LÝ TRÍ' để giữ kim luôn nằm trong vùng Xanh an toàn!"; categoryBadge = "CÂN BẰNG ĐÁM ĐÔNG"; difficultyTag = "ĐỘ KHÓ: CAO"; themeColor = "emerald"; glowColor = "rgba(16, 185, 129, 0.3)";
    } else if (gameType === 'stealth') {
      defaultInstruction = "Nhấn GIỮ NÚT để quay lén. NHƯNG khi hệ thống nháy ĐỎ, phải lập tức BUÔNG TAY RA NGAY!"; categoryBadge = "THỬ THÁCH QUAY LÉN"; difficultyTag = "ĐỘ KHÓ: CỰC HẠN"; themeColor = "amber"; glowColor = "rgba(245, 158, 11, 0.3)";
    } else if (gameType === 'shield') {
      defaultInstruction = "Các mối nguy hiểm lao đến từ 3 hướng. Bấm ngay vào hướng đang báo động để chắn đòn!"; categoryBadge = "TẤM KHIÊN BẢO VỆ"; difficultyTag = "ĐỘ KHÓ: CAO"; themeColor = "sky"; glowColor = "rgba(14, 165, 233, 0.3)";
    } else if (gameType === 'evidence_scan') {
      defaultInstruction = "Radar dữ liệu đang quét! Phản xạ bấm ngay vào BẰNG CHỨNG THẬT (Màu Xanh). KHÔNG bấm vào dữ liệu nhiễu!"; categoryBadge = "SOI CHIẾU BẰNG CHỨNG"; difficultyTag = "ĐỘ KHÓ: CỰC HẠN"; themeColor = "sky"; glowColor = "rgba(14, 165, 233, 0.35)";
    } else if (gameType === 'firewall') {
      defaultInstruction = "Hệ thống đang bị tấn công! CHỈ ĐƯỢC BẤM XÓA các gói 'SPAM / DDOS (Màu Đỏ)'!"; categoryBadge = "TƯỜNG LỬA BẢO VỆ"; difficultyTag = "ĐỘ KHÓ: CỰC HẠN"; themeColor = "emerald"; glowColor = "rgba(16, 185, 129, 0.35)";
    }

    const title = config.title || "THỬ THÁCH PHẢN XẠ";
    const instructionText = config.description || defaultInstruction;
    const dur = (gameType === 'qte' || gameType === 'debate') ? (config.duration || 3.5) : (config.duration || 6);

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
            <span class="flex items-center gap-2"><span class="w-2 h-2 rounded-full bg-${themeColor}-400 animate-ping"></span>HƯỚNG DẪN THAO TÁC</span>
            <span class="text-[10px] text-slate-400 font-normal">Đọc kỹ trước khi bắt đầu</span>
          </div>
          <p class="text-slate-200 text-sm sm:text-base font-medium leading-relaxed">${instructionText}</p>
        </div>

        <div class="flex items-center justify-between w-full text-xs text-slate-300 mb-6 px-2 font-bold uppercase tracking-wider relative z-10 border-y border-white/10 py-3.5">
          <span>THỜI GIAN: <strong class="text-rose-400 font-black text-sm ml-1">${dur} GIÂY</strong></span>
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
  // BƯỚC 2: GAMEPLAY ĐÃ ĐƯỢC ÉP XUNG GPU
  // ==========================================
  function startActualGameplay(config, onComplete, categoryBadge, themeColor, glowColor) {
    const overlay = document.getElementById('minigame-overlay');
    if (!overlay) return;

    const gameType = config.type || 'taptap';
    const totalDur = (gameType === 'qte' || gameType === 'debate') ? (config.duration || 3.5) : (config.duration || 6);
    let bodyHTML = '';

    if (gameType === 'evidence_scan') {
      bodyHTML = `
        <div class="w-full max-w-xl animate__animated animate__fadeIn">
          <div class="flex justify-between mb-3 text-sm uppercase tracking-widest text-sky-400 font-black">
            <span class="flex items-center gap-1.5"><span class="w-2 h-2 rounded-full bg-sky-400 animate-ping"></span> RADAR QUÉT DỮ LIỆU</span>
            <span id="mg-timer" class="text-white text-xl font-black bg-black/60 px-3.5 py-1 rounded-xl border border-white/10">${totalDur}s</span>
          </div>
          <div class="flex justify-between items-center mb-4 bg-black/50 px-4 py-3 rounded-2xl border border-white/10 text-sm font-bold text-slate-200">
            <span>BẰNG CHỨNG THẬT: <span id="mg-score" class="text-sky-400 font-black text-xl ml-1">0</span>/${config.target || 6}</span>
          </div>
          <div id="mg-evidence-grid" class="grid grid-cols-1 sm:grid-cols-2 gap-3 min-h-[250px] bg-black/40 p-4 rounded-3xl border border-white/10 content-start relative overflow-hidden"></div>
        </div>`;
    }
    else if (gameType === 'firewall') {
      bodyHTML = `
        <div class="w-full max-w-xl animate__animated animate__fadeIn">
          <div class="flex justify-between mb-3 text-sm uppercase tracking-widest text-emerald-400 font-black">
            <span class="flex items-center gap-1.5"><span class="w-2 h-2 rounded-full bg-rose-500 animate-ping"></span> HỆ THỐNG ĐANG BỊ TẤN CÔNG</span>
            <span id="mg-timer" class="text-white text-xl font-black bg-black/60 px-3.5 py-1 rounded-xl border border-white/10">${totalDur}s</span>
          </div>
          <div class="flex justify-between items-center mb-4 bg-black/50 px-4 py-3 rounded-2xl border border-white/10 text-sm font-bold text-slate-200">
            <span>ĐÃ CHẶN SPAM: <span id="mg-score" class="text-emerald-400 font-black text-xl ml-1">0</span>/${config.target || 7}</span>
          </div>
          <div id="mg-firewall-grid" class="grid grid-cols-1 sm:grid-cols-2 gap-3 min-h-[260px] bg-black/40 p-4 rounded-3xl border border-white/10 content-start"></div>
        </div>`;
    }
    else if (gameType === 'cleaner') {
      bodyHTML = `
        <div class="w-full max-w-xl animate__animated animate__fadeIn">
          <div class="flex justify-between mb-3 text-sm uppercase tracking-widest text-sky-400 font-black">
            <span class="flex items-center gap-1.5"><span class="w-2 h-2 rounded-full bg-sky-400 animate-ping"></span> DIỆT TIN ĐỒN SIÊU TỐC</span>
            <span id="mg-timer" class="text-white text-xl font-black bg-black/60 px-3.5 py-1 rounded-xl border border-white/10">${totalDur}s</span>
          </div>
          <div class="flex justify-between items-center mb-4 bg-black/50 px-4 py-3 rounded-2xl border border-white/10 text-sm font-bold text-slate-200">
            <span>ĐÃ XÓA: <span id="mg-score" class="text-sky-400 font-black text-xl ml-1">0</span>/${config.target || 7}</span>
          </div>
          <div id="mg-cleaner-grid" class="grid grid-cols-1 sm:grid-cols-2 gap-3 min-h-[260px] bg-black/40 p-4 rounded-3xl border border-white/10 content-start"></div>
        </div>`;
    }
    else if (gameType === 'timing') {
      bodyHTML = `
        <div class="w-full max-w-md animate__animated animate__fadeIn">
          <div class="flex justify-between mb-3 text-sm uppercase tracking-widest text-amber-400 font-black">
            <span class="flex items-center gap-1.5">CANH CHUẨN THỜI CƠ</span>
            <span id="mg-timer" class="text-white text-xl font-black bg-black/60 px-3.5 py-1 rounded-xl border border-white/10">${totalDur}s</span>
          </div>
          <div class="relative h-14 w-full bg-black/70 rounded-2xl mb-6 border border-white/15 overflow-hidden flex items-center">
            <div class="absolute left-[43%] w-[14%] h-full bg-amber-500/40 border-x-2 border-amber-400 flex items-center justify-center pointer-events-none">
              <span class="text-[10px] font-black text-amber-200 uppercase">GHI</span>
            </div>
            <!-- Cảm biến con trỏ ép xung GPU -->
            <div id="mg-timing-cursor" class="absolute left-0 w-2.5 h-full bg-white shadow-[0_0_20px_#fff] rounded-full pointer-events-none transform-gpu will-change-[left]"></div>
          </div>
          <div class="flex justify-between items-center mb-4 px-2 text-sm font-bold">
            <span class="text-slate-300 uppercase">BẰNG CHỨNG: <span id="mg-score" class="text-amber-400 text-xl font-black ml-1">0</span>/${config.target || 3}</span>
            <span id="mg-timing-feedback" class="text-xs font-black text-amber-400 h-5 uppercase"></span>
          </div>
          <button id="mg-timing-btn" class="w-full py-6 rounded-2xl bg-gradient-to-r from-amber-600 to-amber-500 text-slate-950 font-black text-2xl active:scale-95 transition-transform transform-gpu">BẤM GHI HÌNH</button>
        </div>`;
    }
    else if (gameType === 'hold') {
      bodyHTML = `
        <div class="w-full max-w-md animate__animated animate__fadeIn">
          <div class="flex justify-between mb-3 text-sm uppercase tracking-widest text-indigo-400 font-black">
            <span class="animate-pulse">GIỮ CHẶT KHÔNG BUÔNG</span>
            <span id="mg-timer" class="text-white text-xl font-black bg-black/60 px-3.5 py-1 rounded-xl border border-white/10">${totalDur}s</span>
          </div>
          <div class="h-7 w-full bg-black/60 rounded-full p-1.5 mb-6 border border-white/10 relative overflow-hidden flex items-center justify-center">
            <!-- Thanh tiến trình ép xung GPU (scale-x) -->
            <div id="mg-progress" class="absolute left-0 top-0 h-full w-full bg-gradient-to-r from-indigo-500 to-pink-500 pointer-events-none transform-gpu origin-left scale-x-0 will-change-transform"></div>
            <span id="mg-hold-percent" class="relative z-10 text-sm font-black text-white pointer-events-none">0%</span>
          </div>
          <button id="mg-hold-btn" class="w-full py-10 rounded-3xl bg-gradient-to-r from-indigo-600 to-indigo-500 text-white font-black text-2xl active:scale-95 transition-all transform-gpu flex flex-col items-center select-none touch-none">
            <span class="pointer-events-none">NHẤN & GIỮ CHẶT</span>
          </button>
        </div>`;
    }
    else if (gameType === 'balance') {
      bodyHTML = `
        <div class="w-full max-w-md animate__animated animate__fadeIn">
          <div class="flex justify-between mb-3 text-sm uppercase tracking-widest text-emerald-400 font-black">
            <span class="animate-pulse">GIỮ KIM TRONG VÙNG XANH</span>
            <span id="mg-timer" class="text-white text-xl font-black bg-black/60 px-3.5 py-1 rounded-xl border border-white/10">${totalDur}s</span>
          </div>
          <div class="flex justify-between text-xs font-extrabold uppercase px-1 mb-1.5">
            <span class="text-rose-400">🚨 BẠO LỰC (ĐỎ)</span>
            <span class="text-emerald-400">LÝ TRÍ (XANH) 🛡️</span>
          </div>
          <div class="relative h-14 w-full bg-black/70 rounded-2xl mb-6 border border-white/15 overflow-hidden">
            <div class="absolute left-0 w-[35%] h-full bg-rose-600/30 border-r-2 border-rose-500/60 pointer-events-none"></div>
            <div class="absolute right-0 w-[65%] h-full bg-emerald-600/20 pointer-events-none"></div>
            <!-- Kim chỉ thị ép xung GPU -->
            <div id="mg-balance-needle" class="absolute left-[50%] w-4 h-full bg-white shadow-[0_0_25px_#fff] rounded-full -translate-x-1/2 border-2 border-slate-900 pointer-events-none z-10 transform-gpu will-change-[left]"></div>
          </div>
          <button id="mg-balance-btn" class="w-full py-12 rounded-3xl bg-gradient-to-r from-emerald-600 to-teal-500 text-white font-black text-3xl active:scale-95 transition-transform transform-gpu flex flex-col items-center select-none cursor-pointer">LÁI VỀ LÝ TRÍ</button>
        </div>`;
    }
    else if (gameType === 'qte' || gameType === 'debate') {
      const options = shuffleArray(config.qteOptions || []);
      let btnsHTML = options.map((opt) => `
        <button data-correct="${opt.correct}" class="qte-option-btn relative w-full py-5 px-6 rounded-2xl bg-slate-900 border border-white/10 text-slate-100 active:scale-[0.98] text-left flex items-center justify-between font-extrabold text-lg transform-gpu transition-all">
          <span class="pointer-events-none">${opt.text}</span>
        </button>
      `).join('');
      bodyHTML = `
        <div class="w-full max-w-md animate__animated animate__fadeIn">
          <div class="flex justify-between mb-3 text-sm uppercase tracking-widest text-rose-400 font-black">
            <span class="animate-bounce">CHỌN TRONG TÍCH TẮC</span>
            <span id="mg-timer" class="text-white text-2xl font-black bg-rose-600/90 px-4 py-1 rounded-xl animate-pulse">${totalDur}s</span>
          </div>
          <div class="flex flex-col gap-3.5 mt-6">${btnsHTML}</div>
        </div>`;
    }
    else if (gameType === 'taptap') {
      bodyHTML = `
        <div class="w-full max-w-md animate__animated animate__fadeIn">
          <div class="flex justify-between mb-3 text-sm uppercase tracking-widest text-emerald-400 font-black">
            <span class="animate-pulse">BẤM LIÊN TỤC KHÔNG DỪNG</span>
            <span id="mg-timer" class="text-white text-xl font-black bg-black/60 px-3.5 py-1 rounded-xl">${totalDur}s</span>
          </div>
          <div class="h-5 w-full bg-black/60 rounded-full p-1 mb-6 overflow-hidden relative">
            <div id="mg-progress" class="absolute left-0 top-0 h-full w-full bg-gradient-to-r from-emerald-500 to-yellow-400 transform-gpu origin-left scale-x-0 will-change-transform"></div>
          </div>
          <button id="mg-action-btn" class="w-full py-12 rounded-3xl bg-gradient-to-r from-emerald-600 to-teal-500 text-white font-black text-3xl active:scale-95 transition-transform transform-gpu flex flex-col items-center">BẤM ĐỂ CHẠY</button>
        </div>`;
    }
    else if (gameType === 'stealth') {
      bodyHTML = `
        <div class="w-full max-w-md animate__animated animate__fadeIn">
          <div class="flex justify-between mb-3 text-sm uppercase tracking-widest text-amber-400 font-black">
            <span id="mg-stealth-status">ĐANG AN TOÀN</span>
            <span id="mg-timer" class="text-white text-xl font-black bg-black/60 px-3.5 py-1 rounded-xl">${totalDur}s</span>
          </div>
          <div class="h-6 w-full bg-black/60 rounded-full p-1.5 mb-6 relative overflow-hidden flex justify-center items-center">
            <div id="mg-progress" class="absolute left-0 top-0 h-full w-full bg-gradient-to-r from-amber-500 to-yellow-400 transform-gpu origin-left scale-x-0 will-change-transform"></div>
            <span id="mg-stealth-percent" class="relative z-10 text-xs font-black text-white">0%</span>
          </div>
          <div id="mg-stealth-box" class="w-full p-6 rounded-2xl bg-slate-950/80 border-2 border-emerald-500/50 mb-6 flex flex-col items-center justify-center min-h-[120px]">
            <span id="mg-stealth-icon" class="text-3xl font-black text-emerald-400">[ HƯỚNG KHÁC ]</span>
          </div>
          <button id="mg-stealth-btn" class="w-full py-8 rounded-2xl bg-gradient-to-r from-amber-600 to-orange-600 text-white font-black text-2xl select-none touch-none active:scale-95 transform-gpu flex flex-col items-center">GIỮ ĐỂ QUAY LÉN</button>
        </div>`;
    }
    else if (gameType === 'shield') {
      bodyHTML = `
        <div class="w-full max-w-lg animate__animated animate__fadeIn">
          <div class="flex justify-between mb-3 text-sm uppercase text-sky-400 font-black">
            <span>CHẮN ĐÒN BẢO VỆ</span>
            <span id="mg-timer" class="text-white text-xl bg-black/60 px-3.5 py-1 rounded-xl">${totalDur}s</span>
          </div>
          <div class="grid grid-cols-3 gap-3 min-h-[220px]">
            <button id="shield-0" class="shield-col w-full h-full rounded-2xl bg-black/40 border-2 border-white/10 flex flex-col items-center justify-center p-4 active:scale-95 cursor-pointer transform-gpu"><div class="shield-indicator w-12 h-12 rounded-full bg-slate-800 text-slate-500 flex items-center justify-center font-black">[ ]</div></button>
            <button id="shield-1" class="shield-col w-full h-full rounded-2xl bg-black/40 border-2 border-white/10 flex flex-col items-center justify-center p-4 active:scale-95 cursor-pointer transform-gpu"><div class="shield-indicator w-12 h-12 rounded-full bg-slate-800 text-slate-500 flex items-center justify-center font-black">[ ]</div></button>
            <button id="shield-2" class="shield-col w-full h-full rounded-2xl bg-black/40 border-2 border-white/10 flex flex-col items-center justify-center p-4 active:scale-95 cursor-pointer transform-gpu"><div class="shield-indicator w-12 h-12 rounded-full bg-slate-800 text-slate-500 flex items-center justify-center font-black">[ ]</div></button>
          </div>
        </div>`;
    }

    overlay.innerHTML = `<div class="relative w-full max-w-xl bg-slate-900/80 backdrop-blur-2xl border border-white/15 rounded-[32px] p-6 sm:p-8 shadow-[0_25px_70px_rgba(0,0,0,0.9)] flex flex-col items-center text-center text-white z-10">${bodyHTML}</div>`;

    activeMinigame = { config, onComplete };
    minigameState = { 
      elapsed: 0, score: 0, completed: false, isHolding: false, 
      timingPos: 0, timingDir: 1, isAlert: false, balancePos: 50,
      lastAlertTime: 0, lastShieldTime: 0, lastBeepSec: 99
    };

    const timerEl = document.getElementById('mg-timer');

    // ----------------------------------------------------
    // CƠ CHẾ ANIMATION LOOP (THAY THẾ INTERVAL BẰNG REQUEST_ANIMATION_FRAME)
    // ----------------------------------------------------
    function gameLoop(currentTime) {
      if (!minigameState || minigameState.completed) return;
      if (!lastFrameTime) lastFrameTime = currentTime;
      const dt = (currentTime - lastFrameTime) / 1000; // DeltaTime tính bằng Giây
      lastFrameTime = currentTime;

      minigameState.elapsed += dt;
      const remaining = Math.max(0, totalDur - minigameState.elapsed);
      
      // Update Timer Text
      if (timerEl) {
          const sec = Math.ceil(remaining);
          if (timerEl.textContent !== `${sec}s`) timerEl.textContent = `${sec}s`;
          if (remaining <= 3 && sec < minigameState.lastBeepSec) {
              minigameState.lastBeepSec = sec; playSoundSafe('sfx_beep');
          }
      }

      // Xử lý Logic từng Game sử dụng GPU
      if (gameType === 'balance') {
        minigameState.balancePos = Math.max(0, minigameState.balancePos - (14.0 * dt)); // Tụt kim chuẩn xác theo khung hình
        const needle = document.getElementById('mg-balance-needle');
        if (needle) {
          needle.style.left = `${minigameState.balancePos}%`;
          if (minigameState.balancePos < 35) needle.style.backgroundColor = '#f43f5e';
          else needle.style.backgroundColor = '#fff';
        }
        if (minigameState.balancePos <= 1) { minigameState.completed = true; finishGame(false); return; }
      }

      if (gameType === 'stealth') {
        if (minigameState.elapsed - minigameState.lastAlertTime > 1.8 && minigameState.elapsed > 0.5) {
          minigameState.lastAlertTime = minigameState.elapsed;
          minigameState.isAlert = !minigameState.isAlert;
          const box = document.getElementById('mg-stealth-box'); const icon = document.getElementById('mg-stealth-icon');
          if (minigameState.isAlert) {
            playSoundSafe('sfx_beep');
            if(box) box.style.borderColor = '#f43f5e'; if(icon) { icon.textContent = "HUNG THỦ QUAY LẠI"; icon.style.color = '#f43f5e'; }
          } else {
            if(box) box.style.borderColor = '#10b981'; if(icon) { icon.textContent = "[ HƯỚNG KHÁC ]"; icon.style.color = '#10b981'; }
          }
        }
        if (minigameState.isHolding) {
          if (minigameState.isAlert) { playSoundSafe('sfx_glitch'); minigameState.score = Math.max(0, minigameState.score - (80.0 * dt)); }
          else minigameState.score = Math.min(100, minigameState.score + (45.0 * dt));
        }
        const prog = document.getElementById('mg-progress'); const perc = document.getElementById('mg-stealth-percent');
        if (prog) prog.style.transform = `scaleX(${minigameState.score / 100})`; // Hardware Acceleration
        if (perc) perc.textContent = `${Math.floor(minigameState.score)}%`;
        if (minigameState.score >= 100) { minigameState.completed = true; finishGame(true); return; }
      }

      if (gameType === 'shield') {
        if (minigameState.elapsed - minigameState.lastShieldTime > 0.8 && minigameState.elapsed > 0.1) {
          minigameState.lastShieldTime = minigameState.elapsed;
          const randCol = Math.floor(Math.random() * 3);
          for (let i = 0; i < 3; i++) {
            const col = document.getElementById(`shield-${i}`); if (!col) continue;
            if (i === randCol) {
              col.setAttribute('data-active', 'true'); col.style.borderColor = '#f43f5e'; 
              col.querySelector('.shield-indicator').style.backgroundColor = '#f43f5e'; col.querySelector('.shield-indicator').textContent = "CHẶN";
            } else {
              col.setAttribute('data-active', 'false'); col.style.borderColor = 'rgba(255,255,255,0.1)';
              col.querySelector('.shield-indicator').style.backgroundColor = '#1e293b'; col.querySelector('.shield-indicator').textContent = "[ ]";
            }
          }
        }
      }

      if (gameType === 'taptap' && minigameState.score > 0) {
        minigameState.score = Math.max(0, minigameState.score - (2.0 * dt));
        const prog = document.getElementById('mg-progress');
        if (prog) prog.style.transform = `scaleX(${Math.min(1, minigameState.score / (config.target || 30))})`; // Hardware Acceleration
      }

      if (gameType === 'hold') {
        if (minigameState.isHolding) minigameState.score = Math.min(100, minigameState.score + (30.0 * dt));
        else minigameState.score = Math.max(0, minigameState.score - (55.0 * dt));
        const prog = document.getElementById('mg-progress'); const perc = document.getElementById('mg-hold-percent');
        if (prog) prog.style.transform = `scaleX(${minigameState.score / 100})`; // Hardware Acceleration
        if (perc) perc.textContent = `${Math.floor(minigameState.score)}%`;
        if (minigameState.score >= 100) { minigameState.completed = true; finishGame(true); return; }
      }

      if (gameType === 'timing') {
        minigameState.timingPos += (minigameState.timingDir * 70.0 * dt);
        if (minigameState.timingPos >= 95) minigameState.timingDir = -1;
        if (minigameState.timingPos <= 0) minigameState.timingDir = 1;
        const cursor = document.getElementById('mg-timing-cursor');
        if (cursor) cursor.style.left = `${minigameState.timingPos}%`;
      }

      // Hết giờ
      if (remaining <= 0 && !minigameState.completed) {
        minigameState.completed = true;
        let isSuccess = false;
        if (['taptap', 'cleaner', 'timing', 'shield', 'evidence_scan', 'firewall'].includes(gameType)) isSuccess = minigameState.score >= (config.target || 6);
        else if (gameType === 'balance') isSuccess = minigameState.balancePos >= 35;
        finishGame(isSuccess); return;
      }

      rAF_ID = requestAnimationFrame(gameLoop);
    }
    
    lastFrameTime = performance.now();
    rAF_ID = requestAnimationFrame(gameLoop);

    // ----------------------------------------------------
    // SPAWNER (Vẫn giữ setInterval nhưng an toàn hơn)
    // ----------------------------------------------------
    if (gameType === 'evidence_scan' || gameType === 'firewall' || gameType === 'cleaner') {
      const gridID = gameType === 'evidence_scan' ? 'mg-evidence-grid' : (gameType === 'firewall' ? 'mg-firewall-grid' : 'mg-cleaner-grid');
      const grid = document.getElementById(gridID); const scoreEl = document.getElementById('mg-score'); const target = config.target || 6;
      
      addSafeInterval(() => {
        if (!minigameState || minigameState.completed || !grid || grid.children.length >= 4) return;
        const btn = document.createElement('button');
        const isBad = Math.random() > 0.4; // Tỷ lệ rơi rác
        
        btn.className = `animate__animated animate__zoomIn p-4 rounded-2xl border-2 flex items-center justify-between cursor-pointer transform-gpu ${isBad ? 'bg-rose-950 border-rose-500' : 'bg-sky-950 border-sky-400'}`;
        btn.innerHTML = `<span class="text-white font-bold pointer-events-none text-xs">${isBad ? '⚠️ CẢNH BÁO' : '✔️ DỮ LIỆU'}</span>`;
        
        bindInstantTouch(btn, () => {
          if (btn.getAttribute('data-clicked')) return;
          btn.setAttribute('data-clicked', 'true');
          
          if ((gameType === 'evidence_scan' && !isBad) || (gameType === 'firewall' && isBad) || gameType === 'cleaner') {
            playSoundSafe('button'); minigameState.score++; if (scoreEl) scoreEl.textContent = minigameState.score;
            btn.style.opacity = 0; setTimeout(() => btn.remove(), 100);
            if (minigameState.score >= target) { minigameState.completed = true; finishGame(true); }
          } else {
            playSoundSafe('fail'); minigameState.score = Math.max(0, minigameState.score - 1); if (scoreEl) scoreEl.textContent = minigameState.score;
            btn.style.backgroundColor = '#f43f5e'; setTimeout(() => btn.remove(), 200);
          }
        });
        grid.appendChild(btn);
        setTimeout(() => { if (btn.parentNode === grid) btn.remove(); }, 1200);
      }, 400);
    }

    // ----------------------------------------------------
    // SỰ KIỆN TƯƠNG TÁC (Đã gỡ lỗi rò rỉ bộ nhớ)
    // ----------------------------------------------------
    if (gameType === 'balance') {
      const btn = document.getElementById('mg-balance-btn');
      if (btn) bindInstantTouch(btn, () => { playSoundSafe('button'); minigameState.balancePos = Math.min(95, minigameState.balancePos + 8); });
    }
    else if (gameType === 'stealth' || gameType === 'hold') {
      const btn = document.getElementById(gameType === 'stealth' ? 'mg-stealth-btn' : 'mg-hold-btn');
      if (btn) {
        const startHold = (e) => { if (!minigameState || minigameState.completed) return; if (e.cancelable) e.preventDefault(); minigameState.isHolding = true; btn.style.transform = 'scale(0.95)'; };
        const endHold = (e) => { if (!minigameState) return; if (e.cancelable) e.preventDefault(); minigameState.isHolding = false; btn.style.transform = 'scale(1)'; };
        
        btn.addEventListener('mousedown', startHold);
        btn.addEventListener('touchstart', startHold, { passive: false });
        
        // Quản lý chặt Listener của Window để chống leak memory
        addSafeWindowListener('mouseup', endHold);
        addSafeWindowListener('touchend', endHold, { passive: false });
        addSafeWindowListener('touchcancel', endHold, { passive: false });
      }
    }
    else if (gameType === 'shield') {
      const scoreEl = document.getElementById('mg-score'); const target = config.target || 6;
      for (let i = 0; i < 3; i++) {
        const col = document.getElementById(`shield-${i}`);
        if (col) bindInstantTouch(col, () => {
          if (col.getAttribute('data-active') === 'true') {
            playSoundSafe('button'); minigameState.score++; if (scoreEl) scoreEl.textContent = minigameState.score;
            col.setAttribute('data-active', 'false'); col.style.borderColor = 'rgba(255,255,255,0.1)'; col.querySelector('.shield-indicator').style.backgroundColor = '#10b981';
            if (minigameState.score >= target) { minigameState.completed = true; finishGame(true); }
          } else playSoundSafe('sfx_glitch');
        });
      }
    }
    else if (gameType === 'taptap') {
      const btn = document.getElementById('mg-action-btn');
      if (btn) bindInstantTouch(btn, () => {
        playSoundSafe('button'); minigameState.score += 1.4;
        const target = config.target || 30;
        const prog = document.getElementById('mg-progress');
        if (prog) prog.style.transform = `scaleX(${Math.min(1, minigameState.score / target)})`;
        if (minigameState.score >= target) { minigameState.completed = true; finishGame(true); }
      });
    }
    else if (gameType === 'timing') {
      const btn = document.getElementById('mg-timing-btn'); const scoreEl = document.getElementById('mg-score'); const target = config.target || 3;
      if (btn) bindInstantTouch(btn, () => {
        playSoundSafe('button');
        if (minigameState.timingPos >= 41 && minigameState.timingPos <= 59) {
          minigameState.score++; if (scoreEl) scoreEl.textContent = minigameState.score;
          if (minigameState.score >= target) { minigameState.completed = true; finishGame(true); }
        }
      });
    }
    else if (gameType === 'debate' || gameType === 'qte') {
      const btns = overlay.querySelectorAll('.qte-option-btn');
      btns.forEach(btn => {
        bindInstantTouch(btn, () => {
          playSoundSafe('button'); minigameState.completed = true;
          const isCorrect = btn.getAttribute('data-correct') === 'true';
          btn.style.borderColor = isCorrect ? '#10b981' : '#f43f5e';
          btns.forEach(b => b.style.pointerEvents = 'none'); finishGame(isCorrect);
        });
      });
    }

    function finishGame(isSuccess) {
      cleanUpEngine();
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
  }

  window.MinigameEngine = { showMinigame, closeMinigame };
})();