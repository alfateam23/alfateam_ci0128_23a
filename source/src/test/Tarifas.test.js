//const index = require("../../backend/dashboard/Tarifas")
const index = require("../../backend/dashboard/testing/tarifaTest")

// Increase timeout to 40 seconds (40000 milliseconds)
//jest.setTimeout(90000);

describe("rates: shows data related to a fee", () => {
    it("rate for: Extranjero, Camping, Adulto, No exonerado", async () => {
        await expect(index.getTarifa('Extranjero', 'Camping', 'Adulto', 'No exonerado')).resolves.toStrictEqual([{ "TipoProcedencia": "Extranjero", "TipoVisita": "Camping", "Estatus": "Adulto", "CategoriaPago": "No exonerado", "Monto": "16.99", "Modena": "USD" }]);
        //await expect(index.selectProfitsInDateRange('00-00-0000', '99-99-9999')).resolves.toStrictEqual(new Error('Invalid date format'))
    });
});

// await expect(index.getTarifa('Extranjero', 'Camping', 'Adulto', 'No exonerado')).resolves.toStrictEqual([{ "TipoProcedencia": "Extranjero", "TipoVisita": "Camping", "Estatus": "Adulto", "CategoriaPago": "No exonerado", "Monto": "16.99", "Modena": "USD" }]);

