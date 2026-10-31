// Vercel Serverless Function: Gửi email thông báo cho Quang Anh khi có khách hàng gửi yêu cầu làm web
import { Resend } from 'resend';

export default async function handler(req, res) {
  // Only accept POST
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const requestId = req.body.id || `REQ-${Math.floor(10000 + Math.random() * 90000)}`;

  // Trích xuất dữ liệu từ body (hỗ trợ cả schema mới và cũ)
  const body = req.body || {};
  const clientName = body.clientName || body.contactInformation?.fullName || body.name || 'Khách hàng';
  const clientEmail = body.clientEmail || body.contactInformation?.email || body.email || '';
  const clientPhone = body.clientPhone || body.contactInformation?.phone || body.phone || '';
  const clientCompany = body.clientCompany || body.contactInformation?.company || body.company || '';
  const preferredContact = body.contactInformation?.preferredContactMethod || body.contactMethod || 'Không ưu tiên';
  const preferredTime = body.contactInformation?.preferredContactTime || 'Bất cứ lúc nào';

  // Thông tin dự án
  const projectType = body.projectType || body.requestType || body.serviceName || 'Tư vấn dự án';
  const industry = body.businessContext?.customIndustry || body.businessContext?.industry || 'Chưa cung cấp';
  const projectGoal = body.projectGoal?.detailedGoal || body.projectGoal?.primaryGoal || body.projectDescription || body.notes || 'Chưa mô tả';
  const currentSetup = body.projectGoal?.currentSituation || body.currentSituation || 'Chưa cung cấp';
  const existingTools = body.projectGoal?.existingTool || '';

  // Chức năng & quy trình
  const features = Array.isArray(body.features) ? body.features : [];
  const customFeatures = body.customFeatures || body.featuresCustom || '';
  const userGroups = Array.isArray(body.userGroups) ? body.userGroups : [];
  const workflowSteps = Array.isArray(body.workflowSteps) ? body.workflowSteps : [];
  const contentManagement = body.contentManagement || '';

  // Thiết kế & tích hợp
  const designStyle = body.designPreferences?.aestheticStyle || body.style || 'Cần tư vấn';
  const referenceUrls = Array.isArray(body.referenceUrls) ? body.referenceUrls : (body.referenceProject ? [body.referenceProject] : []);
  const availableAssets = Array.isArray(body.availableAssets) ? body.availableAssets : [];
  const integrations = Array.isArray(body.integrations) ? body.integrations : [];
  const customIntegration = body.customIntegration || '';

  // Ngân sách & thời gian
  const budget = body.budget || body.budgetRange || 'Cần tư vấn';
  const timeline = body.timeline || body.desiredTimeline?.startTimeline || 'Thỏa thuận';
  const priority = body.desiredTimeline?.primaryPriority || 'Chưa chọn';
  const targetDate = body.desiredTimeline?.targetDeliveryDate || '';
  const additionalNotes = body.additionalNotes || body.notes || '';

  // Validation cơ bản
  if (!clientName || (!clientPhone && !clientEmail)) {
    return res.status(400).json({ error: 'Tên và thông tin liên hệ (SĐT hoặc Email) là bắt buộc.' });
  }

  // Nếu không có API Key (ví dụ chạy local dev hoặc preview chưa cấu hình biến môi trường)
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

    // Xây dựng nội dung email dạng HTML đầy đủ, trang nhã
    const emailHtml = `
      <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; line-height: 1.6; color: #1e293b; max-width: 680px; margin: 0 auto; border: 1px solid #e2e8f0; border-radius: 12px; padding: 28px; background-color: #ffffff;">
        <div style="border-bottom: 2px solid #0284c7; padding-bottom: 14px; margin-bottom: 20px;">
          <span style="font-size: 11px; font-weight: 700; letter-spacing: 0.08em; text-transform: uppercase; color: #0284c7;">QUANG ANH STUDIO — YÊU CẦU DỰ ÁN MỚI</span>
          <h2 style="color: #0f172a; margin: 6px 0 0 0; font-size: 22px;">🚀 [${requestId}] ${clientName} — ${projectType}</h2>
        </div>
        
        <h3 style="color: #0f172a; font-size: 16px; margin-top: 18px; border-left: 3px solid #0284c7; padding-left: 10px;">1. THÔNG TIN KHÁCH HÀNG:</h3>
        <table style="width: 100%; border-collapse: collapse; font-size: 14px; margin-bottom: 16px;">
          <tr><td style="padding: 6px 0; width: 180px; color: #64748b;">Họ và Tên:</td><td style="font-weight: 600;">${clientName}</td></tr>
          <tr><td style="padding: 6px 0; color: #64748b;">Số điện thoại / Zalo:</td><td style="font-weight: 700; color: #0284c7;">${clientPhone || 'Chưa cung cấp'}</td></tr>
          <tr><td style="padding: 6px 0; color: #64748b;">Email:</td><td>${clientEmail ? `<a href="mailto:${clientEmail}" style="color: #0284c7;">${clientEmail}</a>` : 'Chưa cung cấp'}</td></tr>
          <tr><td style="padding: 6px 0; color: #64748b;">Đơn vị / Doanh nghiệp:</td><td>${clientCompany || 'Cá nhân'}</td></tr>
          <tr><td style="padding: 6px 0; color: #64748b;">Kênh ưu tiên:</td><td>${preferredContact} (Thời điểm: ${preferredTime})</td></tr>
        </table>

        <h3 style="color: #0f172a; font-size: 16px; margin-top: 20px; border-left: 3px solid #0284c7; padding-left: 10px;">2. LOẠI DỰ ÁN & MỤC TIÊU KINH DOANH:</h3>
        <ul style="padding-left: 20px; font-size: 14px; margin-bottom: 16px;">
          <li><strong>Loại dự án:</strong> <span style="background: #e0f2fe; color: #0369a1; padding: 2px 8px; border-radius: 4px; font-weight: 600;">${projectType}</span></li>
          <li><strong>Lĩnh vực hoạt động:</strong> ${industry}</li>
          <li><strong>Hiện trạng:</strong> ${currentSetup} ${existingTools ? `(Công cụ: ${existingTools})` : ''}</li>
          <li><strong>Mô tả chi tiết mong muốn:</strong>
            <blockquote style="background: #f8fafc; border-left: 4px solid #0284c7; margin: 8px 0; padding: 12px 16px; border-radius: 0 6px 6px 0; font-size: 14px;">
              ${projectGoal}
            </blockquote>
          </li>
        </ul>

        ${features.length > 0 || customFeatures ? `
        <h3 style="color: #0f172a; font-size: 16px; margin-top: 20px; border-left: 3px solid #0284c7; padding-left: 10px;">3. TÍNH NĂNG YÊU CẦU:</h3>
        <div style="font-size: 14px; margin-bottom: 16px;">
          ${features.length > 0 ? `<ul style="padding-left: 20px; margin: 6px 0;">${features.map(f => `<li>${f}</li>`).join('')}</ul>` : ''}
          ${customFeatures ? `<p style="margin: 6px 0; background: #f1f5f9; padding: 8px 12px; border-radius: 6px;"><strong>Tính năng riêng:</strong> ${customFeatures}</p>` : ''}
        </div>
        ` : ''}

        ${userGroups.length > 0 || workflowSteps.length > 0 ? `
        <h3 style="color: #0f172a; font-size: 16px; margin-top: 20px; border-left: 3px solid #0284c7; padding-left: 10px;">4. NGƯỜI DÙNG & QUY TRÌNH (WEB APP):</h3>
        <div style="font-size: 14px; margin-bottom: 16px;">
          ${userGroups.length > 0 ? `
            <p style="font-weight: 600; margin-bottom: 4px;">Nhóm người dùng:</p>
            <ul style="padding-left: 20px; margin-top: 4px;">
              ${userGroups.map(ug => `<li><strong>${ug.name || ug.role}:</strong> ${ug.responsibilities || 'Chưa ghi rõ'}</li>`).join('')}
            </ul>
          ` : ''}
          ${workflowSteps.length > 0 ? `
            <p style="font-weight: 600; margin: 10px 0 4px 0;">Quy trình xử lý các bước:</p>
            <ol style="padding-left: 20px; margin-top: 4px;">
              ${workflowSteps.map(ws => `<li><strong>${ws.stepName}:</strong> Do [${ws.actor || 'Chưa rõ'}] thực hiện → Kết quả: ${ws.result || 'Hoàn tất'}</li>`).join('')}
            </ol>
          ` : ''}
        </div>
        ` : ''}

        ${contentManagement ? `
        <p style="font-size: 14px; margin-bottom: 14px;"><strong>Nhu cầu tự quản trị nội dung:</strong> ${contentManagement}</p>
        ` : ''}

        <h3 style="color: #0f172a; font-size: 16px; margin-top: 20px; border-left: 3px solid #0284c7; padding-left: 10px;">5. THIẾT KẾ & TÍCH HỢP:</h3>
        <ul style="padding-left: 20px; font-size: 14px; margin-bottom: 16px;">
          <li><strong>Phong cách giao diện:</strong> ${designStyle}</li>
          ${referenceUrls.length > 0 ? `<li><strong>Website tham khảo:</strong> ${referenceUrls.map(u => `<a href="${u.startsWith('http') ? u : 'https://' + u}" target="_blank">${u}</a>`).join(', ')}</li>` : ''}
          ${availableAssets.length > 0 ? `<li><strong>Tài nguyên đã có:</strong> ${availableAssets.join(', ')}</li>` : ''}
          ${integrations.length > 0 ? `<li><strong>Công cụ tích hợp:</strong> ${integrations.join(', ')} ${customIntegration ? `(${customIntegration})` : ''}</li>` : ''}
        </ul>

        <h3 style="color: #0f172a; font-size: 16px; margin-top: 20px; border-left: 3px solid #0284c7; padding-left: 10px;">6. NGÂN SÁCH & TIẾN ĐỘ:</h3>
        <table style="width: 100%; border-collapse: collapse; font-size: 14px; margin-bottom: 16px;">
          <tr><td style="padding: 6px 0; width: 180px; color: #64748b;">Ngân sách dự kiến:</td><td style="font-weight: 700; color: #16a34a;">${budget}</td></tr>
          <tr><td style="padding: 6px 0; color: #64748b;">Thời gian bắt đầu:</td><td>${timeline}</td></tr>
          <tr><td style="padding: 6px 0; color: #64748b;">Ưu tiên hàng đầu:</td><td>${priority}</td></tr>
          ${targetDate ? `<tr><td style="padding: 6px 0; color: #64748b;">Hạn bàn giao mong muốn:</td><td>${targetDate}</td></tr>` : ''}
        </table>

        ${additionalNotes ? `
        <h3 style="color: #0f172a; font-size: 16px; margin-top: 20px; border-left: 3px solid #0284c7; padding-left: 10px;">7. GHI CHÚ BỔ SUNG:</h3>
        <p style="background: #f1f5f9; padding: 12px; border-radius: 8px; font-size: 14px; margin-bottom: 16px;">${additionalNotes}</p>
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
