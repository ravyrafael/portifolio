import React from 'react'
import { Navbar, Nav, NavDropdown} from 'react-bootstrap'

const Menu = () => {
    return (
<Navbar fixed="top" expand="lg">
  <Navbar.Brand href="#home">Home</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="#about">About</Nav.Link>
      <Nav.Link href="#link">Experiences</Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
    )
}

export default Menu;
