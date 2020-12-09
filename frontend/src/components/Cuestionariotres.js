import React from "react";
import { Link, withRouter } from "react-router-dom";
import "../styles/Cuestionariouno.css";

const Cuestionariouno = (props) => {
  const { history } = props;
  return (
    <div className="cuestionario">
      <h6 className="Pregunta1">
        A partir de lo aprendido. ¿Sabes para qué se utiliza el contenedor rojo?
      </h6><br></br><br></br>
      <button type="button" class="btn1 btn-success btn-lg btn-block" onClick={() => alert(`¡INCORRECTO! VUELVE A INTENTARLO`)}>
        Pilas y desechos peligrosos
      </button>
      <button type="button" class="btn3 btn-info btn-lg btn-block" onClick={() => alert(`¡INCORRECTO! VUELVE A INTENTARLO`)}>
        Aceites e insecticidad
      </button>
      <button
        type="button"
        class="btn2 btn-danger btn-lg btn-block"
        onClick={() => alert(`¡CORRECTO!`) || history.push("/Cuestionariocuatro")}
      >
        Las dos respuestas anteiores son correctas
      </button>
    </div>
  );
};

export default Cuestionariouno;
