const express = require("express")
const parteModelo =require("../models/parte");
const router = express.Router();

//crear parte
router.post("/parte",(req,res)=>{
    const parte=parteModelo(req.body);
    parte
    .save()
    .then((data)=>res.json(data))
    .catch((error=> res.json({messeage :error})))
  
});

//ver todos las partes
router.get("/parte",(req,res)=>{
   
    parteModelo
    .find()
    .then((data)=>res.json(data))
    .catch((error=> res.json({messeage :error})))
  
});

//ver parte por id
router.get("/parte/:id",(req,res)=>{
   const {id} = req.params;
    parteModelo
    .findById(id)
    .then((data)=>res.json(data))
    .catch((error=> res.json({messeage :error})))
  
});

//actualizar parte
router.put("/parte/:id",(req,res)=>{
    const {id} = req.params;
    const {descripcion,cantpartesConsum,cantpartesDesper}=req.body;
     parteModelo
     .updateOne({ _id: id},{$set:{descripcion,cantpartesConsum,cantpartesDesper}})
     .then((data)=>res.json(data))
     .catch((error=> res.json({messeage :error})))
   
 });
 //borrar parte
 router.delete("/parte/:id",(req,res)=>{
    const {id} = req.params;
    const {descripcion,cantpartesConsum,cantpartesDesper}=req.body;
     parteModelo
     .remove({ _id: id})
     .then((data)=>res.json(data))
     .catch((error=> res.json({messeage :error})))
   
 });

module.exports = router;