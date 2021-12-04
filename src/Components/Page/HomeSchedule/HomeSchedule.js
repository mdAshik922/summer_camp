
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
const HomeSeduil = () => {
    const [camp, setCamp] = useState([]);
    useEffect(()=>{
        fetch('https://shielded-eyrie-93201.herokuapp.com/capming')
        .then(res => res.json())
        .then(data => setCamp(data.slice(5)))
    },[]);


    return (
        <div>
            <h2 style={{color: 'red'}}>Offer!!!</h2>
            {
                camp.map(camp => <div className="data" key={camp._id}>
               <img src={camp.picture} alt=""/>
               <h2> {camp.name}</h2>
               <h6>{camp.description.slice(40)}</h6>

              <Link to='/schedule'>
              <button
               style={{ backgroundColor: 'goldenrod',  color: 'whitesmoke',
                borderRadius: '20px' , marginLeft: '30%'}}
               >Go</button>
              </Link>

                </div>)
            }


         
        </div>
    );
};
export default HomeSeduil;