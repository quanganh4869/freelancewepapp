import React from 'react';
import { useTheme } from '../../context/ThemeContext';
import { ArrowUp } from 'lucide-react';

export const Footer = () => {
  const { isDark } = useTheme();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-10 font-sans border-t border-[#E6E4DD] dark:border-[#2A2A28]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-medium text-[#666663] dark:text-[#A1A19A]">
        <p>© {new Date().getFullYear()} Nguyễn Quang Anh · Việt Nam</p>

        <button
          onClick={scrollToTop}
          className="text-[#1A1A1A] dark:text-white font-semibold hover:underline flex items-center gap-1 transition-colors"
        >
          <span>Lên đầu trang</span>
          <ArrowUp size={13} />
        </button>
      </div>
    </footer>
  );
};
