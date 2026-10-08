// ==========================================
// TUYẾN 3: LINH - NỮ CHỨNG KIẾN (CẤU TRÚC 7 MÀN ĐA TẦNG - 6 MINI-GAMES ĐỘC QUYỀN)
// Tối ưu 60 FPS | Phối hợp toàn diện 5 Biểu cảm (Normal, Happy, Cry, Angry, Think)
// ==========================================
const DATA_LINH = {
    // ------------------------------------------
    // MÀN 1: BẤT ĐỒNG TRONG NHÓM BẠN THÂN
    // ------------------------------------------
    "linh_man_1": {
        charName: "LINH (Cảnh 1: Luật Ngầm Của Nhóm)",
        charColor: "text-sky-400",
        charSprite: "assets/characters/Char_2.webp",
        charEmotion: "worried",
        bgTheme: "border-sky-500/30 bg-slate-900/95",
        story: "Linh đang chơi trong hội 'chị em' gồm 4 người. Thư (trưởng nhóm) đang rất ghét một bạn nữ khác tên Trà. Thư tuyên bố trong nhóm chat: 'Từ mai cấm đứa nào chơi với con Trà, block hết nó cho tao. Đứa nào trái lệnh thì xác định ra chuồng gà'.",
        choices: [
            { text: "👉 Khuyên can: 'Mình không nên làm thế, các cậu dừng lại đi, bắt nạt là xấu'.", nextScene: "linh_1_sai_a" },
            { text: "👉 Chửi thẳng mặt: 'Mày bị ảo quyền lực à? Thích thì đi mà ghét một mình' rồi tự out group.", nextScene: "linh_1_sai_b" },
            { text: "👉 Im lặng, không seen, giả vờ off mạng đi ngủ để né tránh phản hồi lúc dầu sôi lửa bỏng.", nextScene: "linh_1_1" }
        ]
    },
    "linh_1_sai_a": {
        charName: "LINH (Cảnh 1: Thất bại)",
        charColor: "text-amber-400",
        charSprite: "assets/characters/Char_2.webp",
        charEmotion: "cry",
        bgTheme: "border-amber-500/50 bg-slate-900/95",
        isResult: true,
        resultTitle: "THẤT BẠI - BÀI GIẢNG ĐẠO ĐỨC SAI LÚC",
        resultColor: "text-amber-400",
        illustration: "assets/scenes/Char_2_Scene_11.webp",
        story: "Nói đạo lý với kẻ đang hăng máu thao túng là vô nghĩa. Thư cười khẩy cap màn hình lời khuyên của Linh gửi cho cả lớp: 'Nữ thần đạo đức xuất hiện nè tụi bay'. Linh lập tức trở thành mục tiêu bị tẩy chay cùng với Trà.",
        choices: [{ text: "↺ Cẩn thận hơn và thử lại", nextScene: "linh_man_1", isUndo: true }]
    },
    "linh_1_sai_b": {
        charName: "LINH (Cảnh 1: Thất bại)",
        charColor: "text-rose-500",
        charSprite: "assets/characters/Char_2.webp",
        charEmotion: "angry", // 👉 Phẫn nộ chửi rủa làm bùng nổ xung đột
        bgTheme: "border-rose-500/80 bg-rose-950/90 animate__shakeX",
        isResult: true,
        resultTitle: "THẤT BẠI - KÍCH HOẠT QUẢ BƠM",
        resultColor: "text-rose-500",
        illustration: "assets/scenes/Char_2_Scene_5.webp",
        story: "Thái độ gay gắt biến Linh thành 'kẻ phản bội' trong mắt nhóm bạn. Hôm sau, Thư dẫn đám đông vây Linh ở canteen để gây sự. Xung đột bùng nổ thành bạo lực không đáng có.",
        choices: [{ text: "↺ Rút kinh nghiệm và thử lại", nextScene: "linh_man_1", isUndo: true }]
    },

    "linh_1_1": {
        charName: "LINH (Cảnh 1.1: Lời Kêu Cứu Trong Đêm)",
        charColor: "text-sky-400",
        charSprite: "assets/characters/Char_2.webp",
        charEmotion: "think", // 👉 Cân nhắc giải pháp kín đáo để cứu bạn
        bgTheme: "border-sky-500/30 bg-slate-900/95",
        story: "Sự im lặng giúp Linh tạm thoát tầm ngắm của Thư. Nhưng nửa đêm, Trà nhắn tin riêng cho Linh, giọng điệu rất suy sụp: 'Linh ơi, cậu cũng ghét mình và hùa theo Thư hả? Mình mệt mỏi quá, mình không muốn đi học nữa...'.",
        choices: [
            { text: "👉 Sợ Thư kiểm tra điện thoại nên Seen không rep, chặn luôn Trà cho an toàn.", nextScene: "linh_1_1_sai_a" },
            { text: "👉 Rep lại: 'Không, nhưng Thư bắt thế, cậu chịu khó né Thư ra nhé, mình không làm gì được đâu'.", nextScene: "linh_1_1_sai_b" },
            { text: "👉 Bật chế độ tin nhắn tự xóa, rep: 'Tớ không ghét cậu. Thư đang làm trò hề. Mai ra quán cafe góc trường mình nói chuyện riêng nhé'.", nextScene: "linh_1_2" }
        ]
    },
    "linh_1_1_sai_a": {
        charName: "LINH (Cảnh 1.1: Thất bại)",
        charColor: "text-rose-500",
        charSprite: "assets/characters/Char_2.webp",
        charEmotion: "cry",
        bgTheme: "border-rose-500/80 bg-rose-950/90 animate__shakeX",
        isResult: true,
        resultTitle: "THẤT BẠI - CÚ ĐẨY XUỐNG VỰC SÂU",
        resultColor: "text-rose-500",
        illustration: "assets/scenes/Char_2_Scene_11.webp",
        story: "Hành động chặn tin nhắn của Linh là giọt nước tràn ly. Trà cảm thấy cả thế giới quay lưng và đã có hành động tự hại bản thân trong đêm đó. Cả đời Linh sống trong sự dằn vặt.",
        choices: [{ text: "↺ Làm lại bước này", nextScene: "linh_1_1", isUndo: true }]
    },
    "linh_1_1_sai_b": {
        charName: "LINH (Cảnh 1.1: Thất bại)",
        charColor: "text-amber-400",
        charSprite: "assets/characters/Char_2.webp",
        charEmotion: "cry",
        bgTheme: "border-amber-500/50 bg-slate-900/95",
        isResult: true,
        resultTitle: "THẤT BẠI - LỜI AN ỦI SÁO RỖNG",
        resultColor: "text-amber-400",
        illustration: "assets/scenes/Char_2_Scene_1.webp",
        story: "Lời nói nhượng bộ của Linh vô tình khẳng định 'Thư là kẻ có quyền lực tuyệt đối'. Trà càng tuyệt vọng hơn vì nhận ra ngay cả người hiểu chuyện cũng không dám bảo vệ mình.",
        choices: [{ text: "↺ Làm lại bước này", nextScene: "linh_1_1", isUndo: true }]
    },

    // 🌟 [GAME LINH 1]: TIMING - CANH CHUẨN GHI HÌNH BẰNG CHỨNG HẮT NƯỚC
    "linh_1_2": {
        charName: "LINH (Cảnh 1.2: Bị Bắt Quả Tang)",
        charColor: "text-sky-400",
        charSprite: "assets/characters/Char_2.webp",
        charEmotion: "think", // 👉 Giữ bình tĩnh, quan sát hành vi của đối phương để ghi hình
        sfx: "sfx_heartbeat",
        bgTheme: "border-sky-500/30 bg-slate-900/95",
        story: "Tại quán cafe, Linh đang an ủi Trà thì Thư và đám bạn bất ngờ xuất hiện (do chúng bí mật theo dõi Trà). Thư cầm ly nước lọc hắt thẳng vào mặt Trà, rồi trừng mắt nhìn Linh: 'Mày đâm sau lưng tao à? Mày chọn con này hay chọn tao?'.",
        
        minigame: {
            type: "timing",
            duration: 8,
            target: 3,
            title: "GHI HÌNH KHOẢNH KHẮC",
            description: "Canh chuẩn xác thời điểm bấm nút GHI HÌNH đúng lúc con trỏ đi qua vùng sáng mục tiêu 3 lần để thu thập bằng chứng Thư hành hung!",
            successScene: "linh_1_3",
            failScene: "linh_1_2_sai_a"
        },

        choices: [
            { text: "👉 Run rẩy sợ hãi: 'Tao xin lỗi, tao chỉ ra đây nói chuyện xíu thôi, tao về phe mày mà'.", nextScene: "linh_1_2_sai_a" },
            { text: "👉 Gào lên: 'Mày dám hắt nước bạn tao à? Tao gọi giang hồ đập mày'.", nextScene: "linh_1_2_sai_b" },
            { text: "👉 Kéo Trà ra sau lưng, bấm nút quay video điện thoại: 'Tao chọn tao. Mày vừa hành hung người khác, camera quán đang quay, mày muốn lên phường không?'.", nextScene: "linh_1_3" }
        ]
    },
    "linh_1_2_sai_a": {
        charName: "LINH (Cảnh 1.2: Thất bại)",
        charColor: "text-amber-400",
        charSprite: "assets/characters/Char_2.webp",
        charEmotion: "cry",
        bgTheme: "border-amber-500/50 bg-slate-900/95",
        isResult: true,
        resultTitle: "THẤT BẠI - ĐÁNH MẤT TÔN NGHIÊM",
        resultColor: "text-amber-400",
        illustration: "assets/scenes/Char_2_Scene_9.webp",
        story: "Chấp nhận quỵ lụy kẻ thao túng khiến Linh mất đi sự tôn nghiêm. Thư không bao giờ tôn trọng Linh, và Trà thì cảm thấy bị phản bội sâu sắc. Bạn tự biến mình thành con rối.",
        choices: [{ text: "↺ Làm lại bước này", nextScene: "linh_1_2", isUndo: true }]
    },
    "linh_1_2_sai_b": {
        charName: "LINH (Cảnh 1.2: Thất bại)",
        charColor: "text-rose-500",
        charSprite: "assets/characters/Char_2.webp",
        charEmotion: "angry", // 👉 Gào lên đe dọa bằng bạo lực
        bgTheme: "border-rose-500/80 bg-rose-950/90 animate__shakeX",
        isResult: true,
        resultTitle: "THẤT BẠI - BẠO LỰC BÙNG PHÁT",
        resultColor: "text-rose-500",
        illustration: "assets/scenes/Char_2_Scene_5.webp",
        story: "Lời đe dọa bằng giang hồ kích thích máu điên của Thư. Bọn chúng lao vào xé áo và đánh cả Linh lẫn Trà ngay giữa quán cafe.",
        choices: [{ text: "↺ Làm lại bước này", nextScene: "linh_1_2", isUndo: true }]
    },

    "linh_1_3": {
        charName: "LINH (Cảnh 1.3: Đấu Trí Sống Còn)",
        charColor: "text-sky-400",
        charSprite: "assets/characters/Char_2.webp",
        charEmotion: "normal",
        bgTheme: "border-sky-500/30 bg-slate-900/95",
        story: "Thư cười khẩy vỗ bàn: 'Camera quán này hỏng từ đời nào rồi con ngu, mày dọa ai? Mày tưởng giơ cái điện thoại ra là tao sợ à?'. Đám bạn của Thư bắt đầu tiến lại gần bủa vây hai đứa.",
        choices: [
            { text: "👉 Sợ hãi cất điện thoại, kéo tay Trà cố gắng xin lỗi để lách ra ngoài.", nextScene: "linh_1_3_sai_a" },
            { text: "👉 Cầm lấy ly thủy tinh đập vỡ, dọa đâm bất cứ đứa nào tới gần.", nextScene: "linh_1_3_sai_b" },
            { text: "👉 Xoay màn hình điện thoại lại, mỉm cười: 'Camera quán hỏng, nhưng 200 người đang xem Livestream trên nick tao thì không hỏng đâu. Đánh đi!'.", nextScene: "linh_1_thanh_cong" }
        ]
    },
    "linh_1_3_sai_a": {
        charName: "LINH (Cảnh 1.3: Thất bại)",
        charColor: "text-amber-400",
        charSprite: "assets/characters/Char_2.webp",
        charEmotion: "cry",
        bgTheme: "border-amber-500/50 bg-slate-900/95",
        isResult: true,
        resultTitle: "THẤT BẠI - CHÙN BƯỚC TRƯỚC CÁI ÁC",
        resultColor: "text-amber-400",
        illustration: "assets/scenes/Char_2_Scene_11.webp",
        story: "Sự yếu đuối của Linh chứng minh cho Thư thấy Linh chỉ đang 'làm màu'. Bọn chúng tịch thu điện thoại và bắt Linh phải quỳ xuống xin lỗi mới cho về.",
        choices: [{ text: "↺ Làm lại bước này", nextScene: "linh_1_3", isUndo: true }]
    },
    "linh_1_3_sai_b": {
        charName: "LINH (Cảnh 1.3: Thất bại)",
        charColor: "text-rose-500",
        charSprite: "assets/characters/Char_2.webp",
        charEmotion: "angry", // 👉 Đập vỡ ly cầm hung khí
        bgTheme: "border-rose-500/80 bg-rose-950/90 animate__shakeX",
        isResult: true,
        resultTitle: "THẤT BẠI - HÀNH ĐỘNG NGUY HIỂM",
        resultColor: "text-rose-500",
        illustration: "assets/scenes/Char_2_Scene_13.webp",
        story: "Cầm hung khí (mảnh thủy tinh) khiến tính chất sự việc biến thành 'đe dọa giết người'. Chủ quán hoảng sợ gọi Công an tới còng tay Linh giải đi. Bọn Thư bỗng nhiên trở thành nạn nhân.",
        choices: [{ text: "↺ Làm lại bước này", nextScene: "linh_1_3", isUndo: true }]
    },
    "linh_1_thanh_cong": {
        charName: "LINH (Kết Quả Màn 1)",
        charColor: "text-emerald-400",
        charSprite: "assets/characters/Char_2.webp",
        charEmotion: "victory", // 👉 Chiến thắng kiêu hãnh rực rỡ
        bgTheme: "border-sky-500/80 bg-teal-950/90 animate__pulse",
        isResult: true,
        resultTitle: "THÀNH CÔNG - SỰ BẢO VỆ HOÀN HẢO",
        resultColor: "text-emerald-400",
        illustration: "assets/scenes/Char_2_Scene_14.webp",
        story: "Cú 'phản sát' cực gắt bằng Livestream khiến Thư và đồng bọn hoảng loạn lấy tay che mặt bỏ chạy. Thầy cô và phụ huynh lập tức biết chuyện. Nhóm của Thư bị nhà trường kỷ luật nặng. Linh đã bảo vệ bạn mình bằng một cái đầu đầy sỏi!",
        choices: [{ text: "➔ Chuyển sang Màn 2: Nhân Chứng Hành Lang", nextScene: "linh_man_2" }]
    },

    // ------------------------------------------
    // MÀN 2: LÀM CHỨNG OAN (BẪY LÒNG THƯƠNG HẠI)
    // ------------------------------------------
    "linh_man_2": {
        charName: "LINH (Cảnh 2: Kẻ Ăn Cắp Bí Ẩn)",
        charColor: "text-sky-400",
        charSprite: "assets/characters/Char_2.webp",
        charEmotion: "think", // 👉 Tư duy cẩn trọng không vội kết tội khi chưa rõ ràng
        bgTheme: "border-sky-500/30 bg-slate-900/95",
        story: "Trong giờ ra chơi, Linh vô tình thấy Ngọc (bạn cùng bàn, rất hay bị bắt nạt) lén lút thò tay vào cặp của lớp trưởng lấy đi 500k. Khi lớp trưởng báo mất tiền, Cô giáo xét cặp và phát hiện tiền nằm trong túi Ngọc. Tuy nhiên Ngọc gào khóc: 'Em bị oan, chắc ai ghét em nên nhét vào'. Cô giáo quay sang hỏi Linh: 'Linh ngồi cạnh, em có thấy gì không?'.",
        choices: [
            { text: "👉 Khai thật ngay: 'Em thưa cô em thấy bạn Ngọc tự thò tay vào lấy ạ'.", nextScene: "linh_2_sai_a" },
            { text: "👉 Thương Ngọc bị bắt nạt nhiều nên nói dối: 'Dạ em không thấy gì hết cô ơi'.", nextScene: "linh_2_sai_b" },
            { text: "👉 Khéo léo trả lời: 'Lúc nãy em có việc ra ngoài nên không chắc, nhưng lớp mình có camera mà cô, cô check lại cho rõ ràng ạ'.", nextScene: "linh_2_1" }
        ]
    },
    "linh_2_sai_a": {
        charName: "LINH (Cảnh 2: Thất bại)",
        charColor: "text-rose-500",
        charSprite: "assets/characters/Char_2.webp",
        charEmotion: "cry",
        bgTheme: "border-rose-500/80 bg-rose-950/90 animate__shakeX",
        isResult: true,
        resultTitle: "THẤT BẠI - ANH HÙNG LỘ DIỆN SỚM",
        resultColor: "text-rose-500",
        illustration: "assets/scenes/Char_2_Scene_7.webp",
        story: "Khai thật là tốt, nhưng khai trực diện khi chưa có sự bảo vệ sẽ khiến bạn thành mục tiêu. Ngọc bị phạt nhưng mang hận, tối đó dẫn anh trai tới chặn đường đánh Linh vì tội 'mách lẻo'.",
        choices: [{ text: "↺ Làm lại bước này", nextScene: "linh_man_2", isUndo: true }]
    },
    "linh_2_sai_b": {
        charName: "LINH (Cảnh 2: Thất bại)",
        charColor: "text-amber-400",
        charSprite: "assets/characters/Char_2.webp",
        charEmotion: "cry",
        bgTheme: "border-amber-500/50 bg-slate-900/95",
        isResult: true,
        resultTitle: "THẤT BẠI - LÒNG THƯƠNG HẠI SAI CHỖ",
        resultColor: "text-amber-400",
        illustration: "assets/scenes/Char_2_Scene_11.webp",
        story: "Vì Linh nói không thấy, Cô giáo không đủ bằng chứng phạt Ngọc. Tưởng Linh dễ tính, hôm sau Ngọc ăn cắp luôn máy tính Casio của Linh. Kẻ xấu thường không biết ơn sự bao che!",
        choices: [{ text: "↺ Làm lại bước này", nextScene: "linh_man_2", isUndo: true }]
    },

    "linh_2_1": {
        charName: "LINH (Cảnh 2.1: Lời Đe Dọa)",
        charColor: "text-sky-400",
        charSprite: "assets/characters/Char_2.webp",
        charEmotion: "think", // 👉 Nảy số nhanh, bật ghi âm khi bị đe dọa
        bgTheme: "border-sky-500/30 bg-slate-900/95",
        story: "Nhờ Linh nhắc vụ camera, Ngọc bị bắt quả tang và bị đình chỉ 3 ngày. Sáng hôm Ngọc đi học lại, Ngọc chặn Linh ở cầu thang, ánh mắt sắc lẹm: 'Mày khôn lắm con. Vụ camera là do mày nhắc bà cô đúng không? Chiều nay tan học mày liệu hồn'.",
        choices: [
            { text: "👉 Run rẩy xin lỗi: 'Mình không cố ý đâu, tại cô hỏi ép quá'.", nextScene: "linh_2_1_sai_a" },
            { text: "👉 Gân cổ lên: 'Tao nhắc thì sao? Loại ăn cắp như mày xứng đáng bị đuổi học!'.", nextScene: "linh_2_1_sai_b" },
            { text: "👉 Lấy điện thoại ra bấm ghi âm: 'Mày đang đe dọa tao đấy à? Tội ăn cắp cộng thêm tội hành hung thì mày xác định đi trại giáo dưỡng nhé'.", nextScene: "linh_2_2" }
        ]
    },
    "linh_2_1_sai_a": {
        charName: "LINH (Cảnh 2.1: Thất bại)",
        charColor: "text-amber-400",
        charSprite: "assets/characters/Char_2.webp",
        charEmotion: "cry",
        bgTheme: "border-amber-500/50 bg-slate-900/95",
        isResult: true,
        resultTitle: "THẤT BẠI - CHÙN BƯỚC",
        resultColor: "text-amber-400",
        illustration: "assets/scenes/Char_2_Scene_9.webp",
        story: "Xin lỗi kẻ làm sai nghĩa là bạn tự hạ thấp lẽ phải. Ngọc đắc ý và tiếp tục bạo hành tinh thần, bắt Linh làm bài tập bù cho những ngày nó bị đình chỉ.",
        choices: [{ text: "↺ Làm lại bước này", nextScene: "linh_2_1", isUndo: true }]
    },
    "linh_2_1_sai_b": {
        charName: "LINH (Cảnh 2.1: Thất bại)",
        charColor: "text-rose-500",
        charSprite: "assets/characters/Char_2.webp",
        charEmotion: "angry", // 👉 Gân cổ chỉ trích làm đối phương nổi điên
        bgTheme: "border-rose-500/80 bg-rose-950/90 animate__shakeX",
        isResult: true,
        resultTitle: "THẤT BẠI - KÍCH ĐỘNG THÚ TÍNH",
        resultColor: "text-rose-500",
        illustration: "assets/scenes/Char_2_Scene_5.webp",
        story: "Lời nhục mạ của Linh đánh trúng lòng tự ái của kẻ bị dồn vào chân tường. Ngọc mất trí, xô Linh ngã lăn từ cầu thang xuống chấn thương nặng.",
        choices: [{ text: "↺ Làm lại bước này", nextScene: "linh_2_1", isUndo: true }]
    },

    // 🌟 [GAME LINH 2]: EVIDENCE SCAN - SOI CHIẾU DỮ LIỆU ICLOUD TRƯỚC KHI ĐIỆN THOẠI HỎNG
    "linh_2_2": {
        charName: "LINH (Cảnh 2.2: Rung Cây Dọa Khỉ)",
        charColor: "text-sky-400",
        charSprite: "assets/characters/Char_2.webp",
        charEmotion: "think", // 👉 Tập trung sao lưu iCloud trước khi điện thoại sập
        sfx: "sfx_heartbeat",
        bgTheme: "border-sky-500/30 bg-slate-900/95",
        story: "Thấy Linh ghi âm, Ngọc vung tay tát văng chiếc điện thoại của Linh xuống đất vỡ màn hình: 'Ghi này! Mày tưởng tao sợ à? Có giỏi thì lấy cái điện thoại nát đó đi mà méc'.",
        
        minigame: {
            type: "evidence_scan",
            duration: 6,
            target: 6,
            title: "ĐỒNG BỘ DỮ LIỆU ICLOUD",
            description: "Radar dữ liệu đang quét! Bấm phản xạ ngay vào ít nhất 6 mảnh DATA_iCloud_SYNC (Màu Xanh) để sao lưu đoạn ghi âm trước khi điện thoại sập nguồn!",
            successScene: "linh_2_3",
            failScene: "linh_2_2_sai_a"
        },

        choices: [
            { text: "👉 Khóc lóc nhặt điện thoại lên bắt Ngọc đền tiền.", nextScene: "linh_2_2_sai_a" },
            { text: "👉 Tức quá lao vào tát lại Ngọc để trả thù.", nextScene: "linh_2_2_sai_b" },
            { text: "👉 Nhếch mép cười: 'Cảm ơn đã tát tao. Điện thoại tao đang mở iCloud đồng bộ ghi âm trực tiếp lên Mạng. Mày vừa có thêm tội Cố ý hủy hoại tài sản!'.", nextScene: "linh_2_3" }
        ]
    },
    "linh_2_2_sai_a": {
        charName: "LINH (Cảnh 2.2: Thất bại)",
        charColor: "text-amber-400",
        charSprite: "assets/characters/Char_2.webp",
        charEmotion: "cry",
        bgTheme: "border-amber-500/50 bg-slate-900/95",
        isResult: true,
        resultTitle: "THẤT BẠI - LỆ THUỘC TÀI SẢN",
        resultColor: "text-amber-400",
        illustration: "assets/scenes/Char_2_Scene_11.webp",
        story: "Khóc lóc đòi đền tiền cho thấy bạn đang rất xót của và hoảng loạn. Ngọc giẫm thêm một nhát nát bét điện thoại rồi bỏ chạy, để lại Linh ôm cục tức.",
        choices: [{ text: "↺ Làm lại bước này", nextScene: "linh_2_2", isUndo: true }]
    },
    "linh_2_2_sai_b": {
        charName: "LINH (Cảnh 2.2: Thất bại)",
        charColor: "text-rose-500",
        charSprite: "assets/characters/Char_2.webp",
        charEmotion: "angry", // 👉 Lao vào ẩu đả trả đũa
        bgTheme: "border-rose-500/80 bg-rose-950/90 animate__shakeX",
        isResult: true,
        resultTitle: "THẤT BẠI - ĐÁNH NHAU TRONG TRƯỜNG",
        resultColor: "text-rose-500",
        illustration: "assets/scenes/Char_2_Scene_13.webp",
        story: "Lao vào ẩu đả biến bạn thành người vi phạm nội quy. Camera trường ghi lại, Linh cũng bị kỷ luật hạ hạnh kiểm dù là người bị hại trước.",
        choices: [{ text: "↺ Làm lại bước này", nextScene: "linh_2_2", isUndo: true }]
    },

    "linh_2_3": {
        charName: "LINH (Cảnh 2.3: Sự Cầu Xin Của Kẻ Xấu)",
        charColor: "text-sky-400",
        charSprite: "assets/characters/Char_2.webp",
        charEmotion: "normal",
        bgTheme: "border-sky-500/30 bg-slate-900/95",
        story: "Nghe đến chữ 'đồng bộ lên mạng', Ngọc hoảng loạn cực độ, lập tức quỳ sụp xuống nắm tay Linh: 'Linh ơi tao lạy mày, bố tao mà biết tao ăn cắp rồi đập đồ người khác thì ông ấy đánh chết tao. Tao đền tiền gấp 3, mày xóa file đi được không?'.",
        choices: [
            { text: "👉 Mủi lòng, cầm tiền đền bù rồi hứa sẽ xóa file không báo giáo viên.", nextScene: "linh_2_3_sai_a" },
            { text: "👉 Hất tay Ngọc ra, chửi rủa xỉ nhục thêm cho bõ tức.", nextScene: "linh_2_3_sai_b" },
            { text: "👉 Rút tay lại, cương quyết: 'Mình không nhận hối lộ. Bạn mang tiền này lên gặp Thầy Hiệu trưởng mà giải thích. Mình sẽ nộp file cho nhà trường'.", nextScene: "linh_2_thanh_cong" }
        ]
    },
    "linh_2_3_sai_a": {
        charName: "LINH (Cảnh 2.3: Thất bại)",
        charColor: "text-rose-500",
        charSprite: "assets/characters/Char_2.webp",
        charEmotion: "cry",
        bgTheme: "border-rose-500/80 bg-rose-950/90 animate__shakeX",
        isResult: true,
        resultTitle: "THẤT BẠI - BAO CHE LÀ TỘI ÁC",
        resultColor: "text-rose-500",
        illustration: "assets/scenes/Char_2_Scene_9.webp",
        story: "Nhận tiền để xóa dấu vết là hành vi đồng phạm che giấu tội phạm. Sau khi qua cơn hoảng loạn, Ngọc chụp ảnh việc Linh nhận tiền và dùng nó để tống tiền ngược lại Linh.",
        choices: [{ text: "↺ Làm lại bước này", nextScene: "linh_2_3", isUndo: true }]
    },
    "linh_2_3_sai_b": {
        charName: "LINH (Cảnh 2.3: Thất bại)",
        charColor: "text-amber-400",
        charSprite: "assets/characters/Char_2.webp",
        charEmotion: "angry", // 👉 Chửi rủa xỉ nhục người đang quỳ lạy
        bgTheme: "border-amber-500/50 bg-slate-900/95",
        isResult: true,
        resultTitle: "THẤT BẠI - DỒN NGƯỜI VÀO ĐƯỜNG CÙNG",
        resultColor: "text-amber-400",
        illustration: "assets/scenes/Char_2_Scene_13.webp",
        story: "Xỉ nhục một kẻ đang quỳ lạy có thể kích hoạt thú tính tột cùng của họ. Ngọc đứng bật dậy, rút vật nhọn ra tấn công Linh trong cơn tuyệt vọng điên loạn.",
        choices: [{ text: "↺ Làm lại bước này", nextScene: "linh_2_3", isUndo: true }]
    },
    "linh_2_thanh_cong": {
        charName: "LINH (Kết Quả Màn 2)",
        charColor: "text-emerald-400",
        charSprite: "assets/characters/Char_2.webp",
        charEmotion: "victory", // 👉 Nụ cười kiên định liêm chính
        bgTheme: "border-sky-500/80 bg-teal-950/90 animate__pulse",
        isResult: true,
        resultTitle: "THÀNH CÔNG - SỰ CHÍNH TRỰC TUYỆT ĐỐI",
        resultColor: "text-emerald-400",
        illustration: "assets/scenes/Char_2_Scene_12.webp",
        story: "Bạn từ chối sự cám dỗ và giao mọi việc cho người có thẩm quyền. Nhà trường đã yêu cầu gia đình Ngọc bồi thường thiệt hại và áp dụng biện pháp giáo dục đặc biệt. Sự liêm chính của Linh khiến mọi người kính phục!",
        choices: [{ text: "➔ Chuyển sang Màn 3: Bẫy Tẩy Chay", nextScene: "linh_man_3" }]
    },

    // ------------------------------------------
    // MÀN 3: KẺ BẮT NẠT ĐÓNG VAI NẠN NHÂN
    // ------------------------------------------
    "linh_man_3": {
        charName: "LINH (Cảnh 3: Drama Đảo Chiều)",
        charColor: "text-sky-400",
        charSprite: "assets/characters/Char_2.webp",
        charEmotion: "think", // 👉 Cẩn trọng đánh giá tình huống nhạy cảm
        bgTheme: "border-sky-500/30 bg-slate-900/95",
        story: "Quỳnh - hotgirl của lớp từng đi bắt nạt rất nhiều người. Nay Quỳnh vô tình làm vỡ bình hoa quý của trường. Cả trường hả hê hùa nhau chửi rủa, bóc phốt Quỳnh trên mạng. Đêm đó, Quỳnh khóc lóc up một status: 'Mình mệt mỏi quá, hẹn kiếp sau...'.",
        choices: [
            { text: "👉 Mặc kệ nó, quả báo đến sớm, cho nó chừa thói hay đi bắt nạt người khác.", nextScene: "linh_3_sai_a" },
            { text: "👉 Hùa vào thả haha vào status đó: 'Diễn sâu quá chị ơi, đi chết thật thì hãng up'.", nextScene: "linh_3_sai_b" },
            { text: "👉 Chụp status đó lại, gửi ngay cho cô GVCN và gia đình Quỳnh để can thiệp gấp, tuyệt đối không chửi bới thêm.", nextScene: "linh_3_1" }
        ]
    },
    "linh_3_sai_a": {
        charName: "LINH (Cảnh 3: Thất bại)",
        charColor: "text-rose-500",
        charSprite: "assets/characters/Char_2.webp",
        charEmotion: "cry",
        bgTheme: "border-rose-500/80 bg-rose-950/90 animate__shakeX",
        isResult: true,
        resultTitle: "THẤT BẠI - SỰ VÔ CẢM LẠNH LÙNG",
        resultColor: "text-rose-500",
        illustration: "assets/scenes/Char_2_Scene_11.webp",
        story: "Mặc kệ lời kêu cứu là một dạng tội ác gián tiếp. Đêm đó Quỳnh thực sự tự tử và phải đi cấp cứu. Dù Quỳnh từng là kẻ bắt nạt, nhưng mạng sống con người vẫn là trên hết.",
        choices: [{ text: "↺ Cứu một mạng người, thử lại", nextScene: "linh_man_3", isUndo: true }]
    },
    "linh_3_sai_b": {
        charName: "LINH (Cảnh 3: Thất bại)",
        charColor: "text-rose-500",
        charSprite: "assets/characters/Char_2.webp",
        charEmotion: "angry", // 👉 Thả haha chế giễu bạo lực mạng
        bgTheme: "border-rose-500/80 bg-rose-950/90 animate__shakeX",
        isResult: true,
        resultTitle: "THẤT BẠI - BẠN CŨNG LÀ KẺ BẮT NẠT",
        resultColor: "text-rose-500",
        illustration: "assets/scenes/Char_2_Scene_7.webp",
        story: "Việc sỉ nhục một người đang đứng bên bờ vực thẳm biến bạn trở thành phiên bản độc ác không kém gì Quỳnh lúc trước. Vòng lặp bạo lực không bao giờ kết thúc.",
        choices: [{ text: "↺ Làm lại bước này", nextScene: "linh_man_3", isUndo: true }]
    },

    // 🌟 [GAME LINH 3]: BALANCE - CẢN KIM CHỈ NANH LÁI ĐÁM ĐÔNG VỀ LÝ TRÍ
    "linh_3_1": {
        charName: "LINH (Cảnh 3.1: Lời Nhờ Vả Ép Buộc)",
        charColor: "text-sky-400",
        charSprite: "assets/characters/Char_2.webp",
        charEmotion: "think", // 👉 Tập trung giữ vững lý trí khi bị thao túng
        sfx: "sfx_heartbeat",
        bgTheme: "border-sky-500/30 bg-slate-900/95",
        story: "Nhờ Linh báo tin, gia đình kịp thời cứu Quỳnh. Tuy nhiên, biết Linh là người báo, Quỳnh nhắn tin: 'Cậu thương mình đúng không? Cậu lên group trường đăng bài đính chính giúp mình là mình chưa từng bắt nạt ai đi, nếu không mình lại đi chết đấy!'.",
        
        minigame: {
            type: "balance",
            duration: 6,
            title: "GIỮ VỮNG LÝ TRÍ",
            description: "Quỳnh đang dùng sự tự tử để thao túng bạn tẩy trắng cho cái ác (Trượt về Đỏ). Bấm nhấp liên tục nút 'LÁI VỀ LÝ TRÍ' để giữ kim trong vùng Xanh suốt 6 giây!",
            successScene: "linh_3_2",
            failScene: "linh_3_1_sai_a"
        },

        choices: [
            { text: "👉 Đồng ý đăng bài tẩy trắng vì sợ Quỳnh lại nghĩ quẩn.", nextScene: "linh_3_1_sai_a" },
            { text: "👉 Chửi thẳng: 'Mày bớt diễn đi, tao cứu mày một mạng chứ tao không rảnh đi rửa bẩn cho mày'.", nextScene: "linh_3_1_sai_b" },
            { text: "👉 Lạnh lùng rep: 'Việc cậu bị mạng xã hội công kích là sai, tớ báo người lớn cứu cậu. Nhưng việc cậu bắt nạt người khác là THẬT. Tớ không bao che cái sai'.", nextScene: "linh_3_2" }
        ]
    },
    "linh_3_1_sai_a": {
        charName: "LINH (Cảnh 3.1: Thất bại)",
        charColor: "text-amber-400",
        charSprite: "assets/characters/Char_2.webp",
        charEmotion: "cry",
        bgTheme: "border-amber-500/50 bg-slate-900/95",
        isResult: true,
        resultTitle: "THẤT BẠI - SỰ DỐI TRÁ PHẢN CHỦ",
        resultColor: "text-amber-400",
        illustration: "assets/scenes/Char_2_Scene_9.webp",
        story: "Bêh vực mù quáng khiến cộng đồng mạng quay mũi dùi sang tẩy chay chính Linh vì tội 'đồng lõa, tẩy trắng cho kẻ bắt nạt'. Bạn mất đi tiếng nói chân thật của mình.",
        choices: [{ text: "↺ Làm lại bước này", nextScene: "linh_3_1", isUndo: true }]
    },
    "linh_3_1_sai_b": {
        charName: "LINH (Cảnh 3.1: Thất bại)",
        charColor: "text-rose-500",
        charSprite: "assets/characters/Char_2.webp",
        charEmotion: "angry", // 👉 Chửi thẳng mặt người đang tổn thương tâm lý
        bgTheme: "border-rose-500/80 bg-rose-950/90 animate__shakeX",
        isResult: true,
        resultTitle: "THẤT BẠI - THIẾU TÍNH NHÂN VĂN",
        resultColor: "text-rose-500",
        illustration: "assets/scenes/Char_2_Scene_13.webp",
        story: "Sỉ nhục người đang có tâm lý bất ổn là cực kỳ nguy hiểm. Quỳnh cắt cổ tay lần 2, nhà trường truy cứu Linh vì tin nhắn có tính chất kích động nạn nhân tự sát.",
        choices: [{ text: "↺ Làm lại bước này", nextScene: "linh_3_1", isUndo: true }]
    },

    "linh_3_2": {
        charName: "LINH (Cảnh 3.2: Mặt Nạ Rơi Xuống)",
        charColor: "text-sky-400",
        charSprite: "assets/characters/Char_2.webp",
        charEmotion: "normal",
        bgTheme: "border-sky-500/30 bg-slate-900/95",
        story: "Bị Linh từ chối bao che, Quỳnh lộ bản chất, nhắn lại: 'Mày là con khốn nạn giả tạo, chờ tao khỏe lại tao sẽ gọi người đập nát mặt mày!'.",
        choices: [
            { text: "👉 Sợ hãi block nick Quỳnh để trốn tránh rắc rối.", nextScene: "linh_3_2_sai_a" },
            { text: "👉 Thách thức: 'Tao thách mày đấy, có giỏi thì lên đây'.", nextScene: "linh_3_2_sai_b" },
            { text: "👉 Cap luôn tin nhắn đe dọa đó gửi cho Cô GVCN: 'Cô ơi bạn ấy chưa hối lỗi và vẫn muốn dùng bạo lực. Cô nhắc gia đình quản lý bạn ấy giúp em'.", nextScene: "linh_3_3" }
        ]
    },
    "linh_3_2_sai_a": {
        charName: "LINH (Cảnh 3.2: Thất bại)",
        charColor: "text-amber-400",
        charSprite: "assets/characters/Char_2.webp",
        charEmotion: "cry",
        bgTheme: "border-amber-500/50 bg-slate-900/95",
        isResult: true,
        resultTitle: "THẤT BẠI - BỎ CHẠY TRƯỚC SỰ THẬT",
        resultColor: "text-amber-400",
        illustration: "assets/scenes/Char_2_Scene_11.webp",
        story: "Việc im lặng và block khiến nhà trường nghĩ Quỳnh đã 'hiền' lại. Khi Quỳnh trở lại trường, Linh sẽ là người đầu tiên chịu trận đòn thù.",
        choices: [{ text: "↺ Làm lại bước này", nextScene: "linh_3_2", isUndo: true }]
    },
    "linh_3_2_sai_b": {
        charName: "LINH (Cảnh 3.2: Thất bại)",
        charColor: "text-rose-500",
        charSprite: "assets/characters/Char_2.webp",
        charEmotion: "angry", // 👉 Thách thức khiêu khích đối thủ
        bgTheme: "border-rose-500/80 bg-rose-950/90 animate__shakeX",
        isResult: true,
        resultTitle: "THẤT BẠI - NGÔNG CUỒNG",
        resultColor: "text-rose-500",
        illustration: "assets/scenes/Char_2_Scene_13.webp",
        story: "Thách thức kẻ lưu manh không làm bạn ngầu hơn, nó chỉ chứng minh bạn không đủ tỉnh táo để xử lý rắc rối. Quỳnh nhờ đàn anh khối trên chặn đường Linh thật.",
        choices: [{ text: "↺ Làm lại bước này", nextScene: "linh_3_2", isUndo: true }]
    },

    "linh_3_3": {
        charName: "LINH (Cảnh 3.3: Làn Sóng Phản Bội)",
        charColor: "text-sky-400",
        charSprite: "assets/characters/Char_2.webp",
        charEmotion: "think", // 👉 Tư duy thấu cảm, khuyên răn đám đông
        bgTheme: "border-sky-500/30 bg-slate-900/95",
        story: "Cô GVCN gọi điện thẳng cho bố mẹ Quỳnh. Biết con gái dối trá và đe dọa bạn, bố mẹ Quỳnh tịch thu điện thoại và bắt Quỳnh đi điều trị tâm lý. Thấy Quỳnh vắng mặt, học sinh toàn trường tiếp tục mổ xẻ, chửi bới Quỳnh thậm tệ trên group trường.",
        choices: [
            { text: "👉 Đi rêu rao thêm: 'Đấy, tao méc cô nên nó bị gốt vào trại tâm thần rồi'.", nextScene: "linh_3_3_sai_a" },
            { text: "👉 Cười mỉa mai, thấy hả hê vì kẻ xấu bị trừng phạt.", nextScene: "linh_3_3_sai_b" },
            { text: "👉 Đăng một bài ẩn danh: 'Pháp luật và nhà trường sẽ xử lý bạn ấy. Đừng bới móc nữa, đừng tự biến chúng ta thành những kẻ bắt nạt mạng tiếp theo'.", nextScene: "linh_3_thanh_cong" }
        ]
    },
    "linh_3_3_sai_a": {
        charName: "LINH (Cảnh 3.3: Thất bại)",
        charColor: "text-rose-500",
        charSprite: "assets/characters/Char_2.webp",
        charEmotion: "angry", // 👉 Đi rêu rao bới móc bệnh tật người khác
        bgTheme: "border-rose-500/80 bg-rose-950/90 animate__shakeX",
        isResult: true,
        resultTitle: "THẤT BẠI - HẢ HÊ ĐỘC ÁC",
        resultColor: "text-rose-500",
        illustration: "assets/scenes/Char_2_Scene_7.webp",
        story: "Mang bệnh tật và sự trừng phạt của người khác ra làm trò đùa khiến nhân cách của bạn trở nên méo mó. Bạn đang tự biến mình thành một 'Quỳnh' thứ hai.",
        choices: [{ text: "↺ Làm lại bước này", nextScene: "linh_3_3", isUndo: true }]
    },
    "linh_3_3_sai_b": {
        charName: "LINH (Cảnh 3.3: Thất bại)",
        charColor: "text-amber-400",
        charSprite: "assets/characters/Char_2.webp",
        charEmotion: "cry",
        bgTheme: "border-amber-500/50 bg-slate-900/95",
        isResult: true,
        resultTitle: "THẤT BẠI - CỔ VŨ BẠO LỰC MẠNG",
        resultColor: "text-amber-400",
        illustration: "assets/scenes/Char_2_Scene_11.webp",
        story: "Bạo lực mạng nhân danh 'công lý' vẫn là bạo lực mạng. Sự im lặng đồng tình của bạn đang tạo ra một môi trường mạng xã hội đầy sự thù hằn.",
        choices: [{ text: "↺ Làm lại bước này", nextScene: "linh_3_3", isUndo: true }]
    },
    "linh_3_thanh_cong": {
        charName: "LINH (Kết Quả Màn 3)",
        charColor: "text-emerald-400",
        charSprite: "assets/characters/Char_2.webp",
        charEmotion: "victory", // 👉 Nụ cười tự hào vì góc nhìn nhân văn
        bgTheme: "border-sky-500/80 bg-teal-950/90 animate__pulse",
        isResult: true,
        resultTitle: "THÀNH CÔNG - GÓC NHÌN NHÂN VĂN",
        resultColor: "text-emerald-400",
        illustration: "assets/scenes/Char_2_Scene_14.webp",
        story: "Dòng trạng thái của Linh đã làm hạ nhiệt đám đông đang khát máu trên mạng. Linh chứng minh được rằng: Mình kiên quyết với cái ác, nhưng không mất đi lòng nhân đạo. Bạn có tư duy thấu cảm tuyệt vời!",
        choices: [{ text: "➔ Chuyển sang Màn 4: Lời Đồn Sugar Baby", nextScene: "linh_man_4" }]
    },

    // ------------------------------------------
    // MÀN 4: LỜI ĐỒN "SUGAR BABY" (TIN ĐỒN THẤT THIỆT)
    // ------------------------------------------
    "linh_man_4": {
        charName: "LINH (Cảnh 4: Sóng Gió Tin Đồn)",
        charColor: "text-sky-400",
        charSprite: "assets/characters/Char_2.webp",
        charEmotion: "think", // 👉 Không vội tin lời đồn, tìm chứng cứ
        bgTheme: "border-sky-500/30 bg-slate-900/95",
        story: "Giờ ra chơi, Linh nghe thấy nhóm của Thư đang bàn tán rôm rả: 'Ê, dạo này con Mai xài iPhone 15, đi xe xịn. Trưa qua tao còn thấy nó bước lên Mercedes của một lão già bụng bự. Chắc chắn là làm Sugar Baby rồi!'. Cả đám cười ồ lên khinh bỉ.",
        choices: [
            { text: "👉 Giảng đạo: 'Các cậu không có bằng chứng thì đừng đi nói xấu người khác, như thế là khẩu nghiệp đấy'.", nextScene: "linh_4_sai_a" },
            { text: "👉 Hùa theo cho vui: 'Thật á? Thảo nào dạo này thấy nó chảnh chảnh, hóa ra là phông bạt'.", nextScene: "linh_4_sai_b" },
            { text: "👉 Khoanh tay hỏi ngược lại: 'Ai chụp được ảnh không? Hay chỉ là nghe 'bà hàng xóm' kể lại?'.", nextScene: "linh_4_1" }
        ]
    },
    "linh_4_sai_a": {
        charName: "LINH (Cảnh 4: Thất bại)",
        charColor: "text-amber-400",
        charSprite: "assets/characters/Char_2.webp",
        charEmotion: "cry",
        bgTheme: "border-amber-500/50 bg-slate-900/95",
        isResult: true,
        resultTitle: "THẤT BẠI - BỊ ĐÁNH ĐỒNG CHỨC DANH",
        resultColor: "text-amber-400",
        illustration: "assets/scenes/Char_2_Scene_7.webp",
        story: "Thư bĩu môi: 'Ôi dào, mây tầng nào gặp mây tầng đó, mày bênh nó chắc mày cũng là Sugar Baby chứ gì?'. Bạn tự biến mình thành mục tiêu tiếp theo của miệng lưỡi thế gian mà không giúp gì được cho Mai.",
        choices: [{ text: "↺ Làm lại bước này", nextScene: "linh_man_4", isUndo: true }]
    },
    "linh_4_sai_b": {
        charName: "LINH (Cảnh 4: Thất bại)",
        charColor: "text-rose-500",
        charSprite: "assets/characters/Char_2.webp",
        charEmotion: "angry", // 👉 Hùa theo cười cợt tin đồn nhảm
        bgTheme: "border-rose-500/80 bg-rose-950/90 animate__shakeX",
        isResult: true,
        resultTitle: "THẤT BẠI - TIẾP TAY CHO TỘI ÁC",
        resultColor: "text-rose-500",
        illustration: "assets/scenes/Char_2_Scene_11.webp",
        story: "Chỉ một câu hùa theo vô thưởng vô phạt, bạn đã tiếp tay đẩy tin đồn lan rộng ra toàn trường. Mai không chịu nổi áp lực đã bị trầm cảm nặng.",
        choices: [{ text: "↺ Làm lại bước này", nextScene: "linh_man_4", isUndo: true }]
    },

    // 🌟 [GAME LINH 4]: CLEANER - QUÉC SẠCH TIN ĐỒN SUGAR BABY TRÊN GROUP LỚP
    "linh_4_1": {
        charName: "LINH (Cảnh 4.1: Đi Tìm Sự Thật)",
        charColor: "text-sky-400",
        charSprite: "assets/characters/Char_2.webp",
        charEmotion: "think", // 👉 Tập trung dập tắt tin đồn ác ý
        sfx: "sfx_heartbeat",
        bgTheme: "border-sky-500/30 bg-slate-900/95",
        story: "Thư chột dạ đáp: 'Cái Ngọc lớp bên kể cho tao nghe, chính mắt nó thấy con Mai lên xe lão già ở cổng bệnh viện'. Linh quyết định làm rõ chuyện này.",
        
        minigame: {
            type: "cleaner",
            duration: 6,
            target: 7,
            title: "DẬP TẮT TIN ĐỒN",
            description: "Tin đồn Sugar Baby đang bị phát tán ác ý! Phản xạ chạm nhanh vào ít nhất 7 hộp thoại màu đỏ để Report/Xóa trước khi Mai bị hủy hoại danh dự!",
            successScene: "linh_4_2",
            failScene: "linh_4_1_sai_b"
        },

        choices: [
            { text: "👉 Kéo hội sang lớp Ngọc để dằn mặt tay đôi, ép Ngọc phải nói sự thật.", nextScene: "linh_4_1_sai_a" },
            { text: "👉 Cho rằng 'không phải chuyện của mình' nên thôi, kệ xác con Mai.", nextScene: "linh_4_1_sai_b" },
            { text: "👉 Nhắn tin cho Mai: 'Bọn lớp mình đang đồn cậu cặp đại gia vì thấy cậu lên Mẹc ở viện. Ông chú đó là ai thế để tớ đính chính giúp?'.", nextScene: "linh_4_2" }
        ]
    },
    "linh_4_1_sai_a": {
        charName: "LINH (Cảnh 4.1: Thất bại)",
        charColor: "text-rose-500",
        charSprite: "assets/characters/Char_2.webp",
        charEmotion: "angry", // 👉 Kéo bè phái đi dằn mặt
        bgTheme: "border-rose-500/80 bg-rose-950/90 animate__shakeX",
        isResult: true,
        resultTitle: "THẤT BẠI - GÂY RỐI TRẬT TỰ",
        resultColor: "text-rose-500",
        illustration: "assets/scenes/Char_2_Scene_5.webp",
        story: "Kéo bè phái sang lớp khác dằn mặt lập tức bị quy vào tội 'gây rối, kích động bạo lực'. Bạn bị mời phụ huynh và chưa kịp giải oan cho bạn mình.",
        choices: [{ text: "↺ Làm lại bước này", nextScene: "linh_4_1", isUndo: true }]
    },
    "linh_4_1_sai_b": {
        charName: "LINH (Cảnh 4.1: Thất bại)",
        charColor: "text-amber-400",
        charSprite: "assets/characters/Char_2.webp",
        charEmotion: "cry",
        bgTheme: "border-amber-500/50 bg-slate-900/95",
        isResult: true,
        resultTitle: "THẤT BẠI - SỰ THỜ Ơ ĐÁNG SỢ",
        resultColor: "text-amber-400",
        illustration: "assets/scenes/Char_2_Scene_13.webp",
        story: "Sự im lặng của người hiểu chuyện chính là con dao sắc nhất đâm vào nạn nhân. Tin đồn bùng nổ mất kiểm soát phá nát danh dự một cô gái trong sạch.",
        choices: [{ text: "↺ Làm lại bước này", nextScene: "linh_4_1", isUndo: true }]
    },

    "linh_4_2": {
        charName: "LINH (Cảnh 4.2: Sự Thật Ngỡ Ngàng)",
        charColor: "text-sky-400",
        charSprite: "assets/characters/Char_2.webp",
        charEmotion: "normal",
        bgTheme: "border-sky-500/30 bg-slate-900/95",
        story: "Mai nhắn lại cùng bức ảnh chụp gia đình: 'Trời ơi, đó là cậu ruột tớ ở quê lên. Mẹ tớ đang mổ ruột thừa trong viện nên cậu lái xe qua đón tớ vào chăm mẹ. Tớ có cả giấy xuất viện đây'.",
        choices: [
            { text: "👉 Đăng ảnh lên Facebook chửi cả trường: 'Lũ bò này mở to mắt ra mà nhìn, đừng có mồm điêu!'.", nextScene: "linh_4_2_sai_a" },
            { text: "👉 Bảo Mai: 'Thôi cậu cứ im lặng đi, thời gian sẽ chứng minh tất cả'.", nextScene: "linh_4_2_sai_b" },
            { text: "👉 Gửi ảnh gia đình Mai vào group lớp kèm tin nhắn: 'Mai đang chăm mẹ ốm ở viện, cậu ruột qua đón. Mọi người đừng đồn bậy bạ làm tội nghiệp bạn ấy'.", nextScene: "linh_4_3" }
        ]
    },
    "linh_4_2_sai_a": {
        charName: "LINH (Cảnh 4.2: Thất bại)",
        charColor: "text-rose-500",
        charSprite: "assets/characters/Char_2.webp",
        charEmotion: "angry", // 👉 Đăng status chửi bới thô tục
        bgTheme: "border-rose-500/80 bg-rose-950/90 animate__shakeX",
        isResult: true,
        resultTitle: "THẤT BẠI - ANH HÙNG BÀN PHÍM",
        resultColor: "text-rose-500",
        illustration: "assets/scenes/Char_2_Scene_7.webp",
        story: "Dùng từ ngữ thô tục để chửi rủa khiến đám đông cay cú. Thay vì nhận sai, chúng bắt đầu soi mói và chế ảnh gia đình Mai để tiếp tục bạo lực mạng.",
        choices: [{ text: "↺ Làm lại bước này", nextScene: "linh_4_2", isUndo: true }]
    },
    "linh_4_2_sai_b": {
        charName: "LINH (Cảnh 4.2: Thất bại)",
        charColor: "text-amber-400",
        charSprite: "assets/characters/Char_2.webp",
        charEmotion: "cry",
        bgTheme: "border-amber-500/50 bg-slate-900/95",
        isResult: true,
        resultTitle: "THẤT BẠI - NIỀM TIN SAI LẦM",
        resultColor: "text-amber-400",
        illustration: "assets/scenes/Char_2_Scene_11.webp",
        story: "Thời gian không chứng minh điều gì trên MXH. Tốc độ lan truyền của tin giả luôn nhanh gấp ngàn lần sự thật nếu không bị dập tắt ngay lập tức.",
        choices: [{ text: "↺ Làm lại bước này", nextScene: "linh_4_2", isUndo: true }]
    },

    "linh_4_3": {
        charName: "LINH (Cảnh 4.3: Kẻ Xấu Bị Lộ Diện)",
        charColor: "text-sky-400",
        charSprite: "assets/characters/Char_2.webp",
        charEmotion: "think", // 👉 Răn đe bằng kiến thức pháp luật và lý trí
        bgTheme: "border-sky-500/30 bg-slate-900/95",
        story: "Thấy bằng chứng rõ ràng, cả group lớp im lặng. Thư và Ngọc bị quê xệ. Ngọc vội nhắn vào: 'Ơ tao thấy sao tao nói vậy, hiểu lầm xíu thôi làm gì căng, tao có ý xấu đâu'.",
        choices: [
            { text: "👉 Cười đểu: 'Đúng rồi, hiểu lầm thôi, mày làm gì có brain mà suy nghĩ'.", nextScene: "linh_4_3_sai_a" },
            { text: "👉 Nhượng bộ: 'Ừ thôi hiểu nhầm thì cho qua, rút kinh nghiệm nhé'.", nextScene: "linh_4_3_sai_b" },
            { text: "👉 Nghiêm túc tag Ngọc và Thư: 'Thấy một nửa sự thật chưa chắc là sự thật. Việc tung tin sai lệch bôi nhọ người khác là vi phạm pháp luật. Hai cậu nợ Mai một lời xin lỗi công khai'.", nextScene: "linh_4_thanh_cong" }
        ]
    },
    "linh_4_3_sai_a": {
        charName: "LINH (Cảnh 4.3: Thất bại)",
        charColor: "text-rose-500",
        charSprite: "assets/characters/Char_2.webp",
        charEmotion: "angry", // 👉 Cười đểu xỉ nhục đối phương
        bgTheme: "border-rose-500/80 bg-rose-950/90 animate__shakeX",
        isResult: true,
        resultTitle: "THẤT BẠI - THÁI ĐỘ KIÊU NGẠO",
        resultColor: "text-rose-500",
        illustration: "assets/scenes/Char_2_Scene_13.webp",
        story: "Mạt sát kẻ sai chỉ khiến bạn trở nên kiêu ngạo và phản cảm. Bạn đánh mất đi sự đồng tình của những người văn minh trong lớp.",
        choices: [{ text: "↺ Làm lại bước này", nextScene: "linh_4_3", isUndo: true }]
    },
    "linh_4_3_sai_b": {
        charName: "LINH (Cảnh 4.3: Thất bại)",
        charColor: "text-amber-400",
        charSprite: "assets/characters/Char_2.webp",
        charEmotion: "cry",
        bgTheme: "border-amber-500/50 bg-slate-900/95",
        isResult: true,
        resultTitle: "THẤT BẠI - SỰ THA THỨ RẺ TIỀN",
        resultColor: "text-amber-400",
        illustration: "assets/scenes/Char_2_Scene_9.webp",
        story: "Bỏ qua quá dễ dàng khiến kẻ thêu dệt tin đồn không nhận thức được hậu quả. Lần sau, chúng sẽ tiếp tục tung tin đồn ác ý khác vì 'cùng lắm chỉ là hiểu nhầm'.",
        choices: [{ text: "↺ Làm lại bước này", nextScene: "linh_4_3", isUndo: true }]
    },
    "linh_4_thanh_cong": {
        charName: "LINH (Kết Quả Màn 4)",
        charColor: "text-emerald-400",
        charSprite: "assets/characters/Char_2.webp",
        charEmotion: "victory", // 👉 Nụ cười chiến thắng đắc thắng
        bgTheme: "border-sky-500/80 bg-teal-950/90 animate__pulse",
        isResult: true,
        resultTitle: "THÀNH CÔNG - SỨC MẠNH CỦA SỰ THẬT",
        resultColor: "text-emerald-400",
        illustration: "assets/scenes/Char_2_Scene_14.webp",
        story: "Lời nói đanh thép và có tình có lý của Linh đã bẻ gãy hoàn toàn sự ngụy biện. Ngọc và Thư phải xấu hổ lên bài xin lỗi Mai. Linh không chỉ dập tắt tin đồn mà còn răn đe toàn lớp về tác hại của Fake News!",
        choices: [{ text: "➔ Chuyển sang Màn 5: Lời Cám Dỗ", nextScene: "linh_man_5" }]
    },

    // ------------------------------------------
    // MÀN 5: LỜI ĐỀ NGHỊ TỪ KẺ BẮT NẠT
    // ------------------------------------------
    "linh_man_5": {
        charName: "LINH (Cảnh 5: Cám Dỗ & Đe Dọa)",
        charColor: "text-sky-400",
        charSprite: "assets/characters/Char_2.webp",
        charEmotion: "think", // 👉 Cảnh giác từ chối quà hối lộ khôn khéo
        bgTheme: "border-sky-500/30 bg-slate-900/95",
        story: "Hùng (một đàn anh hay bắt nạt) biết Linh vô tình thấy cảnh mình tống tiền học sinh lớp dưới. Hùng chặn đường Linh, dúi vào tay thỏi son M.A.C xịn: 'Nhận đi em gái. Thầy Giám thị có hỏi thì bảo là anh em trêu nhau thôi. Tốt nhất là ngậm miệng lại'.",
        choices: [
            { text: "👉 Hất thỏi son đi, hét to: 'Tôi không nhận đồ hối lộ, tôi sẽ đi báo thầy!'.", nextScene: "linh_5_sai_a" },
            { text: "👉 Lấy thỏi son về xài nhưng ngày mai vẫn lên mách thầy Giám thị để lừa Hùng.", nextScene: "linh_5_sai_b" },
            { text: "👉 Nhẹ nhàng đẩy lại thỏi son, giữ mặt lạnh: 'Em không dùng hãng này đâu anh. Em cận thị hôm đó không nhìn rõ gì đâu, anh cất đi'.", nextScene: "linh_5_1" }
        ]
    },
    "linh_5_sai_a": {
        charName: "LINH (Cảnh 5: Thất bại)",
        charColor: "text-rose-500",
        charSprite: "assets/characters/Char_2.webp",
        charEmotion: "angry", // 👉 Hất đồ la hét kích động
        bgTheme: "border-rose-500/80 bg-rose-950/90 animate__shakeX",
        isResult: true,
        resultTitle: "THẤT BẠI - BỨT DÂY ĐỘNG RỪNG",
        resultColor: "text-rose-500",
        illustration: "assets/scenes/Char_2_Scene_5.webp",
        story: "Sự phản kháng gay gắt khi chỉ có một mình trước kẻ hung hãn là rất nguy hiểm. Hùng điên tiết tát Linh và giật điện thoại của Linh đập nát ngay tại chỗ.",
        choices: [{ text: "↺ Làm lại bước này", nextScene: "linh_man_5", isUndo: true }]
    },
    "linh_5_sai_b": {
        charName: "LINH (Cảnh 5: Thất bại)",
        charColor: "text-amber-400",
        charSprite: "assets/characters/Char_2.webp",
        charEmotion: "cry",
        bgTheme: "border-amber-500/50 bg-slate-900/95",
        isResult: true,
        resultTitle: "THẤT BẠI - LẬT LỌNG KÉM SANG",
        resultColor: "text-amber-400",
        illustration: "assets/scenes/Char_2_Scene_9.webp",
        story: "Hành vi nhận quà khiến lời khai của Linh trước thầy cô mất đi tính khách quan (nghi ngờ tống tiền ngược). Hơn nữa, Hùng tức giận vì bị lừa nên đã gọi giang hồ trả thù Linh.",
        choices: [{ text: "↺ Làm lại bước này", nextScene: "linh_man_5", isUndo: true }]
    },

    // 🌟 [GAME LINH 5]: HOLD - GỒNG TÂM LÝ KHÔNG SỢ HÃI TRƯỚC BẪY DEEPFAKE 18+
    "linh_5_1": {
        charName: "LINH (Cảnh 5.1: Chiêu Trò Uy Hiếp)",
        charColor: "text-sky-400",
        charSprite: "assets/characters/Char_2.webp",
        charEmotion: "think", // 👉 Tập trung gồng tâm lý không sợ hãi trước bẫy Deepfake
        sfx: "sfx_heartbeat",
        bgTheme: "border-sky-500/30 bg-slate-900/95",
        story: "Hùng thấy Linh từ chối thì đổi sắc mặt, lôi điện thoại ra dí sát mặt Linh: 'Mày khôn đấy. Nhưng nghe đây, nếu mày hé răng, tao sẽ dùng app AI ghép mặt mày vào mấy clip phim heo rồi rải khắp trường. Liệu hồn!'.",
        
        minigame: {
            type: "hold",
            duration: 7,
            title: "GIỮ VỮNG TÂM LÝ",
            description: "Hùng đang dùng Deepfake 18+ đe dọa tinh thần! Nhấn GIỮ CHẶT nút không buông để gồng bản lĩnh lên 100%, tuyệt đối không được sợ hãi!",
            successScene: "linh_5_2",
            failScene: "linh_5_1_sai_a"
        },

        choices: [
            { text: "👉 Run lẩy bẩy, òa khóc van xin Hùng đừng làm vậy.", nextScene: "linh_5_1_sai_a" },
            { text: "👉 Nổi điên vung tay tát thẳng vào mặt Hùng.", nextScene: "linh_5_1_sai_b" },
            { text: "👉 Giữ bình tĩnh, không chớp mắt: 'Anh rảnh thì cứ ghép. Giờ cho em về, mẹ em đang đợi ngoài cổng'.", nextScene: "linh_5_2" }
        ]
    },
    "linh_5_1_sai_a": {
        charName: "LINH (Cảnh 5.1: Thất bại)",
        charColor: "text-amber-400",
        charSprite: "assets/characters/Char_2.webp",
        charEmotion: "cry",
        bgTheme: "border-amber-500/50 bg-slate-900/95",
        isResult: true,
        resultTitle: "THẤT BẠI - RƠI VÀO CẠM BẪY SỢ HÃI",
        resultColor: "text-amber-400",
        illustration: "assets/scenes/Char_2_Scene_11.webp",
        story: "Sự sợ hãi của bạn là chiến thắng của kẻ thao túng. Hùng biết nhược điểm của Linh nên sẽ liên tục dùng trò Deepfake này để khống chế và bắt Linh làm bài tập thay hắn.",
        choices: [{ text: "↺ Làm lại bước này", nextScene: "linh_5_1", isUndo: true }]
    },
    "linh_5_1_sai_b": {
        charName: "LINH (Cảnh 5.1: Thất bại)",
        charColor: "text-rose-500",
        charSprite: "assets/characters/Char_2.webp",
        charEmotion: "angry", // 👉 Nổi điên tát thẳng mặt đối phương
        bgTheme: "border-rose-500/80 bg-rose-950/90 animate__shakeX",
        isResult: true,
        resultTitle: "THẤT BẠI - KÍCH ĐỘNG ĐÁNH NHAU",
        resultColor: "text-rose-500",
        illustration: "assets/scenes/Char_2_Scene_13.webp",
        story: "Tát một kẻ đang nắm thế thượng phong là hành động tự sát. Linh bị Hùng đẩy ngã đập đầu vào tường chấn thương nghiêm trọng.",
        choices: [{ text: "↺ Làm lại bước này", nextScene: "linh_5_1", isUndo: true }]
    },

    "linh_5_2": {
        charName: "LINH (Cảnh 5.2: Lời Triệu Tập Của Nhà Trường)",
        charColor: "text-sky-400",
        charSprite: "assets/characters/Char_2.webp",
        charEmotion: "think", // 👉 Tư duy dũng cảm khai sự thật với giáo viên
        bgTheme: "border-sky-500/30 bg-slate-900/95",
        story: "Linh an toàn về nhà. Hôm sau, Cô giáo gọi riêng Linh lên phòng: 'Linh, cô nghe nói hôm trước em có ở góc nhà xe. Em có thấy Hùng đe dọa đòi tiền em Tuấn lớp dưới không?'.",
        choices: [
            { text: "👉 Sợ vụ ghép ảnh 18+ nên nói dối: 'Dạ lúc đó em đi nhanh quá em không nhìn rõ gì đâu cô'.", nextScene: "linh_5_2_sai_a" },
            { text: "👉 Từ chối trả lời: 'Cô đừng hỏi em, em không muốn liên quan đâu ạ'.", nextScene: "linh_5_2_sai_b" },
            { text: "👉 Hít một hơi sâu: 'Dạ có. Và hôm qua anh Hùng đã chặn đường dọa ghép ảnh nhạy cảm em nếu em dám khai ra. Xin cô hãy bảo vệ em'.", nextScene: "linh_5_3" }
        ]
    },
    "linh_5_2_sai_a": {
        charName: "LINH (Cảnh 5.2: Thất bại)",
        charColor: "text-amber-400",
        charSprite: "assets/characters/Char_2.webp",
        charEmotion: "cry",
        bgTheme: "border-amber-500/50 bg-slate-900/95",
        isResult: true,
        resultTitle: "THẤT BẠI - BẢN ÁN LƯƠNG TÂM",
        resultColor: "text-amber-400",
        illustration: "assets/scenes/Char_2_Scene_1.webp",
        story: "Nói dối để bảo vệ bản thân khiến em Tuấn tiếp tục bị Hùng bóc lột và đánh đập thê thảm. Bạn đã gián tiếp hủy hoại cuộc đời của một người yếu thế hơn.",
        choices: [{ text: "↺ Làm lại bước này", nextScene: "linh_5_2", isUndo: true }]
    },
    "linh_5_2_sai_b": {
        charName: "LINH (Cảnh 5.2: Thất bại)",
        charColor: "text-rose-500",
        charSprite: "assets/characters/Char_2.webp",
        charEmotion: "cry",
        bgTheme: "border-rose-500/80 bg-rose-950/90 animate__shakeX",
        isResult: true,
        resultTitle: "THẤT BẠI - THÁI ĐỘ BẤT HỢP TÁC",
        resultColor: "text-rose-500",
        illustration: "assets/scenes/Char_2_Scene_7.webp",
        story: "Từ chối trả lời khiến Cô giáo đánh giá Linh là học sinh vô cảm. Kẻ ác không bị trừng trị và Hùng vẫn nắm thóp sự hèn nhát của Linh.",
        choices: [{ text: "↺ Làm lại bước này", nextScene: "linh_5_2", isUndo: true }]
    },

    "linh_5_3": {
        charName: "LINH (Cảnh 5.3: Lật Mặt Côn Đồ)",
        charColor: "text-sky-400",
        charSprite: "assets/characters/Char_2.webp",
        charEmotion: "think", // 👉 Dùng bằng chứng khoa học đập tan sự ngụy biện
        bgTheme: "border-sky-500/30 bg-slate-900/95",
        story: "Cô giáo lập tức gọi Hùng lên đối chất. Hùng chối bay chối biến: 'Cô ơi con Linh nó điêu đấy, nó thích em tỏ tình không được nên giờ quay ra cắn trộm em! Em làm gì có ảnh nào!'.",
        choices: [
            { text: "👉 Uất ức bật khóc: 'Mày là đồ tồi, tao thích mày hồi nào?'.", nextScene: "linh_5_3_sai_a" },
            { text: "👉 Chửi bới: 'Cô thấy nó ăn nói mất dạy chưa, cô đuổi học nó đi!'.", nextScene: "linh_5_3_sai_b" },
            { text: "👉 Lạnh lùng nói: 'Lúc 17h15 hôm qua anh chặn em ở hành lang khu B, camera trường có quay lại. Cô cứ kiểm tra lịch sử tìm kiếm ứng dụng Deepfake trong điện thoại anh ta là rõ ạ'.", nextScene: "linh_5_thanh_cong" }
        ]
    },
    "linh_5_3_sai_a": {
        charName: "LINH (Cảnh 5.3: Thất bại)",
        charColor: "text-amber-400",
        charSprite: "assets/characters/Char_2.webp",
        charEmotion: "cry",
        bgTheme: "border-amber-500/50 bg-slate-900/95",
        isResult: true,
        resultTitle: "THẤT BẠI - LẠC ĐỀ TRỌNG TÂM",
        resultColor: "text-amber-400",
        illustration: "assets/scenes/Char_2_Scene_11.webp",
        story: "Bị cuốn vào câu chuyện tình cảm nhảm nhí của Hùng khiến cuộc đối chất mất đi tính nghiêm trọng. Cảm xúc làm mờ đi lý trí sắc bén.",
        choices: [{ text: "↺ Làm lại bước này", nextScene: "linh_5_3", isUndo: true }]
    },
    "linh_5_3_sai_b": {
        charName: "LINH (Cảnh 5.3: Thất bại)",
        charColor: "text-rose-500",
        charSprite: "assets/characters/Char_2.webp",
        charEmotion: "angry", // 👉 Chửi bới chợ búa trước mặt cô giáo
        bgTheme: "border-rose-500/80 bg-rose-950/90 animate__shakeX",
        isResult: true,
        resultTitle: "THẤT BẠI - HÀNH XỬ CHỢ BÚA",
        resultColor: "text-rose-500",
        illustration: "assets/scenes/Char_2_Scene_13.webp",
        story: "Việc văng tục trước mặt Cô giáo làm Linh mất đi điểm tín nhiệm. Hùng tận dụng cơ hội đóng vai người bị hại.",
        choices: [{ text: "↺ Làm lại bước này", nextScene: "linh_5_3", isUndo: true }]
    },
    "linh_5_thanh_cong": {
        charName: "LINH (Kết Quả Màn 5)",
        charColor: "text-emerald-400",
        charSprite: "assets/characters/Char_2.webp",
        charEmotion: "victory", // 👉 Nụ cười chiến thắng đanh thép
        bgTheme: "border-sky-500/80 bg-teal-950/90 animate__pulse",
        isResult: true,
        resultTitle: "THÀNH CÔNG - SỰ SẮC BÉN TUYỆT ĐỐI",
        resultColor: "text-emerald-400",
        illustration: "assets/scenes/Char_2_Scene_12.webp",
        story: "Lời khai chặt chẽ, có logic về camera và công nghệ khiến Hùng tái xanh mặt. Cô giáo thu điện thoại của Hùng kiểm tra và phát hiện hàng loạt ảnh chế nhạy cảm. Công an vào cuộc, Hùng bị đuổi học và chịu án hình sự. Quá đỉnh cao!",
        choices: [{ text: "➔ Chuyển sang Màn 6: Bắt Nạt Học Thuật", nextScene: "linh_man_6" }]
    },

    // ------------------------------------------
    // MÀN 6: BẮT NẠT TRONG BÀI TẬP NHÓM (KẺ ĂN BÁM)
    // ------------------------------------------
    "linh_man_6": {
        charName: "LINH (Cảnh 6: Kẻ Ăn Bám Học Thuật)",
        charColor: "text-sky-400",
        charSprite: "assets/characters/Char_2.webp",
        charEmotion: "think", // 👉 Tính kế giúp bạn bị bóc lột sức lao động
        bgTheme: "border-sky-500/30 bg-slate-900/95",
        story: "Trong bài luận nhóm lấy điểm hệ số 2, My (nhóm trưởng) ép Mai (một bạn hiền lành) phải thức trắng 3 đêm tự làm hết 100% nội dung. My và hội bạn đi xem phim, nhưng lại tự ý điền tên mình vào danh sách làm bài và nhận vơ là mình viết phần khó nhất.",
        choices: [
            { text: "👉 Chạy đi mách Cô giáo ngay lập tức trước giờ nộp bài.", nextScene: "linh_6_sai_a" },
            { text: "👉 Lén lấy USB của My xóa sạch file thuyết trình cho cả nhóm bị điểm 0 luôn.", nextScene: "linh_6_sai_b" },
            { text: "👉 Khoan báo cô vội, nhắn tin vào group nhóm: 'Cậu chia rõ phần việc cho tớ và mọi người đi My, để Mai gánh hết là sao?'.", nextScene: "linh_6_1" }
        ]
    },
    "linh_6_sai_a": {
        charName: "LINH (Cảnh 6: Thất bại)",
        charColor: "text-amber-400",
        charSprite: "assets/characters/Char_2.webp",
        charEmotion: "cry",
        bgTheme: "border-amber-500/50 bg-slate-900/95",
        isResult: true,
        resultTitle: "THẤT BẠI - NÓI CÓ SÁCH MÁCH CHƯA CÓ CHỨNG",
        resultColor: "text-amber-400",
        illustration: "assets/scenes/Char_2_Scene_7.webp",
        story: "Báo cô khi chưa có bằng chứng khiến My chối phăng: 'Linh nói điêu, bọn em gọi điện bàn bài với nhau suốt'. Cả nhóm hùa vào tẩy chay Linh vì tội 'đâm sau lưng'.",
        choices: [{ text: "↺ Làm lại bước này", nextScene: "linh_man_6", isUndo: true }]
    },
    "linh_6_sai_b": {
        charName: "LINH (Cảnh 6: Thất bại)",
        charColor: "text-rose-500",
        charSprite: "assets/characters/Char_2.webp",
        charEmotion: "angry", // 👉 Phẫn nộ xóa file làm hại cả nhóm
        bgTheme: "border-rose-500/80 bg-rose-950/90 animate__shakeX",
        isResult: true,
        resultTitle: "THẤT BẠI - HỦY HOẠI CHÍNH MÌNH",
        resultColor: "text-rose-500",
        illustration: "assets/scenes/Char_2_Scene_13.webp",
        story: "Phá hoại tài sản và bài tập chung khiến công sức 3 đêm thức trắng của Mai đổ sông đổ biển. Linh bị kỷ luật nặng vì hành động thiển cận.",
        choices: [{ text: "↺ Làm lại bước này", nextScene: "linh_man_6", isUndo: true }]
    },

    "linh_6_1": {
        charName: "LINH (Cảnh 6.1: Vỏ Bọc Nhóm Trưởng)",
        charColor: "text-sky-400",
        charSprite: "assets/characters/Char_2.webp",
        charEmotion: "think", // 👉 Tư duy làm Slide thứ 15 để vạch trần
        bgTheme: "border-sky-500/30 bg-slate-900/95",
        story: "My cap lại tin nhắn của Linh, thả 'Haha' rồi rep trơ tráo: 'Con Mai nó tự nguyện làm, nó bảo nó rảnh thì để nó làm. Ý kiến gì thì tự đi mà làm đi'.",
        choices: [
            { text: "👉 Cãi nhau chửi thề um sùm trong group chat với My.", nextScene: "linh_6_1_sai_a" },
            { text: "👉 Cảm thấy bất lực, im lặng chấp nhận số phận điểm chực.", nextScene: "linh_6_1_sai_b" },
            { text: "👉 Cap màn hình tin nhắn đó. Sang nhà Mai phụ làm bài và thêm bí mật một 'Slide thứ 15' ghi rành mạch tỷ lệ đóng góp của từng người.", nextScene: "linh_6_2" }
        ]
    },
    "linh_6_1_sai_a": {
        charName: "LINH (Cảnh 6.1: Thất bại)",
        charColor: "text-rose-500",
        charSprite: "assets/characters/Char_2.webp",
        charEmotion: "angry", // 👉 Chửi thề um sùm trong group
        bgTheme: "border-rose-500/80 bg-rose-950/90 animate__shakeX",
        isResult: true,
        resultTitle: "THẤT BẠI - VÔ TÌNH LÀM TAY SAI",
        resultColor: "text-rose-500",
        illustration: "assets/scenes/Char_2_Scene_5.webp",
        story: "Chửi bới trong group giúp My có cớ bêu rếu Linh là đứa toxic không ai muốn hợp tác. Mai vẫn phải còng lưng làm bài.",
        choices: [{ text: "↺ Làm lại bước này", nextScene: "linh_6_1", isUndo: true }]
    },
    "linh_6_1_sai_b": {
        charName: "LINH (Cảnh 6.1: Thất bại)",
        charColor: "text-amber-400",
        charSprite: "assets/characters/Char_2.webp",
        charEmotion: "cry",
        bgTheme: "border-amber-500/50 bg-slate-900/95",
        isResult: true,
        resultTitle: "THẤT BẠI - ĐỒNG LÕA BÓC LỘT",
        resultColor: "text-amber-400",
        illustration: "assets/scenes/Char_2_Scene_11.webp",
        story: "Im lặng hưởng thụ thành quả lao động của Mai khiến bạn không khác gì My. Bạn đang đánh mất đi tư duy phản biện và kỹ năng làm việc thực tế.",
        choices: [{ text: "↺ Làm lại bước này", nextScene: "linh_6_1", isUndo: true }]
    },

    // 🌟 [GAME LINH 6]: QTE - PHẢN XẠ BẤM CHUYỂN SLIDE 15 TRƯỚC KHI MY TẮT MÁY
    "linh_6_2": {
        charName: "LINH (Cảnh 6.2: Ngày Thuyết Trình)",
        charColor: "text-sky-400",
        charSprite: "assets/characters/Char_2.webp",
        charEmotion: "think", // 👉 Phản xạ nhanh tay bấm chuyển sang Slide thứ 15
        sfx: "sfx_heartbeat",
        bgTheme: "border-sky-500/30 bg-slate-900/95",
        story: "Giờ báo cáo, My ăn mặc lộng lẫy lên bục thuyết trình thao thao bất tuyệt dựa trên Slide Mai viết. Đến Slide thứ 14, My kết luận: 'Bài này do em lên ý tưởng và viết chính, cảm ơn Cô đã lắng nghe'. My đang với tay định tắt máy chiếu!",
        
        minigame: {
            type: "qte",
            duration: 3.5,
            title: "LẬT MẶT KẺ ĂN BÁM",
            description: "My sắp tắt máy chiếu! Có 3.5 giây phản xạ bấm ngay hành động THÔNG MINH NHẤT để vạch trần trước Cô!",
            qteOptions: [
              { text: "ĐỨNG PHẮT DẬY GÀO LÊN MY NÓI DỐI", correct: false },
              { text: "CÚI MẶT SỢ HÃI ĐỂ MY TẮT MÁY", correct: false },
              { text: "XIN KHOAN TẮT VÀ BẤM CHUYỂN SANG SLIDE THỨ 15", correct: true }
            ],
            successScene: "linh_6_3",
            failScene: "linh_6_2_sai_b"
        },

        choices: [
            { text: "👉 Đứng phắt dậy ngắt lời: 'Cô ơi bạn My nói dối, bạn ấy chẳng làm gì cả!'.", nextScene: "linh_6_2_sai_a" },
            { text: "👉 Sợ My trả thù nên cúi mặt xuống không dám bấm qua Slide thứ 15.", nextScene: "linh_6_2_sai_b" },
            { text: "👉 Mỉm cười đứng lên: 'Xin My khoan tắt máy. Bài thuyết trình còn Slide thứ 15 - Bảng đánh giá năng lực nhóm'. (Bấm chuyển Slide).", nextScene: "linh_6_3" }
        ]
    },
    "linh_6_2_sai_a": {
        charName: "LINH (Cảnh 6.2: Thất bại)",
        charColor: "text-rose-500",
        charSprite: "assets/characters/Char_2.webp",
        charEmotion: "angry", // 👉 Gào lên giữa lớp gây mất trật tự
        bgTheme: "border-rose-500/80 bg-rose-950/90 animate__shakeX",
        isResult: true,
        resultTitle: "THẤT BẠI - PHÁ VỠ KỶ LUẬT LỚP",
        resultColor: "text-rose-500",
        illustration: "assets/scenes/Char_2_Scene_13.webp",
        story: "Cắt ngang lời bạn và la hét trong giờ học khiến Cô giáo nổi giận. Cả nhóm bị phạt vì không có sự thống nhất kỷ luật.",
        choices: [{ text: "↺ Làm lại bước này", nextScene: "linh_6_2", isUndo: true }]
    },
    "linh_6_2_sai_b": {
        charName: "LINH (Cảnh 6.2: Thất bại)",
        charColor: "text-amber-400",
        charSprite: "assets/characters/Char_2.webp",
        charEmotion: "cry",
        bgTheme: "border-amber-500/50 bg-slate-900/95",
        isResult: true,
        resultTitle: "THẤT BẠI - ĐÁNH RƠI SỰ CAN ĐẢM",
        resultColor: "text-amber-400",
        illustration: "assets/scenes/Char_2_Scene_9.webp",
        story: "Chuẩn bị kỹ lưỡng nhưng phút chót lại bỏ cuộc. Bạn tự chôn vùi công sức của mình và Mai, dâng vinh quang cho kẻ lười biếng.",
        choices: [{ text: "↺ Làm lại bước này", nextScene: "linh_6_2", isUndo: true }]
    },

    "linh_6_3": {
        charName: "LINH (Cảnh 6.3: Lật Mặt Trên Bục Giảng)",
        charColor: "text-sky-400",
        charSprite: "assets/characters/Char_2.webp",
        charEmotion: "think", // 👉 Dùng bằng chứng công nghệ lịch sử edit Docs để làm rõ
        bgTheme: "border-sky-500/30 bg-slate-900/95",
        story: "Slide 15 hiện lên rõ ràng: Mai 70%, Linh 30%, My 0%. Cả lớp ồ lên. My đỏ bừng mặt, lắp bắp: 'Thưa cô con Linh nó chơi xấu ghép slide giả, tối qua em làm chung với tụi nó mà'.",
        choices: [
            { text: "👉 Cười đểu: 'Mày thề độc đi My, làm gì có bằng chứng tao ghép'.", nextScene: "linh_6_3_sai_a" },
            { text: "👉 Rụt rè: 'Dạ... do bạn My không tham gia nên em tự đánh giá vậy ạ'.", nextScene: "linh_6_3_sai_b" },
            { text: "👉 Bật màn hình máy chiếu, mở trực tiếp File Group Chat: 'Dạ đây là lịch sử chat và Google Docs ghi rõ lịch sử chỉnh sửa tài liệu chỉ có email của em và Mai ạ'.", nextScene: "linh_6_thanh_cong" }
        ]
    },
    "linh_6_3_sai_a": {
        charName: "LINH (Cảnh 6.3: Thất bại)",
        charColor: "text-rose-500",
        charSprite: "assets/characters/Char_2.webp",
        charEmotion: "angry", // 👉 Cười đểu thách thức kiêu ngạo
        bgTheme: "border-rose-500/80 bg-rose-950/90 animate__shakeX",
        isResult: true,
        resultTitle: "THẤT BẠI - THÁI ĐỘ KIÊU NGẠO",
        resultColor: "text-rose-500",
        illustration: "assets/scenes/Char_2_Scene_7.webp",
        story: "Thách thức suông không thay thế được bằng chứng. Sự ngạo mạn trên bục giảng làm giảm đi tính thuyết phục của Linh.",
        choices: [{ text: "↺ Làm lại bước này", nextScene: "linh_6_3", isUndo: true }]
    },
    "linh_6_3_sai_b": {
        charName: "LINH (Cảnh 6.3: Thất bại)",
        charColor: "text-amber-400",
        charSprite: "assets/characters/Char_2.webp",
        charEmotion: "cry",
        bgTheme: "border-amber-500/50 bg-slate-900/95",
        isResult: true,
        resultTitle: "THẤT BẠI - LỜI NÓI THIẾU TRỌNG LƯỢNG",
        resultColor: "text-amber-400",
        illustration: "assets/scenes/Char_2_Scene_11.webp",
        story: "Không đưa ra được bằng chứng sắc bén, Cô giáo đành cho cả nhóm điểm trung bình vì 'không biết phối hợp nhóm'.",
        choices: [{ text: "↺ Làm lại bước này", nextScene: "linh_6_3", isUndo: true }]
    },
    "linh_6_thanh_cong": {
        charName: "LINH (Kết Quả Màn 6)",
        charColor: "text-emerald-400",
        charSprite: "assets/characters/Char_2.webp",
        charEmotion: "victory", // 👉 Nụ cười chiến thắng đắc thắng
        bgTheme: "border-sky-500/80 bg-teal-950/90 animate__pulse",
        isResult: true,
        resultTitle: "THÀNH CÔNG - HẠ ĐO VÁN KẺ LƯỜI BIẾNG",
        resultColor: "text-emerald-400",
        illustration: "assets/scenes/Char_2_Scene_12.webp",
        story: "Lịch sử chỉnh sửa Google Docs là bằng chứng đanh thép không thể chối cãi. My bị 0 điểm môn Văn và bị kiểm điểm. Linh và Mai nhận điểm 10 tuyệt đối. Sự thật và công nghệ luôn bảo vệ người chăm chỉ!",
        choices: [{ text: "➔ Chuyển sang Màn 7: Khởi Xướng Chiến Dịch", nextScene: "linh_man_7" }]
    },

    // ------------------------------------------
    // MÀN 7: CHIẾN DỊCH HỌC ĐƯỜNG (CÚ CHỐT)
    // ------------------------------------------
    "linh_man_7": {
        charName: "LINH (Cảnh 7: Ý Tưởng Chống Bạo Lực)",
        charColor: "text-sky-400",
        charSprite: "assets/characters/Char_2.webp",
        charEmotion: "think", // 👉 Tư duy chiến lược xây dựng Hòm thư ẩn danh
        bgTheme: "border-sky-500/30 bg-slate-900/95",
        story: "Sau bao biến cố, Đoàn trường tìm Linh để xin ý kiến xây dựng phong trào 'Nói không với Bạo Lực'. Linh nhận ra nếu chỉ giải quyết từng vụ thì không bao giờ hết, trường cần một hệ thống bảo vệ học sinh lâu dài.",
        choices: [
            { text: "👉 Đề xuất quy định 'Không Khoan Nhượng': Ai vi phạm 1 lần là lập tức đuổi học vĩnh viễn.", nextScene: "linh_7_sai_a" },
            { text: "👉 Làm một 'Bảng Phong Thần' dán ảnh những đứa hay bắt nạt lên bảng tin trường để mọi người xa lánh.", nextScene: "linh_7_sai_b" },
            { text: "👉 Đề xuất lập 'Hòm thư điện tử ẩn danh' có mã xác thực học sinh để nạn nhân dám lên tiếng mà không sợ bị trả thù.", nextScene: "linh_7_1" }
        ]
    },
    "linh_7_sai_a": {
        charName: "LINH (Cảnh 7: Thất bại)",
        charColor: "text-amber-400",
        charSprite: "assets/characters/Char_2.webp",
        charEmotion: "cry",
        bgTheme: "border-amber-500/50 bg-slate-900/95",
        isResult: true,
        resultTitle: "THẤT BẠI - ÁP LỰC CỰC ĐOAN",
        resultColor: "text-amber-400",
        illustration: "assets/scenes/Char_2_Scene_11.webp",
        story: "Quy định quá tàn khốc không giúp giáo dục mà chỉ làm học sinh sợ hãi bao che cho nhau kỹ hơn. Mục đích của nhà trường là cảm hóa, không phải loại trừ tàn nhẫn.",
        choices: [{ text: "↺ Suy ngẫm và thử lại", nextScene: "linh_man_7", isUndo: true }]
    },
    "linh_7_sai_b": {
        charName: "LINH (Cảnh 7: Thất bại)",
        charColor: "text-rose-500",
        charSprite: "assets/characters/Char_2.webp",
        charEmotion: "angry", // 👉 Dùng bạo lực tinh thần bôi nhọ người khác
        bgTheme: "border-rose-500/80 bg-rose-950/90 animate__shakeX",
        isResult: true,
        resultTitle: "THẤT BẠI - BẠN ĐANG TRỞ THÀNH KẺ BẮT NẠT",
        resultColor: "text-rose-500",
        illustration: "assets/scenes/Char_2_Scene_5.webp",
        story: "Bôi nhọ danh dự người khác bằng 'Bảng Phong Thần' chính là một hành vi bạo lực tinh thần kinh khủng nhất. Bạn đang lấy cái ác để dập cái ác.",
        choices: [{ text: "↺ Làm lại bước này", nextScene: "linh_man_7", isUndo: true }]
    },

    // 🌟 [GAME LINH 7]: FIREWALL - LỌC GÓI DDOS BẢO VỆ HÒM THƯ ẨN DANH
    "linh_7_1": {
        charName: "LINH (Cảnh 7.1: Thử Thách Ẩn Danh)",
        charColor: "text-sky-400",
        charSprite: "assets/characters/Char_2.webp",
        charEmotion: "think", // 👉 Giữ sự điềm tĩnh lọc rác bảo vệ hệ thống Hòm thư
        sfx: "sfx_heartbeat",
        bgTheme: "border-sky-500/30 bg-slate-900/95",
        story: "Hệ thống Hòm thư vừa ra mắt đã bị nhóm cá biệt tổng tấn công. Bọn chúng dùng mail rác gửi hàng trăm tin nhắn ảo trêu chọc, chửi bới hệ thống để phá sập web.",
        
        minigame: {
            type: "firewall",
            duration: 7,
            target: 7,
            title: "TƯỜNG LỬA BẢO VỆ",
            description: "Băng nhóm đang gửi spam rác! CHỈ ĐƯỢC BẤM XÓA các gói 'SPAM / DDOS (Màu Đỏ)'. Tuyệt đối ĐỂ NGUYÊN cho 'TIN BÁO CÁO THẬT (Màu Xanh)' đi qua!",
            successScene: "linh_7_2",
            failScene: "linh_7_1_sai_b"
        },

        choices: [
            { text: "👉 Nản chí, đề nghị Thầy cô đóng luôn hệ thống vì bọn nó quá đáng.", nextScene: "linh_7_1_sai_a" },
            { text: "👉 Đăng bài chửi lộn với bọn phá hoại trên page trường.", nextScene: "linh_7_1_sai_b" },
            { text: "👉 Đề xuất Thầy IT nâng cấp: Chỉ duyệt báo cáo gửi từ Email đuôi @truong.edu.vn của nhà trường cấp, nhưng tên người gửi sẽ được mã hóa an toàn.", nextScene: "linh_7_2" }
        ]
    },
    "linh_7_1_sai_a": {
        charName: "LINH (Cảnh 7.1: Thất bại)",
        charColor: "text-amber-400",
        charSprite: "assets/characters/Char_2.webp",
        charEmotion: "cry",
        bgTheme: "border-amber-500/50 bg-slate-900/95",
        isResult: true,
        resultTitle: "THẤT BẠI - SỰ ĐẦU HÀNG YẾU ĐUỐI",
        resultColor: "text-amber-400",
        illustration: "assets/scenes/Char_2_Scene_13.webp",
        story: "Đóng cửa hệ thống nghĩa là bạn nhường lại sân chơi cho kẻ ác lộng hành. Ước mơ về một ngôi trường an toàn vụn vỡ từ đây.",
        choices: [{ text: "↺ Làm lại bước này", nextScene: "linh_7_1", isUndo: true }]
    },
    "linh_7_1_sai_b": {
        charName: "LINH (Cảnh 7.1: Thất bại)",
        charColor: "text-rose-500",
        charSprite: "assets/characters/Char_2.webp",
        charEmotion: "angry", // 👉 Đăng bài chửi lộn mất kiểm soát
        bgTheme: "border-rose-500/80 bg-rose-950/90 animate__shakeX",
        isResult: true,
        resultTitle: "THẤT BẠI - RƠI VÀO BẪY KHIÊU KHÍCH",
        resultColor: "text-rose-500",
        illustration: "assets/scenes/Char_2_Scene_7.webp",
        story: "Chửi lộn trên mạng chỉ làm hệ thống của bạn mất đi sự uy tín và nghiêm túc. Kẻ phá hoại đã đạt được mục đích làm bạn mất bình tĩnh.",
        choices: [{ text: "↺ Làm lại bước này", nextScene: "linh_7_1", isUndo: true }]
    },

    "linh_7_2": {
        charName: "LINH (Cảnh 7.2: Lời Cầu Cứu Trong Bóng Tối)",
        charColor: "text-sky-400",
        charSprite: "assets/characters/Char_2.webp",
        charEmotion: "think", // 👉 Tư duy cẩn trọng, xử lý khẩn cấp cuộc gọi hỗ trợ
        bgTheme: "border-sky-500/30 bg-slate-900/95",
        story: "Hệ thống an toàn trở lại. Nửa đêm, Linh (với tư cách admin duyệt tin) nhận được một dòng tin mã hóa: 'Mình không chịu nổi sự nhục nhã này nữa. Sáng mai mình sẽ giải thoát ở sân thượng dãy C...'.",
        choices: [
            { text: "👉 Cap lại tin nhắn up lên Confession kêu gọi mọi người tìm người đang gặp nguy.", nextScene: "linh_7_2_sai_a" },
            { text: "👉 Coi như tin rác trêu chọc vì nghĩ không ai dại dột đi báo trước như thế.", nextScene: "linh_7_2_sai_b" },
            { text: "👉 Gọi ngay đường dây nóng báo Hiệu trưởng và Phòng Tư vấn Tâm lý, nhờ thầy IT check khẩn cấp nguồn email nội bộ đó.", nextScene: "linh_7_3" }
        ]
    },
    "linh_7_2_sai_a": {
        charName: "LINH (Cảnh 7.2: Thất bại)",
        charColor: "text-rose-500",
        charSprite: "assets/characters/Char_2.webp",
        charEmotion: "cry",
        bgTheme: "border-rose-500/80 bg-rose-950/90 animate__shakeX",
        isResult: true,
        resultTitle: "THẤT BẠI - XÂM PHẠM QUYỀN RIÊNG TƯ",
        resultColor: "text-rose-500",
        illustration: "assets/scenes/Char_2_Scene_11.webp",
        story: "Công khai sự yếu đuối của nạn nhân khiến họ cảm thấy bị dồn vào chân tường vì xấu hổ. Sự giúp đỡ sai cách đã đẩy họ xuống vực sâu.",
        choices: [{ text: "↺ Làm lại bước này", nextScene: "linh_7_2", isUndo: true }]
    },
    "linh_7_2_sai_b": {
        charName: "LINH (Cảnh 7.2: Thất bại)",
        charColor: "text-amber-400",
        charSprite: "assets/characters/Char_2.webp",
        charEmotion: "cry",
        bgTheme: "border-amber-500/50 bg-slate-900/95",
        isResult: true,
        resultTitle: "THẤT BẠI - SỰ THỜ Ơ ĐOẠT MẠNG",
        resultColor: "text-amber-400",
        illustration: "assets/scenes/Char_2_Scene_5.webp",
        story: "Sáng hôm sau, một học sinh thực sự đã làm điều dại dột. Linh bị ám ảnh lương tâm cả đời vì đã cầm trên tay chiếc phao cứu sinh nhưng lại vứt bỏ nó.",
        choices: [{ text: "↺ Làm lại bước này", nextScene: "linh_7_2", isUndo: true }]
    },

    "linh_7_3": {
        charName: "LINH (Cảnh 7.3: Phút Giây Sinh Tử)",
        charColor: "text-sky-400",
        charSprite: "assets/characters/Char_2.webp",
        charEmotion: "think", // 👉 Lý trí vững vàng phối hợp với Công an mạng
        bgTheme: "border-sky-500/30 bg-slate-900/95",
        story: "Thầy IT đã tra ra lớp của học sinh đó. Sáng hôm sau, các thầy cô và Linh đã âm thầm đón học sinh đó ngay ở cổng trường, đưa vào phòng tâm lý. Một sinh mạng được cứu vớt. Tuy nhiên, nhóm bắt nạt biết chuyện, chúng thuê người định Hack tung hệ thống để xem ai đã mật báo.",
        choices: [
            { text: "👉 Sợ hãi tự tay xóa sạch toàn bộ dữ liệu máy chủ để phi tang.", nextScene: "linh_7_3_sai_a" },
            { text: "👉 Thuê Hacker bên ngoài tấn công ngược lại máy tính bọn chúng.", nextScene: "linh_7_3_sai_b" },
            { text: "👉 Phối hợp cùng thầy IT khóa hệ thống, sao lưu dữ liệu và chuyển bằng chứng cho An ninh mạng (A05) xử lý tội phạm.", nextScene: "linh_7_thanh_cong" }
        ]
    },
    "linh_7_3_sai_a": {
        charName: "LINH (Cảnh 7.3: Thất bại)",
        charColor: "text-amber-400",
        charSprite: "assets/characters/Char_2.webp",
        charEmotion: "cry",
        bgTheme: "border-amber-500/50 bg-slate-900/95",
        isResult: true,
        resultTitle: "THẤT BẠI - HỦY HOẠI CHỨNG CỨ",
        resultColor: "text-amber-400",
        illustration: "assets/scenes/Char_2_Scene_13.webp",
        story: "Xóa sạch dữ liệu đồng nghĩa với việc các nạn nhân khác mất đi hồ sơ bảo vệ. Bạn vì sợ hãi mà tự tay đập nát công sức xây dựng của cả trường.",
        choices: [{ text: "↺ Làm lại bước này", nextScene: "linh_7_3", isUndo: true }]
    },
    "linh_7_3_sai_b": {
        charName: "LINH (Cảnh 7.3: Thất bại)",
        charColor: "text-rose-500",
        charSprite: "assets/characters/Char_2.webp",
        charEmotion: "angry", // 👉 Thuê hacker vi phạm pháp luật
        bgTheme: "border-rose-500/80 bg-rose-950/90 animate__shakeX",
        isResult: true,
        resultTitle: "THẤT BẠI - VI PHẠM PHÁP LUẬT KHÔNG GIAN MẠNG",
        resultColor: "text-rose-500",
        illustration: "assets/scenes/Char_2_Scene_9.webp",
        story: "Thuê hacker tấn công máy người khác là hành vi tội phạm mạng. Từ một người bảo vệ công lý, Linh tự đưa mình vào vòng lao lý.",
        choices: [{ text: "↺ Làm lại bước này", nextScene: "linh_7_3", isUndo: true }]
    },
    "linh_7_thanh_cong": {
        charName: "LINH (Kết Quả Cuối Cùng)",
        charColor: "text-emerald-400",
        charSprite: "assets/characters/Char_2.webp",
        charEmotion: "victory", // 👉 Chiến thắng vinh quang rực rỡ
        bgTheme: "border-sky-500/80 bg-teal-950/90 animate__pulse",
        isResult: true,
        resultTitle: "CHIẾN THẮNG RỰC RỠ! 🎉",
        resultColor: "text-emerald-400",
        illustration: "assets/scenes/Char_2_Scene_14.webp",
        story: "Hành vi thuê người Hack hệ thống trường học lập tức bị cảnh sát mạng tóm gọn. Cả đường dây bắt nạt bị tống cổ khỏi trường. Hòm thư ẩn danh trở thành tấm khiên vững chắc nhất cho học sinh yếu thế. Bạn đã thực sự tạo ra một 'Lớp Học Hạnh Phúc'!",
        choices: [{ text: "🏆 Chúc mừng bạn hoàn thành Tuyến LINH", nextScene: "RESET_GAME" }]
    }
};