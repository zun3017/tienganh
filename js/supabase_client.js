/**
 * Supabase Cloud Sync Module for Web Tiếng Anh
 * Project Reference: yqvxrtqjdrsttcgvlurp
 * Endpoint: https://yqvxrtqjdrsttcgvlurp.supabase.co
 */

const SupabaseConfig = {
  projectRef: 'yqvxrtqjdrsttcgvlurp',
  supabaseUrl: 'https://yqvxrtqjdrsttcgvlurp.supabase.co',
  anonKey: 'sb_publishable_S9t2XVfd2LSfxdcRM_UFcg_kiAtJsy1',
  client: null,
  isConnected: false
};

const SupabaseService = {
  init() {
    if (typeof supabase !== 'undefined') {
      try {
        SupabaseConfig.client = supabase.createClient(SupabaseConfig.supabaseUrl, SupabaseConfig.anonKey);
        this.checkConnection();
      } catch (e) {
        console.warn('Supabase client init error:', e);
      }
    }
  },

  async checkConnection() {
    if (!SupabaseConfig.client) return false;
    try {
      const { data, error } = await SupabaseConfig.client.from('quiz_history').select('id').limit(1);
      if (!error) {
        SupabaseConfig.isConnected = true;
        this.updateConnectionUI(true);
        return true;
      }
    } catch (e) {
      // offline fallback
    }
    this.updateConnectionUI(false);
    return false;
  },

  updateConnectionUI(online) {
    let badge = document.getElementById('supabase-status-badge');
    if (!badge) {
      badge = document.createElement('div');
      badge.id = 'supabase-status-badge';
      badge.style.position = 'fixed';
      badge.style.bottom = '15px';
      badge.style.right = '15px';
      badge.style.padding = '6px 14px';
      badge.style.borderRadius = '20px';
      badge.style.fontSize = '12px';
      badge.style.fontWeight = 'bold';
      badge.style.zIndex = '900';
      badge.style.boxShadow = '0 4px 12px rgba(0,0,0,0.15)';
      badge.style.backdropFilter = 'blur(8px)';
      badge.style.display = 'flex';
      badge.style.alignItems = 'center';
      badge.style.gap = '6px';
      document.body.appendChild(badge);
    }

    if (online) {
      badge.style.background = 'rgba(16, 185, 129, 0.95)';
      badge.style.color = '#ffffff';
      badge.innerHTML = '⚡ Supabase Cloud: 🟢 Đã kết nối';
    } else {
      badge.style.background = 'rgba(30, 41, 59, 0.85)';
      badge.style.color = '#94a3b8';
      badge.innerHTML = '⚡ Supabase Cloud: 💾 Chế độ Hybrid LocalStorage';
    }
  },

  // Sync user profile to Supabase
  async syncUser(username, userData) {
    if (!SupabaseConfig.client) return;
    try {
      await SupabaseConfig.client.from('users_profile').upsert({
        username: username,
        password_hash: userData.password,
        points: userData.points || 0,
        unlocked_topics: userData.unlockedTopics || [],
        updated_at: new Date().toISOString()
      }, { onConflict: 'username' });
    } catch (err) {
      console.log('Sync user offline:', err);
    }
  },

  // Save Quiz Result to Supabase Leaderboard
  async saveQuizResult(username, topicName, score, totalQuestions) {
    if (!SupabaseConfig.client) return;
    try {
      const accuracy = totalQuestions > 0 ? (score / totalQuestions) * 100 : 0;
      await SupabaseConfig.client.from('quiz_history').insert([
        {
          username: username,
          topic_name: topicName,
          score: score,
          total_questions: totalQuestions,
          accuracy_percentage: accuracy,
          completed_at: new Date().toISOString()
        }
      ]);
    } catch (err) {
      console.log('Quiz saved locally:', err);
    }
  },

  // Get Top Leaderboard
  async getLeaderboard(limit = 10) {
    if (!SupabaseConfig.client) return [];
    try {
      const { data, error } = await SupabaseConfig.client
        .from('quiz_history')
        .select('username, topic_name, score, accuracy_percentage, completed_at')
        .order('score', { ascending: false })
        .limit(limit);

      if (!error && data) return data;
    } catch (err) {
      console.log('Leaderboard offline:', err);
    }
    return [];
  }
};

document.addEventListener('DOMContentLoaded', () => {
  SupabaseService.init();
});
