import express from "express";
import mongo from "./conexion.js";
import usuario from "./rutas/usuario.js";
import bodyParser from "body-parser";


//confirgurar server basico
const app = express();

//Importar conexion mongoDB
const archivBD = mongo; 

// Middleware para permitir CORS
app.use((req, res, next) => {
  res.header(
    "Access-Control-Allow-Origin",
    "https://crud-mern-ztmt.onrender.com:5173"
  );
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});

//Server de escucha
const PORT = 3000;
app.listen(3000, () => console.log(`Listening in port: ${PORT}`));


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//Importacion del archivo rutas y modelo usuario
app.use("/api/usuario", usuario);

//ruta
app.get('/', (req,res) => {
    res.send('Bienvenidos al servidor backEnd')
})