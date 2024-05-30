import express from "express";
import config from "./config.js"
import mongo from "./conexion.js";
import usuario from "./rutas/usuario.js";
import bodyParser from "body-parser";


//confirgurar server basico
const app = express();

//Importar conexion mongoDB
const archivBD = mongo; 
//Server de escucha
const PORT = 3000;
app.listen(3000, () => console.log(`Listening in port: ${PORT}`));


// Middleware para permitir CORS
app.use((req, res, next) => {
  const allowedOrigins = [config.backend_url.URL, config.frontend_url.URL];
  const origin = req.headers.origin;
  if (allowedOrigins.includes(origin)) {
    res.header("Access-Control-Allow-Origin", origin);
  }
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});




app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//Importacion del archivo rutas y modelo usuario
app.use("/api/usuario", usuario);

//ruta
app.get('/', (req,res) => {
    res.send('Bienvenidos al servidor backEnd')
})