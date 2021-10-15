const { Actividades, db } = require("../../db/connection.js");
const { expect } = require("chai");

describe("Country model", () => {
  afterAll(async () => {
    await db.sync({ force: true });
    db.close();
  });
  beforeAll(() =>
    db.authenticate().catch((err) => {
      console.error("Unable to connect to the database:", err);
    })
  );
  describe("Validators", () => {
    beforeEach(async () => await Actividades.sync({ force: true }));
    describe("name", () => {
      it("should throw an error if name is null", (done) => {
        Actividades.create({})
          .then(() => done(new Error("It requires a valid name")))
          .catch(() => done());
      });
      it("should work when its a valid name and propertys", (done) => {
        Actividades.create({ name: "Visita al Zoo" })
          .then(() => done("still without content"))
          .catch(() => done());
      });
    });
  });
});
