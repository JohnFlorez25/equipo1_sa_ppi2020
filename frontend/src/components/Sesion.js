import React from "react";
import "../styles/Sesion.css";

const Sesion = (props) => {
  const {history} = props;
  return(
<div className="nuevo">
<div className="container"><br></br><br></br><br></br>
        <h1 align="center">Inicia sesión</h1><br></br>
        <h4 align="center">¡Bienvenidos!</h4>
        <form action="/action_page.php" className="was-validated">
          <div className="form-group"><br></br>
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
          </div><br></br><br></br>

          <button type="submit" className="btn btn-danger" 
          onClick = {()=> history.goBack("/")}>
            Atrás
          </button>
          
          <button type="submit"  className="btn btn-success"
          onClick = {()=> history.push("/Menu")}>
            Vamos
          </button>

        </form>
      </div>


      </div>

    
  )
 
}
export default Sesion;