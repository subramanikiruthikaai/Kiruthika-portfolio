// Create this file: src/app/api/contact/route.js
import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request) {
    try {
        const { name, email, collaboration, subject, message } = await request.json();

        // Create transporter (using Gmail as example)
        const transporter = nodemailer.createTransporter({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL_USER, // Your Gmail
                pass: process.env.EMAIL_PASS, // Your App Password
            },
        });

        // Email content
        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: 'kiruthikas2020ai@gmail.com',
            subject: `Portfolio Contact: ${subject}`,
            html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>From:</strong> ${name} (${email})</p>
        <p><strong>Collaboration Type:</strong> ${collaboration}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
        <p><strong>Submitted:</strong> ${new Date().toLocaleString()}</p>
      `,
        };

        // Send email
        await transporter.sendMail(mailOptions);

        return NextResponse.json({ success: true, message: 'Email sent successfully' });
    } catch (error) {
        console.error('Email error:', error);
        return NextResponse.json({ success: false, error: 'Failed to send email' }, { status: 500 });
    }
}

// Updated Contact component onFinish function for API route:
const onFinish = async (values) => {
    setIsSubmitting(true);

    try {
        const response = await fetch('/api/contact', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(values),
        });

        const result = await response.json();

        if (result.success) {
            message.success('Message sent successfully! I\'ll get back to you within 24-48 hours.');
            form.resetFields();
        } else {
            throw new Error(result.error);
        }
    } catch (error) {
        console.error('Error:', error);
        message.error('Failed to send message. Please try again or contact me directly via email.');
    } finally {
        setIsSubmitting(false);
    }
};