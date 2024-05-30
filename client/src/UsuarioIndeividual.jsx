import { useEffect } from "react";
import PropTypes from "prop-types"; // Importa PropTypes
import { Link } from "react-router-dom";
import "./App.css";
import axios from "axios";
import Swal from "sweetalert2";
import AOS from "aos";
import "aos/dist/aos.css";

function UsuarioIndividual(props) {
  const { usuario } = props; // Desestructura la prop usuario

  // animacion de scroll
  useEffect(() => {
    AOS.init();
  }, []);

  //Funcion eliminar usuario
  function borrarUsuario(idUsuario) {
    axios
      .delete(
        `${import.meta.env.VITE_BACKEND_URL}/api/usuario/borrarUsuario?idUsuario=${idUsuario}`
      )
      .then(() => {
        Swal.fire({
          title: "Usuario eliminado!",
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
        <div
          className="col-sm-6 offset-3"
          data-aos="fade-zoom-in"
          data-aos-easing="ease-in-back"
          data-aos-delay="400"
          data-aos-offset="0"
        >
          <ul className="list-group">
            {/* <li className="list-group-item">{usuario._id}</li> */}
            <li className="list-group-item  text-center">
              <p className="textoDescripcion">Id sistema :</p>
              {usuario.idUsuario}
            </li>
            <li className="list-group-item text-center">
              <p className="textoDescripcion">Nombre :</p>
              {usuario.nombre}
            </li>
            <li className="list-group-item text-center">
              <p className="textoDescripcion">Email:</p>
              {usuario.email}
            </li>
            <li className="list-group-item text-center">
              <p className="textoDescripcion">Teléfono</p>
              {usuario.telefono}
            </li>
            <li className="list-group-item text-center">
              <p className="textoDescripcion">Id mongo:</p>
              {usuario._id}
            </li>
          </ul>
          <div className="my-4  text-center">
            <Link to={`/editarusuario/${usuario.idUsuario}`}>
              <li className="btn btn-success col-sm-4 mx-2">Editar</li>
            </Link>
            {/* <button className="btn btn-success col-sm-4 mx-2">Editar</button> */}

            <button
              className="btn btn-danger col-sm-4 mx-2"
              onClick={() => {
                borrarUsuario(usuario.idUsuario);
              }}
            >
              Borrar
            </button>
          </div>
          <hr className="mt-4" />
        </div>
      </div>
    </div>
  );
}

// Define PropTypes para las props
UsuarioIndividual.propTypes = {
  usuario: PropTypes.shape({
    idUsuario: PropTypes.string.isRequired,
    nombre: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    telefono: PropTypes.string.isRequired,
  }).isRequired,
};

export default UsuarioIndividual;
