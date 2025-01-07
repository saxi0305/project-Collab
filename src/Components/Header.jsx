import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { navLinks } from "../Constants";
import Button from "react-bootstrap/Button";

const Header = () => {
  return (
    <Navbar
      className="bg-body-tertiary flex-md-row w-100" expand="lg" fixed="top"
    >
      <Container>
        <Navbar.Brand href="#home" className="d-flex align-items-center gap-2">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSS_3MoFqd5f2N5n6gK3IB0BF4UHOURvdnTZg&s"
            width="40"
            height="40"
            alt="logo image"
          />
          <h2 className="text-primary">Collab</h2>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {navLinks.map((link) => (
              <Nav.Link key={link.name} href={link.href}>
                {link.name}
              </Nav.Link>
            ))}
          </Nav>
          <div className="d-flex justify-content-end align-items-center flex-wrap gap-2">
            <Button variant="link" className="text-danger px-2" href="#signin">
              Sign in
            </Button>
            <Button variant="danger" className="px-3">Try For Free</Button>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;




