import React, { useState } from "react";
import Carrusel from "./Destacadas/Carrusel";
import Cartelera from "./Cartelera/Cartelera";
import "./Contenido.css";
import DejarResena from "./DejarResena/DejarResena";

export default function Contenido() {

  const [seleccionada, setSeleccionada] = useState(1);

  function seleccionar(id){
    setSeleccionada(id)
  }

  return (
    <div id="content_container">
      <Carrusel seleccion={seleccionar}></Carrusel>
      <Cartelera seleccion={seleccionar}></Cartelera>
      <DejarResena id={seleccionada}></DejarResena>
    </div>
  );
}
