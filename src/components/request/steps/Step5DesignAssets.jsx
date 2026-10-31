import React from 'react';
import ProjectStepLayout from '../ProjectStepLayout';
import FormField from '../FormField';
import FileUploadZone from '../FileUploadZone';

const STYLES = [
  {
    id: 'minimal',
    name: 'Tối giản, hiện đại',
    desc: 'Gọn gàng, nhiều khoảng trắng, dễ sử dụng, tập trung vào nội dung và tốc độ.'
  },
  {
    id: 'corporate',
    name: 'Chuyên nghiệp, doanh nghiệp',
    desc: 'Chỉn chu, rõ ràng, phân cấp bố cục vững chãi, tạo cảm giác tin cậy tuyệt đối.'
  },
  {
    id: 'creative',
    name: 'Sáng tạo, nổi bật',
    desc: 'Cá tính, có điểm nhấn hình ảnh tương tác và phong cách nhận diện riêng biệt.'
  },
  {
    id: 'friendly',
    name: 'Thân thiện, gần gũi',
    desc: 'Dễ tiếp cận, màu sắc tươi sáng, trải nghiệm mượt mà cho mọi lứa tuổi.'
  },
  {
    id: 'has_reference',
    name: 'Tôi có website mẫu muốn làm theo',
    desc: 'Đã có trang web cụ thể làm chuẩn về phong cách và cách trình bày.'
  },
  {
    id: 'consult',
    name: 'Tôi muốn được tư vấn phong cách phù hợp',
    desc: 'Chưa chọn được phong cách, muốn cùng thảo luận theo ngành nghề kinh doanh.'
  }
];

const ASSETS = [
  'Logo thương hiệu (file ảnh/vector)',
  'Hình ảnh sản phẩm hoặc dịch vụ thực tế',
  'Nội dung chữ giới thiệu công ty/dịch vụ',
  'Video giới thiệu',
  'Bài viết hoặc tài liệu chuyên môn',
  'Màu sắc và bộ nhận diện thương hiệu',
  'Chưa chuẩn bị gì (cần hỗ trợ xây dựng)',
  'Những tài liệu khác'
];

/**
 * BƯỚC 5 – PHONG CÁCH GIAO DIỆN VÀ TÀI NGUYÊN (Thiết kế & nội dung)
 */
export default function Step5DesignAssets({
  formData,
  onChangeField
}) {
  const designPreferences = formData.designPreferences || {};
  const referenceUrls = formData.referenceUrls || [''];
  const availableAssets = formData.availableAssets || [];
  const attachments = formData.attachments || [];

  const handleUpdateDesign = (field, value) => {
    onChangeField('designPreferences', {
      ...designPreferences,
      [field]: value
    });
  };

  const handleUrlChange = (index, value) => {
    const next = [...referenceUrls];
    next[index] = value;
    onChangeField('referenceUrls', next);
  };

  const handleAddUrl = () => {
    onChangeField('referenceUrls', [...referenceUrls, '']);
  };

  const handleRemoveUrl = (index) => {
    const next = referenceUrls.filter((_, i) => i !== index);
    onChangeField('referenceUrls', next.length > 0 ? next : ['']);
  };

  const toggleAsset = (asset) => {
    if (asset === 'Chưa chuẩn bị gì (cần hỗ trợ xây dựng)') {
      if (availableAssets.includes(asset)) {
        onChangeField('availableAssets', []);
      } else {
        onChangeField('availableAssets', [asset]);
      }
      return;
    }

    const withoutNone = availableAssets.filter((a) => a !== 'Chưa chuẩn bị gì (cần hỗ trợ xây dựng)');
    if (withoutNone.includes(asset)) {
      onChangeField('availableAssets', withoutNone.filter((a) => a !== asset));
    } else {
      onChangeField('availableAssets', [...withoutNone, asset]);
    }
  };

  return (
    <ProjectStepLayout
      title="Bạn muốn sản phẩm của mình trông như thế nào?"
      description="Bạn không cần biết thuật ngữ thiết kế phức tạp. Hãy chọn phong cách bạn cảm thấy phù hợp nhất với thương hiệu của mình hoặc chia sẻ website tham khảo."
    >
      {/* Phần A: Phong cách giao diện */}
      <div className="space-y-3">
        <label className="block text-[15px] font-semibold text-[#0f172a] dark:text-[#f8fafc]">
          A. Phong cách thiết kế mong muốn:
        </label>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
          {STYLES.map((st) => (
            <label
              key={st.id}
              className={`flex items-start gap-3 p-4 rounded-xl border text-sm cursor-pointer select-none transition ${
                designPreferences.aestheticStyle === st.name
                  ? 'border-[#0284c7] bg-[#f0f9ff] dark:bg-[#0369a1]/15 text-[#0369a1] dark:text-[#38bdf8] font-medium ring-1 ring-[#0284c7]'
                  : 'border-[#e2e8f0] dark:border-[#332b26] text-[#475569] dark:text-[#94a3b8] hover:bg-[#f8fafc] dark:hover:bg-[#181b2e]'
              }`}
            >
              <input
                type="radio"
                name="aestheticStyle"
                checked={designPreferences.aestheticStyle === st.name}
                onChange={() => handleUpdateDesign('aestheticStyle', st.name)}
                className="mt-1 text-[#0284c7] focus:ring-[#0284c7]"
              />
              <div>
                <p className="font-semibold text-[#0f172a] dark:text-[#f8fafc] mb-1">
                  {st.name}
                </p>
                <p className="text-xs text-[#64748b] dark:text-[#94a3b8] leading-relaxed">
                  {st.desc}
                </p>
              </div>
            </label>
          ))}
        </div>
      </div>

      {/* Phần B: Website tham khảo */}
      <div className="space-y-3 pt-3 border-t border-[#f1f5f9] dark:border-[#1e2030]">
        <div className="flex items-center justify-between">
          <label className="block text-[15px] font-semibold text-[#0f172a] dark:text-[#f8fafc]">
            B. Bạn có website nào muốn tham khảo không?
          </label>
          <button
            type="button"
            onClick={handleAddUrl}
            className="text-xs font-semibold text-[#0284c7] hover:underline"
          >
            + Thêm website khác
          </button>
        </div>

        <div className="space-y-2">
          {referenceUrls.map((url, idx) => (
            <div key={idx} className="flex items-center gap-2">
              <input
                type="url"
                value={url}
                onChange={(e) => handleUrlChange(idx, e.target.value)}
                placeholder="https://website-ban-tham-khao.com"
                className="flex-1 px-4 py-2.5 text-sm rounded-xl border border-[#cbd5e1] dark:border-[#332b26] bg-[#f8fafc] dark:bg-[#0f1120] text-[#0f172a] dark:text-[#f8fafc] focus:outline-none focus:ring-2 focus:ring-[#0284c7]"
              />
              {referenceUrls.length > 1 && (
                <button
                  type="button"
                  onClick={() => handleRemoveUrl(idx)}
                  className="p-2 text-[#ef4444] hover:bg-[#fef2f2] dark:hover:bg-[#7f1d1d]/20 rounded-lg"
                  title="Xóa link này"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              )}
            </div>
          ))}
        </div>

        <FormField label="Bạn thích điểm nào ở website tham khảo đó?">
          <textarea
            rows={2}
            value={designPreferences.referenceNotes || ''}
            onChange={(e) => handleUpdateDesign('referenceNotes', e.target.value)}
            placeholder="Ví dụ: Tôi thích cách bố trí danh mục sản phẩm gọn gàng, tông màu xanh dịu mắt và hiệu ứng cuộn trang mượt mà..."
            className="w-full px-4 py-2.5 text-sm rounded-xl border border-[#cbd5e1] dark:border-[#332b26] bg-[#f8fafc] dark:bg-[#0f1120] text-[#0f172a] dark:text-[#f8fafc] focus:outline-none focus:ring-2 focus:ring-[#0284c7]"
          />
        </FormField>
      </div>

      {/* Phần C: Tài nguyên hiện có */}
      <div className="space-y-3 pt-3 border-t border-[#f1f5f9] dark:border-[#1e2030]">
        <label className="block text-[15px] font-semibold text-[#0f172a] dark:text-[#f8fafc]">
          C. Bạn đã chuẩn bị những nội dung / tài nguyên nào?
        </label>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2">
          {ASSETS.map((asset) => (
            <label
              key={asset}
              className={`flex items-center gap-2 p-3 rounded-xl border text-xs sm:text-sm cursor-pointer select-none transition ${
                availableAssets.includes(asset)
                  ? 'border-[#0284c7] bg-[#f0f9ff] dark:bg-[#0369a1]/15 text-[#0369a1] dark:text-[#38bdf8] font-medium'
                  : 'border-[#e2e8f0] dark:border-[#332b26] text-[#475569] dark:text-[#94a3b8] hover:bg-[#f8fafc] dark:hover:bg-[#181b2e]'
              }`}
            >
              <input
                type="checkbox"
                checked={availableAssets.includes(asset)}
                onChange={() => toggleAsset(asset)}
                className="rounded text-[#0284c7] focus:ring-[#0284c7]"
              />
              <span className="leading-snug">{asset}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Phần D: Tải tài liệu đính kèm */}
      <div className="space-y-3 pt-3 border-t border-[#f1f5f9] dark:border-[#1e2030]">
        <label className="block text-[15px] font-semibold text-[#0f172a] dark:text-[#f8fafc]">
          D. Tải lên hình ảnh, tài liệu hoặc bản phác thảo (không bắt buộc):
        </label>
        <FileUploadZone
          files={attachments}
          onFilesChange={(newFiles) => onChangeField('attachments', newFiles)}
        />
      </div>
    </ProjectStepLayout>
  );
}
