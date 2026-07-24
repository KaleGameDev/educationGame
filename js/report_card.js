// =================================================================
// TRỤ CỘT 3: BẢNG HỒ SƠ TÂM LÝ CUỐI GAME (V13.6 FIX SCREENSHOT BUG)
// Trừ điểm động 5%/lần | Auto-load CDN | Khắc phục lỗi chọn nhầm Hào Quang
// =================================================================

(function() {
    const REPORT_DATA = {
        mai: {
            name: "NHÂN VẬT: MAI", title: "★ KHỐI PHA LÊ KIÊN CƯỜNG", sub: "Người vượt qua bóng tối học đường",
            avatar: "assets/characters/Char_1_Happy.webp", themeColor: "emerald", glowColor: "rgba(16, 185, 129, 0.25)", badgeBg: "from-emerald-600 to-teal-600",
            stats: [95, 85, 90, 90, 80], logicScore: 90, defenseScore: 95,
            note: "Mai là minh chứng cho việc nạn nhân bạo lực không hề yếu đuối. Khi biết cách dùng sự thật, pháp luật và sự hỗ trợ từ gia đình, bạn đã biến tổn thương thành áo giáp kiên cường nhất."
        },
        minh: {
            name: "NHÂN VẬT: MINH", title: "★ BẢN LĨNH LÝ TRÍ THÉP", sub: "Chiến binh phá vỡ định kiến nam tính",
            avatar: "assets/characters/Char_4_Happy.webp", themeColor: "indigo", glowColor: "rgba(99, 102, 241, 0.25)", badgeBg: "from-indigo-600 to-purple-600",
            stats: [80, 95, 95, 95, 85], logicScore: 95, defenseScore: 95,
            note: "Minh đã vượt qua cái bẫy 'nam tính độc hại' để chứng minh: Sức mạnh thực sự của người đàn ông không nằm ở nắm đấm hay sự trả thù, mà nằm ở cái đầu lạnh và tư duy thượng tôn pháp luật."
        },
        linh: {
            name: "NHÂN VẬT: LINH", title: "★ NGỌN LỬA CHÍNH TRỰC", sub: "Nữ thần công lý không gian mạng",
            avatar: "assets/characters/Char_2_Happy.webp", themeColor: "sky", glowColor: "rgba(14, 165, 233, 0.25)", badgeBg: "from-sky-600 to-blue-600",
            stats: [90, 90, 85, 95, 95], logicScore: 95, defenseScore: 90,
            note: "Linh đại diện cho mẫu người chứng kiến chủ động tuyệt vời. Sự thông minh, công nghệ và lòng trượng nghĩa của bạn đã đập tan các tin đồn vô căn cứ, xây dựng nên một môi trường học đường hạnh phúc."
        },
        nam: {
            name: "NHÂN VẬT: NAM", title: "★ TẤM KHIÊN BẢO VỆ", sub: "Người đồng hành trượng nghĩa",
            avatar: "assets/characters/Char_3_Happy.webp", themeColor: "amber", glowColor: "rgba(245, 158, 11, 0.25)", badgeBg: "from-amber-600 to-orange-600",
            stats: [85, 90, 90, 95, 90], logicScore: 95, defenseScore: 90,
            note: "Nam đã không chọn sự im lặng an toàn để làm tòng phạm. Bạn dùng trí tuệ, bản lĩnh và sự nhạy bén để bảo vệ người yếu thế, là chỗ dựa đáng tin cậy nhất của bạn bè."
        }
    };

    function renderSvgRadar(svgEl, stats, themeColorHex = "#10b981") {
        if (!svgEl) return;
        svgEl.innerHTML = '';
        const cx = 100, cy = 100, radius = 70;
        const labels = ["Thấu Cảm", "Quyết Đoán", "Tự Vệ", "Lý Trí", "Lãnh Đạo"];
        const angles = [-90, -18, 54, 126, -162].map(deg => (deg * Math.PI) / 180);

        [0.33, 0.66, 1.0].forEach(scale => {
            const pts = angles.map(a => `${cx + radius * scale * Math.cos(a)},${cy + radius * scale * Math.sin(a)}`).join(' ');
            const polygon = document.createElementNS("http://www.w3.org/2000/svg", "polygon");
            polygon.setAttribute("points", pts); polygon.setAttribute("fill", "none");
            polygon.setAttribute("stroke", "rgba(255, 255, 255, 0.15)"); polygon.setAttribute("stroke-width", "1");
            svgEl.appendChild(polygon);
        });

        angles.forEach((a, i) => {
            const x2 = cx + radius * Math.cos(a); const y2 = cy + radius * Math.sin(a);
            const line = document.createElementNS("http://www.w3.org/2000/svg", "line");
            line.setAttribute("x1", cx); line.setAttribute("y1", cy); line.setAttribute("x2", x2); line.setAttribute("y2", y2);
            line.setAttribute("stroke", "rgba(255, 255, 255, 0.15)"); line.setAttribute("stroke-width", "1");
            svgEl.appendChild(line);

            const lx = cx + (radius + 22) * Math.cos(a); const ly = cy + (radius + 16) * Math.sin(a) + 4; 
            const text = document.createElementNS("http://www.w3.org/2000/svg", "text");
            text.setAttribute("x", lx); text.setAttribute("y", ly); text.setAttribute("fill", "#cbd5e1");
            text.setAttribute("font-size", "10"); text.setAttribute("font-weight", "900"); text.setAttribute("text-anchor", "middle");
            text.textContent = labels[i]; svgEl.appendChild(text);
        });

        const dataPoints = stats.map((val, i) => {
            const r = radius * (Math.max(20, val) / 100);
            return [cx + r * Math.cos(angles[i]), cy + r * Math.sin(angles[i])];
        });

        const dataString = dataPoints.map(pt => `${pt[0]},${pt[1]}`).join(' ');
        const dataPoly = document.createElementNS("http://www.w3.org/2000/svg", "polygon");
        dataPoly.setAttribute("points", dataString); dataPoly.setAttribute("fill", themeColorHex);
        dataPoly.setAttribute("fill-opacity", "0.4"); dataPoly.setAttribute("stroke", themeColorHex); dataPoly.setAttribute("stroke-width", "2.5");
        svgEl.appendChild(dataPoly);

        dataPoints.forEach(([px, py]) => {
            const circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
            circle.setAttribute("cx", px); circle.setAttribute("cy", py); circle.setAttribute("r", "3.5");
            circle.setAttribute("fill", "#ffffff"); circle.setAttribute("stroke", themeColorHex); circle.setAttribute("stroke-width", "2");
            circle.setAttribute("class", "radar-point"); svgEl.appendChild(circle);
        });
    }

    function showReportCard(roleKey, onRestartRole, onGoToMenu) {
        const overlay = document.getElementById('report-card-overlay');
        if (!overlay) return;

        const data = REPORT_DATA[roleKey] || REPORT_DATA.mai;
        if (window.GameAudio && window.GameAudio.startBGM) {
            window.GameAudio.startBGM('bgm_victory'); window.GameAudio.playSound('complete');
        }

        // CÔNG THỨC TRỪ ĐIỂM ĐỘNG: Mỗi lần chọn sai thử lại trừ 5% Lý trí, 4% Tự vệ (Sàn 50%)
        const stats = window.GameStats || { redoCount: 0, minigameWins: 6, minigameTotal: 6 };
        const logicDrop = stats.redoCount * 5;
        const defenseDrop = stats.redoCount * 4;
        
        const finalLogic = Math.max(50, data.logicScore - logicDrop);
        const finalDefense = Math.max(50, data.defenseScore - defenseDrop);
        
        const dynamicStats = [...data.stats];
        dynamicStats[2] = finalDefense; 
        dynamicStats[3] = finalLogic;   

        document.getElementById('rc-char-name').textContent = data.name;
        document.getElementById('rc-sub-title').textContent = data.sub;
        document.getElementById('rc-stat-logic').textContent = `${finalLogic}%`;
        document.getElementById('rc-stat-defense').textContent = `${finalDefense}%`;
        
        const totalGames = stats.minigameTotal > 0 ? stats.minigameTotal : 6;
        const wonGames = stats.minigameTotal > 0 ? stats.minigameWins : 6;
        document.getElementById('rc-stat-games').textContent = `${wonGames}/${totalGames} ★`;

        document.getElementById('rc-psych-note').textContent = `"${data.note}"`;

        const avatarEl = document.getElementById('rc-avatar-img');
        if (avatarEl) {
            avatarEl.onerror = function() { this.onerror = null; this.src = `assets/characters/Char_${roleKey === 'mai'?1:roleKey==='linh'?2:roleKey==='nam'?3:4}.webp`; };
            avatarEl.src = data.avatar;
        }

        const badgeEl = document.getElementById('rc-archetype-badge');
        if (badgeEl) {
            badgeEl.className = `mt-2 px-4 py-1.5 rounded-2xl bg-gradient-to-r ${data.badgeBg} text-white font-black text-sm sm:text-base tracking-wide shadow-lg uppercase`;
            badgeEl.textContent = data.title;
        }
        const bgGlow = document.getElementById('rc-bg-glow');
        if (bgGlow) bgGlow.style.backgroundColor = data.glowColor;

        const hexMap = { emerald: "#10b981", indigo: "#6366f1", sky: "#0ea5e9", amber: "#f59e0b" };
        renderSvgRadar(document.getElementById('rc-radar-svg'), dynamicStats, hexMap[data.themeColor] || "#10b981");

        const btnRestart = document.getElementById('rc-btn-restart-role');
        if (btnRestart) btnRestart.onclick = () => { if (window.GameAudio) window.GameAudio.playSound('button'); closeReportCard(); if (onRestartRole) onRestartRole(); };

        const btnMenu = document.getElementById('rc-btn-menu');
        if (btnMenu) btnMenu.onclick = () => { if (window.GameAudio) window.GameAudio.playSound('button'); closeReportCard(); if (onGoToMenu) onGoToMenu(); };

        const btnShot = document.getElementById('rc-btn-screenshot');
        if (btnShot) btnShot.onclick = () => { if (window.GameAudio) window.GameAudio.playSound('button'); takeRealScreenshot(roleKey, data.name); };

        overlay.classList.remove('hidden'); overlay.classList.add('flex');
        void overlay.offsetWidth;
        overlay.classList.remove('opacity-0'); overlay.classList.add('opacity-100');
    }

    // 👉 ĐỘNG CƠ CHỤP ẢNH AUTO-LOAD CDN: Khắc phục lỗi nhầm thẻ Hào Quang
    function takeRealScreenshot(roleKey, charName) {
        showToast("⏳ Đang xuất ảnh Hộ Chiếu độ nét cao (Retina)...");
        
        if (typeof html2canvas === 'undefined') {
            const script = document.createElement('script');
            script.src = "https://cdnjs.cloudflare.com/ajax/libs/html2canvas/1.4.1/html2canvas.min.js";
            script.onload = () => executeScreenshot(roleKey, charName);
            script.onerror = () => showToast("⚠ Lỗi mạng: Không thể tải công cụ xuất ảnh!");
            document.head.appendChild(script);
        } else {
            executeScreenshot(roleKey, charName);
        }
    }

    function executeScreenshot(roleKey, charName) {
        // 👉 ĐÃ FIX: Lọc chính xác thẻ div Hồ Sơ, bỏ qua thẻ #rc-bg-glow gây lỗi viên nhộng xanh!
        const cardElement = document.querySelector('#report-card-overlay > div:not(#rc-bg-glow)');
        if (!cardElement) {
            showToast("⚠ Lỗi: Không tìm thấy khung Hộ Chiếu!");
            return;
        }

        // Ẩn 3 nút bấm bằng display:none để ảnh xuất ra thu gọn phần đáy cực kỳ thẩm mỹ
        const footerBtns = cardElement.querySelector('.flex.flex-col.sm\\:flex-row');
        const oldDisplay = footerBtns ? footerBtns.style.display : '';
        if (footerBtns) footerBtns.style.display = 'none';

        html2canvas(cardElement, {
            scale: window.devicePixelRatio || 2, // Chuẩn Retina gấp đôi độ nét
            backgroundColor: "#0f172a",          // Lót màu nền tối Slate-900 cực sang
            useCORS: true,
            allowTaint: true,
            logging: false
        }).then(canvas => {
            if (footerBtns) footerBtns.style.display = oldDisplay;
            
            const imageURI = canvas.toDataURL("image/png");
            const cleanName = charName.replace(/[^a-zA-Z0-9]/g, '_').toLowerCase();
            const fileName = `Ho_So_Tam_Ly_${cleanName}_Goc_Khuat.png`;

            // Hỗ trợ tối đa cho trình duyệt iOS Safari & Android Chrome
            const link = document.createElement("a");
            link.download = fileName;
            link.href = imageURI;
            document.body.appendChild(link);
            
            try {
                link.click();
                showToast("★ Đã tải ảnh Hộ Chiếu PNG sắc nét về máy!");
            } catch (e) {
                window.open(imageURI, '_blank');
                showToast("★ Hãy nhấn giữ vào ảnh để lưu vào thư viện nhé!");
            }
            document.body.removeChild(link);
        }).catch(err => {
            if (footerBtns) footerBtns.style.display = oldDisplay;
            showToast("⚠ Lỗi bảo mật trình duyệt: Hãy cho phép quyền tải xuống!");
        });
    }

    function closeReportCard() {
        const overlay = document.getElementById('report-card-overlay');
        if (!overlay) return;
        overlay.classList.remove('opacity-100'); overlay.classList.add('opacity-0');
        setTimeout(() => { overlay.classList.add('hidden'); overlay.classList.remove('flex'); }, 400);
    }

    function showToast(message) {
        const oldToast = document.querySelector('.rc-toast');
        if (oldToast) oldToast.remove();
        
        const toast = document.createElement('div');
        toast.className = "rc-toast bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-black text-xs sm:text-sm px-5 py-3 rounded-2xl shadow-[0_10px_25px_rgba(0,0,0,0.8)] border border-emerald-300/40 flex items-center gap-2 transform-gpu";
        toast.innerHTML = `<span>★</span><span>${message}</span>`;
        document.body.appendChild(toast);
        setTimeout(() => toast.remove(), 3500);
    }

    window.ReportCardEngine = { showReportCard, closeReportCard };
})();