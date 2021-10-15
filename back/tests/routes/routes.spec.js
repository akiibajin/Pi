const supertest = require("supertest");
const app = require("../../app.js");
const { db, Paises, Actividades } = require("../../db/connection.js");
const expect = require("chai").expect;

const agent = supertest(app);

describe("Rutas de Testeo", function () {
  afterAll(async function () {
    await db.sync({ force: true });
    db.close();
  });

  beforeAll(async function () {
    await Actividades.create({
      name: "Prueba1",
      dificultad: "1",
      duracion: "1 seg",
      temporada: "Verano",
      pais: ["COL", "ARG"],
    });
    await Actividades.create({
      name: "Prueba2",
      dificultad: "2",
      duracion: "3 seg",
      temporada: "Otoño",
      pais: ["CHI", "CHL"],
    });
    await Actividades.create({
      name: "Prueba3",
      dificultad: "3",
      duracion: "3 seg",
      temporada: "Invierno",
    });
  });
  describe("pedidos http Paises", function () {
    beforeEach(function () {
      return Paises.sync({ force: true });
    });
    describe("GET /countries", function () {
      it("Responde con 200", function () {
        return agent.get("/countries").expect(200);
      });
      it("Espera que sea JSON", function () {
        return agent
          .get("/countries")
          .expect("Content-Type", "application/json; charset=utf-8");
      });
    });
  });
  describe("pedidos http Pais", function () {
    beforeEach(function () {
      return Paises.sync({ force: true });
    });
    describe("GET /countries", function () {
      it("Responde con 200", async function () {
        return agent
          .get("/countries")
          .query({ name: "colombia" })
          .expect("Content-Type", "application/json; charset=utf-8")
          .expect(200)
          .then((res) => {
            expect(res.body.length).to.deep.equal(1);
            return res;
          })
          .then((res) => {
            res.body.forEach((elemento) => {
              expect(elemento).to.have.property("ID");
              expect(elemento).to.have.property("name");
              expect(elemento).to.have.property("capital");
            });
          });
      });
      it("Responde con 400 con numeros", function () {
        return agent
          .get("/countries")
          .query({ name: 46 })
          .expect(400)
          .then((res) => {
            expect(res.body.length).to.deep.equal(1);
            return res;
          })
          .then((res) => {
            res.body.forEach((elemento) => {
              expect(elemento).to.have.property("error");
              expect(elemento.error).to.deep.equal("pais no encontrado");
            });
          });
      });
      it("Responde con 400 con digitos menor a 2", function () {
        return agent
          .get("/countries")
          .query({ name: "co" })
          .expect(400)
          .then((res) => {
            expect(res.body.length).to.deep.equal(1);
            return res;
          })
          .then((res) => {
            res.body.forEach((elemento) => {
              expect(elemento).to.have.property("error");
              expect(elemento.error).to.deep.equal("pais no encontrado");
            });
          });
      });
    });
  });
});
