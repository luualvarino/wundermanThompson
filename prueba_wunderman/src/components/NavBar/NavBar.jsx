import { Container, Nav, Navbar } from "react-bootstrap";
import "./NavBar.css";

export default function NavBar() {
  return (
    <Navbar bg="dark" data-bs-theme="dark" id="nav" fixed="top">
      <Container id="container">
        <Navbar.Brand id="navLogo" href="#home">DreamView</Navbar.Brand>
        <Nav>
          <Nav.Link id="navItem" href="#carrusel_container">Destacadas</Nav.Link>
          <Nav.Link id="navItem" href="#cartelera_container">Cartelera</Nav.Link>
          <Nav.Link id="navItem" href="#resena_container">Dejar Reseña</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}
