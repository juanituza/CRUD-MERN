
import { Router }  from 'express';
import  ModeloUsuario  from "../model/usuarioModel.js";



const usuario = Router();

usuario.get("/ejemplo", (req, res) => {
  res.send("Saludos! carga desde ruta ejemplo");
});

usuario.post("/agregarusuario", (req, res) => {
  const nuevoUsuario = new ModeloUsuario({
    nombre: req.body.nombre,
    email: req.body.email,
    telefono: req.body.telefono,
    idUsuario: req.body.idUsuario,
  });
  nuevoUsuario.save()
  .then(result => {
      res.send("Usuario agregado correctamente");
    }).catch(err => {
      res.send(err);
    })
  });
// Obtener usuarios
usuario.get("/obtenerusuario", (req, res) => {
  ModeloUsuario.find({})
   .then(results => {
    res.send(results)
  })
  .catch(err => {
    res.send(err)
  });
  
});
//Obtener data del usuario
usuario.post("/obtenerDataUsuario", (req, res) => {
  ModeloUsuario.find({ idUsuario: req.query.idUsuario })
    .then((results) => {
      res.send(results);
    })
    .catch((err) => {
      res.send(err);
    });
});


usuario.post("/actualizaUsuario", (req, res) => {
  const { idUsuario, nombre, email, telefono } = req.body;

  ModeloUsuario.findOneAndUpdate(
    { idUsuario: idUsuario },
    { nombre: nombre, email: email, telefono: telefono },
    { new: true, upsert: true }
  )
    .then((result) => {
      res.send("Usuario actualizado correctamente");
    })
    .catch((err) => {
      res.status(500).send(err);
    });
});
usuario.delete("/borrarUsuario", (req, res) => {
  ModeloUsuario.findOneAndDelete({ idUsuario: req.query.idUsuario })
    .then((result) => {
      res.send("Usuario eliminado correctamente");
    })
    .catch((err) => {
      res.status(500).send(err);
    });
});


 
export default usuario;