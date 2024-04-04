import React, { useEffect, useState } from "react";
import { Button, Card } from "react-bootstrap";
import "./Cartelera.css";
import Peliculas from "../../../data/Peliculas.json";

export default function Cartelera({seleccion}) {
  const [peliculas, setPeliculas] = useState([]);

  useEffect(() => {
    setPeliculas(Peliculas.peliculas);
  }, []);

  function seleccionar(id) {
    console.log(id);
    seleccion(id);
  }

  return (
    <div id="cartelera_container">
      <h3 id="cartelera_title">En cartelera</h3>
      <div id="cards_container">
        {peliculas.map((pelicula) => {
          return (
            <Card id="cartelera_card" key={pelicula.id}>
              <Card.Title id="card_title">{pelicula.nombre}</Card.Title>
              <Card.Img
                id="cartelera_card_img"
                variant="top"
                src={`src/imgs/${pelicula.img}.png`}
              />
              <Card.Footer id="card_footer">
                <Button id="card_button" variant="primary" onClick={() => seleccionar(pelicula.id)} href="#resena_container">
                  Dejar Reseña
                </Button>
              </Card.Footer>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
