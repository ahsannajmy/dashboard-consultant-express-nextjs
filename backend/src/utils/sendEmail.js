const nodemailer = require("nodemailer");

const sendEmail = async (emailTarget, password) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_ADDRESS,
      pass: process.env.EMAIL_PASS,
    },
    debug: true,
  });

  const htmlContent = `
    <html>
      <head></head>
      <body style="padding: 20px">
        <h1 style="text-align: center; color: #171717">ConsultHub</h1>
        <h3>Your Credential Information in ConsultHub</h3>
        <ul>
          <li>Email : ${emailTarget}</li>
          <li>Password : ${password}</li>
        </ul>
        <span>Please immediately change your password</span>
      </body>
    </html>
  `;

  const mailConfig = {
    from: process.env.EMAIL_ADDRESS,
    to: emailTarget,
    subject: "ConsultHub (Your Credentials Account)",
    html: htmlContent,
  };

  transporter.sendMail(mailConfig, (error, info) => {
    if (error) {
      throw new Error(error.message);
    }
  });
};

module.exports = {
  sendEmail,
};
