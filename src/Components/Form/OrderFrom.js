import React from 'react';
import axios from 'axios';
import { Col, Form, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import Button from '@restart/ui/esm/Button';


const OrderFrom = () => {
    const { register, handleSubmit, reset } = useForm();
        //user data load
        const onSubmit = data =>{
            //user data load
            console.log(data);
                    axios.post('https://shielded-eyrie-93201.herokuapp.com/order', data)
            
                    .then(res =>{
                        console.log(res);
                      if(data.insertedId){
                        alert('success your order')
                           reset();
                         
                                    }
                                })
                };
    return (
        <div>
        
    
        
           <div style={{width: '40%', marginLeft: 'auto', marginRight: 'auto', alingItem: 'center', justifyContent: "center"}}>
{/* contact form */}
<Form  onSubmit={handleSubmit(onSubmit)}>
  <Row className="mb-3">
    <Form.Group as={Col} controlId="formGridName">
      <Form.Label>Your Full Name</Form.Label>
      <Form.Control {...register("name")} type="text" placeholder=" Name" />
    </Form.Group>

    <Form.Group as={Col} controlId="formGridEmail">
      <Form.Label>Your Email</Form.Label>
      <Form.Control {...register("email")}    type="email" placeholder="Email" />
    </Form.Group>

  </Row>

  <Form.Group className="mb-3" controlId="formGridAddress1">
    <Form.Label>Address</Form.Label>
    <Form.Control  {...register("address")}  placeholder="1234 Main St" />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formGridAddress2">
    <Form.Label>Address 2</Form.Label>
    <Form.Control {...register("address-2")} placeholder="Apartment, studio, or floor" />
  </Form.Group>

  <Row className="mb-3">
    <Form.Group as={Col} controlId="formGridCity">
      <Form.Label>City</Form.Label>
      <Form.Control />
    </Form.Group>

    <Form.Group as={Col} controlId="formGridZip">
      <Form.Label>Zip</Form.Label>
      <Form.Control />
    </Form.Group>
  </Row>
  <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
    <Form.Label>Order Details</Form.Label>
    <Form.Control {...register("description")} placeholder="your order details" as="textarea" rows={3} />
  </Form.Group>

  <Form.Group className="mb-3" id="formGridCheckbox">
    <Form.Check   type="checkbox" label="Check me out" />
  </Form.Group>

  <Button variant="primary" type="submit">
    Order-Now
  </Button>
</Form>
           </div>
        </div>
       
    );
};

export default OrderFrom;