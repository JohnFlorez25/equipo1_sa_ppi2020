import React from "react";


const Menu = () => {
  return(
    <div className="Menu">
      <div class="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom shadow-sm">
  <h5 class="my-0 mr-md-auto font-weight-normal">Perfil</h5>
  <nav class="my-2 my-md-0 mr-md-3">
    <a class="p-2 text-dark" href="/">Cambiar foto</a>
    <a class="p-2 text-dark" href="/">Ranking</a>
    <a class="p-2 text-dark" href="/">Eliminar perfil</a>
    
  </nav>
  <a class="btn btn-outline-primary" href="/">Cerrar sesión</a>
</div>

      <div className="card" >
  <div className="card-body">
    
   <img className="reci" src="./img/div1.jpeg" alt="reci" />
   <button type="button" class="btn btn-link text-success">¿Qué podemos reciclar?</button>

  </div>
</div>
<div className="card" >
  <div className="card-body">
    
    <img className="reci" src="./img/div2.jpeg" alt="reci" />
    <button type="button" class="btn btn-link text-success"> Desmintiendo mitos</button>

  </div>
</div>
<div className="card" >
  <div className="card-body">
    
    <img className="reci" src="./img/div3.jpeg" alt="reci" />
    <button type="button" class="btn btn-link text-success">Beneficios del reciclaje</button>
  </div>
</div>
<div className="card" >
  <div className="card-body">
    
    <img className="reci" src="./img/div4.jpeg" alt="reci" />
    <button type="button" class="btn btn-link text-success">Errores más comunes</button>
  </div>
</div>
<div className="card" >
  <div className="card-body">

    <img className="reci" src="./img/div5.jpeg"alt="reci" />
    <button type="button" class="btn btn-link text-success">Importancia de separar residuos</button>
  </div>
</div>
   

      </div>
    
  )

}

export default Menu;