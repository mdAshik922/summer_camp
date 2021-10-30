import React from 'react';
import summer from './image/summer.jpg';
import './Home.css';
import { Link } from 'react-router-dom';
import boy from './image/camp-boy.png';
import Fade from 'react-reveal/Fade';
const Home = () => {

    return (
        <div>
            <div><img width="50%" src={summer} alt="summer"/>
          <Link to="/register"> <button style={{fontSize: '3rem', fontWeight: 'bolder', width: '10%', backgroundColor: 'tomato', borderRadius: '30px'}}>Join Now!</button></Link>
            </div>
            <h1 className="summer" >Summer adventures for curious, creative kids</h1>
            <p className="summer-somthing"><strong>Join whimsical, interactive classes for kids ages 5-15
                 in arts & crafts, theater, STEM, movement, theater, mindfulness and beyond</strong></p>
     
     <div >
     <div  style={{marginRight: '40%'}}>
         
           <Fade left>  <h2 style={{fontWeight: 'bold', fontSize: '3rem',
            color: 'yellowgreen'}}>Summer Camp Programs</h2></Fade>

     <h6>Get ready for a whole summer packed with excitement,</h6>
     <h6>discovery, and adventure. At Camp Curiosity, your child</h6>
     <h6>will explore themes through hands-on projects and daily activities.</h6>
     <h6>Our all-day camp features healthy meals and snacks.</h6>
     <h6>Plus, campers receive a camp backpack, T-shirt, and baseball cap for summer adventures!</h6>
     <div>  <img style={{marginLeft: '90%'}} src={boy} alt=""/></div>
       </div>
     </div>
       
        </div>
    );
};

export default Home;