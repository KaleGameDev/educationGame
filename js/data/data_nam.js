// ==========================================
// TUYẾN 4: NAM - NGƯỜI CHỨNG KIẾN NAM (CẤU TRÚC 7 MÀN ĐA TẦNG - 6 MINI-GAMES ĐỘC QUYỀN)
// Tối ưu 60 FPS | Phối hợp toàn diện 5 Biểu cảm (Normal, Happy, Cry, Angry, Think)
// ==========================================
const DATA_NAM = {
    // ------------------------------------------
    // MÀN 1: GÓC KHUẤT NHÀ VỆ SINH
    // ------------------------------------------
    "nam_man_1": {
        charName: "NAM (Cảnh 1: Góc Khuất)",
        charColor: "text-amber-400",
        charSprite: "assets/characters/Char_3.webp",
        charEmotion: "worried",
        bgTheme: "border-amber-500/30 bg-slate-900/95",
        story: "Giờ ra chơi, nhà vệ sinh nam vắng vẻ. Bạn bước vào và khựng lại khi thấy ba học sinh lớp trên đang khóa trái nửa cánh cửa, dồn một bạn khối dưới vào góc. Một đứa đang dội nước bồn cầu lên người nạn nhân, trong khi hai đứa khác cợt nhả quay phim bằng điện thoại.",
        choices: [
            { text: "👉 Lập tức xông vào can ngăn: 'Tụi mày làm cái trò gì đấy? Thả nó ra ngay!'.", nextScene: "nam_1_sai_a" },
            { text: "👉 Cúi gầm mặt, giả vờ đi vệ sinh rồi lặng lẽ bước ra ngoài coi như không thấy.", nextScene: "nam_1_sai_b" },
            { text: "👉 Lùi lại ra hành lang, đập mạnh vào cánh cửa và hô to: 'Thầy Giám thị đang đi kiểm tra!'.", nextScene: "nam_1_1" }
        ]
    },
    "nam_1_sai_a": {
        charName: "NAM (Cảnh 1: Thất bại)",
        charColor: "text-rose-500",
        charSprite: "assets/characters/Char_3.webp",
        charEmotion: "angry", // 👉 Nóng giận lao vào đánh nhau đơn độc
        bgTheme: "border-rose-500/80 bg-rose-950/90 animate__shakeX",
        isResult: true,
        resultTitle: "THẤT BẠI - BỘC PHÁT KÉM AN TOÀN",
        resultColor: "text-rose-500",
        illustration: "assets/scenes/Char_3_Scene_1.webp",
        story: "Sự trượng nghĩa của bạn rất đáng quý, nhưng đối đầu trực diện một mình với ba kẻ hung hãn trong không gian hẹp là quá nguy hiểm. Chúng lập tức quay sang hành hung bạn. Bạn không cứu được nạn nhân mà còn trở thành người bị hại tiếp theo.",
        choices: [{ text: "↺ Phân tích lại tình huống", nextScene: "nam_man_1", isUndo: true }]
    },
    "nam_1_sai_b": {
        charName: "NAM (Cảnh 1: Thất bại)",
        charColor: "text-amber-400",
        charSprite: "assets/characters/Char_3.webp",
        charEmotion: "cry", // 👉 Hối hận vì hèn nhát
        bgTheme: "border-amber-500/50 bg-slate-900/95",
        isResult: true,
        resultTitle: "THẤT BẠI - SỰ IM LẶNG LÀ ĐỒNG PHẠM",
        resultColor: "text-amber-400",
        illustration: "assets/scenes/Char_3_Scene_1.webp",
        story: "Bạn chọn cách an toàn, nhưng sự im lặng của người chứng kiến chính là vũ khí tàn nhẫn nhất đâm vào nạn nhân. Đoạn clip nhục nhã kia sẽ bị phát tán, và cậu bé ấy có thể sẽ chịu sang chấn tâm lý cả đời vì nghĩ rằng thế giới này không ai muốn cứu mình.",
        choices: [{ text: "↺ Phân tích lại tình huống", nextScene: "nam_man_1", isUndo: true }]
    },

    "nam_1_1": {
        charName: "NAM (Cảnh 1.1: Hiện Trường)",
        charColor: "text-amber-400",
        charSprite: "assets/characters/Char_3.webp",
        charEmotion: "think", // 👉 Tư duy cẩn trọng, quan sát hiện trường sau khi giải vây
        bgTheme: "border-amber-500/30 bg-slate-900/95",
        story: "Tiếng hô 'Giám thị' làm bọn chúng giật mình, vội vã tắt điện thoại và chạy tán loạn ra ngoài. Nạn nhân ngồi sụp ở góc tường, cả người ướt sũng và run rẩy. Hùng - kẻ cầm đầu ngoái lại, phát hiện ra không có thầy cô nào cả. Hắn lườm bạn đầy sát khí.",
        choices: [
            { text: "👉 Rút điện thoại ra dọa: 'Tao quay clip lại hết rồi, liệu hồn mà cút đi'.", nextScene: "nam_1_1_sai_a" },
            { text: "👉 Thấy Hùng lườm, bạn sợ hãi quay lưng bỏ chạy thật nhanh về lớp.", nextScene: "nam_1_1_sai_b" },
            { text: "👉 Phớt lờ Hùng, tiến thẳng đến chỗ nạn nhân, cởi áo khoác trùm cho em ấy.", nextScene: "nam_1_2" }
        ]
    },
    "nam_1_1_sai_a": {
        charName: "NAM (Cảnh 1.1: Thất bại)",
        charColor: "text-rose-500",
        charSprite: "assets/characters/Char_3.webp",
        charEmotion: "angry", // 👉 Đe dọa suông làm kích động đối phương
        bgTheme: "border-rose-500/80 bg-rose-950/90 animate__shakeX",
        isResult: true,
        resultTitle: "THẤT BẠI - KÍCH ĐỘNG KẺ XẤU",
        resultColor: "text-rose-500",
        illustration: "assets/scenes/Char_3_Scene_3.webp",
        story: "Lời đe dọa không có tính răn đe mà chỉ kích động sự hung hãn. Hùng lao tới giật phăng chiếc điện thoại của bạn đập vỡ nát để phi tang. Thiệt hại về tài sản và thân thể của bạn là minh chứng cho việc xử lý tình huống thiếu khôn khéo.",
        choices: [{ text: "↺ Phân tích lại tình huống", nextScene: "nam_1_1", isUndo: true }]
    },
    "nam_1_1_sai_b": {
        charName: "NAM (Cảnh 1.1: Thất bại)",
        charColor: "text-amber-400",
        charSprite: "assets/characters/Char_3.webp",
        charEmotion: "cry",
        bgTheme: "border-amber-500/50 bg-slate-900/95",
        isResult: true,
        resultTitle: "THẤT BẠI - NỬA VỜI",
        resultColor: "text-amber-400",
        illustration: "assets/scenes/Char_3_Scene_1.webp",
        story: "Bạn đã giúp nạn nhân thoát khỏi đòn roi tức thời, nhưng lại bỏ mặc cậu ấy trong cơn hoảng loạn tột độ. Không có sự hỗ trợ tâm lý ngay lúc đó, cậu bé vẫn chìm trong nỗi ám ảnh sợ hãi tột cùng.",
        choices: [{ text: "↺ Phân tích lại tình huống", nextScene: "nam_1_1", isUndo: true }]
    },

    // 🌟 [MINI-GAME 1: STEALTH - QUAY LÉN BẰNG CHỨNG TRƯỚC MẶT HÙNG] 🌟
    "nam_1_2": {
        charName: "NAM (Cảnh 1.2: Đối Chất)",
        charColor: "text-amber-400",
        charSprite: "assets/characters/Char_3.webp",
        charEmotion: "think", // 👉 Dùng sự tỉnh táo và tập trung để quay lén bằng chứng
        sfx: "sfx_heartbeat",
        bgTheme: "border-amber-500/30 bg-slate-900/95",
        story: "Cậu bé lớp 7 bám lấy áo bạn khóc nấc, kể rằng đã bị tống tiền suốt 1 tháng nay. Hùng đứng ngoài cửa nhặt một cục gạch nhỏ ném mạnh về phía chân bạn, gằn giọng: 'Mày muốn bao đồng hả thằng ranh? Cẩn thận cái mạng mày đấy'.",
        
        minigame: {
            type: "stealth",
            duration: 8,
            title: "QUAY LÉN BẰNG CHỨNG",
            description: "Nhấn GIỮ để ghi âm lời đe dọa. NHƯNG khi hệ thống nháy ĐỎ (Hùng nhìn sang), phải lập tức BUÔNG TAY RA NGAY kẻo bị phát hiện!",
            successScene: "nam_1_3",
            failScene: "nam_1_2_sai_a"
        },

        choices: [
            { text: "👉 Nổi điên nhặt cục gạch ném trả lại: 'Mày ngon thì nhào vô đây!'.", nextScene: "nam_1_2_sai_a" },
            { text: "👉 Dìu em học sinh đứng dậy, giữ thái độ im lặng và đi thẳng tới phòng Đoàn trường.", nextScene: "nam_1_3" }
        ]
    },
    "nam_1_2_sai_a": {
        charName: "NAM (Cảnh 1.2: Thất bại)",
        charColor: "text-rose-500",
        charSprite: "assets/characters/Char_3.webp",
        charEmotion: "angry", // 👉 Ném gạch trả đũa biến mình thành kẻ ẩu đả
        bgTheme: "border-rose-500/80 bg-rose-950/90 animate__shakeX",
        isResult: true,
        resultTitle: "THẤT BẠI - RƠI VÀO BẪY BẠO LỰC",
        resultColor: "text-rose-500",
        illustration: "assets/scenes/Char_3_Scene_3.webp",
        story: "Hành động ném trả của bạn đã biến bạn từ 'người đi can ngăn' thành 'kẻ tham gia ẩu đả'. Hùng chớp lấy cơ hội hô hoán bạn đánh người. Nhà trường không thể bênh vực một học sinh dùng bạo lực để giải quyết bạo lực.",
        choices: [{ text: "↺ Phân tích lại tình huống", nextScene: "nam_1_2", isUndo: true }]
    },

    "nam_1_3": {
        charName: "NAM (Cảnh 1.3: Cú Chốt)",
        charColor: "text-amber-400",
        charSprite: "assets/characters/Char_3.webp",
        charEmotion: "think", // 👉 Lý trí đưa ra bằng chứng xác đáng
        bgTheme: "border-amber-500/30 bg-slate-900/95",
        story: "Tại văn phòng Đoàn, Hùng bị gọi lên đối chất. Hắn tỏ vẻ ngây thơ: 'Thầy ơi em thề em chỉ trêu em nó xíu thôi, tự nhiên bạn Nam vu khống em dội nước với tống tiền'. Thầy giáo nghiêm mặt nhìn Nam: 'Sự việc rất nghiêm trọng, em có bằng chứng gì không?'.",
        choices: [
            { text: "👉 Khẳng định chắc nịch: 'Chính mắt em nhìn thấy, thầy phải tin em chứ!'.", nextScene: "nam_1_3_sai_a" },
            { text: "👉 Rút điện thoại ra: 'Lúc đứng ở cửa em đã kịp bật ghi âm đoạn tụi nó đe dọa vòi tiền, thầy nghe thử ạ'.", nextScene: "nam_1_thanh_cong" }
        ]
    },
    "nam_1_3_sai_a": {
        charName: "NAM (Cảnh 1.3: Thất bại)",
        charColor: "text-amber-400",
        charSprite: "assets/characters/Char_3.webp",
        charEmotion: "cry",
        bgTheme: "border-amber-500/50 bg-slate-900/95",
        isResult: true,
        resultTitle: "THẤT BẠI - THIẾU CƠ SỞ CHỨNG MINH",
        resultColor: "text-amber-400",
        illustration: "assets/scenes/Char_3_Scene_1.webp",
        story: "Dù bạn nói thật, nhưng theo nguyên tắc, nhà trường không thể kỷ luật học sinh chỉ dựa trên lời khai một phía không có bằng chứng. Hùng thoát tội và bắt đầu lên kế hoạch trả thù bạn vì tội 'nhiều chuyện'.",
        choices: [{ text: "↺ Phân tích lại tình huống", nextScene: "nam_1_3", isUndo: true }]
    },
    "nam_1_thanh_cong": {
        charName: "NAM (Kết Quả Màn 1)",
        charColor: "text-emerald-400",
        charSprite: "assets/characters/Char_3.webp",
        charEmotion: "victory", // 👉 Nụ cười tự hào chiến thắng
        bgTheme: "border-amber-500/80 bg-blue-950/90 animate__pulse",
        isResult: true,
        resultTitle: "THÀNH CÔNG - SỰ CAN THIỆP THÔNG MINH",
        resultColor: "text-emerald-400",
        illustration: "assets/scenes/Char_3_Scene_2.webp",
        story: "Đoạn ghi âm rõ ràng đã khiến Hùng hết đường chối cãi. Hồ sơ bị chuyển sang công an phường vì hành vi tống tiền. Cậu bé lớp 7 vẫn cần thời gian dài để vượt qua ám ảnh tâm lý, nhưng em ấy biết rằng ở trường vẫn còn những người bảo vệ lẽ phải như bạn.",
        choices: [{ text: "➔ Chuyển sang Màn 2: Hội Anh Em", nextScene: "nam_man_2" }]
    },

    // ------------------------------------------
    // MÀN 2: LÔI KÉO VÀO HỘI ANH EM
    // ------------------------------------------
    "nam_man_2": {
        charName: "NAM (Cảnh 2: Hội 'Anh Em')",
        charColor: "text-amber-400",
        charSprite: "assets/characters/Char_3.webp",
        charEmotion: "think", // 👉 Cân nhắc ranh giới pháp luật của từ "anh em"
        bgTheme: "border-amber-500/30 bg-slate-900/95",
        story: "Nhóm bạn thân hay đi đá bóng cùng Nam rủ rê: 'Chiều nay đi dằn mặt thằng Minh lớp bên, nó dám nhìn đểu đại ca. Mày đi theo đứng vòng ngoài canh chừng thôi, không cần động tay, đi cho có đội hình anh em'.",
        choices: [
            { text: "👉 Nể tình anh em bấy lâu, đồng ý đi theo nhưng quả quyết mình sẽ không đánh ai.", nextScene: "nam_2_sai_a" },
            { text: "👉 Tỏ ra hào hứng nhận lời, vỗ ngực bảo đảm sẽ đi cùng để thị uy sức mạnh của nhóm.", nextScene: "nam_2_sai_c" },
            { text: "👉 Từ chối thẳng thừng: 'Tao không tham gia mấy trò hội đồng rác rưởi này, nó chả chứng tỏ được gì cả'.", nextScene: "nam_2_1" }
        ]
    },
    "nam_2_sai_a": {
        charName: "NAM (Cảnh 2: Thất bại)",
        charColor: "text-rose-500",
        charSprite: "assets/characters/Char_3.webp",
        charEmotion: "cry",
        bgTheme: "border-rose-500/80 bg-rose-950/90 animate__shakeX",
        isResult: true,
        resultTitle: "THẤT BẠI - TỘI DANH TÒNG PHẠM",
        resultColor: "text-rose-500",
        illustration: "assets/scenes/Char_3_Scene_3.webp",
        story: "Bạn nghĩ mình không đánh là vô tội? Theo pháp luật, hành vi 'đứng canh chừng' và 'tạo đội hình thị uy' được khép vào tội đồng phạm giúp sức tích cực. Bạn bị triệu tập lên đồn công an và lưu vết đen vào học bạ chỉ vì hai chữ 'nể nang'.",
        choices: [{ text: "↺ Phân tích lại tình huống", nextScene: "nam_man_2", isUndo: true }]
    },
    "nam_2_sai_c": {
        charName: "NAM (Cảnh 2: Thất bại)",
        charColor: "text-rose-500",
        charSprite: "assets/characters/Char_3.webp",
        charEmotion: "angry", // 👉 Hào hứng tham gia bạo lực hội đồng
        bgTheme: "border-rose-500/80 bg-rose-950/90 animate__shakeX",
        isResult: true,
        resultTitle: "THẤT BẠI - SA NGÃ",
        resultColor: "text-rose-500",
        illustration: "assets/scenes/Char_3_Scene_3.webp",
        story: "Sự bốc đồng hám danh tiếng ảo đã biến bạn thành một mảnh ghép của tội ác. Nạn nhân bị thương nặng phải nhập viện. Tương lai học tập của bạn hoàn toàn sụp đổ sau song sắt trại giáo dưỡng.",
        choices: [{ text: "↺ Phân tích lại tình huống", nextScene: "nam_man_2", isUndo: true }]
    },

    // 🌟 [MINI-GAME 2: SHIELD - CHẮN ĐÒN VÂY HÃM TỪ 3 HƯỚNG] 🌟
    "nam_2_1": {
        charName: "NAM (Cảnh 2.1: Bị Cô Lập)",
        charColor: "text-amber-400",
        charSprite: "assets/characters/Char_3.webp",
        charEmotion: "think", // 👉 Dùng sự tỉnh táo để gạt đòn vây hãm từ 3 hướng
        sfx: "sfx_heartbeat",
        bgTheme: "border-amber-500/30 bg-slate-900/95",
        story: "Lời từ chối phũ phàng khiến tên trưởng nhóm nổi điên. Hắn túm cổ áo bạn: 'À, thằng Nam nay muốn làm thánh sống à? Tụi bay, trước khi xử thằng Minh, dạy cho thằng phản bội này một bài học!'. Bốn đứa bắt đầu siết vòng vây.",
        
        minigame: {
            type: "shield",
            duration: 8,
            target: 5,
            title: "CHẮN ĐÒN VÂY HÃM",
            description: "Hội 'anh em' đang lao vào khiêu khích từ 3 hướng [TRÁI - GIỮA - PHẢI]. Phản xạ bấm ngay vào hướng đang báo động đỏ để gạt đòn, giữ vững thế chủ động!",
            successScene: "nam_2_thanh_cong",
            failScene: "nam_2_sai_c"
        },

        choices: [
            { text: "👉 Bất ngờ vung tay đấm thẳng vào mặt tên trưởng nhóm để giành thế chủ động.", nextScene: "nam_2_sai_c" },
            { text: "👉 Hất tay hắn ra và lùi nhanh về phía nhà xe đông học sinh đang lấy xe.", nextScene: "nam_2_2" },
            { text: "👉 Rút điện thoại bật Livestream chĩa thẳng vào mặt chúng: 'Ngon thì đánh tao trên sóng trực tiếp này!'.", nextScene: "nam_2_thanh_cong" }
        ]
    },
    "nam_2_2": {
        charName: "NAM (Cảnh 2.2: Bị Dồn Vào Góc)",
        charColor: "text-amber-400",
        charSprite: "assets/characters/Char_3.webp",
        charEmotion: "think", // 👉 Tìm cách kêu cứu khôn ngoan khi bị dồn góc
        bgTheme: "border-amber-500/30 bg-slate-900/95",
        story: "Bạn chạy thoát nhưng xui xẻo rẽ nhầm vào hẻm cụt ngay sát cổng sau trường. Bọn chúng đuổi kịp, bẻ đốt ngón tay răng rắc tiến tới.",
        choices: [
            { text: "👉 Hạ giọng cầu xin: 'Thôi tao xin lỗi, tao đùa tí, chiều nay tao đi với tụi mày là được chứ gì'.", nextScene: "nam_2_sai_a" },
            { text: "👉 Hô hoán thật to: 'Chú bảo vệ ơi! Có trộm cạy khóa xe!'.", nextScene: "nam_2_thanh_cong" }
        ]
    },
    "nam_2_thanh_cong": {
        charName: "NAM (Kết Quả Màn 2)",
        charColor: "text-emerald-400",
        charSprite: "assets/characters/Char_3.webp",
        charEmotion: "victory", // 👉 Nụ cười đắc thắng khi dùng công nghệ tự vệ
        bgTheme: "border-amber-500/80 bg-blue-950/90 animate__pulse",
        isResult: true,
        resultTitle: "THÀNH CÔNG - SỰ NHẠY BÉN CÔNG NGHỆ",
        resultColor: "text-emerald-400",
        illustration: "assets/scenes/Char_3_Scene_4.webp",
        story: "Ống kính Livestream rọi thẳng mặt khiến cả bọn chùn bước vì sợ để lại bằng chứng rành rành trên mạng. Chúng hậm hực bỏ đi. Bạn bảo vệ được sự trong sạch của bản thân mà không cần dùng đến một cú đấm nào.",
        choices: [{ text: "➔ Chuyển sang Màn 3: Bạo Lực Mạng", nextScene: "nam_man_3" }]
    },

    // ------------------------------------------
    // MÀN 3: BẠO LỰC MẠNG VÀ TIN ĐỒN
    // ------------------------------------------
    "nam_man_3": {
        charName: "NAM (Cảnh 3: Không Gian Mạng Toxic)",
        charColor: "text-amber-400",
        charSprite: "assets/characters/Char_3.webp",
        charEmotion: "think", // 👉 Cân nhắc hậu quả của bạo lực mạng trên Discord
        bgTheme: "border-amber-500/30 bg-slate-900/95",
        story: "Tối hôm đó, server Discord của lớp bùng nổ tin nhắn. Nhóm con trai đang thi nhau chế ảnh và lôi hoàn cảnh gia đình khó khăn của Khang ra làm trò đùa. Chúng liên tục tag tên Nam: 'Anh em vào thả haha cho vui nhà vui cửa nào'.",
        choices: [
            { text: "👉 Thấy khó chịu nhưng không muốn rước họa vào thân, tắt máy đi ngủ.", nextScene: "nam_3_sai_c" },
            { text: "👉 Nổi máu anh hùng chat lại: 'Tụi mày bớt sống lỗi đi, đem gia đình người ta ra đùa không thấy dơ à?'.", nextScene: "nam_3_1" },
            { text: "👉 Thả một biểu tượng haha hùa theo để không bị chúng nó chú ý rồi lơ đi.", nextScene: "nam_3_sai_a" }
        ]
    },
    "nam_3_sai_c": {
        charName: "NAM (Cảnh 3: Kết Quả)",
        charColor: "text-amber-400",
        charSprite: "assets/characters/Char_3.webp",
        charEmotion: "cry", // 👉 Hối hận vì ngó lơ nạn nhân
        bgTheme: "border-amber-500/50 bg-slate-900/95",
        isResult: true,
        resultTitle: "THẤT BẠI - BÀN TAY VÔ HÌNH",
        resultColor: "text-amber-400",
        illustration: "assets/scenes/Char_3_Scene_5.webp",
        story: "Bạn nhắm mắt làm ngơ, nhưng Khang thì không thể. Sự cợt nhả kéo dài thâu đêm khiến Khang rơi vào trầm cảm nặng. Đôi khi, tội ác chiến thắng chỉ vì những người tốt chọn cách không làm gì cả.",
        choices: [{ text: "↺ Phân tích lại tình huống", nextScene: "nam_man_3", isUndo: true }]
    },
    "nam_3_sai_a": {
        charName: "NAM (Cảnh 3: Kết Quả)",
        charColor: "text-rose-500",
        charSprite: "assets/characters/Char_3.webp",
        charEmotion: "cry",
        bgTheme: "border-rose-500/80 bg-rose-950/90 animate__shakeX",
        isResult: true,
        resultTitle: "THẤT BẠI - KẺ THÚ ÁC VÔ DANH",
        resultColor: "text-rose-500",
        illustration: "assets/scenes/Char_3_Scene_5.webp",
        story: "Bạn nghĩ một cái 'haha' vô thưởng vô phạt sẽ giúp bạn yên ổn. Nhưng đối với nạn nhân, mỗi lượt tương tác của bạn chính là một nhát dao khẳng định cả thế giới đang chống lại cậu ấy. Bạn đã chính thức gia nhập phe bạo lực.",
        choices: [{ text: "↺ Phân tích lại tình huống", nextScene: "nam_man_3", isUndo: true }]
    },

    // 🌟 [MINI-GAME 3: BALANCE - LÁI TÂM LÝ ĐÁM ĐÔNG VỀ LÝ TRÍ] 🌟
    "nam_3_1": {
        charName: "NAM (Cảnh 3.1: Đối Đầu Giữa Tâm Bão)",
        charColor: "text-amber-400",
        charSprite: "assets/characters/Char_3.webp",
        charEmotion: "think", // 👉 Dùng lý trí cản làn sóng toxic trên mạng
        sfx: "sfx_heartbeat",
        bgTheme: "border-amber-500/30 bg-slate-900/95",
        story: "Lời nhắn của bạn lập tức chọc giận cả nhóm. Hàng chục tin nhắn chửi bới dội ngược lại bạn: 'Nam nay làm giáo viên đạo đức mạng à?', 'Mày ngon thì mai ra cổng trường'. Kênh chat đang ở đỉnh điểm căng thẳng.",
        
        minigame: {
            type: "balance",
            duration: 6,
            title: "CẢN LÀN SÓNG TOXIC",
            description: "Kênh Discord đang bị kích động trượt thẳng về BẠO LỰC (Đỏ). Bấm nhấp thật nhanh vào nút 'LÁI VỀ LÝ TRÍ' để giữ kim luôn trong vùng Xanh suốt 6 giây!",
            successScene: "nam_3_2",
            failScene: "nam_3_1_sai_a"
        },

        choices: [
            { text: "👉 Cap màn hình toàn bộ đoạn chat, âm thầm gửi report cho quản trị viên Discord và giáo viên chủ nhiệm.", nextScene: "nam_3_2" },
            { text: "👉 Bật Unikey gõ phím tốc độ cao, chửi tay đôi thâu đêm với cả nhóm để bảo vệ Khang.", nextScene: "nam_3_1_sai_a" }
        ]
    },
    "nam_3_1_sai_a": {
        charName: "NAM (Cảnh 3.1: Kết Quả)",
        charColor: "text-rose-500",
        charSprite: "assets/characters/Char_3.webp",
        charEmotion: "angry", // 👉 Chửi tay đôi trên mạng làm bùng nổ bạo lực
        bgTheme: "border-rose-500/80 bg-rose-950/90 animate__shakeX",
        isResult: true,
        resultTitle: "THẤT BẠI - BỊ CUỐN VÀO VŨNG BÙN",
        resultColor: "text-rose-500",
        illustration: "assets/scenes/Char_3_Scene_5.webp",
        story: "Việc chửi tay đôi trên mạng với một đám đông là vô nghĩa. Bạn không những không bảo vệ được Khang mà còn vi phạm bộ quy tắc ứng xử trên mạng. Nhà trường phát hiện và đình chỉ học cả bạn lẫn nhóm kia vì tội dùng ngôn từ đả kích.",
        choices: [{ text: "↺ Phân tích lại tình huống", nextScene: "nam_3_1", isUndo: true }]
    },

    "nam_3_2": {
        charName: "NAM (Cảnh 3.2: Sự Trả Thù Hèn Hạ)",
        charColor: "text-amber-400",
        charSprite: "assets/characters/Char_3.webp",
        charEmotion: "think", // 👉 Dùng bằng chứng log lịch sử để tự minh hoan
        bgTheme: "border-amber-500/30 bg-slate-900/95",
        story: "Nhờ bằng chứng của bạn, giáo viên đã can thiệp và cảnh cáo cả nhóm. Tức tối, bọn chúng lập một tài khoản Facebook giả mạo tên bạn, dùng ảnh bạn đi bình luận bôi nhọ danh dự các thầy cô trong trường.",
        choices: [
            { text: "👉 Đăng ngay một bài đính chính trên trang cá nhân kèm log lịch sử hoạt động để chứng minh mình bị giả mạo.", nextScene: "nam_3_thanh_cong" },
            { text: "👉 Sợ hãi khóa Facebook, im lặng chờ sóng gió qua đi.", nextScene: "nam_3_2_sai_a" }
        ]
    },
    "nam_3_2_sai_a": {
        charName: "NAM (Cảnh 3.2: Kết Quả)",
        charColor: "text-rose-500",
        charSprite: "assets/characters/Char_3.webp",
        charEmotion: "cry",
        bgTheme: "border-rose-500/80 bg-rose-950/90 animate__shakeX",
        isResult: true,
        resultTitle: "THẤT BẠI - TÌNH NGAY LÝ GIAN",
        resultColor: "text-rose-500",
        illustration: "assets/scenes/Char_3_Scene_6.webp",
        story: "Hành động khóa tài khoản và im lặng của bạn bị mọi người hiểu nhầm là 'có tật giật mình'. Tin đồn lan xa, bạn mất đi lòng tin của thầy cô và bị phạt oan ức trong khi kẻ đứng sau vẫn nhởn nhơ.",
        choices: [{ text: "↺ Phân tích lại tình huống", nextScene: "nam_3_2", isUndo: true }]
    },
    "nam_3_thanh_cong": {
        charName: "NAM (Kết Quả Màn 3)",
        charColor: "text-emerald-400",
        charSprite: "assets/characters/Char_3.webp",
        charEmotion: "victory", // 👉 Chiến thắng vinh quang trước bạo lực mạng
        bgTheme: "border-amber-500/80 bg-blue-950/90 animate__pulse",
        isResult: true,
        resultTitle: "THÀNH CÔNG - SỰ THẬT ĐƯỢC BẢO VỆ",
        resultColor: "text-emerald-400",
        illustration: "assets/scenes/Char_3_Scene_6.webp",
        story: "Việc xử lý minh bạch và nhanh chóng bằng bằng chứng số liệu đã giúp bạn lật tẩy âm mưu hèn hạ. Nhà trường tìm ra IP kẻ giả mạo và trừng trị thích đáng. Bạo lực mạng không thể đánh gục những cái đầu lạnh.",
        choices: [{ text: "➔ Chuyển sang Màn 4: Đồng Tiền Nhơ Bẩn", nextScene: "nam_man_4" }]
    },

    // ------------------------------------------
    // MÀN 4: ĐỒNG TIỀN NHƠ BẨN
    // ------------------------------------------
    "nam_man_4": {
        charName: "NAM (Cảnh 4: Góc Căng Tin)",
        charColor: "text-amber-400",
        charSprite: "assets/characters/Char_3.webp",
        charEmotion: "think", // 👉 Tư duy đồng hành bảo vệ bạn thân bị trấn lột
        bgTheme: "border-amber-500/30 bg-slate-900/95",
        story: "Mua nước ở căng tin, Nam bắt gặp người bạn thân tên Tuấn đang lén lút đưa tờ 200 ngàn cho một đàn anh lớp 9. Ánh mắt Tuấn đầy sợ hãi. Lát sau, Tuấn thú nhận bị nhóm này ép nộp 'phí bảo kê' mỗi tuần, nếu không sẽ bị chặn đánh.",
        choices: [
            { text: "👉 Trách móc: 'Trời ơi đàn ông con trai sao mày hèn vậy? Cứ đưa tiền nó làm gì?'.", nextScene: "nam_4_sai_a" },
            { text: "👉 Thương bạn, đưa cho Tuấn mượn thêm tiền để nộp cho qua chuyện tuần này.", nextScene: "nam_4_sai_b" },
            { text: "👉 Chặn Tuấn lại, quả quyết: 'Việc này không thể nhịn được, tan học tao đi cùng mày'.", nextScene: "nam_4_1" }
        ]
    },
    "nam_4_sai_a": {
        charName: "NAM (Cảnh 4: Kết Quả)",
        charColor: "text-rose-500",
        charSprite: "assets/characters/Char_3.webp",
        charEmotion: "angry", // 👉 Trách móc gay gắt làm bạn tổn thương
        bgTheme: "border-rose-500/80 bg-rose-950/90 animate__shakeX",
        isResult: true,
        resultTitle: "THẤT BẠI - TỔN THƯƠNG NGƯỜI ĐÃ VỠ",
        resultColor: "text-rose-500",
        illustration: "assets/scenes/Char_3_Scene_7.webp",
        story: "Lời phán xét 'yếu đuối' của bạn chẳng khác nào cú tát cuối cùng cắt đứt hy vọng của Tuấn. Thay vì tìm được người đồng hành, cậu ấy lại nhận về sự chê trách. Tuấn hoàn toàn cô độc và có những suy nghĩ tiêu cực mạo hiểm.",
        choices: [{ text: "↺ Phân tích lại tình huống", nextScene: "nam_man_4", isUndo: true }]
    },
    "nam_4_sai_b": {
        charName: "NAM (Cảnh 4: Kết Quả)",
        charColor: "text-amber-400",
        charSprite: "assets/characters/Char_3.webp",
        charEmotion: "cry",
        bgTheme: "border-amber-500/50 bg-slate-900/95",
        isResult: true,
        resultTitle: "THẤT BẠI - NUÔI DƯỠNG LÒNG THAM",
        resultColor: "text-amber-400",
        illustration: "assets/scenes/Char_3_Scene_8.webp",
        story: "Tiền của bạn chỉ giải quyết được sự sợ hãi nhất thời nhưng lại biến Tuấn thành 'con mồi béo bở' vĩnh viễn. Lần sau, bọn tống tiền sẽ đòi số tiền gấp đôi. Sự giúp đỡ sai cách chính là liều thuốc độc.",
        choices: [{ text: "↺ Phân tích lại tình huống", nextScene: "nam_man_4", isUndo: true }]
    },

    // 🌟 [MINI-GAME 4: STEALTH - GHI ÂM TỐNG TIỀN TRONG TÚI QUẦN] 🌟
    "nam_4_1": {
        charName: "NAM (Cảnh 4.1: Chặn Đường)",
        charColor: "text-amber-400",
        charSprite: "assets/characters/Char_3.webp",
        charEmotion: "think", // 👉 Tỉnh táo bấm ghi âm bí mật trong túi quần
        sfx: "sfx_heartbeat",
        bgTheme: "border-amber-500/30 bg-slate-900/95",
        story: "Tan học, Nam quyết định đi cùng Tuấn. Vừa ra khỏi cổng chừng 200 mét, nhóm tống tiền đã chặn đầu xe. Tên đại ca nhếch mép: 'Thằng Tuấn nay thuê cả vệ sĩ cơ à? Mày rảnh thì nộp luôn phần của mày đi Nam'.",
        
        minigame: {
            type: "stealth",
            duration: 7,
            title: "GHI ÂM TỐNG TIỀN",
            description: "Nhấn GIỮ để ghi âm trong túi quần. NHƯNG khi tên đại ca ngó sang (hệ thống nháy ĐỎ), lập tức BUÔNG TAY RA NGAY kẻo bị lục soát!",
            successScene: "nam_4_2",
            failScene: "nam_4_1_sai_a"
        },

        choices: [
            { text: "👉 Kéo Tuấn lên xe đạp rồ ga tông thẳng vào đám chặn đường để tẩu thoát.", nextScene: "nam_4_1_sai_a" },
            { text: "👉 Bí mật ấn nút ghi âm trong túi quần, rồi cố tình hỏi lớn: 'Các anh định trấn lột tiền của học sinh ngay giữa ban ngày à?'.", nextScene: "nam_4_2" }
        ]
    },
    "nam_4_1_sai_a": {
        charName: "NAM (Cảnh 4.1: Kết Quả)",
        charColor: "text-rose-500",
        charSprite: "assets/characters/Char_3.webp",
        charEmotion: "cry",
        bgTheme: "border-rose-500/80 bg-rose-950/90 animate__shakeX",
        isResult: true,
        resultTitle: "THẤT BẠI - MANH ĐỘNG LÀ TAI NẠN",
        resultColor: "text-rose-500",
        illustration: "assets/scenes/Char_3_Scene_8.webp",
        story: "Việc rồ ga đâm thẳng khiến xe của bạn mất lái và ngã nhào. Bọn chúng nhân cơ hội lao vào hành hung cả hai dã man trước khi cướp luôn chiếc cặp của Tuấn. Đôi khi sự bốc đồng phải trả giá bằng cả máu và nước mắt.",
        choices: [{ text: "↺ Phân tích lại tình huống", nextScene: "nam_4_1", isUndo: true }]
    },

    "nam_4_2": {
        charName: "NAM (Cảnh 4.2: Cạm Bẫy Lời Nói)",
        charColor: "text-amber-400",
        charSprite: "assets/characters/Char_3.webp",
        charEmotion: "think", // 👉 Nhanh trí vẫy tay kêu gọi tốp cờ đỏ hỗ trợ
        bgTheme: "border-amber-500/30 bg-slate-900/95",
        story: "Tên đại ca cười phá lên, vô tình lọt vào bẫy ghi âm: 'Trấn lột thì sao? Ở cái trường này luật là của tao'. Bất chợt, một tốp cờ đỏ của nhà trường đạp xe ngang qua.",
        choices: [
            { text: "👉 Im lặng chờ tốp cờ đỏ đi khuất rồi mới nộp file ghi âm cho công an sau.", nextScene: "nam_4_2_sai_a" },
            { text: "👉 Vẫy tay gọi lớn tốp cờ đỏ: 'Các bạn ơi vào đây giúp một tay, có người chặn đường tống tiền!'.", nextScene: "nam_4_thanh_cong" }
        ]
    },
    "nam_4_2_sai_a": {
        charName: "NAM (Cảnh 4.2: Kết Quả)",
        charColor: "text-amber-400",
        charSprite: "assets/characters/Char_3.webp",
        charEmotion: "cry",
        bgTheme: "border-amber-500/50 bg-slate-900/95",
        isResult: true,
        resultTitle: "THẤT BẠI - BỎ LỠ THỜI CƠ",
        resultColor: "text-amber-400",
        illustration: "assets/scenes/Char_3_Scene_7.webp",
        story: "Bạn đã có bằng chứng, nhưng lại bỏ lỡ cơ hội kêu gọi sự trợ giúp an toàn ngay lập tức. Sau khi tốp cờ đỏ đi khuất, nhóm tống tiền lập tức ép bạn xóa file và đánh cảnh cáo cả hai.",
        choices: [{ text: "↺ Phân tích lại tình huống", nextScene: "nam_4_2", isUndo: true }]
    },
    "nam_4_thanh_cong": {
        charName: "NAM (Kết Quả Màn 4)",
        charColor: "text-emerald-400",
        charSprite: "assets/characters/Char_3.webp",
        charEmotion: "victory", // 👉 Nụ cười chiến thắng trượng nghĩa
        bgTheme: "border-amber-500/80 bg-blue-950/90 animate__pulse",
        isResult: true,
        resultTitle: "THÀNH CÔNG - SỰ QUẢ CẢM VÀ TRÍ TUỆ",
        resultColor: "text-emerald-400",
        illustration: "assets/scenes/Char_3_Scene_8.webp",
        story: "Tiếng gọi của bạn cùng file ghi âm rõ ràng đã tóm gọn nhóm bắt nạt tại trận. Dù Tuấn vẫn còn run rẩy và cần thời gian để tin tưởng vào sự an toàn, nhưng tình bạn của hai người đã trở nên gắn kết không thể phá vỡ.",
        choices: [{ text: "➔ Chuyển sang Màn 5: Lời Cám Dỗ", nextScene: "nam_man_5" }]
    },

    // ------------------------------------------
    // MÀN 5: LỜI CÁM DỖ ĐỘC HẠI
    // ------------------------------------------
    "nam_man_5": {
        charName: "NAM (Cảnh 5: Cái Bẫy Quyền Lực)",
        charColor: "text-amber-400",
        charSprite: "assets/characters/Char_3.webp",
        charEmotion: "think", // 👉 Dùng lý trí từ chối gia nhập nhóm quyền lực ngầm
        bgTheme: "border-amber-500/30 bg-slate-900/95",
        story: "Những hành động trượng nghĩa khiến Nam vô tình được phe 'Cool Boy' (nhóm nam sinh quyền lực ngầm) để mắt tới. Chúng rủ Nam vào nhóm, nhưng điều kiện gia nhập là phải úp sọt rác lên đầu một cậu bạn mọt sách yếu ớt để 'chứng minh đẳng cấp'.",
        choices: [
            { text: "👉 Gia nhập và làm theo. Làm kẻ đi bắt nạt vẫn an toàn hơn làm người bị bắt nạt.", nextScene: "nam_5_sai_a" },
            { text: "👉 Giả vờ đồng ý gia nhập, bảo tụi nó đi mua nước rồi nhân cơ hội dắt cậu bạn kia trốn đi.", nextScene: "nam_5_sai_c" },
            { text: "👉 Nhìn thẳng vào mắt tên cầm đầu từ chối: 'Tao không cần cái đẳng cấp dẫm đạp lên người khác'.", nextScene: "nam_5_1" }
        ]
    },
    "nam_5_sai_a": {
        charName: "NAM (Cảnh 5: Kết Quả)",
        charColor: "text-rose-500",
        charSprite: "assets/characters/Char_3.webp",
        charEmotion: "cry",
        bgTheme: "border-rose-500/80 bg-rose-950/90 animate__shakeX",
        isResult: true,
        resultTitle: "THẤT BẠI - BĂN KHOĂN CỦA QUỶ DỮ",
        resultColor: "text-rose-500",
        illustration: "assets/scenes/Char_3_Scene_9.webp",
        story: "Sự sợ hãi bị cô lập đã biến bạn thành phiên bản độc hại mà chính bạn từng căm ghét. Bạn an toàn dưới lớp vỏ bọc quyền lực, nhưng nhân cách và sự tự tôn của bạn đã chết đi từ khoảnh khắc úp sọt rác đó.",
        choices: [{ text: "↺ Phân tích lại tình huống", nextScene: "nam_man_5", isUndo: true }]
    },
    "nam_5_sai_c": {
        charName: "NAM (Cảnh 5: Kết Quả)",
        charColor: "text-amber-400",
        charSprite: "assets/characters/Char_3.webp",
        charEmotion: "cry",
        bgTheme: "border-amber-500/50 bg-slate-900/95",
        isResult: true,
        resultTitle: "THẤT BẠI - CHIẾN THUẬT NỬA MÙA",
        resultColor: "text-amber-400",
        illustration: "assets/scenes/Char_3_Scene_9.webp",
        story: "Trốn tránh chỉ hoãn lại vấn đề chứ không giải quyết được nó. Hôm sau, nhóm đó càng tức tối vì bị lừa và đánh cậu bé kia thậm tệ hơn, đồng thời tuyên bố 'phong sát' cả bạn.",
        choices: [{ text: "↺ Phân tích lại tình huống", nextScene: "nam_man_5", isUndo: true }]
    },

    "nam_5_1": {
        charName: "NAM (Cảnh 5.1: Áp Lực Đàn Ông)",
        charColor: "text-amber-400",
        charSprite: "assets/characters/Char_3.webp",
        charEmotion: "think", // 👉 Ngẩng cao đầu vượt qua lời đồn, chủ động làm bạn
        bgTheme: "border-amber-500/30 bg-slate-900/95",
        story: "Bị từ chối, nhóm này bắt đầu tung tin đồn Nam là 'đứa ẻo lả', 'không đáng mặt đàn ông' và kích động cả lớp tẩy chay. Cảm giác bị mọi người nhìn bằng ánh mắt mỉa mai thật sự tồi tệ.",
        choices: [
            { text: "👉 Bức xúc đi tìm tên tung tin đồn để đánh lộn, chứng minh mình chuẩn men.", nextScene: "nam_5_1_sai_a" },
            { text: "👉 Ngẩng cao đầu bỏ ngoài tai, chủ động đem cặp xuống ngồi cạnh cậu bạn mọt sách để làm bạn.", nextScene: "nam_5_2" }
        ]
    },
    "nam_5_1_sai_a": {
        charName: "NAM (Cảnh 5.1: Kết Quả)",
        charColor: "text-rose-500",
        charSprite: "assets/characters/Char_3.webp",
        charEmotion: "angry", // 👉 Đánh lộn bốc đồng vì định kiến giới
        bgTheme: "border-rose-500/80 bg-rose-950/90 animate__shakeX",
        isResult: true,
        resultTitle: "THẤT BẠI - SỤP ĐỔ TÂM LÝ",
        resultColor: "text-rose-500",
        illustration: "assets/scenes/Char_3_Scene_9.webp",
        story: "Chứng minh sự nam tính bằng bạo lực chính là sập bẫy của định kiến độc hại (Toxic Masculinity). Bạn không dập tắt được tin đồn mà chỉ chứng minh cho mọi người thấy bạn là một kẻ máu nóng thiếu suy nghĩ.",
        choices: [{ text: "↺ Phân tích lại tình huống", nextScene: "nam_5_1", isUndo: true }]
    },

    // 🌟 [MINI-GAME 5: SHIELD - CHẮN ĐÒN GÂY HẤN BẢO VỆ BẠN MỌT SÁCH] 🌟
    "nam_5_2": {
        charName: "NAM (Cảnh 5.2: Phá Vỡ Định Kiến)",
        charColor: "text-amber-400",
        charSprite: "assets/characters/Char_3.webp",
        charEmotion: "think", // 👉 Dùng sự nhạy bén gạt các khiêu khích bảo vệ bạn
        sfx: "sfx_heartbeat",
        bgTheme: "border-amber-500/30 bg-slate-900/95",
        story: "Cậu bạn mọt sách ngỡ ngàng khi thấy Nam ngồi cạnh. Lát sau, tên trưởng nhóm 'Cool Boy' đi tới, cố tình đá mạnh vào chân bàn của hai người làm sách vở rơi lả tả: 'Ôi chà, đôi bạn cùng tiến cơ đấy'.",
        
        minigame: {
            type: "shield",
            duration: 8,
            target: 5,
            title: "CHẮN ĐÒN GÂY HẤN",
            description: "Hắn đang liên tục ném gạch đá/khiêu khích từ 3 cột [TRÁI - GIỮA - PHẢI]. Phản xạ bấm ngay cột báo động đỏ để gạt đòn bảo vệ bạn mình!",
            successScene: "nam_5_thanh_cong",
            failScene: "nam_5_2_sai_a"
        },

        choices: [
            { text: "👉 Tức giận đứng lên đạp đổ bàn trút giận lên đối phương.", nextScene: "nam_5_2_sai_a" },
            { text: "👉 Điềm tĩnh đỡ bàn dậy, lách qua chặn trước mặt bạn mọt sách: 'Sức mạnh thực sự là bảo vệ người khác, không phải ăn hiếp kẻ yếu'.", nextScene: "nam_5_thanh_cong" }
        ]
    },
    "nam_5_2_sai_a": {
        charName: "NAM (Cảnh 5.2: Kết Quả)",
        charColor: "text-rose-500",
        charSprite: "assets/characters/Char_3.webp",
        charEmotion: "angry", // 👉 Đạp đổ bàn bốc đồng mất khôn
        bgTheme: "border-rose-500/80 bg-rose-950/90 animate__shakeX",
        isResult: true,
        resultTitle: "THẤT BẠI - BÁO THÙ SAI CÁCH",
        resultColor: "text-rose-500",
        illustration: "assets/scenes/Char_3_Scene_10.webp",
        story: "Đạp đổ bàn lại là hành vi phá hoại tài sản nhà trường. Bạn bị phạt nặng, trong khi ý nghĩa bảo vệ người yếu thế hoàn toàn biến mất trong một vụ ẩu đả bẩn thỉu.",
        choices: [{ text: "↺ Phân tích lại tình huống", nextScene: "nam_5_2", isUndo: true }]
    },
    "nam_5_thanh_cong": {
        charName: "NAM (Kết Quả Màn 5)",
        charColor: "text-emerald-400",
        charSprite: "assets/characters/Char_3.webp",
        charEmotion: "victory", // 👉 Nụ cười tự hào phá vỡ định kiến
        bgTheme: "border-amber-500/80 bg-blue-950/90 animate__pulse",
        isResult: true,
        resultTitle: "THÀNH CÔNG - ĐỊNH NGHĨA LẠI SỨC MẠNH",
        resultColor: "text-emerald-400",
        illustration: "assets/scenes/Char_3_Scene_10.webp",
        story: "Câu nói điềm tĩnh nhưng đanh thép của bạn khiến cả lớp im lặng. Thái độ bất cần lời dè bỉu chính là tấm khiên vững chắc nhất. Bạn chứng minh được sức mạnh thực sự nằm ở nhân cách, không phải nắm đấm.",
        choices: [{ text: "➔ Chuyển sang Màn 6: Bạo Lực Thể Thao", nextScene: "nam_man_6" }]
    },

    // ------------------------------------------
    // MÀN 6: BẠO LỰC SÂN BÓNG (THỂ THAO MÙ QUÁNG)
    // ------------------------------------------
    "nam_man_6": {
        charName: "NAM (Cảnh 6: Sân Cỏ Nhuốm Bẩn)",
        charColor: "text-amber-400",
        charSprite: "assets/characters/Char_3.webp",
        charEmotion: "think", // 👉 Lý trí yêu cầu hội ý theo đúng luật thể thao
        bgTheme: "border-amber-500/30 bg-slate-900/95",
        story: "Trận chung kết bóng đá liên lớp. Đội đối thủ vì muốn thắng đã chơi xấu, liên tục tung những cú tắc bóng triệt hạ vào ống đồng của Minh (đồng đội Nam). Trọng tài là một học sinh lớp 8 lại cố tình ngó lơ.",
        choices: [
            { text: "👉 Ăn miếng trả miếng, canh me lúc trọng tài không nhìn để đạp gãy chân cầu thủ đội bạn.", nextScene: "nam_6_sai_a" },
            { text: "👉 Bức xúc lôi cả đội bỏ về, từ chối thi đấu trận bóng rác rưởi này.", nextScene: "nam_6_sai_b" },
            { text: "👉 Yêu cầu đội trưởng xin hội ý, bước ra biên báo cáo thẳng với thầy Thể dục đang đứng xem.", nextScene: "nam_6_1" }
        ]
    },
    "nam_6_sai_a": {
        charName: "NAM (Cảnh 6: Kết Quả)",
        charColor: "text-rose-500",
        charSprite: "assets/characters/Char_3.webp",
        charEmotion: "angry", // 👉 Đá triệt hạ trả đũa bị thẻ đỏ
        bgTheme: "border-rose-500/80 bg-rose-950/90 animate__shakeX",
        isResult: true,
        resultTitle: "THẤT BẠI - KẺ THỦ ÁC THỂ THAO",
        resultColor: "text-rose-500",
        illustration: "assets/scenes/Char_3_Scene_11.webp",
        story: "Dùng bạo lực để trị bạo lực trên sân cỏ là hành vi phi thể thao nghiêm trọng. Bạn bị thẻ đỏ đuổi khỏi sân, đội nhà thua cuộc và bạn mang tiếng là cầu thủ chơi bẩn cả năm học.",
        choices: [{ text: "↺ Phân tích lại tình huống", nextScene: "nam_man_6", isUndo: true }]
    },
    "nam_6_sai_b": {
        charName: "NAM (Cảnh 6: Kết Quả)",
        charColor: "text-amber-400",
        charSprite: "assets/characters/Char_3.webp",
        charEmotion: "cry",
        bgTheme: "border-amber-500/50 bg-slate-900/95",
        isResult: true,
        resultTitle: "THẤT BẠI - BỎ CUỘC HÈN NHÁT",
        resultColor: "text-amber-400",
        illustration: "assets/scenes/Char_3_Scene_11.webp",
        story: "Bỏ thi đấu không vạch trần được thói chơi bẩn của đội bạn mà còn khiến đội nhà bị xử thua 0-3. Sự rút lui của người tốt chính là chiến thắng cho kẻ xấu.",
        choices: [{ text: "↺ Phân tích lại tình huống", nextScene: "nam_man_6", isUndo: true }]
    },

    "nam_6_1": {
        charName: "NAM (Cảnh 6.1: Cuộc Chiến Công Bằng)",
        charColor: "text-amber-400",
        charSprite: "assets/characters/Char_3.webp",
        charEmotion: "normal",
        bgTheme: "border-amber-500/30 bg-slate-900/95",
        story: "Nghe Nam báo cáo, thầy Thể dục lập tức thay trọng tài. Cảm thấy mất lợi thế, đội trưởng đối thủ đi sượt qua Nam huých vai: 'Đá bóng rớt tí da cũng khóc lóc mách thầy, đàn bà rớt mồng tơi à?'.",
        choices: [
            { text: "👉 Nắm cổ áo hắn định đánh ngay trên đường pitch.", nextScene: "nam_6_1_sai_a" },
            { text: "👉 Lạnh lùng lùi lại: 'Cứ đá bằng thực lực đi rồi xem ai hơn ai'.", nextScene: "nam_6_2" }
        ]
    },
    "nam_6_1_sai_a": {
        charName: "NAM (Cảnh 6.1: Kết Quả)",
        charColor: "text-rose-500",
        charSprite: "assets/characters/Char_3.webp",
        charEmotion: "angry", // 👉 Nắm cổ áo đòi đánh nhau
        bgTheme: "border-rose-500/80 bg-rose-950/90 animate__shakeX",
        isResult: true,
        resultTitle: "THẤT BẠI - MẮC BẪY KHIEU KHÍCH",
        resultColor: "text-rose-500",
        illustration: "assets/scenes/Char_3_Scene_11.webp",
        story: "Bạn vừa rơi vào bẫy tâm lý của kẻ thủ ác. Vừa túm cổ áo, trọng tài mới đã thổi còi và rút thẻ đỏ đuổi bạn vì lỗi hành vi. Chúng đã loại được trụ cột của đội bạn một cách hợp lệ.",
        choices: [{ text: "↺ Phân tích lại tình huống", nextScene: "nam_6_1", isUndo: true }]
    },

    // 🌟 [MINI-GAME 5: BALANCE - CẢN CƠN GIẬN ĐỂ KHÔNG PHẠM LỖI TRẢ ĐŨA] 🌟
    "nam_6_2": {
        charName: "NAM (Cảnh 6.2: Sức Mạnh Thực Sự)",
        charColor: "text-amber-400",
        charSprite: "assets/characters/Char_3.webp",
        charEmotion: "think", // 👉 Giữ cái đầu lạnh điều hướng tinh thần toàn đội
        sfx: "sfx_heartbeat",
        bgTheme: "border-amber-500/30 bg-slate-900/95",
        story: "Trận đấu tiếp tục. Đội bạn chuyển sang chiến thuật áp sát cực rát, liên tục phạm lỗi kín để chọc tức Nam và đồng đội, ép đội của Nam phải mất bình tĩnh mà phạm lỗi lại.",
        
        minigame: {
            type: "balance",
            duration: 6,
            title: "GIỮ CÁI ĐẦU LẠNH",
            description: "Đồng đội đang sôi máu muốn đánh trả (Trượt về Đỏ). Nhấp liên tục nút 'LÁI VỀ LÝ TRÍ' để giữ tinh thần cả đội luôn trong vùng Xanh suốt 6 giây!",
            successScene: "nam_6_thanh_cong",
            failScene: "nam_6_sai_a"
        },

        choices: [
            { text: "👉 Nhắc nhở toàn đội giữ cái đầu lạnh, tập trung ban bật nhanh để né các pha phạm lỗi.", nextScene: "nam_6_thanh_cong" },
            { text: "👉 Bực tức quá nên xúi đồng đội chơi bạo lực lại cho chúng biết mùi.", nextScene: "nam_6_sai_a" }
        ]
    },
    "nam_6_thanh_cong": {
        charName: "NAM (Kết Quả Màn 6)",
        charColor: "text-emerald-400",
        charSprite: "assets/characters/Char_3.webp",
        charEmotion: "victory", // 👉 Nụ cười chiến thắng thể thao cao thượng
        bgTheme: "border-amber-500/80 bg-blue-950/90 animate__pulse",
        isResult: true,
        resultTitle: "THÀNH CÔNG - BẢN LĨNH CAO THƯỢNG",
        resultColor: "text-emerald-400",
        illustration: "assets/scenes/Char_3_Scene_12.webp",
        story: "Sự bình tĩnh đã giúp đội của Nam chiến thắng bằng một bàn thắng đẹp mắt từ pha phối hợp nhanh. Đội đối thủ không chỉ thua trên bảng tỷ số mà còn nhục nhã vì lối chơi bẩn thỉu bị cả trường la ó. Bạn đã chứng minh thể thao đích thực không có chỗ cho bạo lực.",
        choices: [{ text: "➔ Chuyển sang Màn 7: Người Khởi Xướng", nextScene: "nam_man_7" }]
    },

    // ------------------------------------------
    // MÀN 7: KHỞI XƯỚNG CHIẾN DỊCH TÍCH CỰC
    // ------------------------------------------
    "nam_man_7": {
        charName: "NAM (Cảnh 7: Trọng Trách Lan Tỏa)",
        charColor: "text-amber-400",
        charSprite: "assets/characters/Char_3.webp",
        charEmotion: "think", // 👉 Cân nhắc cách đối xử với nhóm học sinh cá biệt phá rối
        bgTheme: "border-amber-500/30 bg-slate-900/95",
        story: "Nhờ những hành động bảo vệ bạn bè, Nam được nhà trường tin tưởng giao nhiệm vụ phát động chiến dịch 'Nói không với Bạo lực Học đường'. Tuy nhiên, một nhóm nam sinh cá biệt ngồi cuối hội trường liên tục cười cợt và ném giấy nháp lên bục diễn giả.",
        choices: [
            { text: "👉 Bỏ qua sự phá rối, cứ đọc đều đều kịch bản giáo lý đã chuẩn bị sẵn cho xong việc.", nextScene: "nam_7_sai_b" },
            { text: "👉 Dừng bài nói, mời nhóm nam sinh đó đứng lên và đưa micro cho họ tranh luận công khai.", nextScene: "nam_7_1" }
        ]
    },
    "nam_7_sai_b": {
        charName: "NAM (Cảnh 7: Kết Quả)",
        charColor: "text-amber-400",
        charSprite: "assets/characters/Char_3.webp",
        charEmotion: "cry",
        bgTheme: "border-amber-500/50 bg-slate-900/95",
        isResult: true,
        resultTitle: "THẤT BẠI - BÀI HỌC SÁO RỖNG",
        resultColor: "text-amber-400",
        illustration: "assets/scenes/Char_3_Scene_13.webp",
        story: "Một chiến dịch hời hợt, đọc như cái máy sẽ không bao giờ chạm đến tâm hồn ai. Nhóm phá rối được đà lấn tới, và phong trào nhanh chóng chìm vào quên lãng như một thủ tục nhàm chán.",
        choices: [{ text: "↺ Phân tích lại tình huống", nextScene: "nam_man_7", isUndo: true }]
    },

    "nam_7_1": {
        charName: "NAM (Cảnh 7.1: Cuộc Tranh Luận Mở)",
        charColor: "text-amber-400",
        charSprite: "assets/characters/Char_3.webp",
        charEmotion: "think", // 👉 Dùng lý trí và thư ẩn danh để chạm tới tâm lý đám đông
        bgTheme: "border-amber-500/30 bg-slate-900/95",
        story: "Bị đưa micro bất ngờ, tên cá biệt đứng lên cười khẩy: 'Vẽ chuyện! Hồi xưa mấy anh lớn đập nhau sứt đầu mẻ trán có sao đâu. Đi học phải có va chạm mới mau trưởng thành, khóc lóc yếu đuối thì ra đời sống sao được?'.",
        choices: [
            { text: "👉 Tranh cãi gay gắt: 'Tư duy của cậu là tư duy của một kẻ độc ác, cậu không có tư cách nói chuyện ở đây'.", nextScene: "nam_7_1_sai_a" },
            { text: "👉 Bình tĩnh chiếu lên màn hình bức thư ẩn danh của một nạn nhân từng rạch tay tự tử vì bị tẩy chay.", nextScene: "nam_7_2" }
        ]
    },
    "nam_7_1_sai_a": {
        charName: "NAM (Cảnh 7.1: Kết Quả)",
        charColor: "text-rose-500",
        charSprite: "assets/characters/Char_3.webp",
        charEmotion: "angry", // 👉 Tranh cãi gay gắt mạt sát người khác
        bgTheme: "border-rose-500/80 bg-rose-950/90 animate__shakeX",
        isResult: true,
        resultTitle: "THẤT BẠI - BẠO LỰC BẰNG NGÔN TỪ",
        resultColor: "text-rose-500",
        illustration: "assets/scenes/Char_3_Scene_13.webp",
        story: "Dùng từ ngữ miệt thị để công kích lại người đang tranh luận chính là một hình thức bạo lực khác. Buổi tuyên truyền biến thành cái chợ mắng chửi nhau, thất bại hoàn toàn trong việc truyền tải thông điệp cốt lõi.",
        choices: [{ text: "↺ Phân tích lại tình huống", nextScene: "nam_7_1", isUndo: true }]
    },

    // 🌟 [MINI-GAME 6: DEBATE - PHẢN BIỆN THÉP TRƯỚC TOÀN TRƯỜNG] 🌟
    "nam_7_2": {
        charName: "NAM (Cảnh 7.2: Chạm Tới Trái Tim)",
        charColor: "text-amber-400",
        charSprite: "assets/characters/Char_3.webp",
        charEmotion: "think", // 👉 Tung luận điểm phản biện đanh thép
        sfx: "sfx_heartbeat",
        bgTheme: "border-amber-500/30 bg-slate-900/95",
        story: "Cả hội trường im phăng phắc khi đọc những dòng thư đầy tuyệt vọng. Nhưng tên kia vẫn cố chấp cãi cùn: 'Thì do nó yếu đuối tự chuốc lấy thôi, trách ai?'.",
        
        minigame: {
            type: "debate",
            duration: 3.5,
            title: "PHẢN BIỆN THÉP",
            description: "Hắn vừa buông lời ngụy biện tàn nhẫn! Có 3.5 giây phản xạ bấm ngay vào 'Luận Điểm Thép' bẻ gãy tư duy đối phương!",
            qteOptions: [
              { text: "ĐUỔI CẬU TA RA KHỎI HỘI TRƯỜNG NGAY LẬP TỨC", correct: false },
              { text: "KẺ MẠNH THỰC SỰ LÀ DÙNG SỨC MẠNH BẢO VỆ KẺ YẾU", correct: true },
              { text: "BẠN ĐANG TỰ BIẾN MÌNH THÀNH KẺ ĐỘC ÁC ĐẤY", correct: false }
            ],
            successScene: "nam_7_thanh_cong",
            failScene: "nam_7_2_sai_a"
        },

        choices: [
            { text: "👉 Nóng giận bảo vệ đuổi cậu ta ra khỏi hội trường.", nextScene: "nam_7_2_sai_a" },
            { text: "👉 Nhẹ nhàng đáp lại: 'Kẻ mạnh thực sự là người biết dùng sức mạnh để che chở người yếu thế. Dẫm đạp lên nỗi đau của kẻ yếu không gọi là trưởng thành, đó gọi là hèn mọn'.", nextScene: "nam_7_thanh_cong" }
        ]
    },
    "nam_7_2_sai_a": {
        charName: "NAM (Cảnh 7.2: Kết Quả)",
        charColor: "text-rose-500",
        charSprite: "assets/characters/Char_3.webp",
        charEmotion: "angry", // 👉 Nóng giận đuổi người ra khỏi hội trường
        bgTheme: "border-rose-500/80 bg-rose-950/90 animate__shakeX",
        isResult: true,
        resultTitle: "THẤT BẠI - CHỐI BỎ SỰ LẮNG NGHE",
        resultColor: "text-rose-500",
        illustration: "assets/scenes/Char_3_Scene_13.webp",
        story: "Đuổi người khác đi khi không cãi lại được chứng tỏ sự bất lực của một nhà lãnh đạo phong trào. Cậu ta sẽ ra ngoài với lòng thù hận càng lớn hơn.",
        choices: [{ text: "↺ Phân tích lại tình huống", nextScene: "nam_7_2", isUndo: true }]
    },
    "nam_7_thanh_cong": {
        charName: "NAM (Kết Quả Màn 7)",
        charColor: "text-emerald-400",
        charSprite: "assets/characters/Char_3.webp",
        charEmotion: "victory", // 👉 Nụ cười chiến thắng vinh quang rực rỡ
        bgTheme: "border-amber-500/80 bg-blue-950/90 animate__pulse",
        isResult: true,
        resultTitle: "THÀNH CÔNG RỰC RỠ - HẠT GIỐNG TỬ TẾ ĐÃ NẢY MẦM",
        resultColor: "text-emerald-400",
        illustration: "assets/scenes/Char_3_Scene_14.webp",
        story: "Câu nói đanh thép của bạn khiến tên cá biệt cứng họng và cả hội trường vỗ tay rầm rộ. Bạn đã chạm tới được nhận thức sâu thẳm nhất của những người có mặt. Tổn thương của các nạn nhân chưa thể biến mất ngay, but từ hôm nay, họ biết rằng mình sẽ không bao giờ phải khóc một mình nữa.",
        choices: [{ text: "🏆 KẾT THÚC CÂU CHUYỆN - TRỞ VỀ MENU", nextScene: "RESET_GAME", isUndo: true }]
    }
};