const express = require("express")
const laboratorioModelo =require("../models/laboratorio");
const router = express.Router();

//crear laboratorio
router.post("/laboratorio",(req,res)=>{
    const laboratorio=laboratorioModelo(req.body);
    laboratorio
    .save()
    .then((data)=>res.json(data))
    .catch((error=> res.json({messeage :error})))
  
});

//ver todos los laboratorio
router.get("/laboratorio",(req,res)=>{
   
    laboratorioModelo
    .find()
    .then((data)=>res.json(data))
    .catch((error=> res.json({messeage :error})))
  
});

//ver laboratorio por id
router.get("/laboratorio/:id",(req,res)=>{
   const {id} = req.params;
    laboratorioModelo
    .findById(id)
    .then((data)=>res.json(data))
    .catch((error=> res.json({messeage :error})))
  
});

//actualizar laboratorio
router.put("/laboratorio/:id",(req,res)=>{
    const {id} = req.params;
    const {nombre,ubicacion,email,telefono}=req.body;
     laboratorioModelo
     .updateOne({ _id: id},{$set:{nombre,ubicacion,email,telefono}})
     .then((data)=>res.json(data))
     .catch((error=> res.json({messeage :error})))
   
 });
 //borrar laboratorio
 router.delete("/laboratorio/:id",(req,res)=>{
    const {id} = req.params;
    const {nombre,ubicacion,email,telefono}=req.body;
     laboratorioModelo
     .remove({ _id: id})
     .then((data)=>res.json(data))
     .catch((error=> res.json({messeage :error})))
   
 });

module.exports = router;