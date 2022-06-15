const express = require("express");
const app =express();
const mongoose = require("mongoose");
require("dotenv").config();
const port = process.env.PORT||900
app.listen(port,()=> console.log("servidor corriendo en el puerto",port));
//importando rutas 
const userRoutes=require("./routes/user");
const almacenRoutes=require("./routes/alamacen");
const depositoRoutes=require("./routes/deposito");
const parteRoutes=require("./routes/parte");
const laboratorioRoutes=require("./routes/laboratorio");
const productoRoutes=require("./routes/producto");
//middleware
app.use(express.json());
app.use("/",userRoutes);
app.use("/",almacenRoutes);
app.use("/",depositoRoutes);
app.use("/",parteRoutes);
app.use("/",laboratorioRoutes);
app.use("/",productoRoutes);

//conexion mongoose
mongoose.connect(process.env.MONGODB_URI).then(()=>console.log("conexión exitosa a la base de datos")).catch((error)=>console.error(error));

//rutas
app.get("/",(req,res)=>{
    res.send("BIENVENIDO A MI APP")
})