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
      <Results/>
    </div>
  );
}

