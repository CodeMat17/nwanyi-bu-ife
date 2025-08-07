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

    // Debug log (remove in production)
    console.log(
      "Sending email with Resend API key:",
      process.env.RESEND_API_KEY ? "Exists" : "Missing"
    );

    const { error } = await resend.emails.send({
      from: "Nwanyị bụ ịfe <email@nwanyi-bu-ife.com.ng>",
      to: [to],
      replyTo: email, // Changed from reply_to to replyTo
      subject: `[Festival Contact] ${subject}`,
      react: ContactFormEmail({ name, email, subject, message }),
    });

    if (error) {
     console.error("Resend error:", error);
     return NextResponse.json({ error: error.message }, { status: 400 });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
   console.error("Server error:", error);
   return NextResponse.json(
     { error: "Internal server error" },
     { status: 500 }
   );
  }
}
