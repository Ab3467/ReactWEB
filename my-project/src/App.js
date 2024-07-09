// import React,{useState} from "react";
// import Header from "./components/Header";
// import "../src/index.css"
// import UserInput from "./components/UserInput";
// import Results from "./components/Results";

// export default function App() {
//   const [input, setInput] = useState({
//     InitialInvestment: 10000,
//     AnnualInvestment: 1200,
//     ExpectedReturn: 6,
//     Duration: 10,
//   });

//   const HandleChange = (identifier, newValue) => {
//     setInput((prevValue) => ({
//       ...prevValue,
//       [identifier]: newValue,
//     }));
//   };
  
//   const isValid = input.Duration >= 1;

//   return (
//     <div>
//       <Header/>
//       <UserInput HandleChange={HandleChange} input={input}/>
//      {isValid ? <Results input={input}/> : <p className="center">Please Enter Valid Input Data</p>}
//     </div>
//   )
// }

import React from 'react'

const array = ['Fundamentals','basics','mendatory','core']

function genRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}
export default function App() {
  return (
    <div>
      <h1>React Essentials</h1>
      <p>
        {array[genRandomInt(4)]} concept in react are
      </p>
    </div>
  )
}

