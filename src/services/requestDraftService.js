// Dịch vụ quản lý bản nháp yêu cầu dự án (Autosave & LocalStorage Cache)
// Lưu trữ an toàn, có kiểm tra thời hạn và debounce

const DRAFT_KEY = 'quanganh_project_draft_v2';
const DRAFT_EXPIRY_DAYS = 7;

export const requestDraftService = {
  // Lấy bản nháp đã lưu
  getDraft: () => {
    try {
      const raw = localStorage.getItem(DRAFT_KEY);
      if (!raw) return null;
      
      const parsed = JSON.parse(raw);
      if (!parsed || !parsed.savedAt) return null;

      // Kiểm tra thời hạn 7 ngày
      const savedTime = new Date(parsed.savedAt).getTime();
      const now = Date.now();
      const diffDays = (now - savedTime) / (1000 * 60 * 60 * 24);
      
      if (diffDays > DRAFT_EXPIRY_DAYS) {
        localStorage.removeItem(DRAFT_KEY);
        return null;
      }

      return parsed.data;
    } catch (e) {
      console.warn('Lỗi đọc bản nháp từ localStorage:', e);
      return null;
    }
  },

  // Lưu bản nháp
  saveDraft: (data) => {
    try {
      const payload = {
        savedAt: new Date().toISOString(),
        data
      };
      localStorage.setItem(DRAFT_KEY, JSON.stringify(payload));
      return { success: true, savedAt: payload.savedAt };
    } catch (e) {
      console.error('Lỗi lưu bản nháp vào localStorage:', e);
      return { success: false, error: e.message };
    }
  },

  // Xóa bản nháp sau khi gửi thành công hoặc khi người dùng bắt đầu lại
  clearDraft: () => {
    try {
      localStorage.removeItem(DRAFT_KEY);
      return true;
    } catch (e) {
      console.warn('Lỗi xóa bản nháp:', e);
      return false;
    }
  }
};
