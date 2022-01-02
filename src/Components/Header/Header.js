import React from 'react';
import {  Nav, Navbar, Container } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import header from './apple-touch-icon.png';

const Header = () => {
  const {logout, user} = useAuth();

    return (
        <div>
        <Navbar collapseOnSelect expand="lg">
        <Container style={{backgroundColor: "rgb(178 214 60 / 84%)"}}>
  <Navbar.Brand style={{ fontSize: 'xx-large'}}>
     <img style={{width: '50px', marginLeft: '20px'}} src={header} alt="header-img"/> Camp</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">

    <Nav className="me-auto" style={{marginLeft: "10%"}}>
      <Nav.Link as={NavLink} to="/home">Home</Nav.Link>
      <Nav.Link as={NavLink} to="/about">About</Nav.Link>
      <Nav.Link as={NavLink} to="/team">Team</Nav.Link>
      <Nav.Link as={NavLink} to="/schedule">Schedule</Nav.Link>
      <Nav.Link as={NavLink} to="/gallery">Gallery</Nav.Link>
      <Nav.Link as={NavLink} to="/contact">Contact</Nav.Link>
 
     
      {user.email || user.displayName ?
      
             <>
                   <Nav.Link as={NavLink} to="/order">Order</Nav.Link>
      <Nav.Link as={NavLink} to="/manage">Manage</Nav.Link>
              <button onClick={logout} style={{color: 'yellow', backgroundColor: 'green'}}>Log Out</button>
             </>
              
              : 
               <Nav.Link as={NavLink} style={{color: 'white'}} to="/login">Login</Nav.Link>
          }
    </Nav>
    <Nav>
    <Navbar.Text>
       <div >
       <img style={{borderRadius: "50px", width: "35px" }} src={user.photoURL} alt=""/>
        <p style={{marginRight: "5px", color: "white"}}><strong>{user.displayName} </strong></p>
       </div>
      </Navbar.Text>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>




        </div>
    );
};

export default Header;