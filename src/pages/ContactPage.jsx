import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Phone, Mail, MessageSquare, AlertCircle } from 'lucide-react';
import { ABOUT_DATA } from '../data/seedData';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });
  const [submitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState({ type: null, message: '' });

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) {
      setStatus({
        type: 'error',
        message: 'Vui lòng cung cấp Họ tên và Số điện thoại hoặc Zalo để tôi liên hệ lại.'
      });
      return;
    }

    setSubmitting(true);
    setStatus({ type: null, message: '' });

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setStatus({
          type: 'success',
          message: 'Đã gửi lời nhắn thành công! Tôi sẽ phản hồi lại bạn qua Zalo hoặc Email trong vòng 2 – 4 giờ.'
        });
        setFormData({ name: '', phone: '', email: '', message: '' });
      } else {
        throw new Error('API offline');
      }
    } catch (err) {
      setStatus({
        type: 'fallback',
        message: 'Hệ thống gửi tự động hiện không khả dụng. Bạn có thể gọi điện hoặc nhắn trực tiếp qua Zalo với số điện thoại bên cạnh.'
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="py-12 sm:py-16 md:py-20 font-sans animate-page-in">
      
      {/* =========================================================================
          THANK YOU / LET'S TALK COVER HEADER
          Inspired by Reference Conclusion Page
      ========================================================================= */}
      <header className="space-y-4 pb-12 sm:pb-16 border-b border-[#DAD0C7] dark:border-[#332B26]">
        <span className="text-[11px] sm:text-[12px] font-semibold uppercase tracking-[0.08em] text-[#82766F] dark:text-[#9E938B] block font-mono">
          THANK YOU / CONTACT
        </span>
        <h1 className="text-[52px] sm:text-[76px] md:text-[104px] font-[800] tracking-[-0.04em] text-[#38251F] dark:text-[#EDE6DE] leading-[0.95] uppercase">
          LET'S TALK
        </h1>
        <p className="text-[17px] sm:text-[19px] text-[#82766F] dark:text-[#9E938B] max-w-[720px] leading-[1.65]">
          Cùng bắt đầu một dự án mới hoặc trao đổi về giải pháp website phù hợp với mục tiêu kinh doanh của bạn. Tôi luôn sẵn sàng lắng nghe và tư vấn trực tiếp 1-1.
        </p>
      </header>

      {/* Main 2-Column Content: Direct Channels on Left, Message Form on Right */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pt-12 sm:pt-16 pb-16 border-b border-[#DAD0C7] dark:border-[#332B26]">
        
        {/* Left Column (5 cols): Direct Info & Working Commitments */}
        <div className="lg:col-span-5 space-y-8">
          
          <div className="space-y-3">
            <span className="text-[12px] font-mono font-bold uppercase tracking-wider text-[#82766F] dark:text-[#9E938B] block">
              KÊNH LIÊN LẠC NHANH
            </span>
            <div className="space-y-4 text-[15px]">
              <div>
                <p className="text-[13px] text-[#82766F] dark:text-[#9E938B] mb-1">Hotline & Zalo (trực tiếp):</p>
                <a
                  href={`tel:${ABOUT_DATA.contactDirect.phone.replace(/\s+/g, '')}`}
                  className="text-[20px] font-bold text-[#38251F] dark:text-[#EDE6DE] hover:text-[#985B3D] underline font-mono"
                >
                  {ABOUT_DATA.contactDirect.phone}
                </a>
              </div>

              <div>
                <p className="text-[13px] text-[#82766F] dark:text-[#9E938B] mb-1">Email trao đổi:</p>
                <a
                  href={`mailto:${ABOUT_DATA.contactDirect.email}`}
                  className="text-[16px] font-bold text-[#38251F] dark:text-[#EDE6DE] hover:text-[#985B3D] underline"
                >
                  {ABOUT_DATA.contactDirect.email}
                </a>
              </div>

              <div>
                <p className="text-[13px] text-[#82766F] dark:text-[#9E938B] mb-1">Thời gian phản hồi:</p>
                <p className="font-semibold text-[#38251F] dark:text-[#EDE6DE]">
                  {ABOUT_DATA.contactDirect.responseHours}
                </p>
              </div>
            </div>
          </div>

          <div className="p-6 bg-[#FAF8F4] dark:bg-[#221D1A] border border-[#DAD0C7] dark:border-[#332B26] rounded-[2px] space-y-3">
            <span className="text-[12px] font-mono font-bold uppercase tracking-wider text-[#38251F] dark:text-[#EDE6DE] block">
              CAM KẾT LÀM VIỆC
            </span>
            <p className="text-[14px] text-[#82766F] dark:text-[#9E938B] leading-[1.65]">
              Mọi thông tin bạn chia sẻ được bảo mật tuyệt đối. Sau khi nhận được yêu cầu, tôi sẽ phân tích tính khả thi và phản hồi kèm bảng dự toán chi phí rõ ràng.
            </p>
          </div>

        </div>

        {/* Right Column (7 cols): Direct Message Form */}
        <div className="lg:col-span-7">
          <div className="space-y-6">
            <span className="text-[12px] font-mono font-bold uppercase tracking-wider text-[#82766F] dark:text-[#9E938B] block">
              GỬI LỜI NHẮN TRỰC TIẾP
            </span>

            {status.message && (
              <div
                className={`p-4 rounded-[2px] text-sm leading-relaxed border ${
                  status.type === 'error'
                    ? 'bg-red-50 text-red-800 border-red-200'
                    : status.type === 'success'
                    ? 'bg-amber-50 text-amber-900 border-amber-200'
                    : 'bg-[#FAF8F4] text-[#38251F] border-[#DAD0C7]'
                }`}
              >
                {status.message}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="space-y-1.5">
                  <label className="text-[13px] font-semibold text-[#38251F] dark:text-[#EDE6DE] block">
                    Họ và tên của bạn *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Ví dụ: Nguyễn Văn A"
                    className="w-full px-4 py-3 bg-[#FAF8F4] dark:bg-[#221D1A] border border-[#DAD0C7] dark:border-[#332B26] text-[#38251F] dark:text-[#EDE6DE] text-sm rounded-[2px] focus:outline-none focus:border-[#38251F]"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-[13px] font-semibold text-[#38251F] dark:text-[#EDE6DE] block">
                    Số điện thoại / Zalo *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Ví dụ: 0912 345 678"
                    className="w-full px-4 py-3 bg-[#FAF8F4] dark:bg-[#221D1A] border border-[#DAD0C7] dark:border-[#332B26] text-[#38251F] dark:text-[#EDE6DE] text-sm rounded-[2px] focus:outline-none focus:border-[#38251F]"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-[13px] font-semibold text-[#38251F] dark:text-[#EDE6DE] block">
                  Địa chỉ Email (tùy chọn)
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="name@example.com"
                  className="w-full px-4 py-3 bg-[#FAF8F4] dark:bg-[#221D1A] border border-[#DAD0C7] dark:border-[#332B26] text-[#38251F] dark:text-[#EDE6DE] text-sm rounded-[2px] focus:outline-none focus:border-[#38251F]"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-[13px] font-semibold text-[#38251F] dark:text-[#EDE6DE] block">
                  Mô tả sơ bộ về website bạn muốn làm
                </label>
                <textarea
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Ví dụ: Tôi muốn làm trang giới thiệu cửa hàng nội thất, cần có mục giới thiệu sản phẩm và form liên hệ..."
                  className="w-full px-4 py-3 bg-[#FAF8F4] dark:bg-[#221D1A] border border-[#DAD0C7] dark:border-[#332B26] text-[#38251F] dark:text-[#EDE6DE] text-sm rounded-[2px] focus:outline-none focus:border-[#38251F]"
                />
              </div>

              <button
                type="submit"
                disabled={submitting}
                className="btn-primary w-full sm:w-auto py-3.5 px-8 text-[14px] font-semibold disabled:opacity-50"
              >
                <span>{submitting ? 'Đang gửi...' : 'Gửi lời nhắn trao đổi'}</span>
                <ArrowRight size={15} />
              </button>
            </form>
          </div>
        </div>

      </div>

      {/* Navigation Footer Actions */}
      <div className="pt-12 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
        <Link
          to="/"
          className="text-[14px] font-bold text-[#38251F] dark:text-[#EDE6DE] hover:text-[#985B3D] underline"
        >
          ← Quay lại trang bìa Portfolio
        </Link>

        <div className="flex items-center gap-4">
          <span className="text-[14px] text-[#82766F] dark:text-[#9E938B]">Hoặc mô tả chi tiết:</span>
          <Link
            to="/start-project"
            className="btn-primary py-2.5 px-5 text-[13px] font-semibold"
          >
            <span>Mở form khảo sát dự án</span>
            <ArrowRight size={13} />
          </Link>
        </div>
      </div>

    </div>
  );
}
