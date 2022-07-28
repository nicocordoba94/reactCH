import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import Logo from './deltaLogo.svg';
import Carrito from './carritoImg.svg';

function NavBar() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#home">
            <img src={Logo} alt="logo" width="85px" class="align-middle"></img>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Inicio</Nav.Link>
            <Nav.Link href="#link">Gaming</Nav.Link>
            <NavDropdown title="Computacion" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Notebooks</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Pc Escritorio
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Accesorios
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <div className='img'>
            <img src={Carrito} alt="carrito" width="50px"></img>
          </div>
        </Navbar.Collapse>
        
      </Container>
    </Navbar>
  );
}

export default NavBar;