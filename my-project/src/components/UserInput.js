import React from "react";

export default function UserInput({ HandleInput, input }) {
  return (
    <section id="user-input">
      <div className="input-group">
        <div>
          <label>Initial Investment</label>
          <input
            type="number"
            value={input.InitialInvestment}
            onChange={(e) => HandleInput("InitialInvestment", e.target.value)}
          />
        </div>
        <div>
          <label>Annual Investment</label>
          <input
            type="number"
            value={input.AnnualInvestment}
            onChange={(e) => HandleInput("AnnualInvestment", e.target.value)}
          />
        </div>
      </div>
      <div className="input-group">
        <div>
          <label>Expected Return</label>
          <input
            type="number"
            value={input.ExpectedReturn}
            onChange={(e) => HandleInput("ExpectedReturn", e.target.value)}
          />
        </div>
        <div>
          <label>Duration</label>
          <input
            type="number"
            value={input.Duration}
            onChange={(e) => HandleInput("Duration", e.target.value)}
          />
        </div>
      </div>
    </section>
  );
}
