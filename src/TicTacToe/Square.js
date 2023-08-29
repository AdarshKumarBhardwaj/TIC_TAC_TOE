import React from 'react'

export default function Square(props) {
  return (
    <div onClick={props.onClick}className="square" style={{display:'flex',
    justifyContent:'center',
    alignItems:'center',
    height:'100px',
    width:'100px',
    border:'2px solid black',
   }}>
        <h4>{props.value}</h4>
    </div>
  )
}
