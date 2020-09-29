import React from "react";
import {BrowserRouter, Route} from "react-router-dom";


import Iniciouno from "../components/Iniciouno";
import Registro from "../components/Registro";
import Sesion from "../components/Sesion";




export default function Ppicontainer() {
  return (
  <BrowserRouter>
  <Route path= "/" exact component = {Iniciouno}/>
  <Route path= "/Registro" exact component = {Registro}/>
  <Route path= "/Sesion" exact component = {Sesion}/>
  </BrowserRouter>
  );
}
