import React, { useState } from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import './Regi.css';
const Register = () => {
    const [name , setName] =useState('')
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')

  
    const history= useHistory()
    const location = useLocation()
    const url= location.state?.from || "/home"

    const {singinWithGoogle, signUp, setError, setIsLoding,  setUser}=useAuth();

    const hendelName = (e) =>{
        console.log(e.target.value);
   setName(e.target.value)
    }
    const hendelEmail = (e) =>{
        console.log(e.target.value);
        setEmail(e.target.value)
    }
    const hendelPasswords = (e) =>{
        console.log(e.target.value);
        setPassword(e.target.value)
    }
    const hendelPassword = (e) =>{
        console.log(e.target.value);
        setPassword(e.target.value)
    }

    const handelRegister = e =>{
        signUp(email, password)
        .then((res) => {
            setIsLoding(true)
            // updateName(name)
              setUser(res.user)
              history.push(url)
            })
            .catch((error) => {
              const errorCode = error.code;
              const errorMessage = error.message;
              // ..
            })
            .finally(()=> {
                setIsLoding(false)
            })
        e.preventDefault();

    }


    const handleGoogleLogin = () => {
        singinWithGoogle()
          .then((res) => 
            {
                setIsLoding(true)
              setUser(res.user)
              history.push(url)
            }
              )
          .catch((err) => console.log(err))
          .finally(() => {
            setIsLoding(false)
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
    <input type="text" onBlur={hendelName} placeholder="Enter full name" name="name" id="name" required/>
    <br/>
    <label htmlFor="email"><b>Email</b></label>
    <input type="text" onBlur={hendelEmail} placeholder="Enter Email" name="email" id="email" required/>

    <label htmlFor="psw"><b>Password</b></label>
    <input type="password" onBlur={hendelPasswords} placeholder="Enter Password" name="psw" id="psw" required/>

    <label htmlFor="psw-repeat"><b>Repeat Password</b></label>
    <input type="password" onBlur={hendelPassword} placeholder="Repeat Password" name="psw-repeat" id="psw-repeat" required/>
    <br/>
    <p>By creating an account you agree to our <Link to="/privacy">Terms & Privacy</Link>.</p>

    <button type="submit" className="registerbtn">Register</button>
  </div>
  
</form>
<button onClick={handleGoogleLogin}>Google signin</button>

<div className="container signin">
    <p>Already have an account? <Link to="/login">Sign in</Link>.</p>
  </div>
            </div>

        </div>
    );
};

export default Register;