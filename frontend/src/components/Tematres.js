import React from "react";
import "../styles/Tematres.css";

const Tematres = (props) => {
  const {history} = props;
  return(
    <div className="tem">
      <p className="text-break">
      <h4 align="left">Vidrio</h4>
      <img className="Primera" src="./img/plasticocinco.jpg" align="left"/>
        Este material se puede volver a reutilizar mediante un proceso de lavado de desechos a través de su fundición y puede ser reciclado al 100% una cantidad indefinida de veces. Para ello debemos separarlos del resto de materiales. ¡Al contenedor verde! Aquí debemos depositar: 

        </p> 
        <ul>
    <li>Botellas de vidrio (vinos, cava...)</li>
    <li>Frascos de vidrio (como perfumes y colonias)</li>
    <li>Tarros de alimentos (mermeladas, conservas, etc...)</li>
    
</ul>
<div><br></br><br></br>

<p className="text-break">
      <h4 align="left">Pilas y baterías</h4>
      <img className="Primera" src="./img/plasticoseis.jpg" align="left"/>
        Podemos encontrarlas a diario en el control de la tele, el ratón del ordenador o en la maquinilla de afeitar y nunca debemos tirarlas a la basura con el restro de residuos, Tienen componentes altamente contamiantes, por lo que es muy importante llevarlas a los contenedores de residuos peligrosos que tengamos más cerca de casa o al punto limpio.

        </p> 

</div>

<div><br></br><br></br><br></br><br></br><br></br>
      <p className="text-break">
      <h4 align="left">Otros</h4>
      <img className="Primera" src="./img/plasticocinco.jpg" align="left"/>
        Los siguientes productos y muchos otros también se pueden reciclar gracias a los puntos limpios. La ropa tambíen es reciclable, simplemente habrá que llevarla a los puntos habilitados para ello.

        </p> 
        <ul>
    <li>Electrodomésticos</li>
    <li>Aparatos electrónicos</li>
    <li>Bonbillas</li>
    <li>Aceites usados</li>
    <li>Muebles</li>
</ul>
</div>

<div><br></br> tea
          <button type="button" className="btn btn-danger"
          onClick={() => history.goBack("/")}
          >
          Volver
          </button>

          </div>
 
 


      </div>
    
  )
}
export default Tematres;