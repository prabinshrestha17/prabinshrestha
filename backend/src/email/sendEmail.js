const nodemailer = require("nodemailer");
const { smtpHost, appPassword } = require("../api/dotenv");

const transportInfo = {
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: smtpHost,
    pass: appPassword,
  },
};

const sendEmail = async mailInfo => {
  try {
    const transporter = nodemailer.createTransport(transportInfo);
    const info = await transporter.sendMail(mailInfo);
    console.log("Email sent:", info.messageId);
  } catch (error) {
    console.error("Email sending error:", error.message);
  }
};

module.exports = { sendEmail };
