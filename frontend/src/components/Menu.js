import React from "react";
import "../styles/Menu.css";
import { Link, withRouter } from "react-router-dom";

const Menu = (props) => {
  const { history } = props;
  return (
    <div className="completo">
      <div className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom shadow-sm">
        <h5 className="my-0 mr-md-auto font-weight-normal">Perfil</h5>
        <nav className="my-2 my-md-0 mr-md-3">
          <a className="p-2 text-danger" href="/Cuestionariouno">
            Juego
          </a>
          <a className="p-2 text-dark" href="/">
            Ranking
          </a>
          <a className="p-2 text-dark" href="/">
            Eliminar perfil
          </a>
        </nav>
        <Link className="btn btn-outline-primary" to="/">
          Cerrar sesión
        </Link>
      </div>

      <div className="card">
        <div className="card-body">
          <img className="reci" src="./img/div1.jpeg" alt="reci" />
          <button
            type="button"
            class="btn btn-link text-success"
            onClick={() => history.push("/Tema")}
          >
            ¿Qué podemos reciclar?
          </button>
        </div>
      </div>
      <div className="card">
        <div className="card-body">
          <img className="reci" src="./img/div2.jpeg" alt="reci" />
          <button
            type="button"
            class="btn btn-link text-success"
            onClick={() => history.push("/Temacuatro")}
          >
            Desmintiendo mitos
          </button>
        </div>
      </div>
      <div className="card">
        <div className="card-body">
          <img className="reci" src="./img/div3.jpeg" alt="reci" />
          <button
            type="button"
            class="btn btn-link text-success"
            onClick={() => history.push("/Temaseis")}
          >
            Beneficios del reciclaje
          </button>
        </div>
      </div>
      <div className="card">
        <div className="card-body">
          <img className="reci" src="./img/div4.jpeg" alt="reci" />
          <button
            type="button"
            class="btn btn-link text-success"
            onClick={() => history.push("/Temasiete")}
          >
            Errores más comunes
          </button>
        </div>
      </div>
      <div className="card">
        <div className="card-body">
          <img className="reci" src="./img/div5.jpeg" alt="reci" />
          <button
            type="button"
            class="btn btn-link text-success"
            onClick={() => history.push("/Temadiez")}
          >
            Importancia de separar residuos
          </button>
        </div>
      </div>
    </div>
  );
};

export default Menu;
