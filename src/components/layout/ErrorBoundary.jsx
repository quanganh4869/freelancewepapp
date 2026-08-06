import React from 'react';
import { AlertTriangle, RotateCcw } from 'lucide-react';

export class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error("ErrorBoundary caught an error:", error, errorInfo);
  }

  handleReset = () => {
    localStorage.clear();
    window.location.reload();
  };

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-studio-950 text-slate-200 flex items-center justify-center p-6 font-sans">
          <div className="max-w-md w-full p-8 rounded-2xl bg-studio-900 border border-rose-500/30 text-center space-y-6 shadow-2xl">
            <div className="w-16 h-16 rounded-full bg-rose-500/10 border border-rose-500/30 text-rose-400 flex items-center justify-center mx-auto">
              <AlertTriangle size={32} />
            </div>

            <div className="space-y-2">
              <h2 className="text-xl font-extrabold text-white">Đã xảy ra sự cố giao diện</h2>
              <p className="text-xs text-slate-400">
                Hệ thống gặp lỗi không mong muốn hoặc dữ liệu mẫu trong bộ nhớ đệm bị sai định dạng.
              </p>
            </div>

            {this.state.error?.message && (
              <div className="p-3 rounded-xl bg-studio-950 border border-white/5 font-mono text-[11px] text-rose-300 text-left overflow-x-auto">
                {this.state.error.message}
              </div>
            )}

            <button
              onClick={this.handleReset}
              className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-brand-primary hover:bg-brand-hover text-white text-xs font-bold shadow-glow-primary transition-all"
            >
              <RotateCcw size={16} />
              <span>Khôi phục dữ liệu ban đầu & Tải lại</span>
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
