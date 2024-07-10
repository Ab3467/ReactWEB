import React from "react";
import Header from "./components/Header";
import "../src/index.css";
import UserInput from "./components/UserInput";
import Results from "./components/Results";

export default function App() {
  return (
    <div>
      <Header />
      <UserInput />
    </div>
  );
}

// import React from 'react'

// const array = ['Fundamentals','basics','mendatory','core']

// function genRandomInt(max) {
//   return Math.floor(Math.random() * (max + 1));
// }
// export default function App() {
//   return (
//     <div>
//       <h1>React Essentials</h1>
//       <p>
//         {array[genRandomInt(4)]} concept in react are
//       </p>
//     </div>
//   )
// }
