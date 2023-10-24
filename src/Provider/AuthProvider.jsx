import { createContext, useEffect } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from "../firebase/firebase.config";
import { useState } from "react";

export const AuthContext = createContext(null)
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);


//google login
const googleSignIn = ()=>{
    setLoading(true)
   return signInWithPopup(auth, googleProvider)
   
}
//Create User
const createUser =(email, password)=>{
    setLoading(true)
return createUserWithEmailAndPassword(auth, email, password)
}


// LogIn user
const logInUser =(email, password)=>{
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password)
}

//LogOut user
const userLogout =()=>{
    setLoading(true)
    return signOut(auth);
}

//update profile
const updateUserProfile =(name,photo)=>{
    return updateProfile(auth.currentUser, {
        displayName: name, photoURL: photo 
      })
}


//  observer user
useEffect(()=>{
    const unSubscribe = onAuthStateChanged(auth, (user) =>{
        setUser(user)
        setLoading(false)
    })

    return()=>{
        unSubscribe();
    }

},[]);

 

const authInfo = {
    googleSignIn,
    createUser,
    logInUser,
    userLogout,
    user,
    loading,
    updateUserProfile,
}

    return (
        <AuthContext.Provider value={authInfo}>
        {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;