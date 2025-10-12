import React, { useState } from "react";
import { useForm } from "react-hook-form";

import ProgressBar from "../../progressBar/ProgressBar";
import BankAccount from "./BankAccount";
import I9Form from "./I9Form";
import W4Form from "./W4Form";
import SelectCitizenship from "./SelectCitizenship";
import { X } from "lucide-react"; // cross icon

const ApplyJobs = () => {
  const [step, setStep] = useState(1);
  const [preview, setPreview] = useState(null); // For Signature preview
  const totalSteps = 5;

  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
    trigger, // <-- important for step-wise validation
  } = useForm();

  const onSubmit = (data) => {
    console.log("Form Data Submitted:", data);
    alert("Form submitted successfully! Check console.");
  };

  // Step-wise Next button validation
  const nextStepHandler = async () => {
    // Trigger validation for all fields
    const result = await trigger();
    if (result) {
      const allData = getValues(); // ✅ এখন ব্যবহার হচ্ছে
      console.log("All form data so far:", allData); // 👈 Console-এ দেখাবে

      setStep((prev) => prev + 1);
    } else {
      // Errors exist, stay on current step
      console.log("Validation errors:", errors);
    }
  };
  // Signature preview handler
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setPreview(URL.createObjectURL(file));
    }
  };
  // For removing the selected image
  const handleRemoveImage = () => {
    setPreview(null);
  };

  const prevStep = () => setStep((prev) => prev - 1);

  const inputWrapperClass =
    "rounded-md bg-gradient-to-r from-[#8D6851] to-[#D3BFB2] mt-1 p-[1px]";
  const inputClass =
    "w-full bg-slate-900 text-white rounded-md py-2 px-3 focus:outline-none focus:ring-0";

  return (
    <div>
      {step === 1 && (
        <div className="text-white">
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
                <img src="/cbyrac-logo.png" alt="Logo" />
              </div>
            </div>

            {/* Title */}
            <div className="text-center mb-8">
              <h1 className="text-2xl font-bold mb-2">
                Employment Application
              </h1>
              <p className="text-sm text-gray-300 mb-7">
                Please fill all forms, signatures are not a substitute for a
                completed application
              </p>
              <ProgressBar currentStep={step} totalSteps={totalSteps} />
            </div>

            <form
              onSubmit={handleSubmit(onSubmit)}
              className="rounded-2xl  max-w-7xl mx-auto"
            >
              {/* General Information */}
              <h2 className="text-xl font-bold text-white mb-4">
                General Information
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
                <div>
                  <label className="text-white mb-3 block">
                    First Name <span className="text-red-500">*</span>
                  </label>
                  <div className={inputWrapperClass}>
                    <input
                      type="text"
                      placeholder="Enter First Name"
                      {...register("firstName", {
                        required: "First Name is required",
                      })}
                      className={inputClass}
                    />
                  </div>
                  {errors.firstName && (
                    <p className="text-red-500 text-sm">
                      {errors.firstName.message}
                    </p>
                  )}
                </div>

                <div>
                  <label className="text-white mb-3 block">Middle Name</label>
                  <div className={inputWrapperClass}>
                    <input
                      type="text"
                      placeholder="Enter Middle Name"
                      {...register("middleName")}
                      className={inputClass}
                    />
                  </div>
                </div>

                <div>
                  <label className="text-white mb-3 block">
                    Last Name <span className="text-red-500">*</span>
                  </label>
                  <div className={inputWrapperClass}>
                    <input
                      type="text"
                      placeholder="Enter Last Name"
                      {...register("lastName", {
                        required: "Last Name is required",
                      })}
                      className={inputClass}
                    />
                  </div>
                  {errors.lastName && (
                    <p className="text-red-500 text-sm">
                      {errors.lastName.message}
                    </p>
                  )}
                </div>
              </div>

              {/* SSN, DOB, Application Date */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
                <div>
                  <label className="text-white mb-3 block">
                    Social Security Number (SSN){" "}
                    <span className="text-red-500">*</span>
                  </label>
                  <div className={inputWrapperClass}>
                    <input
                      type="text"
                      placeholder="Enter SSN"
                      {...register("ssn", { required: "SSN is required" })}
                      className={inputClass}
                    />
                  </div>
                  {errors.ssn && (
                    <p className="text-red-500 text-sm">{errors.ssn.message}</p>
                  )}
                </div>

                <div>
                  <label className="text-white mb-3 block">
                    Date Of Birth <span className="text-red-500">*</span>
                  </label>
                  <div className={inputWrapperClass}>
                    <input
                      type="date"
                      {...register("dob", {
                        required: "Date of Birth is required",
                      })}
                      className={`${inputClass} date-input`}
                    />
                  </div>
                  {errors.dob && (
                    <p className="text-red-500 text-sm">{errors.dob.message}</p>
                  )}
                </div>

                <div>
                  <label className="text-white mb-3 block">
                    Application Date <span className="text-red-500">*</span>
                  </label>
                  <div className={inputWrapperClass}>
                    <input
                      type="date"
                      {...register("applicationDate", {
                        required: "Application Date is required",
                      })}
                      className={`${inputClass} date-input`}
                    />
                  </div>
                  {errors.applicationDate && (
                    <p className="text-red-500 text-sm">
                      {errors.applicationDate.message}
                    </p>
                  )}
                </div>
              </div>

              {/* Additional General Info */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="text-white mb-3 block">
                    Telephone Number <span className="text-red-500">*</span>
                  </label>
                  <div className={inputWrapperClass}>
                    <input
                      type="text"
                      placeholder="Enter Telephone Number"
                      {...register("telephone")}
                      className={inputClass}
                    />
                  </div>
                </div>

                <div>
                  <label className="text-white mb-3 block">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <div className={inputWrapperClass}>
                    <input
                      type="email"
                      placeholder="Enter Email Address"
                      {...register("email")}
                      className={inputClass}
                    />
                  </div>
                </div>
              </div>

              {/* Address */}
              <div>
                <label className="text-white mb-3 block">
                  Address <span className="text-red-500">*</span>
                </label>
                <div className={inputWrapperClass}>
                  <input
                    type="text"
                    placeholder="Street/Apartment/City/State/ZIP"
                    {...register("address")}
                    className={inputClass}
                  />
                </div>
              </div>

              {/* Emergency Contact */}

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4 mt-4">
                <div>
                  <label className="text-white mb-3 block">
                    Emergency Contact Person Name{" "}
                    <span className="text-red-500">*</span>
                  </label>
                  <div className={inputWrapperClass}>
                    <input
                      type="text"
                      placeholder="Enter Name"
                      {...register("emergencyName", { required: "Required" })}
                      className={inputClass}
                    />
                  </div>
                  {errors.emergencyName && (
                    <p className="text-red-500 text-sm">
                      {errors.emergencyName.message}
                    </p>
                  )}
                </div>

                <div>
                  <label className="text-white mb-3  block">
                    Relation With Emergency Contact Person{" "}
                    <span className="text-red-500">*</span>
                  </label>
                  <div className={inputWrapperClass}>
                    <input
                      type="text"
                      placeholder="Relation"
                      {...register("emergencyRelation", {
                        required: "Required",
                      })}
                      className={inputClass}
                    />
                  </div>
                  {errors.emergencyRelation && (
                    <p className="text-red-500 text-sm">
                      {errors.emergencyRelation.message}
                    </p>
                  )}
                </div>

                <div>
                  <label className="text-white mb-3  block">
                    Emergency Contact Person’s Telephone{" "}
                    <span className="text-red-500">*</span>
                  </label>
                  <div className={inputWrapperClass}>
                    <input
                      type="text"
                      placeholder="Telephone"
                      {...register("emergencyTelephone", {
                        required: "Required",
                      })}
                      className={inputClass}
                    />
                  </div>
                  {errors.emergencyTelephone && (
                    <p className="text-red-500 text-sm">
                      {errors.emergencyTelephone.message}
                    </p>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
                <div>
                  <label className="text-white mb-3 block">
                    Type of employment desired{" "}
                    <span className="text-red-500">*</span>
                  </label>
                  <div className={inputWrapperClass}>
                    <select
                      {...register("employmentType")}
                      className={inputClass}
                    >
                      <option value="">Select</option>
                      <option value="intern">Intern</option>
                      <option value="temp">Temp Employee</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="text-white mb-3 block">
                    Desired Salary
                  </label>
                  <div className={inputWrapperClass}>
                    <input
                      type="text"
                      placeholder="Enter Desired Salary"
                      {...register("desiredSalary")}
                      className={inputClass}
                    />
                  </div>
                </div>

                <div>
                  <label className="text-white mb-3 block">
                    Hourly Rate (Optional)
                  </label>
                  <div className={inputWrapperClass}>
                    <input
                      type="text"
                      placeholder="Enter Hourly Rate"
                      {...register("hourlyRate")}
                      className={inputClass}
                    />
                  </div>
                </div>
              </div>

              {/* Position & Department */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
                {/* Position Applied For */}
                <div>
                  <label className="text-white mb-3 block">
                    Position Applied For
                  </label>
                  <div className={inputWrapperClass}>
                    <input
                      type="text"
                      value="Intern"
                      readOnly
                      disabled
                      className={`${inputClass} cursor-not-allowed`}
                    />
                  </div>
                </div>

                {/* Department */}
                <div>
                  <label className="text-white mb-3 block">Department</label>
                  <div className={inputWrapperClass}>
                    <input
                      type="text"
                      value="Fit2Lead"
                      readOnly
                      disabled
                      className={`${inputClass} cursor-not-allowed`}
                    />
                  </div>
                </div>

                {/* Overtime */}
                <div>
                  <label className="text-white mb-3 block">Overtime</label>
                  <div className={inputWrapperClass}>
                    <select
                      value="no"
                      disabled
                      className={`${inputClass} cursor-not-allowed`}
                    >
                      <option value="yes">Yes</option>
                      <option value="no">No</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Start Date */}
              <div className="mb-4">
                <label className="text-white mb-3 block">
                  Date On Which You Can Start Work If Hired
                </label>
                <div className={inputWrapperClass}>
                  <input
                    type="date"
                    {...register("startDate")}
                    className={`${inputClass} date-input`}
                  />
                </div>
              </div>

              {/* Previous Application */}

              <div className="mb-4">
                <label className="text-white mb-3 block">
                  Have You Previously Applied For Employment With This Company?
                </label>
                <div className={inputWrapperClass}>
                  <select
                    {...register("previousApplication")}
                    className={inputClass}
                  >
                    <option value="">Select</option>
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                  </select>
                </div>
              </div>

              <div className="mb-4">
                <label className="text-white mb-3 block">
                  If Yes, When and Where Did You Apply
                </label>
                <div className={inputWrapperClass}>
                  <input
                    type="text"
                    placeholder="Enter details"
                    {...register("applicationDetails")}
                    className={inputClass}
                  />
                </div>
              </div>

              <div className="mb-4">
                <label className="text-white mb-3 block">
                  Have You Ever Been Employed By This Company?
                </label>
                <div className={inputWrapperClass}>
                  <select
                    {...register("previousEmployment")}
                    className={inputClass}
                  >
                    <option value="">Select</option>
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="text-white mb-3 block">
                  If Yes, Provide Dates, Location and Reason For Separation
                </label>
                <div className={inputWrapperClass}>
                  <textarea
                    placeholder="Provide details"
                    {...register("employmentDetails")}
                    className={inputClass + " h-24"}
                  />
                </div>
              </div>
              {/* Educational Information */}
              <h2 className="text-xl font-bold text-white my-4">
                Educational Information
              </h2>

              <div className="overflow-x-auto mb-6">
                <table className="min-w-full border border-[#8D6851] text-white rounded-lg">
                  <thead>
                    <tr className="bg-slate-900 text-left">
                      <th className="border border-[#8D6851] px-4 py-2 w-34">
                        Education
                      </th>
                      <th className="border border-[#8D6851] px-4 py-2">
                        School Name
                      </th>
                      <th className="border border-[#8D6851] px-4 py-2">
                        Study / Major
                      </th>
                      <th className="border border-[#8D6851] px-4 py-2">
                        Graduation Status
                      </th>
                      <th className="border border-[#8D6851] px-4 py-2">
                        # Of Years Completed
                      </th>
                      <th className="border border-[#8D6851] px-4 py-2">
                        Honors Received
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {/* High School Row */}
                    <tr>
                      <td className="border border-[#8D6851] px-4 py-2">
                        High School
                      </td>
                      <td className="border border-[#8D6851] px-4 py-2">
                        <input
                          type="text"
                          placeholder="Enter School Name"
                          {...register("highSchoolName")}
                          className="w-full bg-slate-900 text-white px-2 py-1 rounded focus:outline-none"
                        />
                      </td>
                      <td className="border border-[#8D6851] px-4 py-2">
                        <input
                          type="text"
                          placeholder="Study / Major"
                          {...register("highSchoolMajor")}
                          className="w-full bg-slate-900 text-white px-2 py-1 rounded focus:outline-none"
                        />
                      </td>
                      <td className="border border-[#8D6851] px-4 py-2">
                        <select
                          {...register("highSchoolGraduationStatus")}
                          className="w-full bg-slate-900 text-white px-2 py-1 rounded focus:outline-none"
                        >
                          <option value="">Select</option>
                          <option value="graduated">Graduated</option>
                          <option value="notGraduated">Not Graduated</option>
                        </select>
                      </td>
                      <td className="border border-[#8D6851] px-4 py-2">
                        <input
                          type="number"
                          placeholder="Years"
                          {...register("highSchoolYears")}
                          className="w-full bg-slate-900 text-white px-2 py-1 rounded focus:outline-none"
                        />
                      </td>
                      <td className="border border-[#8D6851] px-4 py-2">
                        <input
                          type="text"
                          placeholder="Honors"
                          {...register("highSchoolHonors")}
                          className="w-full bg-slate-900 text-white px-2 py-1 rounded focus:outline-none"
                        />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Special Skills or Qualifications */}
              <div className="mb-6">
                <label className="text-xl font-bold text-white">
                  Special Skills or Qualifications
                </label>
                <div className={`mt-3 ${inputWrapperClass}`}>
                  <textarea
                    placeholder="Describe your special skills or qualifications"
                    {...register("skills")}
                    className={inputClass + " h-24"}
                  />
                </div>
              </div>

              {/* Employee Signature */}
              <div className="mb-6">
                <label className="text-white block mb-3">
                  Employee Signature <span className="text-red-500">*</span>{" "}
                  (Take a Picture of your signature For Upload)
                </label>

                {/* Upload Button Hide যদি preview থাকে */}
                {!preview && (
                  <div className="w-[350px] h-[50px] bg-gradient-to-l from-[#D4BFB2] to-[#8D6851] rounded-md mt-1 flex items-center justify-center">
                    <label className="w-full h-full flex items-center justify-center text-white cursor-pointer">
                      <span className="text-center">Upload Signature</span>
                      <input
                        type="file"
                        accept="image/*"
                        {...register("employeeSignature", {
                          required: "Signature is required",
                          onChange: handleFileChange,
                        })}
                        className="hidden"
                      />
                    </label>
                  </div>
                )}

                {/* Image Preview with Cross */}
                {preview && (
                  <div className="mt-3 relative inline-block">
                    <img
                      src={preview}
                      alt="Signature Preview"
                      className="w-[200px] h-[80px] object-contain border rounded-md"
                    />
                    <button
                      type="button"
                      onClick={handleRemoveImage}
                      className="absolute -top-2 -right-2 bg-red-500 text-white p-1 rounded-full hover:bg-red-600"
                    >
                      <X size={14} />
                    </button>
                  </div>
                )}

                {errors.employeeSignature && (
                  <p className="text-red-500 text-sm mt-2">
                    {errors.employeeSignature.message}
                  </p>
                )}
              </div>
            </form>

            <div className="flex justify-center mt-6 gap-4">
              <button
                type="button"
                onClick={prevStep}
                className="px-6 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-700"
                disabled={step === 1} // disable prev on first step
              >
                Previous
              </button>

              <button
                type="button"
                // onSubmit={onSubmit}
                onClick={nextStepHandler}
                className="px-6 py-2 bg-gradient-to-r from-[#8D6851] to-[#D3BFB2] text-white rounded-md hover:opacity-90"
              >
                Next
              </button>
            </div>
          </div>
        </div>
      )}

      {step === 2 && (
        <BankAccount
          prevStep={prevStep}
          nextStep={nextStepHandler}
          register={register}
          step={step}
          errors={errors}
        />
      )}

      {step === 3 && (
        <I9Form
          register={register}
          errors={errors}
          prevStep={prevStep}
          nextStep={nextStepHandler}
          step={step}
          handleSubmit={handleSubmit(onSubmit)}
        />
      )}

      {step === 4 && (
        <W4Form
          register={register}
          errors={errors}
          prevStep={prevStep}
          nextStep={nextStepHandler}
          step={step}
          handleSubmit={handleSubmit(onSubmit)}
        />
      )}

      {step === 5 && (
        <SelectCitizenship
          register={register}
          errors={errors}
          prevStep={prevStep}
          nextStep={nextStepHandler}
          step={step}
          handleSubmit={handleSubmit(onSubmit)}
        />
      )}
    </div>
  );
};

export default ApplyJobs;
