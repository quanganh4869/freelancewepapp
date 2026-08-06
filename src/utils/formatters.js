export const formatStatusBadge = (status) => {
  switch (status) {
    case 'Pending':
      return {
        label: 'Đang Chờ Duyệt',
        labelEn: 'Pending',
        bg: 'bg-amber-500/10',
        text: 'text-amber-400',
        border: 'border-amber-500/20 shadow-glow-amber',
        dot: 'bg-amber-400'
      };
    case 'Reviewing':
      return {
        label: 'Đang Đánh Giá',
        labelEn: 'Reviewing',
        bg: 'bg-blue-500/10',
        text: 'text-blue-400',
        border: 'border-blue-500/20',
        dot: 'bg-blue-400'
      };
    case 'Contacted':
      return {
        label: 'Đã Liên Hệ',
        labelEn: 'Contacted',
        bg: 'bg-purple-500/10',
        text: 'text-purple-400',
        border: 'border-purple-500/20',
        dot: 'bg-purple-400'
      };
    case 'In Progress':
      return {
        label: 'Đang Thực Hiện',
        labelEn: 'In Progress',
        bg: 'bg-indigo-500/10',
        text: 'text-indigo-400',
        border: 'border-indigo-500/20 shadow-glow-primary',
        dot: 'bg-indigo-400 animate-pulse'
      };
    case 'Completed':
      return {
        label: 'Đã Hoàn Thành',
        labelEn: 'Completed',
        bg: 'bg-emerald-500/10',
        text: 'text-emerald-400',
        border: 'border-emerald-500/20 shadow-glow-emerald',
        dot: 'bg-emerald-400'
      };
    case 'Rejected':
      return {
        label: 'Đã Từ Chối',
        labelEn: 'Rejected',
        bg: 'bg-rose-500/10',
        text: 'text-rose-400',
        border: 'border-rose-500/20',
        dot: 'bg-rose-400'
      };
    default:
      return {
        label: status,
        labelEn: status,
        bg: 'bg-slate-500/10',
        text: 'text-slate-400',
        border: 'border-slate-500/20',
        dot: 'bg-slate-400'
      };
  }
};

export const formatDate = (dateString) => {
  if (!dateString) return 'N/A';
  const date = new Date(dateString);
  return new Intl.DateTimeFormat('vi-VN', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  }).format(date);
};
