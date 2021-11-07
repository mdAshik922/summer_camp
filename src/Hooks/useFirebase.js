
import React, { useEffect, useState } from 'react';
import { getAuth,  signInWithPopup, signInWithEmailAndPassword , updateProfile, createUserWithEmailAndPassword ,  onAuthStateChanged, GoogleAuthProvider, signOut } from "firebase/auth";
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

const updateName= (name)=> {
  updateProfile(auth.currentUser, {
    displayName: name
  }).then(() => {
    const newUser={...user, displayName: name} // recommend
   setUser(newUser)
    
    // ...
  }).catch((error) => {
    // An error occurred
    // ...
  });
};

useEffect(() =>{
  const unsubscribe = onAuthStateChanged(auth , (user)=> {
     // console.log(user);
       if(user){
            
           setUser(user)
       } else{
           setUser({})
       }
       setIsLoding(false)
  })
   return ()=> unsubscribe()
},[]);

  return{
      user,
      setUser,
      error,
      setError,
      setIsLoding,
      isLoding,
      singinWithGoogle,
      signUp,
      updateName,
      signIn,
logout
  }
};

export default useFirebase;