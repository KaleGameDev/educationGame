// ==========================================
// KỊCH BẢN ĐA TẦNG CHIỀU SÂU (TÂM LÝ GEN Z)
// ==========================================
const STORY_DATA = {

    // ==========================================
    // TUYẾN 1: MAI - NỮ NẠN NHÂN (CẤU TRÚC 4 TẦNG LẮT LÉO)
    // ==========================================
    
    // ------------------------------------------
    // MÀN 1: BỨC ẢNH CHỤP LÉN TRONG GROUP LỚP
    // ------------------------------------------
    "mai_man_1": {
        charName: "MAI (Cảnh 1: Biến Cố Group Lớp)",
        charColor: "text-emerald-400",
        charSprite: "assets/characters/Char_1.webp",
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
        charSprite: "assets/characters/Char_1_Cry.webp",
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
        charSprite: "assets/characters/Char_1_Cry.webp",
        bgTheme: "border-rose-500/80 bg-rose-950/90 animate__shakeX",
        isResult: true,
        resultTitle: "THẤT BẠI - MẮC BẪY KHIÊU KHÍCH",
        resultColor: "text-rose-500",
        illustration: "assets/scenes/Char_1_Scene_1.webp",
        story: "Kẻ bắt nạt chỉ chờ có thế! Hùng cap lại đoạn chửi thề của Mai, up lên Facebook trường: 'Góc bóc phốt: Nạn nhân hay con nhím độc?'. Mai bị cả trường ném đá vì thái độ toxic. Bạn tự biến mình thành kẻ phản diện.",
        choices: [{ text: "↺ Thử lại Màn 1", nextScene: "mai_man_1", isUndo: true }]
    },

    "mai_1_1": {
        charName: "MAI (Cảnh 1.1: Trò Đùa Dai Dẳng)",
        charColor: "text-emerald-400",
        charSprite: "assets/characters/Char_1.webp",
        bgTheme: "border-emerald-500/30 bg-slate-900/95",
        story: "Sau khi cap màn hình an toàn. Mai thấy Hùng tiếp tục tag tên Mai: 'Ủa bé Mai dỗi rồi kìa, ra chuồng gà mà khóc nhé'. Một vài đứa khác bắt đầu bình luận hùa theo cực kỳ khó nghe.",
        choices: [
            { text: "👉 Đăng story Facebook chửi đổng: 'Sống lỗi thì coi chừng nghiệp quật nhé lũ khốn'.", nextScene: "mai_1_1_sai_a" },
            { text: "👉 Lẳng lặng Out group lớp, block Facebook thằng Hùng để trốn tránh khỏi đống tin nhắn rác rưởi.", nextScene: "mai_1_1_sai_b" },
            { text: "👉 Inbox nhờ Lan (lớp phó, có tiếng nói nhất lớp) vào group bênh vực để bẻ gãy 'hiệu ứng đám đông'.", nextScene: "mai_1_2" }
        ]
    },
    "mai_1_1_sai_a": {
        charName: "MAI (Cảnh 1.1: Trả đũa mạng)",
        charColor: "text-rose-500",
        charSprite: "assets/characters/Char_1_Cry.webp",
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
        charSprite: "assets/characters/Char_1_Cry.webp",
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
        charSprite: "assets/characters/Char_1_Cry.webp",
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
        charSprite: "assets/characters/Char_1_Cry.webp",
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
        charSprite: "assets/characters/Char_1_Cry.webp",
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
        charSprite: "assets/characters/Char_1_Cry.webp",
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
        charSprite: "assets/characters/Char_1_Happy.webp",
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
        bgTheme: "border-emerald-500/30 bg-slate-900/95",
        story: "Giờ tan học tại nhà để xe tối tăm, một chị đại khối 12 tên Vy chặn xe Mai. Vy nắm cổ áo Mai đe dọa: 'Mai mang 500k nộp quỹ 'bảo kê', không thì đừng hòng dắt xe ra khỏi trường. Méc ai tao rạch mặt'.",
        choices: [
            { text: "👉 Vứt xe chạy ngược lên phòng Giám thị kêu cứu.", nextScene: "mai_2_sai_a" },
            { text: "👉 Rút điện thoại ra quay phim thẳng mặt Vy để đe dọa lại.", nextScene: "mai_2_sai_b" },
            { text: "👉 Giả vờ run rẩy đồng ý: 'Dạ mai em đưa, chị tha cho em về', để bảo toàn tính mạng lúc đó.", nextScene: "mai_2_1" }
        ]
    },
    "mai_2_sai_a": {
        charName: "MAI (Cảnh 2: Nóng vội)",
        charColor: "text-rose-500",
        charSprite: "assets/characters/Char_1_Cry.webp",
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
        charSprite: "assets/characters/Char_1_Cry.webp",
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
        charSprite: "assets/characters/Char_1_Cry.webp",
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
        charSprite: "assets/characters/Char_1_Cry.webp",
        bgTheme: "border-rose-500/80 bg-rose-950/90 animate__shakeX",
        isResult: true,
        resultTitle: "THẤT BẠI - TỰ ĐÀO MỒ CHÔN MÌNH",
        resultColor: "text-rose-500",
        illustration: "assets/scenes/Char_1_Scene_5.webp",
        story: "Mang hung khí đến trường là vi phạm pháp luật hình sự. Dù chưa kịp rút ra, Mai bị bạn mách, Giám thị xét cặp phát hiện và đuổi học ngay lập tức.",
        choices: [{ text: "↺ Làm lại bước này", nextScene: "mai_2_1", isUndo: true }]
    },

    "mai_2_2": {
        charName: "MAI (Cảnh 2.2: Kế Hoạch Hoàn Hảo)",
        charColor: "text-emerald-400",
        charSprite: "assets/characters/Char_1.webp",
        bgTheme: "border-emerald-500/30 bg-slate-900/95",
        story: "Được tổng đài 111 tư vấn, Mai báo bí mật cho thầy Giám thị. Thầy dặn: 'Cứ mang một xấp tiền lẻ bọc polyme ra đúng chỗ hẹn, thầy sẽ nấp ở góc quay video'. Hôm sau, Vy xuất hiện giật lấy xấp tiền.",
        choices: [
            { text: "👉 Bỏ chạy thục mạng khi Vy vừa chạm tay vào tiền.", nextScene: "mai_2_2_sai_a" },
            { text: "👉 Hét to lên: 'Trảo tao tiền đây con ăn cướp!' để gây chú ý.", nextScene: "mai_2_2_sai_b" },
            { text: "👉 Cố tình nói to rành mạch: 'Em nộp 500k tiền bảo kê tháng này như chị ép buộc rồi nhé, chị đếm đi'.", nextScene: "mai_2_3" }
        ]
    },
    "mai_2_2_sai_a": {
        charName: "MAI (Cảnh 2.2: Thiếu logic)",
        charColor: "text-amber-400",
        charSprite: "assets/characters/Char_1_Cry.webp",
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
        charSprite: "assets/characters/Char_1_Cry.webp",
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
        charSprite: "assets/characters/Char_1_Cry.webp",
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
        charSprite: "assets/characters/Char_1_Cry.webp",
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
        charSprite: "assets/characters/Char_1_Happy.webp",
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
        charSprite: "assets/characters/Char_1_Cry.webp",
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
        charSprite: "assets/characters/Char_1_Cry.webp",
        bgTheme: "border-rose-500/80 bg-rose-950/90 animate__shakeX",
        isResult: true,
        resultTitle: "THẤT BẠI - KÍCH THÍCH BẠO LỰC",
        resultColor: "text-rose-500",
        illustration: "assets/scenes/Char_1_Scene_5.webp",
        story: "Lời thách thức khiến Thảo điên tiết, dùng giày đạp mạnh vào bụng Mai. Trong hoàn cảnh yếu thế hoàn toàn, khiêu khích đối thủ là quyết định thiếu an toàn nhất.",
        choices: [{ text: "↺ Làm lại bước này", nextScene: "mai_man_3", isUndo: true }]
    },

    "mai_3_1": {
        charName: "MAI (Cảnh 3.1: Cuộc Đuổi Bắt)",
        charColor: "text-emerald-400",
        charSprite: "assets/characters/Char_1.webp",
        bgTheme: "border-emerald-500/30 bg-slate-900/95",
        story: "Đứa bị cắn la oai oái và buông tay. Mai vùng chạy được một đoạn nhưng luống cuống nên bị vấp ngã. Nhóm Thảo lao tới đuổi kịp, định túm tóc Mai kéo lại.",
        choices: [
            { text: "👉 Nằm gục xuống sàn nhắm mắt chịu trận vì nghĩ không thoát được nữa.", nextScene: "mai_3_1_sai_a" },
            { text: "👉 Vớ lấy cục gạch ở bồn cây gần đó phang thẳng vào đầu Thảo.", nextScene: "mai_3_1_sai_b" },
            { text: "👉 Trườn nhanh tới bám vào lan can cầu thang (nơi có camera), gào lên: 'CHÁY! CÓ CHÁY KÌA!'.", nextScene: "mai_3_2" }
        ]
    },
    "mai_3_1_sai_a": {
        charName: "MAI (Cảnh 3.1: Bỏ cuộc)",
        charColor: "text-amber-400",
        charSprite: "assets/characters/Char_1_Cry.webp",
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
        charSprite: "assets/characters/Char_1_Cry.webp",
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
        charSprite: "assets/characters/Char_1_Cry.webp",
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
        charSprite: "assets/characters/Char_1_Cry.webp",
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
        charSprite: "assets/characters/Char_1_Cry.webp",
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
        charSprite: "assets/characters/Char_1_Cry.webp",
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
        charSprite: "assets/characters/Char_1_Happy.webp",
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
        charSprite: "assets/characters/Char_1_Cry.webp",
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
        charSprite: "assets/characters/Char_1_Cry.webp",
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
        charSprite: "assets/characters/Char_1_Cry.webp",
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
        charSprite: "assets/characters/Char_1_Cry.webp",
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
        charSprite: "assets/characters/Char_1_Cry.webp",
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
        charSprite: "assets/characters/Char_1_Cry.webp",
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
        charSprite: "assets/characters/Char_1_Cry.webp",
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
        charSprite: "assets/characters/Char_1_Cry.webp",
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
        charSprite: "assets/characters/Char_1_Happy.webp",
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
        charSprite: "assets/characters/Char_1_Cry.webp",
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
        charSprite: "assets/characters/Char_1_Cry.webp",
        bgTheme: "border-rose-500/80 bg-rose-950/90 animate__shakeX",
        isResult: true,
        resultTitle: "THẤT BẠI - TRỞ THÀNH KẺ XẤU",
        resultColor: "text-rose-500",
        illustration: "assets/scenes/Char_1_Scene_13.webp",
        story: "Body shaming lại người khác không làm bạn đẹp hơn. Lớp học biến thành cái chợ chửi bới ngoại hình lẫn nhau. Hành vi này hoàn toàn làm mất đi sự tôn trọng của thầy cô dành cho bạn.",
        choices: [{ text: "↺ Làm lại bước này", nextScene: "mai_man_5", isUndo: true }]
    },

    "mai_5_1": {
        charName: "MAI (Cảnh 5.1: Đối Diện Đám Đông)",
        charColor: "text-emerald-400",
        charSprite: "assets/characters/Char_1.webp",
        bgTheme: "border-emerald-500/30 bg-slate-900/95",
        story: "Hôm sau có tiết thuyết trình môn Giáo dục Công dân chủ đề 'Tôn trọng người khác'. Lên bục giảng, Mai bất ngờ chiếu chính bức ảnh con heo ghép mặt mình lên màn hình lớn. Cả lớp ồ lên, cười khúc khích.",
        choices: [
            { text: "👉 Xấu hổ quá, giọng run rẩy rồi òa khóc chạy xuống chỗ.", nextScene: "mai_5_1_sai_a" },
            { text: "👉 Đập bàn quát lớn: 'Bọn mày im hết đi, có gì đáng cười hả lũ vô học?'.", nextScene: "mai_5_1_sai_b" },
            { text: "👉 Mỉm cười, chờ lớp cười xong rồi rành rọt nói: 'Đây là tác phẩm mình nhận được hôm qua. Các bạn thấy hài hước đúng không?'.", nextScene: "mai_5_2" }
        ]
    },
    "mai_5_1_sai_a": {
        charName: "MAI (Cảnh 5.1: Sụp đổ)",
        charColor: "text-amber-400",
        charSprite: "assets/characters/Char_1_Cry.webp",
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
        charSprite: "assets/characters/Char_1_Cry.webp",
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
        charSprite: "assets/characters/Char_1_Cry.webp",
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
        charSprite: "assets/characters/Char_1_Cry.webp",
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
        charSprite: "assets/characters/Char_1_Cry.webp",
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
        charSprite: "assets/characters/Char_1_Cry.webp",
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
        charSprite: "assets/characters/Char_1_Happy.webp",
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
        charSprite: "assets/characters/Char_1_Cry.webp",
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
        charSprite: "assets/characters/Char_1_Cry.webp",
        bgTheme: "border-amber-500/50 bg-slate-900/95",
        isResult: true,
        resultTitle: "THẤT BẠI - TÌNH NGAY LÝ GIAN",
        resultColor: "text-amber-400",
        illustration: "assets/scenes/Char_1_Scene_13.webp",
        story: "Sự giằng co hoảng loạn bị đám đông quy chụp là 'Có tật giật mình nên mới không dám cho khám cặp'. Mai rơi vào thế bị động và mất hình ảnh tồi tệ.",
        choices: [{ text: "↺ Làm lại bước này", nextScene: "mai_man_6", isUndo: true }]
    },

    "mai_6_1": {
        charName: "MAI (Cảnh 6.1: Khủng Hoảng Tâm Lý)",
        charColor: "text-emerald-400",
        charSprite: "assets/characters/Char_1.webp",
        bgTheme: "border-emerald-500/30 bg-slate-900/95",
        story: "Dù Mai nói vậy, bọn nó vẫn xông vào giật mạnh balo. Khóa kéo đứt tung, đồ đạc rơi vãi tung tóe, và CÁI IPHONE RƠI RA THẬT. Bọn nó hét lên: 'Đấy! Rõ ràng ăn trộm nhé!'.",
        choices: [
            { text: "👉 Hoảng sợ tột độ, bỏ chạy khỏi lớp học.", nextScene: "mai_6_1_sai_a" },
            { text: "👉 Vội vàng nhặt cái iPhone lên đưa lại cho bọn nó: 'Mình không lấy thật mà'.", nextScene: "mai_6_1_sai_b" },
            { text: "👉 Lùi lại, tuyệt đối không chạm tay vào cái điện thoại đang nằm trên sàn.", nextScene: "mai_6_2" }
        ]
    },
    "mai_6_1_sai_a": {
        charName: "MAI (Cảnh 6.1: Bỏ trốn)",
        charColor: "text-rose-500",
        charSprite: "assets/characters/Char_1_Cry.webp",
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
        charSprite: "assets/characters/Char_1_Cry.webp",
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
        charSprite: "assets/characters/Char_1_Cry.webp",
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
        charSprite: "assets/characters/Char_1_Cry.webp",
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
        charSprite: "assets/characters/Char_1_Cry.webp",
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
        charSprite: "assets/characters/Char_1_Cry.webp",
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
        charSprite: "assets/characters/Char_1_Happy.webp",
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
        charSprite: "assets/characters/Char_1_Cry.webp",
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
        charSprite: "assets/characters/Char_1_Cry.webp",
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
        charSprite: "assets/characters/Char_1_Cry.webp",
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
        charSprite: "assets/characters/Char_1_Cry.webp",
        bgTheme: "border-amber-500/50 bg-slate-900/95",
        isResult: true,
        resultTitle: "THẤT BẠI - SỰ CHỊU ĐỰNG VÔ LÝ",
        resultColor: "text-amber-400",
        illustration: "assets/scenes/Char_1_Scene_5.webp",
        story: "Sự im lặng của bạn khiến Bố Mẹ tin rằng bức ảnh là thật. Nỗi oan ức gặm nhấm tâm can và kẻ tống tiền vẫn cười hả hê.",
        choices: [{ text: "↺ Làm lại bước này", nextScene: "mai_7_1", isUndo: true }]
    },

    "mai_7_2": {
        charName: "MAI (Cảnh 7.2: Kế Hoạch Bủa Lưới)",
        charColor: "text-emerald-400",
        charSprite: "assets/characters/Char_1.webp",
        bgTheme: "border-emerald-500/30 bg-slate-900/95",
        story: "Bố Mẹ bình tĩnh lại, nhận ra sự thật và lập tức đưa Mai lên Công an An ninh mạng. Chú Công an hướng dẫn Mai phải nhắn tin 'câu giờ' với kẻ tống tiền để đội kỹ thuật dò theo dấu vết IP (vị trí mạng).",
        choices: [
            { text: "👉 Sợ quá, nói với chú Công an: 'Cháu không dám chat với nó đâu, chú tự làm đi'.", nextScene: "mai_7_2_sai_a" },
            { text: "👉 Nhắn tin dằn mặt: 'Tao đang ở đồn Công an, tụi mày nộp mạng đi lũ ngu!'.", nextScene: "mai_7_2_sai_b" },
            { text: "👉 Rep tin nhắn tỏ vẻ sợ hãi: 'Mình xin lỗi, mình sợ lắm. Mình chưa xoay kịp 5 triệu, hẹn gặp đưa tiền mặt được không?'.", nextScene: "mai_7_3" }
        ]
    },
    "mai_7_2_sai_a": {
        charName: "MAI (Cảnh 7.2: Hèn nhát)",
        charColor: "text-amber-400",
        charSprite: "assets/characters/Char_1_Cry.webp",
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
        charSprite: "assets/characters/Char_1_Cry.webp",
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
        charSprite: "assets/characters/Char_1_Cry.webp",
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
        charSprite: "assets/characters/Char_1_Cry.webp",
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
        charSprite: "assets/characters/Char_1_Happy.webp",
        bgTheme: "border-emerald-500/80 bg-teal-950/90 animate__pulse",
        isResult: true,
        resultTitle: "CHIẾN THẮNG RỰC RỠ! 🎉",
        resultColor: "text-emerald-400",
        illustration: "assets/scenes/Char_1_Scene_14.webp",
        story: "Lực lượng Công an mặc thường phục đã tóm gọn nhóm bắt nạt ngay lúc chúng nhận bọc tiền giả từ tay Mai. Hành vi ghép ảnh 18+ tống tiền bị khởi tố hình sự. Bạo lực học đường đã bị nhổ tận gốc bằng pháp luật và sự dũng cảm tuyệt vời của bạn!",
        choices: [{ text: "🏆 Chúc mừng bạn hoàn thành Tuyến MAI", nextScene: "RESET_GAME" }]
    },

    // ==========================================
    // TUYẾN 2: MINH - NAM NẠN NHÂN (CẤU TRÚC 4 TẦNG LẮT LÉO)
    // ==========================================

    // ------------------------------------------
    // MÀN 1: BẠO LỰC SÂN BÓNG (TRANH SÂN)
    // ------------------------------------------
    "minh_man_1": {
        charName: "MINH (Cảnh 1: Tranh Sân Bóng Rổ)",
        charColor: "text-indigo-400",
        charSprite: "assets/characters/Char_4.webp",
        bgTheme: "border-indigo-500/30 bg-slate-900/95",
        story: "Giờ ra chơi, Minh và các bạn đang ném bóng rổ thì nhóm của Long 'đại ca' khối 12 đi tới. Long giật quả bóng trên tay Minh ném ra xa, hất hàm: 'Sân này giờ của bọn tao. Mấy thằng oắt con biến ra chỗ khác chơi'.",
        choices: [
            { text: "👉 Cay máu lao vào đẩy Long: 'Sân trường chung, anh cậy lớn ức hiếp ai?'.", nextScene: "minh_1_sai_a" },
            { text: "👉 Sợ hãi cúi gầm mặt, bảo bạn bè nhường sân rồi cay đắng bỏ đi.", nextScene: "minh_1_sai_b" },
            { text: "👉 Dừng chơi, giữ khoảng cách và nói: 'Tụi em đăng ký lịch sân này với Thầy Thể chất rồi'.", nextScene: "minh_1_1" }
        ]
    },
    "minh_1_sai_a": {
        charName: "MINH (Cảnh 1: Thất bại)",
        charColor: "text-rose-500",
        charSprite: "assets/characters/Char_4_Weak.webp",
        bgTheme: "border-rose-500/80 bg-rose-950/90 animate__shakeX",
        isResult: true,
        resultTitle: "THẤT BẠI - KÍCH THÍCH BẠO LỰC",
        resultColor: "text-rose-500",
        illustration: "assets/scenes/Char_4_Scene_1.webp",
        story: "Hành động đẩy người của Minh là cái cớ hoàn hảo để Long và đồng bọn lao vào đánh hội đồng. Việc manh động khi chênh lệch lực lượng chỉ khiến bạn nhận lấy hậu quả đau đớn về thể xác.",
        choices: [{ text: "↺ Suy ngẫm và thử lại", nextScene: "minh_man_1", isUndo: true }]
    },
    "minh_1_sai_b": {
        charName: "MINH (Cảnh 1: Thất bại)",
        charColor: "text-amber-400",
        charSprite: "assets/characters/Char_4_Weak.webp",
        bgTheme: "border-amber-500/50 bg-slate-900/95",
        isResult: true,
        resultTitle: "THẤT BẠI - SỰ NHƯỢNG BỘ HÈN NHÁT",
        resultColor: "text-amber-400",
        illustration: "assets/scenes/Char_4_Scene_1.webp",
        story: "Sự nhường nhịn vô lý khiến nhóm Long coi Minh là kẻ dễ bắt nạt. Hôm sau chúng tiếp tục cướp sân, thậm chí còn trấn lột tiền mua nước của các thành viên trong đội Minh.",
        choices: [{ text: "↺ Lấy lại bản lĩnh và thử lại", nextScene: "minh_man_1", isUndo: true }]
    },

    "minh_1_1": {
        charName: "MINH (Cảnh 1.1: Trả Đũa Sau Lưng)",
        charColor: "text-indigo-400",
        charSprite: "assets/characters/Char_4.webp",
        bgTheme: "border-indigo-500/30 bg-slate-900/95",
        story: "Nghe nhắc đến Thầy, Long hậm hực bỏ đi nhưng ném lại câu: 'Mày giỏi méc lắm, chiều về cẩn thận cái giò'. Cuối giờ học, Minh ra nhà xe thì thấy lốp xe đạp điện của mình bị xì hết hơi, yên xe bị rạch nát.",
        choices: [
            { text: "👉 Đăng đàn Facebook chửi: 'Thằng hèn nào rạch xe tao ra mặt đi!'.", nextScene: "minh_1_1_sai_a" },
            { text: "👉 Lẳng lặng dắt xe đi bộ về, nuốt cục tức vào trong vì sợ bị đánh thật.", nextScene: "minh_1_1_sai_b" },
            { text: "👉 Để nguyên hiện trường, nhờ chú bảo vệ trích xuất camera nhà xe ngay lập tức.", nextScene: "minh_1_2" }
        ]
    },
    "minh_1_1_sai_a": {
        charName: "MINH (Cảnh 1.1: Thất bại)",
        charColor: "text-rose-500",
        charSprite: "assets/characters/Char_4_Weak.webp",
        bgTheme: "border-rose-500/80 bg-rose-950/90 animate__shakeX",
        isResult: true,
        resultTitle: "THẤT BẠI - ANH HÙNG BÀN PHÍM",
        resultColor: "text-rose-500",
        illustration: "assets/scenes/Char_4_Scene_3.webp",
        story: "Chửi đổng trên mạng không tìm ra hung thủ mà còn biến bạn thành trò cười. Long dùng nick clone vào mỉa mai, kích động đám đông cười cợt sự bất lực của Minh.",
        choices: [{ text: "↺ Làm lại bước này", nextScene: "minh_1_1", isUndo: true }]
    },
    "minh_1_1_sai_b": {
        charName: "MINH (Cảnh 1.1: Thất bại)",
        charColor: "text-amber-400",
        charSprite: "assets/characters/Char_4_Weak.webp",
        bgTheme: "border-amber-500/50 bg-slate-900/95",
        isResult: true,
        resultTitle: "THẤT BẠI - XÓA BỎ BẰNG CHỨNG",
        resultColor: "text-amber-400",
        illustration: "assets/scenes/Char_4_Scene_3.webp",
        story: "Việc dắt xe đi làm hỏng hiện trường sự việc. Bạn mất đi cơ hội tố cáo kẻ phá hoại tài sản và phải tự bỏ tiền túi ra đền bố mẹ.",
        choices: [{ text: "↺ Làm lại bước này", nextScene: "minh_1_1", isUndo: true }]
    },

    "minh_1_2": {
        charName: "MINH (Cảnh 1.2: Góc Chết Camera)",
        charColor: "text-indigo-400",
        charSprite: "assets/characters/Char_4.webp",
        bgTheme: "border-indigo-500/30 bg-slate-900/95",
        story: "Bảo vệ check camera nhưng xe của Minh nằm ở góc khuất, chỉ thấy bóng lưng một nam sinh xẹt qua. Không đủ chứng cứ kết tội Long. Cùng lúc đó, Long đi ngang qua huýt sáo trêu chọc: 'Xe xẹp lốp hả em trai? Tội nghiệp chưa'.",
        choices: [
            { text: "👉 Cầm mũ bảo hiểm lao vào phang Long vì biết chắc chắn 100% là nó làm.", nextScene: "minh_1_2_sai_a" },
            { text: "👉 Tìm cơ hội lén rạch lại xe của Long để 'ăn miếng trả miếng'.", nextScene: "minh_1_2_sai_b" },
            { text: "👉 Mỉm cười đáp trả: 'Không sao anh, phá hoại tài sản trên 2 triệu là khởi tố hình sự. Em vừa báo Công an phường xuống lấy dấu vân tay trên yên xe rồi'.", nextScene: "minh_1_3" }
        ]
    },
    "minh_1_2_sai_a": {
        charName: "MINH (Cảnh 1.2: Thất bại)",
        charColor: "text-rose-500",
        charSprite: "assets/characters/Char_4_Weak.webp",
        bgTheme: "border-rose-500/80 bg-rose-950/90 animate__shakeX",
        isResult: true,
        resultTitle: "THẤT BẠI - TÌNH NGAY LÝ GIAN",
        resultColor: "text-rose-500",
        illustration: "assets/scenes/Char_4_Scene_7.webp",
        story: "Đánh người khi chưa có bằng chứng rành rành khiến Minh bị bảo vệ bắt giữ. Long lập tức ăn vạ đòi đền bù thương tích. Từ người bị hại, Minh thành kẻ cố ý gây thương tích.",
        choices: [{ text: "↺ Làm lại bước này", nextScene: "minh_1_2", isUndo: true }]
    },
    "minh_1_2_sai_b": {
        charName: "MINH (Cảnh 1.2: Thất bại)",
        charColor: "text-amber-400",
        charSprite: "assets/characters/Char_4_Weak.webp",
        bgTheme: "border-amber-500/50 bg-slate-900/95",
        isResult: true,
        resultTitle: "THẤT BẠI - LẤY ĐỘC TRỊ ĐỘC",
        resultColor: "text-amber-400",
        illustration: "assets/scenes/Char_4_Scene_11.webp",
        story: "Minh lén rạch xe Long nhưng xui xẻo xe Long nằm ngay góc camera nét nhất. Minh bị mời phụ huynh lên bồi thường và bị đình chỉ học thuật. Kế hoạch thất bại thảm hại.",
        choices: [{ text: "↺ Làm lại bước này", nextScene: "minh_1_2", isUndo: true }]
    },

    "minh_1_3": {
        charName: "MINH (Cảnh 1.3: Đòn Cân Não)",
        charColor: "text-indigo-400",
        charSprite: "assets/characters/Char_4.webp",
        bgTheme: "border-indigo-500/30 bg-slate-900/95",
        story: "Nghe từ 'Công an lấy dấu vân tay', Long hơi tái mặt nhưng vẫn cố gồng: 'Mày dọa ai? Làm như Cảnh sát rảnh lắm mà xuống trường khám nghiệm cái yên xe rách của mày'.",
        choices: [
            { text: "👉 Thấy nó không sợ nên chùn bước, lùi lại và im lặng.", nextScene: "minh_1_3_sai_a" },
            { text: "👉 Bốc phét thêm: 'Tao có ông chú làm Giám đốc Công an tỉnh, mày tiêu rồi con'.", nextScene: "minh_1_3_sai_b" },
            { text: "👉 Dứt khoát lấy điện thoại bấm gọi số máy bàn của Công an Phường bật loa ngoài trước mặt Long và chú bảo vệ.", nextScene: "minh_1_thanh_cong" }
        ]
    },
    "minh_1_3_sai_a": {
        charName: "MINH (Cảnh 1.3: Thất bại)",
        charColor: "text-amber-400",
        charSprite: "assets/characters/Char_4_Weak.webp",
        bgTheme: "border-amber-500/50 bg-slate-900/95",
        isResult: true,
        resultTitle: "THẤT BẠI - ĐÒN TÂM LÝ NỬA VỜI",
        resultColor: "text-amber-400",
        illustration: "assets/scenes/Char_4_Scene_3.webp",
        story: "Sự nao núng của Minh khiến Long nhận ra đó chỉ là lời dọa suông. Long đắc ý bỏ đi và sự ức hiếp sẽ còn tiếp tục bủa vây Minh trong những ngày tới.",
        choices: [{ text: "↺ Làm lại bước này", nextScene: "minh_1_3", isUndo: true }]
    },
    "minh_1_3_sai_b": {
        charName: "MINH (Cảnh 1.3: Thất bại)",
        charColor: "text-rose-500",
        charSprite: "assets/characters/Char_4_Weak.webp",
        bgTheme: "border-rose-500/80 bg-rose-950/90 animate__shakeX",
        isResult: true,
        resultTitle: "THẤT BẠI - DỐI TRÁ TRẺ CON",
        resultColor: "text-rose-500",
        illustration: "assets/scenes/Char_4_Scene_13.webp",
        story: "Sự bốc phét thái quá chỉ làm Minh trở nên lố bịch. Chú bảo vệ lắc đầu ngán ngẩm, Long thì ôm bụng cười nhạo. Bạn tự làm mất đi sự nghiêm túc của vụ việc.",
        choices: [{ text: "↺ Làm lại bước này", nextScene: "minh_1_3", isUndo: true }]
    },
    "minh_1_thanh_cong": {
        charName: "MINH (Kết Quả Màn 1)",
        charColor: "text-emerald-400",
        charSprite: "assets/characters/Char_4_Attack.webp",
        bgTheme: "border-indigo-500/80 bg-teal-950/90 animate__pulse",
        isResult: true,
        resultTitle: "THÀNH CÔNG - SỨC MẠNH LUẬT PHÁP",
        resultColor: "text-emerald-400",
        illustration: "assets/scenes/Char_4_Scene_2.webp",
        story: "Thấy Minh gọi Công an phường thật sự, Long hoảng loạn lao tới can lại, ấp úng xin lỗi và hứa đền tiền cái yên xe. Khi đối mặt với kẻ lưu manh, sự quyết đoán và luật pháp là vũ khí sắc bén nhất!",
        choices: [{ text: "➔ Chuyển sang Màn 2: Bạo lực mạng trong Game", nextScene: "minh_man_2" }]
    },


    // ------------------------------------------
    // MÀN 2: BẠO LỰC MẠNG TRONG GAME LỚP
    // ------------------------------------------
    "minh_man_2": {
        charName: "MINH (Cảnh 2: Tổ Đội Độc Hại)",
        charColor: "text-indigo-400",
        charSprite: "assets/characters/Char_4.webp",
        bgTheme: "border-indigo-500/30 bg-slate-900/95",
        story: "Đêm qua Minh chơi Liên Quân cùng nhóm con trai trong lớp. Do mạng lag, Minh lỡ feed vài mạng. Thằng Huy bật mic chửi Minh bằng những từ ngữ tục tĩu nhất, sau đó nó cap lịch sử đấu up lên nhóm lớp: 'Thằng Minh là thứ rác rưởi phế vật, game còn chơi không xong thì làm được tích sự gì'.",
        choices: [
            { text: "👉 Lên cơn cay cú, gõ một bài chửi dài 3 trang A4 trong group lớp để giải thích và chửi lại Huy.", nextScene: "minh_2_sai_a" },
            { text: "👉 Tự ti, đập chuột máy tính rồi xin mẹ mai nghỉ học vì sợ quê với các bạn.", nextScene: "minh_2_sai_b" },
            { text: "👉 Out game, tắt thông báo group lớp, chụp màn hình bài phốt của Huy để đó rồi đi ngủ.", nextScene: "minh_2_1" }
        ]
    },
    "minh_2_sai_a": {
        charName: "MINH (Cảnh 2: Thất bại)",
        charColor: "text-rose-500",
        charSprite: "assets/characters/Char_4_Weak.webp",
        bgTheme: "border-rose-500/80 bg-rose-950/90 animate__shakeX",
        isResult: true,
        resultTitle: "THẤT BẠI - CUỘC CHIẾN BÙN LẦY",
        resultColor: "text-rose-500",
        illustration: "assets/scenes/Char_4_Scene_3.webp",
        story: "Việc cãi nhau vì một trận game trên group học tập khiến Minh bị GVCN đánh giá là thiếu ý thức. Huy tiếp tục mỉa mai: 'Gà còn hay cãi'. Minh ôm cục tức không thể xả được.",
        choices: [{ text: "↺ Làm lại bước này", nextScene: "minh_man_2", isUndo: true }]
    },
    "minh_2_sai_b": {
        charName: "MINH (Cảnh 2: Thất bại)",
        charColor: "text-amber-400",
        charSprite: "assets/characters/Char_4_Weak.webp",
        bgTheme: "border-amber-500/50 bg-slate-900/95",
        isResult: true,
        resultTitle: "THẤT BẠI - TỰ TRỪNG PHẠT BẢN THÂN",
        resultColor: "text-amber-400",
        illustration: "assets/scenes/Char_4_Scene_11.webp",
        story: "Tại sao bạn phải đập phá đồ đạc của mình và bỏ dở việc học chỉ vì những lời vô văn hóa của kẻ khác? Hành động này minh chứng cho sự yếu đuối và tự hủy hoại bản thân.",
        choices: [{ text: "↺ Làm lại bước này", nextScene: "minh_man_2", isUndo: true }]
    },

    "minh_2_1": {
        charName: "MINH (Cảnh 2.1: Sức Ép Sáng Hôm Sau)",
        charColor: "text-indigo-400",
        charSprite: "assets/characters/Char_4.webp",
        bgTheme: "border-indigo-500/30 bg-slate-900/95",
        story: "Sáng hôm sau vào lớp, Huy và nhóm bạn nam cố tình nói to: 'Ê cẩn thận, thằng rác rưởi tới kìa, chơi với nó có ngày kéo IQ cả lớp xuống đấy'. Vài bạn nữ cũng quay lại nhìn Minh cười khúc khích.",
        choices: [
            { text: "👉 Lôi cổ áo Huy ngay giữa lớp đòi đấm nhau: 'Mày ngon nói lại xem?'.", nextScene: "minh_2_1_sai_a" },
            { text: "👉 Bỏ chạy ra ngoài hành lang đứng khóc vì quá áp lực.", nextScene: "minh_2_1_sai_b" },
            { text: "👉 Điềm nhiên ngồi xuống chỗ của mình, lấy sách vở ra học bài coi như không nghe thấy tiếng gì.", nextScene: "minh_2_2" }
        ]
    },
    "minh_2_1_sai_a": {
        charName: "MINH (Cảnh 2.1: Thất bại)",
        charColor: "text-rose-500",
        charSprite: "assets/characters/Char_4_Weak.webp",
        bgTheme: "border-rose-500/80 bg-rose-950/90 animate__shakeX",
        isResult: true,
        resultTitle: "THẤT BẠI - CHUYỂN HÓA BẠO LỰC",
        resultColor: "text-rose-500",
        illustration: "assets/scenes/Char_4_Scene_7.webp",
        story: "Chỉ chờ Minh ra tay, nhóm của Huy lập tức xông vào đánh hội đồng Minh với cái cớ 'tự vệ vì bị túm áo trước'. Cả lớp chứng kiến nhưng không ai dám can.",
        choices: [{ text: "↺ Làm lại bước này", nextScene: "minh_2_1", isUndo: true }]
    },
    "minh_2_1_sai_b": {
        charName: "MINH (Cảnh 2.1: Thất bại)",
        charColor: "text-amber-400",
        charSprite: "assets/characters/Char_4_Weak.webp",
        bgTheme: "border-amber-500/50 bg-slate-900/95",
        isResult: true,
        resultTitle: "THẤT BẠI - BỊ THAO TÚNG CẢM XÚC",
        resultColor: "text-amber-400",
        illustration: "assets/scenes/Char_4_Scene_11.webp",
        story: "Nước mắt của đàn ông không giải quyết được những kẻ vô sỉ. Việc bạn suy sụp chính là thành công lớn nhất mà kẻ bắt nạt mong muốn hướng tới.",
        choices: [{ text: "↺ Làm lại bước này", nextScene: "minh_2_1", isUndo: true }]
    },

    "minh_2_2": {
        charName: "MINH (Cảnh 2.2: Cú Lừa Của Giáo Viên)",
        charColor: "text-indigo-400",
        charSprite: "assets/characters/Char_4.webp",
        bgTheme: "border-indigo-500/30 bg-slate-900/95",
        story: "Thấy Minh không phản ứng, Huy cay cú gửi cái ảnh chụp màn hình đó rải rác đi khắp các nhóm lớp khác. Tới tiết sinh hoạt, Thầy GVCN phát hiện sự việc. Thầy nói chung chung: 'Lớp mình dạo này có bạn chơi game rồi xích mích, các em là học sinh thì nên đoàn kết, bỏ qua cho nhau đi'.",
        choices: [
            { text: "👉 Ấm ức gật đầu vâng lời Thầy cho qua chuyện để giữ hòa khí lớp.", nextScene: "minh_2_2_sai_a" },
            { text: "👉 Đứng lên cãi Thầy: 'Thầy xử lý kiểu huề cả làng vậy ai phục hả thầy?'.", nextScene: "minh_2_2_sai_b" },
            { text: "👉 Đứng lên trình bày rõ: 'Thưa Thầy, đây không phải xích mích. Bạn Huy đã có hành vi làm nhục người khác trên MXH. Em yêu cầu Thầy lập biên bản sự việc hôm nay'.", nextScene: "minh_2_3" }
        ]
    },
    "minh_2_2_sai_a": {
        charName: "MINH (Cảnh 2.2: Thất bại)",
        charColor: "text-amber-400",
        charSprite: "assets/characters/Char_4_Weak.webp",
        bgTheme: "border-amber-500/50 bg-slate-900/95",
        isResult: true,
        resultTitle: "THẤT BẠI - HÒA BÌNH GIẢ TẠO",
        resultColor: "text-amber-400",
        illustration: "assets/scenes/Char_4_Scene_1.webp",
        story: "Giải pháp 'giảng hòa chung chung' của thầy không có tác dụng răn đe. Huy sau đó vẫn tiếp tục cười khẩy và lập nhóm chat riêng để cô lập Minh.",
        choices: [{ text: "↺ Làm lại bước này", nextScene: "minh_2_2", isUndo: true }]
    },
    "minh_2_2_sai_b": {
        charName: "MINH (Cảnh 2.2: Thất bại)",
        charColor: "text-rose-500",
        charSprite: "assets/characters/Char_4_Weak.webp",
        bgTheme: "border-rose-500/80 bg-rose-950/90 animate__shakeX",
        isResult: true,
        resultTitle: "THẤT BẠI - LỜI LẼ BẤT KÍNH",
        resultColor: "text-rose-500",
        illustration: "assets/scenes/Char_4_Scene_13.webp",
        story: "Lời nói thiếu tông trọng giáo viên khiến Minh bị kỷ luật lỗi thái độ. Bạn đã tự biến mình từ nạn nhân thành học sinh cá biệt trong mắt Thầy giáo.",
        choices: [{ text: "↺ Làm lại bước này", nextScene: "minh_2_2", isUndo: true }]
    },

    "minh_2_3": {
        charName: "MINH (Cảnh 2.3: Bằng Chứng Bóp Nghẹt)",
        charColor: "text-indigo-400",
        charSprite: "assets/characters/Char_4.webp",
        bgTheme: "border-indigo-500/30 bg-slate-900/95",
        story: "Huy bật dậy chối phăng: 'Thầy ơi nó vu khống em, em chỉ trêu vui lúc chơi game, có lăng mạ ai đâu? Thầy xem FB em làm gì có bài nào? (Huy đã lén xóa bài phốt)'.",
        choices: [
            { text: "👉 Bất lực vì Huy đã xóa bài, ức phát khóc không nói được gì.", nextScene: "minh_2_3_sai_a" },
            { text: "👉 Cầm cái ghế định phang vào mặt Huy vì tội dối trá.", nextScene: "minh_2_3_sai_b" },
            { text: "👉 Bình tĩnh lấy điện thoại ra: 'Thưa thầy, em đã cap màn hình và nhờ Vi bằng lưu vết lại toàn bộ bài đăng từ hôm qua'.", nextScene: "minh_2_thanh_cong" }
        ]
    },
    "minh_2_3_sai_a": {
        charName: "MINH (Cảnh 2.3: Thất bại)",
        charColor: "text-amber-400",
        charSprite: "assets/characters/Char_4_Weak.webp",
        bgTheme: "border-amber-500/50 bg-slate-900/95",
        isResult: true,
        resultTitle: "THẤT BẠI - THIẾU SỰ CHUẨN BỊ",
        resultColor: "text-amber-400",
        illustration: "assets/scenes/Char_4_Scene_11.webp",
        story: "Nói có sách mách có chứng. Không có bằng chứng trong tay, Thầy GVCN không thể xử phạt Huy. Kẻ ác thoát tội một cách nhẹ nhàng.",
        choices: [{ text: "↺ Làm lại bước này", nextScene: "minh_2_3", isUndo: true }]
    },
    "minh_2_3_sai_b": {
        charName: "MINH (Cảnh 2.3: Thất bại)",
        charColor: "text-rose-500",
        charSprite: "assets/characters/Char_4_Weak.webp",
        bgTheme: "border-rose-500/80 bg-rose-950/90 animate__shakeX",
        isResult: true,
        resultTitle: "THẤT BẠI - HÀNH XỬ CÔN ĐỒ",
        resultColor: "text-rose-500",
        illustration: "assets/scenes/Char_4_Scene_7.webp",
        story: "Vừa vác ghế lên, Minh đã bị bạn bè can lại và Thầy giáo lập biên bản bạo lực học đường. Huy diễn trò đóng vai nạn nhân hoàn hảo.",
        choices: [{ text: "↺ Làm lại bước này", nextScene: "minh_2_3", isUndo: true }]
    },
    "minh_2_thanh_cong": {
        charName: "MINH (Kết Quả Màn 2)",
        charColor: "text-emerald-400",
        charSprite: "assets/characters/Char_4_Attack.webp",
        bgTheme: "border-indigo-500/80 bg-teal-950/90 animate__pulse",
        isResult: true,
        resultTitle: "THÀNH CÔNG - SỰ CHUẨN BỊ HOÀN HẢO",
        resultColor: "text-emerald-400",
        illustration: "assets/scenes/Char_4_Scene_4.webp",
        story: "Bức ảnh chụp màn hình rõ nét thời gian, nội dung và ID tài khoản của Huy khiến Huy cứng họng. Thầy GVCN lập biên bản hạ hạnh kiểm Huy và yêu cầu xin lỗi công khai. Bạo lực mạng đã bị đập tan bằng cái đầu lạnh!",
        choices: [{ text: "➔ Chuyển sang Màn 3: Trấn Lột Đồ Dùng", nextScene: "minh_man_3" }]
    },


    // ------------------------------------------
    // MÀN 3: TRẤN LỘT BẠO LỰC (NHÀ VỆ SINH)
    // ------------------------------------------
    "minh_man_3": {
        charName: "MINH (Cảnh 3: Không Gian Kín)",
        charColor: "text-indigo-400",
        charSprite: "assets/characters/Char_4.webp",
        bgTheme: "border-indigo-500/30 bg-slate-900/95",
        story: "Minh vừa mua đồng hồ G-Shock mới. Đang rửa tay trong nhà vệ sinh, 3 thanh niên khối trên bước vào, khóa trái cửa lại. Bọn chúng rút dao rọc giấy gõ gõ vào tường: 'Tháo đồng hồ ra cho mượn coi giờ vài bữa coi em trai'.",
        choices: [
            { text: "👉 Lao vào định giật lại con dao rọc giấy để mở đường máu chạy thoát.", nextScene: "minh_3_sai_a" },
            { text: "👉 Từ chối dõng dạc: 'Các anh làm vậy là vi phạm pháp luật, tôi không đưa!'.", nextScene: "minh_3_sai_b" },
            { text: "👉 Bình tĩnh cởi đồng hồ đưa cho chúng, không phản kháng để bảo toàn tính mạng.", nextScene: "minh_3_1" }
        ]
    },
    "minh_3_sai_a": {
        charName: "MINH (Cảnh 3: Thất bại)",
        charColor: "text-rose-500",
        charSprite: "assets/characters/Char_4_Weak.webp",
        bgTheme: "border-rose-500/80 bg-rose-950/90 animate__shakeX",
        isResult: true,
        resultTitle: "THẤT BẠI - HÀNH ĐỘNG TỰ SÁT",
        resultColor: "text-rose-500",
        illustration: "assets/scenes/Char_4_Scene_7.webp",
        story: "Trong không gian hẹp (phòng vệ sinh), chống lại 3 kẻ có hung khí là tự sát. Minh bị dao rọc giấy cứa rách tay và bị đánh bất tỉnh.",
        choices: [{ text: "↺ Suy ngẫm và thử lại", nextScene: "minh_man_3", isUndo: true }]
    },
    "minh_3_sai_b": {
        charName: "MINH (Cảnh 3: Thất bại)",
        charColor: "text-amber-400",
        charSprite: "assets/characters/Char_4_Weak.webp",
        bgTheme: "border-amber-500/50 bg-slate-900/95",
        isResult: true,
        resultTitle: "THẤT BẠI - NÓI LÝ VỚI KẺ CƯỚP",
        resultColor: "text-amber-400",
        illustration: "assets/scenes/Char_4_Scene_1.webp",
        story: "Kẻ lưu manh không quan tâm đến pháp luật khi chúng đang nắm lợi thế. Bọn chúng cười lớn, lao vào túm cổ áo và tát Minh lật mặt để tự tháo đồng hồ.",
        choices: [{ text: "↺ Suy ngẫm và thử lại", nextScene: "minh_man_3", isUndo: true }]
    },

    "minh_3_1": {
        charName: "MINH (Cảnh 3.1: Theo Dấu Tội Phạm)",
        charColor: "text-indigo-400",
        charSprite: "assets/characters/Char_4.webp",
        bgTheme: "border-indigo-500/30 bg-slate-900/95",
        story: "Bọn chúng lấy được đồng hồ liền đắc ý mở khóa cửa bỏ đi. Minh bước ra ngoài bình an vô sự. Chiếc đồng hồ trị giá 3 triệu đồng đã biến mất.",
        choices: [
            { text: "👉 Về nhà khóc lóc báo bố mẹ: 'Con lỡ làm rớt mất đồng hồ trên sân trường rồi'.", nextScene: "minh_3_1_sai_a" },
            { text: "👉 Lên phòng GVCN khai báo toàn bộ hình dáng 3 kẻ cướp đồ.", nextScene: "minh_3_1_sai_b" },
            { text: "👉 Âm thầm đi theo chúng từ xa để biết bọn chúng học lớp nào, sau đó dùng tính năng 'Find my device' trên điện thoại để chụp màn hình vị trí chiếc đồng hồ.", nextScene: "minh_3_2" }
        ]
    },
    "minh_3_1_sai_a": {
        charName: "MINH (Cảnh 3.1: Thất bại)",
        charColor: "text-amber-400",
        charSprite: "assets/characters/Char_4_Weak.webp",
        bgTheme: "border-amber-500/50 bg-slate-900/95",
        isResult: true,
        resultTitle: "THẤT BẠI - BAO CHE CHO KẺ XẤU",
        resultColor: "text-amber-400",
        illustration: "assets/scenes/Char_4_Scene_11.webp",
        story: "Nói dối gia đình khiến kẻ cướp thoải mái tẩu tán tài sản. Lần sau, khi thấy bạn nhát gan, chúng sẽ tiếp tục trấn lột những món đồ khác.",
        choices: [{ text: "↺ Làm lại bước này", nextScene: "minh_3_1", isUndo: true }]
    },
    "minh_3_1_sai_b": {
        charName: "MINH (Cảnh 3.1: Thất bại)",
        charColor: "text-rose-500",
        charSprite: "assets/characters/Char_4_Weak.webp",
        bgTheme: "border-rose-500/80 bg-rose-950/90 animate__shakeX",
        isResult: true,
        resultTitle: "THẤT BẠI - BỨT DÂY ĐỘNG RỪNG",
        resultColor: "text-rose-500",
        illustration: "assets/scenes/Char_4_Scene_13.webp",
        story: "Cô giáo xuống lớp kiểm tra thì bọn chúng đã giấu đồng hồ đi chỗ khác và chối tội. Không có tang vật, Cô giáo đành bó tay.",
        choices: [{ text: "↺ Làm lại bước này", nextScene: "minh_3_1", isUndo: true }]
    },

    "minh_3_2": {
        charName: "MINH (Cảnh 3.2: Công An Vào Cuộc)",
        charColor: "text-indigo-400",
        charSprite: "assets/characters/Char_4.webp",
        bgTheme: "border-indigo-500/30 bg-slate-900/95",
        story: "Tối đó, định vị báo chiếc đồng hồ đang nằm tại một quán Bi-a gần trường. Minh báo ngay cho Bố. Bố Minh dẫn theo 2 chú Công an phường ập vào quán Bi-a bắt quả tang 3 tên đang đeo đồng hồ của Minh.",
        choices: [
            { text: "👉 Hả hê chỉ mặt chúng: 'Ngu chưa con, cho tụi mày đi tù mọt gông!'.", nextScene: "minh_3_2_sai_a" },
            { text: "👉 Sợ bọn nó nhớ mặt trả thù nên nấp sau lưng Bố, không dám ra nhận diện.", nextScene: "minh_3_2_sai_b" },
            { text: "👉 Bình tĩnh bước ra, bấm mã pin mở khóa đồng hồ trước mặt Công an để chứng minh chính chủ.", nextScene: "minh_3_3" }
        ]
    },
    "minh_3_2_sai_a": {
        charName: "MINH (Cảnh 3.2: Thất bại)",
        charColor: "text-amber-400",
        charSprite: "assets/characters/Char_4_Weak.webp",
        bgTheme: "border-amber-500/50 bg-slate-900/95",
        isResult: true,
        resultTitle: "THẤT BẠI - HÀNH XỬ CHỢ BÚA",
        resultColor: "text-amber-400",
        illustration: "assets/scenes/Char_4_Scene_7.webp",
        story: "Sự kiêu ngạo quá đà khiến các chú Công an mất thiện cảm, còn bọn tội phạm thì ghim hận sâu sắc thề ngày ra trại sẽ tìm Minh xử lý.",
        choices: [{ text: "↺ Làm lại bước này", nextScene: "minh_3_2", isUndo: true }]
    },
    "minh_3_2_sai_b": {
        charName: "MINH (Cảnh 3.2: Thất bại)",
        charColor: "text-rose-500",
        charSprite: "assets/characters/Char_4_Weak.webp",
        bgTheme: "border-rose-500/80 bg-rose-950/90 animate__shakeX",
        isResult: true,
        resultTitle: "THẤT BẠI - THIẾU LỜI KHAI NHÂN CHỨNG",
        resultColor: "text-rose-500",
        illustration: "assets/scenes/Char_4_Scene_11.webp",
        story: "Do Minh sợ hãi không dám nhận diện hung thủ, Công an thiếu bằng chứng trực tiếp 'cướp giật', bọn chúng chỉ bị quy vào tội 'nhặt được của rơi không trả'.",
        choices: [{ text: "↺ Làm lại bước này", nextScene: "minh_3_2", isUndo: true }]
    },

    "minh_3_3": {
        charName: "MINH (Cảnh 3.3: Lời Ngụy Biện Cuối Cùng)",
        charColor: "text-indigo-400",
        charSprite: "assets/characters/Char_4.webp",
        bgTheme: "border-indigo-500/30 bg-slate-900/95",
        story: "Tên cầm đầu toát mồ hôi, cố cãi vớt: 'Dạ cháu không cướp, thằng Minh nó nợ tiền tụi cháu nên gán đồng hồ trừ nợ thôi ạ!'.",
        choices: [
            { text: "👉 Cãi nhao nhao: 'Mày nói điêu, tao nợ mày hồi nào?'.", nextScene: "minh_3_3_sai_a" },
            { text: "👉 Im lặng mong các chú Công an tự hiểu.", nextScene: "minh_3_3_sai_b" },
            { text: "👉 Đưa biên lai mua giày/sao kê ngân hàng ra: 'Chú kiểm tra camera ở nhà vệ sinh tầng 2 xem tụi nó có mang dao rọc giấy ép cháu không nhé'.", nextScene: "minh_3_thanh_cong" }
        ]
    },
    "minh_3_3_sai_a": {
        charName: "MINH (Cảnh 3.3: Thất bại)",
        charColor: "text-amber-400",
        charSprite: "assets/characters/Char_4_Weak.webp",
        bgTheme: "border-amber-500/50 bg-slate-900/95",
        isResult: true,
        resultTitle: "THẤT BẠI - RỐI TRÍ VÔ LÝ",
        resultColor: "text-amber-400",
        illustration: "assets/scenes/Char_4_Scene_13.webp",
        story: "Trong quá trình điều tra hình sự, cãi vã lớn tiếng không phải là bằng chứng. Cuộc tranh luận khiến vụ việc trở nên rắc rối dân sự.",
        choices: [{ text: "↺ Làm lại bước này", nextScene: "minh_3_3", isUndo: true }]
    },
    "minh_3_3_sai_b": {
        charName: "MINH (Cảnh 3.3: Thất bại)",
        charColor: "text-rose-500",
        charSprite: "assets/characters/Char_4_Weak.webp",
        bgTheme: "border-rose-500/80 bg-rose-950/90 animate__shakeX",
        isResult: true,
        resultTitle: "THẤT BẠI - BỎ LỠ CƠ HỘI CHỐT HẠ",
        resultColor: "text-rose-500",
        illustration: "assets/scenes/Char_4_Scene_11.webp",
        story: "Bạn không lên tiếng phủ nhận, Công an sẽ phải điều tra thêm về nghi vấn nợ nần, kéo dài thời gian xử lý và gây mệt mỏi cho gia đình.",
        choices: [{ text: "↺ Làm lại bước này", nextScene: "minh_3_3", isUndo: true }]
    },
    "minh_3_thanh_cong": {
        charName: "MINH (Kết Quả Màn 3)",
        charColor: "text-emerald-400",
        charSprite: "assets/characters/Char_4_Attack.webp",
        bgTheme: "border-indigo-500/80 bg-teal-950/90 animate__pulse",
        isResult: true,
        resultTitle: "THÀNH CÔNG - SỰ TRỪNG PHẠT THÍCH ĐÁNG",
        resultColor: "text-emerald-400",
        illustration: "assets/scenes/Char_4_Scene_2.webp",
        story: "Lời khai về 'dao rọc giấy' và camera nhà vệ sinh khớp nhau 100%. 3 tên côn đồ bị khởi tố tội 'Cướp tài sản' có sử dụng hung khí. Minh bảo toàn được mạng sống lúc nguy hiểm và dùng trí tuệ lấy lại công bằng. Quá ngầu!",
        choices: [{ text: "➔ Chuyển sang Màn 4: Thử Thách Toxic", nextScene: "minh_man_4" }]
    },


    // ------------------------------------------
    // MÀN 4: THỬ THÁCH MẠO HIỂM (TOXIC MASCULINITY)
    // ------------------------------------------
    "minh_man_4": {
        charName: "MINH (Cảnh 4: Thử Thách 'Đàn Ông')",
        charColor: "text-indigo-400",
        charSprite: "assets/characters/Char_4.webp",
        bgTheme: "border-indigo-500/30 bg-slate-900/95",
        story: "Hội con trai lớp đang có trào lưu #ParkourTikTok. Chúng ép Minh: 'Mày muốn chơi chung nhóm thì trèo qua lan can tầng 3, nhảy xuống mái tôn nhà xe rồi lộn nhào để tụi tao quay clip. Nhát thì mặc váy đi'.",
        choices: [
            { text: "👉 Tự ái dồn máu lên não, nhắm mắt leo lên lan can nhảy xuống để chứng minh độ 'chuẩn men'.", nextScene: "minh_4_sai_a" },
            { text: "👉 Chạy đi tìm thầy giám thị báo cáo là có nhóm xúi giục nhảy lầu.", nextScene: "minh_4_sai_b" },
            { text: "👉 Nhìn thẳng mặt đứa xúi: 'Đàn ông là dùng cái đầu chứ không dùng cái xác. Tao không chơi trò bại não này' rồi quay lưng đi.", nextScene: "minh_4_1" }
        ]
    },
    "minh_4_sai_a": {
        charName: "MINH (Cảnh 4: Thất bại)",
        charColor: "text-rose-500",
        charSprite: "assets/characters/Char_4_Weak.webp",
        bgTheme: "border-rose-500/80 bg-rose-950/90 animate__shakeX",
        isResult: true,
        resultTitle: "THẤT BẠI - CÁI GIÁ BẰNG MÁU",
        resultColor: "text-rose-500",
        illustration: "assets/scenes/Char_4_Scene_7.webp",
        story: "Mái tôn mục nát sập xuống. Minh ngã lộn cổ gãy gãy 2 xương sườn và đa chấn thương. Bọn 'anh em' quay clip sợ quá bỏ chạy mất hút. Sĩ diện hảo đã đánh đổi bằng cả tương lai.",
        choices: [{ text: "↺ Suy ngẫm và thử lại", nextScene: "minh_man_4", isUndo: true }]
    },
    "minh_4_sai_b": {
        charName: "MINH (Cảnh 4: Thất bại)",
        charColor: "text-amber-400",
        charSprite: "assets/characters/Char_4_Weak.webp",
        bgTheme: "border-amber-500/50 bg-slate-900/95",
        isResult: true,
        resultTitle: "THẤT BẠI - BỊ TẨY CHAY CHÍNH THỨC",
        resultColor: "text-amber-400",
        illustration: "assets/scenes/Char_4_Scene_11.webp",
        story: "Chạy đi méc khi sự việc chưa xảy ra khiến bọn con trai kết luận Minh là 'đồ đàn bà hay mách lẻo'. Minh bị loại khỏi tất cả các hoạt động tập thể nam giới trong lớp mãi mãi.",
        choices: [{ text: "↺ Suy ngẫm và thử lại", nextScene: "minh_man_4", isUndo: true }]
    },

    "minh_4_1": {
        charName: "MINH (Cảnh 4.1: Sự Kích Bác Leo Thang)",
        charColor: "text-indigo-400",
        charSprite: "assets/characters/Char_4.webp",
        bgTheme: "border-indigo-500/30 bg-slate-900/95",
        story: "Hành động dứt khoát của Minh làm Kiên (đứa cầm đầu) quê độ. Kiên nhảy luôn lên gờ lan can tầng 3, vỗ ngực: 'Đấy, làm đàn ông nó phải thế này! Nhìn tao làm mẫu cho cái thằng hèn này xem'. Lan can đang rung rinh do con ốc đã cũ rỉ.",
        choices: [
            { text: "👉 Cười khẩy: 'Giỏi thì nhảy đi, tao quay clip cho'.", nextScene: "minh_4_1_sai_a" },
            { text: "👉 Mặc kệ nó, bỏ đi về lớp coi như không liên quan đến mình.", nextScene: "minh_4_1_sai_b" },
            { text: "👉 Hét lớn: 'Xuống ngay! Cái lan can đang lung lay kìa mày điên à!' rồi lao tới giữ chân Kiên.", nextScene: "minh_4_2" }
        ]
    },
    "minh_4_1_sai_a": {
        charName: "MINH (Cảnh 4.1: Thất bại)",
        charColor: "text-rose-500",
        charSprite: "assets/characters/Char_4_Weak.webp",
        bgTheme: "border-rose-500/80 bg-rose-950/90 animate__shakeX",
        isResult: true,
        resultTitle: "THẤT BẠI - XÚI GIỤC TỰ SÁT",
        resultColor: "text-rose-500",
        illustration: "assets/scenes/Char_4_Scene_13.webp",
        story: "Lời kích bác của Minh làm Kiên liều mạng buông tay nhảy xuống và gặp nạn nặng. Cảnh sát điều tra đoạn clip và kết tội Minh có hành vi xúi giục, kích động người khác gây nguy hiểm.",
        choices: [{ text: "↺ Làm lại bước này", nextScene: "minh_4_1", isUndo: true }]
    },
    "minh_4_1_sai_b": {
        charName: "MINH (Cảnh 4.1: Thất bại)",
        charColor: "text-amber-400",
        charSprite: "assets/characters/Char_4_Weak.webp",
        bgTheme: "border-amber-500/50 bg-slate-900/95",
        isResult: true,
        resultTitle: "THẤT BẠI - SỰ VÔ CẢM LẠNH LÙNG",
        resultColor: "text-amber-400",
        illustration: "assets/scenes/Char_4_Scene_11.webp",
        story: "Vừa quay lưng, Minh nghe tiếng rầm lớn. Lan can gãy, Kiên rơi xuống đất. Cả đời Minh sẽ phải mang nỗi ám ảnh về khoảnh khắc mình có thể cứu bạn nhưng lại chọn bỏ đi.",
        choices: [{ text: "↺ Làm lại bước này", nextScene: "minh_4_1", isUndo: true }]
    },

    "minh_4_2": {
        charName: "MINH (Cảnh 4.2: Tình Thế Ngàn Cân Treo Sợi Tóc)",
        charColor: "text-indigo-400",
        charSprite: "assets/characters/Char_4.webp",
        bgTheme: "border-indigo-500/30 bg-slate-900/95",
        story: "Nghe Minh hét, Kiên giật mình nhìn xuống thấy con ốc lan can bong ra thật. Kiên luống cuống trượt chân, người lộn ngược ra ngoài không trung nhưng Minh đã kịp thời túm chặt lấy cổ tay Kiên.",
        choices: [
            { text: "👉 Buông một tay ra để lấy điện thoại gọi cấp cứu.", nextScene: "minh_4_2_sai_a" },
            { text: "👉 Cố gắng dùng hết sức một mình kéo Kiên lên.", nextScene: "minh_4_2_sai_b" },
            { text: "👉 Gồng cứng tay giữ chặt, gào thét tụi con trai đang đứng quay clip: 'Bỏ điện thoại xuống phụ tao kéo nó lên nhanh!'.", nextScene: "minh_4_3" }
        ]
    },
    "minh_4_2_sai_a": {
        charName: "MINH (Cảnh 4.2: Thất bại)",
        charColor: "text-rose-500",
        charSprite: "assets/characters/Char_4_Weak.webp",
        bgTheme: "border-rose-500/80 bg-rose-950/90 animate__shakeX",
        isResult: true,
        resultTitle: "THẤT BẠI - SAI LẦM TAI HẠI",
        resultColor: "text-rose-500",
        illustration: "assets/scenes/Char_4_Scene_7.webp",
        story: "Sức nặng của 1 người rơi tự do quá lớn. Vừa buông 1 tay ra, Minh mất thế và bị kéo tuột theo Kiên rơi thẳng xuống tầng 1. Cả 2 cùng chấn thương nặng.",
        choices: [{ text: "↺ Làm lại bước này", nextScene: "minh_4_2", isUndo: true }]
    },
    "minh_4_2_sai_b": {
        charName: "MINH (Cảnh 4.2: Thất bại)",
        charColor: "text-amber-400",
        charSprite: "assets/characters/Char_4_Weak.webp",
        bgTheme: "border-amber-500/50 bg-slate-900/95",
        isResult: true,
        resultTitle: "THẤT BẠI - HẾT SỨC CHỊU ĐỰNG",
        resultColor: "text-amber-400",
        illustration: "assets/scenes/Char_4_Scene_11.webp",
        story: "Một học sinh cấp 3 không đủ thể lực kéo một người treo lơ lửng bằng 1 tay. Minh đuối sức dần và cuối cùng Kiên vuột tay rơi xuống đất.",
        choices: [{ text: "↺ Làm lại bước này", nextScene: "minh_4_2", isUndo: true }]
    },

    "minh_4_3": {
        charName: "MINH (Cảnh 4.3: Hậu Báo Cáo)",
        charColor: "text-indigo-400",
        charSprite: "assets/characters/Char_4.webp",
        bgTheme: "border-indigo-500/30 bg-slate-900/95",
        story: "3 đứa con trai khác lao tới phụ Minh kéo Kiên lên an toàn. Thầy cô ập tới. Kiên vì quá sợ bị đuổi học nên chỉ tay vào Minh cắn trộm: 'Thầy ơi thằng Minh nó xô em ngã xuống lan can ạ!'.",
        choices: [
            { text: "👉 Đấm thẳng mặt Kiên vì tội ăn cháo đá bát.", nextScene: "minh_4_3_sai_a" },
            { text: "👉 Oà khóc tức tưởi: 'Thầy ơi nó nói dối, chính em vừa cứu mạng nó mà'.", nextScene: "minh_4_3_sai_b" },
            { text: "👉 Lạnh lùng quay sang 3 đứa kia: 'Bọn mày vừa quay clip mà đúng không? Mở cho thầy cô xem ai xúi ai trèo, và ai kéo nó lên'.", nextScene: "minh_4_thanh_cong" }
        ]
    },
    "minh_4_3_sai_a": {
        charName: "MINH (Cảnh 4.3: Thất bại)",
        charColor: "text-rose-500",
        charSprite: "assets/characters/Char_4_Weak.webp",
        bgTheme: "border-rose-500/80 bg-rose-950/90 animate__shakeX",
        isResult: true,
        resultTitle: "THẤT BẠI - BIẾN ƠN THÀNH OÁN",
        resultColor: "text-rose-500",
        illustration: "assets/scenes/Char_4_Scene_13.webp",
        story: "Cú đấm trước mặt giáo viên chứng minh cho lời vu khống của Kiên là đúng. Thầy cô lập tức khống chế Minh vì nghi ngờ Minh có hành vi cố ý giết người.",
        choices: [{ text: "↺ Làm lại bước này", nextScene: "minh_4_3", isUndo: true }]
    },
    "minh_4_3_sai_b": {
        charName: "MINH (Cảnh 4.3: Thất bại)",
        charColor: "text-amber-400",
        charSprite: "assets/characters/Char_4_Weak.webp",
        bgTheme: "border-amber-500/50 bg-slate-900/95",
        isResult: true,
        resultTitle: "THẤT BẠI - LÝ LẼ BẰNG NƯỚC MẮT",
        resultColor: "text-amber-400",
        illustration: "assets/scenes/Char_4_Scene_11.webp",
        story: "Sự yếu đuối không giúp minh oan. Cả 2 đang khai ngược nhau và thầy cô quyết định lập biên bản đình chỉ cả 2 chờ điều tra hình sự.",
        choices: [{ text: "↺ Làm lại bước này", nextScene: "minh_4_3", isUndo: true }]
    },
    "minh_4_thanh_cong": {
        charName: "MINH (Kết Quả Màn 4)",
        charColor: "text-emerald-400",
        charSprite: "assets/characters/Char_4_Attack.webp",
        bgTheme: "border-indigo-500/80 bg-teal-950/90 animate__pulse",
        isResult: true,
        resultTitle: "THÀNH CÔNG - NGƯỜI ĐÀN ÔNG BẢN LĨNH",
        resultColor: "text-emerald-400",
        illustration: "assets/scenes/Char_4_Scene_4.webp",
        story: "Đoạn clip đã minh oan toàn bộ cho Minh. Kiên bị đuổi học vì vu khống và chơi trò nguy hiểm. Cả trường tuyên dương sự dũng cảm và lý trí tuyệt vời của Minh. Đàn ông chuẩn men là người dùng sức mạnh để cứu người, không phải để hại mình!",
        choices: [{ text: "➔ Chuyển sang Màn 5: Định Kiến Giới", nextScene: "minh_man_5" }]
    },


    // ------------------------------------------
    // MÀN 5: ĐỊNH KIẾN GIỚI (NAM TÍNH ĐỘC HẠI)
    // ------------------------------------------
    "minh_man_5": {
        charName: "MINH (Cảnh 5: Cơn Thịnh Nộ Trong Lớp)",
        charColor: "text-indigo-400",
        charSprite: "assets/characters/Char_4.webp",
        bgTheme: "border-indigo-500/30 bg-slate-900/95",
        story: "Minh rất đam mê vẽ Manga. Giờ tự quản, một nhóm nam sinh cá biệt cố tình giật lấy cuốn sổ vẽ của Minh, xé nát bức tranh Minh đã dồn tâm huyết vẽ cả tuần nay. Chúng ném vụn giấy vào mặt Minh cười hô hố: 'Thằng ái nam ái nữ, đàn ông thì đi đá banh đi, vẽ ba cái thứ bánh bèo này làm gì'.",
        choices: [
            { text: "👉 Lặng lẽ nhặt từng mảnh giấy lên dán lại, cố nhịn để không đánh nhau.", nextScene: "minh_5_sai_a" },
            { text: "👉 Rút cây compa trong hộp bút ra đâm thẳng vào tay thằng xé.", nextScene: "minh_5_sai_b" },
            { text: "👉 Nhìn thẳng vào mắt kẻ cầm đầu, giọng danh thép: 'Mày đền tiền bức tranh này cho tao!'.", nextScene: "minh_5_1" }
        ]
    },
    "minh_5_sai_a": {
        charName: "MINH (Cảnh 5: Thất bại)",
        charColor: "text-amber-400",
        charSprite: "assets/characters/Char_4_Weak.webp",
        bgTheme: "border-amber-500/50 bg-slate-900/95",
        isResult: true,
        resultTitle: "THẤT BẠI - SỰ CHỊU ĐỰNG BẤT LỰC",
        resultColor: "text-amber-400",
        illustration: "assets/scenes/Char_4_Scene_11.webp",
        story: "Minh cắm cúi nhặt giấy trong tiếng cười cợt của cả lớp. Sự im lặng khiến nhóm bạn mặc định Minh thực sự yếu đuối. Sau đó chúng tiếp tục xé thêm sách vở và nhổ bọt vào đồ dùng học tập của Minh.",
        choices: [{ text: "↺ Suy ngẫm và thử lại", nextScene: "minh_man_5", isUndo: true }]
    },
    "minh_5_sai_b": {
        charName: "MINH (Cảnh 5: Thất bại)",
        charColor: "text-rose-500",
        charSprite: "assets/characters/Char_4_Weak.webp",
        bgTheme: "border-rose-500/80 bg-rose-950/90 animate__shakeX",
        isResult: true,
        resultTitle: "THẤT BẠI - HUNG KHÍ TỘI LỖI",
        resultColor: "text-rose-500",
        illustration: "assets/scenes/Char_4_Scene_13.webp",
        story: "Cú đâm bằng compa gây chảy máu nghiêm trọng. Bức tranh bị hỏng có thể vẽ lại, nhưng vết thương do hung khí gây ra sẽ đưa bạn vào trại giam giáo dưỡng thanh thiếu niên.",
        choices: [{ text: "↺ Suy ngẫm và thử lại", nextScene: "minh_man_5", isUndo: true }]
    },

    "minh_5_1": {
        charName: "MINH (Cảnh 5.1: Sự Sỉ Nhục)",
        charColor: "text-indigo-400",
        charSprite: "assets/characters/Char_4.webp",
        bgTheme: "border-indigo-500/30 bg-slate-900/95",
        story: "Thằng Trường (cầm đầu) cười nhếch mép, rút ra tờ 500 đồng nhàu nát vứt xuống đất: 'Bức tranh giẻ rách của mày tao đền 500 đồng là đắt đấy, nhặt lên mà liếm đi con'.",
        choices: [
            { text: "👉 Đạp tờ tiền đi, nhổ bọt vào mặt Trường.", nextScene: "minh_5_1_sai_a" },
            { text: "👉 Xấu hổ quá, bỏ chạy ra khỏi lớp.", nextScene: "minh_5_1_sai_b" },
            { text: "👉 Lấy điện thoại chụp lại tờ 500 đồng và đống giấy vụn: 'Tao vẽ bức này bằng màu Acrylic xịn nhập Pháp giá 450k. Tờ 500 đồng của mày không đủ để ra công an đâu'.", nextScene: "minh_5_2" }
        ]
    },
    "minh_5_1_sai_a": {
        charName: "MINH (Cảnh 5.1: Thất bại)",
        charColor: "text-rose-500",
        charSprite: "assets/characters/Char_4_Weak.webp",
        bgTheme: "border-rose-500/80 bg-rose-950/90 animate__shakeX",
        isResult: true,
        resultTitle: "THẤT BẠI - HÀNH XỬ VÔ VĂN HÓA",
        resultColor: "text-rose-500",
        illustration: "assets/scenes/Char_4_Scene_7.webp",
        story: "Hành vi nhổ bọt biến Minh thành kẻ dơ bẩn và thiếu văn hóa không kém gì chúng. Lớp học lại biến thành một bãi chiến trường ẩu đả.",
        choices: [{ text: "↺ Làm lại bước này", nextScene: "minh_5_1", isUndo: true }]
    },
    "minh_5_1_sai_b": {
        charName: "MINH (Cảnh 5.1: Thất bại)",
        charColor: "text-amber-400",
        charSprite: "assets/characters/Char_4_Weak.webp",
        bgTheme: "border-amber-500/50 bg-slate-900/95",
        isResult: true,
        resultTitle: "THẤT BẠI - RÚT LUI TRONG NHỤC NHÃ",
        resultColor: "text-amber-400",
        illustration: "assets/scenes/Char_4_Scene_11.webp",
        story: "Bạn từ bỏ chính tác phẩm của mình nghĩa là bạn đồng ý với việc chúng có quyền chà đạp lên ước mơ của bạn.",
        choices: [{ text: "↺ Làm lại bước này", nextScene: "minh_5_1", isUndo: true }]
    },

    "minh_5_2": {
        charName: "MINH (Cảnh 5.2: Đối Mặt Thầy Cô)",
        charColor: "text-indigo-400",
        charSprite: "assets/characters/Char_4.webp",
        bgTheme: "border-indigo-500/30 bg-slate-900/95",
        story: "Sự cứng rắn của Minh làm Trường hơi chùn bước. Hôm sau, Minh mang tệp ảnh và hóa đơn màu vẽ lên nhờ Cô giáo Mỹ thuật (người mà Minh rất tin tưởng) xử lý. Khi Cô gọi Trường lên, nó cãi phăng: 'Em lỡ tay quẹt qua làm rách tí mép thôi, bạn ấy tự xé nát ra để ăn vạ em á cô'.",
        choices: [
            { text: "👉 Tức giận gào lên: 'Mày là con nói láo!'.", nextScene: "minh_5_2_sai_a" },
            { text: "👉 Ức phát khóc, năn nỉ Cô giáo phải tin mình.", nextScene: "minh_5_2_sai_b" },
            { text: "👉 Lạnh lùng nói: 'Cô check vân tay trên tệp giấy vụn xem có vân tay của ai vò nát không. Và check vết mực đỏ từ bức tranh có còn dính trên áo đồng phục của Trường không'.", nextScene: "minh_5_3" }
        ]
    },
    "minh_5_2_sai_a": {
        charName: "MINH (Cảnh 5.2: Thất bại)",
        charColor: "text-rose-500",
        charSprite: "assets/characters/Char_4_Weak.webp",
        bgTheme: "border-rose-500/80 bg-rose-950/90 animate__shakeX",
        isResult: true,
        resultTitle: "THẤT BẠI - SẬP BẪY MẤT BÌNH TĨNH",
        resultColor: "text-rose-500",
        illustration: "assets/scenes/Char_4_Scene_13.webp",
        story: "Sự mất bình tĩnh trước mặt Cô giáo khiến lời tố cáo của Minh kém đi phần đáng tin cậy. Trường dễ dàng thao túng tâm lý giáo viên.",
        choices: [{ text: "↺ Làm lại bước này", nextScene: "minh_5_2", isUndo: true }]
    },
    "minh_5_2_sai_b": {
        charName: "MINH (Cảnh 5.2: Thất bại)",
        charColor: "text-amber-400",
        charSprite: "assets/characters/Char_4_Weak.webp",
        bgTheme: "border-amber-500/50 bg-slate-900/95",
        isResult: true,
        resultTitle: "THẤT BẠI - SỰ CAM CHỊU BẤT LỰC",
        resultColor: "text-amber-400",
        illustration: "assets/scenes/Char_4_Scene_11.webp",
        story: "Nước mắt không phải là bằng chứng kỷ luật. Cô giáo vì không đủ căn cứ nên chỉ nhắc nhở cả 2 bạn về lớp, sự việc rơi vào quên lãng.",
        choices: [{ text: "↺ Làm lại bước này", nextScene: "minh_5_2", isUndo: true }]
    },

    "minh_5_3": {
        charName: "MINH (Cảnh 5.3: Cú Chốt Hạ)",
        charColor: "text-indigo-400",
        charSprite: "assets/characters/Char_4.webp",
        bgTheme: "border-indigo-500/30 bg-slate-900/95",
        story: "Trường giật thột nhìn xuống cổ tay áo, quả nhiên có vết màu đỏ dính lại từ lúc xé vụn bức tranh. Cô giáo lập tức yêu cầu Trường viết bản tường trình.",
        choices: [
            { text: "👉 Tha cho Trường nếu nó xin lỗi để giữ hòa khí.", nextScene: "minh_5_3_sai_a" },
            { text: "👉 Yêu cầu đuổi học Trường vĩnh viễn.", nextScene: "minh_5_3_sai_b" },
            { text: "👉 Yêu cầu Trường bồi thường đúng 450k tiền màu và công khai xin lỗi trên loa phát thanh trường về hành vi miệt thị sở thích cá nhân.", nextScene: "minh_5_thanh_cong" }
        ]
    },
    "minh_5_3_sai_a": {
        charName: "MINH (Cảnh 5.3: Thất bại)",
        charColor: "text-amber-400",
        charSprite: "assets/characters/Char_4_Weak.webp",
        bgTheme: "border-amber-500/50 bg-slate-900/95",
        isResult: true,
        resultTitle: "THẤT BẠI - LÒNG TỐT ĐẶT SAI CHỖ",
        resultColor: "text-amber-400",
        illustration: "assets/scenes/Char_4_Scene_1.webp",
        story: "Sự nhân nhượng quá dễ dàng khiến kẻ xấu không thấy được cái giá phải trả. Tụi nó vẫn ngấm ngầm coi thường sở thích của Minh.",
        choices: [{ text: "↺ Làm lại bước này", nextScene: "minh_5_3", isUndo: true }]
    },
    "minh_5_3_sai_b": {
        charName: "MINH (Cảnh 5.3: Thất bại)",
        charColor: "text-rose-500",
        charSprite: "assets/characters/Char_4_Weak.webp",
        bgTheme: "border-rose-500/80 bg-rose-950/90 animate__shakeX",
        isResult: true,
        resultTitle: "THẤT BẠI - HÌNH PHẠT KHÔNG TƯƠNG XỨNG",
        resultColor: "text-rose-500",
        illustration: "assets/scenes/Char_4_Scene_13.webp",
        story: "Mức phạt đuổi học cho hành vi xé giấy là quá vô lý với luật Giáo dục. Ban Giám Hiệu đánh giá Minh là một học sinh có tâm lý thù hằn và cực đoan.",
        choices: [{ text: "↺ Làm lại bước này", nextScene: "minh_5_3", isUndo: true }]
    },
    "minh_5_thanh_cong": {
        charName: "MINH (Kết Quả Màn 5)",
        charColor: "text-emerald-400",
        charSprite: "assets/characters/Char_4_Attack.webp",
        bgTheme: "border-indigo-500/80 bg-teal-950/90 animate__pulse",
        isResult: true,
        resultTitle: "THÀNH CÔNG - SỰ TRÂN TRỌNG BẢN THÂN",
        resultColor: "text-emerald-400",
        illustration: "assets/scenes/Char_4_Scene_10.webp",
        story: "Sự bồi thường thỏa đáng và lời xin lỗi công khai đã đập tan mọi định kiến giới trong lớp. Không có luật nào cấm con trai yêu nghệ thuật. Tháng sau, Minh dùng chính bộ màu đó vẽ nên bức tranh đạt giải Nhất thành phố!",
        choices: [{ text: "➔ Chuyển sang Màn 6: Bạo Lực Thể Thao", nextScene: "minh_man_6" }]
    },


    // ------------------------------------------
    // MÀN 6: BẠO LỰC THỂ THAO (CÔ LẬP TRÊN SÂN)
    // ------------------------------------------
    "minh_man_6": {
        charName: "MINH (Cảnh 6: Cô Lập Tinh Vi)",
        charColor: "text-indigo-400",
        charSprite: "assets/characters/Char_4.webp",
        bgTheme: "border-indigo-500/30 bg-slate-900/95",
        story: "Đại hội thể thao trường. Minh là tiền đạo xuất sắc, nhưng Đội trưởng (do ghen tị) đã ngầm lệnh cho cả đội KHÔNG AI ĐƯỢC CHUYỀN BÓNG cho Minh. Dù Minh đứng rất thoáng, họ thà mất bóng chứ không chuyền. Cả khán đài bắt đầu chỉ trỏ chê cười Minh 'tàng hình' trên sân.",
        choices: [
            { text: "👉 Tủi thân chạy khỏi sân, về nhà xin mẹ viết đơn xin rút khỏi đội bóng.", nextScene: "minh_6_sai_a" },
            { text: "👉 Chửi um lên trên sân: 'Đá đấm kiểu *** gì vậy? Bọn mày mù à?'.", nextScene: "minh_6_sai_b" },
            { text: "👉 Nhận ra vấn đề, ngừng xin bóng. Lùi sâu về phần sân nhà, chủ động cắt bóng phòng ngự cực rát để chứng minh giá trị.", nextScene: "minh_6_1" }
        ]
    },
    "minh_6_sai_a": {
        charName: "MINH (Cảnh 6: Thất bại)",
        charColor: "text-amber-400",
        charSprite: "assets/characters/Char_4_Weak.webp",
        bgTheme: "border-amber-500/50 bg-slate-900/95",
        isResult: true,
        resultTitle: "THẤT BẠI - SỰ ĐẦU HÀNG ĐÁNG THẤT VỌNG",
        resultColor: "text-amber-400",
        illustration: "assets/scenes/Char_4_Scene_11.webp",
        story: "Rời bỏ đam mê vì sự ganh ghét của kẻ khác là điều tồi tệ nhất. Đội trưởng đắc ý vì đã loại bỏ được cái gai trong mắt, còn Minh mãi mãi mang tiếng là kẻ hèn nhát bỏ cuộc.",
        choices: [{ text: "↺ Suy ngẫm và thử lại", nextScene: "minh_man_6", isUndo: true }]
    },
    "minh_6_sai_b": {
        charName: "MINH (Cảnh 6: Thất bại)",
        charColor: "text-rose-500",
        charSprite: "assets/characters/Char_4_Weak.webp",
        bgTheme: "border-rose-500/80 bg-rose-950/90 animate__shakeX",
        isResult: true,
        resultTitle: "THẤT BẠI - RỐI TRÍ VÔ LÝ",
        resultColor: "text-rose-500",
        illustration: "assets/scenes/Char_4_Scene_13.webp",
        story: "Chửi thề trên sân khiến Trọng tài lập tức rút thẻ Vàng cảnh cáo Minh vì thái độ phi thể thao. Khán giả càng chê cười Minh là cầu thủ kém tắm lại hay cọc.",
        choices: [{ text: "↺ Suy ngẫm và thử lại", nextScene: "minh_man_6", isUndo: true }]
    },

    "minh_6_1": {
        charName: "MINH (Cảnh 6.1: Đòn Thù Độc Ác)",
        charColor: "text-indigo-400",
        charSprite: "assets/characters/Char_4.webp",
        bgTheme: "border-indigo-500/30 bg-slate-900/95",
        story: "Thấy Minh cướp được bóng từ đối phương và chơi quá hay ở vị trí phòng ngự, Đội trưởng đội nhà cay cú. Trong một pha tranh chấp góc phạt góc, Đội trưởng cố tình xoạc bóng bằng gầm giày thẳng vào mắt cá chân Minh khiến Minh ngã gục rách da.",
        choices: [
            { text: "👉 Đạp thẳng vào ngực Đội trưởng để trả thù cú xoạc.", nextScene: "minh_6_1_sai_a" },
            { text: "👉 Nén đau tự lết ra khỏi sân, cắn răng chịu đựng vì không muốn làm to chuyện.", nextScene: "minh_6_1_sai_b" },
            { text: "👉 Nằm yên tại chỗ ôm chân, giơ tay gọi lớn báo hiệu Trọng tài và đội cứu thương.", nextScene: "minh_6_2" }
        ]
    },
    "minh_6_1_sai_a": {
        charName: "MINH (Cảnh 6.1: Thất bại)",
        charColor: "text-rose-500",
        charSprite: "assets/characters/Char_4_Weak.webp",
        bgTheme: "border-rose-500/80 bg-rose-950/90 animate__shakeX",
        isResult: true,
        resultTitle: "THẤT BẠI - HÀNH VI CÔN ĐỒ",
        resultColor: "text-rose-500",
        illustration: "assets/scenes/Char_4_Scene_7.webp",
        story: "Hành động trả đũa bạo lực lập tức khiến Minh nhận Thẻ Đỏ trực tiếp. Bạn bị đuổi khỏi sân trong sự nhục nhã và bị cấm thi đấu vĩnh viễn.",
        choices: [{ text: "↺ Làm lại bước này", nextScene: "minh_6_1", isUndo: true }]
    },
    "minh_6_1_sai_b": {
        charName: "MINH (Cảnh 6.1: Thất bại)",
        charColor: "text-amber-400",
        charSprite: "assets/characters/Char_4_Weak.webp",
        bgTheme: "border-amber-500/50 bg-slate-900/95",
        isResult: true,
        resultTitle: "THẤT BẠI - CHẤP NHẬN BỊ CHÀ ĐẠP",
        resultColor: "text-amber-400",
        illustration: "assets/scenes/Char_4_Scene_11.webp",
        story: "Tự rời sân khiến Trọng tài nghĩ đó chỉ là va chạm nhẹ. Kẻ thủ ác nhếch mép cười đắc ý vì loại bỏ bạn dễ dàng mà không bị phạt.",
        choices: [{ text: "↺ Làm lại bước này", nextScene: "minh_6_1", isUndo: true }]
    },

    "minh_6_2": {
        charName: "MINH (Cảnh 6.2: Sự Bao Che Đê Hèn)",
        charColor: "text-indigo-400",
        charSprite: "assets/characters/Char_4.webp",
        bgTheme: "border-indigo-500/30 bg-slate-900/95",
        story: "Trọng tài (là một thầy giáo Thể chất thân với Đội trưởng) chạy tới. Thầy phẩy tay: 'Do trơn trượt vô tình va quẹt thôi, Minh đứng dậy đá tiếp đi, bóng đá nam nhi va chạm chút có sao đâu'.",
        choices: [
            { text: "👉 Uất ức tháo áo đấu ném xuống sân bỏ về.", nextScene: "minh_6_2_sai_a" },
            { text: "👉 Ngậm đắng nuốt cay đứng dậy chạy khập khiễng để đá tiếp.", nextScene: "minh_6_2_sai_b" },
            { text: "👉 Chỉ vào vết giày đinh in rõ trên bắp chân: 'Trọng tài, đây là pha đạp bóng bằng gầm giày triệt hạ. Nếu thầy không check VAR hoặc phạt thẻ, em yêu cầu dừng trận đấu để y tế lập biên bản chấn thương!'.", nextScene: "minh_6_3" }
        ]
    },
    "minh_6_2_sai_a": {
        charName: "MINH (Cảnh 6.2: Thất bại)",
        charColor: "text-rose-500",
        charSprite: "assets/characters/Char_4_Weak.webp",
        bgTheme: "border-rose-500/80 bg-rose-950/90 animate__shakeX",
        isResult: true,
        resultTitle: "THẤT BẠI - THÁI ĐỘ PHI THỂ THAO",
        resultColor: "text-rose-500",
        illustration: "assets/scenes/Char_4_Scene_13.webp",
        story: "Hành động ném áo thi đấu là sự xúc phạm đối với màu cờ sắc áo của trường. Bạn tự làm mất đi quyền lên tiếng của mình.",
        choices: [{ text: "↺ Làm lại bước này", nextScene: "minh_6_2", isUndo: true }]
    },
    "minh_6_2_sai_b": {
        charName: "MINH (Cảnh 6.2: Thất bại)",
        charColor: "text-amber-400",
        charSprite: "assets/characters/Char_4_Weak.webp",
        bgTheme: "border-amber-500/50 bg-slate-900/95",
        isResult: true,
        resultTitle: "THẤT BẠI - ĐÁNH ĐỔI SỨC KHỎE CẢ ĐỜI",
        resultColor: "text-amber-400",
        illustration: "assets/scenes/Char_4_Scene_7.webp",
        story: "Cố đá khi bị chấn thương khớp khiến Minh bị đứt dây chằng hoàn toàn. Giấc mơ thể thao kết thúc vĩnh viễn chỉ vì sự cam chịu mù quáng.",
        choices: [{ text: "↺ Làm lại bước này", nextScene: "minh_6_2", isUndo: true }]
    },

    "minh_6_3": {
        charName: "MINH (Cảnh 6.3: Đứng Vững Bằng Bằng Chứng)",
        charColor: "text-indigo-400",
        charSprite: "assets/characters/Char_4.webp",
        bgTheme: "border-indigo-500/30 bg-slate-900/95",
        story: "Sự kiên quyết của Minh cộng với tiếng la ó bất bình của các bạn khán giả trên sân khiến Thầy Trọng tài không thể bao che thêm. Đội trưởng lúng túng biện minh: 'Em... em lỡ đà thôi mà'.",
        choices: [
            { text: "👉 Cười đểu: 'Mày hèn lắm con ạ'.", nextScene: "minh_6_3_sai_a" },
            { text: "👉 Yêu cầu Thầy gọi bảo vệ gông cổ Đội trưởng lên phường vì tội cố ý gây thương tích.", nextScene: "minh_6_3_sai_b" },
            { text: "👉 Đưa tay cho y tế băng bó, nói dõng dạc: 'Các bạn quay clip trên khán đài đã gửi video vào group trường rồi. Mong thầy xử lý đúng luật để trận đấu được tiếp tục'.", nextScene: "minh_6_thanh_cong" }
        ]
    },
    "minh_6_3_sai_a": {
        charName: "MINH (Cảnh 6.3: Thất bại)",
        charColor: "text-rose-500",
        charSprite: "assets/characters/Char_4_Weak.webp",
        bgTheme: "border-rose-500/80 bg-rose-950/90 animate__shakeX",
        isResult: true,
        resultTitle: "THẤT BẠI - SỰ KIÊU NGẠO VÔ DUYÊN",
        resultColor: "text-rose-500",
        illustration: "assets/scenes/Char_4_Scene_13.webp",
        story: "Mạt sát đối thủ trên sân khiến bạn mất đi sự ủng hộ của khán giả. Hình ảnh của bạn trở nên xấu xí ngang với kẻ phạm lỗi.",
        choices: [{ text: "↺ Làm lại bước này", nextScene: "minh_6_3", isUndo: true }]
    },
    "minh_6_3_sai_b": {
        charName: "MINH (Cảnh 6.3: Thất bại)",
        charColor: "text-amber-400",
        charSprite: "assets/characters/Char_4_Weak.webp",
        bgTheme: "border-amber-500/50 bg-slate-900/95",
        isResult: true,
        resultTitle: "THẤT BẠI - HÌNH PHẠT KHÔNG THỰC TẾ",
        resultColor: "text-amber-400",
        illustration: "assets/scenes/Char_4_Scene_13.webp",
        story: "Tai nạn thể thao không bị xử lý hình sự (trừ khi có tính toán giết người cực rõ ràng). Đòi hỏi quá đáng khiến Ban tổ chức cho rằng Minh đang làm lố.",
        choices: [{ text: "↺ Làm lại bước này", nextScene: "minh_6_3", isUndo: true }]
    },
    "minh_6_thanh_cong": {
        charName: "MINH (Kết Quả Màn 6)",
        charColor: "text-emerald-400",
        charSprite: "assets/characters/Char_4_Attack.webp",
        bgTheme: "border-indigo-500/80 bg-teal-950/90 animate__pulse",
        isResult: true,
        resultTitle: "THÀNH CÔNG - SỰ CAO THƯỢNG CỦA BÓNG ĐÁ",
        resultColor: "text-emerald-400",
        illustration: "assets/scenes/Char_4_Scene_12.webp",
        story: "Đoạn clip 'check VAR' từ khán giả là bằng chứng không thể chối cãi. Đội trưởng bị Thẻ Đỏ trực tiếp đuổi khỏi giải. Dù chấn thương, Minh vẫn nhận được tràng pháo tay sấm sét của toàn trường vì sự kiên cường và hiểu luật. Thắng làm vua, thua làm... thẻ đỏ!",
        choices: [{ text: "➔ Chuyển sang Màn 7: Bản Án Vu Khống", nextScene: "minh_man_7" }]
    },


    // ------------------------------------------
    // MÀN 7: BẪY VU KHỐNG (NHÉT POD / ĐỒ CẤM)
    // ------------------------------------------
    "minh_man_7": {
        charName: "MINH (Cảnh 7: Cú Bắt Trọng Tài)",
        charColor: "text-indigo-400",
        charSprite: "assets/characters/Char_4.webp",
        bgTheme: "border-indigo-500/30 bg-slate-900/95",
        story: "Để quyết đuổi Minh khỏi trường, băng nhóm cá biệt đã lén nhét 2 cây Vape (thuốc lá điện tử) vào balo của Minh. Ngay tiết sau, Giám thị bất ngờ vào lớp kiểm tra tư trang: 'Thầy nhận được tin báo lớp ta có người giấu đồ cấm'. Giám thị đi thẳng tới bàn của Minh.",
        choices: [
            { text: "👉 Tự tin mở toang cặp cho thầy xem vì biết mình không hút thuốc.", nextScene: "minh_7_sai_a" },
            { text: "👉 Giằng lại cặp: 'Thầy không có lệnh khám xét, thầy xâm phạm quyền riêng tư của em!'.", nextScene: "minh_7_sai_b" },
            { text: "👉 Khoan mở cặp, nói to: 'Thưa thầy, em vừa đi vệ sinh để cặp ở lớp. Để khách quan, em xin phép cầm cặp lên phòng Ban Giám Hiệu có camera rồi mới mở ạ'.", nextScene: "minh_7_1" }
        ]
    },
    "minh_7_sai_a": {
        charName: "MINH (Cảnh 7: Thất bại)",
        charColor: "text-rose-500",
        charSprite: "assets/characters/Char_4_Weak.webp",
        bgTheme: "border-rose-500/80 bg-rose-950/90 animate__shakeX",
        isResult: true,
        resultTitle: "THẤT BẠI - SẬP BẪY VÌ QUÁ TỰ TIN",
        resultColor: "text-rose-500",
        illustration: "assets/scenes/Char_4_Scene_13.webp",
        story: "Vừa mở cặp, 2 cây Vape lăn lông lốc ra sàn. Cả lớp ồ lên. Việc mở cặp tại hiện trường khiến Minh lập tức bị quy tội tàng trữ đồ cấm trước hàng chục nhân chứng.",
        choices: [{ text: "↺ Lấy lại bình tĩnh và thử lại", nextScene: "minh_man_7", isUndo: true }]
    },
    "minh_7_sai_b": {
        charName: "MINH (Cảnh 7: Thất bại)",
        charColor: "text-amber-400",
        charSprite: "assets/characters/Char_4_Weak.webp",
        bgTheme: "border-amber-500/50 bg-slate-900/95",
        isResult: true,
        resultTitle: "THẤT BẠI - CÃI LÝ VÔ TÁC DỤNG",
        resultColor: "text-amber-400",
        illustration: "assets/scenes/Char_4_Scene_11.webp",
        story: "Trong nội quy nhà trường, Giám thị CÓ QUYỀN kiểm tra tư trang học sinh khi nghi ngờ vi phạm. Việc giằng co, cãi lý sai luật khiến Minh bị áp giải lên phòng bảo vệ ngay lập tức.",
        choices: [{ text: "↺ Làm lại bước này", nextScene: "minh_man_7", isUndo: true }]
    },

    "minh_7_1": {
        charName: "MINH (Cảnh 7.1: Mũi Khoan Trực Diện)",
        charColor: "text-indigo-400",
        charSprite: "assets/characters/Char_4.webp",
        bgTheme: "border-indigo-500/30 bg-slate-900/95",
        story: "Tại phòng Ban Giám Hiệu (BGH) có hệ thống camera thu âm, khi mở cặp ra thấy 2 cây Vape, Thầy Hiệu trưởng rất thất vọng: 'Minh, em là trò giỏi mà lại dính vào tệ nạn này sao? Thầy phải gọi Công an và Phụ huynh lên lập biên bản đuổi học'.",
        choices: [
            { text: "👉 Quỳ xuống van xin thầy tha cho mình một lần vì sợ bị bố mẹ đánh.", nextScene: "minh_7_1_sai_a" },
            { text: "👉 Gào lên: 'Là thằng Bảo nhét vào cặp em! Thầy đi mà bắt nó!'.", nextScene: "minh_7_1_sai_b" },
            { text: "👉 Dõng dạc nói: 'Tuyệt vời ạ, thầy hãy gọi Công an ngay lập tức giúp em. Em yêu cầu lấy dấu vân tay trên thân 2 cây Vape này!'.", nextScene: "minh_7_2" }
        ]
    },
    "minh_7_1_sai_a": {
        charName: "MINH (Cảnh 7.1: Thất bại)",
        charColor: "text-amber-400",
        charSprite: "assets/characters/Char_4_Weak.webp",
        bgTheme: "border-amber-500/50 bg-slate-900/95",
        isResult: true,
        resultTitle: "THẤT BẠI - NGẦM THỪA NHẬN TỘI",
        resultColor: "text-amber-400",
        illustration: "assets/scenes/Char_4_Scene_11.webp",
        story: "Quỳ lạy và xin tha nghĩa là bạn xác nhận đó là đồ của mình. Tương lai học tập của Minh chính thức chấm dứt bằng một án kỷ luật nhục nhã.",
        choices: [{ text: "↺ Làm lại bước này", nextScene: "minh_7_1", isUndo: true }]
    },
    "minh_7_1_sai_b": {
        charName: "MINH (Cảnh 7.1: Thất bại)",
        charColor: "text-rose-500",
        charSprite: "assets/characters/Char_4_Weak.webp",
        bgTheme: "border-rose-500/80 bg-rose-950/90 animate__shakeX",
        isResult: true,
        resultTitle: "THẤT BẠI - VU KHỐNG KHÔNG CĂN CỨ",
        resultColor: "text-rose-500",
        illustration: "assets/scenes/Char_4_Scene_13.webp",
        story: "Đổ lỗi cho người khác khi không có một manh mối nào trong tay khiến BGH coi Minh là kẻ ngoan cố, dối trá. Tội càng thêm nặng.",
        choices: [{ text: "↺ Làm lại bước này", nextScene: "minh_7_1", isUndo: true }]
    },

    "minh_7_2": {
        charName: "MINH (Cảnh 7.2: Kẻ Gài Bẫy Rung Sợ)",
        charColor: "text-indigo-400",
        charSprite: "assets/characters/Char_4.webp",
        bgTheme: "border-indigo-500/30 bg-slate-900/95",
        story: "Thấy Minh quá tự tin đòi gọi Công an lấy dấu vân tay, Bảo (đứa đi cùng báo cáo) bắt đầu đổ mồ hôi, mặt tái nhợt: 'Thôi thầy... hay là chỉ phạt cảnh cáo nó thôi... gọi Công an làm lớn chuyện trường mình mất thi đua...'.",
        choices: [
            { text: "👉 Đồng ý ngay: 'Dạ vâng, cảnh cáo cũng được ạ, chuyện nhỏ bỏ qua thầy ơi'.", nextScene: "minh_7_2_sai_a" },
            { text: "👉 Tát Bảo một phát: 'Mày rén rồi à con ?'.", nextScene: "minh_7_2_sai_b" },
            { text: "👉 Quay sang nhìn chằm chằm Bảo: 'Trường mất thi đua hay Mày sợ bị đi tù vì tội vu khống tàng trữ chất cấm? Thầy cứ gọi Công an, không được chìm xuồng vụ này!'.", nextScene: "minh_7_3" }
        ]
    },
    "minh_7_2_sai_a": {
        charName: "MINH (Cảnh 7.2: Thất bại)",
        charColor: "text-amber-400",
        charSprite: "assets/characters/Char_4_Weak.webp",
        bgTheme: "border-amber-500/50 bg-slate-900/95",
        isResult: true,
        resultTitle: "THẤT BẠI - MANG DANH KẺ PHẠM TỘI",
        resultColor: "text-amber-400",
        illustration: "assets/scenes/Char_4_Scene_11.webp",
        story: "Chấp nhận cảnh cáo nghĩa là bạn chấp nhận Vape là của mình. Một vết đen vĩnh viễn trong học bạ mà bạn không bao giờ gột rửa được.",
        choices: [{ text: "↺ Làm lại bước này", nextScene: "minh_7_2", isUndo: true }]
    },
    "minh_7_2_sai_b": {
        charName: "MINH (Cảnh 7.2: Thất bại)",
        charColor: "text-rose-500",
        charSprite: "assets/characters/Char_4_Weak.webp",
        bgTheme: "border-rose-500/80 bg-rose-950/90 animate__shakeX",
        isResult: true,
        resultTitle: "THẤT BẠI - BẠO LỰC TRƯỚC MẶT HIỆU TRƯỞNG",
        resultColor: "text-rose-500",
        illustration: "assets/scenes/Char_4_Scene_7.webp",
        story: "Bạn đã đánh mất hoàn toàn lý trí. Hành hung bạn học ngay trong phòng Hiệu trưởng khiến bạn bị bảo vệ còng tay đưa đi lập tức.",
        choices: [{ text: "↺ Làm lại bước này", nextScene: "minh_7_2", isUndo: true }]
    },

    "minh_7_3": {
        charName: "MINH (Cảnh 7.3: Màn Hạ Màn)",
        charColor: "text-indigo-400",
        charSprite: "assets/characters/Char_4.webp",
        bgTheme: "border-indigo-500/30 bg-slate-900/95",
        story: "Hiệu trưởng nhận ra sự bất thường, lập tức nhấc điện thoại gọi Công an phường. Bảo hoảng loạn tột độ, khuỵu gối xuống khóc lóc: 'Thầy ơi tha cho em, là anh Long khối 12 ép em nhét vào cặp Minh để đuổi học nó, em xin lỗi!'.",
        choices: [
            { text: "👉 Chửi bới: 'Tao không tha, tao sẽ kiện cho mày đi tù mọt gông!'.", nextScene: "minh_7_3_sai_a" },
            { text: "👉 Mủi lòng: 'Thôi thầy tha cho bạn ấy, chắc bị ép thật'.", nextScene: "minh_7_3_sai_b" },
            { text: "👉 Lạnh lùng nói: 'Việc xử lý hình sự hay kỷ luật là việc của pháp luật và nhà trường. Tôi chỉ cần sự trong sạch của tôi được chứng minh'.", nextScene: "minh_7_thanh_cong" }
        ]
    },
    "minh_7_3_sai_a": {
        charName: "MINH (Cảnh 7.3: Thất bại)",
        charColor: "text-rose-500",
        charSprite: "assets/characters/Char_4_Weak.webp",
        bgTheme: "border-rose-500/80 bg-rose-950/90 animate__shakeX",
        isResult: true,
        resultTitle: "THẤT BẠI - THÁI ĐỘ NGẠO MẠN",
        resultColor: "text-rose-500",
        illustration: "assets/scenes/Char_4_Scene_13.webp",
        story: "Ngạo mạn khi thắng thế sẽ làm mất đi hình ảnh của một người đàn ông trưởng thành. Hãy để luật pháp làm việc của nó, bạn không phải là quan tòa.",
        choices: [{ text: "↺ Làm lại bước này", nextScene: "minh_7_3", isUndo: true }]
    },
    "minh_7_3_sai_b": {
        charName: "MINH (Cảnh 7.3: Thất bại)",
        charColor: "text-amber-400",
        charSprite: "assets/characters/Char_4_Weak.webp",
        bgTheme: "border-amber-500/50 bg-slate-900/95",
        isResult: true,
        resultTitle: "THẤT BẠI - LÒNG THƯƠNG HẠI SAI CHỖ",
        resultColor: "text-amber-400",
        illustration: "assets/scenes/Char_4_Scene_11.webp",
        story: "Tha thứ ngay lập tức cho tội vu khống sẽ tạo tiền lệ xấu. Đứa trẻ làm sai phải chịu trách nhiệm, Long đứng đằng sau sẽ thoát tội nếu vụ này bị chìm xuồng.",
        choices: [{ text: "↺ Làm lại bước này", nextScene: "minh_7_3", isUndo: true }]
    },
    "minh_7_thanh_cong": {
        charName: "MINH (Kết Quả Cuối Cùng)",
        charColor: "text-emerald-400",
        charSprite: "assets/characters/Char_4_Attack.webp",
        bgTheme: "border-indigo-500/80 bg-teal-950/90 animate__pulse",
        isResult: true,
        resultTitle: "CHIẾN THẮNG RỰC RỠ! 🎉",
        resultColor: "text-emerald-400",
        illustration: "assets/scenes/Char_4_Scene_14.webp",
        story: "Sự bình tĩnh, hiểu biết pháp luật khoa học (dấu vân tay) đã cứu Minh khỏi một âm mưu thâm độc. Công an vào cuộc, Long 'đại ca' và băng nhóm bị tóm gọn tàn dư. Minh trở thành biểu tượng của sự kiên cường và lý trí thép trong trường học!",
        choices: [{ text: "🏆 Chúc mừng bạn hoàn thành Tuyến MINH", nextScene: "RESET_GAME" }]
    },

    // ==========================================
    // TUYẾN 3: LINH - NỮ CHỨNG KIẾN (CẤU TRÚC 4 TẦNG LẮT LÉO)
    // ==========================================

    // ------------------------------------------
    // MÀN 1: BẤT ĐỒNG TRONG NHÓM BẠN THÂN
    // ------------------------------------------
    "linh_man_1": {
        charName: "LINH (Cảnh 1: Luật Ngầm Của Nhóm)",
        charColor: "text-sky-400",
        charSprite: "assets/characters/Char_2.webp",
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
        charSprite: "assets/characters/Char_2_Scare.webp",
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
        charSprite: "assets/characters/Char_2_Scare.webp",
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
        charSprite: "assets/characters/Char_2_Scare.webp",
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
        charSprite: "assets/characters/Char_2_Scare.webp",
        bgTheme: "border-amber-500/50 bg-slate-900/95",
        isResult: true,
        resultTitle: "THẤT BẠI - LỜI AN ỦI SÁO RỖNG",
        resultColor: "text-amber-400",
        illustration: "assets/scenes/Char_2_Scene_1.webp",
        story: "Lời nói nhượng bộ của Linh vô tình khẳng định 'Thư là kẻ có quyền lực tuyệt đối'. Trà càng tuyệt vọng hơn vì nhận ra ngay cả người hiểu chuyện cũng không dám bảo vệ mình.",
        choices: [{ text: "↺ Làm lại bước này", nextScene: "linh_1_1", isUndo: true }]
    },

    "linh_1_2": {
        charName: "LINH (Cảnh 1.2: Bị Bắt Quả Tang)",
        charColor: "text-sky-400",
        charSprite: "assets/characters/Char_2.webp",
        bgTheme: "border-sky-500/30 bg-slate-900/95",
        story: "Tại quán cafe, Linh đang an ủi Trà thì Thư và đám bạn bất ngờ xuất hiện (do chúng bí mật theo dõi Trà). Thư cầm ly nước lọc hắt thẳng vào mặt Trà, rồi trừng mắt nhìn Linh: 'Mày đâm sau lưng tao à? Mày chọn con này hay chọn tao?'.",
        choices: [
            { text: "👉 Run rẩy sợ hãi: 'Tao xin lỗi, tao chỉ ra đây nói chuyện xíu thôi, tao về phe mày mà'.", nextScene: "linh_1_2_sai_a" },
            { text: "👉 Gào lên: 'Mày dám hắt nước bạn tao à? Tao gọi giang hồ đập mày'.", nextScene: "linh_1_2_sai_b" },
            { text: "👉 Kéo Trà ra sau lưng, bấm nút quay video điện thoại: 'Tao chọn tao. Mày vừa hành hung người khác, camera quán đang quay, mày muốn lên phường không?'.", nextScene: "linh_1_3" }
        ]
    },
    "linh_1_2_sai_a": {
        charName: "LINH (Cảnh 1.2: Thất bại)",
        charColor: "text-amber-400",
        charSprite: "assets/characters/Char_2_Scare.webp",
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
        charSprite: "assets/characters/Char_2_Scare.webp",
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
        charSprite: "assets/characters/Char_2_Scare.webp",
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
        charSprite: "assets/characters/Char_2_Scare.webp",
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
        charSprite: "assets/characters/Char_2_Hand.webp",
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
        charSprite: "assets/characters/Char_2_Scare.webp",
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
        charSprite: "assets/characters/Char_2_Scare.webp",
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
        charSprite: "assets/characters/Char_2_Scare.webp",
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
        charSprite: "assets/characters/Char_2_Scare.webp",
        bgTheme: "border-rose-500/80 bg-rose-950/90 animate__shakeX",
        isResult: true,
        resultTitle: "THẤT BẠI - KÍCH ĐỘNG THÚ TÍNH",
        resultColor: "text-rose-500",
        illustration: "assets/scenes/Char_2_Scene_5.webp",
        story: "Lời nhục mạ của Linh đánh trúng lòng tự ái của kẻ bị dồn vào chân tường. Ngọc mất trí, xô Linh ngã lăn từ cầu thang xuống chấn thương nặng.",
        choices: [{ text: "↺ Làm lại bước này", nextScene: "linh_2_1", isUndo: true }]
    },

    "linh_2_2": {
        charName: "LINH (Cảnh 2.2: Rung Cây Dọa Khỉ)",
        charColor: "text-sky-400",
        charSprite: "assets/characters/Char_2.webp",
        bgTheme: "border-sky-500/30 bg-slate-900/95",
        story: "Thấy Linh ghi âm, Ngọc vung tay tát văng chiếc điện thoại của Linh xuống đất vỡ màn hình: 'Ghi này! Mày tưởng tao sợ à? Có giỏi thì lấy cái điện thoại nát đó đi mà méc'.",
        choices: [
            { text: "👉 Khóc lóc nhặt điện thoại lên bắt Ngọc đền tiền.", nextScene: "linh_2_2_sai_a" },
            { text: "👉 Tức quá lao vào tát lại Ngọc để trả thù.", nextScene: "linh_2_2_sai_b" },
            { text: "👉 Nhếch mép cười: 'Cảm ơn đã tát tao. Điện thoại tao đang mở iCloud đồng bộ ghi âm trực tiếp lên Mạng. Mày vừa có thêm tội Cố ý hủy hoại tài sản!'.", nextScene: "linh_2_3" }
        ]
    },
    "linh_2_2_sai_a": {
        charName: "LINH (Cảnh 2.2: Thất bại)",
        charColor: "text-amber-400",
        charSprite: "assets/characters/Char_2_Scare.webp",
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
        charSprite: "assets/characters/Char_2_Scare.webp",
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
        charSprite: "assets/characters/Char_2_Scare.webp",
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
        charSprite: "assets/characters/Char_2_Scare.webp",
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
        charSprite: "assets/characters/Char_2_Hand.webp",
        bgTheme: "border-sky-500/80 bg-teal-950/90 animate__pulse",
        isResult: true,
        resultTitle: "THÀNH CÔNG - SỰ CHÍNH TRỰC TUYỆT ĐỐI",
        resultColor: "text-emerald-400",
        illustration: "assets/scenes/Char_2_Scene_12.webp",
        story: "Bạn từ chối sự cám dỗ và giao mọi việc cho người có thẩm quyền. Nhà trường đã yêu cầu gia đình Ngọc bồi thường thiệt hại và áp dụng biện pháp giáo dục đặc biệt. Sự liêm chính của Linh khiến mọi người kính phục!",
        choices: [{ text: "➔ Chuyển sang Màn 3: Bẫy Tẩy Chay", nextScene: "linh_man_3" }]
    },


    // ------------------------------------------
    // MÀN 3: KẺ BẮT NẠT ĐÓNG VAI NẠN NHÂN (GÓC NHÌN ĐA CHIỀU)
    // ------------------------------------------
    "linh_man_3": {
        charName: "LINH (Cảnh 3: Drama Đảo Chiều)",
        charColor: "text-sky-400",
        charSprite: "assets/characters/Char_2.webp",
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
        charSprite: "assets/characters/Char_2_Scare.webp",
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
        charSprite: "assets/characters/Char_2_Scare.webp",
        bgTheme: "border-rose-500/80 bg-rose-950/90 animate__shakeX",
        isResult: true,
        resultTitle: "THẤT BẠI - BẠN CŨNG LÀ KẺ BẮT NẠT",
        resultColor: "text-rose-500",
        illustration: "assets/scenes/Char_2_Scene_7.webp",
        story: "Việc sỉ nhục một người đang đứng bên bờ vực thẳm biến bạn trở thành phiên bản độc ác không kém gì Quỳnh lúc trước. Vòng lặp bạo lực không bao giờ kết thúc.",
        choices: [{ text: "↺ Làm lại bước này", nextScene: "linh_man_3", isUndo: true }]
    },

    "linh_3_1": {
        charName: "LINH (Cảnh 3.1: Lời Nhờ Vả Ép Buộc)",
        charColor: "text-sky-400",
        charSprite: "assets/characters/Char_2.webp",
        bgTheme: "border-sky-500/30 bg-slate-900/95",
        story: "Nhờ Linh báo tin, gia đình kịp thời cứu Quỳnh. Tuy nhiên, biết Linh là người báo, Quỳnh nhắn tin: 'Cậu thương mình đúng không? Cậu lên group trường đăng bài đính chính giúp mình là mình chưa từng bắt nạt ai đi, nếu không mình lại đi chết đấy!'.",
        choices: [
            { text: "👉 Đồng ý đăng bài tẩy trắng vì sợ Quỳnh lại nghĩ quẩn.", nextScene: "linh_3_1_sai_a" },
            { text: "👉 Chửi thẳng: 'Mày bớt diễn đi, tao cứu mày một mạng chứ tao không rảnh đi rửa bẩn cho mày'.", nextScene: "linh_3_1_sai_b" },
            { text: "👉 Lạnh lùng rep: 'Việc cậu bị mạng xã hội công kích là sai, tớ báo người lớn cứu cậu. Nhưng việc cậu bắt nạt người khác là THẬT. Tớ không bao che cái sai'.", nextScene: "linh_3_2" }
        ]
    },
    "linh_3_1_sai_a": {
        charName: "LINH (Cảnh 3.1: Thất bại)",
        charColor: "text-amber-400",
        charSprite: "assets/characters/Char_2_Scare.webp",
        bgTheme: "border-amber-500/50 bg-slate-900/95",
        isResult: true,
        resultTitle: "THẤT BẠI - SỰ DỐI TRÁ PHẢN CHỦ",
        resultColor: "text-amber-400",
        illustration: "assets/scenes/Char_2_Scene_9.webp",
        story: "Bênh vực mù quáng khiến cộng đồng mạng quay mũi dùi sang tẩy chay chính Linh vì tội 'đồng lõa, tẩy trắng cho kẻ bắt nạt'. Bạn mất đi tiếng nói chân thật của mình.",
        choices: [{ text: "↺ Làm lại bước này", nextScene: "linh_3_1", isUndo: true }]
    },
    "linh_3_1_sai_b": {
        charName: "LINH (Cảnh 3.1: Thất bại)",
        charColor: "text-rose-500",
        charSprite: "assets/characters/Char_2_Scare.webp",
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
        charSprite: "assets/characters/Char_2_Scare.webp",
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
        charSprite: "assets/characters/Char_2_Scare.webp",
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
        charSprite: "assets/characters/Char_2_Scare.webp",
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
        charSprite: "assets/characters/Char_2_Scare.webp",
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
        charSprite: "assets/characters/Char_2_Hand.webp",
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
        charSprite: "assets/characters/Char_2_Scare.webp",
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
        charSprite: "assets/characters/Char_2_Scare.webp",
        bgTheme: "border-rose-500/80 bg-rose-950/90 animate__shakeX",
        isResult: true,
        resultTitle: "THẤT BẠI - TIẾP TAY CHO TỘI ÁC",
        resultColor: "text-rose-500",
        illustration: "assets/scenes/Char_2_Scene_11.webp",
        story: "Chỉ một câu hùa theo vô thưởng vô phạt, bạn đã tiếp tay đẩy tin đồn lan rộng ra toàn trường. Mai không chịu nổi áp lực đã bị trầm cảm nặng.",
        choices: [{ text: "↺ Làm lại bước này", nextScene: "linh_man_4", isUndo: true }]
    },

    "linh_4_1": {
        charName: "LINH (Cảnh 4.1: Đi Tìm Sự Thật)",
        charColor: "text-sky-400",
        charSprite: "assets/characters/Char_2.webp",
        bgTheme: "border-sky-500/30 bg-slate-900/95",
        story: "Thư chột dạ đáp: 'Cái Ngọc lớp bên kể cho tao nghe, chính mắt nó thấy con Mai lên xe lão già ở cổng bệnh viện'. Linh quyết định làm rõ chuyện này.",
        choices: [
            { text: "👉 Kéo hội sang lớp Ngọc để dằn mặt tay đôi, ép Ngọc phải nói sự thật.", nextScene: "linh_4_1_sai_a" },
            { text: "👉 Cho rằng 'không phải chuyện của mình' nên thôi, kệ xác con Mai.", nextScene: "linh_4_1_sai_b" },
            { text: "👉 Nhắn tin cho Mai: 'Bọn lớp mình đang đồn cậu cặp đại gia vì thấy cậu lên Mẹc ở viện. Ông chú đó là ai thế để tớ đính chính giúp?'.", nextScene: "linh_4_2" }
        ]
    },
    "linh_4_1_sai_a": {
        charName: "LINH (Cảnh 4.1: Thất bại)",
        charColor: "text-rose-500",
        charSprite: "assets/characters/Char_2_Scare.webp",
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
        charSprite: "assets/characters/Char_2_Scare.webp",
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
        charSprite: "assets/characters/Char_2_Scare.webp",
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
        charSprite: "assets/characters/Char_2_Scare.webp",
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
        bgTheme: "border-sky-500/30 bg-slate-900/95",
        story: "Thấy bằng chứng rõ ràng, cả group lớp im lặng. Thư và Ngọc bị quê xệ. Ngọc vội nhắn vào: 'Ơ tao thấy sao tao nói vậy, hiểu lầm xíu thôi làm gì căng, tao có ý xấu đâu'.",
        choices: [
            { text: "👉 Cười đểu: 'Đúng rồi, hiểu lầm thôi, mày làm gì có não mà suy nghĩ'.", nextScene: "linh_4_3_sai_a" },
            { text: "👉 Nhượng bộ: 'Ừ thôi hiểu nhầm thì cho qua, rút kinh nghiệm nhé'.", nextScene: "linh_4_3_sai_b" },
            { text: "👉 Nghiêm túc tag Ngọc và Thư: 'Thấy một nửa sự thật chưa chắc là sự thật. Việc tung tin sai lệch bôi nhọ người khác là vi phạm pháp luật. Hai cậu nợ Mai một lời xin lỗi công khai'.", nextScene: "linh_4_thanh_cong" }
        ]
    },
    "linh_4_3_sai_a": {
        charName: "LINH (Cảnh 4.3: Thất bại)",
        charColor: "text-rose-500",
        charSprite: "assets/characters/Char_2_Scare.webp",
        bgTheme: "border-rose-500/80 bg-rose-950/90 animate__shakeX",
        isResult: true,
        resultTitle: "THẤT BẠI - KIÊU NGẠO ĐÁNH MẤT LÝ TRÍ",
        resultColor: "text-rose-500",
        illustration: "assets/scenes/Char_2_Scene_13.webp",
        story: "Mạt sát kẻ sai chỉ khiến bạn trở nên kiêu ngạo và phản cảm. Bạn đánh mất đi sự đồng tình của những người văn minh trong lớp.",
        choices: [{ text: "↺ Làm lại bước này", nextScene: "linh_4_3", isUndo: true }]
    },
    "linh_4_3_sai_b": {
        charName: "LINH (Cảnh 4.3: Thất bại)",
        charColor: "text-amber-400",
        charSprite: "assets/characters/Char_2_Scare.webp",
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
        charSprite: "assets/characters/Char_2_Hand.webp",
        bgTheme: "border-sky-500/80 bg-teal-950/90 animate__pulse",
        isResult: true,
        resultTitle: "THÀNH CÔNG - SỨC MẠNH CỦA SỰ THẬT",
        resultColor: "text-emerald-400",
        illustration: "assets/scenes/Char_2_Scene_14.webp",
        story: "Lời nói đanh thép và có tình có lý của Linh đã bẻ gãy hoàn toàn sự ngụy biện. Ngọc và Thư phải xấu hổ lên bài xin lỗi Mai. Linh không chỉ dập tắt tin đồn mà còn răn đe toàn lớp về tác hại của Fake News!",
        choices: [{ text: "➔ Chuyển sang Màn 5: Lời Cám Dỗ", nextScene: "linh_man_5" }]
    },


    // ------------------------------------------
    // MÀN 5: LỜI ĐỀ NGHỊ TỪ KẺ BẮT NẠT (CÁM DỖ VÀ ĐE DỌA)
    // ------------------------------------------
    "linh_man_5": {
        charName: "LINH (Cảnh 5: Cám Dỗ & Đe Dọa)",
        charColor: "text-sky-400",
        charSprite: "assets/characters/Char_2.webp",
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
        charSprite: "assets/characters/Char_2_Scare.webp",
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
        charSprite: "assets/characters/Char_2_Scare.webp",
        bgTheme: "border-amber-500/50 bg-slate-900/95",
        isResult: true,
        resultTitle: "THẤT BẠI - LẬT LỌNG KÉM SANG",
        resultColor: "text-amber-400",
        illustration: "assets/scenes/Char_2_Scene_9.webp",
        story: "Hành vi nhận quà khiến lời khai của Linh trước thầy cô mất đi tính khách quan (nghi ngờ tống tiền ngược). Hơn nữa, Hùng tức giận vì bị lừa nên đã gọi giang hồ trả thù Linh.",
        choices: [{ text: "↺ Làm lại bước này", nextScene: "linh_man_5", isUndo: true }]
    },

    "linh_5_1": {
        charName: "LINH (Cảnh 5.1: Chiêu Trò Uy Hiếp)",
        charColor: "text-sky-400",
        charSprite: "assets/characters/Char_2.webp",
        bgTheme: "border-sky-500/30 bg-slate-900/95",
        story: "Hùng thấy Linh từ chối thì đổi sắc mặt, lôi điện thoại ra dí sát mặt Linh: 'Mày khôn đấy. Nhưng nghe đây, nếu mày hé răng, tao sẽ dùng app AI ghép mặt mày vào mấy clip phim heo rồi rải khắp trường. Liệu hồn!'.",
        choices: [
            { text: "👉 Run lẩy bẩy, òa khóc van xin Hùng đừng làm vậy.", nextScene: "linh_5_1_sai_a" },
            { text: "👉 Nổi điên vung tay tát thẳng vào mặt Hùng.", nextScene: "linh_5_1_sai_b" },
            { text: "👉 Giữ bình tĩnh, không chớp mắt: 'Anh rảnh thì cứ ghép. Giờ cho em về, mẹ em đang đợi ngoài cổng'.", nextScene: "linh_5_2" }
        ]
    },
    "linh_5_1_sai_a": {
        charName: "LINH (Cảnh 5.1: Thất bại)",
        charColor: "text-amber-400",
        charSprite: "assets/characters/Char_2_Scare.webp",
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
        charSprite: "assets/characters/Char_2_Scare.webp",
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
        bgTheme: "border-sky-500/30 bg-slate-900/95",
        story: "Linh an toàn về nhà. Hôm sau, Cô giáo gọi riêng Linh lên phòng: 'Linh, cô nghe nói hôm trước em có ở góc nhà xe. Em có thấy Hùng đe dọa đòi tiền em Tuấn lớp 10 không?'.",
        choices: [
            { text: "👉 Sợ vụ ghép ảnh 18+ nên nói dối: 'Dạ lúc đó em đi nhanh quá em không nhìn rõ gì đâu cô'.", nextScene: "linh_5_2_sai_a" },
            { text: "👉 Từ chối trả lời: 'Cô đừng hỏi em, em không muốn liên quan đâu ạ'.", nextScene: "linh_5_2_sai_b" },
            { text: "👉 Hít một hơi sâu: 'Dạ có. Và hôm qua anh Hùng đã chặn đường dọa ghép ảnh nhạy cảm em nếu em dám khai ra. Xin cô hãy bảo vệ em'.", nextScene: "linh_5_3" }
        ]
    },
    "linh_5_2_sai_a": {
        charName: "LINH (Cảnh 5.2: Thất bại)",
        charColor: "text-amber-400",
        charSprite: "assets/characters/Char_2_Scare.webp",
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
        charSprite: "assets/characters/Char_2_Scare.webp",
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
        charSprite: "assets/characters/Char_2_Scare.webp",
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
        charSprite: "assets/characters/Char_2_Scare.webp",
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
        charSprite: "assets/characters/Char_2_Hand.webp",
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
        charSprite: "assets/characters/Char_2_Scare.webp",
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
        charSprite: "assets/characters/Char_2_Scare.webp",
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
        charSprite: "assets/characters/Char_2_Scare.webp",
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
        charSprite: "assets/characters/Char_2_Scare.webp",
        bgTheme: "border-amber-500/50 bg-slate-900/95",
        isResult: true,
        resultTitle: "THẤT BẠI - ĐỒNG LÕA BÓC LỘT",
        resultColor: "text-amber-400",
        illustration: "assets/scenes/Char_2_Scene_11.webp",
        story: "Im lặng hưởng thụ thành quả lao động của Mai khiến bạn không khác gì My. Bạn đang đánh mất đi tư duy phản biện và kỹ năng làm việc thực tế.",
        choices: [{ text: "↺ Làm lại bước này", nextScene: "linh_6_1", isUndo: true }]
    },

    "linh_6_2": {
        charName: "LINH (Cảnh 6.2: Ngày Thuyết Trình)",
        charColor: "text-sky-400",
        charSprite: "assets/characters/Char_2.webp",
        bgTheme: "border-sky-500/30 bg-slate-900/95",
        story: "Giờ báo cáo, My ăn mặc lộng lẫy lên bục thuyết trình thao thao bất tuyệt dựa trên Slide Mai viết. Đến Slide thứ 14, My kết luận: 'Bài này do em lên ý tưởng và viết chính, cảm ơn Cô đã lắng nghe'.",
        choices: [
            { text: "👉 Đứng phắt dậy ngắt lời: 'Cô ơi bạn My nói dối, bạn ấy chẳng làm gì cả!'.", nextScene: "linh_6_2_sai_a" },
            { text: "👉 Sợ My trả thù nên cúi mặt xuống không dám bấm qua Slide thứ 15.", nextScene: "linh_6_2_sai_b" },
            { text: "👉 Mỉm cười đứng lên: 'Xin My khoan tắt máy. Bài thuyết trình còn Slide thứ 15 - Bảng đánh giá năng lực nhóm'. (Bấm chuyển Slide).", nextScene: "linh_6_3" }
        ]
    },
    "linh_6_2_sai_a": {
        charName: "LINH (Cảnh 6.2: Thất bại)",
        charColor: "text-rose-500",
        charSprite: "assets/characters/Char_2_Scare.webp",
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
        charSprite: "assets/characters/Char_2_Scare.webp",
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
        charSprite: "assets/characters/Char_2_Scare.webp",
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
        charSprite: "assets/characters/Char_2_Scare.webp",
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
        charSprite: "assets/characters/Char_2_Hand.webp",
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
        charSprite: "assets/characters/Char_2_Scare.webp",
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
        charSprite: "assets/characters/Char_2_Scare.webp",
        bgTheme: "border-rose-500/80 bg-rose-950/90 animate__shakeX",
        isResult: true,
        resultTitle: "THẤT BẠI - BẠN ĐANG TRỞ THÀNH KẺ BẮT NẠT",
        resultColor: "text-rose-500",
        illustration: "assets/scenes/Char_2_Scene_5.webp",
        story: "Bôi nhọ danh dự người khác bằng 'Bảng Phong Thần' chính là một hành vi bạo lực tinh thần kinh khủng nhất. Bạn đang lấy cái ác để dập cái ác.",
        choices: [{ text: "↺ Làm lại bước này", nextScene: "linh_man_7", isUndo: true }]
    },

    "linh_7_1": {
        charName: "LINH (Cảnh 7.1: Thử Thách Ẩn Danh)",
        charColor: "text-sky-400",
        charSprite: "assets/characters/Char_2.webp",
        bgTheme: "border-sky-500/30 bg-slate-900/95",
        story: "Hệ thống Hòm thư vừa ra mắt đã bị nhóm cá biệt tổng tấn công. Bọn chúng dùng mail rác gửi hàng trăm tin nhắn ảo trêu chọc, chửi bới hệ thống để phá sập web.",
        choices: [
            { text: "👉 Nản chí, đề nghị Thầy cô đóng luôn hệ thống vì bọn nó quá đáng.", nextScene: "linh_7_1_sai_a" },
            { text: "👉 Đăng bài chửi lộn với bọn phá hoại trên page trường.", nextScene: "linh_7_1_sai_b" },
            { text: "👉 Đề xuất Thầy IT nâng cấp: Chỉ duyệt báo cáo gửi từ Email đuôi @truong.edu.vn của nhà trường cấp, nhưng tên người gửi sẽ được mã hóa an toàn.", nextScene: "linh_7_2" }
        ]
    },
    "linh_7_1_sai_a": {
        charName: "LINH (Cảnh 7.1: Thất bại)",
        charColor: "text-amber-400",
        charSprite: "assets/characters/Char_2_Scare.webp",
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
        charSprite: "assets/characters/Char_2_Scare.webp",
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
        charSprite: "assets/characters/Char_2_Scare.webp",
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
        charSprite: "assets/characters/Char_2_Scare.webp",
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
        charSprite: "assets/characters/Char_2_Scare.webp",
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
        charSprite: "assets/characters/Char_2_Scare.webp",
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
        charSprite: "assets/characters/Char_2_Hand.webp",
        bgTheme: "border-sky-500/80 bg-teal-950/90 animate__pulse",
        isResult: true,
        resultTitle: "CHIẾN THẮNG RỰC RỠ! 🎉",
        resultColor: "text-emerald-400",
        illustration: "assets/scenes/Char_2_Scene_14.webp",
        story: "Hành vi thuê người Hack hệ thống trường học lập tức bị cảnh sát mạng tóm gọn. Cả đường dây bắt nạt bị tống cổ khỏi trường. Hòm thư ẩn danh trở thành tấm khiên vững chắc nhất cho học sinh yếu thế. Bạn đã thực sự tạo ra một 'Lớp Học Hạnh Phúc'!",
        choices: [{ text: "🏆 Chúc mừng bạn hoàn thành Tuyến LINH", nextScene: "RESET_GAME" }]
    },

    // ==========================================
    // TUYẾN 4: NAM - NGƯỜI CHỨNG KIẾN (CẤU TRÚC 4 TẦNG LẮT LÉO)
    // ==========================================

    // ------------------------------------------
    // MÀN 1: BẠO LỰC CỤC BỘ (NHÀ VỆ SINH)
    // ------------------------------------------
    "nam_man_1": {
        charName: "NAM (Cảnh 1: Góc Khuất Nhà Vệ Sinh)",
        charColor: "text-amber-400",
        charSprite: "assets/characters/Char_3.webp",
        bgTheme: "border-amber-500/30 bg-slate-900/95",
        story: "Bước vào nhà vệ sinh nam giờ ra chơi, Nam thấy 3 học sinh lớp trên đang khóa trái cửa, dội nước xô vào người một bạn nam lớp dưới và quay clip cười cợt.",
        choices: [
            { text: "👉 Lao thẳng vào chửi bới: 'Đm tụi mày làm cái gì đấy? Thả nó ra ngay!'.", nextScene: "nam_1_sai_a" },
            { text: "👉 Giả vờ đi tiểu tiện bình thường coi như không thấy gì rồi lặng lẽ bước ra ngoài.", nextScene: "nam_1_sai_b" },
            { text: "👉 Quay lại hành lang, đập mạnh vào cửa hô to 'Thầy Giám thị đang đi kiểm tra!' để chúng hoảng loạn dừng tay.", nextScene: "nam_1_1" }
        ]
    },
    "nam_1_sai_a": {
        charName: "NAM (Cảnh 1: Thất bại)",
        charColor: "text-rose-500",
        charSprite: "assets/characters/Char_3_Defeat.webp",
        bgTheme: "border-rose-500/80 bg-rose-950/90 animate__shakeX",
        isResult: true,
        resultTitle: "THẤT BẠI - MANH ĐỘNG LÀ HẠI THÂN",
        resultColor: "text-rose-500",
        illustration: "assets/scenes/Char_3_Scene_1.webp",
        story: "Trong không gian hẹp với 3 kẻ đang hung hãn, việc lao vào tay đôi là tự sát. Nam bị nhóm đó lôi vào đánh hội đồng ngay trong nhà vệ sinh.",
        choices: [{ text: "↺ Làm lại bước này", nextScene: "nam_man_1", isUndo: true }]
    },
    "nam_1_sai_b": {
        charName: "NAM (Cảnh 1: Thất bại)",
        charColor: "text-amber-400",
        charSprite: "assets/characters/Char_3_Defeat.webp",
        bgTheme: "border-amber-500/50 bg-slate-900/95",
        isResult: true,
        resultTitle: "THẤT BẠI - SỰ VÔ CẢM TỔNG CỘNG",
        resultColor: "text-amber-400",
        illustration: "assets/scenes/Char_3_Scene_1.webp",
        story: "Việc ngó lơ khiến bạn học dưới tiếp tục chịu nhục hình. Khi sự vô cảm lên ngôi, chính bạn một ngày nào đó cũng có thể rơi vào hoàn cảnh không ai cứu giúp.",
        choices: [{ text: "↺ Làm lại bước này", nextScene: "nam_man_1", isUndo: true }]
    },

    "nam_1_1": {
        charName: "NAM (Cảnh 1.1: Hiện Trường)",
        charColor: "text-amber-400",
        charSprite: "assets/characters/Char_3.webp",
        bgTheme: "border-amber-500/30 bg-slate-900/95",
        story: "Tiếng 'Giám thị kìa' làm bọn chúng hoảng sợ mở cửa chạy tán loạn. Em học sinh bị bắt nạt ướt nhẹp, run cầm cập ở góc tường. Hùng (kẻ cầm đầu) ngoái lại nhìn thấy Nam đang cầm điện thoại đứng ngoài hành lang.",
        choices: [
            { text: "👉 Cười khẩy: 'Tao quay clip lại rồi, liệu hồn mà cút'.", nextScene: "nam_1_1_sai_a" },
            { text: "👉 Bỏ chạy luôn vì sợ chúng quay lại trả thù.", nextScene: "nam_1_1_sai_b" },
            { text: "👉 Tiến lại gần em học sinh, cởi áo khoác mình đưa cho em ấy và hỏi: 'Em có sao không? Em học lớp nào?'.", nextScene: "nam_1_2" }
        ]
    },
    "nam_1_1_sai_a": {
        charName: "NAM (Cảnh 1.1: Thất bại)",
        charColor: "text-rose-500",
        charSprite: "assets/characters/Char_3_Defeat.webp",
        bgTheme: "border-rose-500/80 bg-rose-950/90 animate__shakeX",
        isResult: true,
        resultTitle: "THẤT BẠI - KÍCH ĐỘNG ĐỐI THỦ",
        resultColor: "text-rose-500",
        illustration: "assets/scenes/Char_3_Scene_3.webp",
        story: "Lời thách thức làm Hùng điên tiết. Nó không bỏ đi mà lao vào giật điện thoại của Nam để xóa clip. Nam mất bằng chứng và bị đánh thêm lần nữa.",
        choices: [{ text: "↺ Làm lại bước này", nextScene: "nam_1_1", isUndo: true }]
    },
    "nam_1_1_sai_b": {
        charName: "NAM (Cảnh 1.1: Thất bại)",
        charColor: "text-amber-400",
        charSprite: "assets/characters/Char_3_Defeat.webp",
        bgTheme: "border-amber-500/50 bg-slate-900/95",
        isResult: true,
        resultTitle: "THẤT BẠI - BỎ MẶC NẠN NHÂN",
        resultColor: "text-amber-400",
        illustration: "assets/scenes/Char_3_Scene_1.webp",
        story: "Bỏ chạy khiến em học sinh kia tiếp tục bị cô lập và không có ai hỗ trợ tâm lý ngay lúc hoảng loạn nhất.",
        choices: [{ text: "↺ Làm lại bước này", nextScene: "nam_1_1", isUndo: true }]
    },

    "nam_1_2": {
        charName: "NAM (Cảnh 1.2: Đối Chất)",
        charColor: "text-amber-400",
        charSprite: "assets/characters/Char_3.webp",
        bgTheme: "border-amber-500/30 bg-slate-900/95",
        story: "Em học sinh lớp 10 vừa khóc vừa nói bị Hùng vòi tiền. Hùng đứng từ xa ném đá vào chân Nam: 'Mày muốn chết hả thằng kia?'.",
        choices: [
            { text: "👉 Ném đá trả lại Hùng: 'Mày mới là thằng muốn chết'.", nextScene: "nam_1_2_sai_a" },
            { text: "👉 Dắt tay em học sinh vào phòng Đoàn trường, không thèm chấp bọn rác rưởi.", nextScene: "nam_1_3" }
        ]
    },
    "nam_1_2_sai_a": {
        charName: "NAM (Cảnh 1.2: Thất bại)",
        charColor: "text-rose-500",
        charSprite: "assets/characters/Char_3_Defeat.webp",
        bgTheme: "border-rose-500/80 bg-rose-950/90 animate__shakeX",
        isResult: true,
        resultTitle: "THẤT BẠI - TRỞ THÀNH KẺ CÔN ĐỒ",
        resultColor: "text-rose-500",
        illustration: "assets/scenes/Char_3_Scene_3.webp",
        story: "Ném đá trả lại khiến cuộc cãi vã leo thang thành trận chiến. Nam bị nhà trường kỷ luật vì tham gia đánh nhau.",
        choices: [{ text: "↺ Làm lại bước này", nextScene: "nam_1_2", isUndo: true }]
    },

    "nam_1_3": {
        charName: "NAM (Cảnh 1.3: Cú Chốt)",
        charColor: "text-amber-400",
        charSprite: "assets/characters/Char_3.webp",
        bgTheme: "border-amber-500/30 bg-slate-900/95",
        story: "Tại phòng Đoàn, em học sinh kia khai hết sự việc. Hùng bị gọi lên nhưng chối: 'Em chỉ đùa thôi'. Thầy Bí thư nhìn Nam hỏi: 'Nam, em có bằng chứng gì không?'.",
        choices: [
            { text: "👉 'Em không có gì ạ, thầy tin em đi'.", nextScene: "nam_1_3_sai_a" },
            { text: "👉 'Dạ em có quay clip lúc hắn dội nước và ép em học sinh này nộp tiền, em gửi vào mail thầy ngay đây'.", nextScene: "nam_1_thanh_cong" }
        ]
    },
    "nam_1_3_sai_a": {
        charName: "NAM (Cảnh 1.3: Thất bại)",
        charColor: "text-amber-400",
        charSprite: "assets/characters/Char_3_Defeat.webp",
        bgTheme: "border-amber-500/50 bg-slate-900/95",
        isResult: true,
        resultTitle: "THẤT BẠI - LỜI NÓI SUÔNG",
        resultColor: "text-amber-400",
        illustration: "assets/scenes/Char_3_Scene_1.webp",
        story: "Không có bằng chứng, Hùng thoát tội và thề sẽ trả thù Nam sau giờ học.",
        choices: [{ text: "↺ Làm lại bước này", nextScene: "nam_1_3", isUndo: true }]
    },
    "nam_1_thanh_cong": {
        charName: "NAM (Kết Quả Màn 1)",
        charColor: "text-emerald-400",
        charSprite: "assets/characters/Char_3_Angry.webp",
        bgTheme: "border-amber-500/80 bg-blue-950/90 animate__pulse",
        isResult: true,
        resultTitle: "THÀNH CÔNG - NGƯỜI BẢO VỆ CÔNG LÝ",
        resultColor: "text-emerald-400",
        illustration: "assets/scenes/Char_3_Scene_2.webp",
        story: "Clip bằng chứng của Nam khiến Hùng cạn lời. Hùng bị đình chỉ học và yêu cầu bồi thường thiệt hại cho nạn nhân. Nam được tuyên dương là tấm gương dũng cảm trong trường.",
        choices: [{ text: "➔ Chuyển sang Màn 2: Lôi Kéo Đánh Hội Đồng", nextScene: "nam_man_2" }]
    },

    // ------------------------------------------
    // MÀN 2: LÔI KÉO ĐÁNH HỘI ĐỒNG
    // ------------------------------------------
    "nam_man_2": {
        charName: "NAM (Cảnh 2: Hội 'Anh Em' Kết Nghĩa)",
        charColor: "text-amber-400",
        charSprite: "assets/characters/Char_3.webp",
        bgTheme: "border-amber-500/30 bg-slate-900/95",
        story: "Hội anh em thân thiết rủ Nam chiều nay đi chặn đánh một học sinh lớp khác vì dám 'nhìn đểu' trưởng nhóm. Chúng bảo: 'Mày đi theo đứng canh chừng thôi, không cần đánh, đi cho biết mặt anh em'.",
        choices: [
            { text: "👉 Nể tình nên đi theo, nghĩ là không đánh thì không sao.", nextScene: "nam_2_sai_a" },
            { text: "👉 Hăng hái nhận lời đi theo để mang vũ khí trợ uy cho hội.", nextScene: "nam_2_sai_c" },
            { text: "👉 Từ chối thẳng: 'Tao không chơi trò rác rưởi này. Đứa nào đi là hèn'.", nextScene: "nam_2_1" }
        ]
    },
    "nam_2_sai_a": {
        charName: "NAM (Cảnh 2: Thất bại)",
        charColor: "text-rose-500",
        charSprite: "assets/characters/Char_3_Defeat.webp",
        bgTheme: "border-rose-500/80 bg-rose-950/90 animate__shakeX",
        isResult: true,
        resultTitle: "THẤT BẠI - ĐỒNG PHẠM GIÚP SỨC",
        resultColor: "text-rose-500",
        illustration: "assets/scenes/Char_3_Scene_3.webp",
        story: "Luật pháp coi người đứng canh chừng cũng là đồng phạm. Nam bị Công an tóm cùng nhóm bạn và phải chịu hình thức kỷ luật nặng nề.",
        choices: [{ text: "↺ Làm lại bước này", nextScene: "nam_man_2", isUndo: true }]
    },
    "nam_2_sai_c": {
        charName: "NAM (Cảnh 2: Thất bại)",
        charColor: "text-rose-500",
        charSprite: "assets/characters/Char_3_Defeat.webp",
        bgTheme: "border-rose-500/80 bg-rose-950/90 animate__shakeX",
        isResult: true,
        resultTitle: "THẤT BẠI - SA NGÃ VÀO TỘI ÁC",
        resultColor: "text-rose-500",
        illustration: "assets/scenes/Char_3_Scene_3.webp",
        story: "Sự bốc đồng khiến bạn trở thành kẻ gây rối trật tự. Tương lai học tập của bạn chính thức chấm dứt.",
        choices: [{ text: "↺ Làm lại bước này", nextScene: "nam_man_2", isUndo: true }]
    },

    "nam_2_1": {
        charName: "NAM (Cảnh 2.1: Khi Lòng Tự Trọng Bị Thách Thức)",
        charColor: "text-amber-400",
        charSprite: "assets/characters/Char_3.webp",
        bgTheme: "border-amber-500/30 bg-slate-900/95",
        story: "Trưởng nhóm tức tối: 'Thằng Nam này láo, dám chửi anh em à? Tụi bay cho nó biết mặt đi'. Cả nhóm tiến lại gần, vẻ mặt đầy sát khí.",
        choices: [
            { text: "👉 Lao vào đấm trước: 'Tao chửi đấy, làm gì được tao?'.", nextScene: "nam_2_sai_c" },
            { text: "👉 Chạy thục mạng về phía cổng trường đông người.", nextScene: "nam_2_2" },
            { text: "👉 Lấy điện thoại bật Livestream, đứng yên tại chỗ: 'Bọn mày muốn đánh nhau thì lên live cho cả trường xem'.", nextScene: "nam_2_thanh_cong" }
        ]
    },
    "nam_2_2": {
        charName: "NAM (Cảnh 2.2: Thoát Thân)",
        charColor: "text-amber-400",
        charSprite: "assets/characters/Char_3.webp",
        bgTheme: "border-amber-500/30 bg-slate-900/95",
        story: "Nam chạy thoát nhưng bị chúng dồn vào ngõ cụt ngay cổng trường. Chúng vẫn đang tiến lại.",
        choices: [
            { text: "👉 Cố gắng cầu xin chúng tha thứ.", nextScene: "nam_2_sai_a" },
            { text: "👉 Hô lớn: 'Chú bảo vệ ơi! Có kẻ chặn đánh học sinh!'.", nextScene: "nam_2_thanh_cong" }
        ]
    },
    "nam_2_thanh_cong": {
        charName: "NAM (Kết Quả Màn 2)",
        charColor: "text-emerald-400",
        charSprite: "assets/characters/Char_3_Angry.webp",
        bgTheme: "border-amber-500/80 bg-blue-950/90 animate__pulse",
        isResult: true,
        resultTitle: "THÀNH CÔNG - TRÍ TUỆ GIẢI QUYẾT XUNG ĐỘT",
        resultColor: "text-emerald-400",
        illustration: "assets/scenes/Char_3_Scene_4.webp",
        story: "Sự bình tĩnh dùng công nghệ (Livestream) hoặc tận dụng người lớn đã ngăn chặn vụ ẩu đả. Bạn bảo vệ được bản thân mà không cần đến bạo lực.",
        choices: [{ text: "➔ Chuyển sang Màn 3: Bạo lực mạng", nextScene: "nam_man_3" }]
    },


    // ------------------------------------------
    // MÀN 3: BẠO LỰC MẠNG (GROUP DISCORD)
    // ------------------------------------------
    "nam_man_3": {
        charName: "NAM (Cảnh 3: Bạo lực Discord)",
        charColor: "text-amber-400",
        charSprite: "assets/characters/Char_3.webp",
        bgTheme: "border-amber-500/30 bg-slate-900/95",
        story: "Trong discord lớp, nhóm bạn chế nhạo một bạn có gia cảnh nghèo. Chúng rủ Nam vào spam icon cười cợt.",
        choices: [
            { text: "👉 Vào cười cho vui, không làm gì thêm.", nextScene: "nam_3_sai_a" },
            { text: "👉 Phản đối: 'Tụi bây rảnh quá à? Làm vậy người ta tổn thương đấy'.", nextScene: "nam_3_1" },
            { text: "👉 Im lặng không tham gia, out server.", nextScene: "nam_3_sai_c" }
        ]
    },
    "nam_3_sai_a": {
        charName: "NAM (Cảnh 3: Thất bại)",
        charColor: "text-rose-500",
        charSprite: "assets/characters/Char_3_Defeat.webp",
        bgTheme: "border-rose-500/80 bg-rose-950/90 animate__shakeX",
        isResult: true,
        resultTitle: "THẤT BẠI - HÒA TAN VÀO CÁI ÁC",
        resultColor: "text-rose-500",
        illustration: "assets/scenes/Char_3_Scene_5.webp",
        story: "Cái cười 'cho vui' của bạn khiến nạn nhân tuyệt vọng hoàn toàn. Bạn đã chọn đi theo phe kẻ bắt nạt.",
        choices: [{ text: "↺ Làm lại bước này", nextScene: "nam_man_3", isUndo: true }]
    },
    "nam_3_sai_c": {
        charName: "NAM (Cảnh 3: Thất bại)",
        charColor: "text-amber-400",
        charSprite: "assets/characters/Char_3_Defeat.webp",
        bgTheme: "border-amber-500/50 bg-slate-900/95",
        isResult: true,
        resultTitle: "THẤT BẠI - SỰ IM LẶNG TÒNG PHẠM",
        resultColor: "text-amber-400",
        illustration: "assets/scenes/Char_3_Scene_5.webp",
        story: "Im lặng out server không ngăn chặn được sự tàn ác của chúng. Bạn học kia vẫn bị bạo hành mạng dã man.",
        choices: [{ text: "↺ Làm lại bước này", nextScene: "nam_man_3", isUndo: true }]
    },

    "nam_3_1": {
        charName: "NAM (Cảnh 3.1: Đối Diện Đám Đông)",
        charColor: "text-amber-400",
        charSprite: "assets/characters/Char_3.webp",
        bgTheme: "border-amber-500/30 bg-slate-900/95",
        story: "Nhóm bạn quay sang mỉa mai Nam: 'Cái gì? Nam 'thánh đạo đức' à? Mày rảnh thì biến đi, tụi tao đang chơi'.",
        choices: [
            { text: "👉 Chửi lại: 'Tụi mày rác rưởi thật'.", nextScene: "nam_3_1_sai_a" },
            { text: "👉 Dùng nick clone vào báo cáo (report) kênh chat vi phạm.", nextScene: "nam_3_2" }
        ]
    },
    "nam_3_1_sai_a": {
        charName: "NAM (Cảnh 3.1: Thất bại)",
        charColor: "text-rose-500",
        charSprite: "assets/characters/Char_3_Defeat.webp",
        bgTheme: "border-rose-500/80 bg-rose-950/90 animate__shakeX",
        isResult: true,
        resultTitle: "THẤT BẠI - KÍCH ĐỘNG BẠO LỰC",
        resultColor: "text-rose-500",
        illustration: "assets/scenes/Char_3_Scene_5.webp",
        story: "Chửi bới chỉ làm mâu thuẫn gia tăng. Nhóm này quyết tâm cô lập Nam vì tội 'cản trở cuộc vui'.",
        choices: [{ text: "↺ Làm lại bước này", nextScene: "nam_3_1", isUndo: true }]
    },

    "nam_3_2": {
        charName: "NAM (Cảnh 3.2: Đòn Hiểm)",
        charColor: "text-amber-400",
        charSprite: "assets/characters/Char_3.webp",
        bgTheme: "border-amber-500/30 bg-slate-900/95",
        story: "Discord đã xóa kênh chat đó. Bọn chúng biết Nam báo cáo, nên tối hôm sau, chúng tạo một nick giả mạo Nam đi nhắn tin chửi bới giáo viên để hãm hại.",
        choices: [
            { text: "👉 Chấp nhận bị kỷ luật vì không có bằng chứng vô tội.", nextScene: "nam_3_2_sai_a" },
            { text: "👉 Chứng minh tài khoản bị mạo danh bằng cách trích xuất logs đăng nhập và các tệp tin lưu trữ trong máy.", nextScene: "nam_3_thanh_cong" }
        ]
    },
    "nam_3_2_sai_a": {
        charName: "NAM (Cảnh 3.2: Thất bại)",
        charColor: "text-rose-500",
        charSprite: "assets/characters/Char_3_Defeat.webp",
        bgTheme: "border-rose-500/80 bg-rose-950/90 animate__shakeX",
        isResult: true,
        resultTitle: "THẤT BẠI - BỊ ĐỔ TỘI",
        resultColor: "text-rose-500",
        illustration: "assets/scenes/Char_3_Scene_6.webp",
        story: "Không chứng minh được sự vô tội khiến Nam phải chịu kỷ luật thay kẻ khác. Kẻ bắt nạt đắc thắng.",
        choices: [{ text: "↺ Làm lại bước này", nextScene: "nam_3_2", isUndo: true }]
    },
    "nam_3_thanh_cong": {
        charName: "NAM (Kết Quả Màn 3)",
        charColor: "text-emerald-400",
        charSprite: "assets/characters/Char_3_Angry.webp",
        bgTheme: "border-amber-500/80 bg-blue-950/90 animate__pulse",
        isResult: true,
        resultTitle: "THÀNH CÔNG - LẬT TẨY KẺ GIAN",
        resultColor: "text-emerald-400",
        illustration: "assets/scenes/Char_3_Scene_6.webp",
        story: "Chứng minh được tài khoản bị giả mạo qua log IP và tệp tin lưu trữ, Nam đã lật ngược tình thế khiến kẻ hãm hại bị kỷ luật. Bạn bảo vệ được bản thân và bạn bè!",
        choices: [{ text: "➔ Chuyển sang Màn 4: Trấn Lột Tiền Bạc", nextScene: "nam_man_4" }]
    },


    // ------------------------------------------
    // MÀN 4: TRẤN LỘT TIỀN BẠC (ĐỒNG BỌN)
    // ------------------------------------------
    "nam_man_4": {
        charName: "NAM (Cảnh 4: Bạn Thân Bị Ép)",
        charColor: "text-amber-400",
        charSprite: "assets/characters/Char_3.webp",
        bgTheme: "border-amber-500/30 bg-slate-900/95",
        story: "Bạn thân của Nam là Tuấn bị nhóm lớp trên tống tiền. Tuấn sợ đến mức muốn trộm tiền nhà để nộp.",
        choices: [
            { text: "👉 Bảo Tuấn: 'Đàn ông tự giải quyết đi, nộp tiền cho hèn!'.", nextScene: "nam_4_sai_a" },
            { text: "👉 Cho mượn tiền để Tuấn nộp cho xong chuyện.", nextScene: "nam_4_sai_b" },
            { text: "👉 Khuyên Tuấn đi báo giáo viên và cùng đi với Tuấn.", nextScene: "nam_4_thanh_cong" }
        ]
    },
    "nam_4_sai_a": {
        charName: "NAM (Cảnh 4: Thất bại)",
        charColor: "text-rose-500",
        charSprite: "assets/characters/Char_3_Defeat.webp",
        bgTheme: "border-rose-500/80 bg-rose-950/90 animate__shakeX",
        isResult: true,
        resultTitle: "THẤT BẠI - BẠN BÈ LẠNH NHẠT",
        resultColor: "text-rose-500",
        illustration: "assets/scenes/Char_3_Scene_7.webp",
        story: "Lời phán xét thiếu đồng cảm làm rạn nứt tình bạn. Tuấn tìm cách tự tử vì không biết phải làm sao.",
        choices: [{ text: "↺ Làm lại bước này", nextScene: "nam_man_4", isUndo: true }]
    },
    "nam_4_sai_b": {
        charName: "NAM (Cảnh 4: Thất bại)",
        charColor: "text-amber-400",
        charSprite: "assets/characters/Char_3_Defeat.webp",
        bgTheme: "border-amber-500/50 bg-slate-900/95",
        isResult: true,
        resultTitle: "THẤT BẠI - TIẾP TAY TỘI ÁC",
        resultColor: "text-amber-400",
        illustration: "assets/scenes/Char_3_Scene_8.webp",
        story: "Nộp tiền làm kẻ cướp lấn tới. Bạn không cứu được bạn mà còn mất tiền vô ích.",
        choices: [{ text: "↺ Làm lại bước này", nextScene: "nam_man_4", isUndo: true }]
    },
    "nam_4_thanh_cong": {
        charName: "NAM (Kết Quả Màn 4)",
        charColor: "text-emerald-400",
        charSprite: "assets/characters/Char_3_Angry.webp",
        bgTheme: "border-amber-500/80 bg-blue-950/90 animate__pulse",
        isResult: true,
        resultTitle: "THÀNH CÔNG - TÌNH BẠN ĐÍCH THỰC",
        resultColor: "text-emerald-400",
        illustration: "assets/scenes/Char_3_Scene_8.webp",
        story: "Báo giáo viên thành công xử lý nhóm tống tiền. Tuấn an toàn và tình bạn hai người gắn kết hơn bao giờ hết.",
        choices: [{ text: "➔ Chuyển sang Màn 5: Lời cám dỗ", nextScene: "nam_man_5" }]
    },

    // ------------------------------------------
    // MÀN 5: CÁM DỖ (TOXIC MASCULINITY)
    // ------------------------------------------
    "nam_man_5": {
        charName: "NAM (Cảnh 5: Hội Của Những Kẻ Mạnh)",
        charColor: "text-amber-400",
        charSprite: "assets/characters/Char_3.webp",
        bgTheme: "border-amber-500/30 bg-slate-900/95",
        story: "Hội con trai nổi tiếng rủ Nam vào nhóm, với điều kiện phải trêu chọc một bạn nam yếu đuối trong lớp để chứng tỏ 'đẳng cấp'.",
        choices: [
            { text: "👉 Gia nhập và hùa theo để lấy số má.", nextScene: "nam_5_sai_a" },
            { text: "👉 Từ chối khéo léo để bảo vệ lòng tự trọng.", nextScene: "nam_5_thanh_cong" },
            { text: "👉 Giả vờ đồng ý rồi báo cáo nhóm lên giáo viên.", nextScene: "nam_5_sai_c" }
        ]
    },
    "nam_5_sai_a": {
        charName: "NAM (Cảnh 5: Thất bại)",
        charColor: "text-rose-500",
        charSprite: "assets/characters/Char_3_Defeat.webp",
        bgTheme: "border-rose-500/80 bg-rose-950/90 animate__shakeX",
        isResult: true,
        resultTitle: "THẤT BẠI - ĐÁNH MẤT BẢN THÂN",
        resultColor: "text-rose-500",
        illustration: "assets/scenes/Char_3_Scene_9.webp",
        story: "Sự nể sợ ảo tưởng không thể thay thế cho nhân cách thật. Bạn đã trở thành phiên bản độc hại mà chính mình từng căm ghét.",
        choices: [{ text: "↺ Làm lại bước này", nextScene: "nam_man_5", isUndo: true }]
    },
    "nam_5_sai_c": {
        charName: "NAM (Cảnh 5: Thất bại)",
        charColor: "text-amber-400",
        charSprite: "assets/characters/Char_3_Defeat.webp",
        bgTheme: "border-amber-500/50 bg-slate-900/95",
        isResult: true,
        resultTitle: "THẤT BẠI - CHIẾN THUẬT LẬT MẶT",
        resultColor: "text-amber-400",
        illustration: "assets/scenes/Char_3_Scene_9.webp",
        story: "Giả vờ gia nhập rồi đâm sau lưng khiến bạn không được thầy cô tin tưởng vì cũng tham gia vào nhóm bạn xấu.",
        choices: [{ text: "↺ Làm lại bước này", nextScene: "nam_man_5", isUndo: true }]
    },
    "nam_5_thanh_cong": {
        charName: "NAM (Kết Quả Màn 5)",
        charColor: "text-emerald-400",
        charSprite: "assets/characters/Char_3_Angry.webp",
        bgTheme: "border-amber-500/80 bg-blue-950/90 animate__pulse",
        isResult: true,
        resultTitle: "THÀNH CÔNG - GIÁ TRỊ TỰ THÂN",
        resultColor: "text-emerald-400",
        illustration: "assets/scenes/Char_3_Scene_10.webp",
        story: "Bạn chứng minh được sự nam tính nằm ở trí tuệ và sự tử tế. Cả lớp dần nhìn nhận lại bạn và không còn áp lực bắt nạt trong các hoạt động nam giới nữa.",
        choices: [{ text: "➔ Chuyển sang Màn 6: Bạo lực thể thao", nextScene: "nam_man_6" }]
    },

    // ------------------------------------------
    // MÀN 6: TRẬN ĐẤU BẤT CÔNG (THỂ THAO)
    // ------------------------------------------
    "nam_man_6": {
        charName: "NAM (Cảnh 6: Trận Đấu Công Bằng)",
        charColor: "text-amber-400",
        charSprite: "assets/characters/Char_3.webp",
        bgTheme: "border-amber-500/30 bg-slate-900/95",
        story: "Giải bóng đá, đội trưởng cố tình không chuyền bóng cho Minh, trọng tài thiên vị. Minh thấy bất công.",
        choices: [
            { text: "👉 Cố tình đá phản lưới nhà trả thù.", nextScene: "nam_6_sai_a" },
            { text: "👉 Bỏ chạy khỏi sân.", nextScene: "nam_6_sai_b" },
            { text: "👉 Tạm dừng, yêu cầu trọng tài check công bằng.", nextScene: "nam_6_thanh_cong" }
        ]
    },
    "nam_6_sai_a": {
        charName: "NAM (Cảnh 6: Thất bại)",
        charColor: "text-rose-500",
        charSprite: "assets/characters/Char_3_Defeat.webp",
        bgTheme: "border-rose-500/80 bg-rose-950/90 animate__shakeX",
        isResult: true,
        resultTitle: "THẤT BẠI - HÀNH VI CÔN ĐỒ",
        resultColor: "text-rose-500",
        illustration: "assets/scenes/Char_3_Scene_11.webp",
        story: "Đá phản lưới là hành vi vi phạm đạo đức, bạn bị cả đội tẩy chay.",
        choices: [{ text: "↺ Làm lại bước này", nextScene: "nam_man_6", isUndo: true }]
    },
    "nam_6_sai_b": {
        charName: "NAM (Cảnh 6: Thất bại)",
        charColor: "text-amber-400",
        charSprite: "assets/characters/Char_3_Defeat.webp",
        bgTheme: "border-amber-500/50 bg-slate-900/95",
        isResult: true,
        resultTitle: "THẤT BẠI - HÈN NHÁT BỎ CUỘC",
        resultColor: "text-amber-400",
        illustration: "assets/scenes/Char_3_Scene_11.webp",
        story: "Bỏ cuộc không làm thay đổi cục diện, bạn chỉ làm mọi người thất vọng hơn thôi.",
        choices: [{ text: "↺ Làm lại bước này", nextScene: "nam_man_6", isUndo: true }]
    },
    "nam_6_thanh_cong": {
        charName: "NAM (Kết Quả Màn 6)",
        charColor: "text-emerald-400",
        charSprite: "assets/characters/Char_3_Angry.webp",
        bgTheme: "border-amber-500/80 bg-blue-950/90 animate__pulse",
        isResult: true,
        resultTitle: "THÀNH CÔNG - CẦU THỦ CAO THƯỢNG",
        resultColor: "text-emerald-400",
        illustration: "assets/scenes/Char_3_Scene_12.webp",
        story: "Sự bình tĩnh đòi công bằng giúp bạn chiến thắng, cả đội sau đó phải nể trọng vì kỹ năng và thái độ của bạn.",
        choices: [{ text: "➔ Chuyển sang Màn 7: Khởi xướng chiến dịch", nextScene: "nam_man_7" }]
    },

    // ------------------------------------------
    // MÀN 7: KHỞI XƯỚNG CHIẾN DỊCH (THỦ LĨNH)
    // ------------------------------------------
    "nam_man_7": {
        charName: "NAM (Cảnh 7: Tầm Nhìn)",
        charColor: "text-amber-400",
        charSprite: "assets/characters/Char_3.webp",
        bgTheme: "border-amber-500/30 bg-slate-900/95",
        story: "Nam được cử khởi xướng phong trào bảo vệ nam giới khỏi bạo lực.",
        choices: [
            { text: "👉 Lập đội tự vệ, đánh lại bất cứ kẻ nào bắt nạt.", nextScene: "nam_7_sai_a" },
            { text: "👉 Lập CLB thể thao lành mạnh, tư vấn tâm lý.", nextScene: "nam_7_thanh_cong" },
            { text: "👉 Chỉ làm cho có lệ.", nextScene: "nam_7_sai_b" }
        ]
    },
    "nam_7_sai_a": {
        charName: "NAM (Cảnh 7: Thất bại)",
        charColor: "text-rose-500",
        charSprite: "assets/characters/Char_3_Defeat.webp",
        bgTheme: "border-rose-500/80 bg-rose-950/90 animate__shakeX",
        isResult: true,
        resultTitle: "THẤT BẠI - BẠO LỰC MỚI",
        resultColor: "text-rose-500",
        illustration: "assets/scenes/Char_3_Scene_13.webp",
        story: "Dùng bạo lực để chống bạo lực là sai lầm, bạn bị đuổi học.",
        choices: [{ text: "↺ Làm lại bước này", nextScene: "nam_man_7", isUndo: true }]
    },
    "nam_7_sai_b": {
        charName: "NAM (Cảnh 7: Thất bại)",
        charColor: "text-amber-400",
        charSprite: "assets/characters/Char_3_Defeat.webp",
        bgTheme: "border-amber-500/50 bg-slate-900/95",
        isResult: true,
        resultTitle: "THẤT BẠI - PHONG TRÀO RỖNG",
        resultColor: "text-amber-400",
        illustration: "assets/scenes/Char_3_Scene_13.webp",
        story: "Phong trào không có tâm thì không ai theo, bạn thất bại hoàn toàn.",
        choices: [{ text: "↺ Làm lại bước này", nextScene: "nam_man_7", isUndo: true }]
    },
    "nam_7_thanh_cong": {
        charName: "NAM (Kết Quả Màn 7)",
        charColor: "text-emerald-400",
        charSprite: "assets/characters/Char_3_Angry.webp",
        bgTheme: "border-amber-500/80 bg-blue-950/90 animate__pulse",
        isResult: true,
        resultTitle: "THÀNH CÔNG RỰC RỠ - NHÀ LÃNH ĐẠO TRẺ",
        resultColor: "text-emerald-400",
        illustration: "assets/scenes/Char_3_Scene_14.webp",
        story: "Bạn đã xây dựng được cộng đồng tích cực, giúp bao bạn nam vượt qua định kiến và tự tin hơn. Bạn là niềm tự hào của trường!",
        choices: [{ text: "🏆 CHÚC MỪNG BẠN! VỀ LẠI MENU CHÍNH.", nextScene: "RESET_GAME" }]
    }
};