import React from "react";
import {BrowserRouter, Route} from "react-router-dom";


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

export default function Ppicontainer() {
  return (
  <BrowserRouter>
  <Route path= "/" exact component = {Iniciouno}/>
  <Route path= "/Registro" exact component = {Registro}/>
  <Route path= "/Sesion" exact component = {Sesion}/>
  <Route path= "/Grupos" exact component = {Grupos}/>
  <Route path= "/Menu" exact component = {Menu}/>
  <Route path= "/Tema" exact component = {Tema}/>
  <Route path= "/Temados" exact component = {Temados}/>
  <Route path= "/Tematres" exact component = {Tematres}/>
  <Route path= "/Temacuatro" exact component = {Temacuatro}/>
  <Route path= "/Temacinco" exact component = {Temacinco}/>


  </BrowserRouter>
  );
}
