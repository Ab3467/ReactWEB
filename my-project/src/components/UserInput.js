import React,{useState} from "react";

export default function UserInput() {
    const [input,setInput] = useState({
        InitialInvestment: 10000,
        AnnualInvestment:1200,
        ExpectedReturn : 6,
        Duration:10
    });
    

  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label>Initial Investment</label>
          <input type="number" required />
        </p>
        <p>
          <label>Annual Investment</label>
          <input type="number" required />
        </p>
        <p>
          <label>Expected Return</label>
          <input type="number" required />
        </p>
        <p>
          <label>Duration</label>
          <input type="number" required />
        </p>
      </div>
    </section>
  );
}
