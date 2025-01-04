import React from "react";
import Button from "./button";

const ButtonPanel = ({
  handleNumbers,
  handleOperators,
  handleEvaluate,
  handleDecimal,
  initialize,
}) => {
  const buttons = [
    {
      className: "action",
      id: "clear",
      label: "C",
      value: "C",
      type: "action",
      onClick: initialize,
    },
    {
      className: "action",
      id: "plus/minus",
      label: "+/-",
      value: "+/-",
      type: "operator",
      onClick: handleOperators,
    },
    {
      className: "action",
      id: "percentage",
      label: "%",
      value: "%",
      type: "operator",
      onClick: handleOperators,
    },
    {
      className: "operator",
      id: "divide",
      label: "÷",
      value: "÷",
      type: "operator",
      onClick: handleOperators,
    },
    {
      className: "number",
      id: "seven",
      label: "7",
      value: "7",
      type: "number",
      onClick: handleNumbers,
    },
    {
      className: "number",
      id: "eight",
      label: "8",
      value: "8",
      type: "number",
      onClick: handleNumbers,
    },
    {
      className: "number",
      id: "nine",
      label: "9",
      value: "9",
      type: "number",
      onClick: handleNumbers,
    },
    {
      className: "operator",
      id: "multiply",
      label: "x",
      value: "x",
      type: "operator",
      onClick: handleOperators,
    },
    {
      className: "number",
      id: "four",
      label: "4",
      value: "4",
      type: "number",
      onClick: handleNumbers,
    },
    {
      className: "number",
      id: "five",
      label: "5",
      value: "5",
      type: "number",
      onClick: handleNumbers,
    },
    {
      className: "number",
      id: "six",
      label: "6",
      value: "6",
      type: "number",
      onClick: handleNumbers,
    },
    {
      className: "operator",
      id: "subtract",
      label: "-",
      value: "-",
      type: "operator",
      onClick: handleOperators,
    },
    {
      className: "number",
      id: "one",
      label: "1",
      value: "1",
      type: "number",
      onClick: handleNumbers,
    },
    {
      className: "number",
      id: "two",
      label: "2",
      value: "2",
      type: "number",
      onClick: handleNumbers,
    },
    {
      className: "number",
      id: "three",
      label: "3",
      value: "3",
      type: "number",
      onClick: handleNumbers,
    },
    {
      className: "operator",
      id: "add",
      label: "+",
      value: "+",
      type: "operator",
      onClick: handleOperators,
    },
    {
      className: "number",
      id: "decimal",
      label: ".",
      value: ".",
      type: "decimal",
      onClick: handleDecimal,
    },
    {
      className: "number",
      id: "zero",
      label: "0",
      value: "0",
      type: "number",
      onClick: handleNumbers,
    },
    {
      className: "number",
      id: "backspace",
      label: (
        <svg
          id="backspace"
          xmlns="http://www.w3.org/2000/svg"
          width="22"
          height="22"
          fill="currentColor"
          className="bi bi-backspace"
          viewBox="0 0 16 16"
        >
          <path d="M5.83 5.146a.5.5 0 0 0 0 .708L7.975 8l-2.147 2.146a.5.5 0 0 0 .707.708l2.147-2.147 2.146 2.147a.5.5 0 0 0 .707-.708L9.39 8l2.146-2.146a.5.5 0 0 0-.707-.708L8.683 7.293 6.536 5.146a.5.5 0 0 0-.707 0z" />
          <path d="M13.683 1a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-7.08a2 2 0 0 1-1.519-.698L.241 8.65a1 1 0 0 1 0-1.302L5.084 1.7A2 2 0 0 1 6.603 1zm-7.08 1a1 1 0 0 0-.76.35L1 8l4.844 5.65a1 1 0 0 0 .759.35h7.08a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1z" />
        </svg>
      ),
      value: "backspace",
      type: "operator",
      onClick: handleOperators,
    },
    {
      className: "operator",
      id: "equals",
      label: "=",
      value: "=",
      type: "action",
      onClick: handleEvaluate,
    },
  ];

  return (
    <div className="buttonPanel">
      <div className="row g-0">
        {buttons.map((btn) => (
          <div key={btn.id} className="col-3 mb-1">
            <Button
              key={btn.id}
              id={btn.id}
              className={btn.className}
              label={btn.label}
              value={btn.value}
              onClick={() => btn.onClick(btn.value)}
              type={btn.type}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ButtonPanel;
