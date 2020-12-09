import React from "react";
import { Link, withRouter } from "react-router-dom";
import "../styles/Cuestionariodos.css";

const Cuestionariodos = (props) => {
  const { history } = props;
  return (
    <div className="cuestionario">
      <h6 className="Pregunta1">
        A partir de lo aprendido. ¿Cuál de estos colores no pertenece a un
        contenedor de reciclaje?
      </h6><br></br><br></br><br></br>

      <button type="button" class="btn1 btn-success btn-lg btn-block" onClick={() => alert(`¡INCORRECTO! VUELVE A INTENTARLO`)}>
        Amarillo
      </button>

      <button
        type="button"
        className="btn2 btn-danger btn-lg btn-block"
        onClick={() => alert(`¡CORRECTO!`) || history.push("/Cuestionariotres")}
      >
        Negro
      </button>

      <button type="button" className="btn3 btn-info btn-lg btn-block" onClick={() => alert(`¡INCORRECTO! VUELVE A INTENTARLO`)}>
        Verde
      </button>
    </div>
  );
};

export default Cuestionariodos;
