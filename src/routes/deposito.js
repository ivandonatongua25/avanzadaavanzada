const express = require("express")
const depositoModelo =require("../models/deposito");
const router = express.Router();

//crear deposito
router.post("/deposito",(req,res)=>{
    const deposito=depositoModelo(req.body);
    deposito
    .save()
    .then((data)=>res.json(data))
    .catch((error=> res.json({messeage :error})))
  
});

//ver todos los depositos
router.get("/deposito",(req,res)=>{
   
    depositoModelo
    .find()
    .then((data)=>res.json(data))
    .catch((error=> res.json({messeage :error})))
  
});

//ver deposito por id
router.get("/deposito/:id",(req,res)=>{
   const {id} = req.params;
    depositoModelo
    .findById(id)
    .then((data)=>res.json(data))
    .catch((error=> res.json({messeage :error})))
  
});

//actualizar deposito
router.put("/deposito/:id",(req,res)=>{
    const {id} = req.params;
    const {nombre,ubicacion,email,telefono}=req.body;
     depositoModelo
     .updateOne({ _id: id},{$set:{nombre,ubicacion,email,telefono}})
     .then((data)=>res.json(data))
     .catch((error=> res.json({messeage :error})))
   
 });
 //borrar deposito
 router.delete("/deposito/:id",(req,res)=>{
    const {id} = req.params;
    const {nombre,ubicacion,email,telefono}=req.body;
     depositoModelo
     .remove({ _id: id})
     .then((data)=>res.json(data))
     .catch((error=> res.json({messeage :error})))
   
 });

module.exports = router;