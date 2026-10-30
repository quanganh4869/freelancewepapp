// Vercel Serverless Function: Gửi email thông báo cho Quang Anh khi có khách hàng gửi yêu cầu làm web
import { Resend } from 'resend';

export default async function handler(req, res) {
  // Only accept POST
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.warn('RESEND_API_KEY is not configured in environment variables.');
    return res.status(503).json({ 
      error: 'Dịch vụ gửi email tự động chưa được cấu hình API Key trên máy chủ.' 
    });
  }

  try {
    const resend = new Resend(apiKey);
    const {
      clientName,
      clientEmail,
      clientPhone,
      clientCompany,
      projectName,
      projectType,
      projectDescription,
      budget,
      timeline,
      additionalNotes
    } = req.body;

    if (!clientName || (!clientPhone && !clientEmail)) {
      return res.status(400).json({ error: 'Tên và thông tin liên hệ (SĐT hoặc Email) là bắt buộc.' });
    }

    const recipientEmail = process.env.ADMIN_EMAIL || 'quanganhqb04@gmail.com';

    const emailResponse = await resend.emails.send({
      from: 'Quang Anh Studio <onboarding@resend.dev>',
      to: [recipientEmail],
      replyTo: clientEmail || undefined,
      subject: `🚀 [ĐƠN ĐẶT LÀM WEB] ${clientName} - ${projectType || 'Tư vấn website'}`,
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #1e293b; max-width: 620px; margin: 0 auto; border: 1px solid #e2e8f0; border-radius: 12px; padding: 24px; background-color: #ffffff;">
          <h2 style="color: #D05021; border-bottom: 2px solid #D05021; padding-bottom: 10px; margin-top: 0;">🚀 YÊU CẦU LÀM WEBSITE MỚI</h2>
          
          <h3 style="color: #0f172a; margin-top: 20px;">1. THÔNG TIN NGƯỜI ĐẠI DIỆN:</h3>
          <ul style="padding-left: 20px;">
            <li><strong>Họ và Tên:</strong> ${clientName || 'N/A'}</li>
            <li><strong>SĐT / Zalo:</strong> <span style="color: #D05021; font-weight: bold;">${clientPhone || 'Chưa cung cấp'}</span></li>
            <li><strong>Email:</strong> ${clientEmail ? `<a href="mailto:${clientEmail}">${clientEmail}</a>` : 'Chưa cung cấp'}</li>
            <li><strong>Đơn vị / Cá nhân:</strong> ${clientCompany || 'Cá nhân'}</li>
          </ul>

          <h3 style="color: #0f172a; margin-top: 20px;">2. CHI TIẾT YÊU CẦU LÀM WEB:</h3>
          <ul style="padding-left: 20px;">
            <li><strong>Gói website:</strong> <span style="color: #D05021; font-weight: bold;">${projectType}</span></li>
            <li><strong>Dự án:</strong> ${projectName || 'Website theo yêu cầu'}</li>
            <li><strong>Ngân sách dự kiến:</strong> <span style="color: #10b981; font-weight: bold;">${budget || 'Cần tư vấn'}</span></li>
            <li><strong>Thời gian mong muốn:</strong> ${timeline || 'Thỏa thuận'}</li>
            <li><strong>Mô tả chi tiết:</strong> <br/><blockquote style="background: #f8fafc; border-left: 4px solid #D05021; margin: 8px 0; padding: 10px 14px; font-style: italic;">${projectDescription}</blockquote></li>
          </ul>

          ${additionalNotes ? `
          <h3 style="color: #0f172a; margin-top: 20px;">3. GHI CHÚ BỔ SUNG:</h3>
          <p style="background: #f1f5f9; padding: 10px; border-radius: 8px;">${additionalNotes}</p>
          ` : ''}

          <hr style="border: 0; border-top: 1px solid #e2e8f0; margin: 24px 0 16px 0;" />
          <p style="font-size: 12px; color: #64748b; text-align: center;">Thư thông báo tự động từ hệ thống Quang Anh Studio.</p>
        </div>
      `
    });

    return res.status(200).json({ success: true, data: emailResponse });
  } catch (error) {
    console.error('Error sending email via Resend:', error);
    return res.status(500).json({ error: error.message || 'Lỗi gửi mail máy chủ' });
  }
}
