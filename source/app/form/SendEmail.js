//adapted from https://github.com/callbackcoding/Send-email-using-Nodemailer.git

import GeneratorEmailMessage from "./EmailAnswer_template";

const sendEmail = async (UserData) => {
  const baseUrl = "http://localhost:8000";

  let dataSend = {
    email: UserData.mail,
    subject: "Reservación Junquillal",
    message: GeneratorEmailMessage(UserData),
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
