// // import { useForm } from "react-hook-form";
// import ProgressBar from "../../progressBar/ProgressBar";
// import { IoPeopleOutline } from "react-icons/io5";
// import { CiCircleCheck } from "react-icons/ci";
// import { useState } from "react";
// import { useForm } from "react-hook-form";

// const References = ({ prevStep, nextStep }) => {
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
//             <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
//               <div>
//                 <label className="text-white mb-2 block">
//                   Have you ever been terminated or asked to resign from any job?{" "}
//                   <span className="text-red-500">*</span>
//                 </label>
//                 <div className={inputWrapperClass}>
//                   <select
//                     {...register("mayWeContact", {
//                       required: "This field is required",
//                     })}
//                     className={inputClass}
//                   >
//                     <option value="">Select</option>
//                     <option value="yes">Yes</option>
//                     <option value="no">No</option>
//                   </select>
//                 </div>
//                 {errors.mayWeContact && (
//                   <p className="text-red-500 text-sm">
//                     {errors.mayWeContact.message}
//                   </p>
//                 )}
//               </div>

//               <div>
//                 <label className="text-white mb-2 block">
//                   If Yes how many times? <span className="text-red-500">*</span>
//                 </label>
//                 <div className={inputWrapperClass}>
//                   <input
//                     type="email"
//                     placeholder="Enter Duty Name"
//                     {...register("email")}
//                     className={inputClass}
//                   />
//                 </div>
//                 {errors.mayWeContact && (
//                   <p className="text-red-500 text-sm">
//                     {errors.mayWeContact.message}
//                   </p>
//                 )}
//               </div>
//             </div>
//             <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
//               <div>
//                 <label className="text-white mb-2 block">
//                   Has your employment ever been terminated by mutual agreement?{" "}
//                   <span className="text-red-500">*</span>
//                 </label>
//                 <div className={inputWrapperClass}>
//                   <select
//                     {...register("mayWeContact", {
//                       required: "This field is required",
//                     })}
//                     className={inputClass}
//                   >
//                     <option value="">Select</option>
//                     <option value="yes">Yes</option>
//                     <option value="no">No</option>
//                   </select>
//                 </div>
//                 {errors.mayWeContact && (
//                   <p className="text-red-500 text-sm">
//                     {errors.mayWeContact.message}
//                   </p>
//                 )}
//               </div>
//               <div>
//                 <label className="text-white mb-2 block">
//                   If Yes how many times? <span className="text-red-500">*</span>
//                 </label>
//                 <div className={inputWrapperClass}>
//                   <input
//                     type="text"
//                     placeholder="Enter Job Title"
//                     {...register("telephone")}
//                     className={inputClass}
//                   />
//                 </div>
//                 {errors.mayWeContact && (
//                   <p className="text-red-500 text-sm">
//                     {errors.mayWeContact.message}
//                   </p>
//                 )}
//               </div>
//             </div>
//             <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
//               <div>
//                 <label className="text-white mb-2 block">
//                   Have you ever been given the choice to resign rather than be
//                   terminated? <span className="text-red-500">*</span>
//                 </label>
//                 <div className={inputWrapperClass}>
//                   <select
//                     {...register("mayWeContact", {
//                       required: "This field is required",
//                     })}
//                     className={inputClass}
//                   >
//                     <option value="">Select</option>
//                     <option value="yes">Yes</option>
//                     <option value="no">No</option>
//                   </select>
//                 </div>
//                 {errors.mayWeContact && (
//                   <p className="text-red-500 text-sm">
//                     {errors.mayWeContact.message}
//                   </p>
//                 )}
//               </div>
//               <div>
//                 <label className="text-white mb-2 block">
//                   If Yes how many times? <span className="text-red-500">*</span>
//                 </label>
//                 <div className={inputWrapperClass}>
//                   <input
//                     type="text"
//                     placeholder="Enter Job Title"
//                     {...register("telephone")}
//                     className={inputClass}
//                   />
//                 </div>
//                 {errors.mayWeContact && (
//                   <p className="text-red-500 text-sm">
//                     {errors.mayWeContact.message}
//                   </p>
//                 )}
//               </div>
//             </div>

//             <div>
//               <div>
//                 <label className="text-white mb-2 block">
//                   How much notice did you give when resigning? If none, explain.{" "}
//                   <span className="text-red-500">*</span>
//                 </label>
//                 <div className={inputWrapperClass}>
//                   <input
//                     type="text"
//                     placeholder="Enter Your Answer "
//                     {...register("telephone")}
//                     className={inputClass}
//                   />
//                 </div>
//                 {errors.mayWeContact && (
//                   <p className="text-red-500 text-sm">
//                     {errors.mayWeContact.message}
//                   </p>
//                 )}
//               </div>
//             </div>

//             <table className="min-w-full border border-[#8D6851] text-white rounded-lg mt-9">
//               <thead>
//                 <tr className="bg-slate-900 text-left">
//                   <th className="border border-[#8D6851] px-2 py-2 font-normal text-sm">
//                     NAME
//                   </th>
//                   <th className="border border-[#8D6851] px-4 py-2 font-normal text-sm">
//                     POSITION
//                   </th>
//                   <th className="border border-[#8D6851] px-4 py-2 font-normal text-sm">
//                     COMPANY
//                   </th>
//                   <th className="border border-[#8D6851] px-4 py-2 font-normal text-sm">
//                     TELEPHONE
//                   </th>
//                   <th className="border border-[#8D6851] px-4 py-2 font-normal text-sm">
//                     OCCUPATION
//                   </th>
//                   <th className="border border-[#8D6851] px-4 py-2 font-normal text-sm">
//                     BEST TIME TO CALL
//                   </th>
//                   <th className="border border-[#8D6851] px-4 py-2 font-normal text-sm">
//                     WORK RELATIONSHIP <br /> (i.e. supervisor, co-worker)
//                   </th>
//                   <th className="border border-[#8D6851] px-4 py-2 font-normal text-sm">
//                     NUMBER OF YEARS KNOWN
//                   </th>
//                 </tr>
//               </thead>

//               <tbody>
//                 {[0, 1, 2, 3].map((index) => (
//                   <tr key={index}>
//                     <td className="border border-[#8D6851] px-4 py-4">
//                       <input
//                         type="text"
//                         {...register(`references.${index}.name`)}
//                         className="w-full bg-slate-900 text-white py-1 rounded focus:outline-none"
//                         placeholder="Enter name"
//                       />
//                     </td>
//                     <td className="border border-[#8D6851] px-4 py-2">
//                       <input
//                         type="text"
//                         {...register(`references.${index}.position`)}
//                         className="w-full bg-slate-900 text-white py-1 rounded focus:outline-none"
//                         placeholder="Enter position"
//                       />
//                     </td>
//                     <td className="border border-[#8D6851] px-4 py-2">
//                       <input
//                         type="text"
//                         {...register(`references.${index}.company`)}
//                         className="w-full bg-slate-900 text-white py-1 rounded focus:outline-none"
//                         placeholder="Enter company"
//                       />
//                     </td>
//                     <td className="border border-[#8D6851] px-4 py-2">
//                       <input
//                         type="text"
//                         {...register(`references.${index}.telephone`)}
//                         className="w-full bg-slate-900 text-white py-1 rounded focus:outline-none"
//                         placeholder="Enter telephone"
//                       />
//                     </td>
//                     <td className="border border-[#8D6851] px-4 py-2">
//                       <input
//                         type="text"
//                         {...register(`references.${index}.occupation`)}
//                         className="w-full bg-slate-900 text-white py-1 rounded focus:outline-none"
//                         placeholder="Enter occupation"
//                       />
//                     </td>
//                     <td className="border border-[#8D6851] px-4 py-2">
//                       <input
//                         type="text"
//                         {...register(`references.${index}.bestTimeToCall`)}
//                         className="w-full bg-slate-900 text-white py-1 rounded focus:outline-none"
//                         placeholder="Enter best time to call"
//                       />
//                     </td>
//                     <td className="border border-[#8D6851] px-4 py-2">
//                       <input
//                         type="text"
//                         {...register(`references.${index}.workRelationship`)}
//                         className="w-full bg-slate-900 text-white py-1 rounded focus:outline-none"
//                         placeholder="Enter work relationship"
//                       />
//                     </td>
//                     <td className="border border-[#8D6851] px-4 py-2">
//                       <input
//                         type="text"
//                         {...register(`references.${index}.yearsKnown`)}
//                         className="w-full bg-slate-900 text-white py-1 rounded focus:outline-none"
//                         placeholder="Enter years known"
//                       />
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
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

// export default References;

import React from "react";
import ProgressBar from "../../progressBar/ProgressBar";

const References = ({
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
          terminationInfo: {
            terminationStatus:
              allData.terminationStatus === "yes" ? "Yes" : "No",
            terminationCount: allData.terminationCount
              ? Number(allData.terminationCount)
              : 0,
          },
          manualAgreementTermination: {
            terminatedByManualAgreement:
              allData.manualAgreement === "yes" ? "Yes" : "No",
            terminationCount: allData.manualTerminationCount
              ? Number(allData.manualTerminationCount)
              : 0,
          },
          resignationInsteadOfTermination: {
            resignedInsteadOfTerminated:
              allData.resignationChoice === "yes" ? "Yes" : "No",
            resignationCount: allData.resignationCount
              ? Number(allData.resignationCount)
              : 0,
          },
          explanation: allData.explanation || "",
          terminationDetailsOfEmployee:
            allData.references
              ?.map((ref, index) => ({
                name: ref.name,
                position: ref.position,
                company: ref.company,
                telephone: ref.telephone,
                occupation: ref.occupation,
                bestTimeToCall: ref.bestTimeToCall,
                workRelation: ref.workRelationship,
                NoOfYearKnown: ref.yearsKnown,
              }))
              .filter((ref) => ref.name) || [],
        },
      }));

      console.log("Step 3 Data:", allData);
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
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="text-white mb-2 block">
                Have you ever been terminated or asked to resign from any job?{" "}
                <span className="text-red-500">*</span>
              </label>
              <div className={inputWrapperClass}>
                <select
                  {...register("terminationStatus", {
                    required: "This field is required",
                  })}
                  className={inputClass}
                >
                  <option value="">Select</option>
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                </select>
              </div>
              {errors.terminationStatus && (
                <p className="text-red-500 text-sm">
                  {errors.terminationStatus.message}
                </p>
              )}
            </div>

            <div>
              <label className="text-white mb-2 block">
                If Yes how many times? <span className="text-red-500">*</span>
              </label>
              <div className={inputWrapperClass}>
                <input
                  type="number"
                  placeholder="Enter number of times"
                  {...register("terminationCount")}
                  className={inputClass}
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="text-white mb-2 block">
                Has your employment ever been terminated by mutual agreement?{" "}
                <span className="text-red-500">*</span>
              </label>
              <div className={inputWrapperClass}>
                <select
                  {...register("manualAgreement", {
                    required: "This field is required",
                  })}
                  className={inputClass}
                >
                  <option value="">Select</option>
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                </select>
              </div>
              {errors.manualAgreement && (
                <p className="text-red-500 text-sm">
                  {errors.manualAgreement.message}
                </p>
              )}
            </div>

            <div>
              <label className="text-white mb-2 block">
                If Yes how many times? <span className="text-red-500">*</span>
              </label>
              <div className={inputWrapperClass}>
                <input
                  type="number"
                  placeholder="Enter number of times"
                  {...register("manualTerminationCount")}
                  className={inputClass}
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="text-white mb-2 block">
                Have you ever been given the choice to resign rather than be
                terminated? <span className="text-red-500">*</span>
              </label>
              <div className={inputWrapperClass}>
                <select
                  {...register("resignationChoice", {
                    required: "This field is required",
                  })}
                  className={inputClass}
                >
                  <option value="">Select</option>
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                </select>
              </div>
              {errors.resignationChoice && (
                <p className="text-red-500 text-sm">
                  {errors.resignationChoice.message}
                </p>
              )}
            </div>

            <div>
              <label className="text-white mb-2 block">
                If Yes how many times? <span className="text-red-500">*</span>
              </label>
              <div className={inputWrapperClass}>
                <input
                  type="number"
                  placeholder="Enter number of times"
                  {...register("resignationCount")}
                  className={inputClass}
                />
              </div>
            </div>
          </div>
          <div>
            <div>
              <label className="text-white mb-2 block">
                If you answered Yes to any of the above three questions, please
                explain the circumstances of each occasion
              </label>
              <div className={inputWrapperClass}>
                <input
                  type="text"
                  placeholder="Enter Your Answer"
                  {...register("explanation")} // no validation rules, so optional
                  className={inputClass}
                />
              </div>
            </div>
          </div>

          <table className="min-w-full border border-[#8D6851] text-white rounded-lg mt-9">
            <thead>
              <tr className="bg-slate-900 text-left">
                <th className="border border-[#8D6851] px-2 py-2 font-normal text-sm">
                  NAME
                </th>
                <th className="border border-[#8D6851] px-4 py-2 font-normal text-sm">
                  POSITION
                </th>
                <th className="border border-[#8D6851] px-4 py-2 font-normal text-sm">
                  COMPANY
                </th>
                <th className="border border-[#8D6851] px-4 py-2 font-normal text-sm">
                  TELEPHONE
                </th>
                <th className="border border-[#8D6851] px-4 py-2 font-normal text-sm">
                  OCCUPATION
                </th>
                <th className="border border-[#8D6851] px-4 py-2 font-normal text-sm">
                  BEST TIME TO CALL
                </th>
                <th className="border border-[#8D6851] px-4 py-2 font-normal text-sm">
                  WORK RELATIONSHIP <br /> (i.e. supervisor, co-worker)
                </th>
                <th className="border border-[#8D6851] px-4 py-2 font-normal text-sm">
                  NUMBER OF YEARS KNOWN
                </th>
              </tr>
            </thead>
            <tbody>
              {[0, 1, 2, 3].map((index) => (
                <tr key={index}>
                  <td className="border border-[#8D6851] px-4 py-4">
                    <input
                      type="text"
                      {...register(`references.${index}.name`)}
                      className="w-full bg-slate-900 text-white py-1 rounded focus:outline-none"
                      placeholder="Enter name"
                    />
                  </td>
                  <td className="border border-[#8D6851] px-4 py-2">
                    <input
                      type="text"
                      {...register(`references.${index}.position`)}
                      className="w-full bg-slate-900 text-white py-1 rounded focus:outline-none"
                      placeholder="Enter position"
                    />
                  </td>
                  <td className="border border-[#8D6851] px-4 py-2">
                    <input
                      type="text"
                      {...register(`references.${index}.company`)}
                      className="w-full bg-slate-900 text-white py-1 rounded focus:outline-none"
                      placeholder="Enter company"
                    />
                  </td>
                  <td className="border border-[#8D6851] px-4 py-2">
                    <input
                      type="text"
                      {...register(`references.${index}.telephone`)}
                      className="w-full bg-slate-900 text-white py-1 rounded focus:outline-none"
                      placeholder="Enter telephone"
                    />
                  </td>
                  <td className="border border-[#8D6851] px-4 py-2">
                    <input
                      type="text"
                      {...register(`references.${index}.occupation`)}
                      className="w-full bg-slate-900 text-white py-1 rounded focus:outline-none"
                      placeholder="Enter occupation"
                    />
                  </td>
                  <td className="border border-[#8D6851] px-4 py-2">
                    <input
                      type="text"
                      {...register(`references.${index}.bestTimeToCall`)}
                      className="w-full bg-slate-900 text-white py-1 rounded focus:outline-none"
                      placeholder="Enter best time to call"
                    />
                  </td>
                  <td className="border border-[#8D6851] px-4 py-2">
                    <input
                      type="text"
                      {...register(`references.${index}.workRelationship`)}
                      className="w-full bg-slate-900 text-white py-1 rounded focus:outline-none"
                      placeholder="Enter work relationship"
                    />
                  </td>
                  <td className="border border-[#8D6851] px-4 py-2">
                    <input
                      type="text"
                      {...register(`references.${index}.yearsKnown`)}
                      className="w-full bg-slate-900 text-white py-1 rounded focus:outline-none"
                      placeholder="Enter years known"
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

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

export default References;
