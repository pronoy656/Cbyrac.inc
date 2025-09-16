import React from "react";

export function Label({ className = "", ...props }) {
  return (
    <label
      className={`block text-sm font-medium text-gray-200 ${className}`}
      {...props}
    />
  );
}
