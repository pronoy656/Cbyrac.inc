import React, { useState } from "react";
import { useForm } from "react-hook-form";
import ProgressBar from "../../progressBar/ProgressBar";
import { IoPeopleOutline } from "react-icons/io5";
import { CiCircleCheck } from "react-icons/ci";

const BankAccount = ({ prevStep, nextStep, step }) => {
  const [selectedJobType, setSelectedJobType] = useState("");

  const totalSteps = 3; // total number of steps for progress bar

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Bank Account Data Submitted:", data);
    alert("Form submitted successfully! Check console.");
  };
  const handleSelection = (jobType) => {
    setSelectedJobType(jobType);
  };
  const inputWrapperClass =
    "rounded-md bg-gradient-to-r from-[#8D6851] to-[#D3BFB2] mt-1 p-[1px]";
  const inputClass =
    "w-full bg-slate-900 text-white rounded-md py-2 px-3 focus:outline-none focus:ring-0";
  return (
    <div>
      <div className="text-white ">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="flex space-x-96 mb-4">
            <div className="text-sm">
              <div className="font-bold text-lg mb-2">CBYRAC, INC</div>
              <div>123 MAIN STREET SUITE 100</div>
              <div>ANYTOWN, STATE 12345</div>
              <div>PHONE: 555-555-5555</div>
              <div>EMAIL: info@cbyrac.com</div>
            </div>
            <div className="w-24 h-24 bg-white rounded justify-center">
              <img src="/cbyrac-logo.png" alt="" />
            </div>
          </div>

          {/* Title */}
          <div className="text-center mb-8">
            <h1 className="text-2xl font-bold mb-2">Employment Application</h1>
            <p className="text-sm text-gray-300 mb-7">
              Please fill all forms, signatures are not a substitute for a
              completed application
            </p>
            {/* progressbar */}
            <ProgressBar currentStep={step} totalSteps={totalSteps} />
          </div>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="rounded-2xl  max-w-7xl mx-auto"
          >
            {/* General Information */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4"></div>
            {/* Additional General Info */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="text-white mb-1 block">Name *</label>
                <div className={inputWrapperClass}>
                  <input
                    type="text"
                    placeholder="Enter Bank Name"
                    {...register("telephone")}
                    className={inputClass}
                  />
                </div>
              </div>

              <div>
                <label className="text-white mb-1 block">SSN * (Last 4)</label>
                <div className={inputWrapperClass}>
                  <input
                    type="email"
                    placeholder="XXX-XX-____"
                    {...register("email")}
                    className={inputClass}
                  />
                </div>
              </div>
            </div>
            <p className="text-[40px] font-bold text-center mt-12 mb-14">
              Select Bank Account Type
            </p>
            <div className="flex justify-center gap-6">
              <button
                className={`w-[293px] h-[158px] text-white bg-gradient-to-r from-[#8C6750] to-[#D4BFB2] rounded-lg transition-all duration-300 hover:bg-[#5d3d2e] ${
                  selectedJobType === "Fit2Lead Intern" ? "bg-[#9e7c5e]" : ""
                }`}
                onClick={() => handleSelection("Fit2Lead Intern")}
              >
                <div className="flex items-center justify-between text-2xl text-white px-10">
                  <div className="text-3xl">
                    <IoPeopleOutline />
                  </div>
                  <CiCircleCheck />
                </div>
                <p className="flex justify-start px-10 mt-8 text-2xl font-semibold">
                  Checking Account
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
                    <IoPeopleOutline />
                  </div>
                  <CiCircleCheck />
                </div>
                <p className="flex justify-start px-6 mt-8 text-2xl font-semibold">
                  Savings Account
                </p>
              </button>
            </div>
            {/* Additional General Info */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4 mt-9">
              <div>
                <label className="text-white mb-1 block">Bank Name *</label>
                <div className={inputWrapperClass}>
                  <input
                    type="text"
                    placeholder="Enter Bank Name"
                    {...register("telephone")}
                    className={inputClass}
                  />
                </div>
              </div>

              <div>
                <label className="text-white mb-1 block">State </label>
                <div className={inputWrapperClass}>
                  <input
                    type="email"
                    placeholder="Enter State"
                    {...register("email")}
                    className={inputClass}
                  />
                </div>
              </div>
            </div>{" "}
            {/* Additional General Info */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="text-white mb-1 block">Deposit type *</label>
                <div className={inputWrapperClass}>
                  <select
                    {...register("depositType", {
                      required: "Please select a deposit type",
                    })}
                    className={`${inputClass} bg-[#05051A]`}
                  >
                    <option value="">Select</option>
                    <option value="full">Full Pay Check</option>
                    <option value="partial">Partial Pay Check</option>
                  </select>
                </div>
                {errors.depositType && (
                  <p className="text-red-500 text-sm">
                    {errors.depositType.message}
                  </p>
                )}
              </div>

              <div>
                <label className="text-white mb-1 block">
                  Deposit Percentage *
                </label>
                <div className={`${inputWrapperClass} relative`}>
                  <input
                    type="number"
                    placeholder="Enter Percentage"
                    {...register("percentage", {
                      required: "Percentage is required",
                      min: { value: 1, message: "Minimum 1%" },
                      max: { value: 100, message: "Maximum 100%" },
                    })}
                    className={`${inputClass} pr-10`} // right side padding for % sign
                  />
                  {/* % Sign */}
                  <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400">
                    %
                  </span>
                </div>
                {errors.percentage && (
                  <p className="text-red-500 text-sm">
                    {errors.percentage.message}
                  </p>
                )}
              </div>
            </div>{" "}
            {/* Additional General Info */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="text-white mb-1 block">
                  Transit/ABA No *
                </label>
                <div className={inputWrapperClass}>
                  <input
                    type="text"
                    placeholder="Enter Transit/ABA No"
                    {...register("telephone")}
                    className={inputClass}
                  />
                </div>
              </div>

              <div>
                <label className="text-white mb-1 block">Account No *</label>
                <div className={inputWrapperClass}>
                  <input
                    type="email"
                    placeholder="Enter Account No"
                    {...register("email")}
                    className={inputClass}
                  />
                </div>
              </div>
            </div>{" "}
            {/* Additional General Info */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="text-white mb-1 block">
                  Second Bank Name *
                </label>
                <div className={inputWrapperClass}>
                  <input
                    type="text"
                    placeholder="Enter Bank Name"
                    {...register("telephone")}
                    className={inputClass}
                  />
                </div>
              </div>

              <div>
                <label className="text-white mb-1 block">
                  Deposit Amount ( In Percentage ) *
                </label>
                <div className={inputWrapperClass}>
                  <input
                    type="email"
                    placeholder="Enter Percentage"
                    {...register("email")}
                    className={inputClass}
                  />
                </div>
              </div>
            </div>
            {/* Additional General Info */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="text-white mb-1 block">
                  Transit/ABA No *
                </label>
                <div className={inputWrapperClass}>
                  <input
                    type="text"
                    placeholder="Enter Transit/ABA No"
                    {...register("telephone")}
                    className={inputClass}
                  />
                </div>
              </div>

              <div>
                <label className="text-white mb-1 block">Account No *</label>
                <div className={inputWrapperClass}>
                  <input
                    type="email"
                    placeholder="Enter Account No"
                    {...register("email")}
                    className={inputClass}
                  />
                </div>
              </div>
            </div>
            {/* Employee Signature */}
            <div className="mb-6">
              <label className="text-white block mb-2">
                Employee Signature *
              </label>
              <div className="w-[350px] h-[50px] bg-gradient-to-l from-[#D4BFB2] to-[#8D6851]  rounded-md mt-1 flex items-center justify-center">
                <label className="w-full h-full flex items-center justify-center text-white cursor-pointer">
                  <span className="text-center">Upload Signature</span>
                  <input
                    type="file"
                    accept="image/*"
                    {...register("employeeSignature", {
                      required: "Signature is required",
                    })}
                    className="hidden"
                  />
                </label>
              </div>
              {errors.employeeSignature && (
                <p className="text-red-500 text-sm">
                  {errors.employeeSignature.message}
                </p>
              )}
            </div>
            <button>submit</button>
          </form>
          <div className="flex justify-center mt-6 gap-4">
            <button
              type="button"
              onClick={prevStep}
              className="px-6 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-700"
            >
              Previous
            </button>

            <button
              type="button"
              onClick={nextStep}
              className="px-6 py-2 bg-gradient-to-r from-[#8D6851] to-[#D3BFB2] text-white rounded-md hover:opacity-90"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BankAccount;
