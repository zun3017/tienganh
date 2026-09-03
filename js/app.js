
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
        let quizTotalCount = 0;
        let targetQuizWord = null;
        let quizScore = 0;
        let quizHintTimeout = null;
        let currentTopicId = null;
        let preferredSpeechRate = parseFloat(localStorage.getItem('preferred_speech_rate') || '1.0');
        
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

        function renderSurvival300Grid() {
            const grid = document.getElementById('survival-days-grid');
            const progressBadge = document.getElementById('survival-overall-progress');
            if (!grid) return;
            grid.innerHTML = '';
            
            if (typeof survival300Topics === 'undefined' || !Array.isArray(survival300Topics)) {
                grid.innerHTML = '<p style="text-align:center; color:#64748b;">Đang nạp dữ liệu lộ trình 30 ngày...</p>';
                return;
            }
            
            let users = JSON.parse(localStorage.getItem('gas_users') || '{}');
            let uData = (currentUser && users[currentUser]) ? users[currentUser] : {};
            let tProg = uData.topicProgress || {};
            
            let completedDays = 0;
            survival300Topics.forEach(dayItem => {
                let dayKey = `survival_day_${dayItem.day}`;
                let progress = tProg[dayKey] || 0;
                let isDone = progress >= 9;
                if (isDone) completedDays++;
                
                let dayCard = document.createElement('div');
                dayCard.style.cssText = `
                    background: ${isDone ? 'linear-gradient(135deg, #ecfdf5, #d1fae5)' : '#ffffff'};
                    border: 1px solid ${isDone ? '#34d399' : '#e2e8f0'};
                    border-radius: 12px;
                    padding: 10px 8px;
                    display: flex;
                    flex-direction: column;
                    justify-content: space-between;
                    align-items: center;
                    text-align: center;
                    box-shadow: 0 2px 4px rgba(0,0,0,0.03);
                    transition: transform 0.2s, box-shadow 0.2s;
                `;
                dayCard.onmouseover = function() { this.style.transform = 'translateY(-2px)'; this.style.boxShadow = '0 6px 12px rgba(0,0,0,0.08)'; };
                dayCard.onmouseout = function() { this.style.transform = 'translateY(0)'; this.style.boxShadow = '0 2px 4px rgba(0,0,0,0.03)'; };
                
                let cleanTitle = dayItem.title.replace(/Ngày \d+:\s*/, '');
                dayCard.innerHTML = `
                    <div style="font-weight: 800; color: #059669; font-size: 0.95rem; margin-bottom: 2px;">Ngày ${dayItem.day}</div>
                    <div style="font-size: 0.75rem; color: #475569; line-height: 1.2; margin-bottom: 8px; min-height: 28px; display: flex; align-items: center; justify-content: center;">${cleanTitle}</div>
                    <div style="font-size: 0.75rem; font-weight: 600; color: ${isDone ? '#059669' : '#64748b'}; margin-bottom: 8px;">
                        ${isDone ? '✓ Đã xong (10/10)' : `Tiến độ: ${progress}/10`}
                    </div>
                    <button class="${isDone ? 'btn-outline' : 'btn-primary'}" style="padding: 4px 10px; font-size: 0.75rem; border-radius: 12px; width: 100%;" onclick="startLearningSurvivalDay(${dayItem.day})">
                        ${isDone ? 'Ôn lại' : (progress > 0 ? 'Học tiếp' : 'Bắt đầu')}
                    </button>
                `;
                grid.appendChild(dayCard);
            });
            
            if (progressBadge) {
                progressBadge.innerText = `Tiến độ: ${completedDays}/30 Ngày`;
            }
        }

        function startLearningSurvivalDay(dayNum) {
            hideCloudContent();
            let dayKey = `survival_day_${dayNum}`;
            let topicSelect = document.getElementById('topic-select');
            if (topicSelect) {
                topicSelect.value = dayKey;
                onTopicSelect();
            }
            startLearning(true, dayKey);
        }

        // --- ICU VOCABULARY RESCUE BOX (TASK 10) ---
        function addWordToICU(wordObj) {
            if (!wordObj || !wordObj.word) return;
            let users = JSON.parse(localStorage.getItem('gas_users') || '{}');
            if (!currentUser || !users[currentUser]) return;
            if (!users[currentUser].icuWords) users[currentUser].icuWords = {};
            
            let cleanKey = wordObj.word.replace(/\(.*?\)/g, '').split('/')[0].trim();
            let existing = users[currentUser].icuWords[cleanKey];
            let count = existing ? (existing.forgotCount || 1) + 1 : 1;
            
            users[currentUser].icuWords[cleanKey] = {
                word: cleanKey,
                ipa: wordObj.ipa || '',
                meaning: wordObj.meaning || '',
                example_en: wordObj.example_en || wordObj.example || '',
                example_vi: wordObj.example_vi || '',
                forgotCount: count,
                lastForgot: Date.now()
            };
            
            localStorage.setItem('gas_users', JSON.stringify(users));
            safeSyncToSupabase();
        }

        function removeWordFromICU(wordKey) {
            let users = JSON.parse(localStorage.getItem('gas_users') || '{}');
            if (!currentUser || !users[currentUser] || !users[currentUser].icuWords) return;
            delete users[currentUser].icuWords[wordKey];
            localStorage.setItem('gas_users', JSON.stringify(users));
            safeSyncToSupabase();
            renderICUPanel();
        }

        function renderICUPanel() {
            let users = JSON.parse(localStorage.getItem('gas_users') || '{}');
            let uData = (currentUser && users[currentUser]) ? users[currentUser] : {};
            let icuWords = uData.icuWords || {};
            let wordsArr = Object.values(icuWords);
            
            let countEl = document.getElementById('icu-total-count');
            if (countEl) countEl.innerText = `${wordsArr.length} Từ Cần Cứu Trợ`;
            
            let listEl = document.getElementById('icu-words-list');
            if (!listEl) return;
            listEl.innerHTML = '';
            
            if (wordsArr.length === 0) {
                listEl.innerHTML = '<div style="text-align:center; padding: 2rem 1rem; color:#10b981; font-weight:700;">🎉 Hộp Cứu Trợ trống trơn! Bạn đang ghi nhớ từ vựng rất tốt.</div>';
                let btnStart = document.getElementById('btn-start-icu-study');
                if (btnStart) btnStart.style.display = 'none';
                return;
            }
            
            let btnStart = document.getElementById('btn-start-icu-study');
            if (btnStart) btnStart.style.display = 'block';
            
            wordsArr.sort((a, b) => (b.forgotCount || 1) - (a.forgotCount || 1));
            wordsArr.forEach(item => {
                let itemEl = document.createElement('div');
                itemEl.className = 'icu-card-item';
                itemEl.innerHTML = `
                    <div style="text-align: left;">
                        <div style="font-weight: 800; color: #1e293b; font-size: 1.05rem;">
                            ${item.word} <span style="font-size: 0.85rem; color: #64748b; font-weight: normal;">${item.ipa}</span>
                        </div>
                        <div style="font-size: 0.85rem; color: #059669; font-weight: 600;">${item.meaning}</div>
                    </div>
                    <div style="display: flex; align-items: center; gap: 8px;">
                        <span class="icu-count-badge">Quên ${item.forgotCount || 1} lần</span>
                        <button class="audio-btn" style="width: 32px; height: 32px; font-size: 0.85rem; margin: 0;" onclick="speakWordDirectly('${item.word}')" title="Nghe">🔊</button>
                        <button style="background: none; border: none; color: #94a3b8; font-size: 1.1rem; cursor: pointer; padding: 4px;" onclick="removeWordFromICU('${item.word}')" title="Đã nhớ - Xóa khỏi ICU">✓</button>
                    </div>
                `;
                listEl.appendChild(itemEl);
            });
        }

        function startICUStudy() {
            let users = JSON.parse(localStorage.getItem('gas_users') || '{}');
            let uData = (currentUser && users[currentUser]) ? users[currentUser] : {};
            let icuWords = uData.icuWords || {};
            let wordsArr = Object.values(icuWords);
            if (wordsArr.length === 0) {
                alert("Không có từ nào trong Hộp Cứu Trợ!");
                return;
            }
            hideCloudContent();
            currentWords = [...wordsArr];
            currentIndex = 0;
            sessionLearnedWords = [];
            currentTopicId = 'icu_box';
            document.getElementById('flashcard-topic-title').innerText = '🚑 Hộp Cứu Trợ ICU';
            renderCard();
            showScreen('screen-flashcard');
        }

        // --- STREAK FREEZE LOGIC (TASK 12) ---
        function buyStreakFreeze(cost = 50) {
            let users = JSON.parse(localStorage.getItem('gas_users') || '{}');
            if (!currentUser || !users[currentUser]) return;
            let uData = users[currentUser];
            if (uData.points === undefined) uData.points = 0;

            if (uData.points < cost) {
                alert(`Bạn không đủ Điểm! Cần ${cost} Điểm, nhưng bạn chỉ có ${uData.points} Điểm.`);
                return;
            }

            uData.points -= cost;
            uData.streakFreezes = (uData.streakFreezes || 0) + 1;
            localStorage.setItem('gas_users', JSON.stringify(users));
            safeSyncToSupabase();

            updateDashboardProgress();
            alert(`🎉 Chúc mừng! Bạn đã mua thành công 1 Khiên Đóng Băng Chuỗi. Hiện đang có ${uData.streakFreezes} Khiên!`);
        }

        function checkAndMaintainStreak() {
            let users = JSON.parse(localStorage.getItem('gas_users') || '{}');
            if (!currentUser || !users[currentUser]) return;
            let uData = users[currentUser];
            let today = getTodayString();
            let lastDate = uData.lastStudyDate || today;

            if (lastDate !== today) {
                let d1 = new Date(lastDate);
                let d2 = new Date(today);
                let diffDays = Math.round((d2 - d1) / (1000 * 60 * 60 * 24));

                if (diffDays === 2) {
                    // Missed 1 day
                    if (uData.streakFreezes && uData.streakFreezes > 0) {
                        uData.streakFreezes -= 1;
                        uData.lastStudyDate = today;
                        localStorage.setItem('gas_users', JSON.stringify(users));
                        safeSyncToSupabase();
                        if (typeof showMascotSpeech === 'function') {
                            showMascotSpeech('🧊 Khiên Băng đã kích hoạt giữ nguyên chuỗi học của bạn ngày hôm qua!', 4000);
                        }
                    }
                }
            }

            // Update streak panel freeze display
            let freezeEl = document.getElementById('streak-freeze-status');
            if (freezeEl) {
                let count = uData.streakFreezes || 0;
                freezeEl.innerHTML = `<span class="streak-freeze-pill">🧊 Đang có ${count} Khiên Bảo Vệ</span>`;
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
            } else if (section === 'survival') {
                title.innerText = 'Lộ Trình 30 Ngày Sinh Tồn';
                desc.innerText = '300 từ vựng A0 cốt lõi chia đều 30 ngày cho người mất gốc!';
                renderSurvival300Grid();
                container.appendChild(document.getElementById('survival-300-panel'));
            } else if (section === 'icu') {
                title.innerText = 'Hộp Cứu Trợ Từ Hay Quên (ICU)';
                desc.innerText = 'Các từ bạn phát âm chưa chuẩn hoặc bấm Quên được gom tại đây để cấp cứu!';
                renderICUPanel();
                container.appendChild(document.getElementById('icu-words-panel'));
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
            
            cloudArea.style.display = 'flex';
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
            setTimeout(() => {
                if (cloudArea.style.opacity === '0') {
                    cloudArea.style.display = 'none';
                }
            }, 300);
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

            // Scroll reset to top
            try {
                window.scrollTo(0, 0);
                if (document.documentElement) document.documentElement.scrollTop = 0;
                if (document.body) document.body.scrollTop = 0;
            } catch (e) {}

            document.querySelectorAll('.container').forEach(el => el.classList.remove('active-screen'));
            document.getElementById(screenId).classList.add('active-screen');

            // Header display management
            const mainHeader = document.getElementById('main-header');
            if (currentUser && screenId !== 'screen-auth' && screenId !== 'screen-dashboard' && screenId !== 'screen-word-match' && screenId !== 'screen-listen-speed') {
                if (mainHeader) mainHeader.style.display = 'flex';
                updateDashboardProgress();
            } else {
                if (mainHeader) mainHeader.style.display = 'none';
                if (screenId === 'screen-dashboard') {
                    updateDashboardProgress();
                    hideCloudContent();
                }
            }

            // Fixed non-scrolling viewport control
            if (document.body && document.body.style) {
                if (screenId === 'screen-flashcard' || screenId === 'screen-dashboard' || screenId === 'screen-word-match' || screenId === 'screen-listen-speed') {
                    document.body.style.overflow = 'hidden';
                } else {
                    document.body.style.overflow = '';
                }
            }

            // Mascot & Supabase badge display management
            if (typeof document !== 'undefined') {
                const mascot = document.querySelector ? document.querySelector('.mascot-container') : null;
                const badge = document.getElementById('supabase-status-badge');
                if (screenId === 'screen-flashcard' || screenId === 'screen-word-match' || screenId === 'screen-listen-speed') {
                    // Hide completely during learning/gaming session for 100% focus and no button blocking!
                    if (mascot) mascot.style.display = 'none';
                    if (badge) badge.style.display = 'none';
                } else if (screenId === 'screen-auth') {
                    if (mascot) mascot.style.display = 'block';
                    if (badge) badge.style.display = 'none';
                    // Always reset auth screen: show cup, hide form
                    const cupTrigger = document.getElementById('login-cup-trigger');
                    const glassPanel = document.getElementById('login-glass-panel');
                    if (cupTrigger) cupTrigger.style.display = 'flex';
                    if (glassPanel) {
                        glassPanel.style.opacity = '0';
                        glassPanel.style.transform = 'scale(0)';
                        glassPanel.style.pointerEvents = 'none';
                    }
                    // Clear any leftover auth messages
                    const lm = document.getElementById('auth-login-msg');
                    const rm = document.getElementById('auth-reg-msg');
                    if (lm) { lm.innerText = ''; lm.style.display = 'none'; }
                    if (rm) { rm.innerText = ''; rm.style.display = 'none'; }
                    // Re-enable buttons if they were disabled
                    const lb = document.getElementById('btn-login-submit');
                    const rb = document.getElementById('btn-reg-submit');
                    if (lb) { lb.disabled = false; lb.style.opacity = '1'; }
                    if (rb) { rb.disabled = false; rb.style.opacity = '1'; }
                } else {
                    // Show on dashboard / other screens
                    if (mascot) {
                        mascot.style.display = 'block';
                        mascot.style.transform = '';
                        mascot.style.bottom = '';
                        mascot.style.right = '';
                        mascot.style.opacity = '1';
                    }
                    if (badge) badge.style.display = 'none';
                }
            }
        }

        // --- AUTH (Simulated Backend) ---
        function setAuthFeedback(msgEl, text, type) {
            if (!msgEl) return;
            msgEl.innerText = text;
            msgEl.style.display = 'block';
            if (type === 'success') {
                msgEl.style.color = '#065f46';
                msgEl.style.background = '#d1fae5';
                msgEl.style.border = '1px solid #34d399';
            } else if (type === 'loading') {
                msgEl.style.color = '#1e40af';
                msgEl.style.background = '#dbeafe';
                msgEl.style.border = '1px solid #93c5fd';
            } else {
                msgEl.style.color = '#991b1b';
                msgEl.style.background = '#fee2e2';
                msgEl.style.border = '1px solid #f87171';
            }
        }

        function toggleAuth(mode) {
            const loginMsg = document.getElementById('auth-login-msg');
            const regMsg = document.getElementById('auth-reg-msg');
            if (loginMsg) { loginMsg.innerText = ''; loginMsg.style.display = 'none'; }
            if (regMsg) { regMsg.innerText = ''; regMsg.style.display = 'none'; }
            if(mode === 'register') {
                document.getElementById('login-panel').style.display = 'none';
                document.getElementById('register-panel').style.display = 'block';
            } else {
                document.getElementById('register-panel').style.display = 'none';
                document.getElementById('login-panel').style.display = 'block';
            }
        }

        async function register() {
            const u = document.getElementById('reg-username').value.trim();
            const p = document.getElementById('reg-password').value;
            const p2 = document.getElementById('reg-confirm').value;
            const msg = document.getElementById('auth-reg-msg');
            const regBtn = document.getElementById('btn-reg-submit');
            
            const unlockRegBtn = () => {
                if (regBtn) { regBtn.disabled = false; regBtn.style.opacity = '1'; regBtn.innerText = 'Đồng ý Đăng ký'; }
            };

            if(!u || !p || !p2) { unlockRegBtn(); setAuthFeedback(msg, "⚠️ Vui lòng nhập đủ thông tin!", "error"); return; }
            if(p !== p2) { unlockRegBtn(); setAuthFeedback(msg, "⚠️ Mật khẩu nhập lại không khớp!", "error"); return; }
            
            let users = JSON.parse(localStorage.getItem('gas_users') || '{}');
            if(users[u]) { unlockRegBtn(); setAuthFeedback(msg, "❌ Tên đăng nhập đã tồn tại trên thiết bị!", "error"); return; }
            
            if (regBtn) { regBtn.disabled = true; regBtn.style.opacity = '0.7'; regBtn.innerText = '⏳ Đang đăng ký...'; }
            setAuthFeedback(msg, "⏳ Đang kiểm tra tài khoản trên đám mây...", "loading");

            // Check if username already taken on Supabase Cloud
            if (typeof SupabaseService !== 'undefined') {
                try {
                    const exists = await SupabaseService.checkUserExists(u);
                    if (exists) {
                        setAuthFeedback(msg, "❌ Tên đăng nhập này đã được sử dụng trên hệ thống! Hãy chọn tên khác.", "error");
                        unlockRegBtn();
                        return;
                    }
                } catch (e) {}
            }

            users[u] = { password: p, dailyProgress: {}, topicProgress: {}, learnedWords: [], points: 0, unlockedTopics: [] };
            localStorage.setItem('gas_users', JSON.stringify(users));
            
            // Sync immediately to Supabase Cloud
            if (typeof SupabaseService !== 'undefined') {
                await SupabaseService.syncUser(u, users[u]);
            }
            
            setAuthFeedback(msg, "✅ Đăng ký thành công! Đang chuyển sang Đăng nhập...", "success");
            
            setTimeout(() => {
                unlockRegBtn();
                document.getElementById('username').value = u;
                document.getElementById('password').value = p;
                document.getElementById('reg-password').value = '';
                document.getElementById('reg-confirm').value = '';
                toggleAuth('login');
            }, 1000);
        }

        async function login() {
            const u = document.getElementById('username').value.trim();
            const p = document.getElementById('password').value;
            const msg = document.getElementById('auth-login-msg');
            const loginBtn = document.getElementById('btn-login-submit');
            
            if(!u || !p) {
                setAuthFeedback(msg, "⚠️ Vui lòng nhập đầy đủ tên đăng nhập và mật khẩu!", "error");
                return;
            }

            if (loginBtn) { loginBtn.disabled = true; loginBtn.style.opacity = '0.7'; }

            let users = JSON.parse(localStorage.getItem('gas_users') || '{}');

            // 1. Check local storage first (instant login)
            if (users[u] && users[u].password === p) {
                currentUser = u;
                document.getElementById('user-display').innerText = u;
                document.getElementById('username').value = '';
                document.getElementById('password').value = '';
                if (msg) msg.style.display = 'none';
                if (loginBtn) { loginBtn.disabled = false; loginBtn.style.opacity = '1'; }
                
                // Background sync latest cloud points/topics from other devices
                if (typeof SupabaseService !== 'undefined') {
                    SupabaseService.fetchUser(u).then(cloudUser => {
                        if (cloudUser) {
                            if (cloudUser.points > (users[u].points || 0)) {
                                users[u].points = cloudUser.points;
                            }
                            if (cloudUser.unlocked_topics && cloudUser.unlocked_topics.length > 0) {
                                users[u].unlockedTopics = Array.from(new Set([...(users[u].unlockedTopics || []), ...cloudUser.unlocked_topics]));
                            }
                            localStorage.setItem('gas_users', JSON.stringify(users));
                            updateDashboardProgress();
                        }
                    });
                }

                initDashboard();
                showScreen('screen-dashboard');
                showMascotSpeech('Chào mừng trở lại! Hú hú!', 3000);
                return;
            }

            // 2. Query Supabase Cloud!
            setAuthFeedback(msg, "⏳ Đang kiểm tra tài khoản trên đám mây...", "loading");

            try {
                let cloudUser = null;
                if (typeof SupabaseService !== 'undefined') {
                    cloudUser = await SupabaseService.fetchUser(u);
                }

                if (cloudUser) {
                    if (cloudUser.password_hash === p) {
                        setAuthFeedback(msg, "✅ Đăng nhập thành công! Đang đồng bộ tài khoản...", "success");
                        // Match on Cloud! Save to this device's local storage
                        users[u] = {
                            password: p,
                            dailyProgress: {},
                            topicProgress: {},
                            learnedWords: [],
                            points: cloudUser.points || 0,
                            unlockedTopics: cloudUser.unlocked_topics || []
                        };
                        localStorage.setItem('gas_users', JSON.stringify(users));

                        currentUser = u;
                        document.getElementById('user-display').innerText = u;
                        document.getElementById('username').value = '';
                        document.getElementById('password').value = '';

                        setTimeout(() => {
                            if (msg) msg.style.display = 'none';
                            if (loginBtn) { loginBtn.disabled = false; loginBtn.style.opacity = '1'; }
                            initDashboard();
                            showScreen('screen-dashboard');
                            showMascotSpeech('Chào mừng trở lại! Hú hú!', 3000);
                        }, 500);
                        return;
                    } else {
                        setAuthFeedback(msg, "❌ Mật khẩu không chính xác! Vui lòng thử lại.", "error");
                        if (loginBtn) { loginBtn.disabled = false; loginBtn.style.opacity = '1'; }
                        return;
                    }
                } else {
                    setAuthFeedback(msg, "❌ Tên đăng nhập không tồn tại trên hệ thống! Vui lòng đăng ký tài khoản.", "error");
                    if (loginBtn) { loginBtn.disabled = false; loginBtn.style.opacity = '1'; }
                    return;
                }
            } catch (e) {
                console.warn('Cloud login check error:', e);
                setAuthFeedback(msg, "⚠️ Lỗi kết nối đám mây! Vui lòng thử lại.", "error");
                if (loginBtn) { loginBtn.disabled = false; loginBtn.style.opacity = '1'; }
            }
        }

        function logout() {
            currentUser = null;
            showScreen('screen-auth');
        }

        // --- DASHBOARD ---
        function loadCustomImportedTopics() {
            try {
                let customTopics = JSON.parse(localStorage.getItem('gas_custom_topics') || '[]');
                customTopics.forEach(ct => {
                    if (ct && ct.topic && !vocabTopics.some(t => t.topic === ct.topic)) {
                        vocabTopics.push(ct);
                    }
                });
            } catch(e) {}
        }

        function initDashboard() {
            checkAndMaintainStreak();
            updateSpeechRateUI();
            loadCustomImportedTopics();
            ensureExtendedTopicsRegistered();
            const select = document.getElementById('topic-select');
            if (!select) return;
            
            let currentVal = select.value;
            select.innerHTML = '<option value="">-- Chọn chủ đề để học --</option>';
            
            // 1. Add Default Topics
            vocabTopics.forEach((t, index) => {
                select.innerHTML += `<option value="${index}">${t.topic} (${t.words ? t.words.length : 0} từ)</option>`;
            });
            
            // 2. Add All Specialized & CEFR Topics (B1, B2, TOEIC, IT, Marketing, IELTS)
            const extraKeys = [
                { key: 'b1_vocab', name: '🟡 Tiếng Anh B1 - Trung Cấp', data: typeof b1VocabData !== 'undefined' ? b1VocabData : null },
                { key: 'b2_vocab', name: '🔴 Tiếng Anh B2 - Trên Trung Cấp', data: typeof b2VocabData !== 'undefined' ? b2VocabData : null },
                { key: 'toeic_650', name: '📘 Khóa TOEIC 650', data: typeof toeic650Data !== 'undefined' ? toeic650Data : null },
                { key: 'it', name: '💻 Tiếng Anh IT', data: (typeof premiumTopics !== 'undefined' && premiumTopics['it']) ? premiumTopics['it'] : null },
                { key: 'marketing', name: '📊 Tiếng Anh Marketing', data: (typeof premiumTopics !== 'undefined' && premiumTopics['marketing']) ? premiumTopics['marketing'] : null },
                { key: 'ielts', name: '🎓 Luyện Thi IELTS', data: (typeof premiumTopics !== 'undefined' && premiumTopics['ielts']) ? premiumTopics['ielts'] : null }
            ];
            
            extraKeys.forEach(item => {
                let wCount = (item.data && item.data.words) ? item.data.words.length : ((typeof premiumTopics !== 'undefined' && premiumTopics[item.key] && premiumTopics[item.key].words) ? premiumTopics[item.key].words.length : 0);
                select.innerHTML += `<option value="${item.key}">${item.name} (${wCount} từ)</option>`;
            });
            
            // 3. Add 30-Day Survival Road Topics
            if (typeof survival300Topics !== 'undefined' && Array.isArray(survival300Topics)) {
                let survivalOptGroup = document.createElement('optgroup');
                survivalOptGroup.label = '🌱 Lộ Trình 30 Ngày Sinh Tồn (A0 Mất Gốc)';
                survival300Topics.forEach(dayItem => {
                    let opt = document.createElement('option');
                    opt.value = `survival_day_${dayItem.day}`;
                    opt.innerText = `${dayItem.topic} (${dayItem.words.length} từ)`;
                    survivalOptGroup.appendChild(opt);
                });
                select.appendChild(survivalOptGroup);
            }
            
            if (currentVal) select.value = currentVal;
            
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
            hideCloudContent();
            
            let users = JSON.parse(localStorage.getItem('gas_users') || '{}');
            if (currentUser && users[currentUser]) {
                if (!users[currentUser].unlockedTopics) users[currentUser].unlockedTopics = [];
                if (!users[currentUser].unlockedTopics.includes(itemType)) {
                    users[currentUser].unlockedTopics.push(itemType);
                    localStorage.setItem('gas_users', JSON.stringify(users));
                    safeSyncToSupabase();
                }
            }
            
            let topicSelect = document.getElementById('topic-select');
            if (topicSelect) {
                topicSelect.value = itemType;
                onTopicSelect();
            }
            
            // Vào thẳng màn hình học Flashcard ngay lập tức!
            startLearning(true, itemType);
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
        function startLearning(resume, directTopicId) {
            let topicSelect = document.getElementById('topic-select');
            let topicIdx = directTopicId || (topicSelect ? topicSelect.value : "");
            
            if(!topicIdx || topicIdx === "") { alert("Hãy chọn một chủ đề!"); return; }
            
            if (topicSelect && topicSelect.value !== topicIdx) {
                topicSelect.value = topicIdx;
            }
            
            ensureExtendedTopicsRegistered();
            let topicData = null;
            if (topicIdx.startsWith && topicIdx.startsWith('survival_day_')) {
                let dayNum = parseInt(topicIdx.replace('survival_day_', ''), 10);
                let foundDay = (typeof survival300Topics !== 'undefined') ? survival300Topics.find(t => t.day === dayNum) : null;
                if (foundDay) topicData = foundDay;
            } else if (topicIdx === 'b1_vocab' && typeof b1VocabData !== 'undefined') {
                topicData = b1VocabData;
            } else if (topicIdx === 'b2_vocab' && typeof b2VocabData !== 'undefined') {
                topicData = b2VocabData;
            } else if (topicIdx === 'toeic_650' && typeof toeic650Data !== 'undefined') {
                topicData = toeic650Data;
            } else if (premiumTopics && premiumTopics[topicIdx]) {
                topicData = premiumTopics[topicIdx];
            } else if (freeTopics && freeTopics[topicIdx]) {
                topicData = freeTopics[topicIdx];
            } else if (vocabTopics && vocabTopics[topicIdx]) {
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
            
            let syllablesEl = document.getElementById('card-front-syllables');
            if (syllablesEl) {
                if (w.syllables && w.syllables.trim() !== '') {
                    syllablesEl.innerText = `[ ${w.syllables} ]`;
                    syllablesEl.style.display = 'inline-block';
                } else {
                    syllablesEl.style.display = 'none';
                }
            }
            updateSpeechRateUI();
            
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
            let cleanMeaning = w.meaning.replace(/ *\([^)]*\) */g, ""); 
            let searchQuery = `${baseWord} ${cleanMeaning} illustration`;
            let cardImg = document.getElementById('card-back-img');
            if (cardImg) {
                cardImg.style.display = 'block';
                cardImg.src = `https://tse1.mm.bing.net/th?q=${encodeURIComponent(searchQuery)}`;
            }
            
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
            
            let btnVoiceFront = document.getElementById('btn-voice-practice-front');
            let voiceResultFront = document.getElementById('voice-result-front');
            if(voiceResultFront) voiceResultFront.style.display = 'none';

            const hasSpeechRec = ('webkitSpeechRecognition' in window) || ('SpeechRecognition' in window);
            
            if(btnVoiceFront) {
                if (!hasSpeechRec) {
                    btnVoiceFront.style.display = 'none';
                } else {
                    btnVoiceFront.style.display = 'inline-flex';
                    btnVoiceFront.onclick = function(e) {
                        e.stopPropagation();
                        startVoiceRecognition(baseWordLower, true);
                    };
                }
            }

            if(btnVoice) {
                if (!hasSpeechRec) {
                    btnVoice.style.display = 'none';
                } else {
                    btnVoice.style.display = 'inline-flex';
                    btnVoice.onclick = function(e) {
                        e.stopPropagation();
                        startVoiceRecognition(baseWordLower, false);
                    };
                }
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
            let currentWordObj = currentWords[currentIndex];
            let wordKey = currentWordObj.word.replace(/\(.*?\)/g, '').split('/')[0].trim();
            
            if(!uData.srsData) uData.srsData = {};
            if(!uData.srsData[wordKey]) {
                uData.srsData[wordKey] = {
                    word: wordKey,
                    repetition: 0,
                    interval: 1,
                    ease: 2.5
                };
            }
            let srsItem = uData.srsData[wordKey];
            
            // SMART SRS ALGORITHM: 1d -> 3d -> 7d -> 14d -> 30d
            const srsIntervalSchedule = [1, 3, 7, 14, 30];
            
            if (remembered) {
                let currentLevel = srsItem.repetition || 0;
                let nextLevel = Math.min(currentLevel + 1, srsIntervalSchedule.length);
                srsItem.repetition = nextLevel;
                srsItem.interval = srsIntervalSchedule[nextLevel - 1];
                srsItem.step = nextLevel;
                
                // Reward 1 coin for memorization
                if (uData.points === undefined) uData.points = 0;
                uData.points += 1;
                
                showMascotSpeech('Xuất sắc! Nhớ thế này thì không bao giờ quên (+1 🪙).', 2000);
            } else {
                srsItem.repetition = 0;
                srsItem.interval = 1;
                srsItem.step = 0;
                
                // Automatically add forgotten word to ICU Box (Task 10)
                addWordToICU(currentWordObj);
                
                showMascotSpeech('Đã lưu vào Hộp Cứu Trợ ICU để ôn kỹ lại nhé!', 2000);
            }
            
            let nextDate = new Date();
            nextDate.setDate(nextDate.getDate() + srsItem.interval);
            srsItem.nextDate = `${nextDate.getFullYear()}-${nextDate.getMonth()+1}-${nextDate.getDate()}`;
            srsItem.nextReviewTimestamp = nextDate.getTime();
            
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
            updateDashboardProgress();
            
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

        function setSpeechRate(rate, e) {
            if (e && e.stopPropagation) e.stopPropagation();
            preferredSpeechRate = rate;
            localStorage.setItem('preferred_speech_rate', rate.toString());
            updateSpeechRateUI();
            playAudio(e, rate);
        }

        function updateSpeechRateUI() {
            let currentRate = preferredSpeechRate || 1.0;
            document.querySelectorAll('.btn-speed-rate').forEach(btn => {
                let btnRate = parseFloat(btn.getAttribute('data-rate'));
                if (Math.abs(btnRate - currentRate) < 0.05) {
                    btn.classList.add('active-rate');
                } else {
                    btn.classList.remove('active-rate');
                }
            });
        }

        function playAudio(e, customRate) {
            if (e && e.stopPropagation) e.stopPropagation(); // prevent card flip
            if (!currentWords || !currentWords[currentIndex]) return;
            if (!('speechSynthesis' in window)) return;
            try {
                window.speechSynthesis.cancel(); // Fix Safari iOS speech queue deadlock
            } catch(err) {}
            let baseWord = currentWords[currentIndex].word.replace(/\(.*?\)/g, '').split('/')[0].trim();
            let utterance = new SpeechSynthesisUtterance(baseWord);
            utterance.lang = 'en-US';
            let rate = customRate !== undefined ? customRate : (preferredSpeechRate || 1.0);
            utterance.rate = rate;
            window.speechSynthesis.speak(utterance);
        }

        // --- QUIZZES ---
        function triggerQuiz() {
            let p2 = [...sessionLearnedWords].sort(() => Math.random() - 0.5).map(w => ({...w, qtype: 'vi-en'}));
            quizQueue = [...p2];
            quizTotalCount = p2.length;
            sessionLearnedWords = []; // reset counter
            quizScore = 0;
            renderNextQuizQuestion();
            showScreen('screen-quiz'); showMascotSpeech('Đến giờ làm bài Test!', 3000);
        }

        function renderNextQuizQuestion() {
            if(quizQueue.length === 0) {
                // Done with quiz
                let totalQ = quizTotalCount > 0 ? quizTotalCount : 20;
                if(typeof SupabaseService !== 'undefined') { SupabaseService.saveQuizResult(currentUser, `Quiz Ôn tập ${totalQ} từ`, quizScore, totalQ); }
                alert(`Chúc mừng! Bạn đã hoàn thành bài kiểm tra ôn tập ${totalQ} câu.\nĐiểm số của bạn: ${quizScore}/${totalQ}`);
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
                    listHtml += `<div style="border-bottom: 1px solid rgba(0, 0, 0, 0.08); padding: 0.8rem 0.5rem; display:flex; justify-content:space-between; align-items: center;">
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
        document.getElementById('password')?.addEventListener('keypress', function(e) { if (e.key === 'Enter') login(); });
        document.getElementById('username')?.addEventListener('keypress', function(e) { if (e.key === 'Enter') login(); });
        document.getElementById('reg-username')?.addEventListener('keypress', function(e) { if (e.key === 'Enter') register(); });
        document.getElementById('reg-password')?.addEventListener('keypress', function(e) { if (e.key === 'Enter') register(); });
        document.getElementById('reg-confirm')?.addEventListener('keypress', function(e) { if (e.key === 'Enter') register(); });

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
                    try {
                        let customTopics = JSON.parse(localStorage.getItem('gas_custom_topics') || '[]');
                        customTopics.push(newTopic);
                        localStorage.setItem('gas_custom_topics', JSON.stringify(customTopics));
                    } catch(e) {}
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
        let selectedWordObjects = [];

        function initSentenceGame(exampleEn, exampleVi) {
            let modal = document.getElementById('sentence-game-modal');
            if(!modal) return;
            
            // Clean punctuation
            let cleanEn = exampleEn.replace(/[.,!?]/g, '');
            currentSentenceWords = cleanEn.split(' ').filter(w => w.trim() !== '');
            selectedWordObjects = [];
            
            // Map to objects with unique IDs to handle duplicate words properly
            let wordObjs = currentSentenceWords.map((word, idx) => ({ id: idx, word: word }));
            let shuffled = [...wordObjs].sort(() => Math.random() - 0.5);
            
            document.getElementById('sg-vietnamese').innerText = `Ý nghĩa: "${exampleVi}"`;
            
            let choicesContainer = document.getElementById('sg-choices');
            let answerContainer = document.getElementById('sg-answer');
            
            choicesContainer.innerHTML = '';
            answerContainer.innerHTML = '';
            document.getElementById('sg-result').style.display = 'none';
            
            shuffled.forEach((item) => {
                let btn = document.createElement('button');
                btn.className = 'btn-outline sg-word-btn';
                btn.innerText = item.word;
                btn.onclick = function() {
                    if(!btn.classList.contains('used')) {
                        btn.classList.add('used');
                        let selectedItem = { id: item.id, word: item.word, originalBtn: btn };
                        selectedWordObjects.push(selectedItem);
                        renderAnswer(selectedItem);
                    }
                };
                choicesContainer.appendChild(btn);
            });
            
            modal.style.display = 'flex';
        }

        function renderAnswer(selectedItem) {
            let answerContainer = document.getElementById('sg-answer');
            let ansBtn = document.createElement('button');
            ansBtn.className = 'btn-primary sg-word-btn';
            ansBtn.innerText = selectedItem.word;
            ansBtn.onclick = function() {
                selectedItem.originalBtn.classList.remove('used');
                ansBtn.remove();
                selectedWordObjects = selectedWordObjects.filter(obj => obj.id !== selectedItem.id);
            };
            answerContainer.appendChild(ansBtn);
        }

        function checkSentence() {
            let answerStr = selectedWordObjects.map(obj => obj.word).join(' ').toLowerCase();
            let targetStr = currentSentenceWords.join(' ').toLowerCase();
            let resultDiv = document.getElementById('sg-result');
            
            resultDiv.style.display = 'block';
            if(answerStr === targetStr) {
                resultDiv.innerHTML = '🎉 Chính xác! Tuyệt vời!';
                resultDiv.style.color = '#10b981';
                if (typeof triggerConfetti === 'function') triggerConfetti();
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

        // --- WORD MATCH ARENA (TASK 4, 5, 6) ---
        let wmSelectedCard = null;
        let wmMatchedCount = 0;
        let wmTimerInterval = null;
        let wmStartTime = null;
        let wmScoreEarned = 0;
        let isWmProcessing = false;

        function startWordMatchGame(customList) {
            let victoryModal = document.getElementById('wm-victory-modal');
            if (victoryModal) victoryModal.style.display = 'none';

            let pool = [];
            if (customList && Array.isArray(customList) && customList.length >= 6) {
                pool = [...customList];
            } else if (typeof currentWords !== 'undefined' && currentWords && currentWords.length >= 6) {
                pool = [...currentWords];
            } else if (typeof survival300Words !== 'undefined' && Array.isArray(survival300Words) && survival300Words.length >= 6) {
                pool = [...survival300Words];
            } else if (typeof window !== 'undefined' && window.survival300Words && Array.isArray(window.survival300Words) && window.survival300Words.length >= 6) {
                pool = [...window.survival300Words];
            } else if (typeof survival300Topics !== 'undefined' && Array.isArray(survival300Topics) && survival300Topics[0] && survival300Topics[0].words) {
                pool = survival300Topics.flatMap(t => t.words || []);
            } else if (typeof vocabTopics !== 'undefined' && Array.isArray(vocabTopics) && vocabTopics[0] && vocabTopics[0].words) {
                pool = vocabTopics.flatMap(t => t.words || []);
            }

            if (pool.length < 6) {
                alert("Cần ít nhất 6 từ vựng để bắt đầu đấu trường nối từ!");
                return;
            }

            // Shuffle pool and pick 6 words
            let selectedSix = [...pool].sort(() => Math.random() - 0.5).slice(0, 6);

            // Generate 12 cards
            let cards = [];
            selectedSix.forEach((w, idx) => {
                let cleanEn = w.word.replace(/\(.*?\)/g, '').split('/')[0].trim();
                let cleanVi = w.meaning.split(',')[0].split(';')[0].trim();
                cards.push({
                    id: `wm_en_${idx}`,
                    pairId: idx,
                    type: 'en',
                    text: cleanEn,
                    fullWord: cleanEn
                });
                cards.push({
                    id: `wm_vi_${idx}`,
                    pairId: idx,
                    type: 'vi',
                    text: cleanVi,
                    fullWord: cleanEn
                });
            });

            // Shuffle the 12 cards
            cards.sort(() => Math.random() - 0.5);

            // Reset state
            wmSelectedCard = null;
            wmMatchedCount = 0;
            wmScoreEarned = 0;
            isWmProcessing = false;

            // Render cards to grid
            let grid = document.getElementById('wm-grid');
            if (grid) {
                grid.innerHTML = '';
                cards.forEach(c => {
                    let cardEl = document.createElement('div');
                    cardEl.className = 'wm-card';
                    cardEl.innerText = c.text;
                    cardEl.setAttribute('data-id', c.id);
                    cardEl.setAttribute('data-pair-id', c.pairId);
                    cardEl.setAttribute('data-type', c.type);
                    cardEl.onclick = function() {
                        handleWordMatchCardClick(c, cardEl);
                    };
                    grid.appendChild(cardEl);
                });
            }

            // Score display
            let scoreEl = document.getElementById('wm-score');
            if (scoreEl) scoreEl.innerText = '🪙 +0';

            // Timer
            if (wmTimerInterval) clearInterval(wmTimerInterval);
            wmStartTime = Date.now();
            let timerEl = document.getElementById('wm-timer');
            if (timerEl) timerEl.innerText = '⏱️ 00:00';
            wmTimerInterval = setInterval(() => {
                let elapsed = Math.floor((Date.now() - wmStartTime) / 1000);
                let mins = String(Math.floor(elapsed / 60)).padStart(2, '0');
                let secs = String(elapsed % 60).padStart(2, '0');
                if (timerEl) timerEl.innerText = `⏱️ ${mins}:${secs}`;
            }, 1000);

            showScreen('screen-word-match');
            if (typeof showMascotSpeech === 'function') {
                showMascotSpeech('Nhanh tay nối 6 cặp từ vựng nhé!', 2500);
            }
        }

        function handleWordMatchCardClick(cardData, cardEl) {
            if (isWmProcessing || cardEl.classList.contains('wm-card-matched')) return;

            // Clicking same card -> deselect
            if (wmSelectedCard && wmSelectedCard.el === cardEl) {
                cardEl.classList.remove('wm-card-selected');
                wmSelectedCard = null;
                return;
            }

            // If First card selected
            if (!wmSelectedCard) {
                wmSelectedCard = { data: cardData, el: cardEl };
                cardEl.classList.add('wm-card-selected');
                // If English card -> speak
                if (cardData.type === 'en') {
                    speakWordDirectly(cardData.fullWord);
                }
                return;
            }

            // Second card clicked -> Check match
            let first = wmSelectedCard;
            cardEl.classList.add('wm-card-selected');

            // MATCHED
            if (first.data.pairId === cardData.pairId && first.data.type !== cardData.type) {
                isWmProcessing = true;
                speakWordDirectly(cardData.fullWord);

                setTimeout(() => {
                    first.el.classList.add('wm-card-matched');
                    cardEl.classList.add('wm-card-matched');
                    first.el.classList.remove('wm-card-selected');
                    cardEl.classList.remove('wm-card-selected');

                    wmMatchedCount += 1;
                    wmScoreEarned += 5;
                    let scoreEl = document.getElementById('wm-score');
                    if (scoreEl) scoreEl.innerText = `🪙 +${wmScoreEarned}`;

                    wmSelectedCard = null;
                    isWmProcessing = false;

                    // CHECK VICTORY (6 pairs matched)
                    if (wmMatchedCount === 6) {
                        finishWordMatchVictory();
                    }
                }, 300);
            } else {
                // WRONG MATCH
                isWmProcessing = true;
                first.el.classList.add('wm-card-wrong');
                cardEl.classList.add('wm-card-wrong');

                setTimeout(() => {
                    first.el.classList.remove('wm-card-wrong', 'wm-card-selected');
                    cardEl.classList.remove('wm-card-wrong', 'wm-card-selected');
                    wmSelectedCard = null;
                    isWmProcessing = false;
                }, 500);
            }
        }

        function speakWordDirectly(wordText) {
            if (!('speechSynthesis' in window)) return;
            try {
                window.speechSynthesis.cancel();
            } catch(e) {}
            let utterance = new SpeechSynthesisUtterance(wordText);
            utterance.lang = 'en-US';
            utterance.rate = preferredSpeechRate || 1.0;
            window.speechSynthesis.speak(utterance);
        }

        function finishWordMatchVictory() {
            if (wmTimerInterval) clearInterval(wmTimerInterval);
            let elapsed = Math.floor((Date.now() - wmStartTime) / 1000);
            let mins = String(Math.floor(elapsed / 60)).padStart(2, '0');
            let secs = String(elapsed % 60).padStart(2, '0');
            let timeStr = `${mins}:${secs}`;

            let finalCoins = 20;
            
            // Add points to user profile (Task 6)
            let users = JSON.parse(localStorage.getItem('gas_users') || '{}');
            if (currentUser && users[currentUser]) {
                if (users[currentUser].points === undefined) users[currentUser].points = 0;
                users[currentUser].points += finalCoins;
                localStorage.setItem('gas_users', JSON.stringify(users));
                safeSyncToSupabase();
                updateDashboardProgress();
            }

            let resultTimeEl = document.getElementById('wm-result-time');
            if (resultTimeEl) resultTimeEl.innerText = timeStr;

            let resultCoinsEl = document.getElementById('wm-result-coins');
            if (resultCoinsEl) resultCoinsEl.innerText = `+${finalCoins} 🪙`;

            let modal = document.getElementById('wm-victory-modal');
            if (modal) modal.style.display = 'flex';

            if (typeof triggerConfetti === 'function') triggerConfetti();
            if (typeof showMascotSpeech === 'function') {
                showMascotSpeech(`🏆 Đỉnh quá! Hoàn thành trong ${timeStr}, nhận ngay +${finalCoins} xu!`, 4000);
            }
        }

        function closeWordMatchVictory() {
            let modal = document.getElementById('wm-victory-modal');
            if (modal) modal.style.display = 'none';
            showScreen('screen-dashboard');
        }

        // --- SPEECH SIMILARITY & 3-TIER SCORING (TASK 8) ---
        function calculateWordSimilarity(s1, s2) {
            let clean1 = s1.toLowerCase().replace(/[^a-z0-9]/g, '').trim();
            let clean2 = s2.toLowerCase().replace(/[^a-z0-9]/g, '').trim();
            if (clean1 === clean2) return 1.0;
            if (clean1.includes(clean2) || clean2.includes(clean1)) return 0.9;
            
            let m = clean1.length, n = clean2.length;
            if (m === 0 || n === 0) return 0.0;
            
            let matrix = [];
            for (let i = 0; i <= m; i++) {
                matrix[i] = [i];
            }
            for (let j = 0; j <= n; j++) {
                matrix[0][j] = j;
            }
            for (let i = 1; i <= m; i++) {
                for (let j = 1; j <= n; j++) {
                    if (clean1[i - 1] === clean2[j - 1]) {
                        matrix[i][j] = matrix[i - 1][j - 1];
                    } else {
                        matrix[i][j] = Math.min(
                            matrix[i - 1][j - 1] + 1,
                            matrix[i][j - 1] + 1,
                            matrix[i - 1][j] + 1
                        );
                    }
                }
            }
            let distance = matrix[m][n];
            let maxLen = Math.max(m, n);
            return (maxLen - distance) / maxLen;
        }

        function startVoiceRecognition(targetWord, isFront = false) {
            if (!('webkitSpeechRecognition' in window) && !('SpeechRecognition' in window)) {
                alert("Trình duyệt của bạn không hỗ trợ tính năng nhận diện giọng nói. Hãy dùng Google Chrome nhé!");
                return;
            }
            
            let SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
            let recognition = new SpeechRecognition();
            recognition.lang = 'en-US';
            recognition.interimResults = false;
            recognition.maxAlternatives = 1;
            
            let btnVoice = isFront ? document.getElementById('btn-voice-practice-front') : document.getElementById('btn-voice-practice');
            let voiceResultDiv = isFront ? document.getElementById('voice-result-front') : document.getElementById('voice-result');
            let cardObj = document.getElementById('flashcard-obj');
            
            let originalText = btnVoice ? btnVoice.innerHTML : '🎙️';
            if (btnVoice) {
                btnVoice.innerHTML = '🔴 Đang nghe...';
                btnVoice.style.background = '#ef4444';
                btnVoice.style.color = 'white';
            }
            
            try {
                recognition.start();
            } catch(e) {
                console.warn('SpeechRecognition start error:', e);
            }
            
            recognition.onresult = function(event) {
                let speechResult = event.results[0][0].transcript.toLowerCase();
                if(!voiceResultDiv) return;
                
                let similarity = calculateWordSimilarity(speechResult, targetWord);
                voiceResultDiv.style.display = 'block';
                
                if (cardObj) {
                    cardObj.classList.remove('card-voice-success', 'card-voice-warning', 'card-voice-error');
                }

                if(similarity >= 0.85 || speechResult.includes(targetWord.toLowerCase())) {
                    // 🟢 Match 100% / High Match
                    voiceResultDiv.innerHTML = `🎉 Phát âm chuẩn xác! Bạn đọc là: "${speechResult}" (+2 🪙)`;
                    voiceResultDiv.style.color = '#065f46';
                    voiceResultDiv.style.background = '#d1fae5';
                    if (cardObj) cardObj.classList.add('card-voice-success');
                    
                    // Reward 2 points
                    let users = JSON.parse(localStorage.getItem('gas_users') || '{}');
                    if (currentUser && users[currentUser]) {
                        if (users[currentUser].points === undefined) users[currentUser].points = 0;
                        users[currentUser].points += 2;
                        localStorage.setItem('gas_users', JSON.stringify(users));
                        safeSyncToSupabase();
                        updateDashboardProgress();
                    }
                    
                    if(typeof triggerConfetti === 'function') triggerConfetti();
                    setTimeout(() => { if (cardObj) cardObj.classList.remove('card-voice-success'); }, 2000);
                } else if (similarity >= 0.55) {
                    // 🟡 Partial Match
                    voiceResultDiv.innerHTML = `🟡 Gần đúng! Bạn đọc là: "${speechResult}". Hãy chú ý âm đuôi & trọng âm nhé!`;
                    voiceResultDiv.style.color = '#b45309';
                    voiceResultDiv.style.background = '#fef3c7';
                    if (cardObj) cardObj.classList.add('card-voice-warning');
                    setTimeout(() => { if (cardObj) cardObj.classList.remove('card-voice-warning'); }, 2000);
                } else {
                    // 🔴 Low Match / Error
                    voiceResultDiv.innerHTML = `🔴 Chưa đúng: Bạn đọc là: "${speechResult}". Đang phát âm mẫu lại...`;
                    voiceResultDiv.style.color = '#991b1b';
                    voiceResultDiv.style.background = '#fee2e2';
                    if (cardObj) cardObj.classList.add('card-voice-error');
                    
                    // Auto replay at 0.75x slow speed
                    speakWordDirectly(targetWord);
                    
                    // Add word to ICU
                    if (currentWords && currentWords[currentIndex]) {
                        addWordToICU(currentWords[currentIndex]);
                    }
                    
                    setTimeout(() => { if (cardObj) cardObj.classList.remove('card-voice-error'); }, 2000);
                }
            };
            
            recognition.onspeechend = function() {
                try { recognition.stop(); } catch(e) {}
                if (btnVoice) {
                    btnVoice.innerHTML = originalText;
                    btnVoice.style.background = 'white';
                    btnVoice.style.color = 'var(--primary)';
                }
            };
            
            recognition.onerror = function(event) {
                console.warn("Micro error:", event.error);
                if (btnVoice) {
                    btnVoice.innerHTML = originalText;
                    btnVoice.style.background = 'white';
                    btnVoice.style.color = 'var(--primary)';
                }
            };
        }

        // --- LISTEN SPEED ARENA (TASK 9) ---
        let lsCurrentIndex = 0;
        let lsQuestions = [];
        let lsScore = 0;
        let lsTimerInterval = null;
        let lsTimeRemaining = 5.0;
        let isLsAnswered = false;

        function startListenSpeedGame(customList) {
            let victoryModal = document.getElementById('ls-victory-modal');
            if (victoryModal) victoryModal.style.display = 'none';

            let pool = [];
            if (customList && Array.isArray(customList) && customList.length >= 4) {
                pool = [...customList];
            } else if (typeof currentWords !== 'undefined' && currentWords && currentWords.length >= 4) {
                pool = [...currentWords];
            } else if (typeof survival300Words !== 'undefined' && Array.isArray(survival300Words) && survival300Words.length >= 4) {
                pool = [...survival300Words];
            } else if (typeof window !== 'undefined' && window.survival300Words && Array.isArray(window.survival300Words) && window.survival300Words.length >= 4) {
                pool = [...window.survival300Words];
            } else if (typeof survival300Topics !== 'undefined' && Array.isArray(survival300Topics) && survival300Topics[0] && survival300Topics[0].words) {
                pool = survival300Topics.flatMap(t => t.words || []);
            } else if (typeof vocabTopics !== 'undefined' && Array.isArray(vocabTopics) && vocabTopics[0] && vocabTopics[0].words) {
                pool = vocabTopics.flatMap(t => t.words || []);
            }

            if (pool.length < 4) {
                alert("Cần ít nhất 4 từ vựng để bắt đầu game phản xạ nghe!");
                return;
            }

            // Shuffle and pick 5 questions
            let shuffledPool = [...pool].sort(() => Math.random() - 0.5);
            let targetWords = shuffledPool.slice(0, 5);

            lsQuestions = targetWords.map(w => {
                let cleanEn = w.word.replace(/\(.*?\)/g, '').split('/')[0].trim();
                let cleanVi = w.meaning.split(',')[0].split(';')[0].trim();
                
                // Pick 3 distractors
                let distractors = pool.filter(p => p.word !== w.word)
                                      .sort(() => Math.random() - 0.5)
                                      .slice(0, 3)
                                      .map(d => d.meaning.split(',')[0].split(';')[0].trim());
                
                let options = [cleanVi, ...distractors].sort(() => Math.random() - 0.5);
                return {
                    wordObj: w,
                    word: cleanEn,
                    meaning: cleanVi,
                    options: options
                };
            });

            lsCurrentIndex = 0;
            lsScore = 0;
            isLsAnswered = false;

            let scoreEl = document.getElementById('ls-score-display');
            if (scoreEl) scoreEl.innerText = '🪙 +0';

            showScreen('screen-listen-speed');
            renderListenSpeedQuestion();
        }

        function renderListenSpeedQuestion() {
            if (lsCurrentIndex >= lsQuestions.length) {
                finishListenSpeedVictory();
                return;
            }

            isLsAnswered = false;
            let currentQ = lsQuestions[lsCurrentIndex];

            let counterEl = document.getElementById('ls-question-counter');
            if (counterEl) counterEl.innerText = `Câu ${lsCurrentIndex + 1} / ${lsQuestions.length}`;

            let feedbackEl = document.getElementById('ls-feedback-text');
            if (feedbackEl) {
                feedbackEl.innerText = '';
                feedbackEl.style.color = '#64748b';
            }

            let grid = document.getElementById('ls-options-grid');
            if (grid) {
                grid.innerHTML = '';
                currentQ.options.forEach(optText => {
                    let btn = document.createElement('button');
                    btn.className = 'listen-opt-btn';
                    btn.innerText = optText;
                    btn.onclick = function() {
                        handleListenSpeedChoice(optText, btn);
                    };
                    grid.appendChild(btn);
                });
            }

            // Reset Timer Bar
            let bar = document.getElementById('ls-timer-bar');
            if (bar) {
                bar.style.width = '100%';
                bar.style.background = '#10b981';
            }

            // Speak audio immediately
            playListenSpeedAudio();

            // Start 5-second countdown timer
            if (lsTimerInterval) clearInterval(lsTimerInterval);
            lsTimeRemaining = 5.0;
            let startTime = Date.now();
            lsTimerInterval = setInterval(() => {
                let elapsed = (Date.now() - startTime) / 1000;
                lsTimeRemaining = Math.max(0, 5.0 - elapsed);
                let pct = (lsTimeRemaining / 5.0) * 100;
                if (bar) {
                    bar.style.width = `${pct}%`;
                    if (pct < 35) {
                        bar.style.background = '#ef4444';
                    } else if (pct < 65) {
                        bar.style.background = '#f59e0b';
                    }
                }

                if (lsTimeRemaining <= 0) {
                    clearInterval(lsTimerInterval);
                    if (!isLsAnswered) {
                        handleListenSpeedTimeout();
                    }
                }
            }, 50);
        }

        function playListenSpeedAudio() {
            if (lsCurrentIndex >= lsQuestions.length) return;
            let currentQ = lsQuestions[lsCurrentIndex];
            speakWordDirectly(currentQ.word);
        }

        function handleListenSpeedChoice(chosenMeaning, btnEl) {
            if (isLsAnswered) return;
            isLsAnswered = true;
            if (lsTimerInterval) clearInterval(lsTimerInterval);

            let currentQ = lsQuestions[lsCurrentIndex];
            let feedbackEl = document.getElementById('ls-feedback-text');

            if (chosenMeaning === currentQ.meaning) {
                // Correct!
                btnEl.classList.add('correct');
                let gained = lsTimeRemaining >= 3.0 ? 10 : 5;
                lsScore += gained;
                let scoreEl = document.getElementById('ls-score-display');
                if (scoreEl) scoreEl.innerText = `🪙 +${lsScore}`;

                if (feedbackEl) {
                    feedbackEl.innerText = `🎉 Chính xác! (${currentQ.word})`;
                    feedbackEl.style.color = '#10b981';
                }

                setTimeout(() => {
                    lsCurrentIndex++;
                    renderListenSpeedQuestion();
                }, 800);
            } else {
                // Wrong!
                btnEl.classList.add('wrong');
                document.querySelectorAll('.listen-opt-btn').forEach(b => {
                    if (b.innerText === currentQ.meaning) b.classList.add('correct');
                });

                if (feedbackEl) {
                    feedbackEl.innerText = `❌ Đáp án đúng: "${currentQ.meaning}" (${currentQ.word})`;
                    feedbackEl.style.color = '#ef4444';
                }

                // Add to ICU
                addWordToICU(currentQ.wordObj);

                setTimeout(() => {
                    lsCurrentIndex++;
                    renderListenSpeedQuestion();
                }, 1400);
            }
        }

        function handleListenSpeedTimeout() {
            if (isLsAnswered) return;
            isLsAnswered = true;
            let currentQ = lsQuestions[lsCurrentIndex];
            let feedbackEl = document.getElementById('ls-feedback-text');

            document.querySelectorAll('.listen-opt-btn').forEach(b => {
                if (b.innerText === currentQ.meaning) b.classList.add('correct');
            });

            if (feedbackEl) {
                feedbackEl.innerText = `⏰ Hết 5 giây! Đáp án là: "${currentQ.meaning}" (${currentQ.word})`;
                feedbackEl.style.color = '#ef4444';
            }

            addWordToICU(currentQ.wordObj);

            setTimeout(() => {
                lsCurrentIndex++;
                renderListenSpeedQuestion();
            }, 1400);
        }

        function finishListenSpeedVictory() {
            if (lsTimerInterval) clearInterval(lsTimerInterval);
            let finalCoins = 25;

            let users = JSON.parse(localStorage.getItem('gas_users') || '{}');
            if (currentUser && users[currentUser]) {
                if (users[currentUser].points === undefined) users[currentUser].points = 0;
                users[currentUser].points += finalCoins;
                localStorage.setItem('gas_users', JSON.stringify(users));
                safeSyncToSupabase();
                updateDashboardProgress();
            }

            let resultScoreEl = document.getElementById('ls-result-score');
            if (resultScoreEl) resultScoreEl.innerText = `🪙 +${lsScore} Đ`;

            let resultCoinsEl = document.getElementById('ls-result-coins');
            if (resultCoinsEl) resultCoinsEl.innerText = `+${finalCoins} 🪙`;

            let modal = document.getElementById('ls-victory-modal');
            if (modal) modal.style.display = 'flex';

            if (typeof triggerConfetti === 'function') triggerConfetti();
        }

        function closeListenSpeedVictory() {
            let modal = document.getElementById('ls-victory-modal');
            if (modal) modal.style.display = 'none';
            showScreen('screen-dashboard');
        }

        // --- MOBILE TOUCH SWIPE GESTURES ---
        function initCardSwipeGestures() {
            const cardContainer = document.getElementById('flashcard-obj') || document.querySelector('.scene');
            if (!cardContainer) return;
            
            let touchStartX = 0;
            let touchStartY = 0;
            let touchEndX = 0;
            let touchEndY = 0;
            
            cardContainer.addEventListener('touchstart', function(e) {
                if (!e.changedTouches || e.changedTouches.length === 0) return;
                touchStartX = e.changedTouches[0].screenX;
                touchStartY = e.changedTouches[0].screenY;
            }, { passive: true });
            
            cardContainer.addEventListener('touchend', function(e) {
                if (!e.changedTouches || e.changedTouches.length === 0) return;
                touchEndX = e.changedTouches[0].screenX;
                touchEndY = e.changedTouches[0].screenY;
                
                const deltaX = touchEndX - touchStartX;
                const deltaY = touchEndY - touchStartY;
                
                // Horizontal swipe detected (> 45px and dominant over vertical)
                if (Math.abs(deltaX) > 45 && Math.abs(deltaX) > Math.abs(deltaY) * 1.2) {
                    if (deltaX < 0) {
                        // Swiped Left -> Next Card
                        if (isSrsMode) {
                            srsAnswer(true);
                        } else {
                            nextCard();
                        }
                    } else {
                        // Swiped Right -> Prev Card
                        if (isSrsMode) {
                            srsAnswer(false);
                        } else {
                            prevCard();
                        }
                    }
                }
            }, { passive: true });
        }

        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', initCardSwipeGestures);
        } else {
            initCardSwipeGestures();
        }

        // Global Escape key listener for closing modals/popups
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape') {
                if (typeof hideCloudContent === 'function') hideCloudContent();
                if (typeof closeSentenceGame === 'function') closeSentenceGame();
                if (typeof closeLoginForm === 'function') closeLoginForm();
            }
        });