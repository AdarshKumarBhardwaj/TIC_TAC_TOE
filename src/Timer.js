import React ,{useEffect, useState} from 'react'

export default function Timer() {
    const[time,setTime]=useState(0)
    useEffect(()=>{
        console.log("Adding")
       const timer=setInterval(()=>setTime(time+1),1000)
       return function(){
        console.log("removing")
        clearInterval(timer)
       }
    },[time])
  return (
    <div>
      time is now {time}
    </div>
  )
}
