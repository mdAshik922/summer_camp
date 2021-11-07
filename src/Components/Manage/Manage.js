import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import swal from 'sweetalert';

const Manage = () => {
  const [camps, setCamps] = useState([]);
  useEffect(() =>{
    //   data load
      fetch('https://shielded-eyrie-93201.herokuapp.com/user')
      .then(res => res.json())
      .then(data => setCamps(data))
  },[]);

const handelCancel = id=>{
   // console.log(id);
   const url = `https://shielded-eyrie-93201.herokuapp.com/user/${id}`;
   fetch(url, {
       method: 'DELETE',
       headers: {
           'content-type': 'application/json'
       }
   })
   .then(res => res.json())
   .then(data =>{
       if(data.deletedCount){
        //    alert('successfully delete');
        swal({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover this imaginary file!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
          })
          .then((willDelete) => {
            if (willDelete) {
              swal("Poof! Your imaginary file has been deleted!", {
                icon: "success",
              });
            } else {
              swal("Your imaginary file is safe!");
            }
          });
           const remaning = camps.filter(service => camps._id !== id);
           setCamps(remaning);
          }
   //  console.log(data);
   } );
}

    return (
        <div>
          <h2 style={{color: 'green'}}><u>Order Details</u></h2>
        {
                camps.map(camp => <div key={camp._id}>
<h2>{camp.name}</h2>
<h2>{camp.email}</h2>
<h6>{camp.address}</h6>

<button onClick={()=> handelCancel(camp._id)}>Delete</button>
                </div>)
            }
        </div>
    );
};

export default Manage;