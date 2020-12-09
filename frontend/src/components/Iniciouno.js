import React from "react"; 
import {Link, withRouter} from "react-router-dom";
import "../styles/Iniciouno.css";

        
const Iniciouno = () => {

  return (
    <div className="uno">
      <main role="main">
        <section className="text-center">
          <div className="container"><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
            
            
            <p><br></br><br></br><br></br><br></br><br></br><br></br>
              <Link to="/Registro" className="btn btn-primary my-5">
                Registrate
              </Link>

              <Link to="/Sesion" className="btn btn-secondary my-5">
                Iniciar sesion
              </Link>
            </p>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Iniciouno;
