import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request) {
    try {
        const { name, email, collaboration, subject, message } = await request.json();

        // Configure transporter using Gmail
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL_USER, // your Gmail
                pass: process.env.EMAIL_PASS, // your Gmail app password
            },
        });
        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: 'kiruthikas2020ai@gmail.com', // destination email
            subject: `Portfolio Contact: ${subject}`,
            html: `
  <div style="font-family: Arial, sans-serif; color: #333; line-height: 1.6;">
    <h2 style="color: #1890ff;">📩 New Portfolio Contact Form Submission</h2>
    <p><strong>From:</strong> ${name} (${email})</p>
    <p><strong>Collaboration Type:</strong> ${collaboration}</p>
    <p><strong>Subject:</strong> ${subject}</p>
    <hr style="border: none; border-top: 1px solid #ddd; margin: 16px 0;">
    <p><strong>Message:</strong></p>
    <p style="background: #f9f9f9; padding: 12px; border-radius: 6px;">${message.replace(/\n/g, '<br>')}</p>
    <hr style="border: none; border-top: 1px solid #ddd; margin: 16px 0;">
    <p style="font-size: 12px; color: #666;">
      Submitted on ${new Date().toLocaleString('en-US', {
                timeZone: 'America/New_York',
                hour: '2-digit',
                minute: '2-digit',
                second: '2-digit',
                hour12: true,
                weekday: 'short',
                month: 'short',
                day: 'numeric',
                year: 'numeric'
            })} (EST)
    </p>
  </div>
      `,
        };

        await transporter.sendMail(mailOptions);

        return NextResponse.json({ success: true, message: 'Email sent successfully!' });
    } catch (error) {
        console.error('Email sending failed:', error);
        return NextResponse.json(
            { success: false, error: 'Failed to send email' },
            { status: 500 }
        );
    }
}
