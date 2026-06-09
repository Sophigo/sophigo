import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || '';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || '';

const isMock = !supabaseUrl || !supabaseAnonKey || supabaseUrl.includes('mock-supabase-url') || supabaseUrl.trim() === '';

class MockAuth {
  constructor() {
    this.listeners = new Set();
    this.currentUser = JSON.parse(localStorage.getItem('sophigo_mock_user') || 'null');
    this.session = this.currentUser ? { user: this.currentUser, access_token: 'mock-token-jwt' } : null;

    // Seed mock database with Lihua & Bob users
    const db = JSON.parse(localStorage.getItem('sophigo_mock_users_db') || '{}');
    let dbChanged = false;
    
    if (!db['lihua@sophigo.com']) {
      db['lihua@sophigo.com'] = {
        password: 'password123',
        user: {
          id: 'mock-user-lihua-id',
          email: 'lihua@sophigo.com',
          user_metadata: {
            username: 'Lihua',
            nickname: '李华',
            signature: '以系统决策驱动敏捷造物，AI时代的创客工程师',
            phone: '15924538138',
            team: 'ZWU 创新团队',
            admission_year: 'Feb 1, 2025',
            avatar: 'images/avatar.svg',
            course_permissions: ['Fab课程', 'AI应用基础', 'AI移动机器人', 'CMF应用'],
            comment_permission: true
          }
        }
      };
      dbChanged = true;
    }

    if (!db['bob@sophigo.com']) {
      db['bob@sophigo.com'] = {
        password: 'sophigo0606',
        user: {
          id: 'mock-user-bob-id',
          email: 'bob@sophigo.com',
          user_metadata: {
            username: 'Bob',
            nickname: 'Bob',
            signature: 'AI时代，敏捷造物',
            phone: '13800000000',
            team: 'SophiGo 开发团队',
            admission_year: 'Jun 6, 2026',
            avatar: '',
            course_permissions: ['Fab课程', 'AI应用基础', 'AI移动机器人', 'CMF应用'],
            comment_permission: true
          }
        }
      };
      dbChanged = true;
    }

    if (dbChanged) {
      localStorage.setItem('sophigo_mock_users_db', JSON.stringify(db));
    }
  }

  async signUp({ email, password, options }) {
    const users = JSON.parse(localStorage.getItem('sophigo_mock_users_db') || '{}');
    if (users[email]) {
      return { data: { user: null, session: null }, error: { message: '该邮箱已被注册' } };
    }

    const newUser = {
      id: 'mock-user-id-' + Math.random().toString(36).substr(2, 9),
      email,
      user_metadata: {
        username: (options?.data?.username) || email.split('@')[0],
        nickname: options?.data?.nickname || email.split('@')[0],
        signature: options?.data?.signature || 'AI时代，工程创新',
        phone: options?.data?.phone || '未设置',
        team: options?.data?.team || '未加入团队',
        admission_year: options?.data?.admission_year || new Date().toLocaleDateString(),
        avatar: options?.data?.avatar || '',
        course_permissions: options?.data?.course_permissions || ['Fab课程', 'AI应用基础'],
        comment_permission: options?.data?.comment_permission !== undefined ? options.data.comment_permission : true
      }
    };

    users[email] = { password, user: newUser };
    localStorage.setItem('sophigo_mock_users_db', JSON.stringify(users));

    this.currentUser = newUser;
    this.session = { user: newUser, access_token: 'mock-token-jwt' };
    localStorage.setItem('sophigo_mock_user', JSON.stringify(newUser));

    this._trigger('SIGNED_IN', this.session);
    return { data: { user: newUser, session: this.session }, error: null };
  }

  async signInWithPassword({ email, password }) {
    const users = JSON.parse(localStorage.getItem('sophigo_mock_users_db') || '{}');
    const record = users[email];
    if (!record || record.password !== password) {
      return { data: { user: null, session: null }, error: { message: '邮箱或密码不正确' } };
    }

    this.currentUser = record.user;
    this.session = { user: this.currentUser, access_token: 'mock-token-jwt' };
    localStorage.setItem('sophigo_mock_user', JSON.stringify(this.currentUser));

    this._trigger('SIGNED_IN', this.session);
    return { data: { user: this.currentUser, session: this.session }, error: null };
  }

  async signOut() {
    this.currentUser = null;
    this.session = null;
    localStorage.removeItem('sophigo_mock_user');
    this._trigger('SIGNED_OUT', null);
    return { error: null };
  }

  async getSession() {
    return { data: { session: this.session }, error: null };
  }

  async getUser() {
    return { data: { user: this.currentUser }, error: null };
  }

  async updateUser({ data }) {
    if (!this.currentUser) {
      return { data: { user: null }, error: { message: '用户未登录' } };
    }

    this.currentUser.user_metadata = {
      ...this.currentUser.user_metadata,
      ...data
    };

    localStorage.setItem('sophigo_mock_user', JSON.stringify(this.currentUser));
    
    const users = JSON.parse(localStorage.getItem('sophigo_mock_users_db') || '{}');
    if (users[this.currentUser.email]) {
      users[this.currentUser.email].user = this.currentUser;
      localStorage.setItem('sophigo_mock_users_db', JSON.stringify(users));
    }

    this._trigger('USER_UPDATED', this.session);
    return { data: { user: this.currentUser }, error: null };
  }

  onAuthStateChange(callback) {
    this.listeners.add(callback);
    callback(this.currentUser ? 'SIGNED_IN' : 'SIGNED_OUT', this.session);
    return {
      data: {
        subscription: {
          unsubscribe: () => {
            this.listeners.delete(callback);
          }
        }
      }
    };
  }

  _trigger(event, session) {
    for (const callback of this.listeners) {
      try {
        callback(event, session);
      } catch (e) {
        console.error(e);
      }
    }
  }
}

class MockSupabaseClient {
  constructor() {
    this.auth = new MockAuth();
  }
}

export const supabase = isMock ? new MockSupabaseClient() : createClient(supabaseUrl, supabaseAnonKey);
export const isSupabaseMocked = isMock;
