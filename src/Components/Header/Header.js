import React from 'react';
import {  Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

import useAuth from '../../Hooks/useAuth';
import header from './apple-touch-icon.png';

const Header = () => {
  const {logout, user} = useAuth();

    return (
        <div>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
 
  <Navbar.Brand style={{color: 'yellowgreen', fontSize: 'xx-large'}}> <img style={{width: '50px', marginLeft: '20px'}} src={header} alt="header-img"/> Capm</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">

    <Nav className="me-auto " style={{marginLeft: '30%'}}>
      <Nav.Link as={NavLink} to="/home">Home</Nav.Link>
      <Nav.Link as={NavLink} to="/about">About</Nav.Link>
      <Nav.Link as={NavLink} to="/team">Team</Nav.Link>
      <Nav.Link as={NavLink} to="/schedule">Schedule</Nav.Link>
      <Nav.Link as={NavLink} to="/gallery">Gallery</Nav.Link>
      <Nav.Link as={NavLink} to="/contact">Contact</Nav.Link>
      <Nav.Link as={NavLink} to="/manage#manage">Manage</Nav.Link>
     
      { user.displayName?
      
              <button onClick={logout} style={{color: 'yellow', backgroundColor: 'green'}}>Log Out</button>
              
              : 
               <Nav.Link as={NavLink} style={{color: 'white'}} to="/login">Login</Nav.Link>
          }
    </Nav>
  
    <Nav>
    <Navbar.Text>
      {/* show user photo and name */}
      
       <div style={{border: '1px solid white'}}>
       <img style={{borderRadius: '50px', width: '35px'}} src={user.photoURL} alt=""/>
        <p style={{marginRight: '5px', color: 'white'}}><strong>{user.displayName} </strong></p>
       </div>
      </Navbar.Text>
    </Nav>
  </Navbar.Collapse>
  
</Navbar>
        </div>
    );
};

export default Header;