import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
 import './Schedule.css';
const Schedule = () => {
    const [camp, setCamp] = useState([]);
    useEffect(()=>{
        fetch('https://shielded-eyrie-93201.herokuapp.com/capming')
        .then(res => res.json())
        .then(data => setCamp(data))
    },[])


    return (
        <div>
            {
                camp.map(camp => <div className="data" key={camp._id}>
               <img src={camp.picture} alt=""/>
               <h2> {camp.name}</h2>

              <Link to={`/schedule/detail/${camp._id}`}>
              <button
               style={{ backgroundColor: 'goldenrod',  color: 'whitesmoke',
                borderRadius: '20px' , marginLeft: '30%'}}
               >Details</button>
              </Link>

                </div>)
            }

         
        </div>
    );
};

export default Schedule;