import axios from 'axios';
import { useEffect, useState } from "react";
import {useParams} from 'react-router';
import Swal from "sweetalert2";

function EditarUsuario() {
  const params = useParams();

  // hooks
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [telefono, setTelefono] = useState("");

  useEffect(() => {
    console.log(import.meta.env.VITE_BACKEND_URL);
    axios
      .post(
        `${import.meta.env.VITE_BACKEND_URL}/api/usuario/obtenerDataUsuario?idUsuario=${params.idUsuario}`
      )
      .then((res) => {
        // console.log(res.data[0]);
        const dataUsuario = res.data[0];
        setNombre(dataUsuario.nombre);
        setEmail(dataUsuario.email);
        setTelefono(dataUsuario.telefono);
      });
  }, [params.idUsuario]);

  //Funcion actualizar el usuario
  //Funcion actualizar el usuario
  function editarUsuario() {
    //Nuevo objeto para actualizar el usuario
    const actualizarUsuario = {
      nombre: nombre,
      email: email,
      telefono: telefono,
      idUsuario: params.idUsuario,
    };

    //Hacer la peticion
    axios
      .post(
        "http://localhost:3000/api/usuario/actualizaUsuario",
        actualizarUsuario
      )
      .then(() => {
        Swal.fire({
          title: "Usuario editado!",
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
    // <div className="col-sm-6 offset-4">
    //   <h2 className="col-sm-6 offset-4">Editar usuario</h2>
    //   <h3 className="col-sm-12 offset-2">
    //     El id del usuario es: {params.idUsuario}
    //   </h3>
    //   <h3 className="col-sm-12 offset-2">
    //     El id del usuario es: {params.nombre}
    //   </h3>
    // </div>

    <div className="container">
      <div className="row">
        <h2 className="mt-4">Editar usuario</h2>

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
                  setNombre(e.target.value);
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
                  setEmail(e.target.value);
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
                  setTelefono(e.target.value);
                }}
              />
            </div>
          </div>
          <button
            onClick={editarUsuario}
            className="col-sm-3 offset-4 btn btn-success"
          >
            Editar Usuario
          </button>
        </div>
      </div>
    </div>
  );
}

export default EditarUsuario;
