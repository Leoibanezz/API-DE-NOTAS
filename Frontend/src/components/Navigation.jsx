import { Link, Navigate } from "react-router-dom";


export const Navigation = () => {
  const existToken = () => {
    const token = localStorage.getItem("authToken")
    
    return token

  }

  const logOut = () =>{
    if (existToken()) {
      localStorage.clear()
      
      
    }
  }
  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark p-3"
      style={{ background: "#000" }}
    >
      <div className="container">
        <Link className="navbar-brand" to="/">
          <i className="material-icons">Tu api de Notas</i>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item active">
              <Link to="/Notes" className="nav-link">
                Notas
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/create" className="nav-link">
                Crear Nota
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/user" className="nav-link">
                Crear Usuario
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/landing" className="nav-link">
                Landing Page
              </Link>
            </li>
            <li className="nav-item">
              <Link to= {existToken()?"/":"/login"} className="nav-link" onClick={logOut}>
                 {existToken()?"Cerrar Sesion":"Iniciar sesion"}
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
