// import { useForm } from "react-hook-form";
// import ProgressBar from "../../progressBar/ProgressBar";
// import { IoPeopleOutline } from "react-icons/io5";
// import { CiCircleCheck } from "react-icons/ci";
// import { useState } from "react";

// const W4Form = ({ prevStep, nextStep, step }) => {
//   const totalSteps = 5;

//   const [children, setChildren] = useState("");
//   const [dependents, setDependents] = useState("");

//   // Calculate
//   const childrenAmount = (Number(children) || 0) * 2000;
//   const dependentsAmount = (Number(dependents) || 0) * 500;
//   const totalAmount = childrenAmount + dependentsAmount;

//   const {
//     register,
//     // handleSubmit,
//     formState: { errors },
//   } = useForm();

//   const inputWrapperClass =
//     "rounded-md bg-gradient-to-r from-[#8D6851] to-[#D3BFB2] mt-1 p-[1px]";
//   const inputClass =
//     "w-full bg-slate-900 text-white rounded-md py-2 px-3 focus:outline-none focus:ring-0";
//   return (
//     <div>
//       <div className="text-white ">
//         <div className="max-w-7xl mx-auto">
//           {/* Header */}
//           <div className="flex space-x-96 mb-4">
//             <div className="text-sm">
//               <div className="font-bold text-lg mb-2">CBYRAC, INC</div>
//               <div>123 MAIN STREET SUITE 100</div>
//               <div>ANYTOWN, STATE 12345</div>
//               <div>PHONE: 555-555-5555</div>
//               <div>EMAIL: info@cbyrac.com</div>
//             </div>
//             <div className="w-24 h-24 bg-white rounded justify-center">
//               <img src="/cbyrac-logo.png" alt="" />
//             </div>
//           </div>

//           {/* Title */}
//           <div className="text-center mb-8">
//             <h1 className="text-2xl font-bold mb-2">
//               Employee Withholding Certificate ( Form W-4 )
//             </h1>
//             <p className="text-sm text-gray-300 mb-7">
//               Your Withholding is subject to review by the IRS
//             </p>
//             {/* progressbar */}
//             <ProgressBar currentStep={step} totalSteps={totalSteps} />
//           </div>
//           {/* Step 1 Info */}
//           <p className="text-[32px] font-bold mt-8 ">Step 1 :</p>
//           <div className="border-2 w-32 mb-5"></div>
//           <form
//             onSubmit={(e) => {
//               e.preventDefault();
//               nextStep();
//             }}
//             className="rounded-2xl  max-w-7xl mx-auto"
//           >
//             {/* Step 1 Info */}
//             <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
//               <div>
//                 <label className="text-white mb-1 block">
//                   First Name <span className="text-red-500">*</span>
//                 </label>
//                 <div className={inputWrapperClass}>
//                   <input
//                     type="text"
//                     placeholder="Enter Bank Name"
//                     {...register("telephone")}
//                     className={inputClass}
//                   />
//                 </div>
//               </div>

//               <div>
//                 <label className="text-white mb-1 block">
//                   Middle Name <span className="text-red-500">*</span>
//                 </label>
//                 <div className={inputWrapperClass}>
//                   <input
//                     type="email"
//                     placeholder="XXX-XX-____"
//                     {...register("email")}
//                     className={inputClass}
//                   />
//                 </div>
//               </div>
//               <div>
//                 <label className="text-white mb-1 block">
//                   Last Name <span className="text-red-500">*</span>
//                 </label>
//                 <div className={inputWrapperClass}>
//                   <input
//                     type="email"
//                     placeholder="XXX-XX-____"
//                     {...register("email")}
//                     className={inputClass}
//                   />
//                 </div>
//               </div>
//             </div>
//             <div className="space-y-4">
//               <div>
//                 <label className="text-white mb-1 block">
//                   Social Security Number <span className="text-red-500">*</span>
//                 </label>
//                 <div className={inputWrapperClass}>
//                   <input
//                     type="text"
//                     placeholder="Enter Social Security Number *"
//                     {...register("telephone")}
//                     className={inputClass}
//                   />
//                 </div>
//               </div>
//               <div>
//                 <label className="text-white mb-1 block">
//                   Address <span className="text-red-500">*</span>
//                 </label>
//                 <div className={inputWrapperClass}>
//                   <input
//                     type="text"
//                     placeholder="City Or Town ,State, ZIP"
//                     {...register("telephone")}
//                     className={inputClass}
//                   />
//                 </div>
//               </div>
//               <div>
//                 <label className="text-white mb-1 block">
//                   Marital Status <span className="text-red-500">*</span>
//                 </label>
//                 <div className={inputWrapperClass}>
//                   <select
//                     {...register("maritalStatus", { required: true })}
//                     className={inputClass}
//                     defaultValue=""
//                   >
//                     <option value="single">Single</option>
//                     <option value="married">Married</option>
//                     <option value="divorced">Divorced</option>
//                     <option value="widowed">Widowed</option>
//                   </select>
//                 </div>
//               </div>
//             </div>
//             {/* Step 2 Info */}
//             <div>
//               <p className="text-[32px] font-bold mt-8 ">Step 2 :</p>
//               <div className="border-2 w-32 mb-5"></div>
//               <p className="text-lg mb-4">
//                 Complete this step if you (1) hold more than one job at a time,
//                 or (2) are married filing jointly and your spouse also works.
//                 The correct amount of withholding depends on income earned from
//                 all of these jobs.
//               </p>
//               <p className="text-lg mb-4">
//                 Do only one of the following - (a) Use the estimator at
//                 www.irs.gov/W4App for the most accurate withholding for this
//                 step (and Steps 3–4). If you or your spouse have self-employment
//                 income, use this option; or
//               </p>
//               <p className="text-lg mb-4">
//                 (b) Use the Multiple Jobs Worksheet on page 3 and enter the
//                 result in Step 4(c) below; or
//               </p>
//               <p className="text-lg mb-4">
//                 (c) If there are only two jobs total, you may check this box. Do
//                 the same on Form W-4 for the other job. This option is generally
//                 more accurate than (b) if pay at the lower paying job is more
//                 than half of the pay at the higher paying job. Otherwise, (b) is
//                 more accurate{" "}
//               </p>
//               <label className="flex items-center gap-2">
//                 <input
//                   type="checkbox"
//                   value="US Citizen"
//                   {...register("citizenship", {
//                     required: "You must select at least one option",
//                   })}
//                   className="w-5 h-5"
//                 />
//                 Agree With Above Conditions
//               </label>
//             </div>
//             {/* Step 3 Info */}
//             <p className="text-[32px] font-bold mt-8 ">Step 3 :</p>
//             <div className="border-2 w-32 mb-5"></div>
//             <div>
//               <li>
//                 If your total income will be $200,000 or less ($400,000 or less
//                 if married filing jointly): Multiply the number of qualifying
//                 children under age 17 by $2,000
//               </li>

//               {/* Children Section */}
//               <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4 mt-2">
//                 <div>
//                   <label className="text-white mb-1 block">
//                     How Many Children <span className="text-red-500">*</span>
//                   </label>
//                   <input
//                     type="number"
//                     placeholder="Enter number of children"
//                     value={children}
//                     onChange={(e) => setChildren(e.target.value)}
//                     className={inputClass}
//                   />
//                 </div>

//                 <div>
//                   <label className="text-white mb-1 block">Amount</label>
//                   <p className="bg-gray-800 p-2 rounded">${childrenAmount}</p>
//                 </div>
//               </div>

//               <li>
//                 If your total income will be $200,000 or less ($400,000 or less
//                 if married filing jointly): Multiply the number of other
//                 dependents by $500
//               </li>

//               {/* Dependents Section */}
//               <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4 mt-2">
//                 <div>
//                   <label className="text-white mb-1 block">
//                     How Many Dependents <span className="text-red-500">*</span>
//                   </label>
//                   <input
//                     type="number"
//                     placeholder="Enter number of dependents"
//                     value={dependents}
//                     onChange={(e) => setDependents(e.target.value)}
//                     className={inputClass}
//                   />
//                 </div>

//                 <div>
//                   <label className="text-white mb-1 block">Amount</label>
//                   <p className="bg-gray-800 p-2 rounded">${dependentsAmount}</p>
//                 </div>
//               </div>

//               {/* Total */}
//               <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
//                 <div>
//                   <label className="text-white mb-1 block">Total Amount</label>
//                   <p className="bg-green-700 p-2 rounded font-semibold">
//                     ${totalAmount}
//                   </p>
//                 </div>
//               </div>
//             </div>
//             {/* Step 4 Info */}
//             <p className="text-[32px] font-bold mt-8 ">Step 4 :</p>
//             <div className="border-2 w-32 mb-5"></div>
//             <p>
//               Other income (not from jobs). If you want tax withheld for other
//               income you expect this year that won’t have withholding, enter the
//               amount of other income here. This may include interest, dividends,
//               and retirement income.
//             </p>
//             <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4 mt-4">
//               <div>
//                 <label className="text-white mb-1 block">Amount</label>
//                 <div className={inputWrapperClass}>
//                   <input
//                     type="text"
//                     placeholder="Enter Bank Name"
//                     {...register("telephone")}
//                     className={inputClass}
//                   />
//                 </div>
//               </div>
//             </div>
//             <p>
//               Other income (not from jobs). If you want tax withheld for other
//               income you expect this year that won’t have withholding, enter the
//               amount of other income here. This may include interest, dividends,
//               and retirement income.
//             </p>
//             <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4 mt-4">
//               <div>
//                 <label className="text-white mb-1 block">Amount</label>
//                 <div className={inputWrapperClass}>
//                   <input
//                     type="text"
//                     placeholder="Enter Bank Name"
//                     {...register("telephone")}
//                     className={inputClass}
//                   />
//                 </div>
//               </div>
//             </div>
//             <p>
//               Other income (not from jobs). If you want tax withheld for other
//               income you expect this year that won’t have withholding, enter the
//               amount of other income here. This may include interest, dividends,
//               and retirement income.
//             </p>
//             <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4 mt-4">
//               <div>
//                 <label className="text-white mb-1 block">Amount</label>
//                 <div className={inputWrapperClass}>
//                   <input
//                     type="text"
//                     placeholder="Enter Bank Name"
//                     {...register("telephone")}
//                     className={inputClass}
//                   />
//                 </div>
//               </div>
//             </div>
//             {/* Employee Signature and date */}
//             <div className="grid grid-cols-1 sm:grid-cols-3 mb-4">
//               <div>
//                 <label className="block mb-2">
//                   Employee Signature <span className="text-red-500">*</span>
//                 </label>
//                 <div className="w-[350px] h-[50px] bg-gradient-to-l from-[#D4BFB2] to-[#8D6851] rounded-md mt-1 flex items-center justify-center">
//                   <label className="w-full h-full flex items-center justify-center text-white cursor-pointer">
//                     <span className="text-center">Upload Signature</span>
//                     <input
//                       type="file"
//                       accept="image/*"
//                       {...register("employeeSignature", {
//                         required: "Signature is required",
//                       })}
//                       className="hidden"
//                     />
//                   </label>
//                 </div>
//                 {errors.employeeSignature && (
//                   <p className="text-red-500 text-sm">
//                     {errors.employeeSignature.message}
//                   </p>
//                 )}
//               </div>

//               <div>
//                 <label className="mb-1 block">
//                   Date <span className="text-red-500">*</span>
//                 </label>
//                 <div className={inputWrapperClass}>
//                   <input
//                     type="date"
//                     {...register("signDate", { required: "Date is required" })}
//                     className={inputClass}
//                   />
//                 </div>
//                 {errors.signDate && (
//                   <p className="text-red-500 text-sm">
//                     {errors.signDate.message}
//                   </p>
//                 )}
//               </div>
//             </div>
//             <div className="flex justify-center mt-6 gap-4">
//               <button
//                 type="button"
//                 onClick={prevStep}
//                 className="px-6 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-700"
//               >
//                 Previous
//               </button>

//               <button
//                 type="submit"
//                 // onClick={nextStep}
//                 className="px-6 py-2 bg-gradient-to-r from-[#8D6851] to-[#D3BFB2] text-white rounded-md hover:opacity-90"
//               >
//                 Next
//               </button>
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default W4Form;

// import React, { useState } from "react";
// import { Controller, useForm } from "react-hook-form";
// import ProgressBar from "../../progressBar/ProgressBar";
// import { IoPeopleOutline } from "react-icons/io5";
// import { CiCircleCheck } from "react-icons/ci";
// import { X } from "lucide-react";

// const W4Form = ({
//   prevStep,
//   nextStep,
//   step,
//   register,
//   errors,
//   setFormData,
//   getValues,
//   trigger,
// }) => {
//   const totalSteps = 5;

//   const [children, setChildren] = useState("");
//   const [dependents, setDependents] = useState("");
//   const [preview, setPreview] = useState(null);

//   // Calculate
//   const childrenAmount = (Number(children) || 0) * 2000;
//   const dependentsAmount = (Number(dependents) || 0) * 500;
//   const totalAmount = childrenAmount + dependentsAmount;

//   const {
//     // register,
//     control,
//     // formState: { errors },
//   } = useForm();

//   const inputWrapperClass =
//     "rounded-md bg-gradient-to-r from-[#8D6851] to-[#D3BFB2] mt-1 p-[1px]";
//   const inputClass =
//     "w-full bg-slate-900 text-white rounded-md py-2 px-3 focus:outline-none focus:ring-0";

//   const handleFileChange = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       setPreview(URL.createObjectURL(file));
//     }
//   };

//   const handleRemoveImage = () => {
//     setPreview(null);
//     register("employeeSignature").onChange({ target: { files: null } });
//   };

//   const handleNext = async () => {
//     const result = await trigger();
//     if (result) {
//       const allData = getValues();
//       setFormData((prev) => ({
//         ...prev,
//         w4Form: {
//           firstName: allData.firstName,
//           middleName: allData.middleName,
//           lastName: allData.lastName,
//           ssn: allData.ssn,
//           address: allData.address,
//           maritalStatus: allData.maritalStatus,
//           multipleJobs: allData.citizenship === "US Citizen",
//           qualifyingChildren: Number(children) || undefined,
//           otherDependents: Number(dependents) || undefined,
//           childrenAmount: childrenAmount || undefined,
//           dependentsAmount: dependentsAmount || undefined,
//           totalAmount: totalAmount || undefined,
//           otherIncome: allData.otherIncome
//             ? Number(allData.otherIncome)
//             : undefined,
//           signature: allData.employeeSignature?.[0]?.name
//             ? `/employeeSignature4/${allData.employeeSignature[0].name}`
//             : undefined,
//           signatureDate: allData.signDate,
//         },
//       }));
//       nextStep();
//     } else {
//       console.log("Validation errors:", errors);
//     }
//   };

//   return (
//     <div>
//       <div className="text-white">
//         <div className="max-w-7xl mx-auto">
//           {/* Header */}
//           <div className="flex space-x-96 mb-4">
//             <div className="text-sm">
//               <div className="font-bold text-lg mb-2">CBYRAC, INC</div>
//               <div>123 MAIN STREET SUITE 100</div>
//               <div>ANYTOWN, STATE 12345</div>
//               <div>PHONE: 555-555-5555</div>
//               <div>EMAIL: info@cbyrac.com</div>
//             </div>
//             <div className="w-24 h-24 bg-white rounded justify-center">
//               <img src="/cbyrac-logo.png" alt="" />
//             </div>
//           </div>

//           {/* Title */}
//           <div className="text-center mb-8">
//             <h1 className="text-2xl font-bold mb-2">
//               Employee Withholding Certificate ( Form W-4 )
//             </h1>
//             <p className="text-sm text-gray-300 mb-7">
//               Your Withholding is subject to review by the IRS
//             </p>
//             {/* progressbar */}
//             <ProgressBar currentStep={step} totalSteps={totalSteps} />
//           </div>
//           {/* Step 1 Info */}
//           <p className="text-[32px] font-bold mt-8">Step 1 :</p>
//           <div className="border-2 w-32 mb-5"></div>
//           <form
//             onSubmit={(e) => {
//               e.preventDefault();
//               handleNext();
//             }}
//             className="rounded-2xl max-w-7xl mx-auto"
//           >
//             {/* Step 1 Info */}
//             <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
//               <div>
//                 <label className="text-white mb-1 block">
//                   First Name <span className="text-red-500">*</span>
//                 </label>
//                 <div className={inputWrapperClass}>
//                   <input
//                     type="text"
//                     placeholder="Enter First Name"
//                     {...register("firstName", {
//                       required: "First Name is required",
//                     })}
//                     className={inputClass}
//                   />
//                 </div>
//                 {errors.firstName && (
//                   <p className="text-red-500 text-sm">
//                     {errors.firstName.message}
//                   </p>
//                 )}
//               </div>

//               <div>
//                 <label className="text-white mb-1 block">Middle Name</label>
//                 <div className={inputWrapperClass}>
//                   <input
//                     type="text"
//                     placeholder="Enter Middle Name"
//                     {...register("middleName")}
//                     className={inputClass}
//                   />
//                 </div>
//               </div>
//               <div>
//                 <label className="text-white mb-1 block">
//                   Last Name <span className="text-red-500">*</span>
//                 </label>
//                 <div className={inputWrapperClass}>
//                   <input
//                     type="text"
//                     placeholder="Enter Last Name"
//                     {...register("lastName", {
//                       required: "Last Name is required",
//                     })}
//                     className={inputClass}
//                   />
//                 </div>
//                 {errors.lastName && (
//                   <p className="text-red-500 text-sm">
//                     {errors.lastName.message}
//                   </p>
//                 )}
//               </div>
//             </div>
//             <div className="space-y-4">
//               <div>
//                 <label className="text-white mb-1 block">
//                   Social Security Number <span className="text-red-500">*</span>
//                 </label>
//                 <div className={inputWrapperClass}>
//                   <input
//                     type="text"
//                     placeholder="Enter Social Security Number"
//                     {...register("ssn", {
//                       required: "Social Security Number is required",
//                       pattern: {
//                         value: /^\d{3}-\d{2}-\d{4}$/,
//                         message: "SSN must be in XXX-XX-XXXX format",
//                       },
//                     })}
//                     className={inputClass}
//                   />
//                 </div>
//                 {errors.ssn && (
//                   <p className="text-red-500 text-sm">{errors.ssn.message}</p>
//                 )}
//               </div>
//               <div>
//                 <label className="text-white mb-1 block">
//                   Address <span className="text-red-500">*</span>
//                 </label>
//                 <div className={inputWrapperClass}>
//                   <input
//                     type="text"
//                     placeholder="City, State, ZIP"
//                     {...register("address", {
//                       required: "Address is required",
//                     })}
//                     className={inputClass}
//                   />
//                 </div>
//                 {errors.address && (
//                   <p className="text-red-500 text-sm">
//                     {errors.address.message}
//                   </p>
//                 )}
//               </div>
//               <div>
//                 <label className="text-white mb-1 block">
//                   Marital Status <span className="text-red-500">*</span>
//                 </label>
//                 <div className={inputWrapperClass}>
//                   <select
//                     {...register("maritalStatus", {
//                       required: "Marital Status is required",
//                     })}
//                     className={inputClass}
//                     defaultValue=""
//                   >
//                     <option value="">Select</option>
//                     <option value="single">Single</option>
//                     <option value="married">Married</option>
//                     <option value="divorced">Divorced</option>
//                     <option value="widowed">Widowed</option>
//                   </select>
//                 </div>
//                 {errors.maritalStatus && (
//                   <p className="text-red-500 text-sm">
//                     {errors.maritalStatus.message}
//                   </p>
//                 )}
//               </div>
//             </div>
//             {/* Step 2 Info */}
//             <div>
//               <p className="text-[32px] font-bold mt-8">Step 2 :</p>
//               <div className="border-2 w-32 mb-5"></div>
//               <p className="text-lg mb-4">
//                 Complete this step if you (1) hold more than one job at a time,
//                 or (2) are married filing jointly and your spouse also works.
//                 The correct amount of withholding depends on income earned from
//                 all of these jobs.
//               </p>
//               <p className="text-lg mb-4">
//                 Do only one of the following - (a) Use the estimator at
//                 www.irs.gov/W4App for the most accurate withholding for this
//                 step (and Steps 3–4). If you or your spouse have self-employment
//                 income, use this option; or
//               </p>
//               <p className="text-lg mb-4">
//                 (b) Use the Multiple Jobs Worksheet on page 3 and enter the
//                 result in Step 4(c) below; or
//               </p>
//               <p className="text-lg mb-4">
//                 (c) If there are only two jobs total, you may check this box. Do
//                 the same on Form W-4 for the other job. This option is generally
//                 more accurate than (b) if pay at the lower paying job is more
//                 than half of the pay at the higher paying job. Otherwise, (b) is
//                 more accurate
//               </p>
//               <label className="flex items-center gap-2">
//                 <input
//                   type="checkbox"
//                   value="US Citizen"
//                   {...register("citizenship", {
//                     required: "You must select at least one option",
//                   })}
//                   className="w-5 h-5"
//                 />
//                 Agree With Above Conditions
//               </label>
//               {errors.citizenship && (
//                 <p className="text-red-500 text-sm">
//                   {errors.citizenship.message}
//                 </p>
//               )}
//             </div>
//             {/* Step 3 Info */}
//             <p className="text-[32px] font-bold mt-8">Step 3 :</p>
//             <div className="border-2 w-32 mb-5"></div>
//             <div>
//               <li>
//                 If your total income will be $200,000 or less ($400,000 or less
//                 if married filing jointly): Multiply the number of qualifying
//                 children under age 17 by $2,000
//               </li>

//               {/* Children Section */}
//               <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4 mt-2">
//                 <div>
//                   <label className="text-white mb-1 block">
//                     How Many Children <span className="text-red-500">*</span>
//                   </label>
//                   <div className={inputWrapperClass}>
//                     <Controller
//                       name="qualifyingChildren"
//                       control={control}
//                       rules={{
//                         required: "Number of qualifying children is required",
//                         min: { value: 0, message: "Cannot be negative" },
//                       }}
//                       render={({ field }) => (
//                         <input
//                           type="number"
//                           placeholder="Enter number of children"
//                           value={children}
//                           onChange={(e) => {
//                             const value = e.target.value;
//                             setChildren(value);
//                             field.onChange(Number(value) || "");
//                           }}
//                           className={inputClass}
//                         />
//                       )}
//                     />
//                   </div>
//                   {errors.qualifyingChildren && (
//                     <p className="text-red-500 text-sm">
//                       {errors.qualifyingChildren.message}
//                     </p>
//                   )}
//                 </div>

//                 <div>
//                   <label className="text-white mb-1 block">Amount</label>
//                   <p className="bg-gray-800 p-2 rounded">${childrenAmount}</p>
//                 </div>
//               </div>

//               <li>
//                 If your total income will be $200,000 or less ($400,000 or less
//                 if married filing jointly): Multiply the number of other
//                 dependents by $500
//               </li>

//               {/* Dependents Section */}
//               <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4 mt-2">
//                 <div>
//                   <label className="text-white mb-1 block">
//                     How Many Dependents
//                   </label>
//                   <div className={inputWrapperClass}>
//                     <Controller
//                       name="otherDependents"
//                       control={control}
//                       rules={{
//                         min: { value: 0, message: "Cannot be negative" },
//                       }}
//                       render={({ field }) => (
//                         <input
//                           type="number"
//                           placeholder="Enter number of dependents"
//                           value={dependents}
//                           onChange={(e) => {
//                             const value = e.target.value;
//                             setDependents(value);
//                             field.onChange(Number(value) || "");
//                           }}
//                           className={inputClass}
//                         />
//                       )}
//                     />
//                   </div>
//                   {errors.otherDependents && (
//                     <p className="text-red-500 text-sm">
//                       {errors.otherDependents.message}
//                     </p>
//                   )}
//                 </div>

//                 <div>
//                   <label className="text-white mb-1 block">Amount</label>
//                   <p className="bg-gray-800 p-2 rounded">${dependentsAmount}</p>
//                 </div>
//               </div>

//               {/* Total */}
//               <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
//                 <div>
//                   <label className="text-white mb-1 block">Total Amount</label>
//                   <p className="bg-green-700 p-2 rounded font-semibold">
//                     ${totalAmount}
//                   </p>
//                 </div>
//               </div>
//             </div>
//             {/* Step 4 Info */}
//             <p className="text-[32px] font-bold mt-8">Step 4 :</p>
//             <div className="border-2 w-32 mb-5"></div>
//             <p>
//               Other income (not from jobs). If you want tax withheld for other
//               income you expect this year that won’t have withholding, enter the
//               amount of other income here. This may include interest, dividends,
//               and retirement income.
//             </p>
//             <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4 mt-4">
//               <div>
//                 <label className="text-white mb-1 block">Amount</label>
//                 <div className={inputWrapperClass}>
//                   <input
//                     type="number"
//                     placeholder="Enter Other Income"
//                     {...register("otherIncome", {
//                       min: { value: 0, message: "Cannot be negative" },
//                     })}
//                     className={inputClass}
//                   />
//                 </div>
//                 {errors.otherIncome && (
//                   <p className="text-red-500 text-sm">
//                     {errors.otherIncome.message}
//                   </p>
//                 )}
//               </div>
//             </div>
//             <p>
//               Other income (not from jobs). If you want tax withheld for other
//               income you expect this year that won’t have withholding, enter the
//               amount of other income here. This may include interest, dividends,
//               and retirement income.
//             </p>
//             <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4 mt-4">
//               <div>
//                 <label className="text-white mb-1 block">Amount</label>
//                 <div className={inputWrapperClass}>
//                   <input
//                     type="number"
//                     placeholder="Enter Other Income"
//                     {...register("otherIncome2", {
//                       min: { value: 0, message: "Cannot be negative" },
//                     })}
//                     className={inputClass}
//                   />
//                 </div>
//                 {errors.otherIncome2 && (
//                   <p className="text-red-500 text-sm">
//                     {errors.otherIncome2.message}
//                   </p>
//                 )}
//               </div>
//             </div>
//             <p>
//               Other income (not from jobs). If you want tax withheld for other
//               income you expect this year that won’t have withholding, enter the
//               amount of other income here. This may include interest, dividends,
//               and retirement income.
//             </p>
//             <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4 mt-4">
//               <div>
//                 <label className="text-white mb-1 block">Amount</label>
//                 <div className={inputWrapperClass}>
//                   <input
//                     type="number"
//                     placeholder="Enter Other Income"
//                     {...register("otherIncome3", {
//                       min: { value: 0, message: "Cannot be negative" },
//                     })}
//                     className={inputClass}
//                   />
//                 </div>
//                 {errors.otherIncome3 && (
//                   <p className="text-red-500 text-sm">
//                     {errors.otherIncome3.message}
//                   </p>
//                 )}
//               </div>
//             </div>
//             {/* Employee Signature and date */}
//             <div className="grid grid-cols-1 sm:grid-cols-3 mb-4">
//               <div>
//                 <label className="block mb-2">
//                   Employee Signature <span className="text-red-500">*</span>
//                 </label>
//                 <div className="w-[350px] h-[50px] bg-gradient-to-l from-[#D4BFB2] to-[#8D6851] rounded-md mt-1 flex items-center justify-center">
//                   <label className="w-full h-full flex items-center justify-center text-white cursor-pointer">
//                     <span className="text-center">Upload Signature</span>
//                     <input
//                       type="file"
//                       accept="image/*"
//                       {...register("employeeSignature", {
//                         required: "Signature is required",
//                       })}
//                       className="hidden"
//                       onChange={handleFileChange}
//                     />
//                   </label>
//                 </div>
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
//                   <p className="text-red-500 text-sm">
//                     {errors.employeeSignature.message}
//                   </p>
//                 )}
//               </div>

//               <div>
//                 <label className="mb-1 block">
//                   Date <span className="text-red-500">*</span>
//                 </label>
//                 <div className={inputWrapperClass}>
//                   <input
//                     type="date"
//                     {...register("signDate", { required: "Date is required" })}
//                     className={inputClass}
//                   />
//                 </div>
//                 {errors.signDate && (
//                   <p className="text-red-500 text-sm">
//                     {errors.signDate.message}
//                   </p>
//                 )}
//               </div>
//             </div>
//             <div className="flex justify-center mt-6 gap-4">
//               <button
//                 type="button"
//                 onClick={prevStep}
//                 className="px-6 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-700"
//               >
//                 Previous
//               </button>
//               <button
//                 type="submit"
//                 className="px-6 py-2 bg-gradient-to-r from-[#8D6851] to-[#D3BFB2] text-white rounded-md hover:opacity-90"
//               >
//                 Next
//               </button>
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default W4Form;

// import React, { useState } from "react";
// import { Controller, useForm } from "react-hook-form";
// import ProgressBar from "../../progressBar/ProgressBar";
// import { IoPeopleOutline } from "react-icons/io5";
// import { CiCircleCheck } from "react-icons/ci";
// import { X } from "lucide-react";

// const W4Form = ({
//   prevStep,
//   nextStep,
//   step,
//   register,
//   errors,
//   setFormData,
//   getValues,
//   trigger,
// }) => {
//   const totalSteps = 5;

//   const [children, setChildren] = useState("");
//   const [dependents, setDependents] = useState("");
//   const [preview, setPreview] = useState(null);

//   // Calculate
//   const childrenAmount = (Number(children) || 0) * 2000;
//   const dependentsAmount = (Number(dependents) || 0) * 500;
//   const totalAmount = childrenAmount + dependentsAmount;

//   const {
//     // register,
//     control,
//     // formState: { errors },
//   } = useForm();

//   const inputWrapperClass =
//     "rounded-md bg-gradient-to-r from-[#8D6851] to-[#D3BFB2] mt-1 p-[1px]";
//   const inputClass =
//     "w-full bg-slate-900 text-white rounded-md py-2 px-3 focus:outline-none focus:ring-0";

//   const handleFileChange = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       setPreview(URL.createObjectURL(file));
//     }
//   };

//   const handleRemoveImage = () => {
//     setPreview(null);
//     register("employeeSignature").onChange({ target: { files: null } });
//   };

//   const handleNext = async () => {
//     const result = await trigger();
//     if (result) {
//       const allData = getValues();
//       setFormData((prev) => ({
//         ...prev,
//         w4Form: {
//           firstName: allData.firstName,
//           middleName: allData.middleName,
//           lastName: allData.lastName,
//           ssn: allData.ssn,
//           address: allData.address,
//           maritalStatus: allData.maritalStatus,
//           multipleJobs: allData.citizenship === "US Citizen",
//           qualifyingChildren: Number(children) || undefined,
//           otherDependents: Number(dependents) || undefined,
//           childrenAmount: childrenAmount || undefined,
//           dependentsAmount: dependentsAmount || undefined,
//           totalAmount: totalAmount || undefined,
//           otherIncome: allData.otherIncome
//             ? Number(allData.otherIncome)
//             : undefined,
//           signature: allData.employeeSignature?.[0]?.name
//             ? `/employeeSignature4/${allData.employeeSignature[0].name}`
//             : undefined,
//           signatureDate: allData.signDate,
//         },
//       }));
//       nextStep();
//     } else {
//       console.log("Validation errors:", errors);
//     }
//   };

//   return (
//     <div>
//       <div className="text-white">
//         <div className="max-w-7xl mx-auto">
//           {/* Header */}
//           <div className="flex space-x-96 mb-4">
//             <div className="text-sm">
//               <div className="font-bold text-lg mb-2">CBYRAC, INC</div>
//               <div>123 MAIN STREET SUITE 100</div>
//               <div>ANYTOWN, STATE 12345</div>
//               <div>PHONE: 555-555-5555</div>
//               <div>EMAIL: info@cbyrac.com</div>
//             </div>
//             <div className="w-24 h-24 bg-white rounded justify-center">
//               <img src="/cbyrac-logo.png" alt="" />
//             </div>
//           </div>

//           {/* Title */}
//           <div className="text-center mb-8">
//             <h1 className="text-2xl font-bold mb-2">
//               Employee Withholding Certificate ( Form W-4 )
//             </h1>
//             <p className="text-sm text-gray-300 mb-7">
//               Your Withholding is subject to review by the IRS
//             </p>
//             {/* progressbar */}
//             <ProgressBar currentStep={step} totalSteps={totalSteps} />
//           </div>
//           {/* Step 1 Info */}
//           <p className="text-[32px] font-bold mt-8">Step 1 :</p>
//           <div className="border-2 w-32 mb-5"></div>
//           <form
//             onSubmit={(e) => {
//               e.preventDefault();
//               handleNext();
//             }}
//             className="rounded-2xl max-w-7xl mx-auto"
//           >
//             {/* Step 1 Info */}
//             <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
//               <div>
//                 <label className="text-white mb-1 block">
//                   First Name <span className="text-red-500">*</span>
//                 </label>
//                 <div className={inputWrapperClass}>
//                   <input
//                     type="text"
//                     placeholder="Enter First Name"
//                     {...register("firstName", {
//                       required: "First Name is required",
//                     })}
//                     className={inputClass}
//                   />
//                 </div>
//                 {errors.firstName && (
//                   <p className="text-red-500 text-sm">
//                     {errors.firstName.message}
//                   </p>
//                 )}
//               </div>

//               <div>
//                 <label className="text-white mb-1 block">Middle Name</label>
//                 <div className={inputWrapperClass}>
//                   <input
//                     type="text"
//                     placeholder="Enter Middle Name"
//                     {...register("middleName")}
//                     className={inputClass}
//                   />
//                 </div>
//               </div>
//               <div>
//                 <label className="text-white mb-1 block">
//                   Last Name <span className="text-red-500">*</span>
//                 </label>
//                 <div className={inputWrapperClass}>
//                   <input
//                     type="text"
//                     placeholder="Enter Last Name"
//                     {...register("lastName", {
//                       required: "Last Name is required",
//                     })}
//                     className={inputClass}
//                   />
//                 </div>
//                 {errors.lastName && (
//                   <p className="text-red-500 text-sm">
//                     {errors.lastName.message}
//                   </p>
//                 )}
//               </div>
//             </div>
//             <div className="space-y-4">
//               <div>
//                 <label className="text-white mb-1 block">
//                   Social Security Number <span className="text-red-500">*</span>
//                 </label>
//                 <div className={inputWrapperClass}>
//                   <input
//                     type="text"
//                     placeholder="Enter Social Security Number"
//                     {...register("ssn", {
//                       required: "Social Security Number is required",
//                       pattern: {
//                         value: /^\d{3}-\d{2}-\d{4}$/,
//                         message: "SSN must be in XXX-XX-XXXX format",
//                       },
//                     })}
//                     className={inputClass}
//                   />
//                 </div>
//                 {errors.ssn && (
//                   <p className="text-red-500 text-sm">{errors.ssn.message}</p>
//                 )}
//               </div>
//               <div>
//                 <label className="text-white mb-1 block">
//                   Address <span className="text-red-500">*</span>
//                 </label>
//                 <div className={inputWrapperClass}>
//                   <input
//                     type="text"
//                     placeholder="City, State, ZIP"
//                     {...register("address", {
//                       required: "Address is required",
//                     })}
//                     className={inputClass}
//                   />
//                 </div>
//                 {errors.address && (
//                   <p className="text-red-500 text-sm">
//                     {errors.address.message}
//                   </p>
//                 )}
//               </div>
//               <div>
//                 <label className="text-white mb-1 block">
//                   Marital Status <span className="text-red-500">*</span>
//                 </label>
//                 <div className={inputWrapperClass}>
//                   <select
//                     {...register("maritalStatus", {
//                       required: "Marital Status is required",
//                     })}
//                     className={inputClass}
//                     defaultValue=""
//                   >
//                     <option value="">Select</option>
//                     <option value="single">Single</option>
//                     <option value="married">Married</option>
//                     <option value="divorced">Divorced</option>
//                     <option value="widowed">Widowed</option>
//                   </select>
//                 </div>
//                 {errors.maritalStatus && (
//                   <p className="text-red-500 text-sm">
//                     {errors.maritalStatus.message}
//                   </p>
//                 )}
//               </div>
//             </div>
//             {/* Step 2 Info */}
//             <div>
//               <p className="text-[32px] font-bold mt-8">Step 2 :</p>
//               <div className="border-2 w-32 mb-5"></div>
//               <p className="text-lg mb-4">
//                 Complete this step if you (1) hold more than one job at a time,
//                 or (2) are married filing jointly and your spouse also works.
//                 The correct amount of withholding depends on income earned from
//                 all of these jobs.
//               </p>
//               <p className="text-lg mb-4">
//                 Do only one of the following - (a) Use the estimator at
//                 www.irs.gov/W4App for the most accurate withholding for this
//                 step (and Steps 3–4). If you or your spouse have self-employment
//                 income, use this option; or
//               </p>
//               <p className="text-lg mb-4">
//                 (b) Use the Multiple Jobs Worksheet on page 3 and enter the
//                 result in Step 4(c) below; or
//               </p>
//               <p className="text-lg mb-4">
//                 (c) If there are only two jobs total, you may check this box. Do
//                 the same on Form W-4 for the other job. This option is generally
//                 more accurate than (b) if pay at the lower paying job is more
//                 than half of the pay at the higher paying job. Otherwise, (b) is
//                 more accurate
//               </p>
//               <label className="flex items-center gap-2">
//                 <input
//                   type="checkbox"
//                   value="US Citizen"
//                   {...register("citizenship", {
//                     required: "You must select at least one option",
//                   })}
//                   className="w-5 h-5"
//                 />
//                 Agree With Above Conditions
//               </label>
//               {errors.citizenship && (
//                 <p className="text-red-500 text-sm">
//                   {errors.citizenship.message}
//                 </p>
//               )}
//             </div>
//             {/* Step 3 Info */}
//             <p className="text-[32px] font-bold mt-8">Step 3 :</p>
//             <div className="border-2 w-32 mb-5"></div>
//             <div>
//               <li>
//                 If your total income will be $200,000 or less ($400,000 or less
//                 if married filing jointly): Multiply the number of qualifying
//                 children under age 17 by $2,000
//               </li>

//               {/* Children Section */}
//               <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4 mt-2">
//                 <div>
//                   <label className="text-white mb-1 block">
//                     How Many Children <span className="text-red-500">*</span>
//                   </label>
//                   <div className={inputWrapperClass}>
//                     <Controller
//                       name="qualifyingChildren"
//                       control={control}
//                       rules={{
//                         required: "Number of qualifying children is required",
//                         min: { value: 0, message: "Cannot be negative" },
//                       }}
//                       render={({ field }) => (
//                         <input
//                           type="number"
//                           placeholder="Enter number of children"
//                           value={children}
//                           onChange={(e) => {
//                             const value = e.target.value;
//                             setChildren(value);
//                             field.onChange(Number(value) || "");
//                           }}
//                           className={inputClass}
//                         />
//                       )}
//                     />
//                   </div>
//                   {errors.qualifyingChildren && (
//                     <p className="text-red-500 text-sm">
//                       {errors.qualifyingChildren.message}
//                     </p>
//                   )}
//                 </div>

//                 <div>
//                   <label className="text-white mb-1 block">Amount</label>
//                   <p className="bg-gray-800 p-2 rounded">${childrenAmount}</p>
//                 </div>
//               </div>

//               <li>
//                 If your total income will be $200,000 or less ($400,000 or less
//                 if married filing jointly): Multiply the number of other
//                 dependents by $500
//               </li>

//               {/* Dependents Section */}
//               <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4 mt-2">
//                 <div>
//                   <label className="text-white mb-1 block">
//                     How Many Dependents
//                   </label>
//                   <div className={inputWrapperClass}>
//                     <Controller
//                       name="otherDependents"
//                       control={control}
//                       rules={{
//                         min: { value: 0, message: "Cannot be negative" },
//                       }}
//                       render={({ field }) => (
//                         <input
//                           type="number"
//                           placeholder="Enter number of dependents"
//                           value={dependents}
//                           onChange={(e) => {
//                             const value = e.target.value;
//                             setDependents(value);
//                             field.onChange(Number(value) || "");
//                           }}
//                           className={inputClass}
//                         />
//                       )}
//                     />
//                   </div>
//                   {errors.otherDependents && (
//                     <p className="text-red-500 text-sm">
//                       {errors.otherDependents.message}
//                     </p>
//                   )}
//                 </div>

//                 <div>
//                   <label className="text-white mb-1 block">Amount</label>
//                   <p className="bg-gray-800 p-2 rounded">${dependentsAmount}</p>
//                 </div>
//               </div>

//               {/* Total */}
//               <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
//                 <div>
//                   <label className="text-white mb-1 block">Total Amount</label>
//                   <p className="bg-green-700 p-2 rounded font-semibold">
//                     ${totalAmount}
//                   </p>
//                 </div>
//               </div>
//             </div>
//             {/* Step 4 Info */}
//             <p className="text-[32px] font-bold mt-8">Step 4 :</p>
//             <div className="border-2 w-32 mb-5"></div>
//             <p>
//               Other income (not from jobs). If you want tax withheld for other
//               income you expect this year that won’t have withholding, enter the
//               amount of other income here. This may include interest, dividends,
//               and retirement income.
//             </p>
//             <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4 mt-4">
//               <div>
//                 <label className="text-white mb-1 block">Amount</label>
//                 <div className={inputWrapperClass}>
//                   <input
//                     type="number"
//                     placeholder="Enter Other Income"
//                     {...register("otherIncome", {
//                       min: { value: 0, message: "Cannot be negative" },
//                     })}
//                     className={inputClass}
//                   />
//                 </div>
//                 {errors.otherIncome && (
//                   <p className="text-red-500 text-sm">
//                     {errors.otherIncome.message}
//                   </p>
//                 )}
//               </div>
//             </div>
//             <p>
//               Other income (not from jobs). If you want tax withheld for other
//               income you expect this year that won’t have withholding, enter the
//               amount of other income here. This may include interest, dividends,
//               and retirement income.
//             </p>
//             <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4 mt-4">
//               <div>
//                 <label className="text-white mb-1 block">Amount</label>
//                 <div className={inputWrapperClass}>
//                   <input
//                     type="number"
//                     placeholder="Enter Other Income"
//                     {...register("otherIncome2", {
//                       min: { value: 0, message: "Cannot be negative" },
//                     })}
//                     className={inputClass}
//                   />
//                 </div>
//                 {errors.otherIncome2 && (
//                   <p className="text-red-500 text-sm">
//                     {errors.otherIncome2.message}
//                   </p>
//                 )}
//               </div>
//             </div>
//             <p>
//               Other income (not from jobs). If you want tax withheld for other
//               income you expect this year that won’t have withholding, enter the
//               amount of other income here. This may include interest, dividends,
//               and retirement income.
//             </p>
//             <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4 mt-4">
//               <div>
//                 <label className="text-white mb-1 block">Amount</label>
//                 <div className={inputWrapperClass}>
//                   <input
//                     type="number"
//                     placeholder="Enter Other Income"
//                     {...register("otherIncome3", {
//                       min: { value: 0, message: "Cannot be negative" },
//                     })}
//                     className={inputClass}
//                   />
//                 </div>
//                 {errors.otherIncome3 && (
//                   <p className="text-red-500 text-sm">
//                     {errors.otherIncome3.message}
//                   </p>
//                 )}
//               </div>
//             </div>
//             {/* Employee Signature and date */}
//             <div className="grid grid-cols-1 sm:grid-cols-3 mb-4">
//               <div>
//                 <label className="block mb-2">
//                   Employee Signature <span className="text-red-500">*</span>
//                 </label>
//                 <div className="w-[350px] h-[50px] bg-gradient-to-l from-[#D4BFB2] to-[#8D6851] rounded-md mt-1 flex items-center justify-center">
//                   <label className="w-full h-full flex items-center justify-center text-white cursor-pointer">
//                     <span className="text-center">Upload Signature</span>
//                     <input
//                       type="file"
//                       accept="image/*"
//                       {...register("employeeSignature", {
//                         required: "Signature is required",
//                       })}
//                       className="hidden"
//                       onChange={handleFileChange}
//                     />
//                   </label>
//                 </div>
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
//                   <p className="text-red-500 text-sm">
//                     {errors.employeeSignature.message}
//                   </p>
//                 )}
//               </div>

//               <div>
//                 <label className="mb-1 block">
//                   Date <span className="text-red-500">*</span>
//                 </label>
//                 <div className={inputWrapperClass}>
//                   <input
//                     type="date"
//                     {...register("signDate", { required: "Date is required" })}
//                     className={inputClass}
//                   />
//                 </div>
//                 {errors.signDate && (
//                   <p className="text-red-500 text-sm">
//                     {errors.signDate.message}
//                   </p>
//                 )}
//               </div>
//             </div>
//             <div className="flex justify-center mt-6 gap-4">
//               <button
//                 type="button"
//                 onClick={prevStep}
//                 className="px-6 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-700"
//               >
//                 Previous
//               </button>
//               <button
//                 type="submit"
//                 className="px-6 py-2 bg-gradient-to-r from-[#8D6851] to-[#D3BFB2] text-white rounded-md hover:opacity-90"
//               >
//                 Next
//               </button>
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default W4Form;

import React, { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import ProgressBar from "../../progressBar/ProgressBar";
import { IoPeopleOutline } from "react-icons/io5";
import { CiCircleCheck } from "react-icons/ci";
import { X } from "lucide-react";

const W4Form = ({
  prevStep,
  nextStep,
  step,
  register,
  errors,
  setFormData,
  getValues,
  trigger,
  setValue,
}) => {
  const totalSteps = 5;

  const [children, setChildren] = useState("");
  const [dependents, setDependents] = useState("");
  const [preview, setPreview] = useState(null);

  // Calculate
  const childrenAmount = (Number(children) || 0) * 2000;
  const dependentsAmount = (Number(dependents) || 0) * 500;
  const totalAmount = childrenAmount + dependentsAmount;

  const { control } = useForm();

  const inputWrapperClass =
    "rounded-md bg-gradient-to-r from-[#8D6851] to-[#D3BFB2] mt-1 p-[1px]";
  const inputClass =
    "w-full bg-slate-900 text-white rounded-md py-2 px-3 focus:outline-none focus:ring-0";

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

  const handleNext = async () => {
    const result = await trigger();
    if (result) {
      const allData = getValues();
      setFormData((prev) => ({
        ...prev,
        w4Form: {
          firstName: allData.firstName,
          middleName: allData.middleName,
          lastName: allData.lastName,
          ssn: allData.ssn,
          address: allData.address,
          maritalStatus: allData.maritalStatus,
          acceptedTerms: true,
          childrenNo: Number(children) || 0,
          amount: allData.desiredSalary ? Number(allData.desiredSalary) : 0,
          childrenDepencyNo: Number(dependents) || 0,
          eachDepencyAmount: 500,
          TotalDependencyAmount: totalAmount || 0,
          withHoldAmount: 13000,
          deductedAmount: "13000",
          extraWithHoldingAmount: allData.otherIncome
            ? Number(allData.otherIncome)
            : 0,
          signature: allData.employeeSignature?.[0]?.name
            ? `/employeeSignature4/${allData.employeeSignature[0].name}`
            : undefined,
          signatureDate: allData.signDate,
        },
      }));
      nextStep();
    } else {
      console.log("Validation errors:", errors);
    }
  };

  return (
    <div>
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
              <img src="/cbyrac-logo.png" alt="" />
            </div>
          </div>

          {/* Title */}
          <div className="text-center mb-8">
            <h1 className="text-2xl font-bold mb-2">
              Employee Withholding Certificate ( Form W-4 )
            </h1>
            <p className="text-sm text-gray-300 mb-7">
              Your Withholding is subject to review by the IRS
            </p>
            {/* progressbar */}
            <ProgressBar currentStep={step} totalSteps={totalSteps} />
          </div>
          {/* Step 1 Info */}
          <p className="text-[32px] font-bold mt-8">Step 1 :</p>
          <div className="border-2 w-32 mb-5"></div>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleNext();
            }}
            className="rounded-2xl max-w-7xl mx-auto"
          >
            {/* Step 1 Info */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
              <div>
                <label className="text-white mb-1 block">
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
                <label className="text-white mb-1 block">Middle Name</label>
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
                <label className="text-white mb-1 block">
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
            <div className="space-y-4">
              <div>
                <label className="text-white mb-1 block">
                  Social Security Number <span className="text-red-500">*</span>
                </label>
                <div className={inputWrapperClass}>
                  <input
                    type="text"
                    placeholder="Enter Social Security Number"
                    {...register("ssn", {
                      required: "Social Security Number is required",
                      pattern: {
                        value: /^\d{3}-\d{2}-\d{4}$/,
                        message: "SSN must be in XXX-XX-XXXX format",
                      },
                    })}
                    className={inputClass}
                  />
                </div>
                {errors.ssn && (
                  <p className="text-red-500 text-sm">{errors.ssn.message}</p>
                )}
              </div>
              <div>
                <label className="text-white mb-1 block">
                  Address <span className="text-red-500">*</span>
                </label>
                <div className={inputWrapperClass}>
                  <input
                    type="text"
                    placeholder="City, State, ZIP"
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
              <div>
                <label className="text-white mb-1 block">
                  Marital Status <span className="text-red-500">*</span>
                </label>
                <div className={inputWrapperClass}>
                  <select
                    {...register("maritalStatus", {
                      required: "Marital Status is required",
                    })}
                    className={inputClass}
                    defaultValue=""
                  >
                    <option value="">Select</option>
                    <option value="single">Single</option>
                    <option value="married">Married</option>
                    <option value="divorced">Divorced</option>
                    <option value="widowed">Widowed</option>
                  </select>
                </div>
                {errors.maritalStatus && (
                  <p className="text-red-500 text-sm">
                    {errors.maritalStatus.message}
                  </p>
                )}
              </div>
            </div>
            {/* Step 2 Info */}
            <div>
              <p className="text-[32px] font-bold mt-8">Step 2 :</p>
              <div className="border-2 w-32 mb-5"></div>
              <p className="text-lg mb-4">
                Complete this step if you (1) hold more than one job at a time,
                or (2) are married filing jointly and your spouse also works.
                The correct amount of withholding depends on income earned from
                all of these jobs.
              </p>
              <p className="text-lg mb-4">
                Do only one of the following - (a) Use the estimator at
                www.irs.gov/W4App for the most accurate withholding for this
                step (and Steps 3–4). If you or your spouse have self-employment
                income, use this option; or
              </p>
              <p className="text-lg mb-4">
                (b) Use the Multiple Jobs Worksheet on page 3 and enter the
                result in Step 4(c) below; or
              </p>
              <p className="text-lg mb-4">
                (c) If there are only two jobs total, you may check this box. Do
                the same on Form W-4 for the other job. This option is generally
                more accurate than (b) if pay at the lower paying job is more
                than half of the pay at the higher paying job. Otherwise, (b) is
                more accurate
              </p>
              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  {...register("citizenship", {
                    required: "You must select at least one option",
                  })}
                  className="w-5 h-5"
                />
                Agree With Above Conditions
              </label>
              {errors.citizenship && (
                <p className="text-red-500 text-sm">
                  {errors.citizenship.message}
                </p>
              )}
            </div>
            {/* Step 3 Info */}
            <p className="text-[32px] font-bold mt-8">Step 3 :</p>
            <div className="border-2 w-32 mb-5"></div>
            <div>
              <li>
                If your total income will be $200,000 or less ($400,000 or less
                if married filing jointly): Multiply the number of qualifying
                children under age 17 by $2,000
              </li>

              {/* Children Section */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4 mt-2">
                <div>
                  <label className="text-white mb-1 block">
                    How Many Children <span className="text-red-500">*</span>
                  </label>
                  <div className={inputWrapperClass}>
                    <Controller
                      name="qualifyingChildren"
                      control={control}
                      rules={{
                        required: "Number of qualifying children is required",
                        min: { value: 0, message: "Cannot be negative" },
                      }}
                      render={({ field }) => (
                        <input
                          type="number"
                          placeholder="Enter number of children"
                          value={children}
                          onChange={(e) => {
                            const value = e.target.value;
                            setChildren(value);
                            field.onChange(Number(value) || "");
                          }}
                          className={inputClass}
                        />
                      )}
                    />
                  </div>
                  {errors.qualifyingChildren && (
                    <p className="text-red-500 text-sm">
                      {errors.qualifyingChildren.message}
                    </p>
                  )}
                </div>

                <div>
                  <label className="text-white mb-1 block">Amount</label>
                  <p className="bg-gray-800 p-2 rounded">${childrenAmount}</p>
                </div>
              </div>

              <li>
                If your total income will be $200,000 or less ($400,000 or less
                if married filing jointly): Multiply the number of other
                dependents by $500
              </li>

              {/* Dependents Section */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4 mt-2">
                <div>
                  <label className="text-white mb-1 block">
                    How Many Dependents
                  </label>
                  <div className={inputWrapperClass}>
                    <Controller
                      name="otherDependents"
                      control={control}
                      rules={{
                        min: { value: 0, message: "Cannot be negative" },
                      }}
                      render={({ field }) => (
                        <input
                          type="number"
                          placeholder="Enter number of dependents"
                          value={dependents}
                          onChange={(e) => {
                            const value = e.target.value;
                            setDependents(value);
                            field.onChange(Number(value) || "");
                          }}
                          className={inputClass}
                        />
                      )}
                    />
                  </div>
                  {errors.otherDependents && (
                    <p className="text-red-500 text-sm">
                      {errors.otherDependents.message}
                    </p>
                  )}
                </div>

                <div>
                  <label className="text-white mb-1 block">Amount</label>
                  <p className="bg-gray-800 p-2 rounded">${dependentsAmount}</p>
                </div>
              </div>

              {/* Total */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
                <div>
                  <label className="text-white mb-1 block">Total Amount</label>
                  <p className="bg-green-700 p-2 rounded font-semibold">
                    ${totalAmount}
                  </p>
                </div>
              </div>
            </div>
            {/* Step 4 Info */}
            <p className="text-[32px] font-bold mt-8">Step 4 :</p>
            <div className="border-2 w-32 mb-5"></div>
            <p>
              Other income (not from jobs). If you want tax withheld for other
              income you expect this year that won't have withholding, enter the
              amount of other income here. This may include interest, dividends,
              and retirement income.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4 mt-4">
              <div>
                <label className="text-white mb-1 block">Amount</label>
                <div className={inputWrapperClass}>
                  <input
                    type="number"
                    placeholder="Enter Other Income"
                    {...register("otherIncome", {
                      min: { value: 0, message: "Cannot be negative" },
                    })}
                    className={inputClass}
                  />
                </div>
                {errors.otherIncome && (
                  <p className="text-red-500 text-sm">
                    {errors.otherIncome.message}
                  </p>
                )}
              </div>
            </div>
            <p>
              Other income (not from jobs). If you want tax withheld for other
              income you expect this year that won't have withholding, enter the
              amount of other income here. This may include interest, dividends,
              and retirement income.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4 mt-4">
              <div>
                <label className="text-white mb-1 block">Amount</label>
                <div className={inputWrapperClass}>
                  <input
                    type="number"
                    placeholder="Enter Other Income"
                    {...register("otherIncome2", {
                      min: { value: 0, message: "Cannot be negative" },
                    })}
                    className={inputClass}
                  />
                </div>
                {errors.otherIncome2 && (
                  <p className="text-red-500 text-sm">
                    {errors.otherIncome2.message}
                  </p>
                )}
              </div>
            </div>
            <p>
              Other income (not from jobs). If you want tax withheld for other
              income you expect this year that won't have withholding, enter the
              amount of other income here. This may include interest, dividends,
              and retirement income.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4 mt-4">
              <div>
                <label className="text-white mb-1 block">Amount</label>
                <div className={inputWrapperClass}>
                  <input
                    type="number"
                    placeholder="Enter Other Income"
                    {...register("otherIncome3", {
                      min: { value: 0, message: "Cannot be negative" },
                    })}
                    className={inputClass}
                  />
                </div>
                {errors.otherIncome3 && (
                  <p className="text-red-500 text-sm">
                    {errors.otherIncome3.message}
                  </p>
                )}
              </div>
            </div>
            {/* Employee Signature and date */}
            <div className="grid grid-cols-1 sm:grid-cols-3 mb-4">
              <div>
                <label className="block mb-2">
                  Employee Signature <span className="text-red-500">*</span>
                </label>
                <div className="w-[350px] h-[50px] bg-gradient-to-l from-[#D4BFB2] to-[#8D6851] rounded-md mt-1 flex items-center justify-center">
                  <label className="w-full h-full flex items-center justify-center text-white cursor-pointer">
                    <span className="text-center">Upload Signature</span>
                    <input
                      type="file"
                      accept="image/*"
                      {...register("employeeSignature", {
                        required: "Signature is required",
                      })}
                      className="hidden"
                      onChange={handleFileChange}
                    />
                  </label>
                </div>
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
                  <p className="text-red-500 text-sm">
                    {errors.employeeSignature.message}
                  </p>
                )}
              </div>

              <div>
                <label className="mb-1 block">
                  Date <span className="text-red-500">*</span>
                </label>
                <div className={inputWrapperClass}>
                  <input
                    type="date"
                    {...register("signDate", { required: "Date is required" })}
                    className={inputClass}
                  />
                </div>
                {errors.signDate && (
                  <p className="text-red-500 text-sm">
                    {errors.signDate.message}
                  </p>
                )}
              </div>
            </div>
            <div className="flex justify-center mt-6 gap-4">
              <button
                type="button"
                onClick={prevStep}
                className="px-6 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-700"
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
    </div>
  );
};

export default W4Form;
