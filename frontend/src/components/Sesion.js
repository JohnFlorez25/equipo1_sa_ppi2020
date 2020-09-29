import React from "react";

const Sesion = () => {
  return(
<div>
<div className="container">
        <h2 align="center">Inicia sesión</h2>
        <p align="center">
          ¡Bienvenido!
        </p>
        <form action="/action_page.php" className="was-validated">
          <div className="form-group">
            <label for="uname">Correo:</label>
            <input
              type="text"
              className="form-control"
              id="uname"
              placeholder="Ingresa correo"
              name="uname"
              required
            />
            <div className="valid-feedback">Valid.</div>
            <div className="invalid-feedback">Por favor rellene este campo.</div>
          </div>
          <div className="form-group">
            <label for="pwd">Contraseña:</label>
            <input
              type="password"
              className="form-control"
              id="pwd"
              placeholder="Ingresa contraseña"
              name="pswd"
              required
            />
            <div className="valid-feedback">Valid.</div>
            <div className="invalid-feedback">Por favor rellene este campo.</div>
          </div>
          <div className="form-group form-check">
            <label className="form-check-label">
              <input
                className="form-check-input"
                type="checkbox"
                name="remember"
                required
              />{" "}
              Estoy de acuerdo.
              <div className="valid-feedback">Valid.</div>
              <div className="invalid-feedback">
              Marque esta casilla de verificación para continuar.
              </div>
            </label>
          </div>
          
         
          <button type="submit"  className="btn btn-success">
            Vamos
          </button>

        </form>
      </div>


</div>

    
  )

}

export default Sesion;