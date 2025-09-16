import React from "react";

const ProgressBar = ({ currentStep, totalSteps }) => {
  const progress = (currentStep / totalSteps) * 100;

  return (
    <div className="w-full bg-gray-800 rounded-full h-3 mb-6">
      <div
        className="h-3 rounded-full bg-gradient-to-r from-[#8D6851] to-[#D3BFB2] transition-all duration-300 ease-in-out"
        style={{ width: `${progress}%` }}
      ></div>
    </div>
  );
};

export default ProgressBar;
