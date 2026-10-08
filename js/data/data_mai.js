// ==========================================
// TUYẾN 1: MAI - NỮ NẠN NHÂN (CẤU TRÚC 7 MÀN ĐA TẦNG - 6 MINI-GAMES)
// Tối ưu 60 FPS | Phối hợp toàn diện 5 Biểu cảm (Normal, Happy, Cry, Angry, Think)
// ==========================================
const DATA_MAI = {
    // ------------------------------------------
    // MÀN 1: BỨC ẢNH CHỤP LÉN TRONG GROUP LỚP
    // ------------------------------------------
    "mai_man_1": {
        charName: "MAI (Cảnh 1: Biến Cố Group Lớp)",
        charColor: "text-emerald-400",
        charSprite: "assets/characters/Char_1.webp",
        charEmotion: "worried",
        bgTheme: "border-emerald-500/30 bg-slate-900/95",
        story: "Tối thứ 7, điện thoại Mai rung liên tục. Mở group chat 'A3 Bất Diệt', Mai sững sờ thấy bức ảnh chụp lén mình đang khóc trong nhà vệ sinh bị chỉnh sửa lố lăng kèm caption: 'Bé suy vãi ò'. Cả lớp đang ồ ạt thả haha và spam sticker chế giễu.",
        choices: [
            { text: "👉 Lập tức inbox cho Cô GVCN: 'Cô ơi bạn Hùng up ảnh bêu rếu em, cô xử lý giúp em với'.", nextScene: "mai_1_sai_a" },
            { text: "👉 Nóng máu, nhắn thẳng vào group chửi: 'Tụi mày bị ảo ma à? Xóa ngay trước khi tao bung bét hết!'.", nextScene: "mai_1_sai_b" },
            { text: "👉 Khoan nhắn gì vội. Nín thở cap màn hình tất cả tin nhắn, người thả haha để lưu bằng chứng trước khi nó bị gỡ.", nextScene: "mai_1_1" }
        ]
    },
    "mai_1_sai_a": {
        charName: "MAI (Cảnh 1: Cú lừa sách giáo khoa)",
        charColor: "text-amber-400",
        charSprite: "assets/characters/Char_1.webp",
        charEmotion: "cry",
        bgTheme: "border-amber-500/50 bg-slate-900/95",
        isResult: true,
        resultTitle: "THẤT BẠI - XỬ LÝ CỒNG KỀNH",
        resultColor: "text-amber-400",
        illustration: "assets/scenes/Char_1_Scene_1.webp",
        story: "Cô GVCN đọc xong liền nhắn thẳng vào group: 'Hùng xóa ảnh! Mai vừa méc cô đây này'. Sự thiếu tinh tế của người lớn khiến Mai lập tức bị cả lớp gắn mác 'đồ mách lẻo', 'búp bê pha lê'. Bạo lực không dừng lại mà chuyển sang tẩy chay ngầm.",
        choices: [{ text: "↺ Suy ngẫm và thử lại Màn 1", nextScene: "mai_man_1", isUndo: true }]
    },
    "mai_1_sai_b": {
        charName: "MAI (Cảnh 1: Mất bình tĩnh)",
        charColor: "text-rose-500",
        charSprite: "assets/characters/Char_1.webp",
        charEmotion: "angry", // 👉 Phẫn nộ vì mất kiểm soát
        bgTheme: "border-rose-500/80 bg-rose-950/90 animate__shakeX",
        isResult: true,
        resultTitle: "THẤT BẠI - MẮC BẪY KHIÊU KHÍCH",
        resultColor: "text-rose-500",
        illustration: "assets/scenes/Char_1_Scene_1.webp",
        story: "Kẻ bắt nạt chỉ chờ có thế! Hùng cap lại đoạn chửi thề của Mai, up lên Facebook trường: 'Góc bóc phốt: Nạn nhân hay con nhím độc?'. Mai bị cả trường ném đá vì thái độ toxic. Bạn tự biến mình thành kẻ phản diện.",
        choices: [{ text: "↺ Thử lại Màn 1", nextScene: "mai_man_1", isUndo: true }]
    },

    // [MINI-GAME 1: CLEANER - DẬP TẮT TIN ĐỒN TOXIC]
    "mai_1_1": {
        charName: "MAI (Cảnh 1.1: Trò Đùa Dai Dẳng)",
        charColor: "text-emerald-400",
        charSprite: "assets/characters/Char_1.webp",
        charEmotion: "think", // 👉 Tập trung suy ngẫm giải pháp dập tin đồn
        bgTheme: "border-emerald-500/30 bg-slate-900/95",
        story: "Sau khi cap màn hình an toàn. Mai thấy Hùng tiếp tục tag tên Mai: 'Ủa bé Mai dỗi rồi kìa, ra chuồng gà mà khóc nhé'. Một vài đứa khác bắt đầu bình luận hùa theo cực kỳ khó nghe.",
        
        minigame: {
            type: "cleaner",
            duration: 6,
            target: 7,
            title: "DẬP TẮT TIN ĐỒN",
            description: "Chạm phản xạ thật nhanh vào ít nhất 7 tin nhắn độc hại để Report/Xóa trước khi chúng lan rộng trong group!",
            successScene: "mai_1_2",
            failScene: "mai_1_1_sai_b"
        },

        choices: [
            { text: "👉 Đăng story Facebook chửi đổng: 'Sống lỗi thì coi chừng nghiệp quật nhé lũ khốn'.", nextScene: "mai_1_1_sai_a" },
            { text: "👉 Lẳng lặng Out group lớp, block Facebook thằng Hùng để trốn tránh khỏi đống tin nhắn rác rưởi.", nextScene: "mai_1_1_sai_b" },
            { text: "👉 Inbox nhờ Lan (lớp phó, có tiếng nói nhất lớp) vào group bênh vực để bẻ gãy 'hiệu ứng đám đông'.", nextScene: "mai_1_2" }
        ]
    },
    "mai_1_1_sai_a": {
        charName: "MAI (Cảnh 1.1: Trả đũa mạng)",
        charColor: "text-rose-500",
        charSprite: "assets/characters/Char_1.webp",
        charEmotion: "angry", // 👉 Tức giận chửi bới
        bgTheme: "border-rose-500/80 bg-rose-950/90 animate__shakeX",
        isResult: true,
        resultTitle: "THẤT BẠI - CHÂM DẦU VÀO LỬA",
        resultColor: "text-rose-500",
        illustration: "assets/scenes/Char_1_Scene_7.webp",
        story: "Đăng story chửi đổng vô tình kích hoạt lòng tự ái của cả lớp. Chúng lấy cớ đó để cô lập Mai mạnh tay hơn. Mạng xã hội không bao giờ là nơi giải quyết mâu thuẫn khôn ngoan!",
        choices: [{ text: "↺ Làm lại bước này", nextScene: "mai_1_1", isUndo: true }]
    },
    "mai_1_1_sai_b": {
        charName: "MAI (Cảnh 1.1: Né tránh)",
        charColor: "text-amber-400",
        charSprite: "assets/characters/Char_1.webp",
        charEmotion: "cry",
        bgTheme: "border-amber-500/50 bg-slate-900/95",
        isResult: true,
        resultTitle: "THẤT BẠI - BỎ CHẠY LÀ NHƯỢNG BỘ",
        resultColor: "text-amber-400",
        illustration: "assets/scenes/Char_1_Scene_1.webp",
        story: "Out group khiến Mai mất đi quyền kiểm soát thông tin. Bọn trong lớp càng có cớ để thêu dệt và nói xấu sau lưng Mai mà không ai phản bác. Bạn tự đẩy mình ra khỏi tập thể.",
        choices: [{ text: "↺ Làm lại bước này", nextScene: "mai_1_1", isUndo: true }]
    },

    "mai_1_2": {
        charName: "MAI (Cảnh 1.2: Kẻ Nặc Danh Lên Tiếng)",
        charColor: "text-emerald-400",
        charSprite: "assets/characters/Char_1.webp",
        charEmotion: "think", // 👉 Cân nhắc logic trước bài Confession
        bgTheme: "border-emerald-500/30 bg-slate-900/95",
        story: "Nhờ Lan lên tiếng cứng rắn: 'Đùa nhạt lắm rồi đấy, xóa đi', một số bạn đã dừng lại. Hùng cay cú vì bị quê, liền lập một nick clone (ẩn danh), gửi bài lên trang Confession của trường vu khống Mai là 'trà xanh' cướp bồ.",
        choices: [
            { text: "👉 Dùng nick thật comment cãi tay đôi giải thích dưới bài Confession để mọi người hiểu.", nextScene: "mai_1_2_sai_a" },
            { text: "👉 Bấm nút Report bài viết hàng loạt, hy vọng Facebook tự động xóa bài.", nextScene: "mai_1_2_sai_b" },
            { text: "👉 Cùng Bố Mẹ mang bằng chứng lên gặp thẳng Hiệu trưởng, yêu cầu mời Admin trang Confession lên làm việc.", nextScene: "mai_1_3" }
        ]
    },
    "mai_1_2_sai_a": {
        charName: "MAI (Cảnh 1.2: Vô ích)",
        charColor: "text-rose-500",
        charSprite: "assets/characters/Char_1.webp",
        charEmotion: "angry", // 👉 Cãi vã tay đôi trên mạng
        bgTheme: "border-rose-500/80 bg-rose-950/90 animate__shakeX",
        isResult: true,
        resultTitle: "THẤT BẠI - CUỘC CHIẾN BÀN PHÍM",
        resultColor: "text-rose-500",
        illustration: "assets/scenes/Char_1_Scene_7.webp",
        story: "Giải thích trên mạng chỉ thu hút thêm những kẻ hiếu kỳ 'hóng drama'. Bạn càng cãi, bài viết càng tăng tương tác và nổi lên xu hướng. Đừng đôi co với những kẻ ẩn danh vô hình!",
        choices: [{ text: "↺ Làm lại bước này", nextScene: "mai_1_2", isUndo: true }]
    },
    "mai_1_2_sai_b": {
        charName: "MAI (Cảnh 1.2: Bị động)",
        charColor: "text-amber-400",
        charSprite: "assets/characters/Char_1.webp",
        charEmotion: "cry",
        bgTheme: "border-amber-500/50 bg-slate-900/95",
        isResult: true,
        resultTitle: "THẤT BẠI - TRÔNG CHỜ PHÉP MÀU",
        resultColor: "text-amber-400",
        illustration: "assets/scenes/Char_1_Scene_1.webp",
        story: "Facebook xử lý report rất chậm hoặc thường phớt lờ. Trong lúc chờ đợi, danh dự của Mai đã bị bôi nhọ khắp trường. Kẻ đứng sau vẫn nhởn nhơ cười cợt.",
        choices: [{ text: "↺ Làm lại bước này", nextScene: "mai_1_2", isUndo: true }]
    },

    "mai_1_3": {
        charName: "MAI (Cảnh 1.3: Vạch Trần Sự Thật)",
        charColor: "text-emerald-400",
        charSprite: "assets/characters/Char_1.webp",
        charEmotion: "think", // 👉 Tư duy phản biện rành rọt trước Ban Giám Hiệu
        bgTheme: "border-emerald-500/30 bg-slate-900/95",
        story: "Admin trang Confession bị Hiệu trưởng gọi lên. Tuy nhiên, cậu ta chối phăng: 'Em chỉ duyệt bài qua Google Form ẩn danh, em thề không biết ai là người gửi'. Hùng đứng ngoài cửa phòng BGH nhếch mép cười đắc ý.",
        choices: [
            { text: "👉 Cảm thấy bất lực vì không có chứng cứ, xin bố mẹ rút hồ sơ chuyển trường.", nextScene: "mai_1_3_sai_a" },
            { text: "👉 Chỉ thẳng mặt Hùng: 'Chính mày làm đúng không? Thầy ơi nó đấy!'.", nextScene: "mai_1_3_sai_b" },
            { text: "👉 Yêu cầu Admin mở lịch sử Form trích xuất thời gian gửi, đối chiếu với camera hành lang lúc Hùng cầm điện thoại.", nextScene: "mai_1_thanh_cong" }
        ]
    },
    "mai_1_3_sai_a": {
        charName: "MAI (Cảnh 1.3: Bỏ cuộc)",
        charColor: "text-amber-400",
        charSprite: "assets/characters/Char_1.webp",
        charEmotion: "cry",
        bgTheme: "border-amber-500/50 bg-slate-900/95",
        isResult: true,
        resultTitle: "THẤT BẠI - BỎ CUỘC TRƯỚC VẠCH ĐÍCH",
        resultColor: "text-amber-400",
        illustration: "assets/scenes/Char_1_Scene_11.webp",
        story: "Chuyển trường với một vết nhơ chưa được gột rửa sẽ khiến Mai bị ám ảnh tâm lý mãi mãi. Kẻ ác vĩnh viễn không bị trừng phạt và sẽ tiếp tục hại người khác.",
        choices: [{ text: "↺ Làm lại bước này", nextScene: "mai_1_3", isUndo: true }]
    },
    "mai_1_3_sai_b": {
        charName: "MAI (Cảnh 1.3: Tình ngay lý gian)",
        charColor: "text-rose-500",
        charSprite: "assets/characters/Char_1.webp",
        charEmotion: "angry", // 👉 Nóng giận chỉ trích thiếu chứng cứ
        bgTheme: "border-rose-500/80 bg-rose-950/90 animate__shakeX",
        isResult: true,
        resultTitle: "THẤT BẠI - KẾT TỘI KHÔNG BẰNG CHỨNG",
        resultColor: "text-rose-500",
        illustration: "assets/scenes/Char_1_Scene_13.webp",
        story: "Chỉ trích không có bằng chứng khiến Hùng đóng vai nạn nhân ngược lại: 'Vu khống tao à?'. Mai từ người đúng trở thành kẻ hành xử vô lý trong mắt thầy cô.",
        choices: [{ text: "↺ Làm lại bước này", nextScene: "mai_1_3", isUndo: true }]
    },
    "mai_1_thanh_cong": {
        charName: "MAI (Kết Quả Màn 1)",
        charColor: "text-emerald-400",
        charSprite: "assets/characters/Char_1.webp",
        charEmotion: "victory", // 👉 Nụ cười chiến thắng rực rỡ
        bgTheme: "border-emerald-500/80 bg-teal-950/90 animate__pulse",
        isResult: true,
        resultTitle: "THÀNH CÔNG - BẢN LĨNH & LOGIC",
        resultColor: "text-emerald-400",
        illustration: "assets/scenes/Char_1_Scene_2.webp",
        story: "Dữ liệu thời gian trên Google Form trùng khớp hoàn toàn với lúc Hùng lén lút bấm điện thoại ngoài hành lang bị camera ghi lại. Hùng cạn lời, bị đình chỉ học tập, trang Confession bị đánh sập. Công lý cần một cái đầu lạnh!",
        choices: [{ text: "➔ Chuyển sang Màn 2: Trấn lột tinh vi", nextScene: "mai_man_2" }]
    },

    // ------------------------------------------
    // MÀN 2: TRẤN LỘT & ĐE DỌA (NHÀ XE)
    // ------------------------------------------
    "mai_man_2": {
        charName: "MAI (Cảnh 2: Góc Khuất Nhà Xe)",
        charColor: "text-emerald-400",
        charSprite: "assets/characters/Char_1.webp",
        charEmotion: "worried",
        sfx: "sfx_heartbeat",
        bgTheme: "border-emerald-500/30 bg-slate-900/95",
        story: "Giờ tan học tại nhà để xe tối tăm, một chị đại khối 9 tên Vy chặn xe Mai. Vy nắm cổ áo Mai đe dọa: 'Mai mang 500k nộp quỹ bảo kê, không thì đừng hòng dắt xe ra khỏi trường. Méc ai tao rạch mặt'.",
        choices: [
            { text: "👉 Vứt xe chạy ngược lên phòng Giám thị kêu cứu.", nextScene: "mai_2_sai_a" },
            { text: "👉 Rút điện thoại ra quay phim thẳng mặt Vy để đe dọa lại.", nextScene: "mai_2_sai_b" },
            { text: "👉 Giả vờ run rẩy đồng ý: 'Dạ mai em đưa, chị tha cho em về', để bảo toàn tính mạng lúc đó.", nextScene: "mai_2_1" }
        ]
    },
    "mai_2_sai_a": {
        charName: "MAI (Cảnh 2: Nóng vội)",
        charColor: "text-rose-500",
        charSprite: "assets/characters/Char_1.webp",
        charEmotion: "cry",
        bgTheme: "border-rose-500/80 bg-rose-950/90 animate__shakeX",
        isResult: true,
        resultTitle: "THẤT BẠI - XỬ LÝ THIẾU TÍNH TOÁN",
        resultColor: "text-rose-500",
        illustration: "assets/scenes/Char_1_Scene_3.webp",
        story: "Giám thị chạy xuống nhưng không bắt tận tay được Vy đang cầm tiền. Vy chối phăng. Hôm sau, trên đường đi học về (ngoài trường), Vy kéo hội chặn đánh Mai bầm dập vì tội mách lẻo.",
        choices: [{ text: "↺ Làm lại bước này", nextScene: "mai_man_2", isUndo: true }]
    },
    "mai_2_sai_b": {
        charName: "MAI (Cảnh 2: Nguy hiểm)",
        charColor: "text-amber-400",
        charSprite: "assets/characters/Char_1.webp",
        charEmotion: "cry",
        bgTheme: "border-amber-500/50 bg-slate-900/95",
        isResult: true,
        resultTitle: "THẤT BẠI - MANH ĐỘNG TỰ SÁT",
        resultColor: "text-amber-400",
        illustration: "assets/scenes/Char_1_Scene_5.webp",
        story: "Giơ điện thoại ra khi đang ở thế yếu trong không gian hẹp khiến Vy điên tiết. Vy giật nát điện thoại của Mai, tiện tay tát Mai ngay tại chỗ mà không ai hay biết.",
        choices: [{ text: "↺ Làm lại bước này", nextScene: "mai_man_2", isUndo: true }]
    },

    "mai_2_1": {
        charName: "MAI (Cảnh 2.1: Cuộc Gọi Cầu Cứu)",
        charColor: "text-emerald-400",
        charSprite: "assets/characters/Char_1.webp",
        charEmotion: "think", // 👉 Cân nhắc liên hệ Tổng đài bảo vệ trẻ em 111
        bgTheme: "border-emerald-500/30 bg-slate-900/95",
        story: "Về đến nhà an toàn, Mai định tâm sự với bố mẹ nhưng thấy hai người đang cãi nhau căng thẳng chuyện nợ nần. Mai không dám mở lời báo tin.",
        choices: [
            { text: "👉 Nói dối là cần đóng tiền quỹ lớp để lén xin 500k đưa cho Vy ngày mai.", nextScene: "mai_2_1_sai_a" },
            { text: "👉 Lấy dao rọc giấy bỏ vào balo, quyết tâm ngày mai sống chết với Vy.", nextScene: "mai_2_1_sai_b" },
            { text: "👉 Gọi điện thoại ẩn danh cho Tổng đài Bảo vệ Trẻ em (111) xin tư vấn cách giăng bẫy bắt quả tang.", nextScene: "mai_2_2" }
        ]
    },
    "mai_2_1_sai_a": {
        charName: "MAI (Cảnh 2.1: Trượt dốc)",
        charColor: "text-amber-400",
        charSprite: "assets/characters/Char_1.webp",
        charEmotion: "cry",
        bgTheme: "border-amber-500/50 bg-slate-900/95",
        isResult: true,
        resultTitle: "THẤT BẠI - CÁI HỐ KHÔNG ĐÁY",
        resultColor: "text-amber-400",
        illustration: "assets/scenes/Char_1_Scene_3.webp",
        story: "Nộp tiền không bao giờ làm kẻ ác dừng lại. Tuần sau, Vy đòi 1 triệu. Mai rơi vào trầm cảm vì vừa sợ hãi trên trường, vừa lừa dối bòn rút tiền của gia đình.",
        choices: [{ text: "↺ Làm lại bước này", nextScene: "mai_2_1", isUndo: true }]
    },
    "mai_2_1_sai_b": {
        charName: "MAI (Cảnh 2.1: Cực đoan)",
        charColor: "text-rose-500",
        charSprite: "assets/characters/Char_1.webp",
        charEmotion: "angry", // 👉 Cực đoan, muốn mang hung khí trả thù
        bgTheme: "border-rose-500/80 bg-rose-950/90 animate__shakeX",
        isResult: true,
        resultTitle: "THẤT BẠI - TỰ ĐÀO MỒ CHÔN MÌNH",
        resultColor: "text-rose-500",
        illustration: "assets/scenes/Char_1_Scene_5.webp",
        story: "Mang hung khí đến trường là vi phạm pháp luật hình sự. Dù chưa kịp rút ra, Mai bị bạn mách, Giám thị xét cặp phát hiện và đuổi học ngay lập tức.",
        choices: [{ text: "↺ Làm lại bước này", nextScene: "mai_2_1", isUndo: true }]
    },

    // [MINI-GAME 2: TIMING - CHỚP THỜI CƠ GHI HÌNH]
    "mai_2_2": {
        charName: "MAI (Cảnh 2.2: Kế Hoạch Hoàn Hảo)",
        charColor: "text-emerald-400",
        charSprite: "assets/characters/Char_1.webp",
        charEmotion: "think", // 👉 Giữ sự bình tĩnh tuyệt đối để giăng bẫy
        sfx: "sfx_heartbeat",
        bgTheme: "border-emerald-500/30 bg-slate-900/95",
        story: "Được tổng đài 111 tư vấn, Mai báo bí mật cho thầy Giám thị. Thầy dặn: 'Cứ mang một xấp tiền lẻ bọc polyme ra đúng chỗ hẹn, thầy sẽ nấp ở góc quay video'. Hôm sau, Vy xuất hiện giật lấy xấp tiền.",
        
        minigame: {
            type: "timing",
            duration: 8,
            target: 3,
            title: "CHỚP THỜI CƠ GHI ÂM",
            description: "Canh chuẩn xác thời điểm bấm nút GHI HÌNH đúng lúc con trỏ đi qua vùng sáng mục tiêu 3 lần liên tiếp!",
            successScene: "mai_2_3",
            failScene: "mai_2_2_sai_a"
        },

        choices: [
            { text: "👉 Bỏ chạy thục mạng khi Vy vừa chạm tay vào tiền.", nextScene: "mai_2_2_sai_a" },
            { text: "👉 Hét to lên: 'Trảo tao tiền đây con ăn cướp!' để gây chú ý.", nextScene: "mai_2_2_sai_b" },
            { text: "👉 Cố tình nói to rành mạch: 'Em nộp 500k tiền bảo kê tháng này như chị ép buộc rồi nhé, chị đếm đi'.", nextScene: "mai_2_3" }
        ]
    },
    "mai_2_2_sai_a": {
        charName: "MAI (Cảnh 2.2: Thiếu logic)",
        charColor: "text-amber-400",
        charSprite: "assets/characters/Char_1.webp",
        charEmotion: "cry",
        bgTheme: "border-amber-500/50 bg-slate-900/95",
        isResult: true,
        resultTitle: "THẤT BẠI - BẰNG CHỨNG MƠ HỒ",
        resultColor: "text-amber-400",
        illustration: "assets/scenes/Char_1_Scene_11.webp",
        story: "Chạy quá nhanh khiến clip thầy Giám thị quay không ghi lại được âm thanh đe dọa. Vy lật lọng chối là 'Em thấy Mai làm rơi tiền nên nhặt dùm thôi'.",
        choices: [{ text: "↺ Làm lại bước này", nextScene: "mai_2_2", isUndo: true }]
    },
    "mai_2_2_sai_b": {
        charName: "MAI (Cảnh 2.2: Bứt dây động rừng)",
        charColor: "text-rose-500",
        charSprite: "assets/characters/Char_1.webp",
        charEmotion: "angry", // 👉 La hét kích động làm bứt dây động rừng
        bgTheme: "border-rose-500/80 bg-rose-950/90 animate__shakeX",
        isResult: true,
        resultTitle: "THẤT BẠI - MẤT BÌNH TĨNH",
        resultColor: "text-rose-500",
        illustration: "assets/scenes/Char_1_Scene_13.webp",
        story: "La hét quá sớm khiến Vy nhận ra có bẫy, vứt tiền xuống cống và bỏ chạy trước khi thầy Giám thị kịp có bằng chứng rõ ràng.",
        choices: [{ text: "↺ Làm lại bước này", nextScene: "mai_2_2", isUndo: true }]
    },

    "mai_2_3": {
        charName: "MAI (Cảnh 2.3: Lời Điêu Trá Cuối Cùng)",
        charColor: "text-emerald-400",
        charSprite: "assets/characters/Char_1.webp",
        charEmotion: "normal",
        bgTheme: "border-emerald-500/30 bg-slate-900/95",
        story: "Thầy Giám thị bước ra bắt quả tang. Vy tái mặt nhưng rất ranh mãnh, òa khóc diễn kịch: 'Thầy ơi em bị oan, con Mai nó mượn tiền em từ tháng trước, nay em tới đòi nợ chứ em có biết bảo kê gì đâu!'.",
        choices: [
            { text: "👉 Uất ức quá, lao vào túm áo Vy: 'Mày là con lừa đảo, dám đổi trắng thay đen!'.", nextScene: "mai_2_3_sai_a" },
            { text: "👉 Khóc lóc giải thích yếu ớt: 'Thầy ơi bạn ấy xạo đó, thầy phải tin em'.", nextScene: "mai_2_3_sai_b" },
            { text: "👉 Bình tĩnh mở điện thoại: 'Thầy mở ghi âm cuộc gọi em bật tự động hôm qua sẽ rõ ai nợ tiền ai'.", nextScene: "mai_2_thanh_cong" }
        ]
    },
    "mai_2_3_sai_a": {
        charName: "MAI (Cảnh 2.3: Nóng giận)",
        charColor: "text-rose-500",
        charSprite: "assets/characters/Char_1.webp",
        charEmotion: "angry", // 👉 Lao vào túm áo vì phẫn nộ
        bgTheme: "border-rose-500/80 bg-rose-950/90 animate__shakeX",
        isResult: true,
        resultTitle: "THẤT BẠI - RƠI VÀO BẪY KHIÊU KHÍCH",
        resultColor: "text-rose-500",
        illustration: "assets/scenes/Char_1_Scene_13.webp",
        story: "Chỉ một hành động túm áo thiếu kiểm soát trước mặt thầy giáo, Mai lập tức bị quy tội hành hung bạn học. Vy thành công biến mình thành nạn nhân.",
        choices: [{ text: "↺ Làm lại bước này", nextScene: "mai_2_3", isUndo: true }]
    },
    "mai_2_3_sai_b": {
        charName: "MAI (Cảnh 2.3: Yếu thế)",
        charColor: "text-amber-400",
        charSprite: "assets/characters/Char_1.webp",
        charEmotion: "cry",
        bgTheme: "border-amber-500/50 bg-slate-900/95",
        isResult: true,
        resultTitle: "THẤT BẠI - LỜI NÓI KHÔNG TRỌNG LƯỢNG",
        resultColor: "text-amber-400",
        illustration: "assets/scenes/Char_1_Scene_11.webp",
        story: "Không có bằng chứng thép, vụ án rơi vào ngõ cụt 'tình ngay lý gian'. Vy chỉ bị phạt cảnh cáo nhẹ còn Mai tiếp tục sống trong nơm nớp lo sợ bị trả thù.",
        choices: [{ text: "↺ Làm lại bước này", nextScene: "mai_2_3", isUndo: true }]
    },
    "mai_2_thanh_cong": {
        charName: "MAI (Kết Quả Màn 2)",
        charColor: "text-emerald-400",
        charSprite: "assets/characters/Char_1.webp",
        charEmotion: "victory", // 👉 Nụ cười chiến thắng đắc thắng
        bgTheme: "border-emerald-500/80 bg-teal-950/90 animate__pulse",
        isResult: true,
        resultTitle: "THÀNH CÔNG - HẠ ĐO VÁN BẰNG CHỨNG",
        resultColor: "text-emerald-400",
        illustration: "assets/scenes/Char_1_Scene_4.webp",
        story: "Đoạn ghi âm cuộc gọi đe dọa hôm trước là mảnh ghép hoàn hảo kết hợp với video bắt quả tang. Vy hết đường chối cãi và bị đưa lên Công an phường xử lý hình sự vì tội cưỡng đoạt tài sản. Quá bản lĩnh!",
        choices: [{ text: "➔ Chuyển sang Màn 3: Bạo Lực Thể Chất", nextScene: "mai_man_3" }]
    },

    // ------------------------------------------
    // MÀN 3: BẠO LỰC THỂ CHẤT (HÀNH LANG)
    // ------------------------------------------
    "mai_man_3": {
        charName: "MAI (Cảnh 3: Bạo Lực Hành Lang)",
        charColor: "text-emerald-400",
        charSprite: "assets/characters/Char_1.webp",
        charEmotion: "worried",
        sfx: "sfx_heartbeat",
        bgTheme: "border-emerald-500/30 bg-slate-900/95",
        story: "Trên đường ra canteen, Mai bị nhóm của Thảo dồn vào góc hành lang vắng. 2 đứa giữ chặt tay Mai, Thảo đứng trước giơ tay chuẩn bị tát để con bạn quay clip đăng TikTok câu view.",
        choices: [
            { text: "👉 Khóc lóc van xin các bạn tha cho mình.", nextScene: "mai_3_sai_a" },
            { text: "👉 Chửi rủa: 'Mày ngon thì đánh tao đi, tao méc bố mẹ tao!'.", nextScene: "mai_3_sai_b" },
            { text: "👉 Bất ngờ cắn mạnh vào tay đứa đang giữ mình, vùng vẫy la hét thật to để thoát ra.", nextScene: "mai_3_1" }
        ]
    },
    "mai_3_sai_a": {
        charName: "MAI (Cảnh 3: Cam chịu)",
        charColor: "text-amber-400",
        charSprite: "assets/characters/Char_1.webp",
        charEmotion: "cry",
        bgTheme: "border-amber-500/50 bg-slate-900/95",
        isResult: true,
        resultTitle: "THẤT BẠI - SỰ YẾU ĐUỐI THẢM HẠI",
        resultColor: "text-amber-400",
        illustration: "assets/scenes/Char_1_Scene_5.webp",
        story: "Sự van xin chỉ làm tăng thú tính của kẻ bắt nạt. Thảo tát Mai liên tiếp. Đoạn clip Mai khóc lóc nhục nhã bị phát tán rộng rãi khiến Mai tổn thương tâm lý trầm trọng.",
        choices: [{ text: "↺ Làm lại bước này", nextScene: "mai_man_3", isUndo: true }]
    },
    "mai_3_sai_b": {
        charName: "MAI (Cảnh 3: Thách thức)",
        charColor: "text-rose-500",
        charSprite: "assets/characters/Char_1.webp",
        charEmotion: "angry", // 👉 Thách thức chửi rủa khi ở thế yếu
        bgTheme: "border-rose-500/80 bg-rose-950/90 animate__shakeX",
        isResult: true,
        resultTitle: "THẤT BẠI - KÍCH THÍCH BẠO LỰC",
        resultColor: "text-rose-500",
        illustration: "assets/scenes/Char_1_Scene_5.webp",
        story: "Lời thách thức khiến Thảo điên tiết, dùng giày đạp mạnh vào bụng Mai. Trong hoàn cảnh yếu thế hoàn toàn, khiêu khích đối thủ là quyết định thiếu an toàn nhất.",
        choices: [{ text: "↺ Làm lại bước này", nextScene: "mai_man_3", isUndo: true }]
    },

    // [MINI-GAME 3: TAP-TAP - CHẠY NƯỚC RÚT]
    "mai_3_1": {
        charName: "MAI (Cảnh 3.1: Cuộc Đuổi Bắt)",
        charColor: "text-emerald-400",
        charSprite: "assets/characters/Char_1.webp",
        charEmotion: "think", // 👉 Canh đường chạy về nơi có camera
        sfx: "sfx_heartbeat",
        bgTheme: "border-emerald-500/30 bg-slate-900/95",
        story: "Đứa bị cắn la oai oái và buông tay. Mai vùng chạy được một đoạn nhưng luống cuống nên bị vấp ngã. Nhóm Thảo lao tới đuổi kịp, định túm tóc Mai kéo lại.",
        
        minigame: {
            type: "taptap",
            duration: 5,
            target: 30,
            title: "CHẠY NƯỚC RÚT",
            description: "Nhấp liên tục tốc độ cao vào nút hành động để bứt tốc thoát khỏi nhóm Thảo trước khi hết giờ!",
            successScene: "mai_3_2",
            failScene: "mai_3_1_sai_a"
        },

        choices: [
            { text: "👉 Nằm gục xuống sàn nhắm mắt chịu trận vì nghĩ không thoát được nữa.", nextScene: "mai_3_1_sai_a" },
            { text: "👉 Vớ lấy cục gạch ở bồn cây gần đó phang thẳng vào đầu Thảo.", nextScene: "mai_3_1_sai_b" },
            { text: "👉 Trườn nhanh tới bám vào lan can cầu thang (nơi có camera), gào lên: 'CHÁY! CÓ CHÁY KÌA!'.", nextScene: "mai_3_2" }
        ]
    },
    "mai_3_1_sai_a": {
        charName: "MAI (Cảnh 3.1: Bỏ cuộc)",
        charColor: "text-amber-400",
        charSprite: "assets/characters/Char_1.webp",
        charEmotion: "cry",
        bgTheme: "border-amber-500/50 bg-slate-900/95",
        isResult: true,
        resultTitle: "THẤT BẠI - TUYỆT VỌNG",
        resultColor: "text-amber-400",
        illustration: "assets/scenes/Char_1_Scene_5.webp",
        story: "Nằm chờ đòn nghĩa là bạn đã tự bỏ rơi chính mình. Mai bị túm tóc lôi ngược lại và chịu một trận đòn hội đồng tàn nhẫn.",
        choices: [{ text: "↺ Làm lại bước này", nextScene: "mai_3_1", isUndo: true }]
    },
    "mai_3_1_sai_b": {
        charName: "MAI (Cảnh 3.1: Mất kiểm soát)",
        charColor: "text-rose-500",
        charSprite: "assets/characters/Char_1.webp",
        charEmotion: "angry", // 👉 Nóng giận dùng gạch trả đũa
        bgTheme: "border-rose-500/80 bg-rose-950/90 animate__shakeX",
        isResult: true,
        resultTitle: "THẤT BẠI - VI PHẠM PHÁP LUẬT",
        resultColor: "text-rose-500",
        illustration: "assets/scenes/Char_1_Scene_13.webp",
        story: "Đập gạch vào đầu người khác là hành vi cố ý gây thương tích nghiêm trọng. Thảo bị chảy máu nhập viện, Mai từ nạn nhân biến thành thủ phạm hình sự.",
        choices: [{ text: "↺ Làm lại bước này", nextScene: "mai_3_1", isUndo: true }]
    },

    "mai_3_2": {
        charName: "MAI (Cảnh 3.2: Đám Đông Chú Ý)",
        charColor: "text-emerald-400",
        charSprite: "assets/characters/Char_1.webp",
        charEmotion: "normal",
        bgTheme: "border-emerald-500/30 bg-slate-900/95",
        story: "Tiếng la 'Cháy' cực lớn đánh động tâm lý sợ hãi, khiến học sinh các lớp lân cận chạy ào ra hành lang xem. Nhóm Thảo giật mình lùi lại vì thấy đông người.",
        choices: [
            { text: "👉 Lợi dụng lúc lộn xộn, lén chạy thục mạng về lớp trốn, không dám nói với ai.", nextScene: "mai_3_2_sai_a" },
            { text: "👉 Ngồi bệt tại chỗ khóc ăn vạ, la lối 'Nó đánh tao'.", nextScene: "mai_3_2_sai_b" },
            { text: "👉 Lách qua đám đông, chạy thẳng vào phòng Giám thị gần đó, đẩy cửa vào và chốt lại.", nextScene: "mai_3_3" }
        ]
    },
    "mai_3_2_sai_a": {
        charName: "MAI (Cảnh 3.2: Trốn tránh)",
        charColor: "text-amber-400",
        charSprite: "assets/characters/Char_1.webp",
        charEmotion: "cry",
        bgTheme: "border-amber-500/50 bg-slate-900/95",
        isResult: true,
        resultTitle: "THẤT BẠI - HIỂM HỌA RÌNH RẬP",
        resultColor: "text-amber-400",
        illustration: "assets/scenes/Char_1_Scene_1.webp",
        story: "Trốn về lớp không giải quyết được nguồn gốc vấn đề. Nhóm Thảo biết Mai hèn nhát nên tan học đã tổ chức chặn cổng trường để trả thù dữ dội hơn.",
        choices: [{ text: "↺ Làm lại bước này", nextScene: "mai_3_2", isUndo: true }]
    },
    "mai_3_2_sai_b": {
        charName: "MAI (Cảnh 3.2: Mất bình tĩnh)",
        charColor: "text-rose-500",
        charSprite: "assets/characters/Char_1.webp",
        charEmotion: "angry", // 👉 Ăn vạ, la lối khóc lóc mất kiểm soát
        bgTheme: "border-rose-500/80 bg-rose-950/90 animate__shakeX",
        isResult: true,
        resultTitle: "THẤT BẠI - HÌNH ẢNH MÉO MÓ",
        resultColor: "text-rose-500",
        illustration: "assets/scenes/Char_1_Scene_11.webp",
        story: "Ăn vạ giữa đám đông khi chưa có vết thương rõ ràng khiến mọi người nghĩ Mai đang diễn kịch làm lố. Nhóm Thảo nhân cơ hội nói Mai bị 'thần kinh'.",
        choices: [{ text: "↺ Làm lại bước này", nextScene: "mai_3_2", isUndo: true }]
    },

    "mai_3_3": {
        charName: "MAI (Cảnh 3.3: Lời Khai Quyết Định)",
        charColor: "text-emerald-400",
        charSprite: "assets/characters/Char_1.webp",
        charEmotion: "think", // 👉 Nhớ lại tọa độ camera để chỉ điểm
        bgTheme: "border-emerald-500/30 bg-slate-900/95",
        story: "Trong phòng Giám thị, thầy đang ngơ ngác hỏi: 'Em làm sao thế? Có chuyện gì mà ngoài kia nhốn nháo lên vậy?'. Qua khe cửa sổ, Mai thấy Thảo đang lượn lờ dòm vào, giơ nắm đấm dằn mặt.",
        choices: [
            { text: "👉 Sợ Thảo trả thù, Mai cúi mặt: 'Dạ không có gì, em trượt chân ngã thôi ạ'.", nextScene: "mai_3_3_sai_a" },
            { text: "👉 Nói vống lên: 'Bạn Thảo mang dao định giết em thầy ơi!'.", nextScene: "mai_3_3_sai_b" },
            { text: "👉 Chỉ tay thẳng ra cửa sổ: 'Bạn Thảo và 2 bạn kia chặn đánh em ở hành lang B. Thầy trích xuất camera góc đó ngay bây giờ sẽ thấy rõ ạ!'.", nextScene: "mai_3_thanh_cong" }
        ]
    },
    "mai_3_3_sai_a": {
        charName: "MAI (Cảnh 3.3: Hèn nhát)",
        charColor: "text-amber-400",
        charSprite: "assets/characters/Char_1.webp",
        charEmotion: "cry",
        bgTheme: "border-amber-500/50 bg-slate-900/95",
        isResult: true,
        resultTitle: "THẤT BẠI - TỰ TƯỚC QUYỀN BẢO VỆ",
        resultColor: "text-amber-400",
        illustration: "assets/scenes/Char_1_Scene_11.webp",
        story: "Cơ hội tốt nhất để tố cáo kẻ ác đã bị Mai bỏ lỡ vì nỗi sợ hãi nhất thời. Thảo cười đắc ý bỏ đi và sự ức hiếp sẽ tiếp tục diễn ra trong bóng tối.",
        choices: [{ text: "↺ Làm lại bước này", nextScene: "mai_3_3", isUndo: true }]
    },
    "mai_3_3_sai_b": {
        charName: "MAI (Cảnh 3.3: Nói dối)",
        charColor: "text-rose-500",
        charSprite: "assets/characters/Char_1.webp",
        charEmotion: "cry",
        bgTheme: "border-rose-500/80 bg-rose-950/90 animate__shakeX",
        isResult: true,
        resultTitle: "THẤT BẠI - LỜI KHAI THIẾU TRUNG THỰC",
        resultColor: "text-rose-500",
        illustration: "assets/scenes/Char_1_Scene_13.webp",
        story: "Thầy Giám thị check camera không thấy có dao. Sự thổi phồng sự thật của Mai bị quy thành tội 'Vu khống bạn học'. Mai mất đi sự tín nhiệm của giáo viên.",
        choices: [{ text: "↺ Làm lại bước này", nextScene: "mai_3_3", isUndo: true }]
    },
    "mai_3_thanh_cong": {
        charName: "MAI (Kết Quả Màn 3)",
        charColor: "text-emerald-400",
        charSprite: "assets/characters/Char_1.webp",
        charEmotion: "victory", // 👉 Nụ cười chiến thắng
        bgTheme: "border-emerald-500/80 bg-teal-950/90 animate__pulse",
        isResult: true,
        resultTitle: "THÀNH CÔNG - SỰ BÌNH TĨNH CỨU MẠNG",
        resultColor: "text-emerald-400",
        illustration: "assets/scenes/Char_1_Scene_6.webp",
        story: "Camera hành lang ghi lại trọn vẹn cảnh Thảo dồn ép và có ý định đánh Mai. Việc chỉ đích danh và cung cấp mốc thời gian giúp Giám thị xử lý triệt để nhóm Thảo. Sự thông minh, dũng cảm đã cứu Mai một bàn thua trông thấy!",
        choices: [{ text: "➔ Chuyển sang Màn 4: Tẩy chay trong bài Tập Nhóm", nextScene: "mai_man_4" }]
    },

    // ------------------------------------------
    // MÀN 4: TẨY CHAY (BÀI TẬP NHÓM)
    // ------------------------------------------
    "mai_man_4": {
        charName: "MAI (Cảnh 4: Nỗi Đau Hắt Hủi)",
        charColor: "text-emerald-400",
        charSprite: "assets/characters/Char_1.webp",
        charEmotion: "worried",
        bgTheme: "border-emerald-500/30 bg-slate-900/95",
        story: "Môn Văn yêu cầu chia nhóm 5 người. Do bị 'trưởng nhóm quyền lực' trong lớp lan truyền nói xấu, không ai chịu nhận Mai. Cuối cùng Cô giáo phải ép nhóm của My nhận Mai. Ngay tối đó, My lập một group Zalo mới không add Mai để bàn bài.",
        choices: [
            { text: "👉 Khóc lóc xin Cô cho làm bài 1 mình vì 'các bạn không thích em'.", nextScene: "mai_4_sai_a" },
            { text: "👉 Đăng Facebook: 'Làm việc nhóm mà tính toxic thì có cái nịt nhé'.", nextScene: "mai_4_sai_b" },
            { text: "👉 Nhắn tin trực tiếp cho My: 'Mình được cô phân vào nhóm, bạn chia phần nội dung cho mình làm nhé'.", nextScene: "mai_4_1" }
        ]
    },
    "mai_4_sai_a": {
        charName: "MAI (Cảnh 4: Trốn tránh)",
        charColor: "text-amber-400",
        charSprite: "assets/characters/Char_1.webp",
        charEmotion: "cry",
        bgTheme: "border-amber-500/50 bg-slate-900/95",
        isResult: true,
        resultTitle: "THẤT BẠI - SỰ NHƯỢNG BỘ ĐÁNG THƯƠNG",
        resultColor: "text-amber-400",
        illustration: "assets/scenes/Char_1_Scene_7.webp",
        story: "Tách ra làm một mình nghĩa là Mai chấp nhận bị tẩy chay và đánh mất kỹ năng hòa nhập. Nhóm My đạt điểm cao và hả hê vì đã loại bỏ thành công 'kẻ đáng ghét'.",
        choices: [{ text: "↺ Làm lại bước này", nextScene: "mai_man_4", isUndo: true }]
    },
    "mai_4_sai_b": {
        charName: "MAI (Cảnh 4: Khịa mạng)",
        charColor: "text-rose-500",
        charSprite: "assets/characters/Char_1.webp",
        charEmotion: "angry", // 👉 Đăng status chửi đổng toxic
        bgTheme: "border-rose-500/80 bg-rose-950/90 animate__shakeX",
        isResult: true,
        resultTitle: "THẤT BẠI - TỰ TẠO SỰ THÙ GHÉT",
        resultColor: "text-rose-500",
        illustration: "assets/scenes/Char_1_Scene_7.webp",
        story: "Dòng status đá đểu biến Mai thành kẻ hẹp hòi. My chụp màn hình gửi Cô giáo, đóng vai nạn nhân bảo 'Bạn Mai chưa làm gì đã lên mạng chửi bọn em'. Mai bị Cô khiển trách.",
        choices: [{ text: "↺ Làm lại bước này", nextScene: "mai_man_4", isUndo: true }]
    },

    "mai_4_1": {
        charName: "MAI (Cảnh 4.1: Sự Ép Buộc Ác Ý)",
        charColor: "text-emerald-400",
        charSprite: "assets/characters/Char_1.webp",
        charEmotion: "normal",
        bgTheme: "border-emerald-500/30 bg-slate-900/95",
        story: "My seen tin nhắn rất lâu rồi rep một cách trịch thượng: 'Bọn tao làm xong hết nội dung rồi, mày không cần làm gì đâu, đến hôm đó lên đứng bấm slide cho bọn tao là được'.",
        choices: [
            { text: "👉 Thấy nhàn quá nên gật đầu đồng ý luôn, đỡ phải thức đêm làm bài.", nextScene: "mai_4_1_sai_a" },
            { text: "👉 Tức giận chửi lại: 'Mày coi thường tao à con kia? Tao không thèm'.", nextScene: "mai_4_1_sai_b" },
            { text: "👉 Lịch sự đáp: 'Mình sẽ tự chuẩn bị một phần nội dung độc lập và gửi email nhóm. Điểm của mình mình tự chịu trách nhiệm'.", nextScene: "mai_4_2" }
        ]
    },
    "mai_4_1_sai_a": {
        charName: "MAI (Cảnh 4.1: Ham lợi nhỏ)",
        charColor: "text-amber-400",
        charSprite: "assets/characters/Char_1.webp",
        charEmotion: "cry",
        bgTheme: "border-amber-500/50 bg-slate-900/95",
        isResult: true,
        resultTitle: "THẤT BẠI - SẬP BẪY 'KẺ ĂN BÁM'",
        resultColor: "text-amber-400",
        illustration: "assets/scenes/Char_1_Scene_11.webp",
        story: "Ngày thuyết trình, My công khai báo cáo trước Cô giáo: 'Mai không làm bất cứ gì thưa cô'. Cả lớp cười ồ lên khinh bỉ. Mai lãnh trọn điểm 0 và sự nhục nhã ê chề.",
        choices: [{ text: "↺ Làm lại bước này", nextScene: "mai_4_1", isUndo: true }]
    },
    "mai_4_1_sai_b": {
        charName: "MAI (Cảnh 4.1: Mất bình tĩnh)",
        charColor: "text-rose-500",
        charSprite: "assets/characters/Char_1.webp",
        charEmotion: "angry", // 👉 Chửi lại qua tin nhắn
        bgTheme: "border-rose-500/80 bg-rose-950/90 animate__shakeX",
        isResult: true,
        resultTitle: "THẤT BẠI - HÀNH XỬ THIẾU VĂN MINH",
        resultColor: "text-rose-500",
        illustration: "assets/scenes/Char_1_Scene_13.webp",
        story: "My tiếp tục dùng đoạn chat chửi bới này làm bằng chứng nói Mai vô văn hóa, không ai muốn hợp tác chung. Lỗ hổng cảm xúc khiến bạn luôn ở cửa dưới.",
        choices: [{ text: "↺ Làm lại bước này", nextScene: "mai_4_1", isUndo: true }]
    },

    "mai_4_2": {
        charName: "MAI (Cảnh 4.2: Tẩy Chay Hiện Thực)",
        charColor: "text-emerald-400",
        charSprite: "assets/characters/Char_1.webp",
        charEmotion: "think", // 👉 Cân nhắc tự lưu bản in riêng dự phòng
        bgTheme: "border-emerald-500/30 bg-slate-900/95",
        story: "Mai thức khuya hoàn thành một phần phân tích rất xuất sắc và gửi qua mail cho My. Tuy nhiên, đến ngày thuyết trình, khi file bật lên, Mai phát hiện My đã cố tình XÓA SẠCH phần nội dung và tên của Mai trên Slide.",
        choices: [
            { text: "👉 Uất ức phát khóc ngay giữa lớp, chạy ào ra ngoài.", nextScene: "mai_4_2_sai_a" },
            { text: "👉 Đứng trơ ra như phỗng, nhắm mắt cắn răng đứng bấm slide cho tụi nó nói.", nextScene: "mai_4_2_sai_b" },
            { text: "👉 Điềm tĩnh bước lên bục, cầm theo bản in giấy cứng hoặc điện thoại để tự thuyết trình phần mình.", nextScene: "mai_4_3" }
        ]
    },
    "mai_4_2_sai_a": {
        charName: "MAI (Cảnh 4.2: Sụp đổ)",
        charColor: "text-rose-500",
        charSprite: "assets/characters/Char_1.webp",
        charEmotion: "cry",
        bgTheme: "border-rose-500/80 bg-rose-950/90 animate__shakeX",
        isResult: true,
        resultTitle: "THẤT BẠI - NHƯỢNG BỘ NƯỚC MẮT",
        resultColor: "text-rose-500",
        illustration: "assets/scenes/Char_1_Scene_1.webp",
        story: "Giọt nước mắt của bạn là chiến thắng của kẻ thao túng. Mai bị nhận 0 điểm vì vắng mặt không lý do giữa buổi kiểm tra. Nỗi uất ức không được giải quyết.",
        choices: [{ text: "↺ Làm lại bước này", nextScene: "mai_4_2", isUndo: true }]
    },
    "mai_4_2_sai_b": {
        charName: "MAI (Cảnh 4.2: Nhẫn nhịn)",
        charColor: "text-amber-400",
        charSprite: "assets/characters/Char_1.webp",
        charEmotion: "cry",
        bgTheme: "border-amber-500/50 bg-slate-900/95",
        isResult: true,
        resultTitle: "THẤT BẠI - KẺ NÔ LỆ",
        resultColor: "text-amber-400",
        illustration: "assets/scenes/Char_1_Scene_11.webp",
        story: "Bạn đã chấp nhận vào vai một kẻ hầu hạ hèn nhát đúng như kịch bản của My. Công sức của bạn đổ sông đổ bể và bạn tự chà đạp lên lòng tự tôn của chính mình.",
        choices: [{ text: "↺ Làm lại bước này", nextScene: "mai_4_2", isUndo: true }]
    },

    "mai_4_3": {
        charName: "MAI (Cảnh 4.3: Khoảnh Khắc Lật Ngược)",
        charColor: "text-emerald-400",
        charSprite: "assets/characters/Char_1.webp",
        charEmotion: "normal",
        bgTheme: "border-emerald-500/30 bg-slate-900/95",
        story: "Thấy Mai tự tin thuyết trình không cần slide chung. Cô giáo nhíu mày hỏi: 'Ủa sao phần của Mai cô không thấy trên màn hình và trong danh sách nhóm?'. My đứng kế bên tủm tỉm cười đắc ý.",
        choices: [
            { text: "👉 Dằn mặt My: 'Tại bạn My chơi dơ, cố tình xóa phần em cô ạ'.", nextScene: "mai_4_3_sai_a" },
            { text: "👉 Lúng túng bao che: 'Dạ... chắc file bị lỗi nên mất cô ạ'.", nextScene: "mai_4_3_sai_b" },
            { text: "👉 Cười nhẹ đáp: 'Dạ chắc các bạn chốt file gấp nên quên phần em. Em đã in sẵn bản báo cáo hoàn chỉnh gửi Cô xem rồi ạ'.", nextScene: "mai_4_thanh_cong" }
        ]
    },
    "mai_4_3_sai_a": {
        charName: "MAI (Cảnh 4.3: Chỉ trích cá nhân)",
        charColor: "text-rose-500",
        charSprite: "assets/characters/Char_1.webp",
        charEmotion: "angry", // 👉 Dằn mặt cãi vã giữa buổi thuyết trình
        bgTheme: "border-rose-500/80 bg-rose-950/90 animate__shakeX",
        isResult: true,
        resultTitle: "THẤT BẠI - ẢNH HƯỞNG TIẾT HỌC",
        resultColor: "text-rose-500",
        illustration: "assets/scenes/Char_1_Scene_13.webp",
        story: "Cãi vã, chỉ trích cá nhân giữa buổi báo cáo thể hiện sự thiếu chuyên nghiệp. Cô giáo không quan tâm ai đúng ai sai, chỉ thấy nhóm làm mất thời gian và cho cả nhóm điểm kém.",
        choices: [{ text: "↺ Làm lại bước này", nextScene: "mai_4_3", isUndo: true }]
    },
    "mai_4_3_sai_b": {
        charName: "MAI (Cảnh 4.3: Bao che)",
        charColor: "text-amber-400",
        charSprite: "assets/characters/Char_1.webp",
        charEmotion: "cry",
        bgTheme: "border-amber-500/50 bg-slate-900/95",
        isResult: true,
        resultTitle: "THẤT BẠI - SỰ NHÂN NHƯỢNG VÔ LÝ",
        resultColor: "text-amber-400",
        illustration: "assets/scenes/Char_1_Scene_11.webp",
        story: "Bao che cho kẻ bắt nạt là tự chôn vùi công lý của mình. My hả hê vì sự hèn nhát của Mai và tiếp tục coi thường Mai trong các dịp sau.",
        choices: [{ text: "↺ Làm lại bước này", nextScene: "mai_4_3", isUndo: true }]
    },
    "mai_4_thanh_cong": {
        charName: "MAI (Kết Quả Màn 4)",
        charColor: "text-emerald-400",
        charSprite: "assets/characters/Char_1.webp",
        charEmotion: "victory", // 👉 Chiến thắng nụ cười tự tin
        bgTheme: "border-emerald-500/80 bg-teal-950/90 animate__pulse",
        isResult: true,
        resultTitle: "THÀNH CÔNG - SỰ CHUYÊN NGHIỆP TỎA SÁNG",
        resultColor: "text-emerald-400",
        illustration: "assets/scenes/Char_1_Scene_8.webp",
        story: "Câu trả lời thông minh, vừa bảo vệ được thành quả cá nhân, vừa không gây mất trật tự lớp. Cô giáo đánh giá rất cao bản in của Mai. Nhóm của My tự thấy bẽ mặt vì trò trẻ con đê hèn của mình. Mai đạt điểm cao nhất lớp!",
        choices: [{ text: "➔ Chuyển sang Màn 5: Miệt thị Ngoại hình", nextScene: "mai_man_5" }]
    },

    // ------------------------------------------
    // MÀN 5: BODY SHAMING (MIỆT THỊ NGOẠI HÌNH)
    // ------------------------------------------
    "mai_man_5": {
        charName: "MAI (Cảnh 5: Bức Ảnh Chế Giễu)",
        charColor: "text-emerald-400",
        charSprite: "assets/characters/Char_1.webp",
        charEmotion: "cry",
        bgTheme: "border-emerald-500/30 bg-slate-900/95",
        story: "Mai có vóc dáng hơi tròn trịa. Gần đây, nhóm nam sinh hay gọi Mai là 'Bé Heo'. Đỉnh điểm là hôm nay, chúng in một bức hình ghép mặt Mai vào thân một con heo mập đang ăn cám, dán chình ình lên bảng đen.",
        choices: [
            { text: "👉 Khóc lén lút, vội vàng xé bức ảnh vứt đi rồi giả vờ như không có gì.", nextScene: "mai_5_sai_a" },
            { text: "👉 Lấy bút đỏ vẽ bậy bạ lên mặt mấy đứa con trai để trả thù.", nextScene: "mai_5_sai_b" },
            { text: "👉 Khoan gỡ vội, lấy điện thoại chụp lại tấm ảnh trên bảng và ghi âm tiếng cợt nhả của bọn chúng.", nextScene: "mai_5_1" }
        ]
    },
    "mai_5_sai_a": {
        charName: "MAI (Cảnh 5: Chịu đựng)",
        charColor: "text-amber-400",
        charSprite: "assets/characters/Char_1.webp",
        charEmotion: "cry",
        bgTheme: "border-amber-500/50 bg-slate-900/95",
        isResult: true,
        resultTitle: "THẤT BẠI - NUỐT NƯỚC MẮT VÀO TRONG",
        resultColor: "text-amber-400",
        illustration: "assets/scenes/Char_1_Scene_9.webp",
        story: "Sự đau khổ âm thầm của bạn chính là phần thưởng của kẻ bắt nạt. Việc vứt ảnh đi tiêu hủy luôn cả bằng chứng, khiến Mai ôm nỗi tự ti tột độ, dẫn đến việc nhịn ăn cực đoan gây suy nhược cơ thể.",
        choices: [{ text: "↺ Làm lại bước này", nextScene: "mai_man_5", isUndo: true }]
    },
    "mai_5_sai_b": {
        charName: "MAI (Cảnh 5: Lấy độc trị độc)",
        charColor: "text-rose-500",
        charSprite: "assets/characters/Char_1.webp",
        charEmotion: "angry", // 👉 Phẫn nộ vẽ bậy bạ trả đũa
        bgTheme: "border-rose-500/80 bg-rose-950/90 animate__shakeX",
        isResult: true,
        resultTitle: "THẤT BẠI - TRỞ THÀNH KẺ XẤU",
        resultColor: "text-rose-500",
        illustration: "assets/scenes/Char_1_Scene_13.webp",
        story: "Body shaming lại người khác không làm bạn đẹp hơn. Lớp học biến thành cái chợ chửi bới ngoại hình lẫn nhau. Hành vi này hoàn toàn làm mất đi sự tôn trọng của thầy cô dành cho bạn.",
        choices: [{ text: "↺ Làm lại bước này", nextScene: "mai_man_5", isUndo: true }]
    },

    // [MINI-GAME 4: HOLD - GỒNG TÂM LÝ GIỮ BÌNH TĨNH]
    "mai_5_1": {
        charName: "MAI (Cảnh 5.1: Đối Diện Đám Đông)",
        charColor: "text-emerald-400",
        charSprite: "assets/characters/Char_1.webp",
        charEmotion: "think", // 👉 Suy tính cách lật ngược bài thuyết trình
        sfx: "sfx_heartbeat",
        bgTheme: "border-emerald-500/30 bg-slate-900/95",
        story: "Hôm sau có tiết thuyết trình môn Giáo dục Công dân chủ đề 'Tôn trọng người khác'. Lên bục giảng, Mai bất ngờ chiếu chính bức ảnh con heo ghép mặt mình lên màn hình lớn. Cả lớp ồ lên, cười khúc khích.",
        
        minigame: {
            type: "hold",
            duration: 7,
            title: "GIỮ BÌNH TĨNH",
            description: "Nhấn GIỮ CHẶT nút hành động để gồng thanh tâm lý lên 100%, kiên cường vượt qua tiếng cười cợt của lớp!",
            successScene: "mai_5_2",
            failScene: "mai_5_1_sai_a"
        },

        choices: [
            { text: "👉 Xấu hổ quá, giọng run rẩy rồi òa khóc chạy xuống chỗ.", nextScene: "mai_5_1_sai_a" },
            { text: "👉 Đập bàn quát lớn: 'Bọn mày im hết đi, có gì đáng cười hả lũ vô học?'.", nextScene: "mai_5_1_sai_b" },
            { text: "👉 Mỉm cười, chờ lớp cười xong rồi rành rọt nói: 'Đây là tác phẩm mình nhận được hôm qua. Các bạn thấy hài hước đúng không?'.", nextScene: "mai_5_2" }
        ]
    },
    "mai_5_1_sai_a": {
        charName: "MAI (Cảnh 5.1: Sụp đổ)",
        charColor: "text-amber-400",
        charSprite: "assets/characters/Char_1.webp",
        charEmotion: "cry",
        bgTheme: "border-amber-500/50 bg-slate-900/95",
        isResult: true,
        resultTitle: "THẤT BẠI - ĐÁNH MẤT SỰ TỰ TIN",
        resultColor: "text-amber-400",
        illustration: "assets/scenes/Char_1_Scene_11.webp",
        story: "Cú vấp ngã tâm lý khiến Mai không thể hoàn thành bài thi. Đám đông vô tâm tiếp tục coi Mai là trò tiêu khiển yếu ớt.",
        choices: [{ text: "↺ Làm lại bước này", nextScene: "mai_5_1", isUndo: true }]
    },
    "mai_5_1_sai_b": {
        charName: "MAI (Cảnh 5.1: Kích động)",
        charColor: "text-rose-500",
        charSprite: "assets/characters/Char_1.webp",
        charEmotion: "angry", // 👉 Đập bàn quát tháo phẫn nộ
        bgTheme: "border-rose-500/80 bg-rose-950/90 animate__shakeX",
        isResult: true,
        resultTitle: "THẤT BẠI - PHÁ HOẠI TIẾT HỌC",
        resultColor: "text-rose-500",
        illustration: "assets/scenes/Char_1_Scene_13.webp",
        story: "Sự tức giận đã phá hỏng bài thuyết trình. Việc chửi thề trên bục giảng trước mặt giáo viên khiến Mai bị mời ra ngoài và nhận hạnh kiểm kém.",
        choices: [{ text: "↺ Làm lại bước này", nextScene: "mai_5_1", isUndo: true }]
    },

    "mai_5_2": {
        charName: "MAI (Cảnh 5.2: Phản Đòn Bằng Trí Tuệ)",
        charColor: "text-emerald-400",
        charSprite: "assets/characters/Char_1.webp",
        charEmotion: "normal",
        bgTheme: "border-emerald-500/30 bg-slate-900/95",
        story: "Sự bình tĩnh kỳ lạ của Mai khiến cả lớp im bặt, ngơ ngác. Không gian chùng xuống.",
        choices: [
            { text: "👉 Chuyển sang than thở: 'Tại vì mình xấu nên luôn bị xã hội chà đạp...'.", nextScene: "mai_5_2_sai_a" },
            { text: "👉 Chỉ thẳng mặt thằng đã ghép ảnh: 'Thằng Tuấn kia, mày đứng lên xin lỗi tao ngay!'.", nextScene: "mai_5_2_sai_b" },
            { text: "👉 Tiếp tục thuyết trình: 'Nhưng đằng sau nụ cười này là tội danh Làm nhục người khác theo Điều 155 Bộ luật Hình sự. Body shaming không phải là một trò đùa'.", nextScene: "mai_5_3" }
        ]
    },
    "mai_5_2_sai_a": {
        charName: "MAI (Cảnh 5.2: Bi lụy)",
        charColor: "text-amber-400",
        charSprite: "assets/characters/Char_1.webp",
        charEmotion: "cry",
        bgTheme: "border-amber-500/50 bg-slate-900/95",
        isResult: true,
        resultTitle: "THẤT BẠI - TỰ HẠ THẤP BẢN THÂN",
        resultColor: "text-amber-400",
        illustration: "assets/scenes/Char_1_Scene_9.webp",
        story: "Đừng bao giờ xin sự thương hại từ những kẻ bắt nạt. Việc tự chê bai bản thân chỉ khiến giá trị của bạn tiếp tục lao dốc.",
        choices: [{ text: "↺ Làm lại bước này", nextScene: "mai_5_2", isUndo: true }]
    },
    "mai_5_2_sai_b": {
        charName: "MAI (Cảnh 5.2: Công kích)",
        charColor: "text-rose-500",
        charSprite: "assets/characters/Char_1.webp",
        charEmotion: "angry", // 👉 Chỉ thẳng mặt quát tháo
        bgTheme: "border-rose-500/80 bg-rose-950/90 animate__shakeX",
        isResult: true,
        resultTitle: "THẤT BẠI - LẠC ĐỀ MÔN HỌC",
        resultColor: "text-rose-500",
        illustration: "assets/scenes/Char_1_Scene_13.webp",
        story: "Biến bục giảng thành nơi đòi nợ cá nhân làm mất đi sự tôn nghiêm của tiết học. Bạn đã để cảm xúc chi phối hoàn toàn lý trí.",
        choices: [{ text: "↺ Làm lại bước này", nextScene: "mai_5_2", isUndo: true }]
    },

    "mai_5_3": {
        charName: "MAI (Cảnh 5.3: Lời Cảnh Tỉnh)",
        charColor: "text-emerald-400",
        charSprite: "assets/characters/Char_1.webp",
        charEmotion: "angry", // 👉 Ánh mắt sắc lẹm, dứt khoát dằn mặt kẻ xúc phạm
        bgTheme: "border-emerald-500/30 bg-slate-900/95",
        story: "Tuấn (đứa ghép ảnh) tái mặt tột độ, đứng lên ấp úng cãi cùn: 'Làm gì căng thế, tao giỡn xíu thôi mà, có làm gì mày đâu'.",
        choices: [
            { text: "👉 'Giỡn cái đầu mày, tao gọi công an bắt mày!'.", nextScene: "mai_5_3_sai_a" },
            { text: "👉 Quay sang cầu cứu Cô giáo: 'Cô ơi bạn ấy còn cãi kìa, cô phạt bạn ấy đi'.", nextScene: "mai_5_3_sai_b" },
            { text: "👉 Ánh mắt sắc lẹm, đáp trả: 'Ranh giới giữa ĐÙA và VÔ VĂN HÓA nằm ở sự đồng thuận. Mình không thấy vui, nên nó là bạo lực!'.", nextScene: "mai_5_thanh_cong" }
        ]
    },
    "mai_5_3_sai_a": {
        charName: "MAI (Cảnh 5.3: Đe dọa rỗng)",
        charColor: "text-rose-500",
        charSprite: "assets/characters/Char_1.webp",
        charEmotion: "angry", // 👉 Chửi thề đe dọa kém sang
        bgTheme: "border-rose-500/80 bg-rose-950/90 animate__shakeX",
        isResult: true,
        resultTitle: "THẤT BẠI - NGÔN TỪ KÉM SANG",
        resultColor: "text-rose-500",
        illustration: "assets/scenes/Char_1_Scene_7.webp",
        story: "Việc chửi bậy và đe dọa không thực tế làm mất đi toàn bộ khí chất và sự trưởng thành mà Mai vừa cất công xây dựng.",
        choices: [{ text: "↺ Làm lại bước này", nextScene: "mai_5_3", isUndo: true }]
    },
    "mai_5_3_sai_b": {
        charName: "MAI (Cảnh 5.3: Dựa dẫm)",
        charColor: "text-amber-400",
        charSprite: "assets/characters/Char_1.webp",
        charEmotion: "cry",
        bgTheme: "border-amber-500/50 bg-slate-900/95",
        isResult: true,
        resultTitle: "THẤT BẠI - ĐÁNH MẤT UY LỰC",
        resultColor: "text-amber-400",
        illustration: "assets/scenes/Char_1_Scene_11.webp",
        story: "Hãy tự kết thúc trận chiến mà mình làm chủ. Việc vội vàng núp bóng giáo viên khiến sức mạnh phản biện của Mai giảm sút trầm trọng.",
        choices: [{ text: "↺ Làm lại bước này", nextScene: "mai_5_3", isUndo: true }]
    },
    "mai_5_thanh_cong": {
        charName: "MAI (Kết Quả Màn 5)",
        charColor: "text-emerald-400",
        charSprite: "assets/characters/Char_1.webp",
        charEmotion: "victory", // 👉 Nụ cười kiêu hãnh chiến thắng
        bgTheme: "border-emerald-500/80 bg-teal-950/90 animate__pulse",
        isResult: true,
        resultTitle: "THÀNH CÔNG - SỨC MẠNH CỦA TRI THỨC",
        resultColor: "text-emerald-400",
        illustration: "assets/scenes/Char_1_Scene_10.webp",
        story: "Cả lớp vỗ tay rầm rộ. Tuấn xấu hổ cúi gầm mặt không dám nói thêm lời nào. Cô giáo cho Mai 10 điểm tuyệt đối vì phần liên hệ thực tế xuất sắc. Khi bạn trân trọng bản thân, người khác tự khắc phải học cách tôn trọng bạn!",
        choices: [{ text: "➔ Chuyển sang Màn 6: Bẫy Vu Khống", nextScene: "mai_man_6" }]
    },

    // ------------------------------------------
    // MÀN 6: VU KHỐNG ĂN CẮP (GÀI BẪY)
    // ------------------------------------------
    "mai_man_6": {
        charName: "MAI (Cảnh 6: Hiện Trường Bị Cài Cắm)",
        charColor: "text-emerald-400",
        charSprite: "assets/characters/Char_1.webp",
        charEmotion: "worried",
        sfx: "sfx_heartbeat",
        bgTheme: "border-emerald-500/30 bg-slate-900/95",
        story: "Hết giờ Thể dục, cả lớp lên phòng. Một con bé hotgirl la toáng lên: 'Mất cái iPhone 15 Promax rồi!'. Nó cùng đám bạn lao thẳng xuống chỗ Mai: 'Hồi nãy tao thấy Mai lảng vảng ở đây. Lục cặp nó nhanh!'.",
        choices: [
            { text: "👉 Sợ quá nên tự mở toang balo ra để chứng minh sự trong sạch.", nextScene: "mai_6_sai_a" },
            { text: "👉 Giằng co, chửi bới không cho đứa nào đụng vào cặp mình.", nextScene: "mai_6_sai_b" },
            { text: "👉 Nắm chặt quai cặp, lùi lại và dõng dạc nói: 'Các cậu không có quyền khám cặp mình. Hãy mời Cô Giám thị lên đây'.", nextScene: "mai_6_1" }
        ]
    },
    "mai_6_sai_a": {
        charName: "MAI (Cảnh 6: Mắc bẫy)",
        charColor: "text-rose-500",
        charSprite: "assets/characters/Char_1.webp",
        charEmotion: "cry",
        bgTheme: "border-rose-500/80 bg-rose-950/90 animate__shakeX",
        isResult: true,
        resultTitle: "THẤT BẠI - SẬP KẾ ĐIỆU HỔ LY SƠN",
        resultColor: "text-rose-500",
        illustration: "assets/scenes/Char_1_Scene_11.webp",
        story: "Vừa mở cặp ra, chiếc iPhone 15 rơi ngay xuống đất. Mai chết đứng. Cả lớp ồ lên chỉ trích. Bằng chứng rành rành khiến Mai không thể cãi được lời nào.",
        choices: [{ text: "↺ Làm lại bước này", nextScene: "mai_man_6", isUndo: true }]
    },
    "mai_6_sai_b": {
        charName: "MAI (Cảnh 6: Kích động)",
        charColor: "text-amber-400",
        charSprite: "assets/characters/Char_1.webp",
        charEmotion: "angry", // 👉 Giằng co cãi bới kích động
        bgTheme: "border-amber-500/50 bg-slate-900/95",
        isResult: true,
        resultTitle: "THẤT BẠI - TÌNH NGAY LÝ GIAN",
        resultColor: "text-amber-400",
        illustration: "assets/scenes/Char_1_Scene_13.webp",
        story: "Sự giằng co hoảng loạn bị đám đông quy chụp là 'Có tật giật mình nên mới không dám cho khám cặp'. Mai rơi vào thế bị động và mất hình ảnh tồi tệ.",
        choices: [{ text: "↺ Làm lại bước này", nextScene: "mai_man_6", isUndo: true }]
    },

    // [MINI-GAME 5: QTE - PHẢN XẠ SINH TỬ KHÔNG CHẠM VÂN TAY]
    "mai_6_1": {
        charName: "MAI (Cảnh 6.1: Khủng Hoảng Tâm Lý)",
        charColor: "text-emerald-400",
        charSprite: "assets/characters/Char_1.webp",
        charEmotion: "think", // 👉 Nhảy bén phản xạ tránh chạm tay vào iPhone
        sfx: "sfx_heartbeat",
        bgTheme: "border-emerald-500/30 bg-slate-900/95",
        story: "Dù Mai nói vậy, bọn nó vẫn xông vào giật mạnh balo. Khóa kéo đứt tung, đồ đạc rơi vãi tung tóe, và CÁI IPHONE RƠI RA THẬT. Bọn nó hét lên: 'Đấy! Rõ ràng ăn trộm nhé!'.",
        
        minigame: {
            type: "qte",
            duration: 2.5,
            title: "PHẢN XẠ SINH TỬ",
            description: "Chiếc iPhone rơi ra khỏi cặp! Phản xạ chớp nhoáng bấm ngay vào hành động AN TOÀN NHẤT!",
            qteOptions: [
              { text: "NHẶT LÊN ĐƯA TRẢ NÓ", correct: false },
              { text: "LÙI LẠI (KHÔNG CHẠM TAY VÀO)", correct: true },
              { text: "HOẢNG SỢ BỎ CHẠY", correct: false }
            ],
            successScene: "mai_6_2",
            failScene: "mai_6_1_sai_b"
        },

        choices: [
            { text: "👉 Hoảng sợ tột độ, bỏ chạy khỏi lớp học.", nextScene: "mai_6_1_sai_a" },
            { text: "👉 Vội vàng nhặt cái iPhone lên đưa lại cho bọn nó: 'Mình không lấy thật mà'.", nextScene: "mai_6_1_sai_b" },
            { text: "👉 Lùi lại, tuyệt đối không chạm tay vào cái điện thoại đang nằm trên sàn.", nextScene: "mai_6_2" }
        ]
    },
    "mai_6_1_sai_a": {
        charName: "MAI (Cảnh 6.1: Bỏ trốn)",
        charColor: "text-rose-500",
        charSprite: "assets/characters/Char_1.webp",
        charEmotion: "cry",
        bgTheme: "border-rose-500/80 bg-rose-950/90 animate__shakeX",
        isResult: true,
        resultTitle: "THẤT BẠI - NGẦM NHẬN TỘI",
        resultColor: "text-rose-500",
        illustration: "assets/scenes/Char_1_Scene_11.webp",
        story: "Chạy trốn được hiểu là ngầm thừa nhận tội lỗi. Hành động này tước đi mọi cơ hội minh hoan sau này của bạn.",
        choices: [{ text: "↺ Làm lại bước này", nextScene: "mai_6_1", isUndo: true }]
    },
    "mai_6_1_sai_b": {
        charName: "MAI (Cảnh 6.1: Dấu vân tay)",
        charColor: "text-rose-500",
        charSprite: "assets/characters/Char_1.webp",
        charEmotion: "cry",
        bgTheme: "border-rose-500/80 bg-rose-950/90 animate__shakeX",
        isResult: true,
        resultTitle: "THẤT BẠI - HỦY HOẠI HIỆN TRƯỜNG",
        resultColor: "text-rose-500",
        illustration: "assets/scenes/Char_1_Scene_11.webp",
        story: "Sai lầm chết người! Vừa chạm tay vào, dấu vân tay của Mai đã in đầy lên chiếc điện thoại. Bây giờ thì Công an cũng không thể cứu được bạn khỏi tội ăn cắp.",
        choices: [{ text: "↺ Làm lại bước này", nextScene: "mai_6_1", isUndo: true }]
    },

    "mai_6_2": {
        charName: "MAI (Cảnh 6.2: Đối Chất Với Giáo Viên)",
        charColor: "text-emerald-400",
        charSprite: "assets/characters/Char_1.webp",
        charEmotion: "normal",
        bgTheme: "border-emerald-500/30 bg-slate-900/95",
        story: "Giám thị bước vào. Đám bạn nhao nhao: 'Thầy ơi bắt được quả tang Mai ăn cắp điện thoại!'. Thầy cau mày nhìn Mai nghiêm khắc.",
        choices: [
            { text: "👉 Gào khóc nức nở: 'Em bị oan, nó tự nhét vào cặp em thầy ơi!'.", nextScene: "mai_6_2_sai_a" },
            { text: "👉 Đổ tội ngược lại: 'Chắc tụi nó muốn hại em nên tự bỏ vào đó'.", nextScene: "mai_6_2_sai_b" },
            { text: "👉 Chỉ vào chiếc điện thoại trên sàn: 'Thưa thầy, em yêu cầu mời Công an đến lấy dấu vân tay trên máy. Nếu em ăn cắp, chắc chắn sẽ có vân tay của em'.", nextScene: "mai_6_3" }
        ]
    },
    "mai_6_2_sai_a": {
        charName: "MAI (Cảnh 6.2: Yếu đuối)",
        charColor: "text-amber-400",
        charSprite: "assets/characters/Char_1.webp",
        charEmotion: "cry",
        bgTheme: "border-amber-500/50 bg-slate-900/95",
        isResult: true,
        resultTitle: "THẤT BẠI - NƯỚC MẮT KHÔNG THAY ĐƯỢC BẰNG CHỨNG",
        resultColor: "text-amber-400",
        illustration: "assets/scenes/Char_1_Scene_11.webp",
        story: "Sự khóc lóc trong lúc dầu sôi lửa bỏng không thuyết phục được ai. Thầy Giám thị vẫn phải lập biên bản đình chỉ học tập chờ điều tra.",
        choices: [{ text: "↺ Làm lại bước này", nextScene: "mai_6_2", isUndo: true }]
    },
    "mai_6_2_sai_b": {
        charName: "MAI (Cảnh 6.2: Vu khống ngược)",
        charColor: "text-rose-500",
        charSprite: "assets/characters/Char_1.webp",
        charEmotion: "angry", // 👉 Cãi bới đổ lỗi vội vàng
        bgTheme: "border-rose-500/80 bg-rose-950/90 animate__shakeX",
        isResult: true,
        resultTitle: "THẤT BẠI - THIẾU LOGIC TRẦM TRỌNG",
        resultColor: "text-rose-500",
        illustration: "assets/scenes/Char_1_Scene_13.webp",
        story: "Cãi lý khi không có cơ sở chỉ làm mọi người thấy bạn đang 'cùn'. Tụi nó vặn lại: 'Tụi tao điên à đem iPhone 15 đi hại mày?'. Mai hoàn toàn thất thế.",
        choices: [{ text: "↺ Làm lại bước này", nextScene: "mai_6_2", isUndo: true }]
    },

    "mai_6_3": {
        charName: "MAI (Cảnh 6.3: Đòn Chốt Hạ)",
        charColor: "text-emerald-400",
        charSprite: "assets/characters/Char_1.webp",
        charEmotion: "think", // 👉 Tư duy pháp luật sắc bén dồn ép đối phương
        bgTheme: "border-emerald-500/30 bg-slate-900/95",
        story: "Nghe đến từ 'Công an lấy dấu vân tay', đứa bày mưu bắt đầu run rẩy, lắp bắp: 'Thôi thầy... chắc bạn Mai trót dại, em xin lại máy không truy cứu nữa đâu ạ'.",
        choices: [
            { text: "👉 Đồng ý cho qua chuyện vì cũng sợ rắc rối dính dáng tới Công an.", nextScene: "mai_6_3_sai_a" },
            { text: "👉 Cười khẩy: 'Sợ rồi à? Biết ngay là tụi mày xạo mà'.", nextScene: "mai_6_3_sai_b" },
            { text: "👉 Kiên quyết: 'Không được! Việc vu khống ăn cắp là xúc phạm danh dự. Em đồng ý làm lớn chuyện này để chứng minh sự trong sạch'.", nextScene: "mai_6_thanh_cong" }
        ]
    },
    "mai_6_3_sai_a": {
        charName: "MAI (Cảnh 6.3: Cả nể)",
        charColor: "text-amber-400",
        charSprite: "assets/characters/Char_1.webp",
        charEmotion: "cry",
        bgTheme: "border-amber-500/50 bg-slate-900/95",
        isResult: true,
        resultTitle: "THẤT BẠI - BỎ QUA CƠ HỘI VÀNG",
        resultColor: "text-amber-400",
        illustration: "assets/scenes/Char_1_Scene_11.webp",
        story: "Sự nhân nhượng của bạn khiến sự việc kết thúc lửng lơ. Dù không bị phạt, cả trường vẫn đồn đại Mai là đứa ăn cắp được tha tội.",
        choices: [{ text: "↺ Làm lại bước này", nextScene: "mai_6_3", isUndo: true }]
    },
    "mai_6_3_sai_b": {
        charName: "MAI (Cảnh 6.3: Kêu ngạo)",
        charColor: "text-rose-500",
        charSprite: "assets/characters/Char_1.webp",
        charEmotion: "angry", // 👉 Cười khẩy khiêu khích
        bgTheme: "border-rose-500/80 bg-rose-950/90 animate__shakeX",
        isResult: true,
        resultTitle: "THẤT BẠI - MẤT ĐIỂM TRONG MẮT THẦY CÔ",
        resultColor: "text-rose-500",
        illustration: "assets/scenes/Char_1_Scene_7.webp",
        story: "Cười khẩy và dùng từ ngữ thô tục khiến Thầy Giám thị ác cảm. Kẻ thù tuy sợ nhưng sẽ tìm cách đâm sau lưng bạn thâm độc hơn vào lần sau.",
        choices: [{ text: "↺ Làm lại bước này", nextScene: "mai_6_3", isUndo: true }]
    },
    "mai_6_thanh_cong": {
        charName: "MAI (Kết Quả Màn 6)",
        charColor: "text-emerald-400",
        charSprite: "assets/characters/Char_1.webp",
        charEmotion: "victory", // 👉 Nụ cười kiên cường trong sạch
        bgTheme: "border-emerald-500/80 bg-teal-950/90 animate__pulse",
        isResult: true,
        resultTitle: "THÀNH CÔNG - SỰ TRONG SẠCH TUYỆT ĐỐI",
        resultColor: "text-emerald-400",
        illustration: "assets/scenes/Char_1_Scene_12.webp",
        story: "Thái độ cứng rắn và quyết tâm dùng pháp luật/khoa học làm bằng chứng của Mai đã bẻ gãy hoàn toàn âm mưu vu khống. Đám bạn sợ hãi khai nhận tự bỏ điện thoại vào cặp Mai. Sự thật được phơi bày rực rỡ!",
        choices: [{ text: "➔ Chuyển sang Màn 7 (Cảnh Cuối): Cuộc Chiến Sống Còn", nextScene: "mai_man_7" }]
    },

    // ------------------------------------------
    // MÀN 7: DEEPFAKE TỐNG TIỀN (TRẬN CHIẾN CUỐI CÙNG)
    // ------------------------------------------
    "mai_man_7": {
        charName: "MAI (Cảnh 7: Ám Ảnh Không Gian Mạng)",
        charColor: "text-emerald-400",
        charSprite: "assets/characters/Char_1.webp",
        charEmotion: "cry",
        sfx: "sfx_heartbeat",
        bgTheme: "border-emerald-500/30 bg-slate-900/95",
        story: "Cay cú vì liên tục thất bại, nhóm bạo lực dở trò hèn hạ nhất. Chúng dùng AI ghép mặt Mai vào các bức ảnh nhạy cảm 18+. Chúng nhắn ẩn danh: 'Chuẩn bị 5 triệu, nếu không ngày mai cả trường và bố mẹ mày sẽ xem phim HD'.",
        choices: [
            { text: "👉 Sợ hãi, nhắn tin van xin chúng đừng gửi rồi tính chuyện bán xe đạp lấy tiền.", nextScene: "mai_7_sai_a" },
            { text: "👉 Hoảng loạn, có ý định uống thuốc ngủ để kết thúc mọi đau khổ.", nextScene: "mai_7_sai_b" },
            { text: "👉 Chạy ngay vào phòng, đưa toàn bộ tin nhắn tống tiền cho Bố Mẹ xem và xin giúp đỡ.", nextScene: "mai_7_1" }
        ]
    },
    "mai_7_sai_a": {
        charName: "MAI (Cảnh 7: Thỏa hiệp)",
        charColor: "text-amber-400",
        charSprite: "assets/characters/Char_1.webp",
        charEmotion: "cry",
        bgTheme: "border-amber-500/50 bg-slate-900/95",
        isResult: true,
        resultTitle: "THẤT BẠI - NÔ LỆ TÀI CHÍNH",
        resultColor: "text-amber-400",
        illustration: "assets/scenes/Char_1_Scene_3.webp",
        story: "Bọn tội phạm mạng không bao giờ giữ lời hứa. Sau khi lấy 5 triệu, chúng tiếp tục tống tiền 10 triệu, 20 triệu. Mai rơi vào hố sâu nợ nần và tuyệt vọng.",
        choices: [{ text: "↺ Làm lại bước này", nextScene: "mai_man_7", isUndo: true }]
    },
    "mai_7_sai_b": {
        charName: "MAI (Cảnh 7: Bế tắc)",
        charColor: "text-rose-500",
        charSprite: "assets/characters/Char_1.webp",
        charEmotion: "cry",
        bgTheme: "border-rose-500/80 bg-rose-950/90 animate__shakeX",
        isResult: true,
        resultTitle: "THẤT BẠI - BI KỊCH ĐAU LÒNG KHÔNG THỂ VÃN HỒI",
        resultColor: "text-rose-500",
        illustration: "assets/scenes/Char_1_Scene_13.webp",
        story: "Tự hại bản thân là quyết định đau đớn nhất. Bức ảnh là ảo, sự hèn hạ của bọn chúng là thật, cớ sao bạn phải trả giá bằng mạng sống vô giá của mình? Hãy thức tỉnh!",
        choices: [{ text: "↺ Quay lại thời điểm sáng suốt nhất", nextScene: "mai_man_7", isUndo: true }]
    },

    "mai_7_1": {
        charName: "MAI (Cảnh 7.1: Sóng Gió Gia Đình)",
        charColor: "text-emerald-400",
        charSprite: "assets/characters/Char_1.webp",
        charEmotion: "think", // 👉 Lý trí chỉ ra dấu vết lỗi AI trên ảnh
        bgTheme: "border-emerald-500/30 bg-slate-900/95",
        story: "Bố mẹ sốc nặng khi thấy ảnh. Bọn chúng còn tinh vi dùng số lạ nhắn cho Bố Mai: 'Con gái ông bà sống buông thả thế à?'. Bố tức giận quát: 'Mày làm cái trò gì ở trường thế này hả Mai?'.",
        choices: [
            { text: "👉 Tức tưởi khóc to: 'Bố mẹ không tin con thì con đi chết cho rảnh nợ!'.", nextScene: "mai_7_1_sai_a" },
            { text: "👉 Câm nín, cắm mặt xuống sàn chịu đòn roi vì nghĩ không giải thích được.", nextScene: "mai_7_1_sai_b" },
            { text: "👉 Ôm lấy tay Mẹ, nói chắc nịch: 'Bố mẹ hãy nhìn kỹ góc viền bức ảnh, nó rành rành là AI cắt ghép. Con đang bị tống tiền!'.", nextScene: "mai_7_2" }
        ]
    },
    "mai_7_1_sai_a": {
        charName: "MAI (Cảnh 7.1: Xung đột)",
        charColor: "text-rose-500",
        charSprite: "assets/characters/Char_1.webp",
        charEmotion: "angry", // 👉 Quát tháo bố mẹ kích động
        bgTheme: "border-rose-500/80 bg-rose-950/90 animate__shakeX",
        isResult: true,
        resultTitle: "THẤT BẠI - ĐẨY LÙI YÊU THƯƠNG",
        resultColor: "text-rose-500",
        illustration: "assets/scenes/Char_1_Scene_13.webp",
        story: "Phản ứng chống đối khi Bố Mẹ đang sốc chỉ khiến mâu thuẫn gia đình leo thang. Bạn tự cắt đứt đường dây cứu viện duy nhất của đời mình.",
        choices: [{ text: "↺ Làm lại bước này", nextScene: "mai_7_1", isUndo: true }]
    },
    "mai_7_1_sai_b": {
        charName: "MAI (Cảnh 7.1: Oan ức)",
        charColor: "text-amber-400",
        charSprite: "assets/characters/Char_1.webp",
        charEmotion: "cry",
        bgTheme: "border-amber-500/50 bg-slate-900/95",
        isResult: true,
        resultTitle: "THẤT BẠI - SỰ CHỊU ĐỰNG VÔ LÝ",
        resultColor: "text-amber-400",
        illustration: "assets/scenes/Char_1_Scene_5.webp",
        story: "Sự im lặng của bạn khiến Bố Mẹ tin rằng bức ảnh là thật. Nỗi oan ức gặm nhấm tâm can và kẻ tống tiền vẫn cười hả hê.",
        choices: [{ text: "↺ Làm lại bước này", nextScene: "mai_7_1", isUndo: true }]
    },

    // [MINI-GAME 6: HOLD - CÂU GIỜ TRUY VẾT IP TỘI PHẠM MẠNG]
    "mai_7_2": {
        charName: "MAI (Cảnh 7.2: Kế Hoạch Bủa Lưới)",
        charColor: "text-emerald-400",
        charSprite: "assets/characters/Char_1.webp",
        charEmotion: "think", // 👉 Tập trung cao độ câu giờ truy vết IP
        sfx: "sfx_heartbeat",
        bgTheme: "border-emerald-500/30 bg-slate-900/95",
        story: "Bố Mẹ bình tĩnh lại, nhận ra sự thật và lập tức đưa Mai lên Công an An ninh mạng. Chú Công an hướng dẫn Mai phải nhắn tin 'câu giờ' với kẻ tống tiền để đội kỹ thuật dò theo dấu vết IP (vị trí mạng).",
        
        minigame: {
            type: "hold",
            duration: 6,
            title: "CÂU GIỜ TRUY VẾT IP",
            description: "Nhấn GIỮ CHẶT ngón tay không buông để giữ bình tĩnh nhắn tin câu giờ, hỗ trợ lực lượng An ninh mạng định vị chính xác vị trí kẻ tống tiền!",
            successScene: "mai_7_3",
            failScene: "mai_7_2_sai_a"
        },

        choices: [
            { text: "👉 Sợ quá, nói với chú Công an: 'Cháu không dám chat với nó đâu, chú tự làm đi'.", nextScene: "mai_7_2_sai_a" },
            { text: "👉 Nhắn tin dằn mặt: 'Tao đang ở đồn Công an, tụi mày nộp mạng đi lũ ngu!'.", nextScene: "mai_7_2_sai_b" },
            { text: "👉 Rep tin nhắn tỏ vẻ sợ hãi: 'Mình xin lỗi, mình sợ lắm. Mình chưa xoay kịp 5 triệu, hẹn gặp đưa tiền mặt được không?'.", nextScene: "mai_7_3" }
        ]
    },
    "mai_7_2_sai_a": {
        charName: "MAI (Cảnh 7.2: Hèn nhát)",
        charColor: "text-amber-400",
        charSprite: "assets/characters/Char_1.webp",
        charEmotion: "cry",
        bgTheme: "border-amber-500/50 bg-slate-900/95",
        isResult: true,
        resultTitle: "THẤT BẠI - BỎ LỠ THỜI CƠ",
        resultColor: "text-amber-400",
        illustration: "assets/scenes/Char_1_Scene_11.webp",
        story: "Kẻ tống tiền rất cảnh giác, nếu thấy tin nhắn ngưng lại quá lâu, chúng sẽ xóa tài khoản ẩn danh và phát tán ảnh ra toàn trường.",
        choices: [{ text: "↺ Làm lại bước này", nextScene: "mai_7_2", isUndo: true }]
    },
    "mai_7_2_sai_b": {
        charName: "MAI (Cảnh 7.2: Kích động)",
        charColor: "text-rose-500",
        charSprite: "assets/characters/Char_1.webp",
        charEmotion: "angry", // 👉 Đe dọa bứt dây động rừng
        bgTheme: "border-rose-500/80 bg-rose-950/90 animate__shakeX",
        isResult: true,
        resultTitle: "THẤT BẠI - RỨT DÂY ĐỘNG RỪNG",
        resultColor: "text-rose-500",
        illustration: "assets/scenes/Char_1_Scene_7.webp",
        story: "Hành động dọa dẫm khiến bọn chúng hoảng sợ hủy sim, xóa nick và trốn biệt tích. Việc điều tra rơi vào ngõ cụt và nguy cơ ảnh bị lộ vẫn hiện hữu.",
        choices: [{ text: "↺ Làm lại bước này", nextScene: "mai_7_2", isUndo: true }]
    },

    "mai_7_3": {
        charName: "MAI (Cảnh 7.3: Kéo Lưới)",
        charColor: "text-emerald-400",
        charSprite: "assets/characters/Char_1.webp",
        charEmotion: "normal",
        bgTheme: "border-emerald-500/30 bg-slate-900/95",
        story: "Kẻ tống tiền cắn câu: 'Ok, 5h chiều nay ra bãi đất trống sau trường giao tiền, không có đủ thì liệu hồn'.",
        choices: [
            { text: "👉 Lấy con dao rọc giấy bỏ vào túi quần rồi tự một mình ra bãi đất trống gặp chúng.", nextScene: "mai_7_3_sai_a" },
            { text: "👉 Sợ hãi không dám ra chỗ hẹn, block số và vứt luôn điện thoại.", nextScene: "mai_7_3_sai_b" },
            { text: "👉 Đưa luôn tin nhắn đó cho các chú Công an nghiệp vụ để dàn trận mai phục.", nextScene: "mai_7_thanh_cong" }
        ]
    },
    "mai_7_3_sai_a": {
        charName: "MAI (Cảnh 7.3: Mạo hiểm)",
        charColor: "text-rose-500",
        charSprite: "assets/characters/Char_1.webp",
        charEmotion: "angry", // 👉 Mạo hiểm cầm hung khí tự phán xét
        bgTheme: "border-rose-500/80 bg-rose-950/90 animate__shakeX",
        isResult: true,
        resultTitle: "THẤT BẠI - BƯỚC ĐI TỬ THẦN",
        resultColor: "text-rose-500",
        illustration: "assets/scenes/Char_1_Scene_13.webp",
        story: "Tự mình đóng vai anh hùng trong đời thực là điều tồi tệ nhất. Bọn chúng đông và hung hãn, dao của bạn bị tước đi và bạn bị hành hung dã man.",
        choices: [{ text: "↺ Làm lại bước này", nextScene: "mai_7_3", isUndo: true }]
    },
    "mai_7_3_sai_b": {
        charName: "MAI (Cảnh 7.3: Trốn tránh)",
        charColor: "text-amber-400",
        charSprite: "assets/characters/Char_1.webp",
        charEmotion: "cry",
        bgTheme: "border-amber-500/50 bg-slate-900/95",
        isResult: true,
        resultTitle: "THẤT BẠI - NỖI SỢ HÃI ÁM ẢNH",
        resultColor: "text-amber-400",
        illustration: "assets/scenes/Char_1_Scene_11.webp",
        story: "Vắng mặt tại điểm hẹn khiến chúng nổi điên phát tán mọi hình ảnh. Dù Công an đang vào cuộc, nhưng cú sốc tinh thần đối với bạn là không thể vãn hồi.",
        choices: [{ text: "↺ Làm lại bước này", nextScene: "mai_7_3", isUndo: true }]
    },
    "mai_7_thanh_cong": {
        charName: "MAI (Kết Quả Cuối Cùng)",
        charColor: "text-emerald-400",
        charSprite: "assets/characters/Char_1.webp",
        charEmotion: "victory", // 👉 Chiến thắng cuối cùng tự hào và bản lĩnh
        bgTheme: "border-emerald-500/80 bg-teal-950/90 animate__pulse",
        isResult: true,
        resultTitle: "CHIẾN THẮNG RỰC RỠ!",
        resultColor: "text-emerald-400",
        illustration: "assets/scenes/Char_1_Scene_14.webp",
        story: "Lực lượng Công an mặc thường phục đã tóm gọn nhóm bắt nạt ngay lúc chúng nhận bọc tiền giả từ tay Mai. Hành vi ghép ảnh 18+ tống tiền bị khởi tố hình sự. Bạo lực học đường đã bị nhổ tận gốc bằng pháp luật và sự dũng cảm tuyệt vời của bạn!",
        choices: [{ text: "🏆 Chúc mừng bạn hoàn thành Tuyến MAI", nextScene: "RESET_GAME" }]
    }
};