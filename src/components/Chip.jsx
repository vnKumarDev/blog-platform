import React from "react";

const Chip = ({ label, variant = "success" }) => {
  const baseStyle =
    "px-1 py-0.5 text-xs  font-semibold transition duration-200";
  const variants = {
    success: " text-green-500 ",
  };

  return (
    <span
      key={label}
      className={`${baseStyle} ${variants[variant]}
      `}
    >
      {label}
    </span>
  );
};

export default Chip;
