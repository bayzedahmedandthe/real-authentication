import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../firebase.init";


export const AuthContext = createContext(null);
const googleProvider = new GoogleAuthProvider();
const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);

const creatUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password)
}
const loginUser = (email, password) =>{
    return signInWithEmailAndPassword(auth, email, password)
}
useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
        console.log("currentUser", currentUser);
        setUser(currentUser)
    })
    return () => {
        unsubscribe();
    }
}, [])
    const signOutUser = () => {
        signOut(auth)
    }
    const SignInWithGoogle = () => {
        return signInWithPopup(auth, googleProvider)
    }
    const authInfo = {
        creatUser,
        loginUser,
        user,
        signOutUser,
        SignInWithGoogle
    
    }
    return (
       <AuthContext.Provider value={authInfo}>
        {children}
       </AuthContext.Provider>
    );
};

export default AuthProvider;