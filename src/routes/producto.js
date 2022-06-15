const express = require("express")
const productoModelo =require("../models/producto");
const router = express.Router();

//crear producto
router.post("/producto",(req,res)=>{
    const producto=productoModelo(req.body);
    producto
    .save()
    .then((data)=>res.json(data))
    .catch((error=> res.json({messeage :error})))
  
});

//ver todos los producto
router.get("/producto",(req,res)=>{
   
    productoModelo
    .find()
    .then((data)=>res.json(data))
    .catch((error=> res.json({messeage :error})))
  
});

//ver producto por id
router.get("/producto/:id",(req,res)=>{
   const {id} = req.params;
    productoModelo
    .findById(id)
    .then((data)=>res.json(data))
    .catch((error=> res.json({messeage :error})))
  
});

//actualizar producto
router.put("/producto/:id",(req,res)=>{
    const {id} = req.params;
    const {nombre,precio,stock}=req.body;
     productoModelo
     .updateOne({ _id: id},{$set:{nombre,precio,stock}})
     .then((data)=>res.json(data))
     .catch((error=> res.json({messeage :error})))
   
 });
 //borrar producto
 router.delete("/producto/:id",(req,res)=>{
    const {id} = req.params;
    const {nombre,precio,stock}=req.body;
     productoModelo
     .remove({ _id: id})
     .then((data)=>res.json(data))
     .catch((error=> res.json({messeage :error})))
   
 });

module.exports = router;