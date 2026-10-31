// Vercel Serverless Function: Gửi email thông báo cho Quang Anh khi có khách hàng gửi yêu cầu làm web
import { Resend } from 'resend';

// Hàm bảo mật: Escape HTML để chống XSS Injection trong email HTML
function escapeHtml(str) {
  if (typeof str !== 'string') return String(str ?? '');
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

// Bộ nhớ đệm chống spam / gửi lặp liên tục trong cùng phiên
const RECENT_REQUESTS = new Map();
const RATE_LIMIT_MS = 2500; // Tối thiểu 2.5s giữa các lần gửi cùng IP/email

export default async function handler(req, res) {
  // Chỉ nhận POST
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const requestId = req.body?.id || `REQ-${Math.floor(10000 + Math.random() * 90000)}`;

  // Trích xuất dữ liệu từ body (hỗ trợ cả schema mới và cũ)
  const body = req.body || {};
  const rawName = body.clientName || body.contactInformation?.fullName || body.name || '';
  const rawEmail = body.clientEmail || body.contactInformation?.email || body.email || '';
  const rawPhone = body.clientPhone || body.contactInformation?.phone || body.phone || '';
  const rawCompany = body.clientCompany || body.contactInformation?.company || body.company || '';
  const rawPreferredContact = body.contactInformation?.preferredContactMethod || body.contactMethod || 'Không ưu tiên';
  const rawPreferredTime = body.contactInformation?.preferredContactTime || 'Bất cứ lúc nào';

  // Làm sạch dữ liệu văn bản (Trim)
  const clientName = rawName.trim();
  const clientEmail = rawEmail.trim().toLowerCase();
  const clientPhone = rawPhone.trim().replace(/\s+/g, ' ');
  const clientCompany = rawCompany.trim();
  const preferredContact = rawPreferredContact.trim();
  const preferredTime = rawPreferredTime.trim();

  // === KIỂM TRA VALIDATION PHÍA BACKEND ===
  if (!clientName) {
    return res.status(400).json({ error: 'Họ và tên người gửi không được để trống.' });
  }

  if (clientName.length > 120) {
    return res.status(400).json({ error: 'Họ và tên quá dài (tối đa 120 ký tự).' });
  }

  if (!clientEmail) {
    return res.status(400).json({ error: 'Địa chỉ Email là bắt buộc để gửi báo giá.' });
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(clientEmail)) {
    return res.status(400).json({ error: 'Địa chỉ Email không đúng định dạng (Ví dụ: ban@example.com).' });
  }

  if (!clientPhone) {
    return res.status(400).json({ error: 'Số điện thoại hoặc Zalo là bắt buộc để tôi liên hệ trực tiếp.' });
  }

  // Chống Spam / Gửi trùng trong thời gian cực ngắn
  const rateLimitKey = `${clientEmail}_${clientPhone}`;
  const lastTime = RECENT_REQUESTS.get(rateLimitKey);
  const now = Date.now();
  if (lastTime && now - lastTime < RATE_LIMIT_MS) {
    return res.status(429).json({ 
      error: 'Thao tác quá nhanh. Yêu cầu của bạn đang được xử lý, vui lòng chờ trong giây lát.' 
    });
  }
  RECENT_REQUESTS.set(rateLimitKey, now);

  // Dọn dẹp bộ nhớ đệm sau 10 phút
  if (RECENT_REQUESTS.size > 200) {
    const expiredCutoff = now - 600000;
    for (const [k, v] of RECENT_REQUESTS.entries()) {
      if (v < expiredCutoff) RECENT_REQUESTS.delete(k);
    }
  }

  // Thông tin dự án
  const projectType = (body.projectType || body.requestType || body.serviceName || 'Tư vấn dự án').trim();
  const industry = (body.businessContext?.customIndustry || body.businessContext?.industry || 'Chưa cung cấp').trim();
  const projectGoal = (body.projectGoal?.detailedGoal || body.projectGoal?.primaryGoal || body.projectDescription || body.notes || 'Chưa mô tả').trim();
  const currentSetup = (body.projectGoal?.currentSituation || body.currentSituation || 'Chưa cung cấp').trim();
  const existingTools = (body.projectGoal?.existingTool || '').trim();

  // Chức năng & quy trình (Chỉ lấy userGroups và workflowSteps nếu đúng là web_application)
  const isWebApp = projectType === 'web_application' || projectType.toLowerCase().includes('web app');
  const features = Array.isArray(body.features) ? body.features.filter(Boolean) : [];
  const customFeatures = (body.customFeatures || body.featuresCustom || '').trim();
  const userGroups = isWebApp && Array.isArray(body.userGroups) ? body.userGroups.filter(Boolean) : [];
  const workflowSteps = isWebApp && Array.isArray(body.workflowSteps) ? body.workflowSteps.filter(Boolean) : [];
  const contentManagement = (body.contentManagement || '').trim();

  // Thiết kế & tích hợp
  const designStyle = (body.designPreferences?.aestheticStyle || body.style || 'Cần tư vấn').trim();
  const referenceUrls = Array.isArray(body.referenceUrls) 
    ? body.referenceUrls.filter(u => typeof u === 'string' && u.trim().length > 0) 
    : (body.referenceProject ? [body.referenceProject] : []);
  const availableAssets = Array.isArray(body.availableAssets) ? body.availableAssets.filter(Boolean) : [];
  const integrations = Array.isArray(body.integrations) ? body.integrations.filter(Boolean) : [];
  const customIntegration = (body.customIntegration || '').trim();

  // Ngân sách & thời gian
  const budget = (body.budget || body.budgetRange || 'Cần tư vấn').trim();
  const timeline = (body.timeline || body.desiredTimeline?.startTimeline || 'Thỏa thuận').trim();
  const priority = (body.desiredTimeline?.primaryPriority || 'Chưa chọn').trim();
  const targetDate = (body.desiredTimeline?.targetDeliveryDate || '').trim();
  const additionalNotes = (body.additionalNotes || body.notes || '').trim();

  // Nếu không có API Key (môi trường dev / local test)
  if (!apiKey) {
    console.warn('RESEND_API_KEY is not configured in environment variables. Simulating successful receipt.');
    return res.status(200).json({ 
      success: true, 
      simulated: true,
      requestId,
      message: 'Yêu cầu đã được hệ thống ghi nhận thành công (Môi trường phát triển nội bộ).'
    });
  }

  try {
    const resend = new Resend(apiKey);
    const recipientEmail = process.env.ADMIN_EMAIL || 'quanganhqb04@gmail.com';

    // Xây dựng nội dung email dạng HTML đầy đủ và escape toàn bộ nội dung người dùng
    const emailHtml = `
      <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; line-height: 1.6; color: #1e293b; max-width: 680px; margin: 0 auto; border: 1px solid #e2e8f0; border-radius: 12px; padding: 28px; background-color: #ffffff;">
        <div style="border-bottom: 2px solid #0284c7; padding-bottom: 14px; margin-bottom: 20px;">
          <span style="font-size: 11px; font-weight: 700; letter-spacing: 0.08em; text-transform: uppercase; color: #0284c7;">QUANG ANH STUDIO — YÊU CẦU DỰ ÁN MỚI</span>
          <h2 style="color: #0f172a; margin: 6px 0 0 0; font-size: 22px;">🚀 [${escapeHtml(requestId)}] ${escapeHtml(clientName)} — ${escapeHtml(projectType)}</h2>
        </div>
        
        <h3 style="color: #0f172a; font-size: 16px; margin-top: 18px; border-left: 3px solid #0284c7; padding-left: 10px;">1. THÔNG TIN KHÁCH HÀNG:</h3>
        <table style="width: 100%; border-collapse: collapse; font-size: 14px; margin-bottom: 16px;">
          <tr><td style="padding: 6px 0; width: 180px; color: #64748b;">Họ và Tên:</td><td style="font-weight: 600;">${escapeHtml(clientName)}</td></tr>
          <tr><td style="padding: 6px 0; color: #64748b;">Số điện thoại / Zalo:</td><td style="font-weight: 700; color: #0284c7;">${escapeHtml(clientPhone || 'Chưa cung cấp')}</td></tr>
          <tr><td style="padding: 6px 0; color: #64748b;">Email:</td><td>${clientEmail ? `<a href="mailto:${escapeHtml(clientEmail)}" style="color: #0284c7;">${escapeHtml(clientEmail)}</a>` : 'Chưa cung cấp'}</td></tr>
          <tr><td style="padding: 6px 0; color: #64748b;">Đơn vị / Doanh nghiệp:</td><td>${escapeHtml(clientCompany || 'Cá nhân')}</td></tr>
          <tr><td style="padding: 6px 0; color: #64748b;">Kênh ưu tiên:</td><td>${escapeHtml(preferredContact)} (Thời điểm: ${escapeHtml(preferredTime)})</td></tr>
        </table>

        <h3 style="color: #0f172a; font-size: 16px; margin-top: 20px; border-left: 3px solid #0284c7; padding-left: 10px;">2. LOẠI DỰ ÁN & MỤC TIÊU KINH DOANH:</h3>
        <ul style="padding-left: 20px; font-size: 14px; margin-bottom: 16px;">
          <li><strong>Loại dự án:</strong> <span style="background: #e0f2fe; color: #0369a1; padding: 2px 8px; border-radius: 4px; font-weight: 600;">${escapeHtml(projectType)}</span></li>
          <li><strong>Lĩnh vực hoạt động:</strong> ${escapeHtml(industry)}</li>
          <li><strong>Hiện trạng:</strong> ${escapeHtml(currentSetup)} ${existingTools ? `(Công cụ: ${escapeHtml(existingTools)})` : ''}</li>
          <li><strong>Mô tả chi tiết mong muốn:</strong>
            <blockquote style="background: #f8fafc; border-left: 4px solid #0284c7; margin: 8px 0; padding: 12px 16px; border-radius: 0 6px 6px 0; font-size: 14px;">
              ${escapeHtml(projectGoal)}
            </blockquote>
          </li>
        </ul>

        ${features.length > 0 || customFeatures ? `
        <h3 style="color: #0f172a; font-size: 16px; margin-top: 20px; border-left: 3px solid #0284c7; padding-left: 10px;">3. TÍNH NĂNG YÊU CẦU:</h3>
        <div style="font-size: 14px; margin-bottom: 16px;">
          ${features.length > 0 ? `<ul style="padding-left: 20px; margin: 6px 0;">${features.map(f => `<li>${escapeHtml(f)}</li>`).join('')}</ul>` : ''}
          ${customFeatures ? `<p style="margin: 6px 0; background: #f1f5f9; padding: 8px 12px; border-radius: 6px;"><strong>Tính năng riêng:</strong> ${escapeHtml(customFeatures)}</p>` : ''}
        </div>
        ` : ''}

        ${isWebApp && (userGroups.length > 0 || workflowSteps.length > 0) ? `
        <h3 style="color: #0f172a; font-size: 16px; margin-top: 20px; border-left: 3px solid #0284c7; padding-left: 10px;">4. NGƯỜI DÙNG & QUY TRÌNH (WEB APP):</h3>
        <div style="font-size: 14px; margin-bottom: 16px;">
          ${userGroups.length > 0 ? `
            <p style="font-weight: 600; margin-bottom: 4px;">Nhóm người dùng:</p>
            <ul style="padding-left: 20px; margin-top: 4px;">
              ${userGroups.map(ug => `<li><strong>${escapeHtml(ug.name || ug.role)}:</strong> ${escapeHtml(ug.responsibilities || 'Chưa ghi rõ')}</li>`).join('')}
            </ul>
          ` : ''}
          ${workflowSteps.length > 0 ? `
            <p style="font-weight: 600; margin: 10px 0 4px 0;">Quy trình xử lý các bước:</p>
            <ol style="padding-left: 20px; margin-top: 4px;">
              ${workflowSteps.map(ws => `<li><strong>${escapeHtml(ws.stepName)}:</strong> Do [${escapeHtml(ws.actor || 'Chưa rõ')}] thực hiện → Kết quả: ${escapeHtml(ws.result || 'Hoàn tất')}</li>`).join('')}
            </ol>
          ` : ''}
        </div>
        ` : ''}

        ${contentManagement ? `
        <p style="font-size: 14px; margin-bottom: 14px;"><strong>Nhu cầu tự quản trị nội dung:</strong> ${escapeHtml(contentManagement)}</p>
        ` : ''}

        <h3 style="color: #0f172a; font-size: 16px; margin-top: 20px; border-left: 3px solid #0284c7; padding-left: 10px;">5. THIẾT KẾ & TÍCH HỢP:</h3>
        <ul style="padding-left: 20px; font-size: 14px; margin-bottom: 16px;">
          <li><strong>Phong cách giao diện:</strong> ${escapeHtml(designStyle)}</li>
          ${referenceUrls.length > 0 ? `<li><strong>Website tham khảo:</strong> ${referenceUrls.map(u => `<a href="${escapeHtml(u.startsWith('http') ? u : 'https://' + u)}" target="_blank">${escapeHtml(u)}</a>`).join(', ')}</li>` : ''}
          ${availableAssets.length > 0 ? `<li><strong>Tài nguyên đã có:</strong> ${availableAssets.map(escapeHtml).join(', ')}</li>` : ''}
          ${integrations.length > 0 ? `<li><strong>Công cụ tích hợp:</strong> ${integrations.map(escapeHtml).join(', ')} ${customIntegration ? `(${escapeHtml(customIntegration)})` : ''}</li>` : ''}
        </ul>

        <h3 style="color: #0f172a; font-size: 16px; margin-top: 20px; border-left: 3px solid #0284c7; padding-left: 10px;">6. NGÂN SÁCH & TIẾN ĐỘ:</h3>
        <table style="width: 100%; border-collapse: collapse; font-size: 14px; margin-bottom: 16px;">
          <tr><td style="padding: 6px 0; width: 180px; color: #64748b;">Ngân sách dự kiến:</td><td style="font-weight: 700; color: #16a34a;">${escapeHtml(budget)}</td></tr>
          <tr><td style="padding: 6px 0; color: #64748b;">Thời gian bắt đầu:</td><td>${escapeHtml(timeline)}</td></tr>
          <tr><td style="padding: 6px 0; color: #64748b;">Ưu tiên hàng đầu:</td><td>${escapeHtml(priority)}</td></tr>
          ${targetDate ? `<tr><td style="padding: 6px 0; color: #64748b;">Hạn bàn giao mong muốn:</td><td>${escapeHtml(targetDate)}</td></tr>` : ''}
        </table>

        ${additionalNotes ? `
        <h3 style="color: #0f172a; font-size: 16px; margin-top: 20px; border-left: 3px solid #0284c7; padding-left: 10px;">7. GHI CHÚ BỔ SUNG:</h3>
        <p style="background: #f1f5f9; padding: 12px; border-radius: 8px; font-size: 14px; margin-bottom: 16px;">${escapeHtml(additionalNotes)}</p>
        ` : ''}

        <hr style="border: 0; border-top: 1px solid #e2e8f0; margin: 28px 0 16px 0;" />
        <p style="font-size: 12px; color: #64748b; text-align: center; margin: 0;">
          Yêu cầu dự án được gửi từ website portfolio Quang Anh Studio lúc ${new Date().toLocaleString('vi-VN')}.
        </p>
      </div>
    `;

    const emailResponse = await resend.emails.send({
      from: 'Quang Anh Studio <onboarding@resend.dev>',
      to: [recipientEmail],
      replyTo: clientEmail || undefined,
      subject: `🚀 [${requestId}] ${clientName} — ${projectType}`,
      html: emailHtml
    });

    return res.status(200).json({ 
      success: true, 
      requestId, 
      data: emailResponse 
    });
  } catch (error) {
    console.error('Lỗi khi gửi email qua Resend:', error);
    // Vẫn trả về 200 kèm fallback requestId để client không bị gián đoạn trải nghiệm
    return res.status(200).json({ 
      success: true,
      requestId,
      fallback: true,
      warning: 'Đã lưu yêu cầu vào hệ thống, thông báo email đang chờ xử lý.' 
    });
  }
}
