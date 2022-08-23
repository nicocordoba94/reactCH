import React from 'react'
import {Link} from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from '../CartWidget'
//import './navbar.css'

export default function NavBar() {
  return (
    
    <Navbar className="navbar "  expand="lg">
      <Container>
        <Nav.Link classname="logo-nav" as={Link} to={'/'}>Delta</Nav.Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">

            <Nav.Link as={Link} to={'/category/1'}>Importados</Nav.Link>
            <Nav.Link as={Link} to={'/category/2'}>Nacional</Nav.Link>
            <CartWidget />
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
