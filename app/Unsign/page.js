"use client"
import React from "react";
import {auth,db,app} from "../../firebase/clientApp";
import { GoogleAuthProvider } from "firebase/auth";
import { signInWithPopup, onAuthStateChanged, signOut } from "firebase/auth" 
import { useState ,useEffect } from "react";
import { redirect } from "next/dist/server/api-utils";




function SignOut(){
    return(
  <button onClick={async () => { await auth.signOut()}} className="bg-sky-500">sign out</button>
  )

}

export default SignOut