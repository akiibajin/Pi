const { db,Paises } = require("./db/connection.js");
const app = require("./app.js");
const {hacerPedidoCountries} =require("./controllers/controller")

db.sync({ force: true })
  .then(() => {
    app.listen(3000, async() => {
      try{
        let paisesPedidos=await hacerPedidoCountries()
        console.log(paisesPedidos)
        let paisesAlmacenados=await Paises.bulkCreate(paisesPedidos)
        console.log("paises cargados")
      }catch(e){
        console.log(e)
      } 
  });
});