
import { EmailTemplate } from "@/components/emailTemplateResend/email-template";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  try {
    const body = await request.json();
    const { fullName, email, tele, comment} = body;
    const data = await resend.emails.send({
      from: `${fullName}<brett@caravanserai-marrakech.com>`,
      to: "receptioncaravanserai@gmail.com",
      subject: 'The customer contacted us via the contact page.',
      react: EmailTemplate({
        fullName: fullName,
        comment: comment,
        email: email,
        phone: tele,
       
      }),
    });

    return Response.json(data);
  } catch (error) {
    return Response.json({ error });
  }
}
