import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import './Login.css';

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
        <div style={{marginTop: "50vh"}}>
            
            <button onClick={handleGoogleLogin}><i className="fab fa-google"></i></button>
            <button onClick={handleFacebookLogin}><i className="fab fa-facebook"></i></button>
       
            <p>Create a new account? <Link to="/register">Sign-up</Link>.</p>
        </div>
    );
};

export default Login;