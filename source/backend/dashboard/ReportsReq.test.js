const index = require("./ReportsReq")

it("select profits in dates with no data", async () => {
    await expect(index.selectProfitsInDateRange('1990-01-01', '1990-01-31')).resolves.toBe('[]')
});

it("select visits in dates with no data", async () => {
  await expect(index.selectVisitsInDateRange('1990-01-01', '1990-01-31')).resolves.toBe('[]')
});
