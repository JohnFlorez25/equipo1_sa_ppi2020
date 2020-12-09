import React from "react";
import "../styles/Temasiete.css";

const Temasiete = (props) => {
  const { history } = props;
  return (
    <div className="amarillo">
      <p className="text"><br></br>
        <h4 align="center">
          Son muchas las personas que a la hora de tirar un residuo se enfrentan
          a la pregunta "¿Esto va al azul o al amarillo?"
        </h4>
        <br></br><br></br>
        <p class="text-warning">
          <h5> Errores en el contenedor amarillo </h5>
        </p><br></br><br></br>
        <img className="casca" src="./img/contenedor.jpg" align="left" />
        Es habitual que pensemos que todos aquellos objetos que están fabricados
        con plásticos, y que ya no son útiles para nosotros, van al contenedor
        amarillo, pero esto no es así. Al contenedor amarillo solo debemos
        depositar los envases de plástico, latas y briks . <br></br>
        <br></br>
        <h7>
          NO deposites en el contenedor amarillo:
          <li>Juguetes de plástico: deben ir al contenedor de restos. </li>{" "}
          <li>Biberones y chupetes, también van al contenedor de restos.</li>
          <li>
            Utensilios de cocina que con el paso del tiempo y el uso dejan de
            ser útiles, como una espátula o un escurridor.{" "}
          </li>
          <li>
            Los cubos de plástico, como los de playa, son elementos que podemos
            reutilizar en casa como recipiente, pero una vez que se rompen o
            queremos renovarlos, podemos depositarlos en el contenedor de
            restos.{" "}
          </li>
        </h7>{" "}
        <div>
          <br></br><br></br><br></br><br></br>
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
            onClick={() => history.push("/Temaocho")}
          >
            Siguiente
          </button>
        </div>
      </p>
    </div>
  );
};

export default Temasiete;
