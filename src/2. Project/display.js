import React from "react";

const Display = ({ formula, currentValue }) => (
  <div className="display calculator-display">
    <div className="formulaScreen">{formula.replace(/x/g, "⋅")}</div>
    <div className="outputScreen" id="display">
      {currentValue}
    </div>
  </div>
);

export default Display;
