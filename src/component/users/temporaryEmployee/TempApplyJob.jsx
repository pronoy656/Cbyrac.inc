// import React, { useState } from "react";

// // import ProgressBar from "../../progressBar/ProgressBar";
// import { useForm } from "react-hook-form";

// import ProgressBar from "../../progressBar/ProgressBar";
// import WorkExperienceForm from "./WorkExperienceForm";
// import References from "./References";
// import DrivingInfoForm from "./DrivingInfoForm";
// import TermsText from "./TermsText";
// import OnlyCbyracInc from "./OnlyCbyracInc";
// import CertificationText from "./CertificationText";
// import InjuriesProcedures from "./InjuriesProcedures";
// import AllPolicy from "./AllPolicy";
// import TempBankAccount from "./TempBankAccount";
// import TempI9Form from "./TempI9Form";
// import TempW4Form from "./TempW4Form";
// import TempSelectCitizenShip from "./TempSelectCitizenShip";
// import { X } from "lucide-react";

// const TempApplyJob = () => {
//   const [step, setStep] = useState(1); // track current step
//   const [preview, setPreview] = useState(null); // For Signature preview
//   const totalSteps = 12; // total number of steps for progress bar

//   //previous and next button logic
//   const nextStep = () => setStep((prev) => prev + 1);
//   const prevStep = () => setStep((prev) => prev - 1);

//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//     getValues,
//     trigger, // <-- important for step-wise validation
//   } = useForm();

//   const onSubmit = (data) => {
//     console.log("Form Data Submitted:", data);
//     alert("Temp employee Form submitted successfully!");
//   };

//   // Step-wise Next button validation
//   const nextStepHandler = async () => {
//     // Trigger validation for all fields
//     const result = await trigger();
//     if (result) {
//       const allData = getValues(); // ✅ এখন ব্যবহার হচ্ছে
//       console.log("Submit temp apply form :", allData); // 👈 Console-এ দেখাবে

//       setStep((prev) => prev + 1);
//     } else {
//       // Errors exist, stay on current step
//       console.log("Validation errors:", errors);
//     }
//   };

//   // Signature preview handler
//   const handleFileChange = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       setPreview(URL.createObjectURL(file));
//     }
//   };
//   // For removing the selected image
//   const handleRemoveImage = () => {
//     setPreview(null);
//   };

//   const inputWrapperClass =
//     "rounded-md bg-gradient-to-r from-[#8D6851] to-[#D3BFB2] mt-1 p-[1px]";
//   const inputClass =
//     "w-full bg-slate-900 text-white rounded-md py-2 px-3 focus:outline-none focus:ring-0";
//   return (
//     <div>
//       {step === 1 && (
//         <div className="text-white ">
//           <div className="max-w-7xl mx-auto">
//             {/* Header */}
//             <div className="flex space-x-96 mb-4">
//               <div className="text-sm">
//                 <div className="font-bold text-lg mb-2">CBYRAC, INC</div>
//                 <div>123 MAIN STREET SUITE 100</div>
//                 <div>ANYTOWN, STATE 12345</div>
//                 <div>PHONE: 555-555-5555</div>
//                 <div>EMAIL: info@cbyrac.com</div>
//               </div>
//               <div className="w-24 h-24 bg-white rounded justify-center">
//                 <img src="/cbyrac-logo.png" alt="" />
//               </div>
//             </div>

//             {/* Title */}
//             <div className="text-center mb-8">
//               <h1 className="text-2xl font-bold mb-2">
//                 Employment Application
//               </h1>
//               <p className="text-sm text-gray-300 mb-7">
//                 Please fill all forms, signatures are not a substitute for a
//                 completed application
//               </p>
//               {/* progressbar */}
//               <ProgressBar currentStep={step} totalSteps={totalSteps} />
//             </div>
//             <form
//               onSubmit={handleSubmit(onSubmit)}
//               className="rounded-2xl  max-w-7xl mx-auto"
//             >
//               {/* General Information */}
//               <h2 className="text-xl font-bold text-white mb-4">
//                 General Information
//               </h2>
//               <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
//                 <div>
//                   <label className="text-white mb-1 block">
//                     First Name <span className="text-red-500">*</span>
//                   </label>
//                   <div className={inputWrapperClass}>
//                     <input
//                       type="text"
//                       placeholder="Enter First Name"
//                       {...register("firstName", {
//                         required: "First Name is required",
//                       })}
//                       className={inputClass}
//                     />
//                   </div>
//                   {errors.firstName && (
//                     <p className="text-red-500 text-sm">
//                       {errors.firstName.message}
//                     </p>
//                   )}
//                 </div>

//                 <div>
//                   <label className="text-white mb-1 block">Middle Name</label>
//                   <div className={inputWrapperClass}>
//                     <input
//                       type="text"
//                       placeholder="Enter Middle Name"
//                       {...register("middleName")}
//                       className={inputClass}
//                     />
//                   </div>
//                 </div>

//                 <div>
//                   <label className="text-white mb-1 block">
//                     Last Name <span className="text-red-500">*</span>
//                   </label>
//                   <div className={inputWrapperClass}>
//                     <input
//                       type="text"
//                       placeholder="Enter Last Name"
//                       {...register("lastName", {
//                         required: "Last Name is required",
//                       })}
//                       className={inputClass}
//                     />
//                   </div>
//                   {errors.lastName && (
//                     <p className="text-red-500 text-sm">
//                       {errors.lastName.message}
//                     </p>
//                   )}
//                 </div>
//               </div>

//               {/* SSN, DOB, Application Date */}
//               <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
//                 <div>
//                   <label className="text-white mb-1 block">
//                     {" "}
//                     Social Security Number (SSN){" "}
//                     <span className="text-red-500">*</span>
//                   </label>
//                   <div className={inputWrapperClass}>
//                     <input
//                       type="text"
//                       placeholder="Enter SSN"
//                       {...register("ssn", { required: "SSN is required" })}
//                       className={inputClass}
//                     />
//                   </div>
//                   {errors.ssn && (
//                     <p className="text-red-500 text-sm">{errors.ssn.message}</p>
//                   )}
//                 </div>

//                 <div>
//                   <label className="text-white mb-1 block">
//                     Date of Birth <span className="text-red-500">*</span>
//                   </label>
//                   <div className={inputWrapperClass}>
//                     <input
//                       type="date"
//                       {...register("dob", {
//                         required: "Date of Birth is required",
//                       })}
//                       className={inputClass}
//                     />
//                   </div>
//                   {errors.dob && (
//                     <p className="text-red-500 text-sm">{errors.dob.message}</p>
//                   )}
//                 </div>

//                 <div>
//                   <label className="text-white mb-1 block">
//                     Application Date <span className="text-red-500">*</span>
//                   </label>
//                   <div className={inputWrapperClass}>
//                     <input
//                       type="date"
//                       {...register("applicationDate", {
//                         required: "Application Date is required",
//                       })}
//                       className={inputClass}
//                     />
//                   </div>
//                   {errors.applicationDate && (
//                     <p className="text-red-500 text-sm">
//                       {errors.applicationDate.message}
//                     </p>
//                   )}
//                 </div>
//               </div>

//               {/* Additional General Info */}
//               <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
//                 <div>
//                   <label className="text-white mb-1 block">
//                     Telephone Number <span className="text-red-500">*</span>
//                   </label>
//                   <div className={inputWrapperClass}>
//                     <input
//                       type="text"
//                       placeholder="Enter Telephone Number"
//                       {...register("telephone")}
//                       className={inputClass}
//                     />
//                   </div>
//                 </div>

//                 <div>
//                   <label className="text-white mb-1 block">
//                     Email Address <span className="text-red-500">*</span>
//                   </label>
//                   <div className={inputWrapperClass}>
//                     <input
//                       type="email"
//                       placeholder="Enter Email Address"
//                       {...register("email")}
//                       className={inputClass}
//                     />
//                   </div>
//                 </div>
//               </div>

//               {/* Address */}
//               <div>
//                 <label className="text-white mb-1 block">
//                   Address <span className="text-red-500">*</span>
//                 </label>
//                 <div className={inputWrapperClass}>
//                   <input
//                     type="text"
//                     placeholder="Street/Apartment/City/State/ZIP"
//                     {...register("address")}
//                     className={inputClass}
//                   />
//                 </div>
//               </div>

//               {/* Emergency Contact */}

//               <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4 mt-4">
//                 <div>
//                   <label className="text-white mb-3 block">
//                     Emergency Contact Person Name{" "}
//                     <span className="text-red-500">*</span>
//                   </label>
//                   <div className={inputWrapperClass}>
//                     <input
//                       type="text"
//                       placeholder="Enter Name"
//                       {...register("emergencyName", { required: "Required" })}
//                       className={inputClass}
//                     />
//                   </div>
//                   {errors.emergencyName && (
//                     <p className="text-red-500 text-sm">
//                       {errors.emergencyName.message}
//                     </p>
//                   )}
//                 </div>

//                 <div>
//                   <label className="text-white mb-3  block">
//                     Relation With Emergency Contact Person{" "}
//                     <span className="text-red-500">*</span>
//                   </label>
//                   <div className={inputWrapperClass}>
//                     <input
//                       type="text"
//                       placeholder="Relation"
//                       {...register("emergencyRelation", {
//                         required: "Required",
//                       })}
//                       className={inputClass}
//                     />
//                   </div>
//                   {errors.emergencyRelation && (
//                     <p className="text-red-500 text-sm">
//                       {errors.emergencyRelation.message}
//                     </p>
//                   )}
//                 </div>

//                 <div>
//                   <label className="text-white mb-3  block">
//                     Emergency Contact Person’s Telephone{" "}
//                     <span className="text-red-500">*</span>
//                   </label>
//                   <div className={inputWrapperClass}>
//                     <input
//                       type="text"
//                       placeholder="Telephone"
//                       {...register("emergencyTelephone", {
//                         required: "Required",
//                       })}
//                       className={inputClass}
//                     />
//                   </div>
//                   {errors.emergencyTelephone && (
//                     <p className="text-red-500 text-sm">
//                       {errors.emergencyTelephone.message}
//                     </p>
//                   )}
//                 </div>
//               </div>

//               <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
//                 <div>
//                   <label className="text-white mb-1 block">
//                     Type of Employment Desired{" "}
//                     <span className="text-red-500">*</span>
//                   </label>
//                   <div className={inputWrapperClass}>
//                     <select
//                       {...register("employmentType")}
//                       className={inputClass}
//                     >
//                       <option value="">Select</option>
//                       <option value="intern">Intern</option>
//                       <option value="temp">Temp Employee</option>
//                     </select>
//                   </div>
//                 </div>

//                 <div>
//                   <label className="text-white mb-1 block">
//                     Desired Salary
//                   </label>
//                   <div className={inputWrapperClass}>
//                     <input
//                       type="text"
//                       placeholder="Enter Desired Salary"
//                       {...register("desiredSalary")}
//                       className={inputClass}
//                     />
//                   </div>
//                 </div>

//                 <div>
//                   <label className="text-white mb-1 block">
//                     Hourly Rate (Optional)
//                   </label>
//                   <div className={inputWrapperClass}>
//                     <input
//                       type="text"
//                       placeholder="Enter Hourly Rate"
//                       {...register("hourlyRate")}
//                       className={inputClass}
//                     />
//                   </div>
//                 </div>
//               </div>

//               {/* Position & Department */}
//               <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
//                 <div>
//                   <label className="text-white mb-1 block">
//                     Position Applied For
//                   </label>
//                   <div className={inputWrapperClass}>
//                     <input
//                       type="text"
//                       value="Temporary"
//                       readOnly
//                       className={inputClass}
//                     />
//                   </div>
//                 </div>

//                 <div>
//                   <label className="text-white mb-1 block">Department</label>
//                   <div className={inputWrapperClass}>
//                     <input
//                       type="text"
//                       placeholder="Enter Department"
//                       {...register("department")}
//                       className={inputClass}
//                     />
//                   </div>
//                 </div>

//                 <div>
//                   <label className="text-white mb-1 block">Overtime</label>
//                   <div className={inputWrapperClass}>
//                     <select {...register("overtime")} className={inputClass}>
//                       <option value="">Select</option>
//                       <option value="yes">Yes</option>
//                       <option value="no">No</option>
//                     </select>
//                   </div>
//                 </div>
//               </div>

//               {/* Start Date */}
//               <div>
//                 <label className="text-white mb-1 block">
//                   Date On Which You Can Start Work If Hired
//                 </label>
//                 <div className={inputWrapperClass}>
//                   <input
//                     type="date"
//                     {...register("startDate")}
//                     className={inputClass}
//                   />
//                 </div>
//               </div>

//               {/* Previous Application */}

//               <div className="mt-4">
//                 <label className="text-white mb-1 block">
//                   Have You Previously Applied For Employment With This Company?
//                 </label>
//                 <div className={inputWrapperClass}>
//                   <select
//                     {...register("previousApplication")}
//                     className={inputClass}
//                   >
//                     <option value="">Select</option>
//                     <option value="yes">Yes</option>
//                     <option value="no">No</option>
//                   </select>
//                 </div>
//               </div>

//               <div className="mt-4">
//                 <label className="text-white mb-1 block">
//                   If Yes, When and Where Did You Apply
//                 </label>
//                 <div className={inputWrapperClass}>
//                   <input
//                     type="text"
//                     placeholder="Enter details"
//                     {...register("applicationDetails")}
//                     className={inputClass}
//                   />
//                 </div>
//               </div>

//               <div className="mt-4">
//                 <label className="text-white mb-1 block">
//                   Have You Ever Been Employed By This Company?
//                 </label>
//                 <div className={inputWrapperClass}>
//                   <select
//                     {...register("previousEmployment")}
//                     className={inputClass}
//                   >
//                     <option value="">Select</option>
//                     <option value="yes">Yes</option>
//                     <option value="no">No</option>
//                   </select>
//                 </div>
//               </div>

//               <div className="mt-4">
//                 <label className="text-white mb-1 block">
//                   If Yes, Provide Dates, Location and Reason For Separation
//                 </label>
//                 <div className={inputWrapperClass}>
//                   <textarea
//                     placeholder="Provide details"
//                     {...register("employmentDetails")}
//                     className={inputClass + " h-24"}
//                   />
//                 </div>
//               </div>
//               {/* Educational Information */}
//               <h2 className="text-xl font-bold text-white my-4">
//                 Educational Information
//               </h2>

//               <div className="overflow-x-auto mb-6">
//                 <table className="min-w-full border border-[#8D6851] text-white rounded-lg">
//                   <thead>
//                     <tr className="bg-slate-900 text-left">
//                       <th className="border border-[#8D6851] px-4 py-2 w-34">
//                         Education
//                       </th>
//                       <th className="border border-[#8D6851] px-4 py-2">
//                         School Name
//                       </th>
//                       <th className="border border-[#8D6851] px-4 py-2">
//                         Study / Major
//                       </th>
//                       <th className="border border-[#8D6851] px-4 py-2">
//                         Graduation Status
//                       </th>
//                       <th className="border border-[#8D6851] px-4 py-2">
//                         # Of Years Completed
//                       </th>
//                       <th className="border border-[#8D6851] px-4 py-2">
//                         Honors Received
//                       </th>
//                     </tr>
//                   </thead>
//                   <tbody>
//                     {/* High School Row */}
//                     <tr>
//                       <td className="border w-51 border-[#8D6851] px-4 py-2">
//                         High School
//                       </td>
//                       <td className="border border-[#8D6851] px-4 py-2">
//                         <input
//                           type="text"
//                           placeholder="Enter School Name"
//                           {...register("highSchoolName")}
//                           className="w-full bg-slate-900 text-white px-2 py-1 rounded focus:outline-none"
//                         />
//                       </td>
//                       <td className="border border-[#8D6851] px-4 py-2">
//                         <input
//                           type="text"
//                           placeholder="Study / Major"
//                           {...register("highSchoolMajor")}
//                           className="w-full bg-slate-900 text-white px-2 py-1 rounded focus:outline-none"
//                         />
//                       </td>
//                       <td className="border border-[#8D6851] px-4 py-2">
//                         <select
//                           {...register("highSchoolGraduationStatus")}
//                           className="w-full bg-slate-900 text-white px-2 py-1 rounded focus:outline-none"
//                         >
//                           <option value="">Select</option>
//                           <option value="graduated">Graduated</option>
//                           <option value="notGraduated">Not Graduated</option>
//                         </select>
//                       </td>
//                       <td className="border border-[#8D6851] px-4 py-2">
//                         <input
//                           type="number"
//                           placeholder="Years"
//                           {...register("highSchoolYears")}
//                           className="w-full bg-slate-900 text-white px-2 py-1 rounded focus:outline-none"
//                         />
//                       </td>
//                       <td className="border border-[#8D6851] px-4 py-2">
//                         <input
//                           type="text"
//                           placeholder="Honors"
//                           {...register("highSchoolHonors")}
//                           className="w-full bg-slate-900 text-white px-2 py-1 rounded focus:outline-none"
//                         />
//                       </td>
//                     </tr>

//                     {/* College Row */}
//                     <tr>
//                       <td className="border border-[#8D6851] px-4 py-2">
//                         College
//                       </td>
//                       <td className="border border-[#8D6851] px-4 py-2">
//                         <input
//                           type="text"
//                           placeholder="Enter College Name"
//                           {...register("collegeName")}
//                           className="w-full bg-slate-900 text-white px-2 py-1 rounded focus:outline-none"
//                         />
//                       </td>
//                       <td className="border border-[#8D6851] px-4 py-2">
//                         <input
//                           type="text"
//                           placeholder="Study / Major"
//                           {...register("collegeMajor")}
//                           className="w-full bg-slate-900 text-white px-2 py-1 rounded focus:outline-none"
//                         />
//                       </td>
//                       <td className="border border-[#8D6851] px-4 py-2">
//                         <select
//                           {...register("collegeGraduationStatus")}
//                           className="w-full bg-slate-900 text-white px-2 py-1 rounded focus:outline-none"
//                         >
//                           <option value="">Select</option>
//                           <option value="graduated">Graduated</option>
//                           <option value="notGraduated">Not Graduated</option>
//                         </select>
//                       </td>
//                       <td className="border border-[#8D6851] px-4 py-2">
//                         <input
//                           type="number"
//                           placeholder="Years"
//                           {...register("collegeYears")}
//                           className="w-full bg-slate-900 text-white px-2 py-1 rounded focus:outline-none"
//                         />
//                       </td>
//                       <td className="border border-[#8D6851] px-4 py-2">
//                         <input
//                           type="text"
//                           placeholder="Honors"
//                           {...register("collegeHonors")}
//                           className="w-full bg-slate-900 text-white px-2 py-1 rounded focus:outline-none"
//                         />
//                       </td>
//                     </tr>

//                     {/* Graduate / Professional Row */}
//                     <tr>
//                       <td className="border border-[#8D6851] px-4 py-2">
//                         Graduate / Professional
//                       </td>
//                       <td className="border border-[#8D6851] px-4 py-2">
//                         <input
//                           type="text"
//                           placeholder="Enter School Name"
//                           {...register("graduateSchoolName")}
//                           className="w-full bg-slate-900 text-white px-2 py-1 rounded focus:outline-none"
//                         />
//                       </td>
//                       <td className="border border-[#8D6851] px-4 py-2">
//                         <input
//                           type="text"
//                           placeholder="Study / Major"
//                           {...register("graduateMajor")}
//                           className="w-full bg-slate-900 text-white px-2 py-1 rounded focus:outline-none"
//                         />
//                       </td>
//                       <td className="border border-[#8D6851] px-4 py-2">
//                         <select
//                           {...register("graduateGraduationStatus")}
//                           className="w-full bg-slate-900 text-white px-2 py-1 rounded focus:outline-none"
//                         >
//                           <option value="">Select</option>
//                           <option value="graduated">Graduated</option>
//                           <option value="notGraduated">Not Graduated</option>
//                         </select>
//                       </td>
//                       <td className="border border-[#8D6851] px-4 py-2">
//                         <input
//                           type="number"
//                           placeholder="Years"
//                           {...register("graduateYears")}
//                           className="w-full bg-slate-900 text-white px-2 py-1 rounded focus:outline-none"
//                         />
//                       </td>
//                       <td className="border border-[#8D6851] px-4 py-2">
//                         <input
//                           type="text"
//                           placeholder="Honors"
//                           {...register("graduateHonors")}
//                           className="w-full bg-slate-900 text-white px-2 py-1 rounded focus:outline-none"
//                         />
//                       </td>
//                     </tr>

//                     {/* Trade or Correspondence Row */}
//                     <tr>
//                       <td className="border border-[#8D6851] px-4 py-2">
//                         Trade / Correspondence
//                       </td>
//                       <td className="border border-[#8D6851] px-4 py-2">
//                         <input
//                           type="text"
//                           placeholder="Enter School Name"
//                           {...register("tradeSchoolName")}
//                           className="w-full bg-slate-900 text-white px-2 py-1 rounded focus:outline-none"
//                         />
//                       </td>
//                       <td className="border border-[#8D6851] px-4 py-2">
//                         <input
//                           type="text"
//                           placeholder="Study / Major"
//                           {...register("tradeMajor")}
//                           className="w-full bg-slate-900 text-white px-2 py-1 rounded focus:outline-none"
//                         />
//                       </td>
//                       <td className="border border-[#8D6851] px-4 py-2">
//                         <select
//                           {...register("tradeGraduationStatus")}
//                           className="w-full bg-slate-900 text-white px-2 py-1 rounded focus:outline-none"
//                         >
//                           <option value="">Select</option>
//                           <option value="graduated">Graduated</option>
//                           <option value="notGraduated">Not Graduated</option>
//                         </select>
//                       </td>
//                       <td className="border border-[#8D6851] px-4 py-2">
//                         <input
//                           type="number"
//                           placeholder="Years"
//                           {...register("tradeYears")}
//                           className="w-full bg-slate-900 text-white px-2 py-1 rounded focus:outline-none"
//                         />
//                       </td>
//                       <td className="border border-[#8D6851] px-4 py-2">
//                         <input
//                           type="text"
//                           placeholder="Honors"
//                           {...register("tradeHonors")}
//                           className="w-full bg-slate-900 text-white px-2 py-1 rounded focus:outline-none"
//                         />
//                       </td>
//                     </tr>
//                   </tbody>
//                 </table>
//               </div>

//               {/* Special Skills or Qualifications */}
//               <div className="mb-6">
//                 <label className="text-xl font-bold text-white">
//                   Special Skills or Qualifications
//                 </label>
//                 <div className={inputWrapperClass}>
//                   <textarea
//                     placeholder="Describe your special skills or qualifications"
//                     {...register("skills")}
//                     className={inputClass + " h-24"}
//                   />
//                 </div>
//               </div>

//               {/* Employee Signature */}

//               <div className="mb-6">
//                 <label className="text-white block mb-3">
//                   Employee Signature <span className="text-red-500">*</span>{" "}
//                   (Take a Picture of your signature For Upload)
//                 </label>

//                 {/* Upload Button Hide যদি preview থাকে */}
//                 {!preview && (
//                   <div className="w-[350px] h-[50px] bg-gradient-to-l from-[#D4BFB2] to-[#8D6851] rounded-md mt-1 flex items-center justify-center">
//                     <label className="w-full h-full flex items-center justify-center text-white cursor-pointer">
//                       <span className="text-center">Upload Signature</span>
//                       <input
//                         type="file"
//                         accept="image/*"
//                         {...register("employeeSignature", {
//                           required: "Signature is required",
//                           onChange: handleFileChange,
//                         })}
//                         className="hidden"
//                       />
//                     </label>
//                   </div>
//                 )}

//                 {/* Image Preview with Cross */}
//                 {preview && (
//                   <div className="mt-3 relative inline-block">
//                     <img
//                       src={preview}
//                       alt="Signature Preview"
//                       className="w-[200px] h-[80px] object-contain border rounded-md"
//                     />
//                     <button
//                       type="button"
//                       onClick={handleRemoveImage}
//                       className="absolute -top-2 -right-2 bg-red-500 text-white p-1 rounded-full hover:bg-red-600"
//                     >
//                       <X size={14} />
//                     </button>
//                   </div>
//                 )}

//                 {errors.employeeSignature && (
//                   <p className="text-red-500 text-sm mt-2">
//                     {errors.employeeSignature.message}
//                   </p>
//                 )}
//               </div>
//               {/* <button>submit</button> */}
//             </form>
//             <div className="flex justify-center mt-6 gap-4">
//               <button
//                 type="button"
//                 onClick={prevStep}
//                 className="px-6 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-700"
//               >
//                 Previous
//               </button>

//               <button
//                 type="button"
//                 onClick={nextStepHandler}
//                 className="px-6 py-2 bg-gradient-to-r from-[#8D6851] to-[#D3BFB2] text-white rounded-md hover:opacity-90"
//               >
//                 Next
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//       {/* Future steps can be added here */}
//       {step === 2 && (
//         <div>
//           <WorkExperienceForm
//             prevStep={prevStep}
//             nextStep={nextStep}
//             register={register}
//             step={step}
//             errors={errors}
//             handleSubmit={handleSubmit}
//             trigger={trigger}
//           ></WorkExperienceForm>
//         </div>
//       )}
//       {step === 3 && (
//         <References
//           register={register}
//           errors={errors}
//           prevStep={prevStep}
//           nextStep={nextStep}
//           step={step}
//           handleSubmit={handleSubmit}
//           onSubmit={onSubmit}
//         />
//       )}
//       {step === 4 && (
//         <DrivingInfoForm
//           register={register}
//           errors={errors}
//           prevStep={prevStep}
//           nextStep={nextStep}
//           step={step}
//           handleSubmit={handleSubmit}
//           onSubmit={onSubmit}
//         />
//       )}
//       {step === 5 && (
//         <TermsText
//           register={register}
//           errors={errors}
//           prevStep={prevStep}
//           nextStep={nextStep}
//           step={step}
//           handleSubmit={handleSubmit}
//           onSubmit={onSubmit}
//         />
//       )}
//       {/* {step === 6 && (
//         <OnlyCbyracInc
//           register={register}
//           errors={errors}
//           prevStep={prevStep}
//           nextStep={nextStep}
//           step={step}
//           handleSubmit={handleSubmit}
//           onSubmit={onSubmit}
//         />
//       )} */}
//       {step === 6 && (
//         <CertificationText
//           register={register}
//           errors={errors}
//           prevStep={prevStep}
//           nextStep={nextStep}
//           step={step}
//           handleSubmit={handleSubmit}
//           onSubmit={onSubmit}
//         />
//       )}
//       {step === 7 && (
//         <InjuriesProcedures
//           register={register}
//           errors={errors}
//           prevStep={prevStep}
//           nextStep={nextStep}
//           step={step}
//           handleSubmit={handleSubmit}
//           onSubmit={onSubmit}
//         />
//       )}
//       {step === 8 && (
//         <AllPolicy
//           register={register}
//           errors={errors}
//           prevStep={prevStep}
//           nextStep={nextStep}
//           step={step}
//           handleSubmit={handleSubmit}
//           onSubmit={onSubmit}
//         />
//       )}
//       {step === 9 && (
//         <TempBankAccount
//           register={register}
//           errors={errors}
//           prevStep={prevStep}
//           nextStep={nextStep}
//           step={step}
//           handleSubmit={handleSubmit}
//           onSubmit={onSubmit}
//         />
//       )}
//       {step === 10 && (
//         <TempI9Form
//           register={register}
//           errors={errors}
//           prevStep={prevStep}
//           nextStep={nextStep}
//           step={step}
//           handleSubmit={handleSubmit}
//           onSubmit={onSubmit}
//         />
//       )}
//       {step === 11 && (
//         <TempW4Form
//           register={register}
//           errors={errors}
//           prevStep={prevStep}
//           nextStep={nextStep}
//           step={step}
//           handleSubmit={handleSubmit}
//           onSubmit={onSubmit}
//         />
//       )}
//       {step === 12 && (
//         <TempSelectCitizenShip
//           register={register}
//           errors={errors}
//           prevStep={prevStep}
//           nextStep={nextStep}
//           step={step}
//           handleSubmit={handleSubmit}
//           onSubmit={onSubmit}
//         />
//       )}
//     </div>
//   );
// };

// export default TempApplyJob;

// import React, { useState } from "react";
// import { useForm } from "react-hook-form";
// import ProgressBar from "../../progressBar/ProgressBar";
// import WorkExperienceForm from "./WorkExperienceForm";
// import References from "./References";
// import DrivingInfoForm from "./DrivingInfoForm";
// import TermsText from "./TermsText";
// import OnlyCbyracInc from "./OnlyCbyracInc";
// import CertificationText from "./CertificationText";
// import InjuriesProcedures from "./InjuriesProcedures";
// import AllPolicy from "./AllPolicy";
// import TempBankAccount from "./TempBankAccount";
// import TempI9Form from "./TempI9Form";
// import TempW4Form from "./TempW4Form";
// import TempSelectCitizenShip from "./TempSelectCitizenShip";
// import { X } from "lucide-react";

// const TempApplyJob = () => {
//   const [step, setStep] = useState(1);
//   const [preview, setPreview] = useState(null);
//   const [formData, setFormData] = useState({
//     generalInfo: {},
//     employeeInfo: {},
//     drivingLicenceInfo: {},
//     applicantCarification: {},
//     substanceAbusepolicy: {},
//     accidentProcedure: {},
//     submittalPolicy: {},
//     bankForm: {},
//     i9Form: {},
//     w4Form: {},
//     citizenShipForm: {},
//   });

//   const totalSteps = 13;

//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//     getValues,
//     trigger,
//     setValue,
//   } = useForm();

//   // Previous and next button logic
//   const nextStep = () => setStep((prev) => prev + 1);
//   const prevStep = () => setStep((prev) => prev - 1);

//   // Step-wise Next button validation with data collection
//   const nextStepHandler = async () => {
//     const result = await trigger();
//     if (result) {
//       const allData = getValues();

//       // Update form data based on current step
//       updateFormData(step, allData);

//       console.log(`Step ${step} Data:`, allData);
//       console.log(`Current Form Data:`, formData);

//       setStep((prev) => prev + 1);
//     } else {
//       console.log("Validation errors:", errors);
//     }
//   };

//   // Function to update form data based on current step
//   const updateFormData = (currentStep, data) => {
//     switch (currentStep) {
//       case 1:
//         setFormData((prev) => ({
//           ...prev,
//           generalInfo: {
//             firstName: data.firstName,
//             middleName: data.middleName,
//             lastName: data.lastName,
//             ssn: data.ssn,
//             dateOfBirth: data.dob,
//             applicationDate: data.applicationDate,
//             email: data.email,
//             telephoneNumber: data.telephone,
//             address: data.address,
//             emergencyContact: {
//               name: data.emergencyName,
//               relationship: data.emergencyRelation,
//               phone: data.emergencyTelephone,
//             },
//             desiredEmploymentType: data.employmentType,
//             desiredSalary: data.desiredSalary
//               ? Number(data.desiredSalary)
//               : 55000,
//             hourlyRate: data.hourlyRate ? Number(data.hourlyRate) : 25,
//             appliedPosition: "Backend Developer",
//             department: data.department || "Engineering",
//             overtime: data.overtime === "yes" ? "Yes" : "No",
//             startDate: data.startDate,
//             previouslyApplied: data.previousApplication === "yes",
//             previousApplicationDate:
//               data.previousApplication === "yes"
//                 ? data.applicationDetails
//                 : "2025-08-01",
//             previouslyEmployed: data.previousEmployment === "yes",
//             previousSeparationReason:
//               data.previousEmployment === "yes"
//                 ? data.employmentDetails
//                 : "I do not like that company",
//             education: {
//               schoolName:
//                 data.collegeName || data.highSchoolName || "Tech College",
//               major:
//                 data.collegeMajor ||
//                 data.highSchoolMajor ||
//                 "Computer Engineering",
//               graduationStatus:
//                 data.collegeGraduationStatus === "graduated"
//                   ? "Graduated"
//                   : "Not Graduated",
//               yearsCompleted: data.collegeYears ? Number(data.collegeYears) : 4,
//               honorsReceived: !!(data.collegeHonors || data.highSchoolHonors),
//             },
//             specialSkills: data.skills || "Node.js, Express, MongoDB",
//             signature: data.employeeSignature?.[0]
//               ? `/employeeSignature1/${data.employeeSignature[0].name}`
//               : "/employeeSignature1/linkedin-1760894535112.jpg",
//           },
//         }));
//         break;

//       case 2:
//         setFormData((prev) => ({
//           ...prev,
//           employeeInfo: {
//             ...prev.employeeInfo,
//             employee1: {
//               name: data.employer1_name || "Tech Solutions LLC",
//               address: data.employer1_address || "400 Silicon Ave, NY",
//               telephone: data.employer1_telephone || "555-111-2222",
//               dateEmployeeFrom: data.employer1_dateFrom
//                 ? new Date(data.employer1_dateFrom).toISOString()
//                 : "2022-01-01T00:00:00.000Z",
//               dateEmployeeTo: data.employer1_dateTo
//                 ? new Date(data.employer1_dateTo).toISOString()
//                 : "2024-06-01T00:00:00.000Z",
//               jobTitle: data.employer1_jobTitle || "Frontend Developer",
//               duties:
//                 data.employer1_duties ||
//                 "Built UI components using React and Tailwind",
//               supervisorName: data.employer1_supervisor || "Emily Smith",
//               MayWeContact: data.employer1_mayWeContact === "yes",
//               wagesStart: data.employer1_wagesStart || "20/hr",
//               final: data.employer1_final || "28/hr",
//               reasonForLeaving:
//                 data.employer1_reasonLeaving || "Contract ended",
//               noticePeriod: data.employer1_noticeGiven || "2 weeks",
//             },
//             employee2: {
//               name: data.employer2_name || "DigitalCore Inc",
//               address: data.employer2_address || "250 Cloud Park, LA",
//               telephone: data.employer2_telephone || "555-333-4444",
//               dateEmployeeFrom: data.employer2_dateFrom
//                 ? new Date(data.employer2_dateFrom).toISOString()
//                 : "2020-03-15T00:00:00.000Z",
//               dateEmployeeTo: data.employer2_dateTo
//                 ? new Date(data.employer2_dateTo).toISOString()
//                 : "2021-12-30T00:00:00.000Z",
//               jobTitle: data.employer2_jobTitle || "Web Developer",
//               duties:
//                 data.employer2_duties || "Developed REST APIs with Express.js",
//               supervisorName: data.employer2_supervisor || "Michael Green",
//               MayWeContact: data.employer2_mayWeContact === "yes",
//               wagesStart: data.employer2_wagesStart || "18/hr",
//               final: data.employer2_final || "25/hr",
//               reasonForLeaving:
//                 data.employer2_reasonLeaving || "Better opportunity",
//               noticePeriod: data.employer2_noticeGiven || "2 weeks",
//             },
//           },
//         }));
//         break;

//       case 3:
//         setFormData((prev) => ({
//           ...prev,
//           employeeInfo: {
//             ...prev.employeeInfo,
//             terminationInfo: {
//               terminationStatus: data.mayWeContact === "yes" ? "Yes" : "No",
//               terminationCount: data.mayWeContact === "yes" ? 1 : 0,
//             },
//             manualAgreementTermination: {
//               terminatedByManualAgreement:
//                 data.manualAgreement === "yes" ? "Yes" : "No",
//               terminationCount: data.manualAgreement === "yes" ? 1 : 0,
//             },
//             resignationInsteadOfTermination: {
//               resignedInsteadOfTerminated:
//                 data.resignationChoice === "yes" ? "Yes" : "No",
//               resignationCount: data.resignationChoice === "yes" ? 1 : 0,
//             },
//             terminationDetailsOfEmployee:
//               data.references
//                 ?.map((ref, index) => ({
//                   name: ref.name || `Reference ${index + 1}`,
//                   position: ref.position || "Position",
//                   company: ref.company || "Company",
//                   telephone: ref.telephone || "555-555-1212",
//                   occupation: ref.occupation || "Occupation",
//                   bestTimeToCall: ref.bestTimeToCall || "Morning",
//                   workRelation: ref.workRelationship || "Supervisor",
//                   NoOfYearKnown: ref.yearsKnown || "3",
//                 }))
//                 .filter((ref) => ref.name) || [],
//           },
//         }));
//         break;

//       case 4:
//         setFormData((prev) => ({
//           ...prev,
//           drivingLicenceInfo: {
//             validDriverLicense: {
//               hasDriverLicense: data.hasValidLicense === "yes" ? "Yes" : "No",
//               licenseNo: data.licenseNumber
//                 ? Number(data.licenseNumber)
//                 : 123456789,
//               state: data.licenseState || "NY",
//               expirationDate: data.licenseExpiration
//                 ? new Date(data.licenseExpiration).toISOString()
//                 : "2030-06-15T00:00:00.000Z",
//             },
//             licenseSuspensionInfo: {
//               licenseSuspendedOrRevoked:
//                 data.licenseSuspended === "yes" ? "Yes" : "No",
//             },
//             personalAutoInsurance: {
//               hasPersonalAutoInsurance:
//                 data.hasAutoInsurance === "yes" ? "Yes" : "No",
//             },
//             personalAutoInsuranceHistory: {
//               insuranceDeniedOrTerminated:
//                 data.insuranceDenied === "yes" ? "Yes" : "No",
//             },
//             movingTrafficViolation: [
//               {
//                 offense: data.violationOffense1 || "Speeding",
//                 date: data.violationDate1
//                   ? new Date(data.violationDate1).toISOString()
//                   : "2023-05-12T00:00:00.000Z",
//                 laction: data.violationLocation1 || "Brooklyn, NY",
//                 comment: data.violationComments1 || "Paid fine",
//               },
//             ].filter((violation) => violation.offense),
//           },
//         }));
//         break;

//       // Add cases for other steps as needed
//       default:
//         break;
//     }
//   };

//   // Final submission function
//   const onSubmitFinal = async (finalData) => {
//     try {
//       // Combine all form data with the final step data
//       const completeFormData = {
//         ...formData,
//         citizenShipForm: finalData.citizenShipForm || formData.citizenShipForm,
//       };

//       // Transform to match backend response format
//       const finalTransformedData = {
//         success: true,
//         message: "Form created successfully",
//         data: {
//           userId: "68f126d9fd57fc8b8fa5073f", // Replace with actual user ID
//           ...completeFormData,
//           _id: "68f51e47cc12000ed8467fe3",
//           createdAt: new Date().toISOString(),
//           updatedAt: new Date().toISOString(),
//           __v: 0,
//         },
//       };

//       console.log(
//         "🎯 Final Form Data for Backend:",
//         JSON.stringify(finalTransformedData, null, 2)
//       );

//       // Submit to your API
//       const response = await fetch("your-api-endpoint", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(finalTransformedData),
//       });

//       if (response.ok) {
//         alert("Form submitted successfully!");
//       } else {
//         alert("Submission failed. Please try again.");
//       }
//     } catch (error) {
//       console.error("Submission error:", error);
//       alert("An error occurred. Please try again.");
//     }
//   };

//   // Signature preview handler
//   const handleFileChange = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       setPreview(URL.createObjectURL(file));
//     }
//   };

//   // For removing the selected image
//   const handleRemoveImage = () => {
//     setPreview(null);
//   };

//   const inputWrapperClass =
//     "rounded-md bg-gradient-to-r from-[#8D6851] to-[#D3BFB2] mt-1 p-[1px]";
//   const inputClass =
//     "w-full bg-slate-900 text-white rounded-md py-2 px-3 focus:outline-none focus:ring-0";

//   return (
//     <div>
//       {step === 1 && (
//         <div className="text-white ">
//           <div className="max-w-7xl mx-auto">
//             {/* Header */}
//             <div className="flex space-x-96 mb-4">
//               <div className="text-sm">
//                 <div className="font-bold text-lg mb-2">CBYRAC, INC</div>
//                 <div>123 MAIN STREET SUITE 100</div>
//                 <div>ANYTOWN, STATE 12345</div>
//                 <div>PHONE: 555-555-5555</div>
//                 <div>EMAIL: info@cbyrac.com</div>
//               </div>
//               <div className="w-24 h-24 bg-white rounded justify-center">
//                 <img src="/cbyrac-logo.png" alt="" />
//               </div>
//             </div>

//             {/* Title */}
//             <div className="text-center mb-8">
//               <h1 className="text-2xl font-bold mb-2">
//                 Employment Application
//               </h1>
//               <p className="text-sm text-gray-300 mb-7">
//                 Please fill all forms, signatures are not a substitute for a
//                 completed application
//               </p>
//               {/* progressbar */}
//               <ProgressBar currentStep={step} totalSteps={totalSteps} />
//             </div>

//             {/* Your existing step 1 form content */}
//             <form
//               onSubmit={handleSubmit(nextStepHandler)}
//               className="rounded-2xl max-w-7xl mx-auto"
//             >
//               {/* Your existing form fields for step 1 */}

//               {/* General Information */}
//               <h2 className="text-xl font-bold text-white mb-4">
//                 General Information
//               </h2>
//               <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
//                 <div>
//                   <label className="text-white mb-1 block">
//                     First Name <span className="text-red-500">*</span>
//                   </label>
//                   <div className={inputWrapperClass}>
//                     <input
//                       type="text"
//                       placeholder="Enter First Name"
//                       {...register("firstName", {
//                         required: "First Name is required",
//                       })}
//                       className={inputClass}
//                     />
//                   </div>
//                   {errors.firstName && (
//                     <p className="text-red-500 text-sm">
//                       {errors.firstName.message}
//                     </p>
//                   )}
//                 </div>

//                 <div>
//                   <label className="text-white mb-1 block">Middle Name</label>
//                   <div className={inputWrapperClass}>
//                     <input
//                       type="text"
//                       placeholder="Enter Middle Name"
//                       {...register("middleName")}
//                       className={inputClass}
//                     />
//                   </div>
//                 </div>

//                 <div>
//                   <label className="text-white mb-1 block">
//                     Last Name <span className="text-red-500">*</span>
//                   </label>
//                   <div className={inputWrapperClass}>
//                     <input
//                       type="text"
//                       placeholder="Enter Last Name"
//                       {...register("lastName", {
//                         required: "Last Name is required",
//                       })}
//                       className={inputClass}
//                     />
//                   </div>
//                   {errors.lastName && (
//                     <p className="text-red-500 text-sm">
//                       {errors.lastName.message}
//                     </p>
//                   )}
//                 </div>
//               </div>

//               {/* SSN, DOB, Application Date */}
//               <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
//                 <div>
//                   <label className="text-white mb-1 block">
//                     {" "}
//                     Social Security Number (SSN){" "}
//                     <span className="text-red-500">*</span>
//                   </label>
//                   <div className={inputWrapperClass}>
//                     <input
//                       type="text"
//                       placeholder="Enter SSN"
//                       {...register("ssn", { required: "SSN is required" })}
//                       className={inputClass}
//                     />
//                   </div>
//                   {errors.ssn && (
//                     <p className="text-red-500 text-sm">{errors.ssn.message}</p>
//                   )}
//                 </div>

//                 <div>
//                   <label className="text-white mb-1 block">
//                     Date of Birth <span className="text-red-500">*</span>
//                   </label>
//                   <div className={inputWrapperClass}>
//                     <input
//                       type="date"
//                       {...register("dob", {
//                         required: "Date of Birth is required",
//                       })}
//                       className={inputClass}
//                     />
//                   </div>
//                   {errors.dob && (
//                     <p className="text-red-500 text-sm">{errors.dob.message}</p>
//                   )}
//                 </div>

//                 <div>
//                   <label className="text-white mb-1 block">
//                     Application Date <span className="text-red-500">*</span>
//                   </label>
//                   <div className={inputWrapperClass}>
//                     <input
//                       type="date"
//                       {...register("applicationDate", {
//                         required: "Application Date is required",
//                       })}
//                       className={inputClass}
//                     />
//                   </div>
//                   {errors.applicationDate && (
//                     <p className="text-red-500 text-sm">
//                       {errors.applicationDate.message}
//                     </p>
//                   )}
//                 </div>
//               </div>

//               {/* Additional General Info */}
//               <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
//                 <div>
//                   <label className="text-white mb-1 block">
//                     Telephone Number <span className="text-red-500">*</span>
//                   </label>
//                   <div className={inputWrapperClass}>
//                     <input
//                       type="text"
//                       placeholder="Enter Telephone Number"
//                       {...register("telephone")}
//                       className={inputClass}
//                     />
//                   </div>
//                 </div>

//                 <div>
//                   <label className="text-white mb-1 block">
//                     Email Address <span className="text-red-500">*</span>
//                   </label>
//                   <div className={inputWrapperClass}>
//                     <input
//                       type="email"
//                       placeholder="Enter Email Address"
//                       {...register("email")}
//                       className={inputClass}
//                     />
//                   </div>
//                 </div>
//               </div>

//               {/* Address */}
//               <div>
//                 <label className="text-white mb-1 block">
//                   Address <span className="text-red-500">*</span>
//                 </label>
//                 <div className={inputWrapperClass}>
//                   <input
//                     type="text"
//                     placeholder="Street/Apartment/City/State/ZIP"
//                     {...register("address")}
//                     className={inputClass}
//                   />
//                 </div>
//               </div>

//               {/* Emergency Contact */}

//               <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4 mt-4">
//                 <div>
//                   <label className="text-white mb-3 block">
//                     Emergency Contact Person Name{" "}
//                     <span className="text-red-500">*</span>
//                   </label>
//                   <div className={inputWrapperClass}>
//                     <input
//                       type="text"
//                       placeholder="Enter Name"
//                       {...register("emergencyName", { required: "Required" })}
//                       className={inputClass}
//                     />
//                   </div>
//                   {errors.emergencyName && (
//                     <p className="text-red-500 text-sm">
//                       {errors.emergencyName.message}
//                     </p>
//                   )}
//                 </div>

//                 <div>
//                   <label className="text-white mb-3  block">
//                     Relation With Emergency Contact Person{" "}
//                     <span className="text-red-500">*</span>
//                   </label>
//                   <div className={inputWrapperClass}>
//                     <input
//                       type="text"
//                       placeholder="Relation"
//                       {...register("emergencyRelation", {
//                         required: "Required",
//                       })}
//                       className={inputClass}
//                     />
//                   </div>
//                   {errors.emergencyRelation && (
//                     <p className="text-red-500 text-sm">
//                       {errors.emergencyRelation.message}
//                     </p>
//                   )}
//                 </div>

//                 <div>
//                   <label className="text-white mb-3  block">
//                     Emergency Contact Person’s Telephone{" "}
//                     <span className="text-red-500">*</span>
//                   </label>
//                   <div className={inputWrapperClass}>
//                     <input
//                       type="text"
//                       placeholder="Telephone"
//                       {...register("emergencyTelephone", {
//                         required: "Required",
//                       })}
//                       className={inputClass}
//                     />
//                   </div>
//                   {errors.emergencyTelephone && (
//                     <p className="text-red-500 text-sm">
//                       {errors.emergencyTelephone.message}
//                     </p>
//                   )}
//                 </div>
//               </div>

//               <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
//                 <div>
//                   <label className="text-white mb-1 block">
//                     Type of Employment Desired{" "}
//                     <span className="text-red-500">*</span>
//                   </label>
//                   <div className={inputWrapperClass}>
//                     <select
//                       {...register("employmentType")}
//                       className={inputClass}
//                     >
//                       <option value="">Select</option>
//                       <option value="intern">Intern</option>
//                       <option value="temp">Temp Employee</option>
//                     </select>
//                   </div>
//                 </div>

//                 <div>
//                   <label className="text-white mb-1 block">
//                     Desired Salary
//                   </label>
//                   <div className={inputWrapperClass}>
//                     <input
//                       type="text"
//                       placeholder="Enter Desired Salary"
//                       {...register("desiredSalary")}
//                       className={inputClass}
//                     />
//                   </div>
//                 </div>

//                 <div>
//                   <label className="text-white mb-1 block">
//                     Hourly Rate (Optional)
//                   </label>
//                   <div className={inputWrapperClass}>
//                     <input
//                       type="text"
//                       placeholder="Enter Hourly Rate"
//                       {...register("hourlyRate")}
//                       className={inputClass}
//                     />
//                   </div>
//                 </div>
//               </div>

//               {/* Position & Department */}
//               <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
//                 <div>
//                   <label className="text-white mb-1 block">
//                     Position Applied For
//                   </label>
//                   <div className={inputWrapperClass}>
//                     <input
//                       type="text"
//                       value="Temporary"
//                       readOnly
//                       className={inputClass}
//                     />
//                   </div>
//                 </div>

//                 <div>
//                   <label className="text-white mb-1 block">Department</label>
//                   <div className={inputWrapperClass}>
//                     <input
//                       type="text"
//                       placeholder="Enter Department"
//                       {...register("department")}
//                       className={inputClass}
//                     />
//                   </div>
//                 </div>

//                 <div>
//                   <label className="text-white mb-1 block">Overtime</label>
//                   <div className={inputWrapperClass}>
//                     <select {...register("overtime")} className={inputClass}>
//                       <option value="">Select</option>
//                       <option value="yes">Yes</option>
//                       <option value="no">No</option>
//                     </select>
//                   </div>
//                 </div>
//               </div>

//               {/* Start Date */}
//               <div>
//                 <label className="text-white mb-1 block">
//                   Date On Which You Can Start Work If Hired
//                 </label>
//                 <div className={inputWrapperClass}>
//                   <input
//                     type="date"
//                     {...register("startDate")}
//                     className={inputClass}
//                   />
//                 </div>
//               </div>

//               {/* Previous Application */}

//               <div className="mt-4">
//                 <label className="text-white mb-1 block">
//                   Have You Previously Applied For Employment With This Company?
//                 </label>
//                 <div className={inputWrapperClass}>
//                   <select
//                     {...register("previousApplication")}
//                     className={inputClass}
//                   >
//                     <option value="">Select</option>
//                     <option value="yes">Yes</option>
//                     <option value="no">No</option>
//                   </select>
//                 </div>
//               </div>

//               <div className="mt-4">
//                 <label className="text-white mb-1 block">
//                   If Yes, When and Where Did You Apply
//                 </label>
//                 <div className={inputWrapperClass}>
//                   <input
//                     type="text"
//                     placeholder="Enter details"
//                     {...register("applicationDetails")}
//                     className={inputClass}
//                   />
//                 </div>
//               </div>

//               <div className="mt-4">
//                 <label className="text-white mb-1 block">
//                   Have You Ever Been Employed By This Company?
//                 </label>
//                 <div className={inputWrapperClass}>
//                   <select
//                     {...register("previousEmployment")}
//                     className={inputClass}
//                   >
//                     <option value="">Select</option>
//                     <option value="yes">Yes</option>
//                     <option value="no">No</option>
//                   </select>
//                 </div>
//               </div>

//               <div className="mt-4">
//                 <label className="text-white mb-1 block">
//                   If Yes, Provide Dates, Location and Reason For Separation
//                 </label>
//                 <div className={inputWrapperClass}>
//                   <textarea
//                     placeholder="Provide details"
//                     {...register("employmentDetails")}
//                     className={inputClass + " h-24"}
//                   />
//                 </div>
//               </div>
//               {/* Educational Information */}
//               <h2 className="text-xl font-bold text-white my-4">
//                 Educational Information
//               </h2>

//               <div className="overflow-x-auto mb-6">
//                 <table className="min-w-full border border-[#8D6851] text-white rounded-lg">
//                   <thead>
//                     <tr className="bg-slate-900 text-left">
//                       <th className="border border-[#8D6851] px-4 py-2 w-34">
//                         Education
//                       </th>
//                       <th className="border border-[#8D6851] px-4 py-2">
//                         School Name
//                       </th>
//                       <th className="border border-[#8D6851] px-4 py-2">
//                         Study / Major
//                       </th>
//                       <th className="border border-[#8D6851] px-4 py-2">
//                         Graduation Status
//                       </th>
//                       <th className="border border-[#8D6851] px-4 py-2">
//                         # Of Years Completed
//                       </th>
//                       <th className="border border-[#8D6851] px-4 py-2">
//                         Honors Received
//                       </th>
//                     </tr>
//                   </thead>
//                   <tbody>
//                     {/* High School Row */}
//                     <tr>
//                       <td className="border w-51 border-[#8D6851] px-4 py-2">
//                         High School
//                       </td>
//                       <td className="border border-[#8D6851] px-4 py-2">
//                         <input
//                           type="text"
//                           placeholder="Enter School Name"
//                           {...register("highSchoolName")}
//                           className="w-full bg-slate-900 text-white px-2 py-1 rounded focus:outline-none"
//                         />
//                       </td>
//                       <td className="border border-[#8D6851] px-4 py-2">
//                         <input
//                           type="text"
//                           placeholder="Study / Major"
//                           {...register("highSchoolMajor")}
//                           className="w-full bg-slate-900 text-white px-2 py-1 rounded focus:outline-none"
//                         />
//                       </td>
//                       <td className="border border-[#8D6851] px-4 py-2">
//                         <select
//                           {...register("highSchoolGraduationStatus")}
//                           className="w-full bg-slate-900 text-white px-2 py-1 rounded focus:outline-none"
//                         >
//                           <option value="">Select</option>
//                           <option value="graduated">Graduated</option>
//                           <option value="notGraduated">Not Graduated</option>
//                         </select>
//                       </td>
//                       <td className="border border-[#8D6851] px-4 py-2">
//                         <input
//                           type="number"
//                           placeholder="Years"
//                           {...register("highSchoolYears")}
//                           className="w-full bg-slate-900 text-white px-2 py-1 rounded focus:outline-none"
//                         />
//                       </td>
//                       <td className="border border-[#8D6851] px-4 py-2">
//                         <input
//                           type="text"
//                           placeholder="Honors"
//                           {...register("highSchoolHonors")}
//                           className="w-full bg-slate-900 text-white px-2 py-1 rounded focus:outline-none"
//                         />
//                       </td>
//                     </tr>

//                     {/* College Row */}
//                     <tr>
//                       <td className="border border-[#8D6851] px-4 py-2">
//                         College
//                       </td>
//                       <td className="border border-[#8D6851] px-4 py-2">
//                         <input
//                           type="text"
//                           placeholder="Enter College Name"
//                           {...register("collegeName")}
//                           className="w-full bg-slate-900 text-white px-2 py-1 rounded focus:outline-none"
//                         />
//                       </td>
//                       <td className="border border-[#8D6851] px-4 py-2">
//                         <input
//                           type="text"
//                           placeholder="Study / Major"
//                           {...register("collegeMajor")}
//                           className="w-full bg-slate-900 text-white px-2 py-1 rounded focus:outline-none"
//                         />
//                       </td>
//                       <td className="border border-[#8D6851] px-4 py-2">
//                         <select
//                           {...register("collegeGraduationStatus")}
//                           className="w-full bg-slate-900 text-white px-2 py-1 rounded focus:outline-none"
//                         >
//                           <option value="">Select</option>
//                           <option value="graduated">Graduated</option>
//                           <option value="notGraduated">Not Graduated</option>
//                         </select>
//                       </td>
//                       <td className="border border-[#8D6851] px-4 py-2">
//                         <input
//                           type="number"
//                           placeholder="Years"
//                           {...register("collegeYears")}
//                           className="w-full bg-slate-900 text-white px-2 py-1 rounded focus:outline-none"
//                         />
//                       </td>
//                       <td className="border border-[#8D6851] px-4 py-2">
//                         <input
//                           type="text"
//                           placeholder="Honors"
//                           {...register("collegeHonors")}
//                           className="w-full bg-slate-900 text-white px-2 py-1 rounded focus:outline-none"
//                         />
//                       </td>
//                     </tr>

//                     {/* Graduate / Professional Row */}
//                     <tr>
//                       <td className="border border-[#8D6851] px-4 py-2">
//                         Graduate / Professional
//                       </td>
//                       <td className="border border-[#8D6851] px-4 py-2">
//                         <input
//                           type="text"
//                           placeholder="Enter School Name"
//                           {...register("graduateSchoolName")}
//                           className="w-full bg-slate-900 text-white px-2 py-1 rounded focus:outline-none"
//                         />
//                       </td>
//                       <td className="border border-[#8D6851] px-4 py-2">
//                         <input
//                           type="text"
//                           placeholder="Study / Major"
//                           {...register("graduateMajor")}
//                           className="w-full bg-slate-900 text-white px-2 py-1 rounded focus:outline-none"
//                         />
//                       </td>
//                       <td className="border border-[#8D6851] px-4 py-2">
//                         <select
//                           {...register("graduateGraduationStatus")}
//                           className="w-full bg-slate-900 text-white px-2 py-1 rounded focus:outline-none"
//                         >
//                           <option value="">Select</option>
//                           <option value="graduated">Graduated</option>
//                           <option value="notGraduated">Not Graduated</option>
//                         </select>
//                       </td>
//                       <td className="border border-[#8D6851] px-4 py-2">
//                         <input
//                           type="number"
//                           placeholder="Years"
//                           {...register("graduateYears")}
//                           className="w-full bg-slate-900 text-white px-2 py-1 rounded focus:outline-none"
//                         />
//                       </td>
//                       <td className="border border-[#8D6851] px-4 py-2">
//                         <input
//                           type="text"
//                           placeholder="Honors"
//                           {...register("graduateHonors")}
//                           className="w-full bg-slate-900 text-white px-2 py-1 rounded focus:outline-none"
//                         />
//                       </td>
//                     </tr>

//                     {/* Trade or Correspondence Row */}
//                     <tr>
//                       <td className="border border-[#8D6851] px-4 py-2">
//                         Trade / Correspondence
//                       </td>
//                       <td className="border border-[#8D6851] px-4 py-2">
//                         <input
//                           type="text"
//                           placeholder="Enter School Name"
//                           {...register("tradeSchoolName")}
//                           className="w-full bg-slate-900 text-white px-2 py-1 rounded focus:outline-none"
//                         />
//                       </td>
//                       <td className="border border-[#8D6851] px-4 py-2">
//                         <input
//                           type="text"
//                           placeholder="Study / Major"
//                           {...register("tradeMajor")}
//                           className="w-full bg-slate-900 text-white px-2 py-1 rounded focus:outline-none"
//                         />
//                       </td>
//                       <td className="border border-[#8D6851] px-4 py-2">
//                         <select
//                           {...register("tradeGraduationStatus")}
//                           className="w-full bg-slate-900 text-white px-2 py-1 rounded focus:outline-none"
//                         >
//                           <option value="">Select</option>
//                           <option value="graduated">Graduated</option>
//                           <option value="notGraduated">Not Graduated</option>
//                         </select>
//                       </td>
//                       <td className="border border-[#8D6851] px-4 py-2">
//                         <input
//                           type="number"
//                           placeholder="Years"
//                           {...register("tradeYears")}
//                           className="w-full bg-slate-900 text-white px-2 py-1 rounded focus:outline-none"
//                         />
//                       </td>
//                       <td className="border border-[#8D6851] px-4 py-2">
//                         <input
//                           type="text"
//                           placeholder="Honors"
//                           {...register("tradeHonors")}
//                           className="w-full bg-slate-900 text-white px-2 py-1 rounded focus:outline-none"
//                         />
//                       </td>
//                     </tr>
//                   </tbody>
//                 </table>
//               </div>

//               {/* Special Skills or Qualifications */}
//               <div className="mb-6">
//                 <label className="text-xl font-bold text-white">
//                   Special Skills or Qualifications
//                 </label>
//                 <div className={inputWrapperClass}>
//                   <textarea
//                     placeholder="Describe your special skills or qualifications"
//                     {...register("skills")}
//                     className={inputClass + " h-24"}
//                   />
//                 </div>
//               </div>

//               {/* Employee Signature */}

//               <div className="mb-6">
//                 <label className="text-white block mb-3">
//                   Employee Signature <span className="text-red-500">*</span>{" "}
//                   (Take a Picture of your signature For Upload)
//                 </label>

//                 {/* Upload Button Hide যদি preview থাকে */}
//                 {!preview && (
//                   <div className="w-[350px] h-[50px] bg-gradient-to-l from-[#D4BFB2] to-[#8D6851] rounded-md mt-1 flex items-center justify-center">
//                     <label className="w-full h-full flex items-center justify-center text-white cursor-pointer">
//                       <span className="text-center">Upload Signature</span>
//                       <input
//                         type="file"
//                         accept="image/*"
//                         {...register("employeeSignature", {
//                           required: "Signature is required",
//                           onChange: handleFileChange,
//                         })}
//                         className="hidden"
//                       />
//                     </label>
//                   </div>
//                 )}

//                 {/* Image Preview with Cross */}
//                 {preview && (
//                   <div className="mt-3 relative inline-block">
//                     <img
//                       src={preview}
//                       alt="Signature Preview"
//                       className="w-[200px] h-[80px] object-contain border rounded-md"
//                     />
//                     <button
//                       type="button"
//                       onClick={handleRemoveImage}
//                       className="absolute -top-2 -right-2 bg-red-500 text-white p-1 rounded-full hover:bg-red-600"
//                     >
//                       <X size={14} />
//                     </button>
//                   </div>
//                 )}

//                 {errors.employeeSignature && (
//                   <p className="text-red-500 text-sm mt-2">
//                     {errors.employeeSignature.message}
//                   </p>
//                 )}
//               </div>

//               <div className="flex justify-center mt-6 gap-4">
//                 <button
//                   type="button"
//                   onClick={prevStep}
//                   className="px-6 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-700"
//                 >
//                   Previous
//                 </button>

//                 <button
//                   type="submit"
//                   className="px-6 py-2 bg-gradient-to-r from-[#8D6851] to-[#D3BFB2] text-white rounded-md hover:opacity-90"
//                 >
//                   Next
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//       )}

//       {/* Other steps */}
//       {step === 2 && (
//         <WorkExperienceForm
//           prevStep={prevStep}
//           nextStep={nextStepHandler}
//           register={register}
//           step={step}
//           errors={errors}
//           handleSubmit={handleSubmit}
//           trigger={trigger}
//         />
//       )}

//       {step === 3 && (
//         <References
//           register={register}
//           errors={errors}
//           prevStep={prevStep}
//           nextStep={nextStepHandler}
//           step={step}
//           handleSubmit={handleSubmit}
//         />
//       )}

//       {step === 4 && (
//         <DrivingInfoForm
//           register={register}
//           errors={errors}
//           prevStep={prevStep}
//           nextStep={nextStepHandler}
//           step={step}
//           handleSubmit={handleSubmit}
//         />
//       )}

//       {step === 5 && (
//         <TermsText
//           register={register}
//           errors={errors}
//           prevStep={prevStep}
//           nextStep={nextStepHandler}
//           step={step}
//           handleSubmit={handleSubmit}
//         />
//       )}

//       {step === 6 && (
//         <OnlyCbyracInc
//           register={register}
//           errors={errors}
//           prevStep={prevStep}
//           nextStep={nextStepHandler}
//           step={step}
//           handleSubmit={handleSubmit}
//         />
//       )}

//       {step === 7 && (
//         <CertificationText
//           register={register}
//           errors={errors}
//           prevStep={prevStep}
//           nextStep={nextStepHandler}
//           step={step}
//           handleSubmit={handleSubmit}
//         />
//       )}

//       {step === 8 && (
//         <InjuriesProcedures
//           register={register}
//           errors={errors}
//           prevStep={prevStep}
//           nextStep={nextStepHandler}
//           step={step}
//           handleSubmit={handleSubmit}
//         />
//       )}

//       {step === 9 && (
//         <AllPolicy
//           register={register}
//           errors={errors}
//           prevStep={prevStep}
//           nextStep={nextStepHandler}
//           step={step}
//           handleSubmit={handleSubmit}
//         />
//       )}

//       {step === 10 && (
//         <TempBankAccount
//           register={register}
//           errors={errors}
//           prevStep={prevStep}
//           nextStep={nextStepHandler}
//           step={step}
//           handleSubmit={handleSubmit}
//           setFormData={setFormData}
//           getValues={getValues}
//           trigger={trigger}
//           setValue={setValue}
//         />
//       )}

//       {step === 11 && (
//         <TempI9Form
//           register={register}
//           errors={errors}
//           prevStep={prevStep}
//           nextStep={nextStepHandler}
//           step={step}
//           handleSubmit={handleSubmit}
//           setFormData={setFormData}
//           getValues={getValues}
//           trigger={trigger}
//           setValue={setValue}
//         />
//       )}

//       {step === 12 && (
//         <TempW4Form
//           register={register}
//           errors={errors}
//           prevStep={prevStep}
//           nextStep={nextStepHandler}
//           step={step}
//           handleSubmit={handleSubmit}
//           setFormData={setFormData}
//           getValues={getValues}
//           trigger={trigger}
//           setValue={setValue}
//         />
//       )}

//       {step === 13 && (
//         <TempSelectCitizenShip
//           register={register}
//           errors={errors}
//           prevStep={prevStep}
//           step={step}
//           handleSubmit={handleSubmit}
//           onSubmitFinal={onSubmitFinal}
//           formData={formData}
//           setFormData={setFormData}
//           getValues={getValues}
//           trigger={trigger}
//           setValue={setValue}
//         />
//       )}
//     </div>
//   );
// };

// export default TempApplyJob;

// 11111111111111111111111111111111111111111111
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import ProgressBar from "../../progressBar/ProgressBar";
import WorkExperienceForm from "./WorkExperienceForm";
import References from "./References";
import DrivingInfoForm from "./DrivingInfoForm";
import TermsText from "./TermsText";
import OnlyCbyracInc from "./OnlyCbyracInc";
import CertificationText from "./CertificationText";
import InjuriesProcedures from "./InjuriesProcedures";
import AllPolicy from "./AllPolicy";
import TempBankAccount from "./TempBankAccount";
import TempI9Form from "./TempI9Form";
import TempW4Form from "./TempW4Form";
import TempSelectCitizenShip from "./TempSelectCitizenShip";
import { X } from "lucide-react";

const TempApplyJob = () => {
  const [step, setStep] = useState(1);
  const [preview, setPreview] = useState(null);
  const [formData, setFormData] = useState({
    generalInfo: {},
    employeeInfo: {},
    drivingLicenceInfo: {},
    applicantCarification: {},
    substanceAbusepolicy: {},
    accidentProcedure: {},
    submittalPolicy: {},
    bankForm: {},
    i9Form: {},
    w4Form: {},
    citizenShipForm: {},
  });
  const totalSteps = 13;

  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
    trigger,
    setValue,
  } = useForm();

  // const nextStepHandler = async () => {
  //   const result = await trigger();
  //   if (result) {
  //     const allData = getValues();
  //     console.log("Current Step Data:", allData);
  //     // Update form data based on current step - FOLLOWING APPLYJOBS FORMAT
  //     if (step === 1) {
  //       setFormData((prev) => ({
  //         ...prev,
  //         generalInfo: {
  //           firstName: allData.firstName,
  //           middleName: allData.middleName,
  //           lastName: allData.lastName,
  //           ssn: allData.ssn,
  //           dateOfBirth: allData.dob,
  //           applicationDate: allData.applicationDate,
  //           email: allData.email,
  //           telephoneNumber: allData.telephone,
  //           address: allData.address,
  //           emergencyContact: {
  //             name: allData.emergencyName,
  //             relationship: allData.emergencyRelation,
  //             phone: allData.emergencyTelephone,
  //           },
  //           desiredEmploymentType: allData.employmentType,
  //           desiredSalary: allData.desiredSalary
  //             ? Number(allData.desiredSalary)
  //             : undefined,
  //           hourlyRate: allData.hourlyRate
  //             ? Number(allData.hourlyRate)
  //             : undefined,
  //           appliedPosition: allData.appliedPosition,
  //           department: allData.department,
  //           overtime: allData.overtime,
  //           willingToWorkOvertime: allData.willingToWorkOvertime,
  //           startDate: allData.startDate,
  //           previouslyApplied: allData.previousApplication === "yes",
  //           previousApplicationDate: allData.applicationDetails,
  //           previouslyEmployed: allData.previousEmployment === "yes",
  //           previousSeparationReason: allData.employmentDetails,
  //           education: {
  //             schoolName: allData.highSchoolName,
  //             major: allData.highSchoolMajor,
  //             graduationStatus: allData.highSchoolGraduationStatus,
  //             yearsCompleted: allData.highSchoolYears
  //               ? Number(allData.highSchoolYears)
  //               : undefined,
  //             honorsReceived: allData.highSchoolHonors ? true : false,
  //           },
  //           specialSkills: allData.skills,
  //           signature: allData.employeeSignature?.[0]
  //             ? `/employeeSignature1/${allData.employeeSignature[0].name}`
  //             : undefined,
  //         },
  //       }));
  //     }

  //     setStep((prev) => prev + 1);
  //   } else {
  //     console.log("Validation errors:", errors);
  //   }
  // };

  const nextStepHandler = async () => {
    const result = await trigger();
    if (result) {
      const allData = getValues();
      console.log(allData);
      // Update form data based on current step
      if (step === 1) {
        setFormData((prev) => ({
          ...prev,
          generalInfo: {
            firstName: allData.firstName,
            middleName: allData.middleName,
            lastName: allData.lastName,
            ssn: allData.ssn,
            dateOfBirth: allData.dob,
            applicationDate: allData.applicationDate,
            email: allData.email,
            telephoneNumber: allData.telephone,
            address: allData.address,
            emergencyContact: {
              name: allData.emergencyName,
              relationship: allData.emergencyRelation,
              phone: allData.emergencyTelephone,
            },
            desiredEmploymentType: allData.employmentType,
            desiredSalary: allData.desiredSalary
              ? Number(allData.desiredSalary)
              : undefined,
            hourlyRate: allData.hourlyRate
              ? Number(allData.hourlyRate)
              : undefined,
            appliedPosition: "Intern",
            department: "Fit2Lead",
            overtime: "No",
            startDate: allData.startDate,
            previouslyApplied: allData.previousApplication === "yes",
            previousApplicationDate: allData.applicationDetails,
            previouslyEmployed: allData.previousEmployment === "yes",
            previousSeparationReason: allData.employmentDetails,
            education: [
              {
                schoolName: allData.highSchoolName,
                major: allData.highSchoolMajor,
                graduationStatus: allData.highSchoolGraduationStatus,
                yearsCompleted: allData.highSchoolYears
                  ? Number(allData.highSchoolYears)
                  : undefined,
                honorsReceived: allData.highSchoolHonors ? true : false,
              },
            ],
            specialSkills: allData.skills,
            signature: allData.employeeSignature?.[0]
              ? `/employeeSignature1/${allData.employeeSignature[0].name}`
              : undefined,
          },
        }));
      }

      setStep((prev) => prev + 1);
    } else {
      console.log("Validation errors:", errors);
    }
  };

  const prevStep = () => setStep((prev) => prev - 1);
  console.log(
    "🚀 ~ file: TempApplyJob.jsx:263 ~ onSubmitFinal ~ formData:",
    formData.generalInfo
  );
  const onSubmitFinal = async (data) => {
    try {
      // Combine all form data with the final citizenship form data
      const finalFormData = {
        ...formData,
        citizenShipForm: data.citizenShipForm || formData.citizenShipForm,
      };

      console.log("🎯 Final Form Data:", finalFormData);

      // Submit to your API
      const response = await fetch(
        "http://10.10.7.102:8000/api/v1/tempForm/temp",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(finalFormData),
        }
      );
      console.log(response);

      if (response.ok) {
        alert("Form submitted successfully!");
      } else {
        alert("Submission failed. Please try again.");
      }
    } catch (error) {
      console.error("Submission error:", error);
      alert("An error occurred. Please try again.");
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setPreview(URL.createObjectURL(file));
    }
  };

  const handleRemoveImage = () => {
    setPreview(null);
    setValue("employeeSignature", null);
  };

  const inputWrapperClass =
    "rounded-md bg-gradient-to-r from-[#8D6851] to-[#D3BFB2] mt-1 p-[1px]";
  const inputClass =
    "w-full bg-slate-900 text-white rounded-md py-2 px-3 focus:outline-none focus:ring-0";

  return (
    <div>
      {step === 1 && (
        <div className="text-white">
          <div className="max-w-7xl mx-auto">
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

            <div className="text-center mb-8">
              <h1 className="text-2xl font-bold mb-2">
                Temporary Employment Application
              </h1>
              <p className="text-sm text-gray-300 mb-7">
                Please fill all forms, signatures are not a substitute for a
                completed application
              </p>
              <ProgressBar currentStep={step} totalSteps={totalSteps} />
            </div>

            <form
              onSubmit={handleSubmit(nextStepHandler)}
              className="rounded-2xl max-w-7xl mx-auto"
            >
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

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="text-white mb-3 block">
                    Telephone Number <span className="text-red-500">*</span>
                  </label>
                  <div className={inputWrapperClass}>
                    <input
                      type="text"
                      placeholder="Enter Telephone Number"
                      {...register("telephone", {
                        required: "Telephone Number is required",
                      })}
                      className={inputClass}
                    />
                  </div>
                  {errors.telephone && (
                    <p className="text-red-500 text-sm">
                      {errors.telephone.message}
                    </p>
                  )}
                </div>

                <div>
                  <label className="text-white mb-3 block">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <div className={inputWrapperClass}>
                    <input
                      type="email"
                      placeholder="Enter Email Address"
                      {...register("email", {
                        required: "Email Address is required",
                      })}
                      className={inputClass}
                    />
                  </div>
                  {errors.email && (
                    <p className="text-red-500 text-sm">
                      {errors.email.message}
                    </p>
                  )}
                </div>
              </div>

              <div>
                <label className="text-white mb-3 block">
                  Address <span className="text-red-500">*</span>
                </label>
                <div className={inputWrapperClass}>
                  <input
                    type="text"
                    placeholder="Street/Apartment/City/State/ZIP"
                    {...register("address", {
                      required: "Address is required",
                    })}
                    className={inputClass}
                  />
                </div>
                {errors.address && (
                  <p className="text-red-500 text-sm">
                    {errors.address.message}
                  </p>
                )}
              </div>

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
                  <label className="text-white mb-3 block">
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
                  <label className="text-white mb-3 block">
                    Emergency Contact Person's Telephone{" "}
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
                      {...register("employmentType", { required: "Required" })}
                      className={inputClass}
                    >
                      <option value="">Select</option>
                      <option value="Temp Employee">Temp Employee</option>
                      <option value="Intern">Intern</option>
                    </select>
                  </div>
                  {errors.employmentType && (
                    <p className="text-red-500 text-sm">
                      {errors.employmentType.message}
                    </p>
                  )}
                </div>

                <div>
                  <label className="text-white mb-3 block">
                    Desired Salary
                  </label>
                  <div className={inputWrapperClass}>
                    <input
                      type="number"
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
                      type="number"
                      placeholder="Enter Hourly Rate"
                      {...register("hourlyRate")}
                      className={inputClass}
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
                <div>
                  <label className="text-white mb-3 block">
                    Position Applied For <span className="text-red-500">*</span>
                  </label>
                  <div className={inputWrapperClass}>
                    <input
                      type="text"
                      placeholder="Enter position"
                      {...register("appliedPosition", {
                        required: "Position is required",
                      })}
                      className={inputClass}
                    />
                  </div>
                  {errors.appliedPosition && (
                    <p className="text-red-500 text-sm">
                      {errors.appliedPosition.message}
                    </p>
                  )}
                </div>

                <div>
                  <label className="text-white mb-3 block">
                    Department <span className="text-red-500">*</span>
                  </label>
                  <div className={inputWrapperClass}>
                    <input
                      type="text"
                      placeholder="Enter department"
                      {...register("department", {
                        required: "Department is required",
                      })}
                      className={inputClass}
                    />
                  </div>
                  {errors.department && (
                    <p className="text-red-500 text-sm">
                      {errors.department.message}
                    </p>
                  )}
                </div>

                <div>
                  <label className="text-white mb-3 block">
                    Overtime <span className="text-red-500">*</span>
                  </label>
                  <div className={inputWrapperClass}>
                    <select
                      {...register("overtime", { required: "Required" })}
                      className={inputClass}
                    >
                      <option value="">Select</option>
                      <option value="Yes">Yes</option>
                      <option value="No">No</option>
                    </select>
                  </div>
                  {errors.overtime && (
                    <p className="text-red-500 text-sm">
                      {errors.overtime.message}
                    </p>
                  )}
                </div>
              </div>

              <div className="mb-4">
                <label className="text-white mb-3 block">
                  Are You Willing To Work Overtime{" "}
                  <span className="text-red-500">*</span>
                </label>
                <div className={inputWrapperClass}>
                  <select
                    {...register("willingToWorkOvertime", {
                      required: "This field is required",
                    })}
                    className={inputClass}
                  >
                    <option value="">Select</option>
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                  </select>
                </div>
                {errors.willingToWorkOvertime && (
                  <p className="text-red-500 text-sm">
                    {errors.willingToWorkOvertime.message}
                  </p>
                )}
              </div>

              <div className="mb-4">
                <label className="text-white mb-3 block">
                  Date On Which You Can Start Work If Hired{" "}
                  <span className="text-red-500">*</span>
                </label>
                <div className={inputWrapperClass}>
                  <input
                    type="date"
                    {...register("startDate", {
                      required: "Start date is required",
                    })}
                    className={`${inputClass} date-input`}
                  />
                </div>
                {errors.startDate && (
                  <p className="text-red-500 text-sm">
                    {errors.startDate.message}
                  </p>
                )}
              </div>

              <div className="mb-4">
                <label className="text-white mb-3 block">
                  Have You Previously Applied For Employment With This Company?{" "}
                  <span className="text-red-500">*</span>
                </label>
                <div className={inputWrapperClass}>
                  <select
                    {...register("previousApplication", {
                      required: "This field is required",
                    })}
                    className={inputClass}
                  >
                    <option value="">Select</option>
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                  </select>
                </div>
                {errors.previousApplication && (
                  <p className="text-red-500 text-sm">
                    {errors.previousApplication.message}
                  </p>
                )}
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
                  Have You Ever Been Employed By This Company?{" "}
                  <span className="text-red-500">*</span>
                </label>
                <div className={inputWrapperClass}>
                  <select
                    {...register("previousEmployment", {
                      required: "This field is required",
                    })}
                    className={inputClass}
                  >
                    <option value="">Select</option>
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                  </select>
                </div>
                {errors.previousEmployment && (
                  <p className="text-red-500 text-sm">
                    {errors.previousEmployment.message}
                  </p>
                )}
              </div>

              <div>
                <label className="text-white mb-3 block">
                  If Yes, Provide Dates Of Employment, Location and Reason For
                  Separation From Employment
                </label>
                <div className={inputWrapperClass}>
                  <textarea
                    placeholder="Provide details"
                    {...register("employmentDetails")}
                    className={inputClass + " h-24"}
                  />
                </div>
              </div>

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
                          <option value="Graduated">Graduated</option>
                          <option value="Not Graduated">Not Graduated</option>
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

                    {/* College Row */}
                    <tr>
                      <td className="border border-[#8D6851] px-4 py-2">
                        College
                      </td>
                      <td className="border border-[#8D6851] px-4 py-2">
                        <input
                          type="text"
                          placeholder="Enter College Name"
                          {...register("collegeName")}
                          className="w-full bg-slate-900 text-white px-2 py-1 rounded focus:outline-none"
                        />
                      </td>
                      <td className="border border-[#8D6851] px-4 py-2">
                        <input
                          type="text"
                          placeholder="Study / Major"
                          {...register("collegeMajor")}
                          className="w-full bg-slate-900 text-white px-2 py-1 rounded focus:outline-none"
                        />
                      </td>
                      <td className="border border-[#8D6851] px-4 py-2">
                        <select
                          {...register("collegeGraduationStatus")}
                          className="w-full bg-slate-900 text-white px-2 py-1 rounded focus:outline-none"
                        >
                          <option value="">Select</option>
                          <option value="Graduated">Graduated</option>
                          <option value="Not Graduated">Not Graduated</option>
                        </select>
                      </td>
                      <td className="border border-[#8D6851] px-4 py-2">
                        <input
                          type="number"
                          placeholder="Years"
                          {...register("collegeYears")}
                          className="w-full bg-slate-900 text-white px-2 py-1 rounded focus:outline-none"
                        />
                      </td>
                      <td className="border border-[#8D6851] px-4 py-2">
                        <input
                          type="text"
                          placeholder="Honors"
                          {...register("collegeHonors")}
                          className="w-full bg-slate-900 text-white px-2 py-1 rounded focus:outline-none"
                        />
                      </td>
                    </tr>

                    {/* Graduate / Professional Row */}
                    <tr>
                      <td className="border border-[#8D6851] px-4 py-2">
                        Graduate / Professional
                      </td>
                      <td className="border border-[#8D6851] px-4 py-2">
                        <input
                          type="text"
                          placeholder="Enter School Name"
                          {...register("graduateSchoolName")}
                          className="w-full bg-slate-900 text-white px-2 py-1 rounded focus:outline-none"
                        />
                      </td>
                      <td className="border border-[#8D6851] px-4 py-2">
                        <input
                          type="text"
                          placeholder="Study / Major"
                          {...register("graduateMajor")}
                          className="w-full bg-slate-900 text-white px-2 py-1 rounded focus:outline-none"
                        />
                      </td>
                      <td className="border border-[#8D6851] px-4 py-2">
                        <select
                          {...register("graduateGraduationStatus")}
                          className="w-full bg-slate-900 text-white px-2 py-1 rounded focus:outline-none"
                        >
                          <option value="">Select</option>
                          <option value="Graduated">Graduated</option>
                          <option value="Not Graduated">Not Graduated</option>
                        </select>
                      </td>
                      <td className="border border-[#8D6851] px-4 py-2">
                        <input
                          type="number"
                          placeholder="Years"
                          {...register("graduateYears")}
                          className="w-full bg-slate-900 text-white px-2 py-1 rounded focus:outline-none"
                        />
                      </td>
                      <td className="border border-[#8D6851] px-4 py-2">
                        <input
                          type="text"
                          placeholder="Honors"
                          {...register("graduateHonors")}
                          className="w-full bg-slate-900 text-white px-2 py-1 rounded focus:outline-none"
                        />
                      </td>
                    </tr>

                    {/* Trade or Correspondence Row */}
                    <tr>
                      <td className="border border-[#8D6851] px-4 py-2">
                        Trade / Correspondence
                      </td>
                      <td className="border border-[#8D6851] px-4 py-2">
                        <input
                          type="text"
                          placeholder="Enter School Name"
                          {...register("tradeSchoolName")}
                          className="w-full bg-slate-900 text-white px-2 py-1 rounded focus:outline-none"
                        />
                      </td>
                      <td className="border border-[#8D6851] px-4 py-2">
                        <input
                          type="text"
                          placeholder="Study / Major"
                          {...register("tradeMajor")}
                          className="w-full bg-slate-900 text-white px-2 py-1 rounded focus:outline-none"
                        />
                      </td>
                      <td className="border border-[#8D6851] px-4 py-2">
                        <select
                          {...register("tradeGraduationStatus")}
                          className="w-full bg-slate-900 text-white px-2 py-1 rounded focus:outline-none"
                        >
                          <option value="">Select</option>
                          <option value="Graduated">Graduated</option>
                          <option value="Not Graduated">Not Graduated</option>
                        </select>
                      </td>
                      <td className="border border-[#8D6851] px-4 py-2">
                        <input
                          type="number"
                          placeholder="Years"
                          {...register("tradeYears")}
                          className="w-full bg-slate-900 text-white px-2 py-1 rounded focus:outline-none"
                        />
                      </td>
                      <td className="border border-[#8D6851] px-4 py-2">
                        <input
                          type="text"
                          placeholder="Honors"
                          {...register("tradeHonors")}
                          className="w-full bg-slate-900 text-white px-2 py-1 rounded focus:outline-none"
                        />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

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

              <div className="mb-6">
                <label className="text-white block mb-3">
                  Employee Signature <span className="text-red-500">*</span>{" "}
                  (Take a Picture of your signature For Upload)
                </label>

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

              <div className="flex justify-center mt-6 gap-4">
                <button
                  type="button"
                  onClick={prevStep}
                  className="px-6 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-700"
                  disabled={step === 1}
                >
                  Previous
                </button>

                <button
                  type="submit"
                  className="px-6 py-2 bg-gradient-to-r from-[#8D6851] to-[#D3BFB2] text-white rounded-md hover:opacity-90"
                >
                  Next
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Other steps */}
      {/* {step === 2 && (
        <WorkExperienceForm
          prevStep={prevStep}
          nextStep={nextStepHandler}
          register={register}
          step={step}
          errors={errors}
          setFormData={setFormData}
          getValues={getValues}
          trigger={trigger}
          setValue={setValue}
        />
      )}

      {step === 3 && (
        <References
          register={register}
          errors={errors}
          prevStep={prevStep}
          nextStep={nextStepHandler}
          step={step}
          setFormData={setFormData}
          getValues={getValues}
          trigger={trigger}
          setValue={setValue}
        />
      )}

      {step === 4 && (
        <DrivingInfoForm
          register={register}
          errors={errors}
          prevStep={prevStep}
          nextStep={nextStepHandler}
          step={step}
          setFormData={setFormData}
          getValues={getValues}
          trigger={trigger}
          setValue={setValue}
        />
      )}

      {step === 5 && (
        <TermsText
          register={register}
          errors={errors}
          prevStep={prevStep}
          nextStep={nextStepHandler}
          step={step}
          setFormData={setFormData}
          getValues={getValues}
          trigger={trigger}
          setValue={setValue}
        />
      )}

      {step === 6 && (
        <OnlyCbyracInc
          register={register}
          errors={errors}
          prevStep={prevStep}
          nextStep={nextStepHandler}
          step={step}
          setFormData={setFormData}
          getValues={getValues}
          trigger={trigger}
          setValue={setValue}
        />
      )}

      {step === 7 && (
        <CertificationText
          register={register}
          errors={errors}
          prevStep={prevStep}
          nextStep={nextStepHandler}
          step={step}
          setFormData={setFormData}
          getValues={getValues}
          trigger={trigger}
          setValue={setValue}
        />
      )}

      {step === 8 && (
        <InjuriesProcedures
          register={register}
          errors={errors}
          prevStep={prevStep}
          nextStep={nextStepHandler}
          step={step}
          setFormData={setFormData}
          getValues={getValues}
          trigger={trigger}
          setValue={setValue}
        />
      )}

      {step === 9 && (
        <AllPolicy
          register={register}
          errors={errors}
          prevStep={prevStep}
          nextStep={nextStepHandler}
          step={step}
          setFormData={setFormData}
          getValues={getValues}
          trigger={trigger}
          setValue={setValue}
        />
      )} */}

      {step === 2 && (
        <TempBankAccount
          register={register}
          errors={errors}
          prevStep={prevStep}
          nextStep={nextStepHandler}
          step={step}
          setFormData={setFormData}
          getValues={getValues}
          trigger={trigger}
          setValue={setValue}
        />
      )}

      {step === 3 && (
        <TempI9Form
          register={register}
          errors={errors}
          prevStep={prevStep}
          nextStep={nextStepHandler}
          step={step}
          setFormData={setFormData}
          getValues={getValues}
          trigger={trigger}
          setValue={setValue}
        />
      )}

      {step === 12 && (
        <TempW4Form
          register={register}
          errors={errors}
          prevStep={prevStep}
          nextStep={nextStepHandler}
          step={step}
          setFormData={setFormData}
          getValues={getValues}
          trigger={trigger}
          setValue={setValue}
        />
      )}

      {step === 13 && (
        <TempSelectCitizenShip
          register={register}
          errors={errors}
          prevStep={prevStep}
          step={step}
          handleSubmit={handleSubmit}
          onSubmitFinal={onSubmitFinal}
          formData={formData}
          setFormData={setFormData}
          getValues={getValues}
          trigger={trigger}
          setValue={setValue}
        />
      )}
    </div>
  );
};

export default TempApplyJob;
