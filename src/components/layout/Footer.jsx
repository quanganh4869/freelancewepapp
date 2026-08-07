import React from 'react';
import { useTheme } from '../../context/ThemeContext';
import { ArrowUp, Github, Mail, Phone } from 'lucide-react';

export const Footer = ({ onOpenRequestModal }) => {
  const { isDark } = useTheme();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className={`border-t py-12 font-sans transition-colors ${
      isDark ? 'bg-studio-950 border-slate-800 text-white' : 'bg-slate-950 border-slate-800 text-white'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Footer Top Quick Info */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pb-8 border-b border-slate-800 text-xs font-medium">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="font-extrabold text-sm text-white">Nguyễn Quang Anh</span>
              <span className="text-[10px] text-brand-primary font-bold px-2 py-0.5 rounded bg-brand-primary/10 border border-brand-primary/20">web freelancer</span>
            </div>
            <p className="text-slate-400">Trực tiếp nhận làm website theo yêu cầu từ 1.000.000đ.</p>
          </div>

          <div className="space-y-1">
            <p className="text-slate-400 font-bold uppercase text-[11px] tracking-wider">Liên hệ trực tiếp:</p>
            <div className="flex items-center gap-3">
              <a href="https://zalo.me/0935989872" target="_blank" rel="noreferrer" className="text-brand-primary hover:underline font-bold">Zalo: 0935 989 872</a>
              <span>•</span>
              <a href="mailto:quanganhqb04@gmail.com" className="text-slate-200 hover:text-white hover:underline">quanganhqb04@gmail.com</a>
            </div>
          </div>

          <div className="md:text-right">
            <button
              onClick={() => onOpenRequestModal()}
              className="text-brand-primary font-bold hover:underline"
            >
              Gửi yêu cầu làm website →
            </button>
          </div>
        </div>

        {/* Footer Bottom Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400 font-medium">
          <p>© {new Date().getFullYear()} Nguyễn Quang Anh · Việt Nam</p>
          
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1 text-slate-300 hover:text-white transition-colors"
          >
            <span>Lên đầu trang</span>
            <ArrowUp size={14} className="text-brand-primary" />
          </button>
        </div>

      </div>
    </footer>
  );
};
