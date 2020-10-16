import React from "react";
import "../styles/Temacinco.css";

const Temacinco = (props) => {
  const { history } = props;
  return (
  <div className="carta"><br></br>
    <div className="card border-success mb-5">
  <div className="card-header">Mito N°3</div>
  <div className="card-body">
    <h5 className="card-title text-success">Los productos hechos de más de un tipo de material no pueden reciclarse</h5>
    <p className="card-text">Ahora, más del 60% de los hogares tienen acceso al reciclaje de cartón, gracias al uso de máquinas que pueden descomponer estos artículos en los materiales que los componen. Gracias en parte a la demanda de los consumidores, los fabricantes de productos han trabajado de forma constante para crear envases que sean más fáciles de reciclar.</p>
  </div>
</div>

<div className="card border-success mb-3">
  <div className="card-header">Mito N°4</div>
  <div className="card-body">
    <h5 className="card-title text-success">Los objetos solo se pueden reciclar una vez</h5>
    <p className="card-text">Muchos artículos pueden reciclarse varias veces, lo que conlleva ahorros importantes de energía y recursos naturales. Vidrios y metales, entre ellos el alumio, pueden reciclarse indefinidamente sin perder su calidad, La calidad del papel a partir de contenido reciclado ha mejorado drásticamente. El folio medio de papel de impresora virgen puede reciclaje de cinco a siete veces.</p>
  </div>
</div>

<div><br></br>
<button type="submit" className="btn btn-danger" 
          onClick = {()=> history.goBack("/")}>
            Volver
          </button>

      </div>
</div>

      
  )
}
export default Temacinco;