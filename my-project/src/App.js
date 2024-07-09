import React, { useState } from "react";
import Header from "./components/Header";
import UserInput from "./components/UserInput";
import Results from "./components/Results";
import "../src/index.css";

export default function App() {
  const [input, setInput] = useState({
    InitialInvestment: 10000,
    AnnualInvestment: 1200,
    ExpectedReturn: 6,
    Duration: 10,
  });

  function HandleChange(identifier, newValue) {
    setInput((prevInput) => ({
      ...prevInput,
      [identifier]: +newValue,
    }));
  }

  return (
    <div>
      <Header />
      <UserInput HandleChange={HandleChange} input={input} />
      <Results input={input} />
    </div>
  );
}
