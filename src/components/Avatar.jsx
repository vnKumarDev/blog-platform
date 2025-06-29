import React from "react";

const sizeMap = {
  sm: "w-6 h-6 text-xs",
  md: "w-8 h-8 text-sm",
  lg: "w-12 h-12 text-base",
};

const Avatar = ({
  userName = "U",
  size = "md",
  bgColor = "bg-blue-500",
  textColor = "text-white",
  rounded = "rounded-full",
  shadow = "shadow",
  className = "",
}) => {
  const classes = `
    flex justify-center items-center font-semibold
    ${sizeMap[size]} ${bgColor} ${textColor} ${rounded} ${shadow} ${className}
  `;

  return (
    <div className={classes.trim()}>{userName.slice(0, 1).toUpperCase()}</div>
  );
};

export default Avatar;
