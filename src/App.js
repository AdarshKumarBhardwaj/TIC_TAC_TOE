import React,{useState} from "react"
import './App.css';
// import Mycomponent from "./Mycomponent";
// import Timer from "./Timer";
import Board from "./TicTacToe/Board";

function App() {
  // const[visible,setvisible]=useState(true)
  // useEffect(()=>{
  //   console.log("I am mounting.....");
  // },[])
  return (
   <div className="App">
    {/* {visible? <Mycomponent/>:<></>}
    <button onClick={()=>setvisible(!visible)}>Toggle</button>
    <Timer/> */}
    <Board/>
   </div>
  );
}

export default App;
