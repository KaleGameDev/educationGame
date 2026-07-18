// ==========================================
// KỊCH BẢN 28 MÀN ĐỘC LẬP (4 NHÂN VẬT XEN KẼ NỮ - NAM)
// ==========================================
const STORY_DATA = {

    // ==========================================
    // TUYẾN 1: MAI - NỮ NẠN NHÂN (7 MÀN)
    // ==========================================
    "mai_man_1": {
        charName: "MAI (Màn 1: Ảnh Chụp Lén)",
        charColor: "text-emerald-400",
        charSprite: "assets/characters/Char_1.png",
        bgTheme: "border-emerald-500/30 bg-slate-900/95",
        story: "Sáng nay vừa đến lớp, Mai nhận được tin nhắn ẩn danh gửi vào nhóm chat chung của lớp. Đó là bức ảnh chụp lén Mai đang khóc trong nhà vệ sinh hôm qua kèm lời chế giễu... Mọi người trong group đang thả 'haha' liên tục.",
        choices: [
            { text: "👉 Tức giận, nhắn tin vào group chửi bới lại tất cả những ai thả 'haha'.", nextScene: "mai_1_sai_a" },
            { text: "👉 Tắt nguồn điện thoại, xin nghỉ học đi về nhà tự nhốt mình trong phòng.", nextScene: "mai_1_sai_b" },
            { text: "👉 Chụp lại màn hình làm bằng chứng, mang điện thoại lên báo cho Cô Giám thị.", nextScene: "mai_1_dung_c" }
        ]
    },
    "mai_1_sai_a": {
        charName: "MAI (Màn 1: Ảnh Chụp Lén)",
        charColor: "text-rose-500",
        charSprite: "assets/characters/Char_1_Cry.png",
        bgTheme: "border-rose-500/80 bg-rose-950/90 animate__shakeX",
        isResult: true,
        resultTitle: "THẤT BẠI - GIẬN QUÁ MẤT KHÔN",
        resultColor: "text-rose-500",
        illustration: "assets/scenes/Char_1_Scene_1.png",
        story: "Nhóm bạn chụp lại tin nhắn chửi bới của Mai và phát tán rộng hơn, vu khống Mai là người hỗn láo, vô văn hóa. Mai bị cô lập hoàn toàn. Sự phản kháng mất kiểm soát đã khiến nạn nhân bị biến thành người có lỗi trong mắt những người chưa hiểu chuyện.",
        choices: [{ text: "↺ Trở về thời điểm trước", nextScene: "mai_man_1", isUndo: true }]
    },
    "mai_1_sai_b": {
        charName: "MAI (Màn 1: Ảnh Chụp Lén)",
        charColor: "text-amber-400",
        charSprite: "assets/characters/Char_1_Cry.png",
        bgTheme: "border-amber-500/50 bg-slate-900/95",
        isResult: true,
        resultTitle: "THẤT BẠI - SỰ IM LẶNG ĐÁNG SỢ",
        resultColor: "text-amber-400",
        illustration: "assets/scenes/Char_1_Scene_1.png",
        story: "Mai rơi vào khủng hoảng tâm lý nặng nề, khép kín và sợ đến trường. Sự im lặng và chịu đựng một mình đã vô tình giúp kẻ bắt nạt cảm thấy an toàn để tiếp tục lộng hành mà không bị ai ngăn chặn hay phát hiện.",
        choices: [{ text: "↺ Trở về thời điểm trước", nextScene: "mai_man_1", isUndo: true }]
    },
    "mai_1_dung_c": {
        charName: "MAI (Màn 1: Ảnh Chụp Lén)",
        charColor: "text-emerald-400",
        charSprite: "assets/characters/Char_1_Happy.png",
        bgTheme: "border-emerald-500/80 bg-teal-950/90 animate__pulse",
        isResult: true,
        resultTitle: "THÀNH CÔNG - XỬ LÝ CHÍNH XÁC!",
        resultColor: "text-emerald-400",
        illustration: "assets/scenes/Char_1_Scene_2.png",
        story: "Cô Giám thị và Giáo viên chủ nhiệm kịp thời lập biên bản, mời phụ huynh của những học sinh phát tán ảnh lên làm việc. Bức ảnh bị gỡ bỏ, Mai được bảo vệ an toàn. Lưu giữ bằng chứng và tìm kiếm sự giúp đỡ từ người lớn tin cậy luôn là giải pháp bảo vệ bản thân tốt nhất!",
        choices: [{ text: "➔ Tiếp tục đến Màn 2: Trấn lột & Tống tiền", nextScene: "mai_man_2" }]
    },
    "mai_man_2": {
        charName: "MAI (Màn 2: Trấn Lột Tiền Bạc)",
        charColor: "text-emerald-400",
        charSprite: "assets/characters/Char_1.png",
        bgTheme: "border-emerald-500/30 bg-slate-900/95",
        story: "Giờ ra chơi tại góc khuất sau nhà đa năng, nhóm của Hùng chặn đường Mai, đe dọa và ép Mai phải nộp 200.000 đồng vào ngày mai 'để được yên thân'. Hùng dọa nếu báo thầy cô hay bố mẹ sẽ đánh hội đồng.",
        choices: [
            { text: "👉 Sợ hãi giấu gia đình, lấy trộm tiền của bố mẹ để nộp cho Hùng.", nextScene: "mai_2_sai_a" },
            { text: "👉 Tự nghĩ các biện pháp bạo lực để ngày mai giải quyết với nhóm Hùng.", nextScene: "mai_2_sai_b" },
            { text: "👉 Bình tĩnh đồng ý tạm thời để thoát thân, tối về tâm sự thật và nhờ Bố Mẹ can thiệp.", nextScene: "mai_2_dung_c" }
        ]
    },
    "mai_2_sai_a": {
        charName: "MAI (Màn 2: Trấn Lột Tiền Bạc)",
        charColor: "text-amber-400",
        charSprite: "assets/characters/Char_1_Cry.png",
        bgTheme: "border-amber-500/50 bg-slate-900/95",
        isResult: true,
        resultTitle: "THẤT BẠI - CÁI HỐ KHÔNG ĐÁY",
        resultColor: "text-amber-400",
        illustration: "assets/scenes/Char_1_Scene_3.png",
        story: "Việc nộp tiền không hề khiến nhóm Hùng dừng lại mà còn biến Mai thành 'mỏ vàng' dễ dãi. Lần sau chúng đòi số tiền gấp đôi. Mai rơi vào cảnh vừa bị bắt nạt, vừa mang tội trộm cắp tiền gia đình.",
        choices: [{ text: "↺ Trở về thời điểm trước", nextScene: "mai_man_2", isUndo: true }]
    },
    "mai_2_sai_b": {
        charName: "MAI (Màn 2: Trấn Lột Tiền Bạc)",
        charColor: "text-rose-500",
        charSprite: "assets/characters/Char_1_Cry.png",
        bgTheme: "border-rose-500/80 bg-rose-950/90 animate__shakeX",
        isResult: true,
        resultTitle: "THẤT BẠI - BẠO LỰC ĐÁP TRẢ BẠO LỰC",
        resultColor: "text-rose-500",
        illustration: "assets/scenes/Char_1_Scene_3.png",
        story: "Nuôi hy vọng trả thù mức tiêu cực đến trường là vi phạm pháp luật và nội quy nghiêm trọng. Khi xô xát xảy ra, Mai không những bị thương nặng hơn do yếu thế mà còn bị đình chỉ học vì hành vi tiêu cực.",
        choices: [{ text: "↺ Trở về thời điểm trước", nextScene: "mai_man_2", isUndo: true }]
    },
    "mai_2_dung_c": {
        charName: "MAI (Màn 2: Trấn Lột Tiền Bạc)",
        charColor: "text-emerald-400",
        charSprite: "assets/characters/Char_1_Happy.png",
        bgTheme: "border-emerald-500/80 bg-teal-950/90 animate__pulse",
        isResult: true,
        resultTitle: "THÀNH CÔNG - GIA ĐÌNH LÀ ĐIỂM TỰA",
        resultColor: "text-emerald-400",
        illustration: "assets/scenes/Char_1_Scene_4.png",
        story: "Bố mẹ Mai đã làm việc thẳng thắn với Ban giám hiệu và phụ huynh của Hùng. Hành vi cưỡng đoạt tài sản bị xử lý kỷ luật thích đáng. Khi bị đe dọa tài chính hoặc thân thể, gia đình là lá chắn vững chắc nhất!",
        choices: [{ text: "➔ Tiếp tục đến Màn 3: Bạo lực thể chất", nextScene: "mai_man_3" }]
    },
    "mai_man_3": {
        charName: "MAI (Màn 3: Bạo Lực Thể Chất)",
        charColor: "text-emerald-400",
        charSprite: "assets/characters/Char_1.png",
        bgTheme: "border-emerald-500/30 bg-slate-900/95",
        story: "Trong giờ tự quản, một nhóm học sinh cá biệt cố tình ném đồ, kéo ghế làm Mai ngã bầm dập, sau đó lao vào dứt tóc và tát Mai vô cớ để quay clip câu view.",
        choices: [
            { text: "👉 Vùng vẫy, hét thật to kêu cứu, che chắn vùng đầu và chạy ngay ra phía hành lang phòng Phòng giáo viên.", nextScene: "mai_3_dung_b" },
            { text: "👉 Co cụm chịu đựng, khóc lóc van xin chúng dừng tay.", nextScene: "mai_3_sai_a" },
            { text: "👉 Tự ái, nghỉ học trốn đi bụi để không phải đối mặt với ai.", nextScene: "mai_3_sai_c" }
        ]
    },
    "mai_3_sai_a": {
        charName: "MAI (Màn 3: Bạo Lực Thể Chất)",
        charColor: "text-amber-400",
        charSprite: "assets/characters/Char_1_Cry.png",
        bgTheme: "border-amber-500/50 bg-slate-900/95",
        isResult: true,
        resultTitle: "THẤT BẠI - SỰ NHƯỢNG BỘ YẾU ĐUỐI",
        resultColor: "text-amber-400",
        illustration: "assets/scenes/Char_1_Scene_5.png",
        story: "Sự van xin chỉ làm tăng sự phấn khích của kẻ tàn nhẫn. Clip bị phát tán, Mai vừa tổn thương thể chất vừa bị xỉ nhục nặng nề về nhân phẩm.",
        choices: [{ text: "↺ Trở về thời điểm trước", nextScene: "mai_man_3", isUndo: true }]
    },
    "mai_3_dung_b": {
        charName: "MAI (Màn 3: Bạo Lực Thể Chất)",
        charColor: "text-emerald-400",
        charSprite: "assets/characters/Char_1_Happy.png",
        bgTheme: "border-emerald-500/80 bg-teal-950/90 animate__pulse",
        isResult: true,
        resultTitle: "THÀNH CÔNG - PHẢN XẠ TỰ VỆ CHÍNH XÁC",
        resultColor: "text-emerald-400",
        illustration: "assets/scenes/Char_1_Scene_6.png",
        story: "Việc tạo tiếng động lớn và chạy về khu vực có người lớn/giáo viên đã lập tức phá vỡ hành vi bạo lực. Các thầy cô có mặt kịp thời ngăn chặn và thu giữ điện thoại quay clip. Bạn rất thông minh và dũng cảm!",
        choices: [{ text: "➔ Tiếp tục đến Màn 4: Cô lập & Tẩy chay", nextScene: "mai_man_4" }]
    },
    "mai_3_sai_c": {
        charName: "MAI (Màn 3: Bạo Lực Thể Chất)",
        charColor: "text-rose-500",
        charSprite: "assets/characters/Char_1_Cry.png",
        bgTheme: "border-rose-500/80 bg-rose-950/90 animate__shakeX",
        isResult: true,
        resultTitle: "THẤT BẠI - TRỐN TRÁNH KHÔNG GỢI MỞ",
        resultColor: "text-rose-500",
        illustration: "assets/scenes/Char_1_Scene_5.png",
        story: "Bỏ nhà đi bụi khiến Mai rơi vào những rủi ro xã hội ngoài đường phố còn khủng khiếp hơn. Vấn đề ở trường không được giải quyết mà tương lai của bạn lại bị đánh mất.",
        choices: [{ text: "↺ Trở về thời điểm trước", nextScene: "mai_man_3", isUndo: true }]
    },
    "mai_man_4": {
        charName: "MAI (Màn 4: Sự Cô Lập)",
        charColor: "text-emerald-400",
        charSprite: "assets/characters/Char_1.png",
        bgTheme: "border-emerald-500/30 bg-slate-900/95",
        story: "Một 'trưởng nhóm quyền lực' trong lớp không thích Mai nên đã kêu gọi cả lớp tẩy chay. Không ai chơi cùng, không ai nhận Mai vào nhóm làm bài tập lớn. Không khí lớp học ngột ngạt như địa ngục.",
        choices: [
            { text: "👉 Tìm mua quà cáp đắt tiền tâng bốc 'trưởng nhóm' để được hòa nhập lại.", nextScene: "mai_4_sai_a" },
            { text: "👉 Chủ động tìm gặp chuyên viên tâm lý học đường / Cô chủ nhiệm để trình bày về bạo lực tinh thần.", nextScene: "mai_4_dung_b" },
            { text: "👉 Đăng bài lên mạng xã hội chửi xéo cả lớp là lũ giả tạo.", nextScene: "mai_4_sai_c" }
        ]
    },
    "mai_4_sai_a": {
        charName: "MAI (Màn 4: Sự Cô Lập)",
        charColor: "text-amber-400",
        charSprite: "assets/characters/Char_1_Cry.png",
        bgTheme: "border-amber-500/50 bg-slate-900/95",
        isResult: true,
        resultTitle: "THẤT BẠI - ĐÁNH MẤT LÒNG TỰ TRỌNG",
        resultColor: "text-amber-400",
        illustration: "assets/scenes/Char_1_Scene_7.png",
        story: "Bạn bè chân chính không được mua bằng vật chất. Hành động của Mai khiến kẻ thao túng tâm lý coi thường hơn và tiếp tục lợi dụng Mai như một người hầu hạ sai vặt.",
        choices: [{ text: "↺ Trở về thời điểm trước", nextScene: "mai_man_4", isUndo: true }]
    },
    "mai_4_dung_b": {
        charName: "MAI (Màn 4: Sự Cô Lập)",
        charColor: "text-emerald-400",
        charSprite: "assets/characters/Char_1_Happy.png",
        bgTheme: "border-emerald-500/80 bg-teal-950/90 animate__pulse",
        isResult: true,
        resultTitle: "THÀNH CÔNG - THÁO GỠ VƯỚNG MẮC",
        resultColor: "text-emerald-400",
        illustration: "assets/scenes/Char_1_Scene_8.png",
        story: "Bạo lực tinh thần và tẩy chay là một dạng BLHĐ nghiêm trọng. Nhờ sự điều phối tâm lý khéo léo của giáo viên, các buổi sinh hoạt lớp đã giúp tháo gỡ hiểu lầm, phá vỡ sự thao túng độc hại của nhóm cầm đầu.",
        choices: [{ text: "➔ Tiếp tục đến Màn 5: Bạo lực Ngôn từ", nextScene: "mai_man_5" }]
    },
    "mai_4_sai_c": {
        charName: "MAI (Màn 4: Sự Cô Lập)",
        charColor: "text-rose-500",
        charSprite: "assets/characters/Char_1_Cry.png",
        bgTheme: "border-rose-500/80 bg-rose-950/90 animate__shakeX",
        isResult: true,
        resultTitle: "THẤT BẠI - CHÂM DẦU VÀO LỬA",
        resultColor: "text-rose-500",
        illustration: "assets/scenes/Char_1_Scene_7.png",
        story: "Việc chửi xéo công khai trên mạng chỉ cho nhóm tẩy chay cái cớ hợp pháp để nói rằng: 'Đấy, tính cách nó như thế nên bị tẩy chay là đúng'. Bạn tự cô lập mình hoàn toàn khỏi những bạn bè trung lập.",
        choices: [{ text: "↺ Trở về thời điểm trước", nextScene: "mai_man_4", isUndo: true }]
    },
    "mai_man_5": {
        charName: "MAI (Màn 5: Miệt Thị Ngoại Hình)",
        charColor: "text-emerald-400",
        charSprite: "assets/characters/Char_1.png",
        bgTheme: "border-emerald-500/30 bg-slate-900/95",
        story: "Mai bị một nhóm bạn nam nữ đặt biệt danh xúc phạm về ngoại hình (vóc dáng/khuôn mặt). Mỗi lần Mai phát biểu, cả lớp lại cười ầm lên gọi biệt danh đó khiến Mai xấu hổ không dám ngẩng đầu.",
        choices: [
            { text: "👉 Cố gắng nhịn ăn cực đoan, uống thuốc giảm cân cấp tốc để thay đổi ngoại hình.", nextScene: "mai_5_sai_a" },
            { text: "👉 Tìm nhược điểm ngoại hình của đứa cầm đầu và chửi bới mỉa mai lại nó giữa lớp.", nextScene: "mai_5_sai_c" },
            { text: "👉 Thẳng thắn, nghiêm túc nói rõ: 'Tôi không thích biệt danh đó, việc các bạn đem ngoại hình người khác ra giễu cợt là thiếu văn minh'.", nextScene: "mai_5_dung_b" }
        ]
    },
    "mai_5_sai_a": {
        charName: "MAI (Màn 5: Miệt Thị Ngoại Hình)",
        charColor: "text-rose-500",
        charSprite: "assets/characters/Char_1_Cry.png",
        bgTheme: "border-rose-500/80 bg-rose-950/90 animate__shakeX",
        isResult: true,
        resultTitle: "THẤT BẠI - HỦY HOẠI SỨC KHỎE",
        resultColor: "text-rose-500",
        illustration: "assets/scenes/Char_1_Scene_9.png",
        story: "Nhịn ăn và dùng thuốc bừa bãi khiến Mai ngất xỉu phải nhập viện cấp cứu. Bạn không cần phải hành hạ bản thân để làm hài lòng những kẻ có nhân cách kém cỏi!",
        choices: [{ text: "↺ Trở về thời điểm trước", nextScene: "mai_man_5", isUndo: true }]
    },
    "mai_5_dung_b": {
        charName: "MAI (Màn 5: Miệt Thị Ngoại Hình)",
        charColor: "text-emerald-400",
        charSprite: "assets/characters/Char_1_Happy.png",
        bgTheme: "border-emerald-500/80 bg-teal-950/90 animate__pulse",
        isResult: true,
        resultTitle: "THÀNH CÔNG - THIẾT LẬP RANH GIỚI",
        resultColor: "text-emerald-400",
        illustration: "assets/scenes/Char_1_Scene_10.png",
        story: "Sự kiên quyết, đàng hoàng và văn minh của Mai khiến những kẻ trêu đùa bị sượng sùng và xấu hổ. Khi bạn tôn trọng chính mình và dám vạch ra ranh giới, người khác bắt buộc phải học cách tôn trọng bạn!",
        choices: [{ text: "➔ Tiếp tục đến Màn 6: Bôi nhọ danh dự", nextScene: "mai_man_6" }]
    },
    "mai_5_sai_c": {
        charName: "MAI (Màn 5: Miệt Thị Ngoại Hình)",
        charColor: "text-amber-400",
        charSprite: "assets/characters/Char_1_Cry.png",
        bgTheme: "border-amber-500/50 bg-slate-900/95",
        isResult: true,
        resultTitle: "THẤT BẠI - VÒNG LẶP ĐỘC HẠI",
        resultColor: "text-amber-400",
        illustration: "assets/scenes/Char_1_Scene_9.png",
        story: "Việc trả đũa bằng cách hạ bệ ngoại hình người khác biến bạn trở thành kẻ giống hệt chúng. Lớp học biến thành cái chợ cãi vã miệt thị nhau và cả 2 bên đều bị hạnh kiểm yếu.",
        choices: [{ text: "↺ Trở về thời điểm trước", nextScene: "mai_man_5", isUndo: true }]
    },
    "mai_man_6": {
        charName: "MAI (Màn 6: Vu Khống Trộm Cắp)",
        charColor: "text-emerald-400",
        charSprite: "assets/characters/Char_1.png",
        bgTheme: "border-emerald-500/30 bg-slate-900/95",
        story: "Một bạn trong lớp bị mất tiền. Nhóm bắt nạt đã lén nhét ví tiền vào ngăn bàn của Mai rồi la hét vu khống Mai là ăn trộm trước mặt cả lớp. Mọi ánh mắt nghi kỵ dồn vào Mai.",
        choices: [
            { text: "👉 Hoảng loạn khóc lóc, tự móc hết túi và vứt hết đồ đạc ra sàn để chứng minh.", nextScene: "mai_6_sai_a" },
            { text: "👉 Bình tĩnh giữ nguyên hiện trường, yêu cầu gọi Cô chủ nhiệm và đề nghị kiểm tra camera lớp học.", nextScene: "mai_6_dung_b" },
            { text: "👉 Cầm chiếc ví ném thẳng vào mặt đứa vu khống rồi chạy khỏi lớp.", nextScene: "mai_6_sai_c" }
        ]
    },
    "mai_6_sai_a": {
        charName: "MAI (Màn 6: Vu Khống Trộm Cắp)",
        charColor: "text-amber-400",
        charSprite: "assets/characters/Char_1_Cry.png",
        bgTheme: "border-amber-500/50 bg-slate-900/95",
        isResult: true,
        resultTitle: "THẤT BẠI - MẤT BÌNH TĨNH LÀ THUA",
        resultColor: "text-amber-400",
        illustration: "assets/scenes/Char_1_Scene_11.png",
        story: "Sự hoảng loạn và hành động tự bới đồ bừa bãi khiến mọi người càng nghi ngờ bạn có tật giật mình. Khi đã bị cài bẫy, sự xúc động thái quá sẽ làm mất đi sự sáng suốt.",
        choices: [{ text: "↺ Trở về thời điểm trước", nextScene: "mai_man_6", isUndo: true }]
    },
    "mai_6_dung_b": {
        charName: "MAI (Màn 6: Vu Khống Trộm Cắp)",
        charColor: "text-emerald-400",
        charSprite: "assets/characters/Char_1_Happy.png",
        bgTheme: "border-emerald-500/80 bg-teal-950/90 animate__pulse",
        isResult: true,
        resultTitle: "THÀNH CÔNG - SỰ THẬT ĐƯỢC PHƠI BÀY",
        resultColor: "text-emerald-400",
        illustration: "assets/scenes/Char_1_Scene_12.png",
        story: "Camera lớp học đã ghi lại trọn vẹn cảnh nhóm bắt nạt lén nhét ví vào bàn của Mai trong giờ thể dục. Kẻ vu khống bị đình chỉ học. Sự bình tĩnh và dựa vào bằng chứng khách quan đã minh hoan hoàn toàn cho bạn!",
        choices: [{ text: "➔ Tiếp tục đến Màn 7: Cuộc chiến cuối cùng", nextScene: "mai_man_7" }]
    },
    "mai_6_sai_c": {
        charName: "MAI (Màn 6: Vu Khống Trộm Cắp)",
        charColor: "text-rose-500",
        charSprite: "assets/characters/Char_1_Cry.png",
        bgTheme: "border-rose-500/80 bg-rose-950/90 animate__shakeX",
        isResult: true,
        resultTitle: "THẤT BẠI - TÌNH NGAY LÝ GIAN",
        resultColor: "text-rose-500",
        illustration: "assets/scenes/Char_1_Scene_11.png",
        story: "Hành động ném đồ và bỏ chạy bị quy chụp ngay là 'kẻ trộm bị phát hiện nên tháo chạy'. Bạn tự tước đi cơ hội giải thích và tự làm xấu đi hình ảnh của mình.",
        choices: [{ text: "↺ Trở về thời điểm trước", nextScene: "mai_man_6", isUndo: true }]
    },
    "mai_man_7": {
        charName: "MAI (Màn 7: Cuộc Chiến Cuối Cùng)",
        charColor: "text-emerald-400",
        charSprite: "assets/characters/Char_1.png",
        bgTheme: "border-emerald-500/30 bg-slate-900/95",
        story: "Sau nhiều lần bắt nạt Mai không thành, nhóm bạo lực tạo một trang Confession ẩn danh trên Facebook, bịa đặt Mai là 'trà xanh', cướp bạn trai để cộng đồng mạng công kích. Những dòng tin nhắn chửi rủa đổ về dồn dập.",
        choices: [
            { text: "👉 Cùng gia đình làm đơn tố cáo lên Công an an ninh mạng và Sở Giáo dục kèm đầy đủ bằng chứng bịa đặt.", nextScene: "mai_7_dung_b" },
            { text: "👉 Tìm đến các cách giải quyết tieu cực để chứng minh sự trong sạch với cộng đồng mạng.", nextScene: "mai_7_sai_a" },
            { text: "👉 Thuê một nhóm giang hồ mạng đến trường dằn mặt lại nhóm làm Confession.", nextScene: "mai_7_sai_c" }
        ]
    },
    "mai_7_sai_a": {
        charName: "MAI (Màn 7: Cuộc Chiến Cuối Cùng)",
        charColor: "text-rose-500",
        charSprite: "assets/characters/Char_1_Cry.png",
        bgTheme: "border-rose-500/80 bg-rose-950/90 animate__shakeX",
        isResult: true,
        resultTitle: "THẤT BẠI - BI KỊCH ĐAU LÒNG",
        resultColor: "text-rose-500",
        illustration: "assets/scenes/Char_1_Scene_13.png",
        story: "Tự hại bản thân là quyết định sai lầm và đau đớn nhất. Mạng xã hội là ảo, nhưng sinh mạng của bạn là vô giá! Không có bất kỳ lời đồn bịa đặt nào xứng đáng để bạn phải đánh đổi cả cuộc đời sống và tương lai phía trước.",
        choices: [{ text: "↺ Trở về thời điểm trước để chọn ánh sáng", nextScene: "mai_man_7", isUndo: true }]
    },
    "mai_7_dung_b": {
        charName: "MAI (Màn 7: Cuộc Chiến Cuối Cùng)",
        charColor: "text-emerald-400",
        charSprite: "assets/characters/Char_1_Happy.png",
        bgTheme: "border-emerald-500/80 bg-teal-950/90 animate__pulse",
        isResult: true,
        resultTitle: "THÀNH CÔNG - CÔNG LÝ THẮNG THẾ!",
        resultColor: "text-emerald-400",
        illustration: "assets/scenes/Char_1_Scene_14.png",
        story: "Cơ quan chức năng đã truy ra IP của nhóm tạo trang web vu khống. Những kẻ chủ mưu phải chịu trách nhiệm trước pháp luật và công khai xin lỗi Mai trước toàn trường. Bạn đã chiến thắng BLHĐ một cách đàng hoàng và kiên cường nhất!",
        choices: [{ text: "🎉 Hoàn thành tuyến Mai - Quay lại Menu chọn nhân vật", nextScene: "RESET_GAME" }]
    },
    "mai_7_sai_c": {
        charName: "MAI (Màn 7: Cuộc Chiến Cuối Cùng)",
        charColor: "text-amber-400",
        charSprite: "assets/characters/Char_1_Cry.png",
        bgTheme: "border-amber-500/50 bg-slate-900/95",
        isResult: true,
        resultTitle: "THẤT BẠI - VI PHẠM PHÁP LUẬT",
        resultColor: "text-amber-400",
        illustration: "assets/scenes/Char_1_Scene_13.png",
        story: "Thuê giang hồ xử lý mâu thuẫn học đường là hành vi vi phạm pháp luật hình sự. Từ một nạn nhân, Mai đã tự biến mình thành người chủ mưu gây rối trật tự công cộng và phải chịu hình phạt nặng nề.",
        choices: [{ text: "↺ Trở về thời điểm trước", nextScene: "mai_man_7", isUndo: true }]
    },


    // ==========================================
    // TUYẾN 2: MINH - NAM NẠN NHÂN (7 MÀN MỚI - CHAR 4)
    // ==========================================
    "minh_man_1": {
        charName: "MINH (Màn 1: Bạo Lực Sân Bóng)",
        charColor: "text-indigo-400",
        charSprite: "assets/characters/Char_4.png",
        bgTheme: "border-indigo-500/30 bg-slate-900/95",
        story: "Trong giờ ra chơi tại sân bóng rổ của trường, nhóm của Long 'đại ca' cố tình tranh sân, xô ngã Minh xuống đất làm trầy gối, sau đó sỉ nhục: 'Thằng lùn yếu đuối này biến ra khỏi sân cho tụi tao chơi'.",
        choices: [
            { text: "👉 Căm phẫn lao vào đánh nhau với Long dù biết mình yếu thế hơn.", nextScene: "minh_1_sai_a" },
            { text: "👉 Nhẫn nhịn bỏ đi nhưng mang lòng thù hận, lén làm rách xe và đồ đạc của nhóm Long.", nextScene: "minh_1_sai_b" },
            { text: "👉 Giữ bình tĩnh, cùng các bạn trong đội đến gặp thầy phụ trách thể chất để phân xử lịch sân bãi công bằng.", nextScene: "minh_1_dung_c" }
        ]
    },
    "minh_1_sai_a": {
        charName: "MINH (Màn 1: Bạo Lực Sân Bóng)",
        charColor: "text-rose-500",
        charSprite: "assets/characters/Char_4_Weak.png",
        bgTheme: "border-rose-500/80 bg-rose-950/90 animate__shakeX",
        isResult: true,
        resultTitle: "THẤT BẠI - KÍCH THÍCH BẠO LỰC",
        resultColor: "text-rose-500",
        illustration: "assets/scenes/Char_4_Scene_1.png",
        story: "Việc dùng nắm đấm khi thua thiệt về thể lực chỉ khiến Minh bị nhóm Long đánh hội đồng thương tích nặng hơn, đồng thời cả hai bên đều bị kỷ luật hạ hạnh kiểm.",
        choices: [{ text: "↺ Trở về thời điểm trước", nextScene: "minh_man_1", isUndo: true }]
    },
    "minh_1_sai_b": {
        charName: "MINH (Màn 1: Bạo Lực Sân Bóng)",
        charColor: "text-amber-400",
        charSprite: "assets/characters/Char_4_Weak.png",
        bgTheme: "border-amber-500/50 bg-slate-900/95",
        isResult: true,
        resultTitle: "THẤT BẠI - TRẢ THÙ HÈN NHÁT",
        resultColor: "text-amber-400",
        illustration: "assets/scenes/Char_4_Scene_1.png",
        story: "Hành động phá hoại tài sản bị camera trường ghi lại. Minh từ nạn nhân bị bắt nạt lại trở thành người vi phạm nội quy nặng nề và phải bồi thường thiệt hại tài sản.",
        choices: [{ text: "↺ Trở về thời điểm trước", nextScene: "minh_man_1", isUndo: true }]
    },
    "minh_1_dung_c": {
        charName: "MINH (Màn 1: Bạo Lực Sân Bóng)",
        charColor: "text-emerald-400",
        charSprite: "assets/characters/Char_4_Attack.png",
        bgTheme: "border-indigo-500/80 bg-blue-950/90 animate__pulse",
        isResult: true,
        resultTitle: "THÀNH CÔNG - SỰ LÝ TRÍ THẮNG THẾ",
        resultColor: "text-emerald-400",
        illustration: "assets/scenes/Char_4_Scene_2.png",
        story: "Thầy thể chất đã cảnh cáo nhóm Long và lập thời gian biểu sử dụng sân bóng rõ ràng cho các lớp. Sự bình tĩnh và làm việc theo quy trình giúp bạn bảo vệ được quyền lợi mà không tốn một giọt máu!",
        choices: [{ text: "➔ Tiếp tục đến Màn 2: Bạo lực mạng trong Game", nextScene: "minh_man_2" }]
    },
    "minh_man_2": {
        charName: "MINH (Màn 2: Bạo Lực Mạng Trong Game)",
        charColor: "text-indigo-400",
        charSprite: "assets/characters/Char_4.png",
        bgTheme: "border-indigo-500/30 bg-slate-900/95",
        story: "Khi chơi game cùng lớp vào buổi tối, vì thao tác lỗi một tình huống, Minh bị cả nhóm voice chat chửi bới thậm tệ bằng từ ngữ tục tĩu, sau đó chúng chụp tài khoản của Minh phốt lên group trường gọi là 'đồ phế vật'.",
        choices: [
            { text: "👉 Rời phòng thoại, chụp màn hình các tin nhắn lăng mạ gửi cho thầy giáo chủ nhiệm và block tài khoản độc hại.", nextScene: "minh_2_dung_b" },
            { text: "👉 Tức giận cãi tay đôi trên kênh chat, hẹn gặp nhau sáng mai ở trường để 'giải quyết bằng tay chân'.", nextScene: "minh_2_sai_a" },
            { text: "👉 Tự ti, đập phá bàn phím chuột rồi suy sụp không dám lên trường đối mặt bạn bè.", nextScene: "minh_2_sai_c" }
        ]
    },
    "minh_2_sai_a": {
        charName: "MINH (Màn 2: Bạo Lực Mạng Trong Game)",
        charColor: "text-rose-500",
        charSprite: "assets/characters/Char_4_Weak.png",
        bgTheme: "border-rose-500/80 bg-rose-950/90 animate__shakeX",
        isResult: true,
        resultTitle: "THẤT BẠI - ĐƯA MÂU THUẪN RA NGOÀI ĐỜI",
        resultColor: "text-rose-500",
        illustration: "assets/scenes/Char_4_Scene_3.png",
        story: "Từ một trò chơi giải trí, sự bốc đồng đã biến thành vụ ẩu đả nghiêm trọng trước cổng trường. Cả Minh và nhóm bạn đều bị đình chỉ học tập.",
        choices: [{ text: "↺ Trở về thời điểm trước", nextScene: "minh_man_2", isUndo: true }]
    },
    "minh_2_dung_b": {
        charName: "MINH (Màn 2: Bạo Lực Mạng Trong Game)",
        charColor: "text-emerald-400",
        charSprite: "assets/characters/Char_4_Attack.png",
        bgTheme: "border-indigo-500/80 bg-blue-950/90 animate__pulse",
        isResult: true,
        resultTitle: "THÀNH CÔNG - VĂN MINH & ĐIỂM TĨNH",
        resultColor: "text-emerald-400",
        illustration: "assets/scenes/Char_4_Scene_4.png",
        story: "Thầy chủ nhiệm đã tổ chức buổi sinh hoạt chấn chỉnh văn hóa ứng xử trên mạng. Nhóm bạn nhận ra hành vi xỉ nhục người khác khi chơi game là sai trái và phải xin lỗi Minh trước lớp.",
        choices: [{ text: "➔ Tiếp tục đến Màn 3: Trấn lột đồ dùng", nextScene: "minh_man_3" }]
    },
    "minh_2_sai_c": {
        charName: "MINH (Màn 2: Bạo Lực Mạng Trong Game)",
        charColor: "text-amber-400",
        charSprite: "assets/characters/Char_4_Weak.png",
        bgTheme: "border-amber-500/50 bg-slate-900/95",
        isResult: true,
        resultTitle: "THẤT BẠI - TỰ TRỪNG PHẠT BẢN THÂN",
        resultColor: "text-amber-400",
        illustration: "assets/scenes/Char_4_Scene_3.png",
        story: "Một trò chơi không thể quyết định giá trị con người bạn! Việc đập phá đồ đạc và nghỉ học chỉ khiến bản thân bạn chịu thiệt thòi về tiền bạc và kiến thức.",
        choices: [{ text: "↺ Trở về thời điểm trước", nextScene: "minh_man_2", isUndo: true }]
    },
    "minh_man_3": {
        charName: "MINH (Màn 3: Trấn Lột Đồ Dùng)",
        charColor: "text-indigo-400",
        charSprite: "assets/characters/Char_4.png",
        bgTheme: "border-indigo-500/30 bg-slate-900/95",
        story: "Minh vừa được bố tặng đôi giày thể thao mới. Nhóm học sinh lớp trên chặn Minh ở nhà vệ sinh, ép Minh phải cởi giày ra 'cho mượn vô thời hạn', dọa nếu không đưa sẽ nhốt vào nhà vệ sinh.",
        choices: [
            { text: "👉 Sợ bị nhốt nên cởi giày đưa ngay, về nhà nói dối bố là bị mất trộm.", nextScene: "minh_3_sai_a" },
                        { text: "👉 Tự lấy gạch đá rạch nát đôi giày ngay trước mặt chúng để 'không ai được ăn'.", nextScene: "minh_3_sai_c" },
            { text: "👉 Kiên quyết từ chối, hô hoán thật lớn 'Có người cướp đồ' để thu hút sự chú ý của các bạn ngoài hành lang.", nextScene: "minh_3_dung_b" }
        ]
    },
    "minh_3_sai_a": {
        charName: "MINH (Màn 3: Trấn Lột Đồ Dùng)",
        charColor: "text-amber-400",
        charSprite: "assets/characters/Char_4_Weak.png",
        bgTheme: "border-amber-500/50 bg-slate-900/95",
        isResult: true,
        resultTitle: "THẤT BẠI - TIẾP TAY KẺ CƯỚP",
        resultColor: "text-amber-400",
        illustration: "assets/scenes/Char_4_Scene_5.png",
        story: "Thấy Minh dễ bắt nạt, tuần sau chúng tiếp tục đòi trấn lột áo khoác và đồng hồ của Minh. Nỗi sợ hãi đã biến bạn thành mục tiêu bị cưỡng đoạt lâu dài.",
        choices: [{ text: "↺ Trở về thời điểm trước", nextScene: "minh_man_3", isUndo: true }]
    },
    "minh_3_dung_b": {
        charName: "MINH (Màn 3: Trấn Lột Đồ Dùng)",
        charColor: "text-emerald-400",
        charSprite: "assets/characters/Char_4_Attack.png",
        bgTheme: "border-indigo-500/80 bg-blue-950/90 animate__pulse",
        isResult: true,
        resultTitle: "THÀNH CÔNG - BẢN LĨNH TỰ VỆ",
        resultColor: "text-emerald-400",
        illustration: "assets/scenes/Char_4_Scene_6.png",
        story: "Tiếng hô hoán lớn khiến nhóm lớp trên giật mình sợ bị phát hiện nên bỏ chạy. Thầy giám thị nghe tiếng đã lập tức đến kiểm tra và trích xuất camera xử lý nhóm học sinh vi phạm. Bạn rất dũng cảm!",
        choices: [{ text: "➔ Tiếp tục đến Màn 4: Thử thách mạo hiểm", nextScene: "minh_man_4" }]
    },
    "minh_3_sai_c": {
        charName: "MINH (Màn 3: Trấn Lột Đồ Dùng)",
        charColor: "text-rose-500",
        charSprite: "assets/characters/Char_4_Weak.png",
        bgTheme: "border-rose-500/80 bg-rose-950/90 animate__shakeX",
        isResult: true,
        resultTitle: "THẤT BẠI - TỰ HỦY HOẠI TÀI SẢN",
        resultColor: "text-rose-500",
        illustration: "assets/scenes/Char_4_Scene_5.png",
        story: "Hành động cực đoan khiến đôi giày kỷ niệm của bố bị hủy hoại hoàn toàn, đồng thời chọc giận nhóm bắt nạt khiến chúng lao vào đánh Minh để trút giận.",
        choices: [{ text: "↺ Trở về thời điểm trước", nextScene: "minh_man_3", isUndo: true }]
    },
    "minh_man_4": {
        charName: "MINH (Màn 4: Thử Thách Mạo Hiểm)",
        charColor: "text-indigo-400",
        charSprite: "assets/characters/Char_4.png",
        bgTheme: "border-indigo-500/30 bg-slate-900/95",
        story: "Hội 'con trai' trong lớp ép Minh phải tham gia một thử thách mạo hiểm: Trèo lên ban công tầng 3 quay clip nhảy xuống mái che bên dưới thì mới được cho gia nhập nhóm chơi bóng chung.",
        choices: [
            { text: "👉 Muốn chứng tỏ bản thân không hèn nhát nên nhắm mắt nhảy liều theo yêu cầu.", nextScene: "minh_4_sai_a" },
            { text: "👉 Thẳng thắn nói: 'Tôi không cần gia nhập một nhóm độc hại coi thường tính mạng người khác' rồi rời đi.", nextScene: "minh_4_dung_b" },
            { text: "👉 Khích bác ngược lại chúng: 'Giỏi thì mày nhảy trước đi rồi tao nhảy'.", nextScene: "minh_4_sai_c" }
        ]
    },
    "minh_4_sai_a": {
        charName: "MINH (Màn 4: Thử Thách Mạo Hiểm)",
        charColor: "text-rose-500",
        charSprite: "assets/characters/Char_4_Weak.png",
        bgTheme: "border-rose-500/80 bg-rose-950/90 animate__shakeX",
        isResult: true,
        resultTitle: "THẤT BẠI - TAI NẠN THƯƠNG TÂM",
        resultColor: "text-rose-500",
        illustration: "assets/scenes/Char_4_Scene_7.png",
        story: "Mái che bị sập dưới trọng lượng của Minh. Bạn bị gãy chân và chấn thương nặng phải nghỉ học nhiều tháng trời. Không có sự hòa nhập nào đáng giá bằng sự an toàn tính mạng của chính mình!",
        choices: [{ text: "↺ Trở về thời điểm trước", nextScene: "minh_man_4", isUndo: true }]
    },
    "minh_4_dung_b": {
        charName: "MINH (Màn 4: Thử Thách Mạo Hiểm)",
        charColor: "text-emerald-400",
        charSprite: "assets/characters/Char_4_Attack.png",
        bgTheme: "border-indigo-500/80 bg-blue-950/90 animate__pulse",
        isResult: true,
        resultTitle: "THÀNH CÔNG - TỰ TRỌNG & THÔNG MINH",
        resultColor: "text-emerald-400",
        illustration: "assets/scenes/Char_4_Scene_8.png",
        story: "Sự từ chối kiên định và đàng hoàng của Minh đã bảo vệ an toàn tuyệt đối cho bản thân. Sau đó Minh đã báo cho Đoàn trường về trò chơi mạo hiểm này để thầy cô kịp thời cấm chỉ, ngăn chặn tai nạn cho các bạn khác.",
        choices: [{ text: "➔ Tiếp tục đến Màn 5: Định kiến giới", nextScene: "minh_man_5" }]
    },
    "minh_4_sai_c": {
        charName: "MINH (Màn 4: Thử Thách Mạo Hiểm)",
        charColor: "text-amber-400",
        charSprite: "assets/characters/Char_4_Weak.png",
        bgTheme: "border-amber-500/50 bg-slate-900/95",
        isResult: true,
        resultTitle: "THẤT BẠI - KÍCH ĐỘNG NGUY HIỂM",
        resultColor: "text-amber-400",
        illustration: "assets/scenes/Char_4_Scene_7.png",
        story: "Lời khích bác của bạn khiến một học sinh khác tự ái nhảy thử và bị ngã chấn thương. Bạn liên đới chịu trách nhiệm vì hành vi xúi giục nguy hiểm trong nhà trường.",
        choices: [{ text: "↺ Trở về thời điểm trước", nextScene: "minh_man_4", isUndo: true }]
    },
    "minh_man_5": {
        charName: "MINH (Màn 5: Miệt Thị Đàn Ông Yếu Đuối)",
        charColor: "text-indigo-400",
        charSprite: "assets/characters/Char_4.png",
        bgTheme: "border-indigo-500/30 bg-slate-900/95",
        story: "Minh có tính cách nhẹ nhàng và thích vẽ tranh thay vì đá bóng hay đánh nhau. Nhóm nam sinh trong lớp hay châm chọc, mỉa mai Minh là 'đồ yếu đuối, không đáng mặt đàn ông, đồ đàn bà'.",
        choices: [
            { text: "👉 Cố gắng nói bậy, hút thuốc lá và học theo lối sống hung hăng để chứng tỏ sự nam tính.", nextScene: "minh_5_sai_a" },
            { text: "👉 Tự hào về sở trường của mình, dùng tranh vẽ đạt giải thưởng trường để chứng minh giá trị con người.", nextScene: "minh_5_dung_b" },
            { text: "👉 Thu mình lại, vứt hết tranh vẽ và rơi vào trầm cảm vì nghĩ mình bất bình thường.", nextScene: "minh_5_sai_c" }
        ]
    },
    "minh_5_sai_a": {
        charName: "MINH (Màn 5: Miệt Thị Đàn Ông Yếu Đuối)",
        charColor: "text-rose-500",
        charSprite: "assets/characters/Char_4_Weak.png",
        bgTheme: "border-rose-500/80 bg-rose-950/90 animate__shakeX",
        isResult: true,
        resultTitle: "THẤT BẠI - HỌC ĐÒI THÓI XẤU",
        resultColor: "text-rose-500",
        illustration: "assets/scenes/Char_4_Scene_9.png",
        story: "Việc ép buộc bản thân trở thành một con người khác bằng những thói quen xấu không làm bạn mạnh mẽ hơn mà chỉ khiến bạn sa ngã và bị nhà trường kỷ luật vì hút thuốc.",
        choices: [{ text: "↺ Trở về thời điểm trước", nextScene: "minh_man_5", isUndo: true }]
    },
    "minh_5_dung_b": {
        charName: "MINH (Màn 5: Miệt Thị Đàn Ông Yếu Đuối)",
        charColor: "text-emerald-400",
        charSprite: "assets/characters/Char_4_Attack.png",
        bgTheme: "border-indigo-500/80 bg-blue-950/90 animate__pulse",
        isResult: true,
        resultTitle: "THÀNH CÔNG - GIÁ TRỊ ĐÍCH THỰC",
        resultColor: "text-emerald-400",
        illustration: "assets/scenes/Char_4_Scene_10.png",
        story: "Sự nam tính hay giá trị con người không đo bằng sự hung hăng mà đo bằng tài năng, sự tử tế và trách nhiệm. Bức tranh đoạt giải cấp thành phố của Minh khiến cả lớp ngưỡng mộ và thán phục!",
        choices: [{ text: "➔ Tiếp tục đến Màn 6: Bị lập group nói xấu", nextScene: "minh_man_6" }]
    },
    "minh_5_sai_c": {
        charName: "MINH (Màn 5: Miệt Thị Đàn Ông Yếu Đuối)",
        charColor: "text-amber-400",
        charSprite: "assets/characters/Char_4_Weak.png",
        bgTheme: "border-amber-500/50 bg-slate-900/95",
        isResult: true,
        resultTitle: "THẤT BẠI - TỪ BỎ ĐAM MÊ",
        resultColor: "text-amber-400",
        illustration: "assets/scenes/Char_4_Scene_9.png",
        story: "Đừng bao giờ để định kiến hẹp hòi của kẻ khác giết chết tài năng và sự đặc biệt của bạn. Tranh vẽ là nghệ thuật, không có quy chuẩn nào cấm con trai đam mê nghệ thuật!",
        choices: [{ text: "↺ Trở về thời điểm trước", nextScene: "minh_man_5", isUndo: true }]
    },
    "minh_man_6": {
        charName: "MINH (Màn 6: Cô Lập Trong Thể Thao)",
        charColor: "text-indigo-400",
        charSprite: "assets/characters/Char_4.png",
        bgTheme: "border-indigo-500/30 bg-slate-900/95",
        story: "Trong giải bóng đá của lớp, dù Minh đá rất tốt nhưng Đội trưởng cố tình cô lập, cấm các thành viên chuyền bóng cho Minh trên sân để làm Minh bẽ mặt trước học sinh toàn trường.",
        choices: [
            { text: "👉 Vẫn thi đấu hết mình với tinh thần thể thao, chủ động hỗ trợ phòng ngự tốt để thầy cô và khán giả tự nhìn nhận.", nextScene: "minh_6_dung_b" },
            { text: "👉 Tức giận bỏ về ngay giữa trận đấu, để mặc đội bóng thi đấu thiếu người.", nextScene: "minh_6_sai_a" },
            { text: "👉 Cố tình đá phản lưới nhà để trả thù Đội trưởng.", nextScene: "minh_6_sai_c" }
        ]
    },
    "minh_6_sai_a": {
        charName: "MINH (Màn 6: Cô Lập Trong Thể Thao)",
        charColor: "text-amber-400",
        charSprite: "assets/characters/Char_4_Weak.png",
        bgTheme: "border-amber-500/50 bg-slate-900/95",
        isResult: true,
        resultTitle: "THẤT BẠI - TỰ BỎ CUỘC",
        resultColor: "text-amber-400",
        illustration: "assets/scenes/Char_4_Scene_11.png",
        story: "Bỏ về giữa chừng khiến Đội trưởng có cớ đổ lỗi cho bạn là người vô trách nhiệm làm đội thua cuộc. Bạn tự đánh mất cơ hội chứng minh năng lực của mình.",
        choices: [{ text: "↺ Trở về thời điểm trước", nextScene: "minh_man_6", isUndo: true }]
    },
    "minh_6_dung_b": {
        charName: "MINH (Màn 6: Cô Lập Trong Thể Thao)",
        charColor: "text-emerald-400",
        charSprite: "assets/characters/Char_4_Attack.png",
        bgTheme: "border-indigo-500/80 bg-blue-950/90 animate__pulse",
        isResult: true,
        resultTitle: "THÀNH CÔNG - TINH THẦN THỂ THAO CAO THƯỢNG",
        resultColor: "text-emerald-400",
        illustration: "assets/scenes/Char_4_Scene_12.png",
        story: "Sự cống hiến thầm lặng và chuyên nghiệp của Minh đã được thầy Thể chất nhìn thấy. Thầy lập tức điều chỉnh chiến thuật và nhắc nhở Đội trưởng. Minh tỏa sáng rực rỡ và được bầu là cầu thủ xuất sắc nhất trận!",
        choices: [{ text: "➔ Tiếp tục đến Màn 7: Vu khống kỷ luật", nextScene: "minh_man_7" }]
    },
    "minh_6_sai_c": {
        charName: "MINH (Màn 6: Cô Lập Trong Thể Thao)",
        charColor: "text-rose-500",
        charSprite: "assets/characters/Char_4_Weak.png",
        bgTheme: "border-rose-500/80 bg-rose-950/90 animate__shakeX",
        isResult: true,
        resultTitle: "THẤT BẠI - HÀNH VI PHẢN THỂ THAO",
        resultColor: "text-rose-500",
        illustration: "assets/scenes/Char_4_Scene_11.png",
        story: "Đá phản lưới nhà là hành vi vi phạm đạo đức thể thao nghiêm trọng, khiến cả lớp phẫn nộ và tẩy chay bạn hoàn toàn.",
        choices: [{ text: "↺ Trở về thời điểm trước", nextScene: "minh_man_6", isUndo: true }]
    },
    "minh_man_7": {
        charName: "MINH (Màn 7: Cuộc Chiến Cuối - Vu Khống)",
        charColor: "text-indigo-400",
        charSprite: "assets/characters/Char_4.png",
        bgTheme: "border-indigo-500/30 bg-slate-900/95",
        story: "Để quyết đuổi Minh khỏi trường, kẻ bắt nạt lén nhét một gói thuốc lá điện tử và đồ cấm vào balo của Minh ngay trước giờ Giám thị kiểm tra đột xuất. Minh bị gọi lên phòng kỷ luật.",
        choices: [
            { text: "👉 Sợ hãi nhận tội đại để không bị điều tra thêm rồi xin chuyển trường.", nextScene: "minh_7_sai_a" },
            { text: "👉 Bình tĩnh khẳng định sự trong sạch, đề nghị kiểm tra dấu vân tay trên đồ cấm và trích xuất camera giờ ra chơi.", nextScene: "minh_7_dung_b" },
            { text: "👉 Lao vào đánh kẻ mình nghi ngờ ngay trong phòng Ban giám hiệu.", nextScene: "minh_7_sai_c" }
        ]
    },
    "minh_7_sai_a": {
        charName: "MINH (Màn 7: Cuộc Chiến Cuối - Vu Khống)",
        charColor: "text-rose-500",
        charSprite: "assets/characters/Char_4_Weak.png",
        bgTheme: "border-rose-500/80 bg-rose-950/90 animate__shakeX",
        isResult: true,
        resultTitle: "THẤT BẠI - CHẤP NHẬN OAN ỨC",
        resultColor: "text-rose-500",
        illustration: "assets/scenes/Char_4_Scene_13.png",
        story: "Nhận tội thay cho kẻ vu khống sẽ để lại vết nhơ không thể xóa nhòa trong học bạ của bạn. Chuyển trường không giải quyết được vấn đề khi sự thật chưa được làm sáng tỏ.",
        choices: [{ text: "↺ Trở về thời điểm trước để đấu tranh", nextScene: "minh_man_7", isUndo: true }]
    },
    "minh_7_dung_b": {
        charName: "MINH (Màn 7: Cuộc Chiến Cuối - Vu Khống)",
        charColor: "text-emerald-400",
        charSprite: "assets/characters/Char_4_Attack.png",
        bgTheme: "border-indigo-500/80 bg-blue-950/90 animate__pulse",
        isResult: true,
        resultTitle: "THÀNH CÔNG - CÔNG LÝ THẮNG THẾ!",
        resultColor: "text-emerald-400",
        illustration: "assets/scenes/Char_4_Scene_14.png",
        story: "Sự khôn ngoan và cương quyết dựa vào khoa học và bằng chứng đã giúp camera hành lang tố cáo hành vi lén nhét đồ của kẻ xấu. Kẻ vu khống bị đình chỉ học tập. Bạn đã chiến thắng và bảo vệ danh dự xuất sắc!",
        choices: [{ text: "🎉 Hoàn thành tuyến Minh - Quay lại Menu chọn nhân vật", nextScene: "RESET_GAME" }]
    },
    "minh_7_sai_c": {
        charName: "MINH (Màn 7: Cuộc Chiến Cuối - Vu Khống)",
        charColor: "text-amber-400",
        charSprite: "assets/characters/Char_4_Weak.png",
        bgTheme: "border-amber-500/50 bg-slate-900/95",
        isResult: true,
        resultTitle: "THẤT BẠI - HÀNH XỬ THIẾU KIỂM SOÁT",
        resultColor: "text-amber-400",
        illustration: "assets/scenes/Char_4_Scene_13.png",
        story: "Đánh người trước mặt Ban giám hiệu khiến bạn bị quy thêm tội côn đồ, bạo lực ngay khi chưa kịp minh hoan cho vụ việc đồ cấm.",
        choices: [{ text: "↺ Trở về thời điểm trước", nextScene: "minh_man_7", isUndo: true }]
    },


    // ==========================================
    // TUYẾN 3: LINH - NỮ CHỨNG KIẾN (7 MÀN)
    // ==========================================
    "linh_man_1": {
        charName: "LINH (Màn 1: Sự Im Lặng Trong Group)",
        charColor: "text-sky-400",
        charSprite: "assets/characters/Char_2.png",
        bgTheme: "border-sky-500/30 bg-slate-900/95",
        story: "Linh đang ngồi trong lớp thì thấy điện thoại rung liên tục. Mở group chat lớp, Linh thấy bức ảnh chụp lén Mai đang khóc kèm những lời chế giễu ngoại hình rất độc ác. Bạn bè xung quanh Linh đang bàn tán và cười cợt.",
        choices: [
            { text: "👉 Cùng thả 'haha' vào ảnh cho hòa đồng với các bạn trong lớp.", nextScene: "linh_1_sai_a" },
            { text: "👉 Tắt màn hình, coi như không thấy vì sợ liên lụy đến bản thân.", nextScene: "linh_1_sai_b" },
            { text: "👉 Nhắn tin riêng an ủi Mai, đồng thời chụp màn hình báo cáo kín với Cô chủ nhiệm.", nextScene: "linh_1_dung_c" }
        ]
    },
    "linh_1_sai_a": {
        charName: "LINH (Màn 1: Sự Im Lặng Trong Group)",
        charColor: "text-rose-500",
        charSprite: "assets/characters/Char_2_Scare.png",
        bgTheme: "border-rose-500/80 bg-rose-950/90 animate__shakeX",
        isResult: true,
        resultTitle: "THẤT BẠI - TIẾP TAY CHO CÁI ÁC",
        resultColor: "text-rose-500",
        illustration: "assets/scenes/Char_2_Scene_1.png",
        story: "Nút thả tim hay 'haha' trên mạng không hề vô hại. Hành động của Linh đã trực tiếp tiếp tay cho bạo lực mạng, khiến Mai rơi vào tuyệt vọng sâu sắc vì cảm thấy cả lớp đang quay lưng và tẩy chay mình.",
        choices: [{ text: "↺ Trở về thời điểm trước", nextScene: "linh_man_1", isUndo: true }]
    },
    "linh_1_sai_b": {
        charName: "LINH (Màn 1: Sự Im Lặng Trong Group)",
        charColor: "text-amber-400",
        charSprite: "assets/characters/Char_2_Scare.png",
        bgTheme: "border-amber-500/50 bg-slate-900/95",
        isResult: true,
        resultTitle: "THẤT BẠI - SỰ VÔ CẢM ĐÁNG TRÁCH",
        resultColor: "text-amber-400",
        illustration: "assets/scenes/Char_2_Scene_1.png",
        story: "'Sự im lặng của người tốt còn đáng sợ hơn cái ác của kẻ xấu'. Việc Linh và nhiều bạn khác ngoảnh mặt làm ngơ vì sợ liên lụy đã vô tình tạo ra một môi trường độc hại, nơi bạo lực học đường tiếp diễn trong bóng tối.",
        choices: [{ text: "↺ Trở về thời điểm trước", nextScene: "linh_man_1", isUndo: true }]
    },
    "linh_1_dung_c": {
        charName: "LINH (Màn 1: Sự Im Lặng Trong Group)",
        charColor: "text-emerald-400",
        charSprite: "assets/characters/Char_2_Hand.png",
        bgTheme: "border-sky-500/80 bg-blue-950/90 animate__pulse",
        isResult: true,
        resultTitle: "THÀNH CÔNG - NGƯỜI BẠN DŨNG CẢM!",
        resultColor: "text-emerald-400",
        illustration: "assets/scenes/Char_2_Scene_2.png",
        story: "Tin nhắn động viên của Linh như một chiếc phao cứu sinh giúp Mai bình tĩnh lại giữa lúc tuyệt vọng. Nhờ báo cáo kịp thời và khéo léo của Linh, Cô chủ nhiệm đã can thiệp ngay lập tức mà không làm lộ danh tính người báo. Bạn là một người bạn tuyệt vời!",
        choices: [{ text: "➔ Tiếp tục đến Màn 2: Thấy bạn bị đánh", nextScene: "linh_man_2" }]
    },
    "linh_man_2": {
        charName: "LINH (Màn 2: Góc Khuất Sân Trường)",
        charColor: "text-sky-400",
        charSprite: "assets/characters/Char_2.png",
        bgTheme: "border-sky-500/30 bg-slate-900/95",
        story: "Đi ngang qua khu vực nhà để xe ít người qua lại, Linh vô tình thấy Hùng và 2 bạn nam khác đang dồn một học sinh lớp dưới vào tường tát và uy hiếp đòi tiền. Nạn nhân đang rất hoảng loạn.",
        choices: [
            { text: "👉 Chạy ngay tới khu vực phòng giám thị hoặc gọi bảo vệ trường đến giải vây ngay lập tức.", nextScene: "linh_2_dung_b" },
            { text: "👉 Rút điện thoại ra quay clip lại rồi up ẩn danh lên TikTok để phốt Hùng.", nextScene: "linh_2_sai_a" },
            { text: "👉 Cố gắng một mình lao vào giữa nhóm Hùng để đỡ đòn và giải cứu em học sinh.", nextScene: "linh_2_sai_c" }
        ]
    },
    "linh_2_sai_a": {
        charName: "LINH (Màn 2: Góc Khuất Sân Trường)",
        charColor: "text-amber-400",
        charSprite: "assets/characters/Char_2_Scare.png",
        bgTheme: "border-amber-500/50 bg-slate-900/95",
        isResult: true,
        resultTitle: "THẤT BẠI - CÂU VIEW TRÊN NỖI ĐAU",
        resultColor: "text-amber-400",
        illustration: "assets/scenes/Char_2_Scene_3.png",
        story: "Việc quay clip đăng mạng xã hội không giải cứu được nạn nhân ngay lúc đó mà còn phơi bày hình ảnh hoảng loạn, đau đớn của em ấy cho hàng nghìn người xem, gây tổn thương tâm lý thứ cấp cho nạn nhân.",
        choices: [{ text: "↺ Trở về thời điểm trước", nextScene: "linh_man_2", isUndo: true }]
    },
    "linh_2_dung_b": {
        charName: "LINH (Màn 2: Góc Khuất Sân Trường)",
        charColor: "text-emerald-400",
        charSprite: "assets/characters/Char_2_Hand.png",
        bgTheme: "border-sky-500/80 bg-blue-950/90 animate__pulse",
        isResult: true,
        resultTitle: "THÀNH CÔNG - GIẢI CỨU THÔNG MINH!",
        resultColor: "text-emerald-400",
        illustration: "assets/scenes/Char_2_Scene_4.png",
        story: "Bảo vệ và thầy cô giám thị xuất hiện kịp thời ngăn chặn vụ hành hung. Linh vừa đảm bảo an toàn tuyệt đối cho bản thân, vừa cứu được em học sinh khỏi hành vi bắt nạt nguy hiểm. Khôn ngoan và dũng cảm!",
        choices: [{ text: "➔ Tiếp tục đến Màn 3: Áp lực từ bạn bè", nextScene: "linh_man_3" }]
    },
    "linh_2_sai_c": {
        charName: "LINH (Màn 2: Góc Khuất Sân Trường)",
        charColor: "text-rose-500",
        charSprite: "assets/characters/Char_2_Scare.png",
        bgTheme: "border-rose-500/80 bg-rose-950/90 animate__shakeX",
        isResult: true,
        resultTitle: "THẤT BẠI - AN TOÀN LÀ TRÊN HẾT",
        resultColor: "text-rose-500",
        illustration: "assets/scenes/Char_2_Scene_3.png",
        story: "Một mình lao vào nhóm đang sử dụng bạo lực là rất liều lĩnh. Linh bị xô ngã chấn thương nặng và cả 2 đều bị nhóm Hùng hành hung. Bạn cần người lớn hoặc số đông hỗ trợ trong tình huống nguy hiểm!",
        choices: [{ text: "↺ Trở về thời điểm trước", nextScene: "linh_man_2", isUndo: true }]
    },
    "linh_man_3": {
        charName: "LINH (Màn 3: Áp Lực Từ Nhóm Bạn)",
        charColor: "text-sky-400",
        charSprite: "assets/characters/Char_2.png",
        bgTheme: "border-sky-500/30 bg-slate-900/95",
        story: "Nhóm bạn thân của Linh quyết định tẩy chay và lập group nói xấu Mai vì 'nhìn mặt nó ghét'. Nhóm ra tối hậu thư: 'Nếu Linh còn nói chuyện hay chơi với Mai thì sẽ bị đuổi khỏi nhóm và tẩy chay chung'.",
        choices: [
            { text: "👉 Sợ bị tẩy chay nên nhắm mắt làm theo, cắt đứt hoàn toàn và lơ đi khi Mai hỏi bài.", nextScene: "linh_3_sai_a" },
            { text: "👉 Chửi thẳng mặt nhóm bạn là lũ độc ác rồi lập tức nghỉ chơi với tất cả.", nextScene: "linh_3_sai_c" },
            { text: "👉 Từ chối tham gia nói xấu, giữ thái độ hòa nhã bình thường với Mai và khuyên nhủ nhóm bạn nên dừng lại.", nextScene: "linh_3_dung_b" }
        ]
    },
    "linh_3_sai_a": {
        charName: "LINH (Màn 3: Áp Lực Từ Nhóm Bạn)",
        charColor: "text-amber-400",
        charSprite: "assets/characters/Char_2_Scare.png",
        bgTheme: "border-amber-500/50 bg-slate-900/95",
        isResult: true,
        resultTitle: "THẤT BẠI - ĐÁNH MẤT CHÍNH MÌNH",
        resultColor: "text-amber-400",
        illustration: "assets/scenes/Char_2_Scene_5.png",
        story: "Sự thỏa hiệp vì sợ hãi khiến Linh trở thành một mắt xích trong đường dây bắt nạt. Bạn giữ được chỗ đứng trong một nhóm bạn độc hại, nhưng đánh mất đi sự thiện lương và sự thanh thản trong tâm hồn.",
        choices: [{ text: "↺ Trở về thời điểm trước", nextScene: "linh_man_3", isUndo: true }]
    },
    "linh_3_dung_b": {
        charName: "LINH (Màn 3: Áp Lực Từ Nhóm Bạn)",
        charColor: "text-emerald-400",
        charSprite: "assets/characters/Char_2_Hand.png",
        bgTheme: "border-sky-500/80 bg-blue-950/90 animate__pulse",
        isResult: true,
        resultTitle: "THÀNH CÔNG - BẢN LĨNH TỰ CHỦ",
        resultColor: "text-emerald-400",
        illustration: "assets/scenes/Char_2_Scene_6.png",
        story: "Sự kiên định và ôn hòa của Linh khiến nhóm bạn nhận ra hành vi vô lý của họ. Dù lúc đầu có bỡ ngỡ, nhưng chính thái độ đàng hoàng của bạn đã lan tỏa năng lượng tích cực, giúp phá vỡ rào cản tẩy chay trong lớp.",
        choices: [{ text: "➔ Tiếp tục đến Màn 4: Lời đồn vô căn cứ", nextScene: "linh_man_4" }]
    },
    "linh_3_sai_c": {
        charName: "LINH (Màn 3: Áp Lực Từ Nhóm Bạn)",
        charColor: "text-rose-500",
        charSprite: "assets/characters/Char_2_Scare.png",
        bgTheme: "border-rose-500/80 bg-rose-950/90 animate__shakeX",
        isResult: true,
        resultTitle: "THẤT BẠI - GÂY THÙ CHUỐC OÁN",
        resultColor: "text-rose-500",
        illustration: "assets/scenes/Char_2_Scene_5.png",
        story: "Phản ứng gay gắt và chửi bới khiến nhóm bạn chuyển mục tiêu công kích sang chính Linh. Bạn biến mình thành nạn nhân tiếp theo của một cuộc chiến chia bè kết phái không hồi kết trong lớp.",
        choices: [{ text: "↺ Trở về thời điểm trước", nextScene: "linh_man_3", isUndo: true }]
    },
    "linh_man_4": {
        charName: "LINH (Màn 4: Lời Đồn Trong Giờ Ra Chơi)",
        charColor: "text-sky-400",
        charSprite: "assets/characters/Char_2.png",
        bgTheme: "border-sky-500/30 bg-slate-900/95",
        story: "Trong giờ ra chơi, Linh nghe thấy một nhóm bạn đang bàn tán sôi nổi, thêu dệt tin đồn rằng bố mẹ Mai đang vỡ nợ, phải trốn chui trốn lủi và Mai sắp bị đuổi học vì không có tiền đóng học phí.",
        choices: [
            { text: "👉 Tò mò mang câu chuyện này đi hỏi thêm các bạn ở lớp khác xem có thật không.", nextScene: "linh_4_sai_a" },
            { text: "👉 Lên tiếng nhắc nhở: 'Đây là chuyện riêng tư chưa được kiểm chứng, các bạn không nên bàn tán gây tổn thương người khác'.", nextScene: "linh_4_dung_b" },
            { text: "👉 Hùa theo nói: 'Thảo nào dạo này thấy Mai mặc áo cũ thế, chắc nhà nghèo thật'.", nextScene: "linh_4_sai_c" }
        ]
    },
    "linh_4_sai_a": {
        charName: "LINH (Màn 4: Lời Đồn Trong Giờ Ra Chơi)",
        charColor: "text-amber-400",
        charSprite: "assets/characters/Char_2_Scare.png",
        bgTheme: "border-amber-500/50 bg-slate-900/95",
        isResult: true,
        resultTitle: "THẤT BẠI - KẺ PHÁT TÁN TIN ĐỒN",
        resultColor: "text-amber-400",
        illustration: "assets/scenes/Char_2_Scene_7.png",
        story: "Sự tò mò tưởng chừng vô hại của Linh đã vô tình 'chắp cánh' cho tin đồn lan rộng ra toàn trường. Mai phải hứng chịu những ánh mắt thương hại và mỉa mai râm ran khắp nơi dù tin đồn là sai sự thật.",
        choices: [{ text: "↺ Trở về thời điểm trước", nextScene: "linh_man_4", isUndo: true }]
    },
    "linh_4_dung_b": {
        charName: "LINH (Màn 4: Lời Đồn Trong Giờ Ra Chơi)",
        charColor: "text-emerald-400",
        charSprite: "assets/characters/Char_2_Hand.png",
        bgTheme: "border-sky-500/80 bg-blue-950/90 animate__pulse",
        isResult: true,
        resultTitle: "THÀNH CÔNG - DẬP TẮT LỜI ĐỒN",
        resultColor: "text-emerald-400",
        illustration: "assets/scenes/Char_2_Scene_8.png",
        story: "Lời nói thẳng thắn và văn minh của Linh như một gáo nước lạnh làm thức tỉnh sự tò mò vô duyên của nhóm bạn. Tin đồn độc hại bị dập tắt ngay từ trong trứng nước, bảo vệ được danh dự cho gia đình Mai.",
        choices: [{ text: "➔ Tiếp tục đến Màn 5: Cám dỗ quay lưng", nextScene: "linh_man_5" }]
    },
    "linh_4_sai_c": {
        charName: "LINH (Màn 4: Lời Đồn Trong Giờ Ra Chơi)",
        charColor: "text-rose-500",
        charSprite: "assets/characters/Char_2_Scare.png",
        bgTheme: "border-rose-500/80 bg-rose-950/90 animate__shakeX",
        isResult: true,
        resultTitle: "THẤT BẠI - LỜI NÓI SÁT THƯƠNG",
        resultColor: "text-rose-500",
        illustration: "assets/scenes/Char_2_Scene_7.png",
        story: "Sự phán xét về hoàn cảnh kinh tế và ngoại hình là nhát dao sắc bén nhất chọc vào lòng tự trọng của người khác. Bạn đã vô tình thể hiện sự hẹp hòi và thiếu đồng cảm với bạn bè.",
        choices: [{ text: "↺ Trở về thời điểm trước", nextScene: "linh_man_4", isUndo: true }]
    },
    "linh_man_5": {
        charName: "LINH (Màn 5: Lời Đề Nghị Của Kẻ Bắt Nạt)",
        charColor: "text-sky-400",
        charSprite: "assets/characters/Char_2.png",
        bgTheme: "border-sky-500/30 bg-slate-900/95",
        story: "Hùng biết Linh đã chứng kiến cảnh mình hành hung học sinh lớp dưới. Hùng mang đến tặng Linh một đôi giày hàng hiệu và ngọt nhạt nhờ Linh: 'Nếu thầy cô có gọi lên hỏi, hãy làm chứng là anh em tao chỉ đùa giỡn thôi nhé'.",
        choices: [
            { text: "👉 Nhận món quà đắt tiền và đồng ý khai gian dối để lấy lòng Hùng.", nextScene: "linh_5_sai_a" },
            { text: "👉 Từ chối món quà, kiên quyết khai đúng sự thật khách quan khi được thầy cô hỏi đến.", nextScene: "linh_5_dung_b" },
            { text: "👉 Nhận quà nhưng sau đó ra trước thầy cô lại khai thật để lừa Hùng.", nextScene: "linh_5_sai_c" }
        ]
    },
    "linh_5_sai_a": {
        charName: "LINH (Màn 5: Lời Đề Nghị Của Kẻ Bắt Nạt)",
        charColor: "text-rose-500",
        charSprite: "assets/characters/Char_2_Scare.png",
        bgTheme: "border-rose-500/80 bg-rose-950/90 animate__shakeX",
        isResult: true,
        resultTitle: "THẤT BẠI - BẢN ÁN LƯƠNG TÂM",
        resultColor: "text-rose-500",
        illustration: "assets/scenes/Char_2_Scene_9.png",
        story: "Sự gian dối vì lợi ích vật chất đã che giấu tội lỗi cho kẻ xấu, khiến nạn nhân bị oan ức và không được bảo vệ. Linh sau đó cũng bị nhà trường phát hiện khai gian và bị xử lý kỷ luật chung.",
        choices: [{ text: "↺ Trở về thời điểm trước", nextScene: "linh_man_5", isUndo: true }]
    },
    "linh_5_dung_b": {
        charName: "LINH (Màn 5: Lời Đề Nghị Của Kẻ Bắt Nạt)",
        charColor: "text-emerald-400",
        charSprite: "assets/characters/Char_2_Hand.png",
        bgTheme: "border-sky-500/80 bg-blue-950/90 animate__pulse",
        isResult: true,
        resultTitle: "THÀNH CÔNG - CHÍNH TRỰC VÀ CÔNG BẰNG",
        resultColor: "text-emerald-400",
        illustration: "assets/scenes/Char_2_Scene_10.png",
        story: "Sự trung thực và liêm chính của Linh đã giúp nhà trường có bằng chứng xác đáng để xử lý vụ việc một cách công bằng, minh bạch nhất. Bạn không bị cám dỗ bởi vật chất hay nỗi sợ hãi!",
        choices: [{ text: "➔ Tiếp tục đến Màn 6: Bắt nạt trong nhóm làm bài", nextScene: "linh_man_6" }]
    },
    "linh_5_sai_c": {
        charName: "LINH (Màn 5: Lời Đề Nghị Của Kẻ Bắt Nạt)",
        charColor: "text-amber-400",
        charSprite: "assets/characters/Char_2_Scare.png",
        bgTheme: "border-amber-500/50 bg-slate-900/95",
        isResult: true,
        resultTitle: "THẤT BẠI - HÀNH VI THIẾU MINH BẠCH",
        resultColor: "text-amber-400",
        illustration: "assets/scenes/Char_2_Scene_9.png",
        story: "Việc nhận quà của kẻ bắt nạt khiến lời khai của bạn mất đi tính khách quan và uy tín trước thầy cô. Đồng thời, hành động 'lật mặt' này khiến Hùng tức giận và tìm cách trả thù bạn cá nhân.",
        choices: [{ text: "↺ Trở về thời điểm trước", nextScene: "linh_man_5", isUndo: true }]
    },
    "linh_man_6": {
        charName: "LINH (Màn 6: Bài Tập Nhóm Bất Công)",
        charColor: "text-sky-400",
        charSprite: "assets/characters/Char_2.png",
        bgTheme: "border-sky-500/30 bg-slate-900/95",
        story: "Trong nhóm làm bài thuyết trình, Trưởng nhóm ép Mai phải làm hết 100% nội dung và slide, trong khi các thành viên khác chỉ đi chơi nhưng lại tự ý điền tên mình vào danh sách được điểm cao nhất.",
        choices: [
            { text: "👉 Im lặng vì thấy mình cũng được hưởng lợi (không làm mà vẫn có điểm cao).", nextScene: "linh_6_sai_a" },
            { text: "👉 Yêu cầu họp lại nhóm phân chia công bằng, nếu không sẽ báo cáo chi tiết mức độ đóng góp thật lên Cô giáo.", nextScene: "linh_6_dung_b" },
            { text: "👉 Lén lấy file bài làm của Mai xóa hết đi để cả nhóm cùng bị điểm 0 cho công bằng.", nextScene: "linh_6_sai_c" }
        ]
    },
    "linh_6_sai_a": {
        charName: "LINH (Màn 6: Bài Tập Nhóm Bất Công)",
        charColor: "text-amber-400",
        charSprite: "assets/characters/Char_2_Scare.png",
        bgTheme: "border-amber-500/50 bg-slate-900/95",
        isResult: true,
        resultTitle: "THẤT BẠI - SỰ ÍCH KỶ TRONG HỌC TẬP",
        resultColor: "text-amber-400",
        illustration: "assets/scenes/Char_2_Scene_11.png",
        story: "Sự ỷ lại và bóc lột công sức của người khác là một dạng bắt nạt học đường thầm lặng. Mai bị kiệt sức và bất mãn, trong khi bạn đánh mất cơ hội rèn luyện kiến thức thực tế của chính mình.",
        choices: [{ text: "↺ Trở về thời điểm trước", nextScene: "linh_man_6", isUndo: true }]
    },
    "linh_6_dung_b": {
        charName: "LINH (Màn 6: Bài Tập Nhóm Bất Công)",
        charColor: "text-emerald-400",
        charSprite: "assets/characters/Char_2_Hand.png",
        bgTheme: "border-sky-500/80 bg-blue-950/90 animate__pulse",
        isResult: true,
        resultTitle: "THÀNH CÔNG - CÔNG BẰNG VÀ MINH BẠCH",
        resultColor: "text-emerald-400",
        illustration: "assets/scenes/Char_2_Scene_12.png",
        story: "Sự lên tiếng công tâm của Linh đã buộc nhóm phải làm việc nghiêm túc, tôn trọng công sức lao động của từng cá nhân. Bài thuyết trình thành công tốt đẹp trong sự tự hào chung của tất cả thành viên!",
        choices: [{ text: "➔ Tiếp tục đến Màn 7: Chiến dịch tử tế", nextScene: "linh_man_7" }]
    },
    "linh_6_sai_c": {
        charName: "LINH (Màn 6: Bài Tập Nhóm Bất Công)",
        charColor: "text-rose-500",
        charSprite: "assets/characters/Char_2_Scare.png",
        bgTheme: "border-rose-500/80 bg-rose-950/90 animate__shakeX",
        isResult: true,
        resultTitle: "THẤT BẠI - PHÁ HOẠI THÀNH QUẢ CHUNG",
        resultColor: "text-rose-500",
        illustration: "assets/scenes/Char_2_Scene_11.png",
        story: "Xóa bài là hành vi phá hoại cực đoan, không những làm tổn thương công sức thức đêm làm bài của Mai mà còn khiến toàn bộ nhóm rơi vào xung đột gay gắt không thể cứu vãn.",
        choices: [{ text: "↺ Trở về thời điểm trước", nextScene: "linh_man_6", isUndo: true }]
    },
    "linh_man_7": {
        charName: "LINH (Màn 7: Hành Động Thay Đổi Lớp Học)",
        charColor: "text-sky-400",
        charSprite: "assets/characters/Char_2.png",
        bgTheme: "border-sky-500/30 bg-slate-900/95",
        story: "Sau liên tiếp các vụ việc không vui diễn ra trong lớp, Đoàn trường phát động cuộc thi ý tưởng 'Xây dựng lớp học hạnh phúc - Nói không với bạo lực'. Linh và một vài bạn muốn làm điều gì đó để thay đổi tận gốc không khí lớp học.",
        choices: [
            { text: "👉 Khởi xướng 'Hòm thư thầm kín' & 'Đôi bạn cùng tiến', kêu gọi hòa giải và lắng nghe sự thật.", nextScene: "linh_7_dung_b" },
            { text: "👉 Viết một bài tham luận dài chỉ trích đích danh những bạn từng đi bắt nạt trước toàn trường.", nextScene: "linh_7_sai_a" },
            { text: "👉 Bỏ qua vì nghĩ: 'BLHĐ ở đâu cũng có, học sinh nhí nhố làm sao mà thay đổi được thế giới'.", nextScene: "linh_7_sai_c" }
        ]
    },
    "linh_7_sai_a": {
        charName: "LINH (Màn 7: Hành Động Thay Đổi Lớp Học)",
        charColor: "text-rose-500",
        charSprite: "assets/characters/Char_2_Scare.png",
        bgTheme: "border-rose-500/80 bg-rose-950/90 animate__shakeX",
        isResult: true,
        resultTitle: "THẤT BẠI - CHỈ TRÍCH CÔNG KHAI LÀ PHẢN TÁC DỤNG",
        resultColor: "text-rose-500",
        illustration: "assets/scenes/Char_2_Scene_13.png",
        story: "Việc đấu tố và chỉ trích công khai không tạo ra sự hối lỗi mà chỉ kích hoạt phản xạ tự vệ, thù hằn và sự chống đối gay gắt từ những học sinh mắc lỗi. Một xã hội tốt đẹp cần sự bao dung và định hướng thay vì nhục mạ!",
        choices: [{ text: "↺ Trở về thời điểm trước để chọn hướng hòa giải", nextScene: "linh_man_7", isUndo: true }]
    },
    "linh_7_dung_b": {
        charName: "LINH (Màn 7: Hành Động Thay Đổi Lớp Học)",
        charColor: "text-emerald-400",
        charSprite: "assets/characters/Char_2_Hand.png",
        bgTheme: "border-sky-500/80 bg-blue-950/90 animate__pulse",
        isResult: true,
        resultTitle: "THÀNH CÔNG - NGƯỜI THAY ĐỔI THẾ GIỚI!",
        resultColor: "text-emerald-400",
        illustration: "assets/scenes/Char_2_Scene_14.png",
        story: "Mô hình của Linh được Đoàn trường tuyên dương và nhân rộng. Không khí lớp học trở nên ấm áp, đoàn kết. Bạn đã chứng minh: Chỉ cần người chứng kiến không im lặng, bạo lực học đường hoàn toàn có thể bị đẩy lùi!",
        choices: [{ text: "🎉 Hoàn thành tuyến Linh - Quay lại Menu chọn nhân vật", nextScene: "RESET_GAME" }]
    },
    "linh_7_sai_c": {
        charName: "LINH (Màn 7: Hành Động Thay Đổi Lớp Học)",
        charColor: "text-amber-400",
        charSprite: "assets/characters/Char_2_Scare.png",
        bgTheme: "border-amber-500/50 bg-slate-900/95",
        isResult: true,
        resultTitle: "THẤT BẠI - SỰ BI QUAN BUÔNG XUÔI",
        resultColor: "text-amber-400",
        illustration: "assets/scenes/Char_2_Scene_13.png",
        story: "Sự thay đổi lớn luôn bắt đầu từ những hành động nhỏ của từng cá nhân. Khi tất cả chúng ta đều bi quan và từ bỏ, cái ác và sự bất công sẽ mãi mãi ngự trị trong ngăn bàn lớp học.",
        choices: [{ text: "↺ Trở về thời điểm trước", nextScene: "linh_man_7", isUndo: true }]
    },


    // ==========================================
    // TUYẾN 4: NAM - NAM CHỨNG KIẾN (7 MÀN MỚI - CHAR 3)
    // ==========================================
    "nam_man_1": {
        charName: "NAM (Màn 1: Góc Khuất Nhà Vệ Sinh)",
        charColor: "text-amber-400",
        charSprite: "assets/characters/Char_3.png",
        bgTheme: "border-amber-500/30 bg-slate-900/95",
        story: "Bước vào nhà vệ sinh nam giờ ra chơi, Nam thấy 3 học sinh lớp trên đang khóa trái cửa, dội nước xô vào người một bạn nam lớp dưới và quay clip cười cợt.",
        choices: [
            { text: "👉 Giả vờ đi tiểu tiện bình thường coi như không thấy gì rồi lặng lẽ bước ra ngoài.", nextScene: "nam_1_sai_a" },
            { text: "👉 Quay lại ngay hành lang, đập mạnh vào cửa hô to 'Thầy Giám thị đang đi kiểm tra' để chúng dừng tay.", nextScene: "nam_1_dung_b" },
            { text: "👉 Lao thẳng vào chửi bới thách thức 3 học sinh lớp trên để giải cứu bạn.", nextScene: "nam_1_sai_c" }
        ]
    },
    "nam_1_sai_a": {
        charName: "NAM (Màn 1: Góc Khuất Nhà Vệ Sinh)",
        charColor: "text-rose-500",
        charSprite: "assets/characters/Char_3_Defeat.png",
        bgTheme: "border-rose-500/80 bg-rose-950/90 animate__shakeX",
        isResult: true,
        resultTitle: "THẤT BẠI - SỰ LÀM NGƠ ĐÁNG TRÁCH",
        resultColor: "text-rose-500",
        illustration: "assets/scenes/Char_3_Scene_1.png",
        story: "Việc ngó lơ khiến bạn học dưới tiếp tục chịu nhục hình và sốc tâm lý nặng. Khi sự vô cảm lên ngôi, chính bạn một ngày nào đó cũng có thể rơi vào hoàn cảnh không ai cứu giúp.",
        choices: [{ text: "↺ Trở về thời điểm trước", nextScene: "nam_man_1", isUndo: true }]
    },
    "nam_1_dung_b": {
        charName: "NAM (Màn 1: Góc Khuất Nhà Vệ Sinh)",
        charColor: "text-emerald-400",
        charSprite: "assets/characters/Char_3_Angry.png",
        bgTheme: "border-amber-500/80 bg-blue-950/90 animate__pulse",
        isResult: true,
        resultTitle: "THÀNH CÔNG - TRÍ TUỆ GIẢI VÂY",
        resultColor: "text-emerald-400",
        illustration: "assets/scenes/Char_3_Scene_2.png",
        story: "Tiếng đập cửa và lời hô hoán thông minh khiến nhóm bắt nạt giật mình hoảng sợ mở cửa bỏ chạy. Bạn cứu được em học sinh an toàn mà không phải va chạm bạo lực nguy hiểm!",
        choices: [{ text: "➔ Tiếp tục đến Màn 2: Lôi kéo đánh hội đồng", nextScene: "nam_man_2" }]
    },
    "nam_1_sai_c": {
        charName: "NAM (Màn 1: Góc Khuất Nhà Vệ Sinh)",
        charColor: "text-amber-400",
        charSprite: "assets/characters/Char_3_Defeat.png",
        bgTheme: "border-amber-500/50 bg-slate-900/95",
        isResult: true,
        resultTitle: "THẤT BẠI - THIẾU TÍNH TOÁN AN TOÀN",
        resultColor: "text-amber-400",
        illustration: "assets/scenes/Char_3_Scene_1.png",
        story: "Sự hảo hán mù quáng trong không gian hẹp với đối thủ đông hơn khiến Nam bị uy hiếp ngược lại và thương tích nhẹ. Cần dùng mưu trí hoặc trợ giúp từ người lớn trong các tình huống chênh lệch lực lượng!",
        choices: [{ text: "↺ Trở về thời điểm trước", nextScene: "nam_man_1", isUndo: true }]
    },
    "nam_man_2": {
        charName: "NAM (Màn 2: Lôi Kéo Đánh Hội Đồng)",
        charColor: "text-amber-400",
        charSprite: "assets/characters/Char_3.png",
        bgTheme: "border-amber-500/30 bg-slate-900/95",
        story: "Hội 'anh em kết nghĩa' trong trường rủ Nam chiều nay ra công viên sau trường chặn đánh một học sinh lớp khác vì dám 'nhìn đểu' trưởng nhóm. Chúng bảo Nam đi cùng để 'đứng canh chừng và lấy số má'.",
        choices: [
            { text: "👉 Nể tình anh em nên đi theo đứng xem, nghĩ rằng mình không trực tiếp ra tay thì không sao.", nextScene: "nam_2_sai_a" },
            { text: "👉 Hăng hái nhận lời đi theo để mang vũ khí trợ uy cho hội anh em.", nextScene: "nam_2_sai_c" },
            { text: "👉 Từ chối thẳng, đồng thời lén báo thông tin địa điểm cho công an khu vực hoặc phòng Giám thị.", nextScene: "nam_2_dung_b" }
        ]
    },
    "nam_2_sai_a": {
        charName: "NAM (Màn 2: Lôi Kéo Đánh Hội Đồng)",
        charColor: "text-rose-500",
        charSprite: "assets/characters/Char_3_Defeat.png",
        bgTheme: "border-rose-500/80 bg-rose-950/90 animate__shakeX",
        isResult: true,
        resultTitle: "THẤT BẠI - ĐỒNG PHẠM GIÚP SỨC",
        resultColor: "text-rose-500",
        illustration: "assets/scenes/Char_3_Scene_3.png",
        story: "Theo pháp luật, người đứng canh chừng hoặc cổ vũ trong một vụ cố ý gây thương tích bị kết tội là 'đồng phạm giúp sức'. Bạn bị nhà trường buộc thôi học và để lại án tích kỷ luật.",
        choices: [{ text: "↺ Trở về thời điểm trước", nextScene: "nam_man_2", isUndo: true }]
    },
    "nam_2_dung_b": {
        charName: "NAM (Màn 2: Lôi Kéo Đánh Hội Đồng)",
        charColor: "text-emerald-400",
        charSprite: "assets/characters/Char_3_Angry.png",
        bgTheme: "border-amber-500/80 bg-blue-950/90 animate__pulse",
        isResult: true,
        resultTitle: "THÀNH CÔNG - NGĂN CHẶN BẠO LỰC",
        resultColor: "text-emerald-400",
        illustration: "assets/scenes/Char_3_Scene_4.png",
        story: "Lực lượng chức năng đã có mặt giải tán đám đông trước khi vụ ẩu đả xảy ra. Sự bản lĩnh dứt bỏ các mối quan hệ độc hại và hành động kịp thời của Nam đã cứu nhiều học sinh khỏi vòng lao lý!",
        choices: [{ text: "➔ Tiếp tục đến Màn 3: Tẩy chay trong Discord", nextScene: "nam_man_3" }]
    },
    "nam_2_sai_c": {
        charName: "NAM (Màn 2: Lôi Kéo Đánh Hội Đồng)",
        charColor: "text-amber-400",
        charSprite: "assets/characters/Char_3_Defeat.png",
        bgTheme: "border-amber-500/50 bg-slate-900/95",
        isResult: true,
        resultTitle: "THẤT BẠI - SA NGÃ VI PHẠM",
        resultColor: "text-amber-400",
        illustration: "assets/scenes/Char_3_Scene_3.png",
        story: "Tự biến mình thành côn đồ vì cái 'danh dự giang hồ' rỗng tuếch là con đường nhanh nhất hủy hoại tương lai của một học sinh.",
        choices: [{ text: "↺ Trở về thời điểm trước", nextScene: "nam_man_2", isUndo: true }]
    },
    "nam_man_3": {
        charName: "NAM (Màn 3: Bạo Lực Mạng Nhóm Game)",
        charColor: "text-amber-400",
        charSprite: "assets/characters/Char_3.png",
        bgTheme: "border-amber-500/30 bg-slate-900/95",
        story: "Trong sever Discord của lớp, một bạn nam có gia cảnh khó khăn bị cả nhóm chụp lại ảnh mặc áo rách và spam ảnh chế giễu nhạo cợt suốt đêm. Chúng rủ Nam vào cmt cho vui.",
        choices: [
            { text: "👉 Gõ một bình luận cợt nhả theo số đông để chứng tỏ mình hòa đồng.", nextScene: "nam_3_sai_a" },
            { text: "👉 Nhắn tin thẳng lên kênh chat: 'Trò này không vui đâu, xóa ảnh đi các cậu, đừng xúc phạm bạn bè' rồi out kênh chat nếu chúng tiếp diễn.", nextScene: "nam_3_dung_b" },
            { text: "👉 Im lặng đọc hết từ đầu đến cuối, chụp lại ảnh phốt ngược lại gia đình đứa cầm đầu.", nextScene: "nam_3_sai_c" }
        ]
    },
    "nam_3_sai_a": {
        charName: "NAM (Màn 3: Bạo Lực Mạng Nhóm Game)",
        charColor: "text-rose-500",
        charSprite: "assets/characters/Char_3_Defeat.png",
        bgTheme: "border-rose-500/80 bg-rose-950/90 animate__shakeX",
        isResult: true,
        resultTitle: "THẤT BẠI - CÚ NHẤP CHUỘT TÀN NHẪN",
        resultColor: "text-rose-500",
        illustration: "assets/scenes/Char_3_Scene_5.png",
        story: "Một dòng bình luận 'cho vui' của bạn có thể là tảng đá nặng nề đè bẹp lòng tự trọng của người khác. Bạn học bị cô lập và xin chuyển lớp vì không chịu nổi áp lực từ tập thể.",
        choices: [{ text: "↺ Trở về thời điểm trước", nextScene: "nam_man_3", isUndo: true }]
    },
    "nam_3_dung_b": {
        charName: "NAM (Màn 3: Bạo Lực Mạng Nhóm Game)",
        charColor: "text-emerald-400",
        charSprite: "assets/characters/Char_3_Angry.png",
        bgTheme: "border-amber-500/80 bg-blue-950/90 animate__pulse",
        isResult: true,
        resultTitle: "THÀNH CÔNG - TIẾNG NÓI CHÍNH TRỰC",
        resultColor: "text-emerald-400",
        illustration: "assets/scenes/Char_3_Scene_6.png",
        story: "Khi có một người nam giới dám đứng lên nói lời công chính, hiệu ứng 'đám đông mù quáng' lập tức bị khựng lại. Nhóm bạn tự nhận thấy sự quá trán của mình và chủ động gỡ bỏ các bức ảnh chế giễu.",
        choices: [{ text: "➔ Tiếp tục đến Màn 4: Trấn lột nhà xe", nextScene: "nam_man_4" }]
    },
    "nam_3_sai_c": {
        charName: "NAM (Màn 3: Bạo Lực Mạng Nhóm Game)",
        charColor: "text-amber-400",
        charSprite: "assets/characters/Char_3_Defeat.png",
        bgTheme: "border-amber-500/50 bg-slate-900/95",
        isResult: true,
        resultTitle: "THẤT BẠI - LẤY ĐỘC TRỊ ĐỘC",
        resultColor: "text-amber-400",
        illustration: "assets/scenes/Char_3_Scene_5.png",
        story: "Dùng bạo lực mạng để đáp trả bạo lực mạng chỉ khiến cộng đồng lớp học biến thành chiến trường hỗn loạn, nơi danh dự của ai cũng bị đem ra chà đạp.",
        choices: [{ text: "↺ Trở về thời điểm trước", nextScene: "nam_man_3", isUndo: true }]
    },
    "nam_man_4": {
        charName: "NAM (Màn 4: Trấn Lột Tiền Bạc)",
        charColor: "text-amber-400",
        charSprite: "assets/characters/Char_3.png",
        bgTheme: "border-amber-500/30 bg-slate-900/95",
        story: "Nam biết bạn thân của mình là Tuấn đang bị một nhóm anh chị lớp trên tống tiền hàng tuần. Tuấn vì quá sợ hãi nên đã phải nhịn ăn sáng và định đi ăn trộm tiền gia đình để nộp cho chúng.",
        choices: [
            { text: "👉 Bảo Tuấn: 'Đàn ông phải tự giải quyết, bị tống tiền mà chịu là hèn'.", nextScene: "nam_4_sai_c" },
            { text: "👉 Hứa giữ bí mật cho Tuấn, cho Tuấn mượn tiền của mình để nộp cho qua chuyện.", nextScene: "nam_4_sai_a" },
            { text: "👉 Khuyên Tuấn kiên quyết không nộp, trực tiếp đi cùng Tuấn đến trình báo toàn bộ sự việc với Thầy Ban Giám Hiệu.", nextScene: "nam_4_dung_b" }
        ]
    },
    "nam_4_sai_a": {
        charName: "NAM (Màn 4: Trấn Lột Tiền Bạc)",
        charColor: "text-rose-500",
        charSprite: "assets/characters/Char_3_Defeat.png",
        bgTheme: "border-rose-500/80 bg-rose-950/90 animate__shakeX",
        isResult: true,
        resultTitle: "THẤT BẠI - GIÚP BẠN SAI CÁCH",
        resultColor: "text-rose-500",
        illustration: "assets/scenes/Char_3_Scene_7.png",
        story: "Đưa tiền cho kẻ tống tiền chỉ làm lòng tham của chúng lớn hơn. Tiền của bạn chẳng mấy chốc sẽ cạn kiệt, và Tuấn vẫn mãi sống trong cảnh làm nô lệ tài chính cho kẻ xấu.",
        choices: [{ text: "↺ Trở về thời điểm trước", nextScene: "nam_man_4", isUndo: true }]
    },
    "nam_4_dung_b": {
        charName: "NAM (Màn 4: Trấn Lột Tiền Bạc)",
        charColor: "text-emerald-400",
        charSprite: "assets/characters/Char_3_Angry.png",
        bgTheme: "border-amber-500/80 bg-blue-950/90 animate__pulse",
        isResult: true,
        resultTitle: "THÀNH CÔNG - NGƯỜI ĐỒNG HÀNH TIN CẬY",
        resultColor: "text-emerald-400",
        illustration: "assets/scenes/Char_3_Scene_8.png",
        story: "Sự đồng hành của Nam đã tiếp thêm dũng khí cho Tuấn. Ban Giám Hiệu phối hợp cùng phụ huynh đã giải quyết triệt để đường dây cưỡng đoạt tài sản. Bạn là một người bạn đích thực!",
        choices: [{ text: "➔ Tiếp tục đến Màn 5: Cám dỗ thỏa hiệp", nextScene: "nam_man_5" }]
    },
    "nam_4_sai_c": {
        charName: "NAM (Màn 4: Trấn Lột Tiền Bạc)",
        charColor: "text-amber-400",
        charSprite: "assets/characters/Char_3_Defeat.png",
        bgTheme: "border-amber-500/50 bg-slate-900/95",
        isResult: true,
        resultTitle: "THẤT BẠI - LỜI NÓI VÔ TRÁCH NHIỆM",
        resultColor: "text-amber-400",
        illustration: "assets/scenes/Char_3_Scene_7.png",
        story: "Sự phán xét độc địa trong lúc bạn bè tuyệt vọng nhất khiến Tuấn sụp đổ hoàn toàn về tâm lý và làm rạn nứt tình bạn lâu năm của hai người.",
        choices: [{ text: "↺ Trở về thời điểm trước", nextScene: "nam_man_4", isUndo: true }]
    },
    "nam_man_5": {
        charName: "NAM (Màn 5: Lời Mời Gọi Từ Nhóm Bạo Lực)",
        charColor: "text-amber-400",
        charSprite: "assets/characters/Char_3.png",
        bgTheme: "border-amber-500/30 bg-slate-900/95",
        story: "Nhóm cầu thủ nổi tiếng trong trường rủ Nam gia nhập hội. Tuy nhiên quy tắc của hội là phải hay đi bắt nạt, sai vặt và trêu chọc các bạn nam yếu đuối khác trong trường để 'thể hiện đẳng cấp nam thần'.",
        choices: [
            { text: "👉 Từ chối thẳng thắn, chọn chơi với nhóm bạn hòa đồng, tích cực dù bình thường.", nextScene: "nam_5_dung_b" },
            { text: "👉 Đồng ý gia nhập vì muốn có danh tiếng và được nhiều người nể sợ trong trường.", nextScene: "nam_5_sai_a" },
            { text: "👉 Gia nhập hội nhưng cố tình gây chia rẽ nội bộ nhóm từ bên trong.", nextScene: "nam_5_sai_c" }
        ]
    },
    "nam_5_sai_a": {
        charName: "NAM (Màn 5: Lời Mời Gọi Từ Nhóm Bạo Lực)",
        charColor: "text-rose-500",
        charSprite: "assets/characters/Char_3_Defeat.png",
        bgTheme: "border-rose-500/80 bg-rose-950/90 animate__shakeX",
        isResult: true,
        resultTitle: "THẤT BẠI - DANH TIẾNG ẢO TƯỞNG",
        resultColor: "text-rose-500",
        illustration: "assets/scenes/Char_3_Scene_9.png",
        story: "Sự nể sợ dựa trên bạo lực không phải là sự tôn trọng thật lòng mà chỉ là sự ghê tởm. Bạn đã tự đánh mất bản chất lương thiện để đổi lấy thứ danh vọng học đường rỗng tuếch và độc hại.",
        choices: [{ text: "↺ Trở về thời điểm trước", nextScene: "nam_man_5", isUndo: true }]
    },
    "nam_5_dung_b": {
        charName: "NAM (Màn 5: Lời Mời Gọi Từ Nhóm Bạo Lực)",
        charColor: "text-emerald-400",
        charSprite: "assets/characters/Char_3_Angry.png",
        bgTheme: "border-amber-500/80 bg-blue-950/90 animate__pulse",
        isResult: true,
        resultTitle: "THÀNH CÔNG - TỰ CHỦ TRONG SẠCH",
        resultColor: "text-emerald-400",
        illustration: "assets/scenes/Char_3_Scene_10.png",
        story: "Người quân tử hòa nhập chứ không hòa tan! Việc giữ vững lập trường không tham gia vào các hội nhóm độc hại giúp Nam luôn được thầy cô và bạn bè kính trọng vì nhân cách sáng ngời.",
        choices: [{ text: "➔ Tiếp tục đến Màn 6: Bạo lực thể thao", nextScene: "nam_man_6" }]
    },
    "nam_5_sai_c": {
        charName: "NAM (Màn 5: Lời Mời Gọi Từ Nhóm Bạo Lực)",
        charColor: "text-amber-400",
        charSprite: "assets/characters/Char_3_Defeat.png",
        bgTheme: "border-amber-500/50 bg-slate-900/95",
        isResult: true,
        resultTitle: "THẤT BẠI - MƯU KẾ NGUY HIỂM",
        resultColor: "text-amber-400",
        illustration: "assets/scenes/Char_3_Scene_9.png",
        story: "Việc dùng thủ đoạn đâm thọc nội bộ khiến Nam bị lộ tẩy và bị cả hội nhắm mục tiêu trả thù thể chất dữ dội.",
        choices: [{ text: "↺ Trở về thời điểm trước", nextScene: "nam_man_5", isUndo: true }]
    },
    "nam_man_6": {
        charName: "NAM (Màn 6: Trận Đấu Bất Công)",
        charColor: "text-amber-400",
        charSprite: "assets/characters/Char_3.png",
        bgTheme: "border-amber-500/30 bg-slate-900/95",
        story: "Trong trận bóng giải trường, cầu thủ đội bạn cố tình đá xấu, phạm lỗi liên tục làm thương tích một cầu thủ đội Nam nhưng Trọng tài (là học sinh lớp khác) cố tình bao che không thổi phạt.",
        choices: [
            { text: "👉 Cùng cả đội lao vào đánh Trọng tài và cầu thủ đội bạn để trả thù.", nextScene: "nam_6_sai_a" },
            { text: "👉 Là đội phó, Nam yêu cầu tạm dừng trận đấu, mời Ban tổ chức là Thầy thể chất đến giải quyết và đưa bạn đi y tế.", nextScene: "nam_6_dung_b" },
            { text: "👉 Bỏ giải, kéo cả đội ra về để protest trọng tài.", nextScene: "nam_6_sai_c" }
        ]
    },
    "nam_6_sai_a": {
        charName: "NAM (Màn 6: Trận Đấu Bất Công)",
        charColor: "text-rose-500",
        charSprite: "assets/characters/Char_3_Defeat.png",
        bgTheme: "border-rose-500/80 bg-rose-950/90 animate__shakeX",
        isResult: true,
        resultTitle: "THẤT BẠI - BẠO LỰC SÂN CỎ",
        resultColor: "text-rose-500",
        illustration: "assets/scenes/Char_3_Scene_11.png",
        story: "Trận bóng đá biến thành vụ ẩu đả tập thể đáng xấu hổ. Đội bóng của lớp bị loại vĩnh viễn khỏi giải và toàn bộ các cầu thủ tham gia đánh nhau đều bị hạnh kiểm yếu.",
        choices: [{ text: "↺ Trở về thời điểm trước", nextScene: "nam_man_6", isUndo: true }]
    },
    "nam_6_dung_b": {
        charName: "NAM (Màn 6: Trận Đấu Bất Công)",
        charColor: "text-emerald-400",
        charSprite: "assets/characters/Char_3_Angry.png",
        bgTheme: "border-amber-500/80 bg-blue-950/90 animate__pulse",
        isResult: true,
        resultTitle: "THÀNH CÔNG - THỦ LĨNH ĐIỀM TĨNH",
        resultColor: "text-emerald-400",
        illustration: "assets/scenes/Char_3_Scene_12.png",
        story: "Sự can thiệp theo đúng luật lệ của Nam đã buộc Ban tổ chức thay thế trọng tài và phạt thẻ đỏ cầu thủ chơi xấu. Bạn bảo vệ được sự an toàn cho đồng đội và giữ vững tinh thần cao thượng của thể thao!",
        choices: [{ text: "➔ Tiếp tục đến Màn 7: Người tiên phong", nextScene: "nam_man_7" }]
    },
    "nam_6_sai_c": {
        charName: "NAM (Màn 6: Trận Đấu Bất Công)",
        charColor: "text-amber-400",
        charSprite: "assets/characters/Char_3_Defeat.png",
        bgTheme: "border-amber-500/50 bg-slate-900/95",
        isResult: true,
        resultTitle: "THẤT BẠI - BỎ CUỘC KHÔNG PHẢI LÀ CÁCH",
        resultColor: "text-amber-400",
        illustration: "assets/scenes/Char_3_Scene_11.png",
        story: "Tự ý bỏ giải khiến đội của bạn bị xử thua 0-3 và mất quyền khiếu nại về hành vi chơi xấu của đối thủ. Sự bất công bị vùi lấp vì thiếu người dám đứng lên làm việc tới cùng.",
        choices: [{ text: "↺ Trở về thời điểm trước", nextScene: "nam_man_6", isUndo: true }]
    },
    "nam_man_7": {
        charName: "NAM (Màn 7: Khởi Xướng Lối Sống Mới)",
        charColor: "text-amber-400",
        charSprite: "assets/characters/Char_3.png",
        bgTheme: "border-amber-500/30 bg-slate-900/95",
        story: "Đại hội Đoàn trường mong muốn tìm một đại diện đứng lên lãnh đạo phong trào 'Bảo vệ nam giới học đường khỏi định kiến và bạo lực ngầm'. Nam được cử làm người khởi xướng.",
        choices: [
            { text: "👉 Nhận lời, thành lập CLB Thể thao & Kỹ năng tự vệ lành mạnh, chia sẻ cách giải quyết xung đột không bạo lực.", nextScene: "nam_7_dung_b" },
            { text: "👉 Từ chối vì nghĩ 'con trai thì nên tự lập, bị bắt nạt chút cho cứng cáp, làm phong trào làm gì cho yếu đuối'.", nextScene: "nam_7_sai_a" },
            { text: "👉 Nhận lời nhưng chỉ lập hội nhóm để tụ tập đi chơi, không thực hiện hoạt động giáo dục nào.", nextScene: "nam_7_sai_c" }
        ]
    },
    "nam_7_sai_a": {
        charName: "NAM (Màn 7: Khởi Xướng Lối Sống Mới)",
        charColor: "text-amber-400",
        charSprite: "assets/characters/Char_3_Defeat.png",
        bgTheme: "border-amber-500/50 bg-slate-900/95",
        isResult: true,
        resultTitle: "THẤT BẠI - ĐỊNH KIẾN ĐỘC HẠI",
        resultColor: "text-amber-400",
        illustration: "assets/scenes/Char_3_Scene_13.png",
        story: "Quan niệm 'đàn ông phải tự chịu đựng bạo lực để cứng cáp' là nguyên nhân chính khiến rất nhiều học sinh nam bị tổn thương tâm lý, trầm cảm mà không dám tìm kiếm sự giúp đỡ từ gia đình và nhà trường.",
        choices: [{ text: "↺ Trở về thời điểm trước", nextScene: "nam_man_7", isUndo: true }]
    },
    "nam_7_dung_b": {
        charName: "NAM (Màn 7: Khởi Xướng Lối Sống Mới)",
        charColor: "text-emerald-400",
        charSprite: "assets/characters/Char_3_Angry.png",
        bgTheme: "border-amber-500/80 bg-blue-950/90 animate__pulse",
        isResult: true,
        resultTitle: "THÀNH CÔNG - THỦ LĨNH TRUYỀN CẢM HỨNG!",
        resultColor: "text-emerald-400",
        illustration: "assets/scenes/Char_3_Scene_14.png",
        story: "CLB do Nam lãnh đạo thu hút hàng trăm học sinh nam tham gia. Nơi đây trở thành ngôi nhà chung tích cực giúp các bạn rèn luyện thể chất, tự vệ bản thân và cùng nhau lan tỏa văn hóa ứng xử chuẩn mực. Bạn đã thay đổi thế giới học đường!",
        choices: [{ text: "🎉 Hoàn thành tuyến Nam - Quay lại Menu chọn nhân vật", nextScene: "RESET_GAME" }]
    },
    "nam_7_sai_c": {
        charName: "NAM (Màn 7: Khởi Xướng Lối Sống Mới)",
        charColor: "text-rose-500",
        charSprite: "assets/characters/Char_3_Defeat.png",
        bgTheme: "border-rose-500/80 bg-rose-950/90 animate__shakeX",
        isResult: true,
        resultTitle: "THẤT BẠI - HOẠT ĐỘNG HÌNH THỨC",
        resultColor: "text-rose-500",
        illustration: "assets/scenes/Char_3_Scene_13.png",
        story: "Sự thờ ơ và làm phong trào hình thức khiến CLB nhanh chóng tan rã, đánh mất cơ hội quý giá để giúp đỡ những học sinh nam đang thực sự cần một điểm tựa tinh thần.",
        choices: [{ text: "↺ Trở về thời điểm trước", nextScene: "nam_man_7", isUndo: true }]
    }

};  
