import React from "react";


const Registro = (props) => {
const {history} = props;
  return (
    <div className="Ini">
      <div className="container">
        <h2 align="center">Registro</h2>
        <p align="center">
          ¡Inicia tu experiencia!
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
          <div>
          <button type="submit" className="btn btn-info"
          onClick = {()=> history.push("/Grupos")}>
          Profesor
          </button>
          
          <button type="submit" className="btn btn-info"
           onClick = {()=> history.push("/Grupos")}>
          Estudiante
          </button>
          </div>
          <br>
          </br>
          <button type="submit" className="btn btn-danger" 
          onClick = {()=> history.goBack("/")}>
            Atrás
          </button>

        </form>
      </div>
    </div>
  );
};

export default Registro;

