-- ===================================================================
-- SUPABASE DATABASE SCHEMA FOR WEB TIẾNG ANH (A2 VOCAB & TOEIC HUB)
-- Project ID: yqvxrtqjdrsttcgvlurp
-- URL: https://yqvxrtqjdrsttcgvlurp.supabase.co
-- ===================================================================

-- 1. BẢNG HỒ SƠ NGƯỜI DÙNG (USERS PROFILE)
CREATE TABLE IF NOT EXISTS public.users_profile (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    username TEXT UNIQUE NOT NULL,
    password_hash TEXT,
    points INTEGER DEFAULT 0,
    streak_days INTEGER DEFAULT 1,
    unlocked_topics TEXT[] DEFAULT '{}',
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 2. BẢNG TIẾN ĐỘ HỌC TẬP (STUDY PROGRESS)
CREATE TABLE IF NOT EXISTS public.study_progress (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    username TEXT NOT NULL,
    topic_id TEXT NOT NULL,
    words_learned INTEGER DEFAULT 0,
    words_total INTEGER DEFAULT 0,
    learned_words_json JSONB DEFAULT '[]'::jsonb,
    srs_due_words JSONB DEFAULT '[]'::jsonb,
    last_studied_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    CONSTRAINT unique_user_topic UNIQUE (username, topic_id)
);

-- 3. BẢNG LỊCH SỬ THI QUIZ & BẢNG XẾP HẠNG (QUIZ HISTORY & LEADERBOARD)
CREATE TABLE IF NOT EXISTS public.quiz_history (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    username TEXT NOT NULL,
    topic_name TEXT NOT NULL,
    score INTEGER NOT NULL,
    total_questions INTEGER DEFAULT 20,
    accuracy_percentage NUMERIC(5, 2) DEFAULT 0.00,
    completed_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 4. BẢNG SỔ TAY TỪ VỰNG TỰ TẠO (CUSTOM VOCABULARY)
CREATE TABLE IF NOT EXISTS public.custom_vocabulary (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    username TEXT NOT NULL,
    word TEXT NOT NULL,
    phonetic TEXT,
    meaning TEXT NOT NULL,
    example TEXT,
    example_vi TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Bật Row Level Security (RLS) & cấp quyền truy cập công khai/anon
ALTER TABLE public.users_profile ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.study_progress ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.quiz_history ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.custom_vocabulary ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow public read users_profile" ON public.users_profile FOR SELECT USING (true);
CREATE POLICY "Allow public insert/update users_profile" ON public.users_profile FOR ALL USING (true);

CREATE POLICY "Allow public read study_progress" ON public.study_progress FOR SELECT USING (true);
CREATE POLICY "Allow public insert/update study_progress" ON public.study_progress FOR ALL USING (true);

CREATE POLICY "Allow public read quiz_history" ON public.quiz_history FOR SELECT USING (true);
CREATE POLICY "Allow public insert quiz_history" ON public.quiz_history FOR INSERT WITH CHECK (true);

CREATE POLICY "Allow public custom_vocabulary" ON public.custom_vocabulary FOR ALL USING (true);
