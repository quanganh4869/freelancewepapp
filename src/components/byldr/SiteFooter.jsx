import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUp } from 'lucide-react';
import { ABOUT_DATA, INITIAL_PROJECTS } from '../../data/seedData';

export const SiteFooter = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer bg-[#05060c] border-t border-[rgba(180,170,255,0.14)] pt-16 sm:pt-20 pb-12">
      <div className="max-w-[1320px] mx-auto px-5 sm:px-8 space-y-12">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-14">
          
          {/* Brand & Mission Statement (5 Cols) */}
          <div className="md:col-span-5 space-y-4">
            <Link to="/" className="inline-flex items-center gap-2.5 text-[#f3f2fb]">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-[#00e7ff] via-[#2a6bff] to-[#ff00e7] flex items-center justify-center p-[1px]">
                <div className="w-full h-full bg-[#05060c] rounded-[7px] flex items-center justify-center font-disp font-bold text-sm text-[#f3f2fb]">
                  QA
                </div>
              </div>
              <span className="font-disp font-bold text-[18px] tracking-tight">
                Quang Anh Studio
              </span>
            </Link>

            <p className="text-[14px] text-[#a7a6c4] leading-relaxed max-w-[380px]">
              Thiết kế và phát triển website độc lập. Trực tiếp làm việc 1-1 cho cá nhân và doanh nghiệp, tối ưu tốc độ &lt; 1 giây, bàn giao 100% mã nguồn và nói không với template dựng sẵn.
            </p>

            <div className="pt-2 text-[12px] font-mono text-[#7c7ba0]">
              <span>Việt Nam · Nhận việc từ xa toàn quốc</span>
            </div>
          </div>

          {/* Nav Columns (7 Cols) */}
          <div className="md:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8">
            
            {/* Column 1: Navigate */}
            <div className="space-y-3">
              <h3 className="text-[12px] font-mono uppercase tracking-widest text-[#f3f2fb]">
                Navigate
              </h3>
              <ul className="space-y-2 text-[14px] text-[#a7a6c4]">
                <li><a href="/#work" className="hover:text-[#00e7ff] transition-colors">Dự án</a></li>
                <li><a href="/#toolkit" className="hover:text-[#00e7ff] transition-colors">Năng lực</a></li>
                <li><Link to="/services" className="hover:text-[#00e7ff] transition-colors">Dịch vụ</Link></li>
                <li><Link to="/about" className="hover:text-[#00e7ff] transition-colors">Giới thiệu</Link></li>
                <li><Link to="/pricing" className="hover:text-[#00e7ff] transition-colors">Bảng giá</Link></li>
                <li><a href="/#audit" className="hover:text-[#00e7ff] transition-colors">Bắt đầu</a></li>
              </ul>
            </div>

            {/* Column 2: Selected Sites */}
            <div className="space-y-3">
              <h3 className="text-[12px] font-mono uppercase tracking-widest text-[#f3f2fb]">
                Selected sites
              </h3>
              <ul className="space-y-2 text-[14px] text-[#a7a6c4]">
                {INITIAL_PROJECTS.map((p) => (
                  <li key={p.id}>
                    <Link to={`/projects/${p.slug}`} className="hover:text-[#00e7ff] transition-colors inline-flex items-center gap-1">
                      <span>{p.title}</span>
                      <span className="text-[11px] font-bold">↗</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Say Hi */}
            <div className="space-y-3">
              <h3 className="text-[12px] font-mono uppercase tracking-widest text-[#f3f2fb]">
                Say hi
              </h3>
              <ul className="space-y-2 text-[14px] text-[#a7a6c4]">
                <li>
                  <a
                    href={`tel:${(ABOUT_DATA.contactDirect?.phone || ABOUT_DATA.phone || '0935 989 872').replace(/\s+/g, '')}`}
                    className="hover:text-[#00e7ff] transition-colors inline-flex items-center gap-1"
                  >
                    <span>Hotline / Zalo</span>
                    <span className="text-[11px] font-bold">↗</span>
                  </a>
                </li>
                <li>
                  <a
                    href={`mailto:${ABOUT_DATA.contactDirect?.email || ABOUT_DATA.email || 'quanganhqb04@gmail.com'}`}
                    className="hover:text-[#00e7ff] transition-colors inline-flex items-center gap-1"
                  >
                    <span>Gửi Email</span>
                    <span className="text-[11px] font-bold">↗</span>
                  </a>
                </li>
              </ul>
            </div>

          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[rgba(180,170,255,0.12)] flex flex-col sm:flex-row items-center justify-between gap-4 text-[12px] font-mono text-[#7c7ba0]">
          <div>
            © {new Date().getFullYear()} Nguyễn Quang Anh · Quang Anh Studio. Built with clean code &amp; craft.
          </div>
        </div>

      </div>
    </footer>
  );
};

export default SiteFooter;
