//adapted from https://github.com/callbackcoding/Send-email-using-Nodemailer.git

import { Template } from "./Email_Template.tsx";
import { render } from "@react-email/render";

const sendEmail = async (UserData, code) => {
  const baseUrl = "http://localhost:8000";

  const html = render(<Template UserData= {UserData} code = {code}/>, {
    pretty: true,
  });

  let dataSend = {
    email: UserData.mail,
    subject: "Reservación Junquillal",
    message: html,
  };

  try {
    let res = await fetch(`/backend/email/sendEmail`, {
      method: "POST",
      body: JSON.stringify(dataSend),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });

    if (res.status > 199 && res.status < 300) {
      res = "Correo Enviado!";
    }
    return res;
  } catch (error) {
    console.error("Error sending email:", error);
    return "Error enviando correo, verifique que lo haya digitado correctamente";
  }
};

export default sendEmail;
