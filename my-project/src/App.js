import React,{useState} from "react";
import Header from "./components/Header";
import "../src/index.css"
import UserInput from "./components/UserInput";
import Results from "./components/Results";

export default function App() {
  const [input, setInput] = useState({
    InitialInvestment: 10000,
    AnnualInvestment: 1200,
    ExpectedReturn: 6,
    Duration: 10,
  });

  const HandleChange = (identifier, newValue) => {
    setInput((prevValue) => ({
      ...prevValue,
      [identifier]: +newValue,
    }));
  };
  
  const isValid = input.Duration >= 1;

  return (
    <div>
      <Header/>
      <UserInput HandleChange={HandleChange} input={input}/>
     {isValid ? <Results input={input}/> : <p>Please Enter Valid Input Data</p>}
    </div>
  )
}
