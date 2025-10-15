import React, { useState } from "react";
import { TfiBag } from "react-icons/tfi";
import { CiCircleCheck } from "react-icons/ci";
import { useNavigate } from "react-router-dom";
const RoleSelector = () => {
  const [selectedJobType, setSelectedJobType] = useState("Fit2Lead Intern");
  const navigate = useNavigate();

  // 🔹 Handle selection dynamically based on value passed
  const handleSelection = (jobType) => {
    setSelectedJobType(jobType);
    navigate("/register", { state: { selectedJobType: jobType } });
    console.log("Selected:", jobType);
  };
  return (
    <div className="flex justify-center items-center min-h-screen bg-[#05051A]">
      <div className="text-center">
        <div className="mb-8">
          <img
            src="/cbyrac-logo.png"
            alt="CBYRAC Logo"
            className="w-24 mx-auto"
          />
        </div>
        <p className="text-white text-3xl font-semibold mb-6">CBYRAC, Inc</p>
        <h1 className="text-white text-4xl font-bold mb-12">
          Select Your Job Type
        </h1>
        <div className="flex justify-center gap-6">
          <button
            className={`w-[293px] h-[158px] text-white bg-gradient-to-r from-[#8C6750] to-[#D4BFB2] rounded-lg transition-all duration-300 hover:bg-[#5d3d2e] ${
              selectedJobType === "Fit2Lead Intern" ? "bg-[#9e7c5e]" : ""
            }`}
            onClick={() => handleSelection("Fit2Lead Intern")}
          >
            <div className="flex items-center justify-between text-2xl text-white px-10">
              <div className="text-3xl">
                <TfiBag />
              </div>
              <CiCircleCheck />
            </div>
            <p className="flex justify-start px-10 mt-8 text-2xl font-semibold">
              Fit2Lead Intern
            </p>
          </button>
          <button
            className={`w-[293px] h-[158px] text-white bg-gradient-to-r from-[#8C6750] to-[#D4BFB2] rounded-lg transition-all duration-300 hover:bg-[#5d3d2e] ${
              selectedJobType === "Temporary Employee" ? "bg-[#9e7c5e]" : ""
            }`}
            onClick={() => handleSelection("Temporary Employee")}
          >
            <div className="flex items-center justify-between text-2xl text-white px-10">
              <div className="text-3xl">
                <TfiBag />
              </div>
              <CiCircleCheck />
            </div>
            <p className="flex justify-start px-6 mt-8 text-2xl font-semibold">
              Temporary Employee
            </p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default RoleSelector;
