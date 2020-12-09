import React from "react";
import { Link, withRouter } from "react-router-dom";
import "../styles/Cuestionarionueve.css";

const Cuestionarionueve = (props) => {
  const { history } = props;
  return (
    <div className="cuestionario">
      <h9 className="Pregunta1">
      Si haces una recopilación de música y ya no te gusta tu artista favorito de los 15 años… ¿dónde debes tirar el CD?
      </h9><br></br><br></br><br></br>
      <button type="button" class="btn1 btn-success btn-lg btn-block" onClick={() => alert(`¡INCORRECTO! VUELVE A INTENTARLO`)}>
        Al contenedor amarillo, porque es de plastico
      </button>
      <button
        type="button"
        class="btn2 btn-danger btn-lg btn-block"
        onClick={() => alert(`¡INCORRECTO! VUELVE A INTENTARLO`)}
      >
        Al contenedor gris, porque no se recicla
      </button>
      <button type="button" class="btn3 btn-info btn-lg btn-block" onClick={() => alert(`¡CORRECTO!`) || history.push("/Cuestionariodiez")}>
        Ni uno ni lo otro, al punto limpio
      </button>
      
    </div>
  );
};

export default Cuestionarionueve;
