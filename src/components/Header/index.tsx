import React from 'react';
import { Button, Container, Form, FormControl, Nav, Navbar, NavDropdown, Offcanvas } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './styles.css';

const Header: React.FC = () => {
  return (
    <Navbar className="navbar" expand="lg">
      <Container className="title-navbar">

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {/*<Nav.Item as={Link} className="nav-link" to="/">Inicio</Nav.Item>
            <Nav.Item as={Link} className="nav-link" to="/repositorios">Repositorios</Nav.Item>*/}




            {/*<Nav.Item as={Link} className="nav-link" to="/rotinas">Lista Rotina</Nav.Item>*/}



            {/*<Nav.Item as={Link} className="nav-link" to="/calendar">Calendario</Nav.Item>
            <Nav.Item as={Link} className="nav-link" to="/calendar2">Calendario2</Nav.Item>
          <Nav.Item as={Link} className="nav-link" to="/calendarteste">CalendarioTeste</Nav.Item>*/}
            <Nav.Item as={Link} className="title-agenda" to="/kanban">Kanban</Nav.Item>





            {/*<Nav.Item as={Link} className="title-agenda" to="/trello2">Agenda2</Nav.Item>*/}





            {/*} <Nav.Item as={Link} className="nav-link" to="/anexos">Anexos</Nav.Item>

            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
        </NavDropdown>*/}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header;