-- ===================================================================
-- SUPABASE DATABASE SCHEMA FOR WEB TIẾNG ANH (A2 VOCAB & TOEIC HUB)
-- Project ID: meqgdruxaqjvnobylbev
-- URL: https://meqgdruxaqjvnobylbev.supabase.co
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

-- Cấp quyền thao tác cho anon, authenticated, service_role
GRANT ALL ON TABLE public.users_profile TO anon, authenticated, service_role;
GRANT ALL ON TABLE public.study_progress TO anon, authenticated, service_role;
GRANT ALL ON TABLE public.quiz_history TO anon, authenticated, service_role;
GRANT ALL ON TABLE public.custom_vocabulary TO anon, authenticated, service_role;

-- Xóa các policy cũ nếu có và tạo lại
DROP POLICY IF EXISTS "Allow public users_profile" ON public.users_profile;
CREATE POLICY "Allow public users_profile" ON public.users_profile FOR ALL USING (true) WITH CHECK (true);

DROP POLICY IF EXISTS "Allow public study_progress" ON public.study_progress;
CREATE POLICY "Allow public study_progress" ON public.study_progress FOR ALL USING (true) WITH CHECK (true);

DROP POLICY IF EXISTS "Allow public quiz_history" ON public.quiz_history;
CREATE POLICY "Allow public quiz_history" ON public.quiz_history FOR ALL USING (true) WITH CHECK (true);

DROP POLICY IF EXISTS "Allow public custom_vocabulary" ON public.custom_vocabulary;
CREATE POLICY "Allow public custom_vocabulary" ON public.custom_vocabulary FOR ALL USING (true) WITH CHECK (true);

-- 5. NẠP KHÔI PHỤC DỮ LIỆU CÁC TÀI KHOẢN ĐÃ CÓ
INSERT INTO public.users_profile (username, password_hash, points, streak_days, unlocked_topics)
VALUES 
    ('1234', '1234', 37, 1, ARRAY['basic_a1', 'daily_life']),
    ('admin_test', '123456', 100, 3, ARRAY['basic_a1', 'daily_life', 'travel', 'food']),
    ('134', '1234', 6, 1, ARRAY['basic_a1'])
ON CONFLICT (username) DO UPDATE 
SET points = EXCLUDED.points, 
    streak_days = EXCLUDED.streak_days, 
    unlocked_topics = EXCLUDED.unlocked_topics;
