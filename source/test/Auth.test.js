const auth = require("../backend/authentication/auth");

describe("authentication", () => {
  it("check whether a user exists", async () => {
    await expect(auth.checkUser("11111111")).resolves.toStrictEqual(false);
  })

  it("check whether a password for a user is correct", async () => {
    await expect(auth.checkPassword("11111111", "1234")).resolves.toStrictEqual(false);
  })
})
