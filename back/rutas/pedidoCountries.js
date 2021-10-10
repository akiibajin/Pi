const express = require("express");
const router = express.Router();
const {
  hacerPedidoPorNombre,
} = require("../controllers/controller.js");
const { Paises, Actividades, Activi_Paises } = require("../db/connection.js");

router.route("/countries").get(async (req, res) => {
  const { name } = req.query;
  try{
    if(name){
      if(Number.isNaN(Number(name))&&name.length>2){
        let paisesEncontrados=await hacerPedidoPorNombre(name);
        res.json(paisesEncontrados)
      }else{
        res.status(400).json([{error:'pais no encontrado'}])
      }
    }else{
      let PaisesEncontradosDb=await Paises.findAll()
      res.json(PaisesEncontradosDb)
    }
  }catch(e){
    res.status(400).json({error:`${e}`})
  }
});
router.route("/countries/:id").get(async (req, res) => {
  const { id } = req.params;
  if (id) {
    try {
      let pais = await Paises.findByPk(id, {
        include: {
          model: Actividades,
        },
      });
      if(pais){
        return res.json(pais);
      }
      res.status(400).json({error:'No se encontro el Pais'})
    } catch (e) {
      res.status(400).json({ error: "Pais no Encontrado" });
    }
  }
});
router.route("/activity").post(async (req, res) => {
  const { name, duracion, dificultad, temporada, pais } = req.body;
  try {
    let searchPais= await Promise.all(pais.map((e) => Paises.findByPk(e)));
    const [activities,value] = await Actividades.findOrCreate({
      where:{
        name,
        duracion,
        dificultad,
        temporada,
      }
    });
    await Promise.all(searchPais.map(e => e.addActividades(activities)));
    res.json({ activities, searchPais });
  } catch (e) {
    res.json({error:`${e}`});
  }
});
router.route("/details").get(async (req, res) => {
  try {
    const detalles = await Activi_Paises.findAll();
    res.json(detalles);
  } catch (e) {
    console.error(e);
  }
});

router.get("*", (req, res) => {
  res.json({ error: "No page found" });
});
module.exports = router;
