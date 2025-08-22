import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useCallback } from 'react';

function App() {
 const [length,setlength]=useState(8);
 const [numbersallowed,setnumbersallowed]=useState(false);
 const [charallowed,setcharallowed]=useState(false);
 const [password,setpassword]=useState("")


 const passwordgenerator=useCallback(()=>{
  let pass="";
  let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
  if(numbersallowed) str+="1234567890"
  if(charallowed) str+="!@#$^&*{}[]"
  for (let index = 1; index < str.length; index++) {
   let char=Math.floor(Math.random()*str.length+1)
   pass=str.charAt(char)
  }
  setpassword(pass);
 },[length,numbersallowed,charallowed,setpassword]);



  return (
    <>
    <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
    <h1 className='text-white text-center my-3'>Password generator</h1>
    <div className="flex shadow rounded-lg overflow-hidden mb-4">
    <input
          type="text"
          value={password}
          className="outline-none w-full py-1 px-3"
          placeholder="password"
          readOnly

        />
       
    </div>
    </div>
     </>
  )
}

export default App
