import React, { children, createContext, useEffect, useState } from 'react'
import { createUserWithEmailAndPassword, getAuth,  onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from '../Firebase/firebase.config';

export const AuthContext = createContext();
const auth = getAuth(app);

function AuthProvider({children}) {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const auth = getAuth();

    //google sign in:

    const providerLogin = (provider)=>{
      return signInWithPopup(auth, provider);
    }


    //for signup(create user): 

    const createUser = (email, password)=>{
      return createUserWithEmailAndPassword(auth, email, password);
    }


    //observer : to check user:

    useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, currentUser =>{
        console.log("currentUser",currentUser);
        setUser(currentUser);
        
      });
      return ()=>{
         return unsubscribe();
      }
    
     
    }, [])


    //for login: 

    const loginUser = (email, password)=>{
      return signInWithEmailAndPassword(auth, email, password);
    }

    //auth checking(observer): if user logged in or not:
    useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, currentUser =>{
        console.log(currentUser);
        setUser(currentUser);
      });
      return ()=>{
         return unsubscribe();
      }
     
    }, [])

    //logout:
    const logOut = ()=>{
      return signOut(auth);
    }

    //const user = {displayName: 'HHH'}

    const authInfo = {
         user,
         loading,
         createUser,
         loginUser,
         providerLogin,
         logOut
    }

  return (
    <AuthContext.Provider value={authInfo}>
        {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider;