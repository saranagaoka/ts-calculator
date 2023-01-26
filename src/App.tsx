import React from "react";
import "./App.css";
import Body from "./Body";
import { CalculatorProvider } from "./CalculatorContext";
import Screen from "./Screen";

function App() {
  return (
    <CalculatorProvider>
      <div className="app">
        <Screen />
        <Body />
      </div>
    </CalculatorProvider>
  );
}

export default App;
