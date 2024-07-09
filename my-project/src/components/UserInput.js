import React, { useState } from "react";


export default function UserInput() {
  const [input, setInput] = useState({
    InitialInvestment: 10000,
    AnnualInvestment: 1200,
    ExpectedReturn: 6,
    Duration: 10,
  });

  function HandleChange(identifier, newValue) {
    setInput((prevValue) => ({
      ...prevValue,
      [identifier]: newValue,
    }));
  }

  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label>Initial Investment</label>
          <input
            type="number"
            required
            value={input.InitialInvestment}
            onChange={(e) => HandleChange("InitialInvestment" , e.target.value)}
          />
        </p>
        <p>
          <label>Annual Investment</label>
          <input
            type="number"
            required
            value={input.AnnualInvestment}
            onChange={(e) => HandleChange("AnnualInvestment",e.target.value)}
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label>Expected Return</label>
          <input
            type="number"
            required
            value={input.ExpectedReturn}
            onChange={(e) => HandleChange("ExpectedReturn", e.target.value)}
          />
        </p>
        <p>
          <label>Duration</label>
          <input
            type="number"
            required
            value={input.Duration}
            onChange={(e) => HandleChange("Duration", e.target.value)}
          />
        </p>
      </div>
    </section>
  );
}
