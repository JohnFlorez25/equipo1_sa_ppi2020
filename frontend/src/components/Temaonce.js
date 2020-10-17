import React from "react";
import "../styles/Temaonce.css";

const Temaonce = (props) => {
  const { history } = props;
  return (
    <div className="ino">
      <p className="text"><br></br>
        <h4 align="left">Inorgánica</h4>
        <img className="ano" src="./img/inorganica.png" align="left" />
       Los residuos inorgánicos son aquellos de orígen no biológico, de orígen industrial o de algún proceso no natural, que expuestos a las condiciones ambientales naturales, tarda mucho tiempo en degradarse, es decir, no vuelven a integrarse a la tierra, sino tras un largo periodo de tiempo. La finalidad de dichos desperdicios es la elaboración de productos como envases, piezas automotrices, productos decorativos, etc...  
      </p><br></br><br></br><br></br><br></br><br></br>
      
      
        
          <h4 align="left">PET</h4>
          <img className="ano" src="./img/pet.gif" align="left" />
          Todos los materiales de pael y cartón deben ir al contenedor azul para
          ser reciclados y ayudar a reducir la sobreexplotación de los recursos
          naturales, algunos de estos son:
        
        
      <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>

      <div className="Centrado">
        <button
          type="submit"
          className="btn btn-danger"
          onClick={() => history.goBack("/")}
        >
          Volver
        </button>

        
      </div>
    </div>
  );
};
export default Temaonce;
