import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [counter,setcounter]=useState(0);

  function addon(){
   
    setcounter(counter+1);
  }
  function remove(){
   
    setcounter(counter-1);
  }
  return (
    <>
    chai aur react
    <h2> counter value {counter}</h2>
    <button onClick={addon}> Add value</button>
    <button onClick={remove}> remove value</button>
    </>
  )
}

export default App
