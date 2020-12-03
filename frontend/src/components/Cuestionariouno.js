import React from "react";
import { Link, withRouter } from "react-router-dom";
import "../styles/Cuestionariouno.css";

const Cuestionariouno = (props) => {
  const { history } = props;
  return (
    <div className="cuestionario">
      <div class="alert alert-warning alert-dismissible fade show" role="alert">
  <strong>Hola!</strong> Entraste a la parte donde vas a probar tus aprendizajes. Responde correctamente las preguntas y ocupa un buen lugar en el ranking.
  <button type="button" class="close" data-dismiss="alert" aria-label="Close">
    <span aria-hidden="true">&times;</span>
  </button>
</div>
      <center>
      <h1 align="center">Comencemos</h1>
      </center>
      <p className="Pregunta1">¿Por quiénes se provoca la tala de árboles?</p>
      <button type="button" class="btn1 btn-success btn-lg btn-block">
        Animales
      </button>
      <button
        type="button"
        class="btn2 btn-danger btn-lg btn-block"
        onClick={() => history.push("/Op1cuestionarioN1_2")}
      >
        Humanos
      </button>
      <button type="button" class="btn3 btn-info btn-lg btn-block">
        Ríos
      </button>
      <button type="button" class="btn4 btn-warning btn-lg btn-block">
        Aire
      </button>
    </div>
  );
};

export default Cuestionariouno;
