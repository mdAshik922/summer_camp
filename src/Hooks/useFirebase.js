
import { useEffect, useState } from 'react';
import { getAuth,  signInWithPopup, FacebookAuthProvider ,  updateProfile,  onAuthStateChanged, GoogleAuthProvider, signOut } from "firebase/auth";
import initilazition from '../Firebase/Firebase.init';

initilazition();
const useFirebase = () => {
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');
  const [admin, setAdmin] = useState(false);
  const auth = getAuth();

const googleProvider = new GoogleAuthProvider();
const facebookProvider = new FacebookAuthProvider();

  const singinWithGoogle = ()=>{
 return signInWithPopup(auth, googleProvider);
 
  };

  const signInFacebook = (location, navigate) => {
    setIsLoading(true);
    signInWithPopup(auth, facebookProvider)
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


 

  useEffect(() => {
    fetch(`http://localhost:5000/users/${user.email}`)
        .then(res => res.json())
        .then(data => setAdmin(data.admin))
  }, [user.email]);

const logout = () =>{
  signOut(auth)
  .then(()=>{
      setUser({});
  });
};

const updateName= (name)=> {
  updateProfile(auth.currentUser, {
    displayName: name
  }).then(() => {
    const newUser={...user, displayName: name}; // recommend
   setUser(newUser);
    
  
  }).catch((error) => {
    
  });
};

useEffect(() =>{
  const unsubscribe = onAuthStateChanged(auth , (user)=> {
     
       if(user){
            
           setUser(user);
       } else{
           setUser({});
       };
       setIsLoading(false);
  })
   return ()=> unsubscribe()
},[auth]);


const saveUser = (email, displayName, method) =>{
  const user = {email, displayName};
  fetch('http://localhost:5000/users', {
    method: method,
    headers: {
      'content-type' : 'application/json'
    },
    body: JSON.stringify(user)
  })
.then()
};

  return{
      user,
      auth,
      setUser,
      saveUser,
      admin,
      error,
      setError,
      setIsLoading,
      isLoading,
      singinWithGoogle,
      signInFacebook,
      updateName,
logout
  }
};

export default useFirebase;