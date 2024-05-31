import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import config from "./config.js"
import mongo from "./conexion.js";
import usuario from "./rutas/usuario.js";
import bodyParser from "body-parser";
import cors from "cors";

//confirgurar server basico
const app = express();

//Importar conexion mongoDB
const archivBD = mongo; 
//Server de escucha
const PORT = 3000;
app.listen(3000, () => console.log(`Listening in port: ${PORT}`));


const allowedOrigins = [config.frontend_url.URL];

const corsOptions = {
  origin: (origin, callback) => {
    if (allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  methods: "GET, POST, PUT, DELETE, OPTIONS",
  allowedHeaders: "Content-Type, Authorization",
};

app.use(cors(corsOptions));


// // Middleware para permitir CORS
// app.use((req, res, next) => {
//   const allowedOrigins = [config.backend_url.URL, config.frontend_url.URL];
//   const origin = req.headers.origin;
//   if (allowedOrigins.includes(origin)) {
//     res.header("Access-Control-Allow-Origin", origin);
//   }
//   res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
//   res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
//   next();
// });

// // Obtener el directorio actual usando import.meta.url
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);


// // Servir archivos estáticos desde el directorio 'build'
// app.use(express.static(path.join(__dirname, 'build')));



app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//Importacion del archivo rutas y modelo usuario
app.use("/api/usuario", usuario);

//ruta
app.get('/', (req,res) => {
    res.send('Bienvenidos al servidor backEnd')
})