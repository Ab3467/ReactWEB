import React, { useState } from "react";

export default function UserInput() {
  const [input,setInput] = useState({
    InitialInvestment: 10000,
    AnnualInvestment: 300,
    ExpectedReturn: 6,
    Duration: 10
  });

  function HandleInput(){

  }
  
  return (
      <section id="user-input">
        <div className="input-group">
          <p>
            <label>Initial Investment</label>
            <input type="number"/>
          </p>
          <p>
            <label>Annual Investment</label>
            <input type="number" onChange={(e)=>HanldeInput()}/>
          </p>
        </div>
        <div className="input-group">
          <p>
            <label>Expected Return</label>
            <input type="number"/>
          </p>
          <p>
            <label>Duration</label>
            <input type="number"/>
          </p>
        </div>
      </section>
  );
}
