import React from "react";

const Button = ({
  label,
  variant = "primary",
  size = "small",
  loading = false,
  disabled = false,
  onClick,
}) => {
  const baseStyle =
    "rounded font-semibold transition duration-200 sm:w-full hover:cursor-pointer";

  const variants = {
    primary: "bg-blue-600 text-white hover:bg-blue-700",
    secondary:
      "bg-blue-100 text-blue-700 border border-blue-700 hover:bg-blue-200",
    outline: "border border-blue-600 bg-white text-blue-600 hover:bg-blue-50",
    danger: "bg-red-600 text-white hover:bg-red-700",
    success: "border border-green-500 text-green-500",
  };

  const sizes = {
    small: "px-2 py-1 text-xs",
    medium: "px-4 py-2 text-sm",
    large: "px-6 py-3 text-base",
  };

  return (
    <button
      disabled={loading || disabled}
      onClick={onClick}
      className={`
        ${baseStyle}
        ${variants[variant]}
        ${sizes[size]}
        ${loading ? "opacity-50 cursor-not-allowed" : ""}
      `}
    >
      {loading ? (
        <span className="flex items-center gap-2">
          <svg
            className="animate-spin h-4 w-4 text-white"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
            />
          </svg>
          Loading...
        </span>
      ) : (
        label
      )}
    </button>
  );
};

export default Button;
