import { EmailTemplate } from "@/components/email-template";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendEmail(title) {
  try {
    const data = await resend.emails.send({
      from: "Acme <onboarding@resend.dev>",
      to: ["gonzaloorsi@gmail.com"],
      subject: title,
      react: EmailTemplate({ firstName: "Gon" }),
    });

    return Response.json(data);
  } catch (error) {
    return console.error(error);
  }
}
