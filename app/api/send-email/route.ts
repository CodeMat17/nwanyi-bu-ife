// src/app/api/send-email/route.ts
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

interface EmailRequest {
  name: string;
  email: string;
  subject: string;
  message: string;
  to: string;
}

interface EmailResponse {
  success?: boolean;
  error?: string;
}

export async function POST(
  request: Request
): Promise<NextResponse<EmailResponse>> {
  try {
    const { name, email, subject, message, to }: EmailRequest =
      await request.json();

    // Validate required fields
    if (!name || !email || !subject || !message || !to) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    // Create transporter using MailerSend SMTP
    const transporter = nodemailer.createTransport({
      host: process.env.MAILERSEND_SMTP_HOST || "smtp.mailersend.net",
      port: parseInt(process.env.MAILERSEND_SMTP_PORT || "587"),
      secure: false, // true for 465, false for other ports
      auth: {
        user: process.env.MAILERSEND_SMTP_USER,
        pass: process.env.MAILERSEND_SMTP_PASSWORD,
      },
    });

    // Send mail
    const info = await transporter.sendMail({
      from: {
        name: `${name} (via Nwanyị bu ịfe Website)`,
        address:
          process.env.MAILERSEND_FROM_EMAIL || "no-reply@nwanyi-bu-ife.com.ng",
      },
      replyTo: {
        name,
        address: email,
      },
      to: to,
      subject: `[Festival Contact] ${subject}`,
      text: message,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #4a6baf;">New Festival Contact Form Submission</h2>
          <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px;">
            <p><strong style="color: #4a6baf;">Name:</strong> ${name}</p>
            <p><strong style="color: #4a6baf;">Email:</strong> <a href="mailto:${email}">${email}</a></p>
            <p><strong style="color: #4a6baf;">Subject:</strong> ${subject}</p>
            <p><strong style="color: #4a6baf;">Message:</strong></p>
            <p style="white-space: pre-wrap; background-color: white; padding: 10px; border-radius: 4px;">${message}</p>
          </div>
          <p style="margin-top: 20px; font-size: 12px; color: #6c757d;">
            This message was sent from the contact form on your festival website.
          </p>
        </div>
      `,
    });

    console.log("Message sent: %s", info.messageId);

    return NextResponse.json({ success: true });
  } catch (error: unknown) {
    console.error("Error sending email:", error);

    const errorMessage =
      error instanceof Error ? error.message : "Failed to send email";

    return NextResponse.json({ error: errorMessage }, { status: 500 });
  }
}
