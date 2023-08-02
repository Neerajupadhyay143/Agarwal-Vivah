import React, { useEffect, useState } from 'react'
import { json } from 'react-router-dom'

function Inbox() {
const[data,setData]=useState([]);
useEffect(()=>{
  fetch('https://dummyjson.com/products').then((request)=>{
    request.json().then((result)=>{
      console.log(result.products)
      setData(result.products)
    })
  })
}
,[])
  return (
    <>
    <div className="container" style={{placeItems:"center" ,display:"flex" ,flexDirection:"column"}}>
      hiii
      {
        data.map((val ,index)=>(
          <>
        <ul>
          <li style={{background :"green " , color:"white",width:"200px" , textAlign:"center"}} key={index}>{val.title}</li>
        </ul>
          </>
        ))
      }
    </div>
    </>
  )
}

export default Inbox;