const index = require("../../backend/dashboard/Tarifas");

describe("Testing rates: shows data related to a fee", () => {
  it("should return the correct rate for 'Extranjero', 'Camping', 'Adulto', 'No exonerado'", async () => {
    await expect(
      index.getTarifa("Extranjero", "Camping", "Adulto", "No exonerado")
    ).resolves.toStrictEqual([
      {
        TipoProcedencia: "Extranjero",
        TipoVisita: "Camping",
        Estatus: "Adulto",
        CategoriaPago: "No exonerado",
        Moneda: "USD",
        Monto: 16.99,
      },
    ]);
  });

  it("should return the correct rate for 'Extranjero', 'Camping', 'Adulto 65 años o más', 'Exonerado'", async () => {
    await expect(
      index.getTarifa("Extranjero", "Camping", "Adulto 65 años o más", "Exonerado")
    ).resolves.toStrictEqual([
      {
        TipoProcedencia: "Extranjero",
        TipoVisita: "Camping",
        Estatus: "Adulto 65 años o más",
        CategoriaPago: "Exonerado",
        Moneda: "USD",
        Monto: 0.0,
      },
    ]);
  });

  it("should return the correct rate for 'Extranjero', 'Camping', 'Niño 0 a 6 años', 'Exonerado'", async () => {
    await expect(
      index.getTarifa("Extranjero", "Camping", "Niño 0 a 6 años", "Exonerado")
    ).resolves.toStrictEqual([
      {
        TipoProcedencia: "Extranjero",
        TipoVisita: "Camping",
        Estatus: "Niño 0 a 6 años",
        CategoriaPago: "Exonerado",
        Moneda: "USD",
        Monto: 0.0,
      },
    ]);
  });

  it("should return the correct rate for 'Extranjero', 'Camping', 'Niño 6 a 12 años', 'No exonerado'", async () => {
    await expect(
      index.getTarifa("Extranjero", "Camping", "Niño 6 a 12 años", "No exonerado")
    ).resolves.toStrictEqual([
      {
        TipoProcedencia: "Extranjero",
        TipoVisita: "Camping",
        Estatus: "Niño 6 a 12 años",
        CategoriaPago: "No exonerado",
        Moneda: "USD",
        Monto: 10.17,
      },
    ]);
  });

  it("should return the correct rate for 'Extranjero', 'Picnic', 'Adulto', 'No exonerado'", async () => {
    await expect(
      index.getTarifa("Extranjero", "Picnic", "Adulto", "No exonerado")
    ).resolves.toStrictEqual([
      {
        TipoProcedencia: "Extranjero",
        TipoVisita: "Picnic",
        Estatus: "Adulto",
        CategoriaPago: "No exonerado",
        Moneda: "USD",
        Monto: 13.56,
      },
    ]);
  });

  it("should return the correct rate for 'Extranjero', 'Picnic', 'Adulto 65 años o más', 'Exonerado'", async () => {
    await expect(
      index.getTarifa("Extranjero", "Picnic", "Adulto 65 años o más", "Exonerado")
    ).resolves.toStrictEqual([
      {
        TipoProcedencia: "Extranjero",
        TipoVisita: "Picnic",
        Estatus: "Adulto 65 años o más",
        CategoriaPago: "Exonerado",
        Moneda: "USD",
        Monto: 0.0,
      },
    ]);
  });

  it("should return the correct rate for 'Extranjero', 'Picnic', 'Niño 0 a 6 años', 'Exonerado'", async () => {
    await expect(
      index.getTarifa("Extranjero", "Picnic", "Niño 0 a 6 años", "Exonerado")
    ).resolves.toStrictEqual([
      {
        TipoProcedencia: "Extranjero",
        TipoVisita: "Picnic",
        Estatus: "Niño 0 a 6 años",
        CategoriaPago: "Exonerado",
        Moneda: "USD",
        Monto: 0.0,
      },
    ]);
  });

  it("should return the correct rate for 'Extranjero', 'Picnic', 'Niño 6 a 12 años', 'No exonerado'", async () => {
    await expect(
      index.getTarifa("Extranjero", "Picnic", "Niño 6 a 12 años", "No exonerado")
    ).resolves.toStrictEqual([
      {
        TipoProcedencia: "Extranjero",
        TipoVisita: "Picnic",
        Estatus: "Niño 6 a 12 años",
        CategoriaPago: "No exonerado",
        Moneda: "USD",
        Monto: 5.65,
      },
    ]);
  });

  it("should return the correct rate for 'Nacional', 'Camping', 'Adulto', 'No exonerado'", async () => {
    await expect(
      index.getTarifa("Nacional", "Camping", "Adulto", "No exonerado")
    ).resolves.toStrictEqual([
      {
        TipoProcedencia: "Nacional",
        TipoVisita: "Camping",
        Estatus: "Adulto",
        CategoriaPago: "No exonerado",
        Moneda: "CRC",
        Monto: 4520.0,
      },
    ]);
  });

  it("should return the correct rate for 'Nacional', 'Camping', 'Adulto 65 años o más', 'Exonerado'", async () => {
    await expect(
      index.getTarifa("Nacional", "Camping", "Adulto 65 años o más", "Exonerado")
    ).resolves.toStrictEqual([
      {
        TipoProcedencia: "Nacional",
        TipoVisita: "Camping",
        Estatus: "Adulto 65 años o más",
        CategoriaPago: "Exonerado",
        Moneda: "CRC",
        Monto: 0.0,
      },
    ]);
  });

  it("should return the correct rate for 'Nacional', 'Camping', 'Niño 0 a 6 años', 'Exonerado'", async () => {
    await expect(
      index.getTarifa("Nacional", "Camping", "Niño 0 a 6 años", "Exonerado")
    ).resolves.toStrictEqual([
      {
        TipoProcedencia: "Nacional",
        TipoVisita: "Camping",
        Estatus: "Niño 0 a 6 años",
        CategoriaPago: "Exonerado",
        Moneda: "CRC",
        Monto: 0.0,
      },
    ]);
  });

  it("should return the correct rate for 'Nacional', 'Camping', 'Niño 6 a 12 años', 'No exonerado'", async () => {
    await expect(
      index.getTarifa("Nacional", "Camping", "Niño 6 a 12 años", "No exonerado")
    ).resolves.toStrictEqual([
      {
        TipoProcedencia: "Nacional",
        TipoVisita: "Camping",
        Estatus: "Niño 6 a 12 años",
        CategoriaPago: "No exonerado",
        Moneda: "CRC",
        Monto: 3390.0,
      },
    ]);
  });

  it("should return the correct rate for 'Nacional', 'Picnic', 'Adulto', 'No exonerado'", async () => {
    await expect(
      index.getTarifa("Nacional", "Picnic", "Adulto", "No exonerado")
    ).resolves.toStrictEqual([
      {
        TipoProcedencia: "Nacional",
        TipoVisita: "Picnic",
        Estatus: "Adulto",
        CategoriaPago: "No exonerado",
        Moneda: "CRC",
        Monto: 2260.0,
      },
    ]);
  });

  it("should return the correct rate for 'Nacional', 'Picnic', 'Adulto 65 años o más', 'Exonerado'", async () => {
    await expect(
      index.getTarifa("Nacional", "Picnic", "Adulto 65 años o más", "Exonerado")
    ).resolves.toStrictEqual([
      {
        TipoProcedencia: "Nacional",
        TipoVisita: "Picnic",
        Estatus: "Adulto 65 años o más",
        CategoriaPago: "Exonerado",
        Moneda: "CRC",
        Monto: 0.0,
      },
    ]);
  });

  it("should return the correct rate for 'Nacional', 'Picnic', 'Niño 0 a 6 años', 'Exonerado'", async () => {
    await expect(
      index.getTarifa("Nacional", "Picnic", "Niño 0 a 6 años", "Exonerado")
    ).resolves.toStrictEqual([
      {
        TipoProcedencia: "Nacional",
        TipoVisita: "Picnic",
        Estatus: "Niño 0 a 6 años",
        CategoriaPago: "Exonerado",
        Moneda: "CRC",
        Monto: 0.0,
      },
    ]);
  });

  it("should return the correct rate for 'Nacional', 'Picnic', 'Niño 6 a 12 años', 'No exonerado'", async () => {
    await expect(
      index.getTarifa("Nacional", "Picnic", "Niño 6 a 12 años", "No exonerado")
    ).resolves.toStrictEqual([
      {
        TipoProcedencia: "Nacional",
        TipoVisita: "Picnic",
        Estatus: "Niño 6 a 12 años",
        CategoriaPago: "No exonerado",
        Moneda: "CRC",
        Monto: 1130,
      },
    ]);
  });
});
