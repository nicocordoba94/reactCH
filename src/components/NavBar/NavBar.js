import React from 'react'
import {Link} from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from '../CartWidget'

export default function NavBar() {
  return (
    <Navbar className="navbar navbar-dark bg-dark"  expand="lg">
      <Container>
        <Link to={'/'}>Delta</Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link to={'/category/1'}>Nacional</Link>
            <Link to={'/category/2'}>Importados</Link>
            <Nav.Link to="#link"><CartWidget /></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

