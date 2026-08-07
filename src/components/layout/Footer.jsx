import React from 'react';
import { ArrowUp } from 'lucide-react';

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-8 font-sans border-t border-brand-border bg-brand-background">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-medium text-brand-muted">
        <p>© {new Date().getFullYear()} Nguyễn Quang Anh · Việt Nam</p>

        <button
          onClick={scrollToTop}
          className="text-brand-primary dark:text-white font-semibold hover:underline flex items-center gap-1 transition-colors"
        >
          <span>Lên đầu trang</span>
          <ArrowUp size={13} />
        </button>
      </div>
    </footer>
  );
};
