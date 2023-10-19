import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from "../firebase/firebase.config";

export const AuthContext = createContext(null)
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
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


//  observer user
useEffect(()=>{
    const unSubscribe = onAuthStateChanged(auth, (currentUser) =>{
        setLoading(false)
        setUser(currentUser)

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
}

    return (
        <AuthContext.Provider value={authInfo}>
        {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;