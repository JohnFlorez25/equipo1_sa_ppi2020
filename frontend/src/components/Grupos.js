import React from "react";
import "../styles/Grupos.css";

const Grupos = (props) => {
  const {history} = props;
  return(
    <div className="grado">
      <h1 align="center">Seleccione el grado a participar</h1>
      <div className="dropdown"><br></br><br></br>
  <button className="btn btn-secondary dropdown-toggle my-2" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Grados de 6°- 8°
  </button><br></br><br></br>
  <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
    <a className="dropdown-item" href="/">6-1</a>
    <a className="dropdown-item" href="/">6-2</a>
    <a className="dropdown-item" href="/">7-1</a>
    <a className="dropdown-item" href="/">7-2</a>
    <a className="dropdown-item" href="/">8-1</a>
    <a className="dropdown-item" href="/">8-2</a>
  </div>
</div>


     <div className="dropdown">
  <button className="btn btn-secondary dropdown-toggle my-3" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Grados de 9°- 11°
  </button><br></br><br></br><br></br>
  <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
    <a className="dropdown-item" href="/">9-1</a>
    <a className="dropdown-item" href="/">9-2</a>
    <a className="dropdown-item" href="/">10-1</a>
    <a className="dropdown-item" href="/">10-2</a>
    <a className="dropdown-item" href="/">11-1</a>
    <a className="dropdown-item" href="/">11-2</a>
  </div>
</div>
<button type="submit" className="btn btn-danger" 
          onClick = {()=> history.push("/Menu")}>
            Realizado
          </button><br></br><br></br><br></br>


      </div>
    
  )
}

export default Grupos;