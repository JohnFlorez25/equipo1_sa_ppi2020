import React from "react";
import "../styles/Temados.css";

const Temados = (props) => {
  const { history } = props;
  return (
    <div className="tem">
      <p className="text-break"><br></br>
        <h4 align="left">Tetra pak (brinks)</h4>
        <img className="Primera" src="./img/plasticotres.jpg" align="left" />
        ¿Sabías que con 6 briks puede hacerse una caja de zapatos? Reciclar el
        brik de leche o de zumo es muy sencillo. Tan solo debemos depositarlo en
        el contenedor amarillo y así conseguir darles una segunda vida.
      </p>

      <div>
        <p className="text-break">
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <h4 align="left">Latas</h4>
          <img
            className="Primera"
            src="./img/plasticocuatro.jpg"
            align="left"
          />
          Este tipo de envase está siempre presente en nuestra cocina. ¿Quién no
          tiene una lata de refresco o de conservas en el refrigerador? Las
          latas etán compuestas de aluminio y se pueden reciclar un número
          ilimitado de veces. ¡Al contenedor amarillo!
        </p>
      </div>

      <div>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
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
          onClick={() => history.push("/Tematres")}
        >
          Siguiente
        </button>
      </div>
      <br></br>
    </div>
  );
};
export default Temados;
