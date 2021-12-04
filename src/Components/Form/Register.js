import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import './Register.css';
const Register = () => {
    const [ name , setName ] = useState('');
    const [ email,setEmail ]= useState('');
    const [ password,setPassword]  = useState('');

  
    const navigate= useNavigate();
    const location = useLocation();
    const url= location.state?.from || "/home";

    const { singinWithGoogle, signUp, setError, setIsLoading,  setUser } = useAuth();

    const handelName = (e) =>{
   setName(e.target.value);
    };
    const handelEmail = (e) =>{    
        setEmail(e.target.value);
    };
    const handelPasswords = (e) =>{
        setPassword(e.target.value);
    };
    const handelPassword = (e) =>{
        setPassword(e.target.value);
    };

    const handelRegister = e =>{
        signUp(email, password)
        .then((res) => {
            setIsLoading(true);
            // updateName(name)
              setUser(res.user);
              navigate.push(url);
            })
            .catch((error) => {
             
              setError(error.message);
              // ..
            })
            .finally(()=> {
                setIsLoading(false);
            });
        e.preventDefault();

    };


    const handleGoogleLogin = () => {
        singinWithGoogle()
          .then((res) => 
            {
                setIsLoading(true);
              setUser(res.user);
              navigate.push(url);
            }
              )
          .catch((err) => console.log(err))
          .finally(() => {
            setIsLoading(false);
          })
      };

    return (
        <div>
            <div>
            <form onSubmit={handelRegister} >
  <div className="container">
    <h1>Register</h1>
    <p>Please fill in this form to create an account.</p>
   <br/>

    <label htmlFor="name"><b>Name</b></label>
    <input type="text" onBlur={handelName} placeholder="Enter full name" name="name" id="name" required/>
    <br/>
    <label htmlFor="email"><b>Email</b></label>
    <input type="text" onBlur={handelEmail} placeholder="Enter Email" name="email" id="email" required/>

    <label htmlFor="psw"><b>Password</b></label>
    <input type="password" onBlur={handelPasswords} placeholder="Enter Password" name="psw" id="psw" required/>

    <label htmlFor="psw-repeat"><b>Repeat Password</b></label>
    <input type="password" onBlur={handelPassword} placeholder="Repeat Password" name="psw-repeat" id="psw-repeat" required/>
    <br/>
    <p>By creating an account you agree to our <Link to="/privacy">Terms & Privacy</Link>.</p>

    <button type="submit" className="registerbtn">Register</button>
  </div>
  
</form>
<button onClick={handleGoogleLogin}>Google sign in</button>

<div className="container signin">
    <p>Already have an account? <Link to="/login">Sign in</Link>.</p>
  </div>
            </div>

        </div>
    );
};

export default Register;