import React from "react";

const Button = ({ className, id, label, value, onClick }) => {
  return (
    <button className={className} id={id} value={value} onClick={onClick}>
      {label}
    </button>
  );
};

export default Button;
