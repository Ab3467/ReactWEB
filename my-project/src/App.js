import React, { useState } from "react";
import Header from "./components/Header";
import "../src/index.css";
import UserInput from "./components/UserInput";
import Results from "./components/Results";

export default function App() {
  const [input, setInput] = useState({
    InitialInvestment: 10000,
    AnnualInvestment: 300,
    ExpectedReturn: 6,
    Duration: 10,
  });

  function HandleInput(InitialValue, newValue) {
    setInput((prevValue) => {
      return {
        ...prevValue,
        [InitialValue]: newValue,
      };
    });
  }
  return (
    <div>
      <Header />
      <UserInput input={input} HandleInput={HandleInput} />
      <Results input={input}/>
    </div>
  );
}
