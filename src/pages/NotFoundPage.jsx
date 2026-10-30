import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export default function NotFoundPage() {
  return (
    <div className="py-24 md:py-36 max-w-xl">
      <span className="text-xs font-mono text-neutral-400 block mb-3">LỖI 404</span>
      <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-neutral-900 mb-4">
        Không tìm thấy trang
      </h1>
      <p className="text-neutral-600 text-base leading-relaxed mb-8">
        Trang bạn đang tìm kiếm không tồn tại hoặc đã được di chuyển sang địa chỉ khác. 
        Vui lòng quay lại trang chủ hoặc xem danh mục dự án và dịch vụ.
      </p>
      <div className="flex flex-wrap gap-4">
        <Link
          to="/"
          className="inline-flex items-center gap-2 px-5 py-2.5 bg-neutral-900 text-white text-sm font-medium hover:bg-neutral-800 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Về trang chủ</span>
        </Link>
        <Link
          to="/projects"
          className="px-5 py-2.5 border border-neutral-300 text-neutral-900 text-sm font-medium hover:bg-neutral-50 transition-colors"
        >
          Xem các dự án
        </Link>
      </div>
    </div>
  );
}
