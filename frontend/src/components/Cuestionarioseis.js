import React from "react";
import { Link, withRouter } from "react-router-dom";
import "../styles/Cuestionarioseis.css";

const Cuestionarioseis = (props) => {
  const { history } = props;
  return (
    <div className="cuestionario">
      
      <h6 className="Pregunta1">A la hora del recreo, al salir de excursión, cuando terminamos el sándwich o bocadillo ¿qué hacemos con el papel film? </h6>
      <button
        type="button"
        class="btn2 btn-danger btn-lg btn-block"
        onClick={() => alert(`¡CORRECTO!`) || history.push("/Cuestionariosiete")}
      >
        Siempre al contenedor amarillo
      </button>
      <button type="button" class="btn3 btn-info btn-lg btn-block" onClick={() => alert(`¡INCORRECTO! VUELVE A INTENTARLO`)}>
        No se puede reciclar porque es muy fino y ya ha sido reciclado.
      </button>
      <button type="button" class="btn4 btn-warning btn-lg btn-block" onClick={() => alert(`¡INCORRECTO! VUELVE A INTENTARLO`)}>
        Guardar los restos y tras juntarlos llevarlos a un punto limpio.
      </button>
    </div>
  );
};

export default Cuestionarioseis;
