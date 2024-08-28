import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  const { name, email, message } = await request.json();

  // Create the transporter with your email provider's SMTP server
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST, // Your email provider's SMTP server address
    port: Number(process.env.SMTP_PORT), // Typically 587 for TLS, 465 for SSL
    secure: process.env.SMTP_PORT === '465', // true for 465, false for other ports
    auth: {
      user: process.env.EMAIL_USER, // Your email address
      pass: process.env.EMAIL_PASS, // Your email password or app-specific password
    },
  });

  try {
    // Send the email
    await transporter.sendMail({
      from: 'noreply@spinncreative.co.uk', // Must be a verified email with your SMTP provider
      to: 'hello@spinncreative.co.uk', // receiver email address
      replyTo: email, // User's email as the reply-to address
      subject: 'New Contact Form Submission', // Subject line
      html: `
        <h3>Contact Form Submission</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    });

    return NextResponse.json({ message: 'Your message has been sent successfully.' }, { status: 200 });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json({ message: 'Your message has not been sent.' }, { status: 500 });
  }
}
