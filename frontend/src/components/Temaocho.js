import React from "react";
import "../styles/Temaocho.css";

const Temaocho = (props) => {
  const { history } = props;
  return (
    <div>
      <p className="text-break">
        <br></br>
        <p class="text-primary">
          <h5> Errores en el contenedor azul </h5>
        </p>
        <br></br>
        <img className="casca" src="./img/contenedor2.jpg" align="left" />
        <br></br>
        En él depositamos envases de papel y cartón. pero en algunas ocasiones
        cometemos errores por la composición material de algunos residuos:
        <br></br>
        <h7>
          <br></br>
          <li>
            Uno de los principales errores que cometemos es con el brik de leche
            o de zumo. pensamos que es cartón y por lo tanto lo depositamos en
            el contenedor azul. pero esto no es así. El brik siempre va al
            contenedor amarillo, ya que está compuesto por cartón, plástico y
            aluminio.{" "}
          </li>{" "}
          <br></br>
          <li>
            Desechos diarios como serrvilletao papeles sucios deben ir en el
            contyenedor de desechos orgánicos. Los pañales también suelen ser un
            residuo impropio muy habitual de este contenedor, su lugar es en el
            contenedor de restos (el gris).{" "}
          </li>
        </h7>{" "}
        <div>
          <br></br>
          <br></br>
          <button
            type="button"
            className="btn btn-danger"
            onClick={() => history.goBack("/")}
          >
            Volver
          </button>
          <button
            type="button"
            className="btn btn-info"
            onClick={() => history.push("/Temanueve")}
          >
            Siguiente
          </button>
        </div>
        <br></br>
        <br></br>
      </p>
    </div>
  );
};

export default Temaocho;
