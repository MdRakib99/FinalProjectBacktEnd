const nodemailer = require("nodemailer");

const emailUtility = async (emailTo, emailText, emailSubject) => {
  const transporter = nodemailer.createTransport({
    host: "mail.teamrabbil.com",
    port: 25,
    secure: false,
    auth: {
      // TODO: replace `user` and `pass` values from <https://forwardemail.net>
      user: "info@teamrabbil.com",
      pass: "~sR4[bhaC[Qs",
    },
    tls: {
      rejectUnauthorized: false,
    },
  });

  let mailOption = {
    from: "Inventory Management <info@teamrabbil.com>",
    to: emailTo,
    subject: emailSubject,
    text: emailText,
  };

  return await transporter.sendMail(mailOption);
};

module.exports = emailUtility;
