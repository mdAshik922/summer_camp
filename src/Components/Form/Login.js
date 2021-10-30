import React, { useState } from 'react';
import { useHistory, useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import './Login.css';

const Login = () => {
const {singinWithGoogle, signIn, setIsLoding, setUser} = useAuth();
const history= useHistory()
const location = useLocation()

const url= location.state?.from || "/home"

const [email , setEmail]= useState("")
const [password , setPassword] = useState("")

const handleGetEmail = (e) =>{
  setEmail(e.target.value);
}

const handleGetPassword = (e)=> {
    setPassword(e.target.value);
}

const handelLogin=(e)=>{
    e.preventDefault();

    signIn(email,password)
    .then((res) => {
        setIsLoding(true)
        setUser(res.user);
        history.push(url)
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      })
      .finally(() => {
        setIsLoding(false)
      })
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
            <form onSubmit={handelLogin} >
  <div className="container">
    <h1>Login</h1>
    <p>Please fill in this form to login an account.</p>
   <br/>

    <label htmlFor="email"><b>Email</b></label>
    <input type="text" onBlur={handleGetEmail} placeholder="Enter Email" name="email" id="email" required/>

    <label htmlFor="psw"><b>Password</b></label>
    <input type="password" onBlur={handleGetPassword} placeholder="Enter Password" name="psw" id="psw" required/>

    <br/>
    <p>By creating an account you agree to our <Link to="/privacy">Terms & Privacy</Link>.</p>

    <button type="submit" className="registerbtn">Login</button>
  </div>
  
</form>
            </div>
            <button onClick={handleGoogleLogin}>Google signin</button>
        </div>
    );
};

export default Login;