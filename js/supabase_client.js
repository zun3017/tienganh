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
    // Hidden completely as requested by user
    let badge = document.getElementById('supabase-status-badge');
    if (badge) {
      badge.remove();
    }
  },

  // Fetch user profile from Supabase (Dual-engine: SDK + Native REST API)
  async fetchUser(username) {
    if (!username) return null;

    // 1. Try Supabase Client SDK if initialized
    if (SupabaseConfig.client) {
      try {
        const { data, error } = await SupabaseConfig.client
          .from('users_profile')
          .select('*')
          .eq('username', username)
          .maybeSingle();
        if (!error && data) return data;
      } catch (err) {
        console.warn('SDK fetch error, trying REST API:', err);
      }
    }

    // 2. High-reliability Native REST API fallback (works 100% independent of SDK)
    try {
      const endpoint = `${SupabaseConfig.supabaseUrl}/rest/v1/users_profile?username=eq.${encodeURIComponent(username)}&select=*`;
      const res = await fetch(endpoint, {
        method: 'GET',
        headers: {
          'apikey': SupabaseConfig.anonKey,
          'Authorization': `Bearer ${SupabaseConfig.anonKey}`
        }
      });
      if (res.ok) {
        const rows = await res.json();
        if (rows && rows.length > 0) return rows[0];
      }
    } catch (e) {
      console.warn('Native REST fetch error:', e);
    }
    return null;
  },

  // Check if username already exists on Cloud
  async checkUserExists(username) {
    const user = await this.fetchUser(username);
    return user !== null;
  },

  // Sync user profile to Supabase (Dual-engine: SDK + Native REST API)
  async syncUser(username, userData) {
    if (!username || !userData) return;
    const payload = {
      username: username,
      password_hash: userData.password,
      points: userData.points || 0,
      unlocked_topics: userData.unlockedTopics || [],
      updated_at: new Date().toISOString()
    };

    // 1. Try SDK
    if (SupabaseConfig.client) {
      try {
        await SupabaseConfig.client.from('users_profile').upsert(payload, { onConflict: 'username' });
        return;
      } catch (err) {
        console.warn('SDK sync error, trying REST API:', err);
      }
    }

    // 2. Native REST API fallback
    try {
      await fetch(`${SupabaseConfig.supabaseUrl}/rest/v1/users_profile`, {
        method: 'POST',
        headers: {
          'apikey': SupabaseConfig.anonKey,
          'Authorization': `Bearer ${SupabaseConfig.anonKey}`,
          'Content-Type': 'application/json',
          'Prefer': 'resolution=merge-duplicates'
        },
        body: JSON.stringify(payload)
      });
    } catch (e) {
      console.warn('Native REST sync error:', e);
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

// Self-initialize immediately
SupabaseService.init();
document.addEventListener('DOMContentLoaded', () => {
  SupabaseService.init();
});
