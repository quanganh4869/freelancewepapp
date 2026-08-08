import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  try {
    const { 
      name, email, phone, 
      type, features, style, 
      budget, timeline, 
      message, references, files 
    } = req.body;

    if (!name || !email) {
      return res.status(400).json({ error: 'Name and email are required' });
    }

    // Prepare attachments
    const attachments = files && files.length > 0 ? files.map(file => ({
      filename: file.name,
      content: file.content.split(',')[1] || file.content
    })) : [];

    // Format features array into string
    const featuresList = features && features.length > 0 ? features.map(f => `<li>${f}</li>`).join('') : '<li>Không có</li>';
    const referencesHtml = references ? `<a href="${references}" target="_blank">${references}</a>` : 'Không có';

    const { data, error } = await resend.emails.send({
      from: 'Quang Anh Studio <onboarding@resend.dev>', // Keep onboarding@resend.dev until verified
      to: ['quanganhqb04@gmail.com'],
      replyTo: email,
      subject: `🔥 [DỰ ÁN MỚI] Yêu cầu từ ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; border: 1px solid #eaeaea; border-radius: 8px; overflow: hidden;">
            <div style="background-color: #4A42B3; color: white; padding: 20px; text-align: center;">
                <h2 style="margin: 0; font-size: 24px;">Project Briefing</h2>
                <p style="margin: 5px 0 0 0; opacity: 0.8; font-size: 14px;">Bạn có một yêu cầu dự án mới vừa được gửi tới!</p>
            </div>
            
            <div style="padding: 30px;">
                <h3 style="color: #4A42B3; margin-top: 0; border-bottom: 2px solid #f0f0f0; padding-bottom: 5px;">1. Thông tin liên hệ</h3>
                <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
                    <tr><td style="padding: 5px 0; width: 150px; color: #666;"><strong>Họ và tên:</strong></td><td style="padding: 5px 0;">${name}</td></tr>
                    <tr><td style="padding: 5px 0; color: #666;"><strong>Email:</strong></td><td style="padding: 5px 0;"><a href="mailto:${email}">${email}</a></td></tr>
                    <tr><td style="padding: 5px 0; color: #666;"><strong>Số điện thoại:</strong></td><td style="padding: 5px 0;">${phone || 'Không có'}</td></tr>
                </table>

                <h3 style="color: #4A42B3; border-bottom: 2px solid #f0f0f0; padding-bottom: 5px;">2. Chân dung dự án</h3>
                <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
                    <tr><td style="padding: 5px 0; width: 150px; color: #666;"><strong>Loại website:</strong></td><td style="padding: 5px 0; font-weight: bold;">${type || 'Không chỉ định'}</td></tr>
                    <tr><td style="padding: 5px 0; color: #666;"><strong>Phong cách:</strong></td><td style="padding: 5px 0;">${style || 'Không chỉ định'}</td></tr>
                </table>
                <p style="margin: 5px 0 0 0; color: #666;"><strong>Các chức năng mong muốn:</strong></p>
                <ul style="margin: 5px 0 20px 0; padding-left: 20px;">
                    ${featuresList}
                </ul>

                <h3 style="color: #4A42B3; border-bottom: 2px solid #f0f0f0; padding-bottom: 5px;">3. Kế hoạch triển khai</h3>
                <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
                    <tr><td style="padding: 5px 0; width: 150px; color: #666;"><strong>Ngân sách:</strong></td><td style="padding: 5px 0; font-weight: bold; color: #d9534f;">${budget || 'Chưa rõ'}</td></tr>
                    <tr><td style="padding: 5px 0; color: #666;"><strong>Thời gian:</strong></td><td style="padding: 5px 0;">${timeline || 'Không chỉ định'}</td></tr>
                </table>

                <h3 style="color: #4A42B3; border-bottom: 2px solid #f0f0f0; padding-bottom: 5px;">4. Ghi chú & Ý tưởng</h3>
                <blockquote style="border-left: 4px solid #4A42B3; padding: 10px 15px; margin: 10px 0; background: #f9f9fc; font-style: italic; border-radius: 4px;">
                    ${message ? message.replace(/\\n/g, '<br>') : 'Không có lời nhắn'}
                </blockquote>
                
                <p style="margin: 20px 0 5px 0; color: #666;"><strong>Web tham khảo:</strong> ${referencesHtml}</p>
                <p style="margin: 5px 0; color: #666;"><strong>Tài liệu đính kèm:</strong> ${attachments.length > 0 ? `${attachments.length} file` : 'Không có'}</p>
            </div>
            
            <div style="background-color: #f9f9f9; padding: 15px; text-align: center; font-size: 12px; color: #888; border-top: 1px solid #eaeaea;">
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
