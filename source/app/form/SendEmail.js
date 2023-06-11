//adapted from https://github.com/callbackcoding/Send-email-using-Nodemailer.git

import { Template } from "./Email_Template.tsx";
import { render } from "@react-email/render";

const sendEmail = async (UserData, code) => {
  const baseUrl = "http://localhost:8000";

  const html = render(<Template UserData= {UserData}/>, {
    pretty: true,
  });

  let dataSend = {
    email: UserData.mail,
    subject: "Reservación Junquillal",
    message: html,
  };

  try {
    const res = await fetch(`/backend/email/sendEmail`, {
      method: "POST",
      body: JSON.stringify(dataSend),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });

    if (res.status > 199 && res.status < 300) {
      alert("Send Successfully !");
    }
  } catch (error) {
    console.error("Error sending email:", error);
  }
};

export default sendEmail;
