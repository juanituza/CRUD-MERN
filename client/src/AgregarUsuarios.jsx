// import React from "react";

import { useState } from "react";
import uniquid from "uniqid";
import axios from "axios";
import Swal from "sweetalert2";




function AgregarUsuario() {

  // hooks
  const [nombre, setNombre]=useState('');
  const [email,setEmail]=useState('');
  const [telefono,setTelefono]=useState('');

  
  
  function agregarUsuario  () {
    var usuario = {
      nombre: nombre,
      email: email,
      telefono: telefono,
      idUsuario: uniquid(),
    };
    axios
      .post(
        "http://localhost:3000/api/usuario/agregarusuario",
        usuario
      )
      .then(() => {
         Swal.fire({
           title: "Usuario agregado correctamente!",
           icon: "success",
           showCancelButton: false,
           confirmButtonText: "OK",
         }).then(() => {
           // Redirigir al inicio
           window.location.href = "/";
         });
      })
      .then((err) => {
        console.log(err);
      });  


}
  

  return (
    <div className="container">
      <div className="row">
        <h2 className="mt-4">Crear un nuevo usuario</h2>

        <div className="row">
          <div className="col-sm-6 offset-3">
            <div className="mb-3">
              <label htmlFor="nombre" className="form-label">
                Nombre
              </label>
              <input
                type="text"
                className="form-control"
                value={nombre}
                onChange={(e) => {
                  setNombre(e.target.value)
                }}
              />
            </div>
          </div>
          <div className="col-sm-6 offset-3">
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                type="email"
                className="form-control"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value)
                }}
              />
            </div>
          </div>
          <div className="col-sm-6 offset-3">
            <div className="mb-3">
              <label htmlFor="telefono" className="form-label">
                Teléfono
              </label>
              <input
                type="text"
                className="form-control"
                value={telefono}
                onChange={(e) => {
                  setTelefono(e.target.value)
                }}
              />
            </div>
          </div>
          <button
            onClick={agregarUsuario}
            className="col-sm-6 offset-3 btn btn-primary"
          >
            Guarda Usuario
          </button>
        </div>
      </div>
    </div>
  );
}

export default AgregarUsuario;
