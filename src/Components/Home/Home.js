import React from 'react';
import summer from './image/summer.jpg';
import './Home.css';
import { Link } from 'react-router-dom';
import boy from './image/camp-boy.png';
import Fade from 'react-reveal/Fade';
import firstOrder from './image/first-order.png';
import secondOrder from './image/second-order (2).png';
import thirdOrder from './image/third-order.png';
import Activity from '../Page/Activity/Activity';
import HomeSchedule from '../Page/HomeSchedule/HomeSchedule';
const Home = () => {

    return (
        <div>
            <div><img width="50%" src={summer} alt="summer"/>
            
            <Link to="/register"> <button style={{fontSize: "2rem",
           fontWeight: "bold", maxWidth: "25%",
           backgroundColor: "tomato", borderRadius: "30px"}}
           >Join Now!</button>
           </Link>
            </div>

            <h1 className="summer" >Summer adventures for curious, creative kids</h1>
            <p><strong>Join whimsical, interactive classes for kids ages 5-15
                 in arts & crafts, theater, STEM, movement, theater, mindfulness and beyond</strong></p>
     
     <div >
     <div  style={{}}>
         
           <Fade left>  <h2 style={{fontWeight: 'bold', fontSize: '3rem',
            color: 'yellowgreen'}}>Summer Camp Programs</h2></Fade>

     <h6>Get ready for a whole summer packed with excitement,</h6>
     <h6>discovery, and adventure. At Camp Curiosity, your child</h6>
     <h6>will explore themes through hands-on projects and daily activities.</h6>
     <h6>Our all-day camp features healthy meals and snacks.</h6>
     <h6>Plus, campers receive a camp backpack, T-shirt, and baseball cap for summer adventures!</h6>
     <div>  <img style={{marginLeft: '0px', width: "100%"}} src={boy} alt=""/></div>
       </div>
     </div>
<br/>
<br/>
<br/>
<div>
<HomeSchedule></HomeSchedule>
</div>

     <div>
             <h3 style={{color:'green', fontWeight: 'bolder'}}><u>please click any one</u></h3>
       <Link to="/contact"><img src={firstOrder} alt="order"/></Link>
       <h4>Food-Order</h4>
       <Link to="/contact"><img style={{marginLeft: '2px', marginRight: '2px'}} src={secondOrder} alt="order"/></Link>
       <h4>Art-order</h4>
       <Link to="/contact"><img src={thirdOrder} alt="order"/></Link>
       <h4>Farmer</h4>
     </div>

     <div>
       <Activity></Activity>
     </div>
       
        </div>
    );
};

export default Home;