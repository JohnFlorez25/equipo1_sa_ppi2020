import React from "react";
import "../styles/Temadiez.css";

const Temadiez = (props) => {
  const { history } = props;
  return(
    <div className="orga">
      <p className="text-center">
        
        <br></br>
        

        <img className="perso" src="./img/personas.jpg"/><br></br><br></br>
        El destino que le damos a los materiales que pueden ser reciclados o reutilizados es otra buena forma de contribuir a la sustentabilidad significativamente, por ello la importancia de hacer una buena separación y recolección de nuestros desechos es vital.       
        <br></br><br></br>
        </p>
        <h4 align="left">Orgánica</h4>
        <img className="dese" src="./img/organica.png" align="left" />
        Son desperdicios de alimentos como cascaras de fruta y verdura o cualquier otro alimento (no carnes), cascaron de huevo y desechos de jardin. La finalidad de esta basura, es la elaboración de compotas, abonos y gas natural a través de la biotenología. 
      
        

        <div><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
          <button type="button" className="btn btn-danger"
          onClick={() => history.goBack("/")}
          >
          Volver
          </button>
          <button type="button" className="btn btn-info"
          onClick={() => history.push("/Temaonce")}
          >
          Siguiente
          </button>

          </div>
          
    </div>
  );
};

export default Temadiez;