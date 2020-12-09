import React from "react";
import { Link, withRouter } from "react-router-dom";
import "../styles/Cuestionariouno.css";

const Cuestionariouno = (props) => {
  const { history } = props;
  return (
    <div className="cuestionario">
      <div class="alert alert-info alert-dismissible fade show" role="alert">
        <strong>Hola!</strong> Entraste a la parte donde vas a probar tus
        aprendizajes. Responde correctamente las preguntas y ocupa un buen lugar
        en el ranking.
        <button
          type="button"
          class="close"
          data-dismiss="alert"
          aria-label="Close"
        >
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
    
      <h6 className="Pregunta1">A partir de lo aprendido. ¿Cuál de estas acciones NO pertenece a la regla de las 3 erres de la sostenibilidad?</h6>
      <button type="button" class="btn1 btn-success btn-lg btn-block" onClick={() => alert(`¡INCORRECTO! VUELVE A INTENTARLO`)}>
        Reducir
      </button>
      <button
        type="button"
        class="btn2 btn-danger btn-lg btn-block"
        onClick={() => alert(`¡CORRECTO!`) || history.push("/Cuestionariodos")}
      >
        Respetar
      </button>
      <button type="button" class="btn3 btn-info btn-lg btn-block" onClick={() => alert(`¡INCORRECTO! VUELVE A INTENTARLO`)}>
        Reutilizar
      </button>
      <button type="button" class="btn4 btn-warning btn-lg btn-block" onClick={() => alert(`¡INCORRECTO! VUELVE A INTENTARLO`)}>
        Reciclar
      </button>
    </div>
  );
};

export default Cuestionariouno;
