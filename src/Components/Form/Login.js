import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import './Login.css';
import google from './Group 573.png';

const Login = () => {
const {singinWithGoogle, signInFacebook, setIsLoading, saveUser, setError} = useAuth();
const navigate= useNavigate();
const location = useLocation();


  const handleGoogleLogin = () => {
    singinWithGoogle()
    .then((result) => {
      const user = result.user;
      saveUser(user.email, user.displayName, 'PUT');
      setError('');
      const destination = location?.state?.from || '/';
      navigate(destination);
  }).catch((error) => {
      setError(error.message);
  }).finally(() => setIsLoading(false));
  };

  const handleFacebookLogin = () => {
    signInFacebook()
   
  };

    return (
        <div>
           <h2 style={{textAlign: "center", fontWeight: 'bolder', color: "cornflowerblue"}}>
            Please Login Now</h2>
          <div style={{marginTop: "50vh"}}>
            <button style={{marginRight: "1px"}} onClick={handleGoogleLogin}><img width="25px" src={google} alt="google" />Google Sign-in</button>
            <button style={{marginLeft: "1px"}} onClick={handleFacebookLogin}><img width="25px" src="https://i.ibb.co/PjZRkWt/facebook.png" alt=""/>Facebook Log-in</button>
       
            <p>Create a new account? <Link to="/register">Sign-up</Link>.</p>
        </div>
        </div>
    );
};

export default Login;