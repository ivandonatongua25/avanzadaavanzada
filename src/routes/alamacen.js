const express = require("express")
const almacenModelo =require("../models/almacen");
const router = express.Router();

//crear almacen
router.post("/almacen",(req,res)=>{
    const almacen=almacenModelo(req.body);
    almacen
    .save()
    .then((data)=>res.json(data))
    .catch((error=> res.json({messeage :error})))
  
});

//ver todos los almacenes
router.get("/almacen",(req,res)=>{
   
    almacenModelo
    .find()
    .then((data)=>res.json(data))
    .catch((error=> res.json({messeage :error})))
  
});

//ver almacen por id
router.get("/almacen/:id",(req,res)=>{
   const {id} = req.params;
    almacenModelo
    .findById(id)
    .then((data)=>res.json(data))
    .catch((error=> res.json({messeage :error})))
  
});

//actualizar almacen
router.put("/almacen/:id",(req,res)=>{
    const {id} = req.params;
    const {nombre,ubicacion,email,telefono}=req.body;
     almacenModelo
     .updateOne({ _id: id},{$set:{nombre,ubicacion,email,telefono}})
     .then((data)=>res.json(data))
     .catch((error=> res.json({messeage :error})))
   
 });
 //borrar almacen
 router.delete("/almacen/:id",(req,res)=>{
    const {id} = req.params;
    const {nombre,ubicacion,email,telefono}=req.body;
     almacenModelo
     .remove({ _id: id})
     .then((data)=>res.json(data))
     .catch((error=> res.json({messeage :error})))
   
 });

module.exports = router;