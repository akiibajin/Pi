const express=require('express');
const router=express.Router();
const {hacerPedidoCountries, hacerPedidoPorNombre} = require('../controllers/controller.js');
const {Paises,Actividades,Activi_Paises}=require('../db/connection.js')
 

router.route('/countries')
    .get(async(req,res)=>{
        const {name}=req.query;
        try{
            let prueba=await Paises.findAll()
            if(name&&name.length!==0){
                let search=await hacerPedidoPorNombre(name)
                res.json(search)
            }else{
                if(prueba.length===0){
                    let newPaises=await hacerPedidoCountries()
                    let paises= await Paises.bulkCreate(newPaises)
                     res.json(paises);
                }else{
                    res.json(prueba)
                }
            }
        }catch(e){
            console.log(e)
            return res.status(400).send({error:'error '+e})
        }
    })
router.route('/countries/:id')
    .get(async(req,res)=>{
        const {id}=req.params
        if(id){
            try{
                let pais=await Paises.findByPk(id,{
                    include: {
                    model:Actividades
                }
            })
                res.json(pais||'Pais no encontrado')
            }catch(e){
                res.status(400).json({error:'Pais no encontrado'})
            }
        }
    })
router.route('/activity')
        .post(async(req,res)=>{
            const {name,duracion,dificultad,temporada,pais}=req.body;
            console.log(req.body)
            let searchPais=[];
                try{
                    searchPais.push(await Promise.all(pais.map(e=>Paises.findByPk(e))))  
                    const activities=await Actividades.create({
                        name,
                        duracion,
                        dificultad,
                        temporada
                    })
                    await Promise.all(searchPais.forEach( e=> activities.addPaises(e)))
                    res.json({activities,searchPais})
                }catch(e){
                    res.send(e)
                }
               
        })  
router.route('/details')
        .get(async(req,res)=>{
            try{
                const detalles=await Activi_Paises.findAll()
                res.json(detalles)
            }catch(e){
                console.error(e)
            }
        })

module.exports=router