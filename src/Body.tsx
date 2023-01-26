import React from "react";
import NumberButton from "./NumberButton";
import "./Body.scss";
import OperatorButton from "./OperatorButton";

function Body() {
  const operatorsArr = ["AC", "/", "x", "-", "+", "=", "."];

  return (
    <div className="body">
      <div className="body__numbers">
        {[...Array(10)].map((el, i) => (
          <NumberButton i={(9 - i).toString()} />
        ))}
      </div>
      <div className="body__operators">
        {operatorsArr.map((operator) => (
          <OperatorButton operator={operator} />
        ))}
      </div>
    </div>
  );
}

export default Body;
