import React from "react";
import { Link, withRouter } from "react-router-dom";
import "../styles/Cuestionariocuatro.css";

const Cuestionariocuatro = (props) => {
  const { history } = props;
  return (
    <div className="cuestionario">
      <h9 className="Pregunta1">
      Las baterías, los teléfonos móviles, ordenadores y otros electrodomésticos o aparatos electrónicos, poseen entre sus componentes elementos altamente contaminantes como el litio y otros metales pesados. ¿Sabes dónde debes depositarlos cuando ya no son útiles?
      </h9><br></br><br></br><br></br>
      <button type="button" class="btn1 btn-success btn-lg btn-block" onClick={() => alert(`¡INCORRECTO! VUELVE A INTENTARLO`)}>
        En el contenedor gris
      </button>
      <button
        type="button"
        class="btn2 btn-danger btn-lg btn-block"
        onClick={() => alert(`¡CORRECTO!`) || history.push("/Cuestionariocinco")}
      >
        En un punto limpio
      </button>
      <button type="button" class="btn3 btn-info btn-lg btn-block" onClick={() => alert(`¡INCORRECTO! VUELVE A INTENTARLO`)}>
        En el contenedor de desechos generales
      </button>
      
    </div>
  );
};

export default Cuestionariocuatro;
