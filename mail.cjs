const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

console.log("EMAIL_USER:", process.env.EMAIL_USER);
console.log("EMAIL_PASS:", process.env.EMAIL_PASS ? "Loaded ✔️" : "❌ Missing");

app.post("/send-email", async (req, res) => {
  const { brand, name, email, topic, message } = req.body;

  if (!name || !email || !topic || !message) {
    return res.status(400).json({ error: "Missing required fields." });
  }

  try {
    // 🔥 Gmail SMTP mode (tasarım bozulmayı durdurur!)
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const htmlContent = `
    <div style="background:#000; padding:40px; font-family:Arial;">
      <div style="
        max-width:600px; margin:auto;
        background:#111; padding:30px;
        border-radius:16px; color:white;
        border:1px solid #222;
      ">

        <h2 style="font-size:24px; margin-bottom:10px;">
          New Contact Form Submission
        </h2>

        <p style="color:#aaa; margin-bottom:20px;">
          A new message was submitted through the Rovand website.
        </p>

        <p><strong>Brand:</strong> ${brand || "Not specified"}</p>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Topic:</strong> ${topic}</p>

        <div style="
          margin-top:20px; padding:15px;
          background:#000; border-radius:12px;
          border:1px solid #333;
        ">
          <strong>Message:</strong>
          <p style="color:#ccc; margin-top:10px; line-height:1.6;">
            ${message}
          </p>
        </div>

        <p style="margin-top:30px; text-align:center; color:#666; font-size:12px;">
          © ${new Date().getFullYear()} Rovand Limited
        </p>

      </div>
    </div>
    `;

    await transporter.sendMail({
      from: `"Rovand Contact" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      subject: `ROVAND LTD: ${topic}`,
      html: htmlContent,
    });

    res.json({ success: true });
  } catch (err) {
    console.error("MAIL ERROR:", err);
    res.status(500).json({ error: "Email failed." });
  }
});

app.listen(5001, () =>
  console.log("🚀 Backend running at http://localhost:5001")
);
