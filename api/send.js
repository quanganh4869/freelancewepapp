import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  try {
    const { 
      name, email, phone, contactMethod,
      type, typeDetails,
      features, message, references,
      materials, style,
      budget, timeline, note,
      files 
    } = req.body;

    if (!name || !email) {
      return res.status(400).json({ error: 'Tên và email là bắt buộc' });
    }

    // Attachments
    const attachments = files && files.length > 0 ? files.map(file => ({
      filename: file.name,
      content: file.content.split(',')[1] || file.content
    })) : [];

    // Arrays format
    const featuresList = features && features.length > 0 ? features.map(f => `<li>${f}</li>`).join('') : '<li>Không có</li>';
    const materialsList = materials && materials.length > 0 ? materials.map(m => `<li>${m}</li>`).join('') : '<li>Không có</li>';
    const referencesHtml = references ? `<a href="${references.startsWith('http') ? references : 'https://' + references}" target="_blank" style="color: #4A42B3;">${references}</a>` : 'Không có';

    // Send email
    const { data, error } = await resend.emails.send({
      from: 'Quang Anh Studio <onboarding@resend.dev>', // keep this until domain is verified
      to: [process.env.ADMIN_EMAIL],
      replyTo: email,
      subject: `🔥 [DỰ ÁN MỚI] Yêu cầu từ ${name}`,
      html: `
        <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; line-height: 1.6; color: #333; max-width: 650px; margin: 0 auto; border: 1px solid #eaeaea; border-radius: 12px; overflow: hidden; background: #fff;">
            <div style="background-color: #4A42B3; color: white; padding: 25px; text-align: center;">
                <h2 style="margin: 0; font-size: 26px; font-weight: 700;">Project Briefing</h2>
                <p style="margin: 5px 0 0 0; opacity: 0.9; font-size: 14px;">Bạn có một yêu cầu dự án web mới vừa được gửi tới!</p>
            </div>
            
            <div style="padding: 30px;">
                <!-- Section 1 -->
                <h3 style="color: #4A42B3; margin-top: 0; border-bottom: 2px solid #f5f5f5; padding-bottom: 8px; font-size: 18px;">1. Thông tin liên hệ</h3>
                <table style="width: 100%; border-collapse: collapse; margin-bottom: 25px; font-size: 15px;">
                    <tr><td style="padding: 6px 0; width: 160px; color: #666;"><strong>Họ và tên:</strong></td><td style="padding: 6px 0;">${name}</td></tr>
                    <tr><td style="padding: 6px 0; color: #666;"><strong>Email:</strong></td><td style="padding: 6px 0;"><a href="mailto:${email}" style="color: #4A42B3;">${email}</a></td></tr>
                    <tr><td style="padding: 6px 0; color: #666;"><strong>Số điện thoại/Zalo:</strong></td><td style="padding: 6px 0;">${phone || 'Không có'}</td></tr>
                    <tr><td style="padding: 6px 0; color: #666;"><strong>Ưu tiên liên hệ qua:</strong></td><td style="padding: 6px 0; font-weight: bold; color: #1a1a1a;">${contactMethod || 'Không quan trọng'}</td></tr>
                </table>

                <!-- Section 2 -->
                <h3 style="color: #4A42B3; border-bottom: 2px solid #f5f5f5; padding-bottom: 8px; font-size: 18px;">2. Chân dung dự án</h3>
                <table style="width: 100%; border-collapse: collapse; margin-bottom: 25px; font-size: 15px;">
                    <tr><td style="padding: 6px 0; width: 160px; color: #666;"><strong>Loại website:</strong></td><td style="padding: 6px 0; font-weight: bold; color: #1a1a1a;">${type || 'Không chỉ định'}</td></tr>
                    ${typeDetails ? `<tr><td style="padding: 6px 0; color: #666;"><strong>Chi tiết phụ:</strong></td><td style="padding: 6px 0;">${typeDetails}</td></tr>` : ''}
                    <tr><td style="padding: 6px 0; color: #666;"><strong>Phong cách UI:</strong></td><td style="padding: 6px 0;">${style || 'Không chỉ định'}</td></tr>
                </table>
                
                <p style="margin: 5px 0 0 0; color: #666; font-size: 15px;"><strong>Các chức năng mong muốn:</strong></p>
                <ul style="margin: 8px 0 25px 0; padding-left: 20px; font-size: 15px;">
                    ${featuresList}
                </ul>

                <p style="margin: 5px 0 0 0; color: #666; font-size: 15px;"><strong>Đã chuẩn bị sẵn:</strong></p>
                <ul style="margin: 8px 0 25px 0; padding-left: 20px; font-size: 15px;">
                    ${materialsList}
                </ul>

                <!-- Section 3 -->
                <h3 style="color: #4A42B3; border-bottom: 2px solid #f5f5f5; padding-bottom: 8px; font-size: 18px;">3. Kế hoạch triển khai</h3>
                <table style="width: 100%; border-collapse: collapse; margin-bottom: 25px; font-size: 15px;">
                    <tr><td style="padding: 6px 0; width: 160px; color: #666;"><strong>Ngân sách:</strong></td><td style="padding: 6px 0; font-weight: bold; color: #d9534f;">${budget || 'Chưa rõ'}</td></tr>
                    <tr><td style="padding: 6px 0; color: #666;"><strong>Thời gian:</strong></td><td style="padding: 6px 0; font-weight: bold;">${timeline || 'Không chỉ định'}</td></tr>
                </table>

                <!-- Section 4 -->
                <h3 style="color: #4A42B3; border-bottom: 2px solid #f5f5f5; padding-bottom: 8px; font-size: 18px;">4. Ghi chú & Ý tưởng</h3>
                <p style="margin: 10px 0 5px 0; color: #666; font-size: 14px;"><strong>Mô tả cách hoạt động:</strong></p>
                <blockquote style="border-left: 4px solid #4A42B3; padding: 12px 15px; margin: 0 0 15px 0; background: #f9f9fc; font-style: italic; border-radius: 4px; font-size: 15px;">
                    ${message ? message.replace(/\n/g, '<br>') : 'Không có lời nhắn'}
                </blockquote>
                
                ${note ? `
                <p style="margin: 15px 0 5px 0; color: #666; font-size: 14px;"><strong>Ghi chú thêm:</strong></p>
                <blockquote style="border-left: 4px solid #f59e0b; padding: 12px 15px; margin: 0 0 15px 0; background: #fffbeb; font-style: italic; border-radius: 4px; font-size: 15px;">
                    ${note.replace(/\n/g, '<br>')}
                </blockquote>
                ` : ''}
                
                <p style="margin: 20px 0 8px 0; font-size: 15px; color: #666;"><strong>Web tham khảo:</strong> ${referencesHtml}</p>
                <p style="margin: 8px 0; font-size: 15px; color: #666;"><strong>Tài liệu đính kèm:</strong> <span style="font-weight: bold; color: #1a1a1a;">${attachments.length > 0 ? `${attachments.length} file` : 'Không có'}</span></p>
            </div>
            
            <div style="background-color: #f5f5f5; padding: 15px; text-align: center; font-size: 12px; color: #888; border-top: 1px solid #eaeaea;">
                Được gửi tự động từ hệ thống website Quang Anh Studio.
            </div>
        </div>
      `,
      attachments: attachments
    });

    if (error) {
      console.error('Resend API Error:', error);
      return res.status(400).json({ error });
    }

    return res.status(200).json({ success: true, data });
  } catch (error) {
    console.error('Server error:', error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
}
