import { EmailTemplate } from "@/components/emailTemplateResend/email-template";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  try {
    const body = await request.json();
    const {startDate,endDate, adults, children, fullName ,phone,email } = body;
    const data = await resend.emails.send({
      from: `${fullName}<brett@restaurant-dazaytouna.com>`,
      to: "salahfatimi16@gmail.com",
      subject: `Book in Caravanserai`,
      react: EmailTemplate({
        FullName: fullName,
        Phone: phone,
        StartDate:startDate,
        EndDate:endDate,
        Adults:adults,
        Email:email,
        Children:children
      }),
    });

    return Response.json(data);
  } catch (error) {
    return Response.json({ error });
  }
}
