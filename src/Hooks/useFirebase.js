
import React, { useEffect, useState } from 'react';
import { getAuth,  signInWithPopup, signInWithEmailAndPassword , createUserWithEmailAndPassword ,  onAuthStateChanged, GoogleAuthProvider, signOut } from "firebase/auth";
import initilazition from '../Firebase/Firebase.init';

initilazition();
const useFirebase = () => {
  const [user, setUser] = useState({})
  const [isLoding, setIsLoding] = useState(true);
  const [error, setError] = useState('')
  const auth = getAuth();
const googleProvider = new GoogleAuthProvider();

  const singinWithGoogle = ()=>{
 return signInWithPopup(auth, googleProvider)
 
  }

  const signUp = (email, password) =>{
   return createUserWithEmailAndPassword(auth, email, password)
   
  }


  const signIn = (email, password) =>{
   return signInWithEmailAndPassword(auth, email, password)
   
  }

const logout = () =>{
  signOut(auth)
  .then(()=>{
      setUser({});
  })
}

useEffect(() =>{
  onAuthStateChanged(auth, user=>{
       if(user){
       console.log('inside state change', user);
     setUser(user);
  }
})
}, []);

  return{
      user,
      setUser,
      error,
      setError,
      setIsLoding,
      isLoding,
      singinWithGoogle,
      signUp,
      signIn,
logout
  }
};

export default useFirebase;