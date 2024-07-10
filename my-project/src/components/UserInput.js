import React from "react";

export default function UserInput() {
  return (
      <section id="user-input">
        <div className="input-group">
          <p>
            <label>Initial Investment</label>
            <input type="number"/>
          </p>
          <p>
            <label>Annual Investment</label>
            <input type="number"/>
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
