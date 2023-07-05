const index = require("../../backend/dashboard/ReportUtil/ReportUtil")

describe("reports: profits and visits", () => {
  it("profits with start date after end date", async () => {
    await expect(index.selectProfitsInDateRange('2023-12-31', '2023-01-01')).resolves.toStrictEqual([{"TipoProcedencia":"Extranjero","TipoVisita":"Camping","Estatus":"Adulto","CategoriaPago":"No exonerado","TotalVisitantes":0},{"TipoProcedencia":"Extranjero","TipoVisita":"Camping","Estatus":"Adulto 65 años o más","CategoriaPago":"Exonerado","TotalVisitantes":0},{"TipoProcedencia":"Extranjero","TipoVisita":"Camping","Estatus":"Niño 0 a 6 años","CategoriaPago":"Exonerado","TotalVisitantes":0},{"TipoProcedencia":"Extranjero","TipoVisita":"Camping","Estatus":"Niño 6 a 12 años","CategoriaPago":"No exonerado","TotalVisitantes":0},{"TipoProcedencia":"Extranjero","TipoVisita":"Picnic","Estatus":"Adulto","CategoriaPago":"No exonerado","TotalVisitantes":0},{"TipoProcedencia":"Extranjero","TipoVisita":"Picnic","Estatus":"Adulto 65 años o más","CategoriaPago":"Exonerado","TotalVisitantes":0},{"TipoProcedencia":"Extranjero","TipoVisita":"Picnic","Estatus":"Niño 0 a 6 años","CategoriaPago":"Exonerado","TotalVisitantes":0},{"TipoProcedencia":"Extranjero","TipoVisita":"Picnic","Estatus":"Niño 6 a 12 años","CategoriaPago":"No exonerado","TotalVisitantes":0},{"TipoProcedencia":"Nacional","TipoVisita":"Camping","Estatus":"Adulto","CategoriaPago":"No exonerado","TotalVisitantes":0},{"TipoProcedencia":"Nacional","TipoVisita":"Camping","Estatus":"Adulto 65 años o más","CategoriaPago":"Exonerado","TotalVisitantes":0},{"TipoProcedencia":"Nacional","TipoVisita":"Camping","Estatus":"Niño 0 a 6 años","CategoriaPago":"Exonerado","TotalVisitantes":0},{"TipoProcedencia":"Nacional","TipoVisita":"Camping","Estatus":"Niño 6 a 12 años","CategoriaPago":"No exonerado","TotalVisitantes":0},{"TipoProcedencia":"Nacional","TipoVisita":"Picnic","Estatus":"Adulto","CategoriaPago":"No exonerado","TotalVisitantes":0},{"TipoProcedencia":"Nacional","TipoVisita":"Picnic","Estatus":"Adulto 65 años o más","CategoriaPago":"Exonerado","TotalVisitantes":0},{"TipoProcedencia":"Nacional","TipoVisita":"Picnic","Estatus":"Niño 0 a 6 años","CategoriaPago":"Exonerado","TotalVisitantes":0},{"TipoProcedencia":"Nacional","TipoVisita":"Picnic","Estatus":"Niño 6 a 12 años","CategoriaPago":"No exonerado","TotalVisitantes":0}])
  });

  it("profits in dates with no data", async () => {
    await expect(index.selectProfitsInDateRange('1990-01-01', '1990-01-31')).resolves.toStrictEqual([{"TipoProcedencia":"Extranjero","TipoVisita":"Camping","Estatus":"Adulto","CategoriaPago":"No exonerado","TotalVisitantes":0},{"TipoProcedencia":"Extranjero","TipoVisita":"Camping","Estatus":"Adulto 65 años o más","CategoriaPago":"Exonerado","TotalVisitantes":0},{"TipoProcedencia":"Extranjero","TipoVisita":"Camping","Estatus":"Niño 0 a 6 años","CategoriaPago":"Exonerado","TotalVisitantes":0},{"TipoProcedencia":"Extranjero","TipoVisita":"Camping","Estatus":"Niño 6 a 12 años","CategoriaPago":"No exonerado","TotalVisitantes":0},{"TipoProcedencia":"Extranjero","TipoVisita":"Picnic","Estatus":"Adulto","CategoriaPago":"No exonerado","TotalVisitantes":0},{"TipoProcedencia":"Extranjero","TipoVisita":"Picnic","Estatus":"Adulto 65 años o más","CategoriaPago":"Exonerado","TotalVisitantes":0},{"TipoProcedencia":"Extranjero","TipoVisita":"Picnic","Estatus":"Niño 0 a 6 años","CategoriaPago":"Exonerado","TotalVisitantes":0},{"TipoProcedencia":"Extranjero","TipoVisita":"Picnic","Estatus":"Niño 6 a 12 años","CategoriaPago":"No exonerado","TotalVisitantes":0},{"TipoProcedencia":"Nacional","TipoVisita":"Camping","Estatus":"Adulto","CategoriaPago":"No exonerado","TotalVisitantes":0},{"TipoProcedencia":"Nacional","TipoVisita":"Camping","Estatus":"Adulto 65 años o más","CategoriaPago":"Exonerado","TotalVisitantes":0},{"TipoProcedencia":"Nacional","TipoVisita":"Camping","Estatus":"Niño 0 a 6 años","CategoriaPago":"Exonerado","TotalVisitantes":0},{"TipoProcedencia":"Nacional","TipoVisita":"Camping","Estatus":"Niño 6 a 12 años","CategoriaPago":"No exonerado","TotalVisitantes":0},{"TipoProcedencia":"Nacional","TipoVisita":"Picnic","Estatus":"Adulto","CategoriaPago":"No exonerado","TotalVisitantes":0},{"TipoProcedencia":"Nacional","TipoVisita":"Picnic","Estatus":"Adulto 65 años o más","CategoriaPago":"Exonerado","TotalVisitantes":0},{"TipoProcedencia":"Nacional","TipoVisita":"Picnic","Estatus":"Niño 0 a 6 años","CategoriaPago":"Exonerado","TotalVisitantes":0},{"TipoProcedencia":"Nacional","TipoVisita":"Picnic","Estatus":"Niño 6 a 12 años","CategoriaPago":"No exonerado","TotalVisitantes":0}])
  });

  it("profits with invalid date formats", async () => {
    await expect(index.selectProfitsInDateRange('00-00-0000', '99-99-9999')).resolves.toStrictEqual(new Error('Invalid date format'))
  });


  it("visits with start date after end date", async () => {
    await expect(index.selectVisitsInDateRange('2023-12-31', '2023-01-01')).resolves.toStrictEqual([{"TipoProcedencia":"Extranjero","TipoVisita":"Camping","Estatus":"Adulto","CategoriaPago":"No exonerado","TotalVisitantes":0},{"TipoProcedencia":"Extranjero","TipoVisita":"Camping","Estatus":"Adulto 65 años o más","CategoriaPago":"Exonerado","TotalVisitantes":0},{"TipoProcedencia":"Extranjero","TipoVisita":"Camping","Estatus":"Niño 0 a 6 años","CategoriaPago":"Exonerado","TotalVisitantes":0},{"TipoProcedencia":"Extranjero","TipoVisita":"Camping","Estatus":"Niño 6 a 12 años","CategoriaPago":"No exonerado","TotalVisitantes":0},{"TipoProcedencia":"Extranjero","TipoVisita":"Picnic","Estatus":"Adulto","CategoriaPago":"No exonerado","TotalVisitantes":0},{"TipoProcedencia":"Extranjero","TipoVisita":"Picnic","Estatus":"Adulto 65 años o más","CategoriaPago":"Exonerado","TotalVisitantes":0},{"TipoProcedencia":"Extranjero","TipoVisita":"Picnic","Estatus":"Niño 0 a 6 años","CategoriaPago":"Exonerado","TotalVisitantes":0},{"TipoProcedencia":"Extranjero","TipoVisita":"Picnic","Estatus":"Niño 6 a 12 años","CategoriaPago":"No exonerado","TotalVisitantes":0},{"TipoProcedencia":"Nacional","TipoVisita":"Camping","Estatus":"Adulto","CategoriaPago":"No exonerado","TotalVisitantes":0},{"TipoProcedencia":"Nacional","TipoVisita":"Camping","Estatus":"Adulto 65 años o más","CategoriaPago":"Exonerado","TotalVisitantes":0},{"TipoProcedencia":"Nacional","TipoVisita":"Camping","Estatus":"Niño 0 a 6 años","CategoriaPago":"Exonerado","TotalVisitantes":0},{"TipoProcedencia":"Nacional","TipoVisita":"Camping","Estatus":"Niño 6 a 12 años","CategoriaPago":"No exonerado","TotalVisitantes":0},{"TipoProcedencia":"Nacional","TipoVisita":"Picnic","Estatus":"Adulto","CategoriaPago":"No exonerado","TotalVisitantes":0},{"TipoProcedencia":"Nacional","TipoVisita":"Picnic","Estatus":"Adulto 65 años o más","CategoriaPago":"Exonerado","TotalVisitantes":0},{"TipoProcedencia":"Nacional","TipoVisita":"Picnic","Estatus":"Niño 0 a 6 años","CategoriaPago":"Exonerado","TotalVisitantes":0},{"TipoProcedencia":"Nacional","TipoVisita":"Picnic","Estatus":"Niño 6 a 12 años","CategoriaPago":"No exonerado","TotalVisitantes":0}])
  });

  it("visits in dates with no data", async () => {
    await expect(index.selectVisitsInDateRange('1990-01-01', '1990-01-31')).resolves.toStrictEqual([{"TipoProcedencia":"Extranjero","TipoVisita":"Camping","Estatus":"Adulto","CategoriaPago":"No exonerado","TotalVisitantes":0},{"TipoProcedencia":"Extranjero","TipoVisita":"Camping","Estatus":"Adulto 65 años o más","CategoriaPago":"Exonerado","TotalVisitantes":0},{"TipoProcedencia":"Extranjero","TipoVisita":"Camping","Estatus":"Niño 0 a 6 años","CategoriaPago":"Exonerado","TotalVisitantes":0},{"TipoProcedencia":"Extranjero","TipoVisita":"Camping","Estatus":"Niño 6 a 12 años","CategoriaPago":"No exonerado","TotalVisitantes":0},{"TipoProcedencia":"Extranjero","TipoVisita":"Picnic","Estatus":"Adulto","CategoriaPago":"No exonerado","TotalVisitantes":0},{"TipoProcedencia":"Extranjero","TipoVisita":"Picnic","Estatus":"Adulto 65 años o más","CategoriaPago":"Exonerado","TotalVisitantes":0},{"TipoProcedencia":"Extranjero","TipoVisita":"Picnic","Estatus":"Niño 0 a 6 años","CategoriaPago":"Exonerado","TotalVisitantes":0},{"TipoProcedencia":"Extranjero","TipoVisita":"Picnic","Estatus":"Niño 6 a 12 años","CategoriaPago":"No exonerado","TotalVisitantes":0},{"TipoProcedencia":"Nacional","TipoVisita":"Camping","Estatus":"Adulto","CategoriaPago":"No exonerado","TotalVisitantes":0},{"TipoProcedencia":"Nacional","TipoVisita":"Camping","Estatus":"Adulto 65 años o más","CategoriaPago":"Exonerado","TotalVisitantes":0},{"TipoProcedencia":"Nacional","TipoVisita":"Camping","Estatus":"Niño 0 a 6 años","CategoriaPago":"Exonerado","TotalVisitantes":0},{"TipoProcedencia":"Nacional","TipoVisita":"Camping","Estatus":"Niño 6 a 12 años","CategoriaPago":"No exonerado","TotalVisitantes":0},{"TipoProcedencia":"Nacional","TipoVisita":"Picnic","Estatus":"Adulto","CategoriaPago":"No exonerado","TotalVisitantes":0},{"TipoProcedencia":"Nacional","TipoVisita":"Picnic","Estatus":"Adulto 65 años o más","CategoriaPago":"Exonerado","TotalVisitantes":0},{"TipoProcedencia":"Nacional","TipoVisita":"Picnic","Estatus":"Niño 0 a 6 años","CategoriaPago":"Exonerado","TotalVisitantes":0},{"TipoProcedencia":"Nacional","TipoVisita":"Picnic","Estatus":"Niño 6 a 12 años","CategoriaPago":"No exonerado","TotalVisitantes":0}])
  });

  it("visits with invalid date formats", async () => {
    await expect(index.selectVisitsInDateRange('00-00-0000', '99-99-9999')).resolves.toStrictEqual(new Error('Invalid date format'))
  });
});