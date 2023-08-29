import React, { useEffect, useState } from 'react'

export default function Mycomponent() {
  const[count,setCount]=useState(0)
  const[count2,setCount2]=useState(0)
    useEffect(()=>{
        console.log("My Component is Mounting")                    //when component unmount then both console.log come and incase of mounting only one
        //incase of unmounting function inside the useeffect is runs
        return function(){
          console.log("unmounting")
        }
    },[])

//when count count got updated then this useEffect runs
 useEffect(()=>{
      console.log("count is",count)
      //in this case first return function is executed then upper console on update
      return function(){
        console.log("returning count is", count)
      }
  },[count,count2])
    

  return (
    <div>
    <p>count is {count}</p>
    <p>count2 is {count2}</p>
    <button onClick={()=>{setCount(count+1)}}>update</button>
    <button onClick={()=>{setCount2(count2+1)}}>update2</button>
    </div>
  )
}
