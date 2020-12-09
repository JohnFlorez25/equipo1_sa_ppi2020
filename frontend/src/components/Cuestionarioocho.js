import React from "react";
import { Link, withRouter } from "react-router-dom";
import "../styles/Cuestionarioocho.css";

const Cuestionarioocho = (props) => {
  const { history } = props;
  return (
    <div className="cuestionario">
      <h6 className="Pregunta1">
      Los tapones y tapas de los envases de vidrio… ¿qué hacemos con ellos?
      </h6><br></br><br></br><br></br>

      <button type="button" class="btn1 btn-success btn-lg btn-block" onClick={() => alert(`¡INCORRECTO! VUELVE A INTENTARLO`)}>
        Lo tiramos junto  la botella al contenedor verde, para su reciclaje.
      </button>

      <button
        type="button"
        className="btn2 btn-danger btn-lg btn-block"
        onClick={() => alert(`¡CORRECTO!`) || history.push("/Cuestionarionueve")}
      >
        Se deben quitar de los envases de vidrio y tirarlos al contenedor amarillo.
      </button>

      <button type="button" className="btn3 btn-info btn-lg btn-block" onClick={() => alert(`¡INCORRECTO! VUELVE A INTENTARLO`)}>
        No se reciclan así que van a contenedor gris.
      </button>
    </div>
  );
};

export default Cuestionarioocho;
