import { EmailTemplate } from "@/components/emailTemplateResend/email-template";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  try {
    const body = await request.json();
    const {startDate,endDate, adults, fullName ,phone,email,suites,showExtraPersonMessage } = body;
    const data = await resend.emails.send({
      from: `${fullName}<brett@caravanserai-marrakech.com>`,
      to: "receptioncaravanserai@gmail.com",
      subject: `Book Suites in Caravanserai`,
      react: EmailTemplate({
        fullName: fullName,
        phone: phone,
        startDate:startDate,
        endDate:endDate,
        adults:adults,
        email:email,
        showExtraPersonMessage:showExtraPersonMessage,
        suites:suites
      }),
    });

    return Response.json(data);
  } catch (error) {
    return Response.json({ error });
  }
}
