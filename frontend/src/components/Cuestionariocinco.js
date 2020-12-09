import React from "react";
import { Link, withRouter } from "react-router-dom";
import "../styles/Cuestionariocinco.css";

const Cuestionariocinco = (props) => {
  const { history } = props;
  return (
    <div className="cuestionario">
      <h6 className="Pregunta1">
      Estás preparando un batido de fresas y de repente… ¡se te rompe un vaso! ¿Qué debes hacer con él?
      </h6><br></br><br></br>

      <button type="button" class="btn1 btn-success btn-lg btn-block" onClick={() => alert(`¡INCORRECTO! VUELVE A INTENTARLO`)}>
        Depositarlo en el contenedor verde
      </button>

      <button
        type="button"
        className="btn2 btn-danger btn-lg btn-block
        " onClick={() => alert(`¡INCORRECTO! VUELVE A INTENTARLO`)}
        
      >
    
        Quizá van en el contenedor amarillo
      </button>

      <button type="button" className="btn3 btn-info btn-lg btn-block" onClick={() => alert(`¡CORRECTO!`) || history.push("/Cuestionarioseis")}>
        Los vasos de cristal se tiran al contenedor gris o se llevan a un punto limpio
      </button>
    </div>
  );
};

export default Cuestionariocinco;
