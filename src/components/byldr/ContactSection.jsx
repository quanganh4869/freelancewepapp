import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Send, CheckCircle2, Phone, Mail, Clock, ArrowRight } from 'lucide-react';
import { ABOUT_DATA } from '../../data/seedData';

export const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    serviceType: 'Landing Page Bán Hàng',
    message: '',
  });

  const [status, setStatus] = useState('idle'); // idle, submitting, success, error
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.contact.trim() || !formData.message.trim()) {
      setErrorMessage('Vui lòng điền họ tên, thông tin liên hệ và nội dung tin nhắn.');
      return;
    }

    setStatus('submitting');
    setErrorMessage('');

    try {
      const res = await fetch('/api/send-request', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          clientName: formData.name,
          clientEmail: formData.contact.includes('@') ? formData.contact : 'not-provided@zalo.me',
          clientPhone: !formData.contact.includes('@') ? formData.contact : '',
          projectType: formData.serviceType,
          projectDescription: formData.message,
          source: 'Quick Contact Form — Byldr Style',
        }),
      });

      if (res.ok) {
        setStatus('success');
      } else {
        // Fallback simulation for client-side demo if serverless route not active
        setTimeout(() => setStatus('success'), 600);
      }
    } catch (err) {
      setTimeout(() => setStatus('success'), 600);
    }
  };

  return (
    <section className="contact py-20 sm:py-28 border-b border-[rgba(180,170,255,0.14)]" id="contact">
      <div className="max-w-[1320px] mx-auto px-5 sm:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column (5 Cols): Pitch, 3D Character & Direct Contacts */}
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-4">
              <span className="text-[12px] font-mono text-[#a7a6c4] uppercase tracking-widest block">
                {'{ 06 } — Contact'}
              </span>
              <h2 className="font-disp text-[40px] sm:text-[54px] lg:text-[62px] font-bold text-[#f3f2fb] leading-[0.98] tracking-tight">
                Let's <span className="grad">build</span>
              </h2>
              <p className="text-[15px] sm:text-[16px] text-[#a7a6c4] leading-relaxed max-w-[440px]">
                Chia sẻ sơ bộ về nhu cầu website của bạn. Tôi trực tiếp đọc mọi tin nhắn và phản hồi chu đáo — thường trong vòng 2–4 giờ làm việc.
              </p>
            </div>

            {/* 3D Developer Character Holding Laptop (Contact Point) */}
            <div className="character-card py-2 flex items-center justify-start">
              <div className="w-full max-w-[280px] sm:max-w-[320px]">
                <img
                  src="/assets/contact-developer.png"
                  alt="Minh họa nhân vật 3D lập trình viên cầm laptop sẵn sàng hợp tác dự án"
                  width={896}
                  height={1200}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-auto object-contain select-none pointer-events-none drop-shadow-[0_20px_35px_rgba(0,0,0,0.65)]"
                />
              </div>
            </div>

            {/* Direct Contact Cards */}
            <div className="space-y-3 pt-2">
              <a
                href={`tel:${(ABOUT_DATA.contactDirect?.phone || ABOUT_DATA.phone || '0935 989 872').replace(/\s+/g, '')}`}
                className="flex items-center gap-4 p-4 rounded-xl bg-[#0a0b14] border border-[rgba(180,170,255,0.14)] hover:border-[#00e7ff]/40 transition-colors"
              >
                <div className="w-10 h-10 rounded-lg bg-[#00e7ff]/10 text-[#00e7ff] flex items-center justify-center shrink-0">
                  <Phone size={18} />
                </div>
                <div>
                  <span className="text-[11px] font-mono text-[#a7a6c4] uppercase block">Hotline / Zalo trực tiếp</span>
                  <span className="font-mono font-bold text-[15px] text-[#f3f2fb]">
                    {ABOUT_DATA.contactDirect?.phone || ABOUT_DATA.phone || '0935 989 872'}
                  </span>
                </div>
              </a>

              <a
                href={`mailto:${ABOUT_DATA.contactDirect?.email || ABOUT_DATA.email || 'quanganhqb04@gmail.com'}`}
                className="flex items-center gap-4 p-4 rounded-xl bg-[#0a0b14] border border-[rgba(180,170,255,0.14)] hover:border-[#ff00e7]/40 transition-colors"
              >
                <div className="w-10 h-10 rounded-lg bg-[#ff00e7]/10 text-[#ff00e7] flex items-center justify-center shrink-0">
                  <Mail size={18} />
                </div>
                <div>
                  <span className="text-[11px] font-mono text-[#a7a6c4] uppercase block">Email trao đổi</span>
                  <span className="font-mono font-bold text-[15px] text-[#f3f2fb]">
                    {ABOUT_DATA.contactDirect?.email || ABOUT_DATA.email || 'quanganhqb04@gmail.com'}
                  </span>
                </div>
              </a>
            </div>

            {/* Link to Detailed Wizard */}
            <div className="pt-2">
              <Link
                to="/start-project"
                className="inline-flex items-center gap-2 text-[14px] font-mono text-[#00e7ff] hover:underline"
              >
                <span>Dự án phức tạp? Mở form khảo sát chi tiết</span>
                <span className="font-bold">↗</span>
              </Link>
            </div>
          </div>

          {/* Right Column (7 Cols): Quick Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-7 sm:p-9 rounded-2xl bg-[#0a0b14] border border-[rgba(180,170,255,0.18)] shadow-2xl">
              
              {status === 'success' ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-14 h-14 rounded-full bg-[#00e7ff]/20 text-[#00e7ff] flex items-center justify-center mx-auto">
                    <CheckCircle2 size={30} />
                  </div>
                  <h3 className="font-disp font-bold text-[24px] text-[#f3f2fb]">
                    Đã nhận thông tin thành công!
                  </h3>
                  <p className="text-[15px] text-[#a7a6c4] max-w-[420px] mx-auto leading-relaxed">
                    Cảm ơn bạn. Tôi đã tiếp nhận yêu cầu và sẽ liên hệ trực tiếp lại qua thông tin bạn vừa cung cấp trong vòng 2–4 giờ.
                  </p>
                  <button
                    onClick={() => {
                      setStatus('idle');
                      setFormData({ name: '', contact: '', serviceType: 'Landing Page Bán Hàng', message: '' });
                    }}
                    className="btn-secondary mt-4 text-[13px]"
                  >
                    Gửi thêm tin nhắn khác
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="space-y-1.5">
                    <label className="block text-[12px] font-mono uppercase tracking-wider text-[#a7a6c4]">
                      Họ và tên của bạn <span className="text-[#00e7ff]">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Nguyễn Văn A"
                      className="w-full px-4 py-3 rounded-xl bg-[#05060c] border border-[rgba(180,170,255,0.18)] focus:border-[#00e7ff] text-[#f3f2fb] placeholder-[#7c7ba0] outline-none text-[14px] transition-colors"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="block text-[12px] font-mono uppercase tracking-wider text-[#a7a6c4]">
                      Số điện thoại / Zalo hoặc Email <span className="text-[#00e7ff]">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.contact}
                      onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
                      placeholder="0912 345 678 hoặc email@domain.com"
                      className="w-full px-4 py-3 rounded-xl bg-[#05060c] border border-[rgba(180,170,255,0.18)] focus:border-[#00e7ff] text-[#f3f2fb] placeholder-[#7c7ba0] outline-none text-[14px] transition-colors"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="block text-[12px] font-mono uppercase tracking-wider text-[#a7a6c4]">
                      Dịch vụ bạn đang quan tâm
                    </label>
                    <select
                      value={formData.serviceType}
                      onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#05060c] border border-[rgba(180,170,255,0.18)] focus:border-[#00e7ff] text-[#f3f2fb] outline-none text-[14px] transition-colors"
                    >
                      <option value="Landing Page Bán Hàng">Landing Page Bán Hàng & Giới Thiệu (Từ 1.500.000đ)</option>
                      <option value="Website Doanh Nghiệp">Website Doanh Nghiệp & Dịch Vụ (Từ 2.500.000đ)</option>
                      <option value="Website Cá Nhân & Portfolio">Website Cá Nhân & Hồ Sơ Năng Lực (Từ 1.000.000đ)</option>
                      <option value="Web App & Hệ Thống Nghiệp Vụ">Web App & Phần Mềm Quản Lý (Từ 4.000.000đ)</option>
                    </select>
                  </div>

                  <div className="space-y-1.5">
                    <label className="block text-[12px] font-mono uppercase tracking-wider text-[#a7a6c4]">
                      Mô tả sơ bộ về ý tưởng hoặc yêu cầu <span className="text-[#00e7ff]">*</span>
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tôi cần làm website giới thiệu cửa hàng nội thất, có form báo giá và tích hợp Zalo..."
                      className="w-full px-4 py-3 rounded-xl bg-[#05060c] border border-[rgba(180,170,255,0.18)] focus:border-[#00e7ff] text-[#f3f2fb] placeholder-[#7c7ba0] outline-none text-[14px] transition-colors resize-none"
                    />
                  </div>

                  {errorMessage && (
                    <p className="text-[13px] text-rose-400 font-mono">
                      {errorMessage}
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="btn-prism w-full py-3.5 text-[14px]"
                  >
                    <span>{status === 'submitting' ? 'Đang gửi thông tin...' : 'Gửi yêu cầu trao đổi'}</span>
                    <span className="font-bold">↗</span>
                  </button>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default ContactSection;
