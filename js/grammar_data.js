// ============================================================================
// TRỌN BỘ GIÁO TRÌNH NGỮ PHÁP THỰC CHIẾN (TỪ MẤT GỐC A0 -> GIAO TIẾP & LUYỆN THI)
// 16 Chủ điểm cốt lõi - Công thức trực quan - Mẹo nhớ nhanh - Ví dụ có phát âm - 80 câu bài tập có giải thích
// ============================================================================

const grammarCurriculum = [
    // ========================================================================
    // PHẦN 1: GỐC RỄ CÂU TIẾNG ANH (NỀN TẢNG A0 CHO NGƯỜI MẤT GỐC)
    // ========================================================================
    {
        id: "gram_01_svo_tobe",
        unit: "Phần 1: Gốc Rễ A0",
        level: "A0 - Mất Gốc",
        icon: "🧱",
        title: "Bài 1: Cấu Trúc Câu Vàng (S-V-O) & Động Từ To Be",
        summary: "Hiểu cách ghép từ thành câu hoàn chỉnh và cách dùng am / is / are trong 5 phút.",
        coreIdea: "Câu tiếng Anh có thứ tự y hệt tiếng Việt: Ai làm gì? (Chủ ngữ + Động từ + Tân ngữ). Khi câu KHÔNG có hành động (chỉ giới thiệu tên, tuổi, tính chất, nơi chốn) thì ta dùng Động từ To Be (am / is / are - nghĩa là: thì, là, ở).",
        formulas: [
            {
                type: "Công thức gốc",
                rule: "S (Chủ ngữ) + V (Động từ) + O (Tân ngữ)",
                note: "S: Người/vật thực hiện | V: Hành động | O: Người/vật chịu tác động"
            },
            {
                type: "Khẳng định (+)",
                rule: "I + am ... | He/She/It/Số ít + is ... | You/We/They/Số nhiều + are ...",
                note: "Viết tắt: I'm, He's, She's, It's, You're, We're, They're"
            },
            {
                type: "Phủ định (-)",
                rule: "S + am / is / are + NOT + ...",
                note: "is not = isn't | are not = aren't (Chỉ cần thêm NOT ngay sau To Be!)"
            },
            {
                type: "Nghi vấn (?)",
                rule: "Am / Is / Are + S + ... ?",
                note: "Đảo am/is/are lên đầu câu để hỏi 'Có phải ... không?'"
            }
        ],
        memoryTip: "💡 Mẹo nhớ 3 giây: 'I (Tôi)' ích kỷ chỉ chơi với 'AM'. 'He, She, It' (1 người/1 vật) cô đơn đi với 'IS'. 'You, We, They' (nhiều người) đông vui đi với 'ARE'!",
        examples: [
            {
                en: "I drink coffee every morning.",
                vi: "Tôi (S) uống (V) cà phê (O) mỗi sáng.",
                breakdown: "I (Tôi - S) + drink (uống - V) + coffee (cà phê - O)"
            },
            {
                en: "She is a dedicated doctor.",
                vi: "Cô ấy là một bác sĩ tận tâm.",
                breakdown: "She (Chủ ngữ số ít) + is (là) + a dedicated doctor (bác sĩ tận tâm)"
            },
            {
                en: "They are not at home right now.",
                vi: "Hiện tại họ đang không ở nhà.",
                breakdown: "They (Họ - số nhiều) + are not (không ở) + at home (nhà)"
            },
            {
                en: "Are you ready for the lesson?",
                vi: "Bạn đã sẵn sàng cho bài học chưa?",
                breakdown: "Đảo 'Are' lên trước 'you' để tạo câu hỏi."
            }
        ],
        quiz: [
            {
                q: "My sister _____ a teacher at a local school.",
                options: ["am", "is", "are", "be"],
                answer: 1,
                explain: "'My sister' (Chị gái tôi) là chủ ngữ ngôi thứ 3 số ít (tương đương She) nên đi với 'is'."
            },
            {
                q: "I _____ from Vietnam, and my friends _____ from Japan.",
                options: ["is / are", "am / is", "am / are", "are / am"],
                answer: 2,
                explain: "'I' luôn đi với 'am', còn 'my friends' (danh từ số nhiều = They) đi với 'are'."
            },
            {
                q: "_____ your parents at home today?",
                options: ["Is", "Are", "Am", "Do"],
                answer: 1,
                explain: "'Your parents' (Bố mẹ bạn - số nhiều) và câu chỉ nơi chốn 'at home' nên dùng động từ To Be 'Are' đảo lên đầu câu."
            },
            {
                q: "The weather _____ very nice today. It isn't cold.",
                options: ["are", "am", "is", "be"],
                answer: 2,
                explain: "'The weather' (Thời tiết) là danh từ không đếm được (tương đương 'It' - số ít) nên dùng 'is'."
            },
            {
                q: "Chọn câu đúng thứ tự cấu trúc S + V + O:",
                options: [
                    "English likes she very much.",
                    "She likes English very much.",
                    "Likes she English very much.",
                    "She English likes very much."
                ],
                answer: 1,
                explain: "Theo công thức S + V + O: She (Chủ ngữ) + likes (Động từ) + English (Tân ngữ)."
            }
        ]
    },
    {
        id: "gram_02_parts_of_speech",
        unit: "Phần 1: Gốc Rễ A0",
        level: "A0 - Mất Gốc",
        icon: "🧩",
        title: "Bài 2: Từ Loại & Quy Tắc Sắp Xếp Từ Trong Câu",
        summary: "Nắm chắc Danh - Động - Tính - Trạng để không bao giờ đặt ngược từ.",
        coreIdea: "Người Việt hay nói 'Cô gái đẹp' (Danh từ + Tính từ), nhưng tiếng Anh bắt buộc phải nói 'Đẹp cô gái' (Tính từ đứng TRƯỚC Danh từ: a beautiful girl). Hiểu vị trí của 4 từ loại chính sẽ giúp bạn ghép câu chuẩn 100%!",
        formulas: [
            {
                type: "Danh từ (Noun - N)",
                rule: "Làm Chủ ngữ (đầu câu) hoặc Tân ngữ (sau động từ)",
                note: "Chỉ người, vật, việc: student, car, money, happiness (thường có đuôi -tion, -ment, -ness, -er)"
            },
            {
                type: "Tính từ (Adjective - Adj)",
                rule: "Đứng TRƯỚC Danh từ (Adj + N) hoặc đứng SAU To Be (be + Adj)",
                note: "Miêu tả tính chất: good, smart, important, careful (thường có đuôi -ful, -less, -ous, -ive, -able)"
            },
            {
                type: "Động từ (Verb - V)",
                rule: "Đứng ngay SAU Chủ ngữ (S + V)",
                note: "Chỉ hành động: work, study, buy, develop"
            },
            {
                type: "Trạng từ (Adverb - Adv)",
                rule: "Bổ nghĩa cho Động từ thường (V + Adv) hoặc đứng trước Tính từ (Adv + Adj)",
                note: "Cách thành lập: Tính từ + đuôi '-ly' (quick -> quickly, careful -> carefully). Ngoại lệ: good -> well, fast -> fast, hard -> hard."
            }
        ],
        memoryTip: "💡 Khẩu quyết Vàng: 'Tính trước Danh, Tính sau Be, Trạng đi kèm Động từ thường!' (Ví dụ: She is careful [sau Be dùng Tính từ] vs She drives carefully [sau Động từ thường dùng Trạng từ -ly]).",
        examples: [
            {
                en: "He bought an expensive car.",
                vi: "Anh ấy đã mua một chiếc xe hơi đắt tiền.",
                breakdown: "expensive (Tính từ: đắt) phải đứng TRƯỚC car (Danh từ: xe hơi)."
            },
            {
                en: "She speaks English very fluently.",
                vi: "Cô ấy nói tiếng Anh rất trôi chảy.",
                breakdown: "fluently (Trạng từ đuôi -ly) bổ nghĩa cho động từ thường 'speaks'."
            },
            {
                en: "This project is extremely important.",
                vi: "Dự án này cực kỳ quan trọng.",
                breakdown: "extremely (Trạng từ) đứng trước để nhấn mạnh cho important (Tính từ)."
            }
        ],
        quiz: [
            {
                q: "Mr. John is a very _____ driver. He always obeys traffic rules.",
                options: ["carefully", "careful", "care", "caringly"],
                answer: 1,
                explain: "Trước danh từ 'driver' (tài xế) ta cần một Tính từ -> chọn 'careful' (cẩn thận)."
            },
            {
                q: "Mr. John drives very _____ at night.",
                options: ["careful", "care", "carefully", "carefulness"],
                answer: 2,
                explain: "Bổ nghĩa cho động từ thường 'drives' (lái xe như thế nào?) ta cần một Trạng từ đuôi -ly -> 'carefully'."
            },
            {
                q: "The food at this restaurant tastes _____.",
                options: ["delicious", "deliciously", "delight", "well"],
                answer: 0,
                explain: "Sau các động từ chỉ cảm giác (be, look, feel, taste, sound, seem) ta dùng Tính từ -> 'delicious' (ngon)."
            },
            {
                q: "Cụm từ nào dưới đây sắp xếp ĐÚNG trật tự từ tiếng Anh?",
                options: [
                    "a house big",
                    "an idea interesting",
                    "a wonderful trip",
                    "a trip wonderful"
                ],
                answer: 2,
                explain: "Tính từ 'wonderful' (tuyệt vời) phải đứng TRƯỚC danh từ 'trip' (chuyến đi) -> 'a wonderful trip'."
            },
            {
                q: "She plays the piano very _____.",
                options: ["good", "well", "goodly", "bestly"],
                answer: 1,
                explain: "Bổ nghĩa cho động từ thường 'plays' cần Trạng từ. Trạng từ của 'good' là 'well' (chơi đàn rất giỏi)."
            }
        ]
    },
    {
        id: "gram_03_articles_nouns",
        unit: "Phần 1: Gốc Rễ A0",
        level: "A1 - Cơ Bản",
        icon: "🍎",
        title: "Bài 3: Mạo Từ (A / An / The) & Danh Từ Số Ít - Số Nhiều",
        summary: "Phân biệt khi nào dùng a, an, the và cách biến danh từ sang số nhiều.",
        coreIdea: "Trong tiếng Anh, danh từ đếm được số ít KHÔNG BAO GIỜ đứng trơ trọi một mình mà phải có 'a / an / the / my...' đứng trước. Nếu từ 2 vật trở lên, phải thêm '-s/-es' vào cuối danh từ.",
        formulas: [
            {
                type: "A + phụ âm",
                rule: "Dùng trước danh từ đếm được số ít, nhắc đến lần đầu (chưa xác định)",
                note: "a book, a cat, a teacher, a university (phát âm là /ju:/ nên dùng a)"
            },
            {
                type: "AN + nguyên âm (U, E, O, A, I)",
                rule: "Dùng trước danh từ số ít bắt đầu bằng âm nguyên âm (u, e, o, a, i)",
                note: "an apple, an elephant, an orange, an umbrella, an hour (h câm)"
            },
            {
                type: "THE (Đã xác định)",
                rule: "Dùng khi cả người nói & người nghe đều biết rõ vật đó, hoặc vật duy nhất",
                note: "the sun (mặt trời), the moon, the book on the table"
            },
            {
                type: "Danh từ Số Nhiều",
                rule: "Thêm -s (books) hoặc -es (sau ch, sh, s, x, o, z: boxes, watches)",
                note: "Bất quy tắc: child -> children, person -> people, man -> men, woman -> women, tooth -> teeth"
            }
        ],
        memoryTip: "💡 Mẹo nhớ AN: Nhớ chữ 'UỂ OẢI' (U - E - O - A - I). Cứ danh từ số ít bắt đầu bằng âm U, E, O, A, I thì dùng 'AN', còn lại dùng 'A'! Nhắc lần 1 dùng A/An, nhắc lại lần 2 dùng THE!",
        examples: [
            {
                en: "I ate an apple and a banana this morning.",
                vi: "Sáng nay tôi đã ăn một quả táo và một quả chuối.",
                breakdown: "'apple' bắt đầu bằng 'a' (Uể Oải) -> an apple; 'banana' bắt đầu bằng 'b' -> a banana."
            },
            {
                en: "I saw a dog. The dog was very friendly.",
                vi: "Tôi thấy một chú chó. Chú chó đó rất thân thiện.",
                breakdown: "Nhắc lần đầu dùng 'a dog', nhắc lại lần 2 đã xác định dùng 'The dog'."
            },
            {
                en: "There are many children in the park.",
                vi: "Có rất nhiều trẻ em ở trong công viên.",
                breakdown: "Số nhiều của 'child' là 'children' (không thêm s!)."
            }
        ],
        quiz: [
            {
                q: "It is raining outside. Do you have _____ umbrella?",
                options: ["a", "an", "the", "không dùng"],
                answer: 1,
                explain: "'umbrella' (cái ô) là danh từ số ít bắt đầu bằng nguyên âm 'u' (nằm trong bộ UỂ OẢI) nên dùng 'an'."
            },
            {
                q: "I bought a new shirt yesterday. _____ shirt is blue.",
                options: ["A", "An", "The", "Some"],
                answer: 2,
                explain: "Chiếc áo đã được nhắc đến ở câu trước (đã xác định), nên câu thứ 2 dùng 'The shirt'."
            },
            {
                q: "Wait for me! I will be back in _____ hour.",
                options: ["a", "an", "the", "two"],
                answer: 1,
                explain: "'hour' (giờ) có chữ 'h' câm, phát âm là /ˈaʊər/ (bắt đầu bằng nguyên âm) nên phải dùng 'an hour'."
            },
            {
                q: "There are five _____ waiting at the bus stop.",
                options: ["person", "peoples", "people", "child"],
                answer: 2,
                explain: "Đi với số lượng 'five' (5) cần danh từ số nhiều. Số nhiều của 'person' là 'people'."
            },
            {
                q: "_____ Sun rises in the East and sets in the West.",
                options: ["A", "An", "The", "Many"],
                answer: 2,
                explain: "Mặt trời (Sun), Mặt trăng (Moon), Trái đất (Earth) là những sự vật duy nhất nên luôn dùng 'The'."
            }
        ]
    },
    {
        id: "gram_04_prepositions_in_on_at",
        unit: "Phần 1: Gốc Rễ A0",
        level: "A1 - Cơ Bản",
        icon: "📍",
        title: "Bài 4: Giới Từ Thời Gian & Nơi Chốn (IN - ON - AT)",
        summary: "Bài thơ thần thánh giúp không bao giờ nhầm lẫn IN, ON, AT.",
        coreIdea: "Quy tắc hình phễu từ LỚN đến NHỎ: 'IN' dùng cho khoảng thời gian/không gian RỘNG LỚN (năm, tháng, mùa, đất nước, thành phố). 'ON' dùng cho cấp độ TRUNG BÌNH (ngày, thứ, tên đường, bề mặt). 'AT' dùng cho ĐIỂM CỤ THỂ NHỎ NHẤT (giờ giấc, địa chỉ số nhà).",
        formulas: [
            {
                type: "IN (Lớn / Rộng)",
                rule: "Thời gian: Năm (in 2026), Tháng (in May), Mùa (in summer), Buổi (in the morning)",
                note: "Nơi chốn: Quốc gia (in Vietnam), Thành phố (in Hanoi), Trong phòng/hộp (in the room)"
            },
            {
                type: "ON (Trung bình / Bề mặt)",
                rule: "Thời gian: Thứ trong tuần (on Monday), Ngày tháng (on May 1st, on my birthday)",
                note: "Nơi chốn: Trên bề mặt (on the table), Trên tầng (on the 2nd floor), Tên đường (on Le Loi street)"
            },
            {
                type: "AT (Nhỏ / Điểm cụ thể)",
                rule: "Thời gian: Giờ đồng hồ (at 7:00 AM), at night, at noon, at the weekend",
                note: "Nơi chốn: Tại địa điểm cụ thể (at home, at school, at work, at the airport)"
            }
        ],
        memoryTip: "💡 Thơ thần chú: 'IN năm, IN tháng, IN mùa / IN sáng, chiều, tối — ngày đưa ON vào / Đêm trưa, giờ giấc thế nào / Một câu đơn giản: AT vào là xong!'",
        examples: [
            {
                en: "Our class starts at 8 o'clock on Monday.",
                vi: "Lớp học của chúng ta bắt đầu lúc 8 giờ vào thứ Hai.",
                breakdown: "Giờ cụ thể dùng 'at 8 o'clock', thứ trong tuần dùng 'on Monday'."
            },
            {
                en: "I was born in October, in 2000.",
                vi: "Tôi sinh vào tháng 10 năm 2000.",
                breakdown: "Tháng và năm đều dùng 'in'."
            },
            {
                en: "Your keys are on the table in the kitchen.",
                vi: "Chìa khóa của bạn ở trên bàn trong nhà bếp.",
                breakdown: "Trên mặt bàn dùng 'on the table', bên trong phòng bếp dùng 'in the kitchen'."
            }
        ],
        quiz: [
            {
                q: "The train leaves _____ 6:30 PM.",
                options: ["in", "on", "at", "for"],
                answer: 2,
                explain: "Trước giờ đồng hồ cụ thể (6:30 PM) ta luôn dùng giới từ 'at'."
            },
            {
                q: "We always go to the beach _____ summer.",
                options: ["in", "on", "at", "to"],
                answer: 0,
                explain: "'IN năm, IN tháng, IN mùa' -> trước mùa (summer) dùng 'in'."
            },
            {
                q: "Do you have any plans _____ Sunday morning?",
                options: ["in", "on", "at", "of"],
                answer: 1,
                explain: "Dù có chữ 'morning' nhưng có kèm Thứ (Sunday) thì phải ưu tiên Thứ -> dùng 'on Sunday morning'!"
            },
            {
                q: "My brother lives _____ Ho Chi Minh City.",
                options: ["at", "on", "in", "by"],
                answer: 2,
                explain: "Trước tên thành phố hoặc quốc gia lớn ta luôn dùng 'in'."
            },
            {
                q: "I usually read books _____ night before sleeping.",
                options: ["in", "on", "at", "under"],
                answer: 2,
                explain: "Buổi sáng/chiều/tối dùng 'in the morning/afternoon/evening', nhưng ban đêm là trường hợp đặc biệt dùng 'at night'."
            }
        ]
    },

    // ========================================================================
    // PHẦN 2: 6 THÌ QUAN TRỌNG NHẤT (CHIẾM 90% GIAO TIẾP & ĐỀ THI)
    // ========================================================================
    {
        id: "gram_05_present_simple",
        unit: "Phần 2: 6 Thì Cốt Lõi",
        level: "A1 - Cốt Lõi",
        icon: "☀️",
        title: "Bài 5: Thì Hiện Tại Đơn (Present Simple)",
        summary: "Diễn tả thói quen lặp đi lặp lại, lịch trình và sự thật hiển nhiên.",
        coreIdea: "Dùng khi nói về việc bạn làm hàng ngày (thói quen) hoặc sự thật không đổi. Với Động từ thường, khi chủ ngữ là He/She/It (số ít) thì động từ phải thêm '-s' hoặc '-es'. Khi phủ định hoặc hỏi, phải mượn trợ động từ DO / DOES!",
        formulas: [
            {
                type: "Khẳng định (+)",
                rule: "I/You/We/They + V (nguyên mẫu) | He/She/It + V(s/es)",
                note: "Thêm -es khi động từ tận cùng bằng: o, s, ch, x, sh, z (Ông Sáu Chạy Xe SH Zỏm: goes, watches)"
            },
            {
                type: "Phủ định (-)",
                rule: "S + don't / doesn't + V (nguyên mẫu)",
                note: "Đã có doesn't thì động từ trả về nguyên mẫu (KHÔNG còn s/es nữa!)"
            },
            {
                type: "Nghi vấn (?)",
                rule: "Do / Does + S + V (nguyên mẫu) ?",
                note: "Do đi với I/You/We/They | Does đi với He/She/It"
            },
            {
                type: "Dấu hiệu nhận biết",
                rule: "always (luôn luôn), usually (thường), often, sometimes, never, every day/week",
                note: "Cứ thấy các trạng từ tần suất này trong câu là nghĩ ngay đến Hiện Tại Đơn!"
            }
        ],
        memoryTip: "💡 Mẹo nhớ: 'Ông Sáu Chạy Xe SH Zỏm' (o, s, ch, x, sh, z) -> đi với He/She/It thì thêm '-es'. Khi đã có trợ lý 'doesn't / does' xuất hiện thì động từ chính được nghỉ ngơi (về nguyên mẫu)!",
        examples: [
            {
                en: "She usually gets up at 6 AM every day.",
                vi: "Cô ấy thường thức dậy lúc 6 giờ sáng mỗi ngày.",
                breakdown: "Chủ ngữ 'She' (số ít) -> động từ 'get' thêm 's' thành 'gets'."
            },
            {
                en: "He doesn't like spicy food.",
                vi: "Anh ấy không thích đồ ăn cay.",
                breakdown: "Mượn 'doesn't' cho 'He', động từ 'like' giữ nguyên mẫu."
            },
            {
                en: "Does your father work in a bank?",
                vi: "Bố của bạn có làm việc ở ngân hàng không?",
                breakdown: "Mượn 'Does' cho chủ ngữ số ít 'your father', động từ 'work' giữ nguyên."
            }
        ],
        quiz: [
            {
                q: "My mother _____ dinner for our family every evening.",
                options: ["cook", "cooks", "cooking", "is cook"],
                answer: 1,
                explain: "Dấu hiệu 'every evening' (thói quen) + Chủ ngữ số ít 'My mother' (Mẹ tôi = She) -> Động từ thêm 's': cooks."
            },
            {
                q: "Tom _____ coffee. He always drinks tea.",
                options: ["not like", "don't like", "doesn't like", "doesn't likes"],
                answer: 2,
                explain: "Tom là chủ ngữ số ít (He) nên mượn trợ động từ 'doesn't', và sau 'doesn't' động từ 'like' phải giữ nguyên mẫu."
            },
            {
                q: "_____ they live near the city center?",
                options: ["Are", "Do", "Does", "Is"],
                answer: 1,
                explain: "'live' (sống) là động từ thường và chủ ngữ là 'they' -> mượn trợ động từ 'Do' ở đầu câu hỏi."
            },
            {
                q: "The Earth _____ around the Sun.",
                options: ["move", "moves", "moved", "moving"],
                answer: 1,
                explain: "Sự thật hiển nhiên dùng Hiện tại đơn. 'The Earth' (Trái đất) là số ít nên dùng 'moves'."
            },
            {
                q: "My brother often _____ TV after finishing his homework.",
                options: ["watch", "watchs", "watches", "watching"],
                answer: 2,
                explain: "'watch' tận cùng bằng 'ch' (Ông Sáu Chạy Xe SH Zỏm) nên khi đi với 'My brother' (số ít) phải thêm '-es' -> 'watches'."
            }
        ]
    },
    {
        id: "gram_06_present_continuous",
        unit: "Phần 2: 6 Thì Cốt Lõi",
        level: "A1 - Cốt Lõi",
        icon: "🏃",
        title: "Bài 6: Thì Hiện Tại Tiếp Diễn (Present Continuous)",
        summary: "Diễn tả hành động ĐANG diễn ra ngay lúc nói.",
        coreIdea: "Cứ dịch sang tiếng Việt có chữ 'ĐANG làm gì đó ngay bây giờ' thì dùng Hiện tại tiếp diễn. Công thức bắt buộc phải có đủ 2 mảnh ghép: 'am/is/are' + 'V-ing' (thiếu 1 trong 2 là sai!).",
        formulas: [
            {
                type: "Khẳng định (+)",
                rule: "S + am / is / are + V-ing",
                note: "Quy tắc thêm -ing: bỏ 'e' ở cuối (make -> making), gấp đôi phụ âm cuối nếu 1 nguyên âm kẹp giữa (run -> running, sit -> sitting)"
            },
            {
                type: "Phủ định (-)",
                rule: "S + am / is / are + NOT + V-ing",
                note: "I am not working / She isn't sleeping / They aren't playing"
            },
            {
                type: "Nghi vấn (?)",
                rule: "Am / Is / Are + S + V-ing ?",
                note: "What are you doing right now? (Bây giờ bạn đang làm gì thế?)"
            },
            {
                type: "Dấu hiệu nhận biết",
                rule: "now, right now, at the moment, at present, Look! (Nhìn kìa!), Listen! (Nghe kìa!), Be quiet!",
                note: "Thấy câu cảm thán có dấu chấm than (!) ở đầu câu -> 99% chia Hiện tại tiếp diễn!"
            }
        ],
        memoryTip: "💡 Tuyệt đối lưu ý: Động từ chỉ trạng thái/cảm xúc (like, love, want, know, understand, need, believe) KHÔNG chia V-ing mà dùng Hiện tại đơn! (Nói 'I understand now' chứ không nói 'I am understanding').",
        examples: [
            {
                en: "Listen! Someone is knocking at the door.",
                vi: "Nghe kìa! Có ai đó đang gõ cửa.",
                breakdown: "Dấu hiệu 'Listen!' -> hành động đang xảy ra -> 'is knocking'."
            },
            {
                en: "We are studying English grammar right now.",
                vi: "Ngay lúc này chúng tôi đang học ngữ pháp tiếng Anh.",
                breakdown: "We + are + studying (đang học)."
            },
            {
                en: "Please be quiet! The baby is sleeping.",
                vi: "Làm ơn giữ yên lặng! Em bé đang ngủ.",
                breakdown: "The baby (số ít) + is + sleeping."
            }
        ],
        quiz: [
            {
                q: "Look! The bus _____.",
                options: ["comes", "is coming", "come", "coming"],
                answer: 1,
                explain: "Có dấu hiệu 'Look!' (Nhìn kìa!) báo hiệu sự việc đang diễn ra trước mắt -> chia 'is coming'."
            },
            {
                q: "What _____ you _____ at the moment?",
                options: ["do / do", "are / do", "are / doing", "is / doing"],
                answer: 2,
                explain: "'at the moment' (ngay lúc này) là dấu hiệu của Hiện tại tiếp diễn -> 'What are you doing?'."
            },
            {
                q: "My kids _____ video games in the living room right now.",
                options: ["is playing", "are playing", "play", "playing"],
                answer: 1,
                explain: "'My kids' (số nhiều) + dấu hiệu 'right now' -> 'are playing'."
            },
            {
                q: "I _____ a নতুন (new) laptop now. Mine is broken.",
                options: ["am needing", "need", "needs", "needing"],
                answer: 1,
                explain: "Dù có 'now' nhưng 'need' (cần) là động từ chỉ trạng thái (Stative Verb) không chia V-ing -> dùng Hiện tại đơn 'need'."
            },
            {
                q: "Take an umbrella with you. It _____ outside.",
                options: ["rains", "rain", "is raining", "rained"],
                answer: 2,
                explain: "Ngữ cảnh khuyên mang theo ô vì trời hiện ĐANG mưa bên ngoài -> 'is raining'."
            }
        ]
    },
    {
        id: "gram_07_past_simple",
        unit: "Phần 2: 6 Thì Cốt Lõi",
        level: "A1 - Cốt Lõi",
        icon: "⏪",
        title: "Bài 7: Thì Quá Khứ Đơn (Past Simple)",
        summary: "Kể lại hành động ĐÃ xảy ra và ĐÃ kết thúc hoàn toàn trong quá khứ.",
        coreIdea: "Khi nói về chuyện ngày hôm qua, tuần trước, năm ngoái (đã chấm dứt rồi), ta lùi động từ về Quá khứ: To Be biến thành 'was / were', còn Động từ thường thì thêm đuôi '-ed' hoặc tra cột 2 (V2) bảng bất quy tắc!",
        formulas: [
            {
                type: "Với To Be (was / were)",
                rule: "I / He / She / It / Số ít + WAS | You / We / They / Số nhiều + WERE",
                note: "Phủ định: wasn't / weren't. Câu hỏi: Was/Were + S ...?"
            },
            {
                type: "Khẳng định Động từ thường (+)",
                rule: "S + V-ed / V2 (Bất quy tắc)",
                note: "Hợp quy tắc: work -> worked, play -> played. Bất quy tắc: go -> went, see -> saw, buy -> bought, eat -> ate, have -> had"
            },
            {
                type: "Phủ định (-) & Nghi vấn (?)",
                rule: "(-) S + didn't + V (nguyên mẫu) | (?) Did + S + V (nguyên mẫu) ?",
                note: "Cực kỳ quan trọng: Đã có 'did' hoặc 'didn't' thì động từ chính trả về NGUYÊN MẪU!"
            },
            {
                type: "Dấu hiệu nhận biết",
                rule: "yesterday (hôm qua), last night/week/month/year, ... ago (2 days ago), in + năm quá khứ (in 2018)",
                note: "Cứ thấy mốc thời gian đã qua là chia Quá khứ đơn!"
            }
        ],
        memoryTip: "💡 Bẫy kinh điển cần tránh: Nhiều người viết 'I didn't went' -> SAI! Vì 'didn't' đã gánh phần quá khứ rồi, nên chữ 'went' phải trả về nguyên mẫu là 'I didn't go'!",
        examples: [
            {
                en: "We visited Da Nang last summer.",
                vi: "Chúng tôi đã đi thăm Đà Nẵng vào mùa hè năm ngoái.",
                breakdown: "Dấu hiệu 'last summer' -> động từ 'visit' thêm '-ed' thành 'visited'."
            },
            {
                en: "She bought a new dress yesterday, but she didn't wear it.",
                vi: "Hôm qua cô ấy đã mua một chiếc váy mới, nhưng cô ấy đã không mặc nó.",
                breakdown: "buy -> bought (cột 2), phủ định dùng 'didn't wear' (nguyên mẫu)."
            },
            {
                en: "Where were you last night?",
                vi: "Tối hôm qua bạn đã ở đâu?",
                breakdown: "Chủ ngữ 'you' đi với To Be quá khứ là 'were'."
            }
        ],
        quiz: [
            {
                q: "I _____ to the cinema with my best friend last night.",
                options: ["go", "goes", "went", "gone"],
                answer: 2,
                explain: "Dấu hiệu 'last night' (tối qua) -> chia Quá khứ đơn. Quá khứ (V2) của 'go' là 'went'."
            },
            {
                q: "They _____ happy with the hotel service two days ago.",
                options: ["wasn't", "weren't", "didn't", "aren't"],
                answer: 1,
                explain: "'happy' là tính từ nên phải dùng động từ To Be (không dùng didn't). Chủ ngữ 'They' số nhiều ở quá khứ dùng 'weren't'."
            },
            {
                q: "Why _____ you call me yesterday?",
                options: ["don't", "weren't", "didn't", "not"],
                answer: 2,
                explain: "'call' là động từ thường + dấu hiệu 'yesterday' -> mượn trợ động từ quá khứ 'didn't'."
            },
            {
                q: "Did she _____ the email to the manager this morning?",
                options: ["send", "sent", "sends", "sending"],
                answer: 0,
                explain: "Trong câu hỏi đã có trợ động từ 'Did' ở đầu câu, nên động từ chính bắt buộc ở dạng nguyên mẫu -> 'send'."
            },
            {
                q: "Mozart _____ more than 600 pieces of music.",
                options: ["writes", "wrote", "writed", "was write"],
                answer: 1,
                explain: "Sự việc hoàn toàn thuộc về quá khứ -> dùng Quá khứ đơn. Cột 2 của 'write' là 'wrote'."
            }
        ]
    },
    {
        id: "gram_08_future_will_goingto",
        unit: "Phần 2: 6 Thì Cốt Lõi",
        level: "A2 - Giao Tiếp",
        icon: "🚀",
        title: "Bài 8: Tương Lai Đơn (Will) vs Tương Lai Gần (Be going to)",
        summary: "Phân biệt chuẩn xác khi nào dùng 'will' và khi nào dùng 'be going to'.",
        coreIdea: "Cả hai đều dịch là 'SẼ làm gì', nhưng: Dùng 'WILL' khi bạn vừa nảy ra quyết định ngay lúc đang nói, hứa hẹn, hoặc dự đoán không có căn cứ. Dùng 'BE GOING TO' khi bạn ĐÃ LÊN KẾ HOẠCH từ trước, hoặc nhìn thấy dấu hiệu rõ ràng sắp xảy ra (như nhìn mây đen biết trời sắp mưa)!",
        formulas: [
            {
                type: "Tương lai đơn (WILL)",
                rule: "(+) S + will + V (nguyên mẫu) | (-) S + won't + V | (?) Will + S + V ?",
                note: "Dùng cho: Quyết định tức thì, lời hứa (I promise), đề nghị giúp đỡ, dự đoán (I think, maybe, probably)"
            },
            {
                type: "Tương lai gần (BE GOING TO)",
                rule: "(+) S + am/is/are + going to + V (nguyên mẫu)",
                note: "Dùng cho: Kế hoạch/dự định đã chuẩn bị trước, hoặc dự đoán có bằng chứng ngay trước mắt"
            },
            {
                type: "Dấu hiệu tương lai",
                rule: "tomorrow (ngày mai), next week/month/year, soon, in the future, tonight",
                note: "won't là viết tắt của will not"
            }
        ],
        memoryTip: "💡 Ví dụ siêu dễ nhớ: Điện thoại reo, bạn bảo 'Để tôi nghe cho!' -> vừa quyết định lúc đó nên nói 'I WILL answer it!'. Còn nếu bạn đã mua vé máy bay đi Đà Lạt tuần sau -> có kế hoạch rồi nên nói 'I AM GOING TO visit Da Lat next week!'",
        examples: [
            {
                en: "The bag looks heavy. I will help you carry it!",
                vi: "Chiếc túi trông nặng quá. Tôi sẽ giúp bạn xách nó nhé!",
                breakdown: "Quyết định giúp đỡ ngay tại thời điểm nói -> dùng 'will help'."
            },
            {
                en: "Look at those dark clouds! It is going to rain.",
                vi: "Nhìn những đám mây đen kìa! Trời sắp mưa rồi.",
                breakdown: "Có bằng chứng rõ ràng (mây đen) -> dùng 'is going to rain'."
            },
            {
                en: "We bought the tickets. We are going to watch a movie tonight.",
                vi: "Chúng tôi đã mua vé rồi. Tối nay chúng tôi sẽ đi xem phim.",
                breakdown: "Đã mua vé (kế hoạch từ trước) -> dùng 'are going to watch'."
            }
        ],
        quiz: [
            {
                q: "A: 'There's no milk left in the fridge.' — B: 'Really? I _____ go and buy some now.'",
                options: ["am going to", "will", "going to", "went"],
                answer: 1,
                explain: "B vừa mới biết tin hết sữa và quyết định đi mua ngay lúc nói -> dùng 'will'."
            },
            {
                q: "Look at that car driving so fast! It _____ crash into the tree!",
                options: ["will", "is going to", "crashes", "going to"],
                answer: 1,
                explain: "Dự đoán có bằng chứng nhìn thấy rõ trước mắt ('Look at that car driving so fast!') -> dùng 'is going to'."
            },
            {
                q: "I think our team _____ win the match tomorrow.",
                options: ["will", "is going to", "wins", "won"],
                answer: 0,
                explain: "Dự đoán chủ quan đi kèm 'I think / I believe / Maybe' -> dùng 'will'."
            },
            {
                q: "She has saved enough money. She _____ buy a new motorbike next month.",
                options: ["will", "is going to", "buys", "bought"],
                answer: 1,
                explain: "Cô ấy đã tiết kiệm đủ tiền từ trước (có kế hoạch và chuẩn bị sẵn) -> dùng 'is going to'."
            },
            {
                q: "Don't worry! I promise I _____ tell anyone your secret.",
                options: ["not will", "won't", "aren't going to", "didn't"],
                answer: 1,
                explain: "Lời hứa ('I promise') luôn dùng thì Tương lai đơn: 'won't' (will not)."
            }
        ]
    },
    {
        id: "gram_09_present_perfect",
        unit: "Phần 2: 6 Thì Cốt Lõi",
        level: "A2 - Trọng Tâm",
        icon: "🔗",
        title: "Bài 9: Thì Hiện Tại Hoàn Thành (Present Perfect)",
        summary: "Cầu nối giữa Quá khứ và Hiện tại: Đã làm từ trước và vẫn còn kết quả tới nay.",
        coreIdea: "Khác với Quá khứ đơn (đã chấm dứt hoàn toàn), Hiện tại hoàn thành dùng cho: (1) Việc bắt đầu trong quá khứ và VẪN KÉO DÀI đến hiện tại, (2) Việc VỪA MỚI xảy ra, hoặc (3) Trải nghiệm tính đến thời điểm hiện tại (đã từng / chưa từng làm gì).",
        formulas: [
            {
                type: "Khẳng định (+)",
                rule: "I/You/We/They + HAVE + V3/ed | He/She/It + HAS + V3/ed",
                note: "V3/ed là Quá khứ phân từ (Cột 3 bảng bất quy tắc: go -> gone, see -> seen, eat -> eaten, do -> done)"
            },
            {
                type: "Phủ định (-) & Nghi vấn (?)",
                rule: "(-) S + haven't / hasn't + V3/ed | (?) Have / Has + S + V3/ed ?",
                note: "Have you ever been to Japan? (Bạn đã từng đến Nhật Bản bao giờ chưa?)"
            },
            {
                type: "Phân biệt FOR và SINCE",
                rule: "FOR + khoảng thời gian (for 5 years, for 2 months) | SINCE + mốc thời gian (since 2020, since Monday)",
                note: "Mẹo cực nhạy: Có đếm số lượng thời gian dùng FOR, có điểm bắt đầu dùng SINCE!"
            },
            {
                type: "Dấu hiệu vàng",
                rule: "just (vừa mới), already (đã...rồi), yet (chưa - cuối câu phủ định/hỏi), ever (đã từng), never (chưa bao giờ), recently, so far",
                note: "Cứ thấy since, for, already, yet, recently là chọn have/has + V3/ed!"
            }
        ],
        memoryTip: "💡 So sánh 1 phát hiểu ngay: 'I lost my key yesterday' (Quá khứ đơn - kể chuyện hôm qua). Còn 'I HAVE LOST my key' (Hiện tại hoàn thành - bây giờ vẫn đang mất, chưa vào nhà được!).",
        examples: [
            {
                en: "I have lived in this city for ten years.",
                vi: "Tôi đã sống ở thành phố này được 10 năm rồi (và hiện tại vẫn đang sống ở đây).",
                breakdown: "have lived + for ten years (khoảng thời gian 10 năm)."
            },
            {
                en: "She has worked here since 2021.",
                vi: "Cô ấy đã làm việc ở đây từ năm 2021.",
                breakdown: "has worked + since 2021 (mốc thời gian)."
            },
            {
                en: "Have you finished your report yet?",
                vi: "Bạn đã hoàn thành báo cáo của mình chưa?",
                breakdown: "'yet' đứng cuối câu hỏi của thì Hiện tại hoàn thành."
            }
        ],
        quiz: [
            {
                q: "We have known each other _____ more than five years.",
                options: ["since", "for", "in", "ago"],
                answer: 1,
                explain: "'more than five years' (hơn 5 năm) là một KHOẢNG thời gian -> dùng 'for'."
            },
            {
                q: "Mr. David _____ in this company since he graduated from university.",
                options: ["worked", "works", "has worked", "is working"],
                answer: 2,
                explain: "Có dấu hiệu 'since' + mệnh đề quá khứ đơn -> vế chính chia Hiện tại hoàn thành: 'has worked'."
            },
            {
                q: "I haven't received the confirmation email _____.",
                options: ["already", "just", "yet", "ever"],
                answer: 2,
                explain: "Trong câu phủ định ('haven't received'), từ đứng ở cuối câu mang nghĩa 'vẫn chưa' là 'yet'."
            },
            {
                q: "This is the best movie I _____ ever _____!",
                options: ["did / see", "have / saw", "have / seen", "has / seen"],
                answer: 2,
                explain: "Cấu trúc trải nghiệm với 'ever' dùng Hiện tại hoàn thành: I + have + V3 (cột 3 của see là 'seen')."
            },
            {
                q: "She _____ just _____ back from her business trip.",
                options: ["has / come", "have / come", "did / come", "is / coming"],
                answer: 0,
                explain: "Dấu hiệu 'just' (vừa mới) + chủ ngữ 'She' -> dùng 'has just come' (V3 của come là come)."
            }
        ]
    },
    {
        id: "gram_10_past_continuous",
        unit: "Phần 2: 6 Thì Cốt Lõi",
        level: "A2 - Giao Tiếp",
        icon: "⏳",
        title: "Bài 10: Thì Quá Khứ Tiếp Diễn (Past Continuous)",
        summary: "Diễn tả hành động ĐANG xảy ra tại một giờ cụ thể trong quá khứ, hoặc đang diễn ra thì việc khác cắt ngang.",
        coreIdea: "Nếu hôm qua có câu 'Yesterday' thì dùng Quá khứ đơn, nhưng nếu có GIỜ CỤ THỂ trong quá khứ ('At 8 PM yesterday' - Lúc 8 giờ tối qua đang làm gì) hoặc đang làm việc A thì việc B bất ngờ xen vào, ta dùng Quá khứ tiếp diễn (was/were + V-ing)!",
        formulas: [
            {
                type: "Công thức chung",
                rule: "I/He/She/It + WAS + V-ing | You/We/They + WERE + V-ing",
                note: "Phủ định: wasn't / weren't + V-ing. Câu hỏi: Was/Were + S + V-ing?"
            },
            {
                type: "Hành động đang diễn ra thì bị cắt ngang",
                rule: "Đang diễn ra (kéo dài): WAS/WERE + V-ing | Cắt ngang (ngắn): QUÁ KHỨ ĐƠN (V-ed/V2)",
                note: "Thường nối bằng WHEN (khi) hoặc WHILE (trong khi)"
            },
            {
                type: "Hai hành động song song trong quá khứ",
                rule: "While + S1 + was/were + V-ing, S2 + was/were + V-ing",
                note: "Trong khi mẹ đang nấu ăn thì bố đang đọc báo."
            }
        ],
        memoryTip: "💡 Mẹo làm bài thi cực nhanh: Sau chữ 'WHILE' (trong khi) hầu như luôn chia 'WAS/WERE + V-ing'. Sau chữ 'WHEN' (khi việc gì ập tới) thường chia Quá khứ đơn (V-ed/V2)!",
        examples: [
            {
                en: "I was having dinner when the phone rang.",
                vi: "Tôi đang ăn tối thì chuông điện thoại reo lên.",
                breakdown: "Đang ăn tối (kéo dài: was having) thì điện thoại reo cắt ngang (ngắn: rang)."
            },
            {
                en: "At 9 PM last night, she was studying for her exam.",
                vi: "Vào lúc 9 giờ tối qua, cô ấy đang ôn thi.",
                breakdown: "Có giờ cụ thể (At 9 PM) + quá khứ (last night) -> 'was studying'."
            },
            {
                en: "While I was walking home, it started to rain.",
                vi: "Trong khi tôi đang đi bộ về nhà thì trời bắt đầu mưa.",
                breakdown: "Sau 'While' chia 'was walking', hành động xen vào chia 'started'."
            }
        ],
        quiz: [
            {
                q: "What _____ you _____ at 8 o'clock last night?",
                options: ["did / do", "were / doing", "are / doing", "was / doing"],
                answer: 1,
                explain: "Có giờ cụ thể 'at 8 o'clock' + trong quá khứ 'last night' + chủ ngữ 'you' -> 'were doing'."
            },
            {
                q: "We were watching TV when the power _____ out.",
                options: ["was going", "goes", "went", "gone"],
                answer: 2,
                explain: "Đang xem TV ('were watching') thì mất điện bất ngờ cắt ngang -> dùng Quá khứ đơn 'went' (go out)."
            },
            {
                q: "While she _____ dinner, she accidentally burned her hand.",
                options: ["cooked", "is cooking", "was cooking", "cooks"],
                answer: 2,
                explain: "Sau 'While' chỉ hành động đang diễn ra làm nền ('đang nấu tối') -> dùng 'was cooking'."
            },
            {
                q: "While my mother was cooking, my father _____ the garden.",
                options: ["watered", "was watering", "waters", "is watering"],
                answer: 1,
                explain: "Hai hành động diễn ra song song cùng lúc trong quá khứ với 'While' -> cả hai vế đều chia 'was/were + V-ing'."
            },
            {
                q: "I saw Mary yesterday while she _____ for the bus.",
                options: ["waited", "was waiting", "is waiting", "waits"],
                answer: 1,
                explain: "Sau 'while' diễn tả hành động đang diễn ra lúc đó -> 'was waiting'."
            }
        ]
    },

    // ========================================================================
    // PHẦN 3: CẤU TRÚC GIAO TIẾP HÀNG NGÀY (NÓI TỰ NHIÊN NHƯ BẢN XỨ)
    // ========================================================================
    {
        id: "gram_11_modal_verbs",
        unit: "Phần 3: Giao Tiếp Thực Tế",
        level: "A1-A2 - Giao Tiếp",
        icon: "⚡",
        title: "Bài 11: Động Từ Khuyết Thiếu (Can, Could, Should, Must, Have to)",
        summary: "Nhóm từ quyền năng nhất giao tiếp: Không cần chia theo chủ ngữ, theo sau luôn là V nguyên mẫu!",
        coreIdea: "Động từ khuyết thiếu (Modal Verbs) cực kỳ dễ dùng vì: (1) Đi với chủ ngữ nào (I, You, He, She...) cũng GIỮ NGUYÊN không thêm s/es, (2) Động từ đứng ngay sau nó LUÔN Ở DẠNG NGUYÊN MẪU (không to, không ing)!",
        formulas: [
            {
                type: "Công thức Vàng",
                rule: "S + can / could / should / must / will / may + V (nguyên mẫu)",
                note: "Phủ định: thêm NOT ngay sau (cannot/can't, shouldn't, mustn't)"
            },
            {
                type: "CAN / COULD (Có thể)",
                rule: "Can: Khả năng ở hiện tại | Could: Khả năng trong quá khứ hoặc lời nhờ vả lịch sự",
                note: "Could you please open the window? (Bạn mở giúp tôi cửa sổ được không? - rất lịch sự)"
            },
            {
                type: "SHOULD (Nên - Lời khuyên)",
                rule: "S + should / shouldn't + V (nguyên mẫu)",
                note: "You should drink more water. (Bạn nên uống nhiều nước hơn.)"
            },
            {
                type: "MUST vs HAVE TO (Phải làm gì)",
                rule: "Must: Bắt buộc chủ quan | Mustn't: CẤM ĐOÁN! | Don't have to: Không cần phải làm",
                note: "Lưu ý: 'mustn't' là CẤM không được làm, còn 'don't have to' là không bắt buộc!"
            }
        ],
        memoryTip: "💡 Ghi nhớ: Đứng sau Can, Could, Should, Must, Will -> Động từ luôn 'nguyên vẹn' 100% (Ví dụ: 'She can swim' chứ KHÔNG BAO GIỜ là 'She can swims' hay 'She can to swim').",
        examples: [
            {
                en: "She can speak three languages fluently.",
                vi: "Cô ấy có thể nói trôi chảy 3 thứ tiếng.",
                breakdown: "Sau 'can' dùng động từ nguyên mẫu 'speak' (dù chủ ngữ là She)."
            },
            {
                en: "You look tired. You should take a rest.",
                vi: "Trông bạn mệt đấy. Bạn nên nghỉ ngơi đi.",
                breakdown: "Khuyên bảo nhẹ nhàng dùng 'should + V nguyên mẫu'."
            },
            {
                en: "You must not smoke in the hospital.",
                vi: "Bạn tuyệt đối không được hút thuốc trong bệnh viện.",
                breakdown: "'must not (mustn't)' mang nghĩa cấm đoán theo nội quy."
            }
        ],
        quiz: [
            {
                q: "He can _____ the guitar very well.",
                options: ["plays", "to play", "playing", "play"],
                answer: 3,
                explain: "Sau động từ khuyết thiếu 'can' luôn là động từ nguyên mẫu không 'to' -> 'play'."
            },
            {
                q: "You have a fever. You _____ go out in the rain.",
                options: ["should", "shouldn't", "must", "can"],
                answer: 1,
                explain: "Đang bị sốt ('have a fever') thì lời khuyên hợp lý là KHÔNG NÊN đi ra mưa -> 'shouldn't'."
            },
            {
                q: "Tomorrow is Sunday, so I _____ get up early.",
                options: ["mustn't", "don't have to", "should", "can't"],
                answer: 1,
                explain: "Ngày mai là Chủ nhật nên 'không cần phải' dậy sớm -> dùng 'don't have to' (không bắt buộc). Không dùng 'mustn't' vì mustn't là cấm đoán!"
            },
            {
                q: "_____ you please send me that document?",
                options: ["Should", "Must", "Could", "May"],
                answer: 2,
                explain: "Khi nhờ vả ai đó một cách lịch sự ('... bạn làm ơn gửi giúp tôi ...'), ta dùng 'Could you please + V?'."
            },
            {
                q: "Passengers _____ wear seatbelts when the plane takes off.",
                options: ["must", "can't", "may not", "don't have to"],
                answer: 0,
                explain: "Quy định bắt buộc an toàn trên máy bay -> dùng 'must' (bắt buộc phải thắt dây an toàn)."
            }
        ]
    },
    {
        id: "gram_12_questions_wh",
        unit: "Phần 3: Giao Tiếp Thực Tế",
        level: "A1-A2 - Giao Tiếp",
        icon: "❓",
        title: "Bài 12: Bí Quyết Đặt Mọi Câu Hỏi (Yes/No & Wh-Questions)",
        summary: "Nắm 1 công thức duy nhất để tự tin hỏi bất cứ điều gì trong tiếng Anh.",
        coreIdea: "Người mất gốc thường lúng túng khi đặt câu hỏi. Thực ra mọi câu hỏi tiếng Anh đều tuân theo 1 khuôn mẫu: 'Từ để hỏi (Wh-) + Trợ động từ + Chủ ngữ (S) + Động từ nguyên mẫu?'. Nếu không có từ để hỏi ở đầu, nó chính là câu hỏi Yes/No!",
        formulas: [
            {
                type: "Công thức Vàng Đặt Câu Hỏi",
                rule: "(Wh-Word) + Trợ động từ (do/does/did/will/can) + S + V (nguyên mẫu) ?",
                note: "Nếu câu dùng To Be (am/is/are/was/were) thì đảo trực tiếp To Be lên trước S!"
            },
            {
                type: "7 Từ Để Hỏi Cốt Lõi",
                rule: "What (Cái gì) | Where (Ở đâu) | When (Khi nào) | Why (Tại sao) | Who (Ai) | Which (Cái nào) | How (Như thế nào)",
                note: "Mở rộng với How: How much (Bao nhiêu tiền), How many (Bao nhiêu cái), How often (Bao lâu 1 lần), How long (Bao lâu), How far (Bao xa)"
            }
        ],
        memoryTip: "💡 Không bao giờ quên Trợ động từ đứng trước Chủ ngữ! Ví dụ muốn hỏi 'Bạn sống ở đâu?': Không nói 'Where you live?' mà phải có trợ động từ 'do' ở giữa -> 'Where DO you live?'!",
        examples: [
            {
                en: "Where do you work?",
                vi: "Bạn làm việc ở đâu?",
                breakdown: "Where (Từ để hỏi) + do (Trợ động từ) + you (Chủ ngữ) + work (Động từ)."
            },
            {
                en: "How often does she go to the gym?",
                vi: "Cô ấy có thường xuyên đi tập gym không (bao lâu một lần)?",
                breakdown: "How often + does (vì chủ ngữ là she) + she + go."
            },
            {
                en: "Why did they cancel the meeting yesterday?",
                vi: "Tại sao hôm qua họ lại hủy cuộc họp?",
                breakdown: "Quá khứ ('yesterday') -> dùng trợ động từ 'did' + cancel nguyên mẫu."
            }
        ],
        quiz: [
            {
                q: "Where _____ your brother live?",
                options: ["is", "do", "does", "are"],
                answer: 2,
                explain: "'live' là động từ thường, chủ ngữ 'your brother' là số ít (He) -> mượn trợ động từ 'does'."
            },
            {
                q: "_____ does this jacket cost? — It's 45 dollars.",
                options: ["How many", "How much", "How often", "How long"],
                answer: 1,
                explain: "Hỏi giá tiền ('45 dollars') ta luôn dùng 'How much'."
            },
            {
                q: "_____ do you visit your grandparents? — Twice a month.",
                options: ["How long", "How far", "How often", "When"],
                answer: 2,
                explain: "Câu trả lời là 'Twice a month' (2 lần một tháng - chỉ tần suất) -> hỏi bằng 'How often' (Bao lâu một lần)."
            },
            {
                q: "What time _____ the train arrive yesterday?",
                options: ["do", "does", "did", "was"],
                answer: 2,
                explain: "Có 'yesterday' (quá khứ) và động từ thường 'arrive' -> dùng trợ động từ quá khứ 'did'."
            },
            {
                q: "_____ is knocking at the door?",
                options: ["Who", "Whom", "Where", "Why"],
                answer: 0,
                explain: "Hỏi 'Ai đang gõ cửa?' làm chủ ngữ của hành động -> dùng 'Who'."
            }
        ]
    },
    {
        id: "gram_13_gerund_infinitive",
        unit: "Phần 3: Giao Tiếp Thực Tế",
        level: "A2-B1 - Trọng Tâm",
        icon: "🔀",
        title: "Bài 13: Khi Nào Dùng To + V, Khi Nào Dùng V-ing?",
        summary: "Quy tắc ghép 2 động từ đi liền nhau trong tiếng Anh.",
        coreIdea: "Khi 2 động từ đứng cạnh nhau (ví dụ: 'thích học', 'muốn đi', 'quyết định mua'), động từ thứ 2 bắt buộc phải biến hình thành 'To + V' hoặc 'V-ing' tùy thuộc vào động từ thứ nhất!",
        formulas: [
            {
                type: "Nhóm + TO V (Hướng tới tương lai/mong muốn)",
                rule: "want (muốn), need (cần), decide (quyết định), plan (lên kế hoạch), hope (hy vọng), promise (hứa), agree (đồng ý), learn (học), refuse (từ chối) + TO V",
                note: "Cấu trúc cực hay dùng: It is + Tính từ + TO V (It is easy to learn English)"
            },
            {
                type: "Nhóm + V-ING (Thói quen/Sở thích/Đã trải nghiệm)",
                rule: "enjoy (thích), love, like, hate, mind (ngại/phiền), finish (hoàn thành), avoid (tránh), suggest (gợi ý), keep (tiếp tục), spend time (dành thời gian) + V-ING",
                note: "Quy tắc bất di bất dịch: SAU GIỚI TỪ (in, on, at, of, about, for, without, after, before) LUÔN DÙNG V-ING!"
            },
            {
                type: "Cụm từ cố định hay thi",
                rule: "look forward to + V-ing (mong đợi) | be interested in + V-ing | be good at + V-ing",
                note: "Đừng bị lừa bởi chữ 'to' trong 'look forward to' — sau nó là V-ing!"
            }
        ],
        memoryTip: "💡 Mẹo vàng 1 giây: Cứ nhìn thấy ngay trước chỗ trống là Giới từ (in, on, at, of, for, about, without, after, before) -> Nhắm mắt chọn ngay V-ING!",
        examples: [
            {
                en: "I decided to learn English seriously this year.",
                vi: "Tôi đã quyết định học tiếng Anh nghiêm túc trong năm nay.",
                breakdown: "Sau 'decide' luôn đi với 'to + V nguyên mẫu' (to learn)."
            },
            {
                en: "She enjoys listening to music in her free time.",
                vi: "Cô ấy thích nghe nhạc vào thời gian rảnh.",
                breakdown: "Sau 'enjoy' luôn đi với 'V-ing' (listening)."
            },
            {
                en: "Thank you for helping me with my project.",
                vi: "Cảm ơn bạn vì đã giúp tôi làm dự án.",
                breakdown: "Sau giới từ 'for' bắt buộc dùng 'V-ing' (helping)."
            }
        ],
        quiz: [
            {
                q: "My family plans _____ to Phu Quoc Island next month.",
                options: ["travel", "travelling", "to travel", "travelled"],
                answer: 2,
                explain: "Sau động từ 'plan' (lên kế hoạch) ta luôn dùng 'to + V' -> 'to travel'."
            },
            {
                q: "Would you mind _____ the window? It's a bit cold in here.",
                options: ["close", "to close", "closing", "closed"],
                answer: 2,
                explain: "Sau động từ 'mind' (phiền/ngại) bắt buộc dùng 'V-ing' -> 'Would you mind closing...?'."
            },
            {
                q: "She left the office without _____ goodbye to anyone.",
                options: ["say", "to say", "saying", "said"],
                answer: 2,
                explain: "'without' (mà không) là một Giới từ. Sau mọi giới từ đều dùng 'V-ing' -> 'saying'."
            },
            {
                q: "Have you finished _____ that book yet?",
                options: ["read", "reading", "to read", "reads"],
                answer: 1,
                explain: "Sau 'finish' (hoàn thành) luôn cộng với 'V-ing' -> 'reading'."
            },
            {
                q: "We are really looking forward to _____ you soon.",
                options: ["see", "seeing", "saw", "be seen"],
                answer: 1,
                explain: "Cấu trúc kinh điển 'look forward to + V-ing' (mong đợi làm gì) -> 'seeing'."
            }
        ]
    },

    // ========================================================================
    // PHẦN 4: NGỮ PHÁP NÂNG CẤP & LUYỆN THI (A2 - B1 - TOEIC)
    // ========================================================================
    {
        id: "gram_14_comparisons",
        unit: "Phần 4: Nâng Cấp & Thi",
        level: "A2-B1 - Thông Dụng",
        icon: "⚖️",
        title: "Bài 14: Các Cấp So Sánh (Bằng, Hơn & Nhất)",
        summary: "Nắm trọn công thức so sánh tính từ ngắn, tính từ dài và các từ bất quy tắc.",
        coreIdea: "Trước khi so sánh, chỉ cần nhìn độ dài của Tính từ: (1) Tính từ NGẮN (1 âm tiết như tall, fast, big, hoặc 2 âm tiết tận cùng bằng -y như happy, easy) -> thêm đuôi '-er / -est'. (2) Tính từ DÀI (từ 2 âm tiết trở lên như beautiful, expensive, important) -> thêm từ 'more / the most' ở phía trước!",
        formulas: [
            {
                type: "1. So sánh Bằng (as ... as)",
                rule: "S1 + be/V + AS + adj/adv + AS + S2",
                note: "Dùng cho cả tính từ ngắn lẫn dài! (He is as tall as his father)"
            },
            {
                type: "2. So sánh Hơn (... than)",
                rule: "Ngắn: Adj-ER + than | Dài: MORE + Adj + than",
                note: "taller than, bigger than, happier than | more expensive than, more modern than"
            },
            {
                type: "3. So sánh Nhất (the ...)",
                rule: "Ngắn: THE + Adj-EST | Dài: THE MOST + Adj",
                note: "the tallest, the biggest, the happiest | the most beautiful, the most important"
            },
            {
                type: "Bất quy tắc bắt buộc thuộc",
                rule: "good/well -> better -> the best | bad/badly -> worse -> the worst | many/much -> more -> the most | little -> less -> the least",
                note: "Tuyệt đối không viết 'gooder' hay 'badder'!"
            }
        ],
        memoryTip: "💡 Dấu hiệu làm bài trắc nghiệm trong 2 giây: Thấy chữ 'THAN' ở sau chỗ trống -> chọn ngay So sánh hơn (-er / more). Thấy chữ 'THE' ở ngay trước chỗ trống (+ in the world / of all) -> chọn ngay So sánh nhất (-est / most)!",
        examples: [
            {
                en: "Living in the city is more expensive than living in the countryside.",
                vi: "Sống ở thành phố đắt đỏ hơn sống ở nông thôn.",
                breakdown: "'expensive' là tính từ dài (3 âm tiết) + có 'than' -> 'more expensive than'."
            },
            {
                en: "Mount Everest is the highest mountain in the world.",
                vi: "Đỉnh Everest là ngọn núi cao nhất thế giới.",
                breakdown: "'high' là tính từ ngắn + có 'the ... in the world' -> 'the highest'."
            },
            {
                en: "Your English is getting better and better!",
                vi: "Tiếng Anh của bạn đang ngày càng tốt hơn đấy!",
                breakdown: "So sánh hơn của 'good' là 'better'."
            }
        ],
        quiz: [
            {
                q: "Summer is usually _____ than spring in Vietnam.",
                options: ["hot", "hotter", "more hot", "the hottest"],
                answer: 1,
                explain: "Có chữ 'than' -> So sánh hơn. 'hot' là tính từ ngắn 1 âm tiết, gấp đôi phụ âm 't' -> 'hotter'."
            },
            {
                q: "Health is _____ thing in our life.",
                options: ["important", "more important", "the most important", "most important"],
                answer: 2,
                explain: "So sánh nhất của tính từ dài 'important' trong phạm vi 'in our life' -> 'the most important'."
            },
            {
                q: "This laptop is not as _____ as that one.",
                options: ["fast", "faster", "fastest", "more fast"],
                answer: 0,
                explain: "Trong cấu trúc so sánh bằng 'as ... as', tính từ ở giữa luôn giữ nguyên mẫu -> 'as fast as'."
            },
            {
                q: "Today's traffic is even _____ than yesterday's!",
                options: ["bad", "badder", "worse", "the worst"],
                answer: 2,
                explain: "Có 'than' -> dùng So sánh hơn. So sánh hơn bất quy tắc của 'bad' (tệ) là 'worse'."
            },
            {
                q: "She is one of _____ students in my class.",
                options: ["hard-working", "more hard-working", "the most hard-working", "harder-working"],
                answer: 2,
                explain: "Cấu trúc 'one of the + So sánh nhất + danh từ số nhiều' -> 'the most hard-working'."
            }
        ]
    },
    {
        id: "gram_15_passive_voice",
        unit: "Phần 4: Nâng Cấp & Thi",
        level: "B1 - Trọng Tâm",
        icon: "🔄",
        title: "Bài 15: Câu Bị Động (Passive Voice) - Hiểu Bản Chất Trong 3 Giây",
        summary: "Dùng khi chủ ngữ (thường là vật) ĐƯỢC hoặc BỊ tác động bởi hành động.",
        coreIdea: "Hãy nhìn vào Chủ ngữ đứng đầu câu: Nếu chủ ngữ là NGƯỜI tự làm hành động -> Câu chủ động. Nếu chủ ngữ là VẬT (ngôi nhà, bức thư, chiếc xe, báo cáo...) không thể tự làm mà phải ĐƯỢC làm bởi ai đó -> Dùng Câu Bị Động với công thức bất bại: BE + V3/ed!",
        formulas: [
            {
                type: "Công thức Gốc Bất Bại",
                rule: "S (Vật/Người chịu tác động) + BE (chia theo thì) + V3/ed (+ by O)",
                note: "Dù ở bất kỳ thì nào, câu bị động LUÔN LUÔN phải có BE + V3/ed!"
            },
            {
                type: "Hiện tại đơn Bị động",
                rule: "S + am / is / are + V3/ed",
                note: "English is spoken all over the world. (Tiếng Anh được nói trên toàn thế giới.)"
            },
            {
                type: "Quá khứ đơn Bị động",
                rule: "S + was / were + V3/ed",
                note: "This bridge was built in 1995. (Cây cầu này được xây dựng vào năm 1995.)"
            },
            {
                type: "Tương lai & Khuyết thiếu Bị động",
                rule: "S + will / can / must / should + BE + V3/ed",
                note: "The report will be sent tomorrow. (Bản báo cáo sẽ được gửi vào ngày mai.)"
            }
        ],
        memoryTip: "💡 Mẹo giải nhanh đề thi: Bước 1: Nhìn Chủ ngữ là Vật + nhìn sau chỗ trống có chữ 'BY + người' -> Chắc chắn 100% là Bị động (phải có Be + V3/ed). Bước 2: Nhìn thời gian (yesterday / every day / tomorrow) để chọn đúng dạng của 'Be'!",
        examples: [
            {
                en: "The light bulb was invented by Thomas Edison.",
                vi: "Bóng đèn sợi đốt được phát minh bởi Thomas Edison.",
                breakdown: "Bóng đèn (vật) + chuyện trong quá khứ + có 'by Thomas Edison' -> 'was invented'."
            },
            {
                en: "Our office is cleaned every morning.",
                vi: "Văn phòng của chúng tôi được dọn dẹp mỗi sáng.",
                breakdown: "Văn phòng (vật) + 'every morning' (Hiện tại đơn) -> 'is cleaned'."
            },
            {
                en: "All packages will be delivered before Friday.",
                vi: "Tất cả các kiện hàng sẽ được giao trước thứ Sáu.",
                breakdown: "Kiện hàng (vật) + tương lai -> 'will be delivered'."
            }
        ],
        quiz: [
            {
                q: "This famous novel _____ by a Vietnamese author in 1960.",
                options: ["wrote", "was written", "is written", "writes"],
                answer: 1,
                explain: "Chủ ngữ 'This famous novel' (Cuốn tiểu thuyết - vật) + có 'by' + năm quá khứ 'in 1960' -> Bị động quá khứ đơn: 'was written'."
            },
            {
                q: "Thousands of cars _____ in this factory every year.",
                options: ["produce", "are produced", "were produced", "produced"],
                answer: 1,
                explain: "Chủ ngữ 'Thousands of cars' (vật, số nhiều) + 'every year' (Hiện tại đơn) -> Bị động hiện tại đơn: 'are produced'."
            },
            {
                q: "The final decision will _____ by the director tomorrow.",
                options: ["make", "made", "be made", "making"],
                answer: 2,
                explain: "Chủ ngữ 'The final decision' (Quyết định cuối cùng - vật) + sau 'will' + có 'by the director' -> 'will be made'."
            },
            {
                q: "The meeting room _____ right now, so we can't use it.",
                options: ["is cleaning", "is being cleaned", "cleaned", "cleans"],
                answer: 1,
                explain: "Phòng họp ĐANG được dọn dẹp ngay lúc này ('right now') -> Bị động hiện tại tiếp diễn: 'is being cleaned'."
            },
            {
                q: "All mobile phones must _____ off during the examination.",
                options: ["turn", "turned", "be turned", "turning"],
                answer: 2,
                explain: "Điện thoại (vật) phải ĐƯỢC tắt đi -> Bị động với động từ khuyết thiếu 'must + be + V3/ed': 'must be turned'."
            }
        ]
    },
    {
        id: "gram_16_conditionals_relatives",
        unit: "Phần 4: Nâng Cấp & Thi",
        level: "B1 - Luyện Thi",
        icon: "🎯",
        title: "Bài 16: Câu Điều Kiện (If Loại 1 & 2) & Mệnh Đề Quan Hệ (Who, Which, That)",
        summary: "Hai chủ điểm ngữ pháp ăn điểm nhiều nhất trong giao tiếp nâng cao và bài thi TOEIC/B1.",
        coreIdea: "Câu điều kiện (If... thì...) giúp bạn diễn đạt giả thiết. Mệnh đề quan hệ (Who, Which, That) đóng vai trò như 'cầu nối' để giải thích rõ hơn cho danh từ đứng ngay trước nó mà không cần tách thành 2 câu rời rạc!",
        formulas: [
            {
                type: "Câu điều kiện Loại 1 (Có thể xảy ra ở hiện tại/tương lai)",
                rule: "If + S + V (Hiện tại đơn), S + WILL / CAN + V (nguyên mẫu)",
                note: "Lưu ý: Vế có IF chia Hiện tại đơn, vế chính mới có WILL! (Không bao giờ viết 'If it will rain'!)"
            },
            {
                type: "Câu điều kiện Loại 2 (Giả định TRÁI NGƯỢC với hiện tại)",
                rule: "If + S + V-ed/V2 (To be dùng WERE cho mọi ngôi), S + WOULD / COULD + V (nguyên mẫu)",
                note: "Ví dụ: If I were you, I would take that job. (Nếu tôi là bạn — sự thật tôi không phải là bạn!)"
            },
            {
                type: "Đại từ quan hệ: WHO / WHICH / THAT",
                rule: "Danh từ chỉ NGƯỜI + WHO + V ... | Danh từ chỉ VẬT + WHICH + V/S+V ...",
                note: "THAT có thể thay thế cho cả WHO và WHICH (trừ khi đứng sau dấu phẩy)"
            }
        ],
        memoryTip: "💡 Hai quy tắc vàng cần khắc cốt ghi tâm: (1) Đứng ngay sau danh từ chỉ NGƯỜI chọn WHO, ngay sau danh từ chỉ VẬT chọn WHICH! (2) Trong câu điều kiện If: Vế If hiện tại -> vế kia WILL; Vế If quá khứ (were/V2) -> vế kia WOULD!",
        examples: [
            {
                en: "If you study hard, you will pass the exam easily.",
                vi: "Nếu bạn học chăm chỉ, bạn sẽ vượt qua kỳ thi một cách dễ dàng.",
                breakdown: "Điều kiện có thật (Loại 1): If + study (HTĐ), you + will pass."
            },
            {
                en: "If I had a million dollars, I would travel around the world.",
                vi: "Nếu hiện tại tôi có 1 triệu đô, tôi sẽ đi du lịch vòng quanh thế giới.",
                breakdown: "Giả định không có thật ở hiện tại (Loại 2): If + had (V2), I + would travel."
            },
            {
                en: "The woman who lives next door is a famous singer.",
                vi: "Người phụ nữ sống ở nhà bên cạnh là một ca sĩ nổi tiếng.",
                breakdown: "'who' đứng ngay sau 'The woman' (chỉ người) để nối mệnh đề phụ."
            }
        ],
        quiz: [
            {
                q: "If it _____ tomorrow, we will stay at home and watch movies.",
                options: ["rain", "rains", "will rain", "rained"],
                answer: 1,
                explain: "Câu điều kiện loại 1 (vế sau có 'will stay'): Mệnh đề 'If' phải chia ở Hiện tại đơn dù có 'tomorrow'! Chủ ngữ 'it' -> 'rains'."
            },
            {
                q: "If I _____ you, I would apologize to her immediately.",
                options: ["am", "was", "were", "be"],
                answer: 2,
                explain: "Câu điều kiện loại 2 (vế sau có 'would apologize'): Động từ To Be trong mệnh đề If luôn dùng 'were' cho tất cả các ngôi ('If I were you')."
            },
            {
                q: "The laptop _____ I bought last week works very smoothly.",
                options: ["who", "whom", "which", "where"],
                answer: 2,
                explain: "Đứng ngay sau danh từ chỉ vật ('The laptop') -> dùng đại từ quan hệ 'which' (hoặc 'that')."
            },
            {
                q: "Do you know the man _____ is talking to our teacher?",
                options: ["which", "who", "whose", "where"],
                answer: 1,
                explain: "Đứng ngay sau danh từ chỉ người ('the man') và làm chủ ngữ cho động từ 'is talking' -> dùng 'who'."
            },
            {
                q: "If she knew his phone number, she _____ call him right now.",
                options: ["will", "would", "can", "shall"],
                answer: 1,
                explain: "Mệnh đề If chia ở quá khứ ('knew' - V2 của know) -> Đây là câu điều kiện loại 2, nên mệnh đề chính dùng 'would + V'."
            }
        ]
    }
];
