import React from 'react';
import { useAuth } from '../../context/AuthContext';
import { useRequests } from '../../context/RequestContext';
import { Shield, User, Globe, RotateCcw, Sparkles } from 'lucide-react';

export const RoleSwitcherBar = () => {
  const { activeRole, switchRole, currentUser } = useAuth();
  const { resetDemoData } = useRequests();

  return (
    <div className="bg-studio-900 border-b border-white/10 px-4 py-2 text-xs text-slate-400 sticky top-0 z-50 backdrop-blur-md bg-opacity-90">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <span className="flex items-center gap-1 font-mono text-[11px] text-brand-primary bg-brand-primary/10 border border-brand-primary/20 px-2 py-0.5 rounded">
            <Sparkles size={12} /> DEMO ROLE SWITCHER
          </span>
          <span className="hidden md:inline text-slate-500">|</span>
          <span className="hidden md:inline text-slate-400">
            Chuyển nhanh role để trải nghiệm các giao diện:
          </span>
        </div>

        <div className="flex items-center gap-1.5 flex-wrap">
          <button
            onClick={() => switchRole('GUEST')}
            className={`flex items-center gap-1.5 px-2.5 py-1 rounded transition-all ${
              activeRole === 'GUEST'
                ? 'bg-slate-800 text-white font-medium border border-slate-700 shadow-sm'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
            }`}
          >
            <Globe size={13} />
            <span>Khách (Landing Page)</span>
          </button>

          <button
            onClick={() => switchRole('USER')}
            className={`flex items-center gap-1.5 px-2.5 py-1 rounded transition-all ${
              activeRole === 'USER'
                ? 'bg-indigo-600/20 text-indigo-300 font-medium border border-indigo-500/30 shadow-sm'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
            }`}
          >
            <User size={13} />
            <span>User Portal ({currentUser?.role === 'USER' && currentUser?.name ? currentUser.name.split(' ')[0] : 'Client'})</span>
          </button>

          <button
            onClick={() => switchRole('ADMIN')}
            className={`flex items-center gap-1.5 px-2.5 py-1 rounded transition-all ${
              activeRole === 'ADMIN'
                ? 'bg-amber-500/20 text-amber-300 font-medium border border-amber-500/30 shadow-sm'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
            }`}
          >
            <Shield size={13} />
            <span>Admin Center (quanganhqb04@gmail.com)</span>
          </button>

          <button
            onClick={() => {
              if (confirm('Khôi phục dữ liệu mẫu ban đầu?')) {
                resetDemoData();
              }
            }}
            title="Reset dữ liệu mẫu ban đầu"
            className="p-1 text-slate-500 hover:text-slate-300 hover:bg-slate-800 rounded transition-colors ml-1"
          >
            <RotateCcw size={13} />
          </button>
        </div>
      </div>
    </div>
  );
};
