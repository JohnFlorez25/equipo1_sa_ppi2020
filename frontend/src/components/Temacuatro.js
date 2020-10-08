import React from "react";
import "../styles/Temacuatro.css";


const Temacuatro = (props) => {
  const { history } = props;
  return (
  <div className="pagi"><br></br>
    <div className="card border-success mb-5">
  <div className="card-header">Mito N°1</div>
  <div className="card-body">
    <h5 className="card-title text-success">Cuesta más el reciclaje que fabricar algo nuevo</h5>
    <p className="card-text">El coste económico y ambiental de la extracción de materias primas para la creación de nuevos productos dupera al del reciclaje. Además, reciclando se ahorra energía, agua y se reduce la contaminación que supondría la obtención y tratamiento de las materias primas.</p>
  </div>
</div>

<div className="card border-success mb-3">
  <div className="card-header">Mito N°2</div>
  <div className="card-body">
    <h5 className="card-title text-success">Los productos reciclados tienen peor calidad</h5>
    <p className="card-text">Para hacerse una idea de los productos nuevos que se pueden optener con material reciclado como materia prima, con 40 botellas de agua se puede hacer un forro polar; 80 latas de refrescos pueden ser una llanta de bicicleta; 6 briks se pueden transformar en una caja de zapatos y ocho caja de cereales pueden ser un libro.</p>
  </div>
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
          onClick={() => history.push("/Temacinco")}
        >
          Siguiente
        </button>
      </div>
</div>

      
  )
}
export default Temacuatro;