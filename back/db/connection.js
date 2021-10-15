const { Sequelize } = require("sequelize");
const modelPaises = require("./datos/paises.js");
const modelActividades = require("./datos/actividades.js");
require("dotenv").config();
const USER = process.env.USER;
const PASSWORD = process.env.PASSWORD;
console.log(USER, PASSWORD);
const sequelize = new Sequelize(
  `postgres://${USER}:${PASSWORD}@localhost:5432/countries`
);

modelPaises(sequelize);
modelActividades(sequelize);
const { Paises, Actividades, Activi_Paises } = sequelize.models;
Paises.belongsToMany(Actividades, { through: "Activi_Paises" });
Actividades.belongsToMany(Paises, { through: "Activi_Paises" });

// muchos a muchos
module.exports = {
  ...sequelize.models,
  db: sequelize,
};
