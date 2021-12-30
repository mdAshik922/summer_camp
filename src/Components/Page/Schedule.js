import React, { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import { Link } from 'react-router-dom';
 import './Schedule.css';

const Schedule = () => {

    const [camp, setCamp] = useState([]);
    useEffect(()=>{
        fetch('https://shielded-eyrie-93201.herokuapp.com/capming')
        .then(res => res.json())
        .then(data => setCamp(data))
    },[]);


    return (
        <div>
            {!camp ? (
        <div className="text-center my-5 private-spinner py-5">
          <Spinner variant="danger" animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
          <h6>Loading...</h6>
        </div>
      ) : (
                camp.map(camp => <div className="data" key={camp._id}>
               <img style={{display: "block", marginLeft: "auto", marginRight: "auto"}} src={camp.picture} alt=""/>
               <h2> {camp.name}</h2>
               <h6>{camp.description.slice(40)}</h6>

              <Link to={`/detail/${camp._id}`}>
              <button
               style={{ backgroundColor: 'goldenrod',  color: 'whitesmoke',
                borderRadius: '20px' }}
               >Details</button>
              </Link>

                </div>)
            )}


         
        </div>
    );
};

export default Schedule;