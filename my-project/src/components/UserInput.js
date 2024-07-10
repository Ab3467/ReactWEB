import React from "react";

export default function UserInput({ HandleInput, input }) {
  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label>Initial Investment</label>
          <input
            type="number"
            value={input.InitialInvestment}
            onChange={(e) => HandleInput("InitialInvestment", e.target.value)}
          />
        </p>
        <p>
          <label>Annual Investment</label>
          <input
            type="number"
            value={input.AnnualInvestment}
            onChange={(e) => HandleInput("AnnualInvestment", e.target.value)}
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label>Expected Return</label>
          <input
            type="number"
            value={input.ExpectedReturn}
            onChange={(e) => HandleInput("ExpectedReturn", e.target.value)}
          />
        </p>
        <p>
          <label>Duration</label>65
          <input
            type="number"
            value={input.Duration}
            onChange={(e) => HandleInput("Duration", e.target.value)}
          />
        </p>
      </div>
    </section>
  );
}
