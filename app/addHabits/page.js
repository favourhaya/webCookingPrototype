"use client"

import { useState, useEffect } from "react";
import {auth,db} from "@/firebase/clientApp";
import {app} from "@/firebase/clientApp"
import {collection, getDocs, addDoc,doc,setDoc, updateDoc, getDoc} from 'firebase/firestore'

import SignOut from "../Unsign/page";
import { redirect } from "next/navigation"





 function AddHabits({user,isListCreated,setIsListCreated}){
    
    const [habitList, setHabitList] = useState([])
    const [Loading,setLoading] = useState(true)
    const [showHabitForm, setShowHabitForm] = useState(false)
    const [inputFill , setInputFill] = useState(null)
    const [frequencyForm, setFrequencyForm] =  useState({
        Day1:[],
        Day2:[],
        Day3:[],
        Day4:[],
        Day5:[],
        Day6:[],
        Day7:[]
    })

    useEffect(()=>{
        console.log(frequencyForm)
    },[frequencyForm])



    useEffect (() =>{

        console.log(habitList)
    },[habitList])

    async function handleSubmit(){
        
        alert("All of your habits have been submitted")

        frequencyForm.Day1.map(async (item) =>{
          const userRef = await setDoc(doc(db,`Users/${user}/Week/Day1/Habits`,item),
            {
            Name: item,
            Coin_Value: 10,
            is_completed: false,
            
            }
            )})


             frequencyForm.Day2.map(async (item) =>{
          const userRef = await setDoc(doc(db,`Users/${user}/Week/Day2/Habits`,item),
            {
            Name: item,
            Coin_Value: 10,
            is_completed: false,
            
            }
            )})


             frequencyForm.Day3.map(async (item) =>{
          const userRef = await setDoc(doc(db,`Users/${user}/Week/Day3/Habits`,item),
            {
            Name: item,
            Coin_Value: 10,
            is_completed: false,
            
            }
            )})



             frequencyForm.Day4.map(async (item) =>{
          const userRef = await setDoc(doc(db,`Users/${user}/Week/Day4/Habits`,item),
            {
            Name: item,
            Coin_Value: 10,
            is_completed: false,
            
            }
            )})


             frequencyForm.Day5.map(async (item) =>{
          const userRef = await setDoc(doc(db,`Users/${user}/Week/Day5/Habits`,item),
            {
            Name: item,
            Coin_Value: 10,
            is_completed: false,
            
            }
            )})


             frequencyForm.Day6.map(async (item) =>{
          const userRef = await setDoc(doc(db,`Users/${user}/Week/Day6/Habits`,item),
            {
            Name: item,
            Coin_Value: 10,
            is_completed: false,
            
            }
            )})



             frequencyForm.Day7.map(async (item) =>{
          const userRef = await setDoc(doc(db,`Users/${user}/Week/Day7/Habits`,item),
            {
            Name: item,
            Coin_Value: 10,
            is_completed: false,
            
            }
            )})

       setIsListCreated(true)
    }
    
    
function showAddedHabit(){
    alert(`${inputFill} has been added to your list of habits`)
    setInputFill(false)
}


    
    function Newhabit(){
        
        console.log("asdf")
        setShowHabitForm(true)
        return(
            <div>
        
                {!inputFill &&
                <input type="text" placeholder="Enter habit here" onKeyDown={(e) => {
                    if (e.key == "Enter"){
                        setInputFill(e.target.value)
                        console.log(inputFill)

                    }

                }} 
                className="border-2"/>}
                
                            {inputFill &&
                            <div>
                                choose frequency
                            <div className="flex space-x-5">
                                <button onClick={ () => {
                                if (!frequencyForm.Day1.includes(inputFill)){
                                    setFrequencyForm((prev) =>({
                                        ...prev,
                                        Day1: [...prev.Day1, inputFill]
                                    }),
                                    )
                                }}}> Monday </button>

                                    <button onClick={ () => {
                                        if (!frequencyForm.Day2.includes(inputFill)){
                                    setFrequencyForm((prev) =>({
                                        ...prev,
                                        Day2: [...prev.Day2, inputFill]
                                    }),
                                    )
                                }}}> Tuesday </button>

                                    <button onClick={ () => {
                                    if (!frequencyForm.Day3.includes(inputFill)){
                                    setFrequencyForm((prev) =>({
                                        ...prev,
                                        Day3: [...prev.Day3, inputFill]
                                    }),
                                    )
                                }}}> Wednesday </button>
                                


                                    <button onClick={ () => {
                                    if (!frequencyForm.Day4.includes(inputFill)){
                                    setFrequencyForm((prev) =>({
                                        ...prev,
                                        Day4: [...prev.Day4, inputFill]
                                    }),
                                    )
                                }}}> Thursday </button>


                                    <button onClick={ () => {
                                    if (!frequencyForm.Day5.includes(inputFill)){
                                    setFrequencyForm((prev) =>({
                                        ...prev,
                                        Day5: [...prev.Day5, inputFill]
                                    }),
                                    )
                                }}}> Friday </button>
                                
                                    <button onClick={ () => {
                                        if (!frequencyForm.Day6.includes(inputFill)){
                                    setFrequencyForm((prev) =>({
                                        ...prev,
                                        Day6: [...prev.Day6, inputFill]
                                    }),
                                    )
                                }}}> Saturday </button>
                                
                                
                                    <button onClick={ () => {
                                    if (!frequencyForm.Day7.includes(inputFill)){
                                    setFrequencyForm((prev) =>({
                                        ...prev,
                                        Day7: [...prev.Day7, inputFill]
                                    }),
                                    )
                                }}}> Sunday </button>
                                </div>
                                
                                
                                <button onClick={showAddedHabit} className="bg-blue-600 w-35 h-10 rounded-2xl text-white ">
                                    Add Habit
                                </button>
                            </div>
                }
                
                
            </div>
        )
    }
    return(
        <div>
        <SignOut/>

        {!inputFill &&
        <div>Add your habits here</div>}
        
        {!inputFill &&
        <button onClick={Newhabit}>

             Click to add new Habit 

        </button>}

        {showHabitForm && <Newhabit/>}


        <button onClick={handleSubmit} className="bg-blue-600 mt-5 w-55 h-10 rounded-2xl text-white ">
            Finish all adding your habits
        </button>
        </div>
    )

}

export default AddHabits