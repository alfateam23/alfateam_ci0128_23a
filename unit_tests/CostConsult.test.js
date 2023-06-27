// Pruebas unitaria para verificar que devuelva un costo valido

it("Verificar el precio de 0 visitantes", async () => {
  await expect(costs.getCost([0, 0, 0, 0, 0, 0, 0, 0])).resolves.toBe([
    0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0,
  ]);
});

it("Verifica el precio de un visitante de 0 a 6 años nacional", async () => {
  await expect(costs.getCost([1, 0, 0, 0, 0, 0, 0, 0])).resolves.toBe([
    0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0,
  ]);
});
