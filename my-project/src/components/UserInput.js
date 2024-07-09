import React from "react";

export default function UserInput() {
  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label>Initial Investment</label>
          <input type="text" name="" id="" />
        </p>
        <p>
          <label>Annual Investment</label>
          <input type="text" name="" id="" />
        </p>
        <p>
          <label>Expected Return</label>
          <input type="text" name="" id="" />{" "}
        </p>
        <p>
          {" "}
          <label>Duration</label>
          <input type="text" name="" id="" />
        </p>
      </div>
    </section>
  );
}
