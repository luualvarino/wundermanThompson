import React, { useEffect, useState } from "react";
import "./DejarResena.css";
import { Button, Form, Modal } from "react-bootstrap";
import Peliculas from "../../../data/Peliculas.json";

export default function DejarResena({ id }) {
  const [peliculas, setPeliculas] = useState([]);
  const [seleccionada, setSeleccionada] = useState(id);
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [resena, setResena] = useState("");
  const nombreTxt = document.getElementById("form_nombre");
  const emailTxt = document.getElementById("form_email");
  const resenaTxt = document.getElementById("form_resena");
  const [pelicula, setPelicula] = useState("");
  const [show, setShow] = useState(false);

  function handleClose() {
    setShow(false);
    vaciarFormulario();
  }

  useEffect(() => {
    peliculas.forEach((peli) => {
      if (peli.id === seleccionada) {
        setPelicula(peli.nombre);
      }
    });
  }, [show]);

  useEffect(() => {
    setPeliculas(Peliculas.peliculas);
    const formButton = document.getElementById("finalizar_button");
    formButton.setAttribute("disabled", "true");
  }, []);

  useEffect(() => {
    setSeleccionada(id);
  }, [id]);

  useEffect(() => {
    if (nombreTxt && emailTxt && resenaTxt) {
      validarNombre();
      validarEmail();
      validarResena();
      validarBoton();
    }
  }, [nombre, email, resena]);

  function validarNombre() {
    if (nombre.length > 3) {
      nombreTxt.style.display = "none";
    } else {
      nombreTxt.style.display = "block";
    }
  }

  function validarEmail() {
    if (/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
      emailTxt.style.display = "none";
    } else {
      emailTxt.style.display = "block";
    }
  }

  function validarResena() {
    if (resena.length > 10) {
      resenaTxt.style.display = "none";
    } else {
      resenaTxt.style.display = "block";
    }
  }

  function validarBoton() {
    const formButton = document.getElementById("finalizar_button");
    if (
      emailTxt.style.display === "none" &&
      nombreTxt.style.display === "none" &&
      resenaTxt.style.display === "none"
    ) {
      formButton.removeAttribute("disabled");
    } else {
      formButton.setAttribute("disabled", "true");
    }
  }

  function vaciarFormulario() {
    setNombre("");
    setEmail("");
    setResena("");
  }

  return (
    <div id="resena_container">
      <div id="resena_txt">
        <h3>Reseña de películas</h3>
        <p>Deja tu opinión</p>
      </div>
      <div id="form_container">
        <Form id="resena_form">
          <Form.Group className="mb-3">
            <Form.Label id="form_label">Seleccione Película</Form.Label>
            <Form.Select
              id="form_input"
              aria-label="Default select example"
              value={seleccionada}
              onChange={(e) => setSeleccionada(e.target.value)}
            >
              {peliculas.map((pelicula) => (
                <option value={pelicula.id} key={pelicula.id}>
                  {pelicula.nombre}
                </option>
              ))}
            </Form.Select>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label id="form_label">Nombre Completo</Form.Label>
            <Form.Control
              id="form_input"
              className="form_input"
              type="text"
              placeholder="Juan Pérez"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
            />
            <Form.Text id="form_nombre">
              El nombre debe tener al menos 4 caracteres.
            </Form.Text>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label id="form_label">E-mail</Form.Label>
            <Form.Control
              id="form_input"
              className="form_input"
              type="email"
              placeholder="JuanPerez@mail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Form.Text id="form_email">
              Por favor ingrese un email válido.
            </Form.Text>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label id="form_label">Reseña</Form.Label>
            <Form.Control
              id="form_input"
              className="form_input"
              as="textarea"
              rows={4}
              value={resena}
              onChange={(e) => setResena(e.target.value)}
            />
            <Form.Text id="form_resena">
              La reseña debe tener al menos 10 caracteres.
            </Form.Text>
          </Form.Group>
          <Form.Group id="form_buttons">
            <Button
              id="finalizar_button"
              variant="primary"
              type="button"
              onClick={() => setShow(true)}
            >
              Finalizar
            </Button>
            <Button
              id="reiniciar_button"
              variant="primary"
              type="button"
              onClick={vaciarFormulario}
            >
              Reiniciar
            </Button>
          </Form.Group>
        </Form>
      </div>
      <div id="modal_container">
        <Modal
          id="modal_success"
          show={show}
          onHide={() => handleClose()}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Body id="modal_body">
            <h5 id="txt_resena">Reseña de películas</h5>
            <Modal.Title>¡Muchas Gracias {nombre.split(" ")[0]}!</Modal.Title>
            <img id="modal_img" src={`src/imgs/star2.png`} />
            <h5>Tu reseña sobre la película "{pelicula}" ha sido enviada.</h5>
          </Modal.Body>
        </Modal>
      </div>
    </div>
  );
}
