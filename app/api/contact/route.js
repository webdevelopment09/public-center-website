import nodemailer from "nodemailer";

export const runtime = "nodejs";

export async function POST(request) {
  try {
    const body = await request.json();

    const { name, phone, email, branch, service, message } = body;

    if (!name || !phone || !email || !branch || !message) {
      return Response.json(
        { success: false, message: "გთხოვთ შეავსოთ ყველა აუცილებელი ველი." },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_APP_PASSWORD,
      },
    });

    const emailHtml = `
      <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #111827;">
        <h2 style="color: #d62828;">ახალი შეტყობინება ვებსაიტიდან</h2>

        <p><strong>სახელი:</strong> ${name}</p>
        <p><strong>ტელეფონი:</strong> ${phone}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>სასურველი ფილიალი:</strong> ${branch}</p>
        <p><strong>სერვისი:</strong> ${service || "არ არის მითითებული"}</p>

        <hr style="margin: 20px 0;" />

        <p><strong>შეტყობინება:</strong></p>
        <p>${message}</p>
      </div>
    `;

    const emailText = `
ახალი შეტყობინება ვებსაიტიდან

სახელი: ${name}
ტელეფონი: ${phone}
Email: ${email}
სასურველი ფილიალი: ${branch}
სერვისი: ${service || "არ არის მითითებული"}

შეტყობინება:
${message}
    `;

    await transporter.sendMail({
      from: `"ვებსაიტის კონტაქტი" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_TO,
      replyTo: email,
      subject: `ახალი შეტყობინება ვებსაიტიდან — ${name}`,
      text: emailText,
      html: emailHtml,
    });

    return Response.json({
      success: true,
      message: "შეტყობინება წარმატებით გაიგზავნა.",
    });
  } catch (error) {
    console.error("Email sending error:", error);

    return Response.json(
      {
        success: false,
        message: "შეტყობინება ვერ გაიგზავნა. გთხოვთ სცადოთ თავიდან.",
      },
      { status: 500 }
    );
  }
}