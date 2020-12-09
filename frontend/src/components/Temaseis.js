import React from "react";
import "../styles/Temaseis.css";

const Temaseis = (props) => {
  const { history } = props;
  return(
    <div>
      <p className="text-break"><br></br><br></br>
        <h4 align="center">¿Por qué reciclar ayuda al medio ambiente?</h4>
        <br></br><br></br>
        <h6>
          Reciclando evitamos que los productos y materiales se convietan en
          residuos, transformándolos en otros completamente nuevos, alargando su
          vida útil y ayudando a la preservación de los recursos naturales del
          planeta.{" "}
        </h6>
        <img className="casca" src="./img/cascada1.jpg" align="left" />
        <h6>El reciclaje forma parte de la Economía Circular, el modelo basado en
        aprovechar al 100% las materias primas, haciendo más eficientes los
        procesos de uso y fabricación.</h6> <br></br>
        <h6>
          Diversos estudios realizados por ESCI(School of International
          Studies), la Fundación Cidaut (Investigación y Desarrollo en
          Transporte y Energía) y la Cátedra UNESCO han demostrado que la
          Energía necesaria para conseguir materia prima reciclada es menor que
          la utilizada para obtener materia prima virgen.{" "}
        </h6>{" "}
      
      <h6>
        Reciclar conlleva ahorrar materias primas, Energía, Agua y reducir las
        emisiones de gases de efecto invernadero. Ademas supone una generacion
        de empleo y tejido industrial.
      </h6><br></br><br></br><br></br>

      <div class="alert alert-danger" role="alert">
        En el siguiente video podrás encontrar información más detallada. ¡Anímate a verlo! </div>

       
        <center>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/5q2HSdgO7CA?start=5" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </center>

        <div><br></br>
          <button type="button" className="btn btn-danger"
          onClick={() => history.goBack("/")}
          >
          Volver
          </button><br></br>


          </div>
          </p>
    </div>
  );
};

export default Temaseis;
