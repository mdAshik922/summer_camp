import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import OrderFrom from '../Form/OrderFrom';

//Show specific detail data
const Detail = () => {
    const [user, setUser] = useState({});
    const {id} = useParams();

    useEffect(() => {
      const uri = `https://shielded-eyrie-93201.herokuapp.com/capming/${id}`;
        fetch(uri)
        .then(res=>res.json())
        .then(data=>setUser(data))
    },[id]);

    return (
        <div>
            
            <p>{id}</p>
            <h3> {user.name}</h3>

            <img src={user.picture} alt="fun"/>

            <h6>{user.description}</h6>
            <OrderFrom></OrderFrom>
        </div>
    );
};

export default Detail;