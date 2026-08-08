import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  try {
    const { name, email, phone, budget, type, style, timeline, services, files, message } = req.body;

    if (!name || !email) {
      return res.status(400).json({ error: 'Name and email are required' });
    }

    // Prepare attachments
    const attachments = files && files.length > 0 ? files.map(file => ({
      filename: file.name,
      content: file.content.split(',')[1] || file.content
    })) : [];

    // Format services array into string
    const servicesList = services && services.length > 0 ? services.join(', ') : 'Không có';

    const { data, error } = await resend.emails.send({
      from: 'Acme <onboarding@resend.dev>', // Keep onboarding@resend.dev until custom domain is verified on Resend
      to: ['quanganhqb04@gmail.com'],
      replyTo: email,
      subject: `[Yêu cầu dự án] Từ ${name}`,
      html: `
        <div style="font-family: sans-serif; line-height: 1.6; color: #333; max-width: 600px;">
            <h2 style="color: #111; border-bottom: 2px solid #eee; padding-bottom: 10px;">Yêu cầu dự án mới từ form Liên hệ</h2>
            
            <h3 style="color: #666; margin-top: 20px;">Thông tin khách hàng:</h3>
            <p style="margin: 5px 0;"><strong>Họ và tên:</strong> ${name}</p>
            <p style="margin: 5px 0;"><strong>Email:</strong> ${email}</p>
            <p style="margin: 5px 0;"><strong>Số điện thoại / Zalo:</strong> ${phone || 'Không có'}</p>
            
            <h3 style="color: #666; margin-top: 20px;">Yêu cầu thiết kế chi tiết:</h3>
            <p style="margin: 5px 0;"><strong>Ngân sách dự kiến:</strong> ${budget || 'Không chỉ định'}</p>
            <p style="margin: 5px 0;"><strong>Loại website:</strong> ${type || 'Không chỉ định'}</p>
            <p style="margin: 5px 0;"><strong>Phong cách thiết kế:</strong> ${style || 'Không chỉ định'}</p>
            <p style="margin: 5px 0;"><strong>Tiến độ hoàn thành:</strong> ${timeline || 'Không chỉ định'}</p>
            <p style="margin: 5px 0;"><strong>Dịch vụ hỗ trợ thêm:</strong> ${servicesList}</p>
            
            <h3 style="color: #666; margin-top: 20px;">Thông điệp từ khách hàng:</h3>
            <blockquote style="border-left: 4px solid #000; padding-left: 15px; margin-left: 0; background: #f9f9f9; padding: 15px; font-style: italic;">
            ${message ? message.replace(/\n/g, '<br>') : 'Không có lời nhắn'}
            </blockquote>
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
