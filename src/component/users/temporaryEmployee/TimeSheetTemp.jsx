// import { useForm } from "react-hook-form";
// // import ProgressBar from "../../progressBar/ProgressBar";

// const Timesheet = () => {
//   // const totalSteps = 5;

//   const {
//     register,
//     handleSubmit,
//     // watch,
//     formState: { errors },
//   } = useForm({
//     defaultValues: {
//       citizenship: [],
//     },
//   });

//   const onSubmit = (data) => {
//     console.log("I-9 Form Data Submitted:", data);
//     alert("Form submitted successfully! Check console.");
//   };

//   const inputWrapperClass =
//     "rounded-md bg-gradient-to-r from-[#8D6851] to-[#D3BFB2] mt-1 p-[1px]";
//   const inputClass =
//     "w-full bg-slate-900 text-white rounded-md py-2 px-3 focus:outline-none focus:ring-0";

//   const days = [
//     "Monday",
//     "Tuesday",
//     "Thursday",
//     "Friday",
//     "Saturday",
//     "Sunday",
//   ];

//   // const citizenship = watch("citizenship", []);
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
//             Employee Weekly Time Sheet (For Temporary Employee)
//           </h1>
//           <p className="text-lg text-gray-200 mb-7">
//             Submit Timesheet to Payroll@Cbyracinc.com
//           </p>
//           {/* <ProgressBar currentStep={step} totalSteps={totalSteps} /> */}
//         </div>

//         {/* Form */}
//         <form
//           onSubmit={handleSubmit(onSubmit)}
//           className="rounded-2xl max-w-7xl mx-auto"
//         >
//           {/* General Information */}
//           <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-3">
//             {/* Last Name */}
//             <div>
//               <label className="mb-1 block">
//                 Employee First Name <span className="text-red-500">*</span>
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

//             {/* Last Name */}
//             <div>
//               <label className="mb-1 block">
//                 Employee Last Name <span className="text-red-500">*</span>
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
//                 Department Name <span className="text-red-500">*</span>
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
//                 Job Title
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

//           {/* Date of Birth & SSN */}
//           <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
//             <div>
//               <label className="mb-1 block">
//                 Address <span className="text-red-500">*</span>
//               </label>
//               <div className={inputWrapperClass}>
//                 <input
//                   type="date"
//                   {...register("dob", {
//                     required: "Date of Birth is required",
//                   })}
//                   className={inputClass}
//                 />
//               </div>
//               {errors.dob && (
//                 <p className="text-red-500 text-sm">{errors.dob.message}</p>
//               )}
//             </div>

//             <div>
//               <label className="mb-1 block">
//                 Phone Number
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
//                 Supervisor’s Name <span className="text-red-500">*</span>
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
//                 Supervisor’s Phone
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
//           {/* table */}
//           <div className="bg-white flex items-center justify-center text-black mt-10 mb-10">
//             <div className="w-full max-w-7xl">
//               <table className="w-full border-collapse">
//                 <thead>
//                   <tr className="bg-gray-200 text-black">
//                     <th className="border px-3 py-3">DAY</th>
//                     <th className="border px-3 py-3">DATE</th>
//                     <th className="border px-3 py-3">TIME IN</th>
//                     <th className="border px-3 py-3">LUNCH TIMEOUT</th>
//                     <th className="border px-3 py-3">LUNCH TIME IN</th>
//                     <th className="border px-3 py-3">TIME OUT</th>
//                     <th className="border px-3 py-3">STRAIGHT HOURS</th>
//                     <th className="border px-3 py-3">OVERTIME HOURS</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {days.map((day, index) => (
//                     <tr key={index} className="text-center">
//                       <td className="border px-3 py-2 bg-gray-200 font-medium text-black">
//                         {day}
//                       </td>
//                       <td className="border px-5 py-3">
//                         <input
//                           type="text"
//                           className="w-full text-center border-none outline-none"
//                         />
//                       </td>
//                       <td className="border px-5 py-3">
//                         <input
//                           type="text"
//                           className="w-full text-center border-none outline-none"
//                         />
//                       </td>
//                       <td className="border px-5 py-3">
//                         <input
//                           type="text"
//                           className="w-full text-center border-none outline-none"
//                         />
//                       </td>
//                       <td className="border px-5 py-3">
//                         <input
//                           type="text"
//                           className="w-full text-center border-none outline-none"
//                         />
//                       </td>
//                       <td className="border px-5 py-3">
//                         <input
//                           type="text"
//                           className="w-full text-center border-none outline-none"
//                         />
//                       </td>
//                       <td className="border px-5 py-3">
//                         <input
//                           type="text"
//                           className="w-full text-center border-none outline-none"
//                         />
//                       </td>
//                       <td className="border px-5 py-3">
//                         <input
//                           type="text"
//                           className="w-full text-center border-none outline-none"
//                         />
//                       </td>
//                     </tr>
//                   ))}
//                   <tr>
//                     <td
//                       colSpan="6"
//                       className="border px-3 py-2 text-right bg-gray-200 font-semibold text-black"
//                     >
//                       Weekly Total
//                     </td>
//                     <td className="border px-3 py-2">
//                       <input
//                         type="text"
//                         className="w-full text-center border-none outline-none"
//                       />
//                     </td>
//                     <td className="border px-3 py-2">
//                       <input
//                         type="text"
//                         className="w-full text-center border-none outline-none"
//                       />
//                     </td>
//                   </tr>
//                 </tbody>
//               </table>
//             </div>
//           </div>
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
//           </div>

//           {/* Signature & Date */}
//           <div className="grid grid-cols-1 sm:grid-cols-3 mb-4">
//             <div>
//               <label className="block mb-2">
//                 Supervisor’s Signature <span className="text-red-500">*</span>
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
//               <label className="mb-1 block">Title</label>
//               <div className={inputWrapperClass}>
//                 <input
//                   type="text"
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
//               type="submit"
//               className="px-16 py-4 bg-[#946344] text-white text-lg font-medium rounded-md hover:opacity-90"
//             >
//               Download Timesheet
//             </button>
//             <button
//               type="submit"
//               className="px-16 py-4 bg-[#946344] text-white text-lg font-medium rounded-md hover:opacity-90"
//             >
//               Submit
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Timesheet;

import { useState } from "react";
import { useForm } from "react-hook-form";
const days = ["Monday", "Tuesday", "Thursday", "Friday", "Saturday", "Sunday"];

const TimeSheetTemp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      citizenship: [],
    },
  });

  const onSubmit = (data) => {
    console.log("I-9 Form Data Submitted:", data);
    alert("Form submitted successfully! Check console.");
  };

  const inputWrapperClass =
    "rounded-md bg-gradient-to-r from-[#8D6851] to-[#D3BFB2] mt-1 p-[1px]";
  const inputClass =
    "w-full bg-slate-900 text-white rounded-md py-2 px-3 focus:outline-none focus:ring-0";

  // Calendar and time with total calculation
  const [rows, setRows] = useState(
    days.map(() => ({
      date: "",
      timeIn: "",
      lunchTimeout: "",
      lunchTimeIn: "",
      timeOut: "",
      straightHours: "",
      overtimeHours: "",
    }))
  );

  // handle input change
  const handleChange = (index, field, value) => {
    const newRows = [...rows];
    newRows[index][field] = value;
    setRows(newRows);
  };

  // calculate totals
  const totalStraight = rows.reduce(
    (sum, row) => sum + (parseFloat(row.straightHours) || 0),
    0
  );
  const totalOvertime = rows.reduce(
    (sum, row) => sum + (parseFloat(row.overtimeHours) || 0),
    0
  );

  return (
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
          <div className="w-24 h-24 bg-white rounded flex items-center justify-center">
            <img src="/cbyrac-logo.png" alt="Company Logo" />
          </div>
        </div>

        {/* Title */}
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold mb-2">
            Employee Weekly Time Sheet (For Temporary Employee)
          </h1>
          <p className="text-lg text-gray-200 mb-7">
            Submit Timesheet to Payroll@Cbyracinc.com
          </p>
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="rounded-2xl max-w-7xl mx-auto"
        >
          {/* General Information */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-3">
            {/* First Name */}
            <div>
              <label className="mb-1 block">
                Employee First Name <span className="text-red-500">*</span>
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

            {/* Last Name */}
            <div>
              <label className="mb-1 block">
                Employee Last Name <span className="text-red-500">*</span>
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
          </div>

          {/* Department Name & Job Title */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-3">
            <div>
              <label className="mb-1 block">
                Department Name <span className="text-red-500">*</span>
              </label>
              <div className={inputWrapperClass}>
                <input
                  type="text"
                  placeholder="Enter Department Name"
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
              <label className="mb-1 block">
                Job Title <span className="text-red-500">*</span>
              </label>
              <div className={inputWrapperClass}>
                <input
                  type="text"
                  placeholder="Enter Job Title"
                  {...register("jobTitle", {
                    required: "Job title is required",
                  })}
                  className={inputClass}
                />
              </div>
              {errors.jobTitle && (
                <p className="text-red-500 text-sm">
                  {errors.jobTitle.message}
                </p>
              )}
            </div>
          </div>

          {/* Address & Phone */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="mb-1 block">
                Address <span className="text-red-500">*</span>
              </label>
              <div className={inputWrapperClass}>
                <input
                  type="text"
                  placeholder="Enter Address"
                  {...register("address", {
                    required: "Address is required",
                  })}
                  className={inputClass}
                />
              </div>
              {errors.address && (
                <p className="text-red-500 text-sm">{errors.address.message}</p>
              )}
            </div>

            <div>
              <label className="mb-1 block">
                Phone Number <span className="text-red-500">*</span>
              </label>
              <div className={inputWrapperClass}>
                <input
                  type="tel"
                  placeholder="Enter Phone Number"
                  {...register("phone", {
                    required: "Phone number is required",
                  })}
                  className={inputClass}
                />
              </div>
              {errors.phone && (
                <p className="text-red-500 text-sm">{errors.phone.message}</p>
              )}
            </div>
          </div>

          {/* Supervisor Email & Phone */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="mb-1 block">
                Supervisor’s Email <span className="text-red-500">*</span>
              </label>
              <div className={inputWrapperClass}>
                <input
                  type="email"
                  placeholder="Enter Supervisor Email"
                  {...register("supervisorEmail", {
                    required: "Email is required",
                  })}
                  className={inputClass}
                />
              </div>
              {errors.supervisorEmail && (
                <p className="text-red-500 text-sm">
                  {errors.supervisorEmail.message}
                </p>
              )}
            </div>

            <div>
              <label className="mb-1 block">
                Supervisor’s Phone <span className="text-red-500">*</span>
              </label>
              <div className={inputWrapperClass}>
                <input
                  type="tel"
                  placeholder="Enter Supervisor Phone"
                  {...register("supervisorPhone", {
                    required: "Phone number is required",
                  })}
                  className={inputClass}
                />
              </div>
              {errors.supervisorPhone && (
                <p className="text-red-500 text-sm">
                  {errors.supervisorPhone.message}
                </p>
              )}
            </div>
          </div>

          {/* Table */}
          <div className="bg-white flex items-center justify-center text-black mt-10 mb-10">
            <div className="w-full max-w-7xl">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gray-200 text-black">
                    <th className="border px-3 py-3">DAY</th>
                    <th className="border px-3 py-3">DATE</th>
                    <th className="border px-3 py-3">TIME IN</th>
                    <th className="border px-3 py-3">LUNCH TIMEOUT</th>
                    <th className="border px-3 py-3">LUNCH TIME IN</th>
                    <th className="border px-3 py-3">TIME OUT</th>
                    <th className="border px-3 py-3">STRAIGHT HOURS</th>
                    <th className="border px-3 py-3">OVERTIME HOURS</th>
                  </tr>
                </thead>
                <tbody>
                  {days.map((day, index) => (
                    <tr key={index} className="text-center">
                      <td className="border px-3 py-2 bg-gray-200 font-medium text-black">
                        {day}
                      </td>
                      <td className="border px-5 py-3">
                        <input
                          type="date"
                          value={rows[index].date}
                          onChange={(e) =>
                            handleChange(index, "date", e.target.value)
                          }
                          className="w-full text-center border-none outline-none"
                        />
                      </td>
                      <td className="border px-5 py-3">
                        <input
                          type="time"
                          value={rows[index].timeIn}
                          onChange={(e) =>
                            handleChange(index, "timeIn", e.target.value)
                          }
                          className="w-full text-center border-none outline-none"
                        />
                      </td>
                      <td className="border px-5 py-3">
                        <input
                          type="time"
                          value={rows[index].lunchTimeout}
                          onChange={(e) =>
                            handleChange(index, "lunchTimeout", e.target.value)
                          }
                          className="w-full text-center border-none outline-none"
                        />
                      </td>
                      <td className="border px-5 py-3">
                        <input
                          type="time"
                          value={rows[index].lunchTimeIn}
                          onChange={(e) =>
                            handleChange(index, "lunchTimeIn", e.target.value)
                          }
                          className="w-full text-center border-none outline-none"
                        />
                      </td>
                      <td className="border px-5 py-3">
                        <input
                          type="time"
                          value={rows[index].timeOut}
                          onChange={(e) =>
                            handleChange(index, "timeOut", e.target.value)
                          }
                          className="w-full text-center border-none outline-none"
                        />
                      </td>
                      <td className="border px-5 py-3">
                        <input
                          type="number"
                          placeholder="0"
                          value={rows[index].straightHours}
                          onChange={(e) =>
                            handleChange(index, "straightHours", e.target.value)
                          }
                          className="w-full text-center border-none outline-none"
                        />
                      </td>
                      <td className="border px-5 py-3">
                        <input
                          type="number"
                          placeholder="0"
                          value={rows[index].overtimeHours}
                          onChange={(e) =>
                            handleChange(index, "overtimeHours", e.target.value)
                          }
                          className="w-full text-center border-none outline-none"
                        />
                      </td>
                    </tr>
                  ))}

                  {/* Weekly Total Row */}
                  <tr>
                    <td
                      colSpan="6"
                      className="border px-3 py-2 text-right bg-gray-200 font-semibold text-black"
                    >
                      Weekly Total
                    </td>
                    <td className="border px-3 py-2 bg-gray-100 text-center font-bold">
                      {totalStraight}
                    </td>
                    <td className="border px-3 py-2 bg-gray-100 text-center font-bold">
                      {totalOvertime}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Signature & Date */}
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
                  />
                </label>
              </div>
              {errors.employeeSignature && (
                <p className="text-red-500 text-sm">
                  {errors.employeeSignature.message}
                </p>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 mb-4">
            <div>
              <label className="block mb-2">
                Supervisor’s Signature <span className="text-red-500">*</span>
              </label>
              <div className="w-[350px] h-[50px] bg-gradient-to-l from-[#D4BFB2] to-[#8D6851] rounded-md mt-1 flex items-center justify-center">
                <label className="w-full h-full flex items-center justify-center text-white cursor-pointer">
                  <span className="text-center">Upload Signature</span>
                  <input
                    type="file"
                    accept="image/*"
                    {...register("supervisorSignature", {
                      required: "Signature is required",
                    })}
                    className="hidden"
                  />
                </label>
              </div>
              {errors.supervisorSignature && (
                <p className="text-red-500 text-sm">
                  {errors.supervisorSignature.message}
                </p>
              )}
            </div>
            <div>
              <label className="mb-1 block">Title</label>
              <div className={inputWrapperClass}>
                <input
                  type="text"
                  {...register("title", { required: "Title is required" })}
                  className={inputClass}
                />
              </div>
              {errors.title && (
                <p className="text-red-500 text-sm">{errors.title.message}</p>
              )}
            </div>
          </div>

          {/* Submit */}
          <div className="flex justify-center mt-6 gap-4">
            <button
              type="button"
              className="px-16 py-4 bg-[#946344] text-white text-lg font-medium rounded-md hover:opacity-90"
            >
              Download Timesheet
            </button>
            <button
              type="submit"
              className="px-16 py-4 bg-[#946344] text-white text-lg font-medium rounded-md hover:opacity-90"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TimeSheetTemp;
