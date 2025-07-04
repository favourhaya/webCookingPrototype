"use client"
import React from "react";
import {auth,db,app} from "../../firebase/clientApp";
import { GoogleAuthProvider } from "firebase/auth";
import { signInWithPopup, onAuthStateChanged, signOut } from "firebase/auth" 
import { useState ,useEffect } from "react";



function SignInScreen(){
    const [user,setUser] = useState(null)
    const [loading,setLoading] = useState(false)

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser)=>{
            setUser(currentUser)

            setLoading(false)

        })

        return () => unsubscribe()
    },[auth, setUser])



    const handleGoogleSignIn = async () => {
        const provider = new GoogleAuthProvider()

        try{  
            setLoading(true)
            await signInWithPopup(auth, provider)

        }
        catch(error){
            console.error("Error signing in with Google:", error.code, error.message);
            setLoading(false)
        }
    }


   

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            {user ? (
                <div>
                    <p>Welcome, {user.displayName} </p>

                </div>
            ) : (
                <>
                <button onClick={handleGoogleSignIn}>Sign in with Google</button>
                {console.log(user)}
                </>
                
           )}
        </div>
    );
}



export default SignInScreen 