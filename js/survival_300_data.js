/**
 * BỘ DỮ LIỆU LỘ TRÌNH 30 NGÀY SINH TỒN (300 TỪ VỰNG A0 CHO NGƯỜI MẤT GỐC)
 * Tổng cộng: 30 Ngày x 10 Từ/Ngày = 300 Từ
 * Mỗi từ đầy đủ: id, word, ipa, phonetic, syllables, meaning, chunk, example, example_en, example_vi
 */

const survival300Topics = [
  {
    "day": 1,
    "title": "Ngày 1: Chào hỏi & Làm quen",
    "topic": "🌱 Ngày 1: Chào hỏi & Làm quen",
    "words": [
      { "id": 1, "word": "Hello", "ipa": "/həˈləʊ/", "phonetic": "/həˈləʊ/", "syllables": "hel-lo", "meaning": "Xin chào", "chunk": "Say hello to everyone", "example": "Hello, nice to meet you.", "example_en": "Hello, nice to meet you.", "example_vi": "Xin chào, rất vui được gặp bạn." },
      { "id": 2, "word": "Name", "ipa": "/neɪm/", "phonetic": "/neɪm/", "syllables": "name", "meaning": "Tên", "chunk": "What is your name?", "example": "My name is John.", "example_en": "My name is John.", "example_vi": "Tên của tôi là John." },
      { "id": 3, "word": "Nice", "ipa": "/naɪs/", "phonetic": "/naɪs/", "syllables": "nice", "meaning": "Tốt, đẹp, dễ thương", "chunk": "Have a nice day", "example": "It is a nice day.", "example_en": "It is a nice day.", "example_vi": "Hôm nay là một ngày đẹp trời." },
      { "id": 4, "word": "Meet", "ipa": "/miːt/", "phonetic": "/miːt/", "syllables": "meet", "meaning": "Gặp gỡ", "chunk": "Meet new friends", "example": "Nice to meet you.", "example_en": "Nice to meet you.", "example_vi": "Rất vui được gặp bạn." },
      { "id": 5, "word": "Friend", "ipa": "/frend/", "phonetic": "/frend/", "syllables": "friend", "meaning": "Bạn bè", "chunk": "Best friend forever", "example": "He is my friend.", "example_en": "He is my friend.", "example_vi": "Cậu ấy là bạn tôi." },
      { "id": 6, "word": "Help", "ipa": "/help/", "phonetic": "/help/", "syllables": "help", "meaning": "Giúp đỡ", "chunk": "Ask for help", "example": "Can you help me?", "example_en": "Can you help me?", "example_vi": "Bạn giúp tôi được không?" },
      { "id": 7, "word": "Please", "ipa": "/pliːz/", "phonetic": "/pliːz/", "syllables": "please", "meaning": "Làm ơn, xin vui lòng", "chunk": "Please help me", "example": "Sit down, please.", "example_en": "Sit down, please.", "example_vi": "Xin vui lòng ngồi xuống." },
      { "id": 8, "word": "Thanks", "ipa": "/θæŋks/", "phonetic": "/θæŋks/", "syllables": "thanks", "meaning": "Cảm ơn", "chunk": "Thanks a lot", "example": "Thanks for your help.", "example_en": "Thanks for your help.", "example_vi": "Cảm ơn bạn đã giúp đỡ." },
      { "id": 9, "word": "Sorry", "ipa": "/ˈsɒr.i/", "phonetic": "/ˈsɒr.i/", "syllables": "sor-ry", "meaning": "Xin lỗi", "chunk": "I am so sorry", "example": "Sorry, I am late.", "example_en": "Sorry, I am late.", "example_vi": "Xin lỗi, tôi đến muộn." },
      { "id": 10, "word": "Goodbye", "ipa": "/ˌɡʊdˈbaɪ/", "phonetic": "/ˌɡʊdˈbaɪ/", "syllables": "good-bye", "meaning": "Tạm biệt", "chunk": "Say goodbye now", "example": "Goodbye, see you tomorrow.", "example_en": "Goodbye, see you tomorrow.", "example_vi": "Tạm biệt, hẹn gặp lại ngày mai." }
    ]
  },
  {
    "day": 2,
    "title": "Ngày 2: Bản thân & Thông tin cá nhân",
    "topic": "🌱 Ngày 2: Bản thân & Thông tin cá nhân",
    "words": [
      { "id": 11, "word": "Age", "ipa": "/eɪdʒ/", "phonetic": "/eɪdʒ/", "syllables": "age", "meaning": "Tuổi tác", "chunk": "At my age", "example": "What is your age?", "example_en": "What is your age?", "example_vi": "Bạn bao nhiêu tuổi?" },
      { "id": 12, "word": "Live", "ipa": "/lɪv/", "phonetic": "/lɪv/", "syllables": "live", "meaning": "Sống, sinh sống", "chunk": "Live in Hanoi", "example": "I live in Vietnam.", "example_en": "I live in Vietnam.", "example_vi": "Tôi sống ở Việt Nam." },
      { "id": 13, "word": "Work", "ipa": "/wɜːk/", "phonetic": "/wɜːk/", "syllables": "work", "meaning": "Làm việc", "chunk": "Go to work", "example": "I work every day.", "example_en": "I work every day.", "example_vi": "Tôi làm việc mỗi ngày." },
      { "id": 14, "word": "Study", "ipa": "/ˈstʌd.i/", "phonetic": "/ˈstʌd.i/", "syllables": "stud-y", "meaning": "Học tập", "chunk": "Study English hard", "example": "I study English now.", "example_en": "I study English now.", "example_vi": "Bây giờ tôi học tiếng Anh." },
      { "id": 15, "word": "From", "ipa": "/frɒm/", "phonetic": "/frɒm/", "syllables": "from", "meaning": "Từ, đến từ", "chunk": "Come from Vietnam", "example": "Where are you from?", "example_en": "Where are you from?", "example_vi": "Bạn đến từ đâu?" },
      { "id": 16, "word": "Phone", "ipa": "/fəʊn/", "phonetic": "/fəʊn/", "syllables": "phone", "meaning": "Điện thoại", "chunk": "Call my phone", "example": "Give me your phone.", "example_en": "Give me your phone.", "example_vi": "Cho tôi số điện thoại của bạn." },
      { "id": 17, "word": "Address", "ipa": "/əˈdres/", "phonetic": "/əˈdres/", "syllables": "ad-dress", "meaning": "Địa chỉ", "chunk": "Home address", "example": "What is your address?", "example_en": "What is your address?", "example_vi": "Địa chỉ của bạn là gì?" },
      { "id": 18, "word": "Job", "ipa": "/dʒɒb/", "phonetic": "/dʒɒb/", "syllables": "job", "meaning": "Nghề nghiệp", "chunk": "Good job", "example": "I love my job.", "example_en": "I love my job.", "example_vi": "Tôi yêu công việc của mình." },
      { "id": 19, "word": "Student", "ipa": "/ˈstjuː.dənt/", "phonetic": "/ˈstjuː.dənt/", "syllables": "stu-dent", "meaning": "Học sinh, sinh viên", "chunk": "Good student", "example": "She is a student.", "example_en": "She is a student.", "example_vi": "Cô ấy là một học sinh." },
      { "id": 20, "word": "Teacher", "ipa": "/ˈtiː.tʃər/", "phonetic": "/ˈtiː.tʃər/", "syllables": "teach-er", "meaning": "Giáo viên", "chunk": "English teacher", "example": "My teacher is kind.", "example_en": "My teacher is kind.", "example_vi": "Giáo viên của tôi rất tốt bụng." }
    ]
  },
  {
    "day": 3,
    "title": "Ngày 3: Gia đình & Người thân",
    "topic": "🌱 Ngày 3: Gia đình & Người thân",
    "words": [
      { "id": 21, "word": "Family", "ipa": "/ˈfæm.əl.i/", "phonetic": "/ˈfæm.əl.i/", "syllables": "fam-i-ly", "meaning": "Gia đình", "chunk": "Big happy family", "example": "I love my family.", "example_en": "I love my family.", "example_vi": "Tôi yêu gia đình mình." },
      { "id": 22, "word": "Father", "ipa": "/ˈfɑː.ðər/", "phonetic": "/ˈfɑː.ðər/", "syllables": "fa-ther", "meaning": "Bố, cha", "chunk": "My dear father", "example": "My father is tall.", "example_en": "My father is tall.", "example_vi": "Bố tôi rất cao." },
      { "id": 23, "word": "Mother", "ipa": "/ˈmʌð.ər/", "phonetic": "/ˈmʌð.ər/", "syllables": "moth-er", "meaning": "Mẹ", "chunk": "Love my mother", "example": "My mother cooks well.", "example_en": "My mother cooks well.", "example_vi": "Mẹ tôi nấu ăn rất ngon." },
      { "id": 24, "word": "Brother", "ipa": "/ˈbrʌð.ər/", "phonetic": "/ˈbrʌð.ər/", "syllables": "broth-er", "meaning": "Anh trai, em trai", "chunk": "Big brother", "example": "I have one brother.", "example_en": "I have one brother.", "example_vi": "Tôi có một người anh trai." },
      { "id": 25, "word": "Sister", "ipa": "/ˈsɪs.tər/", "phonetic": "/ˈsɪs.tər/", "syllables": "sis-ter", "meaning": "Chị gái, em gái", "chunk": "Little sister", "example": "She is my sister.", "example_en": "She is my sister.", "example_vi": "Cô ấy là em gái tôi." },
      { "id": 26, "word": "Son", "ipa": "/sʌn/", "phonetic": "/sʌn/", "syllables": "son", "meaning": "Con trai", "chunk": "Only son", "example": "He is my son.", "example_en": "He is my son.", "example_vi": "Thằng bé là con trai tôi." },
      { "id": 27, "word": "Daughter", "ipa": "/ˈdɔː.tər/", "phonetic": "/ˈdɔː.tər/", "syllables": "daugh-ter", "meaning": "Con gái", "chunk": "Sweet daughter", "example": "She has a daughter.", "example_en": "She has a daughter.", "example_vi": "Cô ấy có một cô con gái." },
      { "id": 28, "word": "Baby", "ipa": "/ˈbeɪ.bi/", "phonetic": "/ˈbeɪ.bi/", "syllables": "ba-by", "meaning": "Em bé", "chunk": "Cute little baby", "example": "The baby is sleeping.", "example_en": "The baby is sleeping.", "example_vi": "Em bé đang ngủ." },
      { "id": 29, "word": "Parent", "ipa": "/ˈpeə.rənt/", "phonetic": "/ˈpeə.rənt/", "syllables": "par-ent", "meaning": "Phụ huynh, cha mẹ", "chunk": "Good parents", "example": "My parents are home.", "example_en": "My parents are home.", "example_vi": "Bố mẹ tôi đang ở nhà." },
      { "id": 30, "word": "Home", "ipa": "/həʊm/", "phonetic": "/həʊm/", "syllables": "home", "meaning": "Mái ấm, nhà", "chunk": "Go back home", "example": "Welcome to my home.", "example_en": "Welcome to my home.", "example_vi": "Chào mừng bạn đến nhà tôi." }
    ]
  },
  {
    "day": 4,
    "title": "Ngày 4: Cảm xúc & Tâm trạng",
    "topic": "🌱 Ngày 4: Cảm xúc & Tâm trạng",
    "words": [
      { "id": 31, "word": "Happy", "ipa": "/ˈhæp.i/", "phonetic": "/ˈhæp.i/", "syllables": "hap-py", "meaning": "Vui vẻ, hạnh phúc", "chunk": "Feel so happy", "example": "I am very happy.", "example_en": "I am very happy.", "example_vi": "Tôi rất vui vẻ." },
      { "id": 32, "word": "Sad", "ipa": "/sæd/", "phonetic": "/sæd/", "syllables": "sad", "meaning": "Buồn bã", "chunk": "Feel very sad", "example": "Do not be sad.", "example_en": "Do not be sad.", "example_vi": "Đừng buồn nhé." },
      { "id": 33, "word": "Tired", "ipa": "/taɪəd/", "phonetic": "/taɪəd/", "syllables": "tired", "meaning": "Mệt mỏi", "chunk": "Feel so tired", "example": "I am very tired.", "example_en": "I am very tired.", "example_vi": "Tôi đang rất mệt." },
      { "id": 34, "word": "Angry", "ipa": "/ˈæŋ.ɡri/", "phonetic": "/ˈæŋ.ɡri/", "syllables": "an-gry", "meaning": "Tức giận", "chunk": "Get angry quickly", "example": "Why are you angry?", "example_en": "Why are you angry?", "example_vi": "Sao bạn lại tức giận?" },
      { "id": 35, "word": "Hungry", "ipa": "/ˈhʌŋ.ɡri/", "phonetic": "/ˈhʌŋ.ɡri/", "syllables": "hun-gry", "meaning": "Đói bụng", "chunk": "Feel so hungry", "example": "I am so hungry.", "example_en": "I am so hungry.", "example_vi": "Tôi đói bụng quá." },
      { "id": 36, "word": "Thirsty", "ipa": "/ˈθɜː.sti/", "phonetic": "/ˈθɜː.sti/", "syllables": "thirst-y", "meaning": "Khát nước", "chunk": "Feel very thirsty", "example": "I need water now.", "example_en": "I need water now.", "example_vi": "Bây giờ tôi cần nước." },
      { "id": 37, "word": "Sick", "ipa": "/sɪk/", "phonetic": "/sɪk/", "syllables": "sick", "meaning": "Ốm, bệnh", "chunk": "Feel very sick", "example": "He is sick today.", "example_en": "He is sick today.", "example_vi": "Hôm nay anh ấy bị ốm." },
      { "id": 38, "word": "Scared", "ipa": "/skeəd/", "phonetic": "/skeəd/", "syllables": "scared", "meaning": "Sợ hãi", "chunk": "Be scared of", "example": "Do not be scared.", "example_en": "Do not be scared.", "example_vi": "Đừng sợ hãi." },
      { "id": 39, "word": "Fine", "ipa": "/faɪn/", "phonetic": "/faɪn/", "syllables": "fine", "meaning": "Ổn, khỏe", "chunk": "I am fine", "example": "Everything is fine now.", "example_en": "Everything is fine now.", "example_vi": "Mọi thứ bây giờ đều ổn." },
      { "id": 40, "word": "Great", "ipa": "/ɡreɪt/", "phonetic": "/ɡreɪt/", "syllables": "great", "meaning": "Tuyệt vời", "chunk": "Have a great time", "example": "You did a great job.", "example_en": "You did a great job.", "example_vi": "Bạn đã làm rất tuyệt vời." }
    ]
  },
  {
    "day": 5,
    "title": "Ngày 5: Thức ăn hàng ngày",
    "topic": "🌱 Ngày 5: Thức ăn hàng ngày",
    "words": [
      { "id": 41, "word": "Food", "ipa": "/fuːd/", "phonetic": "/fuːd/", "syllables": "food", "meaning": "Đồ ăn, thức ăn", "chunk": "Delicious food", "example": "This food is good.", "example_en": "This food is good.", "example_vi": "Thức ăn này rất ngon." },
      { "id": 42, "word": "Rice", "ipa": "/raɪs/", "phonetic": "/raɪs/", "syllables": "rice", "meaning": "Cơm, gạo", "chunk": "Eat hot rice", "example": "I eat rice daily.", "example_en": "I eat rice daily.", "example_vi": "Tôi ăn cơm mỗi ngày." },
      { "id": 43, "word": "Bread", "ipa": "/bred/", "phonetic": "/bred/", "syllables": "bread", "meaning": "Bánh mì", "chunk": "Fresh bread", "example": "I like hot bread.", "example_en": "I like hot bread.", "example_vi": "Tôi thích bánh mì nóng." },
      { "id": 44, "word": "Meat", "ipa": "/miːt/", "phonetic": "/miːt/", "syllables": "meat", "meaning": "Thịt", "chunk": "Eat fresh meat", "example": "We eat beef meat.", "example_en": "We eat beef meat.", "example_vi": "Chúng tôi ăn thịt bò." },
      { "id": 45, "word": "Fish", "ipa": "/fɪʃ/", "phonetic": "/fɪʃ/", "syllables": "fish", "meaning": "Cá", "chunk": "Fried fish", "example": "Cats love fresh fish.", "example_en": "Cats love fresh fish.", "example_vi": "Mèo rất thích cá tươi." },
      { "id": 46, "word": "Egg", "ipa": "/eɡ/", "phonetic": "/eɡ/", "syllables": "egg", "meaning": "Quả trứng", "chunk": "Boiled egg", "example": "I eat an egg.", "example_en": "I eat an egg.", "example_vi": "Tôi ăn một quả trứng." },
      { "id": 47, "word": "Water", "ipa": "/ˈwɔː.tər/", "phonetic": "/ˈwɔː.tər/", "syllables": "wa-ter", "meaning": "Nước uống", "chunk": "Drink pure water", "example": "Drink more water daily.", "example_en": "Drink more water daily.", "example_vi": "Hãy uống nhiều nước mỗi ngày." },
      { "id": 48, "word": "Milk", "ipa": "/mɪlk/", "phonetic": "/mɪlk/", "syllables": "milk", "meaning": "Sữa", "chunk": "Fresh cow milk", "example": "Babies drink sweet milk.", "example_en": "Babies drink sweet milk.", "example_vi": "Em bé uống sữa ngọt." },
      { "id": 49, "word": "Tea", "ipa": "/tiː/", "phonetic": "/tiː/", "syllables": "tea", "meaning": "Trà, chè", "chunk": "Hot green tea", "example": "I drink hot tea.", "example_en": "I drink hot tea.", "example_vi": "Tôi uống trà nóng." },
      { "id": 50, "word": "Coffee", "ipa": "/ˈkɒf.i/", "phonetic": "/ˈkɒf.i/", "syllables": "cof-fee", "meaning": "Cà phê", "chunk": "Black morning coffee", "example": "He loves black coffee.", "example_en": "He loves black coffee.", "example_vi": "Anh ấy thích cà phê đen." }
    ]
  },
  {
    "day": 6,
    "title": "Ngày 6: Trái cây & Rau củ",
    "topic": "🌱 Ngày 6: Trái cây & Rau củ",
    "words": [
      { "id": 51, "word": "Fruit", "ipa": "/fruːt/", "phonetic": "/fruːt/", "syllables": "fruit", "meaning": "Trái cây, hoa quả", "chunk": "Fresh sweet fruit", "example": "Eat fruit every day.", "example_en": "Eat fruit every day.", "example_vi": "Hãy ăn trái cây mỗi ngày." },
      { "id": 52, "word": "Apple", "ipa": "/ˈæp.əl/", "phonetic": "/ˈæp.əl/", "syllables": "ap-ple", "meaning": "Quả táo", "chunk": "Red sweet apple", "example": "I eat an apple.", "example_en": "I eat an apple.", "example_vi": "Tôi ăn một quả táo." },
      { "id": 53, "word": "Banana", "ipa": "/bəˈnɑː.nə/", "phonetic": "/bəˈnɑː.nə/", "syllables": "ba-na-na", "meaning": "Quả chuối", "chunk": "Yellow ripe banana", "example": "Monkeys like yellow bananas.", "example_en": "Monkeys like yellow bananas.", "example_vi": "Khỉ rất thích chuối vàng." },
      { "id": 54, "word": "Orange", "ipa": "/ˈɒr.ɪndʒ/", "phonetic": "/ˈɒr.ɪndʒ/", "syllables": "or-ange", "meaning": "Quả cam", "chunk": "Fresh orange juice", "example": "Give me an orange.", "example_en": "Give me an orange.", "example_vi": "Cho tôi một quả cam." },
      { "id": 55, "word": "Mango", "ipa": "/ˈmæŋ.ɡəʊ/", "phonetic": "/ˈmæŋ.ɡəʊ/", "syllables": "man-go", "meaning": "Quả xoài", "chunk": "Sweet ripe mango", "example": "I love sweet mangoes.", "example_en": "I love sweet mangoes.", "example_vi": "Tôi thích xoài ngọt." },
      { "id": 56, "word": "Tomato", "ipa": "/təˈmɑː.təʊ/", "phonetic": "/təˈmɑː.təʊ/", "syllables": "to-ma-to", "meaning": "Cà chua", "chunk": "Fresh red tomato", "example": "Tomato is very healthy.", "example_en": "Tomato is very healthy.", "example_vi": "Cà chua rất tốt cho sức khỏe." },
      { "id": 57, "word": "Potato", "ipa": "/pəˈteɪ.təʊ/", "phonetic": "/pəˈteɪ.təʊ/", "syllables": "po-ta-to", "meaning": "Khoai tây", "chunk": "Fried potato chips", "example": "We bake potato now.", "example_en": "We bake potato now.", "example_vi": "Bây giờ chúng tôi nướng khoai tây." },
      { "id": 58, "word": "Onion", "ipa": "/ˈʌn.jən/", "phonetic": "/ˈʌn.jən/", "syllables": "on-ion", "meaning": "Hành tây", "chunk": "Cut white onion", "example": "Onion makes me cry.", "example_en": "Onion makes me cry.", "example_vi": "Hành tây làm tôi cay mắt." },
      { "id": 59, "word": "Sweet", "ipa": "/swiːt/", "phonetic": "/swiːt/", "syllables": "sweet", "meaning": "Ngọt ngào", "chunk": "Sweet taste", "example": "This fruit is sweet.", "example_en": "This fruit is sweet.", "example_vi": "Quả này rất ngọt." },
      { "id": 60, "word": "Fresh", "ipa": "/freʃ/", "phonetic": "/freʃ/", "syllables": "fresh", "meaning": "Tươi mới", "chunk": "Fresh green vegetables", "example": "These fruits are fresh.", "example_en": "These fruits are fresh.", "example_vi": "Những quả này rất tươi." }
    ]
  },
  {
    "day": 7,
    "title": "Ngày 7: Quán ăn & Gọi món",
    "topic": "🌱 Ngày 7: Quán ăn & Gọi món",
    "words": [
      { "id": 61, "word": "Menu", "ipa": "/ˈmen.juː/", "phonetic": "/ˈmen.juː/", "syllables": "men-u", "meaning": "Thực đơn", "chunk": "Look at menu", "example": "Give me the menu.", "example_en": "Give me the menu.", "example_vi": "Cho tôi xem thực đơn." },
      { "id": 62, "word": "Order", "ipa": "/ˈɔː.dər/", "phonetic": "/ˈɔː.dər/", "syllables": "or-der", "meaning": "Gọi món, đặt hàng", "chunk": "Ready to order", "example": "I want to order.", "example_en": "I want to order.", "example_vi": "Tôi muốn gọi món." },
      { "id": 63, "word": "Eat", "ipa": "/iːt/", "phonetic": "/iːt/", "syllables": "eat", "meaning": "Ăn", "chunk": "Eat good food", "example": "Let us eat now.", "example_en": "Let us eat now.", "example_vi": "Chúng ta hãy ăn thôi." },
      { "id": 64, "word": "Drink", "ipa": "/drɪŋk/", "phonetic": "/drɪŋk/", "syllables": "drink", "meaning": "Uống", "chunk": "Drink cold water", "example": "What do you drink?", "example_en": "What do you drink?", "example_vi": "Bạn muốn uống gì?" },
      { "id": 65, "word": "Bill", "ipa": "/bɪl/", "phonetic": "/bɪl/", "syllables": "bill", "meaning": "Hóa đơn tính tiền", "chunk": "Pay the bill", "example": "Can I have bill?", "example_en": "Can I have bill?", "example_vi": "Cho tôi xin hóa đơn." },
      { "id": 66, "word": "Delicious", "ipa": "/dɪˈlɪʃ.əs/", "phonetic": "/dɪˈlɪʃ.əs/", "syllables": "de-li-cious", "meaning": "Ngon miệng", "chunk": "Very delicious food", "example": "This meal is delicious.", "example_en": "This meal is delicious.", "example_vi": "Bữa ăn này rất ngon." },
      { "id": 67, "word": "Hot", "ipa": "/hɒt/", "phonetic": "/hɒt/", "syllables": "hot", "meaning": "Nóng, cay", "chunk": "Hot spicy soup", "example": "The soup is hot.", "example_en": "The soup is hot.", "example_vi": "Món súp này đang nóng." },
      { "id": 68, "word": "Cold", "ipa": "/kəʊld/", "phonetic": "/kəʊld/", "syllables": "cold", "meaning": "Lạnh", "chunk": "Cold soft drink", "example": "I like cold water.", "example_en": "I like cold water.", "example_vi": "Tôi thích nước lạnh." },
      { "id": 69, "word": "Table", "ipa": "/ˈteɪ.bəl/", "phonetic": "/ˈteɪ.bəl/", "syllables": "ta-ble", "meaning": "Cái bàn", "chunk": "Table for two", "example": "One table for two.", "example_en": "One table for two.", "example_vi": "Một bàn cho hai người." },
      { "id": 70, "word": "Restaurant", "ipa": "/ˈres.trɒnt/", "phonetic": "/ˈres.trɒnt/", "syllables": "res-tau-rant", "meaning": "Nhà hàng, quán ăn", "chunk": "Famous restaurant", "example": "This restaurant is good.", "example_en": "This restaurant is good.", "example_vi": "Nhà hàng này rất tốt." }
    ]
  },
  {
    "day": 8,
    "title": "Ngày 8: Mua sắm & Giá cả",
    "topic": "🌱 Ngày 8: Mua sắm & Giá cả",
    "words": [
      { "id": 71, "word": "Buy", "ipa": "/baɪ/", "phonetic": "/baɪ/", "syllables": "buy", "meaning": "Mua", "chunk": "Buy new shoes", "example": "I want to buy.", "example_en": "I want to buy.", "example_vi": "Tôi muốn mua cái này." },
      { "id": 72, "word": "Sell", "ipa": "/sel/", "phonetic": "/sel/", "syllables": "sell", "meaning": "Bán", "chunk": "Sell fresh fruit", "example": "They sell good clothes.", "example_en": "They sell good clothes.", "example_vi": "Họ bán quần áo tốt." },
      { "id": 73, "word": "Cost", "ipa": "/kɒst/", "phonetic": "/kɒst/", "syllables": "cost", "meaning": "Trị giá, giá tiền", "chunk": "Total cost", "example": "How much cost it?", "example_en": "How much cost it?", "example_vi": "Cái này giá bao nhiêu?" },
      { "id": 74, "word": "Price", "ipa": "/praɪs/", "phonetic": "/praɪs/", "syllables": "price", "meaning": "Giá cả", "chunk": "Good low price", "example": "The price is high.", "example_en": "The price is high.", "example_vi": "Mức giá này hơi cao." },
      { "id": 75, "word": "Cheap", "ipa": "/tʃiːp/", "phonetic": "/tʃiːp/", "syllables": "cheap", "meaning": "Rẻ", "chunk": "Very cheap price", "example": "This hat is cheap.", "example_en": "This hat is cheap.", "example_vi": "Chiếc mũ này rất rẻ." },
      { "id": 76, "word": "Expensive", "ipa": "/ɪkˈspen.sɪv/", "phonetic": "/ɪkˈspen.sɪv/", "syllables": "ex-pen-sive", "meaning": "Đắt đỏ", "chunk": "Too expensive", "example": "That car is expensive.", "example_en": "That car is expensive.", "example_vi": "Chiếc xe đó rất đắt." },
      { "id": 77, "word": "Money", "ipa": "/ˈmʌn.i/", "phonetic": "/ˈmʌn.i/", "syllables": "mon-ey", "meaning": "Tiền bạc", "chunk": "Save more money", "example": "I have no money.", "example_en": "I have no money.", "example_vi": "Tôi không có tiền." },
      { "id": 78, "word": "Pay", "ipa": "/peɪ/", "phonetic": "/peɪ/", "syllables": "pay", "meaning": "Thanh toán, trả tiền", "chunk": "Pay by cash", "example": "How can I pay?", "example_en": "How can I pay?", "example_vi": "Tôi thanh toán thế nào?" },
      { "id": 79, "word": "Cash", "ipa": "/kæʃ/", "phonetic": "/kæʃ/", "syllables": "cash", "meaning": "Tiền mặt", "chunk": "Pay in cash", "example": "I pay with cash.", "example_en": "I pay with cash.", "example_vi": "Tôi trả bằng tiền mặt." },
      { "id": 80, "word": "Shop", "ipa": "/ʃɒp/", "phonetic": "/ʃɒp/", "syllables": "shop", "meaning": "Cửa hàng, tiệm", "chunk": "Go to shop", "example": "The shop is open.", "example_en": "The shop is open.", "example_vi": "Cửa hàng đang mở cửa." }
    ]
  },
  {
    "day": 9,
    "title": "Ngày 9: Quần áo & Trang phục",
    "topic": "🌱 Ngày 9: Quần áo & Trang phục",
    "words": [
      { "id": 81, "word": "Shirt", "ipa": "/ʃɜːt/", "phonetic": "/ʃɜːt/", "syllables": "shirt", "meaning": "Áo sơ mi", "chunk": "Wear white shirt", "example": "My shirt is clean.", "example_en": "My shirt is clean.", "example_vi": "Áo sơ mi của tôi sạch." },
      { "id": 82, "word": "Pants", "ipa": "/pænts/", "phonetic": "/pænts/", "syllables": "pants", "meaning": "Quần dài", "chunk": "Blue denim pants", "example": "I wear black pants.", "example_en": "I wear black pants.", "example_vi": "Tôi mặc quần đen." },
      { "id": 83, "word": "Dress", "ipa": "/dres/", "phonetic": "/dres/", "syllables": "dress", "meaning": "Váy đầm", "chunk": "Pretty red dress", "example": "She wears red dress.", "example_en": "She wears red dress.", "example_vi": "Cô ấy mặc váy đỏ." },
      { "id": 84, "word": "Shoes", "ipa": "/ʃuːz/", "phonetic": "/ʃuːz/", "syllables": "shoes", "meaning": "Đôi giày", "chunk": "New sport shoes", "example": "These shoes fit well.", "example_en": "These shoes fit well.", "example_vi": "Đôi giày này vừa vặn." },
      { "id": 85, "word": "Hat", "ipa": "/hæt/", "phonetic": "/hæt/", "syllables": "hat", "meaning": "Cái mũ, nón", "chunk": "Wear a hat", "example": "Put on your hat.", "example_en": "Put on your hat.", "example_vi": "Hãy đội mũ vào." },
      { "id": 86, "word": "Bag", "ipa": "/bæɡ/", "phonetic": "/bæɡ/", "syllables": "bag", "meaning": "Túi xách, balo", "chunk": "Carry a bag", "example": "My bag is heavy.", "example_en": "My bag is heavy.", "example_vi": "Túi của tôi rất nặng." },
      { "id": 87, "word": "Wear", "ipa": "/weər/", "phonetic": "/weər/", "syllables": "wear", "meaning": "Mặc, mang, đeo", "chunk": "Wear warm clothes", "example": "Wear your jacket now.", "example_en": "Wear your jacket now.", "example_vi": "Mặc áo khoác vào ngay." },
      { "id": 88, "word": "Clean", "ipa": "/kliːn/", "phonetic": "/kliːn/", "syllables": "clean", "meaning": "Sạch sẽ", "chunk": "Keep room clean", "example": "My clothes are clean.", "example_en": "My clothes are clean.", "example_vi": "Quần áo tôi sạch sẽ." },
      { "id": 89, "word": "New", "ipa": "/njuː/", "phonetic": "/njuː/", "syllables": "new", "meaning": "Mới mẻ", "chunk": "Brand new car", "example": "I have new shoes.", "example_en": "I have new shoes.", "example_vi": "Tôi có đôi giày mới." },
      { "id": 90, "word": "Old", "ipa": "/əʊld/", "phonetic": "/əʊld/", "syllables": "old", "meaning": "Cũ, già", "chunk": "Old sweet memories", "example": "This book is old.", "example_en": "This book is old.", "example_vi": "Cuốn sách này đã cũ." }
    ]
  },
  {
    "day": 10,
    "title": "Ngày 10: Màu sắc & Kích thước",
    "topic": "🌱 Ngày 10: Màu sắc & Kích thước",
    "words": [
      { "id": 91, "word": "Color", "ipa": "/ˈkʌl.ər/", "phonetic": "/ˈkʌl.ər/", "syllables": "col-or", "meaning": "Màu sắc", "chunk": "Favorite bright color", "example": "What color is it?", "example_en": "What color is it?", "example_vi": "Nó có màu gì?" },
      { "id": 92, "word": "Red", "ipa": "/red/", "phonetic": "/red/", "syllables": "red", "meaning": "Màu đỏ", "chunk": "Bright red apple", "example": "The rose is red.", "example_en": "The rose is red.", "example_vi": "Bông hồng màu đỏ." },
      { "id": 93, "word": "Blue", "ipa": "/bluː/", "phonetic": "/bluː/", "syllables": "blue", "meaning": "Màu xanh dương", "chunk": "Deep blue sky", "example": "The ocean is blue.", "example_en": "The ocean is blue.", "example_vi": "Đại dương màu xanh." },
      { "id": 94, "word": "Yellow", "ipa": "/ˈjel.əʊ/", "phonetic": "/ˈjel.əʊ/", "syllables": "yel-low", "meaning": "Màu vàng", "chunk": "Bright yellow sun", "example": "Bananas are yellow now.", "example_en": "Bananas are yellow now.", "example_vi": "Những quả chuối đã vàng." },
      { "id": 95, "word": "Green", "ipa": "/ɡriːn/", "phonetic": "/ɡriːn/", "syllables": "green", "meaning": "Màu xanh lá", "chunk": "Fresh green grass", "example": "Leaves are fresh green.", "example_en": "Leaves are fresh green.", "example_vi": "Lá cây màu xanh tươi." },
      { "id": 96, "word": "Black", "ipa": "/blæk/", "phonetic": "/blæk/", "syllables": "black", "meaning": "Màu đen", "chunk": "Dark black night", "example": "He has black hair.", "example_en": "He has black hair.", "example_vi": "Anh ấy có tóc đen." },
      { "id": 97, "word": "White", "ipa": "/waɪt/", "phonetic": "/waɪt/", "syllables": "white", "meaning": "Màu trắng", "chunk": "Pure white cloud", "example": "The snow is white.", "example_en": "The snow is white.", "example_vi": "Tuyết có màu trắng." },
      { "id": 98, "word": "Big", "ipa": "/bɪɡ/", "phonetic": "/bɪɡ/", "syllables": "big", "meaning": "To lớn", "chunk": "Big strong house", "example": "The elephant is big.", "example_en": "The elephant is big.", "example_vi": "Con voi rất to lớn." },
      { "id": 99, "word": "Small", "ipa": "/smɔːl/", "phonetic": "/smɔːl/", "syllables": "small", "meaning": "Nhỏ bé", "chunk": "Small cute dog", "example": "The mouse is small.", "example_en": "The mouse is small.", "example_vi": "Con chuột rất nhỏ bé." },
      { "id": 100, "word": "Long", "ipa": "/lɒŋ/", "phonetic": "/lɒŋ/", "syllables": "long", "meaning": "Dài", "chunk": "Long distance road", "example": "She has long hair.", "example_en": "She has long hair.", "example_vi": "Cô ấy có mái tóc dài." }
    ]
  },
  {
    "day": 11,
    "title": "Ngày 11: Số đếm & Số lượng",
    "topic": "🌱 Ngày 11: Số đếm & Số lượng",
    "words": [
      { "id": 101, "word": "One", "ipa": "/wʌn/", "phonetic": "/wʌn/", "syllables": "one", "meaning": "Số một (1)", "chunk": "One more time", "example": "I have one cat.", "example_en": "I have one cat.", "example_vi": "Tôi có một con mèo." },
      { "id": 102, "word": "Two", "ipa": "/tuː/", "phonetic": "/tuː/", "syllables": "two", "meaning": "Số hai (2)", "chunk": "Two good friends", "example": "Give me two apples.", "example_en": "Give me two apples.", "example_vi": "Cho tôi hai quả táo." },
      { "id": 103, "word": "Three", "ipa": "/θriː/", "phonetic": "/θriː/", "syllables": "three", "meaning": "Số ba (3)", "chunk": "Three little birds", "example": "I see three dogs.", "example_en": "I see three dogs.", "example_vi": "Tôi thấy ba con chó." },
      { "id": 104, "word": "Four", "ipa": "/fɔːr/", "phonetic": "/fɔːr/", "syllables": "four", "meaning": "Số bốn (4)", "chunk": "Four long seasons", "example": "A table has four legs.", "example_en": "A table has four legs.", "example_vi": "Cái bàn có bốn chân." },
      { "id": 105, "word": "Five", "ipa": "/faɪv/", "phonetic": "/faɪv/", "syllables": "five", "meaning": "Số năm (5)", "chunk": "High five friend", "example": "I have five pens.", "example_en": "I have five pens.", "example_vi": "Tôi có năm cây bút." },
      { "id": 106, "word": "Six", "ipa": "/sɪks/", "phonetic": "/sɪks/", "syllables": "six", "meaning": "Số sáu (6)", "chunk": "Six cold months", "example": "She is six now.", "example_en": "She is six now.", "example_vi": "Bây giờ cô bé sáu tuổi." },
      { "id": 107, "word": "Seven", "ipa": "/ˈsev.ən/", "phonetic": "/ˈsev.ən/", "syllables": "sev-en", "meaning": "Số bảy (7)", "chunk": "Seven busy days", "example": "Seven days a week.", "example_en": "Seven days a week.", "example_vi": "Bảy ngày một tuần." },
      { "id": 108, "word": "Eight", "ipa": "/eɪt/", "phonetic": "/eɪt/", "syllables": "eight", "meaning": "Số tám (8)", "chunk": "Eight long hours", "example": "We sleep eight hours.", "example_en": "We sleep eight hours.", "example_vi": "Chúng tôi ngủ tám tiếng." },
      { "id": 109, "word": "Nine", "ipa": "/naɪn/", "phonetic": "/naɪn/", "syllables": "nine", "meaning": "Số chín (9)", "chunk": "Nine bright stars", "example": "It costs nine dollars.", "example_en": "It costs nine dollars.", "example_vi": "Nó có giá chín đô la." },
      { "id": 110, "word": "Ten", "ipa": "/ten/", "phonetic": "/ten/", "syllables": "ten", "meaning": "Số mười (10)", "chunk": "Top ten list", "example": "Count from one to ten.", "example_en": "Count from one to ten.", "example_vi": "Đếm từ một đến mười." }
    ]
  },
  {
    "day": 12,
    "title": "Ngày 12: Thời gian & Giờ giấc",
    "topic": "🌱 Ngày 12: Thời gian & Giờ giấc",
    "words": [
      { "id": 111, "word": "Time", "ipa": "/taɪm/", "phonetic": "/taɪm/", "syllables": "time", "meaning": "Thời gian", "chunk": "What time is it?", "example": "Time goes so fast.", "example_en": "Time goes so fast.", "example_vi": "Thời gian trôi rất nhanh." },
      { "id": 112, "word": "Clock", "ipa": "/klɒk/", "phonetic": "/klɒk/", "syllables": "clock", "meaning": "Đồng hồ treo tường", "chunk": "Look at the clock", "example": "The clock is ticking.", "example_en": "The clock is ticking.", "example_vi": "Đồng hồ đang chạy." },
      { "id": 113, "word": "Hour", "ipa": "/aʊər/", "phonetic": "/aʊər/", "syllables": "hour", "meaning": "Giờ, tiếng đồng hồ", "chunk": "One hour later", "example": "Wait for one hour.", "example_en": "Wait for one hour.", "example_vi": "Hãy đợi một tiếng." },
      { "id": 114, "word": "Minute", "ipa": "/ˈmɪn.ɪt/", "phonetic": "/ˈmɪn.ɪt/", "syllables": "min-ute", "meaning": "Phút", "chunk": "Wait a minute", "example": "Just five minutes left.", "example_en": "Just five minutes left.", "example_vi": "Chỉ còn năm phút nữa." },
      { "id": 115, "word": "Morning", "ipa": "/ˈmɔː.nɪŋ/", "phonetic": "/ˈmɔː.nɪŋ/", "syllables": "morn-ing", "meaning": "Buổi sáng", "chunk": "Good early morning", "example": "Good morning to you.", "example_en": "Good morning to you.", "example_vi": "Chào buổi sáng bạn nhé." },
      { "id": 116, "word": "Afternoon", "ipa": "/ˌɑːf.təˈnuːn/", "phonetic": "/ˌɑːf.təˈnuːn/", "syllables": "af-ter-noon", "meaning": "Buổi chiều", "chunk": "Good sunny afternoon", "example": "See you this afternoon.", "example_en": "See you this afternoon.", "example_vi": "Hẹn gặp bạn chiều nay." },
      { "id": 117, "word": "Evening", "ipa": "/ˈiːv.nɪŋ/", "phonetic": "/ˈiːv.nɪŋ/", "syllables": "eve-ning", "meaning": "Buổi tối", "chunk": "Peaceful cool evening", "example": "Good evening, my friend.", "example_en": "Good evening, my friend.", "example_vi": "Chào buổi tối bạn nhé." },
      { "id": 118, "word": "Night", "ipa": "/naɪt/", "phonetic": "/naɪt/", "syllables": "night", "meaning": "Ban đêm", "chunk": "Good night sleep", "example": "Good night and sleep well.", "example_en": "Good night and sleep well.", "example_vi": "Chúc ngủ ngon và mơ đẹp." },
      { "id": 119, "word": "Today", "ipa": "/təˈdeɪ/", "phonetic": "/təˈdeɪ/", "syllables": "to-day", "meaning": "Hôm nay", "chunk": "Today is sunny", "example": "Today is my birthday.", "example_en": "Today is my birthday.", "example_vi": "Hôm nay là sinh nhật tôi." },
      { "id": 120, "word": "Tomorrow", "ipa": "/təˈmɒr.əʊ/", "phonetic": "/təˈmɒr.əʊ/", "syllables": "to-mor-row", "meaning": "Ngày mai", "chunk": "See you tomorrow", "example": "Tomorrow will be better.", "example_en": "Tomorrow will be better.", "example_vi": "Ngày mai sẽ tốt đẹp hơn." }
    ]
  },
  {
    "day": 13,
    "title": "Ngày 13: Các ngày trong tuần",
    "topic": "🌱 Ngày 13: Các ngày trong tuần",
    "words": [
      { "id": 121, "word": "Monday", "ipa": "/ˈmʌn.deɪ/", "phonetic": "/ˈmʌn.deɪ/", "syllables": "mon-day", "meaning": "Thứ Hai", "chunk": "Early Monday morning", "example": "Today is Monday.", "example_en": "Today is Monday.", "example_vi": "Hôm nay là thứ Hai." },
      { "id": 122, "word": "Tuesday", "ipa": "/ˈtjuːz.deɪ/", "phonetic": "/ˈtjuːz.deɪ/", "syllables": "tues-day", "meaning": "Thứ Ba", "chunk": "Busy Tuesday", "example": "See you on Tuesday.", "example_en": "See you on Tuesday.", "example_vi": "Hẹn gặp vào thứ Ba." },
      { "id": 123, "word": "Wednesday", "ipa": "/ˈwenz.deɪ/", "phonetic": "/ˈwenz.deɪ/", "syllables": "wednes-day", "meaning": "Thứ Tư", "chunk": "Midweek Wednesday", "example": "Wednesday is my day off.", "example_en": "Wednesday is my day off.", "example_vi": "Thứ Tư là ngày tôi nghỉ." },
      { "id": 124, "word": "Thursday", "ipa": "/ˈθɜːz.deɪ/", "phonetic": "/ˈθɜːz.deɪ/", "syllables": "thurs-day", "meaning": "Thứ Năm", "chunk": "Quiet Thursday", "example": "We meet on Thursday.", "example_en": "We meet on Thursday.", "example_vi": "Chúng ta gặp nhau vào thứ Năm." },
      { "id": 125, "word": "Friday", "ipa": "/ˈfraɪ.deɪ/", "phonetic": "/ˈfraɪ.deɪ/", "syllables": "fri-day", "meaning": "Thứ Sáu", "chunk": "Happy Friday evening", "example": "Friday is finally here.", "example_en": "Friday is finally here.", "example_vi": "Cuối cùng thứ Sáu cũng đến." },
      { "id": 126, "word": "Saturday", "ipa": "/ˈsæt.ə.deɪ/", "phonetic": "/ˈsæt.ə.deɪ/", "syllables": "sat-ur-day", "meaning": "Thứ Bảy", "chunk": "Sunny Saturday", "example": "I rest on Saturday.", "example_en": "I rest on Saturday.", "example_vi": "Tôi nghỉ ngơi vào thứ Bảy." },
      { "id": 127, "word": "Sunday", "ipa": "/ˈsʌn.deɪ/", "phonetic": "/ˈsʌn.deɪ/", "syllables": "sun-day", "meaning": "Chủ Nhật", "chunk": "Peaceful Sunday", "example": "Sunday is family time.", "example_en": "Sunday is family time.", "example_vi": "Chủ Nhật là thời gian cho gia đình." },
      { "id": 128, "word": "Week", "ipa": "/wiːk/", "phonetic": "/wiːk/", "syllables": "week", "meaning": "Tuần lễ", "chunk": "Next sunny week", "example": "Have a good week.", "example_en": "Have a good week.", "example_vi": "Chúc bạn một tuần tốt lành." },
      { "id": 129, "word": "Day", "ipa": "/deɪ/", "phonetic": "/deɪ/", "syllables": "day", "meaning": "Ngày", "chunk": "Every single day", "example": "Have a nice day.", "example_en": "Have a nice day.", "example_vi": "Chúc bạn một ngày tốt lành." },
      { "id": 130, "word": "Weekend", "ipa": "/ˌwiːkˈend/", "phonetic": "/ˌwiːkˈend/", "syllables": "week-end", "meaning": "Cuối tuần", "chunk": "Have great weekend", "example": "Enjoy your happy weekend.", "example_en": "Enjoy your happy weekend.", "example_vi": "Hãy tận hưởng cuối tuần vui vẻ." }
    ]
  },
  {
    "day": 14,
    "title": "Ngày 14: Nhà cửa & Phòng ốc",
    "topic": "🌱 Ngày 14: Nhà cửa & Phòng ốc",
    "words": [
      { "id": 131, "word": "House", "ipa": "/haʊs/", "phonetic": "/haʊs/", "syllables": "house", "meaning": "Ngôi nhà", "chunk": "Big sweet house", "example": "This is my house.", "example_en": "This is my house.", "example_vi": "Đây là ngôi nhà của tôi." },
      { "id": 132, "word": "Room", "ipa": "/ruːm/", "phonetic": "/ruːm/", "syllables": "room", "meaning": "Căn phòng", "chunk": "Clean cozy room", "example": "My room is small.", "example_en": "My room is small.", "example_vi": "Phòng của tôi nhỏ." },
      { "id": 133, "word": "Bedroom", "ipa": "/ˈbed.ruːm/", "phonetic": "/ˈbed.ruːm/", "syllables": "bed-room", "meaning": "Phòng ngủ", "chunk": "Quiet bedroom", "example": "I sleep in bedroom.", "example_en": "I sleep in bedroom.", "example_vi": "Tôi ngủ trong phòng ngủ." },
      { "id": 134, "word": "Kitchen", "ipa": "/ˈkɪtʃ.ən/", "phonetic": "/ˈkɪtʃ.ən/", "syllables": "kitch-en", "meaning": "Nhà bếp", "chunk": "Warm clean kitchen", "example": "Mom is in kitchen.", "example_en": "Mom is in kitchen.", "example_vi": "Mẹ đang ở trong bếp." },
      { "id": 135, "word": "Bathroom", "ipa": "/ˈbɑːθ.ruːm/", "phonetic": "/ˈbɑːθ.ruːm/", "syllables": "bath-room", "meaning": "Phòng tắm", "chunk": "Take bathroom break", "example": "Where is the bathroom?", "example_en": "Where is the bathroom?", "example_vi": "Phòng vệ sinh ở đâu?" },
      { "id": 136, "word": "Door", "ipa": "/dɔːr/", "phonetic": "/dɔːr/", "syllables": "door", "meaning": "Cửa ra vào", "chunk": "Open the door", "example": "Please close the door.", "example_en": "Please close the door.", "example_vi": "Làm ơn đóng cửa lại." },
      { "id": 137, "word": "Window", "ipa": "/ˈwɪn.dəʊ/", "phonetic": "/ˈwɪn.dəʊ/", "syllables": "win-dow", "meaning": "Cửa sổ", "chunk": "Look through window", "example": "Open the wide window.", "example_en": "Open the wide window.", "example_vi": "Hãy mở rộng cửa sổ ra." },
      { "id": 138, "word": "Bed", "ipa": "/bed/", "phonetic": "/bed/", "syllables": "bed", "meaning": "Chiếc giường", "chunk": "Go to bed", "example": "Lie down on bed.", "example_en": "Lie down on bed.", "example_vi": "Hãy nằm xuống giường." },
      { "id": 139, "word": "Chair", "ipa": "/tʃeər/", "phonetic": "/tʃeər/", "syllables": "chair", "meaning": "Cái ghế", "chunk": "Sit on chair", "example": "Sit on this chair.", "example_en": "Sit on this chair.", "example_vi": "Hãy ngồi lên chiếc ghế này." },
      { "id": 140, "word": "Floor", "ipa": "/flɔːr/", "phonetic": "/flɔːr/", "syllables": "floor", "meaning": "Sàn nhà, tầng nhà", "chunk": "Clean the floor", "example": "Sit on the floor.", "example_en": "Sit on the floor.", "example_vi": "Hãy ngồi trên sàn nhà." }
    ]
  },
  {
    "day": 15,
    "title": "Ngày 15: Đồ dùng trong nhà",
    "topic": "🌱 Ngày 15: Đồ dùng trong nhà",
    "words": [
      { "id": 141, "word": "Light", "ipa": "/laɪt/", "phonetic": "/laɪt/", "syllables": "light", "meaning": "Đèn, ánh sáng", "chunk": "Turn on light", "example": "Turn off the light.", "example_en": "Turn off the light.", "example_vi": "Hãy tắt đèn đi." },
      { "id": 142, "word": "Fan", "ipa": "/fæn/", "phonetic": "/fæn/", "syllables": "fan", "meaning": "Cái quạt", "chunk": "Electric ceiling fan", "example": "Turn on the fan.", "example_en": "Turn on the fan.", "example_vi": "Bật quạt lên đi." },
      { "id": 143, "word": "Key", "ipa": "/kiː/", "phonetic": "/kiː/", "syllables": "key", "meaning": "Chìa khóa", "chunk": "House room key", "example": "I lost my key.", "example_en": "I lost my key.", "example_vi": "Tôi làm mất chìa khóa rồi." },
      { "id": 144, "word": "Cup", "ipa": "/kʌp/", "phonetic": "/kʌp/", "syllables": "cup", "meaning": "Cái cốc, tách", "chunk": "Cup of tea", "example": "Give me a cup.", "example_en": "Give me a cup.", "example_vi": "Cho tôi một cái cốc." },
      { "id": 145, "word": "Plate", "ipa": "/pleɪt/", "phonetic": "/pleɪt/", "syllables": "plate", "meaning": "Cái đĩa", "chunk": "Clean food plate", "example": "Put food on plate.", "example_en": "Put food on plate.", "example_vi": "Đặt thức ăn lên đĩa." },
      { "id": 146, "word": "Knife", "ipa": "/naɪf/", "phonetic": "/naɪf/", "syllables": "knife", "meaning": "Con dao", "chunk": "Sharp kitchen knife", "example": "Be careful with knife.", "example_en": "Be careful with knife.", "example_vi": "Cẩn thận với con dao." },
      { "id": 147, "word": "Spoon", "ipa": "/spuːn/", "phonetic": "/spuːn/", "syllables": "spoon", "meaning": "Cái thìa, muỗng", "chunk": "Soup metal spoon", "example": "Use a clean spoon.", "example_en": "Use a clean spoon.", "example_vi": "Hãy dùng thìa sạch." },
      { "id": 148, "word": "Box", "ipa": "/bɒks/", "phonetic": "/bɒks/", "syllables": "box", "meaning": "Cái hộp, thùng", "chunk": "Big heavy box", "example": "Open that big box.", "example_en": "Open that big box.", "example_vi": "Hãy mở chiếc hộp to đó ra." },
      { "id": 149, "word": "Paper", "ipa": "/ˈpeɪ.pər/", "phonetic": "/ˈpeɪ.pər/", "syllables": "pa-per", "meaning": "Tờ giấy", "chunk": "Sheet of paper", "example": "Write on this paper.", "example_en": "Write on this paper.", "example_vi": "Viết lên tờ giấy này." },
      { "id": 150, "word": "Pen", "ipa": "/pen/", "phonetic": "/pen/", "syllables": "pen", "meaning": "Cây bút", "chunk": "Blue ink pen", "example": "Can I borrow pen?", "example_en": "Can I borrow pen?", "example_vi": "Tôi mượn cây bút được không?" }
    ]
  },
  {
    "day": 16,
    "title": "Ngày 16: Hoạt động hàng ngày",
    "topic": "🌱 Ngày 16: Hoạt động hàng ngày",
    "words": [
      { "id": 151, "word": "Wake", "ipa": "/weɪk/", "phonetic": "/weɪk/", "syllables": "wake", "meaning": "Thức dậy", "chunk": "Wake up early", "example": "I wake up early.", "example_en": "I wake up early.", "example_vi": "Tôi thức dậy sớm." },
      { "id": 152, "word": "Sleep", "ipa": "/sliːp/", "phonetic": "/sliːp/", "syllables": "sleep", "meaning": "Ngủ", "chunk": "Get good sleep", "example": "Go to sleep now.", "example_en": "Go to sleep now.", "example_vi": "Đi ngủ ngay thôi." },
      { "id": 153, "word": "Wash", "ipa": "/wɒʃ/", "phonetic": "/wɒʃ/", "syllables": "wash", "meaning": "Rửa, giặt", "chunk": "Wash your hands", "example": "Wash hands before eating.", "example_en": "Wash hands before eating.", "example_vi": "Rửa tay trước khi ăn." },
      { "id": 154, "word": "Cook", "ipa": "/kʊk/", "phonetic": "/kʊk/", "syllables": "cook", "meaning": "Nấu ăn", "chunk": "Cook daily dinner", "example": "I cook for family.", "example_en": "I cook for family.", "example_vi": "Tôi nấu ăn cho gia đình." },
      { "id": 155, "word": "Go", "ipa": "/ɡəʊ/", "phonetic": "/ɡəʊ/", "syllables": "go", "meaning": "Đi", "chunk": "Go to work", "example": "Let us go home.", "example_en": "Let us go home.", "example_vi": "Chúng ta về nhà thôi." },
      { "id": 156, "word": "Come", "ipa": "/kʌm/", "phonetic": "/kʌm/", "syllables": "come", "meaning": "Đến, tới", "chunk": "Come here fast", "example": "Come here with me.", "example_en": "Come here with me.", "example_vi": "Hãy đến đây cùng tôi." },
      { "id": 157, "word": "Read", "ipa": "/riːd/", "phonetic": "/riːd/", "syllables": "read", "meaning": "Đọc", "chunk": "Read good books", "example": "I read every night.", "example_en": "I read every night.", "example_vi": "Tôi đọc sách mỗi tối." },
      { "id": 158, "word": "Watch", "ipa": "/wɒtʃ/", "phonetic": "/wɒtʃ/", "syllables": "watch", "meaning": "Xem, theo dõi", "chunk": "Watch TV show", "example": "We watch a movie.", "example_en": "We watch a movie.", "example_vi": "Chúng tôi xem phim." },
      { "id": 159, "word": "Listen", "ipa": "/ˈlɪs.ən/", "phonetic": "/ˈlɪs.ən/", "syllables": "lis-ten", "meaning": "Lắng nghe", "chunk": "Listen to music", "example": "Listen to my voice.", "example_en": "Listen to my voice.", "example_vi": "Hãy lắng nghe giọng tôi." },
      { "id": 160, "word": "Walk", "ipa": "/wɔːk/", "phonetic": "/wɔːk/", "syllables": "walk", "meaning": "Đi bộ", "chunk": "Take a walk", "example": "I walk in park.", "example_en": "I walk in park.", "example_vi": "Tôi đi bộ trong công viên." }
    ]
  },
  {
    "day": 17,
    "title": "Ngày 17: Bộ phận cơ thể",
    "topic": "🌱 Ngày 17: Bộ phận cơ thể",
    "words": [
      { "id": 161, "word": "Head", "ipa": "/hed/", "phonetic": "/hed/", "syllables": "head", "meaning": "Cái đầu", "chunk": "Nod your head", "example": "My head hurts now.", "example_en": "My head hurts now.", "example_vi": "Đầu tôi đang đau." },
      { "id": 162, "word": "Eye", "ipa": "/aɪ/", "phonetic": "/aɪ/", "syllables": "eye", "meaning": "Con mắt", "chunk": "Close your eyes", "example": "Open your bright eyes.", "example_en": "Open your bright eyes.", "example_vi": "Hãy mở to đôi mắt." },
      { "id": 163, "word": "Ear", "ipa": "/ɪər/", "phonetic": "/ɪər/", "syllables": "ear", "meaning": "Cái tai", "chunk": "Cover your ears", "example": "I hear with ears.", "example_en": "I hear with ears.", "example_vi": "Tôi nghe bằng tai." },
      { "id": 164, "word": "Nose", "ipa": "/nəʊz/", "phonetic": "/nəʊz/", "syllables": "nose", "meaning": "Cái mũi", "chunk": "Touch your nose", "example": "Breathe through your nose.", "example_en": "Breathe through your nose.", "example_vi": "Thở bằng mũi của bạn." },
      { "id": 165, "word": "Mouth", "ipa": "/maʊθ/", "phonetic": "/maʊθ/", "syllables": "mouth", "meaning": "Cái miệng", "chunk": "Open your mouth", "example": "Open mouth and say.", "example_en": "Open mouth and say.", "example_vi": "Mở miệng và nói đi." },
      { "id": 166, "word": "Hand", "ipa": "/hænd/", "phonetic": "/hænd/", "syllables": "hand", "meaning": "Bàn tay", "chunk": "Hold my hand", "example": "Give me your hand.", "example_en": "Give me your hand.", "example_vi": "Đưa tay bạn cho tôi." },
      { "id": 167, "word": "Foot", "ipa": "/fʊt/", "phonetic": "/fʊt/", "syllables": "foot", "meaning": "Bàn chân", "chunk": "On my foot", "example": "My left foot hurts.", "example_en": "My left foot hurts.", "example_vi": "Bàn chân trái tôi bị đau." },
      { "id": 168, "word": "Face", "ipa": "/feɪs/", "phonetic": "/feɪs/", "syllables": "face", "meaning": "Khuôn mặt", "chunk": "Wash your face", "example": "She has cute face.", "example_en": "She has cute face.", "example_vi": "Cô ấy có khuôn mặt dễ thương." },
      { "id": 169, "word": "Hair", "ipa": "/heər/", "phonetic": "/heər/", "syllables": "hair", "meaning": "Mái tóc", "chunk": "Comb your hair", "example": "He has black hair.", "example_en": "He has black hair.", "example_vi": "Anh ấy có tóc màu đen." },
      { "id": 170, "word": "Body", "ipa": "/ˈbɒd.i/", "phonetic": "/ˈbɒd.i/", "syllables": "bod-y", "meaning": "Cơ thể", "chunk": "Healthy fit body", "example": "Keep your body healthy.", "example_en": "Keep your body healthy.", "example_vi": "Giữ cơ thể khỏe mạnh." }
    ]
  },
  {
    "day": 18,
    "title": "Ngày 18: Sức khỏe & Y tế",
    "topic": "🌱 Ngày 18: Sức khỏe & Y tế",
    "words": [
      { "id": 171, "word": "Doctor", "ipa": "/ˈdɒk.tər/", "phonetic": "/ˈdɒk.tər/", "syllables": "doc-tor", "meaning": "Bác sĩ", "chunk": "See a doctor", "example": "The doctor helps me.", "example_en": "The doctor helps me.", "example_vi": "Bác sĩ giúp đỡ tôi." },
      { "id": 172, "word": "Hospital", "ipa": "/ˈhɒs.pɪ.təl/", "phonetic": "/ˈhɒs.pɪ.təl/", "syllables": "hos-pi-tal", "meaning": "Bệnh viện", "chunk": "Go to hospital", "example": "Where is nearest hospital?", "example_en": "Where is nearest hospital?", "example_vi": "Bệnh viện gần nhất ở đâu?" },
      { "id": 173, "word": "Medicine", "ipa": "/ˈmed.sən/", "phonetic": "/ˈmed.sən/", "syllables": "med-i-cine", "meaning": "Thuốc thang", "chunk": "Take your medicine", "example": "Take this medicine now.", "example_en": "Take this medicine now.", "example_vi": "Hãy uống thuốc này ngay." },
      { "id": 174, "word": "Pain", "ipa": "/peɪn/", "phonetic": "/peɪn/", "syllables": "pain", "meaning": "Cơn đau", "chunk": "Feel sharp pain", "example": "I feel bad pain.", "example_en": "I feel bad pain.", "example_vi": "Tôi thấy rất đau." },
      { "id": 175, "word": "Fever", "ipa": "/ˈfiː.vər/", "phonetic": "/ˈfiː.vər/", "syllables": "fe-ver", "meaning": "Cơn sốt", "chunk": "Have high fever", "example": "He has a fever.", "example_en": "He has a fever.", "example_vi": "Cậu ấy đang bị sốt." },
      { "id": 176, "word": "Hurt", "ipa": "/hɜːt/", "phonetic": "/hɜːt/", "syllables": "hurt", "meaning": "Bị thương, đau", "chunk": "It hurts so much", "example": "Does it hurt here?", "example_en": "Does it hurt here?", "example_vi": "Ở đây có đau không?" },
      { "id": 177, "word": "Health", "ipa": "/helθ/", "phonetic": "/helθ/", "syllables": "health", "meaning": "Sức khỏe", "chunk": "Good strong health", "example": "Health is most important.", "example_en": "Health is most important.", "example_vi": "Sức khỏe là quan trọng nhất." },
      { "id": 178, "word": "Rest", "ipa": "/rest/", "phonetic": "/rest/", "syllables": "rest", "meaning": "Nghỉ ngơi", "chunk": "Take a rest", "example": "You should rest now.", "example_en": "You should rest now.", "example_vi": "Bạn nên nghỉ ngơi đi." },
      { "id": 179, "word": "Safe", "ipa": "/seɪf/", "phonetic": "/seɪf/", "syllables": "safe", "meaning": "An toàn", "chunk": "Stay safe here", "example": "You are safe now.", "example_en": "You are safe now.", "example_vi": "Bây giờ bạn đã an toàn." },
      { "id": 180, "word": "Better", "ipa": "/ˈbet.ər/", "phonetic": "/ˈbet.ər/", "syllables": "bet-ter", "meaning": "Tốt hơn, đỡ hơn", "chunk": "Feel much better", "example": "I feel much better.", "example_en": "I feel much better.", "example_vi": "Tôi thấy đỡ hơn nhiều rồi." }
    ]
  },
  {
    "day": 19,
    "title": "Ngày 19: Địa điểm trong thành phố",
    "topic": "🌱 Ngày 19: Địa điểm trong thành phố",
    "words": [
      { "id": 181, "word": "City", "ipa": "/ˈsɪt.i/", "phonetic": "/ˈsɪt.i/", "syllables": "cit-y", "meaning": "Thành phố", "chunk": "Big modern city", "example": "I love this city.", "example_en": "I love this city.", "example_vi": "Tôi yêu thành phố này." },
      { "id": 182, "word": "Street", "ipa": "/striːt/", "phonetic": "/striːt/", "syllables": "street", "meaning": "Con đường, con phố", "chunk": "Cross the street", "example": "Walk on the street.", "example_en": "Walk on the street.", "example_vi": "Đi bộ trên đường phố." },
      { "id": 183, "word": "Park", "ipa": "/pɑːk/", "phonetic": "/pɑːk/", "syllables": "park", "meaning": "Công viên", "chunk": "Go to the park", "example": "Let us walk in park.", "example_en": "Let us walk in park.", "example_vi": "Hãy đi dạo trong công viên." },
      { "id": 184, "word": "Bank", "ipa": "/bæŋk/", "phonetic": "/bæŋk/", "syllables": "bank", "meaning": "Ngân hàng", "chunk": "Go to the bank", "example": "Where is the bank?", "example_en": "Where is the bank?", "example_vi": "Ngân hàng ở đâu?" },
      { "id": 185, "word": "School", "ipa": "/skuːl/", "phonetic": "/skuːl/", "syllables": "school", "meaning": "Trường học", "chunk": "Go to school", "example": "Kids go to school.", "example_en": "Kids go to school.", "example_vi": "Bọn trẻ đi đến trường." },
      { "id": 186, "word": "Market", "ipa": "/ˈmɑː.kɪt/", "phonetic": "/ˈmɑː.kɪt/", "syllables": "mar-ket", "meaning": "Chợ", "chunk": "Go to market", "example": "Mom goes to market.", "example_en": "Mom goes to market.", "example_vi": "Mẹ đi chợ mua sắm." },
      { "id": 187, "word": "Cinema", "ipa": "/ˈsɪn.ə.mɑː/", "phonetic": "/ˈsɪn.ə.mɑː/", "syllables": "cin-e-ma", "meaning": "Rạp chiếu phim", "chunk": "Watch at cinema", "example": "We go to cinema.", "example_en": "We go to cinema.", "example_vi": "Chúng tôi đến rạp chiếu phim." },
      { "id": 188, "word": "Hotel", "ipa": "/həʊˈtel/", "phonetic": "/həʊˈtel/", "syllables": "ho-tel", "meaning": "Khách sạn", "chunk": "Book a hotel", "example": "I stay at hotel.", "example_en": "I stay at hotel.", "example_vi": "Tôi ở tại khách sạn." },
      { "id": 189, "word": "Airport", "ipa": "/ˈeə.pɔːt/", "phonetic": "/ˈeə.pɔːt/", "syllables": "air-port", "meaning": "Sân bay", "chunk": "Go to airport", "example": "Drive to the airport.", "example_en": "Drive to the airport.", "example_vi": "Lái xe đến sân bay." },
      { "id": 190, "word": "Station", "ipa": "/ˈsteɪ.ʃən/", "phonetic": "/ˈsteɪ.ʃən/", "syllables": "sta-tion", "meaning": "Trạm, bến xe/tàu", "chunk": "Bus train station", "example": "Wait at the station.", "example_en": "Wait at the station.", "example_vi": "Đợi ở nhà ga." }
    ]
  },
  {
    "day": 20,
    "title": "Ngày 20: Phương tiện đi lại",
    "topic": "🌱 Ngày 20: Phương tiện đi lại",
    "words": [
      { "id": 191, "word": "Car", "ipa": "/kɑːr/", "phonetic": "/kɑːr/", "syllables": "car", "meaning": "Xe ô tô", "chunk": "Drive a car", "example": "I have a car.", "example_en": "I have a car.", "example_vi": "Tôi có một chiếc xe hơi." },
      { "id": 192, "word": "Bus", "ipa": "/bʌs/", "phonetic": "/bʌs/", "syllables": "bus", "meaning": "Xe buýt", "chunk": "Take the bus", "example": "The bus is coming.", "example_en": "The bus is coming.", "example_vi": "Xe buýt đang đến." },
      { "id": 193, "word": "Bike", "ipa": "/baɪk/", "phonetic": "/baɪk/", "syllables": "bike", "meaning": "Xe đạp, xe máy", "chunk": "Ride a bike", "example": "I ride my bike.", "example_en": "I ride my bike.", "example_vi": "Tôi đạp xe của mình." },
      { "id": 194, "word": "Taxi", "ipa": "/ˈtæk.si/", "phonetic": "/ˈtæk.si/", "syllables": "tax-i", "meaning": "Xe taxi", "chunk": "Call a taxi", "example": "Let us take taxi.", "example_en": "Let us take taxi.", "example_vi": "Chúng ta hãy bắt taxi." },
      { "id": 195, "word": "Train", "ipa": "/treɪn/", "phonetic": "/treɪn/", "syllables": "train", "meaning": "Tàu hỏa", "chunk": "Catch the train", "example": "The train runs fast.", "example_en": "The train runs fast.", "example_vi": "Tàu hỏa chạy rất nhanh." },
      { "id": 196, "word": "Plane", "ipa": "/pleɪn/", "phonetic": "/pleɪn/", "syllables": "plane", "meaning": "Máy bay", "chunk": "Fly by plane", "example": "The plane takes off.", "example_en": "The plane takes off.", "example_vi": "Máy bay cất cánh." },
      { "id": 197, "word": "Drive", "ipa": "/draɪv/", "phonetic": "/draɪv/", "syllables": "drive", "meaning": "Lái xe", "chunk": "Drive carefully", "example": "Please drive slowly.", "example_en": "Please drive slowly.", "example_vi": "Làm ơn lái xe chậm lại." },
      { "id": 198, "word": "Ride", "ipa": "/raɪd/", "phonetic": "/raɪd/", "syllables": "ride", "meaning": "Cưỡi, đi xe", "chunk": "Ride motorbike", "example": "I ride to work.", "example_en": "I ride to work.", "example_vi": "Tôi đi xe đến chỗ làm." },
      { "id": 199, "word": "Stop", "ipa": "/stɒp/", "phonetic": "/stɒp/", "syllables": "stop", "meaning": "Dừng lại", "chunk": "Stop the car", "example": "Stop here, please.", "example_en": "Stop here, please.", "example_vi": "Làm ơn dừng lại ở đây." },
      { "id": 200, "word": "Ticket", "ipa": "/ˈtɪk.ɪt/", "phonetic": "/ˈtɪk.ɪt/", "syllables": "tick-et", "meaning": "Vé", "chunk": "Buy bus ticket", "example": "Show me your ticket.", "example_en": "Show me your ticket.", "example_vi": "Cho tôi xem vé của bạn." }
    ]
  },
  {
    "day": 21,
    "title": "Ngày 21: Hỏi đường & Phương hướng",
    "topic": "🌱 Ngày 21: Hỏi đường & Phương hướng",
    "words": [
      { "id": 201, "word": "Where", "ipa": "/weər/", "phonetic": "/weər/", "syllables": "where", "meaning": "Ở đâu", "chunk": "Where is it?", "example": "Where is the station?", "example_en": "Where is the station?", "example_vi": "Nhà ga ở đâu vậy?" },
      { "id": 202, "word": "Left", "ipa": "/left/", "phonetic": "/left/", "syllables": "left", "meaning": "Bên trái", "chunk": "Turn left now", "example": "Turn left at corner.", "example_en": "Turn left at corner.", "example_vi": "Rẽ trái ở góc đường." },
      { "id": 203, "word": "Right", "ipa": "/raɪt/", "phonetic": "/raɪt/", "syllables": "right", "meaning": "Bên phải", "chunk": "Turn right here", "example": "It is on right.", "example_en": "It is on right.", "example_vi": "Nó nằm ở bên phải." },
      { "id": 204, "word": "Straight", "ipa": "/streɪt/", "phonetic": "/streɪt/", "syllables": "straight", "meaning": "Đi thẳng", "chunk": "Go straight ahead", "example": "Go straight ahead now.", "example_en": "Go straight ahead now.", "example_vi": "Hãy đi thẳng về phía trước." },
      { "id": 205, "word": "Near", "ipa": "/nɪər/", "phonetic": "/nɪər/", "syllables": "near", "meaning": "Gần", "chunk": "Near my house", "example": "Is it near here?", "example_en": "Is it near here?", "example_vi": "Nó có gần đây không?" },
      { "id": 206, "word": "Far", "ipa": "/fɑːr/", "phonetic": "/fɑːr/", "syllables": "far", "meaning": "Xa", "chunk": "Far away place", "example": "It is not far.", "example_en": "It is not far.", "example_vi": "Nó không xa đâu." },
      { "id": 207, "word": "Here", "ipa": "/hɪər/", "phonetic": "/hɪər/", "syllables": "here", "meaning": "Ở đây", "chunk": "Right here now", "example": "Come here right now.", "example_en": "Come here right now.", "example_vi": "Hãy đến đây ngay." },
      { "id": 208, "word": "There", "ipa": "/ðeər/", "phonetic": "/ðeər/", "syllables": "there", "meaning": "Ở đằng kia", "chunk": "Over there", "example": "Look over there.", "example_en": "Look over there.", "example_vi": "Hãy nhìn đằng kia xem." },
      { "id": 209, "word": "Map", "ipa": "/mæp/", "phonetic": "/mæp/", "syllables": "map", "meaning": "Bản đồ", "chunk": "Check on map", "example": "Show me on map.", "example_en": "Show me on map.", "example_vi": "Chỉ cho tôi trên bản đồ." },
      { "id": 210, "word": "Turn", "ipa": "/tɜːn/", "phonetic": "/tɜːn/", "syllables": "turn", "meaning": "Rẽ, quẹo", "chunk": "Turn around", "example": "Turn left at light.", "example_en": "Turn left at light.", "example_vi": "Rẽ trái ở cột đèn." }
    ]
  },
  {
    "day": 22,
    "title": "Ngày 22: Thời tiết & Thiên nhiên",
    "topic": "🌱 Ngày 22: Thời tiết & Thiên nhiên",
    "words": [
      { "id": 211, "word": "Weather", "ipa": "/ˈweð.ər/", "phonetic": "/ˈweð.ər/", "syllables": "weath-er", "meaning": "Thời tiết", "chunk": "Nice warm weather", "example": "The weather is good.", "example_en": "The weather is good.", "example_vi": "Thời tiết hôm nay rất đẹp." },
      { "id": 212, "word": "Sun", "ipa": "/sʌn/", "phonetic": "/sʌn/", "syllables": "sun", "meaning": "Mặt trời, ánh nắng", "chunk": "Bright warm sun", "example": "The sun is shining.", "example_en": "The sun is shining.", "example_vi": "Mặt trời đang chiếu sáng." },
      { "id": 213, "word": "Rain", "ipa": "/reɪn/", "phonetic": "/reɪn/", "syllables": "rain", "meaning": "Cơn mưa", "chunk": "Heavy cold rain", "example": "It will rain today.", "example_en": "It will rain today.", "example_vi": "Hôm nay trời sẽ mưa." },
      { "id": 214, "word": "Wind", "ipa": "/wɪnd/", "phonetic": "/wɪnd/", "syllables": "wind", "meaning": "Cơn gió", "chunk": "Strong cold wind", "example": "The wind is blowing.", "example_en": "The wind is blowing.", "example_vi": "Gió đang thổi." },
      { "id": 215, "word": "Cloud", "ipa": "/klaʊd/", "phonetic": "/klaʊd/", "syllables": "cloud", "meaning": "Đám mây", "chunk": "White fluffy cloud", "example": "Look at that cloud.", "example_en": "Look at that cloud.", "example_vi": "Hãy nhìn đám mây kia." },
      { "id": 216, "word": "Sky", "ipa": "/skaɪ/", "phonetic": "/skaɪ/", "syllables": "sky", "meaning": "Bầu trời", "chunk": "Clear blue sky", "example": "The sky is blue.", "example_en": "The sky is blue.", "example_vi": "Bầu trời màu xanh biếc." },
      { "id": 217, "word": "Sea", "ipa": "/siː/", "phonetic": "/siː/", "syllables": "sea", "meaning": "Biển cả", "chunk": "Swim in sea", "example": "I love the sea.", "example_en": "I love the sea.", "example_vi": "Tôi yêu biển cả." },
      { "id": 218, "word": "Tree", "ipa": "/triː/", "phonetic": "/triː/", "syllables": "tree", "meaning": "Cây cối", "chunk": "Big green tree", "example": "Birds sit on tree.", "example_en": "Birds sit on tree.", "example_vi": "Chim đậu trên cây." },
      { "id": 219, "word": "Flower", "ipa": "/flaʊər/", "phonetic": "/flaʊər/", "syllables": "flow-er", "meaning": "Bông hoa", "chunk": "Pretty red flower", "example": "This flower smells sweet.", "example_en": "This flower smells sweet.", "example_vi": "Bông hoa này thơm ngát." },
      { "id": 220, "word": "Warm", "ipa": "/wɔːm/", "phonetic": "/wɔːm/", "syllables": "warm", "meaning": "Ấm áp", "chunk": "Warm sunny day", "example": "Today is very warm.", "example_en": "Today is very warm.", "example_vi": "Hôm nay trời rất ấm áp." }
    ]
  },
  {
    "day": 23,
    "title": "Ngày 23: Động vật quen thuộc",
    "topic": "🌱 Ngày 23: Động vật quen thuộc",
    "words": [
      { "id": 221, "word": "Animal", "ipa": "/ˈæn.ɪ.məl/", "phonetic": "/ˈæn.ɪ.məl/", "syllables": "an-i-mal", "meaning": "Động vật, con thú", "chunk": "Love wild animal", "example": "I love all animals.", "example_en": "I love all animals.", "example_vi": "Tôi yêu tất cả loài vật." },
      { "id": 222, "word": "Dog", "ipa": "/dɒɡ/", "phonetic": "/dɒɡ/", "syllables": "dog", "meaning": "Con chó", "chunk": "Cute loyal dog", "example": "My dog barks loud.", "example_en": "My dog barks loud.", "example_vi": "Con chó của tôi sủa to." },
      { "id": 223, "word": "Cat", "ipa": "/kæt/", "phonetic": "/kæt/", "syllables": "cat", "meaning": "Con mèo", "chunk": "Small cute cat", "example": "The cat is sleeping.", "example_en": "The cat is sleeping.", "example_vi": "Con mèo đang ngủ." },
      { "id": 224, "word": "Bird", "ipa": "/bɜːd/", "phonetic": "/bɜːd/", "syllables": "bird", "meaning": "Con chim", "chunk": "Singing little bird", "example": "The bird can fly.", "example_en": "The bird can fly.", "example_vi": "Con chim có thể bay." },
      { "id": 225, "word": "Chicken", "ipa": "/ˈtʃɪk.ɪn/", "phonetic": "/ˈtʃɪk.ɪn/", "syllables": "chick-en", "meaning": "Con gà", "chunk": "Fried fresh chicken", "example": "We feed the chicken.", "example_en": "We feed the chicken.", "example_vi": "Chúng tôi cho gà ăn." },
      { "id": 226, "word": "Duck", "ipa": "/dʌk/", "phonetic": "/dʌk/", "syllables": "duck", "meaning": "Con vịt", "chunk": "Yellow baby duck", "example": "Ducks swim in pond.", "example_en": "Ducks swim in pond.", "example_vi": "Những con vịt bơi dưới ao." },
      { "id": 227, "word": "Pig", "ipa": "/pɪɡ/", "phonetic": "/pɪɡ/", "syllables": "pig", "meaning": "Con lợn, heo", "chunk": "Pink fat pig", "example": "The pig is eating.", "example_en": "The pig is eating.", "example_vi": "Con lợn đang ăn." },
      { "id": 228, "word": "Cow", "ipa": "/kaʊ/", "phonetic": "/kaʊ/", "syllables": "cow", "meaning": "Con bò", "chunk": "Give fresh milk", "example": "The cow gives milk.", "example_en": "The cow gives milk.", "example_vi": "Con bò cho sữa tươi." },
      { "id": 229, "word": "Horse", "ipa": "/hɔːs/", "phonetic": "/hɔːs/", "syllables": "horse", "meaning": "Con ngựa", "chunk": "Ride strong horse", "example": "He rides a horse.", "example_en": "He rides a horse.", "example_vi": "Anh ấy cưỡi một con ngựa." },
      { "id": 230, "word": "Pet", "ipa": "/pet/", "phonetic": "/pet/", "syllables": "pet", "meaning": "Thú cưng", "chunk": "Keep friendly pet", "example": "Do you have pets?", "example_en": "Do you have pets?", "example_vi": "Bạn có nuôi thú cưng không?" }
    ]
  },
  {
    "day": 24,
    "title": "Ngày 24: Công việc & Văn phòng",
    "topic": "🌱 Ngày 24: Công việc & Văn phòng",
    "words": [
      { "id": 231, "word": "Boss", "ipa": "/bɒs/", "phonetic": "/bɒs/", "syllables": "boss", "meaning": "Sếp, cấp trên", "chunk": "Talk to boss", "example": "My boss is strict.", "example_en": "My boss is strict.", "example_vi": "Sếp tôi rất nghiêm khắc." },
      { "id": 232, "word": "Staff", "ipa": "/stɑːf/", "phonetic": "/stɑːf/", "syllables": "staff", "meaning": "Nhân viên", "chunk": "Friendly office staff", "example": "Our staff works hard.", "example_en": "Our staff works hard.", "example_vi": "Nhân viên chúng tôi làm việc chăm chỉ." },
      { "id": 233, "word": "Office", "ipa": "/ˈɒf.ɪs/", "phonetic": "/ˈɒf.ɪs/", "syllables": "of-fice", "meaning": "Văn phòng", "chunk": "Go to office", "example": "I am in office.", "example_en": "I am in office.", "example_vi": "Tôi đang ở văn phòng." },
      { "id": 234, "word": "Busy", "ipa": "/ˈbɪz.i/", "phonetic": "/ˈbɪz.i/", "syllables": "bus-y", "meaning": "Bận rộn", "chunk": "Very busy day", "example": "I am busy today.", "example_en": "I am busy today.", "example_vi": "Hôm nay tôi rất bận." },
      { "id": 235, "word": "Meeting", "ipa": "/ˈmiː.tɪŋ/", "phonetic": "/ˈmiː.tɪŋ/", "syllables": "meet-ing", "meaning": "Cuộc họp", "chunk": "Join team meeting", "example": "We have a meeting.", "example_en": "We have a meeting.", "example_vi": "Chúng tôi có một cuộc họp." },
      { "id": 236, "word": "Email", "ipa": "/ˈiː.meɪl/", "phonetic": "/ˈiː.meɪl/", "syllables": "e-mail", "meaning": "Thư điện tử", "chunk": "Send an email", "example": "Send me an email.", "example_en": "Send me an email.", "example_vi": "Gửi email cho tôi nhé." },
      { "id": 237, "word": "Call", "ipa": "/kɔːl/", "phonetic": "/kɔːl/", "syllables": "call", "meaning": "Gọi điện", "chunk": "Give a call", "example": "Call me back later.", "example_en": "Call me back later.", "example_vi": "Gọi lại cho tôi sau nhé." },
      { "id": 238, "word": "Idea", "ipa": "/aɪˈdɪə/", "phonetic": "/aɪˈdɪə/", "syllables": "i-de-a", "meaning": "Ý tưởng", "chunk": "Great smart idea", "example": "That is good idea.", "example_en": "That is good idea.", "example_vi": "Đó là một ý tưởng hay." },
      { "id": 239, "word": "Team", "ipa": "/tiːm/", "phonetic": "/tiːm/", "syllables": "team", "meaning": "Đội ngũ, nhóm", "chunk": "Great strong team", "example": "We work as team.", "example_en": "We work as team.", "example_vi": "Chúng tôi làm việc theo nhóm." },
      { "id": 240, "word": "Goal", "ipa": "/ɡəʊl/", "phonetic": "/ɡəʊl/", "syllables": "goal", "meaning": "Mục tiêu", "chunk": "Reach our goal", "example": "Set a clear goal.", "example_en": "Set a clear goal.", "example_vi": "Hãy đặt mục tiêu rõ ràng." }
    ]
  },
  {
    "day": 25,
    "title": "Ngày 25: Trường học & Học tập",
    "topic": "🌱 Ngày 25: Trường học & Học tập",
    "words": [
      { "id": 241, "word": "Book", "ipa": "/bʊk/", "phonetic": "/bʊk/", "syllables": "book", "meaning": "Cuốn sách", "chunk": "Read open book", "example": "Open your book now.", "example_en": "Open your book now.", "example_vi": "Hãy mở sách của bạn ra." },
      { "id": 242, "word": "Class", "ipa": "/klɑːs/", "phonetic": "/klɑːs/", "syllables": "class", "meaning": "Lớp học", "chunk": "In the class", "example": "Join our English class.", "example_en": "Join our English class.", "example_vi": "Tham gia lớp học tiếng Anh của chúng tôi." },
      { "id": 243, "word": "Test", "ipa": "/test/", "phonetic": "/test/", "syllables": "test", "meaning": "Bài kiểm tra, thi", "chunk": "Pass the test", "example": "I passed the test.", "example_en": "I passed the test.", "example_vi": "Tôi đã vượt qua bài kiểm tra." },
      { "id": 244, "word": "Learn", "ipa": "/lɜːn/", "phonetic": "/lɜːn/", "syllables": "learn", "meaning": "Học hỏi", "chunk": "Learn fast daily", "example": "I learn new words.", "example_en": "I learn new words.", "example_vi": "Tôi học các từ vựng mới." },
      { "id": 245, "word": "Write", "ipa": "/raɪt/", "phonetic": "/raɪt/", "syllables": "write", "meaning": "Viết lách", "chunk": "Write it down", "example": "Write your name here.", "example_en": "Write your name here.", "example_vi": "Viết tên bạn vào đây." },
      { "id": 246, "word": "Ask", "ipa": "/ɑːsk/", "phonetic": "/ɑːsk/", "syllables": "ask", "meaning": "Hỏi", "chunk": "Ask a question", "example": "Can I ask you?", "example_en": "Can I ask you?", "example_vi": "Tôi hỏi bạn được không?" },
      { "id": 247, "word": "Answer", "ipa": "/ˈɑːn.sər/", "phonetic": "/ˈɑːn.sər/", "syllables": "an-swer", "meaning": "Trả lời", "chunk": "Give right answer", "example": "Please answer my question.", "example_en": "Please answer my question.", "example_vi": "Làm ơn trả lời câu hỏi của tôi." },
      { "id": 248, "word": "Easy", "ipa": "/ˈiː.zi/", "phonetic": "/ˈiː.zi/", "syllables": "ea-sy", "meaning": "Dễ dàng", "chunk": "Easy English lesson", "example": "This test is easy.", "example_en": "This test is easy.", "example_vi": "Bài kiểm tra này rất dễ." },
      { "id": 249, "word": "Hard", "ipa": "/hɑːd/", "phonetic": "/hɑːd/", "syllables": "hard", "meaning": "Khó khăn, chăm chỉ", "chunk": "Study very hard", "example": "Work hard every day.", "example_en": "Work hard every day.", "example_vi": "Hãy chăm chỉ làm việc mỗi ngày." },
      { "id": 250, "word": "Mistake", "ipa": "/mɪˈsteɪk/", "phonetic": "/mɪˈsteɪk/", "syllables": "mis-take", "meaning": "Lỗi lầm, sai sót", "chunk": "Make no mistake", "example": "Do not fear mistakes.", "example_en": "Do not fear mistakes.", "example_vi": "Đừng sợ mắc sai sót." }
    ]
  },
  {
    "day": 26,
    "title": "Ngày 26: Giải trí & Sở thích",
    "topic": "🌱 Ngày 26: Giải trí & Sở thích",
    "words": [
      { "id": 251, "word": "Music", "ipa": "/ˈmjuː.zɪk/", "phonetic": "/ˈmjuː.zɪk/", "syllables": "mu-sic", "meaning": "Âm nhạc", "chunk": "Listen to music", "example": "I love sweet music.", "example_en": "I love sweet music.", "example_vi": "Tôi yêu âm nhạc du dương." },
      { "id": 252, "word": "Song", "ipa": "/sɒŋ/", "phonetic": "/sɒŋ/", "syllables": "song", "meaning": "Bài hát", "chunk": "Sing a song", "example": "Sing a happy song.", "example_en": "Sing a happy song.", "example_vi": "Hãy hát một bài hát vui vẻ." },
      { "id": 253, "word": "Movie", "ipa": "/ˈmuː.vi/", "phonetic": "/ˈmuː.vi/", "syllables": "mov-ie", "meaning": "Bộ phim", "chunk": "Watch fun movie", "example": "Let us watch movie.", "example_en": "Let us watch movie.", "example_vi": "Chúng ta hãy xem phim." },
      { "id": 254, "word": "Game", "ipa": "/ɡeɪm/", "phonetic": "/ɡeɪm/", "syllables": "game", "meaning": "Trò chơi", "chunk": "Play fun game", "example": "I like video games.", "example_en": "I like video games.", "example_vi": "Tôi thích trò chơi điện tử." },
      { "id": 255, "word": "Play", "ipa": "/pleɪ/", "phonetic": "/pleɪ/", "syllables": "play", "meaning": "Chơi đùa", "chunk": "Play with friends", "example": "Children play in park.", "example_en": "Children play in park.", "example_vi": "Bọn trẻ chơi trong công viên." },
      { "id": 256, "word": "Sing", "ipa": "/sɪŋ/", "phonetic": "/sɪŋ/", "syllables": "sing", "meaning": "Hát ca", "chunk": "Sing out loud", "example": "She can sing well.", "example_en": "She can sing well.", "example_vi": "Cô ấy hát rất hay." },
      { "id": 257, "word": "Dance", "ipa": "/dɑːns/", "phonetic": "/dɑːns/", "syllables": "dance", "meaning": "Nhảy múa, khiêu vũ", "chunk": "Dance to music", "example": "They dance all night.", "example_en": "They dance all night.", "example_vi": "Họ nhảy múa suốt đêm." },
      { "id": 258, "word": "Sport", "ipa": "/spɔːt/", "phonetic": "/spɔːt/", "syllables": "sport", "meaning": "Thể thao", "chunk": "Play healthy sport", "example": "Football is my sport.", "example_en": "Football is my sport.", "example_vi": "Bóng đá là môn thể thao của tôi." },
      { "id": 259, "word": "Travel", "ipa": "/ˈtræv.əl/", "phonetic": "/ˈtræv.əl/", "syllables": "trav-el", "meaning": "Du lịch", "chunk": "Travel the world", "example": "I want to travel.", "example_en": "I want to travel.", "example_vi": "Tôi muốn đi du lịch." },
      { "id": 260, "word": "Fun", "ipa": "/fʌn/", "phonetic": "/fʌn/", "syllables": "fun", "meaning": "Niềm vui, thú vị", "chunk": "Have great fun", "example": "Learning English is fun.", "example_en": "Learning English is fun.", "example_vi": "Học tiếng Anh thật là vui." }
    ]
  },
  {
    "day": 27,
    "title": "Ngày 27: Giao tiếp & Trò chuyện",
    "topic": "🌱 Ngày 27: Giao tiếp & Trò chuyện",
    "words": [
      { "id": 261, "word": "Talk", "ipa": "/tɔːk/", "phonetic": "/tɔːk/", "syllables": "talk", "meaning": "Nói chuyện", "chunk": "Talk with you", "example": "Can we talk now?", "example_en": "Can we talk now?", "example_vi": "Chúng ta nói chuyện được không?" },
      { "id": 262, "word": "Say", "ipa": "/seɪ/", "phonetic": "/seɪ/", "syllables": "say", "meaning": "Nói rằng", "chunk": "Say it clearly", "example": "What did you say?", "example_en": "What did you say?", "example_vi": "Bạn vừa nói gì thế?" },
      { "id": 263, "word": "Tell", "ipa": "/tel/", "phonetic": "/tel/", "syllables": "tell", "meaning": "Kể, bảo", "chunk": "Tell me more", "example": "Tell me the truth.", "example_en": "Tell me the truth.", "example_vi": "Hãy nói cho tôi sự thật." },
      { "id": 264, "word": "Speak", "ipa": "/spiːk/", "phonetic": "/spiːk/", "syllables": "speak", "meaning": "Phát biểu, nói tiếng", "chunk": "Speak English well", "example": "I speak English slowly.", "example_en": "I speak English slowly.", "example_vi": "Tôi nói tiếng Anh từ tốn." },
      { "id": 265, "word": "Hear", "ipa": "/hɪər/", "phonetic": "/hɪər/", "syllables": "hear", "meaning": "Nghe thấy", "chunk": "Hear the sound", "example": "Can you hear me?", "example_en": "Can you hear me?", "example_vi": "Bạn có nghe thấy tôi không?" },
      { "id": 266, "word": "Know", "ipa": "/nəʊ/", "phonetic": "/nəʊ/", "syllables": "know", "meaning": "Biết, hiểu rõ", "chunk": "I know that", "example": "I know the answer.", "example_en": "I know the answer.", "example_vi": "Tôi biết câu trả lời." },
      { "id": 267, "word": "Think", "ipa": "/θɪŋk/", "phonetic": "/θɪŋk/", "syllables": "think", "meaning": "Suy nghĩ", "chunk": "Think it over", "example": "I think you right.", "example_en": "I think you right.", "example_vi": "Tôi nghĩ là bạn đúng." },
      { "id": 268, "word": "Understand", "ipa": "/ˌʌn.dəˈstænd/", "phonetic": "/ˌʌn.dəˈstænd/", "syllables": "un-der-stand", "meaning": "Thấu hiểu", "chunk": "Understand fully", "example": "I understand you now.", "example_en": "I understand you now.", "example_vi": "Bây giờ tôi hiểu bạn rồi." },
      { "id": 269, "word": "Mean", "ipa": "/miːn/", "phonetic": "/miːn/", "syllables": "mean", "meaning": "Có nghĩa là", "chunk": "What you mean", "example": "What does this mean?", "example_en": "What does this mean?", "example_vi": "Điều này có nghĩa là gì?" },
      { "id": 270, "word": "Repeat", "ipa": "/rɪˈpiːt/", "phonetic": "/rɪˈpiːt/", "syllables": "re-peat", "meaning": "Nhắc lại, lặp lại", "chunk": "Repeat after me", "example": "Please repeat once more.", "example_en": "Please repeat once more.", "example_vi": "Làm ơn nhắc lại một lần nữa." }
    ]
  },
  {
    "day": 28,
    "title": "Ngày 28: Tính từ mô tả phổ biến",
    "topic": "🌱 Ngày 28: Tính từ mô tả phổ biến",
    "words": [
      { "id": 271, "word": "Good", "ipa": "/ɡʊd/", "phonetic": "/ɡʊd/", "syllables": "good", "meaning": "Tốt lành", "chunk": "Good morning friend", "example": "You are very good.", "example_en": "You are very good.", "example_vi": "Bạn rất tốt." },
      { "id": 272, "word": "Bad", "ipa": "/bæd/", "phonetic": "/bæd/", "syllables": "bad", "meaning": "Tồi tệ, xấu", "chunk": "Bad rainy weather", "example": "It is not bad.", "example_en": "It is not bad.", "example_vi": "Nó không hề tệ đâu." },
      { "id": 273, "word": "Fast", "ipa": "/fɑːst/", "phonetic": "/fɑːst/", "syllables": "fast", "meaning": "Nhanh chóng", "chunk": "Run very fast", "example": "He runs so fast.", "example_en": "He runs so fast.", "example_vi": "Anh ấy chạy rất nhanh." },
      { "id": 274, "word": "Slow", "ipa": "/sləʊ/", "phonetic": "/sləʊ/", "syllables": "slow", "meaning": "Chậm rãi", "chunk": "Slow and steady", "example": "Speak a bit slow.", "example_en": "Speak a bit slow.", "example_vi": "Hãy nói chậm một chút." },
      { "id": 275, "word": "Early", "ipa": "/ˈɜː.li/", "phonetic": "/ˈɜː.li/", "syllables": "ear-ly", "meaning": "Sớm", "chunk": "Wake up early", "example": "I wake up early.", "example_en": "I wake up early.", "example_vi": "Tôi thức dậy sớm." },
      { "id": 276, "word": "Late", "ipa": "/leɪt/", "phonetic": "/leɪt/", "syllables": "late", "meaning": "Muộn, trễ", "chunk": "Better late never", "example": "Do not be late.", "example_en": "Do not be late.", "example_vi": "Đừng đến muộn nhé." },
      { "id": 277, "word": "Right", "ipa": "/raɪt/", "phonetic": "/raɪt/", "syllables": "right", "meaning": "Đúng đắn", "chunk": "You are right", "example": "Your answer is right.", "example_en": "Your answer is right.", "example_vi": "Câu trả lời của bạn đúng rồi." },
      { "id": 278, "word": "Wrong", "ipa": "/rɒŋ/", "phonetic": "/rɒŋ/", "syllables": "wrong", "meaning": "Sai lầm", "chunk": "Nothing goes wrong", "example": "Do not be wrong.", "example_en": "Do not be wrong.", "example_vi": "Đừng để bị sai nhé." },
      { "id": 279, "word": "Rich", "ipa": "/rɪtʃ/", "phonetic": "/rɪtʃ/", "syllables": "rich", "meaning": "Giàu có", "chunk": "Rich in vitamins", "example": "He has rich mind.", "example_en": "He has rich mind.", "example_vi": "Anh ấy có tâm hồn phong phú." },
      { "id": 280, "word": "Poor", "ipa": "/pɔːr/", "phonetic": "/pɔːr/", "syllables": "poor", "meaning": "Nghèo, tội nghiệp", "chunk": "Poor little thing", "example": "Help the poor people.", "example_en": "Help the poor people.", "example_vi": "Hãy giúp đỡ người nghèo." }
    ]
  },
  {
    "day": 29,
    "title": "Ngày 29: Khẩn cấp & Cứu trợ",
    "topic": "🌱 Ngày 29: Khẩn cấp & Cứu trợ",
    "words": [
      { "id": 281, "word": "Emergency", "ipa": "/ɪˈmɜː.dʒən.si/", "phonetic": "/ɪˈmɜː.dʒən.si/", "syllables": "e-mer-gen-cy", "meaning": "Tình huống khẩn cấp", "chunk": "In case of emergency", "example": "This is an emergency.", "example_en": "This is an emergency.", "example_vi": "Đây là trường hợp khẩn cấp." },
      { "id": 282, "word": "Danger", "ipa": "/ˈdeɪn.dʒər/", "phonetic": "/ˈdeɪn.dʒər/", "syllables": "dan-ger", "meaning": "Mối nguy hiểm", "chunk": "Out of danger", "example": "Stay away from danger.", "example_en": "Stay away from danger.", "example_vi": "Hãy tránh xa nguy hiểm." },
      { "id": 283, "word": "Police", "ipa": "/pəˈliːs/", "phonetic": "/pəˈliːs/", "syllables": "po-lice", "meaning": "Cảnh sát", "chunk": "Call the police", "example": "Call police right now.", "example_en": "Call police right now.", "example_vi": "Hãy gọi cảnh sát ngay." },
      { "id": 284, "word": "Fire", "ipa": "/faɪər/", "phonetic": "/faɪər/", "syllables": "fire", "meaning": "Ngọn lửa, hỏa hoạn", "chunk": "Put out fire", "example": "There is a fire.", "example_en": "There is a fire.", "example_vi": "Có một vụ hỏa hoạn." },
      { "id": 285, "word": "Lost", "ipa": "/lɒst/", "phonetic": "/lɒst/", "syllables": "lost", "meaning": "Bị lạc, mất phương hướng", "chunk": "Get lost easily", "example": "I am lost here.", "example_en": "I am lost here.", "example_vi": "Tôi bị lạc ở đây." },
      { "id": 286, "word": "Hurry", "ipa": "/ˈhʌr.i/", "phonetic": "/ˈhʌr.i/", "syllables": "hur-ry", "meaning": "Nhanh lên, khẩn trương", "chunk": "Hurry up please", "example": "Hurry up or late.", "example_en": "Hurry up or late.", "example_vi": "Nhanh lên kẻo muộn." },
      { "id": 287, "word": "Wait", "ipa": "/weɪt/", "phonetic": "/weɪt/", "syllables": "wait", "meaning": "Chờ đợi", "chunk": "Wait for me", "example": "Please wait a moment.", "example_en": "Please wait a moment.", "example_vi": "Xin hãy chờ một lát." },
      { "id": 288, "word": "Careful", "ipa": "/ˈkeə.fəl/", "phonetic": "/ˈkeə.fəl/", "syllables": "care-ful", "meaning": "Cẩn thận", "chunk": "Be very careful", "example": "Be careful out there.", "example_en": "Be careful out there.", "example_vi": "Hãy cẩn thận ngoài kia." },
      { "id": 289, "word": "Quiet", "ipa": "/ˈkwaɪ.ət/", "phonetic": "/ˈkwaɪ.ət/", "syllables": "qui-et", "meaning": "Yên lặng", "chunk": "Keep quiet please", "example": "Please be quiet now.", "example_en": "Please be quiet now.", "example_vi": "Xin hãy giữ yên lặng." },
      { "id": 290, "word": "Attention", "ipa": "/əˈten.ʃən/", "phonetic": "/əˈten.ʃən/", "syllables": "at-ten-tion", "meaning": "Sự chú ý", "chunk": "Pay close attention", "example": "Pay attention to this.", "example_en": "Pay attention to this.", "example_vi": "Hãy chú ý vào điều này." }
    ]
  },
  {
    "day": 30,
    "title": "Ngày 30: Chúc mừng & Tạm biệt",
    "topic": "🌱 Ngày 30: Chúc mừng & Tạm biệt",
    "words": [
      { "id": 291, "word": "Wish", "ipa": "/wɪʃ/", "phonetic": "/wɪʃ/", "syllables": "wish", "meaning": "Mong ước, chúc", "chunk": "Best warm wishes", "example": "I wish you well.", "example_en": "I wish you well.", "example_vi": "Tôi chúc bạn mọi điều tốt lành." },
      { "id": 292, "word": "Hope", "ipa": "/həʊp/", "phonetic": "/həʊp/", "syllables": "hope", "meaning": "Hy vọng", "chunk": "Never lose hope", "example": "I hope you succeed.", "example_en": "I hope you succeed.", "example_vi": "Tôi hy vọng bạn thành công." },
      { "id": 293, "word": "Dream", "ipa": "/driːm/", "phonetic": "/driːm/", "syllables": "dream", "meaning": "Ước mơ", "chunk": "Follow your dream", "example": "Follow your big dream.", "example_en": "Follow your big dream.", "example_vi": "Hãy theo đuổi ước mơ lớn của bạn." },
      { "id": 294, "word": "Lucky", "ipa": "/ˈlʌk.i/", "phonetic": "/ˈlʌk.i/", "syllables": "luck-y", "meaning": "May mắn", "chunk": "Wish good lucky", "example": "You are so lucky.", "example_en": "You are so lucky.", "example_vi": "Bạn thật là may mắn." },
      { "id": 295, "word": "Success", "ipa": "/səkˈses/", "phonetic": "/səkˈses/", "syllables": "suc-cess", "meaning": "Thành công", "chunk": "Key to success", "example": "Wish you big success.", "example_en": "Wish you big success.", "example_vi": "Chúc bạn thành công lớn." },
      { "id": 296, "word": "Love", "ipa": "/lʌv/", "phonetic": "/lʌv/", "syllables": "love", "meaning": "Tình yêu", "chunk": "Fall in love", "example": "We love each other.", "example_en": "We love each other.", "example_vi": "Chúng tôi yêu thương nhau." },
      { "id": 297, "word": "Peace", "ipa": "/piːs/", "phonetic": "/piːs/", "syllables": "peace", "meaning": "Hòa bình, bình an", "chunk": "Peace and joy", "example": "Live in pure peace.", "example_en": "Live in pure peace.", "example_vi": "Sống trong sự bình an thuần khiết." },
      { "id": 298, "word": "Smile", "ipa": "/smaɪl/", "phonetic": "/smaɪl/", "syllables": "smile", "meaning": "Nụ cười", "chunk": "Keep bright smile", "example": "Smile at new day.", "example_en": "Smile at new day.", "example_vi": "Hãy mỉm cười với ngày mới." },
      { "id": 299, "word": "Future", "ipa": "/ˈfjuː.tʃər/", "phonetic": "/ˈfjuː.tʃər/", "syllables": "fu-ture", "meaning": "Tương lai", "chunk": "Bright good future", "example": "Your future is bright.", "example_en": "Your future is bright.", "example_vi": "Tương lai của bạn rất tươi sáng." },
      { "id": 300, "word": "Victory", "ipa": "/ˈvɪk.tər.i/", "phonetic": "/ˈvɪk.tər.i/", "syllables": "vic-to-ry", "meaning": "Chiến thắng", "chunk": "Celebrate great victory", "example": "Celebrate your great victory.", "example_en": "Celebrate your great victory.", "example_vi": "Hãy ăn mừng chiến thắng vĩ đại của bạn." }
    ]
  }
];

// Mảng phẳng 300 từ cho tra cứu nhanh
const survival300Words = survival300Topics.flatMap(t => t.words);

if (typeof window !== 'undefined') {
  window.survival300Topics = survival300Topics;
  window.survival300Words = survival300Words;
}
