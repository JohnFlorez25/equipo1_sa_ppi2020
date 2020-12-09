import React from "react";
import { Link, withRouter } from "react-router-dom";
import "../styles/Cuestionariodiez.css";

const Cuestionariodiez = (props) => {
  const { history } = props;
  return (
    <div className="cuestionario">
      <h3 className="Pregunta1">
      ¿Dónde se debe tirar el aceite vegetal usado tras cocinar?
      </h3><br></br><br></br><br></br>
      <button type="button" class="btn1 btn-success btn-lg btn-block" onClick={() => alert(`¡INCORRECTO! VUELVE A INTENTARLO`)}>
        El aceite usado se tira al campo porque es biodegradable.
      </button>
      <button
        type="button"
        class="btn2 btn-danger btn-lg btn-block"
        onClick={() => alert(`¡CORRECTO!`) || history.push("/Ranking")}
      >
        Se puede transportar en bidones al punto limpio o depositar en los contenedores especiales de la cuidad
      </button>
      <button type="button" class="btn3 btn-info btn-lg btn-block" onClick={() => alert(`¡INCORRECTO! VUELVE A INTENTARLO`)}>
        Se tira por el fregadero
      </button>
      
    </div>
  );
};

export default Cuestionariodiez;
