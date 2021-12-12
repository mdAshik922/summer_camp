import Button from '@restart/ui/esm/Button';
import axios from 'axios';
import React from 'react';
import { Col, Form, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import './contact.css';
import ImageUploading from 'react-images-uploading';

const Contact = () => {
   const { register, handleSubmit, reset } = useForm();

   const [images, setImages] = React.useState([]);
   const maxNumber = 69;
 
   const onChange = (imageList, addUpdateIndex) => {
     // data for submit
     setImages(imageList);
   };
 

    const onSubmit = data =>{
//user data load
        axios.post('https://shielded-eyrie-93201.herokuapp.com/users', data)

        .then(res =>{
          if(data.insertedId){
            alert('success add user');
               reset();
                        };
                    });
    };

    return (
        <div className="container">
           <h1 style={{fontWeight: 'bolder', fontSize: '3rem'}}>CONTACT US</h1>
           <p style={{fontFamily: 'sans-serif'}}>Kids ‘R’ Kids Learning Academies</p>

           <h3>TO CONTACT A LOCAL SCHOOL NEAR YOU PLEASE SEARCH</h3>
           <h3> UNDER<Link to="#"> LOCATIONS</Link></h3>

           <h6>KIDS ‘R’ KIDS CORPORATE HEADQUARTERS</h6>
           <h6>Kids ‘R’ Kids International, Inc.</h6>
           <h6>1625 Executive Drive South</h6>
           <h6>Duluth, GA 30096</h6>

           <div style={{width: '40%', marginLeft: 'auto', marginRight: 'auto', alingItem: 'center', justifyContent: "center"}}>

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
    <Form.Label>Example textarea</Form.Label>
    <Form.Control {...register("description")} placeholder="your order details" as="textarea" rows={3} />
  </Form.Group>

  <Form.Group className="mb-3" id="formGridCheckbox">
    <Form.Check   type="checkbox" label="Check me out" />
  </Form.Group>

  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
           </div>
          
           <div className="App">
  <ImageUploading
        multiple
        value={images}
        onChange={onChange}
        maxNumber={maxNumber}
        dataURLKey="data_url"
      >
        {({
            imageList,
            onImageUpload,
            onImageRemoveAll,
            onImageUpdate,
            onImageRemove,
            isDragging,
            dragProps,
        }) => (
          // write your building UI
          <div className="upload__image-wrapper">
            <button className="image-button"
              style={isDragging ? { color: 'red' } : undefined}
              onClick={onImageUpload}
              {...dragProps}
            >
              upload your image 
            </button>
            &nbsp;
            <button className="image-button" onClick={onImageRemoveAll}>Remove all images</button>
            {imageList.map((image, index) => (
              <div key={index} className="image-item">
                <img src={image['data_url']} alt="" width="100" />
                <div className="image-item__btn-wrapper">
                  <button className="image-button" onClick={() => onImageUpdate(index)}>Update</button>
                  <button className="image-button" onClick={() => onImageRemove(index)}>Remove</button>
                </div>
              </div>
            ))}
          </div>
        )}
 </ImageUploading>
    </div>
        </div>
    );
};

export default Contact;