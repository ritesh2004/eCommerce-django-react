import React, { useContext, useEffect } from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Badge from 'react-bootstrap/Badge';
import Authcontext from "./context/Authcontext";


function Navcom() {

  const {user, LogoutUser} = useContext(Authcontext);

  // let usname = "USER";

  // useEffect(()=>{
  //   if (user !== "") {
  //     usname = user["username"]
  //   }
  // },[])



  return (
    <Navbar bg="primary" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="/" style={{fontSize:'25px'}}>E-Commerece</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">HOME</Nav.Link>
            <Nav.Link href="/products">PRODUCTS</Nav.Link>
            <Nav.Link href="/about">ABOUT US</Nav.Link>
            <Nav.Link href="/contact">CONTACT US</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
      <Container>
      {/* <Navbar.Toggle aria-controls="basic-navbar-nav" /> */}
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto">
        <NavDropdown title={user? (user["username"]): "USER"} id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">ADDRESS</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                CHANGE ADDRESS
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">KARTS</NavDropdown.Item>
            </NavDropdown>
          {user? (<Nav.Link onClick={LogoutUser}>LOG OUT</Nav.Link>):(<><Nav.Link href="/login">LOG IN</Nav.Link> <Nav.Link href="/signin">SIGN IN</Nav.Link></>)}
          <Nav.Link><ShoppingCartIcon /><Badge pill bg="danger">2</Badge></Nav.Link>
        </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navcom;