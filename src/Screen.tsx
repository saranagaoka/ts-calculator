import React, { useContext } from "react";
import { CalculatorContext } from "./CalculatorContext";
import "./Screen.scss";

function Screen() {
  const { firstEl, secondEl, operatorCalc } = useContext(CalculatorContext);

  const toLocaleString = (num: number) =>
    num && String(num).replace(/(?<!\..*)(\d)(?=(?:\d{3})+(?:\.|$))/g, "$1 ");

  return (
    <div className="screen">
      <div className="screen__module">
        {toLocaleString(
          parseFloat(
            (secondEl.length > 0 ? secondEl || 0 : firstEl || 0).join("") || "0"
          )
        )}
      </div>
    </div>
  );
}

export default Screen;
