import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

//Show spacific detail data
const Detail = () => {
    const [user, setUser] = useState({})
    const {id} = useParams();

    useEffect(() => {
      const uri = `https://shielded-eyrie-93201.herokuapp.com/capming/${id}`;
        fetch(uri)
        .then(res=>res.json())
        .then(data=>setUser(data))
    },[]);

    return (
        <div>
            
            <p>{id}</p>
            <h3> {user.name}</h3>
        </div>
    );
};

export default Detail;