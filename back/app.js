const express = require("express");
const morgan = require("morgan");
const Countries = require("./rutas/pedidoCountries.js");

const app = express();

app.name = "API";

app.use(express.urlencoded({ extended: false }));
app.use(morgan("dev"));
app.use(express.json());
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "http://localhost:3001"); //autoriza recibir solicitudes de este dominio
  res.header("Access-Control-Allow-Credentials", true); //Autorizo recibir solicitudes que incluyan el encabezado con credenciales
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  ); //Autorizo recibir solicitudes con dichos headers
  res.header("Acces-Control-Allow-Methods", "GET", "POST"); //Autorizo solicitudes del metodo GET
  next();
});

app.use("/", Countries);

module.exports = app;
