// import React, { useState, useCallback } from "react";
// import { useForm } from "react-hook-form";
// import ProgressBar from "../../progressBar/ProgressBar";
// import { FaHome } from "react-icons/fa";
// import { CiCircleCheck, CiCircleInfo } from "react-icons/ci";
// import { Upload } from "lucide-react";

// // সাধারণ Button কম্পোনেন্ট
// const Button = ({ type = "button", className, onClick, children }) => (
//   <button
//     type={type}
//     onClick={onClick}
//     className={`px-6 py-2 rounded-md font-medium ${className}`}
//   >
//     {children}
//   </button>
// );

// const TempSelectCitizenShip = ({ prevStep, step }) => {
//   const [selectedJobType, setSelectedJobType] = useState(""); // কোন citizenship select হয়েছে
//   const totalSteps = 12;

//   const {
//     register,
//     handleSubmit,
//     setValue,
//     // watch,
//     formState: { errors },
//   } = useForm({
//     defaultValues: {
//       documents: null,
//       employeeSignature: null,
//     },
//   });

//   // const watchedFiles = watch("documents");
//   const [isDragOver, setIsDragOver] = useState(false);

//   const onSubmit = (data) => {
//     console.log("Form submitted:", data);
//   };

//   const handleSelection = (type) => {
//     setSelectedJobType(type);
//   };

//   // Drag-drop handlers
//   const handleDragOver = useCallback((e) => {
//     e.preventDefault();
//     setIsDragOver(true);
//   }, []);
//   const handleDragLeave = useCallback((e) => {
//     e.preventDefault();
//     setIsDragOver(false);
//   }, []);
//   const handleDrop = useCallback(
//     (e) => {
//       e.preventDefault();
//       setIsDragOver(false);

//       const files = e.dataTransfer.files;
//       if (files.length > 0) {
//         const dt = new DataTransfer();
//         Array.from(files).forEach((file) => dt.items.add(file));
//         setValue("documents", dt.files);
//       }
//     },
//     [setValue]
//   );

//   const handleFileSelect = (e) => {
//     const files = e.target.files;
//     if (files) {
//       setValue("documents", files);
//     }
//   };

//   // ✅ Upload component আলাদা করে বানালাম
//   const UploadField = ({ label, name }) => (
//     <div className="mt-6">
//       <h1 className="text-lg font-medium text-white mb-2">{label}</h1>
//       <div
//         className={`relative border-2 border-dashed rounded-lg p-12 text-center transition-colors ${
//           isDragOver ? "border-[#8D6851] bg-gray-100" : "border-[#8D6851]"
//         }`}
//         onDragOver={handleDragOver}
//         onDragLeave={handleDragLeave}
//         onDrop={handleDrop}
//       >
//         <div className="mb-6">
//           <div className="w-16 h-16 mx-auto bg-[#201925] rounded-lg flex items-center justify-center">
//             <Upload className="w-8 h-8 text-[#8D6851]" />
//           </div>
//         </div>
//         <h2 className="text-xl font-semibold text-white mb-3">
//           Upload Documents
//         </h2>
//         <p className="text-gray-400 mb-6">
//           Drag and drop files here, or browse
//         </p>
//         <Button
//           type="button"
//           className="bg-[#8D6851] text-white"
//           onClick={() => document.getElementById(name)?.click()}
//         >
//           Choose File
//         </Button>
//         <input
//           id={name}
//           type="file"
//           multiple
//           accept=".jpg,.jpeg,.png,.pdf"
//           className="hidden"
//           {...register(name, { required: `${label} is required` })}
//           onChange={handleFileSelect}
//         />
//         <p className="text-sm text-gray-400 mt-2">
//           Supports JPG, PNG, PDF up to 10MB
//         </p>
//       </div>

//       {errors[name] && (
//         <p className="text-red-500 text-sm mt-2">{errors[name].message}</p>
//       )}
//     </div>
//   );

//   // ✅ Selection অনুযায়ী কোন কোন upload field দেখাবে
//   const renderUploadFields = () => {
//     if (selectedJobType === "Citizen") {
//       return (
//         <>
//           <UploadField
//             label="Add Documents - Photo I.D. (Driver's License, Passport) *"
//             name="photoId"
//           />
//           <UploadField
//             label="Add Documents - Social Security Card *"
//             name="ssn"
//           />
//         </>
//       );
//     }
//     if (selectedJobType === "Resident") {
//       return (
//         <>
//           <UploadField
//             label="Add Documents - Photo I.D. (Driver's License, Passport) *"
//             name="photoId"
//           />
//           <UploadField
//             label="Add Documents - Social Security Card *"
//             name="ssn"
//           />
//           <UploadField
//             label="Add Documents - Resident Card *"
//             name="residentCard"
//           />
//         </>
//       );
//     }
//     if (selectedJobType === "WorkAuth") {
//       return (
//         <>
//           <UploadField
//             label="Add Documents - Photo I.D. (Driver's License, Passport) *"
//             name="photoId"
//           />
//           <UploadField
//             label="Add Documents - Social Security Card *"
//             name="ssn"
//           />
//           <UploadField
//             label="Add Documents - Work Authorization Card/Document *"
//             name="workAuth"
//           />
//         </>
//       );
//     }
//     return null; // শুরুতে কিছু দেখাবে না
//   };
//   return (
//     <div className="text-white">
//       <div className="max-w-7xl mx-auto">
//         {/* Header */}
//         <div className="flex space-x-96 mb-4">
//           <div>
//             <div className="font-bold text-lg mb-2">CBYRAC, INC</div>
//             <div>123 MAIN STREET SUITE 100</div>
//             <div>ANYTOWN, STATE 12345</div>
//             <div>PHONE: 555-555-5555</div>
//             <div>EMAIL: info@cbyrac.com</div>
//           </div>
//           <div className="w-24 h-24 bg-white rounded">
//             <img src="/cbyrac-logo.png" alt="" />
//           </div>
//         </div>

//         {/* Title */}
//         <div className="text-center mb-8">
//           <h1 className="text-2xl font-bold mb-2">Employment Application</h1>
//           <p className="text-sm text-gray-300 mb-7">
//             Please fill all forms, signatures are not a substitute for a
//             completed application
//           </p>
//           <ProgressBar currentStep={step} totalSteps={totalSteps} />
//         </div>

//         <form onSubmit={handleSubmit(onSubmit)}>
//           <p className="text-[40px] font-bold text-center mt-12 mb-14">
//             Select Your Citizenship
//           </p>

//           {/* Citizenship buttons */}
//           <div className="flex justify-center gap-6">
//             <button
//               type="button"
//               className={`w-[250px] text-2xl h-[140px] rounded-lg ${
//                 selectedJobType === "Citizen"
//                   ? "bg-[#9e7c5e] border-2 border-white"
//                   : "bg-gradient-to-r from-[#8C6750] to-[#D4BFB2]"
//               }`}
//               onClick={() => handleSelection("Citizen")}
//             >
//               <div className="flex items-center justify-between text-2xl text-white px-6">
//                 <div className="text-3xl">
//                   <FaHome />
//                 </div>
//                 <CiCircleCheck />
//               </div>
//               <p className="text-start px-6 mt-8">Citizen</p>
//             </button>
//             <button
//               type="button"
//               className={`w-[250px] text-2xl h-[140px] rounded-lg ${
//                 selectedJobType === "Resident"
//                   ? "bg-[#9e7c5e] border-2 border-white"
//                   : "bg-gradient-to-r from-[#8C6750] to-[#D4BFB2]"
//               }`}
//               onClick={() => handleSelection("Resident")}
//             >
//               <div className="flex items-center justify-between text-2xl text-white px-6">
//                 <div className="text-3xl">
//                   <FaHome />
//                 </div>
//                 <CiCircleCheck />
//               </div>
//               <p className="text-start px-6 mt-8">Resident</p>
//             </button>
//             <button
//               type="button"
//               className={`w-[250px] text-2xl h-[140px] rounded-lg ${
//                 selectedJobType === "WorkAuth"
//                   ? "bg-[#9e7c5e] border-2 border-white"
//                   : "bg-gradient-to-r from-[#8C6750] to-[#D4BFB2]"
//               }`}
//               onClick={() => handleSelection("WorkAuth")}
//             >
//               <div className="flex items-center justify-between text-2xl text-white px-6">
//                 <div className="text-3xl">
//                   <FaHome />
//                 </div>
//                 <CiCircleCheck />
//               </div>
//               <p className="text-start px-4 mt-8">Work Authorization</p>
//             </button>
//           </div>

//           {/* Dynamic Upload Fields */}
//           <div className="max-w-2xl mx-auto mt-8">{renderUploadFields()}</div>

//           {/* Employee Signature */}
//           <div className="mb-6 mt-10">
//             <label className="text-white block mb-2">
//               Employee Signature *
//             </label>
//             <div className="w-[350px] h-[50px] bg-gradient-to-l from-[#D4BFB2] to-[#8D6851] rounded-md mt-1 flex items-center justify-center">
//               <label className="w-full h-full flex items-center justify-center text-white cursor-pointer">
//                 <span className="text-center">Upload Signature</span>
//                 <input
//                   type="file"
//                   accept="image/*"
//                   {...register("employeeSignature", {
//                     required: "Signature is required",
//                   })}
//                   className="hidden"
//                 />
//               </label>
//             </div>
//             {errors.employeeSignature && (
//               <p className="text-red-500 text-sm">
//                 {errors.employeeSignature.message}
//               </p>
//             )}
//           </div>

//           {/* Submit Buttons */}
//           <div className="mt-9 flex justify-center">
//             <Button
//               type="submit"
//               className="w-80 py-3.5 bg-[#8D6851] text-white"
//             >
//               Submit Application
//             </Button>
//           </div>
//           <div className="mt-6 flex justify-center">
//             <Button
//               type="submit"
//               className="w-80 py-3.5 border-2 border-[#8D6851] hover:bg-blue-300 text-white"
//             >
//               See Your Application
//             </Button>
//           </div>
//           <div className="flex items-center max-w-2xl mx-auto gap-2 mt-8 text-gray-300">
//             <CiCircleInfo className="text-3xl text-[#F4E53D]" />{" "}
//             <div>
//               <p className="text-sm mt-3.5">
//                 You will need to review your application carefully, and if you
//                 agree with everything, click on 'Agree'
//               </p>
//               <p className="text-sm text-center">
//                 proceed. Only then will you be able to submit your application.{" "}
//               </p>
//             </div>
//           </div>
//         </form>

//         <div className="flex justify-end mt-6 gap-4">
//           <button
//             type="button"
//             onClick={prevStep}
//             className="px-6 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-700"
//           >
//             Previous
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TempSelectCitizenShip;

// import React, { useState, useCallback } from "react";
// import { useForm } from "react-hook-form";
// import ProgressBar from "../../progressBar/ProgressBar";
// import { FaHome } from "react-icons/fa";
// import { CiCircleCheck, CiCircleInfo } from "react-icons/ci";
// import { Upload } from "lucide-react";

// // Button Component
// const Button = ({ type = "button", className, onClick, children }) => (
//   <button
//     type={type}
//     onClick={onClick}
//     className={`px-6 py-2 rounded-md font-medium ${className}`}
//   >
//     {children}
//   </button>
// );

// const TempSelectCitizenShip = ({ prevStep, nextStep, step }) => {
//   const [selectedJobType, setSelectedJobType] = useState("");
//   const totalSteps = 12;

//   const {
//     register,
//     handleSubmit,
//     setValue,
//     formState: { errors },
//   } = useForm({
//     defaultValues: {
//       citizenship: "",
//       photoId: null,
//       ssn: null,
//       residentCard: null,
//       workAuth: null,
//       employeeSignature: null,
//     },
//   });

//   const [isDragOver, setIsDragOver] = useState(false);

//   // Handle citizenship selection and update form value
//   const handleSelection = useCallback(
//     (type) => {
//       setSelectedJobType(type);
//       setValue("citizenship", type, { shouldValidate: true });
//     },
//     [setValue]
//   );

//   // Handle next step navigation with validation
//   const handleNext = (data) => {
//     console.log("Form Data:", data);
//     nextStep();
//   };

//   // Drag-drop handlers
//   const handleDragOver = useCallback((e) => {
//     e.preventDefault();
//     setIsDragOver(true);
//   }, []);

//   const handleDragLeave = useCallback((e) => {
//     e.preventDefault();
//     setIsDragOver(false);
//   }, []);

//   const handleDrop = useCallback(
//     (e, name) => {
//       e.preventDefault();
//       setIsDragOver(false);
//       const files = e.dataTransfer.files;
//       if (files.length > 0) {
//         const dt = new DataTransfer();
//         Array.from(files).forEach((file) => dt.items.add(file));
//         setValue(name, dt.files, { shouldValidate: true });
//       }
//     },
//     [setValue]
//   );

//   const handleFileSelect = (e, name) => {
//     const files = e.target.files;
//     if (files) {
//       setValue(name, files, { shouldValidate: true });
//     }
//   };

//   // Upload Field Component
//   const UploadField = ({ label, name }) => (
//     <div className="mt-6">
//       <h1 className="text-lg font-medium text-white mb-2">
//         {label} <span className="text-red-500">*</span>
//       </h1>
//       <div
//         className={`relative border-2 border-dashed rounded-lg p-12 text-center transition-colors ${
//           isDragOver ? "border-[#8D6851] bg-gray-100" : "border-[#8D6851]"
//         }`}
//         onDragOver={handleDragOver}
//         onDragLeave={handleDragLeave}
//         onDrop={(e) => handleDrop(e, name)}
//       >
//         <div className="mb-6">
//           <div className="w-16 h-16 mx-auto bg-[#201925] rounded-lg flex items-center justify-center">
//             <Upload className="w-8 h-8 text-[#8D6851]" />
//           </div>
//         </div>
//         <h2 className="text-xl font-semibold text-white mb-3">
//           Upload Documents
//         </h2>
//         <p className="text-gray-400 mb-6">
//           Drag and drop files here, or browse
//         </p>
//         <Button
//           type="button"
//           className="bg-[#8D6851] text-white"
//           onClick={() => document.getElementById(name)?.click()}
//         >
//           Choose File
//         </Button>
//         <input
//           id={name}
//           type="file"
//           multiple
//           accept=".jpg,.jpeg,.png,.pdf"
//           className="hidden"
//           {...register(name, { required: `${label} is required` })}
//           onChange={(e) => handleFileSelect(e, name)}
//         />
//         <p className="text-sm text-gray-400 mt-2">
//           Supports JPG, PNG, PDF up to 10MB
//         </p>
//       </div>
//       {errors[name] && (
//         <p className="text-red-500 text-sm mt-2">{errors[name].message}</p>
//       )}
//     </div>
//   );

//   // Render upload fields based on citizenship selection
//   const renderUploadFields = () => {
//     if (selectedJobType === "Citizen") {
//       return (
//         <>
//           <UploadField
//             label="Photo I.D. (Driver's License, Passport)"
//             name="photoId"
//           />
//           <UploadField label="Social Security Card" name="ssn" />
//         </>
//       );
//     }
//     if (selectedJobType === "Resident") {
//       return (
//         <>
//           <UploadField
//             label="Photo I.D. (Driver's License, Passport)"
//             name="photoId"
//           />
//           <UploadField label="Social Security Card" name="ssn" />
//           <UploadField label="Resident Card" name="residentCard" />
//         </>
//       );
//     }
//     if (selectedJobType === "WorkAuth") {
//       return (
//         <>
//           <UploadField
//             label="Photo I.D. (Driver's License, Passport)"
//             name="photoId"
//           />
//           <UploadField label="Social Security Card" name="ssn" />
//           <UploadField
//             label="Work Authorization Card/Document"
//             name="workAuth"
//           />
//         </>
//       );
//     }
//     return null;
//   };

//   return (
//     <div className="text-white">
//       <div className="max-w-7xl mx-auto">
//         {/* Header */}
//         <div className="flex space-x-96 mb-4">
//           <div>
//             <div className="font-bold text-lg mb-2">CBYRAC, INC</div>
//             <div>123 MAIN STREET SUITE 100</div>
//             <div>ANYTOWN, STATE 12345</div>
//             <div>PHONE: 555-555-5555</div>
//             <div>EMAIL: info@cbyrac.com</div>
//           </div>
//           <div className="w-24 h-24 bg-white rounded">
//             <img src="/cbyrac-logo.png" alt="Company Logo" />
//           </div>
//         </div>

//         {/* Title */}
//         <div className="text-center mb-8">
//           <h1 className="text-2xl font-bold mb-2">Employment Application</h1>
//           <p className="text-sm text-gray-300 mb-7">
//             Please fill all forms, signatures are not a substitute for a
//             completed application
//           </p>
//           <ProgressBar currentStep={step} totalSteps={totalSteps} />
//         </div>

//         <form onSubmit={handleSubmit(handleNext)}>
//           <p className="text-[40px] font-bold text-center mt-12 mb-14">
//             Select Your Citizenship <span className="text-red-500">*</span>
//           </p>

//           {/* Citizenship buttons */}
//           <div className="flex justify-center gap-6">
//             <button
//               type="button"
//               className={`w-[250px] text-2xl h-[140px] rounded-lg ${
//                 selectedJobType === "Citizen"
//                   ? "bg-[#9e7c5e] border-2 border-white"
//                   : "bg-gradient-to-r from-[#8C6750] to-[#D4BFB2]"
//               }`}
//               onClick={() => handleSelection("Citizen")}
//             >
//               <div className="flex items-center justify-between text-2xl text-white px-6">
//                 <div className="text-3xl">
//                   <FaHome />
//                 </div>
//                 <CiCircleCheck />
//               </div>
//               <p className="text-start px-6 mt-8">Citizen</p>
//             </button>
//             <button
//               type="button"
//               className={`w-[250px] text-2xl h-[140px] rounded-lg ${
//                 selectedJobType === "Resident"
//                   ? "bg-[#9e7c5e] border-2 border-white"
//                   : "bg-gradient-to-r from-[#8C6750] to-[#D4BFB2]"
//               }`}
//               onClick={() => handleSelection("Resident")}
//             >
//               <div className="flex items-center justify-between text-2xl text-white px-6">
//                 <div className="text-3xl">
//                   <FaHome />
//                 </div>
//                 <CiCircleCheck />
//               </div>
//               <p className="text-start px-6 mt-8">Resident</p>
//             </button>
//             <button
//               type="button"
//               className={`w-[250px] text-2xl h-[140px] rounded-lg ${
//                 selectedJobType === "WorkAuth"
//                   ? "bg-[#9e7c5e] border-2 border-white"
//                   : "bg-gradient-to-r from-[#8C6750] to-[#D4BFB2]"
//               }`}
//               onClick={() => handleSelection("WorkAuth")}
//             >
//               <div className="flex items-center justify-between text-2xl text-white px-6">
//                 <div className="text-3xl">
//                   <FaHome />
//                 </div>
//                 <CiCircleCheck />
//               </div>
//               <p className="text-start px-4 mt-8">Work Authorization</p>
//             </button>
//           </div>
//           {errors.citizenship && (
//             <p className="text-red-500 text-sm text-center mt-4">
//               {errors.citizenship.message}
//             </p>
//           )}

//           {/* Hidden input for citizenship validation */}
//           <input
//             type="hidden"
//             {...register("citizenship", {
//               required: "Citizenship selection is required",
//             })}
//           />

//           {/* Dynamic Upload Fields */}
//           <div className="max-w-2xl mx-auto mt-8">{renderUploadFields()}</div>

//           {/* Employee Signature */}
//           <div className="mb-6 mt-10 max-w-2xl mx-auto">
//             <label className="text-white block mb-2">
//               Employee Signature <span className="text-red-500">*</span>
//             </label>
//             <div className="w-[350px] h-[50px] bg-gradient-to-l from-[#D4BFB2] to-[#8D6851] rounded-md mt-1 flex items-center justify-center">
//               <label className="w-full h-full flex items-center justify-center text-white cursor-pointer">
//                 <span className="text-center">Upload Signature</span>
//                 <input
//                   type="file"
//                   accept="image/*"
//                   {...register("employeeSignature", {
//                     required: "Signature is required",
//                   })}
//                   className="hidden"
//                 />
//               </label>
//             </div>
//             {errors.employeeSignature && (
//               <p className="text-red-500 text-sm">
//                 {errors.employeeSignature.message}
//               </p>
//             )}
//           </div>

//           {/* Navigation Buttons */}
//           <div className="flex justify-center mt-6 gap-4">
//             <Button
//               type="button"
//               onClick={prevStep}
//               className="px-6 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-700"
//             >
//               Previous
//             </Button>
//             <Button
//               type="button"
//               onClick={handleSubmit(handleNext)}
//               className="px-6 py-2 bg-gradient-to-r from-[#8D6851] to-[#D3BFB2] text-white rounded-md hover:opacity-90"
//             >
//               Next
//             </Button>
//           </div>

//           {/* Info Section */}
//           <div className="flex items-center max-w-2xl mx-auto gap-2 mt-8 text-gray-300">
//             <CiCircleInfo className="text-3xl text-[#F4E53D]" />
//             <div>
//               <p className="text-sm mt-3.5">
//                 You will need to review your application carefully, and if you
//                 agree with everything, click on 'Next' to proceed.
//               </p>
//               <p className="text-sm text-center">
//                 Only then will you be able to continue your application.
//               </p>
//             </div>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default TempSelectCitizenShip;

import React, { useState, useCallback } from "react";
import { useForm } from "react-hook-form";
import ProgressBar from "../../progressBar/ProgressBar";
import { FaHome } from "react-icons/fa";
import { CiCircleCheck, CiCircleInfo } from "react-icons/ci";
import { Upload } from "lucide-react";

// Button Component
const Button = ({ type = "button", className, onClick, children }) => (
  <button
    type={type}
    onClick={onClick}
    className={`px-6 py-2 rounded-md font-medium ${className}`}
  >
    {children}
  </button>
);

const TempSelectCitizenShip = ({ prevStep, nextStep, step }) => {
  const [selectedJobType, setSelectedJobType] = useState("");
  const totalSteps = 12;

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    defaultValues: {
      citizenship: "",
      photoId: null,
      ssn: null,
      residentCard: null,
      workAuth: null,
      employeeSignature: null,
    },
  });

  const [isDragOver, setIsDragOver] = useState(false);

  // Handle citizenship selection and update form value
  const handleSelection = useCallback(
    (type) => {
      setSelectedJobType(type);
      setValue("citizenship", type, { shouldValidate: true });
      // Clear document fields when switching selection
      setValue("photoId", null, { shouldValidate: true });
      setValue("ssn", null, { shouldValidate: true });
      setValue("residentCard", null, { shouldValidate: true });
      setValue("workAuth", null, { shouldValidate: true });
    },
    [setValue]
  );

  // Handle next step navigation with validation
  const handleNext = (data) => {
    console.log("Form Data:", data);
    nextStep();
  };

  // Drag-drop handlers
  const handleDragOver = useCallback((e) => {
    e.preventDefault();
    setIsDragOver(true);
  }, []);

  const handleDragLeave = useCallback((e) => {
    e.preventDefault();
    setIsDragOver(false);
  }, []);

  const handleDrop = useCallback(
    (e, name, setPreviews) => {
      e.preventDefault();
      setIsDragOver(false);
      const files = e.dataTransfer.files;
      if (files.length > 0) {
        const dt = new DataTransfer();
        Array.from(files).forEach((file) => dt.items.add(file));
        setValue(name, dt.files, { shouldValidate: true });
        setPreviews(
          Array.from(files).map((file) => ({
            url: URL.createObjectURL(file),
            type: file.type,
          }))
        );
      }
    },
    [setValue]
  );

  const handleFileSelect = (e, name, setPreviews) => {
    const files = e.target.files;
    if (files) {
      setValue(name, files, { shouldValidate: true });
      setPreviews(
        Array.from(files).map((file) => ({
          url: URL.createObjectURL(file),
          type: file.type,
        }))
      );
    }
  };

  // Upload Field Component
  const UploadField = ({ label, name }) => {
    const [previews, setPreviews] = useState([]);

    return (
      <div className="mt-6">
        <h1 className="text-lg font-medium text-white mb-2">
          {label} <span className="text-red-500">*</span>
        </h1>
        <div
          className={`relative border-2 border-dashed rounded-lg p-12 text-center transition-colors ${
            isDragOver ? "border-[#8D6851] bg-gray-100" : "border-[#8D6851]"
          }`}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={(e) => handleDrop(e, name, setPreviews)}
        >
          <div className="mb-6">
            <div className="w-16 h-16 mx-auto bg-[#201925] rounded-lg flex items-center justify-center">
              <Upload className="w-8 h-8 text-[#8D6851]" />
            </div>
          </div>
          <h2 className="text-xl font-semibold text-white mb-3">
            Upload Documents
          </h2>
          <p className="text-gray-400 mb-6">
            Drag and drop files here, or browse
          </p>
          <Button
            type="button"
            className="bg-[#8D6851] text-white"
            onClick={() => document.getElementById(name)?.click()}
          >
            Choose File
          </Button>
          <input
            id={name}
            type="file"
            multiple
            accept=".jpg,.jpeg,.png,.pdf"
            className="hidden"
            {...register(name, { required: `${label} is required` })}
            onChange={(e) => handleFileSelect(e, name, setPreviews)}
          />
          <p className="text-sm text-gray-400 mt-2">
            Supports JPG, PNG, PDF up to 10MB
          </p>
        </div>
        {errors[name] && (
          <p className="text-red-500 text-sm mt-2">{errors[name].message}</p>
        )}
        {/* Preview Section */}
        {previews.length > 0 && (
          <div className="mt-4">
            <h3 className="text-white mb-2">Previews:</h3>
            {previews.map((preview, index) => (
              <div key={index} className="mb-4">
                {preview.type === "application/pdf" ? (
                  <iframe
                    src={preview.url}
                    width="100%"
                    height="300"
                    title={`PDF Preview ${index + 1}`}
                  />
                ) : (
                  <img
                    src={preview.url}
                    alt={`Preview ${index + 1}`}
                    className="max-w-full h-auto"
                  />
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    );
  };

  // Render upload fields based on citizenship selection
  const renderUploadFields = () => {
    if (selectedJobType === "Citizen") {
      return (
        <>
          <UploadField
            label="Photo I.D. (Driver's License, Passport)"
            name="photoId"
          />
          <UploadField label="Social Security Card" name="ssn" />
        </>
      );
    }
    if (selectedJobType === "Resident") {
      return (
        <>
          <UploadField
            label="Photo I.D. (Driver's License, Passport)"
            name="photoId"
          />
          <UploadField label="Social Security Card" name="ssn" />
          <UploadField label="Resident Card" name="residentCard" />
        </>
      );
    }
    if (selectedJobType === "WorkAuth") {
      return (
        <>
          <UploadField
            label="Photo I.D. (Driver's License, Passport)"
            name="photoId"
          />
          <UploadField label="Social Security Card" name="ssn" />
          <UploadField
            label="Work Authorization Card/Document"
            name="workAuth"
          />
        </>
      );
    }
    return null;
  };

  return (
    <div className="text-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex space-x-96 mb-4">
          <div>
            <div className="font-bold text-lg mb-2">CBYRAC, INC</div>
            <div>123 MAIN STREET SUITE 100</div>
            <div>ANYTOWN, STATE 12345</div>
            <div>PHONE: 555-555-5555</div>
            <div>EMAIL: info@cbyrac.com</div>
          </div>
          <div className="w-24 h-24 bg-white rounded">
            <img src="/cbyrac-logo.png" alt="Company Logo" />
          </div>
        </div>

        {/* Title */}
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold mb-2">Employment Application</h1>
          <p className="text-sm text-gray-300 mb-7">
            Please fill all forms, signatures are not a substitute for a
            completed application
          </p>
          <ProgressBar currentStep={step} totalSteps={totalSteps} />
        </div>

        <form onSubmit={handleSubmit(handleNext)}>
          <p className="text-[40px] font-bold text-center mt-12 mb-14">
            Select Your Citizenship <span className="text-red-500">*</span>
          </p>

          {/* Citizenship buttons */}
          <div className="flex justify-center gap-6">
            <button
              type="button"
              className={`w-[250px] text-2xl h-[140px] rounded-lg ${
                selectedJobType === "Citizen"
                  ? "bg-[#9e7c5e] border-2 border-white"
                  : "bg-gradient-to-r from-[#8C6750] to-[#D4BFB2]"
              }`}
              onClick={() => handleSelection("Citizen")}
            >
              <div className="flex items-center justify-between text-2xl text-white px-6">
                <div className="text-3xl">
                  <FaHome />
                </div>
                <CiCircleCheck />
              </div>
              <p className="text-start px-6 mt-8">Citizen</p>
            </button>
            <button
              type="button"
              className={`w-[250px] text-2xl h-[140px] rounded-lg ${
                selectedJobType === "Resident"
                  ? "bg-[#9e7c5e] border-2 border-white"
                  : "bg-gradient-to-r from-[#8C6750] to-[#D4BFB2]"
              }`}
              onClick={() => handleSelection("Resident")}
            >
              <div className="flex items-center justify-between text-2xl text-white px-6">
                <div className="text-3xl">
                  <FaHome />
                </div>
                <CiCircleCheck />
              </div>
              <p className="text-start px-6 mt-8">Resident</p>
            </button>
            <button
              type="button"
              className={`w-[250px] text-2xl h-[140px] rounded-lg ${
                selectedJobType === "WorkAuth"
                  ? "bg-[#9e7c5e] border-2 border-white"
                  : "bg-gradient-to-r from-[#8C6750] to-[#D4BFB2]"
              }`}
              onClick={() => handleSelection("WorkAuth")}
            >
              <div className="flex items-center justify-between text-2xl text-white px-6">
                <div className="text-3xl">
                  <FaHome />
                </div>
                <CiCircleCheck />
              </div>
              <p className="text-start px-4 mt-8">Work Authorization</p>
            </button>
          </div>
          {errors.citizenship && (
            <p className="text-red-500 text-sm text-center mt-4">
              {errors.citizenship.message}
            </p>
          )}

          {/* Hidden input for citizenship validation */}
          <input
            type="hidden"
            {...register("citizenship", {
              required: "Citizenship selection is required",
            })}
          />

          {/* Dynamic Upload Fields */}
          <div className="max-w-2xl mx-auto mt-8">{renderUploadFields()}</div>

          {/* Employee Signature */}
          <div className="mb-6 mt-10 max-w-2xl mx-auto">
            <label className="text-white block mb-2">
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
                />
              </label>
            </div>
            {errors.employeeSignature && (
              <p className="text-red-500 text-sm">
                {errors.employeeSignature.message}
              </p>
            )}
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-center mt-6 gap-4">
            <Button
              type="button"
              onClick={prevStep}
              className="px-6 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-700"
            >
              Previous
            </Button>
            <Button
              type="button"
              onClick={handleSubmit(handleNext)}
              className="px-6 py-2 bg-gradient-to-r from-[#8D6851] to-[#D3BFB2] text-white rounded-md hover:opacity-90"
            >
              Next
            </Button>
          </div>

          {/* Info Section */}
          <div className="flex items-center max-w-2xl mx-auto gap-2 mt-8 text-gray-300">
            <CiCircleInfo className="text-3xl text-[#F4E53D]" />
            <div>
              <p className="text-sm mt-3.5">
                You will need to review your application carefully, and if you
                agree with everything, click on 'Next' to proceed.
              </p>
              <p className="text-sm text-center">
                Only then will you be able to continue your application.
              </p>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TempSelectCitizenShip;
