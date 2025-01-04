import React, { useState } from "react";
import Display from "./display";
import ButtonPanel from "./buttonPanel";
import "./calculator.css";

const Calculator = () => {
  // State variables to manage the calculator's data
  const [currentVal, setCurrentVal] = useState("0");
  const [prevVal, setPrevVal] = useState("0");
  const [formula, setFormula] = useState("");
  const [evaluated, setEvaluated] = useState(false);

  // Function to display a warning when the digit limit is exceeded
  const maxDigitWarning = () => {
    setCurrentVal("Digit Limit Met");
    setTimeout(() => setCurrentVal(prevVal), 1000);
  };

  // Handles number button clicks
  const handleNumbers = (value) => {
    if (currentVal.includes("Limit")) return;
    if (currentVal.length > 21) {
      maxDigitWarning();
      return;
    }
    if (evaluated) {
      setCurrentVal(value);
      setFormula(value === "0" ? "" : value);
      setEvaluated(false);
    } else {
      setCurrentVal((prev) =>
        prev === "0" || /[x/+\-%]/.test(prev) ? value : prev + value
      );
      setFormula((prev) =>
        prev === "0" && value === "0"
          ? value
          : /([^.0-9]0|^0)$/.test(prev)
          ? prev.slice(0, -1) + value
          : prev + value
      );
    }
  };

  // Handles operator button clicks
  const handleOperators = (value) => {
    if (currentVal.includes("Limit")) return;

    if (value === "+/-") {
      // Toggle the sign of the current value
      const toggledValue = (parseFloat(currentVal) * -1).toString();
      setCurrentVal(toggledValue);
      setFormula(
        (prev) => prev.replace(/-?\d+\.?\d*$/, toggledValue) // Replace the last number with its toggled sign
      );
      return;
    }

    // Check if the value is "Backspace"
    if (value === "backspace") {
      if (currentVal.length > 1) {
        // Remove the last character from the current value
        const updatedValue = currentVal.slice(0, -1);
        setCurrentVal(updatedValue);
        setFormula((prev) => prev.slice(0, -1)); // Update the formula
      } else {
        // Clear the current value if only one character remains
        setCurrentVal("0");
        setFormula("0"); // Reset the formula as well
      }
      return;
    }

    setCurrentVal(value);
    setEvaluated(false);

    if (value === "%") {
      const percentageValue = parseFloat(currentVal) * 0.01; // Convert to percentage
      setCurrentVal(percentageValue.toString());
      setFormula((prev) => prev.replace(/(\d+\.?\d*)$/, `${percentageValue}`)); // Replace the last number with its percentage value
    } else {
      if (evaluated) {
        setFormula(prevVal + value);
      } else if (/[x+\-%/]$/.test(formula)) {
        setFormula((prev) =>
          /\d[x/+\-%]{1}-$/.test(prev) && value !== "-"
            ? prev.slice(0, -1) + value
            : prev.slice(0, -1) + value
        );
      } else {
        setPrevVal(formula);
        setFormula((prev) => prev + value);
      }
    }
  };

  // Handles evaluation of the formula
  const handleEvaluate = () => {
    if (currentVal.includes("Limit")) return;

    let expression = formula.replace(/x/g, "*").replace("--", "+");
    while (/[x+\-%/]$/.test(expression)) {
      expression = expression.slice(0, -1);
    }

    try {
      const answer = evaluateExpression(expression);
      setCurrentVal(answer.toString());
      setFormula(`${expression.replace(/\*/g, "⋅")}=${answer}`);
      setPrevVal(answer.toString());
      setEvaluated(true);
    } catch {
      setCurrentVal("Error");
      setFormula("Invalid Expression");
    }
  };

  // Helper function to evaluate mathematical expressions
  const evaluateExpression = (expression) => {
    expression = expression.replace(/(\d+\.?\d*)%/g, "($1*0.01)"); // Convert percentages to their fractional equivalent

    try {
      const tokens = expression.match(/(\d+\.?\d*|\+|-|\*|\/|\(|\))/g);
      const stack = [];
      const output = [];
      const operators = { "+": 1, "-": 1, "*": 2, "/": 2 };

      const precedence = (op) => operators[op] || 0;
      const applyOp = (a, b, op) => {
        switch (op) {
          case "+":
            return a + b;
          case "-":
            return a - b;
          case "*":
            return a * b;
          case "/":
            return a / b;
          default:
            throw new Error("Invalid operator");
        }
      };

      tokens.forEach((token) => {
        if (!isNaN(parseFloat(token))) {
          output.push(parseFloat(token));
        } else if (token in operators) {
          while (
            stack.length &&
            precedence(stack[stack.length - 1]) >= precedence(token)
          ) {
            output.push(stack.pop());
          }
          stack.push(token);
        } else if (token === "(") {
          stack.push(token);
        } else if (token === ")") {
          while (stack.length && stack[stack.length - 1] !== "(") {
            output.push(stack.pop());
          }
          stack.pop();
        }
      });

      while (stack.length) output.push(stack.pop());

      const evalStack = [];
      output.forEach((token) => {
        if (typeof token === "number") {
          evalStack.push(token);
        } else {
          const b = evalStack.pop();
          const a = evalStack.pop();
          evalStack.push(applyOp(a, b, token));
        }
      });

      return evalStack[0];
    } catch {
      throw new Error("Invalid Expression");
    }
  };

  // Handles decimal button clicks
  const handleDecimal = () => {
    if (evaluated) {
      setCurrentVal("0.");
      setFormula("0.");
      setEvaluated(false);
    } else if (!currentVal.includes(".") && !currentVal.includes("Limit")) {
      setCurrentVal((prev) => prev + ".");
      setFormula((prev) => prev + ".");
    }
  };

  // Resets the calculator to its initial state
  const initialize = () => {
    setCurrentVal("0");
    setPrevVal("0");
    setFormula("");
    setEvaluated(false);
  };

  return (
    <div className="calculator-container">
      <div className="calculator">
        <Display formula={formula} currentValue={currentVal} />
        <ButtonPanel
          handleNumbers={handleNumbers}
          handleOperators={handleOperators}
          handleEvaluate={handleEvaluate}
          handleDecimal={handleDecimal}
          initialize={initialize}
        />
      </div>
    </div>
  );
};

export default Calculator;
