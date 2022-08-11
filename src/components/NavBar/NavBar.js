import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from '../CartWidget'
import {Link} from 'react-router-dom'

function NavBar() {
  return (
    <Navbar className="navbar navbar-dark bg-dark"  expand="lg">
      <Container>
        <Navbar.Brand to="#home">Delta</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link to='/category/nacional'>Nacional</Link>
            <Link to='/category/importados'>Importados</Link>
            <Nav.Link to="#link"><CartWidget /></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;


