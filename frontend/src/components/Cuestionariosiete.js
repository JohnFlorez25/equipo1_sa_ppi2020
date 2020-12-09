import React from "react";
import { Link, withRouter } from "react-router-dom";
import "../styles/Cuestionariosiete.css";

const Cuestionariodos = (props) => {
  const { history } = props;
  return (
    <div className="cuestionario">
      <h6 className="Pregunta1">
      Después de revisar el botiquín de casa ¿qué hacemos con los medicamentos?
      </h6><br></br><br></br><br></br>

      <button type="button" class="btn1 btn-success btn-lg btn-block" onClick={() => alert(`¡INCORRECTO! VUELVE A INTENTARLO`)}>
        Al gris porque no se reciclan.
      </button>

      <button
        type="button"
        className="btn2 btn-danger btn-lg btn-block"
        onClick={() => alert(`¡INCORRECTO! VUELVE A INTENTARLO`)}
      >
        Se tiran al contenedor amarillo porque muchos envases llevan plastico.
      </button>

      <button type="button" className="btn3 btn-info btn-lg btn-block" onClick={() => alert(`¡CORRECTO!`) || history.push("/Cuestionarioocho")}>
        Hay que llevarlos a las farmacias, allí hay contenedores especiles.
      </button>
    </div>
  );
};

export default Cuestionariodos;
