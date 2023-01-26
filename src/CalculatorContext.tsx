import { createContext, Dispatch, SetStateAction } from "react";
import { useState, useEffect } from "react";

export const CalculatorContext = createContext<{
  firstEl: string[];
  setFirstEl: Dispatch<SetStateAction<string[]>>;
  operatorCalc: string;
  setOperatorCalc: Dispatch<SetStateAction<string>>;
  secondEl: string[];
  setSecondEl: Dispatch<SetStateAction<string[]>>;
}>({
  firstEl: [],
  setFirstEl: () => [],
  operatorCalc: "",
  setOperatorCalc: () => [],
  secondEl: [],
  setSecondEl: () => [],
});

export const CalculatorProvider = ({
  children,
}: {
  children: JSX.Element | JSX.Element[];
}) => {
  const [firstEl, setFirstEl] = useState<string[]>([]);
  const [operatorCalc, setOperatorCalc] = useState<string>("");

  const [secondEl, setSecondEl] = useState<string[]>([]);

  useEffect(() => {
    console.log(firstEl, secondEl, operatorCalc);
  }, [firstEl, secondEl, operatorCalc]);

  return (
    <CalculatorContext.Provider
      value={{
        firstEl: firstEl,
        setFirstEl: setFirstEl,
        operatorCalc: operatorCalc,
        setOperatorCalc: setOperatorCalc,
        secondEl: secondEl,
        setSecondEl: setSecondEl,
      }}
    >
      {children}
    </CalculatorContext.Provider>
  );
};
