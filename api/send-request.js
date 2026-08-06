// Vercel Serverless Function: Gửi email thông báo cho Quang Anh khi có khách hàng gửi yêu cầu
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  // Chỉ chấp nhận method POST
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const {
      clientName,
      clientEmail,
      clientPhone,
      clientCompany,
      businessSector,
      companyScale,
      projectName,
      projectType,
      projectStage,
      projectDescription,
      targetUsers,
      selectedFeatures,
      preferredTechnologies,
      budget,
      timeline,
      slaTier,
      needNda
    } = req.body;

    const featuresText = Array.isArray(selectedFeatures) ? selectedFeatures.join(', ') : 'Chưa chọn';

    const emailResponse = await resend.emails.send({
      from: 'Quang Anh Studio <onboarding@resend.dev>', // Email gửi mặc định của Resend (hoặc Email tên miền cá nhân)
      to: ['quanganhqb04@gmail.com'], // Email của bạn nhận thông báo
      subject: `🚀 [YÊU CẦU DỰ ÁN MỚI] ${clientName} - ${projectName}`,
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; border: 1px solid #e2e8f0; border-radius: 12px; padding: 24px;">
          <h2 style="color: #2848d8; border-bottom: 2px solid #2848d8; padding-bottom: 8px;">🚀 CÓ YÊU CẦU DỰ ÁN MỚI TỪ WEBSITE!</h2>
          
          <h3 style="color: #1e293b;">1. THÔNG TIN KHÁCH HÀNG:</h3>
          <ul>
            <li><strong>Họ và Tên:</strong> ${clientName || 'N/A'}</li>
            <li><strong>Email:</strong> <a href="mailto:${clientEmail}">${clientEmail}</a></li>
            <li><strong>Số điện thoại / Zalo:</strong> ${clientPhone || 'Chưa cung cấp'}</li>
            <li><strong>Công ty / Tổ chức:</strong> ${clientCompany || 'Cá nhân'} (${businessSector || 'Chưa chọn'})</li>
            <li><strong>Quy mô nhân sự:</strong> ${companyScale || 'N/A'}</li>
          </ul>

          <h3 style="color: #1e293b;">2. THÔNG TIN DỰ ÁN WEB APP:</h3>
          <ul>
            <li><strong>Tên dự án:</strong> <span style="color: #2848d8; font-weight: bold;">${projectName}</span></li>
            <li><strong>Loại hình phần mềm:</strong> ${projectType}</li>
            <li><strong>Giai đoạn chuẩn bị:</strong> ${projectStage || 'N/A'}</li>
            <li><strong>Mô tả bài toán:</strong> <em>${projectDescription}</em></li>
            <li><strong>Đối tượng sử dụng:</strong> ${targetUsers || 'N/A'}</li>
          </ul>

          <h3 style="color: #1e293b;">3. TÍNH NĂNG & CÔNG NGHỆ:</h3>
          <ul>
            <li><strong>Tính năng cốt lõi đã chọn:</strong> ${featuresText}</li>
            <li><strong>Công nghệ ưu tiên:</strong> ${preferredTechnologies || 'Để Studio tư vấn'}</li>
          </ul>

          <h3 style="color: #1e293b;">4. NGÂN SÁCH, KỲ HẠN & BẢO TRÌ:</h3>
          <ul>
            <li><strong>Ngân sách dự kiến:</strong> <span style="color: #059669; font-weight: bold;">${budget}</span></li>
            <li><strong>Thời gian bàn giao:</strong> ${timeline}</li>
            <li><strong>Gói bảo trì SLA:</strong> ${slaTier || 'Mặc định'}</li>
            <li><strong>Yêu cầu ký NDA:</strong> ${needNda || 'Không'}</li>
          </ul>

          <hr style="border: 0; border-top: 1px solid #e2e8f0; margin: 20px 0;" />
          <p style="font-size: 12px; color: #64748b; text-align: center;">Thư thông báo tự động từ hệ thống Website Quang Anh Studio.</p>
        </div>
      `
    });

    return res.status(200).json({ success: true, data: emailResponse });
  } catch (error) {
    console.error('Error sending email:', error);
    return res.status(500).json({ error: error.message || 'Lỗi gửi mail' });
  }
}
