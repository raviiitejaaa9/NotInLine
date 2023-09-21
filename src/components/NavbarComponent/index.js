import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import "./index.css"

function NavbarComponent() {
  return (
    <Navbar className = "nav-bar"  collapseOnSelect expand="lg" bg="light" variant="dark">
      <Navbar.Brand href="#home"><img className='nav-logo' alt = "logo" src = "https://res.cloudinary.com/dyukfze9f/image/upload/v1695128647/notInLine_Logo_yfcqxi.png" /></Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav"  className='nav-toggle'  />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mx-auto">
          <Nav.Link href="#home" className="nav-link-style" >Home</Nav.Link>
          <Nav.Link href="#health-conditions" className="nav-link-style"  >Health Conditions</Nav.Link>
          <Nav.Link href="#lab-tests" className="nav-link-style lab-tests "   >Lab Tests</Nav.Link>
          <Nav.Link href="#medicines" className="nav-link-style" >Medicines</Nav.Link>
        </Nav>
        <Nav>
          <Nav.Link href="#for-patients"><button type = "button" className='btn btn-primary nav-buttons ' > For patients </button></Nav.Link>
          <Nav.Link href="#for-hospitals"><button type = "button" className='btn btn-primary nav-buttons' > For Hospitals </button></Nav.Link>
          <Nav.Link href="#play-store"><button type = "button" className='btn btn-dark nav-buttons' > Play Store </button></Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavbarComponent;
