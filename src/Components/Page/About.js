import React from 'react';
import babySummer from './About-Image/about-summer.png';
const About = () => {
    return (
        <div>
            <div><h1><u>About</u></h1>
                <p><strong>Kids ‘R’ Kids Learning Academies are nationally-renowned,
                     and proud to be part of each community we serve.</strong> </p><p><strong>
                     We desire the absolute best for the children in our care!</strong>
                     </p><img style={{borderRadius: '50px'}} src={babySummer} alt=""/></div>
<div>
    <h2 style={{fontWeight: 'bold', marginRight: '60%', fontSize: '2rem'}}>A few words about our camp</h2>

    <h5 style={{ marginRight: '60%'}}>Summer camp is a special type of community where
     kids come together to have fun. Within the camp setting, children develop a sense of
      independence as they try new adventures away from home. Summer camps are known for
       providing a safe environment
     where children gain self-confidence as they learn new skills.</h5>
</div>
        </div>
    );
};

export default About;