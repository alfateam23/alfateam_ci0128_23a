//adapted from https://github.com/callbackcoding/Send-email-using-Nodemailer.git

const express = require("express");
const router = express.Router();

const { sendEmail } = require("./emailControllers");

router.post("/sendEmail", sendEmail);

module.exports = router;
