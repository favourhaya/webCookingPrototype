"use client"
import React from "react";
import {auth,db,} from "../../firebase/clientApp";
import { useState ,useEffect } from "react";
import {collection, getDocs, addDoc,doc,setDoc, updateDoc, getDoc} from 'firebase/firestore'
import { useSearchParams } from "next/navigation";



function ViewHabits(){

    const searchParams = useSearchParams();
    const [habitList,setHabitList] = useState([])
    const [altered,setAltered] = useState(false)

     useEffect(() =>{
        console.log(habitList)
        setAltered(true)
    },[habitList])

    const user = searchParams.get('Userid')

    useEffect(() =>{

        const viewData = async () =>{

        //Day1 =doc(db,)
        const userCollection = collection(db,`Users/${user}/Week/Day1/Habits`)
         //const userRef = doc(userCollection, user)
        //console.log(userRef)
         const snapShot = await getDocs(userCollection)
         
         const List =  snapShot.docs.map(doc => ({
            id:doc.id,
            ...doc.data()
         }))

        console.log(List)
         setHabitList(List)
         console.log(habitList)
       
    }


        viewData()
    },[])
    return(
        <div>
  <button onClick={async () => { await auth.signOut()}} className="bg-sky-500">sign out</button>

  <ul>
    {habitList.map((habit) =>{
        
        return <li onClick={()=> {console.log(habit.id)}}>{habit.Name}{habit.Coin_Value}</li>
    })}
    
  </ul>
  </div>
  )

}

export default ViewHabits