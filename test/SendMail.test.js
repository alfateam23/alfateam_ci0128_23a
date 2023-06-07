import sendEmail from "./sendEmail";

// para verificar si se envía correctamente el correo electrónico

describe("sendEmail", () => {
  test("Envía correctamente el correo electrónico", async () => {
    const UserData = {
      mail: "jason@gmail.com",
    };
    const code = "123456";

    const mockFetch = jest.fn().mockResolvedValue({
      status: 200,
    });
    global.fetch = mockFetch;

    await sendEmail(UserData, code);

    expect(mockFetch).toHaveBeenCalledWith("/backend/email/sendEmail", {
      method: "POST",
      body: JSON.stringify({
        email: UserData.mail,
        subject: "Reservación Junquillal",
        message: expect.any(String),
      }),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });
    expect(window.alert).toHaveBeenCalledWith("Send Successfully !");
  });
});


// Prueba unitaria para el manejo de errores

describe("sendEmail", () => {
  test("Maneja correctamente los errores al enviar el correo electrónico", async () => {
    const UserData = {
      mail: "jason@gmail.com",
    };
    const code = "123456";

    const mockFetch = jest.fn().mockRejectedValue(new Error("Network error"));
    global.fetch = mockFetch;

    console.error = jest.fn();

    await sendEmail(UserData, code);

    expect(mockFetch).toHaveBeenCalledWith("/backend/email/sendEmail", {
      method: "POST",
      body: JSON.stringify({
        email: UserData.mail,
        subject: "Reservación Junquillal",
        message: expect.any(String),
      }),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });
    expect(console.error).toHaveBeenCalledWith(
      "Error sending email:",
      expect.any(Error)
    );
  });
});


// prueba unitaria para para verificar la llamada correcta a la función fetch

describe("sendEmail", () => {
  test("Realiza la llamada a la función fetch con los parámetros correctos", async () => {
    const UserData = {
      mail: "jason@gmail.com",
    };
    const code = "123456";

    const mockFetch = jest.fn().mockResolvedValue({
      status: 200,
      statusText: "OK",
    });
    global.fetch = mockFetch;

    await sendEmail(UserData, code);

    expect(mockFetch).toHaveBeenCalledWith("/backend/email/sendEmail", {
      method: "POST",
      body: JSON.stringify({
        email: UserData.mail,
        subject: "Reservación Junquillal",
        message: expect.any(String),
      }),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });
  });
});

