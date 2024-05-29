import { useEffect, useState } from "react";
import UsuarioIndividual from "./UsuarioIndeividual";
import axios from "axios";

function ListaUsuarios() {
  const [datausuarios, setdatausuario] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/usuario/obtenerusuario")
      .then((res) => {
        // console.log(res.data)
        setdatausuario(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  // Mapear lista de usuarios en objeto usuario
  const listausuarios = datausuarios.map((usuario) => {
    return (
      <div key={usuario.idUsuario}>
        <UsuarioIndividual usuario={usuario} />
      </div>
    );
  });

  return (
    <div className="container">
      <div className="row">
        <h2 className="mt-4">Lista Usarios</h2>
        {listausuarios}
      </div>
    </div>
  );
}

export default ListaUsuarios;
