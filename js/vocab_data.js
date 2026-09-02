const vocabTopics = [
  {
    "topic": "CÔNG NGHỆ & TRUYỀN THÔNG",
    "words": [
      {
        "word": "app (n)",
        "ipa": "/æp/",
        "meaning": "ứng dụng",
        "example_en": "I use this app to learn English.",
        "example_vi": "Tôi dùng ứng dụng này để học tiếng Anh."
      },
      {
        "word": "blog (n)",
        "ipa": "/blɔg/",
        "meaning": "blog",
        "example_en": "She writes a blog about food.",
        "example_vi": "Cô ấy viết một trang blog về đồ ăn."
      },
      {
        "word": "call (n & v)",
        "ipa": "/kɔl/",
        "meaning": "gọi",
        "example_en": "Can you call me tomorrow?",
        "example_vi": "Bạn có thể gọi cho tôi vào ngày mai không?"
      },
      {
        "word": "camera (n)",
        "ipa": "/ˈkæmərə/",
        "meaning": "máy ảnh",
        "example_en": "He has a new camera.",
        "example_vi": "Anh ấy có một cái máy ảnh mới."
      },
      {
        "word": "cell phone (n)",
        "ipa": "/sɛl foʊn/",
        "meaning": "điện thoại di động",
        "example_en": "I need to buy a new cell phone.",
        "example_vi": "Tôi cần mua một chiếc điện thoại di động mới."
      },
      {
        "word": "chat (n)",
        "ipa": "/ʧæt/",
        "meaning": "trò chuyện",
        "example_en": "We had a long chat last night.",
        "example_vi": "Chúng tôi đã có một cuộc trò chuyện dài tối qua."
      },
      {
        "word": "chatroom (n)",
        "ipa": "/ˈtʃæt.ruːm/",
        "meaning": "phòng trò chuyện",
        "example_en": "He met his friend in an online chatroom.",
        "example_vi": "Anh ấy đã gặp bạn của mình trong một phòng trò chuyện trực tuyến."
      },
      {
        "word": "click (n & v)",
        "ipa": "/klɪk/",
        "meaning": "bấm vào",
        "example_en": "Click on this link to see the picture.",
        "example_vi": "Bấm vào liên kết này để xem bức tranh."
      },
      {
        "word": "copy (v)",
        "ipa": "/ˈkɑpi/",
        "meaning": "sao chép",
        "example_en": "Do not copy the answers from your friend.",
        "example_vi": "Đừng sao chép câu trả lời từ bạn của bạn."
      },
      {
        "word": "digital (adj)",
        "ipa": "/ˈdɪʤɪtəl/",
        "meaning": "kỹ thuật số",
        "example_en": "Do you have a digital watch?",
        "example_vi": "Bạn có một chiếc đồng hồ kỹ thuật số không?"
      },
      {
        "word": "digital camera (n)",
        "ipa": "/ˈdɪʤɪtəl ˈkæmərə/",
        "meaning": "máy ảnh kỹ thuật số",
        "example_en": "I take photos with my digital camera.",
        "example_vi": "Tôi chụp ảnh bằng máy ảnh kỹ thuật số của mình."
      },
      {
        "word": "document (n)",
        "ipa": "/ˈdɑkjəmɛnt/",
        "meaning": "tài liệu",
        "example_en": "Please read this document carefully.",
        "example_vi": "Vui lòng đọc tài liệu này cẩn thận."
      },
      {
        "word": "download (n & v)",
        "ipa": "/ˈdaʊnˌloʊd/",
        "meaning": "tải về",
        "example_en": "You can download the game for free.",
        "example_vi": "Bạn có thể tải trò chơi này về miễn phí."
      },
      {
        "word": "email (n & v)",
        "ipa": "/iˈmeɪl/",
        "meaning": "thư điện tử",
        "example_en": "Send me an email when you arrive.",
        "example_vi": "Hãy gửi cho tôi một email khi bạn đến nơi."
      },
      {
        "word": "enter (v)",
        "ipa": "/ˈɛnər/",
        "meaning": "đi vào",
        "example_en": "Please knock on the door before you enter.",
        "example_vi": "Vui lòng gõ cửa trước khi bạn đi vào."
      },
      {
        "word": "file (n)",
        "ipa": "/faɪl/",
        "meaning": "tài liệu",
        "example_en": "Where did you save the file?",
        "example_vi": "Bạn đã lưu tập tin ở đâu?"
      },
      {
        "word": "give somebody a call/ring (v)",
        "ipa": "/gɪv ˈsəmˌbɑdi ə kɔl/",
        "meaning": "gọi cho ai đó",
        "example_en": "Give me a call when you are ready.",
        "example_vi": "Hãy gọi cho tôi khi bạn đã sẵn sàng."
      },
      {
        "word": "headphones (n)",
        "ipa": "/ˈhɛdˌfoʊnz/",
        "meaning": "tai nghe",
        "example_en": "I wear headphones to listen to music.",
        "example_vi": "Tôi đeo tai nghe để nghe nhạc."
      },
      {
        "word": "internet (n)",
        "ipa": "/ˈɪntərˌnɛt/",
        "meaning": "internet",
        "example_en": "I use the internet every day.",
        "example_vi": "Tôi sử dụng internet mỗi ngày."
      },
      {
        "word": "keyboard (n)",
        "ipa": "/ˈkiˌbɔrd/",
        "meaning": "bàn phím",
        "example_en": "Some keys on my keyboard are broken.",
        "example_vi": "Một số phím trên bàn phím của tôi bị hỏng."
      },
      {
        "word": "laptop (computer) (n)",
        "ipa": "/ˈlæpˌtɑp/",
        "meaning": "máy tính xách tay",
        "example_en": "She brings her laptop to work.",
        "example_vi": "Cô ấy mang máy tính xách tay đến chỗ làm."
      },
      {
        "word": "link (technology) (n)",
        "ipa": "/lɪŋk/",
        "meaning": "liên kết",
        "example_en": "Can you send me the link to the website?",
        "example_vi": "Bạn có thể gửi cho tôi liên kết tới trang web không?"
      },
      {
        "word": "machine (n)",
        "ipa": "/məˈʃin/",
        "meaning": "máy móc",
        "example_en": "This machine helps us clean the floor.",
        "example_vi": "Cái máy này giúp chúng tôi lau sàn nhà."
      },
      {
        "word": "memory (n)",
        "ipa": "/ˈmɛməri/",
        "meaning": "ký ức",
        "example_en": "I have a good memory of my trip to Paris.",
        "example_vi": "Tôi có một ký ức đẹp về chuyến đi tới Paris."
      },
      {
        "word": "mobile (phone) (n)",
        "ipa": "/ˈmoʊbəl/",
        "meaning": "di động",
        "example_en": "What is your mobile phone number?",
        "example_vi": "Số điện thoại di động của bạn là gì?"
      },
      {
        "word": "online (adj & adv)",
        "ipa": "/ˈɔnˌlaɪn/",
        "meaning": "trực tuyến",
        "example_en": "I often buy clothes online.",
        "example_vi": "Tôi thường mua quần áo trực tuyến."
      },
      {
        "word": "password (n)",
        "ipa": "/ˈpæsˌwərd/",
        "meaning": "mật khẩu",
        "example_en": "You need a password to use this computer.",
        "example_vi": "Bạn cần một mật khẩu để sử dụng máy tính này."
      },
      {
        "word": "PC (personal computer) (n)",
        "ipa": "/ˈpiˈsi/",
        "meaning": "máy tính",
        "example_en": "I play games on my PC.",
        "example_vi": "Tôi chơi trò chơi trên máy tính của mình."
      },
      {
        "word": "phone (v & n)",
        "ipa": "/foʊn/",
        "meaning": "điện thoại",
        "example_en": "I will phone you tonight.",
        "example_vi": "Tôi sẽ điện thoại cho bạn tối nay."
      },
      {
        "word": "printer (n)",
        "ipa": "/ˈprɪnər/",
        "meaning": "máy in",
        "example_en": "The printer is out of paper.",
        "example_vi": "Máy in đã hết giấy."
      },
      {
        "word": "program (n)",
        "ipa": "/ˈproʊˌgræm/",
        "meaning": "chương trình",
        "example_en": "What is your favorite television program?",
        "example_vi": "Chương trình truyền hình yêu thích của bạn là gì?"
      },
      {
        "word": "radio (n)",
        "ipa": "/ˈreɪdiˌoʊ/",
        "meaning": "radio",
        "example_en": "My grandfather listens to the radio every morning.",
        "example_vi": "Ông của tôi nghe radio mỗi buổi sáng."
      },
      {
        "word": "record (v)",
        "ipa": "/ˈrɛkərd/",
        "meaning": "ghi",
        "example_en": "Let's record a video of the party.",
        "example_vi": "Hãy ghi lại một video về bữa tiệc."
      },
      {
        "word": "screen (n)",
        "ipa": "/skrin/",
        "meaning": "màn hình",
        "example_en": "My computer screen is very big.",
        "example_vi": "Màn hình máy tính của tôi rất lớn."
      },
      {
        "word": "site (n)",
        "ipa": "/saɪt/",
        "meaning": "địa điểm",
        "example_en": "This is a great site for building a house.",
        "example_vi": "Đây là một địa điểm tuyệt vời để xây nhà."
      },
      {
        "word": "software (n)",
        "ipa": "/ˈsɔfˌwɛr/",
        "meaning": "phần mềm",
        "example_en": "You must install the software first.",
        "example_vi": "Bạn phải cài đặt phần mềm trước."
      },
      {
        "word": "speaker (n)",
        "ipa": "/ˈspikər/",
        "meaning": "loa",
        "example_en": "The sound from the speaker is very loud.",
        "example_vi": "Âm thanh từ chiếc loa rất to."
      },
      {
        "word": "surf (v)",
        "ipa": "/sərf/",
        "meaning": "lướt sóng",
        "example_en": "They like to surf in the sea.",
        "example_vi": "Họ thích lướt sóng trên biển."
      },
      {
        "word": "tablet (n)",
        "ipa": "/ˈtæblət/",
        "meaning": "máy tính bảng / viên thuốc",
        "example_en": "The doctor gave me a tablet for my headache.",
        "example_vi": "Bác sĩ đưa cho tôi một viên thuốc cho cơn đau đầu."
      },
      {
        "word": "telephone (n & v)",
        "ipa": "/ˈtɛləˌfoʊn/",
        "meaning": "điện thoại",
        "example_en": "Please answer the telephone.",
        "example_vi": "Vui lòng trả lời điện thoại."
      },
      {
        "word": "upload (v)",
        "ipa": "/ˈəˌploʊd/",
        "meaning": "tải lên",
        "example_en": "I will upload the photos to my blog.",
        "example_vi": "Tôi sẽ tải những bức ảnh lên trang blog của mình."
      },
      {
        "word": "washing machine (n)",
        "ipa": "/ˈwɑʃɪŋ məˈʃin/",
        "meaning": "máy giặt",
        "example_en": "Put your dirty clothes in the washing machine.",
        "example_vi": "Bỏ quần áo bẩn của bạn vào máy giặt."
      },
      {
        "word": "web (n)",
        "ipa": "/wɛb/",
        "meaning": "mạng lưới",
        "example_en": "You can find a lot of information on the web.",
        "example_vi": "Bạn có thể tìm thấy rất nhiều thông tin trên mạng lưới web."
      },
      {
        "word": "website (n)",
        "ipa": "/ˈwɛbˌsaɪt/",
        "meaning": "trang web",
        "example_en": "Visit our website to buy tickets.",
        "example_vi": "Truy cập trang web của chúng tôi để mua vé."
      },
      {
        "word": "wifi (n)",
        "ipa": "/ˈwiˌfi/",
        "meaning": "wifi",
        "example_en": "The coffee shop has free wifi.",
        "example_vi": "Quán cà phê có wifi miễn phí."
      }
    ]
  },
  {
    "topic": "CƠ THỂ & SỨC KHỎE",
    "words": [
      {
        "word": "arm (n)",
        "ipa": "/ɑrm/",
        "meaning": "cánh tay",
        "example_en": "She broke her arm when she fell.",
        "example_vi": "Cô ấy đã bị gãy cánh tay khi bị ngã."
      },
      {
        "word": "as well (adv)",
        "ipa": "/ɛz wɛl/",
        "meaning": "cũng vậy",
        "example_en": "I like apples, and I like bananas as well.",
        "example_vi": "Tôi thích táo, và tôi cũng thích chuối nữa."
      },
      {
        "word": "as well (as) (prep)",
        "ipa": "/ɛz wɛl/",
        "meaning": "cũng như",
        "example_en": "He speaks English as well as French.",
        "example_vi": "Anh ấy nói tiếng Anh cũng như tiếng Pháp."
      },
      {
        "word": "back (n, adv & adj)",
        "ipa": "/bæk/",
        "meaning": "mặt sau",
        "example_en": "Please sit at the back of the room.",
        "example_vi": "Xin vui lòng ngồi ở phía sau của căn phòng."
      },
      {
        "word": "blood (n)",
        "ipa": "/bləd/",
        "meaning": "máu",
        "example_en": "There is some blood on your shirt.",
        "example_vi": "Có một chút máu trên áo sơ mi của bạn."
      },
      {
        "word": "body (n)",
        "ipa": "/ˈbɑdi/",
        "meaning": "thân hình",
        "example_en": "Exercise is good for your whole body.",
        "example_vi": "Tập thể dục rất tốt cho toàn bộ cơ thể của bạn."
      },
      {
        "word": "brain (n)",
        "ipa": "/breɪn/",
        "meaning": "não",
        "example_en": "Reading is good for your brain.",
        "example_vi": "Việc đọc sách rất tốt cho bộ não của bạn."
      },
      {
        "word": "break (n & v)",
        "ipa": "/breɪk/",
        "meaning": "phá vỡ / giờ giải lao",
        "example_en": "Be careful, don't break the glass!",
        "example_vi": "Cẩn thận, đừng làm vỡ cái ly!"
      },
      {
        "word": "break down (phr v)",
        "ipa": "/breɪk daʊn/",
        "meaning": "hỏng hóc (máy móc) / suy sụp",
        "example_en": "Our car broke down on the way to school.",
        "example_vi": "Xe ô tô của chúng tôi đã bị hỏng trên đường đến trường."
      },
      {
        "word": "bring back (v)",
        "ipa": "/brɪŋ bæk/",
        "meaning": "mang về",
        "example_en": "Please bring back the book tomorrow.",
        "example_vi": "Vui lòng mang trả lại cuốn sách vào ngày mai."
      },
      {
        "word": "chemist (n) (Br Eng) (Am Eng: drugstore)",
        "ipa": "/ˈkɛmɪst/",
        "meaning": "dược sĩ / hiệu thuốc (tiệm thuốc)",
        "example_en": "I need to buy some medicine at the chemist.",
        "example_vi": "Tôi cần mua vài loại thuốc tại hiệu thuốc."
      },
      {
        "word": "clean (adj & v)",
        "ipa": "/klin/",
        "meaning": "lau dọn",
        "example_en": "You must clean your room before you go out.",
        "example_vi": "Bạn phải lau dọn phòng của mình trước khi đi chơi."
      },
      {
        "word": "cold (adj & n)",
        "ipa": "/koʊld/",
        "meaning": "lạnh lẽo",
        "example_en": "Put on a jacket because it is cold outside.",
        "example_vi": "Hãy mặc áo khoác vì ngoài trời đang lạnh."
      },
      {
        "word": "comb (n)",
        "ipa": "/koʊm/",
        "meaning": "cái lược",
        "example_en": "She uses a comb to brush her hair.",
        "example_vi": "Cô ấy dùng một cái lược để chải tóc."
      },
      {
        "word": "come back (v)",
        "ipa": "/kəm bæk/",
        "meaning": "sự trở lại",
        "example_en": "When will you come back home?",
        "example_vi": "Khi nào bạn sẽ trở về nhà?"
      },
      {
        "word": "danger (n)",
        "ipa": "/ˈdeɪnʤər/",
        "meaning": "sự nguy hiểm",
        "example_en": "He did not know that he was in danger.",
        "example_vi": "Anh ấy không biết rằng mình đang gặp nguy hiểm."
      },
      {
        "word": "dead (adj)",
        "ipa": "/dɛd/",
        "meaning": "chết",
        "example_en": "They found a dead bird in the garden.",
        "example_vi": "Họ tìm thấy một con chim chết trong khu vườn."
      },
      {
        "word": "die (v)",
        "ipa": "/daɪ/",
        "meaning": "chết",
        "example_en": "Plants will die if they don't get water.",
        "example_vi": "Cây cối sẽ chết nếu chúng không được tưới nước."
      },
      {
        "word": "doctor (n)",
        "ipa": "/ˈdɔktər/",
        "meaning": "bác sĩ",
        "example_en": "You should see a doctor if you feel sick.",
        "example_vi": "Bạn nên đến gặp bác sĩ nếu bạn cảm thấy ốm."
      },
      {
        "word": "ear (n)",
        "ipa": "/ɪr/",
        "meaning": "tai",
        "example_en": "The rabbit has very long ears.",
        "example_vi": "Con thỏ có đôi tai rất dài."
      },
      {
        "word": "eye (n)",
        "ipa": "/aɪ/",
        "meaning": "mắt",
        "example_en": "She has beautiful brown eyes.",
        "example_vi": "Cô ấy có đôi mắt màu nâu tuyệt đẹp."
      },
      {
        "word": "face (n)",
        "ipa": "/feɪs/",
        "meaning": "khuôn mặt",
        "example_en": "Wash your face before you go to bed.",
        "example_vi": "Hãy rửa mặt trước khi đi ngủ."
      },
      {
        "word": "fall (n & v)",
        "ipa": "/fɔl/",
        "meaning": "ngã",
        "example_en": "Be careful not to fall down the stairs.",
        "example_vi": "Cẩn thận để không bị ngã xuống cầu thang."
      },
      {
        "word": "feel (v)",
        "ipa": "/fil/",
        "meaning": "cảm thấy",
        "example_en": "I feel very happy today.",
        "example_vi": "Hôm nay tôi cảm thấy rất hạnh phúc."
      },
      {
        "word": "finger (n)",
        "ipa": "/ˈfɪŋgər/",
        "meaning": "ngón tay",
        "example_en": "She has a ring on her finger.",
        "example_vi": "Cô ấy đeo một chiếc nhẫn trên ngón tay."
      },
      {
        "word": "fit (adj)",
        "ipa": "/fɪt/",
        "meaning": "phù hợp",
        "example_en": "These shoes do not fit me well.",
        "example_vi": "Những chiếc giày này không vừa vặn với tôi lắm."
      },
      {
        "word": "foot (n)",
        "ipa": "/fʊt/",
        "meaning": "chân",
        "example_en": "My left foot hurts when I walk.",
        "example_vi": "Bàn chân trái của tôi bị đau khi tôi bước đi."
      },
      {
        "word": "get back (v)",
        "ipa": "/gɪt bæk/",
        "meaning": "quay lại",
        "example_en": "We will get back to the hotel at 5 PM.",
        "example_vi": "Chúng tôi sẽ quay lại khách sạn lúc 5 giờ chiều."
      },
      {
        "word": "get fit (v)",
        "ipa": "/gɪt fɪt/",
        "meaning": "trở nên vừa vặn",
        "example_en": "He goes to the gym to get fit.",
        "example_vi": "Anh ấy đến phòng tập thể dục để rèn luyện sức khỏe."
      },
      {
        "word": "give back (v)",
        "ipa": "/gɪv bæk/",
        "meaning": "trả lại",
        "example_en": "I will give back your pen tomorrow.",
        "example_vi": "Tôi sẽ trả lại cây bút cho bạn vào ngày mai."
      },
      {
        "word": "gym (n)",
        "ipa": "/ʤɪm/",
        "meaning": "phòng tập thể dục",
        "example_en": "I go to the gym three times a week.",
        "example_vi": "Tôi đến phòng tập thể dục ba lần một tuần."
      },
      {
        "word": "hair (n)",
        "ipa": "/hɛr/",
        "meaning": "tóc",
        "example_en": "Your hair is very long and beautiful.",
        "example_vi": "Tóc của bạn rất dài và đẹp."
      },
      {
        "word": "hand (n)",
        "ipa": "/hænd/",
        "meaning": "tay",
        "example_en": "Please wash your hands before eating.",
        "example_vi": "Vui lòng rửa tay của bạn trước khi ăn."
      },
      {
        "word": "head (n)",
        "ipa": "/hɛd/",
        "meaning": "cái đầu",
        "example_en": "He is wearing a hat on his head.",
        "example_vi": "Anh ấy đang đội một cái mũ trên đầu."
      },
      {
        "word": "headache (n)",
        "ipa": "/ˈhɛˌdeɪk/",
        "meaning": "đau đầu",
        "example_en": "I have a bad headache today.",
        "example_vi": "Hôm nay tôi bị đau đầu tồi tệ."
      },
      {
        "word": "health (n)",
        "ipa": "/hɛlθ/",
        "meaning": "sức khỏe",
        "example_en": "Eating fresh food is good for your health.",
        "example_vi": "Ăn thực phẩm tươi sống tốt cho sức khỏe của bạn."
      },
      {
        "word": "healthy (adj)",
        "ipa": "/ˈhɛlθi/",
        "meaning": "khỏe mạnh",
        "example_en": "A healthy diet includes lots of vegetables.",
        "example_vi": "Một chế độ ăn uống khỏe mạnh bao gồm rất nhiều rau củ."
      },
      {
        "word": "hear (v)",
        "ipa": "/hir/",
        "meaning": "nghe",
        "example_en": "Can you hear the music playing?",
        "example_vi": "Bạn có thể nghe thấy tiếng nhạc đang phát không?"
      },
      {
        "word": "heart (n)",
        "ipa": "/hɑrt/",
        "meaning": "trái tim",
        "example_en": "Exercise helps to keep your heart healthy.",
        "example_vi": "Tập thể dục giúp giữ cho trái tim của bạn khỏe mạnh."
      },
      {
        "word": "hospital (n)",
        "ipa": "/ˈhɑˌspɪtəl/",
        "meaning": "bệnh viện",
        "example_en": "She works as a nurse in the city hospital.",
        "example_vi": "Cô ấy làm y tá trong bệnh viện thành phố."
      },
      {
        "word": "hurt (v)",
        "ipa": "/hərt/",
        "meaning": "đau",
        "example_en": "Where does it hurt?",
        "example_vi": "Nó đau ở đâu?"
      },
      {
        "word": "ill (adj)",
        "ipa": "/ɪl/",
        "meaning": "ốm",
        "example_en": "He could not go to school because he was ill.",
        "example_vi": "Anh ấy không thể đi đến trường vì anh ấy bị ốm."
      },
      {
        "word": "keep (v)",
        "ipa": "/kip/",
        "meaning": "giữ",
        "example_en": "You can keep the change.",
        "example_vi": "Bạn có thể giữ lại tiền thừa."
      },
      {
        "word": "leg (n)",
        "ipa": "/lɛg/",
        "meaning": "chân",
        "example_en": "My leg hurts after playing football.",
        "example_vi": "Chân của tôi bị đau sau khi chơi bóng đá."
      },
      {
        "word": "lie down (phr v)",
        "ipa": "/laɪ daʊn/",
        "meaning": "nằm xuống",
        "example_en": "You should lie down and get some rest.",
        "example_vi": "Bạn nên nằm xuống và nghỉ ngơi một chút."
      },
      {
        "word": "medicine (n)",
        "ipa": "/ˈmɛdəsən/",
        "meaning": "thuốc",
        "example_en": "Did you take your medicine this morning?",
        "example_vi": "Sáng nay bạn đã uống thuốc chưa?"
      },
      {
        "word": "mouth (n)",
        "ipa": "/maʊθ/",
        "meaning": "miệng",
        "example_en": "Open your mouth so the doctor can see inside.",
        "example_vi": "Hãy mở miệng ra để bác sĩ có thể nhìn vào bên trong."
      },
      {
        "word": "neck (n)",
        "ipa": "/nɛk/",
        "meaning": "cổ",
        "example_en": "She wears a beautiful necklace around her neck.",
        "example_vi": "Cô ấy đeo một chiếc vòng cổ rất đẹp quanh cổ."
      },
      {
        "word": "nose (n)",
        "ipa": "/noʊz/",
        "meaning": "mũi",
        "example_en": "My dog has a cold, wet nose.",
        "example_vi": "Con chó của tôi có một cái mũi lạnh và ướt."
      },
      {
        "word": "nurse (n)",
        "ipa": "/nərs/",
        "meaning": "y tá",
        "example_en": "The nurse will give you your medicine soon.",
        "example_vi": "Y tá sẽ đưa thuốc cho bạn sớm thôi."
      },
      {
        "word": "pain (n)",
        "ipa": "/peɪn/",
        "meaning": "nỗi đau",
        "example_en": "I feel a sharp pain in my back.",
        "example_vi": "Tôi cảm thấy một cơn đau nhói ở lưng."
      },
      {
        "word": "pharmacy (n)",
        "ipa": "/ˈfɑrməsi/",
        "meaning": "hiệu thuốc",
        "example_en": "You can buy this medicine at the pharmacy.",
        "example_vi": "Bạn có thể mua loại thuốc này ở hiệu thuốc."
      },
      {
        "word": "problem (n)",
        "ipa": "/ˈprɑbləm/",
        "meaning": "vấn đề",
        "example_en": "Do you need help with this math problem?",
        "example_vi": "Bạn có cần giúp đỡ với bài toán này không?"
      },
      {
        "word": "rest (n & v)",
        "ipa": "/rɛst/",
        "meaning": "nghỉ ngơi",
        "example_en": "Stop working and have a rest.",
        "example_vi": "Hãy ngừng làm việc và nghỉ ngơi."
      },
      {
        "word": "right hand (adj)",
        "ipa": "/raɪt hænd/",
        "meaning": "tay phải",
        "example_en": "Write your name with your right hand.",
        "example_vi": "Viết tên của bạn bằng tay phải."
      },
      {
        "word": "run (v)",
        "ipa": "/rən/",
        "meaning": "chạy",
        "example_en": "I run in the park every morning.",
        "example_vi": "Tôi chạy bộ trong công viên mỗi buổi sáng."
      },
      {
        "word": "sick (adj)",
        "ipa": "/sɪk/",
        "meaning": "đau ốm",
        "example_en": "He cannot go to school because he is sick.",
        "example_vi": "Cậu ấy không thể đi học vì bị ốm."
      },
      {
        "word": "sleep (v)",
        "ipa": "/slip/",
        "meaning": "ngủ",
        "example_en": "You should sleep for eight hours every night.",
        "example_vi": "Bạn nên ngủ tám tiếng mỗi đêm."
      },
      {
        "word": "stomach (n)",
        "ipa": "/ˈstəmək/",
        "meaning": "cái bụng",
        "example_en": "My stomach is full after a big dinner.",
        "example_vi": "Bụng tôi no căng sau một bữa tối thịnh soạn."
      },
      {
        "word": "stomach ache (n)",
        "ipa": "/ˈstəmək eɪk/",
        "meaning": "đau bụng",
        "example_en": "I have a bad stomach ache today.",
        "example_vi": "Hôm nay tôi bị đau bụng dữ dội."
      },
      {
        "word": "temperature (n)",
        "ipa": "/ˈtɛmpərəʧər/",
        "meaning": "nhiệt độ",
        "example_en": "The temperature is very high in summer.",
        "example_vi": "Nhiệt độ rất cao vào mùa hè."
      },
      {
        "word": "tired (adj)",
        "ipa": "/taɪərd/",
        "meaning": "mệt",
        "example_en": "She feels tired after a long day at work.",
        "example_vi": "Cô ấy cảm thấy mệt mỏi sau một ngày làm việc dài."
      },
      {
        "word": "tooth (n)",
        "ipa": "/tuθ/",
        "meaning": "răng",
        "example_en": "My tooth hurts when I eat sweet things.",
        "example_vi": "Răng tôi bị đau khi tôi ăn đồ ngọt."
      },
      {
        "word": "toothache (n)",
        "ipa": "/ˈtuːθ.eɪk/",
        "meaning": "đau răng",
        "example_en": "You should go to the dentist if you have a toothache.",
        "example_vi": "Bạn nên đến nha sĩ nếu bạn bị đau răng."
      },
      {
        "word": "well (adv & adj)",
        "ipa": "/wɛl/",
        "meaning": "Tốt",
        "example_en": "He plays football very well.",
        "example_vi": "Anh ấy chơi bóng đá rất tốt."
      },
      {
        "word": "well known (adj)",
        "ipa": "/wɛl noʊn/",
        "meaning": "nổi tiếng",
        "example_en": "She is a well known singer in my country.",
        "example_vi": "Cô ấy là một ca sĩ nổi tiếng ở đất nước tôi."
      }
    ]
  },
  {
    "topic": "CẢM XÚC & TÍNH CÁCH",
    "words": [
      {
        "word": "afraid (adj)",
        "ipa": "/əˈfreɪd/",
        "meaning": "sợ",
        "example_en": "Don't be afraid of the dark.",
        "example_vi": "Đừng sợ bóng tối."
      },
      {
        "word": "angry (adj)",
        "ipa": "/ˈæŋgri/",
        "meaning": "tức giận",
        "example_en": "The teacher was angry because we were late.",
        "example_vi": "Giáo viên tức giận vì chúng tôi đi trễ."
      },
      {
        "word": "boring (adj)",
        "ipa": "/ˈbɔrɪŋ/",
        "meaning": "nhạt nhẽo",
        "example_en": "The movie was so boring that I fell asleep.",
        "example_vi": "Bộ phim nhạt nhẽo đến mức tôi ngủ thiếp đi."
      },
      {
        "word": "brave (adj)",
        "ipa": "/breɪv/",
        "meaning": "can đảm",
        "example_en": "The brave boy saved the little cat.",
        "example_vi": "Cậu bé can đảm đã cứu chú mèo nhỏ."
      },
      {
        "word": "brilliant (adj)",
        "ipa": "/ˈbrɪljənt/",
        "meaning": "xuất sắc",
        "example_en": "That is a brilliant idea!",
        "example_vi": "Đó là một ý tưởng xuất sắc!"
      },
      {
        "word": "careful (adj)",
        "ipa": "/ˈkɛrfəl/",
        "meaning": "cẩn thận",
        "example_en": "Please be careful when you cross the street.",
        "example_vi": "Xin hãy cẩn thận khi bạn sang đường."
      },
      {
        "word": "crazy (adj)",
        "ipa": "/ˈkreɪzi/",
        "meaning": "điên",
        "example_en": "The weather is crazy today; it's hot then suddenly cold.",
        "example_vi": "Thời tiết hôm nay thật điên rồ; đang nóng rồi đột nhiên lạnh."
      },
      {
        "word": "excited (adj)",
        "ipa": "/ɪkˈsaɪtɪd/",
        "meaning": "hào hứng",
        "example_en": "I am very excited about my birthday party.",
        "example_vi": "Tôi rất hào hứng với bữa tiệc sinh nhật của mình."
      },
      {
        "word": "exciting (adj)",
        "ipa": "/ɪkˈsaɪtɪŋ/",
        "meaning": "thú vị",
        "example_en": "We watched an exciting football match last night.",
        "example_vi": "Chúng tôi đã xem một trận bóng đá thú vị vào tối qua."
      },
      {
        "word": "famous (adj)",
        "ipa": "/ˈfeɪməs/",
        "meaning": "nổi tiếng",
        "example_en": "Paris is famous for its beautiful buildings.",
        "example_vi": "Paris nổi tiếng với những tòa nhà xinh đẹp."
      },
      {
        "word": "fantastic (adj)",
        "ipa": "/fænˈtæstɪk/",
        "meaning": "tuyệt vời",
        "example_en": "We had a fantastic holiday in Da Nang.",
        "example_vi": "Chúng tôi đã có một kỳ nghỉ tuyệt vời ở Đà Nẵng."
      },
      {
        "word": "friendly (adj)",
        "ipa": "/ˈfrɛndli/",
        "meaning": "thân thiện",
        "example_en": "My new classmates are very friendly.",
        "example_vi": "Các bạn cùng lớp mới của tôi rất thân thiện."
      },
      {
        "word": "funny (adj)",
        "ipa": "/ˈfəni/",
        "meaning": "buồn cười",
        "example_en": "My uncle tells very funny jokes.",
        "example_vi": "Chú tôi kể những câu chuyện rất buồn cười."
      },
      {
        "word": "glad (adj)",
        "ipa": "/glæd/",
        "meaning": "vui mừng",
        "example_en": "I am glad to see you again.",
        "example_vi": "Tôi rất vui mừng khi gặp lại bạn."
      },
      {
        "word": "good (adj)",
        "ipa": "/gʊd/",
        "meaning": "Tốt",
        "example_en": "Eating fruit is good for your health.",
        "example_vi": "Ăn trái cây rất tốt cho sức khỏe của bạn."
      },
      {
        "word": "great (adj)",
        "ipa": "/greɪt/",
        "meaning": "Tuyệt",
        "example_en": "We had a great time at the beach.",
        "example_vi": "Chúng tôi đã có một khoảng thời gian tuyệt vời ở bãi biển."
      },
      {
        "word": "happy (adj)",
        "ipa": "/ˈhæpi/",
        "meaning": "vui mừng",
        "example_en": "She is happy because she got a new toy.",
        "example_vi": "Cô bé rất vui vì có một món đồ chơi mới."
      },
      {
        "word": "hard (adj & adv)",
        "ipa": "/hɑrd/",
        "meaning": "cứng",
        "example_en": "This bed is too hard for me.",
        "example_vi": "Chiếc giường này quá cứng đối với tôi."
      },
      {
        "word": "hope (v)",
        "ipa": "/hoʊp/",
        "meaning": "mong",
        "example_en": "I hope it will not rain tomorrow.",
        "example_vi": "Tôi mong ngày mai trời sẽ không mưa."
      },
      {
        "word": "important (adj)",
        "ipa": "/ˌɪmˈpɔrtənt/",
        "meaning": "quan trọng",
        "example_en": "It is important to drink enough water every day.",
        "example_vi": "Điều quan trọng là phải uống đủ nước mỗi ngày."
      },
      {
        "word": "interested (adj)",
        "ipa": "/ˈɪntəˌrɛstɪd/",
        "meaning": "hứng thú / quan tâm",
        "example_en": "He is very interested in learning English.",
        "example_vi": "Cậu ấy rất hứng thú với việc học tiếng Anh."
      },
      {
        "word": "interesting (adj)",
        "ipa": "/ˈɪntəˌrɛstɪŋ/",
        "meaning": "hấp dẫn",
        "example_en": "This book is very interesting to read.",
        "example_vi": "Cuốn sách này rất hấp dẫn để đọc."
      },
      {
        "word": "lazy (adj)",
        "ipa": "/ˈleɪzi/",
        "meaning": "lười",
        "example_en": "He is too lazy to do his homework.",
        "example_vi": "Cậu ấy quá lười để làm bài tập về nhà."
      },
      {
        "word": "lucky (adj)",
        "ipa": "/ˈləki/",
        "meaning": "may mắn",
        "example_en": "I feel lucky to have such good friends.",
        "example_vi": "Tôi cảm thấy may mắn vì có những người bạn tốt như vậy."
      },
      {
        "word": "mad (adj)",
        "ipa": "/mæd/",
        "meaning": "điên rồ",
        "example_en": "It is a mad idea to swim in this cold weather.",
        "example_vi": "Bơi trong thời tiết lạnh này là một ý tưởng điên rồ."
      },
      {
        "word": "make sure (that) (v)",
        "ipa": "/meɪk ʃʊr/",
        "meaning": "đảm bảo",
        "example_en": "Make sure that you lock the door before leaving.",
        "example_vi": "Đảm bảo rằng bạn khóa cửa trước khi rời đi."
      },
      {
        "word": "nervous (adj)",
        "ipa": "/ˈnərvəs/",
        "meaning": "lo lắng",
        "example_en": "I always feel nervous before a big test.",
        "example_vi": "Tôi luôn cảm thấy lo lắng trước một bài kiểm tra lớn."
      },
      {
        "word": "nice (adj)",
        "ipa": "/nis/",
        "meaning": "Đẹp",
        "example_en": "That is a very nice dress you are wearing.",
        "example_vi": "Chiếc váy bạn đang mặc rất đẹp."
      },
      {
        "word": "pleasant (adj)",
        "ipa": "/ˈplɛzənt/",
        "meaning": "dễ thương",
        "example_en": "We had a pleasant walk in the park.",
        "example_vi": "Chúng tôi đã có một chuyến đi dạo dễ chịu trong công viên."
      },
      {
        "word": "polite (adj)",
        "ipa": "/pəˈlaɪt/",
        "meaning": "lịch sự",
        "example_en": "It is polite to say thank you when someone helps you.",
        "example_vi": "Nói cảm ơn khi ai đó giúp bạn là lịch sự."
      },
      {
        "word": "poor (adj)",
        "ipa": "/pur/",
        "meaning": "nghèo",
        "example_en": "The poor man has no money to buy food.",
        "example_vi": "Người đàn ông nghèo không có tiền để mua thức ăn."
      },
      {
        "word": "poor thing/you (Phrase)",
        "ipa": "/pur θɪŋ/",
        "meaning": "Tội nghiệp (bạn/ai đó)",
        "example_en": "You lost your bag? Oh, poor you!",
        "example_vi": "Bạn mất túi à? Ồ, tội nghiệp bạn!"
      },
      {
        "word": "quiet (adj)",
        "ipa": "/kwaɪət/",
        "meaning": "im lặng",
        "example_en": "Please be quiet, the baby is sleeping.",
        "example_vi": "Làm ơn im lặng, em bé đang ngủ."
      },
      {
        "word": "rich (adj)",
        "ipa": "/rɪʧ/",
        "meaning": "giàu có",
        "example_en": "That rich woman has three big houses.",
        "example_vi": "Người phụ nữ giàu có đó có ba ngôi nhà lớn."
      },
      {
        "word": "sad (adj)",
        "ipa": "/sæd/",
        "meaning": "buồn",
        "example_en": "He was sad because he lost his favourite pen.",
        "example_vi": "Cậu ấy buồn vì làm mất cây bút yêu thích."
      },
      {
        "word": "scared (adj)",
        "ipa": "/skɛrd/",
        "meaning": "sợ hãi",
        "example_en": "My little sister is scared of spiders.",
        "example_vi": "Em gái nhỏ của tôi rất sợ nhện."
      },
      {
        "word": "serious (person) (adj)",
        "ipa": "/ˈsɪriəs/",
        "meaning": "nghiêm trọng",
        "example_en": "Our new math teacher is a very serious person.",
        "example_vi": "Giáo viên toán mới của chúng tôi là một người rất nghiêm túc."
      },
      {
        "word": "shy (adj)",
        "ipa": "/ʃaɪ/",
        "meaning": "xấu hổ",
        "example_en": "The little girl was too shy to talk to us.",
        "example_vi": "Cô bé quá nhút nhát để nói chuyện với chúng tôi."
      },
      {
        "word": "smart (stylish) (adj)",
        "ipa": "/smɑrt/",
        "meaning": "sành điệu / thanh lịch / gọn gàng",
        "example_en": "You look very smart in that new suit.",
        "example_vi": "Bạn trông rất thanh lịch trong bộ vest mới đó."
      },
      {
        "word": "smart (clever) (adj)",
        "ipa": "/smɑrt/",
        "meaning": "thông minh",
        "example_en": "She is a smart student and always gets good marks.",
        "example_vi": "Cô ấy là một học sinh thông minh và luôn đạt điểm tốt."
      },
      {
        "word": "sorry (adj)",
        "ipa": "/ˈsɑri/",
        "meaning": "Xin lỗi",
        "example_en": "I am sorry I broke your favorite cup.",
        "example_vi": "Tôi xin lỗi vì đã làm vỡ chiếc cốc yêu thích của bạn."
      },
      {
        "word": "strange (adj)",
        "ipa": "/streɪnʤ/",
        "meaning": "lạ lùng",
        "example_en": "I heard a strange noise in the garden last night.",
        "example_vi": "Tôi nghe thấy một tiếng ồn lạ lùng trong vườn đêm qua."
      },
      {
        "word": "sure (adj)",
        "ipa": "/ʃʊr/",
        "meaning": "Chắc chắn",
        "example_en": "Are you sure this is the right way to the station?",
        "example_vi": "Bạn có chắc chắn đây là đường đúng đến nhà ga không?"
      },
      {
        "word": "surprised (adj)",
        "ipa": "/səˈpraɪzd/",
        "meaning": "ngạc nhiên",
        "example_en": "I was surprised when I saw him at the party.",
        "example_vi": "Tôi đã ngạc nhiên khi thấy anh ấy ở bữa tiệc."
      },
      {
        "word": "terrible (adj)",
        "ipa": "/ˈtɛrəbəl/",
        "meaning": "kinh khủng",
        "example_en": "The weather was terrible, so we stayed at home.",
        "example_vi": "Thời tiết thật kinh khủng, vì vậy chúng tôi đã ở nhà."
      },
      {
        "word": "unhappy (adj)",
        "ipa": "/ənˈhæpi/",
        "meaning": "không vui / buồn",
        "example_en": "She felt unhappy when her best friend moved away.",
        "example_vi": "Cô ấy cảm thấy không vui khi người bạn thân nhất chuyển đi nơi khác."
      },
      {
        "word": "useful (adj)",
        "ipa": "/ˈjusfəl/",
        "meaning": "hữu ích",
        "example_en": "A map is very useful when you visit a new city.",
        "example_vi": "Một tấm bản đồ rất hữu ích khi bạn đến thăm một thành phố mới."
      },
      {
        "word": "worried (adj)",
        "ipa": "/ˈwərid/",
        "meaning": "lo lắng",
        "example_en": "My parents were worried when I came home late.",
        "example_vi": "Bố mẹ tôi đã rất lo lắng khi tôi về nhà trễ."
      }
    ]
  },
  {
    "topic": "DI CHUYỂN & GIAO THÔNG",
    "words": [
      {
        "word": "aeroplane (n)",
        "ipa": "/ˈeə.rə.pleɪn/",
        "meaning": "máy bay",
        "example_en": "I have never flown in an aeroplane before.",
        "example_vi": "Tôi chưa bao giờ đi máy bay trước đây."
      },
      {
        "word": "airport (n)",
        "ipa": "/ˈɛrˌpɔrt/",
        "meaning": "sân bay",
        "example_en": "We need to arrive at the airport two hours before our flight.",
        "example_vi": "Chúng ta cần đến sân bay hai tiếng trước chuyến bay."
      },
      {
        "word": "ambulance (n)",
        "ipa": "/ˈæmbjələns/",
        "meaning": "xe cứu thương",
        "example_en": "An ambulance took the sick man to the hospital.",
        "example_vi": "Một chiếc xe cứu thương đã đưa người đàn ông bị bệnh đến bệnh viện."
      },
      {
        "word": "backpack (n)",
        "ipa": "/ˈbækˌpæk/",
        "meaning": "balo",
        "example_en": "He carries his books in a big blue backpack.",
        "example_vi": "Cậu ấy mang sách trong một chiếc balo lớn màu xanh."
      },
      {
        "word": "bicycle (n)",
        "ipa": "/ˈbaɪsɪkəl/",
        "meaning": "xe đạp",
        "example_en": "I learned to ride a bicycle when I was six.",
        "example_vi": "Tôi học đi xe đạp khi tôi sáu tuổi."
      },
      {
        "word": "bike (n)",
        "ipa": "/baɪk/",
        "meaning": "xe đạp",
        "example_en": "I usually ride my bike to school.",
        "example_vi": "Tôi thường đạp xe đến trường."
      },
      {
        "word": "boat (n)",
        "ipa": "/boʊt/",
        "meaning": "thuyền",
        "example_en": "We took a small boat to cross the river.",
        "example_vi": "Chúng tôi đã đi một chiếc thuyền nhỏ để qua sông."
      },
      {
        "word": "bridge (n)",
        "ipa": "/brɪʤ/",
        "meaning": "cầu",
        "example_en": "The bridge over the river is very old.",
        "example_vi": "Cây cầu bắc qua sông rất cũ."
      },
      {
        "word": "bus (n)",
        "ipa": "/bəs/",
        "meaning": "xe buýt",
        "example_en": "I catch the bus to work every morning.",
        "example_vi": "Tôi bắt xe buýt đi làm mỗi buổi sáng."
      },
      {
        "word": "bus station (n)",
        "ipa": "/bəs ˈsteɪʃən/",
        "meaning": "bến xe buýt",
        "example_en": "You can buy tickets at the bus station.",
        "example_vi": "Bạn có thể mua vé ở bến xe buýt."
      },
      {
        "word": "bus stop (n)",
        "ipa": "/bəs stɑp/",
        "meaning": "trạm xe buýt",
        "example_en": "Please wait for me at the bus stop.",
        "example_vi": "Vui lòng đợi tôi ở trạm xe buýt."
      },
      {
        "word": "car (n)",
        "ipa": "/kɑr/",
        "meaning": "xe hơi",
        "example_en": "My dad bought a new red car yesterday.",
        "example_vi": "Bố tôi đã mua một chiếc xe hơi màu đỏ mới vào ngày hôm qua."
      },
      {
        "word": "car park (n) (Br Eng) (Am Eng: parking lot)",
        "ipa": "/kɑr pɑrk/",
        "meaning": "bãi đỗ xe",
        "example_en": "We left our car in the car park behind the hotel.",
        "example_vi": "Chúng tôi đã để xe trong bãi đỗ xe phía sau khách sạn."
      },
      {
        "word": "catch (v)",
        "ipa": "/kæʧ/",
        "meaning": "nắm lấy",
        "example_en": "Run fast or you won't catch the train!",
        "example_vi": "Chạy nhanh lên nếu không bạn sẽ không bắt kịp chuyến tàu!"
      },
      {
        "word": "change (v & n)",
        "ipa": "/ʧeɪnʤ/",
        "meaning": "thay đổi / tiền thối tiền lẻ",
        "example_en": "Here is your coffee, and here is your change.",
        "example_vi": "Đây là cà phê của bạn, và đây là tiền thối lại."
      },
      {
        "word": "coach (n)",
        "ipa": "/koʊʧ/",
        "meaning": "huấn luyện viên",
        "example_en": "Our football coach is very strict.",
        "example_vi": "Huấn luyện viên bóng đá của chúng tôi rất nghiêm khắc."
      },
      {
        "word": "cross (n & v)",
        "ipa": "/krɔs/",
        "meaning": "đi qua",
        "example_en": "Look left and right before you cross the road.",
        "example_vi": "Hãy nhìn trái và phải trước khi bạn đi qua đường."
      },
      {
        "word": "delay (n & v)",
        "ipa": "/dɪˈleɪ/",
        "meaning": "trì hoãn",
        "example_en": "There is a delay in our flight because of bad weather.",
        "example_vi": "Chuyến bay của chúng ta bị trì hoãn do thời tiết xấu."
      },
      {
        "word": "drive (v)",
        "ipa": "/draɪv/",
        "meaning": "lái xe",
        "example_en": "My mother drives me to school every day.",
        "example_vi": "Mẹ tôi lái xe chở tôi đến trường mỗi ngày."
      },
      {
        "word": "driver (n)",
        "ipa": "/ˈdraɪvər/",
        "meaning": "tài xế",
        "example_en": "The bus driver was very friendly.",
        "example_vi": "Bác tài xế xe buýt rất thân thiện."
      },
      {
        "word": "engine (n)",
        "ipa": "/ˈɪnʤən/",
        "meaning": "động cơ",
        "example_en": "The car engine is making a strange noise.",
        "example_vi": "Động cơ xe hơi đang phát ra một tiếng ồn lạ."
      },
      {
        "word": "flight (n)",
        "ipa": "/flaɪt/",
        "meaning": "chuyến bay",
        "example_en": "Have a safe flight to Tokyo!",
        "example_vi": "Chúc bạn có một chuyến bay an toàn đến Tokyo!"
      },
      {
        "word": "fly (v)",
        "ipa": "/flaɪ/",
        "meaning": "bay",
        "example_en": "Birds fly south when winter comes.",
        "example_vi": "Chim bay về phương nam khi mùa đông đến."
      },
      {
        "word": "garage (n)",
        "ipa": "/gərɑʒ/",
        "meaning": "ga-ra",
        "example_en": "We keep our old car in the garage.",
        "example_vi": "Chúng tôi cất chiếc xe cũ của mình trong ga-ra."
      },
      {
        "word": "gas station (n) (Am Eng) (Br Eng: petrol station)",
        "ipa": "/gæs ˈsteɪʃən/",
        "meaning": "trạm xăng",
        "example_en": "We need to stop at the next gas station.",
        "example_vi": "Chúng ta cần dừng lại ở trạm xăng tiếp theo."
      },
      {
        "word": "journey (n)",
        "ipa": "/ˈʤərni/",
        "meaning": "hành trình",
        "example_en": "The train journey takes about four hours.",
        "example_vi": "Hành trình bằng tàu hỏa mất khoảng bốn giờ."
      },
      {
        "word": "kilometre (km) (n) (Br Eng) (Am Eng: kilometer)",
        "ipa": "/kɪˈlɒmɪtər/ hoặc /ˈkɪləmiːtər/",
        "meaning": "cây số",
        "example_en": "My house is five kilometres away from the school.",
        "example_vi": "Nhà tôi cách trường năm cây số."
      },
      {
        "word": "luggage (n)",
        "ipa": "/ˈləgɪʤ/",
        "meaning": "hành lý",
        "example_en": "He helped me carry my heavy luggage.",
        "example_vi": "Anh ấy đã giúp tôi mang hành lý nặng."
      },
      {
        "word": "map (n)",
        "ipa": "/mæp/",
        "meaning": "bản đồ",
        "example_en": "I used a map to find the museum.",
        "example_vi": "Tôi đã dùng một bản đồ để tìm đường đến bảo tàng."
      },
      {
        "word": "Miss (n)",
        "ipa": "/mɪs/",
        "meaning": "Cô",
        "example_en": "Miss Smith is our new English teacher.",
        "example_vi": "Cô Smith là giáo viên tiếng Anh mới của chúng tôi."
      },
      {
        "word": "miss (v)",
        "ipa": "/mɪs/",
        "meaning": "nhớ nhung / bỏ lỡ",
        "example_en": "I miss my family when I am away from home.",
        "example_vi": "Tôi nhớ gia đình khi tôi xa nhà."
      },
      {
        "word": "motorbike (n)",
        "ipa": "/ˈmoʊtərˌbaɪk/",
        "meaning": "xe máy",
        "example_en": "He rides his motorbike to work.",
        "example_vi": "Anh ấy đi xe máy đến nơi làm việc."
      },
      {
        "word": "motorway (n)",
        "ipa": "/ˈməʊ.tə.weɪ/",
        "meaning": "đường cao tốc",
        "example_en": "You can drive faster on the motorway.",
        "example_vi": "Bạn có thể lái xe nhanh hơn trên đường cao tốc."
      },
      {
        "word": "passenger (n)",
        "ipa": "/ˈpæsənʤər/",
        "meaning": "hành khách",
        "example_en": "There are fifty passengers on this bus.",
        "example_vi": "Có năm mươi hành khách trên chuyến xe buýt này."
      },
      {
        "word": "passport (n)",
        "ipa": "/ˈpæˌspɔrt/",
        "meaning": "hộ chiếu",
        "example_en": "You must show your passport at the airport.",
        "example_vi": "Bạn phải xuất trình hộ chiếu tại sân bay."
      },
      {
        "word": "petrol (n)",
        "ipa": "/ˈpɛtroʊl/",
        "meaning": "xăng dầu",
        "example_en": "The car ran out of petrol on the way home.",
        "example_vi": "Xe ô tô đã hết xăng trên đường về nhà."
      },
      {
        "word": "petrol station (n)",
        "ipa": "/ˈpɛtroʊl ˈsteɪʃən/",
        "meaning": "trạm xăng",
        "example_en": "We bought some snacks at the petrol station.",
        "example_vi": "Chúng tôi đã mua một ít đồ ăn vặt ở trạm xăng."
      },
      {
        "word": "pilot (n)",
        "ipa": "/ˈpaɪlət/",
        "meaning": "phi công",
        "example_en": "The pilot flew the plane perfectly.",
        "example_vi": "Người phi công đã lái chiếc máy bay một cách hoàn hảo."
      },
      {
        "word": "plane (n)",
        "ipa": "/pleɪn/",
        "meaning": "máy bay",
        "example_en": "The plane will land in five minutes.",
        "example_vi": "Máy bay sẽ hạ cánh trong năm phút nữa."
      },
      {
        "word": "platform (n)",
        "ipa": "/ˈplætˌfɔrm/",
        "meaning": "nền tảng",
        "example_en": "We use a new online platform for learning.",
        "example_vi": "Chúng tôi sử dụng một nền tảng trực tuyến mới để học tập."
      },
      {
        "word": "police car (n)",
        "ipa": "/pəˈlis kɑr/",
        "meaning": "xe cảnh sát",
        "example_en": "A police car drove past with its lights flashing.",
        "example_vi": "Một chiếc xe cảnh sát đã chạy ngang qua với đèn nhấp nháy."
      },
      {
        "word": "police station (n)",
        "ipa": "/pəˈlis ˈsteɪʃən/",
        "meaning": "đồn cảnh sát",
        "example_en": "We went to the police station to ask for help.",
        "example_vi": "Chúng tôi đã đến đồn cảnh sát để yêu cầu giúp đỡ."
      },
      {
        "word": "railway (n)",
        "ipa": "/ˈreɪlˌweɪ/",
        "meaning": "đường sắt",
        "example_en": "We live near the new railway.",
        "example_vi": "Chúng tôi sống gần tuyến đường sắt mới."
      },
      {
        "word": "ride (n & v)",
        "ipa": "/raɪd/",
        "meaning": "lái",
        "example_en": "Can you ride a bike?",
        "example_vi": "Bạn có thể lái xe đạp không?"
      },
      {
        "word": "road (n)",
        "ipa": "/roʊd/",
        "meaning": "đường",
        "example_en": "Be careful when you cross the road.",
        "example_vi": "Hãy cẩn thận khi bạn qua đường."
      },
      {
        "word": "roundabout (n)",
        "ipa": "/ˈraʊndəˌbaʊt/",
        "meaning": "bùng binh",
        "example_en": "Turn right at the roundabout.",
        "example_vi": "Rẽ phải tại bùng binh."
      },
      {
        "word": "sail (v)",
        "ipa": "/seɪl/",
        "meaning": "chèo",
        "example_en": "I want to learn how to sail a boat.",
        "example_vi": "Tôi muốn học cách chèo thuyền."
      },
      {
        "word": "seat (n)",
        "ipa": "/sit/",
        "meaning": "ghế",
        "example_en": "Please take a seat.",
        "example_vi": "Vui lòng ngồi vào ghế."
      },
      {
        "word": "ship (n)",
        "ipa": "/ʃɪp/",
        "meaning": "tàu thủy",
        "example_en": "The ship is crossing the sea.",
        "example_vi": "Tàu thủy đang băng qua biển."
      },
      {
        "word": "station (n)",
        "ipa": "/ˈsteɪʃən/",
        "meaning": "ga tàu",
        "example_en": "We will meet at the train station.",
        "example_vi": "Chúng ta sẽ gặp nhau ở ga tàu."
      },
      {
        "word": "stop (n & v)",
        "ipa": "/stɑp/",
        "meaning": "dừng lại",
        "example_en": "The bus will stop here.",
        "example_vi": "Xe buýt sẽ dừng lại ở đây."
      },
      {
        "word": "street (n)",
        "ipa": "/strit/",
        "meaning": "đường phố",
        "example_en": "My house is on this street.",
        "example_vi": "Nhà của tôi nằm trên đường phố này."
      },
      {
        "word": "suitcase (n)",
        "ipa": "/ˈsutˌkeɪs/",
        "meaning": "va li",
        "example_en": "My suitcase is very heavy.",
        "example_vi": "Chiếc va li của tôi rất nặng."
      },
      {
        "word": "taxi (n)",
        "ipa": "/ˈtæksi/",
        "meaning": "Taxi",
        "example_en": "Let's take a taxi to the airport.",
        "example_vi": "Hãy đi taxi đến sân bay."
      },
      {
        "word": "ticket (n)",
        "ipa": "/ˈtɪkɪt/",
        "meaning": "vé",
        "example_en": "I need to buy a ticket for the concert.",
        "example_vi": "Tôi cần mua một tấm vé cho buổi hòa nhạc."
      },
      {
        "word": "tour (n)",
        "ipa": "/tʊr/",
        "meaning": "chuyến du lịch",
        "example_en": "We went on a tour of the city.",
        "example_vi": "Chúng tôi đã đi một chuyến du lịch quanh thành phố."
      },
      {
        "word": "tourist (n)",
        "ipa": "/ˈtʊrɪst/",
        "meaning": "du khách",
        "example_en": "Many tourists visit this museum every day.",
        "example_vi": "Nhiều du khách đến thăm bảo tàng này mỗi ngày."
      },
      {
        "word": "tourist information centre (n)",
        "ipa": "/ˈtʊrɪst ˌɪnˌfɔrˈmeɪʃən ˈsɛntər/",
        "meaning": "trung tâm thông tin du lịch",
        "example_en": "You can get a map at the tourist information centre.",
        "example_vi": "Bạn có thể lấy bản đồ ở trung tâm thông tin du lịch."
      },
      {
        "word": "traffic (n)",
        "ipa": "/ˈtræfɪk/",
        "meaning": "giao thông",
        "example_en": "There is a lot of traffic in the morning.",
        "example_vi": "Có rất nhiều giao thông vào buổi sáng."
      },
      {
        "word": "traffic light (n)",
        "ipa": "/ˈtræfɪk laɪt/",
        "meaning": "đèn giao thông",
        "example_en": "Stop when the traffic light is red.",
        "example_vi": "Dừng lại khi đèn giao thông màu đỏ."
      },
      {
        "word": "train (n)",
        "ipa": "/treɪn/",
        "meaning": "xe lửa",
        "example_en": "I go to work by train.",
        "example_vi": "Tôi đi làm bằng xe lửa."
      },
      {
        "word": "train (transitive and intransitive) (v)",
        "ipa": "/treɪn/",
        "meaning": "đào tạo / huấn luyện",
        "example_en": "They train dogs to help blind people.",
        "example_vi": "Họ huấn luyện chó để giúp đỡ người khiếm thị."
      },
      {
        "word": "tram (n)",
        "ipa": "/træm/",
        "meaning": "xe điện",
        "example_en": "You can take a tram to the city centre.",
        "example_vi": "Bạn có thể đi xe điện đến trung tâm thành phố."
      },
      {
        "word": "transport (n)",
        "ipa": "/ˈtrænspɔrt/",
        "meaning": "chuyên chở",
        "example_en": "My city has good public transport.",
        "example_vi": "Thành phố của tôi có hệ thống chuyên chở công cộng tốt."
      },
      {
        "word": "travel (v)",
        "ipa": "/ˈtrævəl/",
        "meaning": "du lịch",
        "example_en": "I love to travel to new places.",
        "example_vi": "Tôi thích đi du lịch đến những nơi mới."
      },
      {
        "word": "trip (n)",
        "ipa": "/trɪp/",
        "meaning": "chuyến đi",
        "example_en": "Have a good trip!",
        "example_vi": "Chúc một chuyến đi vui vẻ!"
      },
      {
        "word": "tyre (n) (Am Eng: tire)",
        "ipa": "/taɪər/",
        "meaning": "lốp xe",
        "example_en": "My car needs a new tyre.",
        "example_vi": "Xe hơi của tôi cần một chiếc lốp xe mới."
      },
      {
        "word": "underground (n & adj)",
        "ipa": "/ˈəndərˌgraʊnd/",
        "meaning": "bí mật",
        "example_en": "They had an underground meeting.",
        "example_vi": "Họ đã có một cuộc họp bí mật."
      },
      {
        "word": "wheel (n)",
        "ipa": "/wil/",
        "meaning": "bánh xe",
        "example_en": "The car has four wheels.",
        "example_vi": "Chiếc xe hơi có bốn bánh xe."
      }
    ]
  },
  {
    "topic": "GIÁO DỤC & CÔNG TÁC",
    "words": [
      {
        "word": "actor (n)",
        "ipa": "/ˈæktər/",
        "meaning": "diễn viên",
        "example_en": "He is a famous actor.",
        "example_vi": "Anh ấy là một diễn viên nổi tiếng."
      },
      {
        "word": "assistant (n)",
        "ipa": "/əˈsɪstənt/",
        "meaning": "trợ lý",
        "example_en": "She works as an assistant in a shop.",
        "example_vi": "Cô ấy làm trợ lý trong một cửa hàng."
      },
      {
        "word": "board (n)",
        "ipa": "/bɔrd/",
        "meaning": "Cái bảng",
        "example_en": "The teacher writes on the board.",
        "example_vi": "Giáo viên viết lên cái bảng."
      },
      {
        "word": "board game (n)",
        "ipa": "/bɔrd geɪm/",
        "meaning": "trò chơi cờ bàn",
        "example_en": "We played a board game after dinner.",
        "example_vi": "Chúng tôi đã chơi một trò chơi cờ bàn sau bữa tối."
      },
      {
        "word": "book (n & v)",
        "ipa": "/bʊk/",
        "meaning": "sách / đặt chỗ (vé phòng)",
        "example_en": "I need to book a room for tonight.",
        "example_vi": "Tôi cần đặt chỗ một phòng cho tối nay."
      },
      {
        "word": "boss (n)",
        "ipa": "/bɔs/",
        "meaning": "ông chủ",
        "example_en": "My boss is very nice.",
        "example_vi": "Ông chủ của tôi rất tốt bụng."
      },
      {
        "word": "business (n)",
        "ipa": "/ˈbɪznɪs/",
        "meaning": "việc kinh doanh",
        "example_en": "He started a new business last year.",
        "example_vi": "Anh ấy đã bắt đầu một việc kinh doanh mới vào năm ngoái."
      },
      {
        "word": "business person (n)",
        "ipa": "/ˈbɪznɪs ˈpərsən/",
        "meaning": "doanh nhân",
        "example_en": "She is a successful business person.",
        "example_vi": "Cô ấy là một doanh nhân thành đạt."
      },
      {
        "word": "busy (adj)",
        "ipa": "/ˈbɪzi/",
        "meaning": "bận",
        "example_en": "I am very busy today.",
        "example_vi": "Hôm nay tôi rất bận."
      },
      {
        "word": "calendar (n)",
        "ipa": "/ˈkæləndər/",
        "meaning": "lịch",
        "example_en": "I marked the date on my calendar.",
        "example_vi": "Tôi đã đánh dấu ngày đó trên lịch của mình."
      },
      {
        "word": "career (n)",
        "ipa": "/kərɪr/",
        "meaning": "sự nghiệp",
        "example_en": "She wants a career in medicine.",
        "example_vi": "Cô ấy muốn một sự nghiệp trong ngành y."
      },
      {
        "word": "chemistry (n)",
        "ipa": "/ˈkɛmɪstri/",
        "meaning": "hoá học",
        "example_en": "Chemistry is my favourite subject.",
        "example_vi": "Hóa học là môn học yêu thích của tôi."
      },
      {
        "word": "class (n)",
        "ipa": "/klæs/",
        "meaning": "lớp học",
        "example_en": "The class starts at 8 a.m.",
        "example_vi": "Lớp học bắt đầu lúc 8 giờ sáng."
      },
      {
        "word": "classmate (n)",
        "ipa": "/ˈklæsˌmeɪt/",
        "meaning": "bạn cùng lớp",
        "example_en": "He is my old classmate.",
        "example_vi": "Anh ấy là bạn cùng lớp cũ của tôi."
      },
      {
        "word": "classroom (n)",
        "ipa": "/ˈklæsˌrum/",
        "meaning": "lớp học",
        "example_en": "Please go to your classroom now.",
        "example_vi": "Hãy đi vào lớp học của bạn ngay bây giờ."
      },
      {
        "word": "clever (adj)",
        "ipa": "/ˈklɛvər/",
        "meaning": "thông minh",
        "example_en": "The clever boy solved the puzzle quickly.",
        "example_vi": "Cậu bé thông minh đã giải câu đố một cách nhanh chóng."
      },
      {
        "word": "college (n)",
        "ipa": "/ˈkɑlɪʤ/",
        "meaning": "trường cao đẳng",
        "example_en": "My brother is studying at college.",
        "example_vi": "Anh trai tôi đang học ở trường cao đẳng."
      },
      {
        "word": "company (n)",
        "ipa": "/ˈkəmpəˌni/",
        "meaning": "công ty",
        "example_en": "She works for a large computer company.",
        "example_vi": "Cô ấy làm việc cho một công ty máy tính lớn."
      },
      {
        "word": "computer (n)",
        "ipa": "/kəmˈpjutər/",
        "meaning": "máy tính",
        "example_en": "I use my computer to do homework.",
        "example_vi": "Tôi sử dụng máy tính của mình để làm bài tập về nhà."
      },
      {
        "word": "course (n)",
        "ipa": "/kɔrs/",
        "meaning": "khóa học",
        "example_en": "I am taking an English course.",
        "example_vi": "Tôi đang tham gia một khóa học tiếng Anh."
      },
      {
        "word": "dictionary (n)",
        "ipa": "/ˈdɪkʃəˌnɛri/",
        "meaning": "từ điển",
        "example_en": "You can look up the word in a dictionary.",
        "example_vi": "Bạn có thể tra từ này trong từ điển."
      },
      {
        "word": "diploma (n)",
        "ipa": "/dɪˈploʊmɑ/",
        "meaning": "bằng cấp",
        "example_en": "He got a diploma in business.",
        "example_vi": "Anh ấy đã nhận được bằng cấp về kinh doanh."
      },
      {
        "word": "draw (v)",
        "ipa": "/drɔ/",
        "meaning": "vẽ tranh",
        "example_en": "The children love to draw pictures.",
        "example_vi": "Bọn trẻ rất thích vẽ tranh."
      },
      {
        "word": "earn (v)",
        "ipa": "/ərn/",
        "meaning": "kiếm",
        "example_en": "She wants to earn a lot of money.",
        "example_vi": "Cô ấy muốn kiếm nhiều tiền."
      },
      {
        "word": "engineer (n)",
        "ipa": "/ˈɛnʤəˈnɪr/",
        "meaning": "kỹ sư",
        "example_en": "My father is an engineer.",
        "example_vi": "Bố tôi là một kỹ sư."
      },
      {
        "word": "factory (n)",
        "ipa": "/ˈfæktəri/",
        "meaning": "nhà máy",
        "example_en": "He works in a car factory.",
        "example_vi": "Anh ấy làm việc trong một nhà máy sản xuất ô tô."
      },
      {
        "word": "fail (v)",
        "ipa": "/feɪl/",
        "meaning": "thất bại",
        "example_en": "Study hard so you don't fail the test.",
        "example_vi": "Hãy học chăm chỉ để bạn không thất bại trong bài kiểm tra."
      },
      {
        "word": "farmer (n)",
        "ipa": "/ˈfɑrmər/",
        "meaning": "nông dân",
        "example_en": "The farmer grows vegetables in the field.",
        "example_vi": "Người nông dân trồng rau trên cánh đồng."
      },
      {
        "word": "geography (n)",
        "ipa": "/ʤiˈɑgrəfi/",
        "meaning": "địa lý",
        "example_en": "We learn about different countries in geography.",
        "example_vi": "Chúng tôi học về các quốc gia khác nhau trong môn địa lý."
      },
      {
        "word": "guess (v)",
        "ipa": "/gɛs/",
        "meaning": "đoán",
        "example_en": "Can you guess my age?",
        "example_vi": "Bạn có thể đoán tuổi của tôi không?"
      },
      {
        "word": "Guess what? (Phrase)",
        "ipa": "/gɛs wət?/",
        "meaning": "Đoán xem? / Biết gì không?",
        "example_en": "Guess what? I got a new job!",
        "example_vi": "Biết gì không? Tôi đã có một công việc mới!"
      },
      {
        "word": "headteacher (n)",
        "ipa": "/ˌhedˈtiː.tʃər/",
        "meaning": "hiệu trưởng",
        "example_en": "The headteacher gave a speech to the students.",
        "example_vi": "Hiệu trưởng đã phát biểu trước các học sinh."
      },
      {
        "word": "history (n)",
        "ipa": "/ˈhɪstəri/",
        "meaning": "lịch sử",
        "example_en": "We are learning about the history of our country.",
        "example_vi": "Chúng tôi đang tìm hiểu về lịch sử của đất nước mình."
      },
      {
        "word": "homework (n)",
        "ipa": "/ˈhoʊmˌwərk/",
        "meaning": "bài tập về nhà",
        "example_en": "I have to finish my homework before playing.",
        "example_vi": "Tôi phải hoàn thành bài tập về nhà trước khi chơi."
      },
      {
        "word": "information (n)",
        "ipa": "/ˌɪnˌfɔrˈmeɪʃən/",
        "meaning": "thông tin",
        "example_en": "You can find more information on the website.",
        "example_vi": "Bạn có thể tìm thêm thông tin trên trang web."
      },
      {
        "word": "job (n)",
        "ipa": "/ʤɑb/",
        "meaning": "công việc",
        "example_en": "Finding a good job is not easy.",
        "example_vi": "Việc tìm một công việc tốt là không hề dễ dàng."
      },
      {
        "word": "know (v)",
        "ipa": "/noʊ/",
        "meaning": "biết",
        "example_en": "Do you know the answer?",
        "example_vi": "Bạn có biết câu trả lời không?"
      },
      {
        "word": "language (n)",
        "ipa": "/ˈlæŋgwɪʤ/",
        "meaning": "ngôn ngữ",
        "example_en": "English is a useful language.",
        "example_vi": "Tiếng Anh là một ngôn ngữ hữu ích."
      },
      {
        "word": "learn (v)",
        "ipa": "/lərn/",
        "meaning": "học hỏi",
        "example_en": "I want to learn how to play the piano.",
        "example_vi": "Tôi muốn học hỏi cách chơi đàn piano."
      },
      {
        "word": "lesson (n)",
        "ipa": "/ˈlɛsən/",
        "meaning": "bài học",
        "example_en": "Our first lesson today is maths.",
        "example_vi": "Bài học đầu tiên của chúng ta hôm nay là môn toán."
      },
      {
        "word": "letter (n)",
        "ipa": "/ˈlɛtər/",
        "meaning": "thư",
        "example_en": "I wrote a letter to my friend.",
        "example_vi": "Tôi đã viết một bức thư cho bạn tôi."
      },
      {
        "word": "main course (n)",
        "ipa": "/meɪn kɔrs/",
        "meaning": "món chính",
        "example_en": "We had chicken for the main course.",
        "example_vi": "Chúng tôi đã ăn thịt gà cho món chính."
      },
      {
        "word": "mark (n)",
        "ipa": "/mɑrk/",
        "meaning": "đánh dấu",
        "example_en": "Please mark the correct answer.",
        "example_vi": "Vui lòng đánh dấu câu trả lời đúng."
      },
      {
        "word": "maths/mathematics (n) (Br Eng) (Am Eng: math)",
        "ipa": "/mæθs/",
        "meaning": "môn toán",
        "example_en": "She is very good at maths.",
        "example_vi": "Cô ấy rất giỏi môn toán."
      },
      {
        "word": "mechanic (n)",
        "ipa": "/mɪˈkænɪk/",
        "meaning": "thợ cơ khí",
        "example_en": "The mechanic fixed my car.",
        "example_vi": "Người thợ cơ khí đã sửa xe của tôi."
      },
      {
        "word": "meeting (n)",
        "ipa": "/ˈmitɪŋ/",
        "meaning": "cuộc họp",
        "example_en": "I have a meeting with my boss at 10 a.m.",
        "example_vi": "Tôi có một cuộc họp với ông chủ vào lúc 10 giờ sáng."
      },
      {
        "word": "message (n)",
        "ipa": "/ˈmɛsɪʤ/",
        "meaning": "tin nhắn",
        "example_en": "He sent me a text message.",
        "example_vi": "Anh ấy đã gửi cho tôi một tin nhắn văn bản."
      },
      {
        "word": "mistake (n)",
        "ipa": "/mɪˈsteɪk/",
        "meaning": "sai lầm",
        "example_en": "Don't worry if you make a mistake.",
        "example_vi": "Đừng lo lắng nếu bạn mắc sai lầm."
      },
      {
        "word": "note (n & v)",
        "ipa": "/noʊt/",
        "meaning": "ghi chú",
        "example_en": "Please take a note of this address.",
        "example_vi": "Vui lòng ghi chú lại địa chỉ này."
      },
      {
        "word": "notice (n)",
        "ipa": "/ˈnoʊtɪs/",
        "meaning": "thông báo / biển báo",
        "example_en": "Did you read the notice on the door?",
        "example_vi": "Bạn đã đọc thông báo trên cửa chưa?"
      },
      {
        "word": "occupation (n)",
        "ipa": "/ˌɑkjəˈpeɪʃən/",
        "meaning": "nghề nghiệp",
        "example_en": "Please write your name and occupation on the form.",
        "example_vi": "Vui lòng viết tên và nghề nghiệp của bạn vào mẫu đơn."
      },
      {
        "word": "of course (not) (adv)",
        "ipa": "/əv kɔrs/",
        "meaning": "tất nhiên rồi",
        "example_en": "Of course I will help you!",
        "example_vi": "Tất nhiên rồi, tôi sẽ giúp bạn!"
      },
      {
        "word": "office (n)",
        "ipa": "/ˈɔfəs/",
        "meaning": "văn phòng",
        "example_en": "He works in an office in the city.",
        "example_vi": "Anh ấy làm việc trong một văn phòng ở thành phố."
      },
      {
        "word": "page (n)",
        "ipa": "/peɪʤ/",
        "meaning": "trang",
        "example_en": "Please open your book to page 10.",
        "example_vi": "Vui lòng mở sách của bạn ra trang 10."
      },
      {
        "word": "paper (n & adj)",
        "ipa": "/ˈpeɪpər/",
        "meaning": "giấy",
        "example_en": "I need a piece of paper to write on.",
        "example_vi": "Tôi cần một tờ giấy để viết."
      },
      {
        "word": "pass (v)",
        "ipa": "/pæs/",
        "meaning": "vượt qua",
        "example_en": "I hope I pass the exam.",
        "example_vi": "Tôi hy vọng tôi vượt qua kỳ thi."
      },
      {
        "word": "pen (n)",
        "ipa": "/pɛn/",
        "meaning": "cái bút",
        "example_en": "Can I borrow your blue pen?",
        "example_vi": "Tôi có thể mượn cái bút màu xanh của bạn không?"
      },
      {
        "word": "pencil (n)",
        "ipa": "/ˈpɛnsəl/",
        "meaning": "bút chì",
        "example_en": "I need to sharpen my pencil.",
        "example_vi": "Tôi cần gọt bút chì của mình."
      },
      {
        "word": "pencil case (n)",
        "ipa": "/ˈpɛnsəl keɪs/",
        "meaning": "hộp bút chì",
        "example_en": "Put your pens in your pencil case.",
        "example_vi": "Hãy cất bút của bạn vào hộp bút chì."
      },
      {
        "word": "physics (n)",
        "ipa": "/ˈfɪzɪks/",
        "meaning": "vật lý",
        "example_en": "Physics can be a difficult subject.",
        "example_vi": "Vật lý có thể là một môn học khó."
      },
      {
        "word": "police (n)",
        "ipa": "/pəˈlis/",
        "meaning": "cảnh sát",
        "example_en": "You should call the police.",
        "example_vi": "Bạn nên gọi cho cảnh sát."
      },
      {
        "word": "police officer (n)",
        "ipa": "/pəˈlis ˈɔfɪsər/",
        "meaning": "sĩ quan cảnh sát",
        "example_en": "The police officer helped the lost child.",
        "example_vi": "Sĩ quan cảnh sát đã giúp đỡ đứa trẻ đi lạc."
      },
      {
        "word": "post office (n)",
        "ipa": "/poʊst ˈɔfəs/",
        "meaning": "bưu điện",
        "example_en": "I need to go to the post office to send a letter.",
        "example_vi": "Tôi cần đến bưu điện để gửi thư."
      },
      {
        "word": "practice (n) (Br Eng) (Am Eng: practise)",
        "ipa": "/ˈpræktɪs/",
        "meaning": "luyện tập",
        "example_en": "You need more practice to play well.",
        "example_vi": "Bạn cần luyện tập thêm để chơi tốt."
      },
      {
        "word": "project (n)",
        "ipa": "/ˈprɑʤɛkt/",
        "meaning": "dự án",
        "example_en": "We are working on a science project.",
        "example_vi": "Chúng tôi đang làm một dự án khoa học."
      },
      {
        "word": "pupil (n)",
        "ipa": "/ˈpjupəl/",
        "meaning": "học sinh",
        "example_en": "There are thirty pupils in my class.",
        "example_vi": "Có ba mươi học sinh trong lớp của tôi."
      },
      {
        "word": "read (v)",
        "ipa": "/riːd/",
        "meaning": "đọc",
        "example_en": "I like to read books before bed.",
        "example_vi": "Tôi thích đọc sách trước khi đi ngủ."
      },
      {
        "word": "reading (n)",
        "ipa": "/ˈrɛdɪŋ/",
        "meaning": "đọc",
        "example_en": "Reading is my favourite hobby.",
        "example_vi": "Đọc là sở thích yêu thích của tôi."
      },
      {
        "word": "remember (v)",
        "ipa": "/rɪˈmɛmbər/",
        "meaning": "nhớ",
        "example_en": "I cannot remember his name.",
        "example_vi": "Tôi không thể nhớ tên của anh ấy."
      },
      {
        "word": "rubber (n)",
        "ipa": "/ˈrəbər/",
        "meaning": "cao su",
        "example_en": "These shoes are made of rubber.",
        "example_vi": "Những đôi giày này được làm bằng cao su."
      },
      {
        "word": "ruler (n)",
        "ipa": "/ˈrulər/",
        "meaning": "cái thước kẻ",
        "example_en": "Use a ruler to draw a straight line.",
        "example_vi": "Hãy dùng cái thước kẻ để vẽ một đường thẳng."
      },
      {
        "word": "school (n)",
        "ipa": "/skul/",
        "meaning": "trường học",
        "example_en": "My children are at school now.",
        "example_vi": "Các con tôi hiện đang ở trường học."
      },
      {
        "word": "science (n)",
        "ipa": "/saɪəns/",
        "meaning": "khoa học",
        "example_en": "I love science because we do experiments.",
        "example_vi": "Tôi yêu môn khoa học vì chúng tôi được làm thí nghiệm."
      },
      {
        "word": "secretary (n)",
        "ipa": "/ˈsɛkrəˌtɛri/",
        "meaning": "thư ký",
        "example_en": "The secretary answers the phone in the office.",
        "example_vi": "Người thư ký nghe điện thoại trong văn phòng."
      },
      {
        "word": "sentence (n)",
        "ipa": "/ˈsɛntəns/",
        "meaning": "câu",
        "example_en": "Please write a short sentence.",
        "example_vi": "Vui lòng viết một câu ngắn."
      },
      {
        "word": "shop assistant (n)",
        "ipa": "/ʃɑp əˈsɪstənt/",
        "meaning": "nhân viên bán hàng",
        "example_en": "The shop assistant helped me find a shirt.",
        "example_vi": "Nhân viên bán hàng đã giúp tôi tìm một chiếc áo sơ mi."
      },
      {
        "word": "speak (v)",
        "ipa": "/spik/",
        "meaning": "nói chuyện",
        "example_en": "Can you speak English?",
        "example_vi": "Bạn có thể nói tiếng Anh không?"
      },
      {
        "word": "spell (v)",
        "ipa": "/spɛl/",
        "meaning": "Đánh vần",
        "example_en": "How do you spell your name?",
        "example_vi": "Bạn đánh vần tên mình như thế nào?"
      },
      {
        "word": "student (n)",
        "ipa": "/ˈstudənt/",
        "meaning": "học sinh",
        "example_en": "He is a good student.",
        "example_vi": "Cậu ấy là một học sinh giỏi."
      },
      {
        "word": "studies (n pl)",
        "ipa": "/ˈstədiz/",
        "meaning": "nghiên cứu",
        "example_en": "Her studies are very important to her.",
        "example_vi": "Nghiên cứu của cô ấy rất quan trọng với cô ấy."
      },
      {
        "word": "study (v)",
        "ipa": "/ˈstədi/",
        "meaning": "học",
        "example_en": "I study English every day.",
        "example_vi": "Tôi học tiếng Anh mỗi ngày."
      },
      {
        "word": "subject (n)",
        "ipa": "/ˈsəbʤɪkt/",
        "meaning": "chủ thể",
        "example_en": "The subject of the picture is a bird.",
        "example_vi": "Chủ thể của bức tranh là một con chim."
      },
      {
        "word": "teach (v)",
        "ipa": "/tiʧ/",
        "meaning": "dạy bảo",
        "example_en": "My father teaches me how to swim.",
        "example_vi": "Bố tôi dạy bảo tôi cách bơi."
      },
      {
        "word": "teacher (n)",
        "ipa": "/ˈtiʧər/",
        "meaning": "giáo viên",
        "example_en": "Our teacher is very kind.",
        "example_vi": "Giáo viên của chúng tôi rất tốt bụng."
      },
      {
        "word": "term (n)",
        "ipa": "/tərm/",
        "meaning": "thuật ngữ",
        "example_en": "This term means 'hello' in French.",
        "example_vi": "Thuật ngữ này có nghĩa là 'xin chào' trong tiếng Pháp."
      },
      {
        "word": "test (n)",
        "ipa": "/tɛst/",
        "meaning": "Bài kiểm tra",
        "example_en": "I have a math test tomorrow.",
        "example_vi": "Tôi có bài kiểm tra toán vào ngày mai."
      },
      {
        "word": "text (n & v)",
        "ipa": "/tɛkst/",
        "meaning": "(n) văn bản / (v) nhắn tin",
        "example_en": "Read the text and answer the questions.",
        "example_vi": "Đọc văn bản và trả lời các câu hỏi."
      },
      {
        "word": "text message (n)",
        "ipa": "/tɛkst ˈmɛsɪʤ/",
        "meaning": "tin nhắn văn bản",
        "example_en": "She sent me a text message yesterday.",
        "example_vi": "Cô ấy đã gửi cho tôi một tin nhắn văn bản vào ngày hôm qua."
      },
      {
        "word": "tour guide (n)",
        "ipa": "/tʊr gaɪd/",
        "meaning": "hướng dẫn viên du lịch",
        "example_en": "The tour guide showed us the old city.",
        "example_vi": "Hướng dẫn viên du lịch đã chỉ cho chúng tôi thành phố cổ."
      },
      {
        "word": "understand (v)",
        "ipa": "/ˌəndərˈstænd/",
        "meaning": "hiểu",
        "example_en": "I don't understand this word.",
        "example_vi": "Tôi không hiểu từ này."
      },
      {
        "word": "university (n)",
        "ipa": "/ˌjunəˈvərsəti/",
        "meaning": "trường đại học",
        "example_en": "My sister goes to university in London.",
        "example_vi": "Chị gái tôi học trường đại học ở Luân Đôn."
      },
      {
        "word": "vocabulary (n)",
        "ipa": "/voʊˈkæbjəˌlɛri/",
        "meaning": "từ vựng",
        "example_en": "Reading books helps you learn new vocabulary.",
        "example_vi": "Đọc sách giúp bạn học từ vựng mới."
      },
      {
        "word": "web page (n)",
        "ipa": "/wɛb peɪʤ/",
        "meaning": "trang web",
        "example_en": "I read about this on a web page.",
        "example_vi": "Tôi đã đọc về điều này trên một trang web."
      },
      {
        "word": "word (n)",
        "ipa": "/wərd/",
        "meaning": "từ",
        "example_en": "What does this word mean?",
        "example_vi": "Từ này có nghĩa là gì?"
      },
      {
        "word": "work (n & v)",
        "ipa": "/wərk/",
        "meaning": "công việc",
        "example_en": "He leaves for work at 8 o'clock.",
        "example_vi": "Anh ấy rời nhà đi làm công việc lúc 8 giờ."
      },
      {
        "word": "worker (n)",
        "ipa": "/ˈwərkər/",
        "meaning": "công nhân",
        "example_en": "The factory has many workers.",
        "example_vi": "Nhà máy có nhiều công nhân."
      },
      {
        "word": "work out (phr v)",
        "ipa": "/wərk aʊt/",
        "meaning": "tập thể dục",
        "example_en": "I work out at the gym twice a week.",
        "example_vi": "Tôi tập thể dục ở phòng tập hai lần một tuần."
      },
      {
        "word": "write (v)",
        "ipa": "/raɪt/",
        "meaning": "viết",
        "example_en": "Please write your name here.",
        "example_vi": "Vui lòng viết tên của bạn ở đây."
      },
      {
        "word": "write down (phr v)",
        "ipa": "/raɪt daʊn/",
        "meaning": "viết ra",
        "example_en": "Write down the address so you don't forget it.",
        "example_vi": "Hãy viết ra địa chỉ để bạn không quên nó."
      },
      {
        "word": "writer (n)",
        "ipa": "/ˈraɪtər/",
        "meaning": "nhà văn",
        "example_en": "She is a famous writer.",
        "example_vi": "Cô ấy là một nhà văn nổi tiếng."
      }
    ]
  },
  {
    "topic": "NHÀ CỬA",
    "words": [
      {
        "word": "address (n)",
        "ipa": "/ˈæˌdrɛs/",
        "meaning": "Địa chỉ",
        "example_en": "What is your home address?",
        "example_vi": "Địa chỉ nhà của bạn là gì?"
      },
      {
        "word": "alarm clock (n)",
        "ipa": "/əˈlɑrm klɑk/",
        "meaning": "đồng hồ báo thức",
        "example_en": "My alarm clock rings at 6 a.m.",
        "example_vi": "Đồng hồ báo thức của tôi reo lúc 6 giờ sáng."
      },
      {
        "word": "apartment (n)",
        "ipa": "/əˈpɑrtmənt/",
        "meaning": "căn hộ",
        "example_en": "They live in a small apartment.",
        "example_vi": "Họ sống trong một căn hộ nhỏ."
      },
      {
        "word": "apartment building (n)",
        "ipa": "/əˈpɑrtmənt ˈbɪldɪŋ/",
        "meaning": "chung cư",
        "example_en": "Our apartment building is very tall.",
        "example_vi": "Chung cư của chúng tôi rất cao."
      },
      {
        "word": "armchair (n)",
        "ipa": "/ˈɑrmˌʧɛr/",
        "meaning": "ghế bành",
        "example_en": "He is sitting in a comfortable armchair.",
        "example_vi": "Anh ấy đang ngồi trên một chiếc ghế bành thoải mái."
      },
      {
        "word": "bath (n)",
        "ipa": "/bæθ/",
        "meaning": "bồn tắm",
        "example_en": "I want to relax in the bath.",
        "example_vi": "Tôi muốn thư giãn trong bồn tắm."
      },
      {
        "word": "bathroom (n)",
        "ipa": "/ˈbæθˌrum/",
        "meaning": "phòng tắm",
        "example_en": "The bathroom is next to the bedroom.",
        "example_vi": "Phòng tắm ở cạnh phòng ngủ."
      },
      {
        "word": "bed (n)",
        "ipa": "/bɛd/",
        "meaning": "giường",
        "example_en": "I am tired and want to go to bed.",
        "example_vi": "Tôi mệt và muốn đi ngủ trên giường."
      },
      {
        "word": "bedroom (n)",
        "ipa": "/ˈbɛˌdrum/",
        "meaning": "phòng ngủ",
        "example_en": "My bedroom has a big window.",
        "example_vi": "Phòng ngủ của tôi có một cửa sổ lớn."
      },
      {
        "word": "blanket (n)",
        "ipa": "/ˈblæŋkɪt/",
        "meaning": "cái chăn",
        "example_en": "It is cold, so I need a blanket.",
        "example_vi": "Trời lạnh nên tôi cần một cái chăn."
      },
      {
        "word": "bookcase (n)",
        "ipa": "/ˈbʊkˌkeɪs/",
        "meaning": "tủ sách",
        "example_en": "Put the books back in the bookcase.",
        "example_vi": "Hãy đặt những cuốn sách lại vào tủ sách."
      },
      {
        "word": "building (n)",
        "ipa": "/ˈbɪldɪŋ/",
        "meaning": "tòa nhà",
        "example_en": "That building is very old.",
        "example_vi": "Tòa nhà đó rất cũ."
      },
      {
        "word": "carpet (n)",
        "ipa": "/ˈkɑrpət/",
        "meaning": "thảm",
        "example_en": "The cat is sleeping on the carpet.",
        "example_vi": "Con mèo đang ngủ trên thảm."
      },
      {
        "word": "ceiling (n)",
        "ipa": "/ˈsilɪŋ/",
        "meaning": "trần nhà",
        "example_en": "The ceiling in this room is very high.",
        "example_vi": "Trần nhà trong phòng này rất cao."
      },
      {
        "word": "chair (n)",
        "ipa": "/ʧɛr/",
        "meaning": "cái ghế",
        "example_en": "Please sit on this chair.",
        "example_vi": "Vui lòng ngồi lên cái ghế này."
      },
      {
        "word": "clock (n)",
        "ipa": "/klɑk/",
        "meaning": "cái đồng hồ",
        "example_en": "Look at the clock, we are late!",
        "example_vi": "Hãy nhìn cái đồng hồ, chúng ta muộn rồi!"
      },
      {
        "word": "cupboard (n)",
        "ipa": "/ˈkəbərd/",
        "meaning": "cái tủ",
        "example_en": "The cups are in the cupboard.",
        "example_vi": "Những cái cốc ở trong cái tủ."
      },
      {
        "word": "curtain (n)",
        "ipa": "/ˈkərtən/",
        "meaning": "tấm màn",
        "example_en": "Please close the curtain.",
        "example_vi": "Vui lòng đóng tấm màn lại."
      },
      {
        "word": "desk (n)",
        "ipa": "/dɛsk/",
        "meaning": "bàn làm việc",
        "example_en": "He has a computer on his desk.",
        "example_vi": "Anh ấy có một máy tính trên bàn làm việc."
      },
      {
        "word": "dining room (n)",
        "ipa": "/ˈdaɪnɪŋ rum/",
        "meaning": "phòng ăn",
        "example_en": "We eat dinner in the dining room.",
        "example_vi": "Chúng tôi ăn tối trong phòng ăn."
      },
      {
        "word": "door (n)",
        "ipa": "/dɔr/",
        "meaning": "cửa",
        "example_en": "Please open the door.",
        "example_vi": "Vui lòng mở cửa."
      },
      {
        "word": "downstairs (adv)",
        "ipa": "/ˈdaʊnˈstɛrz/",
        "meaning": "tầng dưới",
        "example_en": "She went downstairs to the kitchen.",
        "example_vi": "Cô ấy đi xuống tầng dưới vào bếp."
      },
      {
        "word": "drawer (n)",
        "ipa": "/drɔr/",
        "meaning": "ngăn kéo",
        "example_en": "Your socks are in the drawer.",
        "example_vi": "Tất của bạn ở trong ngăn kéo."
      },
      {
        "word": "DVD (n)",
        "ipa": "/ˌdiˌviˈdi/",
        "meaning": "DVD",
        "example_en": "Let's watch a DVD tonight.",
        "example_vi": "Hãy xem một đĩa DVD tối nay."
      },
      {
        "word": "DVD player (n)",
        "ipa": "/ˌdiˌviˈdi pleɪər/",
        "meaning": "đầu DVD",
        "example_en": "We bought a new DVD player.",
        "example_vi": "Chúng tôi đã mua một đầu DVD mới."
      },
      {
        "word": "flat (n)",
        "ipa": "/flæt/",
        "meaning": "căn hộ",
        "example_en": "My flat is on the second floor.",
        "example_vi": "Căn hộ của tôi ở tầng hai."
      },
      {
        "word": "floor (n)",
        "ipa": "/flɔr/",
        "meaning": "sàn nhà",
        "example_en": "The baby is playing on the floor.",
        "example_vi": "Em bé đang chơi trên sàn nhà."
      },
      {
        "word": "furniture (n)",
        "ipa": "/ˈfərnɪʧər/",
        "meaning": "nội thất",
        "example_en": "They bought new furniture for the living room.",
        "example_vi": "Họ đã mua nội thất mới cho phòng khách."
      },
      {
        "word": "garden (n)",
        "ipa": "/ˈgɑrdən/",
        "meaning": "vườn",
        "example_en": "There are many flowers in the garden.",
        "example_vi": "Có rất nhiều hoa trong vườn."
      },
      {
        "word": "gate (n)",
        "ipa": "/geɪt/",
        "meaning": "cổng",
        "example_en": "Please close the gate when you leave.",
        "example_vi": "Vui lòng đóng cổng khi bạn rời đi."
      },
      {
        "word": "guest-house (n)",
        "ipa": "/ˈɡest.haʊs/",
        "meaning": "nhà khách",
        "example_en": "We stayed at a nice guest-house near the beach.",
        "example_vi": "Chúng tôi ở tại một nhà khách đẹp gần bãi biển."
      },
      {
        "word": "hall (n)",
        "ipa": "/hɔl/",
        "meaning": "sảnh",
        "example_en": "Leave your shoes in the hall.",
        "example_vi": "Hãy để giày của bạn ở sảnh."
      },
      {
        "word": "heating (n)",
        "ipa": "/ˈhitɪŋ/",
        "meaning": "sưởi ấm",
        "example_en": "Please turn on the heating, it is cold.",
        "example_vi": "Vui lòng bật hệ thống sưởi ấm, trời đang lạnh."
      },
      {
        "word": "home (n & adv)",
        "ipa": "/hoʊm/",
        "meaning": "nhà / tổ ấm",
        "example_en": "I want to go home now.",
        "example_vi": "Tôi muốn về nhà bây giờ."
      },
      {
        "word": "house (n)",
        "ipa": "/haʊs/",
        "meaning": "căn nhà",
        "example_en": "They live in a big house.",
        "example_vi": "Họ sống trong một căn nhà lớn."
      },
      {
        "word": "key (n)",
        "ipa": "/ki/",
        "meaning": "chìa khóa",
        "example_en": "I can't find my car keys.",
        "example_vi": "Tôi không thể tìm thấy chìa khóa ô tô của mình."
      },
      {
        "word": "kitchen (n)",
        "ipa": "/ˈkɪʧən/",
        "meaning": "phòng bếp",
        "example_en": "She is cooking dinner in the kitchen.",
        "example_vi": "Cô ấy đang nấu bữa tối trong phòng bếp."
      },
      {
        "word": "lamp (n)",
        "ipa": "/læmp/",
        "meaning": "đèn",
        "example_en": "Turn on the lamp so you can read.",
        "example_vi": "Bật đèn lên để bạn có thể đọc."
      },
      {
        "word": "light (n & adj)",
        "ipa": "/laɪt/",
        "meaning": "ánh sáng",
        "example_en": "The sun gives us natural light.",
        "example_vi": "Mặt trời cho chúng ta ánh sáng tự nhiên."
      },
      {
        "word": "living room (n)",
        "ipa": "/ˈlɪvɪŋ rum/",
        "meaning": "phòng khách",
        "example_en": "We watch TV in the living room.",
        "example_vi": "Chúng tôi xem tivi trong phòng khách."
      },
      {
        "word": "mirror (n)",
        "ipa": "/ˈmɪrər/",
        "meaning": "gương",
        "example_en": "She looked at herself in the mirror.",
        "example_vi": "Cô ấy nhìn mình trong gương."
      },
      {
        "word": "oven (n)",
        "ipa": "/ˈəvən/",
        "meaning": "lò vi sóng",
        "example_en": "I heat my food in the oven.",
        "example_vi": "Tôi hâm nóng thức ăn trong lò vi sóng."
      },
      {
        "word": "picture (n)",
        "ipa": "/ˈpɪkʧər/",
        "meaning": "hình ảnh",
        "example_en": "This is a beautiful picture of my family.",
        "example_vi": "Đây là một hình ảnh đẹp về gia đình tôi."
      },
      {
        "word": "pillow (n)",
        "ipa": "/ˈpɪloʊ/",
        "meaning": "cái gối",
        "example_en": "I need a soft pillow to sleep well.",
        "example_vi": "Tôi cần một cái gối mềm để ngủ ngon."
      },
      {
        "word": "roof (n)",
        "ipa": "/rʊf/",
        "meaning": "mái nhà",
        "example_en": "There is a bird on the roof.",
        "example_vi": "Có một con chim trên mái nhà."
      },
      {
        "word": "room (n)",
        "ipa": "/rum/",
        "meaning": "phòng",
        "example_en": "This is my favorite room in the house.",
        "example_vi": "Đây là căn phòng yêu thích của tôi trong nhà."
      },
      {
        "word": "safe (adj)",
        "ipa": "/seɪf/",
        "meaning": "an toàn",
        "example_en": "It is safe to cross the street here.",
        "example_vi": "Nơi này an toàn để sang đường."
      },
      {
        "word": "shelf (n)",
        "ipa": "/ʃɛlf/",
        "meaning": "cái kệ",
        "example_en": "Put the books on the shelf.",
        "example_vi": "Đặt những cuốn sách lên cái kệ."
      },
      {
        "word": "shower (n)",
        "ipa": "/ʃaʊər/",
        "meaning": "vòi sen",
        "example_en": "I wash my hair in the shower.",
        "example_vi": "Tôi gội đầu dưới vòi sen."
      },
      {
        "word": "sink (n)",
        "ipa": "/sɪŋk/",
        "meaning": "bồn rửa",
        "example_en": "Put the dirty plates in the sink.",
        "example_vi": "Hãy đặt những chiếc đĩa bẩn vào bồn rửa."
      },
      {
        "word": "sitting room (n)",
        "ipa": "/ˈsɪtɪŋ rum/",
        "meaning": "phòng khách",
        "example_en": "Guests are waiting in the sitting room.",
        "example_vi": "Khách đang đợi trong phòng khách."
      },
      {
        "word": "sofa (n)",
        "ipa": "/ˈsoʊfə/",
        "meaning": "ghế sofa",
        "example_en": "The sofa is very comfortable.",
        "example_vi": "Chiếc ghế sofa rất thoải mái."
      },
      {
        "word": "stairs (n pl)",
        "ipa": "/stɛrz/",
        "meaning": "cầu thang",
        "example_en": "He ran up the stairs.",
        "example_vi": "Anh ấy đã chạy lên cầu thang."
      },
      {
        "word": "stay (v)",
        "ipa": "/steɪ/",
        "meaning": "ở lại",
        "example_en": "I will stay at a hotel for three days.",
        "example_vi": "Tôi sẽ ở lại khách sạn ba ngày."
      },
      {
        "word": "television (TV) (n)",
        "ipa": "/ˈtɛləˌvɪʒən/",
        "meaning": "tivi",
        "example_en": "We bought a new television yesterday.",
        "example_vi": "Chúng tôi đã mua một chiếc tivi mới vào ngày hôm qua."
      },
      {
        "word": "toilet (n)",
        "ipa": "/ˈtɔɪlət/",
        "meaning": "nhà vệ sinh",
        "example_en": "Where is the toilet?",
        "example_vi": "Nhà vệ sinh ở đâu?"
      },
      {
        "word": "towel (n)",
        "ipa": "/taʊəl/",
        "meaning": "cái khăn lau",
        "example_en": "Can I have a clean towel, please?",
        "example_vi": "Cho tôi một cái khăn lau sạch được không?"
      },
      {
        "word": "toy (n)",
        "ipa": "/tɔɪ/",
        "meaning": "đồ chơi",
        "example_en": "The child is playing with his favorite toy.",
        "example_vi": "Đứa trẻ đang chơi với món đồ chơi yêu thích của mình."
      },
      {
        "word": "upstairs (adv)",
        "ipa": "/əpˈstɛrz/",
        "meaning": "trên lầu",
        "example_en": "My bedroom is upstairs.",
        "example_vi": "Phòng ngủ của tôi ở trên lầu."
      },
      {
        "word": "wall (n)",
        "ipa": "/wɔl/",
        "meaning": "tường",
        "example_en": "There is a big clock on the wall.",
        "example_vi": "Có một cái đồng hồ lớn trên tường."
      },
      {
        "word": "wardrobe (n)",
        "ipa": "/ˈwɔrˌdroʊb/",
        "meaning": "tủ quần áo",
        "example_en": "Hang your shirt in the wardrobe.",
        "example_vi": "Hãy treo áo sơ mi của bạn trong tủ quần áo."
      },
      {
        "word": "wash (v)",
        "ipa": "/wɑʃ/",
        "meaning": "rửa",
        "example_en": "Please wash your hands before eating.",
        "example_vi": "Vui lòng rửa tay trước khi ăn."
      },
      {
        "word": "window (n)",
        "ipa": "/ˈwɪndoʊ/",
        "meaning": "cửa sổ",
        "example_en": "Can you open the window?",
        "example_vi": "Bạn có thể mở cửa sổ không?"
      }
    ]
  },
  {
    "topic": "QUẦN ÁO & TRANG SỨC",
    "words": [
      {
        "word": "bag (n)",
        "ipa": "/bæg/",
        "meaning": "cái túi",
        "example_en": "I carry my books in a bag.",
        "example_vi": "Tôi mang sách của mình trong một cái túi."
      },
      {
        "word": "bathing suit (n)",
        "ipa": "/ˈbeɪðɪŋ sut/",
        "meaning": "đồ tắm",
        "example_en": "Don't forget to pack your bathing suit.",
        "example_vi": "Đừng quên mang theo đồ tắm của bạn."
      },
      {
        "word": "belt (n)",
        "ipa": "/bɛlt/",
        "meaning": "thắt lưng",
        "example_en": "He is wearing a brown belt.",
        "example_vi": "Anh ấy đang đeo một chiếc thắt lưng màu nâu."
      },
      {
        "word": "boot (n)",
        "ipa": "/but/",
        "meaning": "đôi ủng / cốp xe",
        "example_en": "Put the bags in the boot of the car.",
        "example_vi": "Hãy đặt những cái túi vào cốp xe ô tô."
      },
      {
        "word": "cap (n)",
        "ipa": "/kæp/",
        "meaning": "mũ lưỡi trai",
        "example_en": "He wears a blue cap in the sun.",
        "example_vi": "Anh ấy đội một chiếc mũ lưỡi trai màu xanh dưới nắng."
      },
      {
        "word": "chain (n)",
        "ipa": "/ʧeɪn/",
        "meaning": "xích",
        "example_en": "The dog is tied with a heavy chain.",
        "example_vi": "Con chó bị buộc bằng một sợi xích nặng."
      },
      {
        "word": "clothes (n pl)",
        "ipa": "/kloʊðz/",
        "meaning": "quần áo",
        "example_en": "I need to buy some new clothes.",
        "example_vi": "Tôi cần mua một ít quần áo mới."
      },
      {
        "word": "dress (n & v)",
        "ipa": "/drɛs/",
        "meaning": "đầm",
        "example_en": "She is wearing a beautiful red dress.",
        "example_vi": "Cô ấy đang mặc một chiếc đầm màu đỏ rất đẹp."
      },
      {
        "word": "earring (n)",
        "ipa": "/ˈɪrɪŋ/",
        "meaning": "bông tai",
        "example_en": "She lost an earring at the party.",
        "example_vi": "Cô ấy đã đánh mất một chiếc bông tai tại bữa tiệc."
      },
      {
        "word": "fashion (n)",
        "ipa": "/ˈfæʃən/",
        "meaning": "thời trang",
        "example_en": "She loves reading about clothes and fashion.",
        "example_vi": "Cô ấy thích đọc về quần áo và thời trang."
      },
      {
        "word": "glasses (n pl)",
        "ipa": "/ˈglæsɪz/",
        "meaning": "kính",
        "example_en": "I need my glasses to read the newspaper.",
        "example_vi": "Tôi cần kính của mình để đọc báo."
      },
      {
        "word": "glove (n)",
        "ipa": "/gləv/",
        "meaning": "găng tay",
        "example_en": "I can't find my left glove.",
        "example_vi": "Tôi không thể tìm thấy chiếc găng tay bên trái của mình."
      },
      {
        "word": "hat (n)",
        "ipa": "/hæt/",
        "meaning": "mũ",
        "example_en": "He wears a hat to protect his head from the sun.",
        "example_vi": "Anh ấy đội mũ để bảo vệ đầu khỏi ánh nắng mặt trời."
      },
      {
        "word": "jacket (n)",
        "ipa": "/ˈʤækɪt/",
        "meaning": "áo khoác",
        "example_en": "It is cold outside, so put on your jacket.",
        "example_vi": "Bên ngoài trời lạnh, nên hãy mặc áo khoác vào."
      },
      {
        "word": "jeans (n pl)",
        "ipa": "/ʤinz/",
        "meaning": "quần jean",
        "example_en": "I usually wear blue jeans at the weekend.",
        "example_vi": "Tôi thường mặc quần jean xanh vào cuối tuần."
      },
      {
        "word": "jewellery (n) (Br Eng) (Am Eng: jewelry)",
        "ipa": "/ˈdʒuː.əl.ri/",
        "meaning": "đồ trang sức",
        "example_en": "She keeps her beautiful jewellery in a small box.",
        "example_vi": "Cô ấy giữ những món đồ trang sức đẹp của mình trong một chiếc hộp nhỏ."
      },
      {
        "word": "leather (n & adj)",
        "ipa": "/ˈlɛðər/",
        "meaning": "da thú",
        "example_en": "My brother bought a new leather jacket yesterday.",
        "example_vi": "Anh trai tôi đã mua một chiếc áo khoác da mới vào ngày hôm qua."
      },
      {
        "word": "necklace (n)",
        "ipa": "/ˈnɛkləs/",
        "meaning": "vòng cổ",
        "example_en": "That silver necklace looks great on you.",
        "example_vi": "Chiếc vòng cổ bằng bạc đó trông rất hợp với bạn."
      },
      {
        "word": "pocket (n)",
        "ipa": "/ˈpɑkət/",
        "meaning": "túi",
        "example_en": "I have some coins in my pocket.",
        "example_vi": "Tôi có vài đồng xu trong túi."
      },
      {
        "word": "purse (n)",
        "ipa": "/pərs/",
        "meaning": "cái ví",
        "example_en": "She opened her purse to pay for the coffee.",
        "example_vi": "Cô ấy mở ví ra để trả tiền cà phê."
      },
      {
        "word": "put on (phr v)",
        "ipa": "/pʊt ɔn/",
        "meaning": "mặc",
        "example_en": "Please put on your coat before you go out.",
        "example_vi": "Xin hãy mặc áo khoác vào trước khi bạn ra ngoài."
      },
      {
        "word": "ring (n & v)",
        "ipa": "/rɪŋ/",
        "meaning": "nhẫn",
        "example_en": "She wears a gold ring on her finger.",
        "example_vi": "Cô ấy đeo một chiếc nhẫn vàng trên ngón tay."
      },
      {
        "word": "scarf (n)",
        "ipa": "/skɑrf/",
        "meaning": "khăn quàng cổ",
        "example_en": "You should wear a scarf because it is windy today.",
        "example_vi": "Bạn nên quàng một chiếc khăn vì hôm nay trời có gió."
      },
      {
        "word": "shirt (n)",
        "ipa": "/ʃərt/",
        "meaning": "áo sơ mi",
        "example_en": "He is wearing a white shirt and a black tie.",
        "example_vi": "Anh ấy đang mặc một chiếc áo sơ mi trắng và thắt cà vạt đen."
      },
      {
        "word": "shoe (n)",
        "ipa": "/ʃu/",
        "meaning": "giày",
        "example_en": "There is a hole in my left shoe.",
        "example_vi": "Có một lỗ thủng trên chiếc giày bên trái của tôi."
      },
      {
        "word": "short (adj)",
        "ipa": "/ʃɔrt/",
        "meaning": "ngắn",
        "example_en": "Her hair is very short now.",
        "example_vi": "Tóc của cô ấy bây giờ rất ngắn."
      },
      {
        "word": "skirt (n)",
        "ipa": "/skərt/",
        "meaning": "váy ngắn",
        "example_en": "She bought a new black skirt for work.",
        "example_vi": "Cô ấy đã mua một chiếc váy ngắn màu đen mới để đi làm."
      },
      {
        "word": "sock (n)",
        "ipa": "/sɑk/",
        "meaning": "tất",
        "example_en": "I can only find one clean sock.",
        "example_vi": "Tôi chỉ tìm thấy một chiếc tất sạch."
      },
      {
        "word": "suit (n)",
        "ipa": "/sut/",
        "meaning": "bộ đồ",
        "example_en": "He wears a dark suit to the office every day.",
        "example_vi": "Anh ấy mặc một bộ đồ tối màu đến văn phòng mỗi ngày."
      },
      {
        "word": "sunglasses (n pl)",
        "ipa": "/ˈsənˌglæsɪz/",
        "meaning": "kính râm",
        "example_en": "Remember to take your sunglasses to the beach.",
        "example_vi": "Nhớ mang theo kính râm của bạn đến bãi biển."
      },
      {
        "word": "sweater (n)",
        "ipa": "/sˈwɛtər/",
        "meaning": "áo len",
        "example_en": "This wool sweater will keep you warm in winter.",
        "example_vi": "Chiếc áo len này sẽ giữ ấm cho bạn vào mùa đông."
      },
      {
        "word": "take off (phr v)",
        "ipa": "/teɪk ɔf/",
        "meaning": "cởi",
        "example_en": "Please take off your shoes when you come inside.",
        "example_vi": "Vui lòng cởi giày ra khi bạn vào trong nhà."
      },
      {
        "word": "tie (n)",
        "ipa": "/taɪ/",
        "meaning": "cà vạt",
        "example_en": "You don't need to wear a tie to the party.",
        "example_vi": "Bạn không cần phải thắt cà vạt khi đến bữa tiệc."
      },
      {
        "word": "tights (n pl)",
        "ipa": "/taɪts/",
        "meaning": "quần bó",
        "example_en": "She wears black tights under her skirt.",
        "example_vi": "Cô ấy mặc quần bó màu đen bên trong váy."
      },
      {
        "word": "trousers (n pl)",
        "ipa": "/ˈtraʊzərz/",
        "meaning": "quần dài",
        "example_en": "He bought a pair of grey trousers yesterday.",
        "example_vi": "Hôm qua anh ấy đã mua một chiếc quần dài màu xám."
      },
      {
        "word": "try on (phr v)",
        "ipa": "/traɪ ɔn/",
        "meaning": "thử đi",
        "example_en": "Can I try on these shoes, please?",
        "example_vi": "Tôi có thể thử đôi giày này được không?"
      },
      {
        "word": "T-shirt (n)",
        "ipa": "/ˈtiˌsərt/",
        "meaning": "áo phông",
        "example_en": "I usually wear a T-shirt and shorts in summer.",
        "example_vi": "Tôi thường mặc áo phông và quần đùi vào mùa hè."
      },
      {
        "word": "umbrella (n)",
        "ipa": "/ˈəmˌbrɛlə/",
        "meaning": "Chiếc ô",
        "example_en": "It is raining, so take an umbrella with you.",
        "example_vi": "Trời đang mưa, vì vậy hãy mang theo ô."
      },
      {
        "word": "uniform (n)",
        "ipa": "/ˈjunəˌfɔrm/",
        "meaning": "đồng phục",
        "example_en": "All the students must wear a school uniform.",
        "example_vi": "Tất cả học sinh đều phải mặc đồng phục của trường."
      },
      {
        "word": "wallet (n)",
        "ipa": "/ˈwɔlət/",
        "meaning": "cái ví",
        "example_en": "He lost his wallet on the train.",
        "example_vi": "Anh ấy đã làm mất ví trên tàu."
      },
      {
        "word": "watch (n & v)",
        "ipa": "/wɔʧ/",
        "meaning": "đồng hồ",
        "example_en": "Look at your watch to check the time.",
        "example_vi": "Hãy nhìn vào đồng hồ của bạn để kiểm tra thời gian."
      },
      {
        "word": "wear (v)",
        "ipa": "/wɛr/",
        "meaning": "mặc",
        "example_en": "I like to wear comfortable clothes at home.",
        "example_vi": "Tôi thích mặc quần áo thoải mái ở nhà."
      },
      {
        "word": "wool (n)",
        "ipa": "/wʊl/",
        "meaning": "len",
        "example_en": "This thick sweater is made of wool.",
        "example_vi": "Chiếc áo len dày này được làm từ len."
      }
    ]
  },
  {
    "topic": "THIÊN NHIÊN & MÔI TRƯỜNG",
    "words": [
      {
        "word": "air (n)",
        "ipa": "/ɛr/",
        "meaning": "không khí",
        "example_en": "Let's open the window to get some fresh air.",
        "example_vi": "Hãy mở cửa sổ để đón chút không khí trong lành."
      },
      {
        "word": "animal (n)",
        "ipa": "/ˈænəməl/",
        "meaning": "động vật",
        "example_en": "The dog is my favorite animal.",
        "example_vi": "Chó là loài động vật yêu thích của tôi."
      },
      {
        "word": "autumn (n)",
        "ipa": "/ˈɔtəm/",
        "meaning": "mùa thu",
        "example_en": "The leaves turn yellow and red in autumn.",
        "example_vi": "Lá cây chuyển sang màu vàng và đỏ vào mùa thu."
      },
      {
        "word": "bear (n)",
        "ipa": "/bɛr/",
        "meaning": "con gấu",
        "example_en": "We saw a big brown bear in the forest.",
        "example_vi": "Chúng tôi đã thấy một con gấu nâu lớn trong rừng."
      },
      {
        "word": "bird (n)",
        "ipa": "/bərd/",
        "meaning": "chim",
        "example_en": "A small bird is singing in the tree.",
        "example_vi": "Một chú chim nhỏ đang hót trên cây."
      },
      {
        "word": "camel (n)",
        "ipa": "/ˈkæməl/",
        "meaning": "con lạc đà",
        "example_en": "People ride camels in the desert.",
        "example_vi": "Người ta cưỡi lạc đà trên sa mạc."
      },
      {
        "word": "cat (n)",
        "ipa": "/kæt/",
        "meaning": "con mèo",
        "example_en": "My cat likes to sleep on the sofa.",
        "example_vi": "Con mèo của tôi thích ngủ trên ghế sofa."
      },
      {
        "word": "cloud (n)",
        "ipa": "/klaʊd/",
        "meaning": "đám mây",
        "example_en": "Look at those beautiful white clouds in the sky.",
        "example_vi": "Nhìn những đám mây trắng tuyệt đẹp trên bầu trời kìa."
      },
      {
        "word": "coast (n)",
        "ipa": "/koʊst/",
        "meaning": "bờ biển",
        "example_en": "We drove along the coast and looked at the sea.",
        "example_vi": "Chúng tôi lái xe dọc theo bờ biển và ngắm nhìn biển."
      },
      {
        "word": "cow (n)",
        "ipa": "/kaʊ/",
        "meaning": "con bò",
        "example_en": "The cow is eating grass in the field.",
        "example_vi": "Con bò đang ăn cỏ trên cánh đồng."
      },
      {
        "word": "dark (adj)",
        "ipa": "/dɑrk/",
        "meaning": "tối tăm",
        "example_en": "It is very dark in this room.",
        "example_vi": "Trong căn phòng này rất tối tăm."
      },
      {
        "word": "degree (n)",
        "ipa": "/dɪˈgri/",
        "meaning": "bằng cấp",
        "example_en": "He has a degree in history from the university.",
        "example_vi": "Anh ấy có bằng cấp về lịch sử từ trường đại học."
      },
      {
        "word": "desert (n)",
        "ipa": "/ˈdɛzərt/",
        "meaning": "sa mạc",
        "example_en": "It is very hot and dry in the desert.",
        "example_vi": "Ở sa mạc rất nóng và khô."
      },
      {
        "word": "dog (n)",
        "ipa": "/dɔg/",
        "meaning": "chó",
        "example_en": "I take my dog for a walk every evening.",
        "example_vi": "Tôi dắt chó đi dạo mỗi buổi tối."
      },
      {
        "word": "dolphin (n)",
        "ipa": "/ˈdɑlfən/",
        "meaning": "cá heo",
        "example_en": "We watched the dolphins swimming in the sea.",
        "example_vi": "Chúng tôi đã xem những chú cá heo bơi lội trên biển."
      },
      {
        "word": "duck (n)",
        "ipa": "/dək/",
        "meaning": "con vịt",
        "example_en": "Look at the small ducks swimming on the lake.",
        "example_vi": "Nhìn những con vịt nhỏ đang bơi trên hồ kìa."
      },
      {
        "word": "east (n, adj & adv)",
        "ipa": "/ist/",
        "meaning": "phía đông",
        "example_en": "The sun always rises in the east.",
        "example_vi": "Mặt trời luôn mọc ở phía đông."
      },
      {
        "word": "elephant (n)",
        "ipa": "/ˈɛləfənt/",
        "meaning": "con voi",
        "example_en": "The elephant is a very large animal with big ears.",
        "example_vi": "Con voi là một loài động vật rất lớn với đôi tai to."
      },
      {
        "word": "environment (n)",
        "ipa": "/ɪnˈvaɪrənmənt/",
        "meaning": "môi trường",
        "example_en": "We must do more to protect the environment.",
        "example_vi": "Chúng ta phải làm nhiều hơn nữa để bảo vệ môi trường."
      },
      {
        "word": "farm (n)",
        "ipa": "/fɑrm/",
        "meaning": "nông trại",
        "example_en": "My uncle has many cows and sheep on his farm.",
        "example_vi": "Chú tôi có rất nhiều bò và cừu trên nông trại của mình."
      },
      {
        "word": "field (n)",
        "ipa": "/fild/",
        "meaning": "cánh đồng",
        "example_en": "The children are playing football in the field.",
        "example_vi": "Bọn trẻ đang chơi bóng đá trên cánh đồng."
      },
      {
        "word": "fire (n)",
        "ipa": "/faɪər/",
        "meaning": "ngọn lửa",
        "example_en": "They sat around the fire to stay warm.",
        "example_vi": "Họ ngồi quanh ngọn lửa để giữ ấm."
      },
      {
        "word": "flower (n)",
        "ipa": "/flaʊər/",
        "meaning": "hoa",
        "example_en": "She gave her mother a beautiful red flower.",
        "example_vi": "Cô ấy tặng mẹ một bông hoa màu đỏ rất đẹp."
      },
      {
        "word": "forest (n)",
        "ipa": "/ˈfɔrɪst/",
        "meaning": "rừng",
        "example_en": "Many different animals live in this forest.",
        "example_vi": "Có rất nhiều loài động vật khác nhau sống trong khu rừng này."
      },
      {
        "word": "grass (n)",
        "ipa": "/græs/",
        "meaning": "cỏ",
        "example_en": "The grass in our garden is very green and long.",
        "example_vi": "Cỏ trong vườn nhà chúng tôi rất xanh và dài."
      },
      {
        "word": "hill (n)",
        "ipa": "/hɪl/",
        "meaning": "đồi",
        "example_en": "We walked to the top of the hill to see the town.",
        "example_vi": "Chúng tôi đã đi bộ lên đỉnh đồi để ngắm nhìn thị trấn."
      },
      {
        "word": "hot (adj)",
        "ipa": "/hɑt/",
        "meaning": "nóng",
        "example_en": "I like to drink cold water on a hot day.",
        "example_vi": "Tôi thích uống nước lạnh vào một ngày trời nóng."
      },
      {
        "word": "island (n)",
        "ipa": "/ˈaɪlənd/",
        "meaning": "hòn đảo",
        "example_en": "We spent our holiday on a small island.",
        "example_vi": "Chúng tôi đã dành kỳ nghỉ của mình trên một hòn đảo nhỏ."
      },
      {
        "word": "lake (n)",
        "ipa": "/leɪk/",
        "meaning": "hồ",
        "example_en": "We went swimming in the lake yesterday.",
        "example_vi": "Hôm qua chúng tôi đã đi bơi ở hồ."
      },
      {
        "word": "monkey (n)",
        "ipa": "/ˈməŋki/",
        "meaning": "con khỉ",
        "example_en": "The monkey is climbing the tree to get a banana.",
        "example_vi": "Con khỉ đang trèo lên cây để lấy một quả chuối."
      },
      {
        "word": "moon (n)",
        "ipa": "/mun/",
        "meaning": "mặt trăng",
        "example_en": "The moon is very bright tonight.",
        "example_vi": "Đêm nay mặt trăng rất sáng."
      },
      {
        "word": "mountain (n)",
        "ipa": "/ˈmaʊntən/",
        "meaning": "núi",
        "example_en": "It is difficult to climb that high mountain.",
        "example_vi": "Thật khó để leo lên ngọn núi cao đó."
      },
      {
        "word": "mouse (n)",
        "ipa": "/maʊs/",
        "meaning": "chuột",
        "example_en": "The cat is trying to catch a small mouse.",
        "example_vi": "Con mèo đang cố bắt một con chuột nhỏ."
      },
      {
        "word": "nature (n)",
        "ipa": "/ˈneɪʧər/",
        "meaning": "thiên nhiên",
        "example_en": "I love walking in the forest to enjoy nature.",
        "example_vi": "Tôi thích đi dạo trong rừng để tận hưởng thiên nhiên."
      },
      {
        "word": "north (n, adj & adv)",
        "ipa": "/nɔrθ/",
        "meaning": "phía bắc",
        "example_en": "They live in a small town in the north of the country.",
        "example_vi": "Họ sống ở một thị trấn nhỏ ở phía bắc của đất nước."
      },
      {
        "word": "ocean (n)",
        "ipa": "/ˈoʊʃən/",
        "meaning": "đại dương",
        "example_en": "Many different fish live in the ocean.",
        "example_vi": "Nhiều loài cá khác nhau sống trong đại dương."
      },
      {
        "word": "path (n)",
        "ipa": "/pæθ/",
        "meaning": "con đường",
        "example_en": "Follow this small path to get to the river.",
        "example_vi": "Hãy đi theo con đường nhỏ này để đến dòng sông."
      },
      {
        "word": "pet (n)",
        "ipa": "/pɛt/",
        "meaning": "thú cưng",
        "example_en": "Do you have a pet, like a dog or a cat?",
        "example_vi": "Bạn có nuôi thú cưng nào không, như một con chó hay một con mèo?"
      },
      {
        "word": "plant (n)",
        "ipa": "/plænt/",
        "meaning": "thực vật",
        "example_en": "Don't forget to give some water to the plant.",
        "example_vi": "Đừng quên tưới chút nước cho cái cây (thực vật)."
      },
      {
        "word": "rabbit (n)",
        "ipa": "/ˈræbɪt/",
        "meaning": "con thỏ",
        "example_en": "The little white rabbit is eating a carrot.",
        "example_vi": "Con thỏ trắng nhỏ đang ăn củ cà rốt."
      },
      {
        "word": "rain (n & v)",
        "ipa": "/reɪn/",
        "meaning": "cơn mưa",
        "example_en": "I like staying at home when there is heavy rain.",
        "example_vi": "Tôi thích ở nhà khi có một cơn mưa lớn."
      },
      {
        "word": "river (n)",
        "ipa": "/ˈrɪvər/",
        "meaning": "dòng sông",
        "example_en": "There is a long bridge over the river.",
        "example_vi": "Có một cây cầu dài bắc qua dòng sông."
      },
      {
        "word": "rock (n)",
        "ipa": "/rɑk/",
        "meaning": "đá",
        "example_en": "He threw a small rock into the water.",
        "example_vi": "Anh ấy đã ném một hòn đá nhỏ xuống nước."
      },
      {
        "word": "sea (n)",
        "ipa": "/si/",
        "meaning": "biển",
        "example_en": "The water in the sea is very cold today.",
        "example_vi": "Nước biển hôm nay rất lạnh."
      },
      {
        "word": "season (n)",
        "ipa": "/ˈsizən/",
        "meaning": "mùa",
        "example_en": "Summer is my favorite season of the year.",
        "example_vi": "Mùa hè là mùa yêu thích nhất của tôi trong năm."
      },
      {
        "word": "sheep (n)",
        "ipa": "/ʃip/",
        "meaning": "con cừu",
        "example_en": "There are fifty sheep in that field.",
        "example_vi": "Có năm mươi con cừu trên cánh đồng đó."
      },
      {
        "word": "sky (n)",
        "ipa": "/skaɪ/",
        "meaning": "bầu trời",
        "example_en": "The sky is very blue today, without any clouds.",
        "example_vi": "Bầu trời hôm nay rất xanh, không có một đám mây nào."
      },
      {
        "word": "snow (n & v)",
        "ipa": "/snoʊ/",
        "meaning": "tuyết",
        "example_en": "The children love playing outside in the snow.",
        "example_vi": "Bọn trẻ thích chơi đùa ngoài trời trong tuyết."
      },
      {
        "word": "south (n, adj & adv)",
        "ipa": "/saʊθ/",
        "meaning": "phía nam",
        "example_en": "Many birds fly to the south for the winter.",
        "example_vi": "Nhiều loài chim bay về phía nam để nghỉ đông."
      },
      {
        "word": "space (n)",
        "ipa": "/speɪs/",
        "meaning": "không gian",
        "example_en": "The astronauts traveled into space in a rocket.",
        "example_vi": "Các phi hành gia đã du hành vào không gian trong một tên lửa."
      },
      {
        "word": "spring (n)",
        "ipa": "/spərɪŋ/",
        "meaning": "mùa xuân",
        "example_en": "The weather gets warmer in spring.",
        "example_vi": "Thời tiết trở nên ấm áp hơn vào mùa xuân."
      },
      {
        "word": "star (n & v)",
        "ipa": "/stɑr/",
        "meaning": "ngôi sao",
        "example_en": "You can see many bright stars in the sky at night.",
        "example_vi": "Bạn có thể nhìn thấy nhiều ngôi sao sáng trên bầu trời vào ban đêm."
      },
      {
        "word": "storm (n)",
        "ipa": "/stɔrm/",
        "meaning": "bão",
        "example_en": "We stayed inside because there was a big storm.",
        "example_vi": "Chúng tôi đã ở trong nhà vì có một cơn bão lớn."
      },
      {
        "word": "summer (n)",
        "ipa": "/ˈsəmər/",
        "meaning": "mùa hè",
        "example_en": "We always go to the beach in summer.",
        "example_vi": "Chúng tôi luôn đi biển vào mùa hè."
      },
      {
        "word": "sun (n)",
        "ipa": "/sən/",
        "meaning": "mặt trời",
        "example_en": "The sun is shining brightly today.",
        "example_vi": "Hôm nay mặt trời đang chiếu sáng rực rỡ."
      },
      {
        "word": "sunny (adj)",
        "ipa": "/ˈsəni/",
        "meaning": "nhiều nắng",
        "example_en": "We had a lovely picnic on a sunny day.",
        "example_vi": "Chúng tôi đã có một buổi dã ngoại tuyệt vời vào một ngày nhiều nắng."
      },
      {
        "word": "tiger (n)",
        "ipa": "/ˈtaɪgər/",
        "meaning": "con hổ",
        "example_en": "A tiger is a large, wild cat with orange and black stripes.",
        "example_vi": "Con hổ là một loài mèo rừng lớn với những sọc màu cam và đen."
      },
      {
        "word": "tree (n)",
        "ipa": "/tri/",
        "meaning": "cây",
        "example_en": "We sat under a large tree to have our lunch.",
        "example_vi": "Chúng tôi đã ngồi dưới một cái cây lớn để ăn trưa."
      },
      {
        "word": "warm (adj)",
        "ipa": "/wɔrm/",
        "meaning": "ấm",
        "example_en": "Put on a jacket to keep warm.",
        "example_vi": "Mặc áo khoác vào để giữ ấm."
      },
      {
        "word": "weather (n)",
        "ipa": "/ˈwɛðər/",
        "meaning": "thời tiết",
        "example_en": "The weather is very nice today, so let's go out.",
        "example_vi": "Thời tiết hôm nay rất đẹp, vì vậy chúng ta hãy ra ngoài."
      },
      {
        "word": "west (n, adj & adv)",
        "ipa": "/wɛst/",
        "meaning": "hướng Tây",
        "example_en": "The sun goes down in the west.",
        "example_vi": "Mặt trời lặn ở hướng Tây."
      },
      {
        "word": "wind (n)",
        "ipa": "/wɪnd/",
        "meaning": "gió",
        "example_en": "The strong wind blew my hat off.",
        "example_vi": "Trận gió mạnh đã thổi bay chiếc mũ của tôi."
      },
      {
        "word": "winter (n)",
        "ipa": "/ˈwɪntər/",
        "meaning": "mùa đông",
        "example_en": "It often snows here in winter.",
        "example_vi": "Ở đây thường có tuyết rơi vào mùa đông."
      },
      {
        "word": "wood (n)",
        "ipa": "/wʊd/",
        "meaning": "gỗ",
        "example_en": "This old table is made of strong wood.",
        "example_vi": "Chiếc bàn cũ này được làm bằng loại gỗ cứng."
      },
      {
        "word": "world (n)",
        "ipa": "/wərld/",
        "meaning": "thế giới",
        "example_en": "She wants to travel around the world one day.",
        "example_vi": "Cô ấy muốn đi du lịch vòng quanh thế giới vào một ngày nào đó."
      }
    ]
  },
  {
    "topic": "THỂ THAO & GIẢI TRÍ",
    "words": [
      {
        "word": "ball (n)",
        "ipa": "/bɔl/",
        "meaning": "quả bóng",
        "example_en": "The children are playing with a red ball in the park.",
        "example_vi": "Bọn trẻ đang chơi với một quả bóng màu đỏ trong công viên."
      },
      {
        "word": "baseball (n)",
        "ipa": "/ˈbeɪsˈbɔl/",
        "meaning": "bóng chày",
        "example_en": "He likes to play baseball with his friends.",
        "example_vi": "Anh ấy thích chơi bóng chày với bạn bè."
      },
      {
        "word": "basketball (n)",
        "ipa": "/ˈbæskətˌbɔl/",
        "meaning": "bóng rổ",
        "example_en": "They are playing basketball in the school yard.",
        "example_vi": "Họ đang chơi bóng rổ trên sân trường."
      },
      {
        "word": "bat (n)",
        "ipa": "/bæt/",
        "meaning": "dơi",
        "example_en": "A bat usually flies at night.",
        "example_vi": "Một con dơi thường bay vào ban đêm."
      },
      {
        "word": "beach (n)",
        "ipa": "/biʧ/",
        "meaning": "bãi biển",
        "example_en": "We often go to the beach in summer.",
        "example_vi": "Chúng tôi thường đi biển vào mùa hè."
      },
      {
        "word": "camp (v)",
        "ipa": "/kæmp/",
        "meaning": "trại",
        "example_en": "We will camp near the river this weekend.",
        "example_vi": "Chúng tôi sẽ cắm trại gần sông vào cuối tuần này."
      },
      {
        "word": "CD (n)",
        "ipa": "/ˈsiˈdi/",
        "meaning": "đĩa CD",
        "example_en": "I bought a new music CD yesterday.",
        "example_vi": "Tôi đã mua một đĩa CD nhạc hôm qua."
      },
      {
        "word": "CD player (n)",
        "ipa": "/ˈsiˈdi pleɪər/",
        "meaning": "máy nghe đĩa CD",
        "example_en": "My brother has an old CD player in his room.",
        "example_vi": "Anh trai tôi có một máy nghe đĩa CD cũ trong phòng."
      },
      {
        "word": "chess (n)",
        "ipa": "/ʧɛs/",
        "meaning": "cờ vua",
        "example_en": "My grandfather taught me how to play chess.",
        "example_vi": "Ông nội tôi đã dạy tôi cách chơi cờ vua."
      },
      {
        "word": "cinema (n)",
        "ipa": "/ˈsɪnəmə/",
        "meaning": "rạp chiếu phim",
        "example_en": "Let's go to the cinema tonight to watch a movie.",
        "example_vi": "Tối nay hãy đến rạp chiếu phim để xem phim."
      },
      {
        "word": "climb (v)",
        "ipa": "/klaɪm/",
        "meaning": "leo",
        "example_en": "It takes two hours to climb this mountain.",
        "example_vi": "Mất hai giờ để leo ngọn núi này."
      },
      {
        "word": "club (n)",
        "ipa": "/kləb/",
        "meaning": "câu lạc bộ",
        "example_en": "She joined the English club at her school.",
        "example_vi": "Cô ấy đã tham gia câu lạc bộ tiếng Anh ở trường."
      },
      {
        "word": "collect (v)",
        "ipa": "/kəˈlɛkt/",
        "meaning": "sưu tầm",
        "example_en": "I like to collect old coins.",
        "example_vi": "Tôi thích sưu tầm những đồng xu cũ."
      },
      {
        "word": "concert (n)",
        "ipa": "/ˈkɑnsərt/",
        "meaning": "buổi hòa nhạc",
        "example_en": "There is a rock concert in the park tomorrow.",
        "example_vi": "Có một buổi hòa nhạc rock trong công viên vào ngày mai."
      },
      {
        "word": "cycle (v)",
        "ipa": "/ˈsaɪkəl/",
        "meaning": "xe đạp",
        "example_en": "I usually cycle to work to save money.",
        "example_vi": "Tôi thường đạp xe đi làm để tiết kiệm tiền."
      },
      {
        "word": "dance (n & v)",
        "ipa": "/dæns/",
        "meaning": "nhảy",
        "example_en": "Do you want to dance with me?",
        "example_vi": "Bạn có muốn nhảy cùng tôi không?"
      },
      {
        "word": "exercise (n & v)",
        "ipa": "/ˈɛksərˌsaɪz/",
        "meaning": "bài tập",
        "example_en": "You need to exercise every day to stay healthy.",
        "example_vi": "Bạn cần tập thể dục mỗi ngày để giữ sức khỏe."
      },
      {
        "word": "fan (n)",
        "ipa": "/fæn/",
        "meaning": "cái quạt",
        "example_en": "It is hot, so please turn on the fan.",
        "example_vi": "Trời đang nóng, vì vậy hãy bật cái quạt lên."
      },
      {
        "word": "film (n & v)",
        "ipa": "/fɪlm/",
        "meaning": "phim ảnh",
        "example_en": "That film is very funny and interesting.",
        "example_vi": "Bộ phim đó rất hài hước và thú vị."
      },
      {
        "word": "football (n)",
        "ipa": "/ˈfʊtˌbɔl/",
        "meaning": "bóng đá",
        "example_en": "Football is the most popular sport in the world.",
        "example_vi": "Bóng đá là môn thể thao phổ biến nhất trên thế giới."
      },
      {
        "word": "footballer (n)",
        "ipa": "/ˈfʊt.bɔː.lər/",
        "meaning": "cầu thủ bóng đá",
        "example_en": "He is a famous footballer in my country.",
        "example_vi": "Anh ấy là một cầu thủ bóng đá nổi tiếng ở nước tôi."
      },
      {
        "word": "game (n)",
        "ipa": "/geɪm/",
        "meaning": "trò chơi",
        "example_en": "We played a fun board game last night.",
        "example_vi": "Chúng tôi đã chơi một trò chơi cờ bàn rất vui vào tối qua."
      },
      {
        "word": "go (v)",
        "ipa": "/goʊ/",
        "meaning": "đi",
        "example_en": "I have to go to the supermarket now.",
        "example_vi": "Tôi phải đi siêu thị ngay bây giờ."
      },
      {
        "word": "golf (n)",
        "ipa": "/gɔlf/",
        "meaning": "golf",
        "example_en": "My dad usually plays golf on weekends.",
        "example_vi": "Bố tôi thường chơi golf vào cuối tuần."
      },
      {
        "word": "go out (phr v)",
        "ipa": "/goʊ aʊt/",
        "meaning": "đi ra ngoài",
        "example_en": "They often go out for dinner on Fridays.",
        "example_vi": "Họ thường đi ra ngoài ăn tối vào thứ Sáu."
      },
      {
        "word": "guitar (n)",
        "ipa": "/gɪˈtɑr/",
        "meaning": "đàn ghi-ta",
        "example_en": "She plays the guitar very well.",
        "example_vi": "Cô ấy chơi đàn ghi-ta rất giỏi."
      },
      {
        "word": "hit (v)",
        "ipa": "/hɪt/",
        "meaning": "đánh",
        "example_en": "He can hit the ball very hard.",
        "example_vi": "Anh ấy có thể đánh quả bóng rất mạnh."
      },
      {
        "word": "hobby (n)",
        "ipa": "/ˈhɑbi/",
        "meaning": "sở thích",
        "example_en": "My favorite hobby is reading books.",
        "example_vi": "Sở thích yêu thích của tôi là đọc sách."
      },
      {
        "word": "holiday (n)",
        "ipa": "/ˈhɑlɪˌdeɪ/",
        "meaning": "ngày lễ",
        "example_en": "Where did you go on your last holiday?",
        "example_vi": "Bạn đã đi đâu vào ngày lễ vừa qua?"
      },
      {
        "word": "horse (n)",
        "ipa": "/hɔrs/",
        "meaning": "ngựa",
        "example_en": "She loves riding a horse on the farm.",
        "example_vi": "Cô ấy thích cưỡi ngựa trên trang trại."
      },
      {
        "word": "join (v)",
        "ipa": "/ʤɔɪn/",
        "meaning": "tham gia",
        "example_en": "Would you like to join our sports team?",
        "example_vi": "Bạn có muốn tham gia đội thể thao của chúng tôi không?"
      },
      {
        "word": "jump (v)",
        "ipa": "/ʤəmp/",
        "meaning": "nhảy",
        "example_en": "The cat can jump very high.",
        "example_vi": "Con mèo có thể nhảy rất cao."
      },
      {
        "word": "kick (n & v)",
        "ipa": "/kɪk/",
        "meaning": "đá",
        "example_en": "You have to kick the ball into the net.",
        "example_vi": "Bạn phải đá quả bóng vào lưới."
      },
      {
        "word": "match (n)",
        "ipa": "/mæʧ/",
        "meaning": "cuộc thi đấu / que diêm; hoặc động từ: phù hợp",
        "example_en": "We watched a great football match on TV.",
        "example_vi": "Chúng tôi đã xem một cuộc thi đấu bóng đá tuyệt hay trên TV."
      },
      {
        "word": "movie (n) (Am Eng) (Br Eng: film)",
        "ipa": "/ˈmuvi/",
        "meaning": "bộ phim",
        "example_en": "I want to watch a scary movie tonight.",
        "example_vi": "Tôi muốn xem một bộ phim đáng sợ vào tối nay."
      },
      {
        "word": "movie star (n) (Am Eng) (Br Eng: film star)",
        "ipa": "/ˈmuvi stɑr/",
        "meaning": "ngôi sao điện ảnh",
        "example_en": "She dreams of becoming a famous movie star.",
        "example_vi": "Cô ấy mơ ước trở thành một ngôi sao điện ảnh nổi tiếng."
      },
      {
        "word": "movie theater (n) (Am Eng) (Br Eng: cinema)",
        "ipa": "/ˈmuvi ˈθieɪtər/",
        "meaning": "rạp chiếu phim",
        "example_en": "We are waiting outside the movie theater.",
        "example_vi": "Chúng tôi đang đợi bên ngoài rạp chiếu phim."
      },
      {
        "word": "MP3 player (n)",
        "ipa": "/ˌem.piːˈθriː ˈpleɪ.ər/",
        "meaning": "máy nghe nhạc MP3",
        "example_en": "I listen to music on my MP3 player when I run.",
        "example_vi": "Tôi nghe nhạc bằng máy nghe nhạc MP3 khi chạy bộ."
      },
      {
        "word": "museum (n)",
        "ipa": "/mˈjuziəm/",
        "meaning": "bảo tàng",
        "example_en": "The history museum is open every day.",
        "example_vi": "Bảo tàng lịch sử mở cửa mỗi ngày."
      },
      {
        "word": "music (n)",
        "ipa": "/mˈjuzɪk/",
        "meaning": "âm nhạc",
        "example_en": "I like listening to pop music.",
        "example_vi": "Tôi thích nghe âm nhạc pop."
      },
      {
        "word": "paint (v & n)",
        "ipa": "/peɪnt/",
        "meaning": "sơn",
        "example_en": "We need to paint the walls in our new house.",
        "example_vi": "Chúng tôi cần sơn những bức tường trong ngôi nhà mới."
      },
      {
        "word": "park (n & v)",
        "ipa": "/pɑrk/",
        "meaning": "công viên",
        "example_en": "Children are playing in the park.",
        "example_vi": "Những đứa trẻ đang chơi trong công viên."
      },
      {
        "word": "party (n)",
        "ipa": "/ˈpɑrti/",
        "meaning": "buổi tiệc",
        "example_en": "Are you going to Mary's birthday party?",
        "example_vi": "Bạn có đi dự buổi tiệc sinh nhật của Mary không?"
      },
      {
        "word": "photography (n)",
        "ipa": "/fəˈtɑgrəfi/",
        "meaning": "nhiếp ảnh",
        "example_en": "He is taking a class to learn about photography.",
        "example_vi": "Anh ấy đang tham gia một lớp học để tìm hiểu về nhiếp ảnh."
      },
      {
        "word": "piano (n)",
        "ipa": "/piˈænə/",
        "meaning": "đàn piano",
        "example_en": "My sister is learning how to play the piano.",
        "example_vi": "Chị gái tôi đang học cách chơi đàn piano."
      },
      {
        "word": "picnic (n)",
        "ipa": "/ˈpɪkˌnɪk/",
        "meaning": "đi chơi picnic",
        "example_en": "We are having a picnic near the lake.",
        "example_vi": "Chúng tôi đang đi chơi picnic gần hồ."
      },
      {
        "word": "play (v & n)",
        "ipa": "/pleɪ/",
        "meaning": "chơi / vở kịch",
        "example_en": "Let's play tennis this afternoon.",
        "example_vi": "Hãy chơi quần vợt vào chiều nay."
      },
      {
        "word": "player (n)",
        "ipa": "/pleɪər/",
        "meaning": "người chơi",
        "example_en": "He is the best player on the team.",
        "example_vi": "Anh ấy là người chơi giỏi nhất trong đội."
      },
      {
        "word": "pool (n)",
        "ipa": "/pul/",
        "meaning": "hồ bơi",
        "example_en": "The hotel has a large outdoor pool.",
        "example_vi": "Khách sạn có một hồ bơi ngoài trời rộng lớn."
      },
      {
        "word": "prize (n)",
        "ipa": "/praɪz/",
        "meaning": "phần thưởng",
        "example_en": "She won the first prize in the singing contest.",
        "example_vi": "Cô ấy đã giành phần thưởng cao nhất trong cuộc thi hát."
      },
      {
        "word": "race (n & v)",
        "ipa": "/reɪs/",
        "meaning": "loài",
        "example_en": "He ran very fast and won the race.",
        "example_vi": "Anh ấy chạy rất nhanh và đã chiến thắng cuộc đua."
      },
      {
        "word": "shop (n & v)",
        "ipa": "/ʃɑp/",
        "meaning": "cửa hàng",
        "example_en": "I need to buy some milk at the shop.",
        "example_vi": "Tôi cần mua một ít sữa ở cửa hàng."
      },
      {
        "word": "sing (v)",
        "ipa": "/sɪŋ/",
        "meaning": "hát",
        "example_en": "Can you sing a song for us?",
        "example_vi": "Bạn có thể hát một bài hát cho chúng tôi không?"
      },
      {
        "word": "skate (v)",
        "ipa": "/skeɪt/",
        "meaning": "trượt ván",
        "example_en": "He likes to skate in the park after school.",
        "example_vi": "Anh ấy thích trượt ván trong công viên sau giờ học."
      },
      {
        "word": "ski (v)",
        "ipa": "/skiː/",
        "meaning": "trượt tuyết",
        "example_en": "They usually go to the mountains to ski in winter.",
        "example_vi": "Họ thường đến vùng núi để trượt tuyết vào mùa đông."
      },
      {
        "word": "snowboard (n)",
        "ipa": "/sˈnoʊˌbɔrd/",
        "meaning": "ván trượt tuyết",
        "example_en": "I got a new snowboard for my birthday.",
        "example_vi": "Tôi được tặng một chiếc ván trượt tuyết mới vào sinh nhật."
      },
      {
        "word": "snowboarding (n)",
        "ipa": "/ˈsnəʊ.bɔː.dɪŋ/",
        "meaning": "trượt tuyết",
        "example_en": "Snowboarding is a fun winter sport.",
        "example_vi": "Trượt tuyết bằng ván là môn thể thao mùa đông thú vị."
      },
      {
        "word": "song (n)",
        "ipa": "/sɔŋ/",
        "meaning": "bài hát",
        "example_en": "This is my favorite song on the radio.",
        "example_vi": "Đây là bài hát yêu thích của tôi trên đài."
      },
      {
        "word": "sport (n)",
        "ipa": "/spɔrt/",
        "meaning": "thể thao",
        "example_en": "Football is a popular sport in my country.",
        "example_vi": "Bóng đá là môn thể thao phổ biến ở nước tôi."
      },
      {
        "word": "stadium (n)",
        "ipa": "/ˈsteɪdiəm/",
        "meaning": "sân vận động",
        "example_en": "Thousands of people came to the stadium to watch the game.",
        "example_vi": "Hàng nghìn người đã đến sân vận động để xem trận đấu."
      },
      {
        "word": "swim (v & n)",
        "ipa": "/swɪm/",
        "meaning": "bơi",
        "example_en": "I usually swim in the sea during summer.",
        "example_vi": "Tôi thường bơi ở biển trong suốt mùa hè."
      },
      {
        "word": "swimming (n)",
        "ipa": "/sˈwɪmɪŋ/",
        "meaning": "bơi lội",
        "example_en": "Swimming is very good for your health.",
        "example_vi": "Bơi lội rất tốt cho sức khỏe của bạn."
      },
      {
        "word": "swimming costume (n) (Br Eng) (Am Eng: bathing suit)",
        "ipa": "/sˈwɪmɪŋ ˈkɑstum/",
        "meaning": "trang phục bơi lội",
        "example_en": "She bought a new swimming costume for her holiday.",
        "example_vi": "Cô ấy đã mua một trang phục bơi lội mới cho kỳ nghỉ của mình."
      },
      {
        "word": "swimming pool (n)",
        "ipa": "/sˈwɪmɪŋ pul/",
        "meaning": "bể bơi",
        "example_en": "We spend all day at the swimming pool.",
        "example_vi": "Chúng tôi dành cả ngày tại bể bơi."
      },
      {
        "word": "table tennis (n)",
        "ipa": "/ˈteɪbəl ˈtɛnɪs/",
        "meaning": "bóng bàn",
        "example_en": "We often play table tennis during the break.",
        "example_vi": "Chúng tôi thường chơi bóng bàn trong giờ giải lao."
      },
      {
        "word": "team (n)",
        "ipa": "/tim/",
        "meaning": "đội",
        "example_en": "Our school basketball team won the game.",
        "example_vi": "Đội bóng rổ của trường chúng ta đã thắng trận đấu."
      },
      {
        "word": "tennis (n)",
        "ipa": "/ˈtɛnɪs/",
        "meaning": "quần vợt",
        "example_en": "He plays tennis with his brother every Saturday.",
        "example_vi": "Anh ấy chơi quần vợt với em trai vào mỗi thứ Bảy."
      },
      {
        "word": "tent (n)",
        "ipa": "/tɛnt/",
        "meaning": "lều",
        "example_en": "It takes ten minutes to put up the tent.",
        "example_vi": "Mất mười phút để dựng xong lều."
      },
      {
        "word": "throw (v)",
        "ipa": "/θroʊ/",
        "meaning": "ném",
        "example_en": "Don't throw the ball inside the house.",
        "example_vi": "Đừng ném quả bóng ở trong nhà."
      },
      {
        "word": "video (n)",
        "ipa": "/ˈvɪdioʊ/",
        "meaning": "băng hình",
        "example_en": "He is watching a funny video on his phone.",
        "example_vi": "Anh ấy đang xem một đoạn băng hình hài hước trên điện thoại."
      },
      {
        "word": "video game (n)",
        "ipa": "/ˈvɪdioʊ geɪm/",
        "meaning": "trò chơi điện tử",
        "example_en": "My son likes playing this video game very much.",
        "example_vi": "Con trai tôi rất thích chơi trò chơi điện tử này."
      },
      {
        "word": "visit (v)",
        "ipa": "/ˈvɪzɪt/",
        "meaning": "thăm nom",
        "example_en": "I will visit my grandparents next week.",
        "example_vi": "Tôi sẽ đi thăm nom ông bà vào tuần tới."
      },
      {
        "word": "volleyball (n)",
        "ipa": "/ˈvɑliˌbɔl/",
        "meaning": "bóng chuyền",
        "example_en": "We play volleyball on the beach.",
        "example_vi": "Chúng tôi chơi bóng chuyền trên bãi biển."
      },
      {
        "word": "walk (v & n)",
        "ipa": "/wɔk/",
        "meaning": "đi bộ",
        "example_en": "I walk to school every morning.",
        "example_vi": "Tôi đi bộ đến trường mỗi sáng."
      },
      {
        "word": "win (v)",
        "ipa": "/wɪn/",
        "meaning": "thắng",
        "example_en": "I hope our team will win the match today.",
        "example_vi": "Tôi hy vọng đội của chúng ta sẽ thắng trận đấu hôm nay."
      },
      {
        "word": "windsurfing (n)",
        "ipa": "/ˈwɪndˌsɜː.fɪŋ/",
        "meaning": "lướt ván buồm",
        "example_en": "Windsurfing is an exciting water sport.",
        "example_vi": "Lướt ván buồm là một môn thể thao dưới nước thú vị."
      }
    ]
  },
  {
    "topic": "THỜI GIAN",
    "words": [
      {
        "word": "afternoon (n)",
        "ipa": "/ˌæftərˈnun/",
        "meaning": "buổi chiều",
        "example_en": "We have English classes in the afternoon.",
        "example_vi": "Chúng tôi có các lớp học tiếng Anh vào buổi chiều."
      },
      {
        "word": "age (n)",
        "ipa": "/eɪʤ/",
        "meaning": "tuổi",
        "example_en": "What is the age of your younger brother?",
        "example_vi": "Em trai của bạn bao nhiêu tuổi?"
      },
      {
        "word": "ago (adv)",
        "ipa": "/əˈgoʊ/",
        "meaning": "trước kia",
        "example_en": "I moved to this city three years ago.",
        "example_vi": "Tôi đã chuyển đến thành phố này ba năm trước kia."
      },
      {
        "word": "all the time (det)",
        "ipa": "/ɔl ðə taɪm/",
        "meaning": "mọi lúc",
        "example_en": "It rains all the time in the winter.",
        "example_vi": "Trời mưa mọi lúc vào mùa đông."
      },
      {
        "word": "already (adv)",
        "ipa": "/ɔˈrɛdi/",
        "meaning": "đã",
        "example_en": "I have already finished my homework.",
        "example_vi": "Tôi đã làm xong bài tập về nhà."
      },
      {
        "word": "always (adv)",
        "ipa": "/ˈɔlˌweɪz/",
        "meaning": "luôn luôn",
        "example_en": "She always wakes up early in the morning.",
        "example_vi": "Cô ấy luôn luôn thức dậy sớm vào buổi sáng."
      },
      {
        "word": "a.m. (adv)",
        "ipa": "/ˌeɪˈem/",
        "meaning": "buổi sáng (trước 12h trưa)",
        "example_en": "The meeting starts at 9 a.m.",
        "example_vi": "Cuộc họp bắt đầu lúc 9 giờ buổi sáng."
      },
      {
        "word": "appointment (n)",
        "ipa": "/əˈpɔɪntmənt/",
        "meaning": "cuộc hẹn",
        "example_en": "I have a doctor's appointment tomorrow.",
        "example_vi": "Tôi có một cuộc hẹn với bác sĩ vào ngày mai."
      },
      {
        "word": "birthday (n)",
        "ipa": "/ˈbərθˌdeɪ/",
        "meaning": "sinh nhật",
        "example_en": "My birthday is in November.",
        "example_vi": "Sinh nhật của tôi là vào tháng Mười Một."
      },
      {
        "word": "century (n)",
        "ipa": "/ˈsɛnʧəri/",
        "meaning": "thế kỷ",
        "example_en": "We are living in the 21st century.",
        "example_vi": "Chúng ta đang sống trong thế kỷ 21."
      },
      {
        "word": "daily (adj & adv)",
        "ipa": "/ˈdeɪli/",
        "meaning": "hằng ngày",
        "example_en": "I read the daily newspaper every morning.",
        "example_vi": "Tôi đọc tờ báo hằng ngày vào mỗi sáng."
      },
      {
        "word": "date (n)",
        "ipa": "/deɪt/",
        "meaning": "ngày",
        "example_en": "What is the date today?",
        "example_vi": "Hôm nay là ngày bao nhiêu?"
      },
      {
        "word": "day (n)",
        "ipa": "/deɪ/",
        "meaning": "ngày",
        "example_en": "It is a beautiful sunny day.",
        "example_vi": "Đó là một ngày nắng đẹp."
      },
      {
        "word": "diary (n)",
        "ipa": "/ˈdaɪəri/",
        "meaning": "nhật ký",
        "example_en": "She writes in her diary before going to bed.",
        "example_vi": "Cô ấy viết vào nhật ký trước khi đi ngủ."
      },
      {
        "word": "during (prep)",
        "ipa": "/ˈdʊrɪŋ/",
        "meaning": "trong lúc",
        "example_en": "Please do not use your phone during the movie.",
        "example_vi": "Vui lòng không sử dụng điện thoại trong lúc xem phim."
      },
      {
        "word": "early (adj & adv)",
        "ipa": "/ˈərli/",
        "meaning": "sớm",
        "example_en": "He got up very early today.",
        "example_vi": "Hôm nay anh ấy đã thức dậy rất sớm."
      },
      {
        "word": "evening (n)",
        "ipa": "/ˈivnɪŋ/",
        "meaning": "buổi tối",
        "example_en": "I usually watch TV in the evening.",
        "example_vi": "Tôi thường xem TV vào buổi tối."
      },
      {
        "word": "every (det)",
        "ipa": "/ˈɛvəri/",
        "meaning": "mọi",
        "example_en": "Every child needs love and care.",
        "example_vi": "Mọi đứa trẻ đều cần tình yêu và sự chăm sóc."
      },
      {
        "word": "finally (adv)",
        "ipa": "/ˈfaɪnəli/",
        "meaning": "Cuối cùng",
        "example_en": "Finally, the train arrived at the station.",
        "example_vi": "Cuối cùng, đoàn tàu đã đến nhà ga."
      },
      {
        "word": "future (n)",
        "ipa": "/fˈjuʧər/",
        "meaning": "tương lai",
        "example_en": "I want to be a doctor in the future.",
        "example_vi": "Tôi muốn trở thành một bác sĩ trong tương lai."
      },
      {
        "word": "good afternoon (exclam)",
        "ipa": "/gʊd ˌæftərˈnun/",
        "meaning": "Chào buổi chiều",
        "example_en": "Good afternoon, how can I help you?",
        "example_vi": "Chào buổi chiều, tôi có thể giúp gì cho bạn?"
      },
      {
        "word": "good evening (exclam)",
        "ipa": "/gʊd ˈivnɪŋ/",
        "meaning": "Chào buổi tối",
        "example_en": "Good evening, welcome to our restaurant.",
        "example_vi": "Chào buổi tối, chào mừng đến với nhà hàng của chúng tôi."
      },
      {
        "word": "good morning (exclam)",
        "ipa": "/gʊd ˈmɔrnɪŋ/",
        "meaning": "Chào buổi sáng",
        "example_en": "Good morning, everyone!",
        "example_vi": "Chào buổi sáng, mọi người!"
      },
      {
        "word": "good night (exclam)",
        "ipa": "/gʊd naɪt/",
        "meaning": "Chúc ngủ ngon",
        "example_en": "Good night, see you tomorrow.",
        "example_vi": "Chúc ngủ ngon, hẹn gặp lại vào ngày mai."
      },
      {
        "word": "half (det, n & pron)",
        "ipa": "/hæf/",
        "meaning": "một nửa",
        "example_en": "I ate half of the pizza.",
        "example_vi": "Tôi đã ăn một nửa chiếc bánh pizza."
      },
      {
        "word": "hour (n)",
        "ipa": "/aʊər/",
        "meaning": "giờ",
        "example_en": "The movie is an hour long.",
        "example_vi": "Bộ phim dài một giờ."
      },
      {
        "word": "late (adv & adj)",
        "ipa": "/leɪt/",
        "meaning": "muộn",
        "example_en": "I was late for school today.",
        "example_vi": "Hôm nay tôi đã đến trường muộn."
      },
      {
        "word": "later (adv)",
        "ipa": "/ˈleɪtər/",
        "meaning": "sau đó",
        "example_en": "I will call you later.",
        "example_vi": "Tôi sẽ gọi cho bạn sau."
      },
      {
        "word": "midday (n)",
        "ipa": "/ˈmɪdˌdeɪ/",
        "meaning": "giữa trưa",
        "example_en": "The sun is very hot at midday.",
        "example_vi": "Mặt trời rất nóng vào giữa trưa."
      },
      {
        "word": "midnight (n)",
        "ipa": "/ˈmɪdˌnaɪt/",
        "meaning": "nửa đêm",
        "example_en": "He went to sleep at midnight.",
        "example_vi": "Anh ấy đã đi ngủ vào nửa đêm."
      },
      {
        "word": "minute (n)",
        "ipa": "/ˈmɪnət/",
        "meaning": "phút",
        "example_en": "Give me a minute, please.",
        "example_vi": "Làm ơn cho tôi một phút."
      },
      {
        "word": "moment (n)",
        "ipa": "/ˈmoʊmənt/",
        "meaning": "chốc lát",
        "example_en": "Wait a moment, I am coming.",
        "example_vi": "Đợi một chốc lát, tôi đang tới."
      },
      {
        "word": "month (n)",
        "ipa": "/mənθ/",
        "meaning": "tháng",
        "example_en": "We will go on holiday next month.",
        "example_vi": "Chúng tôi sẽ đi nghỉ vào tháng tới."
      },
      {
        "word": "morning (n)",
        "ipa": "/ˈmɔrnɪŋ/",
        "meaning": "buổi sáng",
        "example_en": "I drink coffee every morning.",
        "example_vi": "Tôi uống cà phê mỗi buổi sáng."
      },
      {
        "word": "never (adv)",
        "ipa": "/ˈnɛvər/",
        "meaning": "không bao giờ",
        "example_en": "I never eat meat.",
        "example_vi": "Tôi không bao giờ ăn thịt."
      },
      {
        "word": "next (adj & adv)",
        "ipa": "/nɛkst/",
        "meaning": "Kế tiếp",
        "example_en": "Who is next in line?",
        "example_vi": "Ai là người kế tiếp trong hàng?"
      },
      {
        "word": "next to (prep)",
        "ipa": "/nɛkst tɪ/",
        "meaning": "ở cạnh",
        "example_en": "My house is next to a park.",
        "example_vi": "Nhà tôi ở cạnh một công viên."
      },
      {
        "word": "night (n)",
        "ipa": "/naɪt/",
        "meaning": "đêm",
        "example_en": "It is very dark at night.",
        "example_vi": "Trời rất tối vào ban đêm."
      },
      {
        "word": "noon (n)",
        "ipa": "/nun/",
        "meaning": "buổi trưa",
        "example_en": "We have lunch at noon.",
        "example_vi": "Chúng tôi ăn trưa vào buổi trưa."
      },
      {
        "word": "now (adv)",
        "ipa": "/naʊ/",
        "meaning": "Hiện nay",
        "example_en": "I am reading a book now.",
        "example_vi": "Hiện nay tôi đang đọc một cuốn sách."
      },
      {
        "word": "o'clock (adv)",
        "ipa": "/əˈklɑk/",
        "meaning": "giờ",
        "example_en": "The meeting starts at nine o'clock.",
        "example_vi": "Cuộc họp bắt đầu lúc chín giờ."
      },
      {
        "word": "often (adv)",
        "ipa": "/ˈɔfən/",
        "meaning": "thường",
        "example_en": "I often play tennis on Sundays.",
        "example_vi": "Tôi thường chơi quần vợt vào Chủ nhật."
      },
      {
        "word": "past (prep & n)",
        "ipa": "/pæst/",
        "meaning": "quá khứ",
        "example_en": "In the past, people traveled by horse.",
        "example_vi": "Trong quá khứ, mọi người đi lại bằng ngựa."
      },
      {
        "word": "p.m. (adv)",
        "ipa": "/ˌpiˈem/",
        "meaning": "chiều",
        "example_en": "The shop closes at 6 p.m.",
        "example_vi": "Cửa hàng đóng cửa lúc 6 giờ chiều."
      },
      {
        "word": "present (n)",
        "ipa": "/ˈprɛzənt/",
        "meaning": "hiện tại",
        "example_en": "At present, I am very busy.",
        "example_vi": "Hiện tại, tôi đang rất bận."
      },
      {
        "word": "quarter (n)",
        "ipa": "/kˈwɔrtər/",
        "meaning": "một phần tư",
        "example_en": "Cut the apple into quarters.",
        "example_vi": "Cắt quả táo thành một phần tư."
      },
      {
        "word": "second (adj, det & n)",
        "ipa": "/ˈsɛkənd/",
        "meaning": "thứ hai",
        "example_en": "This is my second time in London.",
        "example_vi": "Đây là lần thứ hai của tôi ở Luân Đôn."
      },
      {
        "word": "sometimes (adv)",
        "ipa": "/ˈsəmˌtaɪmz/",
        "meaning": "Thỉnh thoảng",
        "example_en": "Sometimes I walk to work.",
        "example_vi": "Thỉnh thoảng tôi đi bộ đi làm."
      },
      {
        "word": "soon (adv)",
        "ipa": "/sun/",
        "meaning": "sớm",
        "example_en": "I hope to see you soon.",
        "example_vi": "Tôi hy vọng sẽ sớm gặp lại bạn."
      },
      {
        "word": "still (adv)",
        "ipa": "/stɪl/",
        "meaning": "vẫn",
        "example_en": "It is still raining outside.",
        "example_vi": "Bên ngoài trời vẫn đang mưa."
      },
      {
        "word": "then (adv)",
        "ipa": "/ðɛn/",
        "meaning": "sau đó",
        "example_en": "We had dinner, and then we watched TV.",
        "example_vi": "Chúng tôi đã ăn tối, và sau đó chúng tôi xem TV."
      },
      {
        "word": "time (n)",
        "ipa": "/taɪm/",
        "meaning": "thời gian",
        "example_en": "I don't have much time.",
        "example_vi": "Tôi không có nhiều thời gian."
      },
      {
        "word": "today (n & adv)",
        "ipa": "/təˈdeɪ/",
        "meaning": "Hôm nay",
        "example_en": "What day is it today?",
        "example_vi": "Hôm nay là ngày thứ mấy?"
      },
      {
        "word": "tomorrow (n & adv)",
        "ipa": "/təˈmɑˌroʊ/",
        "meaning": "Ngày mai",
        "example_en": "I will see you tomorrow.",
        "example_vi": "Tôi sẽ gặp bạn vào ngày mai."
      },
      {
        "word": "tonight (n & adv)",
        "ipa": "/təˈnaɪt/",
        "meaning": "tối nay",
        "example_en": "We are going to the cinema tonight.",
        "example_vi": "Chúng tôi sẽ đi xem phim vào tối nay."
      },
      {
        "word": "until (prep)",
        "ipa": "/ənˈtɪl/",
        "meaning": "cho đến khi",
        "example_en": "I will wait until you come back.",
        "example_vi": "Tôi sẽ đợi cho đến khi bạn quay lại."
      },
      {
        "word": "usually (adv)",
        "ipa": "/ˈjuʒəwəli/",
        "meaning": "thường xuyên",
        "example_en": "I usually get up at 7 a.m.",
        "example_vi": "Tôi thường xuyên thức dậy lúc 7 giờ sáng."
      },
      {
        "word": "week (n)",
        "ipa": "/wik/",
        "meaning": "tuần",
        "example_en": "There are seven days in a week.",
        "example_vi": "Có bảy ngày trong một tuần."
      },
      {
        "word": "weekday (n)",
        "ipa": "/ˈwikˌdeɪ/",
        "meaning": "ngày trong tuần",
        "example_en": "I work every weekday.",
        "example_vi": "Tôi làm việc mỗi ngày trong tuần."
      },
      {
        "word": "weekend (n)",
        "ipa": "/ˈwiˌkɪnd/",
        "meaning": "ngày cuối tuần",
        "example_en": "What are you doing this weekend?",
        "example_vi": "Bạn sẽ làm gì vào ngày cuối tuần này?"
      },
      {
        "word": "weekly (adj & adv)",
        "ipa": "/ˈwikli/",
        "meaning": "hàng tuần",
        "example_en": "We have a weekly meeting on Mondays.",
        "example_vi": "Chúng tôi có một cuộc họp hàng tuần vào các ngày thứ Hai."
      },
      {
        "word": "year (n)",
        "ipa": "/jɪr/",
        "meaning": "năm",
        "example_en": "Happy New Year!",
        "example_vi": "Chúc mừng năm mới!"
      },
      {
        "word": "yesterday (adv)",
        "ipa": "/ˈjɛstərˌdeɪ/",
        "meaning": "Hôm qua",
        "example_en": "It rained a lot yesterday.",
        "example_vi": "Hôm qua trời đã mưa rất nhiều."
      },
      {
        "word": "yet (adv)",
        "ipa": "/jɛt/",
        "meaning": "chưa",
        "example_en": "Have you finished your homework yet?",
        "example_vi": "Bạn đã làm xong bài tập về nhà chưa?"
      }
    ]
  },
  {
    "topic": "TỪ VỰNG CHUNG",
    "words": [
      {
        "word": "a/an (det)",
        "ipa": "/ə/",
        "meaning": "Một",
        "example_en": "I have an apple and a banana.",
        "example_vi": "Tôi có một quả táo và một quả chuối."
      },
      {
        "word": "a few (det, adj & pron)",
        "ipa": "/ə fju/",
        "meaning": "một vài",
        "example_en": "I have a few friends in this city.",
        "example_vi": "Tôi có một vài người bạn ở thành phố này."
      },
      {
        "word": "able (adj)",
        "ipa": "/ˈeɪbəl/",
        "meaning": "có thể",
        "example_en": "I am able to swim very fast.",
        "example_vi": "Tôi có thể bơi rất nhanh."
      },
      {
        "word": "about (adv & prep)",
        "ipa": "/əˈbaʊt/",
        "meaning": "Về",
        "example_en": "Tell me about your holiday.",
        "example_vi": "Hãy kể cho tôi nghe về kỳ nghỉ của bạn."
      },
      {
        "word": "above (adv & prep)",
        "ipa": "/əˈbəv/",
        "meaning": "bên trên",
        "example_en": "The picture is above the sofa.",
        "example_vi": "Bức tranh ở bên trên ghế sofa."
      },
      {
        "word": "accident (n)",
        "ipa": "/ˈæksədənt/",
        "meaning": "tai nạn",
        "example_en": "He had a car accident yesterday.",
        "example_vi": "Anh ấy đã gặp tai nạn ô tô ngày hôm qua."
      },
      {
        "word": "across (adv & prep)",
        "ipa": "/əˈkrɔs/",
        "meaning": "sang",
        "example_en": "The bank is across the street.",
        "example_vi": "Ngân hàng ở sang bên kia đường."
      },
      {
        "word": "act (n & v)",
        "ipa": "/ækt/",
        "meaning": "hành động",
        "example_en": "He acted very strangely.",
        "example_vi": "Anh ấy đã hành động rất kỳ lạ."
      },
      {
        "word": "action (n)",
        "ipa": "/ˈækʃən/",
        "meaning": "hành động",
        "example_en": "We need to take action now.",
        "example_vi": "Chúng ta cần hành động ngay bây giờ."
      },
      {
        "word": "activity (n)",
        "ipa": "/ækˈtɪvɪti/",
        "meaning": "hoạt động",
        "example_en": "Swimming is a fun activity.",
        "example_vi": "Bơi lội là một hoạt động thú vị."
      },
      {
        "word": "actually (adv)",
        "ipa": "/ˈæˌkʧuəli/",
        "meaning": "Thực ra",
        "example_en": "Actually, I don't like pizza.",
        "example_vi": "Thực ra, tôi không thích bánh pizza."
      },
      {
        "word": "ad (n)",
        "ipa": "/æd/",
        "meaning": "quảng cáo",
        "example_en": "I saw an ad for a new phone.",
        "example_vi": "Tôi đã thấy một quảng cáo cho một chiếc điện thoại mới."
      },
      {
        "word": "add (v)",
        "ipa": "/æd/",
        "meaning": "thêm vào",
        "example_en": "Please add some milk to my coffee.",
        "example_vi": "Làm ơn thêm chút sữa vào cà phê của tôi."
      },
      {
        "word": "adult (adj & n)",
        "ipa": "/ˈædəlt/",
        "meaning": "người lớn",
        "example_en": "This movie is only for adults.",
        "example_vi": "Bộ phim này chỉ dành cho người lớn."
      },
      {
        "word": "advanced (adj)",
        "ipa": "/ədˈvænst/",
        "meaning": "trình độ cao",
        "example_en": "He is taking an advanced English class.",
        "example_vi": "Anh ấy đang học một lớp tiếng Anh trình độ cao."
      },
      {
        "word": "adventure (n)",
        "ipa": "/ədˈvɛnʧər/",
        "meaning": "cuộc phiêu lưu",
        "example_en": "They went on an adventure in the jungle.",
        "example_vi": "Họ đã tham gia một cuộc phiêu lưu trong rừng."
      },
      {
        "word": "advert (n)",
        "ipa": "/ˈæd.vɜːt/",
        "meaning": "quảng cáo",
        "example_en": "Did you see the advert on TV?",
        "example_vi": "Bạn có xem quảng cáo trên tivi không?"
      },
      {
        "word": "advertisement (n)",
        "ipa": "/ˌædvərˈtaɪzmənt/",
        "meaning": "quảng cáo",
        "example_en": "She put an advertisement in the newspaper.",
        "example_vi": "Cô ấy đã đặt một quảng cáo trên tờ báo."
      },
      {
        "word": "advice (n)",
        "ipa": "/ədˈvaɪs/",
        "meaning": "lời khuyên",
        "example_en": "Can you give me some advice?",
        "example_vi": "Bạn có thể cho tôi một vài lời khuyên không?"
      },
      {
        "word": "after (adv & prep)",
        "ipa": "/ˈæftər/",
        "meaning": "sau đó",
        "example_en": "I will call you after dinner.",
        "example_vi": "Tôi sẽ gọi cho bạn sau bữa tối."
      },
      {
        "word": "afterwards (adv)",
        "ipa": "/ˈæftərwərdz/",
        "meaning": "sau đó",
        "example_en": "We had dinner and went for a walk afterwards.",
        "example_vi": "Chúng tôi đã ăn tối và đi dạo sau đó."
      },
      {
        "word": "again (adv)",
        "ipa": "/əˈgɛn/",
        "meaning": "lại",
        "example_en": "Please say that again.",
        "example_vi": "Làm ơn nói lại điều đó."
      },
      {
        "word": "against (prep)",
        "ipa": "/əˈgɛnst/",
        "meaning": "chống lại",
        "example_en": "They played a game against the other team.",
        "example_vi": "Họ đã chơi một trận đấu chống lại đội kia."
      },
      {
        "word": "aged (adj)",
        "ipa": "/ˈeɪʤɪd/",
        "meaning": "già",
        "example_en": "We have a son aged ten.",
        "example_vi": "Chúng tôi có một cậu con trai ở độ tuổi lên mười."
      },
      {
        "word": "agree (v)",
        "ipa": "/əˈgri/",
        "meaning": "đồng ý",
        "example_en": "I agree with you completely.",
        "example_vi": "Tôi hoàn toàn đồng ý với bạn."
      },
      {
        "word": "album (n)",
        "ipa": "/ˈælbəm/",
        "meaning": "album",
        "example_en": "I love this new music album.",
        "example_vi": "Tôi yêu thích album nhạc mới này."
      },
      {
        "word": "all (adv, det & pron)",
        "ipa": "/ɔl/",
        "meaning": "tất cả",
        "example_en": "All the students are here.",
        "example_vi": "Tất cả học sinh đều ở đây."
      },
      {
        "word": "all kinds of (det & pron)",
        "ipa": "/ɔl kaɪnz əv/",
        "meaning": "tất cả các loại",
        "example_en": "He likes all kinds of music.",
        "example_vi": "Anh ấy thích tất cả các loại nhạc."
      },
      {
        "word": "allow (v)",
        "ipa": "/əˈlaʊ/",
        "meaning": "cho phép",
        "example_en": "My parents do not allow me to stay out late.",
        "example_vi": "Bố mẹ tôi không cho phép tôi đi chơi về muộn."
      },
      {
        "word": "all right/alright (adj, adv & exclam)",
        "ipa": "/ɔl raɪt/",
        "meaning": "được rồi",
        "example_en": "Is everything all right?",
        "example_vi": "Mọi thứ có ổn không?"
      },
      {
        "word": "all sorts of (det & pron)",
        "ipa": "/ɔl sɔrts əv/",
        "meaning": "đủ loại",
        "example_en": "We sell all sorts of shoes.",
        "example_vi": "Chúng tôi bán đủ loại giày."
      },
      {
        "word": "almost (adv)",
        "ipa": "/ˈɔlˌmoʊst/",
        "meaning": "hầu hết",
        "example_en": "Dinner is almost ready.",
        "example_vi": "Bữa tối gần như đã sẵn sàng."
      },
      {
        "word": "alone (adj & adv)",
        "ipa": "/əˈloʊn/",
        "meaning": "một mình",
        "example_en": "Do you live alone?",
        "example_vi": "Bạn có sống một mình không?"
      },
      {
        "word": "along (prep)",
        "ipa": "/əˈlɔŋ/",
        "meaning": "dọc theo",
        "example_en": "We walked along the beach.",
        "example_vi": "Chúng tôi đã đi bộ dọc theo bãi biển."
      },
      {
        "word": "alright (adj, adv & exclam)",
        "ipa": "/ˌɔˈlraɪt/",
        "meaning": "được rồi",
        "example_en": "It is alright if you are late.",
        "example_vi": "Sẽ không sao nếu bạn đến muộn."
      },
      {
        "word": "also (adv)",
        "ipa": "/ˈɔlsoʊ/",
        "meaning": "Mà còn",
        "example_en": "I like apples, and I also like bananas.",
        "example_vi": "Tôi thích táo, và tôi cũng thích chuối."
      },
      {
        "word": "amazed (adj)",
        "ipa": "/əˈmeɪzd/",
        "meaning": "ngạc nhiên",
        "example_en": "I was amazed by the beautiful view.",
        "example_vi": "Tôi đã ngạc nhiên trước khung cảnh tuyệt đẹp."
      },
      {
        "word": "amazing (adj)",
        "ipa": "/əˈmeɪzɪŋ/",
        "meaning": "tuyệt vời",
        "example_en": "The food at this restaurant is amazing.",
        "example_vi": "Thức ăn ở nhà hàng này thật tuyệt vời."
      },
      {
        "word": "among (prep)",
        "ipa": "/əˈməŋ/",
        "meaning": "giữa",
        "example_en": "The house is hidden among the trees.",
        "example_vi": "Ngôi nhà được giấu giữa những cái cây."
      },
      {
        "word": "an (det)",
        "ipa": "/ən/",
        "meaning": "MỘT",
        "example_en": "I eat an apple every day.",
        "example_vi": "Tôi ăn một quả táo mỗi ngày."
      },
      {
        "word": "and (conj)",
        "ipa": "/ənd/",
        "meaning": "Và",
        "example_en": "My brother and I are tall.",
        "example_vi": "Anh trai tôi và tôi đều cao."
      },
      {
        "word": "another (det & pron)",
        "ipa": "/əˈnəðər/",
        "meaning": "khác",
        "example_en": "Would you like another cup of tea?",
        "example_vi": "Bạn có muốn một tách trà khác không?"
      },
      {
        "word": "answer (n & v)",
        "ipa": "/ˈænsər/",
        "meaning": "trả lời",
        "example_en": "I don't know the answer to this question.",
        "example_vi": "Tôi không biết câu trả lời cho câu hỏi này."
      },
      {
        "word": "any (det & pron)",
        "ipa": "/ˈɛni/",
        "meaning": "bất kì",
        "example_en": "Do you have any brothers or sisters?",
        "example_vi": "Bạn có bất kỳ anh chị em nào không?"
      },
      {
        "word": "anybody (pron)",
        "ipa": "/ˈɛnibədi/",
        "meaning": "bất cứ ai",
        "example_en": "Is anybody home?",
        "example_vi": "Có ai ở nhà không?"
      },
      {
        "word": "anymore (adv)",
        "ipa": "/ˌɛniˈmɔr/",
        "meaning": "nữa",
        "example_en": "I don't live there anymore.",
        "example_vi": "Tôi không sống ở đó nữa."
      },
      {
        "word": "anyone (pron)",
        "ipa": "/ˈɛniˌwən/",
        "meaning": "bất cứ ai",
        "example_en": "Does anyone know the time?",
        "example_vi": "Có ai biết mấy giờ rồi không?"
      },
      {
        "word": "anything (pron)",
        "ipa": "/ˈɛniˌθɪŋ/",
        "meaning": "bất cứ điều gì",
        "example_en": "I didn't buy anything at the shop.",
        "example_vi": "Tôi đã không mua bất cứ điều gì ở cửa hàng."
      },
      {
        "word": "anyway (adv)",
        "ipa": "/ˈɛniˌweɪ/",
        "meaning": "Dẫu sao thì",
        "example_en": "It is raining, but we will go anyway.",
        "example_vi": "Trời đang mưa, nhưng dẫu sao thì chúng tôi vẫn sẽ đi."
      },
      {
        "word": "anywhere (adv)",
        "ipa": "/ˈɛniˌwɛr/",
        "meaning": "bất cứ nơi nào",
        "example_en": "I can't find my keys anywhere.",
        "example_vi": "Tôi không thể tìm thấy chìa khóa của mình ở bất cứ nơi nào."
      },
      {
        "word": "area (n)",
        "ipa": "/ˈɛriə/",
        "meaning": "khu vực",
        "example_en": "This is a very quiet area.",
        "example_vi": "Đây là một khu vực rất yên tĩnh."
      },
      {
        "word": "around (adv & prep)",
        "ipa": "/əraʊnd/",
        "meaning": "xung quanh",
        "example_en": "We walked around the park.",
        "example_vi": "Chúng tôi đã đi dạo xung quanh công viên."
      },
      {
        "word": "arrive (v)",
        "ipa": "/əraɪv/",
        "meaning": "đến",
        "example_en": "What time does the train arrive?",
        "example_vi": "Mấy giờ thì tàu đến?"
      },
      {
        "word": "art (n)",
        "ipa": "/ɑrt/",
        "meaning": "nghệ thuật",
        "example_en": "She is very good at art.",
        "example_vi": "Cô ấy rất giỏi về nghệ thuật."
      },
      {
        "word": "article (n)",
        "ipa": "/ˈɑrtɪkəl/",
        "meaning": "bài báo",
        "example_en": "I read an interesting article today.",
        "example_vi": "Tôi đã đọc một bài báo thú vị ngày hôm nay."
      },
      {
        "word": "as (conj & adv & prep)",
        "ipa": "/ɛz/",
        "meaning": "BẰNG",
        "example_en": "She works as a teacher.",
        "example_vi": "Cô ấy làm việc như một giáo viên."
      },
      {
        "word": "ask (v)",
        "ipa": "/æsk/",
        "meaning": "hỏi",
        "example_en": "Can I ask you a question?",
        "example_vi": "Tôi có thể hỏi bạn một câu hỏi không?"
      },
      {
        "word": "at (prep)",
        "ipa": "/æt/",
        "meaning": "Tại",
        "example_en": "I am at work right now.",
        "example_vi": "Tôi đang ở chỗ làm ngay lúc này."
      },
      {
        "word": "at (prep)",
        "ipa": "/æt/",
        "meaning": "Tại",
        "example_en": "The meeting is at three o'clock.",
        "example_vi": "Cuộc họp diễn ra lúc ba giờ."
      },
      {
        "word": "at all (prep phr)",
        "ipa": "/æt ɔl/",
        "meaning": "chút nào (dùng trong câu phủ định)",
        "example_en": "I don't like this movie at all.",
        "example_vi": "Tôi không thích bộ phim này chút nào."
      },
      {
        "word": "attractive (adj)",
        "ipa": "/əˈtræktɪv/",
        "meaning": "hấp dẫn",
        "example_en": "That is a very attractive building.",
        "example_vi": "Đó là một tòa nhà rất hấp dẫn."
      },
      {
        "word": "aunt (n)",
        "ipa": "/ɔnt/",
        "meaning": "dì",
        "example_en": "My aunt lives in London.",
        "example_vi": "Dì của tôi sống ở London."
      },
      {
        "word": "available (adj)",
        "ipa": "/əˈveɪləbəl/",
        "meaning": "có sẵn",
        "example_en": "This shirt is available in blue.",
        "example_vi": "Chiếc áo này có sẵn màu xanh."
      },
      {
        "word": "away (adv)",
        "ipa": "/əˈweɪ/",
        "meaning": "xa",
        "example_en": "The beach is two miles away.",
        "example_vi": "Bãi biển cách đây hai dặm."
      },
      {
        "word": "awesome (adj)",
        "ipa": "/ˈɔsəm/",
        "meaning": "tuyệt vời",
        "example_en": "The movie was awesome!",
        "example_vi": "Bộ phim thật tuyệt vời!"
      },
      {
        "word": "awful (adj)",
        "ipa": "/ˈɔfəl/",
        "meaning": "tồi tệ",
        "example_en": "The weather is awful today.",
        "example_vi": "Thời tiết hôm nay thật tồi tệ."
      },
      {
        "word": "baby (n)",
        "ipa": "/ˈbeɪbi/",
        "meaning": "Đứa bé",
        "example_en": "The baby is sleeping now.",
        "example_vi": "Đứa bé đang ngủ."
      },
      {
        "word": "bad (adj)",
        "ipa": "/bæd/",
        "meaning": "xấu",
        "example_en": "Eating too much sugar is bad for you.",
        "example_vi": "Ăn quá nhiều đường thì xấu cho bạn."
      },
      {
        "word": "badly (adv)",
        "ipa": "/ˈbædli/",
        "meaning": "tệ quá",
        "example_en": "He played badly in the game.",
        "example_vi": "Anh ấy đã chơi quá tệ trong trận đấu."
      },
      {
        "word": "badminton (n)",
        "ipa": "/ˈbædˌmɪntən/",
        "meaning": "cầu lông",
        "example_en": "We play badminton every weekend.",
        "example_vi": "Chúng tôi chơi cầu lông mỗi cuối tuần."
      },
      {
        "word": "balloon (n)",
        "ipa": "/bəˈlun/",
        "meaning": "bóng bay",
        "example_en": "The child has a red balloon.",
        "example_vi": "Đứa trẻ có một quả bóng bay màu đỏ."
      },
      {
        "word": "band (n)",
        "ipa": "/bænd/",
        "meaning": "ban nhạc",
        "example_en": "I like listening to this rock band.",
        "example_vi": "Tôi thích nghe ban nhạc rock này."
      },
      {
        "word": "bank (n)",
        "ipa": "/bæŋk/",
        "meaning": "ngân hàng",
        "example_en": "I need to go to the bank to get some money.",
        "example_vi": "Tôi cần đến ngân hàng để rút một ít tiền."
      },
      {
        "word": "barbecue/ barbeque (n)",
        "ipa": "/ˈbɑrbɪˌkju/",
        "meaning": "thịt nướng",
        "example_en": "We are having a barbecue on Sunday.",
        "example_vi": "Chúng tôi sẽ ăn thịt nướng vào Chủ nhật."
      },
      {
        "word": "bathtub (n)",
        "ipa": "/ˈbæθtəb/",
        "meaning": "bồn tắm",
        "example_en": "I like to relax in the bathtub.",
        "example_vi": "Tôi thích thư giãn trong bồn tắm."
      },
      {
        "word": "battery (n)",
        "ipa": "/ˈbætəri/",
        "meaning": "ắc quy",
        "example_en": "My phone needs a new battery.",
        "example_vi": "Điện thoại của tôi cần một cục ắc quy mới."
      },
      {
        "word": "be (av & v)",
        "ipa": "/bi/",
        "meaning": "là",
        "example_en": "I want to be a doctor.",
        "example_vi": "Tôi muốn trở thành một bác sĩ."
      },
      {
        "word": "beard (n)",
        "ipa": "/bɪrd/",
        "meaning": "râu",
        "example_en": "My grandfather has a long white beard.",
        "example_vi": "Ông nội tôi có một bộ râu trắng dài."
      },
      {
        "word": "beautiful (adj)",
        "ipa": "/ˈbjutəfəl/",
        "meaning": "xinh đẹp",
        "example_en": "She is a very beautiful girl.",
        "example_vi": "Cô ấy là một cô gái rất xinh đẹp."
      },
      {
        "word": "because (conj)",
        "ipa": "/bɪˈkəz/",
        "meaning": "bởi vì",
        "example_en": "I stay at home because it is raining.",
        "example_vi": "Tôi ở nhà bởi vì trời đang mưa."
      },
      {
        "word": "because of (prep phr)",
        "ipa": "/bɪˈkəz əv/",
        "meaning": "bởi vì",
        "example_en": "We were late because of the traffic.",
        "example_vi": "Chúng tôi đến muộn bởi vì giao thông."
      },
      {
        "word": "become (v)",
        "ipa": "/bɪˈkəm/",
        "meaning": "trở nên",
        "example_en": "He wants to become a teacher.",
        "example_vi": "Anh ấy muốn trở nên một giáo viên."
      },
      {
        "word": "bee (n)",
        "ipa": "/bi/",
        "meaning": "con ong",
        "example_en": "A bee is sitting on the flower.",
        "example_vi": "Một con ong đang đậu trên bông hoa."
      },
      {
        "word": "before (adv, conj & prep)",
        "ipa": "/ˌbiˈfɔr/",
        "meaning": "trước",
        "example_en": "Please wash your hands before dinner.",
        "example_vi": "Vui lòng rửa tay trước bữa tối."
      },
      {
        "word": "begin (v)",
        "ipa": "/bɪˈgɪn/",
        "meaning": "bắt đầu",
        "example_en": "The class will begin at 8 a.m.",
        "example_vi": "Lớp học sẽ bắt đầu lúc 8 giờ sáng."
      },
      {
        "word": "beginner (n)",
        "ipa": "/bɪˈgɪnər/",
        "meaning": "người mới bắt đầu",
        "example_en": "This book is for beginners.",
        "example_vi": "Cuốn sách này dành cho người mới bắt đầu."
      },
      {
        "word": "beginning (n)",
        "ipa": "/bɪˈgɪnɪŋ/",
        "meaning": "sự khởi đầu",
        "example_en": "The beginning of the movie was very good.",
        "example_vi": "Sự khởi đầu của bộ phim rất hay."
      },
      {
        "word": "behind (adv & prep)",
        "ipa": "/bɪˈhaɪnd/",
        "meaning": "phía sau",
        "example_en": "The cat is hiding behind the sofa.",
        "example_vi": "Con mèo đang trốn phía sau ghế sofa."
      },
      {
        "word": "believe (v)",
        "ipa": "/bɪˈliv/",
        "meaning": "tin tưởng",
        "example_en": "I believe you can do it.",
        "example_vi": "Tôi tin tưởng bạn có thể làm được."
      },
      {
        "word": "belong (v)",
        "ipa": "/bɪˈlɔŋ/",
        "meaning": "thuộc về",
        "example_en": "This book belongs to me.",
        "example_vi": "Cuốn sách này thuộc về tôi."
      },
      {
        "word": "below (adv & prep)",
        "ipa": "/bɪˈloʊ/",
        "meaning": "dưới",
        "example_en": "Please read the text below.",
        "example_vi": "Vui lòng đọc đoạn văn bên dưới."
      },
      {
        "word": "beside (prep)",
        "ipa": "/ˌbiˈsaɪd/",
        "meaning": "bên cạnh",
        "example_en": "Come and sit beside me.",
        "example_vi": "Hãy đến và ngồi bên cạnh tôi."
      },
      {
        "word": "best (adj & adv)",
        "ipa": "/bɛst/",
        "meaning": "tốt nhất",
        "example_en": "He is my best friend.",
        "example_vi": "Anh ấy là người bạn tốt nhất của tôi."
      },
      {
        "word": "better (adj & adv)",
        "ipa": "/ˈbɛtər/",
        "meaning": "tốt hơn",
        "example_en": "I feel better today.",
        "example_vi": "Hôm nay tôi cảm thấy tốt hơn."
      },
      {
        "word": "between (prep)",
        "ipa": "/bɪtˈwin/",
        "meaning": "giữa",
        "example_en": "The shop is between the bank and the bakery.",
        "example_vi": "Cửa hàng nằm giữa ngân hàng và tiệm bánh."
      },
      {
        "word": "big (adj)",
        "ipa": "/bɪg/",
        "meaning": "to lớn",
        "example_en": "They live in a big house.",
        "example_vi": "Họ sống trong một ngôi nhà to lớn."
      },
      {
        "word": "bill (n)",
        "ipa": "/bɪl/",
        "meaning": "hóa đơn",
        "example_en": "Can I have the bill, please?",
        "example_vi": "Làm ơn cho tôi xin hóa đơn được không?"
      },
      {
        "word": "bin (n)",
        "ipa": "/bɪn/",
        "meaning": "cái thùng",
        "example_en": "Throw the trash in the bin.",
        "example_vi": "Hãy vứt rác vào cái thùng."
      },
      {
        "word": "biology (n)",
        "ipa": "/baɪˈɑləʤi/",
        "meaning": "sinh vật học",
        "example_en": "We learn about animals in biology class.",
        "example_vi": "Chúng tôi học về động vật trong lớp sinh vật học."
      },
      {
        "word": "birth (n)",
        "ipa": "/bərθ/",
        "meaning": "sinh",
        "example_en": "The date of my birth is May 5th.",
        "example_vi": "Ngày sinh của tôi là mùng 5 tháng 5."
      },
      {
        "word": "bit (n & adv)",
        "ipa": "/bɪt/",
        "meaning": "chút",
        "example_en": "I am a little bit tired.",
        "example_vi": "Tôi hơi mệt một chút."
      },
      {
        "word": "black (adj & n)",
        "ipa": "/blæk/",
        "meaning": "đen",
        "example_en": "I have a black cat.",
        "example_vi": "Tôi có một con mèo đen."
      },
      {
        "word": "blackboard (n)",
        "ipa": "/ˈblækˌbɔrd/",
        "meaning": "bảng đen",
        "example_en": "The teacher writes on the blackboard.",
        "example_vi": "Giáo viên viết lên bảng đen."
      },
      {
        "word": "block (n)",
        "ipa": "/blɑk/",
        "meaning": "khối",
        "example_en": "Walk one block and turn left.",
        "example_vi": "Đi bộ một khối và rẽ trái."
      },
      {
        "word": "blond(e) (adj)",
        "ipa": "/blɑnd/",
        "meaning": "tóc vàng",
        "example_en": "She has long blond hair.",
        "example_vi": "Cô ấy có mái tóc vàng dài."
      },
      {
        "word": "blouse (n)",
        "ipa": "/blaʊs/",
        "meaning": "áo cánh",
        "example_en": "She is wearing a white blouse.",
        "example_vi": "Cô ấy đang mặc một chiếc áo cánh màu trắng."
      },
      {
        "word": "blue (adj & n)",
        "ipa": "/blu/",
        "meaning": "màu xanh da trời",
        "example_en": "The sky is blue today.",
        "example_vi": "Bầu trời hôm nay có màu xanh da trời."
      },
      {
        "word": "boiled (adj)",
        "ipa": "/bɔɪld/",
        "meaning": "luộc",
        "example_en": "I like to eat boiled eggs for breakfast.",
        "example_vi": "Tôi thích ăn trứng luộc cho bữa sáng."
      },
      {
        "word": "bookshelf (n)",
        "ipa": "/ˈbʊkˌʃɛlf/",
        "meaning": "giá sách",
        "example_en": "There are many books on the bookshelf.",
        "example_vi": "Có rất nhiều sách trên giá sách."
      },
      {
        "word": "bookshop (n) (Br Eng) (Am Eng: bookstore)",
        "ipa": "/ˈbʊkˌʃɑp/",
        "meaning": "hiệu sách",
        "example_en": "I bought this book at the bookshop.",
        "example_vi": "Tôi đã mua cuốn sách này ở hiệu sách."
      },
      {
        "word": "bookstore (n) (Am Eng) (Br Eng: bookshop)",
        "ipa": "/ˈbʊkˌstɔr/",
        "meaning": "hiệu sách",
        "example_en": "The new bookstore has many interesting books.",
        "example_vi": "Hiệu sách mới có rất nhiều sách thú vị."
      },
      {
        "word": "born (v)",
        "ipa": "/bɔrn/",
        "meaning": "sinh",
        "example_en": "I was born in 1995.",
        "example_vi": "Tôi được sinh ra vào năm 1995."
      },
      {
        "word": "borrow (v)",
        "ipa": "/ˈbɑˌroʊ/",
        "meaning": "vay mượn",
        "example_en": "Can I borrow your pen?",
        "example_vi": "Tôi có thể vay mượn bút của bạn không?"
      },
      {
        "word": "both (pron & det)",
        "ipa": "/boʊθ/",
        "meaning": "cả hai",
        "example_en": "Both of my parents are teachers.",
        "example_vi": "Cả hai bố mẹ tôi đều là giáo viên."
      },
      {
        "word": "bother (v)",
        "ipa": "/ˈbɑðər/",
        "meaning": "làm phiền",
        "example_en": "Sorry to bother you, but I need help.",
        "example_vi": "Xin lỗi vì đã làm phiền bạn, nhưng tôi cần giúp đỡ."
      },
      {
        "word": "bottom (n)",
        "ipa": "/ˈbɑtəm/",
        "meaning": "đáy",
        "example_en": "Write your name at the bottom of the page.",
        "example_vi": "Hãy viết tên của bạn ở dưới đáy trang."
      },
      {
        "word": "box (n)",
        "ipa": "/bɑks/",
        "meaning": "hộp",
        "example_en": "What is in that big box?",
        "example_vi": "Có gì trong cái hộp lớn đó?"
      },
      {
        "word": "boy (n)",
        "ipa": "/bɔɪ/",
        "meaning": "con trai",
        "example_en": "The boy is playing with a ball.",
        "example_vi": "Cậu con trai đang chơi với một quả bóng."
      },
      {
        "word": "boyfriend (n)",
        "ipa": "/ˈbɔɪˌfrɛnd/",
        "meaning": "bạn trai",
        "example_en": "She went to the cinema with her boyfriend.",
        "example_vi": "Cô ấy đã đi xem phim với bạn trai của mình."
      },
      {
        "word": "bracelet (n)",
        "ipa": "/ˈbreɪslət/",
        "meaning": "vòng đeo tay",
        "example_en": "My mother gave me a beautiful bracelet.",
        "example_vi": "Mẹ tôi đã tặng tôi một chiếc vòng đeo tay đẹp."
      },
      {
        "word": "bright (adj – for colours)",
        "ipa": "/braɪt/",
        "meaning": "sáng",
        "example_en": "She wears a bright pink dress.",
        "example_vi": "Cô ấy mặc một chiếc váy màu hồng sáng."
      },
      {
        "word": "bring (v)",
        "ipa": "/brɪŋ/",
        "meaning": "mang đến",
        "example_en": "Please bring me a glass of water.",
        "example_vi": "Vui lòng mang đến cho tôi một cốc nước."
      },
      {
        "word": "broken (adj)",
        "ipa": "/ˈbroʊkən/",
        "meaning": "vỡ",
        "example_en": "My phone screen is broken.",
        "example_vi": "Màn hình điện thoại của tôi bị vỡ."
      },
      {
        "word": "brother (n)",
        "ipa": "/ˈbrəðər/",
        "meaning": "anh trai",
        "example_en": "My brother is taller than me.",
        "example_vi": "Anh trai tôi cao hơn tôi."
      },
      {
        "word": "brown (adj & n)",
        "ipa": "/braʊn/",
        "meaning": "màu nâu",
        "example_en": "He has dark brown eyes.",
        "example_vi": "Anh ấy có đôi mắt màu nâu sẫm."
      },
      {
        "word": "brush (n & v)",
        "ipa": "/brəʃ/",
        "meaning": "chải",
        "example_en": "You should brush your teeth every morning.",
        "example_vi": "Bạn nên chải răng mỗi buổi sáng."
      },
      {
        "word": "build (v)",
        "ipa": "/bɪld/",
        "meaning": "xây dựng",
        "example_en": "They want to build a new hospital here.",
        "example_vi": "Họ muốn xây dựng một bệnh viện mới ở đây."
      },
      {
        "word": "burger (n)",
        "ipa": "/ˈbərgər/",
        "meaning": "bánh mì kẹp thịt",
        "example_en": "I ordered a burger and fries.",
        "example_vi": "Tôi đã gọi một cái bánh mì kẹp thịt và khoai tây chiên."
      },
      {
        "word": "businessman (n)",
        "ipa": "/ˈbɪznɪsˌmæn/",
        "meaning": "doanh nhân",
        "example_en": "Her father is a successful businessman.",
        "example_vi": "Bố của cô ấy là một doanh nhân thành đạt."
      },
      {
        "word": "businesswoman (n)",
        "ipa": "/ˈbɪznɪsˌwʊmən/",
        "meaning": "nữ doanh nhân",
        "example_en": "She is a busy businesswoman.",
        "example_vi": "Cô ấy là một nữ doanh nhân bận rộn."
      },
      {
        "word": "but (conj)",
        "ipa": "/bət/",
        "meaning": "Nhưng",
        "example_en": "I like apples, but I don't like bananas.",
        "example_vi": "Tôi thích táo, nhưng tôi không thích chuối."
      },
      {
        "word": "butterfly (n)",
        "ipa": "/ˈbətərˌflaɪ/",
        "meaning": "bươm bướm",
        "example_en": "Look at that beautiful butterfly!",
        "example_vi": "Hãy nhìn con bươm bướm xinh đẹp kia!"
      },
      {
        "word": "buy (v)",
        "ipa": "/baɪ/",
        "meaning": "mua",
        "example_en": "I need to buy some milk.",
        "example_vi": "Tôi cần mua một ít sữa."
      },
      {
        "word": "by (prep)",
        "ipa": "/baɪ/",
        "meaning": "qua",
        "example_en": "We travel to work by bus.",
        "example_vi": "Chúng tôi đi làm qua xe buýt."
      },
      {
        "word": "by accident (prep phr)",
        "ipa": "/baɪ ˈæksədənt/",
        "meaning": "tình cờ",
        "example_en": "I dropped the glass by accident.",
        "example_vi": "Tôi đã làm rơi cái ly một cách tình cờ."
      },
      {
        "word": "by the way (prep phr)",
        "ipa": "/baɪ ðə weɪ/",
        "meaning": "Nhân tiện",
        "example_en": "By the way, what time is the meeting?",
        "example_vi": "Nhân tiện, cuộc họp lúc mấy giờ?"
      },
      {
        "word": "bye (exclam)",
        "ipa": "/baɪ/",
        "meaning": "tạm biệt",
        "example_en": "Bye, see you tomorrow!",
        "example_vi": "Tạm biệt, hẹn gặp lại bạn ngày mai!"
      },
      {
        "word": "cabinet (n)",
        "ipa": "/ˈkæbənət/",
        "meaning": "tủ",
        "example_en": "The plates are in the kitchen cabinet.",
        "example_vi": "Những cái đĩa ở trong tủ bếp."
      },
      {
        "word": "cafeteria (n)",
        "ipa": "/ˌkæfəˈtɪriə/",
        "meaning": "quán ăn tự phục vụ",
        "example_en": "We eat lunch in the school cafeteria.",
        "example_vi": "Chúng tôi ăn trưa ở quán ăn tự phục vụ của trường."
      },
      {
        "word": "camping (n)",
        "ipa": "/ˈkæmpɪŋ/",
        "meaning": "cắm trại",
        "example_en": "We are going camping next weekend.",
        "example_vi": "Chúng tôi sẽ đi cắm trại vào cuối tuần tới."
      },
      {
        "word": "campsite (n)",
        "ipa": "/ˈkæmpˌsaɪt/",
        "meaning": "khu cắm trại",
        "example_en": "We pitched our tent at the campsite.",
        "example_vi": "Chúng tôi đã dựng lều ở khu cắm trại."
      },
      {
        "word": "capital (n)",
        "ipa": "/ˈkæpɪtəl/",
        "meaning": "thủ đô",
        "example_en": "Hanoi is the capital of Vietnam.",
        "example_vi": "Hà Nội là thủ đô của Việt Nam."
      },
      {
        "word": "can (n & mv)",
        "ipa": "/kən/",
        "meaning": "Có thể",
        "example_en": "I can swim very fast.",
        "example_vi": "Tôi có thể bơi rất nhanh."
      },
      {
        "word": "cannot (mv)",
        "ipa": "/ˈkænɑt/",
        "meaning": "không thể",
        "example_en": "I cannot find my keys.",
        "example_vi": "Tôi không thể tìm thấy chìa khóa của mình."
      },
      {
        "word": "card (n)",
        "ipa": "/kɑrd/",
        "meaning": "thẻ",
        "example_en": "Can I pay by credit card?",
        "example_vi": "Tôi có thể trả bằng thẻ tín dụng không?"
      },
      {
        "word": "carefully (adv)",
        "ipa": "/ˈkɛrfəli/",
        "meaning": "cẩn thận",
        "example_en": "Please drive carefully.",
        "example_vi": "Vui lòng lái xe cẩn thận."
      },
      {
        "word": "carry (v)",
        "ipa": "/ˈkɛri/",
        "meaning": "mang",
        "example_en": "Let me carry this heavy bag for you.",
        "example_vi": "Để tôi mang chiếc túi nặng này cho bạn."
      },
      {
        "word": "cartoon (n)",
        "ipa": "/kɑrˈtun/",
        "meaning": "hoạt hình",
        "example_en": "My little brother loves watching cartoons.",
        "example_vi": "Em trai tôi rất thích xem phim hoạt hình."
      },
      {
        "word": "case (n)",
        "ipa": "/keɪs/",
        "meaning": "trường hợp",
        "example_en": "In this case, we should wait.",
        "example_vi": "Trong trường hợp này, chúng ta nên đợi."
      },
      {
        "word": "cash (n & v)",
        "ipa": "/kæʃ/",
        "meaning": "tiền mặt",
        "example_en": "Do you have any cash with you?",
        "example_vi": "Bạn có mang theo tiền mặt không?"
      },
      {
        "word": "castle (n)",
        "ipa": "/ˈkæsəl/",
        "meaning": "lâu đài",
        "example_en": "We visited an old castle on our holiday.",
        "example_vi": "Chúng tôi đã đến thăm một lâu đài cổ trong kỳ nghỉ của mình."
      },
      {
        "word": "celebrate (v)",
        "ipa": "/ˈsɛləˌbreɪt/",
        "meaning": "kỉ niệm",
        "example_en": "We will celebrate her birthday on Friday.",
        "example_vi": "Chúng tôi sẽ kỉ niệm sinh nhật của cô ấy vào thứ Sáu."
      },
      {
        "word": "celebrity (n)",
        "ipa": "/səˈlɛbrɪti/",
        "meaning": "người nổi tiếng",
        "example_en": "She wants to be a famous celebrity.",
        "example_vi": "Cô ấy muốn trở thành một người nổi tiếng."
      },
      {
        "word": "cent (n)",
        "ipa": "/sɛnt/",
        "meaning": "xu",
        "example_en": "This pen costs fifty cents.",
        "example_vi": "Chiếc bút này có giá năm mươi xu."
      },
      {
        "word": "centre/center (n)",
        "ipa": "/ˈsɛntər/",
        "meaning": "trung tâm",
        "example_en": "The shop is in the centre of the city.",
        "example_vi": "Cửa hàng nằm ở trung tâm thành phố."
      },
      {
        "word": "centimetre/centimeter (cm) (n)",
        "ipa": "/ˈsɛntəˌmitər/",
        "meaning": "centimét",
        "example_en": "The insect is one centimetre long.",
        "example_vi": "Con côn trùng dài một centimét."
      },
      {
        "word": "cereal (n)",
        "ipa": "/ˈsɪriəl/",
        "meaning": "ngũ cốc",
        "example_en": "I have a bowl of cereal for breakfast.",
        "example_vi": "Tôi ăn một bát ngũ cốc cho bữa sáng."
      },
      {
        "word": "certainly (adv)",
        "ipa": "/ˈsərtənli/",
        "meaning": "chắc chắn",
        "example_en": "I will certainly help you with your homework.",
        "example_vi": "Tôi chắc chắn sẽ giúp bạn làm bài tập về nhà."
      },
      {
        "word": "channel (n)",
        "ipa": "/ˈʧænəl/",
        "meaning": "kênh",
        "example_en": "What is your favorite TV channel?",
        "example_vi": "Kênh truyền hình yêu thích của bạn là gì?"
      },
      {
        "word": "character (n)",
        "ipa": "/ˈkɛrɪktər/",
        "meaning": "tính cách",
        "example_en": "She has a very kind character.",
        "example_vi": "Cô ấy có một tính cách rất tốt bụng."
      },
      {
        "word": "cheap (adj)",
        "ipa": "/ʧip/",
        "meaning": "rẻ",
        "example_en": "This phone is very cheap.",
        "example_vi": "Chiếc điện thoại này rất rẻ."
      },
      {
        "word": "check (v)",
        "ipa": "/ʧɛk/",
        "meaning": "kiểm tra",
        "example_en": "Please check your answers before you finish.",
        "example_vi": "Vui lòng kiểm tra câu trả lời của bạn trước khi kết thúc."
      },
      {
        "word": "chef (n)",
        "ipa": "/ʃɛf/",
        "meaning": "đầu bếp",
        "example_en": "My uncle is a chef in a big restaurant.",
        "example_vi": "Chú tôi là đầu bếp trong một nhà hàng lớn."
      },
      {
        "word": "cheque (n)",
        "ipa": "/ʧɛk/",
        "meaning": "tấm séc (ngân hàng)",
        "example_en": "Can I pay by cheque?",
        "example_vi": "Tôi có thể trả bằng séc không?"
      },
      {
        "word": "child (n)",
        "ipa": "/ʧaɪld/",
        "meaning": "đứa trẻ",
        "example_en": "The child is playing in the garden.",
        "example_vi": "Đứa trẻ đang chơi trong vườn."
      },
      {
        "word": "choose (v)",
        "ipa": "/ʧuz/",
        "meaning": "chọn",
        "example_en": "You can choose a book to read.",
        "example_vi": "Bạn có thể chọn một cuốn sách để đọc."
      },
      {
        "word": "circle (n)",
        "ipa": "/ˈsərkəl/",
        "meaning": "vòng tròn",
        "example_en": "Draw a circle on the paper.",
        "example_vi": "Vẽ một vòng tròn trên giấy."
      },
      {
        "word": "circus (n)",
        "ipa": "/ˈsərkəs/",
        "meaning": "rạp xiếc",
        "example_en": "We went to the circus last night.",
        "example_vi": "Chúng tôi đã đi xem rạp xiếc tối qua."
      },
      {
        "word": "city (n)",
        "ipa": "/ˈsɪti/",
        "meaning": "thành phố",
        "example_en": "New York is a very big city.",
        "example_vi": "New York là một thành phố rất lớn."
      },
      {
        "word": "classical (adj)",
        "ipa": "/ˈklæsɪkəl/",
        "meaning": "cổ điển",
        "example_en": "She likes listening to classical music.",
        "example_vi": "Cô ấy thích nghe nhạc cổ điển."
      },
      {
        "word": "cleaner (n)",
        "ipa": "/ˈklinər/",
        "meaning": "người dọn dẹp / chất tẩy rửa",
        "example_en": "The cleaner comes every morning to clean the office.",
        "example_vi": "Người dọn dẹp đến mỗi sáng để lau dọn văn phòng."
      },
      {
        "word": "clear (adj)",
        "ipa": "/klɪr/",
        "meaning": "thông thoáng",
        "example_en": "The sky is clear today.",
        "example_vi": "Bầu trời hôm nay rất trong xanh (thông thoáng)."
      },
      {
        "word": "clearly (adv)",
        "ipa": "/ˈklɪrli/",
        "meaning": "rõ ràng",
        "example_en": "He speaks English very clearly.",
        "example_vi": "Anh ấy nói tiếng Anh rất rõ ràng."
      },
      {
        "word": "climbing (n)",
        "ipa": "/ˈklaɪmɪŋ/",
        "meaning": "leo núi",
        "example_en": "They go climbing in the mountains every summer.",
        "example_vi": "Họ đi leo núi vào mỗi mùa hè."
      },
      {
        "word": "close (adj & v)",
        "ipa": "/kloʊz/",
        "meaning": "đóng",
        "example_en": "Please close the door when you leave.",
        "example_vi": "Vui lòng đóng cửa khi bạn rời đi."
      },
      {
        "word": "close to (prep phr)",
        "ipa": "/kloʊz tə/ hoặc /kloʊz tuː/",
        "meaning": "gần với",
        "example_en": "My house is close to the park.",
        "example_vi": "Nhà tôi ở gần với công viên."
      },
      {
        "word": "closed (adj)",
        "ipa": "/kloʊzd/",
        "meaning": "đóng cửa",
        "example_en": "The shop is closed on Sundays.",
        "example_vi": "Cửa hàng đóng cửa vào các ngày Chủ Nhật."
      },
      {
        "word": "closet (n)",
        "ipa": "/ˈklɑzət/",
        "meaning": "buồng nhỏ",
        "example_en": "Your coat is in the closet.",
        "example_vi": "Áo khoác của bạn ở trong tủ quần áo."
      },
      {
        "word": "cloudy (adj)",
        "ipa": "/ˈklaʊdi/",
        "meaning": "nhiều mây",
        "example_en": "It is a cloudy day today.",
        "example_vi": "Hôm nay là một ngày nhiều mây."
      },
      {
        "word": "clown (n)",
        "ipa": "/klaʊn/",
        "meaning": "chú hề",
        "example_en": "The clown at the party was very funny.",
        "example_vi": "Chú hề tại bữa tiệc rất hài hước."
      },
      {
        "word": "cola (n)",
        "ipa": "/ˈkoʊlə/",
        "meaning": "cola",
        "example_en": "I would like a glass of cola, please.",
        "example_vi": "Cho tôi một ly cola, làm ơn."
      },
      {
        "word": "colleague (n)",
        "ipa": "/ˈkɑlig/",
        "meaning": "đồng nghiệp",
        "example_en": "I am having lunch with a colleague.",
        "example_vi": "Tôi đang ăn trưa với một đồng nghiệp."
      },
      {
        "word": "colour (n & v)",
        "ipa": "/ˈkələr/",
        "meaning": "màu sắc",
        "example_en": "What is your favorite colour?",
        "example_vi": "Màu sắc yêu thích của bạn là gì?"
      },
      {
        "word": "come (v)",
        "ipa": "/kəm/",
        "meaning": "đến",
        "example_en": "Can you come to my house tomorrow?",
        "example_vi": "Bạn có thể đến nhà tôi vào ngày mai không?"
      },
      {
        "word": "comedy (n)",
        "ipa": "/ˈkɑmədi/",
        "meaning": "hài kịch",
        "example_en": "We watched a funny comedy on TV.",
        "example_vi": "Chúng tôi đã xem một vở hài kịch vui nhộn trên TV."
      },
      {
        "word": "comfortable (adj)",
        "ipa": "/ˈkəmfərtəbəl/",
        "meaning": "thoải mái",
        "example_en": "This chair is very comfortable.",
        "example_vi": "Chiếc ghế này rất thoải mái."
      },
      {
        "word": "comic (n)",
        "ipa": "/ˈkɑmɪk/",
        "meaning": "truyện tranh",
        "example_en": "My brother loves reading comic books.",
        "example_vi": "Em trai tôi rất thích đọc truyện tranh."
      },
      {
        "word": "competition (n)",
        "ipa": "/ˌkɑmpəˈtɪʃən/",
        "meaning": "cuộc thi",
        "example_en": "She won first prize in the singing competition.",
        "example_vi": "Cô ấy đã giành giải nhất trong cuộc thi hát."
      },
      {
        "word": "complete (v)",
        "ipa": "/kəmˈplit/",
        "meaning": "hoàn thành",
        "example_en": "You must complete your homework before dinner.",
        "example_vi": "Bạn phải hoàn thành bài tập về nhà trước bữa tối."
      },
      {
        "word": "congratulations! (exclam)",
        "ipa": "/kənˌgræʧəˈleɪʃənz!/",
        "meaning": "Chúc mừng!",
        "example_en": "Congratulations on passing your exam!",
        "example_vi": "Chúc mừng bạn đã vượt qua kỳ thi!"
      },
      {
        "word": "contact (n & v)",
        "ipa": "/ˈkɑnˌtækt/",
        "meaning": "liên hệ",
        "example_en": "Please contact me if you need help.",
        "example_vi": "Vui lòng liên hệ với tôi nếu bạn cần giúp đỡ."
      },
      {
        "word": "continue (v)",
        "ipa": "/kənˈtɪnju/",
        "meaning": "Tiếp tục",
        "example_en": "We will continue the lesson after the break.",
        "example_vi": "Chúng ta sẽ tiếp tục bài học sau giờ nghỉ."
      },
      {
        "word": "conversation (n)",
        "ipa": "/ˌkɑnvərˈseɪʃən/",
        "meaning": "cuộc hội thoại",
        "example_en": "I had a long conversation with my friend.",
        "example_vi": "Tôi đã có một cuộc hội thoại dài với bạn tôi."
      },
      {
        "word": "cookie (n) (Am Eng) (Br Eng: biscuit)",
        "ipa": "/ˈkʊki/",
        "meaning": "bánh quy",
        "example_en": "Would you like a chocolate cookie?",
        "example_vi": "Bạn có muốn một chiếc bánh quy sô-cô-la không?"
      },
      {
        "word": "cooking (n)",
        "ipa": "/ˈkʊkɪŋ/",
        "meaning": "nấu ăn",
        "example_en": "My mother is good at cooking.",
        "example_vi": "Mẹ tôi rất giỏi nấu ăn."
      },
      {
        "word": "cool (adj & exclam)",
        "ipa": "/kul/",
        "meaning": "mát mẻ",
        "example_en": "The weather is cool today.",
        "example_vi": "Thời tiết hôm nay mát mẻ."
      },
      {
        "word": "corner (n)",
        "ipa": "/ˈkɔrnər/",
        "meaning": "góc",
        "example_en": "The shop is on the corner of the street.",
        "example_vi": "Cửa hàng nằm ở góc phố."
      },
      {
        "word": "cost (n & v)",
        "ipa": "/kɔst/",
        "meaning": "trị giá",
        "example_en": "How much does this book cost?",
        "example_vi": "Cuốn sách này có giá bao nhiêu?"
      },
      {
        "word": "costume (n)",
        "ipa": "/ˈkɑstum/",
        "meaning": "trang phục",
        "example_en": "He wore a pirate costume to the party.",
        "example_vi": "Anh ấy mặc trang phục cướp biển đến bữa tiệc."
      },
      {
        "word": "could (mv)",
        "ipa": "/kʊd/",
        "meaning": "có thể",
        "example_en": "Could you help me with my bags?",
        "example_vi": "Bạn có thể giúp tôi xách túi được không?"
      },
      {
        "word": "country (n)",
        "ipa": "/ˈkəntri/",
        "meaning": "quốc gia",
        "example_en": "France is a beautiful country.",
        "example_vi": "Pháp là một quốc gia xinh đẹp."
      },
      {
        "word": "countryside (n)",
        "ipa": "/ˈkəntriˌsaɪd/",
        "meaning": "nông thôn",
        "example_en": "They live in a small village in the countryside.",
        "example_vi": "Họ sống trong một ngôi làng nhỏ ở nông thôn."
      },
      {
        "word": "cousin (n)",
        "ipa": "/ˈkəzən/",
        "meaning": "anh em họ",
        "example_en": "My cousin is coming to visit us today.",
        "example_vi": "Anh họ tôi sẽ đến thăm chúng tôi hôm nay."
      },
      {
        "word": "cover (v &n)",
        "ipa": "/ˈkəvər/",
        "meaning": "che phủ",
        "example_en": "Snow covered the ground this morning.",
        "example_vi": "Tuyết đã che phủ mặt đất sáng nay."
      },
      {
        "word": "credit card (n)",
        "ipa": "/ˈkrɛdɪt kɑrd/",
        "meaning": "thẻ tín dụng",
        "example_en": "I don't have cash, can I use a credit card?",
        "example_vi": "Tôi không có tiền mặt, tôi có thể dùng thẻ tín dụng không?"
      },
      {
        "word": "cricket (n)",
        "ipa": "/ˈkrɪkɪt/",
        "meaning": "dế",
        "example_en": "We can hear the cricket at night.",
        "example_vi": "Chúng ta có thể nghe tiếng dế vào ban đêm."
      },
      {
        "word": "crossing (n)",
        "ipa": "/ˈkrɔsɪŋ/",
        "meaning": "đi qua",
        "example_en": "Use the pedestrian crossing to go to the other side.",
        "example_vi": "Hãy sử dụng lối qua đường dành cho người đi bộ để đi sang bờ bên kia."
      },
      {
        "word": "crowd (n)",
        "ipa": "/kraʊd/",
        "meaning": "đám đông",
        "example_en": "There was a large crowd at the concert.",
        "example_vi": "Có một đám đông lớn tại buổi hòa nhạc."
      },
      {
        "word": "crowded (adj)",
        "ipa": "/ˈkraʊdɪd/",
        "meaning": "đông đúc",
        "example_en": "The train was very crowded this morning.",
        "example_vi": "Chuyến tàu rất đông đúc sáng nay."
      },
      {
        "word": "cry (v)",
        "ipa": "/kraɪ/",
        "meaning": "khóc",
        "example_en": "The baby started to cry.",
        "example_vi": "Em bé bắt đầu khóc."
      },
      {
        "word": "curry (n)",
        "ipa": "/ˈkəri/",
        "meaning": "cà ri",
        "example_en": "We had chicken curry for dinner.",
        "example_vi": "Chúng tôi đã ăn cà ri gà cho bữa tối."
      },
      {
        "word": "customer (n)",
        "ipa": "/ˈkəstəmər/",
        "meaning": "khách hàng",
        "example_en": "The shop assistant is helping a customer.",
        "example_vi": "Nhân viên bán hàng đang giúp một khách hàng."
      },
      {
        "word": "cycling (n)",
        "ipa": "/ˈsaɪkəlɪŋ/",
        "meaning": "đạp xe",
        "example_en": "Cycling is a good way to stay healthy.",
        "example_vi": "Đạp xe là một cách tốt để giữ sức khỏe."
      },
      {
        "word": "dad (n)",
        "ipa": "/dæd/",
        "meaning": "bố",
        "example_en": "My dad is washing his car.",
        "example_vi": "Bố tôi đang rửa xe của ông ấy."
      },
      {
        "word": "dancer (n)",
        "ipa": "/ˈdænsər/",
        "meaning": "vũ công",
        "example_en": "She is a beautiful dancer.",
        "example_vi": "Cô ấy là một vũ công múa đẹp."
      },
      {
        "word": "dancing (n)",
        "ipa": "/ˈdænsɪŋ/",
        "meaning": "khiêu vũ",
        "example_en": "They like dancing at parties.",
        "example_vi": "Họ thích khiêu vũ ở các bữa tiệc."
      },
      {
        "word": "dangerous (adj)",
        "ipa": "/ˈdeɪnʤərəs/",
        "meaning": "nguy hiểm",
        "example_en": "It is dangerous to play in the street.",
        "example_vi": "Thật nguy hiểm khi chơi trên đường phố."
      },
      {
        "word": "daughter (n)",
        "ipa": "/ˈdɔtər/",
        "meaning": "con gái",
        "example_en": "His daughter is five years old.",
        "example_vi": "Con gái của ông ấy năm tuổi."
      },
      {
        "word": "dear (adj)",
        "ipa": "/dɪr/",
        "meaning": "Thân mến",
        "example_en": "Dear John, thank you for your letter.",
        "example_vi": "John thân mến, cảm ơn lá thư của bạn."
      },
      {
        "word": "decide (v)",
        "ipa": "/ˌdɪˈsaɪd/",
        "meaning": "quyết định",
        "example_en": "I can't decide what to eat for lunch.",
        "example_vi": "Tôi không thể quyết định nên ăn gì cho bữa trưa."
      },
      {
        "word": "deep (adj)",
        "ipa": "/dip/",
        "meaning": "sâu",
        "example_en": "The water in this pool is very deep.",
        "example_vi": "Nước trong hồ bơi này rất sâu."
      },
      {
        "word": "deliver (v)",
        "ipa": "/dɪˈlɪvər/",
        "meaning": "giao",
        "example_en": "They will deliver the pizza in 30 minutes.",
        "example_vi": "Họ sẽ giao bánh pizza trong 30 phút nữa."
      },
      {
        "word": "dentist (n)",
        "ipa": "/ˈdɛntɪst/",
        "meaning": "nha sĩ",
        "example_en": "I have to go to the dentist today.",
        "example_vi": "Hôm nay tôi phải đến nha sĩ."
      },
      {
        "word": "department (n)",
        "ipa": "/dɪˈpɑrtmənt/",
        "meaning": "phòng",
        "example_en": "He works in the sales department.",
        "example_vi": "Anh ấy làm việc ở phòng kinh doanh."
      },
      {
        "word": "department store (n)",
        "ipa": "/dɪˈpɑrtmənt stɔr/",
        "meaning": "cửa hàng bách hóa",
        "example_en": "I bought this shirt at the department store.",
        "example_vi": "Tôi đã mua chiếc áo sơ mi này ở cửa hàng bách hóa."
      },
      {
        "word": "describe (v)",
        "ipa": "/dɪˈskraɪb/",
        "meaning": "mô tả",
        "example_en": "Can you describe your lost bag?",
        "example_vi": "Bạn có thể mô tả chiếc túi bị mất của bạn không?"
      },
      {
        "word": "design (v)",
        "ipa": "/dɪˈzaɪn/",
        "meaning": "thiết kế",
        "example_en": "She wants to design clothes when she grows up.",
        "example_vi": "Cô ấy muốn thiết kế quần áo khi lớn lên."
      },
      {
        "word": "design (planning) (n)",
        "ipa": "/dɪˈzaɪn/",
        "meaning": "thiết kế",
        "example_en": "The design of the new house is very modern.",
        "example_vi": "Bản thiết kế của ngôi nhà mới rất hiện đại."
      },
      {
        "word": "design (process) (n)",
        "ipa": "/dɪˈzaɪn/",
        "meaning": "thiết kế",
        "example_en": "He studies car design at university.",
        "example_vi": "Anh ấy học quy trình thiết kế xe hơi ở trường đại học."
      },
      {
        "word": "design (drawing) (n)",
        "ipa": "/dɪˈzaɪn/",
        "meaning": "thiết kế",
        "example_en": "I really like the design on your T-shirt.",
        "example_vi": "Tôi thực sự thích hình thiết kế trên áo thun của bạn."
      },
      {
        "word": "details (n)",
        "ipa": "/ˈditeɪlz/",
        "meaning": "chi tiết",
        "example_en": "Please send me the details of the meeting.",
        "example_vi": "Vui lòng gửi cho tôi thông tin chi tiết của cuộc họp."
      },
      {
        "word": "difference (n)",
        "ipa": "/ˈdɪfərəns/",
        "meaning": "sự khác biệt",
        "example_en": "What is the difference between these two phones?",
        "example_vi": "Sự khác biệt giữa hai chiếc điện thoại này là gì?"
      },
      {
        "word": "different (adj)",
        "ipa": "/ˈdɪfərənt/",
        "meaning": "khác biệt",
        "example_en": "My brother and I go to different schools.",
        "example_vi": "Anh trai tôi và tôi học ở các trường khác nhau."
      },
      {
        "word": "difficult (adj)",
        "ipa": "/ˈdɪfəkəlt/",
        "meaning": "khó",
        "example_en": "The math test was very difficult.",
        "example_vi": "Bài kiểm tra toán rất khó."
      },
      {
        "word": "dinner (n)",
        "ipa": "/ˈdɪnər/",
        "meaning": "bữa tối",
        "example_en": "What time do you have dinner?",
        "example_vi": "Bạn ăn tối lúc mấy giờ?"
      },
      {
        "word": "dinosaur (n)",
        "ipa": "/ˈdaɪnəˌsɔr/",
        "meaning": "khủng long",
        "example_en": "We saw a big dinosaur in the museum.",
        "example_vi": "Chúng tôi đã thấy một con khủng long lớn trong bảo tàng."
      },
      {
        "word": "directions (n)",
        "ipa": "/dɪˈrɛkʃɪnz/",
        "meaning": "chỉ đường",
        "example_en": "Can you give me directions to the station?",
        "example_vi": "Bạn có thể chỉ đường cho tôi đến nhà ga không?"
      },
      {
        "word": "dirty (adj)",
        "ipa": "/ˈdərti/",
        "meaning": "bẩn thỉu",
        "example_en": "Your shoes are very dirty.",
        "example_vi": "Giày của bạn rất bẩn."
      },
      {
        "word": "disco (n)",
        "ipa": "/ˈdɪskoʊ/",
        "meaning": "sàn nhảy",
        "example_en": "They danced all night at the disco.",
        "example_vi": "Họ đã nhảy múa cả đêm ở sàn nhảy."
      },
      {
        "word": "discount (n)",
        "ipa": "/ˈdɪskaʊnt/",
        "meaning": "giảm giá",
        "example_en": "Do you offer a discount for students?",
        "example_vi": "Bạn có giảm giá cho sinh viên không?"
      },
      {
        "word": "discover (v)",
        "ipa": "/dɪˈskəvər/",
        "meaning": "phát hiện",
        "example_en": "Columbus discovered America in 1492.",
        "example_vi": "Columbus đã phát hiện ra châu Mỹ vào năm 1492."
      },
      {
        "word": "discuss (v)",
        "ipa": "/dɪˈskəs/",
        "meaning": "bàn luận",
        "example_en": "We need to discuss our plans for the holiday.",
        "example_vi": "Chúng ta cần bàn luận về kế hoạch cho kỳ nghỉ."
      },
      {
        "word": "dive (v)",
        "ipa": "/daɪv/",
        "meaning": "lặn",
        "example_en": "You can dive into the pool from here.",
        "example_vi": "Bạn có thể lặn xuống hồ bơi từ đây."
      },
      {
        "word": "diving (adj)",
        "ipa": "/ˈdaɪvɪŋ/",
        "meaning": "môn lặn (Danh từ)",
        "example_en": "Diving in the sea is a wonderful experience.",
        "example_vi": "Lặn dưới biển là một trải nghiệm tuyệt vời."
      },
      {
        "word": "do (av & v)",
        "ipa": "/du/",
        "meaning": "LÀM",
        "example_en": "What do you want to do today?",
        "example_vi": "Bạn muốn làm gì hôm nay?"
      },
      {
        "word": "doll (n)",
        "ipa": "/dɑl/",
        "meaning": "BÚP BÊ",
        "example_en": "The little girl loves playing with her doll.",
        "example_vi": "Cô bé rất thích chơi với búp bê của mình."
      },
      {
        "word": "dollar (n)",
        "ipa": "/ˈdɔlər/",
        "meaning": "đô la",
        "example_en": "This shirt costs twenty dollars.",
        "example_vi": "Chiếc áo này có giá hai mươi đô la."
      },
      {
        "word": "donkey (n)",
        "ipa": "/ˈdɔŋki/",
        "meaning": "con lừa",
        "example_en": "We saw a donkey on the farm.",
        "example_vi": "Chúng tôi đã thấy một con lừa ở nông trại."
      },
      {
        "word": "dot (n)",
        "ipa": "/dɑt/",
        "meaning": "dấu chấm",
        "example_en": "There is a red dot on the paper.",
        "example_vi": "Có một dấu chấm màu đỏ trên giấy."
      },
      {
        "word": "double (adj)",
        "ipa": "/ˈdəbəl/",
        "meaning": "gấp đôi",
        "example_en": "I would like a double espresso, please.",
        "example_vi": "Cho tôi một ly cà phê espresso gấp đôi (đúp)."
      },
      {
        "word": "Dr (n)",
        "ipa": "/ˈdɑktər/",
        "meaning": "Tiến sĩ",
        "example_en": "Dr. Smith is a very good doctor.",
        "example_vi": "Tiến sĩ Smith là một bác sĩ rất giỏi."
      },
      {
        "word": "drawing (n)",
        "ipa": "/drɔɪŋ/",
        "meaning": "vẽ",
        "example_en": "She made a beautiful drawing of a horse.",
        "example_vi": "Cô ấy đã vẽ một bức tranh đẹp về một con ngựa."
      },
      {
        "word": "dream (n & v)",
        "ipa": "/drim/",
        "meaning": "mơ",
        "example_en": "I had a bad dream last night.",
        "example_vi": "Tôi đã có một giấc mơ tồi tệ đêm qua."
      },
      {
        "word": "dressed (adj)",
        "ipa": "/drɛst/",
        "meaning": "mặc quần áo",
        "example_en": "Get dressed quickly, we are late!",
        "example_vi": "Hãy mặc quần áo nhanh lên, chúng ta trễ rồi!"
      },
      {
        "word": "driving licence (n)",
        "ipa": "/ˈdraɪvɪŋ ˈlaɪsəns/",
        "meaning": "bằng lái xe",
        "example_en": "You need a driving licence to drive a car.",
        "example_vi": "Bạn cần một bằng lái xe để lái ô tô."
      },
      {
        "word": "drop (v)",
        "ipa": "/drɔp/",
        "meaning": "làm rơi",
        "example_en": "Don't drop your phone on the floor.",
        "example_vi": "Đừng làm rơi điện thoại của bạn xuống sàn."
      },
      {
        "word": "drugstore (n) (Am Eng) (Br Eng: chemist)",
        "ipa": "/ˈdrəgˌstɔr/",
        "meaning": "hiệu thuốc",
        "example_en": "I need to buy some medicine at the drugstore.",
        "example_vi": "Tôi cần mua một ít thuốc ở hiệu thuốc."
      },
      {
        "word": "drum (n)",
        "ipa": "/drəm/",
        "meaning": "cái trống",
        "example_en": "He plays the drum in a band.",
        "example_vi": "Anh ấy chơi trống trong một ban nhạc."
      },
      {
        "word": "dry (adj & v)",
        "ipa": "/draɪ/",
        "meaning": "khô",
        "example_en": "My clothes are not dry yet.",
        "example_vi": "Quần áo của tôi vẫn chưa khô."
      },
      {
        "word": "each (det & pron)",
        "ipa": "/iʧ/",
        "meaning": "mỗi",
        "example_en": "Each student must bring a pen.",
        "example_vi": "Mỗi học sinh phải mang theo một cây bút."
      },
      {
        "word": "each other (pron)",
        "ipa": "/iʧ ˈəðər/",
        "meaning": "nhau",
        "example_en": "They talk to each other every day.",
        "example_vi": "Họ nói chuyện với nhau mỗi ngày."
      },
      {
        "word": "easily (adv)",
        "ipa": "/ˈizəli/",
        "meaning": "một cách dễ dàng",
        "example_en": "I can easily carry this bag.",
        "example_vi": "Tôi có thể mang chiếc túi này một cách dễ dàng."
      },
      {
        "word": "easy (adj)",
        "ipa": "/ˈizi/",
        "meaning": "dễ",
        "example_en": "The test was very easy.",
        "example_vi": "Bài kiểm tra rất dễ."
      },
      {
        "word": "electric (adj)",
        "ipa": "/ɪˈlɛktrɪk/",
        "meaning": "điện",
        "example_en": "I bought a new electric car.",
        "example_vi": "Tôi đã mua một chiếc xe ô tô điện mới."
      },
      {
        "word": "electricity (n)",
        "ipa": "/ɪˌlɛkˈtrɪsəti/",
        "meaning": "điện",
        "example_en": "We use electricity for lights.",
        "example_vi": "Chúng tôi sử dụng điện cho đèn chiếu sáng."
      },
      {
        "word": "elevator (n) (Am Eng) (Br Eng: lift)",
        "ipa": "/ˈɛləˌveɪtər/",
        "meaning": "thang máy",
        "example_en": "Let's take the elevator to the fifth floor.",
        "example_vi": "Hãy đi thang máy lên tầng năm."
      },
      {
        "word": "else (adv)",
        "ipa": "/ɛls/",
        "meaning": "khác",
        "example_en": "Do you want anything else?",
        "example_vi": "Bạn có muốn gì khác không?"
      },
      {
        "word": "empty (adj)",
        "ipa": "/ˈɛmti/",
        "meaning": "trống",
        "example_en": "The box is empty.",
        "example_vi": "Chiếc hộp bị trống."
      },
      {
        "word": "end (v & n)",
        "ipa": "/ɛnd/",
        "meaning": "kết thúc",
        "example_en": "The movie will end soon.",
        "example_vi": "Bộ phim sẽ sớm kết thúc."
      },
      {
        "word": "enjoy (v)",
        "ipa": "/ˌɛnˈʤɔɪ/",
        "meaning": "thưởng thức",
        "example_en": "I enjoy reading books.",
        "example_vi": "Tôi thưởng thức việc đọc sách."
      },
      {
        "word": "enough (adv, det & pron)",
        "ipa": "/ɪˈnəf/",
        "meaning": "đủ",
        "example_en": "We have enough time to eat.",
        "example_vi": "Chúng ta có đủ thời gian để ăn."
      },
      {
        "word": "entrance (n)",
        "ipa": "/ˈɛntrəns/",
        "meaning": "cổng vào",
        "example_en": "I will meet you at the entrance.",
        "example_vi": "Tôi sẽ gặp bạn ở cổng vào."
      },
      {
        "word": "envelope (n)",
        "ipa": "/ˈɛnvəˌloʊp/",
        "meaning": "phong bì",
        "example_en": "Put the letter in an envelope.",
        "example_vi": "Đặt lá thư vào trong một phong bì."
      },
      {
        "word": "equipment (n)",
        "ipa": "/ɪkˈwɪpmənt/",
        "meaning": "thiết bị",
        "example_en": "We need some equipment for camping.",
        "example_vi": "Chúng ta cần một vài thiết bị để cắm trại."
      },
      {
        "word": "eraser (n) (Am Eng) (Br Eng: rubber)",
        "ipa": "/ɪˈreɪsər/",
        "meaning": "cục tẩy",
        "example_en": "Can I borrow your eraser?",
        "example_vi": "Tôi có thể mượn cục tẩy của bạn không?"
      },
      {
        "word": "especially (adv)",
        "ipa": "/əˈspɛʃəli/",
        "meaning": "đặc biệt",
        "example_en": "I like fruits, especially apples.",
        "example_vi": "Tôi thích trái cây, đặc biệt là táo."
      },
      {
        "word": "euro (n)",
        "ipa": "/ˈjʊrə/",
        "meaning": "euro",
        "example_en": "This book costs five euros.",
        "example_vi": "Cuốn sách này có giá năm euro."
      },
      {
        "word": "even (adv)",
        "ipa": "/ˈivɪn/",
        "meaning": "thậm chí",
        "example_en": "Even a child can do this.",
        "example_vi": "Thậm chí một đứa trẻ cũng có thể làm việc này."
      },
      {
        "word": "event (n)",
        "ipa": "/ɪˈvɛnt/",
        "meaning": "sự kiện",
        "example_en": "The concert is a big event.",
        "example_vi": "Buổi hòa nhạc là một sự kiện lớn."
      },
      {
        "word": "ever (adv)",
        "ipa": "/ˈɛvər/",
        "meaning": "bao giờ",
        "example_en": "Have you ever been to Paris?",
        "example_vi": "Bạn đã bao giờ đến Paris chưa?"
      },
      {
        "word": "everybody (pron)",
        "ipa": "/ˈɛvriˌbɑdi/",
        "meaning": "mọi người",
        "example_en": "Everybody is here for the party.",
        "example_vi": "Mọi người đều ở đây cho bữa tiệc."
      },
      {
        "word": "everyone (pron)",
        "ipa": "/ˈɛvriˌwən/",
        "meaning": "mọi người",
        "example_en": "Everyone needs to sleep.",
        "example_vi": "Mọi người đều cần ngủ."
      },
      {
        "word": "everything (pron)",
        "ipa": "/ˈɛvriˌθɪŋ/",
        "meaning": "mọi thứ",
        "example_en": "Everything is ready for the trip.",
        "example_vi": "Mọi thứ đã sẵn sàng cho chuyến đi."
      },
      {
        "word": "everywhere (adv)",
        "ipa": "/ˈɛvriˌwɛr/",
        "meaning": "ở khắp mọi nơi",
        "example_en": "I looked everywhere for my keys.",
        "example_vi": "Tôi đã tìm chìa khóa của mình ở khắp mọi nơi."
      },
      {
        "word": "exactly (adv)",
        "ipa": "/ɪgˈzæktli/",
        "meaning": "chính xác",
        "example_en": "That is exactly what I mean.",
        "example_vi": "Đó chính xác là những gì tôi muốn nói."
      },
      {
        "word": "examination/exam (n)",
        "ipa": "/ɪgˌzæməˈneɪʃən/",
        "meaning": "bài kiểm tra",
        "example_en": "I have an English exam tomorrow.",
        "example_vi": "Tôi có một bài kiểm tra tiếng Anh vào ngày mai."
      },
      {
        "word": "example (n)",
        "ipa": "/ɪgˈzæmpəl/",
        "meaning": "ví dụ",
        "example_en": "Can you give me an example?",
        "example_vi": "Bạn có thể cho tôi một ví dụ không?"
      },
      {
        "word": "excellent (adj)",
        "ipa": "/ˈɛksələnt/",
        "meaning": "xuất sắc",
        "example_en": "This is an excellent restaurant.",
        "example_vi": "Đây là một nhà hàng xuất sắc."
      },
      {
        "word": "except (conj & prep)",
        "ipa": "/ɪkˈsɛpt/",
        "meaning": "ngoại trừ",
        "example_en": "The store is open every day except Sunday.",
        "example_vi": "Cửa hàng mở cửa mỗi ngày ngoại trừ Chủ nhật."
      },
      {
        "word": "excuse (v)",
        "ipa": "/ɪkˈskjuz/",
        "meaning": "thứ lỗi",
        "example_en": "Excuse me, where is the station?",
        "example_vi": "Xin thứ lỗi, nhà ga ở đâu?"
      },
      {
        "word": "exhibition (n)",
        "ipa": "/ˌɛksəˈbɪʃən/",
        "meaning": "triển lãm",
        "example_en": "There is an art exhibition at the museum.",
        "example_vi": "Có một cuộc triển lãm nghệ thuật tại bảo tàng."
      },
      {
        "word": "expensive (adj)",
        "ipa": "/ɪkˈspɛnsɪv/",
        "meaning": "đắt",
        "example_en": "That watch is too expensive.",
        "example_vi": "Chiếc đồng hồ đó quá đắt."
      },
      {
        "word": "experience (n)",
        "ipa": "/ɪkˈspɪriəns/",
        "meaning": "kinh nghiệm",
        "example_en": "She has a lot of experience in teaching.",
        "example_vi": "Cô ấy có rất nhiều kinh nghiệm trong việc giảng dạy."
      },
      {
        "word": "experiment (n)",
        "ipa": "/ɪkˈspɛrəmənt/",
        "meaning": "cuộc thí nghiệm",
        "example_en": "We did a science experiment in class.",
        "example_vi": "Chúng tôi đã làm một cuộc thí nghiệm khoa học trong lớp."
      },
      {
        "word": "explain (v)",
        "ipa": "/ɪkˈspleɪn/",
        "meaning": "giải thích",
        "example_en": "Can you explain this word to me?",
        "example_vi": "Bạn có thể giải thích từ này cho tôi không?"
      },
      {
        "word": "explore (v)",
        "ipa": "/ɪkˈsplɔr/",
        "meaning": "khám phá",
        "example_en": "We will explore the old city today.",
        "example_vi": "Hôm nay chúng ta sẽ khám phá thành phố cổ."
      },
      {
        "word": "explorer (n)",
        "ipa": "/ɪkˈsplɔrər/",
        "meaning": "nhà thám hiểm",
        "example_en": "The explorer found a new island.",
        "example_vi": "Nhà thám hiểm đã tìm thấy một hòn đảo mới."
      },
      {
        "word": "extra (adj)",
        "ipa": "/ˈɛkstrə/",
        "meaning": "thêm",
        "example_en": "Do you have an extra pen?",
        "example_vi": "Bạn có thêm một cây bút không?"
      },
      {
        "word": "fact (n)",
        "ipa": "/fækt/",
        "meaning": "sự thật",
        "example_en": "That is a fact, not a story.",
        "example_vi": "Đó là một sự thật, không phải là một câu chuyện."
      },
      {
        "word": "fair (adj)",
        "ipa": "/fɛr/",
        "meaning": "công bằng / hợp lý",
        "example_en": "It is not fair to the other players.",
        "example_vi": "Điều đó không công bằng với những người chơi khác."
      },
      {
        "word": "family (n)",
        "ipa": "/ˈfæməli/",
        "meaning": "gia đình",
        "example_en": "I live with my family.",
        "example_vi": "Tôi sống cùng gia đình."
      },
      {
        "word": "far (adv)",
        "ipa": "/fɑr/",
        "meaning": "xa",
        "example_en": "The station is not far from here.",
        "example_vi": "Nhà ga không xa nơi này."
      },
      {
        "word": "fast (adj & adv)",
        "ipa": "/fæst/",
        "meaning": "nhanh",
        "example_en": "He is a very fast runner.",
        "example_vi": "Anh ấy là một người chạy rất nhanh."
      },
      {
        "word": "fat (adj)",
        "ipa": "/fæt/",
        "meaning": "mập",
        "example_en": "My cat is very fat.",
        "example_vi": "Con mèo của tôi rất mập."
      },
      {
        "word": "father (n)",
        "ipa": "/ˈfɑðər/",
        "meaning": "bố",
        "example_en": "My father is a doctor.",
        "example_vi": "Bố tôi là một bác sĩ."
      },
      {
        "word": "favourite (adj)",
        "ipa": "/ˈfeɪvərɪt/",
        "meaning": "yêu thích",
        "example_en": "My favourite color is blue.",
        "example_vi": "Màu yêu thích của tôi là màu xanh dương."
      },
      {
        "word": "feelings (n)",
        "ipa": "/ˈfilɪŋz/",
        "meaning": "cảm xúc",
        "example_en": "I cannot hide my feelings.",
        "example_vi": "Tôi không thể giấu được cảm xúc của mình."
      },
      {
        "word": "festival (n)",
        "ipa": "/ˈfɛstɪvəl/",
        "meaning": "lễ hội",
        "example_en": "We went to a music festival last night.",
        "example_vi": "Chúng tôi đã đến một lễ hội âm nhạc tối qua."
      },
      {
        "word": "few (det & adj)",
        "ipa": "/fju/",
        "meaning": "một vài",
        "example_en": "I have a few friends in this city.",
        "example_vi": "Tôi có một vài người bạn ở thành phố này."
      },
      {
        "word": "fill (v)",
        "ipa": "/fɪl/",
        "meaning": "đổ đầy",
        "example_en": "Please fill the glass with water.",
        "example_vi": "Làm ơn hãy đổ đầy ly bằng nước."
      },
      {
        "word": "fill in (phr v)",
        "ipa": "/fɪl ɪn/",
        "meaning": "điền vào",
        "example_en": "Please fill in this form.",
        "example_vi": "Vui lòng điền vào mẫu này."
      },
      {
        "word": "final (adj)",
        "ipa": "/ˈfaɪnəl/",
        "meaning": "cuối cùng",
        "example_en": "This is the final train of the day.",
        "example_vi": "Đây là chuyến tàu cuối cùng trong ngày."
      },
      {
        "word": "find (v)",
        "ipa": "/faɪnd/",
        "meaning": "tìm thấy",
        "example_en": "I cannot find my phone.",
        "example_vi": "Tôi không thể tìm thấy điện thoại của mình."
      },
      {
        "word": "find out (phr v)",
        "ipa": "/faɪnd aʊt/",
        "meaning": "tìm ra",
        "example_en": "I need to find out the truth.",
        "example_vi": "Tôi cần tìm ra sự thật."
      },
      {
        "word": "fine (adj)",
        "ipa": "/faɪn/",
        "meaning": "khỏe",
        "example_en": "I am fine, thank you.",
        "example_vi": "Tôi khỏe, cảm ơn bạn."
      },
      {
        "word": "finish (v)",
        "ipa": "/ˈfɪnɪʃ/",
        "meaning": "hoàn thành",
        "example_en": "I will finish my homework soon.",
        "example_vi": "Tôi sẽ sớm hoàn thành bài tập về nhà."
      },
      {
        "word": "first (adv & adj)",
        "ipa": "/fərst/",
        "meaning": "Đầu tiên",
        "example_en": "He won the first prize.",
        "example_vi": "Anh ấy đã giành giải đầu tiên."
      },
      {
        "word": "first name (n)",
        "ipa": "/fərst neɪm/",
        "meaning": "tên đầu tiên",
        "example_en": "What is your first name?",
        "example_vi": "Tên đầu tiên của bạn là gì?"
      },
      {
        "word": "first of all (adv)",
        "ipa": "/fərst əv ɔl/",
        "meaning": "đầu tiên",
        "example_en": "First of all, thank you for coming.",
        "example_vi": "Đầu tiên, cảm ơn bạn đã đến."
      },
      {
        "word": "fishing (n)",
        "ipa": "/ˈfɪʃɪŋ/",
        "meaning": "câu cá",
        "example_en": "We went fishing on the lake.",
        "example_vi": "Chúng tôi đã đi câu cá trên hồ."
      },
      {
        "word": "fix (v)",
        "ipa": "/fɪks/",
        "meaning": "sửa chữa",
        "example_en": "My dad can fix my bike.",
        "example_vi": "Bố tôi có thể sửa chữa chiếc xe đạp của tôi."
      },
      {
        "word": "fog (n)",
        "ipa": "/fɔg/",
        "meaning": "sương mù",
        "example_en": "The fog is very thick today.",
        "example_vi": "Sương mù hôm nay rất dày."
      },
      {
        "word": "foggy (adj)",
        "ipa": "/ˈfɑgi/",
        "meaning": "có sương mù",
        "example_en": "It is a foggy morning.",
        "example_vi": "Đó là một buổi sáng có sương mù."
      },
      {
        "word": "folder (n)",
        "ipa": "/ˈfoʊldər/",
        "meaning": "thư mục",
        "example_en": "Put the papers in this folder.",
        "example_vi": "Đặt những tờ giấy vào thư mục này."
      },
      {
        "word": "follow (v)",
        "ipa": "/ˈfɑloʊ/",
        "meaning": "theo",
        "example_en": "Please follow me to the room.",
        "example_vi": "Hãy đi theo tôi đến phòng."
      },
      {
        "word": "follow (social media) (v)",
        "ipa": "/ˈfɑloʊ/",
        "meaning": "theo",
        "example_en": "I follow him on social media.",
        "example_vi": "Tôi theo dõi anh ấy trên mạng xã hội."
      },
      {
        "word": "for (prep)",
        "ipa": "/fər/",
        "meaning": "vì",
        "example_en": "I bought a present for you.",
        "example_vi": "Tôi đã mua một món quà vì bạn."
      },
      {
        "word": "foreign (adj)",
        "ipa": "/ˈfɔrən/",
        "meaning": "nước ngoài",
        "example_en": "I like learning foreign languages.",
        "example_vi": "Tôi thích học ngôn ngữ nước ngoài."
      },
      {
        "word": "forget (v)",
        "ipa": "/fərˈgɛt/",
        "meaning": "quên",
        "example_en": "Do not forget your umbrella.",
        "example_vi": "Đừng quên ô của bạn."
      },
      {
        "word": "form (n)",
        "ipa": "/fɔrm/",
        "meaning": "hình thức",
        "example_en": "Ice is a form of water.",
        "example_vi": "Băng là một hình thức của nước."
      },
      {
        "word": "free (adj & adv)",
        "ipa": "/fri/",
        "meaning": "miễn phí / rảnh rỗi tự do",
        "example_en": "I am free this weekend.",
        "example_vi": "Tôi rảnh rỗi vào cuối tuần này."
      },
      {
        "word": "French fries (n) (Am Eng) (Br Eng: chips)",
        "ipa": "/frɛnʧ fraɪz/",
        "meaning": "khoai tây chiên",
        "example_en": "I want a burger and French fries.",
        "example_vi": "Tôi muốn một chiếc bánh mì kẹp thịt và khoai tây chiên."
      },
      {
        "word": "fresh (adj)",
        "ipa": "/frɛʃ/",
        "meaning": "tươi",
        "example_en": "I love eating fresh fruit.",
        "example_vi": "Tôi thích ăn trái cây tươi."
      },
      {
        "word": "friend (n)",
        "ipa": "/frɛnd/",
        "meaning": "người bạn",
        "example_en": "She is my best friend.",
        "example_vi": "Cô ấy là người bạn tốt nhất của tôi."
      },
      {
        "word": "frightened (adj)",
        "ipa": "/ˈfraɪtənd/",
        "meaning": "sợ sệt",
        "example_en": "The cat was frightened by the dog.",
        "example_vi": "Con mèo đã bị sợ sệt bởi con chó."
      },
      {
        "word": "from (prep)",
        "ipa": "/frəm/",
        "meaning": "từ",
        "example_en": "I am from Vietnam.",
        "example_vi": "Tôi đến từ Việt Nam."
      },
      {
        "word": "front (n)",
        "ipa": "/frənt/",
        "meaning": "đằng trước",
        "example_en": "Let's meet in front of the cinema.",
        "example_vi": "Hãy gặp nhau ở đằng trước rạp chiếu phim."
      },
      {
        "word": "full (adj)",
        "ipa": "/fʊl/",
        "meaning": "đầy",
        "example_en": "The glass is full of water.",
        "example_vi": "Chiếc ly chứa đầy nước."
      },
      {
        "word": "fun (adj & n)",
        "ipa": "/fən/",
        "meaning": "vui vẻ",
        "example_en": "Playing games is a lot of fun.",
        "example_vi": "Chơi trò chơi rất vui vẻ."
      },
      {
        "word": "fur (n)",
        "ipa": "/fər/",
        "meaning": "lông thú",
        "example_en": "The rabbit has soft fur.",
        "example_vi": "Con thỏ có lông thú mềm mại."
      },
      {
        "word": "further (adj)",
        "ipa": "/ˈfərðər/",
        "meaning": "hơn nữa",
        "example_en": "Do you have any further questions?",
        "example_vi": "Bạn có câu hỏi nào hơn nữa không?"
      },
      {
        "word": "gallery (n)",
        "ipa": "/ˈgæləri/",
        "meaning": "phòng trưng bày",
        "example_en": "We bought a painting from the gallery.",
        "example_vi": "Chúng tôi đã mua một bức tranh từ phòng trưng bày."
      },
      {
        "word": "gas (n) (Am Eng) (Br Eng: petrol)",
        "ipa": "/gæs/",
        "meaning": "khí đốt",
        "example_en": "We use gas for cooking.",
        "example_vi": "Chúng tôi sử dụng khí đốt để nấu ăn."
      },
      {
        "word": "get (v)",
        "ipa": "/gɪt/",
        "meaning": "lấy",
        "example_en": "I need to get a new phone.",
        "example_vi": "Tôi cần lấy một chiếc điện thoại mới."
      },
      {
        "word": "get dressed (v)",
        "ipa": "/gɪt drɛst/",
        "meaning": "mặc quần áo",
        "example_en": "I get dressed after taking a shower.",
        "example_vi": "Tôi mặc quần áo sau khi tắm."
      },
      {
        "word": "get married (v)",
        "ipa": "/gɪt ˈmɛrid/",
        "meaning": "kết hôn",
        "example_en": "They will get married next year.",
        "example_vi": "Họ sẽ kết hôn vào năm sau."
      },
      {
        "word": "get off (phr v)",
        "ipa": "/gɪt ɔf/",
        "meaning": "rời đi",
        "example_en": "We need to get off the bus here.",
        "example_vi": "Chúng ta cần rời đi khỏi xe buýt ở đây."
      },
      {
        "word": "gift (n)",
        "ipa": "/gɪft/",
        "meaning": "quà",
        "example_en": "He gave me a beautiful gift.",
        "example_vi": "Anh ấy đã tặng tôi một món quà đẹp."
      },
      {
        "word": "girl (n)",
        "ipa": "/gərl/",
        "meaning": "con gái",
        "example_en": "She is a beautiful girl.",
        "example_vi": "Cô ấy là một người con gái xinh đẹp."
      },
      {
        "word": "girlfriend (n)",
        "ipa": "/ˈgərlˌfrɛnd/",
        "meaning": "bạn gái",
        "example_en": "He bought flowers for his girlfriend.",
        "example_vi": "Anh ấy đã mua hoa cho bạn gái của mình."
      },
      {
        "word": "give (v)",
        "ipa": "/gɪv/",
        "meaning": "đưa cho",
        "example_en": "Please give me the book.",
        "example_vi": "Làm ơn đưa cho tôi quyển sách."
      },
      {
        "word": "goal (n)",
        "ipa": "/goʊl/",
        "meaning": "mục tiêu",
        "example_en": "My goal is to learn English.",
        "example_vi": "Mục tiêu của tôi là học tiếng Anh."
      },
      {
        "word": "gold (n & adj)",
        "ipa": "/goʊld/",
        "meaning": "vàng",
        "example_en": "She has a gold ring.",
        "example_vi": "Cô ấy có một chiếc nhẫn vàng."
      },
      {
        "word": "golden (adj)",
        "ipa": "/ˈgoʊldən/",
        "meaning": "vàng",
        "example_en": "He gave me a golden apple.",
        "example_vi": "Anh ấy đã cho tôi một quả táo vàng."
      },
      {
        "word": "goodbye (exclam)",
        "ipa": "/ˌgʊdˈbaɪ/",
        "meaning": "tạm biệt",
        "example_en": "He said goodbye and left.",
        "example_vi": "Anh ấy đã nói tạm biệt và rời đi."
      },
      {
        "word": "good-looking (adj)",
        "ipa": "/ˈgʊˌdlʊkɪŋ/",
        "meaning": "đẹp trai",
        "example_en": "Her brother is very good-looking.",
        "example_vi": "Anh trai của cô ấy rất đẹp trai."
      },
      {
        "word": "grade (n)",
        "ipa": "/greɪd/",
        "meaning": "cấp",
        "example_en": "He is in the fifth grade.",
        "example_vi": "Anh ấy đang học ở cấp năm."
      },
      {
        "word": "gram(me) (n)",
        "ipa": "/græm/",
        "meaning": "gram",
        "example_en": "Add one hundred grams of sugar.",
        "example_vi": "Thêm một trăm gram đường."
      },
      {
        "word": "grandchild (n)",
        "ipa": "/ˈgrænˌʧaɪld/",
        "meaning": "cháu nội",
        "example_en": "She loves her grandchild very much.",
        "example_vi": "Bà ấy rất yêu đứa cháu nội của mình."
      },
      {
        "word": "grand(d)ad (n)",
        "ipa": "/ˈgrænˌdæd/",
        "meaning": "ông (nói chung nội/ngoại)",
        "example_en": "My grandad is very kind.",
        "example_vi": "Ông của tôi rất tốt bụng."
      },
      {
        "word": "granddaughter (n)",
        "ipa": "/ˈgrænˌdɔtər/",
        "meaning": "cháu gái",
        "example_en": "His granddaughter is five years old.",
        "example_vi": "Cháu gái của ông ấy năm tuổi."
      },
      {
        "word": "grandfather (n)",
        "ipa": "/ˈgrænˌfɑðər/",
        "meaning": "ông nội",
        "example_en": "My grandfather is 70 years old.",
        "example_vi": "Ông nội của tôi 70 tuổi."
      },
      {
        "word": "grandma (n)",
        "ipa": "/ˈgrændmɑ/",
        "meaning": "bà",
        "example_en": "I visit my grandma every weekend.",
        "example_vi": "Tôi đi thăm bà mỗi cuối tuần."
      },
      {
        "word": "grandmother (n)",
        "ipa": "/ˈgrændˌməðər/",
        "meaning": "bà (nói chung nội/ngoại)",
        "example_en": "Her grandmother cooks very well.",
        "example_vi": "Bà của cô ấy nấu ăn rất ngon."
      },
      {
        "word": "grandpa (n)",
        "ipa": "/ˈgrændˌpɑ/",
        "meaning": "ông (nói chung nội/ngoại)",
        "example_en": "My grandpa likes to read the newspaper.",
        "example_vi": "Ông của tôi thích đọc báo."
      },
      {
        "word": "grandparent (n)",
        "ipa": "/ˈgrændˌpɛrənt/",
        "meaning": "ông bà",
        "example_en": "My grandparents live in the country.",
        "example_vi": "Ông bà của tôi sống ở nông thôn."
      },
      {
        "word": "grandson (n)",
        "ipa": "/ˈgrændˌsən/",
        "meaning": "cháu trai",
        "example_en": "He bought a toy for his grandson.",
        "example_vi": "Ông ấy đã mua một món đồ chơi cho cháu trai của mình."
      },
      {
        "word": "granny (n)",
        "ipa": "/ˈgræni/",
        "meaning": "bà (nói chung nội/ngoại)",
        "example_en": "My granny makes the best cakes.",
        "example_vi": "Bà của tôi làm những chiếc bánh ngon nhất."
      },
      {
        "word": "green (adj)",
        "ipa": "/grin/",
        "meaning": "màu xanh lá",
        "example_en": "She has a green bag.",
        "example_vi": "Cô ấy có một chiếc túi màu xanh lá."
      },
      {
        "word": "grey (adj & n) (Br Eng) (Am Eng: gray)",
        "ipa": "/greɪ/",
        "meaning": "xám",
        "example_en": "The sky is grey today.",
        "example_vi": "Hôm nay bầu trời màu xám."
      },
      {
        "word": "grilled (adj)",
        "ipa": "/grɪld/",
        "meaning": "nướng",
        "example_en": "I would like some grilled fish.",
        "example_vi": "Tôi muốn một ít cá nướng."
      },
      {
        "word": "grocery store (n) (Am Eng)",
        "ipa": "/ˈgroʊsəri stɔr/",
        "meaning": "cửa hàng tạp hóa",
        "example_en": "I buy milk at the grocery store.",
        "example_vi": "Tôi mua sữa ở cửa hàng tạp hóa."
      },
      {
        "word": "group (n)",
        "ipa": "/grup/",
        "meaning": "nhóm",
        "example_en": "We study in a group.",
        "example_vi": "Chúng tôi học theo nhóm."
      },
      {
        "word": "grow (v)",
        "ipa": "/groʊ/",
        "meaning": "phát triển",
        "example_en": "Trees need water to grow.",
        "example_vi": "Cây cần nước để phát triển."
      },
      {
        "word": "grow up (phr v)",
        "ipa": "/groʊ əp/",
        "meaning": "lớn lên",
        "example_en": "I want to be a doctor when I grow up.",
        "example_vi": "Tôi muốn trở thành bác sĩ khi tôi lớn lên."
      },
      {
        "word": "guest (n)",
        "ipa": "/gɛst/",
        "meaning": "khách mời",
        "example_en": "We have a guest for dinner.",
        "example_vi": "Chúng tôi có một khách mời cho bữa tối."
      },
      {
        "word": "guide (n)",
        "ipa": "/gaɪd/",
        "meaning": "hướng dẫn",
        "example_en": "The guide showed us the museum.",
        "example_vi": "Người hướng dẫn đã chỉ cho chúng tôi bảo tàng."
      },
      {
        "word": "guidebook (n)",
        "ipa": "/ˈgaɪdˌbʊk/",
        "meaning": "sách hướng dẫn",
        "example_en": "I bought a guidebook for my trip.",
        "example_vi": "Tôi đã mua một cuốn sách hướng dẫn cho chuyến đi của mình."
      },
      {
        "word": "guy (n)",
        "ipa": "/gaɪ/",
        "meaning": "chàng trai",
        "example_en": "He is a nice guy.",
        "example_vi": "Anh ấy là một chàng trai tốt."
      },
      {
        "word": "half-price (adj)",
        "ipa": "/ˌhɑːfˈpraɪs/",
        "meaning": "nửa giá",
        "example_en": "These shoes are half-price.",
        "example_vi": "Những đôi giày này đang giảm nửa giá."
      },
      {
        "word": "handbag (n)",
        "ipa": "/ˈhændˌbæg/",
        "meaning": "túi xách",
        "example_en": "She keeps her keys in her handbag.",
        "example_vi": "Cô ấy giữ chìa khóa trong túi xách."
      },
      {
        "word": "happen (v)",
        "ipa": "/ˈhæpən/",
        "meaning": "xảy ra",
        "example_en": "What will happen next?",
        "example_vi": "Điều gì sẽ xảy ra tiếp theo?"
      },
      {
        "word": "harbour (n)",
        "ipa": "/ˈhɑrbər/",
        "meaning": "hải cảng",
        "example_en": "The boats are in the harbour.",
        "example_vi": "Những chiếc thuyền đang ở hải cảng."
      },
      {
        "word": "hate (v)",
        "ipa": "/heɪt/",
        "meaning": "ghét",
        "example_en": "I hate getting up early.",
        "example_vi": "Tôi ghét việc dậy sớm."
      },
      {
        "word": "have (av & v)",
        "ipa": "/hæv/",
        "meaning": "có",
        "example_en": "I have a new car.",
        "example_vi": "Tôi có một chiếc xe mới."
      },
      {
        "word": "have got to (mv)",
        "ipa": "/hæv gɑt tɪ/",
        "meaning": "phải",
        "example_en": "I have got to go now.",
        "example_vi": "Tôi phải đi bây giờ."
      },
      {
        "word": "have to (mv)",
        "ipa": "/hæv tɪ/",
        "meaning": "phải",
        "example_en": "You have to clean your room.",
        "example_vi": "Bạn phải dọn dẹp phòng của mình."
      },
      {
        "word": "he (pron)",
        "ipa": "/hi/",
        "meaning": "Anh ta",
        "example_en": "He is my brother.",
        "example_vi": "Anh ta là anh trai tôi."
      },
      {
        "word": "heavy (adj)",
        "ipa": "/ˈhɛvi/",
        "meaning": "nặng",
        "example_en": "This box is very heavy.",
        "example_vi": "Chiếc hộp này rất nặng."
      },
      {
        "word": "hello (exclam)",
        "ipa": "/hɛˈloʊ/",
        "meaning": "Xin chào",
        "example_en": "She said hello to me.",
        "example_vi": "Cô ấy đã nói xin chào với tôi."
      },
      {
        "word": "help (v & n)",
        "ipa": "/hɛlp/",
        "meaning": "giúp đỡ",
        "example_en": "Can you help me, please?",
        "example_vi": "Bạn có thể giúp tôi được không?"
      },
      {
        "word": "helpful (adj)",
        "ipa": "/ˈhɛlpfəl/",
        "meaning": "hữu ích",
        "example_en": "The teacher is very helpful.",
        "example_vi": "Giáo viên rất hữu ích."
      },
      {
        "word": "her (det & pron)",
        "ipa": "/hər/",
        "meaning": "cô ấy",
        "example_en": "I saw her yesterday.",
        "example_vi": "Tôi đã thấy cô ấy ngày hôm qua."
      },
      {
        "word": "here (adv)",
        "ipa": "/hir/",
        "meaning": "đây",
        "example_en": "Please come here.",
        "example_vi": "Làm ơn đến đây."
      },
      {
        "word": "hers (pron)",
        "ipa": "/hərz/",
        "meaning": "của cô ấy",
        "example_en": "That book is hers.",
        "example_vi": "Cuốn sách đó là của cô ấy."
      },
      {
        "word": "herself (pron)",
        "ipa": "/hərˈsɛlf/",
        "meaning": "bản thân cô ấy",
        "example_en": "She made the dress herself.",
        "example_vi": "Cô ấy tự may chiếc váy cho bản thân cô ấy."
      },
      {
        "word": "hey (exclam)",
        "ipa": "/heɪ/",
        "meaning": "Chào",
        "example_en": "Hey, wait for me!",
        "example_vi": "Chào, đợi tôi với!"
      },
      {
        "word": "hi (exclam)",
        "ipa": "/haɪ/",
        "meaning": "CHÀO",
        "example_en": "Hi, how are you?",
        "example_vi": "Chào, bạn khỏe không?"
      },
      {
        "word": "high (adj)",
        "ipa": "/haɪ/",
        "meaning": "cao",
        "example_en": "The mountain is very high.",
        "example_vi": "Ngọn núi rất cao."
      },
      {
        "word": "him (pron)",
        "ipa": "/ɪm/",
        "meaning": "anh ta",
        "example_en": "I gave him a present.",
        "example_vi": "Tôi đã tặng anh ta một món quà."
      },
      {
        "word": "himself (pron)",
        "ipa": "/hɪmˈsɛlf/",
        "meaning": "bản thân anh ấy",
        "example_en": "He hurt himself while playing football.",
        "example_vi": "Anh ấy đã tự làm bản thân bị thương khi chơi bóng đá."
      },
      {
        "word": "hip hop (n)",
        "ipa": "/hɪp hɑp/",
        "meaning": "hip hop",
        "example_en": "They love listening to hip hop music.",
        "example_vi": "Họ thích nghe nhạc hip hop."
      },
      {
        "word": "his (det & pron)",
        "ipa": "/hɪz/",
        "meaning": "của anh ấy",
        "example_en": "His phone is on the table.",
        "example_vi": "Điện thoại của anh ấy ở trên bàn."
      },
      {
        "word": "hockey (n)",
        "ipa": "/ˈhɑki/",
        "meaning": "khúc côn cầu",
        "example_en": "My brother plays hockey on Sundays.",
        "example_vi": "Anh trai tôi chơi khúc côn cầu vào Chủ nhật."
      },
      {
        "word": "hold (v)",
        "ipa": "/hoʊld/",
        "meaning": "giữ",
        "example_en": "Please hold my bag for a minute.",
        "example_vi": "Làm ơn giữ túi của tôi một phút."
      },
      {
        "word": "honey (n)",
        "ipa": "/ˈhəni/",
        "meaning": "Mật ong",
        "example_en": "I like honey in my tea.",
        "example_vi": "Tôi thích thêm mật ong vào trà."
      },
      {
        "word": "horrible (adj)",
        "ipa": "/ˈhɔrəbəl/",
        "meaning": "tệ hại",
        "example_en": "The weather was horrible yesterday.",
        "example_vi": "Thời tiết hôm qua rất tệ hại."
      },
      {
        "word": "horror (adj)",
        "ipa": "/ˈhɔrər/",
        "meaning": "kinh dị",
        "example_en": "We watched a horror film last night.",
        "example_vi": "Chúng tôi đã xem một bộ phim kinh dị tối qua."
      },
      {
        "word": "hotel (n)",
        "ipa": "/hoʊˈtɛl/",
        "meaning": "khách sạn",
        "example_en": "We stayed at a nice hotel near the beach.",
        "example_vi": "Chúng tôi ở một khách sạn đẹp gần bãi biển."
      },
      {
        "word": "housewife (n)",
        "ipa": "/ˈhaʊsˌwaɪf/",
        "meaning": "bà nội trợ",
        "example_en": "His mother is a housewife.",
        "example_vi": "Mẹ anh ấy là một bà nội trợ."
      },
      {
        "word": "how (adv)",
        "ipa": "/haʊ/",
        "meaning": "Làm sao",
        "example_en": "How do you go to school?",
        "example_vi": "Làm sao bạn đến trường?"
      },
      {
        "word": "however (adv)",
        "ipa": "/ˌhaʊˈɛvər/",
        "meaning": "Tuy nhiên",
        "example_en": "I like apples, however, I don't like bananas.",
        "example_vi": "Tôi thích táo, tuy nhiên, tôi không thích chuối."
      },
      {
        "word": "huge (adj)",
        "ipa": "/juʤ/",
        "meaning": "to lớn",
        "example_en": "They live in a huge house.",
        "example_vi": "Họ sống trong một ngôi nhà to lớn."
      },
      {
        "word": "hurry (v)",
        "ipa": "/ˈhəri/",
        "meaning": "vội vã / làm gấp",
        "example_en": "We need to hurry or we will be late.",
        "example_vi": "Chúng ta cần vội vã nếu không sẽ bị trễ."
      },
      {
        "word": "husband (n)",
        "ipa": "/ˈhəzbənd/",
        "meaning": "chồng",
        "example_en": "Her husband is a teacher.",
        "example_vi": "Chồng của cô ấy là một giáo viên."
      },
      {
        "word": "I (pron)",
        "ipa": "/aɪ/",
        "meaning": "TÔI",
        "example_en": "I am a student.",
        "example_vi": "Tôi là một học sinh."
      },
      {
        "word": "ID (n)",
        "ipa": "/ˈaɪˈdi/",
        "meaning": "NHẬN DẠNG",
        "example_en": "Please show me your ID.",
        "example_vi": "Vui lòng cho tôi xem nhận dạng của bạn."
      },
      {
        "word": "ID card (n)",
        "ipa": "/ˈaɪˈdi kɑrd/",
        "meaning": "CMND",
        "example_en": "You need an ID card to enter the building.",
        "example_vi": "Bạn cần một CMND để vào tòa nhà."
      },
      {
        "word": "idea (n)",
        "ipa": "/aɪˈdiə/",
        "meaning": "ý tưởng",
        "example_en": "That is a great idea.",
        "example_vi": "Đó là một ý tưởng tuyệt vời."
      },
      {
        "word": "identification (n)",
        "ipa": "/aɪˌdɛntəfəˈkeɪʃən/",
        "meaning": "nhận dạng",
        "example_en": "Do you have any identification?",
        "example_vi": "Bạn có giấy tờ nhận dạng nào không?"
      },
      {
        "word": "if (conj)",
        "ipa": "/ɪf/",
        "meaning": "nếu như",
        "example_en": "If it rains, we will stay at home.",
        "example_vi": "Nếu như trời mưa, chúng tôi sẽ ở nhà."
      },
      {
        "word": "immediately (adv)",
        "ipa": "/ˌɪˈmiˌdiətli/",
        "meaning": "ngay lập tức",
        "example_en": "Please call me back immediately.",
        "example_vi": "Vui lòng gọi lại cho tôi ngay lập tức."
      },
      {
        "word": "impossible (adj)",
        "ipa": "/ˌɪmˈpɑsəbəl/",
        "meaning": "không thể nào",
        "example_en": "It is impossible to finish this in one hour.",
        "example_vi": "Thật không thể nào hoàn thành việc này trong một giờ."
      },
      {
        "word": "improve (v)",
        "ipa": "/ˌɪmˈpruv/",
        "meaning": "cải thiện",
        "example_en": "I want to improve my English.",
        "example_vi": "Tôi muốn cải thiện tiếng Anh của mình."
      },
      {
        "word": "in (adv & prep)",
        "ipa": "/ɪn/",
        "meaning": "TRONG",
        "example_en": "The cat is in the box.",
        "example_vi": "Con mèo ở trong hộp."
      },
      {
        "word": "include (v)",
        "ipa": "/ˌɪnˈklud/",
        "meaning": "bao gồm",
        "example_en": "The price includes breakfast.",
        "example_vi": "Giá đã bao gồm bữa sáng."
      },
      {
        "word": "including (prep)",
        "ipa": "/ˌɪnˈkludɪŋ/",
        "meaning": "bao gồm",
        "example_en": "We have ten members, including me.",
        "example_vi": "Chúng tôi có mười thành viên, bao gồm cả tôi."
      },
      {
        "word": "indoor (adj)",
        "ipa": "/ˈɪnˌdɔr/",
        "meaning": "trong nhà",
        "example_en": "We went to an indoor swimming pool.",
        "example_vi": "Chúng tôi đã đi đến một hồ bơi trong nhà."
      },
      {
        "word": "indoors (adv)",
        "ipa": "/ˈɪnˌdɔrz/",
        "meaning": "trong nhà",
        "example_en": "It was raining, so we stayed indoors.",
        "example_vi": "Trời mưa, vì vậy chúng tôi đã ở trong nhà."
      },
      {
        "word": "in front of (prep phr)",
        "ipa": "/ɪn frənt əv/",
        "meaning": "trước mặt",
        "example_en": "There is a bus stop in front of my house.",
        "example_vi": "Có một trạm xe buýt trước mặt nhà tôi."
      },
      {
        "word": "ingredient (n)",
        "ipa": "/ˌɪnˈgridiənt/",
        "meaning": "nguyên liệu",
        "example_en": "I need to buy ingredients for the cake.",
        "example_vi": "Tôi cần mua nguyên liệu cho chiếc bánh."
      },
      {
        "word": "insect (n)",
        "ipa": "/ˈɪnˌsɛkt/",
        "meaning": "côn trùng",
        "example_en": "A bee is an insect.",
        "example_vi": "Con ong là một loại côn trùng."
      },
      {
        "word": "inside (adv & prep)",
        "ipa": "/ˌɪnˈsaɪd/",
        "meaning": "bên trong",
        "example_en": "Let's go inside.",
        "example_vi": "Hãy đi vào bên trong."
      },
      {
        "word": "instead (adv)",
        "ipa": "/ˌɪnˈstɛd/",
        "meaning": "thay vì",
        "example_en": "I don't have coffee, let's drink tea instead.",
        "example_vi": "Tôi không có cà phê, thay vì vậy hãy uống trà."
      },
      {
        "word": "instead of (prep)",
        "ipa": "/ˌɪnˈstɛd əv/",
        "meaning": "thay vì",
        "example_en": "I will have fish instead of meat.",
        "example_vi": "Tôi sẽ ăn cá thay vì thịt."
      },
      {
        "word": "instructions (n pl)",
        "ipa": "/ˌɪnˈstrəkʃənz/",
        "meaning": "hướng dẫn",
        "example_en": "Please read the instructions carefully.",
        "example_vi": "Vui lòng đọc kỹ hướng dẫn."
      },
      {
        "word": "instrument (n)",
        "ipa": "/ˈɪnstrəmənt/",
        "meaning": "dụng cụ",
        "example_en": "Do you play any musical instrument?",
        "example_vi": "Bạn có chơi nhạc cụ nào không?"
      },
      {
        "word": "international (adj)",
        "ipa": "/ˌɪnərˈnæʃənɑl/",
        "meaning": "quốc tế",
        "example_en": "We went to an international school.",
        "example_vi": "Chúng tôi đã đến một trường học quốc tế."
      },
      {
        "word": "into (prep)",
        "ipa": "/ˈɪntu/",
        "meaning": "vào trong",
        "example_en": "She walked into the room.",
        "example_vi": "Cô ấy bước vào trong phòng."
      },
      {
        "word": "invent (v)",
        "ipa": "/ˌɪnˈvɛnt/",
        "meaning": "phát minh",
        "example_en": "Who invented the telephone?",
        "example_vi": "Ai đã phát minh ra điện thoại?"
      },
      {
        "word": "invention (n)",
        "ipa": "/ˌɪnˈvɛnʃən/",
        "meaning": "sự phát minh",
        "example_en": "The internet is a great invention.",
        "example_vi": "Internet là một sự phát minh tuyệt vời."
      },
      {
        "word": "invitation (n)",
        "ipa": "/ˌɪnvɪˈteɪʃən/",
        "meaning": "lời mời",
        "example_en": "Thanks for the invitation to your party.",
        "example_vi": "Cảm ơn vì lời mời đến bữa tiệc của bạn."
      },
      {
        "word": "invite (v)",
        "ipa": "/ˌɪnˈvaɪt/",
        "meaning": "mời",
        "example_en": "I want to invite you to my birthday party.",
        "example_vi": "Tôi muốn mời bạn đến bữa tiệc sinh nhật của tôi."
      },
      {
        "word": "it (pron)",
        "ipa": "/ɪt/",
        "meaning": "Nó",
        "example_en": "It is a beautiful day.",
        "example_vi": "Nó là một ngày đẹp trời."
      },
      {
        "word": "IT (n)",
        "ipa": "/ˌaɪˈti/",
        "meaning": "Công nghệ thông tin",
        "example_en": "He works in IT.",
        "example_vi": "Anh ấy làm việc trong lĩnh vực Công nghệ thông tin."
      },
      {
        "word": "its (det)",
        "ipa": "/ɪts/",
        "meaning": "của nó",
        "example_en": "The dog wagged its tail.",
        "example_vi": "Con chó vẫy đuôi của nó."
      },
      {
        "word": "itself (pron)",
        "ipa": "/ˌɪtˈsɛlf/",
        "meaning": "chính nó",
        "example_en": "The machine turns itself off.",
        "example_vi": "Chiếc máy tự động tắt chính nó."
      },
      {
        "word": "jazz (n)",
        "ipa": "/ʤæz/",
        "meaning": "nhạc jazz",
        "example_en": "My father enjoys listening to jazz.",
        "example_vi": "Bố tôi thích nghe nhạc jazz."
      },
      {
        "word": "journalist (n)",
        "ipa": "/ˈʤərnəlɪst/",
        "meaning": "nhà báo",
        "example_en": "She works as a journalist for a newspaper.",
        "example_vi": "Cô ấy làm nhà báo cho một tờ báo."
      },
      {
        "word": "jumper (n)",
        "ipa": "/ˈʤəmpər/",
        "meaning": "áo len",
        "example_en": "I am wearing a warm jumper today.",
        "example_vi": "Hôm nay tôi mặc một chiếc áo len ấm áp."
      },
      {
        "word": "just (adv)",
        "ipa": "/ʤɪst/",
        "meaning": "chỉ",
        "example_en": "I just finished my homework.",
        "example_vi": "Tôi chỉ vừa hoàn thành bài tập về nhà của mình."
      },
      {
        "word": "kid(s) (n)",
        "ipa": "/kɪd/",
        "meaning": "đứa trẻ",
        "example_en": "The kids are playing in the park.",
        "example_vi": "Những đứa trẻ đang chơi trong công viên."
      },
      {
        "word": "kilogramme (kg) (n) (Br Eng) (Am Eng: kilogram)",
        "ipa": "/ˈkɪl.ə.ɡræm/",
        "meaning": "kg",
        "example_en": "I bought one kilogramme of apples.",
        "example_vi": "Tôi đã mua một kg táo."
      },
      {
        "word": "kind (adj & n)",
        "ipa": "/kaɪnd/",
        "meaning": "loại / tử tế tốt bụng",
        "example_en": "She is a very kind person.",
        "example_vi": "Cô ấy là một người rất tử tế."
      },
      {
        "word": "king (n)",
        "ipa": "/kɪŋ/",
        "meaning": "nhà vua",
        "example_en": "The king lived in a big castle.",
        "example_vi": "Nhà vua đã sống trong một lâu đài lớn."
      },
      {
        "word": "kiss (n & v)",
        "ipa": "/kɪs/",
        "meaning": "hôn",
        "example_en": "She gave her mother a kiss.",
        "example_vi": "Cô ấy đã hôn mẹ của mình."
      },
      {
        "word": "kit (n)",
        "ipa": "/kɪt/",
        "meaning": "bộ đồ",
        "example_en": "He brought his football kit to the match.",
        "example_vi": "Anh ấy đã mang bộ đồ đá bóng của mình đến trận đấu."
      },
      {
        "word": "kite (n)",
        "ipa": "/kaɪt/",
        "meaning": "diều",
        "example_en": "We flew a kite at the beach.",
        "example_vi": "Chúng tôi đã thả diều ở bãi biển."
      },
      {
        "word": "large (adj)",
        "ipa": "/lɑrʤ/",
        "meaning": "lớn",
        "example_en": "They have a large garden.",
        "example_vi": "Họ có một khu vườn lớn."
      },
      {
        "word": "last (adj & det)",
        "ipa": "/læst/",
        "meaning": "cuối cùng",
        "example_en": "This is the last train tonight.",
        "example_vi": "Đây là chuyến tàu cuối cùng tối nay."
      },
      {
        "word": "latest (adj)",
        "ipa": "/ˈleɪtəst/",
        "meaning": "mới nhất",
        "example_en": "Have you heard the latest news?",
        "example_vi": "Bạn đã nghe tin tức mới nhất chưa?"
      },
      {
        "word": "laugh (v)",
        "ipa": "/læf/",
        "meaning": "cười",
        "example_en": "They laugh a lot when they watch funny movies.",
        "example_vi": "Họ cười rất nhiều khi xem phim hài."
      },
      {
        "word": "least (adv)",
        "ipa": "/list/",
        "meaning": "ít nhất",
        "example_en": "This is the least expensive phone in the shop.",
        "example_vi": "Đây là chiếc điện thoại rẻ nhất trong cửa hàng."
      },
      {
        "word": "leave (v)",
        "ipa": "/liv/",
        "meaning": "rời khỏi",
        "example_en": "We need to leave the house at 8 o'clock.",
        "example_vi": "Chúng ta cần rời khỏi nhà lúc 8 giờ."
      },
      {
        "word": "left (adj, adv & n)",
        "ipa": "/lɛft/",
        "meaning": "bên trái",
        "example_en": "Turn left at the next corner.",
        "example_vi": "Rẽ trái ở góc phố tiếp theo."
      },
      {
        "word": "left-hand (adj)",
        "ipa": "/ˌlɛfˈthænd/",
        "meaning": "bên trái",
        "example_en": "Please open the left-hand door.",
        "example_vi": "Vui lòng mở cánh cửa bên trái."
      },
      {
        "word": "lend (v)",
        "ipa": "/lɛnd/",
        "meaning": "cho mượn",
        "example_en": "Can you lend me your pen, please?",
        "example_vi": "Bạn có thể cho tôi mượn cây bút của bạn được không?"
      },
      {
        "word": "length (n)",
        "ipa": "/lɛŋθ/",
        "meaning": "chiều dài",
        "example_en": "The length of the table is two metres.",
        "example_vi": "Chiều dài của chiếc bàn là hai mét."
      },
      {
        "word": "less (adj, det & pron)",
        "ipa": "/lɛs/",
        "meaning": "ít hơn",
        "example_en": "I want less sugar in my coffee.",
        "example_vi": "Tôi muốn ít đường hơn trong cà phê của mình."
      },
      {
        "word": "let (v)",
        "ipa": "/lɛt/",
        "meaning": "cho phép",
        "example_en": "Please let me help you with your homework.",
        "example_vi": "Hãy để tôi giúp bạn làm bài tập về nhà."
      },
      {
        "word": "level (n)",
        "ipa": "/ˈlɛvəl/",
        "meaning": "mức độ",
        "example_en": "The water level in the river is very high today.",
        "example_vi": "Mức nước trên sông hôm nay rất cao."
      },
      {
        "word": "licence (n)",
        "ipa": "/ˈlaɪsəns/",
        "meaning": "giấy phép",
        "example_en": "You need a driving licence to drive a car.",
        "example_vi": "Bạn cần giấy phép lái xe để lái ô tô."
      },
      {
        "word": "life (n)",
        "ipa": "/laɪf/",
        "meaning": "mạng sống",
        "example_en": "He has a very happy life in the country.",
        "example_vi": "Anh ấy có một cuộc sống rất hạnh phúc ở nông thôn."
      },
      {
        "word": "lift (n)",
        "ipa": "/lɪft/",
        "meaning": "thang máy",
        "example_en": "We can take the lift to the fifth floor.",
        "example_vi": "Chúng ta có thể đi thang máy lên tầng năm."
      },
      {
        "word": "like (adv, prep & v)",
        "ipa": "/laɪk/",
        "meaning": "giống",
        "example_en": "She looks like her mother.",
        "example_vi": "Cô ấy trông giống mẹ của mình."
      },
      {
        "word": "line (n)",
        "ipa": "/laɪn/",
        "meaning": "đường kẻ",
        "example_en": "Please draw a straight line on the paper.",
        "example_vi": "Vui lòng vẽ một đường thẳng trên giấy."
      },
      {
        "word": "list (n)",
        "ipa": "/lɪst/",
        "meaning": "danh sách",
        "example_en": "I need to make a shopping list.",
        "example_vi": "Tôi cần làm một danh sách mua sắm."
      },
      {
        "word": "listen (v)",
        "ipa": "/ˈlɪsən/",
        "meaning": "Nghe",
        "example_en": "I like to listen to music in the evening.",
        "example_vi": "Tôi thích nghe nhạc vào buổi tối."
      },
      {
        "word": "litre (n) (Br Eng) (Am Eng: liter)",
        "ipa": "/ˈliː.tər/",
        "meaning": "lít",
        "example_en": "I drink a litre of water every morning.",
        "example_vi": "Tôi uống một lít nước mỗi sáng."
      },
      {
        "word": "little (adj)",
        "ipa": "/ˈlɪtəl/",
        "meaning": "nhỏ bé",
        "example_en": "They have a little dog in their house.",
        "example_vi": "Họ có một chú chó nhỏ trong nhà."
      },
      {
        "word": "live (v)",
        "ipa": "/lɪv/",
        "meaning": "sống",
        "example_en": "We live in a big city.",
        "example_vi": "Chúng tôi sống ở một thành phố lớn."
      },
      {
        "word": "local (adj)",
        "ipa": "/ˈloʊkəl/",
        "meaning": "địa phương",
        "example_en": "We buy our food from the local market.",
        "example_vi": "Chúng tôi mua thức ăn từ chợ địa phương."
      },
      {
        "word": "long (adj)",
        "ipa": "/lɔŋ/",
        "meaning": "dài",
        "example_en": "She has long black hair.",
        "example_vi": "Cô ấy có mái tóc đen dài."
      },
      {
        "word": "look (v)",
        "ipa": "/lʊk/",
        "meaning": "Nhìn",
        "example_en": "Look at that beautiful bird!",
        "example_vi": "Hãy nhìn con chim xinh đẹp kia!"
      },
      {
        "word": "look after (phr v)",
        "ipa": "/lʊk ˈæftər/",
        "meaning": "chăm sóc",
        "example_en": "Can you look after my cat this weekend?",
        "example_vi": "Bạn có thể chăm sóc con mèo của tôi cuối tuần này không?"
      },
      {
        "word": "look at (phr v)",
        "ipa": "/lʊk æt/",
        "meaning": "nhìn vào",
        "example_en": "Please look at the board and read the words.",
        "example_vi": "Vui lòng nhìn lên bảng và đọc các từ."
      },
      {
        "word": "look for (phr v)",
        "ipa": "/lʊk fər/",
        "meaning": "tìm kiếm",
        "example_en": "I am looking for my keys.",
        "example_vi": "Tôi đang tìm kiếm chìa khóa của mình."
      },
      {
        "word": "look out (phr v)",
        "ipa": "/lʊk aʊt/",
        "meaning": "nhìn ra ngoài",
        "example_en": "Look out of the window, it is raining.",
        "example_vi": "Nhìn ra ngoài cửa sổ kìa, trời đang mưa."
      },
      {
        "word": "lorry (n)",
        "ipa": "/ˈlɔri/",
        "meaning": "xe tải",
        "example_en": "The big lorry is carrying lots of boxes.",
        "example_vi": "Chiếc xe tải lớn đang chở rất nhiều hộp."
      },
      {
        "word": "lose (v)",
        "ipa": "/luz/",
        "meaning": "thua",
        "example_en": "I don't want to lose my phone.",
        "example_vi": "Tôi không muốn làm mất điện thoại của mình."
      },
      {
        "word": "lost (adj)",
        "ipa": "/lɔst/",
        "meaning": "mất",
        "example_en": "We are lost, let's ask for directions.",
        "example_vi": "Chúng ta bị lạc rồi, hãy hỏi đường đi."
      },
      {
        "word": "lots / a lot (n)",
        "ipa": "/lɑts/",
        "meaning": "rất nhiều",
        "example_en": "I have a lot of books in my room.",
        "example_vi": "Tôi có rất nhiều sách trong phòng."
      },
      {
        "word": "loud (adj)",
        "ipa": "/laʊd/",
        "meaning": "ồn ào",
        "example_en": "The music is too loud, please turn it down.",
        "example_vi": "Nhạc quá ồn, vui lòng vặn nhỏ lại."
      },
      {
        "word": "love (n & v)",
        "ipa": "/ləv/",
        "meaning": "yêu",
        "example_en": "I love my family very much.",
        "example_vi": "Tôi rất yêu gia đình mình."
      },
      {
        "word": "lovely (adj)",
        "ipa": "/ˈləvli/",
        "meaning": "đáng yêu",
        "example_en": "What a lovely dress you are wearing!",
        "example_vi": "Bạn đang mặc một chiếc váy thật đáng yêu!"
      },
      {
        "word": "low (adj)",
        "ipa": "/loʊ/",
        "meaning": "thấp",
        "example_en": "The wall around the garden is very low.",
        "example_vi": "Bức tường quanh khu vườn rất thấp."
      },
      {
        "word": "luck (n)",
        "ipa": "/lək/",
        "meaning": "may mắn",
        "example_en": "Good luck with your English test!",
        "example_vi": "Chúc may mắn với bài kiểm tra tiếng Anh của bạn!"
      },
      {
        "word": "luckily (adv)",
        "ipa": "/ˈləkəli/",
        "meaning": "may mắn thay",
        "example_en": "Luckily, the weather was nice for our trip.",
        "example_vi": "May mắn thay, thời tiết rất đẹp cho chuyến đi của chúng tôi."
      },
      {
        "word": "lunchtime (n)",
        "ipa": "/ˈlənʧˌtaɪm/",
        "meaning": "giờ ăn trưa",
        "example_en": "I usually meet my friends at lunchtime.",
        "example_vi": "Tôi thường gặp bạn bè vào giờ ăn trưa."
      },
      {
        "word": "magazine (n)",
        "ipa": "/ˈmægəˌzin/",
        "meaning": "tạp chí",
        "example_en": "She likes reading a fashion magazine.",
        "example_vi": "Cô ấy thích đọc một tạp chí thời trang."
      },
      {
        "word": "mail (n)",
        "ipa": "/meɪl/",
        "meaning": "thư",
        "example_en": "I need to check my mail today.",
        "example_vi": "Tôi cần kiểm tra thư của mình hôm nay."
      },
      {
        "word": "make (v)",
        "ipa": "/meɪk/",
        "meaning": "làm",
        "example_en": "My mother makes a delicious cake for my birthday.",
        "example_vi": "Mẹ tôi làm một chiếc bánh rất ngon cho sinh nhật của tôi."
      },
      {
        "word": "make-up (n)",
        "ipa": "/ˈmeɪˌkəp/",
        "meaning": "trang điểm",
        "example_en": "She wears a little make-up to the party.",
        "example_vi": "Cô ấy trang điểm một chút khi đến bữa tiệc."
      },
      {
        "word": "man (n)",
        "ipa": "/mæn/",
        "meaning": "người đàn ông",
        "example_en": "That tall man is my uncle.",
        "example_vi": "Người đàn ông cao lớn đó là chú của tôi."
      },
      {
        "word": "manager (n)",
        "ipa": "/ˈmænɪʤər/",
        "meaning": "giám đốc",
        "example_en": "He is the manager of a big restaurant.",
        "example_vi": "Anh ấy là quản lý của một nhà hàng lớn."
      },
      {
        "word": "mango (n)",
        "ipa": "/ˈmæŋgoʊ/",
        "meaning": "quả xoài",
        "example_en": "I love eating sweet mango in the summer.",
        "example_vi": "Tôi thích ăn quả xoài ngọt vào mùa hè."
      },
      {
        "word": "many (det & pron)",
        "ipa": "/ˈmɛni/",
        "meaning": "nhiều",
        "example_en": "How many students are there in your class?",
        "example_vi": "Có bao nhiêu học sinh trong lớp của bạn?"
      },
      {
        "word": "market (n)",
        "ipa": "/ˈmɑrkɪt/",
        "meaning": "chợ",
        "example_en": "We buy fresh vegetables at the market.",
        "example_vi": "Chúng tôi mua rau tươi ở chợ."
      },
      {
        "word": "married (adj)",
        "ipa": "/ˈmɛrid/",
        "meaning": "đã cưới",
        "example_en": "My brother is married and has two children.",
        "example_vi": "Anh trai tôi đã kết hôn và có hai người con."
      },
      {
        "word": "matter (n & v)",
        "ipa": "/ˈmætər/",
        "meaning": "vấn đề",
        "example_en": "What is the matter with you?",
        "example_vi": "Có vấn đề gì với bạn vậy?"
      },
      {
        "word": "may (mv)",
        "ipa": "/meɪ/",
        "meaning": "có thể",
        "example_en": "You may go out to play now.",
        "example_vi": "Bây giờ bạn có thể ra ngoài chơi."
      },
      {
        "word": "maybe (adv)",
        "ipa": "/ˈmeɪbi/",
        "meaning": "Có lẽ",
        "example_en": "Maybe we will go to the beach tomorrow.",
        "example_vi": "Có lẽ ngày mai chúng ta sẽ đi biển."
      },
      {
        "word": "me (pron)",
        "ipa": "/mi/",
        "meaning": "Tôi",
        "example_en": "Can you give me a glass of water?",
        "example_vi": "Bạn có thể cho tôi một ly nước không?"
      },
      {
        "word": "mean (v)",
        "ipa": "/min/",
        "meaning": "nghĩa là",
        "example_en": "What does this word mean?",
        "example_vi": "Từ này có nghĩa là gì?"
      },
      {
        "word": "meet (v)",
        "ipa": "/mit/",
        "meaning": "gặp",
        "example_en": "Nice to meet you!",
        "example_vi": "Rất vui được gặp bạn!"
      },
      {
        "word": "member (n)",
        "ipa": "/ˈmɛmbər/",
        "meaning": "thành viên",
        "example_en": "He is a member of the football club.",
        "example_vi": "Anh ấy là một thành viên của câu lạc bộ bóng đá."
      },
      {
        "word": "metal (n & adj)",
        "ipa": "/ˈmɛtəl/",
        "meaning": "kim loại",
        "example_en": "This key is made of metal.",
        "example_vi": "Chìa khóa này được làm bằng kim loại."
      },
      {
        "word": "metre (n) (Br Eng) (Am Eng: meter)",
        "ipa": "/ˈmitər/",
        "meaning": "mét",
        "example_en": "The swimming pool is 50 metres long.",
        "example_vi": "Hồ bơi dài 50 mét."
      },
      {
        "word": "middle (n)",
        "ipa": "/ˈmɪdəl/",
        "meaning": "ở giữa",
        "example_en": "There is a big table in the middle of the room.",
        "example_vi": "Có một chiếc bàn lớn ở giữa phòng."
      },
      {
        "word": "might (mv)",
        "ipa": "/maɪt/",
        "meaning": "có thể",
        "example_en": "It might rain later, so take an umbrella.",
        "example_vi": "Lát nữa trời có thể mưa, vì vậy hãy mang theo ô."
      },
      {
        "word": "mile (n)",
        "ipa": "/maɪl/",
        "meaning": "dặm",
        "example_en": "The town is about one mile away from here.",
        "example_vi": "Thị trấn cách đây khoảng một dặm."
      },
      {
        "word": "million (n)",
        "ipa": "/ˈmɪljən/",
        "meaning": "triệu",
        "example_en": "Over a million people live in this city.",
        "example_vi": "Hơn một triệu người sống ở thành phố này."
      },
      {
        "word": "mind (v)",
        "ipa": "/maɪnd/",
        "meaning": "phiền / bận tâm",
        "example_en": "Do you mind if I open the window?",
        "example_vi": "Bạn có phiền nếu tôi mở cửa sổ không?"
      },
      {
        "word": "mine (pron)",
        "ipa": "/maɪn/",
        "meaning": "của tôi",
        "example_en": "That book is not yours, it is mine.",
        "example_vi": "Cuốn sách đó không phải của bạn, nó là của tôi."
      },
      {
        "word": "minus (prep)",
        "ipa": "/ˈmaɪnəs/",
        "meaning": "trừ đi",
        "example_en": "Ten minus three is seven.",
        "example_vi": "Mười trừ đi ba là bảy."
      },
      {
        "word": "missing (adj)",
        "ipa": "/ˈmɪsɪŋ/",
        "meaning": "mất tích",
        "example_en": "One of my socks is missing.",
        "example_vi": "Một trong những chiếc tất của tôi bị thiếu."
      },
      {
        "word": "mix (v)",
        "ipa": "/mɪks/",
        "meaning": "trộn",
        "example_en": "Mix the butter and sugar together in a bowl.",
        "example_vi": "Trộn bơ và đường cùng nhau trong một cái bát."
      },
      {
        "word": "model (n)",
        "ipa": "/ˈmɑdəl/",
        "meaning": "người mẫu",
        "example_en": "She works as a fashion model in Paris.",
        "example_vi": "Cô ấy làm người mẫu thời trang ở Paris."
      },
      {
        "word": "modern (adj)",
        "ipa": "/ˈmɑdərn/",
        "meaning": "hiện đại",
        "example_en": "They live in a modern apartment in the city center.",
        "example_vi": "Họ sống trong một căn hộ hiện đại ở trung tâm thành phố."
      },
      {
        "word": "mom (n) (Am Eng)",
        "ipa": "/mɑm/",
        "meaning": "mẹ",
        "example_en": "My mom cooks dinner every evening.",
        "example_vi": "Mẹ tôi nấu bữa tối mỗi tối."
      },
      {
        "word": "money (n)",
        "ipa": "/ˈməni/",
        "meaning": "tiền bạc",
        "example_en": "I don't have enough money to buy this shirt.",
        "example_vi": "Tôi không có đủ tiền để mua chiếc áo này."
      },
      {
        "word": "monthly (adj & adv)",
        "ipa": "/ˈmənθli/",
        "meaning": "hàng tháng",
        "example_en": "We have a monthly meeting at work.",
        "example_vi": "Chúng tôi có một cuộc họp hàng tháng tại nơi làm việc."
      },
      {
        "word": "more (adj, adv, det & pron)",
        "ipa": "/mɔr/",
        "meaning": "hơn",
        "example_en": "Would you like some more tea?",
        "example_vi": "Bạn có muốn thêm chút trà không?"
      },
      {
        "word": "most (adj, adv, det & pron)",
        "ipa": "/moʊst/",
        "meaning": "hầu hết",
        "example_en": "Most of my friends like playing football.",
        "example_vi": "Hầu hết bạn bè của tôi thích chơi bóng đá."
      },
      {
        "word": "mother (n)",
        "ipa": "/ˈməðər/",
        "meaning": "mẹ",
        "example_en": "Her mother is a doctor.",
        "example_vi": "Mẹ của cô ấy là một bác sĩ."
      },
      {
        "word": "move (v)",
        "ipa": "/muv/",
        "meaning": "di chuyển",
        "example_en": "Please move your car, it is blocking the road.",
        "example_vi": "Vui lòng di chuyển xe của bạn, nó đang chắn đường."
      },
      {
        "word": "Mr (n)",
        "ipa": "/ˈmɪstər/",
        "meaning": "Ông",
        "example_en": "Mr Smith is our new English teacher.",
        "example_vi": "Ông Smith là giáo viên tiếng Anh mới của chúng tôi."
      },
      {
        "word": "Mrs (n)",
        "ipa": "/ˈmɪsɪz/",
        "meaning": "Bà",
        "example_en": "Mrs Brown lives next door to us.",
        "example_vi": "Bà Brown sống ở nhà bên cạnh chúng tôi."
      },
      {
        "word": "Ms (n)",
        "ipa": "/mɪz/",
        "meaning": "Cô / Bà (danh xưng phụ nữ)",
        "example_en": "Ms Jones will be your guide today.",
        "example_vi": "Cô Jones sẽ là hướng dẫn viên của bạn hôm nay."
      },
      {
        "word": "much (adj, adv, det & pron)",
        "ipa": "/məʧ/",
        "meaning": "nhiều",
        "example_en": "I don't have much time to play games.",
        "example_vi": "Tôi không có nhiều thời gian để chơi game."
      },
      {
        "word": "mug (n)",
        "ipa": "/məg/",
        "meaning": "cốc",
        "example_en": "I drink coffee from my favorite blue mug.",
        "example_vi": "Tôi uống cà phê từ chiếc cốc màu xanh yêu thích của mình."
      },
      {
        "word": "mum (n) (Br Eng)",
        "ipa": "/məm/",
        "meaning": "mẹ",
        "example_en": "My mum is very kind and helpful.",
        "example_vi": "Mẹ tôi rất tốt bụng và hay giúp đỡ."
      },
      {
        "word": "musical (adj)",
        "ipa": "/mˈjuzɪkəl/",
        "meaning": "âm nhạc",
        "example_en": "She plays a musical instrument very well.",
        "example_vi": "Cô ấy chơi một nhạc cụ rất giỏi."
      },
      {
        "word": "musician (n)",
        "ipa": "/mjuˈzɪʃən/",
        "meaning": "nhạc sĩ",
        "example_en": "He is a famous musician in his country.",
        "example_vi": "Anh ấy là một nhạc sĩ nổi tiếng ở đất nước của mình."
      },
      {
        "word": "must (mv)",
        "ipa": "/məst/",
        "meaning": "phải",
        "example_en": "You must wear a helmet when you ride a bike.",
        "example_vi": "Bạn phải đội mũ bảo hiểm khi đi xe đạp."
      },
      {
        "word": "my (det)",
        "ipa": "/maɪ/",
        "meaning": "Của tôi",
        "example_en": "This is my new bicycle.",
        "example_vi": "Đây là chiếc xe đạp mới của tôi."
      },
      {
        "word": "myself (pron)",
        "ipa": "/ˌmaɪˈsɛlf/",
        "meaning": "bản thân tôi",
        "example_en": "I made this cake by myself.",
        "example_vi": "Tự bản thân tôi đã làm chiếc bánh này."
      },
      {
        "word": "name (n)",
        "ipa": "/neɪm/",
        "meaning": "tên",
        "example_en": "My name is Tom, what is yours?",
        "example_vi": "Tên tôi là Tom, tên của bạn là gì?"
      },
      {
        "word": "national (adj)",
        "ipa": "/ˈnæʃənəl/",
        "meaning": "quốc gia",
        "example_en": "What is the national sport of your country?",
        "example_vi": "Môn thể thao quốc gia của nước bạn là gì?"
      },
      {
        "word": "nationality (n)",
        "ipa": "/ˌnæʃəˈnælɪti/",
        "meaning": "quốc tịch",
        "example_en": "She has dual nationality, French and American.",
        "example_vi": "Cô ấy có hai quốc tịch, Pháp và Mỹ."
      },
      {
        "word": "natural (not artificial) (adj)",
        "ipa": "/ˈnæʧərəl/",
        "meaning": "tự nhiên",
        "example_en": "This juice is made from natural ingredients.",
        "example_vi": "Nước ép này được làm từ các thành phần tự nhiên."
      },
      {
        "word": "near (adv & prep)",
        "ipa": "/nɪr/",
        "meaning": "gần",
        "example_en": "The bus stop is near my house.",
        "example_vi": "Trạm xe buýt ở gần nhà tôi."
      },
      {
        "word": "nearly (adv)",
        "ipa": "/ˈnɪrli/",
        "meaning": "gần như",
        "example_en": "It is nearly midnight, we should go to bed.",
        "example_vi": "Gần nửa đêm rồi, chúng ta nên đi ngủ thôi."
      },
      {
        "word": "need (v)",
        "ipa": "/nid/",
        "meaning": "nhu cầu",
        "example_en": "I need to buy some eggs for breakfast.",
        "example_vi": "Tôi cần mua một ít trứng cho bữa sáng."
      },
      {
        "word": "neighbour (n)",
        "ipa": "/ˈneɪbər/",
        "meaning": "hàng xóm",
        "example_en": "Our neighbor has a very noisy dog.",
        "example_vi": "Hàng xóm của chúng tôi có một con chó rất ồn ào."
      },
      {
        "word": "net (n)",
        "ipa": "/nɛt/",
        "meaning": "mạng lưới",
        "example_en": "The fisherman caught a lot of fish in his net.",
        "example_vi": "Người đánh cá bắt được rất nhiều cá trong lưới của mình."
      },
      {
        "word": "new (adj)",
        "ipa": "/nu/",
        "meaning": "mới",
        "example_en": "I want to buy a new phone.",
        "example_vi": "Tôi muốn mua một chiếc điện thoại mới."
      },
      {
        "word": "news (n)",
        "ipa": "/nuz/",
        "meaning": "tin tức",
        "example_en": "I watch the news on TV every evening.",
        "example_vi": "Tôi xem tin tức trên tivi mỗi tối."
      },
      {
        "word": "newspaper (n)",
        "ipa": "/ˈnuzˌpeɪpər/",
        "meaning": "báo",
        "example_en": "My grandfather reads the newspaper every morning.",
        "example_vi": "Ông tôi đọc báo mỗi sáng."
      },
      {
        "word": "no (adv, det & pron)",
        "ipa": "/noʊ/",
        "meaning": "KHÔNG",
        "example_en": "No, I do not like eating fish.",
        "example_vi": "Không, tôi không thích ăn cá."
      },
      {
        "word": "nobody (pron)",
        "ipa": "/ˈnoʊˌbɑˌdi/",
        "meaning": "không ai",
        "example_en": "I knocked on the door, but nobody answered.",
        "example_vi": "Tôi đã gõ cửa, nhưng không có ai trả lời."
      },
      {
        "word": "noise (n)",
        "ipa": "/nɔɪz/",
        "meaning": "tiếng ồn",
        "example_en": "The noise from the street is very loud.",
        "example_vi": "Tiếng ồn từ ngoài đường rất lớn."
      },
      {
        "word": "noisy (adj)",
        "ipa": "/ˈnɔɪzi/",
        "meaning": "ồn ào",
        "example_en": "This restaurant is too noisy.",
        "example_vi": "Nhà hàng này quá ồn ào."
      },
      {
        "word": "no one (pron)",
        "ipa": "/noʊ wən/",
        "meaning": "không ai",
        "example_en": "No one is in the classroom.",
        "example_vi": "Không có ai trong phòng học."
      },
      {
        "word": "normal (adj)",
        "ipa": "/ˈnɔrməl/",
        "meaning": "Bình thường",
        "example_en": "It is normal to feel tired after a long trip.",
        "example_vi": "Cảm thấy mệt mỏi sau một chuyến đi dài là chuyện bình thường."
      },
      {
        "word": "not (adv)",
        "ipa": "/nɑt/",
        "meaning": "không",
        "example_en": "I do not like playing football.",
        "example_vi": "Tôi không thích chơi bóng đá."
      },
      {
        "word": "notebook (n)",
        "ipa": "/ˈnoʊtˌbʊk/",
        "meaning": "sổ tay",
        "example_en": "Please write your name in the notebook.",
        "example_vi": "Vui lòng viết tên của bạn vào sổ tay."
      },
      {
        "word": "nothing (pron)",
        "ipa": "/ˈnəθɪŋ/",
        "meaning": "Không có gì",
        "example_en": "There is nothing in the fridge.",
        "example_vi": "Không có gì trong tủ lạnh."
      },
      {
        "word": "number (n)",
        "ipa": "/ˈnəmbər/",
        "meaning": "con số",
        "example_en": "What is your phone number?",
        "example_vi": "Số điện thoại của bạn là gì?"
      },
      {
        "word": "of (prep)",
        "ipa": "/əv/",
        "meaning": "của",
        "example_en": "I want a cup of coffee.",
        "example_vi": "Tôi muốn một tách cà phê."
      },
      {
        "word": "off (adv)",
        "ipa": "/ɔf/",
        "meaning": "tắt",
        "example_en": "Please turn off the lights when you leave.",
        "example_vi": "Vui lòng tắt đèn khi bạn rời đi."
      },
      {
        "word": "offer (n & v)",
        "ipa": "/ˈɔfər/",
        "meaning": "lời đề nghị",
        "example_en": "He offered me a job in his company.",
        "example_vi": "Anh ấy đã đưa ra lời đề nghị công việc cho tôi."
      },
      {
        "word": "oh (exclam)",
        "ipa": "/oʊ/",
        "meaning": "Ồ",
        "example_en": "Oh, I forgot my keys!",
        "example_vi": "Ồ, tôi quên chìa khóa rồi!"
      },
      {
        "word": "oh dear! (exclam)",
        "ipa": "/oʊ dɪr!/",
        "meaning": "ôi trời ơi!",
        "example_en": "Oh dear! I broke the glass.",
        "example_vi": "Ôi trời ơi! Tôi làm vỡ cái ly rồi."
      },
      {
        "word": "oil (n)",
        "ipa": "/ɔɪl/",
        "meaning": "dầu",
        "example_en": "We need some oil to cook the fish.",
        "example_vi": "Chúng ta cần một ít dầu để nấu cá."
      },
      {
        "word": "OK/okay (exclam)",
        "ipa": "/ˈoʊˈkeɪ/",
        "meaning": "ĐƯỢC RỒI",
        "example_en": "Okay, I will help you with your homework.",
        "example_vi": "Được rồi, tôi sẽ giúp bạn làm bài tập về nhà."
      },
      {
        "word": "old (adj)",
        "ipa": "/oʊld/",
        "meaning": "cũ",
        "example_en": "This car is very old.",
        "example_vi": "Chiếc xe này rất cũ."
      },
      {
        "word": "Olympic (adj)",
        "ipa": "/oʊˈlɪmpɪk/",
        "meaning": "Olympic",
        "example_en": "She won a gold medal in the Olympic Games.",
        "example_vi": "Cô ấy đã giành huy chương vàng tại Thế vận hội Olympic."
      },
      {
        "word": "on (prep & adv)",
        "ipa": "/ɔn/",
        "meaning": "TRÊN",
        "example_en": "The book is on the table.",
        "example_vi": "Cuốn sách ở trên bàn."
      },
      {
        "word": "once (adv)",
        "ipa": "/wəns/",
        "meaning": "một lần",
        "example_en": "I visit my grandparents once a week.",
        "example_vi": "Tôi đến thăm ông bà mỗi tuần một lần."
      },
      {
        "word": "one (det & pron)",
        "ipa": "/wən/",
        "meaning": "một",
        "example_en": "I have one brother and two sisters.",
        "example_vi": "Tôi có một người anh trai và hai người chị gái."
      },
      {
        "word": "only (adv & adj)",
        "ipa": "/ˈoʊnli/",
        "meaning": "chỉ một",
        "example_en": "She is my only sister.",
        "example_vi": "Cô ấy là người chị gái duy nhất của tôi."
      },
      {
        "word": "open (adj & v)",
        "ipa": "/ˈoʊpən/",
        "meaning": "mở",
        "example_en": "Can you open the window, please?",
        "example_vi": "Bạn có thể làm ơn mở cửa sổ được không?"
      },
      {
        "word": "opera (n)",
        "ipa": "/ˈɑprə/",
        "meaning": "opera",
        "example_en": "We went to the theater to watch an opera.",
        "example_vi": "Chúng tôi đã đến nhà hát để xem một vở opera."
      },
      {
        "word": "opinion (n)",
        "ipa": "/əˈpɪnjən/",
        "meaning": "ý kiến",
        "example_en": "In my opinion, this book is very interesting.",
        "example_vi": "Theo ý kiến của tôi, cuốn sách này rất thú vị."
      },
      {
        "word": "opposite (prep)",
        "ipa": "/ˈɑpəzɪt/",
        "meaning": "đối diện",
        "example_en": "The bank is opposite the supermarket.",
        "example_vi": "Ngân hàng nằm đối diện siêu thị."
      },
      {
        "word": "or (conj)",
        "ipa": "/ər/",
        "meaning": "hoặc",
        "example_en": "Do you want tea or coffee?",
        "example_vi": "Bạn muốn trà hoặc cà phê?"
      },
      {
        "word": "order (n & v)",
        "ipa": "/ˈɔrdər/",
        "meaning": "đặt hàng",
        "example_en": "Are you ready to order your food?",
        "example_vi": "Bạn đã sẵn sàng để đặt hàng thức ăn của mình chưa?"
      },
      {
        "word": "other (det & pron)",
        "ipa": "/ˈəðər/",
        "meaning": "khác",
        "example_en": "I don't like this shirt. Can I see the other one?",
        "example_vi": "Tôi không thích chiếc áo này. Tôi có thể xem cái khác được không?"
      },
      {
        "word": "our (det)",
        "ipa": "/ɑr/",
        "meaning": "của chúng tôi",
        "example_en": "This is our new house.",
        "example_vi": "Đây là ngôi nhà mới của chúng tôi."
      },
      {
        "word": "ours (pron)",
        "ipa": "/ɑrz/",
        "meaning": "của chúng tôi",
        "example_en": "That blue car is ours.",
        "example_vi": "Chiếc xe màu xanh đó là của chúng tôi."
      },
      {
        "word": "ourselves (pron)",
        "ipa": "/ɑrˈsɛlvz/",
        "meaning": "chính chúng ta",
        "example_en": "We cooked the dinner ourselves.",
        "example_vi": "Chính chúng ta đã tự nấu bữa tối."
      },
      {
        "word": "out (adv)",
        "ipa": "/aʊt/",
        "meaning": "ngoài",
        "example_en": "He went out to buy some milk.",
        "example_vi": "Anh ấy đã ra ngoài để mua sữa."
      },
      {
        "word": "outdoor (adj)",
        "ipa": "/ˈaʊtˌdɔr/",
        "meaning": "ngoài trời",
        "example_en": "I like outdoor activities like hiking and cycling.",
        "example_vi": "Tôi thích các hoạt động ngoài trời như đi bộ đường dài và đạp xe."
      },
      {
        "word": "outdoors (adv)",
        "ipa": "/ˈaʊtˈdɔrz/",
        "meaning": "ngoài trời",
        "example_en": "The children are playing outdoors.",
        "example_vi": "Bọn trẻ đang chơi ngoài trời."
      },
      {
        "word": "out of (prep)",
        "ipa": "/aʊt əv/",
        "meaning": "ra khỏi",
        "example_en": "She took her phone out of her bag.",
        "example_vi": "Cô ấy lấy điện thoại ra khỏi túi."
      },
      {
        "word": "outside (prep & adv)",
        "ipa": "/ˈaʊtˈsaɪd/",
        "meaning": "ngoài",
        "example_en": "It is raining outside.",
        "example_vi": "Bên ngoài trời đang mưa."
      },
      {
        "word": "over (prep & adv)",
        "ipa": "/ˈoʊvər/",
        "meaning": "qua",
        "example_en": "The plane is flying over the mountains.",
        "example_vi": "Máy bay đang bay qua những ngọn núi."
      },
      {
        "word": "own (adj)",
        "ipa": "/oʊn/",
        "meaning": "sở hữu",
        "example_en": "She has her own room.",
        "example_vi": "Cô ấy sở hữu phòng riêng của mình."
      },
      {
        "word": "pack (v)",
        "ipa": "/pæk/",
        "meaning": "đóng gói",
        "example_en": "I need to pack my bag for the trip.",
        "example_vi": "Tôi cần đóng gói hành lý cho chuyến đi."
      },
      {
        "word": "painter (n)",
        "ipa": "/ˈpeɪnər/",
        "meaning": "họa sĩ",
        "example_en": "My uncle is a famous painter.",
        "example_vi": "Chú của tôi là một họa sĩ nổi tiếng."
      },
      {
        "word": "painting (n)",
        "ipa": "/ˈpeɪnɪŋ/",
        "meaning": "bức vẽ",
        "example_en": "There is a beautiful painting on the wall.",
        "example_vi": "Có một bức vẽ tuyệt đẹp trên tường."
      },
      {
        "word": "pale (adj)",
        "ipa": "/peɪl/",
        "meaning": "tái nhợt",
        "example_en": "You look very pale. Are you sick?",
        "example_vi": "Trông bạn rất tái nhợt. Bạn có bị ốm không?"
      },
      {
        "word": "pair (n)",
        "ipa": "/pɛr/",
        "meaning": "đôi",
        "example_en": "I bought a new pair of shoes yesterday.",
        "example_vi": "Tôi đã mua một đôi giày mới vào ngày hôm qua."
      },
      {
        "word": "paragraph (n)",
        "ipa": "/ˈpɛrəˌgræf/",
        "meaning": "đoạn văn",
        "example_en": "Please read the first paragraph of the text.",
        "example_vi": "Vui lòng đọc đoạn văn đầu tiên của văn bản."
      },
      {
        "word": "pardon (exclam)",
        "ipa": "/ˈpɑrdən/",
        "meaning": "xin thứ lỗi",
        "example_en": "Pardon? Could you say that again?",
        "example_vi": "Xin thứ lỗi? Bạn có thể nói lại điều đó được không?"
      },
      {
        "word": "parent (n)",
        "ipa": "/ˈpɛrənt/",
        "meaning": "cha mẹ",
        "example_en": "I live with my parents in London.",
        "example_vi": "Tôi sống với cha mẹ ở London."
      },
      {
        "word": "parking lot (n) (Am Eng) (Br Eng: car park)",
        "ipa": "/ˈpɑrkɪŋ lɔt/",
        "meaning": "bãi đậu xe",
        "example_en": "You can park your car in the parking lot.",
        "example_vi": "Bạn có thể đậu xe trong bãi đậu xe."
      },
      {
        "word": "parrot (n)",
        "ipa": "/ˈpɛrət/",
        "meaning": "con vẹt",
        "example_en": "My friend has a very smart parrot.",
        "example_vi": "Bạn tôi có một con vẹt rất thông minh."
      },
      {
        "word": "part (n)",
        "ipa": "/pɑrt/",
        "meaning": "phần",
        "example_en": "This is the most important part of the book.",
        "example_vi": "Đây là phần quan trọng nhất của cuốn sách."
      },
      {
        "word": "partner (n)",
        "ipa": "/ˈpɑrtnər/",
        "meaning": "cộng sự",
        "example_en": "Talk to your partner about the lesson.",
        "example_vi": "Hãy nói chuyện với cộng sự của bạn về bài học."
      },
      {
        "word": "pay (v)",
        "ipa": "/peɪ/",
        "meaning": "chi trả",
        "example_en": "How would you like to pay, by cash or credit card?",
        "example_vi": "Bạn muốn chi trả bằng tiền mặt hay thẻ tín dụng?"
      },
      {
        "word": "pence (n)",
        "ipa": "/pɛns/",
        "meaning": "đồng xu",
        "example_en": "The apple costs fifty pence.",
        "example_vi": "Quả táo có giá năm mươi đồng xu."
      },
      {
        "word": "penfriend (n)",
        "ipa": "/ˈpen.frend/",
        "meaning": "bạn qua thư",
        "example_en": "I write letters to my penfriend in Japan.",
        "example_vi": "Tôi viết thư cho bạn qua thư của tôi ở Nhật Bản."
      },
      {
        "word": "penny (n)",
        "ipa": "/ˈpɛni/",
        "meaning": "đồng xu",
        "example_en": "This candy costs only one penny.",
        "example_vi": "Viên kẹo này chỉ có giá một đồng xu."
      },
      {
        "word": "people (n pl)",
        "ipa": "/ˈpipəl/",
        "meaning": "mọi người",
        "example_en": "There are many people in the park today.",
        "example_vi": "Hôm nay có rất nhiều mọi người trong công viên."
      },
      {
        "word": "per (prep)",
        "ipa": "/pər/",
        "meaning": "mỗi",
        "example_en": "The speed limit is 60 miles per hour.",
        "example_vi": "Giới hạn tốc độ là 60 dặm mỗi giờ."
      },
      {
        "word": "perfect (adj)",
        "ipa": "/ˈpərˌfɪkt/",
        "meaning": "hoàn hảo",
        "example_en": "The weather is perfect for a picnic.",
        "example_vi": "Thời tiết hoàn hảo cho một chuyến dã ngoại."
      },
      {
        "word": "perform (entertainment) (v)",
        "ipa": "/pərˈfɔrm/",
        "meaning": "trình diễn",
        "example_en": "The band will perform tonight at 8 PM.",
        "example_vi": "Ban nhạc sẽ trình diễn tối nay lúc 8 giờ."
      },
      {
        "word": "performance (entertainment) (n)",
        "ipa": "/pərˈfɔrməns/",
        "meaning": "hiệu suất",
        "example_en": "The dancers gave a great performance.",
        "example_vi": "Các vũ công đã mang đến một màn trình diễn (hiệu suất) tuyệt vời."
      },
      {
        "word": "perfume (n)",
        "ipa": "/pərfˈjum/",
        "meaning": "nước hoa",
        "example_en": "She wears a very nice perfume.",
        "example_vi": "Cô ấy dùng một loại nước hoa rất thơm."
      },
      {
        "word": "perhaps (adv)",
        "ipa": "/pərˈhæps/",
        "meaning": "có lẽ",
        "example_en": "Perhaps we will go to the beach tomorrow.",
        "example_vi": "Có lẽ ngày mai chúng ta sẽ đi biển."
      },
      {
        "word": "person (n)",
        "ipa": "/ˈpərsən/",
        "meaning": "người",
        "example_en": "He is a very kind person.",
        "example_vi": "Anh ấy là một người rất tốt bụng."
      },
      {
        "word": "photo(graph) (n)",
        "ipa": "/ˈfoʊˌtoʊ/",
        "meaning": "bức ảnh",
        "example_en": "Can I take a photo of you?",
        "example_vi": "Tôi có thể chụp một bức ảnh của bạn không?"
      },
      {
        "word": "photographer (n)",
        "ipa": "/fəˈtɑgrəfər/",
        "meaning": "nhiếp ảnh gia",
        "example_en": "My sister wants to be a fashion photographer.",
        "example_vi": "Chị gái tôi muốn trở thành một nhiếp ảnh gia thời trang."
      },
      {
        "word": "pick up (phr v)",
        "ipa": "/pɪk əp/",
        "meaning": "nhặt lên",
        "example_en": "Could you pick up the pencil for me?",
        "example_vi": "Bạn có thể nhặt bút chì lên giúp tôi được không?"
      },
      {
        "word": "piece (n)",
        "ipa": "/pis/",
        "meaning": "cái",
        "example_en": "Would you like a piece of cake?",
        "example_vi": "Bạn có muốn một cái (miếng) bánh ngọt không?"
      },
      {
        "word": "pink (adj)",
        "ipa": "/pɪŋk/",
        "meaning": "hồng",
        "example_en": "My daughter loves her pink dress.",
        "example_vi": "Con gái tôi rất thích chiếc váy màu hồng của nó."
      },
      {
        "word": "pity (n)",
        "ipa": "/ˈpɪti/",
        "meaning": "điều đáng tiếc (What a pity)",
        "example_en": "What a pity that you cannot come to the party!",
        "example_vi": "Thật là một điều đáng tiếc khi bạn không thể đến dự bữa tiệc!"
      },
      {
        "word": "place (n)",
        "ipa": "/pleɪs/",
        "meaning": "địa điểm",
        "example_en": "This is a great place to relax.",
        "example_vi": "Đây là một địa điểm tuyệt vời để thư giãn."
      },
      {
        "word": "plan (n & v)",
        "ipa": "/plæn/",
        "meaning": "kế hoạch",
        "example_en": "What is your plan for the weekend?",
        "example_vi": "Kế hoạch của bạn cho cuối tuần là gì?"
      },
      {
        "word": "plastic (n & adj)",
        "ipa": "/ˈplæstɪk/",
        "meaning": "nhựa",
        "example_en": "You should not use plastic bags.",
        "example_vi": "Bạn không nên sử dụng túi nhựa."
      },
      {
        "word": "playground (n)",
        "ipa": "/ˈpleɪˌgraʊnd/",
        "meaning": "sân chơi",
        "example_en": "The children are running in the playground.",
        "example_vi": "Bọn trẻ đang chạy trên sân chơi."
      },
      {
        "word": "please (v & exclam)",
        "ipa": "/pliz/",
        "meaning": "Xin vui lòng",
        "example_en": "Please close the door.",
        "example_vi": "Xin vui lòng đóng cửa lại."
      },
      {
        "word": "pleased (adj)",
        "ipa": "/plizd/",
        "meaning": "vừa lòng",
        "example_en": "I am very pleased to meet you.",
        "example_vi": "Tôi rất vừa lòng khi được gặp bạn."
      },
      {
        "word": "plus (prep)",
        "ipa": "/pləs/",
        "meaning": "cộng thêm",
        "example_en": "Two plus two is four.",
        "example_vi": "Hai cộng thêm hai bằng bốn."
      },
      {
        "word": "point (v)",
        "ipa": "/pɔɪnt/",
        "meaning": "điểm",
        "example_en": "The teacher pointed at the board.",
        "example_vi": "Giáo viên đã chỉ điểm (chỉ) lên bảng."
      },
      {
        "word": "pop (n)",
        "ipa": "/pɑp/",
        "meaning": "nhạc pop",
        "example_en": "I like listening to pop music.",
        "example_vi": "Tôi thích nghe nhạc pop."
      },
      {
        "word": "popular (adj)",
        "ipa": "/ˈpɑpjələr/",
        "meaning": "phổ biến",
        "example_en": "Football is a very popular sport.",
        "example_vi": "Bóng đá là một môn thể thao rất phổ biến."
      },
      {
        "word": "port (n)",
        "ipa": "/pɔrt/",
        "meaning": "hải cảng",
        "example_en": "The ship arrived at the port this morning.",
        "example_vi": "Con tàu đã đến hải cảng sáng nay."
      },
      {
        "word": "possible (adj)",
        "ipa": "/ˈpɑsəbəl/",
        "meaning": "khả thi",
        "example_en": "Is it possible to finish this today?",
        "example_vi": "Việc hoàn thành chuyện này hôm nay có khả thi không?"
      },
      {
        "word": "possibly (adv)",
        "ipa": "/ˈpɑsəbli/",
        "meaning": "có thể",
        "example_en": "I will possibly arrive late.",
        "example_vi": "Tôi có thể sẽ đến muộn."
      },
      {
        "word": "post (v & n)",
        "ipa": "/poʊst/",
        "meaning": "bưu kiện",
        "example_en": "I need to post this letter today.",
        "example_vi": "Tôi cần gửi bưu kiện (thư) này hôm nay."
      },
      {
        "word": "postcard (n)",
        "ipa": "/ˈpoʊˌskɑrd/",
        "meaning": "bưu thiếp",
        "example_en": "She sent me a postcard from Paris.",
        "example_vi": "Cô ấy đã gửi cho tôi một tấm bưu thiếp từ Paris."
      },
      {
        "word": "poster (n)",
        "ipa": "/ˈpoʊstər/",
        "meaning": "áp phích",
        "example_en": "He has a big poster of his favorite singer.",
        "example_vi": "Anh ấy có một tấm áp phích lớn của ca sĩ anh ấy yêu thích."
      },
      {
        "word": "pound (£) (n)",
        "ipa": "/paʊnd/",
        "meaning": "pao",
        "example_en": "This book costs ten pounds.",
        "example_vi": "Cuốn sách này có giá mười pao (bảng Anh)."
      },
      {
        "word": "practise (v)",
        "ipa": "/ˈpræktɪs/",
        "meaning": "luyện tập",
        "example_en": "You need to practise English every day.",
        "example_vi": "Bạn cần luyện tập tiếng Anh mỗi ngày."
      },
      {
        "word": "prefer / would prefer (v)",
        "ipa": "/prɪˈfər/",
        "meaning": "thích hơn",
        "example_en": "I prefer tea to coffee.",
        "example_vi": "Tôi thích trà hơn cà phê."
      },
      {
        "word": "prepare (v)",
        "ipa": "/priˈpɛr/",
        "meaning": "chuẩn bị",
        "example_en": "She is preparing dinner for the family.",
        "example_vi": "Cô ấy đang chuẩn bị bữa tối cho gia đình."
      },
      {
        "word": "pretty (adj)",
        "ipa": "/ˈprɪti/",
        "meaning": "đẹp",
        "example_en": "She is a very pretty girl.",
        "example_vi": "Cô ấy là một cô gái rất đẹp."
      },
      {
        "word": "price (n)",
        "ipa": "/praɪs/",
        "meaning": "giá",
        "example_en": "What is the price of this jacket?",
        "example_vi": "Giá của chiếc áo khoác này là bao nhiêu?"
      },
      {
        "word": "print (v)",
        "ipa": "/prɪnt/",
        "meaning": "in",
        "example_en": "Can you print this document for me?",
        "example_vi": "Bạn có thể in tài liệu này cho tôi được không?"
      },
      {
        "word": "probably (adv)",
        "ipa": "/ˈprɑbəˌbli/",
        "meaning": "có lẽ",
        "example_en": "I will probably go to bed early tonight.",
        "example_vi": "Có lẽ tối nay tôi sẽ đi ngủ sớm."
      },
      {
        "word": "programme (n)",
        "ipa": "/ˈproʊˌgræm/",
        "meaning": "chương trình",
        "example_en": "What is your favorite TV programme?",
        "example_vi": "Chương trình truyền hình yêu thích của bạn là gì?"
      },
      {
        "word": "pull (v)",
        "ipa": "/pʊl/",
        "meaning": "kéo / lôi kéo",
        "example_en": "You need to pull the door to open it.",
        "example_vi": "Bạn cần kéo cánh cửa để mở nó."
      },
      {
        "word": "purple (adj)",
        "ipa": "/ˈpərpəl/",
        "meaning": "màu tím",
        "example_en": "She is wearing a beautiful purple dress.",
        "example_vi": "Cô ấy đang mặc một chiếc váy màu tím tuyệt đẹp."
      },
      {
        "word": "push (v)",
        "ipa": "/pʊʃ/",
        "meaning": "xô",
        "example_en": "Please push the door to enter.",
        "example_vi": "Vui lòng xô (đẩy) cửa để vào."
      },
      {
        "word": "put (v)",
        "ipa": "/pʊt/",
        "meaning": "đặt",
        "example_en": "Please put the books on the table.",
        "example_vi": "Làm ơn đặt những cuốn sách lên bàn."
      },
      {
        "word": "puzzle (n)",
        "ipa": "/ˈpəzəl/",
        "meaning": "câu đố",
        "example_en": "We did a jigsaw puzzle yesterday.",
        "example_vi": "Chúng tôi đã chơi một câu đố ghép hình vào ngày hôm qua."
      },
      {
        "word": "queen (n)",
        "ipa": "/kwin/",
        "meaning": "nữ hoàng",
        "example_en": "The queen wore a beautiful crown.",
        "example_vi": "Nữ hoàng đội một chiếc vương miện tuyệt đẹp."
      },
      {
        "word": "question (n)",
        "ipa": "/kˈwɛʃən/",
        "meaning": "câu hỏi",
        "example_en": "Can I ask you a question?",
        "example_vi": "Tôi có thể hỏi bạn một câu hỏi được không?"
      },
      {
        "word": "quick (adj)",
        "ipa": "/kwɪk/",
        "meaning": "nhanh",
        "example_en": "He is a quick learner.",
        "example_vi": "Anh ấy là người học nhanh."
      },
      {
        "word": "quickly (adv)",
        "ipa": "/kˈwɪkli/",
        "meaning": "nhanh",
        "example_en": "She walked quickly to the station.",
        "example_vi": "Cô ấy đi nhanh đến nhà ga."
      },
      {
        "word": "quite (adv)",
        "ipa": "/kwaɪt/",
        "meaning": "khá",
        "example_en": "The weather is quite cold today.",
        "example_vi": "Thời tiết hôm nay khá lạnh."
      },
      {
        "word": "quiz (n)",
        "ipa": "/kwɪz/",
        "meaning": "câu đố",
        "example_en": "We have a math quiz tomorrow.",
        "example_vi": "Chúng tôi có một bài kiểm tra toán vào ngày mai."
      },
      {
        "word": "racket (n)",
        "ipa": "/ˈrækɪt/",
        "meaning": "vợt",
        "example_en": "I need a new tennis racket.",
        "example_vi": "Tôi cần một cây vợt tennis mới."
      },
      {
        "word": "raincoat (n)",
        "ipa": "/ˈreɪnˌkoʊt/",
        "meaning": "áo mưa",
        "example_en": "Don't forget to take your raincoat.",
        "example_vi": "Đừng quên mang theo áo mưa của bạn."
      },
      {
        "word": "rap (n)",
        "ipa": "/ræp/",
        "meaning": "rap",
        "example_en": "He likes listening to rap music.",
        "example_vi": "Anh ấy thích nghe nhạc rap."
      },
      {
        "word": "ready (adj)",
        "ipa": "/ˈrɛdi/",
        "meaning": "sẵn sàng",
        "example_en": "Are you ready to go?",
        "example_vi": "Bạn đã sẵn sàng đi chưa?"
      },
      {
        "word": "real (adj)",
        "ipa": "/ril/",
        "meaning": "thực tế",
        "example_en": "Is this ring made of real gold?",
        "example_vi": "Chiếc nhẫn này được làm bằng vàng thật phải không?"
      },
      {
        "word": "really (adv)",
        "ipa": "/ˈrɪli/",
        "meaning": "Thực ra",
        "example_en": "I really like your new dress.",
        "example_vi": "Tôi thực sự thích chiếc váy mới của bạn."
      },
      {
        "word": "reason (n)",
        "ipa": "/ˈrizən/",
        "meaning": "lý do",
        "example_en": "What is the reason for your choice?",
        "example_vi": "Lý do cho sự lựa chọn của bạn là gì?"
      },
      {
        "word": "receipt (n)",
        "ipa": "/rɪˈsit/",
        "meaning": "biên lai",
        "example_en": "Can I have the receipt, please?",
        "example_vi": "Vui lòng cho tôi xin biên lai được không?"
      },
      {
        "word": "receive (v)",
        "ipa": "/rɪˈsiv/",
        "meaning": "nhận được",
        "example_en": "I will receive a letter tomorrow.",
        "example_vi": "Tôi sẽ nhận được một lá thư vào ngày mai."
      },
      {
        "word": "receptionist (n)",
        "ipa": "/rɪˈsɛpʃənɪst/",
        "meaning": "nhân viên lễ tân",
        "example_en": "The receptionist gave me the room key.",
        "example_vi": "Nhân viên lễ tân đã đưa cho tôi chìa khóa phòng."
      },
      {
        "word": "red (adj)",
        "ipa": "/rɛd/",
        "meaning": "màu đỏ",
        "example_en": "She is wearing a red hat.",
        "example_vi": "Cô ấy đang đội một chiếc mũ màu đỏ."
      },
      {
        "word": "refrigerator (n)",
        "ipa": "/rɪˈfrɪʤərˌeɪtər/",
        "meaning": "tủ lạnh",
        "example_en": "Please put the milk in the refrigerator.",
        "example_vi": "Vui lòng cất sữa vào tủ lạnh."
      },
      {
        "word": "relax (become happy) (v)",
        "ipa": "/rɪˈlæks/",
        "meaning": "thư giãn",
        "example_en": "I like to relax at home on Sundays.",
        "example_vi": "Tôi thích thư giãn ở nhà vào các ngày Chủ nhật."
      },
      {
        "word": "relaxing (adj)",
        "ipa": "/rɪˈlæksɪŋ/",
        "meaning": "thư giãn",
        "example_en": "Listening to music is very relaxing.",
        "example_vi": "Nghe nhạc rất thư giãn."
      },
      {
        "word": "rent (v)",
        "ipa": "/rɛnt/",
        "meaning": "thuê",
        "example_en": "We plan to rent a car for the trip.",
        "example_vi": "Chúng tôi dự định thuê một chiếc ô tô cho chuyến đi."
      },
      {
        "word": "repair (v)",
        "ipa": "/rɪˈpɛr/",
        "meaning": "Sửa chữa",
        "example_en": "My father can repair my broken bike.",
        "example_vi": "Bố tôi có thể sửa chiếc xe đạp bị hỏng của tôi."
      },
      {
        "word": "repeat (v)",
        "ipa": "/rɪˈpit/",
        "meaning": "lặp lại",
        "example_en": "Can you repeat the question, please?",
        "example_vi": "Bạn có thể lặp lại câu hỏi được không?"
      },
      {
        "word": "return (n & v)",
        "ipa": "/rɪˈtərn/",
        "meaning": "trở lại",
        "example_en": "He will return from London next week.",
        "example_vi": "Anh ấy sẽ trở về từ London vào tuần tới."
      },
      {
        "word": "review (N/A) (n)",
        "ipa": "/ˌrivˈju/",
        "meaning": "ôn tập",
        "example_en": "We need to do a review before the test.",
        "example_vi": "Chúng ta cần ôn tập trước bài kiểm tra."
      },
      {
        "word": "right (n, adj & adv)",
        "ipa": "/raɪt/",
        "meaning": "Phải",
        "example_en": "Turn right at the next corner.",
        "example_vi": "Rẽ phải ở góc đường tiếp theo."
      },
      {
        "word": "round (adj)",
        "ipa": "/raʊnd/",
        "meaning": "tròn",
        "example_en": "The table in the kitchen is round.",
        "example_vi": "Chiếc bàn trong bếp có hình tròn."
      },
      {
        "word": "rubbish (unc n)",
        "ipa": "/ˈrəbɪʃ/",
        "meaning": "rác",
        "example_en": "Please put your rubbish in the bin.",
        "example_vi": "Vui lòng bỏ rác của bạn vào thùng rác."
      },
      {
        "word": "rugby (n)",
        "ipa": "/ˈrəgbi/",
        "meaning": "bóng bầu dục",
        "example_en": "They play rugby every weekend.",
        "example_vi": "Họ chơi bóng bầu dục mỗi cuối tuần."
      },
      {
        "word": "runner (n)",
        "ipa": "/ˈrənər/",
        "meaning": "người chạy bộ",
        "example_en": "She is a very fast runner.",
        "example_vi": "Cô ấy là một người chạy bộ rất nhanh."
      },
      {
        "word": "running (n)",
        "ipa": "/ˈrənɪŋ/",
        "meaning": "đang chạy",
        "example_en": "Running is good for your health.",
        "example_vi": "Chạy bộ rất tốt cho sức khỏe của bạn."
      },
      {
        "word": "sailing (n)",
        "ipa": "/ˈseɪlɪŋ/",
        "meaning": "đi thuyền",
        "example_en": "We are going sailing this afternoon.",
        "example_vi": "Chúng tôi sẽ đi thuyền chiều nay."
      },
      {
        "word": "sale (n)",
        "ipa": "/seɪl/",
        "meaning": "doanh thu",
        "example_en": "I bought this shirt in a sale.",
        "example_vi": "Tôi đã mua chiếc áo sơ mi này trong đợt giảm giá."
      },
      {
        "word": "same (adj & pron)",
        "ipa": "/seɪm/",
        "meaning": "như nhau",
        "example_en": "We have the same color of eyes.",
        "example_vi": "Chúng tôi có cùng màu mắt."
      },
      {
        "word": "save (v)",
        "ipa": "/seɪv/",
        "meaning": "cứu / tiết kiệm (tiền) lưu (dữ liệu)",
        "example_en": "You should save some money every month.",
        "example_vi": "Bạn nên tiết kiệm một ít tiền mỗi tháng."
      },
      {
        "word": "say (v)",
        "ipa": "/seɪ/",
        "meaning": "nói",
        "example_en": "What did he say to you?",
        "example_vi": "Anh ấy đã nói gì với bạn vậy?"
      },
      {
        "word": "scary (adj)",
        "ipa": "/ˈskɛri/",
        "meaning": "đáng sợ",
        "example_en": "I don't like watching scary movies.",
        "example_vi": "Tôi không thích xem những bộ phim đáng sợ."
      },
      {
        "word": "schoolchild (n)",
        "ipa": "/ˈskuˌlʧaɪld/",
        "meaning": "học sinh",
        "example_en": "A group of schoolchildren is visiting the museum.",
        "example_vi": "Một nhóm học sinh đang tham quan bảo tàng."
      },
      {
        "word": "scientist (n)",
        "ipa": "/ˈsaɪəntɪst/",
        "meaning": "nhà khoa học",
        "example_en": "Marie Curie was a famous scientist.",
        "example_vi": "Marie Curie là một nhà khoa học nổi tiếng."
      },
      {
        "word": "scissors (n pl)",
        "ipa": "/ˈsɪzərz/",
        "meaning": "kéo",
        "example_en": "Where are my scissors? I need to cut this paper.",
        "example_vi": "Cây kéo của tôi đâu rồi? Tôi cần cắt tờ giấy này."
      },
      {
        "word": "scooter (n)",
        "ipa": "/ˈskutər/",
        "meaning": "xe tay ga",
        "example_en": "He rides his scooter to work.",
        "example_vi": "Anh ấy đi xe tay ga đi làm."
      },
      {
        "word": "see (v)",
        "ipa": "/si/",
        "meaning": "nhìn thấy",
        "example_en": "I can see a bird in the tree.",
        "example_vi": "Tôi có thể nhìn thấy một con chim trên cây."
      },
      {
        "word": "seem (v)",
        "ipa": "/sim/",
        "meaning": "có vẻ",
        "example_en": "You seem tired today.",
        "example_vi": "Hôm nay bạn có vẻ mệt."
      },
      {
        "word": "selfie (n)",
        "ipa": "/ˈsɛlˌfi/",
        "meaning": "tự sướng",
        "example_en": "She took a beautiful selfie.",
        "example_vi": "Cô ấy đã chụp một bức ảnh tự sướng đẹp."
      },
      {
        "word": "sell (v)",
        "ipa": "/sɛl/",
        "meaning": "bán",
        "example_en": "They sell fresh fruit in that shop.",
        "example_vi": "Họ bán trái cây tươi ở cửa hàng đó."
      },
      {
        "word": "send (v)",
        "ipa": "/sɛnd/",
        "meaning": "gửi",
        "example_en": "I will send you an email later.",
        "example_vi": "Tôi sẽ gửi cho bạn một email sau."
      },
      {
        "word": "serve (v)",
        "ipa": "/sərv/",
        "meaning": "phục vụ",
        "example_en": "This restaurant serves Italian food.",
        "example_vi": "Nhà hàng này phục vụ thức ăn Ý."
      },
      {
        "word": "set (n)",
        "ipa": "/sɛt/",
        "meaning": "bộ",
        "example_en": "I have a new set of keys.",
        "example_vi": "Tôi có một bộ chìa khóa mới."
      },
      {
        "word": "several (det & pron)",
        "ipa": "/ˈsɛvərəl/",
        "meaning": "một số",
        "example_en": "I have asked him several times.",
        "example_vi": "Tôi đã hỏi anh ấy một vài lần."
      },
      {
        "word": "shall (mv)",
        "ipa": "/ʃæl/",
        "meaning": "nên",
        "example_en": "Shall we go to the cinema tonight?",
        "example_vi": "Tối nay chúng ta đi xem phim nhé?"
      },
      {
        "word": "shame (n)",
        "ipa": "/ʃeɪm/",
        "meaning": "sự xấu hổ / điều đáng tiếc",
        "example_en": "It is a shame that you cannot come to the party.",
        "example_vi": "Thật đáng tiếc khi bạn không thể đến dự bữa tiệc."
      },
      {
        "word": "shampoo (n & v)",
        "ipa": "/ʃæmˈpu/",
        "meaning": "dầu gội đầu",
        "example_en": "I need to buy a new bottle of shampoo.",
        "example_vi": "Tôi cần mua một chai dầu gội mới."
      },
      {
        "word": "share (v)",
        "ipa": "/ʃɛr/",
        "meaning": "chia sẻ",
        "example_en": "Let's share this pizza.",
        "example_vi": "Hãy cùng chia sẻ chiếc bánh pizza này."
      },
      {
        "word": "share (digitally) (v)",
        "ipa": "/ʃɛr/",
        "meaning": "chia sẻ",
        "example_en": "He likes to share his photos online.",
        "example_vi": "Anh ấy thích chia sẻ những bức ảnh của mình trên mạng."
      },
      {
        "word": "she (pron)",
        "ipa": "/ʃi/",
        "meaning": "cô ấy",
        "example_en": "She is my best friend.",
        "example_vi": "Cô ấy là người bạn tốt nhất của tôi."
      },
      {
        "word": "sheet (n)",
        "ipa": "/ʃit/",
        "meaning": "tờ giấy",
        "example_en": "Please give me a blank sheet of paper.",
        "example_vi": "Vui lòng cho tôi một tờ giấy trắng."
      },
      {
        "word": "shopping (n)",
        "ipa": "/ˈʃɑpɪŋ/",
        "meaning": "mua sắm",
        "example_en": "They go shopping every weekend.",
        "example_vi": "Họ đi mua sắm mỗi cuối tuần."
      },
      {
        "word": "shorts (n pl)",
        "ipa": "/ʃɔrts/",
        "meaning": "quần short",
        "example_en": "He wears shorts in the summer.",
        "example_vi": "Anh ấy mặc quần short vào mùa hè."
      },
      {
        "word": "should (mv)",
        "ipa": "/ʃʊd/",
        "meaning": "nên",
        "example_en": "You should see a doctor if you are sick.",
        "example_vi": "Bạn nên đi khám bác sĩ nếu bạn bị ốm."
      },
      {
        "word": "shout (v)",
        "ipa": "/ʃaʊt/",
        "meaning": "hét lên",
        "example_en": "Please do not shout in the library.",
        "example_vi": "Xin đừng hét lên trong thư viện."
      },
      {
        "word": "show (v & n)",
        "ipa": "/ʃoʊ/",
        "meaning": "trình diễn",
        "example_en": "Can you show me the way to the bank?",
        "example_vi": "Bạn có thể chỉ cho tôi đường đến ngân hàng không?"
      },
      {
        "word": "shut (v)",
        "ipa": "/ʃət/",
        "meaning": "đóng lại",
        "example_en": "Please shut the window before you leave.",
        "example_vi": "Vui lòng đóng cửa sổ trước khi bạn rời đi."
      },
      {
        "word": "side (n)",
        "ipa": "/saɪd/",
        "meaning": "bên",
        "example_en": "Please walk on the right side of the road.",
        "example_vi": "Vui lòng đi bộ ở bên phải đường."
      },
      {
        "word": "sightseeing (n)",
        "ipa": "/ˈsaɪtˈsiɪŋ/",
        "meaning": "tham quan",
        "example_en": "We went sightseeing in Paris.",
        "example_vi": "Chúng tôi đã đi tham quan ở Paris."
      },
      {
        "word": "sign (n)",
        "ipa": "/saɪn/",
        "meaning": "dấu hiệu / biển báo",
        "example_en": "Stop when you see the red sign.",
        "example_vi": "Dừng lại khi bạn nhìn thấy biển báo màu đỏ."
      },
      {
        "word": "silver (n & adj)",
        "ipa": "/ˈsɪlvər/",
        "meaning": "bạc",
        "example_en": "She wears a silver ring.",
        "example_vi": "Cô ấy đeo một chiếc nhẫn bạc."
      },
      {
        "word": "similar (adj)",
        "ipa": "/ˈsɪmələr/",
        "meaning": "tương tự",
        "example_en": "Your bag is similar to mine.",
        "example_vi": "Chiếc túi của bạn tương tự như của tôi."
      },
      {
        "word": "simple (adj)",
        "ipa": "/ˈsɪmpəl/",
        "meaning": "đơn giản",
        "example_en": "The rules of this game are simple.",
        "example_vi": "Các quy tắc của trò chơi này rất đơn giản."
      },
      {
        "word": "since (prep)",
        "ipa": "/sɪns/",
        "meaning": "từ",
        "example_en": "I have lived here since 2010.",
        "example_vi": "Tôi đã sống ở đây từ năm 2010."
      },
      {
        "word": "singer (n)",
        "ipa": "/ˈsɪŋər/",
        "meaning": "ca sĩ",
        "example_en": "Taylor Swift is my favorite singer.",
        "example_vi": "Taylor Swift là ca sĩ yêu thích của tôi."
      },
      {
        "word": "singing (n)",
        "ipa": "/ˈsɪŋɪŋ/",
        "meaning": "ca hát",
        "example_en": "She is very good at singing.",
        "example_vi": "Cô ấy hát rất hay."
      },
      {
        "word": "single (adj)",
        "ipa": "/ˈsɪŋgəl/",
        "meaning": "đơn",
        "example_en": "He is single and has no children.",
        "example_vi": "Anh ấy độc thân và chưa có con."
      },
      {
        "word": "sister (n)",
        "ipa": "/ˈsɪstər/",
        "meaning": "em gái",
        "example_en": "My younger sister is a student.",
        "example_vi": "Em gái tôi là một học sinh."
      },
      {
        "word": "sit (v)",
        "ipa": "/sɪt/",
        "meaning": "ngồi",
        "example_en": "Can I sit here?",
        "example_vi": "Tôi có thể ngồi đây không?"
      },
      {
        "word": "sit down (phr v)",
        "ipa": "/sɪt daʊn/",
        "meaning": "ngồi xuống",
        "example_en": "Please sit down and relax.",
        "example_vi": "Mời ngồi xuống và thư giãn."
      },
      {
        "word": "size (n)",
        "ipa": "/saɪz/",
        "meaning": "kích cỡ",
        "example_en": "What size are your shoes?",
        "example_vi": "Giày của bạn cỡ bao nhiêu?"
      },
      {
        "word": "skateboard (n)",
        "ipa": "/ˈskeɪtˌbɔrd/",
        "meaning": "ván trượt",
        "example_en": "My brother bought a new skateboard.",
        "example_vi": "Anh trai tôi đã mua một chiếc ván trượt mới."
      },
      {
        "word": "skateboarding (n)",
        "ipa": "/ˈskeɪtˌbɔrdɪŋ/",
        "meaning": "trượt ván",
        "example_en": "Skateboarding is popular among teenagers.",
        "example_vi": "Trượt ván rất phổ biến ở giới trẻ."
      },
      {
        "word": "skating (n)",
        "ipa": "/ˈskeɪtɪŋ/",
        "meaning": "trượt băng",
        "example_en": "We often go skating in winter.",
        "example_vi": "Chúng tôi thường đi trượt băng vào mùa đông."
      },
      {
        "word": "skiing (n)",
        "ipa": "/skiɪŋ/",
        "meaning": "trượt tuyết",
        "example_en": "Skiing is a fun winter sport.",
        "example_vi": "Trượt tuyết là một môn thể thao mùa đông thú vị."
      },
      {
        "word": "slim (adj)",
        "ipa": "/slɪm/",
        "meaning": "mảnh khảnh",
        "example_en": "She has a tall and slim body.",
        "example_vi": "Cô ấy có một vóc dáng cao và mảnh khảnh."
      },
      {
        "word": "slow (adj)",
        "ipa": "/sloʊ/",
        "meaning": "chậm",
        "example_en": "This bus is very slow.",
        "example_vi": "Chiếc xe buýt này rất chậm."
      },
      {
        "word": "slowly (adv)",
        "ipa": "/sˈloʊli/",
        "meaning": "chậm",
        "example_en": "Please speak slowly so I can understand.",
        "example_vi": "Xin hãy nói chậm để tôi có thể hiểu."
      },
      {
        "word": "small (adj)",
        "ipa": "/smɔl/",
        "meaning": "bé nhỏ",
        "example_en": "They live in a small house.",
        "example_vi": "Họ sống trong một ngôi nhà nhỏ."
      },
      {
        "word": "smoke (v)",
        "ipa": "/smoʊk/",
        "meaning": "khói",
        "example_en": "I can see smoke from the house.",
        "example_vi": "Tôi có thể nhìn thấy khói từ ngôi nhà."
      },
      {
        "word": "smoking (n)",
        "ipa": "/sˈmoʊkɪŋ/",
        "meaning": "hút thuốc",
        "example_en": "Smoking is not allowed here.",
        "example_vi": "Việc hút thuốc không được phép ở đây."
      },
      {
        "word": "snake (n)",
        "ipa": "/sneɪk/",
        "meaning": "rắn",
        "example_en": "Be careful, there is a snake in the grass.",
        "example_vi": "Hãy cẩn thận, có một con rắn trên bãi cỏ."
      },
      {
        "word": "so (conj & adv)",
        "ipa": "/soʊ/",
        "meaning": "Vì thế",
        "example_en": "It was raining, so we stayed at home.",
        "example_vi": "Trời đang mưa, vì thế chúng tôi đã ở nhà."
      },
      {
        "word": "soap (n)",
        "ipa": "/soʊp/",
        "meaning": "xà phòng",
        "example_en": "Wash your hands with soap and water.",
        "example_vi": "Hãy rửa tay bằng xà phòng và nước."
      },
      {
        "word": "soccer (n)",
        "ipa": "/ˈsɑkər/",
        "meaning": "bóng đá",
        "example_en": "Let's play soccer after school.",
        "example_vi": "Hãy chơi bóng đá sau giờ học."
      },
      {
        "word": "social media (n)",
        "ipa": "/ˈsoʊʃəl ˈmidiə/",
        "meaning": "phương tiện truyền thông xã hội",
        "example_en": "Teenagers spend a lot of time on social media.",
        "example_vi": "Thanh thiếu niên dành rất nhiều thời gian trên mạng xã hội."
      },
      {
        "word": "soft (adj)",
        "ipa": "/sɔft/",
        "meaning": "mềm mại",
        "example_en": "The cat has very soft fur.",
        "example_vi": "Con mèo có bộ lông rất mềm mại."
      },
      {
        "word": "some (det & pron)",
        "ipa": "/səm/",
        "meaning": "một số",
        "example_en": "I need some apples for the pie.",
        "example_vi": "Tôi cần một số quả táo cho món bánh."
      },
      {
        "word": "somebody (pron)",
        "ipa": "/ˈsəmˌbɑdi/",
        "meaning": "ai đó",
        "example_en": "Somebody is knocking on the door.",
        "example_vi": "Có ai đó đang gõ cửa."
      },
      {
        "word": "someone (pron)",
        "ipa": "/ˈsəmˌwən/",
        "meaning": "người nào đó",
        "example_en": "Someone left their bag here.",
        "example_vi": "Người nào đó đã để quên túi xách của họ ở đây."
      },
      {
        "word": "something (pron)",
        "ipa": "/ˈsəmθɪŋ/",
        "meaning": "thứ gì đó",
        "example_en": "I want to eat something sweet.",
        "example_vi": "Tôi muốn ăn thứ gì đó ngọt ngào."
      },
      {
        "word": "somewhere (adv)",
        "ipa": "/ˈsəmˌwɛr/",
        "meaning": "ở đâu đó",
        "example_en": "I have seen this man somewhere before.",
        "example_vi": "Tôi đã nhìn thấy người đàn ông này ở đâu đó trước đây."
      },
      {
        "word": "son (n)",
        "ipa": "/sən/",
        "meaning": "con trai",
        "example_en": "They have two daughters and one son.",
        "example_vi": "Họ có hai cô con gái và một cậu con trai."
      },
      {
        "word": "sort (n)",
        "ipa": "/sɔrt/",
        "meaning": "loại",
        "example_en": "What sort of music do you like?",
        "example_vi": "Bạn thích thể loại âm nhạc nào?"
      },
      {
        "word": "sound (v)",
        "ipa": "/saʊnd/",
        "meaning": "âm thanh",
        "example_en": "That sounds like a great idea.",
        "example_vi": "Điều đó nghe có vẻ là một ý tưởng tuyệt vời."
      },
      {
        "word": "spare (adj)",
        "ipa": "/spɛr/",
        "meaning": "dự phòng",
        "example_en": "Do you have a spare pen?",
        "example_vi": "Bạn có một chiếc bút dự phòng không?"
      },
      {
        "word": "special (adj)",
        "ipa": "/ˈspɛʃəl/",
        "meaning": "đặc biệt",
        "example_en": "Today is a very special day for me.",
        "example_vi": "Hôm nay là một ngày rất đặc biệt đối với tôi."
      },
      {
        "word": "spelling (n)",
        "ipa": "/ˈspɛlɪŋ/",
        "meaning": "đánh vần",
        "example_en": "Can you check my spelling?",
        "example_vi": "Bạn có thể kiểm tra chính tả của tôi không?"
      },
      {
        "word": "spend (v)",
        "ipa": "/spɛnd/",
        "meaning": "tiêu / tiêu (tiền) dành (thời gian)",
        "example_en": "I spend a lot of time reading books.",
        "example_vi": "Tôi dành nhiều thời gian để đọc sách."
      },
      {
        "word": "sports centre (n)",
        "ipa": "/spɔrts ˈsɛntər/",
        "meaning": "trung tâm thể thao",
        "example_en": "We play tennis at the sports centre.",
        "example_vi": "Chúng tôi chơi quần vợt ở trung tâm thể thao."
      },
      {
        "word": "square (n & adj)",
        "ipa": "/skwɛr/",
        "meaning": "quảng trường",
        "example_en": "Let's meet in the town square.",
        "example_vi": "Hãy gặp nhau ở quảng trường thị trấn."
      },
      {
        "word": "staff (n)",
        "ipa": "/stæf/",
        "meaning": "nhân viên",
        "example_en": "The hotel staff is very friendly.",
        "example_vi": "Nhân viên khách sạn rất thân thiện."
      },
      {
        "word": "stage (n)",
        "ipa": "/steɪʤ/",
        "meaning": "sân khấu",
        "example_en": "The actors are standing on the stage.",
        "example_vi": "Các diễn viên đang đứng trên sân khấu."
      },
      {
        "word": "stamp (n)",
        "ipa": "/stæmp/",
        "meaning": "con tem",
        "example_en": "I need to buy a stamp for this letter.",
        "example_vi": "Tôi cần mua một con tem cho bức thư này."
      },
      {
        "word": "stand (v)",
        "ipa": "/stænd/",
        "meaning": "đứng",
        "example_en": "Please stand up when the teacher comes in.",
        "example_vi": "Vui lòng đứng lên khi giáo viên bước vào."
      },
      {
        "word": "start (v)",
        "ipa": "/stɑrt/",
        "meaning": "bắt đầu",
        "example_en": "The movie will start at 8 p.m.",
        "example_vi": "Bộ phim sẽ bắt đầu lúc 8 giờ tối."
      },
      {
        "word": "steal (v)",
        "ipa": "/stil/",
        "meaning": "ăn cắp",
        "example_en": "Someone tried to steal my bike.",
        "example_vi": "Ai đó đã cố gắng ăn cắp xe đạp của tôi."
      },
      {
        "word": "store (n)",
        "ipa": "/stɔr/",
        "meaning": "cửa hàng",
        "example_en": "I am going to the store to buy milk.",
        "example_vi": "Tôi đang đi đến cửa hàng để mua sữa."
      },
      {
        "word": "story (n)",
        "ipa": "/ˈstɔri/",
        "meaning": "câu chuyện",
        "example_en": "My grandfather told me a funny story.",
        "example_vi": "Ông tôi đã kể cho tôi một câu chuyện buồn cười."
      },
      {
        "word": "straight (adj & adv)",
        "ipa": "/streɪt/",
        "meaning": "thẳng",
        "example_en": "Go straight, and you will see the hospital.",
        "example_vi": "Đi thẳng, và bạn sẽ thấy bệnh viện."
      },
      {
        "word": "striped (adj)",
        "ipa": "/straɪpt/",
        "meaning": "sọc",
        "example_en": "He is wearing a striped shirt.",
        "example_vi": "Anh ấy đang mặc một chiếc áo sơ mi sọc."
      },
      {
        "word": "stripes (n)",
        "ipa": "/straɪps/",
        "meaning": "sọc",
        "example_en": "A zebra has black and white stripes.",
        "example_vi": "Ngựa vằn có những sọc đen và trắng."
      },
      {
        "word": "strong (adj)",
        "ipa": "/strɔŋ/",
        "meaning": "mạnh",
        "example_en": "You need to be strong to carry this heavy box.",
        "example_vi": "Bạn cần phải khỏe mạnh để mang cái hộp nặng này."
      },
      {
        "word": "stuff (n)",
        "ipa": "/stəf/",
        "meaning": "đồ đạc / thứ (nói chung)",
        "example_en": "Put all your stuff in the bag.",
        "example_vi": "Bỏ tất cả đồ đạc của bạn vào túi."
      },
      {
        "word": "success (n)",
        "ipa": "/səkˈsɛs/",
        "meaning": "thành công",
        "example_en": "The party was a great success.",
        "example_vi": "Bữa tiệc là một thành công lớn."
      },
      {
        "word": "successful (adj)",
        "ipa": "/səkˈsɛsfəl/",
        "meaning": "thành công",
        "example_en": "She is a successful business woman.",
        "example_vi": "Cô ấy là một nữ doanh nhân thành công."
      },
      {
        "word": "such (det)",
        "ipa": "/səʧ/",
        "meaning": "như là",
        "example_en": "I like fruits, such as apples and bananas.",
        "example_vi": "Tôi thích trái cây, như là táo và chuối."
      },
      {
        "word": "suddenly (adv)",
        "ipa": "/ˈsədənli/",
        "meaning": "đột nhiên",
        "example_en": "Suddenly, the lights went out.",
        "example_vi": "Đột nhiên, đèn tắt."
      },
      {
        "word": "suggest (v) + ing",
        "ipa": "/səˈʤɛst/",
        "meaning": "gợi ý",
        "example_en": "I suggest going to the beach this weekend.",
        "example_vi": "Tôi gợi ý đi biển vào cuối tuần này."
      },
      {
        "word": "supermarket (n)",
        "ipa": "/ˈsupərˌmɑrkɪt/",
        "meaning": "siêu thị",
        "example_en": "We buy our food at the supermarket.",
        "example_vi": "Chúng tôi mua thức ăn ở siêu thị."
      },
      {
        "word": "supper (n)",
        "ipa": "/ˈsəpər/",
        "meaning": "bữa tối",
        "example_en": "What are we having for supper tonight?",
        "example_vi": "Tối nay chúng ta ăn gì cho bữa tối?"
      },
      {
        "word": "suppose (v)",
        "ipa": "/səˈpoʊz/",
        "meaning": "giả định",
        "example_en": "I suppose he is right.",
        "example_vi": "Tôi cho rằng anh ấy đúng."
      },
      {
        "word": "surfboard (n)",
        "ipa": "/ˈsərfˌbɔrd/",
        "meaning": "ván lướt sóng",
        "example_en": "He bought a new surfboard for his holiday.",
        "example_vi": "Anh ấy đã mua một tấm ván lướt sóng mới cho kỳ nghỉ của mình."
      },
      {
        "word": "surfing (n)",
        "ipa": "/ˈsərfɪŋ/",
        "meaning": "lướt sóng",
        "example_en": "They went surfing in Hawaii.",
        "example_vi": "Họ đã đi lướt sóng ở Hawaii."
      },
      {
        "word": "surname (n)",
        "ipa": "/ˈsərˌneɪm/",
        "meaning": "họ",
        "example_en": "Please write your first name and your surname.",
        "example_vi": "Vui lòng viết tên và họ của bạn."
      },
      {
        "word": "surprise (n)",
        "ipa": "/səˈpraɪz/",
        "meaning": "sự ngạc nhiên",
        "example_en": "The present was a big surprise for her.",
        "example_vi": "Món quà là một sự ngạc nhiên lớn đối với cô ấy."
      },
      {
        "word": "surprising (adj)",
        "ipa": "/səˈpraɪzɪŋ/",
        "meaning": "đáng ngạc nhiên",
        "example_en": "It is surprising that he passed the test.",
        "example_vi": "Thật đáng ngạc nhiên là anh ấy đã qua bài kiểm tra."
      },
      {
        "word": "swimsuit (n)",
        "ipa": "/sˈwɪmˌsut/",
        "meaning": "áo tắm",
        "example_en": "Don't forget to pack your swimsuit.",
        "example_vi": "Đừng quên mang theo áo tắm của bạn."
      },
      {
        "word": "table (n)",
        "ipa": "/ˈteɪbəl/",
        "meaning": "bàn",
        "example_en": "The books are on the table.",
        "example_vi": "Những cuốn sách ở trên bàn."
      },
      {
        "word": "take (v)",
        "ipa": "/teɪk/",
        "meaning": "lấy / cầm nắm đưa đi mất (thời gian)",
        "example_en": "It takes 30 minutes to get to the airport.",
        "example_vi": "Mất 30 phút để đến sân bay."
      },
      {
        "word": "take part (v)",
        "ipa": "/teɪk pɑrt/",
        "meaning": "tham gia",
        "example_en": "Many students take part in the school play.",
        "example_vi": "Nhiều học sinh tham gia vở kịch của trường."
      },
      {
        "word": "talk (n & v)",
        "ipa": "/tɔk/",
        "meaning": "nói chuyện",
        "example_en": "I need to talk to you.",
        "example_vi": "Tôi cần nói chuyện với bạn."
      },
      {
        "word": "tall (adj)",
        "ipa": "/tɔl/",
        "meaning": "cao",
        "example_en": "My brother is very tall.",
        "example_vi": "Anh trai tôi rất cao."
      },
      {
        "word": "tasty (adj)",
        "ipa": "/ˈteɪsti/",
        "meaning": "ngon",
        "example_en": "The soup is very tasty.",
        "example_vi": "Món súp rất ngon."
      },
      {
        "word": "technology (n)",
        "ipa": "/tɛkˈnɑləʤi/",
        "meaning": "công nghệ",
        "example_en": "I want to study computer technology.",
        "example_vi": "Tôi muốn học công nghệ máy tính."
      },
      {
        "word": "teenager (n)",
        "ipa": "/ˈtiˌneɪʤər/",
        "meaning": "thiếu niên",
        "example_en": "The program is designed for teenagers.",
        "example_vi": "Chương trình được thiết kế cho thanh thiếu niên."
      },
      {
        "word": "tell (v)",
        "ipa": "/tɛl/",
        "meaning": "kể",
        "example_en": "Can you tell me a story?",
        "example_vi": "Bạn có thể kể cho tôi một câu chuyện không?"
      },
      {
        "word": "textbook (n)",
        "ipa": "/ˈtɛkstˌbʊk/",
        "meaning": "sách giáo khoa",
        "example_en": "Open your English textbook to page 10.",
        "example_vi": "Mở sách giáo khoa tiếng Anh của bạn ra trang 10."
      },
      {
        "word": "than (prep & conj)",
        "ipa": "/ðən/",
        "meaning": "hơn",
        "example_en": "He is taller than his father.",
        "example_vi": "Anh ấy cao hơn bố mình."
      },
      {
        "word": "thank (v)",
        "ipa": "/θæŋk/",
        "meaning": "cám ơn",
        "example_en": "I want to thank you for your help.",
        "example_vi": "Tôi muốn cảm ơn bạn vì sự giúp đỡ của bạn."
      },
      {
        "word": "thanks (exclam)",
        "ipa": "/θæŋks/",
        "meaning": "Cảm ơn",
        "example_en": "Thanks for the beautiful gift!",
        "example_vi": "Cảm ơn vì món quà đẹp!"
      },
      {
        "word": "thank you (exclam)",
        "ipa": "/θæŋk ju/",
        "meaning": "Cảm ơn",
        "example_en": "Thank you very much!",
        "example_vi": "Cảm ơn bạn rất nhiều!"
      },
      {
        "word": "that (conj & pron)",
        "ipa": "/ðət/",
        "meaning": "cái đó",
        "example_en": "Look at that beautiful bird.",
        "example_vi": "Hãy nhìn con chim đẹp đó."
      },
      {
        "word": "the (det)",
        "ipa": "/ðə/",
        "meaning": "cái",
        "example_en": "The sky is blue today.",
        "example_vi": "Bầu trời hôm nay có màu xanh."
      },
      {
        "word": "theatre (n) (Br Eng) (Am Eng: theater)",
        "ipa": "/ˈθiətər/",
        "meaning": "nhà hát",
        "example_en": "We are going to the theatre tonight.",
        "example_vi": "Chúng tôi sẽ đến nhà hát tối nay."
      },
      {
        "word": "their (det)",
        "ipa": "/ðɛr/",
        "meaning": "của họ",
        "example_en": "They lost their bags at the station.",
        "example_vi": "Họ đã làm mất túi của họ ở nhà ga."
      },
      {
        "word": "theirs (pron)",
        "ipa": "/ðɛrz/",
        "meaning": "của họ",
        "example_en": "This car is ours, and that one is theirs.",
        "example_vi": "Chiếc xe này là của chúng tôi, và chiếc kia là của họ."
      },
      {
        "word": "them (pron)",
        "ipa": "/ðɛm/",
        "meaning": "họ",
        "example_en": "I saw them at the park yesterday.",
        "example_vi": "Tôi đã thấy họ ở công viên hôm qua."
      },
      {
        "word": "themselves (pron)",
        "ipa": "/ðɛmˈsɛlvz/",
        "meaning": "chính họ",
        "example_en": "They built the house themselves.",
        "example_vi": "Họ tự tay xây ngôi nhà."
      },
      {
        "word": "there (adv)",
        "ipa": "/ðɛr/",
        "meaning": "ở đó",
        "example_en": "I have never been there before.",
        "example_vi": "Tôi chưa bao giờ đến đó trước đây."
      },
      {
        "word": "these (det & pron)",
        "ipa": "/ðiz/",
        "meaning": "những cái này",
        "example_en": "These shoes are too small for me.",
        "example_vi": "Những chiếc giày này quá nhỏ đối với tôi."
      },
      {
        "word": "they (pron)",
        "ipa": "/ðeɪ/",
        "meaning": "họ",
        "example_en": "They are playing football in the garden.",
        "example_vi": "Họ đang chơi bóng đá trong vườn."
      },
      {
        "word": "thin (adj)",
        "ipa": "/θɪn/",
        "meaning": "gầy",
        "example_en": "He is very tall and thin.",
        "example_vi": "Anh ấy rất cao và gầy."
      },
      {
        "word": "thing (n)",
        "ipa": "/θɪŋ/",
        "meaning": "điều",
        "example_en": "What is that thing on the table?",
        "example_vi": "Cái gì trên bàn vậy?"
      },
      {
        "word": "think (v)",
        "ipa": "/θɪŋk/",
        "meaning": "nghĩ",
        "example_en": "I think it will rain tomorrow.",
        "example_vi": "Tôi nghĩ ngày mai trời sẽ mưa."
      },
      {
        "word": "this (det & pron)",
        "ipa": "/ðɪs/",
        "meaning": "cái này",
        "example_en": "This is my favourite book.",
        "example_vi": "Đây là cuốn sách yêu thích của tôi."
      },
      {
        "word": "those (det & pron)",
        "ipa": "/ðoʊz/",
        "meaning": "những thứ kia",
        "example_en": "Are those your glasses?",
        "example_vi": "Đó có phải là kính của bạn không?"
      },
      {
        "word": "through (prep)",
        "ipa": "/θru/",
        "meaning": "xuyên qua / thông qua",
        "example_en": "We walked through the forest.",
        "example_vi": "Chúng tôi đi bộ xuyên qua khu rừng."
      },
      {
        "word": "thunderstorm (n)",
        "ipa": "/ˈθəndərˌstɔrm/",
        "meaning": "dông",
        "example_en": "There was a loud thunderstorm last night.",
        "example_vi": "Đêm qua có một trận dông bão lớn."
      },
      {
        "word": "tidy (adj & v)",
        "ipa": "/ˈtaɪdi/",
        "meaning": "ngăn nắp",
        "example_en": "Her room is always clean and tidy.",
        "example_vi": "Phòng của cô ấy luôn sạch sẽ và ngăn nắp."
      },
      {
        "word": "tidy up (v)",
        "ipa": "/ˈtaɪdi əp/",
        "meaning": "dọn dẹp",
        "example_en": "Please tidy up your bedroom.",
        "example_vi": "Hãy dọn dẹp phòng ngủ của bạn."
      },
      {
        "word": "till (prep)",
        "ipa": "/tɪl/",
        "meaning": "cho đến khi",
        "example_en": "I will wait for you till 5 o'clock.",
        "example_vi": "Tôi sẽ đợi bạn cho đến 5 giờ."
      },
      {
        "word": "timetable (n)",
        "ipa": "/ˈtaɪmˌteɪbəl/",
        "meaning": "thời gian biểu",
        "example_en": "Check the train timetable before you go.",
        "example_vi": "Hãy kiểm tra lịch trình tàu trước khi bạn đi."
      },
      {
        "word": "title (n)",
        "ipa": "/ˈtaɪtəl/",
        "meaning": "tiêu đề",
        "example_en": "What is the title of the book?",
        "example_vi": "Tiêu đề của cuốn sách là gì?"
      },
      {
        "word": "to (prep)",
        "ipa": "/tɪ/",
        "meaning": "ĐẾN",
        "example_en": "I am going to school now.",
        "example_vi": "Tôi đang đi đến trường bây giờ."
      },
      {
        "word": "toe (n)",
        "ipa": "/toʊ/",
        "meaning": "ngón chân",
        "example_en": "I hurt my big toe.",
        "example_vi": "Tôi bị đau ngón chân cái."
      },
      {
        "word": "together (adv)",
        "ipa": "/təˈgɛðər/",
        "meaning": "cùng nhau",
        "example_en": "Let's work together on this project.",
        "example_vi": "Hãy cùng nhau làm việc trong dự án này."
      },
      {
        "word": "too (adv)",
        "ipa": "/tu/",
        "meaning": "cũng vậy",
        "example_en": "I like ice cream, and my sister likes it too.",
        "example_vi": "Tôi thích kem, và chị tôi cũng vậy."
      },
      {
        "word": "toothbrush (n)",
        "ipa": "/ˈtuθbrəʃ/",
        "meaning": "bàn chải đánh răng",
        "example_en": "I need to buy a new toothbrush.",
        "example_vi": "Tôi cần mua một bàn chải đánh răng mới."
      },
      {
        "word": "top (n)",
        "ipa": "/tɔp/",
        "meaning": "đứng đầu",
        "example_en": "Her name is at the top of the list.",
        "example_vi": "Tên của cô ấy ở đầu danh sách."
      },
      {
        "word": "topic (n)",
        "ipa": "/ˈtɑpɪk/",
        "meaning": "đề tài",
        "example_en": "What is the topic of your essay?",
        "example_vi": "Chủ đề bài luận của bạn là gì?"
      },
      {
        "word": "total (adj & n)",
        "ipa": "/ˈtoʊtəl/",
        "meaning": "tổng cộng",
        "example_en": "The total cost of the trip was $500.",
        "example_vi": "Tổng chi phí của chuyến đi là 500 đô la."
      },
      {
        "word": "town (n)",
        "ipa": "/taʊn/",
        "meaning": "thị trấn",
        "example_en": "My grandparents live in a small town.",
        "example_vi": "Ông bà tôi sống ở một thị trấn nhỏ."
      },
      {
        "word": "training (transitive and intransitive) (n)",
        "ipa": "/ˈtreɪnɪŋ/",
        "meaning": "đào tạo",
        "example_en": "He is doing computer training at work.",
        "example_vi": "Anh ấy đang tham gia khóa đào tạo máy tính tại nơi làm việc."
      },
      {
        "word": "trainer (n)",
        "ipa": "/ˈtreɪnər/",
        "meaning": "huấn luyện viên",
        "example_en": "She has a personal trainer at the gym.",
        "example_vi": "Cô ấy có một huấn luyện viên cá nhân ở phòng tập."
      },
      {
        "word": "trouble (n)",
        "ipa": "/ˈtrəbəl/",
        "meaning": "rắc rối",
        "example_en": "I am having some trouble with my car.",
        "example_vi": "Tôi đang gặp một chút rắc rối với chiếc xe của mình."
      },
      {
        "word": "true (adj)",
        "ipa": "/tru/",
        "meaning": "ĐÚNG VẬY",
        "example_en": "Is it true that you are moving to London?",
        "example_vi": "Có đúng là bạn sắp chuyển đến London không?"
      },
      {
        "word": "try (v)",
        "ipa": "/traɪ/",
        "meaning": "thử",
        "example_en": "You should try this delicious cake.",
        "example_vi": "Bạn nên thử chiếc bánh ngon này."
      },
      {
        "word": "tune (music) (n)",
        "ipa": "/tun/",
        "meaning": "giai điệu",
        "example_en": "I really like the tune of this song.",
        "example_vi": "Tôi rất thích giai điệu của bài hát này."
      },
      {
        "word": "turn (v)",
        "ipa": "/tərn/",
        "meaning": "xoay",
        "example_en": "Turn left at the end of the street.",
        "example_vi": "Rẽ trái ở cuối con phố."
      },
      {
        "word": "turn off (phr v)",
        "ipa": "/tərn ɔf/",
        "meaning": "tắt",
        "example_en": "Please turn off the TV before going to bed.",
        "example_vi": "Vui lòng tắt tivi trước khi đi ngủ."
      },
      {
        "word": "turn on (phr v)",
        "ipa": "/tərn ɔn/",
        "meaning": "bật lên",
        "example_en": "Can you turn on the light?",
        "example_vi": "Bạn có thể bật đèn lên không?"
      },
      {
        "word": "twice (adv)",
        "ipa": "/twaɪs/",
        "meaning": "hai lần",
        "example_en": "I brush my teeth twice a day.",
        "example_vi": "Tôi đánh răng hai lần một ngày."
      },
      {
        "word": "type (n)",
        "ipa": "/taɪp/",
        "meaning": "kiểu",
        "example_en": "What type of music do you like?",
        "example_vi": "Bạn thích kiểu âm nhạc nào?"
      },
      {
        "word": "uncle (n)",
        "ipa": "/ˈəŋkəl/",
        "meaning": "chú",
        "example_en": "My uncle lives in Australia.",
        "example_vi": "Chú tôi sống ở Úc."
      },
      {
        "word": "under (prep)",
        "ipa": "/ˈəndər/",
        "meaning": "dưới",
        "example_en": "The cat is sleeping under the table.",
        "example_vi": "Con mèo đang ngủ dưới bàn."
      },
      {
        "word": "unfortunately (adj)",
        "ipa": "/ənˈfɔrʧənətli/",
        "meaning": "Không may",
        "example_en": "Unfortunately, it rained all day.",
        "example_vi": "Thật không may, trời đã mưa cả ngày."
      },
      {
        "word": "unusual (adj)",
        "ipa": "/ənˈjuˌʒuəl/",
        "meaning": "bất thường",
        "example_en": "It is unusual to see snow in April.",
        "example_vi": "Thật bất thường khi thấy tuyết vào tháng Tư."
      },
      {
        "word": "up (prep & adv)",
        "ipa": "/əp/",
        "meaning": "hướng lên",
        "example_en": "He looked up at the sky.",
        "example_vi": "Anh ấy nhìn lên bầu trời."
      },
      {
        "word": "upset (adj)",
        "ipa": "/ˈəpˌsɛt/",
        "meaning": "buồn bã",
        "example_en": "She was very upset when she lost her ring.",
        "example_vi": "Cô ấy rất buồn bã khi làm mất chiếc nhẫn của mình."
      },
      {
        "word": "us (pron)",
        "ipa": "/ʌs/ hoặc /əs/",
        "meaning": "chúng ta",
        "example_en": "Our teacher gave us a lot of homework.",
        "example_vi": "Giáo viên của chúng tôi đã cho chúng tôi rất nhiều bài tập về nhà."
      },
      {
        "word": "use (v)",
        "ipa": "/juz/",
        "meaning": "sử dụng",
        "example_en": "Can I use your pen, please?",
        "example_vi": "Tôi có thể sử dụng bút của bạn được không?"
      },
      {
        "word": "usual (adj)",
        "ipa": "/ˈjuʒəwəl/",
        "meaning": "thường",
        "example_en": "I will meet you at the usual time.",
        "example_vi": "Tôi sẽ gặp bạn vào thời gian thường lệ."
      },
      {
        "word": "v/versus (prep)",
        "ipa": "/ˈvɜːrsəs/",
        "meaning": "đấu với / chống lại",
        "example_en": "The match is Chelsea versus Arsenal.",
        "example_vi": "Trận đấu là Chelsea đấu với Arsenal."
      },
      {
        "word": "variety (n)",
        "ipa": "/vərˈaɪəti/",
        "meaning": "đa dạng",
        "example_en": "The shop sells a wide variety of toys.",
        "example_vi": "Cửa hàng bán nhiều loại đồ chơi đa dạng."
      },
      {
        "word": "various (adj)",
        "ipa": "/ˈvɛriəs/",
        "meaning": "nhiều",
        "example_en": "There are various ways to solve this problem.",
        "example_vi": "Có nhiều cách khác nhau để giải quyết vấn đề này."
      },
      {
        "word": "very (adv)",
        "ipa": "/ˈvɛri/",
        "meaning": "rất",
        "example_en": "I am very happy to see you.",
        "example_vi": "Tôi rất vui khi gặp bạn."
      },
      {
        "word": "view (n)",
        "ipa": "/vju/",
        "meaning": "quang cảnh / góc nhìn",
        "example_en": "We have a beautiful view of the sea.",
        "example_vi": "Chúng tôi có một quang cảnh biển tuyệt đẹp."
      },
      {
        "word": "village (n)",
        "ipa": "/ˈvɪlɪʤ/",
        "meaning": "làng bản",
        "example_en": "My grandparents live in a small village.",
        "example_vi": "Ông bà tôi sống ở một ngôi làng bản nhỏ."
      },
      {
        "word": "violin (n)",
        "ipa": "/vaɪəˈlɪn/",
        "meaning": "violon",
        "example_en": "She plays the violin very well.",
        "example_vi": "Cô ấy chơi đàn violon rất hay."
      },
      {
        "word": "visitor (n)",
        "ipa": "/ˈvɪzɪtər/",
        "meaning": "du khách",
        "example_en": "The museum has many visitors today.",
        "example_vi": "Bảo tàng có nhiều du khách hôm nay."
      },
      {
        "word": "wait (v)",
        "ipa": "/weɪt/",
        "meaning": "Chờ đợi",
        "example_en": "Please wait for me at the bus stop.",
        "example_vi": "Vui lòng chờ đợi tôi ở trạm xe buýt."
      },
      {
        "word": "wake (v)",
        "ipa": "/weɪk/",
        "meaning": "thức dậy",
        "example_en": "I usually wake early in the morning.",
        "example_vi": "Tôi thường thức dậy sớm vào buổi sáng."
      },
      {
        "word": "wake up (phr v)",
        "ipa": "/weɪk əp/",
        "meaning": "thức dậy",
        "example_en": "I wake up at 7 o'clock every day.",
        "example_vi": "Tôi thức dậy lúc 7 giờ mỗi ngày."
      },
      {
        "word": "walking (n)",
        "ipa": "/ˈwɔkɪŋ/",
        "meaning": "đi bộ",
        "example_en": "Walking is good for your health.",
        "example_vi": "Đi bộ rất tốt cho sức khỏe của bạn."
      },
      {
        "word": "want (v)",
        "ipa": "/wɔnt/",
        "meaning": "muốn",
        "example_en": "I want to buy a new car.",
        "example_vi": "Tôi muốn mua một chiếc ô tô mới."
      },
      {
        "word": "washing-up (n)",
        "ipa": "/ˌwɒʃ.ɪŋˈʌp/",
        "meaning": "rửa bát",
        "example_en": "He always helps his mother with the washing-up.",
        "example_vi": "Anh ấy luôn giúp mẹ rửa bát."
      },
      {
        "word": "way (n)",
        "ipa": "/weɪ/",
        "meaning": "đường",
        "example_en": "Can you show me the way to the station?",
        "example_vi": "Bạn có thể chỉ cho tôi đường đến nhà ga không?"
      },
      {
        "word": "we (pron)",
        "ipa": "/wi/",
        "meaning": "chúng tôi",
        "example_en": "We are going to the cinema tonight.",
        "example_vi": "Chúng tôi sẽ đi xem phim tối nay."
      },
      {
        "word": "welcome (adj & exclam)",
        "ipa": "/ˈwɛlkəm/",
        "meaning": "Chào mừng",
        "example_en": "Welcome to our new house!",
        "example_vi": "Chào mừng đến với ngôi nhà mới của chúng tôi!"
      },
      {
        "word": "wet (adj)",
        "ipa": "/wɛt/",
        "meaning": "ướt",
        "example_en": "Take an umbrella, or you will get wet.",
        "example_vi": "Mang theo ô đi, nếu không bạn sẽ bị ướt."
      },
      {
        "word": "whale (n)",
        "ipa": "/weɪl/",
        "meaning": "cá voi",
        "example_en": "We saw a big whale in the ocean.",
        "example_vi": "Chúng tôi đã nhìn thấy một con cá voi lớn trên đại dương."
      },
      {
        "word": "what (det & pron)",
        "ipa": "/wət/",
        "meaning": "Gì",
        "example_en": "What is your name?",
        "example_vi": "Tên của bạn là gì?"
      },
      {
        "word": "when (adv)",
        "ipa": "/wɪn/",
        "meaning": "khi",
        "example_en": "I will call you when I arrive.",
        "example_vi": "Tôi sẽ gọi cho bạn khi tôi đến."
      },
      {
        "word": "where (adv)",
        "ipa": "/wɛr/",
        "meaning": "Ở đâu",
        "example_en": "Where do you live?",
        "example_vi": "Bạn sống ở đâu?"
      },
      {
        "word": "which (det & pron)",
        "ipa": "/wɪʧ/",
        "meaning": "cái mà",
        "example_en": "Which book do you like?",
        "example_vi": "Bạn thích cuốn sách nào?"
      },
      {
        "word": "while (conj)",
        "ipa": "/waɪl/",
        "meaning": "trong khi",
        "example_en": "I read a book while he was sleeping.",
        "example_vi": "Tôi đọc sách trong khi anh ấy đang ngủ."
      },
      {
        "word": "white (adj)",
        "ipa": "/waɪt/",
        "meaning": "trắng",
        "example_en": "She is wearing a white dress.",
        "example_vi": "Cô ấy đang mặc một chiếc váy màu trắng."
      },
      {
        "word": "who (pron)",
        "ipa": "/hu/",
        "meaning": "Ai",
        "example_en": "Who is that man?",
        "example_vi": "Người đàn ông đó là ai?"
      },
      {
        "word": "whole (adj & n)",
        "ipa": "/hoʊl/",
        "meaning": "trọn",
        "example_en": "I ate the whole pizza.",
        "example_vi": "Tôi đã ăn trọn chiếc bánh pizza."
      },
      {
        "word": "whose (det & pron)",
        "ipa": "/huz/",
        "meaning": "của ai",
        "example_en": "Whose bag is this?",
        "example_vi": "Cái túi này là của ai?"
      },
      {
        "word": "why (adv)",
        "ipa": "/waɪ/",
        "meaning": "Tại sao",
        "example_en": "Why are you late?",
        "example_vi": "Tại sao bạn đến muộn?"
      },
      {
        "word": "wide (adj)",
        "ipa": "/waɪd/",
        "meaning": "rộng",
        "example_en": "The river is very wide.",
        "example_vi": "Con sông rất rộng."
      },
      {
        "word": "wife (n)",
        "ipa": "/waɪf/",
        "meaning": "vợ",
        "example_en": "This is my beautiful wife.",
        "example_vi": "Đây là người vợ xinh đẹp của tôi."
      },
      {
        "word": "wild (adj)",
        "ipa": "/waɪld/",
        "meaning": "hoang dã",
        "example_en": "We saw some wild animals in the forest.",
        "example_vi": "Chúng tôi đã nhìn thấy một vài loài động vật hoang dã trong rừng."
      },
      {
        "word": "wildlife (n)",
        "ipa": "/ˈwaɪlˌdlaɪf/",
        "meaning": "động vật hoang dã",
        "example_en": "They want to protect the local wildlife.",
        "example_vi": "Họ muốn bảo vệ động vật hoang dã địa phương."
      },
      {
        "word": "will ('ll) (mv)",
        "ipa": "/wɪl/",
        "meaning": "sẽ",
        "example_en": "I will go to the supermarket tomorrow.",
        "example_vi": "Tôi sẽ đi siêu thị vào ngày mai."
      },
      {
        "word": "windy (adj)",
        "ipa": "/ˈwɪndi/",
        "meaning": "có gió",
        "example_en": "It is very windy today.",
        "example_vi": "Hôm nay trời rất có gió."
      },
      {
        "word": "winner (n)",
        "ipa": "/ˈwɪnər/",
        "meaning": "người chiến thắng",
        "example_en": "He is the winner of the race.",
        "example_vi": "Anh ấy là người chiến thắng của cuộc đua."
      },
      {
        "word": "wish (n)",
        "ipa": "/wɪʃ/",
        "meaning": "ước",
        "example_en": "Make a wish and blow out the candles.",
        "example_vi": "Hãy ước một điều và thổi nến."
      },
      {
        "word": "with (prep)",
        "ipa": "/wɪθ/",
        "meaning": "với",
        "example_en": "I went to the park with my friends.",
        "example_vi": "Tôi đã đi đến công viên với bạn bè của mình."
      },
      {
        "word": "without (prep)",
        "ipa": "/wɪˈθaʊt/",
        "meaning": "không có",
        "example_en": "I cannot live without water.",
        "example_vi": "Tôi không thể sống mà không có nước."
      },
      {
        "word": "woman (n)",
        "ipa": "/ˈwʊmən/",
        "meaning": "đàn bà",
        "example_en": "She is a very kind woman.",
        "example_vi": "Cô ấy là một người đàn bà rất tốt bụng."
      },
      {
        "word": "wonderful (adj)",
        "ipa": "/ˈwəndərfəl/",
        "meaning": "tuyệt vời",
        "example_en": "We had a wonderful time at the party.",
        "example_vi": "Chúng tôi đã có một khoảng thời gian tuyệt vời tại bữa tiệc."
      },
      {
        "word": "wooden (adj)",
        "ipa": "/ˈwʊdən/",
        "meaning": "bằng gỗ",
        "example_en": "They bought a large wooden table.",
        "example_vi": "Họ đã mua một chiếc bàn bằng gỗ lớn."
      },
      {
        "word": "worry (v)",
        "ipa": "/ˈwəri/",
        "meaning": "lo lắng",
        "example_en": "Don't worry, everything will be fine.",
        "example_vi": "Đừng lo lắng, mọi chuyện sẽ ổn thôi."
      },
      {
        "word": "worse (adj)",
        "ipa": "/wərs/",
        "meaning": "tệ hơn",
        "example_en": "The weather is worse today than yesterday.",
        "example_vi": "Thời tiết hôm nay tệ hơn hôm qua."
      },
      {
        "word": "worst (adj)",
        "ipa": "/wərst/",
        "meaning": "tồi tệ nhất",
        "example_en": "This is the worst movie I have ever seen.",
        "example_vi": "Đây là bộ phim tồi tệ nhất mà tôi từng xem."
      },
      {
        "word": "would (mv)",
        "ipa": "/wʊd/",
        "meaning": "sẽ",
        "example_en": "Would you like a cup of tea?",
        "example_vi": "Bạn sẽ muốn một tách trà chứ?"
      },
      {
        "word": "wow (exclam)",
        "ipa": "/waʊ/",
        "meaning": "Ồ",
        "example_en": "Wow, your new car is amazing!",
        "example_vi": "Ồ, chiếc xe mới của bạn thật tuyệt!"
      },
      {
        "word": "writing (n)",
        "ipa": "/ˈraɪtɪŋ/",
        "meaning": "viết",
        "example_en": "The students are practicing their writing.",
        "example_vi": "Các học sinh đang luyện viết."
      },
      {
        "word": "wrong (adj)",
        "ipa": "/rɔŋ/",
        "meaning": "sai",
        "example_en": "You have the wrong number.",
        "example_vi": "Bạn đã gọi sai số."
      },
      {
        "word": "Yeah! (exclam)",
        "ipa": "/jæ!/",
        "meaning": "Vâng!",
        "example_en": "Yeah, that sounds like a great idea!",
        "example_vi": "Vâng! Nghe có vẻ là một ý tưởng tuyệt vời!"
      },
      {
        "word": "yellow (adj)",
        "ipa": "/ˈjɛloʊ/",
        "meaning": "màu vàng",
        "example_en": "My favourite colour is yellow.",
        "example_vi": "Màu yêu thích của tôi là màu vàng."
      },
      {
        "word": "yes (adv)",
        "ipa": "/jɛs/",
        "meaning": "Đúng",
        "example_en": "Yes, I can speak English.",
        "example_vi": "Đúng, tôi có thể nói tiếng Anh."
      },
      {
        "word": "you (pron)",
        "ipa": "/ju/",
        "meaning": "Bạn",
        "example_en": "Are you ready to go?",
        "example_vi": "Bạn đã sẵn sàng đi chưa?"
      },
      {
        "word": "young (adj)",
        "ipa": "/jəŋ/",
        "meaning": "trẻ",
        "example_en": "She is very young.",
        "example_vi": "Cô ấy còn rất trẻ."
      },
      {
        "word": "your (det)",
        "ipa": "/jʊr/",
        "meaning": "của bạn",
        "example_en": "Is this your pen?",
        "example_vi": "Đây có phải là bút của bạn không?"
      },
      {
        "word": "yours (pron)",
        "ipa": "/jʊrz/",
        "meaning": "của bạn",
        "example_en": "The black car is yours.",
        "example_vi": "Chiếc xe ô tô màu đen là của bạn."
      },
      {
        "word": "yourself (pron)",
        "ipa": "/ˈjɔrsɛlf/",
        "meaning": "bản thân bạn",
        "example_en": "Please take care of yourself.",
        "example_vi": "Xin hãy chăm sóc tốt cho bản thân bạn."
      },
      {
        "word": "zero (n)",
        "ipa": "/ˈziroʊ/",
        "meaning": "không",
        "example_en": "The temperature is zero degrees today.",
        "example_vi": "Nhiệt độ hôm nay là không độ."
      },
      {
        "word": "zoo (n)",
        "ipa": "/zu/",
        "meaning": "sở thú",
        "example_en": "We went to the zoo to see the monkeys.",
        "example_vi": "Chúng tôi đã đi đến sở thú để xem những con khỉ."
      }
    ]
  },
  {
    "topic": "ĂN UỐNG",
    "words": [
      {
        "word": "apple (n)",
        "ipa": "/ˈæpəl/",
        "meaning": "quả táo",
        "example_en": "I eat an apple every day.",
        "example_vi": "Tôi ăn một quả táo mỗi ngày."
      },
      {
        "word": "bake (v)",
        "ipa": "/beɪk/",
        "meaning": "nướng",
        "example_en": "My mom is baking a cake.",
        "example_vi": "Mẹ tôi đang nướng một chiếc bánh."
      },
      {
        "word": "banana (n)",
        "ipa": "/bəˈnænə/",
        "meaning": "chuối",
        "example_en": "Monkeys love to eat bananas.",
        "example_vi": "Những con khỉ rất thích ăn chuối."
      },
      {
        "word": "bean (n)",
        "ipa": "/bin/",
        "meaning": "hạt đậu",
        "example_en": "Do you like eating green beans?",
        "example_vi": "Bạn có thích ăn hạt đậu không?"
      },
      {
        "word": "biscuit (n) (Br Eng) (Am Eng: cookie)",
        "ipa": "/ˈbɪskət/",
        "meaning": "bánh quy",
        "example_en": "I had a biscuit with my tea.",
        "example_vi": "Tôi đã ăn một chiếc bánh quy với trà của tôi."
      },
      {
        "word": "boil (v)",
        "ipa": "/bɔɪl/",
        "meaning": "đun sôi",
        "example_en": "Please boil some water for tea.",
        "example_vi": "Vui lòng đun sôi một ít nước để pha trà."
      },
      {
        "word": "bottle (n)",
        "ipa": "/ˈbɑtəl/",
        "meaning": "cái chai",
        "example_en": "I bought a bottle of water.",
        "example_vi": "Tôi đã mua một cái chai nước."
      },
      {
        "word": "bowl (n)",
        "ipa": "/boʊl/",
        "meaning": "cái bát",
        "example_en": "She ate a large bowl of soup.",
        "example_vi": "Cô ấy đã ăn một cái bát súp lớn."
      },
      {
        "word": "bread (n)",
        "ipa": "/brɛd/",
        "meaning": "bánh mỳ",
        "example_en": "Would you like some bread and butter?",
        "example_vi": "Bạn có muốn một ít bánh mỳ và bơ không?"
      },
      {
        "word": "breakfast (n)",
        "ipa": "/ˈbrɛkfəst/",
        "meaning": "bữa sáng",
        "example_en": "I usually have eggs for breakfast.",
        "example_vi": "Tôi thường ăn trứng vào bữa sáng."
      },
      {
        "word": "butter (n)",
        "ipa": "/ˈbətər/",
        "meaning": "bơ",
        "example_en": "Put some butter on the bread.",
        "example_vi": "Hãy phết một ít bơ lên bánh mỳ."
      },
      {
        "word": "cafe/café (n)",
        "ipa": "/kəˈfeɪ/",
        "meaning": "quán cà phê",
        "example_en": "Let's meet at the cafe near the station.",
        "example_vi": "Hãy gặp nhau ở quán cà phê gần nhà ga."
      },
      {
        "word": "cake (n)",
        "ipa": "/keɪk/",
        "meaning": "bánh ngọt",
        "example_en": "This chocolate cake is very delicious.",
        "example_vi": "Chiếc bánh ngọt sô cô la này rất ngon."
      },
      {
        "word": "candy (n)",
        "ipa": "/ˈkændi/",
        "meaning": "kẹo",
        "example_en": "Children love eating candy.",
        "example_vi": "Trẻ em rất thích ăn kẹo."
      },
      {
        "word": "carrot (n)",
        "ipa": "/ˈkɛrət/",
        "meaning": "cà rốt",
        "example_en": "Rabbits like to eat carrots.",
        "example_vi": "Thỏ thích ăn cà rốt."
      },
      {
        "word": "cheese (n)",
        "ipa": "/ʧiz/",
        "meaning": "phô mai",
        "example_en": "I love eating pizza with extra cheese.",
        "example_vi": "Tôi thích ăn pizza với nhiều phô mai hơn."
      },
      {
        "word": "chicken (n)",
        "ipa": "/ˈʧɪkən/",
        "meaning": "thịt gà",
        "example_en": "We are having roast chicken for dinner.",
        "example_vi": "Chúng tôi sẽ ăn thịt gà nướng cho bữa tối."
      },
      {
        "word": "chilli (n)",
        "ipa": "/ˈtʃɪl.i/",
        "meaning": "ớt",
        "example_en": "This food has a lot of chilli in it.",
        "example_vi": "Món ăn này có rất nhiều ớt."
      },
      {
        "word": "chips (n pl)",
        "ipa": "/ʧɪps/",
        "meaning": "khoai tây chiên (Anh-Anh) / snack",
        "example_en": "We bought fish and chips for lunch.",
        "example_vi": "Chúng tôi đã mua cá và khoai tây chiên cho bữa trưa."
      },
      {
        "word": "chocolate (n)",
        "ipa": "/ˈʧɔklət/",
        "meaning": "sôcôla",
        "example_en": "I bought a box of chocolate for her.",
        "example_vi": "Tôi đã mua một hộp sôcôla cho cô ấy."
      },
      {
        "word": "coffee (n)",
        "ipa": "/ˈkɔfi/",
        "meaning": "cà phê",
        "example_en": "I drink a cup of coffee every morning.",
        "example_vi": "Tôi uống một tách cà phê mỗi buổi sáng."
      },
      {
        "word": "cook (n & v)",
        "ipa": "/kʊk/",
        "meaning": "đầu bếp",
        "example_en": "My father is a great cook.",
        "example_vi": "Bố tôi là một đầu bếp tuyệt vời."
      },
      {
        "word": "cooker (n)",
        "ipa": "/ˈkʊkər/",
        "meaning": "nồi cơm điện",
        "example_en": "Please put the rice in the cooker.",
        "example_vi": "Vui lòng cho gạo vào nồi cơm điện."
      },
      {
        "word": "cream (adj & n)",
        "ipa": "/krim/",
        "meaning": "kem",
        "example_en": "Do you want some cream in your coffee?",
        "example_vi": "Bạn có muốn một ít kem trong cà phê của bạn không?"
      },
      {
        "word": "cup (n)",
        "ipa": "/kəp/",
        "meaning": "tách",
        "example_en": "She is drinking a cup of tea.",
        "example_vi": "Cô ấy đang uống một tách trà."
      },
      {
        "word": "cut (v)",
        "ipa": "/kət/",
        "meaning": "cắt",
        "example_en": "He cut the paper with a pair of scissors.",
        "example_vi": "Anh ấy đã cắt tờ giấy bằng một cây kéo."
      },
      {
        "word": "delicious (adj)",
        "ipa": "/dɪˈlɪʃəs/",
        "meaning": "thơm ngon",
        "example_en": "The food at this restaurant is very delicious.",
        "example_vi": "Thức ăn ở nhà hàng này rất thơm ngon."
      },
      {
        "word": "dessert (n)",
        "ipa": "/dɪˈzərt/",
        "meaning": "món tráng miệng",
        "example_en": "We had ice cream for dessert.",
        "example_vi": "Chúng tôi đã ăn kem cho món tráng miệng."
      },
      {
        "word": "dish (n)",
        "ipa": "/dɪʃ/",
        "meaning": "món ăn",
        "example_en": "Pho is a famous Vietnamese dish.",
        "example_vi": "Phở là một món ăn nổi tiếng của Việt Nam."
      },
      {
        "word": "drink (n & v)",
        "ipa": "/drɪŋk/",
        "meaning": "uống",
        "example_en": "You should drink a lot of water every day.",
        "example_vi": "Bạn nên uống nhiều nước mỗi ngày."
      },
      {
        "word": "eat (v)",
        "ipa": "/it/",
        "meaning": "ăn",
        "example_en": "I like to eat fresh fruit.",
        "example_vi": "Tôi thích ăn hoa quả tươi."
      },
      {
        "word": "egg (n)",
        "ipa": "/ɛg/",
        "meaning": "trứng",
        "example_en": "She boiled an egg for breakfast.",
        "example_vi": "Cô ấy đã luộc một quả trứng cho bữa sáng."
      },
      {
        "word": "fast food (n)",
        "ipa": "/fæst fud/",
        "meaning": "thức ăn nhanh",
        "example_en": "Fast food is not good for your health.",
        "example_vi": "Thức ăn nhanh không tốt cho sức khỏe của bạn."
      },
      {
        "word": "fish (n & v)",
        "ipa": "/fɪʃ/",
        "meaning": "cá",
        "example_en": "My cat likes to eat fish.",
        "example_vi": "Con mèo của tôi thích ăn cá."
      },
      {
        "word": "food (n)",
        "ipa": "/fud/",
        "meaning": "đồ ăn",
        "example_en": "This supermarket sells a lot of fresh food.",
        "example_vi": "Siêu thị này bán rất nhiều đồ ăn tươi."
      },
      {
        "word": "fork (n)",
        "ipa": "/fɔrk/",
        "meaning": "cái nĩa",
        "example_en": "Can you bring me a knife and a fork?",
        "example_vi": "Bạn có thể mang cho tôi một con dao và một cái nĩa không?"
      },
      {
        "word": "fried (adj)",
        "ipa": "/fraɪd/",
        "meaning": "chiên",
        "example_en": "I want to eat fried chicken today.",
        "example_vi": "Hôm nay tôi muốn ăn gà chiên."
      },
      {
        "word": "fruit (n)",
        "ipa": "/frut/",
        "meaning": "hoa quả",
        "example_en": "Apples and bananas are my favourite fruits.",
        "example_vi": "Táo và chuối là những loại hoa quả yêu thích của tôi."
      },
      {
        "word": "garlic (n)",
        "ipa": "/ˈgɑrlɪk/",
        "meaning": "tỏi",
        "example_en": "Add some garlic to the soup for a better taste.",
        "example_vi": "Thêm một ít tỏi vào món súp để có hương vị ngon hơn."
      },
      {
        "word": "glass (n & adj)",
        "ipa": "/glæs/",
        "meaning": "thủy tinh",
        "example_en": "The window is made of glass.",
        "example_vi": "Cửa sổ được làm bằng thủy tinh."
      },
      {
        "word": "grape (n)",
        "ipa": "/greɪp/",
        "meaning": "quả nho",
        "example_en": "I bought a bunch of sweet grapes.",
        "example_vi": "Tôi đã mua một chùm quả nho ngọt."
      },
      {
        "word": "hungry (adj)",
        "ipa": "/ˈhəŋgri/",
        "meaning": "đói bụng",
        "example_en": "I am very hungry now.",
        "example_vi": "Bây giờ tôi đang rất đói bụng."
      },
      {
        "word": "ice (n)",
        "ipa": "/aɪs/",
        "meaning": "đá",
        "example_en": "Would you like some ice in your drink?",
        "example_vi": "Bạn có muốn một ít đá trong đồ uống của mình không?"
      },
      {
        "word": "ice cream (n)",
        "ipa": "/aɪs krim/",
        "meaning": "kem",
        "example_en": "My children love eating chocolate ice cream.",
        "example_vi": "Các con tôi rất thích ăn kem sô cô la."
      },
      {
        "word": "ice skating (n)",
        "ipa": "/aɪs ˈskeɪtɪŋ/",
        "meaning": "trượt băng",
        "example_en": "We go ice skating every winter.",
        "example_vi": "Chúng tôi đi trượt băng vào mỗi mùa đông."
      },
      {
        "word": "jam (n)",
        "ipa": "/ʤæm/",
        "meaning": "mứt",
        "example_en": "I like to eat bread with strawberry jam.",
        "example_vi": "Tôi thích ăn bánh mì với mứt dâu tây."
      },
      {
        "word": "juice (n)",
        "ipa": "/ʤus/",
        "meaning": "nước ép",
        "example_en": "Do you want some apple juice?",
        "example_vi": "Bạn có muốn một chút nước ép táo không?"
      },
      {
        "word": "knife (n)",
        "ipa": "/naɪf/",
        "meaning": "dao",
        "example_en": "I need a knife to cut this meat.",
        "example_vi": "Tôi cần một con dao để cắt chỗ thịt này."
      },
      {
        "word": "lemon (n)",
        "ipa": "/ˈlɛmən/",
        "meaning": "chanh vàng",
        "example_en": "Can I have a slice of lemon in my water?",
        "example_vi": "Cho tôi một lát chanh vàng vào nước được không?"
      },
      {
        "word": "lemonade (n)",
        "ipa": "/ˈlɛməˈneɪd/",
        "meaning": "nước chanh",
        "example_en": "She is drinking a glass of cold lemonade.",
        "example_vi": "Cô ấy đang uống một cốc nước chanh lạnh."
      },
      {
        "word": "lunch (n)",
        "ipa": "/lənʧ/",
        "meaning": "bữa trưa",
        "example_en": "What time do you have lunch?",
        "example_vi": "Bạn ăn trưa lúc mấy giờ?"
      },
      {
        "word": "meal (n)",
        "ipa": "/mil/",
        "meaning": "bữa ăn",
        "example_en": "Breakfast is the most important meal of the day.",
        "example_vi": "Bữa sáng là bữa ăn quan trọng nhất trong ngày."
      },
      {
        "word": "meat (n)",
        "ipa": "/mit/",
        "meaning": "thịt",
        "example_en": "He does not eat meat because he is a vegetarian.",
        "example_vi": "Anh ấy không ăn thịt vì anh ấy là người ăn chay."
      },
      {
        "word": "melon (n)",
        "ipa": "/ˈmɛlən/",
        "meaning": "dưa gang",
        "example_en": "We had some sweet melon for dessert.",
        "example_vi": "Chúng tôi đã ăn một ít dưa gang ngọt cho món tráng miệng."
      },
      {
        "word": "menu (n)",
        "ipa": "/ˈmɛnju/",
        "meaning": "thực đơn",
        "example_en": "Can you bring me the menu, please?",
        "example_vi": "Bạn có thể mang cho tôi thực đơn được không?"
      },
      {
        "word": "milk (n)",
        "ipa": "/mɪlk/",
        "meaning": "sữa",
        "example_en": "Don't forget to buy a bottle of milk.",
        "example_vi": "Đừng quên mua một chai sữa."
      },
      {
        "word": "mineral water (n)",
        "ipa": "/ˈmɪnərəl ˈwɔtər/",
        "meaning": "nước khoáng",
        "example_en": "I always drink a lot of mineral water.",
        "example_vi": "Tôi luôn uống nhiều nước khoáng."
      },
      {
        "word": "mushroom (n)",
        "ipa": "/ˈməʃrum/",
        "meaning": "nấm",
        "example_en": "There are some mushrooms in this soup.",
        "example_vi": "Có một ít nấm trong món súp này."
      },
      {
        "word": "omelette (n)",
        "ipa": "/ˈɒm.lət/",
        "meaning": "trứng tráng",
        "example_en": "I am making a cheese omelette for breakfast.",
        "example_vi": "Tôi đang làm một món trứng tráng phô mai cho bữa sáng."
      },
      {
        "word": "onion (n)",
        "ipa": "/ˈənjən/",
        "meaning": "củ hành",
        "example_en": "I cried when I cut the onion.",
        "example_vi": "Tôi đã khóc khi cắt củ hành."
      },
      {
        "word": "orange (adj & n)",
        "ipa": "/ˈɔrɪnʤ/",
        "meaning": "quả cam",
        "example_en": "I eat an orange every day.",
        "example_vi": "Tôi ăn một quả cam mỗi ngày."
      },
      {
        "word": "pasta (n)",
        "ipa": "/ˈpɑstə/",
        "meaning": "mì ống",
        "example_en": "My favourite Italian food is pasta.",
        "example_vi": "Món ăn Ý yêu thích của tôi là mì ống."
      },
      {
        "word": "pear (n)",
        "ipa": "/pɛr/",
        "meaning": "quả lê",
        "example_en": "This pear is very sweet and juicy.",
        "example_vi": "Quả lê này rất ngọt và nhiều nước."
      },
      {
        "word": "pepper (n)",
        "ipa": "/ˈpɛpər/",
        "meaning": "hạt tiêu",
        "example_en": "Would you like some salt and pepper?",
        "example_vi": "Bạn có muốn một chút muối và hạt tiêu không?"
      },
      {
        "word": "pizza (n)",
        "ipa": "/ˈpitsə/",
        "meaning": "pizza",
        "example_en": "We ordered a large pizza for dinner.",
        "example_vi": "Chúng tôi đã gọi một chiếc bánh pizza lớn cho bữa tối."
      },
      {
        "word": "plate (n)",
        "ipa": "/pleɪt/",
        "meaning": "đĩa",
        "example_en": "Put the food on a clean plate.",
        "example_vi": "Hãy đặt thức ăn lên một chiếc đĩa sạch."
      },
      {
        "word": "potato (n)",
        "ipa": "/pəˈteɪˌtoʊ/",
        "meaning": "khoai tây",
        "example_en": "Do you prefer rice or potatoes?",
        "example_vi": "Bạn thích cơm hay khoai tây hơn?"
      },
      {
        "word": "recipe (n)",
        "ipa": "/ˈrɛsəpi/",
        "meaning": "công thức",
        "example_en": "This cake recipe is very easy to follow.",
        "example_vi": "Công thức làm bánh này rất dễ làm theo."
      },
      {
        "word": "restaurant (n)",
        "ipa": "/ˈrɛˌstrɑnt/",
        "meaning": "nhà hàng",
        "example_en": "They opened a new seafood restaurant in town.",
        "example_vi": "Họ đã mở một nhà hàng hải sản mới trong thị trấn."
      },
      {
        "word": "rice (n)",
        "ipa": "/raɪs/",
        "meaning": "cơm",
        "example_en": "We eat rice with almost every meal.",
        "example_vi": "Chúng tôi ăn cơm trong hầu hết mọi bữa ăn."
      },
      {
        "word": "roast (v & adj)",
        "ipa": "/roʊst/",
        "meaning": "quay nướng / được quay nướng",
        "example_en": "We will have roast chicken for dinner.",
        "example_vi": "Chúng ta sẽ ăn món gà quay cho bữa tối."
      },
      {
        "word": "salad (n)",
        "ipa": "/ˈsæləd/",
        "meaning": "xa lát",
        "example_en": "She ordered a green salad with her meal.",
        "example_vi": "Cô ấy đã gọi một món xa lát xanh cùng với bữa ăn của mình."
      },
      {
        "word": "salt (n)",
        "ipa": "/sɔlt/",
        "meaning": "muối",
        "example_en": "Don't put too much salt in the soup.",
        "example_vi": "Đừng cho quá nhiều muối vào súp."
      },
      {
        "word": "sandwich (n)",
        "ipa": "/ˈsænwɪʧ/",
        "meaning": "sandwich",
        "example_en": "I usually have a sandwich for lunch.",
        "example_vi": "Tôi thường ăn bánh mì sandwich cho bữa trưa."
      },
      {
        "word": "sauce (n)",
        "ipa": "/sɔs/",
        "meaning": "nước xốt",
        "example_en": "This tomato sauce is very delicious.",
        "example_vi": "Nước xốt cà chua này rất ngon."
      },
      {
        "word": "sausage (n)",
        "ipa": "/ˈsɔsɪʤ/",
        "meaning": "xúc xích",
        "example_en": "He ate a hot dog with a big sausage.",
        "example_vi": "Anh ấy đã ăn một chiếc bánh mì kẹp xúc xích lớn."
      },
      {
        "word": "slice (n)",
        "ipa": "/slaɪs/",
        "meaning": "lát cắt",
        "example_en": "Can I have another slice of cake, please?",
        "example_vi": "Cho tôi một lát bánh nữa được không?"
      },
      {
        "word": "snack (n)",
        "ipa": "/snæk/",
        "meaning": "đồ ăn vặt",
        "example_en": "I brought some snacks for the trip.",
        "example_vi": "Tôi đã mang theo một vài món đồ ăn vặt cho chuyến đi."
      },
      {
        "word": "soup (n)",
        "ipa": "/sup/",
        "meaning": "canh",
        "example_en": "Chicken soup is good for you when you are cold.",
        "example_vi": "Canh gà rất tốt cho bạn khi bạn bị cảm lạnh."
      },
      {
        "word": "spoon (n)",
        "ipa": "/spun/",
        "meaning": "thìa",
        "example_en": "You need a spoon to eat soup.",
        "example_vi": "Bạn cần một chiếc thìa để ăn canh."
      },
      {
        "word": "steak (n)",
        "ipa": "/steɪk/",
        "meaning": "bít tết",
        "example_en": "He ordered a steak and some chips.",
        "example_vi": "Anh ấy đã gọi món bít tết và một ít khoai tây chiên."
      },
      {
        "word": "strawberry (n)",
        "ipa": "/ˈstrɔˌbɛri/",
        "meaning": "quả dâu",
        "example_en": "My sister loves strawberry ice cream.",
        "example_vi": "Em gái tôi rất thích kem dâu."
      },
      {
        "word": "sugar (n)",
        "ipa": "/ˈʃʊgər/",
        "meaning": "đường",
        "example_en": "Do you take sugar in your coffee?",
        "example_vi": "Bạn có cho đường vào cà phê không?"
      },
      {
        "word": "sweet (n & adj)",
        "ipa": "/swit/",
        "meaning": "ngọt",
        "example_en": "This fruit is very sweet.",
        "example_vi": "Loại quả này rất ngọt."
      },
      {
        "word": "tea (n)",
        "ipa": "/ti/",
        "meaning": "trà",
        "example_en": "Would you like a cup of green tea?",
        "example_vi": "Bạn có muốn một tách trà xanh không?"
      },
      {
        "word": "thirsty (adj)",
        "ipa": "/ˈθərsti/",
        "meaning": "khát",
        "example_en": "I am very thirsty, can I have some water?",
        "example_vi": "Tôi rất khát, cho tôi xin chút nước được không?"
      },
      {
        "word": "toast (n)",
        "ipa": "/toʊst/",
        "meaning": "bánh mì nướng",
        "example_en": "I had two pieces of toast for breakfast.",
        "example_vi": "Tôi đã ăn hai lát bánh mì nướng cho bữa sáng."
      },
      {
        "word": "tomato (n)",
        "ipa": "/təˈmɑˌtoʊ/",
        "meaning": "cà chua",
        "example_en": "We grow tomatoes in our garden.",
        "example_vi": "Chúng tôi trồng cà chua trong vườn."
      },
      {
        "word": "vegetable (n)",
        "ipa": "/ˈvɛʤtəbəl/",
        "meaning": "rau quả",
        "example_en": "You should eat more fresh vegetables.",
        "example_vi": "Bạn nên ăn nhiều rau quả tươi."
      },
      {
        "word": "waiter (n)",
        "ipa": "/ˈweɪtər/",
        "meaning": "phục vụ nam",
        "example_en": "The waiter brought our drinks quickly.",
        "example_vi": "Người phục vụ nam đã mang đồ uống của chúng tôi ra rất nhanh."
      },
      {
        "word": "waitress (n)",
        "ipa": "/ˈweɪtrəs/",
        "meaning": "cô hầu bàn",
        "example_en": "I asked the waitress for the bill.",
        "example_vi": "Tôi đã hỏi cô hầu bàn để thanh toán."
      },
      {
        "word": "wash up (phr v)",
        "ipa": "/wɑʃ əp/",
        "meaning": "rửa sạch",
        "example_en": "I will wash up the plates after dinner.",
        "example_vi": "Tôi sẽ rửa sạch đĩa sau bữa tối."
      },
      {
        "word": "water (n)",
        "ipa": "/ˈwɔtər/",
        "meaning": "Nước",
        "example_en": "Can I have a glass of water, please?",
        "example_vi": "Làm ơn cho tôi một cốc nước."
      },
      {
        "word": "yog(h)urt (n)",
        "ipa": "/ˈjoʊgərt/",
        "meaning": "da ua",
        "example_en": "I usually have strawberry yogurt for a snack.",
        "example_vi": "Tôi thường ăn da ua dâu tây như một món ăn vặt."
      }
    ]
  }
];