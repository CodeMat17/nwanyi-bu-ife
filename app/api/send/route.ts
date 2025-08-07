import { NextResponse } from "next/server";
import { Resend } from "resend";
import ContactFormEmail from "../../emails/ContactFormEmail";

const resend = new Resend(process.env.RESEND_API_KEY);

interface EmailRequest {
  name: string;
  email: string;
  subject: string;
  message: string;
  to: string;
}

export async function POST(request: Request) {
  try {
    const { name, email, subject, message, to }: EmailRequest =
      await request.json();

    const { error } = await resend.emails.send({
      from: "Nwanyị bụ ịfe <email@nwanyi-bu-ife.com.ng>",
      to: [to],
      replyTo: email, // Changed from reply_to to replyTo
      subject: `[Festival Contact] ${subject}`,
      react: ContactFormEmail({ name, email, subject, message }),
    });

    if (error) {
      throw new Error(error.message);
    }

    return NextResponse.json({ success: true });
  } catch (error: unknown) {
    const errorMessage =
      error instanceof Error ? error.message : "Failed to send email";

    console.error("Email sending error:", errorMessage);
    return NextResponse.json({ error: errorMessage }, { status: 500 });
  }
}
