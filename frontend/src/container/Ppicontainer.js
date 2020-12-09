import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Iniciouno from "../components/Iniciouno";
import Registro from "../components/Registro";
import Sesion from "../components/Sesion";
import Grupos from "../components/Grupos";
import Menu from "../components/Menu";
import Tema from "../components/Tema";
import Temados from "../components/Temados";
import Tematres from "../components/Tematres";
import Temacuatro from "../components/Temacuatro";
import Temacinco from "../components/Temacinco";
import Temaseis from "../components/Temaseis";
import Temasiete from "../components/Temasiete";
import Temaocho from "../components/Temaocho";
import Temanueve from "../components/Temanueve";
import Temadiez from "../components/Temadiez";
import Temaonce from "../components/Temaonce";
import Cuestionariouno from "../components/Cuestionariouno";
import Cuestionariodos from "../components/Cuestionariodos";
import Cuestionariotres from "../components/Cuestionariotres";
import Cuestionariocuatro from "../components/Cuestionariocuatro";
import Cuestionariocinco from "../components/Cuestionariocinco";
import Cuestionarioseis from "../components/Cuestionarioseis";
import Cuestionariosiete from "../components/Cuestionariosiete";
import Cuestionarioocho from "../components/Cuestionarioocho";
import Cuestionarionueve from "../components/Cuestionarionueve";
import Cuestionariodiez from "../components/Cuestionariodiez";

export default function Ppicontainer() {
  return (
    <BrowserRouter>
      <Route path="/Iniciouno" exact component={Iniciouno} />
      <Route path="/Registro" exact component={Registro} />
      <Route path="/Sesion" exact component={Sesion} />
      <Route path="/Grupos" exact component={Grupos} />
      <Route path="/Menu" exact component={Menu} />
      <Route path="/Tema" exact component={Tema} />
      <Route path="/Temados" exact component={Temados} />
      <Route path="/Tematres" exact component={Tematres} />
      <Route path="/Temacuatro" exact component={Temacuatro} />
      <Route path="/Temacinco" exact component={Temacinco} />
      <Route path="/Temaseis" exact component={Temaseis} />
      <Route path="/Temasiete" exact component={Temasiete} />
      <Route path="/Temaocho" exact component={Temaocho} />
      <Route path="/Temanueve" exact component={Temanueve} />
      <Route path="/Temadiez" exact component={Temadiez} />
      <Route path="/Temaonce" exact component={Temaonce} />
      <Route path="/Cuestionariouno" exact component={Cuestionariouno} />
      <Route path="/Cuestionariodos" exact component={Cuestionariodos} />
      <Route path="/Cuestionariotres" exact component={Cuestionariotres} />
      <Route path="/Cuestionariocuatro" exact component={Cuestionariocuatro} />
      <Route path="/Cuestionariocinco" exact component={Cuestionariocinco} />
      <Route path="/Cuestionarioseis" exact component={Cuestionarioseis} />
      <Route path="/Cuestionariosiete" exact component={Cuestionariosiete} />
      <Route path="/Cuestionarioocho" exact component={Cuestionarioocho} />
      <Route path="/Cuestionarionueve" exact component={Cuestionarionueve} />
      <Route path="/Cuestionariodiez" exact component={Cuestionariodiez} />
      
    </BrowserRouter>
  );
}
