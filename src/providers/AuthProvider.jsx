import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase.config";
import { updateProfile } from "firebase/auth";
export const AuthContext=createContext();
const AuthProvider = ({children}) => {
    const [user,setUser]=useState(null)
    const [loading,setLoading]=useState(true)
    const createUser=(email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const login=(email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }
    const userProfile = async (name, photourl) => {
        try {
            await updateProfile(auth.currentUser, {
                displayName: name,
                photoURL: photourl // Set the photoURL property
            });
        } catch (error) {
            console.error("Error updating profile:", error);
            // Handle error appropriately
        }
    };
    
    const logout=()=>{
        setLoading(true)
        return signOut(auth);
    }
    useEffect(()=>{
        const unsubscribe= onAuthStateChanged(auth,currentUser=>{
            setUser(currentUser)
            setLoading(false)
        })
        return ()=>{
            return unsubscribe();
        }
    },[])
  
    const authInfo={createUser,login,logout,user,loading,userProfile}
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;