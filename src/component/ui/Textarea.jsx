import React from "react";

export const Textarea = React.forwardRef(
  ({ value, className = "", ...props }, ref) => {
    const isFilled = value && value.toString().trim() !== "";

    return (
      <div className="p-[1px] rounded-md bg-gradient-to-r from-[#8D6851] to-[#D3BFB2]">
        <textarea
          ref={ref}
          value={value}
          className={`w-full rounded-md px-3 py-2 text-sm text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#8D6851] 
          ${
            isFilled
              ? "bg-gradient-to-r from-[#2c1f18] to-[#3d2d25]"
              : "bg-slate-900"
          } 
          ${className}`}
          {...props}
        />
      </div>
    );
  }
);

Textarea.displayName = "Textarea";
