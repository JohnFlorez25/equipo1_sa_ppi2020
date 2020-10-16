import React from "react";
import "../styles/Tema.css";

const Tema = (props) => {
  const { history } = props;
  return (
    <div className="tem">
      <p className="text-break">
        <h4 align="left">Envases de plástico</h4>
        <img className="Primera" src="./img/plastico.jpg" align="left" />
        Reducir suconsumo, reutilizar y reciclar son las tres acciones básicas
        para reducir su impacto, ya que el plástico tarda alrededor de 700 años
        en degradarse. Por eso, es importante depositar en el contenedor
        amarillo los envases reciclables como:
      </p>
      <ul>
        <li>Botellas de plástico</li>
        <li>Bote de detergente, champú, gel</li>
        <li>Las bolsas de patatas</li>
        <li>Tapas y tapones de plástico</li>
        <li>Bolsas y plástico (excepto las bolsas de basura)</li>
        <li>Tarrinas y tapas de yogurt</li>
      </ul>
      <div>
        <p className="text-break">
          <br></br>
          <h4 align="left">Envases de papel y cartón</h4>
          <img className="Primera" src="./img/plasticodos.jpg" align="left" />
          Todos los materiales de pael y cartón deben ir al contenedor azul para
          ser reciclados y ayudar a reducir la sobreexplotación de los recursos
          naturales, algunos de estos son:
        </p>
        <ul>
          <br></br>
          <li>Revistas</li>
          <li>Periodicos viejos</li>
          <li>Cajas de cereales</li>
          <li>Cajas de zapatos</li>
          <li>Papel de envolver</li>
          <li>Cuadernos</li>
        </ul>
      </div>

      <div className="Centrado">
        <button
          type="submit"
          className="btn btn-danger"
          onClick={() => history.goBack("/")}
        >
          Volver
        </button>

        <button
          type="submit"
          className="btn btn-info"
          onClick={() => history.push("/Temados")}
        >
          Siguiente
        </button>
      </div>
    </div>
  );
};
export default Tema;
