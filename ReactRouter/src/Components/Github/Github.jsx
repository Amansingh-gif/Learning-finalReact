import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useLoaderData } from 'react-router-dom';
function Github() {
//     const [data,setdata]=useState([]);
//    useEffect(()=>{
//     fetch('https://api.github.com/users/hiteshchoudhary')
//     .then(response=> response.json())
//     .then((data)=>{
//         console.log(data);
//         setdata(data);
//     })
//    },[])

const data= useLoaderData()
  return (
    <div>Github followers of {data.name } is: {data.followers}
    <img
        src={data.avatar_url} 
        width={300}
    />
    
     </div>
  

    
  )
}

export default Github

export const githubinfo= async () => {
  const response = await fetch('https://api.github.com/users/hiteshchoudhary')
  return response.json();
}