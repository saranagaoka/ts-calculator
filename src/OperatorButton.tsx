import React, { useContext, useState } from "react";
import { CalculatorContext } from "./CalculatorContext";
import "./OperatorButton.scss";

function OperatorButton({ operator }: { operator: string }) {
  const {
    setOperatorCalc,
    operatorCalc,
    setFirstEl,
    setSecondEl,
    firstEl,
    secondEl,
  } = useContext(CalculatorContext);
  const handleClick = () => {
    if (operator === "AC") {
      setFirstEl([]);
      setSecondEl([]);

      setOperatorCalc("");
    } else if (operator === ".") {
      operatorCalc
        ? setSecondEl((prev) => [...prev, "."])
        : setFirstEl((prev) => [...prev, "."]);
    } else if (operator === "=") {
      let x =
        operatorCalc === "+"
          ? parseFloat(firstEl.join("")) + parseFloat(secondEl.join(""))
          : operatorCalc === "-"
          ? parseFloat(firstEl.join("")) - parseFloat(secondEl.join(""))
          : operatorCalc === "/"
          ? parseFloat(firstEl.join("")) / parseFloat(secondEl.join(""))
          : operatorCalc === "x"
          ? parseFloat(firstEl.join("")) * parseFloat(secondEl.join(""))
          : 0;
      setFirstEl([x.toString()]);
      setSecondEl([]);
      setOperatorCalc("");
    } else {
      setOperatorCalc(operator);
    }
  };
  return (
    <button
      className={
        operatorCalc === operator ? "operatorButton" : "operatorButton__clicked"
      }
      onClick={handleClick}
    >
      {operator}
    </button>
  );
}

export default OperatorButton;
