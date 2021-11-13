import React, { useEffect, useState } from 'react';

const Oreder = () => {
    const [orders, setOrders] = useState([]);
    useEffect(()=>{
        fetch('https://shielded-eyrie-93201.herokuapp.com/order')
        .then(res => res.json())
        .then(data => setOrders(data))
    },[]);


    const handelCancel = id=>{
        // console.log(id);
        const url = `https://shielded-eyrie-93201.herokuapp.com/order/${id}`;
        fetch(url, {
            method: 'DELETE',
            headers: {
                'content-type': 'application/json'
            }
        }) 
        .then(res => res.json())
        .then(data =>{
            if(data.deletedCount){
                alert('are you suere delete your order!');
            }
            const remaning = orders.filter(order => orders._id !== id);
            setOrders(remaning);
        })
        
        }
    return (
        <div>
            <h2>Order page</h2>
            <h2>Yours Order:{orders.length}</h2>
            {
                orders.map(order =><div key={order._id}>
                       <h3>{order.name}</h3>
   <h4>{order.email}</h4>
   <h6>{order.address}</h6>
   <button onClick={()=> handelCancel(order._id)}>Delete</button>
                </div>)
            }
        </div>
    );
};

export default Oreder;