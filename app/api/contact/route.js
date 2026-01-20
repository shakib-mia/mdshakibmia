import nodemailer from "nodemailer";

export async function POST(request) {
  try {
    const data = await request.json();
    const { name, email, subject, message } = data;

    if (!name || !email || !subject || !message) {
      return new Response(
        JSON.stringify({ error: "All fields are required" }),
        { status: 400 },
      );
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // 1️⃣ Mail to YOU
    await transporter.sendMail({
      from: `"${name}" <${email}>`,
      to: process.env.EMAIL_USER,
      subject: subject || "New Contact Message from Portfolio",
      text: `
        New message from your portfolio:

        Name: ${name}
        Email: ${email}

        Message:
        ${message}
      `,
      html: `
        <div style="font-family: Arial, sans-serif; background-color: #f9fafb; padding: 24px;">
          <div style="max-width: 600px; margin: auto; background-color: #ffffff; border-radius: 8px; padding: 24px;">
            <h2>📩 New Portfolio Contact</h2>
            <p><strong>Message:</strong></p>
            <p style="white-space: pre-wrap;">${message}</p>
            <hr />
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
          </div>
        </div>
      `,
    });

    // 2️⃣ Auto-reply to SENDER
    await transporter.sendMail({
      from: `"Md. Shakib Mia" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: "Thanks for reaching out!",
      text: `
        Hi ${name},

        Thank you for contacting me through my portfolio.

        I've received your message and will get back to you as soon as possible.

        Best regards,
        Md. Shakib Mia
      `,
      html: `
        <div style="font-family: Arial, sans-serif; background-color: #f9fafb; padding: 24px;">
          <div style="max-width: 600px; margin: auto; background-color: #ffffff; border-radius: 8px; padding: 24px;">
            <h2 style="color:#111827;">Thank you for reaching out!</h2>
            <p style="color:#374151;">Hi ${name},</p>
            <p style="color:#374151;">
              Thank you for contacting me through my portfolio.
              I’ve received your message and will get back to you as soon as possible.
            </p>
            <p style="color:#374151;">
              Best regards,<br />
              <strong>Md. Shakib Mia</strong>
            </p>
          </div>
        </div>
      `,
    });

    return new Response(
      JSON.stringify({
        success: true,
        message: "Email sent and auto-reply delivered",
      }),
      { status: 200 },
    );
  } catch (err) {
    console.error(err);
    return new Response(JSON.stringify({ error: "Something went wrong" }), {
      status: 500,
    });
  }
}
