const index = require("./ReportsReq")

describe("reports: profits and visits", () => {
  it("profits with start date after end date", async () => {
    await expect(index.selectProfitsInDateRange('2023-12-31', '2023-01-01')).resolves.toBe([{ "Estatus": "Adulto", "TipoProcedencia": "Extranjero", "TipoVisita": "Camping", "TotalVisitors": 0 }, { "Estatus": "Adulto 65 años o más", "TipoProcedencia": "Extranjero", "TipoVisita": "Camping", "TotalVisitors": 0 }, { "Estatus": "Niño 0 a 6 años", "TipoProcedencia": "Extranjero", "TipoVisita": "Camping", "TotalVisitors": 0 }, { "Estatus": "Niño 6 a 12 años", "TipoProcedencia": "Extranjero", "TipoVisita": "Camping", "TotalVisitors": 0 }, { "Estatus": "Adulto", "TipoProcedencia": "Extranjero", "TipoVisita": "Picnic", "TotalVisitors": 0 }, { "Estatus": "Adulto 65 años o más", "TipoProcedencia": "Extranjero", "TipoVisita": "Picnic", "TotalVisitors": 0 }, { "Estatus": "Niño 0 a 6 años", "TipoProcedencia": "Extranjero", "TipoVisita": "Picnic", "TotalVisitors": 0 }, { "Estatus": "Niño 6 a 12 años", "TipoProcedencia": "Extranjero", "TipoVisita": "Picnic", "TotalVisitors": 0 }, { "Estatus": "Adulto", "TipoProcedencia": "Nacional", "TipoVisita": "Camping", "TotalVisitors": 0 }, { "Estatus": "Adulto 65 años o más", "TipoProcedencia": "Nacional", "TipoVisita": "Camping", "TotalVisitors": 0 }, { "Estatus": "Niño 0 a 6 años", "TipoProcedencia": "Nacional", "TipoVisita": "Camping", "TotalVisitors": 0 }, { "Estatus": "Niño 6 a 12 años", "TipoProcedencia": "Nacional", "TipoVisita": "Camping", "TotalVisitors": 0 }, { "Estatus": "Adulto", "TipoProcedencia": "Nacional", "TipoVisita": "Picnic", "TotalVisitors": 0 }, { "Estatus": "Adulto 65 años o más", "TipoProcedencia": "Nacional", "TipoVisita": "Picnic", "TotalVisitors": 0 }, { "Estatus": "Niño 0 a 6 años", "TipoProcedencia": "Nacional", "TipoVisita": "Picnic", "TotalVisitors": 0 }, { "Estatus": "Niño 6 a 12 años", "TipoProcedencia": "Nacional", "TipoVisita": "Picnic", "TotalVisitors": 0 }])
  });

  it("profits in dates with no data", async () => {
    await expect(index.selectProfitsInDateRange('1990-01-01', '1990-01-31')).resolves.toBe([{ "Estatus": "Adulto", "TipoProcedencia": "Extranjero", "TipoVisita": "Camping", "TotalVisitors": 0 }, { "Estatus": "Adulto 65 años o más", "TipoProcedencia": "Extranjero", "TipoVisita": "Camping", "TotalVisitors": 0 }, { "Estatus": "Niño 0 a 6 años", "TipoProcedencia": "Extranjero", "TipoVisita": "Camping", "TotalVisitors": 0 }, { "Estatus": "Niño 6 a 12 años", "TipoProcedencia": "Extranjero", "TipoVisita": "Camping", "TotalVisitors": 0 }, { "Estatus": "Adulto", "TipoProcedencia": "Extranjero", "TipoVisita": "Picnic", "TotalVisitors": 0 }, { "Estatus": "Adulto 65 años o más", "TipoProcedencia": "Extranjero", "TipoVisita": "Picnic", "TotalVisitors": 0 }, { "Estatus": "Niño 0 a 6 años", "TipoProcedencia": "Extranjero", "TipoVisita": "Picnic", "TotalVisitors": 0 }, { "Estatus": "Niño 6 a 12 años", "TipoProcedencia": "Extranjero", "TipoVisita": "Picnic", "TotalVisitors": 0 }, { "Estatus": "Adulto", "TipoProcedencia": "Nacional", "TipoVisita": "Camping", "TotalVisitors": 0 }, { "Estatus": "Adulto 65 años o más", "TipoProcedencia": "Nacional", "TipoVisita": "Camping", "TotalVisitors": 0 }, { "Estatus": "Niño 0 a 6 años", "TipoProcedencia": "Nacional", "TipoVisita": "Camping", "TotalVisitors": 0 }, { "Estatus": "Niño 6 a 12 años", "TipoProcedencia": "Nacional", "TipoVisita": "Camping", "TotalVisitors": 0 }, { "Estatus": "Adulto", "TipoProcedencia": "Nacional", "TipoVisita": "Picnic", "TotalVisitors": 0 }, { "Estatus": "Adulto 65 años o más", "TipoProcedencia": "Nacional", "TipoVisita": "Picnic", "TotalVisitors": 0 }, { "Estatus": "Niño 0 a 6 años", "TipoProcedencia": "Nacional", "TipoVisita": "Picnic", "TotalVisitors": 0 }, { "Estatus": "Niño 6 a 12 años", "TipoProcedencia": "Nacional", "TipoVisita": "Picnic", "TotalVisitors": 0 }])
  });

  it("profits with invalid date formats", async () => {
    await expect(index.selectProfitsInDateRange('00-00-0000', '99-99-9999')).resolves.toBe([{ "Estatus": "Adulto", "TipoProcedencia": "Extranjero", "TipoVisita": "Camping", "TotalVisitors": 0 }, { "Estatus": "Adulto 65 años o más", "TipoProcedencia": "Extranjero", "TipoVisita": "Camping", "TotalVisitors": 0 }, { "Estatus": "Niño 0 a 6 años", "TipoProcedencia": "Extranjero", "TipoVisita": "Camping", "TotalVisitors": 0 }, { "Estatus": "Niño 6 a 12 años", "TipoProcedencia": "Extranjero", "TipoVisita": "Camping", "TotalVisitors": 0 }, { "Estatus": "Adulto", "TipoProcedencia": "Extranjero", "TipoVisita": "Picnic", "TotalVisitors": 0 }, { "Estatus": "Adulto 65 años o más", "TipoProcedencia": "Extranjero", "TipoVisita": "Picnic", "TotalVisitors": 0 }, { "Estatus": "Niño 0 a 6 años", "TipoProcedencia": "Extranjero", "TipoVisita": "Picnic", "TotalVisitors": 0 }, { "Estatus": "Niño 6 a 12 años", "TipoProcedencia": "Extranjero", "TipoVisita": "Picnic", "TotalVisitors": 0 }, { "Estatus": "Adulto", "TipoProcedencia": "Nacional", "TipoVisita": "Camping", "TotalVisitors": 0 }, { "Estatus": "Adulto 65 años o más", "TipoProcedencia": "Nacional", "TipoVisita": "Camping", "TotalVisitors": 0 }, { "Estatus": "Niño 0 a 6 años", "TipoProcedencia": "Nacional", "TipoVisita": "Camping", "TotalVisitors": 0 }, { "Estatus": "Niño 6 a 12 años", "TipoProcedencia": "Nacional", "TipoVisita": "Camping", "TotalVisitors": 0 }, { "Estatus": "Adulto", "TipoProcedencia": "Nacional", "TipoVisita": "Picnic", "TotalVisitors": 0 }, { "Estatus": "Adulto 65 años o más", "TipoProcedencia": "Nacional", "TipoVisita": "Picnic", "TotalVisitors": 0 }, { "Estatus": "Niño 0 a 6 años", "TipoProcedencia": "Nacional", "TipoVisita": "Picnic", "TotalVisitors": 0 }, { "Estatus": "Niño 6 a 12 años", "TipoProcedencia": "Nacional", "TipoVisita": "Picnic", "TotalVisitors": 0 }])
  });


  it("visits with start date after end date", async () => {
    await expect(index.selectVisitsInDateRange('2023-12-31', '2023-01-01')).resolves.toBe([{ "Estatus": "Adulto", "TipoProcedencia": "Extranjero", "TipoVisita": "Camping", "TotalVisitors": 0 }, { "Estatus": "Adulto 65 años o más", "TipoProcedencia": "Extranjero", "TipoVisita": "Camping", "TotalVisitors": 0 }, { "Estatus": "Niño 0 a 6 años", "TipoProcedencia": "Extranjero", "TipoVisita": "Camping", "TotalVisitors": 0 }, { "Estatus": "Niño 6 a 12 años", "TipoProcedencia": "Extranjero", "TipoVisita": "Camping", "TotalVisitors": 0 }, { "Estatus": "Adulto", "TipoProcedencia": "Extranjero", "TipoVisita": "Picnic", "TotalVisitors": 0 }, { "Estatus": "Adulto 65 años o más", "TipoProcedencia": "Extranjero", "TipoVisita": "Picnic", "TotalVisitors": 0 }, { "Estatus": "Niño 0 a 6 años", "TipoProcedencia": "Extranjero", "TipoVisita": "Picnic", "TotalVisitors": 0 }, { "Estatus": "Niño 6 a 12 años", "TipoProcedencia": "Extranjero", "TipoVisita": "Picnic", "TotalVisitors": 0 }, { "Estatus": "Adulto", "TipoProcedencia": "Nacional", "TipoVisita": "Camping", "TotalVisitors": 0 }, { "Estatus": "Adulto 65 años o más", "TipoProcedencia": "Nacional", "TipoVisita": "Camping", "TotalVisitors": 0 }, { "Estatus": "Niño 0 a 6 años", "TipoProcedencia": "Nacional", "TipoVisita": "Camping", "TotalVisitors": 0 }, { "Estatus": "Niño 6 a 12 años", "TipoProcedencia": "Nacional", "TipoVisita": "Camping", "TotalVisitors": 0 }, { "Estatus": "Adulto", "TipoProcedencia": "Nacional", "TipoVisita": "Picnic", "TotalVisitors": 0 }, { "Estatus": "Adulto 65 años o más", "TipoProcedencia": "Nacional", "TipoVisita": "Picnic", "TotalVisitors": 0 }, { "Estatus": "Niño 0 a 6 años", "TipoProcedencia": "Nacional", "TipoVisita": "Picnic", "TotalVisitors": 0 }, { "Estatus": "Niño 6 a 12 años", "TipoProcedencia": "Nacional", "TipoVisita": "Picnic", "TotalVisitors": 0 }])
  });

  it("visits in dates with no data", async () => {
    await expect(index.selectVisitsInDateRange('1990-01-01', '1990-01-31')).resolves.toBe([{ "Estatus": "Adulto", "TipoProcedencia": "Extranjero", "TipoVisita": "Camping", "TotalVisitors": 0 }, { "Estatus": "Adulto 65 años o más", "TipoProcedencia": "Extranjero", "TipoVisita": "Camping", "TotalVisitors": 0 }, { "Estatus": "Niño 0 a 6 años", "TipoProcedencia": "Extranjero", "TipoVisita": "Camping", "TotalVisitors": 0 }, { "Estatus": "Niño 6 a 12 años", "TipoProcedencia": "Extranjero", "TipoVisita": "Camping", "TotalVisitors": 0 }, { "Estatus": "Adulto", "TipoProcedencia": "Extranjero", "TipoVisita": "Picnic", "TotalVisitors": 0 }, { "Estatus": "Adulto 65 años o más", "TipoProcedencia": "Extranjero", "TipoVisita": "Picnic", "TotalVisitors": 0 }, { "Estatus": "Niño 0 a 6 años", "TipoProcedencia": "Extranjero", "TipoVisita": "Picnic", "TotalVisitors": 0 }, { "Estatus": "Niño 6 a 12 años", "TipoProcedencia": "Extranjero", "TipoVisita": "Picnic", "TotalVisitors": 0 }, { "Estatus": "Adulto", "TipoProcedencia": "Nacional", "TipoVisita": "Camping", "TotalVisitors": 0 }, { "Estatus": "Adulto 65 años o más", "TipoProcedencia": "Nacional", "TipoVisita": "Camping", "TotalVisitors": 0 }, { "Estatus": "Niño 0 a 6 años", "TipoProcedencia": "Nacional", "TipoVisita": "Camping", "TotalVisitors": 0 }, { "Estatus": "Niño 6 a 12 años", "TipoProcedencia": "Nacional", "TipoVisita": "Camping", "TotalVisitors": 0 }, { "Estatus": "Adulto", "TipoProcedencia": "Nacional", "TipoVisita": "Picnic", "TotalVisitors": 0 }, { "Estatus": "Adulto 65 años o más", "TipoProcedencia": "Nacional", "TipoVisita": "Picnic", "TotalVisitors": 0 }, { "Estatus": "Niño 0 a 6 años", "TipoProcedencia": "Nacional", "TipoVisita": "Picnic", "TotalVisitors": 0 }, { "Estatus": "Niño 6 a 12 años", "TipoProcedencia": "Nacional", "TipoVisita": "Picnic", "TotalVisitors": 0 }])
  });

  it("visits with invalid date formats", async () => {
    await expect(index.selectVisitsInDateRange('00-00-0000', '99-99-9999')).resolves.toBe([{ "Estatus": "Adulto", "TipoProcedencia": "Extranjero", "TipoVisita": "Camping", "TotalVisitors": 0 }, { "Estatus": "Adulto 65 años o más", "TipoProcedencia": "Extranjero", "TipoVisita": "Camping", "TotalVisitors": 0 }, { "Estatus": "Niño 0 a 6 años", "TipoProcedencia": "Extranjero", "TipoVisita": "Camping", "TotalVisitors": 0 }, { "Estatus": "Niño 6 a 12 años", "TipoProcedencia": "Extranjero", "TipoVisita": "Camping", "TotalVisitors": 0 }, { "Estatus": "Adulto", "TipoProcedencia": "Extranjero", "TipoVisita": "Picnic", "TotalVisitors": 0 }, { "Estatus": "Adulto 65 años o más", "TipoProcedencia": "Extranjero", "TipoVisita": "Picnic", "TotalVisitors": 0 }, { "Estatus": "Niño 0 a 6 años", "TipoProcedencia": "Extranjero", "TipoVisita": "Picnic", "TotalVisitors": 0 }, { "Estatus": "Niño 6 a 12 años", "TipoProcedencia": "Extranjero", "TipoVisita": "Picnic", "TotalVisitors": 0 }, { "Estatus": "Adulto", "TipoProcedencia": "Nacional", "TipoVisita": "Camping", "TotalVisitors": 0 }, { "Estatus": "Adulto 65 años o más", "TipoProcedencia": "Nacional", "TipoVisita": "Camping", "TotalVisitors": 0 }, { "Estatus": "Niño 0 a 6 años", "TipoProcedencia": "Nacional", "TipoVisita": "Camping", "TotalVisitors": 0 }, { "Estatus": "Niño 6 a 12 años", "TipoProcedencia": "Nacional", "TipoVisita": "Camping", "TotalVisitors": 0 }, { "Estatus": "Adulto", "TipoProcedencia": "Nacional", "TipoVisita": "Picnic", "TotalVisitors": 0 }, { "Estatus": "Adulto 65 años o más", "TipoProcedencia": "Nacional", "TipoVisita": "Picnic", "TotalVisitors": 0 }, { "Estatus": "Niño 0 a 6 años", "TipoProcedencia": "Nacional", "TipoVisita": "Picnic", "TotalVisitors": 0 }, { "Estatus": "Niño 6 a 12 años", "TipoProcedencia": "Nacional", "TipoVisita": "Picnic", "TotalVisitors": 0 }])
  });
});
