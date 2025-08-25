import React,{useState,useContext}from 'react'
import UserContext from '../context/UserContext'

function Login() {
    const [username,setusername]=useState('')
    const [password,setpassword]=useState('')


    const {setUser}=useContext(UserContext)
const handlesubmit= (e)=>{
    e.preventDefault()
    setUser({username,password})
}
 
  return (
    <div>
        <h2>Login</h2>
        <input 
            type='text'
            placeholder='username'
        
           onChange={(e)=>setusername(e.target.value)}
            value={username}
        />
           <input 
            type='text'
            placeholder='Password'
         
            onChange={(e)=>setpassword(e.target.value)}
            value={password}
        />
        <button onClick={handlesubmit}>submit</button>
    </div>
  )
}

export default Login