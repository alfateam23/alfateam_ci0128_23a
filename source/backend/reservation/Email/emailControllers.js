//adapted from https://github.com/callbackcoding/Send-email-using-Nodemailer.git

const expressAsyncHandler = require("express-async-handler");
const dotenv = require("dotenv");
const nodemailer = require("nodemailer");
dotenv.config();

let transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  secure: true, // true for 465, false for other ports
  auth: {
    user: 'asociacionjunquillal@gmail.com', // generated ethereal user
    pass: 'emuikpswbadauifo', // generated ethereal password
  },
});

const sendEmail = expressAsyncHandler(async (req, res) => {
  const { email, subject, message } = req.body;
  //console.log(email, subject, message);

  var mailOptions = {
    from: process.env.SMTP_MAIL,
    to: email,
    subject: subject,
    html: message, // modificado
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent successfully!");
      res.json("Email sent successfully!");
    }
  });
});

module.exports = { sendEmail };
