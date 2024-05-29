import mongoose from "mongoose";
import config from "./config.js";


//Conexion BBDD
const mongo = mongoose.connect(config.mongo.URL);
const connection = mongoose.connection;

connection.on('connected' , () => {console.log('conexion correcta a mongodb');});
connection.on('error' , () => {console.log('error en la conexion correcta a mongodb');});


export default mongo;