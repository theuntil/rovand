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
        pass: process.env.EMAIL_PASS, // Gmail App Password
      },
    });

    const htmlContent = `
    <div style="background:#000; padding:50px 0; font-family:Arial, sans-serif;">
      <div style="max-width:620px; margin:auto; padding:35px;
        background:#0d0d0d; border-radius:18px; 
        border:1px solid #1b1b1b; color:#fff;">

        <!-- Logo Section -->
        <div style="text-align:center; margin-bottom:25px;">
          <img src="https://www.rovand.limited/rovand_logo.png"
               alt="Rovand Logo"
               style="width:120px; opacity:0.9;"/>
        </div>

        <h2 style="font-size:24px; margin-bottom:8px; font-weight:600;">
          📩 Rovand.Limited'den bir yeni bir form dolduruldu.
        </h2>

        <p style="color:#888; font-size:14px; margin-bottom:25px;">
          rovand.limited
        </p>

        <div style="font-size:15px; line-height:1.7;">
          <p><strong style="color:#bbb;">Konu olan Marka:</strong> ${brand || "Marka Yok"}</p>
          <p><strong style="color:#bbb;">Ad:</strong> ${name}</p>
          <p><strong style="color:#bbb;">Email:</strong> ${email}</p>
          <p><strong style="color:#bbb;">Konu:</strong> ${topic}</p>
        </div>

        <div style="margin-top:25px; padding:20px;
          background:#000; border-radius:12px; border:1px solid #222;">
          <strong style="color:#bbb;">Mesaj:</strong>
          <p style="color:#ccc; margin-top:10px; line-height:1.7; white-space:pre-line;">
            ${message}
          </p>
        </div>

        <p style="margin-top:35px; text-align:center; color:#555; font-size:12px;">
          © ${new Date().getFullYear()} Rovand Limited · Tüm hakları saklıdır. Yersennnnn
        </p>

      </div>
    </div>
    `;

    await transporter.sendMail({
      from: `"Rovand Contact" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      subject: `ROVAND LTD • ${topic}`,
      html: htmlContent,
    });

    return res.json({ success: true });
  } catch (err) {
    console.error("MAIL ERROR:", err);
    return res.status(500).json({ error: "Email sending failed" });
  }
}
