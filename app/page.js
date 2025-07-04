"use client"

import { useState, useEffect } from "react";
import SignInScreen from "./login/page";
import {auth,db} from "@/firebase/clientApp";
import { onAuthStateChanged, signOut } from "firebase/auth"; // <--- Import signOut function here
import SignOut from "./Unsign/page";
import AddHabits from "./addHabits/page";
import ViewHabits from "./viewHabits/page";
import { redirect } from "next/navigation"


export default function Home(){
    const [user, setUser] =  useState(null)
    const [isListCreated,setIsListCreated] = useState(false)
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth,(currenUser) => {
            setUser(currenUser)

        })
        return () => unsubscribe()
    },[auth,setUser])




    
return(
<div>
    {user ?(
        <>
        {console.log(user.uid)}
        <AddHabits user={user.uid} isListCreated={isListCreated} setIsListCreated={setIsListCreated} />
        {isListCreated &&
        redirect(`/viewHabits?Userid=${user.uid}`)
        }
        </>
        )
        :
        (
        <SignInScreen user={user} setUser={setUser}/>
        )
}



</div>

)

}