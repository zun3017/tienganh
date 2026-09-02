
// --- REGISTER EXTENDED TOPICS (B1, B2, TOEIC) ---
function ensureExtendedTopicsRegistered() {
    if (typeof premiumTopics !== 'undefined') {
        if (typeof b1VocabData !== 'undefined') {
            b1VocabData.id = 'b1_vocab';
            premiumTopics['b1_vocab'] = b1VocabData;
        }
        if (typeof b2VocabData !== 'undefined') {
            b2VocabData.id = 'b2_vocab';
            premiumTopics['b2_vocab'] = b2VocabData;
        }
        if (typeof toeic650Data !== 'undefined') {
            toeic650Data.id = 'toeic_650';
            premiumTopics['toeic_650'] = toeic650Data;
        }
    }
}
ensureExtendedTopicsRegistered();


// --- SAFE SUPABASE SYNC HELPER ---
function safeSyncToSupabase(userKey) {
    const targetUser = userKey || currentUser;
    if (typeof SupabaseService !== 'undefined' && targetUser) {
        try {
            let users = JSON.parse(localStorage.getItem('gas_users') || '{}');
            if (users[targetUser]) {
                SupabaseService.syncUser(targetUser, users[targetUser]);
            }
        } catch (e) {
            console.log('Supabase sync offline:', e);
        }
    }
}

// --- DATA SETUP ---
        // vocabTopics is loaded from vocab_data.js
        let currentUser = null;
        let currentWords = [];
        let currentIndex = 0;
        let sessionLearnedWords = [];
        let isSrsMode = false;
        let srsQueue = []; // Array of words learned
        let quizQueue = [];
        let targetQuizWord = null;
        let quizScore = 0;
        let quizHintTimeout = null;
        let currentTopicId = null;
        
        // --- TÍNH NĂNG ĐẶC TRỊ MẤT GỐC ---
        const confusingPairs = {
            "offer": { confuseWith: "office", diff: "Offer (Lời đề nghị) - Office (Văn phòng)" },
            "accept": { confuseWith: "except", diff: "Accept (Chấp nhận) - Except (Ngoại trừ)" },
            "desert": { confuseWith: "dessert", diff: "Desert (Sa mạc, 1 chữ s) - Dessert (Tráng miệng, 2 chữ s)" },
            "affect": { confuseWith: "effect", diff: "Affect (Động từ: ảnh hưởng) - Effect (Danh từ: kết quả)" },
            "quiet": { confuseWith: "quite", diff: "Quiet (Yên lặng) - Quite (Khá là)" }
        };

        const vocabMnemonics = {
            "ignore": "Nó <b>ÍCH NO</b> nên nó <b>phớt lờ</b> lời khuyên giảm cân.",
            "offer": "Tôi <b>ĐỀ NGHỊ</b> bạn ăn bát phở (<b>ÓP PHỞ</b>).",
            "campaign": "<b>CAM</b> sành <b>BÊN</b> này đang có <b>chiến dịch</b> giảm giá.",
            "budget": "Phải <b>BẮT DỊT</b> (vịt) về bán để tăng <b>ngân sách</b>.",
            "strategy": "Sợ <b>TRÁ (TƠ) DÌ</b> phát hiện ra <b>chiến lược</b> bí mật."
        };

        // --- CUSTOM ALERT ---
        window.alert = function(msg, title = "Thông báo") {
            let existing = document.getElementById('custom-alert-modal');
            if (existing) existing.remove();

            const modal = document.createElement('div');
            modal.id = 'custom-alert-modal';
            modal.style.position = 'fixed';
            modal.style.top = '0';
            modal.style.left = '0';
            modal.style.width = '100vw';
            modal.style.height = '100vh';
            modal.style.backgroundColor = 'rgba(0,0,0,0.5)';
            modal.style.backdropFilter = 'blur(5px)';
            modal.style.zIndex = '9999';
            modal.style.display = 'flex';
            modal.style.alignItems = 'center';
            modal.style.justifyContent = 'center';
            modal.style.opacity = '0';
            modal.style.transition = 'opacity 0.3s';

            const box = document.createElement('div');
            box.className = 'glass';
            box.style.background = 'rgba(255,255,255,0.9)';
            box.style.padding = '2rem';
            box.style.borderRadius = '20px';
            box.style.maxWidth = '400px';
            box.style.width = '90%';
            box.style.textAlign = 'center';
            box.style.boxShadow = '0 15px 35px rgba(0,0,0,0.2)';
            box.style.transform = 'scale(0.8)';
            box.style.transition = 'transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)';

            const h3 = document.createElement('h3');
            h3.style.margin = '0 0 1rem 0';
            h3.style.color = '#1e3a8a';
            h3.innerText = title;

            const p = document.createElement('p');
            p.style.margin = '0 0 1.5rem 0';
            p.style.color = '#1e293b';
            p.innerText = msg;
            p.style.whiteSpace = 'pre-line';
            p.style.lineHeight = '1.5';

            const btn = document.createElement('button');
            btn.innerText = 'Đã hiểu';
            btn.style.background = '#3b82f6';
            btn.style.color = 'white';
            btn.style.border = 'none';
            btn.style.padding = '0.7rem 1.5rem';
            btn.style.borderRadius = '12px';
            btn.style.cursor = 'pointer';
            btn.style.fontWeight = 'bold';
            btn.style.boxShadow = '0 4px 15px rgba(59, 130, 246, 0.4)';
            btn.onclick = () => {
                modal.style.opacity = '0';
                box.style.transform = 'scale(0.8)';
                setTimeout(() => modal.remove(), 300);
            };

            box.appendChild(h3);
            box.appendChild(p);
            box.appendChild(btn);
            modal.appendChild(box);
            document.body.appendChild(modal);

            setTimeout(() => {
                modal.style.opacity = '1';
                box.style.transform = 'scale(1)';
            }, 10);
        };

        // --- MASCOT LOGIC ---
        let mascotTimeout = null;
        function showMascotSpeech(text, ms) {
            const speech = document.getElementById('mascot-speech');
            speech.innerText = text;
            speech.classList.add('show');
            clearTimeout(mascotTimeout);
            mascotTimeout = setTimeout(() => {
                speech.classList.remove('show');
            }, ms);
        }

        function playOnboardingSequence() {
            const msgs = [
                "Xin chào! Mình là Cú thông thái, trợ lý học tập của bạn đây!",
                "Ở đây có hơn 1000 từ vựng thiết yếu được chia theo từng chủ đề rất dễ học.",
                "Khi lật thẻ, bạn sẽ được nghe phát âm chuẩn và có câu ví dụ đi kèm.",
                "Đặc biệt, sau mỗi 20 từ, mình sẽ cho bạn làm bài kiểm tra nhỏ. Nếu bí quá mình sẽ gợi ý nhé!",
                "Hãy đăng ký tài khoản hoặc đăng nhập ngay để bắt đầu hành trình nhé!"
            ];
            
            let step = 0;
            function nextStep() {
                if (currentUser) {
                    // Stop sequence if user logs in midway
                    localStorage.setItem('hasSeenOnboardingV2', 'true');
                    return;
                }
                if(step < msgs.length) {
                    showMascotSpeech(msgs[step], 5000);
                    step++;
                    setTimeout(nextStep, 5500); // Wait for speech to finish + small pause
                } else {
                    localStorage.setItem('hasSeenOnboardingV2', 'true');
                }
            }
            nextStep();
        }

        function handleMascotClick() {
            if(localStorage.getItem('hasSeenOnboardingV2')) {
                const quotes = ["Cố lên nào!", "Học ngoại ngữ cần kiên trì!", "Đừng quên ôn bài cũ nhé!", "Tiếng Anh sẽ mở ra thế giới mới cho bạn!"];
                showMascotSpeech(quotes[Math.floor(Math.random()*quotes.length)], 3000);
            }
        }

        function checkOnboarding() {
            if(!localStorage.getItem('hasSeenOnboardingV2')) {
                setTimeout(playOnboardingSequence, 1000);
            }
        }


        // --- NAVIGATION & GAME UI ---
        function prepareSRS() {
            let users = JSON.parse(localStorage.getItem('gas_users') || '{}');
            if (!currentUser || !users[currentUser]) return;
            let uData = users[currentUser];
            let todayDate = new Date(getTodayString());
            
            srsQueue = [];
            
            let wordMap = {};
            if(uData.historyList) {
                uData.historyList.forEach(item => {
                    wordMap[item.word] = item;
                });
            }
            
            // 1. Add words from srsData that are due
            if(uData.srsData) {
                for(let wordKey in uData.srsData) {
                    let item = uData.srsData[wordKey];
                    if(item.nextDate) {
                        let nextDate = new Date(item.nextDate);
                        if(nextDate <= todayDate) {
                            if(wordMap[wordKey]) {
                                srsQueue.push({
                                    word: wordKey,
                                    ipa: wordMap[wordKey].ipa,
                                    meaning: wordMap[wordKey].meaning
                                });
                            } else {
                                srsQueue.push({ word: wordKey, ipa: '', meaning: '...' });
                            }
                        }
                    }
                }
            }
            
            // 2. Add words from historyList that are NOT in srsData and were learned BEFORE today
            for(let wordKey in wordMap) {
                if(!uData.srsData || !uData.srsData[wordKey]) {
                    let learnedDate = new Date(wordMap[wordKey].date);
                    if(learnedDate < todayDate) {
                        srsQueue.push({
                            word: wordKey,
                            ipa: wordMap[wordKey].ipa,
                            meaning: wordMap[wordKey].meaning
                        });
                    }
                }
            }
            
            if(srsQueue.length > 0) {
                document.getElementById('srs-status-text').innerText = `Hôm nay bạn có ${srsQueue.length} từ cần ôn tập. Hãy bắt đầu ngay!`;
                document.getElementById('btn-start-srs').style.display = 'inline-block';
            } else {
                document.getElementById('srs-status-text').innerText = 'Tuyệt vời! Bạn đã hoàn thành tất cả bài ôn tập hôm nay.';
                document.getElementById('btn-start-srs').style.display = 'none';
            }
        }

        let currentCloudSection = '';
        function showCloudContent(section) {
            const container = document.getElementById('dynamic-cloud-content');
            const title = document.getElementById('cloud-title');
            const desc = document.getElementById('cloud-desc');
            const cloudArea = document.getElementById('cloud-content-area');
            
            if (cloudArea.style.opacity === '1' && currentCloudSection === section) {
                hideCloudContent();
                return;
            }
            currentCloudSection = section;
            
            // clear container by moving its children back to legacy
            const legacy = document.getElementById('legacy-dashboard-components');
            while(container.firstChild) {
                legacy.appendChild(container.firstChild);
            }
            
            if (section === 'progress') {
                title.innerText = 'Tiến Độ Của Bạn';
                desc.innerText = 'Cùng xem lại bạn đã học được bao nhiêu từ nhé!';
                container.appendChild(document.getElementById('daily-progress-bar').parentNode.parentNode);
            } else if (section === 'streak') {
                title.innerText = 'Chuỗi Học Tập';
                desc.innerText = 'Cố gắng duy trì lửa học tập mỗi ngày nhé!';
                container.appendChild(document.getElementById('streak-panel'));
            } else if (section === 'store') {
                title.innerText = 'Cửa Hàng Tích Điểm';
                desc.innerText = 'Dùng điểm thưởng từ việc học để mở khóa từ vựng chuyên sâu!';
                container.appendChild(document.getElementById('store-panel'));
            } else if (section === 'cat_3000' || section === 'cat_toeic' || section === 'cat_ielts' || section === 'library') {
                title.innerText = 'Thư Viện Bài Học';
                desc.innerText = 'Chọn bài học bạn muốn chinh phục hôm nay!';
                
                ensureExtendedTopicsRegistered();
                initDashboard();
                
                container.appendChild(document.getElementById('topic-select'));
                container.appendChild(document.getElementById('topic-actions'));
                container.appendChild(document.getElementById('btn-history'));
                
                let topicSelect = document.getElementById('topic-select');
                if (topicSelect) {
                    if (section === 'cat_3000') {
                        // 3000 Từ Oxford -> chọn topic 10 hoặc topic 0
                        topicSelect.value = '10';
                        if (!topicSelect.value) topicSelect.value = '0';
                    } else if (section === 'cat_toeic') {
                        topicSelect.value = 'toeic_650';
                    } else if (section === 'cat_ielts') {
                        topicSelect.value = 'ielts';
                    }
                    if (!topicSelect.value && topicSelect.options.length > 1) {
                        topicSelect.selectedIndex = 1;
                    }
                }
                onTopicSelect();
            } else if (section === 'srs') {
                title.innerText = 'Ôn Tập Nhớ Lâu (SRS)';
                desc.innerText = 'Hệ thống lặp lại ngắt quãng giúp bạn nhớ từ vĩnh viễn!';
                container.appendChild(document.getElementById('srs-panel'));
                prepareSRS();
            } else if (section === 'import') {
                title.innerText = 'Thêm Dữ Liệu Học';
                desc.innerText = 'Import từ vựng mới bằng file Excel.';
                container.appendChild(document.getElementById('excel-upload').parentNode);
            }
            
            cloudArea.style.opacity = '1';
            cloudArea.style.transform = 'translate(-50%, -50%) scale(1)';
            cloudArea.style.pointerEvents = 'auto';
        }

        function hideCloudContent() {
            currentCloudSection = '';
            const cloudArea = document.getElementById('cloud-content-area');
            cloudArea.style.opacity = '0';
            cloudArea.style.transform = 'translate(-50%, -50%) scale(0.9)';
            cloudArea.style.pointerEvents = 'none';
        }

        let activeStudyStart = null;

        function showScreen(screenId) {
            if(screenId !== 'screen-flashcard' && activeStudyStart) {
                let elapsedSecs = Math.floor((Date.now() - activeStudyStart) / 1000);
                if (currentUser) {
                    let users = JSON.parse(localStorage.getItem('gas_users'));
                    let today = getTodayString();
                    if(!users[currentUser].dailyStudyTime) users[currentUser].dailyStudyTime = {};
                    if(!users[currentUser].dailyStudyTime[today]) users[currentUser].dailyStudyTime[today] = 0;
                    users[currentUser].dailyStudyTime[today] += elapsedSecs;
                    localStorage.setItem('gas_users', JSON.stringify(users));
            safeSyncToSupabase();
                }
                activeStudyStart = null;
            }
            if(screenId === 'screen-flashcard' && !activeStudyStart) {
                activeStudyStart = Date.now();
            }

            document.querySelectorAll('.container').forEach(el => el.classList.remove('active-screen'));
            document.getElementById(screenId).classList.add('active-screen');
            if(currentUser && screenId !== 'screen-auth') {
                document.getElementById('main-header').style.display = 'flex';
                updateDashboardProgress();
                if(screenId === 'screen-dashboard') {
                    // Start with cloud content hidden, let user click icons
                    hideCloudContent();
                }
            } else {
                document.getElementById('main-header').style.display = 'none';
            }
        }

        // --- AUTH (Simulated Backend) ---
        function toggleAuth(mode) {
            document.getElementById('auth-login-msg').innerText = '';
            document.getElementById('auth-reg-msg').innerText = '';
            if(mode === 'register') {
                document.getElementById('login-panel').style.display = 'none';
                document.getElementById('register-panel').style.display = 'block';
            } else {
                document.getElementById('register-panel').style.display = 'none';
                document.getElementById('login-panel').style.display = 'block';
            }
        }

        function register() {
            const u = document.getElementById('reg-username').value.trim();
            const p = document.getElementById('reg-password').value;
            const p2 = document.getElementById('reg-confirm').value;
            const msg = document.getElementById('auth-reg-msg');
            
            if(!u || !p || !p2) { msg.style.color = "var(--danger)"; msg.innerText = "Vui lòng nhập đủ thông tin!"; return; }
            if(p !== p2) { msg.style.color = "var(--danger)"; msg.innerText = "Mật khẩu nhập lại không khớp!"; return; }
            
            let users = JSON.parse(localStorage.getItem('gas_users') || '{}');
            if(users[u]) { msg.style.color = "var(--danger)"; msg.innerText = "Tên đăng nhập đã tồn tại!"; return; }
            
            users[u] = { password: p, dailyProgress: {}, topicProgress: {}, learnedWords: [], points: 0, unlockedTopics: [] };
            localStorage.setItem('gas_users', JSON.stringify(users));
            safeSyncToSupabase();
            
            msg.style.color = "var(--success)";
            msg.innerText = "Đăng ký thành công! Đang chuyển sang Đăng nhập...";
            
            setTimeout(() => {
                document.getElementById('username').value = u;
                toggleAuth('login');
            }, 1500);
        }

        function login() {
            const u = document.getElementById('username').value.trim();
            const p = document.getElementById('password').value;
            const msg = document.getElementById('auth-login-msg');
            
            let users = JSON.parse(localStorage.getItem('gas_users') || '{}');
            if(!users[u] || users[u].password !== p) {
                msg.style.color = "var(--danger)";
                msg.innerText = "Sai tên đăng nhập hoặc mật khẩu!";
                return;
            }
            
            currentUser = u;
            document.getElementById('user-display').innerText = u;
            document.getElementById('username').value = '';
            document.getElementById('password').value = '';
            msg.innerText = '';
            
            safeSyncToSupabase();
            initDashboard();
            showScreen('screen-dashboard'); showMascotSpeech('Chào mừng trở lại! Hú hú!', 3000);
        }

        function logout() {
            currentUser = null;
            showScreen('screen-auth');
        }

        // --- DASHBOARD ---
        function initDashboard() {
            ensureExtendedTopicsRegistered();
            const select = document.getElementById('topic-select');
            select.innerHTML = '<option value="">-- Chọn chủ đề để học --</option>';
            
            // Add Free Topics
            for (let key in freeTopics) {
                if (key !== 'cat_3000') {
                    select.innerHTML += `<option value="${key}">${freeTopics[key].topic} (${freeTopics[key].words.length} từ)</option>`;
                }
            }
            
            vocabTopics.forEach((t, index) => {
                select.innerHTML += `<option value="${index}">${t.topic} (${t.words.length} từ)</option>`;
            });
            
            // Add Unlocked Premium Topics
            let users = JSON.parse(localStorage.getItem('gas_users') || '{}');
            let uData = (currentUser && users[currentUser]) ? users[currentUser] : {};
            if (uData.unlockedTopics) {
                uData.unlockedTopics.forEach(unlockedKey => {
                    if (premiumTopics[unlockedKey]) {
                        select.innerHTML += `<option value="${unlockedKey}">${premiumTopics[unlockedKey].topic} (${premiumTopics[unlockedKey].words.length} từ)</option>`;
                    }
                });
            }
            
            updateDashboardProgress();
            onTopicSelect();
            setTimeout(() => { if(typeof renderChart === 'function') renderChart(); }, 100);
            renderChart();
        }
        
        function onTopicSelect() {
            const select = document.getElementById('topic-select');
            const actions = document.getElementById('topic-actions');
            const progText = document.getElementById('topic-progress-text');
            const btnResume = document.getElementById('btn-resume');
            
            if(select.value === "") {
                actions.style.display = 'none';
                document.getElementById('btn-history').style.display = 'none';
                return;
            }
            
            let users = JSON.parse(localStorage.getItem('gas_users') || '{}');
            let uData = (currentUser && users[currentUser]) ? users[currentUser] : {};
            let savedIndex = uData.topicProgress ? uData.topicProgress[select.value] || 0 : 0;
            
            actions.style.display = 'flex';
            if(savedIndex > 0) {
                progText.innerText = `Bạn đang học dở đến từ thứ ${savedIndex + 1}`;
                btnResume.style.display = 'block';
            } else {
                progText.innerText = `Bạn chưa bắt đầu chủ đề này`;
                btnResume.style.display = 'none';
            }
            document.getElementById('btn-history').style.display = 'block';
        }

        function getTodayString() {
            const d = new Date();
            return `${d.getFullYear()}-${d.getMonth()+1}-${d.getDate()}`;
        }

        function updateDashboardProgress() {
            let users = JSON.parse(localStorage.getItem('gas_users') || '{}');
            if (!currentUser || !users[currentUser]) return;
            let uData = users[currentUser];
            let today = getTodayString();
            if (!uData.dailyProgress) uData.dailyProgress = {};
            let dailyObj = uData.dailyProgress[today];
            let learned = 0;
            if (dailyObj) {
                if (typeof dailyObj === 'number') {
                    learned = dailyObj;
                } else {
                    learned = (dailyObj.new || 0) + (dailyObj.review || 0);
                }
            }
            let points = users[currentUser].points || 0;
            
            // Assume goal is 50 words a day
            let pct = Math.min((learned / 50) * 100, 100);
            document.getElementById('daily-progress-bar').style.width = `${pct}%`;
            document.getElementById('daily-progress-text').innerText = `Hôm nay: ${learned} từ học (Mục tiêu 50)`;
            
            // Update points display
            let pointsDisplay = document.getElementById('user-points-display');
            if (pointsDisplay) pointsDisplay.innerText = `Điểm: ${points}`;
            
            let storePointsDisplay = document.getElementById('store-points-display');
            if (storePointsDisplay) storePointsDisplay.innerText = points;

            // Update Store Buttons
            let unlocked = uData.unlockedTopics || [];
            
            const btnIt = document.getElementById('btn-buy-it');
            if (btnIt && unlocked.includes('it')) {
                btnIt.innerHTML = '▶ Học ngay';
                btnIt.style.borderColor = '#22c55e';
                btnIt.style.color = '#16a34a';
                btnIt.onclick = function() { startLearningStoreItem('it'); };
            }
            
            const btnMarketing = document.getElementById('btn-buy-marketing');
            if (btnMarketing && unlocked.includes('marketing')) {
                btnMarketing.innerHTML = '▶ Học ngay';
                btnMarketing.style.borderColor = '#22c55e';
                btnMarketing.style.color = '#16a34a';
                btnMarketing.onclick = function() { startLearningStoreItem('marketing'); };
            }
            
            const btnIelts = document.getElementById('btn-buy-ielts');
            if (btnIelts && unlocked.includes('ielts')) {
                btnIelts.innerHTML = '▶ Học ngay';
                btnIelts.style.borderColor = '#22c55e';
                btnIelts.style.color = '#16a34a';
                btnIelts.onclick = function() { startLearningStoreItem('ielts'); };
            }
            
            const btnToeic = document.getElementById('btn-buy-toeic_650');
            if (btnToeic && unlocked.includes('toeic_650')) {
                btnToeic.innerHTML = '▶ Học ngay';
                btnToeic.style.borderColor = '#22c55e';
                btnToeic.style.color = '#16a34a';
                btnToeic.onclick = function() { startLearningStoreItem('toeic_650'); };
            }

            const btnB1 = document.getElementById('btn-buy-b1_vocab');
            if (btnB1 && unlocked.includes('b1_vocab')) {
                btnB1.innerHTML = '▶ Học ngay';
                btnB1.style.borderColor = '#22c55e';
                btnB1.style.color = '#16a34a';
                btnB1.onclick = function() { startLearningStoreItem('b1_vocab'); };
            }

            const btnB2 = document.getElementById('btn-buy-b2_vocab');
            if (btnB2 && unlocked.includes('b2_vocab')) {
                btnB2.innerHTML = '▶ Học ngay';
                btnB2.style.borderColor = '#22c55e';
                btnB2.style.color = '#16a34a';
                btnB2.onclick = function() { startLearningStoreItem('b2_vocab'); };
            }
        }

        function startLearningStoreItem(itemType) {
            ensureExtendedTopicsRegistered();
            let users = JSON.parse(localStorage.getItem('gas_users') || '{}');
            if (currentUser && users[currentUser]) {
                if (!users[currentUser].unlockedTopics) users[currentUser].unlockedTopics = [];
                if (!users[currentUser].unlockedTopics.includes(itemType)) {
                    users[currentUser].unlockedTopics.push(itemType);
                    localStorage.setItem('gas_users', JSON.stringify(users));
                    safeSyncToSupabase();
                }
            }
            showScreen('screen-dashboard');
            initDashboard();
            showCloudContent('library');
            let topicSelect = document.getElementById('topic-select');
            if (topicSelect) {
                topicSelect.value = itemType;
                onTopicSelect();
            }
            // Directly start learning session
            startLearning(true);
        }

        function buyItem(itemType, cost) {
            let users = JSON.parse(localStorage.getItem('gas_users'));
            let uData = users[currentUser];
            if (uData.points === undefined) uData.points = 0;
            
            if (uData.points < cost) {
                alert(`Bạn không đủ Điểm! Cần ${cost} Điểm, nhưng bạn chỉ có ${uData.points} Điểm.`);
                return;
            }
            
            if (!uData.unlockedTopics) uData.unlockedTopics = [];
            if (uData.unlockedTopics.includes(itemType)) {
                alert("Bạn đã sở hữu bộ từ vựng này rồi!");
                return;
            }
            
            uData.points -= cost;
            uData.unlockedTopics.push(itemType);
            localStorage.setItem('gas_users', JSON.stringify(users));
            safeSyncToSupabase();
            
            ensureExtendedTopicsRegistered();
            initDashboard();
            updateDashboardProgress();
            alert(`Chúc mừng! Bạn đã mở khóa thành công gói từ vựng ${itemType.toUpperCase()}.`);
        }

        function markWordLearned() {
            let users = JSON.parse(localStorage.getItem('gas_users') || '{}');
            if (!currentUser || !users[currentUser]) return;
            let uData = users[currentUser];
            let today = getTodayString();
            if (!uData.dailyProgress) uData.dailyProgress = {};
            
            // Migration / Initialization
            if(uData.dailyProgress[today] === undefined) {
                users[currentUser].dailyProgress[today] = { new: 0, review: 0 };
            } else if (typeof users[currentUser].dailyProgress[today] === 'number') {
                users[currentUser].dailyProgress[today] = { new: users[currentUser].dailyProgress[today], review: 0 };
            }
            users[currentUser].dailyProgress[today].new++;
            
            const w = currentWords[currentIndex];
            if (!w) return;
            
            // Add to history list with Date and Topic tracking
            if(!users[currentUser].historyList) users[currentUser].historyList = [];
            
            let alreadyLearnedToday = users[currentUser].historyList.some(
                item => item.word === w.word && item.date === today && item.topicId == currentTopicId
            );
            
            if(!alreadyLearnedToday && currentTopicId !== null) {
                users[currentUser].historyList.push({
                    date: today,
                    topicId: currentTopicId,
                    word: w.word,
                    ipa: w.ipa,
                    meaning: w.meaning
                });
                // Increment points when learning a word for the first time today
                if(users[currentUser].points === undefined) users[currentUser].points = 0;
                users[currentUser].points++;
            }
            
            localStorage.setItem('gas_users', JSON.stringify(users));
            safeSyncToSupabase();
            
            if(!sessionLearnedWords.some(word => word.word === w.word)) {
                sessionLearnedWords.push(w);
            }
            
            updateDashboardProgress();
            
            if(sessionLearnedWords.length >= 20) {
                triggerQuiz();
            }
        }

        // --- FLASHCARD ---
        function startLearning(resume) {
            const topicIdx = document.getElementById('topic-select').value;
            if(topicIdx === "") { alert("Hãy chọn một chủ đề!"); return; }
            
            ensureExtendedTopicsRegistered();
            let topicData;
            if (freeTopics && freeTopics[topicIdx]) {
                topicData = freeTopics[topicIdx];
            } else if (premiumTopics && premiumTopics[topicIdx]) {
                topicData = premiumTopics[topicIdx];
            } else if (topicIdx === 'b1_vocab' && typeof b1VocabData !== 'undefined') {
                topicData = b1VocabData;
            } else if (topicIdx === 'b2_vocab' && typeof b2VocabData !== 'undefined') {
                topicData = b2VocabData;
            } else if (topicIdx === 'toeic_650' && typeof toeic650Data !== 'undefined') {
                topicData = toeic650Data;
            } else {
                topicData = vocabTopics[topicIdx];
            }
            
            if (!topicData) { alert("Dữ liệu chủ đề không tồn tại!"); return; }
            
            document.getElementById('flashcard-topic-title').innerText = topicData.topic;
            currentWords = [...topicData.words]; // clone array
            
            let users = JSON.parse(localStorage.getItem('gas_users') || '{}');
            let uData = (currentUser && users[currentUser]) ? users[currentUser] : {};
            if(resume) {
                currentIndex = uData.topicProgress ? uData.topicProgress[topicIdx] || 0 : 0;
            } else {
                currentIndex = 0;
                if(!uData.topicProgress) uData.topicProgress = {};
                uData.topicProgress[topicIdx] = 0;
                if(currentUser && users[currentUser]) {
                    users[currentUser] = uData;
                    localStorage.setItem('gas_users', JSON.stringify(users));
                    safeSyncToSupabase();
                }
            }
            
            sessionLearnedWords = [];
            currentTopicId = topicIdx;
            
            renderCard();
            showScreen('screen-flashcard');
        }

        function renderCard() {
            const card = document.getElementById('flashcard-obj');
            
            // Xóa hiệu ứng xoay tạm thời để thẻ lập tức lật về mặt trước (tránh lộ nghĩa của từ mới)
            card.style.transition = 'none';
            card.classList.remove('is-flipped');
            
            // Ép trình duyệt cập nhật giao diện ngay lập tức
            void card.offsetWidth;
            
            // Bật lại hiệu ứng xoay cho các lần lật sau
            card.style.transition = 'transform 0.6s cubic-bezier(0.4, 0.0, 0.2, 1)';
            
            const w = currentWords[currentIndex];
            document.getElementById('flashcard-progress').innerText = `Từ ${currentIndex + 1} / ${currentWords.length}`;
            
            let percent = ((currentIndex + 1) / currentWords.length) * 100;
            const pBar = document.getElementById('flashcard-progress-bar');
            if (pBar) {
                pBar.style.width = percent + '%';
                if (percent >= 100) {
                    pBar.classList.add('glow-full');
                } else {
                    pBar.classList.remove('glow-full');
                }
            }
            
            // Clean word (remove (n) (v) for image and audio)
            let baseWord = w.word.replace(/\(.*?\)/g, '').split('/')[0].trim();
            
            // Front
            document.getElementById('card-front-word').innerText = w.word;
            document.getElementById('card-front-ipa').innerText = w.ipa;
            
            // Back
            document.getElementById('card-back-vi').innerText = w.meaning;
            document.getElementById('card-back-ex-en').innerText = w.example_en;
            document.getElementById('card-back-ex-vi').innerText = w.example_vi;
            
            let synBox = document.getElementById('card-back-synonyms');
            if (w.synonyms && w.synonyms.trim() !== "") {
                synBox.style.display = 'block';
                synBox.innerHTML = `Từ đồng nghĩa/liên quan: ${w.synonyms}`;
            } else {
                synBox.style.display = 'none';
            }
            
            // Image (Sử dụng Bing Image Search API)
            let cleanMeaning = w.meaning.replace(/ *\\([^)]*\\) */g, ""); 
            let searchQuery = `${baseWord} ${cleanMeaning} illustration`;
            document.getElementById('card-back-img').src = `https://tse1.mm.bing.net/th?q=${encodeURIComponent(searchQuery)}`;
            
            // --- TÍNH NĂNG CHỐNG MẤT GỐC ---
            let alertBox = document.getElementById('card-confuse-alert');
            let mnemonicBox = document.getElementById('card-mnemonic-box');
            let btnGame = document.getElementById('btn-sentence-game');
            let btnVoice = document.getElementById('btn-voice-practice');
            let voiceResultDiv = document.getElementById('voice-result');
            let baseWordLower = baseWord.toLowerCase();
            
            if(voiceResultDiv) voiceResultDiv.style.display = 'none';
            
            if(alertBox && confusingPairs[baseWordLower]) {
                alertBox.innerHTML = `🚨 <b>Dễ nhầm:</b> ${confusingPairs[baseWordLower].diff}`;
                alertBox.style.display = 'block';
            } else if(alertBox) {
                alertBox.style.display = 'none';
            }
            
            if(mnemonicBox && vocabMnemonics[baseWordLower]) {
                mnemonicBox.innerHTML = `💡 <b>Mẹo nhớ siêu dính:</b><br>${vocabMnemonics[baseWordLower]}`;
                mnemonicBox.style.display = 'block';
            } else if(mnemonicBox) {
                mnemonicBox.style.display = 'none';
            }
            
            if(btnGame) {
                if(w.example_en && w.example_en.trim() !== '') {
                    btnGame.style.display = 'inline-block';
                    btnGame.onclick = function(e) {
                        e.stopPropagation();
                        initSentenceGame(w.example_en, w.example_vi);
                    };
                } else {
                    btnGame.style.display = 'none';
                }
            }
            
            if(btnVoice) {
                btnVoice.onclick = function(e) {
                    e.stopPropagation();
                    startVoiceRecognition(baseWordLower);
                };
            }
        }

        function flipCard() {
            const card = document.getElementById('flashcard-obj');
            card.classList.toggle('is-flipped');
            
            if(card.classList.contains('is-flipped')) {
                markWordLearned();
                if(isSrsMode) {
                    document.getElementById('controls-srs').style.visibility = 'visible';
                }
            } else {
                if(isSrsMode) {
                    document.getElementById('controls-srs').style.visibility = 'hidden';
                }
            }
        }

        function startSRS() {
            if(srsQueue.length === 0) return;
            isSrsMode = true;
            srsQueue.sort(() => Math.random() - 0.5);
            currentWords = [...srsQueue];
            currentIndex = 0;
            sessionLearnedWords = [];
            currentTopicId = null;
            
            document.getElementById('flashcard-topic-title').innerText = "🧠 Ôn Bài Nhớ Lâu";
            document.getElementById('controls-normal').style.display = 'none';
            document.getElementById('controls-srs').style.display = 'flex';
            document.getElementById('controls-srs').style.visibility = 'hidden';
            
            renderCard();
            showScreen('screen-flashcard');
            showMascotSpeech('Nhớ thật thà khi bấm nút Quên / Nhớ Tốt nhé!', 4000);
        }

                function srsAnswer(remembered) {
            let users = JSON.parse(localStorage.getItem('gas_users') || '{}');
            if (!currentUser || !users[currentUser]) return;
            let uData = users[currentUser];
            let wordKey = currentWords[currentIndex].word;
            
            if(!uData.srsData) uData.srsData = {};
            let srsItem = uData.srsData[wordKey];
            
            if(srsItem) {
                // Initialize SM-2 fields if missing
                if(srsItem.interval === undefined) srsItem.interval = 0;
                if(srsItem.ease === undefined) srsItem.ease = 2.5;
                if(srsItem.repetition === undefined) srsItem.repetition = srsItem.step || 0;
                
                let q = remembered ? 4 : 1; // 4 = Good, 1 = Hard/Blackout
                
                if (q >= 3) {
                    if (srsItem.repetition === 0) {
                        srsItem.interval = 1;
                    } else if (srsItem.repetition === 1) {
                        srsItem.interval = 6;
                    } else {
                        srsItem.interval = Math.round(srsItem.interval * srsItem.ease);
                    }
                    srsItem.repetition++;
                    showMascotSpeech('Xuất sắc! Nhớ thế này thì không bao giờ quên.', 2000);
                } else {
                    srsItem.repetition = 0;
                    srsItem.interval = 1;
                    showMascotSpeech('Không sao, học lại từ đầu để nhớ sâu hơn nhé!', 2000);
                }
                
                srsItem.ease = srsItem.ease + (0.1 - (5 - q) * (0.08 + (5 - q) * 0.02));
                if (srsItem.ease < 1.3) srsItem.ease = 1.3;
                
                let nextDate = new Date();
                nextDate.setDate(nextDate.getDate() + srsItem.interval);
                srsItem.nextDate = `${nextDate.getFullYear()}-${nextDate.getMonth()+1}-${nextDate.getDate()}`;
                
                srsItem.step = srsItem.repetition; // sync for legacy code
            }
            
            // Log review progress
            let today = getTodayString();
            if(!uData.dailyProgress) uData.dailyProgress = {};
            if(uData.dailyProgress[today] === undefined) {
                uData.dailyProgress[today] = { new: 0, review: 0 };
            } else if (typeof uData.dailyProgress[today] === 'number') {
                uData.dailyProgress[today] = { new: uData.dailyProgress[today], review: 0 };
            }
            uData.dailyProgress[today].review++;
            
            localStorage.setItem('gas_users', JSON.stringify(users));
            safeSyncToSupabase();
            
            document.getElementById('controls-srs').style.visibility = 'hidden';
            
            if(currentIndex < currentWords.length - 1) {
                currentIndex++;
                renderCard();
            } else {
                alert("Chúc mừng! Bạn đã ôn xong tất cả các thẻ của ngày hôm nay.");
                isSrsMode = false;
                document.getElementById('controls-normal').style.display = 'flex';
                document.getElementById('controls-srs').style.display = 'none';
                initDashboard();
                showScreen('screen-dashboard');
            }
        }

        function nextCard() {
            if(currentIndex < currentWords.length - 1) {
                currentIndex++;
                
                // Save progress
                if(currentTopicId !== null) {
                    let users = JSON.parse(localStorage.getItem('gas_users'));
                    if(!users[currentUser].topicProgress) users[currentUser].topicProgress = {};
                    if(!users[currentUser].topicProgress[currentTopicId] || users[currentUser].topicProgress[currentTopicId] < currentIndex) {
                        users[currentUser].topicProgress[currentTopicId] = currentIndex;
                        localStorage.setItem('gas_users', JSON.stringify(users));
            safeSyncToSupabase();
                    }
                }
                
                renderCard();
            } else {
                alert("Bạn đã học xong chủ đề này!"); showMascotSpeech('Đỉnh quá! Học xong rồi!', 3000);
            }
        }

        function prevCard() {
            if(currentIndex > 0) {
                currentIndex--;
                renderCard();
            }
        }

        function shuffleCards() {
            for (let i = currentWords.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [currentWords[i], currentWords[j]] = [currentWords[j], currentWords[i]];
            }
            currentIndex = 0;
            renderCard();
        }

        function playAudio(e) {
            e.stopPropagation(); // prevent card flip
            let baseWord = currentWords[currentIndex].word.replace(/\(.*?\)/g, '').split('/')[0].trim();
            let utterance = new SpeechSynthesisUtterance(baseWord);
            utterance.lang = 'en-US';
            window.speechSynthesis.speak(utterance);
        }

        // --- QUIZZES ---
        function triggerQuiz() {
            let p2 = [...sessionLearnedWords].sort(() => Math.random() - 0.5).map(w => ({...w, qtype: 'vi-en'}));
            quizQueue = [...p2];
            sessionLearnedWords = []; // reset counter
            quizScore = 0;
            renderNextQuizQuestion();
            showScreen('screen-quiz'); showMascotSpeech('Đến giờ làm bài Test!', 3000);
        }

        function renderNextQuizQuestion() {
            if(quizQueue.length === 0) {
                // Done with quiz
                if(typeof SupabaseService !== 'undefined') { SupabaseService.saveQuizResult(currentUser, 'Quiz Ôn tập 40 từ', quizScore, 40); }
                alert(`Chúc mừng! Bạn đã hoàn thành bài kiểm tra ôn tập 40 câu.\nĐiểm số của bạn: ${quizScore}/40`);
                showScreen('screen-flashcard');
                nextCard();
                return;
            }
            
            targetQuizWord = quizQueue.shift(); // lấy từ đầu tiên trong hàng đợi
            
            const contentDiv = document.getElementById('quiz-content');
            document.getElementById('quiz-feedback').innerText = '';
            document.getElementById('quiz-next-btn').style.display = 'none';
            
            let options = [];
            let html = '';
            
            if (targetQuizWord.qtype === 'en-vi') {
                // Lấy 3 nghĩa sai (distractors) sao cho dễ nhầm lẫn
                options = [targetQuizWord.meaning];
                let allMeanings = [];
                let topicMeanings = [];
                
                let combinedTopics = typeof freeTopics !== 'undefined' ? {...freeTopics, ...premiumTopics, ...vocabTopics} : vocabTopics;
                let topicsArray = Object.values(combinedTopics);
                if (topicsArray.length === 0 && Array.isArray(vocabTopics)) topicsArray = vocabTopics;

                topicsArray.forEach(t => {
                    let isTargetTopic = t.words.some(w => w.word === targetQuizWord.word);
                    t.words.forEach(w => {
                        let m = w.meaning.trim();
                        if (m !== '') {
                            allMeanings.push(m);
                            if (isTargetTopic) topicMeanings.push(m);
                        }
                    });
                });

                allMeanings = [...new Set(allMeanings)].filter(m => m !== targetQuizWord.meaning);
                topicMeanings = [...new Set(topicMeanings)].filter(m => m !== targetQuizWord.meaning);

                let wordsArr = targetQuizWord.meaning.split(' ');
                let firstWord = wordsArr[0].toLowerCase();
                let firstTwoWords = wordsArr.slice(0, 2).join(' ').toLowerCase();
                
                let specialPrefixes2 = ['thuộc về', 'một cách', 'có tính', 'mang tính', 'sự việc', 'khả năng'];
                let commonPrefixes = ['sự', 'nhà', 'người', 'việc', 'cái', 'tính', 'bị', 'được', 'làm', 'có', 'cuộc', 'niềm', 'nỗi', 'kẻ', 'thợ', 'con', 'chiếc', 'để', 'gây', 'độ', 'không', 'vô'];
                let prefixToMatch = '';
                
                if (specialPrefixes2.includes(firstTwoWords)) {
                    prefixToMatch = firstTwoWords + ' ';
                } else if (commonPrefixes.includes(firstWord)) {
                    prefixToMatch = firstWord + ' ';
                }

                let sameTopicSamePrefix = [];
                let sameTopicDiffPrefix = [];
                let diffTopicSamePrefix = [];
                let diffTopicDiffPrefix = [];

                allMeanings.forEach(m => {
                    let isSameTopic = topicMeanings.includes(m);
                    let isSamePrefix = prefixToMatch && m.toLowerCase().startsWith(prefixToMatch);
                    
                    if (isSameTopic && isSamePrefix) sameTopicSamePrefix.push(m);
                    else if (isSameTopic && !isSamePrefix) sameTopicDiffPrefix.push(m);
                    else if (!isSameTopic && isSamePrefix) diffTopicSamePrefix.push(m);
                    else diffTopicDiffPrefix.push(m);
                });

                const shuffle = (arr) => arr.sort(() => Math.random() - 0.5);
                shuffle(sameTopicSamePrefix);
                shuffle(sameTopicDiffPrefix);
                shuffle(diffTopicSamePrefix);
                shuffle(diffTopicDiffPrefix);

                let candidates = [
                    ...sameTopicSamePrefix, 
                    ...sameTopicDiffPrefix, 
                    ...diffTopicSamePrefix, 
                    ...diffTopicDiffPrefix
                ];
                candidates = [...new Set(candidates)];
                
                for(let i=0; i<3; i++) {
                    if (candidates.length > 0) {
                        options.push(candidates.shift());
                    }
                }
                options.sort(() => Math.random() - 0.5);
                
                html = `<h3 style="margin-bottom:1.5rem;">Câu hỏi ôn tập (${20 - quizQueue.length}/20):<br><span style="color:var(--primary)">${targetQuizWord.word}</span> có nghĩa là gì?</h3>`;
                options.forEach(opt => {
                    html += `<div class="quiz-option" onclick="checkAnswer(this, '${opt.replace(/'/g, "\\'")}', '${targetQuizWord.meaning.replace(/'/g, "\\'")}')">${opt}</div>`;
                });
            } else {
                // targetQuizWord.qtype === 'vi-en'
                options = [targetQuizWord.word];
                let allEngWords = [];
                let topicEngWords = [];
                
                let combinedTopics = typeof freeTopics !== 'undefined' ? {...freeTopics, ...premiumTopics, ...vocabTopics} : vocabTopics;
                let topicsArray = Object.values(combinedTopics);
                if (topicsArray.length === 0 && Array.isArray(vocabTopics)) topicsArray = vocabTopics;

                topicsArray.forEach(t => {
                    let isTargetTopic = t.words.some(w => w.meaning === targetQuizWord.meaning);
                    t.words.forEach(w => {
                        let ew = w.word.trim();
                        if (ew !== '') {
                            allEngWords.push(ew);
                            if (isTargetTopic) topicEngWords.push(ew);
                        }
                    });
                });

                allEngWords = [...new Set(allEngWords)].filter(w => w !== targetQuizWord.word);
                topicEngWords = [...new Set(topicEngWords)].filter(w => w !== targetQuizWord.word);
                
                const shuffle = (arr) => arr.sort(() => Math.random() - 0.5);
                shuffle(topicEngWords);
                shuffle(allEngWords);
                
                let candidates = [...topicEngWords, ...allEngWords];
                candidates = [...new Set(candidates)];
                
                for(let i=0; i<3; i++) {
                    if (candidates.length > 0) {
                        options.push(candidates.shift());
                    }
                }
                options.sort(() => Math.random() - 0.5);
                
                html = `<h3 style="margin-bottom:1.5rem;">Câu hỏi ôn tập (${20 - quizQueue.length}/20):<br><span style="color:var(--primary)">${targetQuizWord.meaning}</span> là từ nào?</h3>`;
                options.forEach(opt => {
                    html += `<div class="quiz-option" onclick="checkAnswer(this, '${opt.replace(/'/g, "\\'")}', '${targetQuizWord.word.replace(/'/g, "\\'")}')">${opt}</div>`;
                });
            }

            contentDiv.innerHTML = html;
            
            clearTimeout(quizHintTimeout);
            quizHintTimeout = setTimeout(() => {
                if(targetQuizWord && targetQuizWord.example_vi) {
                    let hintStr = targetQuizWord.example_vi;
                    if(targetQuizWord.qtype === 'en-vi') {
                        hintStr = hintStr.replace(new RegExp(targetQuizWord.meaning, 'gi'), '___');
                    } else {
                        // Hint for vi-en is the English example sentence with the word hidden
                        hintStr = targetQuizWord.example_en;
                        let baseWord = targetQuizWord.word.split(' ')[0]; // remove (n), etc.
                        hintStr = hintStr.replace(new RegExp(baseWord, 'gi'), '___');
                    }
                    showMascotSpeech('💡 Gợi ý: Từ này xuất hiện trong câu: "' + hintStr + '"', 8000);
                }
            }, 5000);
        }

        function checkAnswer(element, selected, correct) {
            clearTimeout(quizHintTimeout);
            document.querySelectorAll('.quiz-option').forEach(el => el.style.pointerEvents = 'none');
            
            if(selected === correct) {
                element.classList.add('correct');
                document.getElementById('quiz-feedback').innerText = 'Chính xác! Giỏi lắm!'; showMascotSpeech('Wow! Chính xác!', 2000);
                triggerConfetti();
                document.getElementById('quiz-feedback').style.color = 'var(--success)';
                quizScore++;
            } else {
                element.classList.add('wrong'); showMascotSpeech('Ôi không! Sai mất rồi!', 2000);
                document.getElementById('quiz-feedback').innerHTML = `Sai rồi! Đáp án đúng phải là: <b>${correct}</b>.<br><br>💡 <b>Mẹo nhớ từ:</b> Từ này xuất hiện trong câu: <i>"${targetQuizWord.example_en}"</i> - ${targetQuizWord.example_vi}`;
                document.getElementById('quiz-feedback').style.color = 'var(--danger)';
            }
            
            document.getElementById('quiz-next-btn').innerText = quizQueue.length > 0 ? 'Câu tiếp theo ➡' : 'Hoàn thành bài Test ➡';
            document.getElementById('quiz-next-btn').style.display = 'block';
        }

        function finishQuiz() {
            renderNextQuizQuestion();
        }

// --- HISTORY ---
        function showHistoryScreen() {
            const topicIdx = document.getElementById('topic-select').value;
            if(topicIdx === "") return;
            
            ensureExtendedTopicsRegistered();
            let topicName = '';
            if (freeTopics && freeTopics[topicIdx]) topicName = freeTopics[topicIdx].topic;
            else if (premiumTopics && premiumTopics[topicIdx]) topicName = premiumTopics[topicIdx].topic;
            else if (topicIdx === 'b1_vocab' && typeof b1VocabData !== 'undefined') topicName = b1VocabData.topic;
            else if (topicIdx === 'b2_vocab' && typeof b2VocabData !== 'undefined') topicName = b2VocabData.topic;
            else if (topicIdx === 'toeic_650' && typeof toeic650Data !== 'undefined') topicName = toeic650Data.topic;
            else if (vocabTopics && vocabTopics[topicIdx]) topicName = vocabTopics[topicIdx].topic;
            else topicName = topicIdx;
            
            let users = JSON.parse(localStorage.getItem('gas_users'));
            let historyList = users[currentUser].historyList || [];
            
            // Filter by topic
            let topicHistory = historyList.filter(item => item.topicId == topicIdx);
            
            document.getElementById('history-count').innerHTML = `Chủ đề: <strong style="color:var(--primary)">${topicName}</strong><br>Bạn đã học tổng cộng ${topicHistory.length} từ trong chủ đề này.`;
            
            // Group by date
            let grouped = {};
            topicHistory.forEach(item => {
                if(!grouped[item.date]) grouped[item.date] = [];
                grouped[item.date].push(item);
            });
            
            let listHtml = '';
            // Sort dates descending (newest first)
            let dates = Object.keys(grouped).sort((a,b) => new Date(b) - new Date(a));
            
            dates.forEach(date => {
                let items = grouped[date];
                // Format date manually to be nice
                let dateParts = date.split('-');
                let niceDate = `${dateParts[2]}/${dateParts[1]}/${dateParts[0]}`;
                
                listHtml += `<div style="background: rgba(0,0,0,0.03); padding: 0.5rem; margin-top: 1rem; border-radius: 4px; font-weight: bold; color: #f59e0b;">📅 Ngày ${niceDate} (Đã học ${items.length} từ)</div>`;
                
                items.forEach((w, idx) => {
                    listHtml += `<div style="border-bottom: 1px solid rgba(255,255,255,0.1); padding: 0.8rem 0.5rem; display:flex; justify-content:space-between; align-items: center;">
                        <div><strong style="color:var(--primary); font-size:1.1rem;">${w.word}</strong> <span style="font-size:0.9rem; color:var(--text-muted);">${w.ipa}</span></div>
                        <span style="color:var(--success); font-weight:600;">${w.meaning}</span>
                    </div>`;
                });
            });
            
            if(dates.length === 0) {
                listHtml = `<p style="text-align:center; padding: 2rem;">Chưa có lịch sử học cho chủ đề này.</p>`;
            }
            
            document.getElementById('history-list').innerHTML = listHtml;
            showScreen('screen-history');
        }

        function reviewForgottenWords() {
            const topicIdx = document.getElementById('topic-select').value;
            let users = JSON.parse(localStorage.getItem('gas_users') || '{}');
            let uData = (currentUser && users[currentUser]) ? users[currentUser] : {};
            let historyList = uData.historyList || [];
            
            // Lấy các từ ĐÃ HỌC TRONG CHỦ ĐỀ NÀY
            let topicHistory = historyList.filter(item => item.topicId == topicIdx);
            
            if(topicHistory.length === 0) { alert("Bạn chưa học từ nào trong chủ đề này!"); return; }
            
            // Xóa duplicate words (nếu có học nhiều ngày)
            let uniqueWordsMap = {};
            topicHistory.forEach(item => uniqueWordsMap[item.word] = item);
            let uniqueWords = Object.values(uniqueWordsMap);
            
            currentWords = [...uniqueWords];
            // Shuffle
            for (let i = currentWords.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [currentWords[i], currentWords[j]] = [currentWords[j], currentWords[i]];
            }
            currentIndex = 0;
            sessionLearnedWords = [];
            currentTopicId = null; // Do not save topic progress for review mode
            
            document.getElementById('flashcard-topic-title').innerText = "Ôn tập tổng hợp";
            renderCard();
            showScreen('screen-flashcard');
        }

        // Init checks
        // Event listeners for Enter key
        document.getElementById('password').addEventListener('keypress', function(e) { if (e.key === 'Enter') login(); });
        document.getElementById('username').addEventListener('keypress', function(e) { if (e.key === 'Enter') login(); });
        document.getElementById('reg-password').addEventListener('keypress', function(e) { if (e.key === 'Enter') register(); });
        document.getElementById('reg-confirm').addEventListener('keypress', function(e) { if (e.key === 'Enter') register(); });

        if(localStorage.getItem('gas_users') === null) {
            localStorage.setItem('gas_users', JSON.stringify({}));
        } else {
            // Migration for existing users
            let _u = JSON.parse(localStorage.getItem('gas_users'));
            for(let k in _u) {
                if(!_u[k].topicProgress) _u[k].topicProgress = {};
                if(!_u[k].learnedWords) _u[k].learnedWords = [];
            }
            localStorage.setItem('gas_users', JSON.stringify(_u));
        }
        
        
        // --- CHART & EXCEL LOGIC ---
        let progressChartInstance = null;

        function renderChart() {
            const ctx = document.getElementById('progressChart');
            if(!ctx) return;
            
            let users = JSON.parse(localStorage.getItem('gas_users'));
            if(!currentUser || !users[currentUser]) return;
            
            let dailyData = users[currentUser].dailyProgress || {};
            let dailyTimeData = users[currentUser].dailyStudyTime || {};
            
            let labels = [];
            let dataNew = [];
            let dataReview = [];
            let dataGoal = [];
            
            let totalWordsWeek = 0;
            let totalTimeToday = dailyTimeData[getTodayString()] || 0;
            
            for(let i=6; i>=0; i--) {
                let d = new Date();
                d.setDate(d.getDate() - i);
                let dateStr = `${d.getFullYear()}-${d.getMonth()+1}-${d.getDate()}`;
                labels.push(`${d.getDate()}/${d.getMonth()+1}`);
                
                let dData = dailyData[dateStr];
                let n = 0, r = 0;
                if(dData) {
                    if (typeof dData === 'number') {
                        n = dData;
                    } else {
                        n = dData.new || 0;
                        r = dData.review || 0;
                    }
                }
                dataNew.push(n);
                dataReview.push(r);
                dataGoal.push(50);
                totalWordsWeek += (n + r);
            }
            
            // Update Mini Stats
            let avgWords = Math.round(totalWordsWeek / 7);
            
            let statTotal = document.getElementById('stat-total-words');
            let statAvg = document.getElementById('stat-avg-words');
            let statTime = document.getElementById('stat-time-today');
            
            if(statTotal) statTotal.innerText = totalWordsWeek;
            if(statAvg) statAvg.innerText = avgWords;
            if(statTime) {
                let mins = Math.floor(totalTimeToday / 60);
                let secs = totalTimeToday % 60;
                if(mins >= 60) {
                    let hrs = Math.floor(mins / 60);
                    mins = mins % 60;
                    statTime.innerText = `${hrs}h ${mins}p`;
                } else {
                    statTime.innerText = `${mins}p ${secs}s`;
                }
            }
            
            if(progressChartInstance) {
                progressChartInstance.destroy();
            }
            
            if (typeof Chart === 'undefined') return;
            let ctx2d = ctx.getContext('2d');
            
            let gradNew = ctx2d.createLinearGradient(0, 0, 0, 300);
            gradNew.addColorStop(0, '#3b82f6');
            gradNew.addColorStop(1, '#8b5cf6');
            
            let gradReview = ctx2d.createLinearGradient(0, 0, 0, 300);
            gradReview.addColorStop(0, '#f59e0b');
            gradReview.addColorStop(1, '#ef4444');
            
            progressChartInstance = new Chart(ctx2d, {
                type: 'bar',
                data: {
                    labels: labels,
                    datasets: [
                        {
                            type: 'line',
                            label: 'Mục tiêu',
                            data: dataGoal,
                            borderColor: '#10b981',
                            borderWidth: 2,
                            borderDash: [5, 5],
                            pointRadius: 0,
                            fill: false,
                            tension: 0.1
                        },
                        {
                            label: 'Học mới',
                            data: dataNew,
                            backgroundColor: gradNew,
                            borderRadius: 6,
                            borderWidth: 0,
                            stack: 'Stack 0'
                        },
                        {
                            label: 'Ôn tập',
                            data: dataReview,
                            backgroundColor: gradReview,
                            borderRadius: 6,
                            borderWidth: 0,
                            stack: 'Stack 0'
                        }
                    ]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    animation: {
                        duration: 1500,
                        easing: 'easeOutQuart'
                    },
                    scales: {
                        y: { 
                            stacked: true,
                            beginAtZero: true, 
                            grid: { color: 'rgba(255,255,255,0.3)', borderDash: [5, 5] }, 
                            ticks: { color: '#333', font: { weight: 'bold' } } 
                        },
                        x: { 
                            stacked: true,
                            grid: { display: false }, 
                            ticks: { color: '#333', font: { weight: 'bold' } } 
                        }
                    },
                    plugins: {
                        legend: { 
                            labels: { color: '#333', font: { weight: 'bold', size: 13 }, usePointStyle: true } 
                        },
                        tooltip: {
                            backgroundColor: 'rgba(255, 255, 255, 0.95)',
                            titleColor: '#333',
                            bodyColor: '#555',
                            borderColor: 'rgba(0,0,0,0.1)',
                            borderWidth: 1,
                            padding: 10,
                            boxPadding: 4,
                            usePointStyle: true
                        }
                    }
                }
            });
        }

        function handleExcelUpload(event) {
            const file = event.target.files[0];
            if(!file) return;
            
            const reader = new FileReader();
            reader.onload = function(e) {
                const data = new Uint8Array(e.target.result);
                const workbook = XLSX.read(data, {type: 'array'});
                const firstSheetName = workbook.SheetNames[0];
                const worksheet = workbook.Sheets[firstSheetName];
                const json = XLSX.utils.sheet_to_json(worksheet);
                
                if(json.length === 0) {
                    alert("File Excel trống!");
                    return;
                }
                
                let newTopic = {
                    topic: file.name.split('.')[0] + " (Imported)",
                    words: []
                };
                
                json.forEach(row => {
                    let getCol = (name) => {
                        let key = Object.keys(row).find(k => k.toLowerCase().includes(name.toLowerCase()));
                        return key ? row[key] : "";
                    };
                    
                    let w = getCol("word") || getCol("từ");
                    let m = getCol("meaning") || getCol("nghĩa") || getCol("tiếng việt");
                    
                    if(w && m) {
                        newTopic.words.push({
                            word: w,
                            ipa: getCol("ipa") || "",
                            meaning: m,
                            example_en: getCol("example_en") || getCol("ví dụ") || "",
                            example_vi: getCol("example_vi") || getCol("dịch") || ""
                        });
                    }
                });
                
                if(newTopic.words.length > 0) {
                    vocabTopics.push(newTopic);
                    alert(`Đã import thành công ${newTopic.words.length} từ vựng vào chủ đề mới!`);
                    initDashboard();
                } else {
                    alert("Không tìm thấy dữ liệu hợp lệ. Đảm bảo file có cột Word và Meaning.");
                }
            };
            reader.readAsArrayBuffer(file);
        }
        
        // Add Confetti to correct answer
        function triggerConfetti() {
            if(window.confetti) {
                confetti({
                    particleCount: 100,
                    spread: 70,
                    origin: { y: 0.6 }
                });
            }
        }
    
        // Start onboarding if brand new user opens page
        checkOnboarding();

        // --- SENTENCE GAME & VOICE RECOGNITION ---
        let currentSentenceWords = [];
        let selectedWords = [];

        function initSentenceGame(exampleEn, exampleVi) {
            let modal = document.getElementById('sentence-game-modal');
            if(!modal) return;
            
            // Clean punctuation
            let cleanEn = exampleEn.replace(/[.,!?]/g, '');
            currentSentenceWords = cleanEn.split(' ').filter(w => w.trim() !== '');
            selectedWords = [];
            
            // Shuffle words
            let shuffled = [...currentSentenceWords].sort(() => Math.random() - 0.5);
            
            document.getElementById('sg-vietnamese').innerText = `Ý nghĩa: "${exampleVi}"`;
            
            let choicesContainer = document.getElementById('sg-choices');
            let answerContainer = document.getElementById('sg-answer');
            
            choicesContainer.innerHTML = '';
            answerContainer.innerHTML = '';
            document.getElementById('sg-result').style.display = 'none';
            
            shuffled.forEach((word, index) => {
                let btn = document.createElement('button');
                btn.className = 'btn-outline sg-word-btn';
                btn.innerText = word;
                btn.onclick = function() {
                    if(!btn.classList.contains('used')) {
                        btn.classList.add('used');
                        selectedWords.push(word);
                        renderAnswer(btn, index);
                    }
                };
                choicesContainer.appendChild(btn);
            });
            
            modal.style.display = 'flex';
        }

        function renderAnswer(originalBtn, index) {
            let answerContainer = document.getElementById('sg-answer');
            let word = selectedWords[selectedWords.length - 1];
            
            let ansBtn = document.createElement('button');
            ansBtn.className = 'btn-primary sg-word-btn';
            ansBtn.innerText = word;
            ansBtn.onclick = function() {
                originalBtn.classList.remove('used');
                ansBtn.remove();
                selectedWords.splice(selectedWords.indexOf(word), 1);
            };
            answerContainer.appendChild(ansBtn);
        }

        function checkSentence() {
            let answerStr = selectedWords.join(' ').toLowerCase();
            let targetStr = currentSentenceWords.join(' ').toLowerCase();
            let resultDiv = document.getElementById('sg-result');
            
            resultDiv.style.display = 'block';
            if(answerStr === targetStr) {
                resultDiv.innerHTML = '🎉 Chính xác! Tuyệt vời!';
                resultDiv.style.color = '#10b981';
                setTimeout(() => { closeSentenceGame(); }, 1500);
            } else {
                resultDiv.innerHTML = '❌ Chưa đúng rồi. Thử lại nhé!';
                resultDiv.style.color = '#ef4444';
            }
        }

        function closeSentenceGame() {
            let modal = document.getElementById('sentence-game-modal');
            if(modal) modal.style.display = 'none';
        }

        function startVoiceRecognition(targetWord) {
            if (!('webkitSpeechRecognition' in window) && !('SpeechRecognition' in window)) {
                alert("Trình duyệt của bạn không hỗ trợ tính năng nhận diện giọng nói. Hãy dùng Google Chrome nhé!");
                return;
            }
            
            let SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
            let recognition = new SpeechRecognition();
            recognition.lang = 'en-US';
            recognition.interimResults = false;
            recognition.maxAlternatives = 1;
            
            let btnVoice = document.getElementById('btn-voice-practice');
            let originalText = btnVoice.innerHTML;
            btnVoice.innerHTML = '🔴 Đang nghe...';
            btnVoice.style.background = '#ef4444';
            btnVoice.style.color = 'white';
            
            recognition.start();
            
            recognition.onresult = function(event) {
                let speechResult = event.results[0][0].transcript.toLowerCase();
                let voiceResultDiv = document.getElementById('voice-result');
                if(!voiceResultDiv) return;
                
                voiceResultDiv.style.display = 'block';
                if(speechResult.includes(targetWord.toLowerCase())) {
                    voiceResultDiv.innerHTML = `🎉 Tuyệt vời! Bạn đọc là: "${speechResult}"`;
                    voiceResultDiv.style.color = '#065f46';
                    voiceResultDiv.style.background = '#d1fae5';
                    if(typeof triggerConfetti === 'function') triggerConfetti();
                } else {
                    voiceResultDiv.innerHTML = `❌ Bạn đọc là: "${speechResult}". Thử lại nhé!`;
                    voiceResultDiv.style.color = '#991b1b';
                    voiceResultDiv.style.background = '#fee2e2';
                }
            };
            
            recognition.onspeechend = function() {
                recognition.stop();
                btnVoice.innerHTML = originalText;
                btnVoice.style.background = 'white';
                btnVoice.style.color = 'var(--primary)';
            };
            
            recognition.onerror = function(event) {
                alert("Lỗi Micro: " + event.error);
                btnVoice.innerHTML = originalText;
                btnVoice.style.background = 'white';
                btnVoice.style.color = 'var(--primary)';
            };
        }