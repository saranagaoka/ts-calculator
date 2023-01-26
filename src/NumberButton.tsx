import React, { useContext } from "react";
import { CalculatorContext } from "./CalculatorContext";
import "./NumberButton.scss";

function NumberButton({ i }: { i: string }) {
  const { setFirstEl, operatorCalc, setSecondEl } =
    useContext(CalculatorContext);
  const pickFirst = () => {
    operatorCalc
      ? setSecondEl((prev) => {
          return [...prev, i];
        })
      : setFirstEl((prev) => {
          return prev ? [...prev, i] : [i];
        });
  };
  return (
    <button className="numberButton" onClick={pickFirst}>
      {i}
    </button>
  );
}

export default NumberButton;
