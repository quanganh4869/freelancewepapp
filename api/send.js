import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  try {
    const { name, email, phone, budget, type, services, files, message } = req.body;

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
        <h2>Yêu cầu dự án mới từ form Liên hệ</h2>
        <p><strong>Họ và tên:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Số điện thoại:</strong> ${phone || 'Không có'}</p>
        <p><strong>Ngân sách dự kiến:</strong> ${budget || 'Không chỉ định'}</p>
        <p><strong>Loại website:</strong> ${type || 'Không chỉ định'}</p>
        <p><strong>Dịch vụ bổ sung:</strong> ${servicesList}</p>
        <p><strong>Chi tiết ý tưởng:</strong></p>
        <blockquote style="border-left: 4px solid #ccc; padding-left: 10px;">
          ${message ? message.replace(/\n/g, '<br>') : ''}
        </blockquote>
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
