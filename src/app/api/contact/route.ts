import { NextResponse } from 'next/server';
// @ts-ignore
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  if (req.method === 'POST') {
    try {
      const { name, email, message } = await req.json();

      // Ensure Environment Variables are set
      if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
        return NextResponse.json(
          { message: 'Server configuration error: Missing email credentials' },
          { status: 500 }
        );
      }

      // Create a transporter using Gmail SMTP
      const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS, // App Password, NOT actual gmail password
        },
      });

      const mailOptions = {
        from: process.env.EMAIL_USER,
        to: process.env.EMAIL_USER, // Sending it to yourself
        replyTo: email, // So you can hit "reply" directly to the user
        subject: `New Portfolio Message from ${name}`,
        text: `You have received a new message from your portfolio contact form.\n\nName: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
        html: `
          <h3>New Contact Message</h3>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Message:</strong></p>
          <p>${message.replace(/\n/g, '<br>')}</p>
        `,
      };

      await transporter.sendMail(mailOptions);
      
      return NextResponse.json({ message: 'Email sent successfully!' }, { status: 200 });
    } catch (error: any) {
      console.error('Email send error:', error);
      return NextResponse.json({ message: 'Failed to send email', error: error.message }, { status: 500 });
    }
  } else {
    return NextResponse.json({ message: 'Method Not Allowed' }, { status: 405 });
  }
}
