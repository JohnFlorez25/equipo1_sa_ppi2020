import React from "react";
import "../styles/Temanueve.css";

const Temanueve = (props) => {
  const { history } = props;
  return (
    <div className="verde">
      <p className="text">
        <br></br>
        <p class="text-success"><br></br>
          <h5> Errores en el contenedor verde </h5>
        </p><br></br>
        <img className="casca" src="./img/contenedor3.jpg" align="left" />
        Es fundamental entre vidrio y cristal. es frecuente que a la hora de
        deshacernos de elementos de crital los depositemos en el contenedor
        verde y es un error. ¡Al verde sólo el vidrio! <br></br>
        <br></br>
        <h7>
          Errores comunes:
          <li>
            Las bombillas: no van en el contenedor verde, debemos llevarlas al
            punto limpio.{" "}
          </li>{" "}
          <li>
            Los espejos, ceniceros, vasos o vajillas: tambíen deben ser
            reciclados en un punto limpio.
          </li>
        </h7>{" "}
        <br></br>
        <p class="text-success"><br></br><br></br><br></br>
          <h5>tips para identificar el crital del vidrio </h5>
        </p>
        <p>
          Si quieres saber si una copa es de vidrio o de cristal debes golpear
          su borde con el dedo. Si el sonido producido es un "ping" corto sera
          una copa de vidrio mientras que si se produce un "ping" largo y con
          una bonita sonoridad será una copa de cristal. Además, las copas de
          cristal suelen ser más pesadas, transparentes, finas y delicadas{" "}
        </p>
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
        </div>
        <br></br>
        <br></br>
      </p>
    </div>
  );
};

export default Temanueve;
