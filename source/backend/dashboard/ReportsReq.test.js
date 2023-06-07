const index = require("./ReportsReq")

it("reports: profits with start date after end date", async () => {
  await expect(index.selectVisitsInDateRange('2023-12-31', '2023-01-01')).resolves.toBe('[]')
});

it("reports: profits in dates with no data", async () => {
  await expect(index.selectVisitsInDateRange('1990-01-01', '1990-01-31')).resolves.toBe('[]')
});

it("reports: profits with invalid date formats", async () => {
  await expect(index.selectVisitsInDateRange('00-00-0000', '99-99-9999')).resolves.toBe('[]')
});


it("reports: visits with start date after end date", async () => {
  await expect(index.selectVisitsInDateRange('2023-12-31', '2023-01-01')).resolves.toBe('[]')
});

it("reports: visits in dates with no data", async () => {
  await expect(index.selectVisitsInDateRange('1990-01-01', '1990-01-31')).resolves.toBe('[]')
});

it("reports: visits with invalid date formats", async () => {
  await expect(index.selectVisitsInDateRange('00-00-0000', '99-99-9999')).resolves.toBe('[]')
});
