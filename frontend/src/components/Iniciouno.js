import React from "react"; 
import {Link, withRouter} from "react-router-dom";
import "../styles/Iniciouno.css";

const Iniciouno = () => {
  return (
    <div>
      <main role="main">
        <section className="jumbotron text-center">
          <div className="container">
            <img className="logo" src="./img/logo.jpg" alt="logo" />
            <p className="lead text-muted">Bienvenidos</p>
            <p>
              <Link to="/Registro" className="btn btn-primary my-2">
                Registrate
              </Link>

              <Link to="/Sesion" className="btn btn-secondary my-2">
                Iniciar sesion
              </Link>
            </p>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Iniciouno;
