import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Only POST allowed" });
  }

  const { brand, name, email, topic, message } = req.body;

  if (!name || !email || !topic || !message) {
    return res.status(400).json({ error: "Missing required fields." });
  }

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS, // Gmail App Password (16 karakter)
      },
    });

    await transporter.sendMail({
      from: `"Rovand Contact" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      subject: `New contact form: ${topic}`,
      html: `
        <h2 style="color:#fff; font-family:sans-serif">New Contact Form Submission</h2>
        <div style="background:#000; padding:20px; border-radius:12px; color:white">
          <p><strong>Brand:</strong> ${brand || "Not specified"}</p>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Topic:</strong> ${topic}</p>
          <p><strong>Message:</strong><br/>${message}</p>
        </div>
      `,
    });

    return res.json({ success: true });
  } catch (err) {
    console.error("MAIL ERROR:", err);
    return res.status(500).json({ error: "Email sending failed" });
  }
}
