// // import { useForm } from "react-hook-form";
// import ProgressBar from "../../progressBar/ProgressBar";
// import { IoPeopleOutline } from "react-icons/io5";
// import { CiCircleCheck } from "react-icons/ci";
// import { useForm } from "react-hook-form";
// import { useState } from "react";
// const WorkExperienceForm = ({ prevStep, nextStep }) => {
//   const [step, setStep] = useState(1);
//   const totalSteps = 12; // total number of steps for progress bar

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
//       console.log("Submit temp apply form :", allData);
//       nextStep(); // Next Step

//       setStep((prev) => prev + 1);
//     } else {
//       // Errors exist, stay on current step
//       console.log("Validation errors:", errors);
//     }
//   };

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
//             <h1 className="text-2xl font-bold mb-2">Employment Application</h1>
//             <p className="text-sm text-gray-300 mb-7">
//               Please fill all forms. Resumes are not a substitute for a
//               completed application
//             </p>
//             {/* progressbar */}
//             <ProgressBar currentStep={step} totalSteps={totalSteps} />
//           </div>

//           <form
//             onSubmit={handleSubmit(onSubmit)}
//             className="rounded-2xl  max-w-7xl mx-auto"
//           >
//             {/* Step 2 Info */}
//             <div>
//               <p className="text-[32px] font-bold mt-8 ">Work Experience</p>
//               <div className="border-2 w-66 mb-5"></div>
//               <p className="text-lg mb-4">
//                 List your present and past employers from the last 10 years,
//                 starting with the most recent. Include firm name and references
//                 if self-employed. You may also add verified volunteer work,
//                 internships, or military service. Incomplete responses may
//                 disqualify your application.
//               </p>
//             </div>

//             {/* Employer 1 Info */}
//             <p className="text-[32px] font-bold mt-8 ">Employer 1</p>
//             <div className="border-2 w-44 mb-5"></div>
//             <div className="mb-4">
//               <label className="text-white mb-1 block">
//                 Name <span className="text-red-500">*</span>
//               </label>
//               <div className={inputWrapperClass}>
//                 <input
//                   type="text"
//                   placeholder="Enter Employer Name *"
//                   {...register("employer1_name", {
//                     required: "Employer 1 name is required",
//                   })}
//                   className={inputClass}
//                 />
//               </div>
//               {errors.employer1_name && (
//                 <p className="text-red-500 text-sm">
//                   {errors.employer1_name.message}
//                 </p>
//               )}
//             </div>
//             <div className="mb-4">
//               <label className="text-white mb-1 block">
//                 Address <span className="text-red-500">*</span>
//               </label>
//               <div className={inputWrapperClass}>
//                 <input
//                   type="text"
//                   placeholder="City Or Town ,State, ZIP"
//                   {...register("employer1_address", {
//                     required: "Employer 1 address is required",
//                   })}
//                   className={inputClass}
//                 />
//               </div>
//               {errors.employer1_address && (
//                 <p className="text-red-500 text-sm">
//                   {errors.employer1_address.message}
//                 </p>
//               )}
//             </div>
//             <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
//               <div>
//                 <label className="text-white mb-1 block">
//                   Telephone <span className="text-red-500">*</span>
//                 </label>
//                 <div className={inputWrapperClass}>
//                   <input
//                     type="text"
//                     placeholder="Enter Telephone Number"
//                     {...register("employer1_telephone", {
//                       required: "Employer 1 telephone is required",
//                     })}
//                     className={inputClass}
//                   />
//                 </div>
//                 {errors.employer1_telephone && (
//                   <p className="text-red-500 text-sm">
//                     {errors.employer1_telephone.message}
//                   </p>
//                 )}
//               </div>

//               <div>
//                 <label className="text-white mb-1 block">
//                   Date Employed From <span className="text-red-500">*</span>
//                 </label>
//                 <div className={inputWrapperClass}>
//                   <input
//                     type="text"
//                     placeholder="MM-DD-YYYY"
//                     {...register("employer1_dateFrom", {
//                       required: "Start date is required",
//                     })}
//                     className={inputClass}
//                   />
//                 </div>
//                 {errors.employer1_dateFrom && (
//                   <p className="text-red-500 text-sm">
//                     {errors.employer1_dateFrom.message}
//                   </p>
//                 )}
//               </div>
//               <div>
//                 <label className="text-white mb-1 block">
//                   Date Employed To <span className="text-red-500">*</span>{" "}
//                 </label>
//                 <div className={inputWrapperClass}>
//                   <input
//                     type="text"
//                     placeholder="MM-DD-YYYY"
//                     {...register("employer1_dateTo", {
//                       required: "End date is required",
//                     })}
//                     className={inputClass}
//                   />
//                 </div>
//                 {errors.employer1_dateTo && (
//                   <p className="text-red-500 text-sm">
//                     {errors.employer1_dateTo.message}
//                   </p>
//                 )}
//               </div>
//             </div>
//             <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
//               <div>
//                 <label className="text-white mb-1 block">
//                   Job Title <span className="text-red-500">*</span>
//                 </label>
//                 <div className={inputWrapperClass}>
//                   <input
//                     type="text"
//                     placeholder="Enter Job Title"
//                     {...register("employer1_jobTitle", {
//                       required: "Job title is required",
//                     })}
//                     className={inputClass}
//                   />
//                 </div>
//                 {errors.employer1_jobTitle && (
//                   <p className="text-red-500 text-sm">
//                     {errors.employer1_jobTitle.message}
//                   </p>
//                 )}
//               </div>

//               <div>
//                 <label className="text-white mb-1 block">
//                   Duties <span className="text-red-500">*</span>
//                 </label>
//                 <div className={inputWrapperClass}>
//                   <input
//                     type="text"
//                     placeholder="Enter Duty Name"
//                     {...register("employer1_duties", {
//                       required: "Duties are required",
//                     })}
//                     className={inputClass}
//                   />
//                 </div>
//                 {errors.employer1_duties && (
//                   <p className="text-red-500 text-sm">
//                     {errors.employer1_duties.message}
//                   </p>
//                 )}
//               </div>
//             </div>
//             <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
//               <div>
//                 <label className="text-white mb-1 block">
//                   Supervisor’s Name <span className="text-red-500">*</span>
//                 </label>
//                 <div className={inputWrapperClass}>
//                   <input
//                     type="text"
//                     placeholder="Enter Supervisor's Name"
//                     {...register("employer1_supervisor", {
//                       required: "Supervisor name is required",
//                     })}
//                     className={inputClass}
//                   />
//                 </div>
//                 {errors.employer1_supervisor && (
//                   <p className="text-red-500 text-sm">
//                     {errors.employer1_supervisor.message}
//                   </p>
//                 )}
//               </div>

//               <div>
//                 <label className="text-white mb-1 block">May We Contact</label>
//                 <div className={inputWrapperClass}>
//                   <select
//                     {...register("employer1_mayWeContact", {
//                       required: "This field is required",
//                     })}
//                     className={inputClass}
//                   >
//                     <option value="">Select</option>
//                     <option value="yes">Yes</option>
//                     <option value="no">No</option>
//                   </select>
//                 </div>
//                 {errors.employer1_mayWeContact && (
//                   <p className="text-red-500 text-sm">
//                     {errors.employer1_mayWeContact.message}
//                   </p>
//                 )}
//               </div>
//             </div>
//             <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
//               <div>
//                 <label className="text-white mb-1 block">
//                   Wages Start <span className="text-red-500">*</span>
//                 </label>
//                 <div className={inputWrapperClass}>
//                   <input
//                     type="text"
//                     placeholder="Enter Wages Start"
//                     {...register("employer1_wagesStart", {
//                       required: "Wages start is required",
//                     })}
//                     className={inputClass}
//                   />
//                 </div>
//                 {errors.employer1_wagesStart && (
//                   <p className="text-red-500 text-sm">
//                     {errors.employer1_wagesStart.message}
//                   </p>
//                 )}
//               </div>

//               <div>
//                 <label className="text-white mb-1 block">
//                   Final <span className="text-red-500">*</span>
//                 </label>
//                 <div className={inputWrapperClass}>
//                   <input
//                     type="text"
//                     placeholder="Enter "
//                     {...register("employer1_final", {
//                       required: "Final wage is required",
//                     })}
//                     className={inputClass}
//                   />
//                 </div>
//                 {errors.employer1_final && (
//                   <p className="text-red-500 text-sm">
//                     {errors.employer1_final.message}
//                   </p>
//                 )}
//               </div>
//               <div>
//                 <label className="text-white mb-1 block">
//                   Reason for Leaving?
//                 </label>
//                 <div className={inputWrapperClass}>
//                   <input
//                     type="text"
//                     placeholder="Reason for leaving"
//                     {...register("employer1_reasonLeaving")}
//                     className={inputClass}
//                   />
//                 </div>
//               </div>
//             </div>
//             <div>
//               <div className="mb-4">
//                 <label className="text-white mb-2 block">
//                   What will this employer say was the reason your employment
//                   terminated?
//                 </label>
//                 <div className={inputWrapperClass}>
//                   <input
//                     type="text"
//                     placeholder="Enter Your Answer "
//                     {...register("employer1_terminationReason")}
//                     className={inputClass}
//                   />
//                 </div>
//               </div>
//               <div className="mb-4">
//                 <label className="text-white mb-1 block">
//                   Were you ever disciplined? If so, for what?
//                 </label>
//                 <div className={inputWrapperClass}>
//                   <input
//                     type="text"
//                     placeholder="Enter Your Answer "
//                     {...register("employer1_disciplinary")}
//                     className={inputClass}
//                   />
//                 </div>
//               </div>
//               <div className="mb-4">
//                 <label className="text-white mb-1 block">
//                   How much notice did you give when resigning? If none, explain.
//                 </label>
//                 <div className={inputWrapperClass}>
//                   <input
//                     type="text"
//                     placeholder="Enter Your Answer "
//                     {...register("employer1_noticeGiven")}
//                     className={inputClass}
//                   />
//                 </div>
//               </div>
//             </div>
//             {/* Employer 2 Info */}
//             <p className="text-[32px] font-bold mt-8 ">Employer 2</p>
//             <div className="border-2 w-44 mb-5"></div>
//             <div>
//               <label className="text-white mb-1 block">
//                 Name <span className="text-red-500">*</span>
//               </label>
//               <div className={inputWrapperClass}>
//                 <input
//                   type="text"
//                   placeholder="Enter Employer Name *"
//                   {...register("employer2_name", {
//                     required: "Employer 2 name is required",
//                   })}
//                   className={inputClass}
//                 />
//               </div>
//               {errors.employer2_name && (
//                 <p className="text-red-500 text-sm">
//                   {errors.employer2_name.message}
//                 </p>
//               )}
//             </div>
//             <div>
//               <label className="text-white mb-1 block">
//                 Address <span className="text-red-500">*</span>
//               </label>
//               <div className={inputWrapperClass}>
//                 <input
//                   type="text"
//                   placeholder="City Or Town ,State, ZIP"
//                   {...register("employer2_address", {
//                     required: "Employer 2 address is required",
//                   })}
//                   className={inputClass}
//                 />
//               </div>
//               {errors.employer2_address && (
//                 <p className="text-red-500 text-sm">
//                   {errors.employer2_address.message}
//                 </p>
//               )}
//             </div>
//             <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
//               <div>
//                 <label className="text-white mb-1 block">
//                   Telephone <span className="text-red-500">*</span>
//                 </label>
//                 <div className={inputWrapperClass}>
//                   <input
//                     type="text"
//                     placeholder="Enter Telephone Number"
//                     {...register("employer2_telephone", {
//                       required: "Employer 2 telephone is required",
//                     })}
//                     className={inputClass}
//                   />
//                 </div>
//                 {errors.employer2_telephone && (
//                   <p className="text-red-500 text-sm">
//                     {errors.employer2_telephone.message}
//                   </p>
//                 )}
//               </div>

//               <div>
//                 <label className="text-white mb-1 block">
//                   Date Employed From <span className="text-red-500">*</span>
//                 </label>
//                 <div className={inputWrapperClass}>
//                   <input
//                     type="text"
//                     placeholder="MM-DD-YYYY"
//                     {...register("employer2_dateFrom", {
//                       required: "Start date is required",
//                     })}
//                     className={inputClass}
//                   />
//                 </div>
//                 {errors.employer2_dateFrom && (
//                   <p className="text-red-500 text-sm">
//                     {errors.employer2_dateFrom.message}
//                   </p>
//                 )}
//               </div>
//               <div>
//                 <label className="text-white mb-1 block">
//                   Date Employed To <span className="text-red-500">*</span>{" "}
//                 </label>
//                 <div className={inputWrapperClass}>
//                   <input
//                     type="text"
//                     placeholder="MM-DD-YYYY"
//                     {...register("employer2_dateTo", {
//                       required: "End date is required",
//                     })}
//                     className={inputClass}
//                   />
//                 </div>
//                 {errors.employer2_dateTo && (
//                   <p className="text-red-500 text-sm">
//                     {errors.employer2_dateTo.message}
//                   </p>
//                 )}
//               </div>
//             </div>
//             <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
//               <div>
//                 <label className="text-white mb-1 block">
//                   Job Title <span className="text-red-500">*</span>
//                 </label>
//                 <div className={inputWrapperClass}>
//                   <input
//                     type="text"
//                     placeholder="Enter Job Title"
//                     {...register("employer2_jobTitle", {
//                       required: "Job title is required",
//                     })}
//                     className={inputClass}
//                   />
//                 </div>
//                 {errors.employer2_jobTitle && (
//                   <p className="text-red-500 text-sm">
//                     {errors.employer2_jobTitle.message}
//                   </p>
//                 )}
//               </div>

//               <div>
//                 <label className="text-white mb-1 block">
//                   Duties <span className="text-red-500">*</span>
//                 </label>
//                 <div className={inputWrapperClass}>
//                   <input
//                     type="text"
//                     placeholder="Enter Duty Name"
//                     {...register("employer2_duties", {
//                       required: "Duties are required",
//                     })}
//                     className={inputClass}
//                   />
//                 </div>
//                 {errors.employer2_duties && (
//                   <p className="text-red-500 text-sm">
//                     {errors.employer2_duties.message}
//                   </p>
//                 )}
//               </div>
//             </div>
//             <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
//               <div>
//                 <label className="text-white mb-1 block">
//                   Supervisor’s Name <span className="text-red-500">*</span>
//                 </label>
//                 <div className={inputWrapperClass}>
//                   <input
//                     type="text"
//                     placeholder="Enter Supervisor's Name"
//                     {...register("employer2_supervisor", {
//                       required: "Supervisor name is required",
//                     })}
//                     className={inputClass}
//                   />
//                 </div>
//                 {errors.employer2_supervisor && (
//                   <p className="text-red-500 text-sm">
//                     {errors.employer2_supervisor.message}
//                   </p>
//                 )}
//               </div>

//               <div>
//                 <label className="text-white mb-1 block">May We Contact</label>
//                 <div className={inputWrapperClass}>
//                   <select
//                     {...register("employer2_mayWeContact", {
//                       required: "This field is required",
//                     })}
//                     className={inputClass}
//                   >
//                     <option value="">Select</option>
//                     <option value="yes">Yes</option>
//                     <option value="no">No</option>
//                   </select>
//                 </div>
//                 {errors.employer2_mayWeContact && (
//                   <p className="text-red-500 text-sm">
//                     {errors.employer2_mayWeContact.message}
//                   </p>
//                 )}
//               </div>
//             </div>
//             <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
//               <div>
//                 <label className="text-white mb-1 block">
//                   Wages Start <span className="text-red-500">*</span>
//                 </label>
//                 <div className={inputWrapperClass}>
//                   <input
//                     type="text"
//                     placeholder="Enter Wages Start"
//                     {...register("employer2_wagesStart", {
//                       required: "Wages start is required",
//                     })}
//                     className={inputClass}
//                   />
//                 </div>
//                 {errors.employer2_wagesStart && (
//                   <p className="text-red-500 text-sm">
//                     {errors.employer2_wagesStart.message}
//                   </p>
//                 )}
//               </div>

//               <div>
//                 <label className="text-white mb-1 block">
//                   Final <span className="text-red-500">*</span>
//                 </label>
//                 <div className={inputWrapperClass}>
//                   <input
//                     type="text"
//                     placeholder="Enter "
//                     {...register("employer2_final", {
//                       required: "Final wage is required",
//                     })}
//                     className={inputClass}
//                   />
//                 </div>
//                 {errors.employer2_final && (
//                   <p className="text-red-500 text-sm">
//                     {errors.employer2_final.message}
//                   </p>
//                 )}
//               </div>
//               <div>
//                 <label className="text-white mb-1 block">
//                   Reason for Leaving?
//                 </label>
//                 <div className={inputWrapperClass}>
//                   <input
//                     type="text"
//                     placeholder="Reason for leaving"
//                     {...register("employer2_reasonLeaving")}
//                     className={inputClass}
//                   />
//                 </div>
//               </div>
//             </div>
//             <div>
//               <div className="mb-4">
//                 <label className="text-white mb-2 block">
//                   What will this employer say was the reason your employment
//                   terminated?
//                 </label>
//                 <div className={inputWrapperClass}>
//                   <input
//                     type="text"
//                     placeholder="Enter Your Answer "
//                     {...register("employer2_terminationReason")}
//                     className={inputClass}
//                   />
//                 </div>
//               </div>
//               <div className="mb-4">
//                 <label className="text-white mb-2 block">
//                   Were you ever disciplined? If so, for what?
//                 </label>
//                 <div className={inputWrapperClass}>
//                   <input
//                     type="text"
//                     placeholder="Enter Your Answer "
//                     {...register("employer2_disciplinary")}
//                     className={inputClass}
//                   />
//                 </div>
//               </div>
//               <div>
//                 <label className="text-white mb-2 block">
//                   How much notice did you give when resigning? If none, explain.
//                 </label>
//                 <div className={inputWrapperClass}>
//                   <input
//                     type="text"
//                     placeholder="Enter Your Answer "
//                     {...register("employer2_noticeGiven")}
//                     className={inputClass}
//                   />
//                 </div>
//               </div>
//             </div>
//           </form>
//           <div className="flex justify-center mt-12 gap-4">
//             <button
//               type="button"
//               onClick={prevStep}
//               className="px-6 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-700"
//             >
//               Previous
//             </button>

//             <button
//               type="button"
//               // onClick={nextStep}
//               onClick={nextStepHandler}
//               className="px-6 py-2 bg-gradient-to-r from-[#8D6851] to-[#D3BFB2] text-white rounded-md hover:opacity-90"
//             >
//               Next
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default WorkExperienceForm;

import React from "react";
import ProgressBar from "../../progressBar/ProgressBar";

const WorkExperienceForm = ({
  prevStep,
  nextStep,
  register,
  errors,
  setFormData,
  getValues,
  trigger,
  step,
}) => {
  const totalSteps = 13;

  const nextStepHandler = async () => {
    const result = await trigger();
    if (result) {
      const allData = getValues();

      setFormData((prev) => ({
        ...prev,
        employeeInfo: {
          ...prev.employeeInfo,
          employee1: {
            name: allData.employer1_name,
            address: allData.employer1_address,
            telephone: allData.employer1_telephone,
            dateEmployeeFrom: allData.employer1_dateFrom,
            dateEmployeeTo: allData.employer1_dateTo,
            jobTitle: allData.employer1_jobTitle,
            duties: allData.employer1_duties,
            supervisorName: allData.employer1_supervisor,
            MayWeContact: allData.employer1_mayWeContact === "yes",
            wagesStart: allData.employer1_wagesStart,
            final: allData.employer1_final,
            reasonForLeaving: allData.employer1_reasonLeaving,
            noticePeriod: allData.employer1_noticeGiven,
            employer1_terminationReason: allData.employer1_terminationReason,
            employer1_disciplinary: allData.employer1_disciplinary,
            employer1_noticeGiven: allData.employer1_noticeGiven,
          },
          employee2: {
            name: allData.employer2_name,
            address: allData.employer2_address,
            telephone: allData.employer2_telephone,
            dateEmployeeFrom: allData.employer2_dateFrom,
            dateEmployeeTo: allData.employer2_dateTo,
            jobTitle: allData.employer2_jobTitle,
            duties: allData.employer2_duties,
            supervisorName: allData.employer2_supervisor,
            MayWeContact: allData.employer2_mayWeContact === "yes",
            wagesStart: allData.employer2_wagesStart,
            final: allData.employer2_final,
            reasonForLeaving: allData.employer2_reasonLeaving,
            noticePeriod: allData.employer2_noticeGiven,
            employer2_terminationReason: allData.employer2_terminationReason,
            employer2_disciplinary: allData.employer2_disciplinary,
            employer2_noticeGiven: allData.employer2_noticeGiven,
          },
        },
      }));

      console.log("Step 2 Data:", allData);
      nextStep();
    } else {
      console.log("Validation errors:", errors);
    }
  };

  const inputWrapperClass =
    "rounded-md bg-gradient-to-r from-[#8D6851] to-[#D3BFB2] mt-1 p-[1px]";
  const inputClass =
    "w-full bg-slate-900 text-white rounded-md py-2 px-3 focus:outline-none focus:ring-0";

  return (
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
          <h1 className="text-2xl font-bold mb-2">Employment Application</h1>
          <p className="text-sm text-gray-300 mb-7">
            Please fill all forms. Resumes are not a substitute for a completed
            application
          </p>
          <ProgressBar currentStep={step} totalSteps={totalSteps} />
        </div>

        <form className="rounded-2xl max-w-7xl mx-auto">
          <div>
            <p className="text-[32px] font-bold mt-8">Work Experience</p>
            <div className="border-2 w-66 mb-5"></div>
            <p className="text-lg mb-4">
              List your present and past employers from the last 10 years,
              starting with the most recent. Include firm name and references if
              self-employed. You may also add verified volunteer work,
              internships, or military service. Incomplete responses may
              disqualify your application.
            </p>
          </div>

          {/* Employer 1 */}
          <p className="text-[32px] font-bold mt-8">Employer 1</p>
          <div className="border-2 w-44 mb-5"></div>

          <div className="mb-4">
            <label className="text-white mb-1 block">
              Name <span className="text-red-500">*</span>
            </label>
            <div className={inputWrapperClass}>
              <input
                type="text"
                placeholder="Enter Employer Name *"
                {...register("employer1_name", {
                  required: "Employer 1 name is required",
                })}
                className={inputClass}
              />
            </div>
            {errors.employer1_name && (
              <p className="text-red-500 text-sm">
                {errors.employer1_name.message}
              </p>
            )}
          </div>

          <div className="mb-4">
            <label className="text-white mb-1 block">
              Address <span className="text-red-500">*</span>
            </label>
            <div className={inputWrapperClass}>
              <input
                type="text"
                placeholder="City Or Town ,State, ZIP"
                {...register("employer1_address", {
                  required: "Employer 1 address is required",
                })}
                className={inputClass}
              />
            </div>
            {errors.employer1_address && (
              <p className="text-red-500 text-sm">
                {errors.employer1_address.message}
              </p>
            )}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
            <div>
              <label className="text-white mb-1 block">
                Telephone <span className="text-red-500">*</span>
              </label>
              <div className={inputWrapperClass}>
                <input
                  type="text"
                  placeholder="Enter Telephone Number"
                  {...register("employer1_telephone", {
                    required: "Employer 1 telephone is required",
                  })}
                  className={inputClass}
                />
              </div>
              {errors.employer1_telephone && (
                <p className="text-red-500 text-sm">
                  {errors.employer1_telephone.message}
                </p>
              )}
            </div>

            <div>
              <label className="text-white mb-1 block">
                Date Employed From <span className="text-red-500">*</span>
              </label>
              <div className={inputWrapperClass}>
                <input
                  type="date"
                  {...register("employer1_dateFrom", {
                    required: "Start date is required",
                  })}
                  className={inputClass}
                />
              </div>
              {errors.employer1_dateFrom && (
                <p className="text-red-500 text-sm">
                  {errors.employer1_dateFrom.message}
                </p>
              )}
            </div>

            <div>
              <label className="text-white mb-1 block">
                Date Employed To <span className="text-red-500">*</span>
              </label>
              <div className={inputWrapperClass}>
                <input
                  type="date"
                  {...register("employer1_dateTo", {
                    required: "End date is required",
                  })}
                  className={inputClass}
                />
              </div>
              {errors.employer1_dateTo && (
                <p className="text-red-500 text-sm">
                  {errors.employer1_dateTo.message}
                </p>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="text-white mb-1 block">
                Job Title <span className="text-red-500">*</span>
              </label>
              <div className={inputWrapperClass}>
                <input
                  type="text"
                  placeholder="Enter Job Title"
                  {...register("employer1_jobTitle", {
                    required: "Job title is required",
                  })}
                  className={inputClass}
                />
              </div>
              {errors.employer1_jobTitle && (
                <p className="text-red-500 text-sm">
                  {errors.employer1_jobTitle.message}
                </p>
              )}
            </div>

            <div>
              <label className="text-white mb-1 block">
                Duties <span className="text-red-500">*</span>
              </label>
              <div className={inputWrapperClass}>
                <input
                  type="text"
                  placeholder="Enter Duty Name"
                  {...register("employer1_duties", {
                    required: "Duties are required",
                  })}
                  className={inputClass}
                />
              </div>
              {errors.employer1_duties && (
                <p className="text-red-500 text-sm">
                  {errors.employer1_duties.message}
                </p>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="text-white mb-1 block">
                Supervisor's Name <span className="text-red-500">*</span>
              </label>
              <div className={inputWrapperClass}>
                <input
                  type="text"
                  placeholder="Enter Supervisor's Name"
                  {...register("employer1_supervisor", {
                    required: "Supervisor name is required",
                  })}
                  className={inputClass}
                />
              </div>
              {errors.employer1_supervisor && (
                <p className="text-red-500 text-sm">
                  {errors.employer1_supervisor.message}
                </p>
              )}
            </div>

            <div>
              <label className="text-white mb-1 block">
                May We Contact <span className="text-red-500">*</span>
              </label>
              <div className={inputWrapperClass}>
                <select
                  {...register("employer1_mayWeContact", {
                    required: "This field is required",
                  })}
                  className={inputClass}
                >
                  <option value="">Select</option>
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                </select>
              </div>
              {errors.employer1_mayWeContact && (
                <p className="text-red-500 text-sm">
                  {errors.employer1_mayWeContact.message}
                </p>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
            <div>
              <label className="text-white mb-1 block">
                Wages Start <span className="text-red-500">*</span>
              </label>
              <div className={inputWrapperClass}>
                <input
                  type="text"
                  placeholder="Enter Wages Start"
                  {...register("employer1_wagesStart", {
                    required: "Wages start is required",
                  })}
                  className={inputClass}
                />
              </div>
              {errors.employer1_wagesStart && (
                <p className="text-red-500 text-sm">
                  {errors.employer1_wagesStart.message}
                </p>
              )}
            </div>

            <div>
              <label className="text-white mb-1 block">
                Final <span className="text-red-500">*</span>
              </label>
              <div className={inputWrapperClass}>
                <input
                  type="text"
                  placeholder="Enter Final Wage"
                  {...register("employer1_final", {
                    required: "Final wage is required",
                  })}
                  className={inputClass}
                />
              </div>
              {errors.employer1_final && (
                <p className="text-red-500 text-sm">
                  {errors.employer1_final.message}
                </p>
              )}
            </div>

            <div>
              <label className="text-white mb-1 block">
                Reason for Leaving?
              </label>
              <div className={inputWrapperClass}>
                <input
                  type="text"
                  placeholder="Reason for leaving"
                  {...register("employer1_reasonLeaving")}
                  className={inputClass}
                />
              </div>
            </div>
          </div>

          <div>
            <div className="mb-4">
              <label className="text-white mb-2 block">
                What will this employer say was the reason your employment
                terminated?
              </label>
              <div className={inputWrapperClass}>
                <input
                  type="text"
                  placeholder="Enter Your Answer "
                  {...register("employer1_terminationReason")}
                  className={inputClass}
                />
              </div>
            </div>
            <div className="mb-4">
              <label className="text-white mb-2 block">
                Were you ever disciplined? If so, for what?
              </label>
              <div className={inputWrapperClass}>
                <input
                  type="text"
                  placeholder="Enter Your Answer "
                  {...register("employer1_disciplinary")}
                  className={inputClass}
                />
              </div>
            </div>
            <div>
              <label className="text-white mb-2 block">
                How much notice did you give when resigning? If none, explain.
              </label>
              <div className={inputWrapperClass}>
                <input
                  type="text"
                  placeholder="Enter Your Answer "
                  {...register("employer1_noticeGiven")}
                  className={inputClass}
                />
              </div>
            </div>
          </div>

          {/* Employer 2 - Similar structure as Employer 1 */}
          <p className="text-[32px] font-bold mt-8">Employer 2</p>
          <div className="border-2 w-44 mb-5"></div>

          <div className="mb-4">
            <label className="text-white mb-1 block">
              Name <span className="text-red-500">*</span>
            </label>
            <div className={inputWrapperClass}>
              <input
                type="text"
                placeholder="Enter Employer Name *"
                {...register("employer1_name", {
                  required: "Employer 1 name is required",
                })}
                className={inputClass}
              />
            </div>
            {errors.employer1_name && (
              <p className="text-red-500 text-sm">
                {errors.employer1_name.message}
              </p>
            )}
          </div>

          <div className="mb-4">
            <label className="text-white mb-1 block">
              Address <span className="text-red-500">*</span>
            </label>
            <div className={inputWrapperClass}>
              <input
                type="text"
                placeholder="City Or Town ,State, ZIP"
                {...register("employer1_address", {
                  required: "Employer 1 address is required",
                })}
                className={inputClass}
              />
            </div>
            {errors.employer1_address && (
              <p className="text-red-500 text-sm">
                {errors.employer1_address.message}
              </p>
            )}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
            <div>
              <label className="text-white mb-1 block">
                Telephone <span className="text-red-500">*</span>
              </label>
              <div className={inputWrapperClass}>
                <input
                  type="text"
                  placeholder="Enter Telephone Number"
                  {...register("employer1_telephone", {
                    required: "Employer 1 telephone is required",
                  })}
                  className={inputClass}
                />
              </div>
              {errors.employer1_telephone && (
                <p className="text-red-500 text-sm">
                  {errors.employer1_telephone.message}
                </p>
              )}
            </div>

            <div>
              <label className="text-white mb-1 block">
                Date Employed From <span className="text-red-500">*</span>
              </label>
              <div className={inputWrapperClass}>
                <input
                  type="date"
                  {...register("employer1_dateFrom", {
                    required: "Start date is required",
                  })}
                  className={inputClass}
                />
              </div>
              {errors.employer1_dateFrom && (
                <p className="text-red-500 text-sm">
                  {errors.employer1_dateFrom.message}
                </p>
              )}
            </div>

            <div>
              <label className="text-white mb-1 block">
                Date Employed To <span className="text-red-500">*</span>
              </label>
              <div className={inputWrapperClass}>
                <input
                  type="date"
                  {...register("employer1_dateTo", {
                    required: "End date is required",
                  })}
                  className={inputClass}
                />
              </div>
              {errors.employer1_dateTo && (
                <p className="text-red-500 text-sm">
                  {errors.employer1_dateTo.message}
                </p>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="text-white mb-1 block">
                Job Title <span className="text-red-500">*</span>
              </label>
              <div className={inputWrapperClass}>
                <input
                  type="text"
                  placeholder="Enter Job Title"
                  {...register("employer1_jobTitle", {
                    required: "Job title is required",
                  })}
                  className={inputClass}
                />
              </div>
              {errors.employer1_jobTitle && (
                <p className="text-red-500 text-sm">
                  {errors.employer1_jobTitle.message}
                </p>
              )}
            </div>

            <div>
              <label className="text-white mb-1 block">
                Duties <span className="text-red-500">*</span>
              </label>
              <div className={inputWrapperClass}>
                <input
                  type="text"
                  placeholder="Enter Duty Name"
                  {...register("employer1_duties", {
                    required: "Duties are required",
                  })}
                  className={inputClass}
                />
              </div>
              {errors.employer1_duties && (
                <p className="text-red-500 text-sm">
                  {errors.employer1_duties.message}
                </p>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="text-white mb-1 block">
                Supervisor's Name <span className="text-red-500">*</span>
              </label>
              <div className={inputWrapperClass}>
                <input
                  type="text"
                  placeholder="Enter Supervisor's Name"
                  {...register("employer1_supervisor", {
                    required: "Supervisor name is required",
                  })}
                  className={inputClass}
                />
              </div>
              {errors.employer1_supervisor && (
                <p className="text-red-500 text-sm">
                  {errors.employer1_supervisor.message}
                </p>
              )}
            </div>

            <div>
              <label className="text-white mb-1 block">
                May We Contact <span className="text-red-500">*</span>
              </label>
              <div className={inputWrapperClass}>
                <select
                  {...register("employer1_mayWeContact", {
                    required: "This field is required",
                  })}
                  className={inputClass}
                >
                  <option value="">Select</option>
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                </select>
              </div>
              {errors.employer1_mayWeContact && (
                <p className="text-red-500 text-sm">
                  {errors.employer1_mayWeContact.message}
                </p>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
            <div>
              <label className="text-white mb-1 block">
                Wages Start <span className="text-red-500">*</span>
              </label>
              <div className={inputWrapperClass}>
                <input
                  type="text"
                  placeholder="Enter Wages Start"
                  {...register("employer1_wagesStart", {
                    required: "Wages start is required",
                  })}
                  className={inputClass}
                />
              </div>
              {errors.employer1_wagesStart && (
                <p className="text-red-500 text-sm">
                  {errors.employer1_wagesStart.message}
                </p>
              )}
            </div>

            <div>
              <label className="text-white mb-1 block">
                Final <span className="text-red-500">*</span>
              </label>
              <div className={inputWrapperClass}>
                <input
                  type="text"
                  placeholder="Enter Final Wage"
                  {...register("employer1_final", {
                    required: "Final wage is required",
                  })}
                  className={inputClass}
                />
              </div>
              {errors.employer1_final && (
                <p className="text-red-500 text-sm">
                  {errors.employer1_final.message}
                </p>
              )}
            </div>

            <div>
              <label className="text-white mb-1 block">
                Reason for Leaving?
              </label>
              <div className={inputWrapperClass}>
                <input
                  type="text"
                  placeholder="Reason for leaving"
                  {...register("employer1_reasonLeaving")}
                  className={inputClass}
                />
              </div>
            </div>
          </div>

          {/* Add remaining Employer 2 fields following the same pattern */}
          <div>
            <div className="mb-4">
              <label className="text-white mb-2 block">
                What will this employer say was the reason your employment
                terminated?
              </label>
              <div className={inputWrapperClass}>
                <input
                  type="text"
                  placeholder="Enter Your Answer "
                  {...register("employer2_terminationReason")}
                  className={inputClass}
                />
              </div>
            </div>
            <div className="mb-4">
              <label className="text-white mb-2 block">
                Were you ever disciplined? If so, for what?
              </label>
              <div className={inputWrapperClass}>
                <input
                  type="text"
                  placeholder="Enter Your Answer "
                  {...register("employer2_disciplinary")}
                  className={inputClass}
                />
              </div>
            </div>
            <div>
              <label className="text-white mb-2 block">
                How much notice did you give when resigning? If none, explain.
              </label>
              <div className={inputWrapperClass}>
                <input
                  type="text"
                  placeholder="Enter Your Answer "
                  {...register("employer2_noticeGiven")}
                  className={inputClass}
                />
              </div>
            </div>
          </div>

          <div className="flex justify-center mt-12 gap-4">
            <button
              type="button"
              onClick={prevStep}
              className="px-6 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-700"
            >
              Previous
            </button>

            <button
              type="button"
              onClick={nextStepHandler}
              className="px-6 py-2 bg-gradient-to-r from-[#8D6851] to-[#D3BFB2] text-white rounded-md hover:opacity-90"
            >
              Next
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default WorkExperienceForm;
