const index = require("../../backend/users/users");

describe("Testing for Users data", () => {
  it("should return the correct rate for cedula, Email, EstadoActividad, PrimerApellido, SegundoApellido, SegundoNombre", async () => {
    await expect(index.getUser(116160776)).resolves.toStrictEqual([
      {
        Cedula: "116160776",
        Email: "jason.murillo@ucr.ac.cr",
        EstadoActividad: true,
        PrimerApellido: "Murillo",
        PrimerNombre: "Jason",
        SegundoApellido: "Madrigal",
        SegundoNombre: "",
      },
    ]);
  });

  it("should return the correct rate for cedula, Email, EstadoActividad, PrimerApellido, SegundoApellido, SegundoNombre", async () => {
    await expect(index.getUser(112790958)).resolves.toStrictEqual([
      {
        Cedula: "112790958",
        Email: "mpiedrav@proton.me",
        EstadoActividad: false,
        PrimerApellido: "Piedra",
        SegundoApellido: "Venegas",
        PrimerNombre: "Marco",
        SegundoNombre: "Antonio",
      },
    ]);
  });

  it("should return the correct rate for cedula, Email, EstadoActividad, PrimerApellido, SegundoApellido, SegundoNombre", async () => {
    await expect(index.getUser(116524176)).resolves.toStrictEqual([
      {
        Cedula: "116524176",
        Email: "joseandreypereira6@gmail.com",
        EstadoActividad: true,
        PrimerApellido: "Mendez",
        SegundoApellido: "Piedra",
        PrimerNombre: "Jose",
        SegundoNombre: "Pereira",
      },
    ]);
  });

  it("should return the correct rate for cedula, Email, EstadoActividad, PrimerApellido, SegundoApellido, SegundoNombre", async () => {
    await expect(index.getUser(117710188)).resolves.toStrictEqual([
      {
        Cedula: "117710188",
        Email: "asolmon88@gmail.com",
        EstadoActividad: true,
        PrimerApellido: "Solis",
        SegundoApellido: "Monge",
        PrimerNombre: "Ariel",
        SegundoNombre: "Gerardo",
      },
    ]);
  });

  it("should return the correct rate for cedula, Email, EstadoActividad, PrimerApellido, SegundoApellido, SegundoNombre", async () => {
    await expect(index.getUser(118040428)).resolves.toStrictEqual([
      {
        Cedula: "118040428",
        Email: "Testing@correo.com",
        EstadoActividad: true,
        PrimerApellido: "Testing",
        SegundoApellido: "Testing",
        PrimerNombre: "Testing",
        SegundoNombre: "Testing",
      },
    ]);
  });

  it("should return the correct rate for cedula, Email, EstadoActividad, PrimerApellido, SegundoApellido, SegundoNombre", async () => {
    await expect(index.getUser(1215484568)).resolves.toStrictEqual([
      {
        Cedula: "1215484568",
        Email: "promosmp360media@gmail.com",
        EstadoActividad: true,
        PrimerApellido: "Monge",
        SegundoApellido: null,
        PrimerNombre: "Sandra",
        SegundoNombre: null,
      },
    ]);
  });

  it("should return the correct rate for cedula, Email, EstadoActividad, PrimerApellido, SegundoApellido, SegundoNombre", async () => {
    await expect(index.getUser(1234567)).resolves.toStrictEqual([
      {
        Cedula: "1234567",
        Email: "luis.masisf@outlook.com",
        EstadoActividad: true,
        PrimerApellido: "Masis",
        SegundoApellido: null,
        PrimerNombre: "Luis",
        SegundoNombre: null,
      },
    ]);
  });

  it("should return the correct rate for cedula, Email, EstadoActividad, PrimerApellido, SegundoApellido, SegundoNombre", async () => {
    await expect(index.getUser(123456789)).resolves.toStrictEqual([
      {
        Cedula: "123456789",
        Email: "alexandra.martinez@ucr.ac.cr",
        EstadoActividad: false,
        PrimerApellido: "Martinez",
        SegundoApellido: "lol",
        PrimerNombre: "Alexandra",
        SegundoNombre: "",
      },
    ]);
  });

  it("should return the correct rate for cedula, Email, EstadoActividad, PrimerApellido, SegundoApellido, SegundoNombre", async () => {
    await expect(index.getUser(12456789)).resolves.toStrictEqual([
      {
        Cedula: "12456789",
        Email: "asolmon88@gmail.com",
        EstadoActividad: true,
        PrimerApellido: "Doe",
        SegundoApellido: null,
        PrimerNombre: "John",
        SegundoNombre: null,
      },
    ]);
  });

  it("should return the correct rate for cedula, Email, EstadoActividad, PrimerApellido, SegundoApellido, SegundoNombre", async () => {
    await expect(index.getUser(1284282)).resolves.toStrictEqual([
      {
        Cedula: "1284282",
        Email: "jasonencontrastes@gmail.com",
        EstadoActividad: true,
        PrimerApellido: "Madrigal",
        SegundoApellido: "Madrigal",
        PrimerNombre: "Maria",
        SegundoNombre: null,
      },
    ]);
  });
});
