import React from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import './Register.css';
import google from './Group 573.png';
const Register = () => {
 
    const navigate= useNavigate();
    const location = useLocation();
  

    const { singinWithGoogle, signInFacebook, setError, setIsLoading,  saveUser } = useAuth();


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
            <h2 style={{textAlign: "center", fontWeight: 'bolder', color: "cornflowerblue"}}>Please Register Now  </h2>
            <div id="button" style={{marginTop: "40vh", marginLeft: "30%", width: "350px", height:"300px"}}>
          
            <button style={{marginRight: "1px", marginTop: "5%"}} onClick={handleGoogleLogin}><img width="25px" src={google} alt="google" />Google sign-up</button>
            <button style={{marginLeft: "1px", marginTop: "5%"}} onClick={handleFacebookLogin}><img width="25px" src="https://i.ibb.co/PjZRkWt/facebook.png" alt=""/>Facebook sign-up</button>
 
<div style={{marginTop: "20%"}}>
    <p>Already have an account? <Link to="/login">Sign in</Link>.</p>
  </div>
            </div>

        </div>
    );
};

export default Register;