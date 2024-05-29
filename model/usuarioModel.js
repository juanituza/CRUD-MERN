import mongoose from "mongoose";

const usuario = "Usuarios";

const schemaUsuario = new mongoose.Schema({
  nombre: String,
  email: String,
  telefono: String,
  idUsuario: String,
});

const ModeloUsuario = mongoose.model("usuario", schemaUsuario);

export default ModeloUsuario;