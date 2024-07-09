import React from "react";

export default function UserInput({ HandleChange, input }) {
  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label>Initial Investment</label>
          <input
            type="number"
            required
            value={input.InitialInvestment}
            onChange={(e) => HandleChange("InitialInvestment", e.target.value)}
          />
        </p>
        <p>
          <label>Annual Investment</label>
          <input
            type="number"
            required
            value={input.AnnualInvestment}
            onChange={(e) => HandleChange("AnnualInvestment", e.target.value)}
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
