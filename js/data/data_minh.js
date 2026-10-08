// ==========================================
// TUYẾN 2: MINH - NAM NẠN NHÂN (CẤU TRÚC 7 MÀN ĐA TẦNG - 6 MINI-GAMES HARDCORE)
// Tối ưu 60 FPS | Phối hợp toàn diện 5 Biểu cảm (Normal, Happy, Cry, Angry, Think)
// ==========================================
const DATA_MINH = {
    // ------------------------------------------
    // MÀN 1: BẠO LỰC SÂN BÓNG (TRANH SÂN)
    // ------------------------------------------
    "minh_man_1": {
        charName: "MINH (Cảnh 1: Tranh Sân Bóng Rổ)",
        charColor: "text-indigo-400",
        charSprite: "assets/characters/Char_4.webp",
        charEmotion: "worried",
        bgTheme: "border-indigo-500/30 bg-slate-900/95",
        story: "Giờ ra chơi, Minh và các bạn đang ném bóng rổ thì nhóm của Long 'đại ca' khối 9 đi tới. Long giật quả bóng trên tay Minh ném ra xa, hất hàm: 'Sân này giờ của bọn tao. Mấy thằng oắt con biến ra chỗ khác chơi'.",
        choices: [
            { text: "👉 Cay máu lao vào đẩy Long: 'Sân trường chung, anh cậy lớn ức hiếp ai?'.", nextScene: "minh_1_sai_a" },
            { text: "👉 Sợ hãi cúi gầm mặt, bảo bạn bè nhường sân rồi cay đắng bỏ đi.", nextScene: "minh_1_sai_b" },
            { text: "👉 Dừng chơi, giữ khoảng cách và nói: 'Tụi em đăng ký lịch sân này với Thầy Thể chất rồi'.", nextScene: "minh_1_1" }
        ]
    },
    "minh_1_sai_a": {
        charName: "MINH (Cảnh 1: Thất bại)",
        charColor: "text-rose-500",
        charSprite: "assets/characters/Char_4.webp",
        charEmotion: "cry",
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
        charSprite: "assets/characters/Char_4.webp",
        charEmotion: "cry",
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
        charEmotion: "think", // 👉 Cân nhắc phương án xử lý hành vi phá hoại tài sản
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
        charSprite: "assets/characters/Char_4.webp",
        charEmotion: "angry", // 👉 Phẫn nộ chửi bới trên MXH
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
        charSprite: "assets/characters/Char_4.webp",
        charEmotion: "cry",
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
        charEmotion: "think", // 👉 Tư duy pháp luật phản đòn thủ phạm
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
        charSprite: "assets/characters/Char_4.webp",
        charEmotion: "angry", // 👉 Nổi điên cầm vũ khí phang người
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
        charSprite: "assets/characters/Char_4.webp",
        charEmotion: "cry",
        bgTheme: "border-amber-500/50 bg-slate-900/95",
        isResult: true,
        resultTitle: "THẤT BẠI - LẤY ĐỘC TRỊ ĐỘC",
        resultColor: "text-amber-400",
        illustration: "assets/scenes/Char_4_Scene_11.webp",
        story: "Minh lén rạch xe Long nhưng xui xẻo xe Long nằm ngay góc camera nét nhất. Minh bị mời phụ huynh lên bồi thường và bị đình chỉ học thuật. Kế hoạch thất bại thảm hại.",
        choices: [{ text: "↺ Làm lại bước này", nextScene: "minh_1_2", isUndo: true }]
    },

    // 🌟 [GAME MINH 1]: TIMING - CANH CHUẨN KẾT NỐI CUỘC GỌI CÔNG AN
    "minh_1_3": {
        charName: "MINH (Cảnh 1.3: Đòn Cân Não)",
        charColor: "text-indigo-400",
        charSprite: "assets/characters/Char_4.webp",
        charEmotion: "think", // 👉 Dùng lý trí và pháp luật tạo sức ép tâm lý
        sfx: "sfx_heartbeat",
        bgTheme: "border-indigo-500/30 bg-slate-900/95",
        story: "Nghe từ 'Công an lấy dấu vân tay', Long hơi tái mặt nhưng vẫn cố gồng: 'Mày dọa ai? Làm như Cảnh sát rảnh lắm mà xuống trường khám nghiệm cái yên xe rách của mày'.",
        
        minigame: {
            type: "timing",
            duration: 8,
            target: 3,
            title: "KẾT NỐI CUỘC GỌI",
            description: "Canh chuẩn thời điểm bấm nút GHI HÌNH đúng lúc con trỏ đi qua vùng sáng mục tiêu 3 lần để gọi Công an Phường trước mặt Long!",
            successScene: "minh_1_thanh_cong",
            failScene: "minh_1_3_sai_a"
        },

        choices: [
            { text: "👉 Thấy nó không sợ nên chùn bước, lùi lại và im lặng.", nextScene: "minh_1_3_sai_a" },
            { text: "👉 Bốc phét thêm: 'Tao có ông chú làm Giám đốc Công an tỉnh, mày tiêu rồi con'.", nextScene: "minh_1_3_sai_b" },
            { text: "👉 Dứt khoát lấy điện thoại bấm gọi số máy bàn của Công an Phường bật loa ngoài trước mặt Long và chú bảo vệ.", nextScene: "minh_1_thanh_cong" }
        ]
    },
    "minh_1_3_sai_a": {
        charName: "MINH (Cảnh 1.3: Thất bại)",
        charColor: "text-amber-400",
        charSprite: "assets/characters/Char_4.webp",
        charEmotion: "cry",
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
        charSprite: "assets/characters/Char_4.webp",
        charEmotion: "angry", // 👉 Bốc phét, nói xạo bị bóc mẽ
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
        charSprite: "assets/characters/Char_4.webp",
        charEmotion: "victory", // 👉 Nụ cười chiến thắng đắc thắng
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
        charEmotion: "worried",
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
        charSprite: "assets/characters/Char_4.webp",
        charEmotion: "angry", // 👉 Cay cú chửi lại qua tin nhắn
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
        charSprite: "assets/characters/Char_4.webp",
        charEmotion: "cry",
        bgTheme: "border-amber-500/50 bg-slate-900/95",
        isResult: true,
        resultTitle: "THẤT BẠI - TỰ TRỪNG PHẠT BẢN THÂN",
        resultColor: "text-amber-400",
        illustration: "assets/scenes/Char_4_Scene_11.webp",
        story: "Tại sao bạn phải đập phá đồ đạc của mình và bỏ dở việc học chỉ vì những lời vô văn hóa của kẻ khác? Hành động này minh chứng cho sự yếu đuối và tự hủy hoại bản thân.",
        choices: [{ text: "↺ Làm lại bước này", nextScene: "minh_man_2", isUndo: true }]
    },

    // 🌟 [GAME MINH 2]: CLEANER - GẠT BỎ ĐỘC TỐ TÂM LÝ
    "minh_2_1": {
        charName: "MINH (Cảnh 2.1: Sức Ép Sáng Hôm Sau)",
        charColor: "text-indigo-400",
        charSprite: "assets/characters/Char_4.webp",
        charEmotion: "think", // 👉 Dùng sự điềm tĩnh và lý trí gạt bỏ lời sỉ nhục
        sfx: "sfx_heartbeat",
        bgTheme: "border-indigo-500/30 bg-slate-900/95",
        story: "Sáng hôm sau vào lớp, Huy và nhóm bạn nam cố tình nói to: 'Ê cẩn thận, thằng rác rưởi tới kìa, chơi với nó có ngày kéo IQ cả lớp xuống đấy'. Vài bạn nữ cũng quay lại nhìn Minh cười khúc khích.",
        
        minigame: {
            type: "cleaner",
            duration: 6,
            target: 7,
            title: "LOẠI BỎ ĐỘC TỐ",
            description: "Phản xạ chạm nhanh vào ít nhất 7 lời sỉ nhục độc hại xuất hiện trên màn hình để gạt bỏ chúng, bảo vệ IQ tâm lý!",
            successScene: "minh_2_2",
            failScene: "minh_2_1_sai_b"
        },

        choices: [
            { text: "👉 Lôi cổ áo Huy ngay giữa lớp đòi đấm nhau: 'Mày ngon nói lại xem?'.", nextScene: "minh_2_1_sai_a" },
            { text: "👉 Bỏ chạy ra ngoài hành lang đứng khóc vì quá áp lực.", nextScene: "minh_2_1_sai_b" },
            { text: "👉 Điềm nhiên ngồi xuống chỗ của mình, lấy sách vở ra học bài coi như không nghe thấy tiếng gì.", nextScene: "minh_2_2" }
        ]
    },
    "minh_2_1_sai_a": {
        charName: "MINH (Cảnh 2.1: Thất bại)",
        charColor: "text-rose-500",
        charSprite: "assets/characters/Char_4.webp",
        charEmotion: "angry", // 👉 Nóng giận lôi cổ áo đòi đánh nhau
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
        charSprite: "assets/characters/Char_4.webp",
        charEmotion: "cry",
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
        charEmotion: "think", // 👉 Kiên định yêu cầu giáo viên lập biên bản nghiêm túc
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
        charSprite: "assets/characters/Char_4.webp",
        charEmotion: "cry",
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
        charSprite: "assets/characters/Char_4.webp",
        charEmotion: "angry", // 👉 Thái độ văng tục, cãi lời giáo viên
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
        charEmotion: "normal",
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
        charSprite: "assets/characters/Char_4.webp",
        charEmotion: "cry",
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
        charSprite: "assets/characters/Char_4.webp",
        charEmotion: "angry", // 👉 Vác ghế đánh người giữa lớp
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
        charSprite: "assets/characters/Char_4.webp",
        charEmotion: "victory", // 👉 Chiến thắng vinh quang rực rỡ
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
        charEmotion: "worried",
        sfx: "sfx_heartbeat",
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
        charSprite: "assets/characters/Char_4.webp",
        charEmotion: "cry",
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
        charSprite: "assets/characters/Char_4.webp",
        charEmotion: "cry",
        bgTheme: "border-amber-500/50 bg-slate-900/95",
        isResult: true,
        resultTitle: "THẤT BẠI - NÓI LÝ VỚI KẺ CƯỚP",
        resultColor: "text-amber-400",
        illustration: "assets/scenes/Char_4_Scene_1.webp",
        story: "Kẻ lưu manh không quan tâm đến pháp luật khi chúng đang nắm lợi thế. Bọn chúng cười lớn, lao vào túm cổ áo và tát Minh lật mặt để tự tháo đồng hồ.",
        choices: [{ text: "↺ Suy ngẫm và thử lại", nextScene: "minh_man_3", isUndo: true }]
    },

    // 🌟 [GAME MINH 3]: TAP-TAP - BÁM ĐUỔI THEO DẤU ĐỊNH VỊ GPS
    "minh_3_1": {
        charName: "MINH (Cảnh 3.1: Theo Dấu Tội Phạm)",
        charColor: "text-indigo-400",
        charSprite: "assets/characters/Char_4.webp",
        charEmotion: "think", // 👉 Dùng công nghệ GPS theo dõi dấu vết tài sản
        sfx: "sfx_heartbeat",
        bgTheme: "border-indigo-500/30 bg-slate-900/95",
        story: "Bọn chúng lấy được đồng hồ liền đắc ý mở khóa cửa bỏ đi. Minh bước ra ngoài bình an vô sự. Chiếc đồng hồ trị giá 3 triệu đồng đã biến mất.",
        
        minigame: {
            type: "taptap",
            duration: 5,
            target: 30,
            title: "THEO DẤU ĐỊNH VỊ GPS",
            description: "Nhấp liên tục tốc độ cao để bứt tốc bám theo ở khoảng cách an toàn, giữ cho tín hiệu Find My Device không bị mất kết nối!",
            successScene: "minh_3_2",
            failScene: "minh_3_1_sai_b"
        },

        choices: [
            { text: "👉 Về nhà khóc lóc báo bố mẹ: 'Con lỡ làm rớt mất đồng hồ trên sân trường rồi'.", nextScene: "minh_3_1_sai_a" },
            { text: "👉 Lên phòng GVCN khai báo toàn bộ hình dáng 3 kẻ cướp đồ.", nextScene: "minh_3_1_sai_b" },
            { text: "👉 Âm thầm đi theo chúng từ xa để biết bọn chúng học lớp nào, sau đó dùng tính năng 'Find my device' trên điện thoại để chụp màn hình vị trí chiếc đồng hồ.", nextScene: "minh_3_2" }
        ]
    },
    "minh_3_1_sai_a": {
        charName: "MINH (Cảnh 3.1: Thất bại)",
        charColor: "text-amber-400",
        charSprite: "assets/characters/Char_4.webp",
        charEmotion: "cry",
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
        charSprite: "assets/characters/Char_4.webp",
        charEmotion: "cry",
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
        charEmotion: "think", // 👉 Dũng cảm đứng ra nhận diện bằng chứng trước Công an
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
        charSprite: "assets/characters/Char_4.webp",
        charEmotion: "angry", // 👉 Kiêu ngạo sỉ nhục đối phương mất điểm
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
        charSprite: "assets/characters/Char_4.webp",
        charEmotion: "cry",
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
        charEmotion: "think", // 👉 Dùng hóa đơn, sao kê bẻ gãy sự ngụy biện
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
        charSprite: "assets/characters/Char_4.webp",
        charEmotion: "angry", // 👉 Cãi vã lộn xộn trong quá trình phá án
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
        charSprite: "assets/characters/Char_4.webp",
        charEmotion: "cry",
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
        charSprite: "assets/characters/Char_4.webp",
        charEmotion: "victory", // 👉 Nụ cười bản lĩnh lấy lại tài sản
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
        charEmotion: "think", // 👉 Tư duy bác bỏ quan niệm nam tính độc hại
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
        charSprite: "assets/characters/Char_4.webp",
        charEmotion: "cry",
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
        charSprite: "assets/characters/Char_4.webp",
        charEmotion: "cry",
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
        charEmotion: "think", // 👉 Cảnh giác giữ chân bạn trước nguy hiểm
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
        charSprite: "assets/characters/Char_4.webp",
        charEmotion: "angry", // 👉 Cười khẩy kích động người khác nhảy lầu
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
        charSprite: "assets/characters/Char_4.webp",
        charEmotion: "cry",
        bgTheme: "border-amber-500/50 bg-slate-900/95",
        isResult: true,
        resultTitle: "THẤT BẠI - SỰ VÔ CẢM LẠNH LÙNG",
        resultColor: "text-amber-400",
        illustration: "assets/scenes/Char_4_Scene_11.webp",
        story: "Vừa quay lưng, Minh nghe tiếng rầm lớn. Lan can gãy, Kiên rơi xuống đất. Cả đời Minh sẽ phải mang nỗi ám ảnh về khoảnh khắc mình có thể cứu bạn nhưng lại chọn bỏ đi.",
        choices: [{ text: "↺ Làm lại bước này", nextScene: "minh_4_1", isUndo: true }]
    },

    // 🌟 [GAME MINH 4]: HOLD - GỒNG LỰC SINH TỬ CỨU MẠNG KIÊN
    "minh_4_2": {
        charName: "MINH (Cảnh 4.2: Tình Thế Ngàn Cân Treo Sợi Tóc)",
        charColor: "text-indigo-400",
        charSprite: "assets/characters/Char_4.webp",
        charEmotion: "think", // 👉 Dùng toàn bộ sức lực và sự tỉnh táo để giữ tay bạn
        sfx: "sfx_heartbeat",
        bgTheme: "border-indigo-500/30 bg-slate-900/95",
        story: "Nghe Minh hét, Kiên giật mình nhìn xuống thấy con ốc lan can bong ra thật. Kiên luống cuống trượt chân, người lộn ngược ra ngoài không trung nhưng Minh đã kịp thời túm chặt lấy cổ tay Kiên.",
        
        minigame: {
            type: "hold",
            duration: 7,
            title: "GỒNG LỰC CỨU MẠNG",
            description: "Nhấn GIỮ CHẶT nút hành động không buông để gồng toàn bộ thể lực kéo tay Kiên, tuyệt đối không thả tay cho tới khi đạt 100%!",
            successScene: "minh_4_3",
            failScene: "minh_4_2_sai_b"
        },

        choices: [
            { text: "👉 Buông một tay ra để lấy điện thoại gọi cấp cứu.", nextScene: "minh_4_2_sai_a" },
            { text: "👉 Cố gắng dùng hết sức một mình kéo Kiên lên.", nextScene: "minh_4_2_sai_b" },
            { text: "👉 Gồng cứng tay giữ chặt, gào thét tụi con trai đang đứng quay clip: 'Bỏ điện thoại xuống phụ tao kéo nó lên nhanh!'.", nextScene: "minh_4_3" }
        ]
    },
    "minh_4_2_sai_a": {
        charName: "MINH (Cảnh 4.2: Thất bại)",
        charColor: "text-rose-500",
        charSprite: "assets/characters/Char_4.webp",
        charEmotion: "cry",
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
        charSprite: "assets/characters/Char_4.webp",
        charEmotion: "cry",
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
        charEmotion: "think", // 👉 Dùng chứng cứ video từ bạn bè để làm rõ sự việc
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
        charSprite: "assets/characters/Char_4.webp",
        charEmotion: "angry", // 👉 Đấm thẳng mặt đối phương trước thầy cô
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
        charSprite: "assets/characters/Char_4.webp",
        charEmotion: "cry",
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
        charSprite: "assets/characters/Char_4.webp",
        charEmotion: "victory", // 👉 Nụ cười tự hào chuẩn men
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
        charEmotion: "think", // 👉 Giữ bình tĩnh trước sự sỉ nhục sở thích cá nhân
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
        charSprite: "assets/characters/Char_4.webp",
        charEmotion: "cry",
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
        charSprite: "assets/characters/Char_4.webp",
        charEmotion: "angry", // 👉 Dùng compa đâm người gây thương tích
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
        charEmotion: "think", // 👉 Dùng chứng cứ hóa đơn để làm rõ trách nhiệm tài sản
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
        charSprite: "assets/characters/Char_4.webp",
        charEmotion: "angry", // 👉 Nhổ bọt, hành xử chợ búa mất văn hóa
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
        charSprite: "assets/characters/Char_4.webp",
        charEmotion: "cry",
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
        charEmotion: "think", // 👉 Dùng suy luận khoa học về dấu vân tay và vết mực
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
        charSprite: "assets/characters/Char_4.webp",
        charEmotion: "angry", // 👉 Gào hét cãi bới trước mặt giáo viên
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
        charSprite: "assets/characters/Char_4.webp",
        charEmotion: "cry",
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
        charEmotion: "normal",
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
        charSprite: "assets/characters/Char_4.webp",
        charEmotion: "cry",
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
        charSprite: "assets/characters/Char_4.webp",
        charEmotion: "angry", // 👉 Đòi hỏi hình phạt quá cực đoan vô lý
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
        charEmotion: "victory", // 👉 Chiến thắng vinh quang tự hào
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
        charEmotion: "think", // 👉 Cân nhắc chuyển đổi tư duy chiến thuật thi đấu
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
        charSprite: "assets/characters/Char_4.webp",
        charEmotion: "cry",
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
        charSprite: "assets/characters/Char_4.webp",
        charEmotion: "angry", // 👉 Chửi thề trên sân thi đấu bị thẻ vàng
        bgTheme: "border-rose-500/80 bg-rose-950/90 animate__shakeX",
        isResult: true,
        resultTitle: "THẤT BẠI - RỐI TRÍ VÔ LÝ",
        resultColor: "text-rose-500",
        illustration: "assets/scenes/Char_4_Scene_13.webp",
        story: "Chửi thề trên sân khiến Trọng tài lập tức rút thẻ Vàng cảnh cáo Minh vì thái độ phi thể thao. Khán giả càng chê cười Minh là cầu thủ kém tắm lại hay cọc.",
        choices: [{ text: "↺ Suy ngẫm và thử lại", nextScene: "minh_man_6", isUndo: true }]
    },

    // 🌟 [MINI-GAME 5: BALANCE - CẢN CƠN GIẬN ĐỂ KHÔNG PHẠM LỖI TRẢ ĐŨA] 🌟
    "minh_6_1": {
        charName: "MINH (Cảnh 6.1: Đòn Thù Độc Ác)",
        charColor: "text-indigo-400",
        charSprite: "assets/characters/Char_4.webp",
        charEmotion: "think", // 👉 Nén đau kiềm chế cơn thịnh nộ không trả đũa
        sfx: "sfx_heartbeat",
        bgTheme: "border-indigo-500/30 bg-slate-900/95",
        story: "Thấy Minh cướp được bóng từ đối phương và chơi quá hay ở vị trí phòng ngự, Đội trưởng đội nhà cay cú. Trong một pha tranh chấp góc phạt góc, Đội trưởng cố tình xoạc bóng bằng gầm giày thẳng vào mắt cá chân Minh khiến Minh ngã gục rách da.",
        
        minigame: {
            type: "balance",
            duration: 6,
            title: "KIỀM CHẾ CƠN GIẬN",
            description: "Cơn thịnh nộ đang kích động bạn đánh trả (Trượt về Đỏ). Bấm nhấp thật nhanh nút 'LÁI VỀ LÝ TRÍ' để giữ tinh thần luôn trong vùng Xanh suốt 6 giây, né Thẻ Đỏ!",
            successScene: "minh_6_2",
            failScene: "minh_6_1_sai_a"
        },

        choices: [
            { text: "👉 Đạp thẳng vào ngực Đội trưởng để trả thù cú xoạc.", nextScene: "minh_6_1_sai_a" },
            { text: "👉 Nén đau tự lết ra khỏi sân, cắn răng chịu đựng vì không muốn làm to chuyện.", nextScene: "minh_6_1_sai_b" },
            { text: "👉 Nằm yên tại chỗ ôm chân, giơ tay gọi lớn báo hiệu Trọng tài và đội cứu thương.", nextScene: "minh_6_2" }
        ]
    },
    "minh_6_1_sai_a": {
        charName: "MINH (Cảnh 6.1: Thất bại)",
        charColor: "text-rose-500",
        charSprite: "assets/characters/Char_4.webp",
        charEmotion: "angry", // 👉 Trả đũa bạo lực bị đuổi khỏi sân
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
        charSprite: "assets/characters/Char_4.webp",
        charEmotion: "cry",
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
        charEmotion: "think", // 👉 Dùng luật bóng đá và y tế để làm rõ sự thiển cận
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
        charSprite: "assets/characters/Char_4.webp",
        charEmotion: "angry", // 👉 Tháo áo ném xuống sân phản đối thiếu kiềm chế
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
        charSprite: "assets/characters/Char_4.webp",
        charEmotion: "cry",
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
        charEmotion: "think", // 👉 Dùng bằng chứng video từ khán đài để định đoạt
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
        charSprite: "assets/characters/Char_4.webp",
        charEmotion: "angry", // 👉 Cười đểu xỉ nhục đối phương
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
        charSprite: "assets/characters/Char_4.webp",
        charEmotion: "cry",
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
        charSprite: "assets/characters/Char_4.webp",
        charEmotion: "victory", // 👉 Nụ cười tự hào chuẩn men
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
        charEmotion: "think", // 👉 Tư duy cẩn trọng, từ chối mở cặp tại chỗ để bảo vệ bằng chứng
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
        charSprite: "assets/characters/Char_4.webp",
        charEmotion: "cry",
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
        charSprite: "assets/characters/Char_4.webp",
        charEmotion: "angry", // 👉 Giằng co cãi lý sai luật với giám thị
        bgTheme: "border-amber-500/50 bg-slate-900/95",
        isResult: true,
        resultTitle: "THẤT BẠI - CÃI LÝ VÔ TÁC DỤNG",
        resultColor: "text-amber-400",
        illustration: "assets/scenes/Char_4_Scene_11.webp",
        story: "Trong nội quy nhà trường, Giám thị CÓ QUYỀN kiểm tra tư trang học sinh khi nghi ngờ vi phạm. Việc giằng co, cãi lý sai luật khiến Minh bị áp giải lên phòng bảo vệ ngay lập tức.",
        choices: [{ text: "↺ Làm lại bước này", nextScene: "minh_man_7", isUndo: true }]
    },

    // 🌟 [MINI-GAME 6: DEBATE - PHẢN BIỆN THÉP TRƯỚC MẶT HIỆU TRƯỞNG] 🌟
    "minh_7_1": {
        charName: "MINH (Cảnh 7.1: Mũi Khoan Trực Diện)",
        charColor: "text-indigo-400",
        charSprite: "assets/characters/Char_4.webp",
        charEmotion: "think", // 👉 Lý trí quyết liệt đòi lấy dấu vân tay trên Vape
        sfx: "sfx_heartbeat",
        bgTheme: "border-indigo-500/30 bg-slate-900/95",
        story: "Tại phòng Ban Giám Hiệu (BGH) có hệ thống camera thu âm, khi mở cặp ra thấy 2 cây Vape, Thầy Hiệu trưởng rất thất vọng: 'Minh, em là trò giỏi mà lại dính vào tệ nạn này sao? Thầy phải gọi Công an và Phụ huynh lên lập biên bản đuổi học'.",
        
        minigame: {
            type: "debate",
            duration: 3.5,
            title: "PHẢN BIỆN THÉP",
            description: "Thầy Hiệu trưởng sắp ký biên bản! Có 3.5 giây phản xạ bấm ngay vào 'Luận Điểm Hợp Pháp' đanh thép nhất để minh hoan!",
            qteOptions: [
              { text: "QUỲ XUỐNG VAN XIN THẦY THA THỨ", correct: false },
              { text: "GÀO LÊN ĐỔ TỘI CHO THẰNG BẢO", correct: false },
              { text: "YÊU CẦU CÔNG AN LẤY DẤU VÂN TAY TRÊN VAPE", correct: true }
            ],
            successScene: "minh_7_2",
            failScene: "minh_7_1_sai_a"
        },

        choices: [
            { text: "👉 Quỳ xuống van xin thầy tha cho mình một lần vì sợ bị bố mẹ đánh.", nextScene: "minh_7_1_sai_a" },
            { text: "👉 Gào lên: 'Là thằng Bảo nhét vào cặp em! Thầy đi mà bắt nó!'.", nextScene: "minh_7_1_sai_b" },
            { text: "👉 Dõng dạc nói: 'Tuyệt vời ạ, thầy hãy gọi Công an ngay lập tức giúp em. Em yêu cầu lấy dấu vân tay trên thân 2 cây Vape này!'.", nextScene: "minh_7_2" }
        ]
    },
    "minh_7_1_sai_a": {
        charName: "MINH (Cảnh 7.1: Thất bại)",
        charColor: "text-amber-400",
        charSprite: "assets/characters/Char_4.webp",
        charEmotion: "cry",
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
        charSprite: "assets/characters/Char_4.webp",
        charEmotion: "angry", // 👉 Gào lên đổ lỗi mù quáng
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
        charEmotion: "think", // 👉 Dứt khoát không khoan nhượng cho cạm bẫy chất cấm
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
        charSprite: "assets/characters/Char_4.webp",
        charEmotion: "cry",
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
        charSprite: "assets/characters/Char_4.webp",
        charEmotion: "angry", // 👉 Tát người trước mặt Hiệu trưởng
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
        charEmotion: "normal",
        bgTheme: "border-indigo-500/30 bg-slate-900/95",
        story: "Hiệu trưởng nhận ra sự bất thường, lập tức nhấc điện thoại gọi Công an phường. Bảo hoảng loạn tột độ, khuỵu gối xuống khóc lóc: 'Thầy ơi tha cho em, là anh Long khối 9 ép em nhét vào cặp Minh để đuổi học nó, em xin lỗi!'.",
        choices: [
            { text: "👉 Chửi bới: 'Tao không tha, tao sẽ kiện cho mày đi tù mọt gông!'.", nextScene: "minh_7_3_sai_a" },
            { text: "👉 Mủi lòng: 'Thôi thầy tha cho bạn ấy, chắc bị ép thật'.", nextScene: "minh_7_3_sai_b" },
            { text: "👉 Lạnh lùng nói: 'Việc xử lý hình sự hay kỷ luật là việc của pháp luật và nhà trường. Tôi chỉ cần sự trong sạch của tôi được chứng minh'.", nextScene: "minh_7_thanh_cong" }
        ]
    },
    "minh_7_3_sai_a": {
        charName: "MINH (Cảnh 7.3: Thất bại)",
        charColor: "text-rose-500",
        charSprite: "assets/characters/Char_4.webp",
        charEmotion: "angry", // 👉 Kiêu ngạo, mạt sát người khác mất hình ảnh
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
        charSprite: "assets/characters/Char_4.webp",
        charEmotion: "cry",
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
        charEmotion: "victory", // 👉 Chiến thắng vinh quang rực rỡ
        bgTheme: "border-indigo-500/80 bg-teal-950/90 animate__pulse",
        isResult: true,
        resultTitle: "CHIẾN THẮNG RỰC RỠ!",
        resultColor: "text-emerald-400",
        illustration: "assets/scenes/Char_4_Scene_14.webp",
        story: "Sự bình tĩnh, hiểu biết pháp luật khoa học (dấu vân tay) đã cứu Minh khỏi một âm mưu thâm độc. Công an vào cuộc, Long 'đại ca' và băng nhóm bị tóm gọn tàn dư. Minh trở thành biểu tượng của sự kiên cường và lý trí thép trong trường học!",
        choices: [{ text: "🏆 Chúc mừng bạn hoàn thành Tuyến MINH", nextScene: "RESET_GAME" }]
    }
};