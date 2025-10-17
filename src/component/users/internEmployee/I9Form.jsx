// import { useForm } from "react-hook-form";
// import ProgressBar from "../../progressBar/ProgressBar";

// const I9Form = ({ prevStep, nextStep, step }) => {
//   const totalSteps = 5;

//   const {
//     register,
//     // handleSubmit,
//     watch,
//     formState: { errors },
//   } = useForm({
//     defaultValues: {
//       citizenship: [],
//     },
//   });

//   // Next button এর জন্য function
//   // const handleNext = (data) => {
//   //   console.log("Form Data:", data); // সব form data console এ দেখাবে
//   //   nextStep(); // তারপর পরের step এ যাবে
//   // };

//   const inputWrapperClass =
//     "rounded-md bg-gradient-to-r from-[#8D6851] to-[#D3BFB2] mt-1 p-[1px]";
//   const inputClass =
//     "w-full bg-slate-900 text-white rounded-md py-2 px-3 focus:outline-none focus:ring-0";

//   const citizenship = watch("citizenship", []);

//   return (
//     <div className="text-white">
//       <div className="max-w-7xl mx-auto">
//         {/* Header */}
//         <div className="flex space-x-96 mb-4">
//           <div className="text-sm">
//             <div className="font-bold text-lg mb-2">CBYRAC, INC</div>
//             <div>123 MAIN STREET SUITE 100</div>
//             <div>ANYTOWN, STATE 12345</div>
//             <div>PHONE: 555-555-5555</div>
//             <div>EMAIL: info@cbyrac.com</div>
//           </div>
//           <div className="w-24 h-24 bg-white rounded flex items-center justify-center">
//             <img src="/cbyrac-logo.png" alt="Company Logo" />
//           </div>
//         </div>

//         {/* Title */}
//         <div className="text-center mb-8">
//           <h1 className="text-2xl font-bold mb-2">
//             Employment Eligibility Verification (Form I-9)
//           </h1>
//           <p className="text-sm text-gray-300 mb-7">
//             U.S. Citizenship and Immigration Services
//           </p>
//           <ProgressBar currentStep={step} totalSteps={totalSteps} />
//         </div>

//         {/* Form */}
//         <form
//           onSubmit={(e) => {
//             e.preventDefault();
//             nextStep();
//           }}
//           className="rounded-2xl max-w-7xl mx-auto"
//         >
//           {/* General Information */}
//           <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-3">
//             {/* Last Name */}
//             <div>
//               <label className="mb-1 block">
//                 Last Name (Family Name) <span className="text-red-500">*</span>
//               </label>
//               <div className={inputWrapperClass}>
//                 <input
//                   type="text"
//                   placeholder="Enter Last Name"
//                   {...register("lastName", {
//                     required: "Last name is required",
//                   })}
//                   className={inputClass}
//                 />
//               </div>
//               {errors.lastName && (
//                 <p className="text-red-500 text-sm">
//                   {errors.lastName.message}
//                 </p>
//               )}
//             </div>

//             {/* First Name */}
//             <div>
//               <label className="mb-1 block">
//                 First Name (Given Name) <span className="text-red-500">*</span>
//               </label>
//               <div className={inputWrapperClass}>
//                 <input
//                   type="text"
//                   placeholder="Enter First Name"
//                   {...register("firstName", {
//                     required: "First name is required",
//                   })}
//                   className={inputClass}
//                 />
//               </div>
//               {errors.firstName && (
//                 <p className="text-red-500 text-sm">
//                   {errors.firstName.message}
//                 </p>
//               )}
//             </div>
//           </div>

//           {/* Middle Initial & Other Last Names */}
//           <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-3">
//             <div>
//               <label className="mb-1 block">
//                 Middle Initial (if any) <span className="text-red-500">*</span>
//               </label>
//               <div className={inputWrapperClass}>
//                 <input
//                   type="text"
//                   placeholder="Enter Middle Initial"
//                   {...register("middleInitial", {
//                     required: "Middle initial is required",
//                   })}
//                   className={inputClass}
//                 />
//               </div>
//               {errors.middleInitial && (
//                 <p className="text-red-500 text-sm">
//                   {errors.middleInitial.message}
//                 </p>
//               )}
//             </div>

//             <div>
//               <label className="mb-1 block">
//                 Other Last Names Used (if any){" "}
//                 <span className="text-red-500">*</span>
//               </label>
//               <div className={inputWrapperClass}>
//                 <input
//                   type="text"
//                   placeholder="Enter Other Last Name"
//                   {...register("otherLastName", {
//                     required: "Other last name is required",
//                   })}
//                   className={inputClass}
//                 />
//               </div>
//               {errors.otherLastName && (
//                 <p className="text-red-500 text-sm">
//                   {errors.otherLastName.message}
//                 </p>
//               )}
//             </div>
//           </div>

//           {/* Address */}
//           <div className="mb-4">
//             <label className="mb-1 block">
//               Address <span className="text-red-500">*</span>
//             </label>
//             <div className={inputWrapperClass}>
//               <input
//                 type="text"
//                 placeholder="Street, City, State, ZIP"
//                 {...register("address", { required: "Address is required" })}
//                 className={inputClass}
//               />
//             </div>
//             {errors.address && (
//               <p className="text-red-500 text-sm">{errors.address.message}</p>
//             )}
//           </div>

//           {/* Date of Birth & SSN */}
//           <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
//             <div>
//               <label className="mb-1 block">
//                 Date of Birth <span className="text-red-500">*</span>
//               </label>
//               <div className={inputWrapperClass}>
//                 <input
//                   type="date"
//                   {...register("dob", {
//                     required: "Date of Birth is required",
//                   })}
//                   className={`date-input ${inputClass}`}
//                 />
//               </div>
//               {errors.dob && (
//                 <p className="text-red-500 text-sm">{errors.dob.message}</p>
//               )}
//             </div>

//             <div>
//               <label className="mb-1 block">
//                 U.S. Social Security Number{" "}
//                 <span className="text-red-500">*</span>
//               </label>
//               <div className={inputWrapperClass}>
//                 <input
//                   type="text"
//                   placeholder="Enter SSN"
//                   {...register("ssn", { required: "SSN is required" })}
//                   className={inputClass}
//                 />
//               </div>
//               {errors.ssn && (
//                 <p className="text-red-500 text-sm">{errors.ssn.message}</p>
//               )}
//             </div>
//           </div>

//           {/* Email & Phone */}
//           <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
//             <div>
//               <label className="mb-1 block">
//                 Employee’s Email Address <span className="text-red-500">*</span>
//               </label>
//               <div className={inputWrapperClass}>
//                 <input
//                   type="email"
//                   placeholder="Enter Email"
//                   {...register("employeeEmail", {
//                     required: "Email is required",
//                   })}
//                   className={inputClass}
//                 />
//               </div>
//               {errors.employeeEmail && (
//                 <p className="text-red-500 text-sm">
//                   {errors.employeeEmail.message}
//                 </p>
//               )}
//             </div>

//             <div>
//               <label className="mb-1 block">
//                 Employee’s Telephone Number{" "}
//                 <span className="text-red-500">*</span>
//               </label>
//               <div className={inputWrapperClass}>
//                 <input
//                   type="text"
//                   placeholder="Enter Phone"
//                   {...register("employeePhone", {
//                     required: "Phone number is required",
//                   })}
//                   className={inputClass}
//                 />
//               </div>
//               {errors.employeePhone && (
//                 <p className="text-red-500 text-sm">
//                   {errors.employeePhone.message}
//                 </p>
//               )}
//             </div>
//           </div>

//           {/* Citizenship */}
//           <div className="mb-5 mt-8 space-y-3">
//             <label className="flex items-center gap-2">
//               <input
//                 type="radio"
//                 value="US Citizen"
//                 {...register("citizenship", {
//                   required: "You must select at least one option",
//                 })}
//                 className="w-5 h-5"
//               />
//               A citizen of the United States
//             </label>

//             <label className="flex items-center gap-2">
//               <input
//                 type="radio"
//                 value="Noncitizen National"
//                 {...register("citizenship")}
//                 className="w-5 h-5"
//               />
//               A noncitizen national of the United States
//             </label>

//             <label className="flex items-center gap-2">
//               <input
//                 type="radio"
//                 value="Lawful Permanent Resident"
//                 {...register("citizenship")}
//                 className="w-5 h-5"
//               />
//               A lawful permanent resident (Enter USCIS or A-Number)
//             </label>

//             <label className="flex items-center gap-2">
//               <input
//                 type="radio"
//                 value="Other Noncitizen"
//                 {...register("citizenship")}
//                 className="w-5 h-5"
//               />
//               A noncitizen (Other than Item Numbers 2 and 3 above)
//             </label>

//             {errors.citizenship && (
//               <p className="text-red-500 text-sm">
//                 {errors.citizenship.message}
//               </p>
//             )}
//           </div>

//           {/* Conditional Fields */}
//           {citizenship.includes("Lawful Permanent Resident") && (
//             <div className="w-1/2 mb-4">
//               <label className="mb-1 block">
//                 USCIS A-Number <span className="text-red-500">*</span>
//               </label>
//               <div className={inputWrapperClass}>
//                 <input
//                   type="text"
//                   placeholder="Enter USCIS A-Number"
//                   {...register("uscisNumber", {
//                     required: "USCIS A-Number is required",
//                   })}
//                   className={inputClass}
//                 />
//               </div>
//               {errors.uscisNumber && (
//                 <p className="text-red-500 text-sm">
//                   {errors.uscisNumber.message}
//                 </p>
//               )}
//             </div>
//           )}

//           {citizenship.includes("Other Noncitizen") && (
//             <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
//               <div>
//                 <label className="mb-1 block">
//                   USCIS A-Number <span className="text-red-500">*</span>
//                 </label>
//                 <div className={inputWrapperClass}>
//                   <input
//                     type="text"
//                     placeholder="Enter USCIS A-Number"
//                     {...register("otherUscis", {
//                       required: "USCIS A-Number is required",
//                     })}
//                     className={inputClass}
//                   />
//                 </div>
//                 {errors.otherUscis && (
//                   <p className="text-red-500 text-sm">
//                     {errors.otherUscis.message}
//                   </p>
//                 )}
//               </div>

//               <div>
//                 <label className="mb-1 block">
//                   Form I-94 Admission Number{" "}
//                   <span className="text-red-500">*</span>
//                 </label>
//                 <div className={inputWrapperClass}>
//                   <input
//                     type="text"
//                     placeholder="Enter I-94 Number"
//                     {...register("i94Number", {
//                       required: "I-94 Admission Number is required",
//                     })}
//                     className={inputClass}
//                   />
//                 </div>
//                 {errors.i94Number && (
//                   <p className="text-red-500 text-sm">
//                     {errors.i94Number.message}
//                   </p>
//                 )}
//               </div>

//               <div>
//                 <label className="mb-1 block">
//                   Foreign Passport Number & Country{" "}
//                   <span className="text-red-500">*</span>
//                 </label>
//                 <div className={inputWrapperClass}>
//                   <input
//                     type="text"
//                     placeholder="Enter Passport Number"
//                     {...register("passportNumber", {
//                       required: "Passport Number is required",
//                     })}
//                     className={inputClass}
//                   />
//                 </div>
//                 {errors.passportNumber && (
//                   <p className="text-red-500 text-sm">
//                     {errors.passportNumber.message}
//                   </p>
//                 )}
//               </div>
//             </div>
//           )}

//           {/* Signature & Date */}
//           <div className="grid grid-cols-1 sm:grid-cols-3 mb-4">
//             <div>
//               <label className="block mb-2">
//                 Employee Signature <span className="text-red-500">*</span>
//               </label>
//               <div className="w-[350px] h-[50px] bg-gradient-to-l from-[#D4BFB2] to-[#8D6851] rounded-md mt-1 flex items-center justify-center">
//                 <label className="w-full h-full flex items-center justify-center text-white cursor-pointer">
//                   <span className="text-center">Upload Signature</span>
//                   <input
//                     type="file"
//                     accept="image/*"
//                     {...register("employeeSignature", {
//                       required: "Signature is required",
//                     })}
//                     className="hidden"
//                   />
//                 </label>
//               </div>
//               {errors.employeeSignature && (
//                 <p className="text-red-500 text-sm">
//                   {errors.employeeSignature.message}
//                 </p>
//               )}
//             </div>

//             <div>
//               <label className="mb-1 block">
//                 Date <span className="text-red-500">*</span>
//               </label>
//               <div className={inputWrapperClass}>
//                 <input
//                   type="date"
//                   {...register("signDate", { required: "Date is required" })}
//                   className={inputClass}
//                 />
//               </div>
//               {errors.signDate && (
//                 <p className="text-red-500 text-sm">
//                   {errors.signDate.message}
//                 </p>
//               )}
//             </div>
//           </div>

//           {/* Submit & Navigation */}
//           <div className="flex justify-center mt-6 gap-4">
//             <button
//               type="button"
//               onClick={prevStep}
//               className="px-6 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-700"
//             >
//               Previous
//             </button>

//             <button
//               type="submit"
//               // onClick={handleSubmit(handleNext)}
//               className="px-6 py-2 bg-gradient-to-r from-[#8D6851] to-[#D3BFB2] text-white rounded-md hover:opacity-90"
//             >
//               Next
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default I9Form;

// ***************************************************************
import React from "react";
// import { useForm } from "react-hook-form";
import ProgressBar from "../../progressBar/ProgressBar";
import { X } from "lucide-react";

const I9Form = ({
  prevStep,
  nextStep,
  step,
  register,
  errors,
  setFormData,
  getValues,
  trigger,
}) => {
  const totalSteps = 5;
  const inputWrapperClass =
    "rounded-md bg-gradient-to-r from-[#8D6851] to-[#D3BFB2] mt-1 p-[1px]";
  const inputClass =
    "w-full bg-slate-900 text-white rounded-md py-2 px-3 focus:outline-none focus:ring-0";

  const [preview, setPreview] = React.useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setPreview(URL.createObjectURL(file));
    }
  };

  const handleRemoveImage = () => {
    setPreview(null);
  };

  const handleNext = async () => {
    const result = await trigger();
    if (result) {
      const allData = getValues();
      setFormData((prev) => ({
        ...prev,
        i9Form: {
          lastName: allData.lastName,
          firstName: allData.firstName,
          middleInitial: allData.middleInitial,
          otherLastName: allData.otherLastName,
          address: allData.address,
          dateOfBirth: allData.dob,
          ssn: allData.ssn,
          email: allData.employeeEmail,
          phone: allData.employeePhone,
          citizenshipStatus: allData.citizenship,
          uscisNumber: allData.uscisNumber,
          i94Number: allData.i94Number,
          passportNumber: allData.passportNumber,
          signature: allData.employeeSignature
            ? `/employeeSignature3/${allData.employeeSignature.name}`
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
          <div className="w-24 h-24 bg-white rounded flex items-center justify-center">
            <img src="/cbyrac-logo.png" alt="Company Logo" />
          </div>
        </div>

        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold mb-2">
            Employment Eligibility Verification (Form I-9)
          </h1>
          <p className="text-sm text-gray-300 mb-7">
            U.S. Citizenship and Immigration Services
          </p>
          <ProgressBar currentStep={step} totalSteps={totalSteps} />
        </div>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleNext();
          }}
          className="rounded-2xl max-w-7xl mx-auto"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-3">
            <div>
              <label className="mb-1 block">
                Last Name (Family Name) <span className="text-red-500">*</span>
              </label>
              <div className={inputWrapperClass}>
                <input
                  type="text"
                  placeholder="Enter Last Name"
                  {...register("lastName", {
                    required: "Last name is required",
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

            <div>
              <label className="mb-1 block">
                First Name (Given Name) <span className="text-red-500">*</span>
              </label>
              <div className={inputWrapperClass}>
                <input
                  type="text"
                  placeholder="Enter First Name"
                  {...register("firstName", {
                    required: "First name is required",
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
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-3">
            <div>
              <label className="mb-1 block">
                Middle Initial (if any) <span className="text-red-500">*</span>
              </label>
              <div className={inputWrapperClass}>
                <input
                  type="text"
                  placeholder="Enter Middle Initial"
                  {...register("middleInitial", {
                    required: "Middle initial is required",
                  })}
                  className={inputClass}
                />
              </div>
              {errors.middleInitial && (
                <p className="text-red-500 text-sm">
                  {errors.middleInitial.message}
                </p>
              )}
            </div>

            <div>
              <label className="mb-1 block">
                Other Last Names Used (if any){" "}
                <span className="text-red-500">*</span>
              </label>
              <div className={inputWrapperClass}>
                <input
                  type="text"
                  placeholder="Enter Other Last Name"
                  {...register("otherLastName", {
                    required: "Other last name is required",
                  })}
                  className={inputClass}
                />
              </div>
              {errors.otherLastName && (
                <p className="text-red-500 text-sm">
                  {errors.otherLastName.message}
                </p>
              )}
            </div>
          </div>

          <div className="mb-4">
            <label className="mb-1 block">
              Address <span className="text-red-500">*</span>
            </label>
            <div className={inputWrapperClass}>
              <input
                type="text"
                placeholder="Street, City, State, ZIP"
                {...register("address", { required: "Address is required" })}
                className={inputClass}
              />
            </div>
            {errors.address && (
              <p className="text-red-500 text-sm">{errors.address.message}</p>
            )}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="mb-1 block">
                Date of Birth <span className="text-red-500">*</span>
              </label>
              <div className={inputWrapperClass}>
                <input
                  type="date"
                  {...register("dob", {
                    required: "Date of Birth is required",
                  })}
                  className={`date-input ${inputClass}`}
                />
              </div>
              {errors.dob && (
                <p className="text-red-500 text-sm">{errors.dob.message}</p>
              )}
            </div>

            <div>
              <label className="mb-1 block">
                U.S. Social Security Number{" "}
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
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="mb-1 block">
                Employee’s Email Address <span className="text-red-500">*</span>
              </label>
              <div className={inputWrapperClass}>
                <input
                  type="email"
                  placeholder="Enter Email"
                  {...register("employeeEmail", {
                    required: "Email is required",
                  })}
                  className={inputClass}
                />
              </div>
              {errors.employeeEmail && (
                <p className="text-red-500 text-sm">
                  {errors.employeeEmail.message}
                </p>
              )}
            </div>

            <div>
              <label className="mb-1 block">
                Employee’s Telephone Number{" "}
                <span className="text-red-500">*</span>
              </label>
              <div className={inputWrapperClass}>
                <input
                  type="text"
                  placeholder="Enter Phone"
                  {...register("employeePhone", {
                    required: "Phone number is required",
                  })}
                  className={inputClass}
                />
              </div>
              {errors.employeePhone && (
                <p className="text-red-500 text-sm">
                  {errors.employeePhone.message}
                </p>
              )}
            </div>
          </div>

          <div className="mb-5 mt-8 space-y-3">
            <label className="flex items-center gap-2">
              <input
                type="radio"
                value="US Citizen"
                {...register("citizenship", {
                  required: "You must select at least one option",
                })}
                className="w-5 h-5"
              />
              A citizen of the United States
            </label>

            <label className="flex items-center gap-2">
              <input
                type="radio"
                value="Noncitizen National"
                {...register("citizenship")}
                className="w-5 h-5"
              />
              A noncitizen national of the United States
            </label>

            <label className="flex items-center gap-2">
              <input
                type="radio"
                value="Lawful Permanent Resident"
                {...register("citizenship")}
                className="w-5 h-5"
              />
              A lawful permanent resident (Enter USCIS or A-Number)
            </label>

            <label className="flex items-center gap-2">
              <input
                type="radio"
                value="Other Noncitizen"
                {...register("citizenship")}
                className="w-5 h-5"
              />
              A noncitizen (Other than Item Numbers 2 and 3 above)
            </label>

            {errors.citizenship && (
              <p className="text-red-500 text-sm">
                {errors.citizenship.message}
              </p>
            )}
          </div>

          {getValues("citizenship") === "Lawful Permanent Resident" && (
            <div className="w-1/2 mb-4">
              <label className="mb-1 block">
                USCIS A-Number <span className="text-red-500">*</span>
              </label>
              <div className={inputWrapperClass}>
                <input
                  type="text"
                  placeholder="Enter USCIS A-Number"
                  {...register("uscisNumber", {
                    required: "USCIS A-Number is required",
                  })}
                  className={inputClass}
                />
              </div>
              {errors.uscisNumber && (
                <p className="text-red-500 text-sm">
                  {errors.uscisNumber.message}
                </p>
              )}
            </div>
          )}

          {getValues("citizenship") === "Other Noncitizen" && (
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
              <div>
                <label className="mb-1 block">
                  USCIS A-Number <span className="text-red-500">*</span>
                </label>
                <div className={inputWrapperClass}>
                  <input
                    type="text"
                    placeholder="Enter USCIS A-Number"
                    {...register("otherUscis", {
                      required: "USCIS A-Number is required",
                    })}
                    className={inputClass}
                  />
                </div>
                {errors.otherUscis && (
                  <p className="text-red-500 text-sm">
                    {errors.otherUscis.message}
                  </p>
                )}
              </div>

              <div>
                <label className="mb-1 block">
                  Form I-94 Admission Number{" "}
                  <span className="text-red-500">*</span>
                </label>
                <div className={inputWrapperClass}>
                  <input
                    type="text"
                    placeholder="Enter I-94 Number"
                    {...register("i94Number", {
                      required: "I-94 Admission Number is required",
                    })}
                    className={inputClass}
                  />
                </div>
                {errors.i94Number && (
                  <p className="text-red-500 text-sm">
                    {errors.i94Number.message}
                  </p>
                )}
              </div>

              <div>
                <label className="mb-1 block">
                  Foreign Passport Number & Country{" "}
                  <span className="text-red-500">*</span>
                </label>
                <div className={inputWrapperClass}>
                  <input
                    type="text"
                    placeholder="Enter Passport Number"
                    {...register("passportNumber", {
                      required: "Passport Number is required",
                    })}
                    className={inputClass}
                  />
                </div>
                {errors.passportNumber && (
                  <p className="text-red-500 text-sm">
                    {errors.passportNumber.message}
                  </p>
                )}
              </div>
            </div>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-3 mb-4">
            <div>
              <label className="block mb-2">
                Employee Signature <span className="text-red-500">*</span>
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
  );
};

export default I9Form;
