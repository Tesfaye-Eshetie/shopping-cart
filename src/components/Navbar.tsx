import { Container, Nav, Navbar as NavbarBs } from "react-bootstrap";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <NavbarBs sticky="top" className="bg-white shadow-sm mb-3">
      <Container>
        <Nav className="me-auto">
          <Nav.Link to="/shopping-cart/" as={NavLink}>
            Home
          </Nav.Link>
          <Nav.Link to="/shopping-cart/store" as={NavLink}>
            Store
          </Nav.Link>
          <Nav.Link to="/shopping-cart/about" as={NavLink}>
            About
          </Nav.Link>
        </Nav>
      </Container>
    </NavbarBs>
  );
}
