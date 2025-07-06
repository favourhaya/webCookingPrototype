"use client"
import React from "react";
import {auth,db,} from "../../firebase/clientApp";
import { useState ,useEffect } from "react";
import {collection, getDocs, addDoc,doc,setDoc, updateDoc, getDoc,deleteDoc, DocumentReference} from 'firebase/firestore'
import { useSearchParams } from "next/navigation";



function ViewHabits(){

    const searchParams = useSearchParams();
    const [habitList,setHabitList] = useState([])
    const [removed,setRemoved] = useState(null)
    const [dayOfWeek,setDayOfWeek] = useState(null)

    
    useEffect(() =>{
        const currentDate = new Date()
        const day = currentDate.getDate()
        
         
        const deletehabit = async () =>{
        
                    //console.log(`Users/${user}/Week/Day${dayOfWeek}/Habits`)
                
            
        const DocRef = doc(db,`Users/${user}/Week/Day${day+1}/Habits/${removed.id}`)
        await updateDoc(DocRef,{
            Coin_Value: removed.Coin_Value,
            Name: removed.Name,
            is_completed: true
        })
        
        console.log("updated")

    }
        deletehabit()

    },[habitList,removed])

    const user = searchParams.get('Userid')

    useEffect(() =>{
        const currentDate = new Date()
        const day = currentDate.getDate()
        
        

        const viewData = async () =>{
        //Day1 =doc(db,)
        //console.log(`Users/${user}/Week/Day${day+1}/Habits`)
        const userCollection = collection(db,`Users/${user}/Week/Day${day + 1}/Habits`)
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
        
        return <button onClick={()=> {setHabitList(habitList.filter(item => item != habit)), setRemoved(habit)}}>{habit.Name}{habit.Coin_Value}</button>
    })}
    
  </ul>
  </div>
  )

}

export default ViewHabits