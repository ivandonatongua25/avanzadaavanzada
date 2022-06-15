const express = require("express")
const userModelo =require("../models/user");
const router = express.Router();

//crear usuario
router.post("/users",(req,res)=>{
    const user=userModelo(req.body);
    user
    .save()
    .then((data)=>res.json(data))
    .catch((error=> res.json({messeage :error})))
  
});

//ver todos los usuarios
router.get("/users",(req,res)=>{
   
    userModelo
    .find()
    .then((data)=>res.json(data))
    .catch((error=> res.json({messeage :error})))
  
});

//ver usuario por mail
router.get("/users/:id",(req,res)=>{
   const {id} = req.params;
    userModelo
    .findById(id)
    .then((data)=>res.json(data))
    .catch((error=> res.json({messeage :error})))
  
});

//actualizar usuario
router.put("/users/:id",(req,res)=>{
    const {id} = req.params;
    const {email,name,surname,edad}=req.body;
     userModelo
     .updateOne({ _id: id},{$set:{email,name,surname,edad}})
     .then((data)=>res.json(data))
     .catch((error=> res.json({messeage :error})))
   
 });
 //borrar usuario
 router.delete("/users/:id",(req,res)=>{
    const {id} = req.params;
    const {email,name,surname,edad}=req.body;
     userModelo
     .remove({ _id: id})
     .then((data)=>res.json(data))
     .catch((error=> res.json({messeage :error})))
   
 });

module.exports = router;