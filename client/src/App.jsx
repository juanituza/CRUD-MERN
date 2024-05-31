import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import AgregarUsuario from "./AgregarUsuarios";
import EditarUsuario from "./EditarUsuario";
import ListaUsuarios from "./ListaUsuarios";

function App() {
  return (
    <div className="App">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <Link className="navbar-brand" to="/">
            CRUD MERN STACK
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Inicio
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/agregarusuario">
                  Agregar Usuario
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ListaUsuarios />} exact></Route>
          <Route
            path="/agregarusuario"
            element={<AgregarUsuario />}
            exact
          ></Route>
          <Route
            path="/editarusuario/:idUsuario"
            element={<EditarUsuario />}
            exact
          ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
