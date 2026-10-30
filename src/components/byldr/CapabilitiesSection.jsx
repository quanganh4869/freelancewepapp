import React, { useState } from 'react';
import { Layout, Server, Database, Rocket, Check, ArrowRight } from 'lucide-react';

export const CapabilitiesSection = () => {
  const [activeTab, setActiveTab] = useState(0);

  const capabilities = [
    {
      id: 'frontend',
      title: 'Design & Front-end',
      tagline: 'Giao diện mượt mà, chuẩn xác từng pixel',
      icon: Layout,
      color: '#00e7ff',
      skills: ['React 18 & TypeScript', 'Tailwind CSS & Modern CSS', 'Responsive Mobile-first', 'Vite & High-speed Bundling', 'Micro-interactions & Animations', 'Accessible Web Standards'],
      illustrationTitle: 'Trải nghiệm người dùng tương tác cao',
      illustrationDesc: 'Hiện thực giao diện split-screen thi thử IELTS và chuyển động phân cảnh điện ảnh của Lời Ru Của Ác Mộng.',
      image: '/images/projects/ielts-learning/reading-practice.jpg',
    },
    {
      id: 'backend',
      title: 'Backend & Web Applications',
      tagline: 'Xử lý logic nghiệp vụ tin cậy và bảo mật',
      icon: Server,
      color: '#2a6bff',
      skills: ['Spring Boot 3 & Java', 'Node.js & Express', 'RESTful API Architecture', 'JWT & Role-based Auth', 'Business Calculation Engines', 'System Data Validation'],
      illustrationTitle: 'Nghiệp vụ quản lý phòng trọ RentFlow',
      illustrationDesc: 'Tự động tính hóa đơn điện nước bậc thang, quyết toán tiền đặt cọc và phân quyền 3 vai trò rõ ràng.',
      image: '/images/projects/rentflow/meter-reading.png',
    },
    {
      id: 'database',
      title: 'Database & Integration',
      tagline: 'Cấu trúc dữ liệu tối ưu và tích hợp dịch vụ',
      icon: Database,
      color: '#8b3bff',
      skills: ['PostgreSQL 16 & Relational Modeling', 'Supabase Cloud Integration', 'Database Indexing & Queries', 'VietQR Payment Integration', 'Email Notification Services', 'REST / Webhook Connectors'],
      illustrationTitle: 'Hệ thống lưu trữ & Hóa đơn số',
      illustrationDesc: 'Cơ sở dữ liệu quan hệ lưu trữ lịch sử chỉ số công tơ, xuất hóa đơn minh bạch kèm mã QR ngân hàng.',
      image: '/images/projects/rentflow/invoice.png',
    },
    {
      id: 'deployment',
      title: 'Deployment & Quality',
      tagline: 'Triển khai đám mây, tối ưu tải trang dưới 1s',
      icon: Rocket,
      color: '#ff00e7',
      skills: ['Vercel Cloud Edge Hosting', 'Docker & Docker Compose', 'Performance Tuning (< 1s load)', 'SEO & Meta Tag Standards', 'Cross-browser Testing', 'Source Code Handover'],
      illustrationTitle: 'Hiệu năng cao & Bàn giao 100% mã nguồn',
      illustrationDesc: 'Website vận hành trên mạng lưới CDN toàn cầu, nén hình ảnh WebP tự động và bàn giao source code đầy đủ.',
      image: '/images/projects/loi-ru/overview.png',
    },
  ];

  const current = capabilities[activeTab];
  const Icon = current.icon;

  return (
    <section className="toolkit py-20 sm:py-28 border-b border-[rgba(180,170,255,0.14)]" id="toolkit">
      <div className="max-w-[1320px] mx-auto px-5 sm:px-8">
        
        {/* Section Head */}
        <div className="sec-head">
          <div>
            <h2>
              My <span className="grad">toolkit</span>
            </h2>
          </div>
        </div>

        {/* 4 Category Tabs & Interactive Preview Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          
          {/* Left Column (5 Cols): 4 Capability Selector Cards */}
          <div className="lg:col-span-5 space-y-3">
            {capabilities.map((cat, idx) => {
              const CatIcon = cat.icon;
              const isActive = activeTab === idx;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveTab(idx)}
                  className={`w-full text-left p-5 rounded-xl border transition-all duration-300 flex items-start gap-4 ${
                    isActive
                      ? 'bg-[#0f1120] border-[rgba(180,170,255,0.35)] shadow-[0_10px_30px_-5px_rgba(0,0,0,0.6)]'
                      : 'bg-[#0a0b14]/70 border-[rgba(180,170,255,0.1)] hover:border-[rgba(180,170,255,0.22)]'
                  }`}
                >
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0 border"
                    style={{
                      backgroundColor: isActive ? `${cat.color}15` : 'rgba(255,255,255,0.03)',
                      borderColor: isActive ? cat.color : 'rgba(255,255,255,0.1)',
                      color: isActive ? cat.color : '#a7a6c4',
                    }}
                  >
                    <CatIcon size={20} />
                  </div>

                  <div className="space-y-1">
                    <h3 className={`font-disp font-bold text-[16px] sm:text-[17px] ${isActive ? 'text-[#f3f2fb]' : 'text-[#a7a6c4]'}`}>
                      {cat.title}
                    </h3>
                    <p className="text-[13px] text-[#7c7ba0] leading-snug">
                      {cat.tagline}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right Column (7 Cols): Active Capability Detail Showcase */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl p-6 sm:p-8 bg-[#0a0b14] border border-[rgba(180,170,255,0.18)] shadow-2xl space-y-6">
              
              <div className="flex items-center justify-between border-b border-white/10 pb-5">
                <div className="space-y-1">
                  <span className="text-[11px] font-mono uppercase tracking-widest text-[#00e7ff]">
                    {current.title}
                  </span>
                  <h4 className="font-disp text-[22px] sm:text-[24px] font-bold text-[#f3f2fb]">
                    {current.illustrationTitle}
                  </h4>
                </div>
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: `${current.color}20`, color: current.color }}
                >
                  <Icon size={20} />
                </div>
              </div>

              <p className="text-[14px] text-[#a7a6c4] leading-relaxed">
                {current.illustrationDesc}
              </p>

              {/* Real Project Screenshot Snapshot */}
              <div className="overflow-hidden rounded-xl border border-white/10 aspect-[16/9] bg-black">
                <img
                  src={current.image}
                  alt={current.title}
                  className="w-full h-full object-cover object-top hover:scale-[1.02] transition-transform duration-500"
                />
              </div>

              {/* Skills List Badges */}
              <div className="pt-2">
                <span className="text-[11px] font-mono text-[#7c7ba0] uppercase tracking-wider block mb-3">
                  Công nghệ & kỹ thuật áp dụng:
                </span>
                <div className="grid grid-cols-2 gap-2">
                  {current.skills.map((skill) => (
                    <div
                      key={skill}
                      className="flex items-center gap-2 p-2 rounded-lg bg-white/[0.03] border border-white/[0.06] text-[12px] font-mono text-[#f3f2fb]"
                    >
                      <Check size={12} className="text-[#00e7ff] shrink-0" />
                      <span className="truncate">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default CapabilitiesSection;
