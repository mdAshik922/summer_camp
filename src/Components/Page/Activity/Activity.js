import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import thinking from './img/Screenshot_13.png';
import bus from './img/Screenshot_14.png';
import capmar from './img/Screenshot_15.png';
import paint from './img/Screenshot_16.png';
import alumi from './img/Screenshot_17.png';
import fiend from './img/Screenshot_18.png';

const Activity = () => {
    return (
        <Container style={{backgroundColor: '#ffc10752'}}>
            <h2>Activity</h2>
             <Row>
    <Col sm>
    <img src={thinking} alt=""/>
    <h3 style={{color: 'green'}}>Thinking About Camp?</h3>
    </Col>
    <Col sm>
    <img src={bus} alt=""/>
<h3 style={{color: 'green'}}>We're a Registered Family</h3>
    </Col>
    <Col sm>
    <img src={capmar} alt=""/>
<h3 style={{color: 'green'}}>Camper & family Fun</h3>
    </Col>
  </Row>
  <Row>
    <Col sm>
    <img src={paint} alt=""/>
<h3 style={{color: 'green'}}>School Programs & Renting Our Site</h3>
    </Col>
    <Col sm> <img src={alumi} alt=""/>
    <h3 style={{color: 'green'}}>Alumni</h3>
    </Col>
    <Col sm>
    <img src={fiend} alt=""/>
    <h3 style={{color: 'green'}}>Find Out About Applying for a job</h3>
    </Col>
  </Row>
</Container>
       
    );
};

export default Activity;