import React from "react";

export const Input = React.forwardRef(
  ({ value, className = "", ...props }, ref) => {
    const isFilled = value && value.toString().trim() !== "";
    return (
      <>
        <input
          ref={ref}
          value={value}
          className={`w-full rounded-md px-3 py-2 text-sm text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#8D6851] ${
            isFilled
              ? "bg-gradient-to-r from-[#2c1f18] to-[#3d2d25]"
              : "bg-slate-900"
          } ${className}`}
          {...props}
        />
        <style>{`
          input[type="date"]::-webkit-calendar-picker-indicator {
            filter: invert(1);
          }
          input[type="date"]::-ms-input-placeholder {
            color: #fff;
          }
          input[type="date"]::-moz-placeholder {
            color: #fff;
          }
          input[type="date"]::-webkit-input-placeholder {
            color: #fff;
          }
          input[type="date"]::placeholder {
            color: #fff;
          }
        `}</style>
      </>
    );
  }
);

Input.displayName = "Input";
