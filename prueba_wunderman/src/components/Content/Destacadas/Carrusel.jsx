import Carousel from "react-bootstrap/Carousel";
import "./Carrusel.css";
import { Card } from "react-bootstrap";
import { useEffect, useState } from "react";
import Peliculas from "../../../data/Peliculas.json";

export default function Carrusel({ seleccion }) {
  const [peliculas, setPeliculas] = useState([]);

  useEffect(() => {
    setPeliculas(Peliculas.peliculas);
  }, []);

  function seleccionar(id) {
    seleccion(id);
  }

  return (
    <div id="carrusel_container">
      <Carousel id="carrusel" slide={false}>
        {peliculas.slice(0, 3).map((pelicula) => {
          return (
            <Carousel.Item id="carrusel_item" key={pelicula.id}>
              <div id="img_container">
                <img
                  src={`src/imgs/${pelicula.img}.png`}
                  id="carrusel_img"
                  alt="slide"
                  height="500px"
                  width="350px"
                />
              </div>
              <Carousel.Caption id="carrusel_caption">
                <h3 id="carrusel_label">{pelicula.nombre}</h3>
                <p id="carrusel_text">{pelicula.descripcion}</p>
                <Card id="carrusel_card">
                  <Card.Img
                    id="card_img"
                    variant="top"
                    src="src\imgs\star.png"
                  />
                  <Card.Body id="card_body">
                    <Card.Title>{pelicula.puntuacion}/10 IMDB</Card.Title>
                  </Card.Body>
                </Card>
              </Carousel.Caption>
              <div id="carrusel_buttons">
                <a id="carrusel_button" href={pelicula.trailer}>
                  <img
                    id="trailer_img"
                    src="src\imgs\movie.png"
                    alt="trailer"
                    height="50px"
                    width="50px"
                  />
                  <p id="button_txt">Ver trailer</p>
                </a>
                <a id="carrusel_button" href="#resena_container" onClick={() => seleccionar(pelicula.id)}>
                  <img
                    id="ticket_img"
                    src="src\imgs\rate.png"
                    alt="trailer"
                    height="50px"
                    width="50px"
                  />
                  <p id="button_txt">Dejar Reseña</p>
                </a>
              </div>
            </Carousel.Item>
          );
        })}
      </Carousel>
    </div>
  );
}
