// import React, { useState } from "react";

// import { ChevronLeft, ChevronRight } from "lucide-react";
// import { Label } from "../../ui/Label";
// import { Input } from "../../ui/Input";
// import { Textarea } from "../../ui/Textarea";
// import { Button } from "../../ui/Button";
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "../../ui/Select";

// const TimeSheet = ({ prevStep, timesheetData, handleTimesheetChange, handleSubmit }) => {
//   const [formData, setFormData] = useState({
//     firstName: "",
//     middleName: "",
//     lastName: "",
//     socialSecurity: "",
//     dateOfBirth: "",
//     applicationDate: "",
//     telephoneNumber: "",
//     emailAddress: "",
//     address: "",
//     emergencyContactName: "",
//     emergencyContactPhone: "",
//     emergencyContactRelation: "",
//     employmentDesired: "",
//     desiredSalary: "",
//     hourlyRate: "",
//     positionAppliedFor: "",
//     department: "",
//     overtime: "",
//     dateCanStart: "",
//     previouslyApplied: "",
//     appliedBefore: "",
//     everEmployed: "",
//     employmentDetails: "",
//     specialSkills: "",
//     highSchoolGraduationStatus: "",
//   });

//   const handleInputChange = (field, value) => {
//     setFormData((prev) => ({ ...prev, [field]: value }));
//   };

//   // Gradient styled components
//   const GradientInput = ({
//     id,
//     value = "",
//     onChange = () => {},
//     placeholder = "",
//     type = "text",
//     ...rest
//   }) => (
//     <div className="p-[1px] rounded-md bg-gradient-to-r from-[#8D6851] to-[#D3BFB2] mt-1">
//       <Input
//         id={id}
//         type={type}
//         value={value}
//         onChange={onChange}
//         placeholder={placeholder}
//         className="w-full rounded-md bg-slate-900 text-white focus:outline-none focus:ring-0 min-h-[44px] py-3"
//         {...rest}
//       />
//     </div>
//   );

//   const GradientTextarea = ({
//     id,
//     value = "",
//     onChange = () => {},
//     placeholder = "",
//     ...rest
//   }) => (
//     <div className="p-[1px] rounded-md bg-gradient-to-r from-[#8D6851] to-[#D3BFB2] mt-1">
//       <Textarea
//         id={id}
//         value={value}
//         onChange={onChange}
//         placeholder={placeholder}
//         className="w-full rounded-md bg-slate-900 text-white focus:outline-none focus:ring-0 min-h-[120px] py-3"
//         {...rest}
//       />
//     </div>
//   );

//   const GradientSelect = ({
//     value = "",
//     onValueChange = () => {},
//     placeholder = "",
//     children,
//     ...rest
//   }) => (
//     <div className="p-[1px] rounded-md bg-gradient-to-r from-[#8D6851] to-[#D3BFB2] mt-1">
//       <Select value={value} onValueChange={onValueChange} {...rest}>
//         <SelectTrigger className="w-full rounded-md bg-slate-900 text-white focus:outline-none focus:ring-0 min-h-[44px] py-3">
//           <SelectValue placeholder={placeholder} />
//         </SelectTrigger>
//         <SelectContent>{children}</SelectContent>
//       </Select>
//     </div>
//   );
//   return (
//     <div>
//       <div className="text-white ">
//         <div className="max-w-7xl mx-auto">
//           {/* Header */}
//           <div className="flex justify-between items-start mb-8">
//             <div className="text-sm">
//               <div className="font-bold text-lg mb-2">CBYRAC, INC</div>
//               <div>123 MAIN STREET SUITE 100</div>
//               <div>ANYTOWN, STATE 12345</div>
//               <div>PHONE: 555-555-5555</div>
//               <div>EMAIL: info@cbyrac.com</div>
//             </div>
//             <div className="w-20 h-20 bg-white rounded flex items-center justify-center">
//               <div className="w-16 h-16 bg-gradient-to-br from-[#8D6851] to-[#D3BFB2] rounded flex items-center justify-center">
//                 <div className="text-slate-900 font-bold text-xl">C</div>
//               </div>
//             </div>
//           </div>

//           {/* Title */}
//           <div className="text-center mb-8">
//             <h1 className="text-3xl font-bold mb-2 text-red-500">
//               Employment Application
//             </h1>
//             <p className="text-sm text-gray-300">
//               Please fill all forms, signatures are not a substitute for a
//               completed application
//             </p>
//             <div className="w-full h-3 bg-gradient-to-r from-[#8D6851] to-[#D3BFB2] mt-4"></div>
//           </div>

//           <form className="space-y-8">
//             {/* General Information */}
//             <section>
//               <h2 className="text-xl font-semibold mb-6 pb-2 border-b border-[#8C6750]">
//                 General Information
//               </h2>

//               <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
//                 <div>
//                   <Label htmlFor="firstName">First Name</Label>
//                   <GradientInput
//                     id="firstName"
//                     value={formData.firstName}
//                     onChange={(e) =>
//                       handleInputChange("firstName", e.target.value)
//                     }
//                     placeholder="Enter First Name"
//                   />
//                 </div>
//                 <div>
//                   <Label htmlFor="middleName">Middle Name</Label>
//                   <GradientInput
//                     id="middleName"
//                     value={formData.middleName}
//                     onChange={(e) =>
//                       handleInputChange("middleName", e.target.value)
//                     }
//                     placeholder="Enter Middle Name"
//                   />
//                 </div>
//                 <div>
//                   <Label htmlFor="lastName">Last Name</Label>
//                   <GradientInput
//                     id="lastName"
//                     value={formData.lastName}
//                     onChange={(e) =>
//                       handleInputChange("lastName", e.target.value)
//                     }
//                     placeholder="Enter Last Name"
//                   />
//                 </div>
//               </div>

//               {/* Social, DOB, Application Date */}
//               <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
//                 <div>
//                   <Label htmlFor="socialSecurity">Social Security Number</Label>
//                   <GradientInput
//                     id="socialSecurity"
//                     value={formData.socialSecurity}
//                     onChange={(e) =>
//                       handleInputChange("socialSecurity", e.target.value)
//                     }
//                     placeholder="Enter SSN"
//                   />
//                 </div>
//                 <div>
//                   <Label htmlFor="dateOfBirth">Date Of Birth</Label>
//                   <GradientInput
//                     id="dateOfBirth"
//                     type="date"
//                     value={formData.dateOfBirth}
//                     onChange={(e) =>
//                       handleInputChange("dateOfBirth", e.target.value)
//                     }
//                   />
//                 </div>
//                 <div>
//                   <Label htmlFor="applicationDate">Application Date</Label>
//                   <GradientInput
//                     id="applicationDate"
//                     type="date"
//                     value={formData.applicationDate}
//                     onChange={(e) =>
//                       handleInputChange("applicationDate", e.target.value)
//                     }
//                   />
//                 </div>
//               </div>

//               {/* Phone and Email */}
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
//                 <div>
//                   <Label htmlFor="telephoneNumber">Telephone Number</Label>
//                   <GradientInput
//                     id="telephoneNumber"
//                     value={formData.telephoneNumber}
//                     onChange={(e) =>
//                       handleInputChange("telephoneNumber", e.target.value)
//                     }
//                     placeholder="Enter Telephone Number"
//                   />
//                 </div>
//                 <div>
//                   <Label htmlFor="emailAddress">Email Address</Label>
//                   <GradientInput
//                     id="emailAddress"
//                     type="email"
//                     value={formData.emailAddress}
//                     onChange={(e) =>
//                       handleInputChange("emailAddress", e.target.value)
//                     }
//                     placeholder="Enter Email Address"
//                   />
//                 </div>
//               </div>

//               {/* Address */}
//               <div className="mb-4">
//                 <Label htmlFor="address">Address</Label>
//                 <GradientInput
//                   id="address"
//                   value={formData.address}
//                   onChange={(e) => handleInputChange("address", e.target.value)}
//                   placeholder="Street / Apartment / City / State / Zip"
//                 />
//               </div>

//               {/* Emergency Contact */}
//               <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
//                 <div>
//                   <Label htmlFor="emergencyContactName">
//                     Emergency Contact Name
//                   </Label>
//                   <GradientInput
//                     id="emergencyContactName"
//                     value={formData.emergencyContactName}
//                     onChange={(e) =>
//                       handleInputChange("emergencyContactName", e.target.value)
//                     }
//                     placeholder="Enter Name"
//                   />
//                 </div>
//                 <div>
//                   <Label htmlFor="emergencyContactPhone">Relation</Label>
//                   <GradientInput
//                     id="emergencyContactPhone"
//                     value={formData.emergencyContactPhone}
//                     onChange={(e) =>
//                       handleInputChange("emergencyContactPhone", e.target.value)
//                     }
//                     placeholder="Enter Relation"
//                   />
//                 </div>
//                 <div>
//                   <Label htmlFor="emergencyContactRelation">
//                     Emergency Phone
//                   </Label>
//                   <GradientInput
//                     id="emergencyContactRelation"
//                     value={formData.emergencyContactRelation}
//                     onChange={(e) =>
//                       handleInputChange(
//                         "emergencyContactRelation",
//                         e.target.value
//                       )
//                     }
//                     placeholder="Enter Phone"
//                   />
//                 </div>
//               </div>

//               {/* Employment Desired */}
//               <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
//                 <div>
//                   <Label>Type of Employment Desired</Label>
//                   <GradientSelect
//                     value={formData.employmentDesired}
//                     onValueChange={(value) =>
//                       handleInputChange("employmentDesired", value)
//                     }
//                     placeholder="Select Employment"
//                   >
//                     <SelectItem value="full-time">Full Time</SelectItem>
//                     <SelectItem value="part-time">Part Time</SelectItem>
//                     <SelectItem value="contract">Contract</SelectItem>
//                     <SelectItem value="temporary">Temporary</SelectItem>
//                   </GradientSelect>
//                 </div>
//                 <div>
//                   <Label htmlFor="desiredSalary">Desired Salary</Label>
//                   <GradientInput
//                     id="desiredSalary"
//                     value={formData.desiredSalary}
//                     onChange={(e) =>
//                       handleInputChange("desiredSalary", e.target.value)
//                     }
//                     placeholder="Enter Salary"
//                   />
//                 </div>
//                 <div>
//                   <Label htmlFor="hourlyRate">Hourly Rate (Optional)</Label>
//                   <GradientInput
//                     id="hourlyRate"
//                     value={formData.hourlyRate}
//                     onChange={(e) =>
//                       handleInputChange("hourlyRate", e.target.value)
//                     }
//                     placeholder="Enter Hourly"
//                   />
//                 </div>
//               </div>

//               {/* Position */}
//               <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
//                 <div>
//                   <Label htmlFor="positionAppliedFor">
//                     Position Applied For
//                   </Label>
//                   <GradientInput
//                     id="positionAppliedFor"
//                     value={formData.positionAppliedFor}
//                     onChange={(e) =>
//                       handleInputChange("positionAppliedFor", e.target.value)
//                     }
//                     placeholder="Enter Position"
//                   />
//                 </div>
//                 <div>
//                   <Label htmlFor="department">Department</Label>
//                   <GradientInput
//                     id="department"
//                     value={formData.department}
//                     onChange={(e) =>
//                       handleInputChange("department", e.target.value)
//                     }
//                     placeholder="Enter Department"
//                   />
//                 </div>
//                 <div>
//                   <Label>Overtime</Label>
//                   <GradientSelect
//                     value={formData.overtime}
//                     onValueChange={(value) =>
//                       handleInputChange("overtime", value)
//                     }
//                     placeholder="Select"
//                   >
//                     <SelectItem value="yes">Yes</SelectItem>
//                     <SelectItem value="no">No</SelectItem>
//                   </GradientSelect>
//                 </div>
//               </div>

//               {/* Date Can Start */}
//               <div className="mb-4">
//                 <Label htmlFor="dateCanStart">Date You Can Start</Label>
//                 <GradientInput
//                   id="dateCanStart"
//                   type="date"
//                   value={formData.dateCanStart}
//                   onChange={(e) =>
//                     handleInputChange("dateCanStart", e.target.value)
//                   }
//                 />
//               </div>

//               {/* Previously Applied */}
//               <div className="mb-4">
//                 <Label>Previously Applied?</Label>
//                 <GradientSelect
//                   value={formData.previouslyApplied}
//                   onValueChange={(value) =>
//                     handleInputChange("previouslyApplied", value)
//                   }
//                   placeholder="Select"
//                 >
//                   <SelectItem value="yes">Yes</SelectItem>
//                   <SelectItem value="no">No</SelectItem>
//                 </GradientSelect>
//               </div>

//               <div className="mb-4">
//                 <Label htmlFor="appliedBefore">If Yes, When and Where</Label>
//                 <GradientInput
//                   id="appliedBefore"
//                   value={formData.appliedBefore}
//                   onChange={(e) =>
//                     handleInputChange("appliedBefore", e.target.value)
//                   }
//                   placeholder="Enter Details"
//                 />
//               </div>

//               <div className="mb-4">
//                 <Label>Ever Employed Before?</Label>
//                 <GradientSelect
//                   value={formData.everEmployed}
//                   onValueChange={(value) =>
//                     handleInputChange("everEmployed", value)
//                   }
//                   placeholder="Select"
//                 >
//                   <SelectItem value="yes">Yes</SelectItem>
//                   <SelectItem value="no">No</SelectItem>
//                 </GradientSelect>
//               </div>

//               <div className="mb-4">
//                 <Label htmlFor="employmentDetails">
//                   If Yes, Provide Details
//                 </Label>
//                 <GradientInput
//                   id="employmentDetails"
//                   value={formData.employmentDetails}
//                   onChange={(e) =>
//                     handleInputChange("employmentDetails", e.target.value)
//                   }
//                   placeholder="Enter Details"
//                 />
//               </div>
//             </section>

//             {/* Educational Info (just showing one row as example) */}
//             <section>
//               <h2 className="text-xl font-semibold mb-6 pb-2 border-b border-[#8C6750]">
//                 Educational Information
//               </h2>

//               <div className="h-[150px]">
//                 <table className="w-full border-collapse border border-[#8C6750] table-fixed">
//                   <thead>
//                     <tr className="bg-gray-800">
//                       <th className="border border-[#8C6750] p-2 text-left text-sm">
//                         Education
//                       </th>
//                       <th className="border border-[#8C6750] p-2 text-left text-sm">
//                         School Name
//                       </th>
//                       <th className="border border-[#8C6750] p-2 text-left text-sm">
//                         Study / Major
//                       </th>
//                       <th className="border border-[#8C6750] p-2 text-left text-sm">
//                         Graduation Status
//                       </th>
//                       <th className="border border-[#8C6750] p-2 text-left text-sm">
//                         # Of Years
//                       </th>
//                       <th className="border border-[#8C6750] p-2 text-left text-sm">
//                         Honors
//                       </th>
//                     </tr>
//                   </thead>
//                   <tbody>
//                     <tr>
//                       <td className="border border-[#8C6750] p-2 text-sm">
//                         High School
//                       </td>
//                       <td className="border border-[#8C6750] p-2">
//                         <GradientInput />
//                       </td>
//                       <td className="border border-[#8C6750] p-2">
//                         <GradientInput />
//                       </td>
//                       <td className="border border-[#8C6750] p-2">
//                         <GradientSelect
//                           value={formData.highSchoolGraduationStatus}
//                           onValueChange={(value) =>
//                             handleInputChange(
//                               "highSchoolGraduationStatus",
//                               value
//                             )
//                           }
//                           placeholder="Select"
//                         >
//                           <SelectItem value="graduated">Graduated</SelectItem>
//                           <SelectItem value="in-progress">
//                             In Progress
//                           </SelectItem>
//                           <SelectItem value="incomplete">Incomplete</SelectItem>
//                         </GradientSelect>
//                       </td>
//                       <td className="border border-[#8C6750] p-2">
//                         <GradientInput />
//                       </td>
//                       <td className="border border-[#8C6750] p-2">
//                         <GradientInput />
//                       </td>
//                     </tr>
//                   </tbody>
//                 </table>
//               </div>
//             </section>

//             {/* Skills */}
//             <section>
//               <h2 className="text-xl font-semibold mb-6 pb-2 border-b border-[#8C6750]">
//                 Special Skills
//               </h2>
//               <GradientTextarea
//                 id="specialSkills"
//                 value={formData.specialSkills}
//                 onChange={(e) =>
//                   handleInputChange("specialSkills", e.target.value)
//                 }
//                 placeholder="Enter skills..."
//               />
//             </section>

//             {/* Signature */}
//             <section>
//               <div className="mb-4">
//                 <Label>Employee Signature - Thumb or Upload</Label>
//                 <div className="mt-2">
//                   <Button
//                     type="button"
//                     className="bg-gradient-to-r from-[#8D6851] to-[#D3BFB2] hover:from-[#7A5A47] hover:to-[#C4AFA0] text-white px-8 py-2"
//                   >
//                     Choose File
//                   </Button>
//                   <span className="ml-3 text-sm text-gray-400">
//                     No file chosen
//                   </span>
//                 </div>
//               </div>
//             </section>

//             {/* Navigation Buttons */}
//             <div className="flex justify-center pt-6">
//               <div className="flex items-center">
//                 <Button
//                   type="button"
//                   className="flex items-center text-white"
//                   style={{ background: "none", boxShadow: "none" }}
//                 >
//                   <ChevronLeft className="mr-2 w-6 h-6" /> Previous
//                 </Button>
//                 <p>.......</p>
//                 <Button
//                   type="button"
//                   className="flex items-center text-white "
//                   style={{ background: "none", boxShadow: "none" }}
//                 >
//                   Next <ChevronRight className="ml-2 w-6 h-6" />
//                 </Button>
//               </div>
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TimeSheet;

import React from "react";
import { ChevronLeft } from "lucide-react";
import { Label } from "../../ui/Label";
import { Input } from "../../ui/Input";
import { Textarea } from "../../ui/Textarea";
import { Button } from "../../ui/Button";

const Timesheet = ({
  prevStep,
  timesheetData,
  handleTimesheetChange,
  handleSubmit,
}) => {
  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <h2 className="text-2xl font-bold mb-4">Timesheet</h2>

      <div className="mb-4">
        <Label htmlFor="hoursWorked">Hours Worked</Label>
        <Input
          id="hoursWorked"
          value={timesheetData.hoursWorked}
          onChange={(e) => handleTimesheetChange("hoursWorked", e.target.value)}
          placeholder="Enter Hours"
          className="w-full rounded-md bg-slate-900 text-white py-2"
        />
      </div>

      <div className="mb-4">
        <Label htmlFor="taskDetails">Task Details</Label>
        <Textarea
          id="taskDetails"
          value={timesheetData.taskDetails}
          onChange={(e) => handleTimesheetChange("taskDetails", e.target.value)}
          placeholder="Describe tasks..."
          className="w-full rounded-md bg-slate-900 text-white py-2"
        />
      </div>

      <div className="flex justify-between mt-6">
        <Button type="button" onClick={prevStep} className="flex items-center">
          <ChevronLeft className="mr-2 w-6 h-6" /> Back
        </Button>

        <Button
          type="button"
          onClick={handleSubmit}
          className="bg-gradient-to-r from-[#8D6851] to-[#D3BFB2]"
        >
          Submit
        </Button>
      </div>
    </div>
  );
};

export default Timesheet;
