// Vercel Serverless Function: Gửi email thông báo cho Quang Anh khi có khách hàng gửi yêu cầu làm web
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
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
      designLink,
      attachedFileName,
      attachedFileData, // base64 string if file uploaded
      additionalNotes
    } = req.body;

    const attachments = [];
    if (attachedFileName && attachedFileData) {
      // Clean base64 content
      const base64Content = attachedFileData.includes(',')
        ? attachedFileData.split(',')[1]
        : attachedFileData;
      attachments.push({
        filename: attachedFileName,
        content: base64Content
      });
    }

    const emailResponse = await resend.emails.send({
      from: 'Quang Anh Freelancer <onboarding@resend.dev>',
      to: ['quanganhqb04@gmail.com'],
      subject: `🚀 [ĐƠN ĐẶT LÀM WEB] ${clientName} - ${projectType}`,
      attachments: attachments.length > 0 ? attachments : undefined,
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #1e293b; max-width: 620px; margin: 0 auto; border: 1px solid #e2e8f0; border-radius: 12px; padding: 24px; background-color: #ffffff;">
          <h2 style="color: #ea580c; border-bottom: 2px solid #ea580c; padding-bottom: 10px; margin-top: 0;">🚀 YÊU CẦU LÀM WEBSITE MỚI</h2>
          
          <h3 style="color: #0f172a; margin-top: 20px;">1. THÔNG TIN NGƯỜI ĐẠI DIỆN:</h3>
          <ul style="padding-left: 20px;">
            <li><strong>Họ và Tên:</strong> ${clientName || 'N/A'}</li>
            <li><strong>SĐT / Zalo:</strong> <span style="color: #ea580c; font-weight: bold;">${clientPhone || 'Chưa cung cấp'}</span></li>
            <li><strong>Email:</strong> <a href="mailto:${clientEmail}">${clientEmail || 'Chưa cung cấp'}</a></li>
            <li><strong>Đơn vị / Công ty:</strong> ${clientCompany || 'Cá nhân'}</li>
          </ul>

          <h3 style="color: #0f172a; margin-top: 20px;">2. CHI TIẾT YÊU CẦU LÀM WEB:</h3>
          <ul style="padding-left: 20px;">
            <li><strong>Loại website:</strong> <span style="color: #ea580c; font-weight: bold;">${projectType}</span></li>
            <li><strong>Tên dự án / Mục tiêu:</strong> ${projectName || 'Website theo yêu cầu'}</li>
            <li><strong>Ngân sách dự kiến:</strong> <span style="color: #10b981; font-weight: bold;">${budget}</span></li>
            <li><strong>Thời gian mong muốn:</strong> ${timeline}</li>
            <li><strong>Mô tả chi tiết:</strong> <br/><blockquote style="background: #f8fafc; border-left: 4px solid #ea580c; margin: 8px 0; padding: 10px 14px; font-style: italic;">${projectDescription}</blockquote></li>
          </ul>

          ${designLink || attachedFileName ? `
          <h3 style="color: #0f172a; margin-top: 20px;">3. FILE THIẾT KẾ / TÀI LIỆU KÈM THEO:</h3>
          <ul style="padding-left: 20px;">
            ${designLink ? `<li><strong>Link thiết kế (Figma/Drive/Drive):</strong> <a href="${designLink}" target="_blank" style="color: #2563eb; font-weight: bold;">${designLink}</a></li>` : ''}
            ${attachedFileName ? `<li><strong>File đính kèm:</strong> ${attachedFileName} (Đã đính kèm trong Email)</li>` : ''}
          </ul>
          ` : ''}

          ${additionalNotes ? `
          <h3 style="color: #0f172a; margin-top: 20px;">4. GHI CHÚ BỔ SUNG:</h3>
          <p style="background: #f1f5f9; padding: 10px; border-radius: 8px;">${additionalNotes}</p>
          ` : ''}

          <hr style="border: 0; border-top: 1px solid #e2e8f0; margin: 24px 0 16px 0;" />
          <p style="font-size: 12px; color: #64748b; text-align: center;">Thư thông báo tự động từ hệ thống Website Quang Anh Freelancer.</p>
        </div>
      `
    });

    return res.status(200).json({ success: true, data: emailResponse });
  } catch (error) {
    console.error('Error sending email:', error);
    return res.status(500).json({ error: error.message || 'Lỗi gửi mail' });
  }
}
