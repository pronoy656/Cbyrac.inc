// import html2pdf from "html2pdf.js";
// import { Download, Printer } from "lucide-react";
// import { useRef, useState } from "react";

// const PdfViewer = () => {
//   const [formData, setFormData] = useState({});
//   const printRef = useRef < HTMLDivElement > null; // Reference to printable content

//   const handlePrint = () => {
//     window.print();
//   };

//   const handleDownloadPDF = () => {
//     console.log("Click Download button");
//     if (!printRef.current) return;

//     const element = printRef.current;

//     // Configure html2pdf options
//     const opt = {
//       margin: [0.5, 0.5, 0.5, 0.5],
//       filename: "CBYRAC_Employment_Application.pdf",
//       image: { type: "jpeg", quality: 0.98 },
//       html2canvas: { scale: 2, useCORS: true },
//       jsPDF: { unit: "in", format: "letter", orientation: "portrait" },
//     };

//     // Generate and download PDF
//     html2pdf().set(opt).from(element).save();
//   };

//   return (
//     <div>
//       <div className="min-h-screen bg-gray-50 p-4 print:p-0 print:bg-white">
//         <div className="max-w-4xl mx-auto bg-white shadow-lg print:shadow-none">
//           {/* Print Button - Hidden when printing */}
//           <div className="p-4 print:hidden flex justify-end">
//             <button
//               onClick={handlePrint}
//               className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
//             >
//               <Printer size={20} />
//               Print Form
//             </button>
//             <button
//               onClick={handleDownloadPDF}
//               className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
//             >
//               <Download size={20} />
//               Download Form
//             </button>
//           </div>

//           {/* Page 1 */}
//           <div className="p-8 print:p-12 page-break">
//             <div className="flex justify-between">
//               {/* Header */}
//               <div className=" pb-4 mb-6">
//                 <h1 className="text-xl font-bold">CBYRAC, INC</h1>
//                 <p className="text-sm mt-1">633 NE 167TH STREET, SUITE 709</p>
//                 <p className="text-sm font-medium">
//                   NORTH MIAMI BEACH, FL. 33162
//                 </p>
//                 <p className="text-sm font-medium">PH:786-403-5043</p>
//                 <p className="text-sm font-medium">
//                   E-MAIL: cbyracinc@gmail.com
//                 </p>
//               </div>
//               <div>
//                 <img className="w-48 h-22" src="/logo-with-name.png" alt="" />
//               </div>
//             </div>
//             <h2 className="bg-black text-white text-center text-lg font-bold mb-4">
//               APPLICATION FOR EMPLOYMENT
//             </h2>

//             <p className=" font-bold text-center mb-4">
//               Please Answer All Questions. Resumes Are Not A Substitute For A
//               Completed Application.
//             </p>

//             <div className="flex mb-4 justify-end font-medium">
//               <span>Date _________________________</span>
//             </div>

//             <p className="text-[13px] mb-3 leading-relaxed font-medium">
//               We are an equal opportunity employer. Applicants are considered
//               for positions without regard to veteran status, uniformed
//               servicemember status, race color, religion, sex, national origin,
//               age, physical or mental disability, genetic information or any
//               other category protected by applicable federal, state, or local
//               laws.
//             </p>

//             <p className="text-smmb-4 leading-relaxed font-semibold">
//               THIS COMPANY IS AN AT-WILL EMPLOYER AS ALLOWED BY APPLICABLE STATE
//               LAW. THIS MEANS THAT REGARDLESS OF ANY PROVISION IN THIS
//               APPLICATION, IF HIRED, THE COMPANY OR I MAY TERMINATE THE
//               EMPLOYMENT RELATIONSHIP AT ANY TIME, FOR ANY REASON, WITH OR
//               WITHOUT CAUSE OR NOTICE.
//             </p>

//             {/* Personal Information */}
//             <div className="space-y-3 mb-4">
//               <div className="grid grid-cols-3 gap-4 mt-6">
//                 <div className="flex items-center gap-2">
//                   <span className="text-sm font-medium">Last Name:</span>
//                   <span className="border-b border-black flex-1 min-w-[180px]">
//                     {formData.lastName || "\u00A0"}
//                   </span>
//                 </div>
//                 <div className="flex items-center gap-2">
//                   <span className="text-sm font-medium">First Name:</span>
//                   <span className="text-sm font-medium border-b border-black flex-1 min-w-[180px]">
//                     {formData.firstName || "\u00A0"}
//                   </span>
//                 </div>
//                 <div className="flex items-center gap-4">
//                   <span className="text-sm font-medium">Middle Name:</span>
//                   <span className="text-sm font-medium border-b border-black flex-1 min-w-[150px]">
//                     {formData.middleName || "\u00A0"}
//                   </span>
//                 </div>
//               </div>

//               <div className="grid grid-cols-2 gap-4">
//                 <div className="flex items-center gap-2">
//                   <span className="text-sm font-medium whitespace-nowrap">
//                     Social Security Number:
//                   </span>
//                   <span className="text-sm font-medium border-b border-black flex-1 min-w-0">
//                     {formData.ssn || "\u00A0"}
//                   </span>
//                 </div>
//                 <div className="flex items-center gap-2">
//                   <span className="text-sm font-medium whitespace-nowrap">
//                     DOB:
//                   </span>
//                   <span className="text-sm font-medium border-b border-black flex-1 min-w-0">
//                     {formData.dob || "\u00A0"}
//                   </span>
//                 </div>
//               </div>

//               <div className="grid grid-cols-2 gap-4">
//                 <div className="flex items-center gap-2">
//                   <span className="text-sm font-medium whitespace-nowrap">
//                     Telephone Number:
//                   </span>
//                   <span className="text-sm font-medium border-b border-black flex-1 min-w-0">
//                     {formData.telephoneNumber || "\u00A0"}
//                   </span>
//                 </div>
//                 <div className="flex items-center gap-2">
//                   <span className="text-sm font-medium whitespace-nowrap">
//                     Email Address:
//                   </span>
//                   <span className="text-sm font-medium border-b border-black flex-1 min-w-0">
//                     {formData.emailAddress || "\u00A0"}
//                   </span>
//                 </div>
//               </div>

//               <div>
//                 <div className="flex items-center gap-2">
//                   <span className="text-sm font-medium whitespace-nowrap">
//                     Address:
//                   </span>
//                   <span className="text-sm font-medium border-b border-black flex-1 min-w-0">
//                     {formData.address || "\u00A0"}
//                   </span>
//                 </div>
//                 <p className="text-sm italic ml-16">
//                   Street/Apartment/City/State/Zip
//                 </p>
//               </div>

//               <div>
//                 <div className="flex items-center gap-2">
//                   <span className="text-sm font-medium whitespace-nowrap">
//                     Emergency Contact Person:
//                   </span>
//                   <span className="text-sm font-medium border-b border-black flex-1 min-w-0">
//                     {formData.emergencyContactPerson || "\u00A0"}
//                   </span>
//                 </div>
//                 <p className="text-sm italic ml-40">
//                   Name&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Relation&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Telephone
//                 </p>
//               </div>
//             </div>

//             {/* Employment Type */}
//             <div className="space-y-2 mb-4">
//               <div className="flex items-center gap-2">
//                 <span className="text-sm font-medium whitespace-nowrap">
//                   Type of employment desired? Full-time ☐ Part-time ☐ Desired
//                   Salary/Hourly Rate
//                 </span>
//                 <span className="text-sm font-medium border-b border-black flex-1 min-w-0">
//                   {formData.desiredSalary || "\u00A0"}
//                 </span>
//               </div>
//               <div className="grid grid-cols-2 gap-4">
//                 <div className="flex items-center gap-2">
//                   <span className="text-sm font-medium whitespace-nowrap">
//                     Position Applied For:
//                   </span>
//                   <span className="text-sm font-medium border-b border-black flex-1 min-w-0">
//                     {formData.positionAppliedFor || "\u00A0"}
//                   </span>
//                 </div>
//                 <div className="flex items-center gap-2">
//                   <span className="text-sm font-medium whitespace-nowrap">
//                     Dept.:
//                   </span>
//                   <span className="text-sm font-medium border-b border-black flex-1 min-w-0">
//                     {formData.department || "\u00A0"}
//                   </span>
//                 </div>
//               </div>
//               <div>
//                 <div className="flex items-center gap-2">
//                   <span className="text-sm font-medium whitespace-nowrap">
//                     Are you willing to work overtime? Yes ☐ No ☐ Date on which
//                     you can start work if hired
//                   </span>
//                   <span className="text-sm font-medium border-b border-black flex-1 min-w-0">
//                     {formData.startDate || "\u00A0"}
//                   </span>
//                 </div>
//               </div>
//             </div>

//             {/* Previous Employment Questions */}
//             <div className="space-y-2 mb-4">
//               <div>
//                 <span className="text-sm font-medium">
//                   Have you previously applied for employment with this company?
//                   Yes ☐ No ☐
//                 </span>
//               </div>
//               <div className="flex items-center gap-2">
//                 <span className="text-sm font-medium whitespace-nowrap">
//                   If yes, when and where did you apply?
//                 </span>
//                 <span className="text-sm font-medium border-b border-black flex-1 min-w-0">
//                   {formData.previousApplicationDetails || "\u00A0"}
//                 </span>
//               </div>
//               <div>
//                 <span className="text-sm font-medium">
//                   Have you ever been employed by this Company? Yes ☐ No ☐
//                 </span>
//               </div>
//               <div className="flex items-center gap-2">
//                 <span className="text-sm font-medium whitespace-nowrap">
//                   If yes, provide dates of employment, location and reason for
//                   separation from employment.
//                 </span>
//                 <span className="text-sm font-medium border-b border-black flex-1 min-w-0">
//                   {formData.previousEmploymentDetails || "\u00A0"}
//                 </span>
//               </div>
//             </div>

//             {/* Education Section */}
//             <h3 className="text-sm font-bold mb-2">Education</h3>
//             <table className="w-full border border-black mb-4">
//               <thead>
//                 <tr className="border-b border-black">
//                   <th className="border-r border-black p-1 text-left font-medium">
//                     School Name
//                     <br />
//                     (Address, City, State)
//                   </th>
//                   <th className="border-r border-black p-1 text-left font-medium">
//                     Course of
//                     <br />
//                     Study or Major
//                   </th>
//                   <th className="border-r border-black p-1 text-left font-medium">
//                     Graduate?
//                     <br />Y or N
//                   </th>
//                   <th className="border-r border-black p-1 text-left font-medium">
//                     # of Years
//                     <br />
//                     Completed
//                   </th>
//                   <th className="p-1 text-left font-medium">
//                     Honors
//                     <br />
//                     Received
//                   </th>
//                 </tr>
//               </thead>
//               <tbody>
//                 <tr className="border-b border-black">
//                   <td className="border-r border-black p-1 font-medium">
//                     High School
//                   </td>
//                   <td className="border-r border-black p-1">
//                     {formData.education?.highSchool?.course || "\u00A0"}
//                   </td>
//                   <td className="border-r border-black p-1">
//                     {formData.education?.highSchool?.graduate || "\u00A0"}
//                   </td>
//                   <td className="border-r border-black p-1">
//                     {formData.education?.highSchool?.yearsCompleted || "\u00A0"}
//                   </td>
//                   <td className="p-1">
//                     {formData.education?.highSchool?.honors || "\u00A0"}
//                   </td>
//                 </tr>
//               </tbody>
//             </table>

//             {/* Work Experience Header */}
//             <h3 className="font-bold mb-2">WORK EXPERIENCE</h3>
//             <p className="text-sm font-semibold mb-3 leading-relaxed">
//               Please list the names of your present and/or previous employers in
//               chronological order with present or most recent employer listed
//               first. Provide information for at least the most recent ten (10)
//               year period. Attach additional sheets if needed. If self-employed,
//               supply firm name and business references. You may include any
//               verifiable work performed on a volunteer basis, internships, or
//               military service. Your failure to completely respond to each
//               inquiry may disqualify you for consideration from employment. Do
//               not answer "see resume."
//             </p>
//           </div>

//           {/* Page 2 */}
//           <div className="p-8 print:p-12 page-break">
//             <div className="text-right text-sm mb-4">2</div>

//             <h2 className="text-xl font-medium text-center">
//               EMPLOYEE DIRECT DEPOSIT AUTHORIZATION AGREEMENT
//             </h2>
//             <div className="border-b-2 border-black w-[580px] flex items-center mx-auto mb-2"></div>

//             <h3 className="text-xl text-center mb-7">(ACH CREDIT & DEBITS)</h3>

//             <div className="flex items-center gap-10 mb-6">
//               <span className="text-sm font-medium whitespace-nowrap">
//                 New Payroll Deposit:
//               </span>
//               <input
//                 type="checkbox"
//                 className="text-sm font-medium border-b border-black inline-block w-10 h-5"
//                 checked={formData.newPayrollDeposit || false}
//                 readOnly
//               />
//               <span className="text-sm font-medium whitespace-nowrap ml-4">
//                 Change Deposit Information:
//               </span>
//               <input
//                 type="checkbox"
//                 className="text-sm font-medium border-b border-black inline-block w-10 h-5"
//                 checked={formData.changeDepositInfo || false}
//                 readOnly
//               />
//               <span className="text-sm font-medium whitespace-nowrap ">
//                 Revoke Authorization:
//               </span>
//               <input
//                 type="checkbox"
//                 className="text-sm font-medium border-b border-black inline-block w-10 h-5"
//                 checked={formData.revokeAuthorization || false}
//                 readOnly
//               />
//             </div>
//             <div className="mb-10">
//               <div className="flex items-center gap-2 justify-end">
//                 <span className="text-sm font-medium whitespace-nowrap">
//                   Date:
//                 </span>
//                 <span className="text-sm font-medium border-b border-black inline-block w-40 ml-2">
//                   {formData.date || "\u00A0"}
//                 </span>
//               </div>
//             </div>
//             <div className="mb-4">
//               <div className="flex items-center gap-2">
//                 <span className="text-lg whitespace-nowrap">Name:</span>
//                 <span className="font-medium border-b border-black inline-block w-40 ml-2">
//                   {formData.name || "\u00A0"}
//                 </span>
//                 <span className="text-lg whitespace-nowrap ml-4">SSN:</span>
//                 <span className="font-medium border-b border-black inline-block w-40 ml-2">
//                   {formData.ssn || "\u00A0"}
//                 </span>
//               </div>
//             </div>

//             <p className="text-sm mb-6 font-medium leading-relaxed">
//               I authorize my employer or a payroll processor on my employer's
//               behalf to deposit any amounts owned to me by initiating credit
//               entries to my account at the financial institution (BANK) indicted
//               below. Further, I authorize Bank to accept and credit entries
//               indicated by Cbyrac, Inc. to my ☐ Checking ☐ Saving account
//               (select one). I acknowledge the deposit of any amount is an
//               advance of funds on behalf of my employer and the responsibility
//               of my employer. I also authorize my employer, if any, to debit my
//               account in the event of a credit which should not have been made
//               for an amount not to exceed the original amount of the erroneous
//               credit.
//             </p>

//             <p className="text-lg font-bold text-center">
//               Complete Sections 1 or 2 as applicable
//             </p>
//             <div className="border-b-2 border-black w-82 flex items-center mx-auto mb-6"></div>
//             <h3 className="text-xl text-center">
//               <span className="font-medium">SECTION 1 CHECKING ACCOUNT;</span>{" "}
//               Attach a Voided Check
//             </h3>
//             <div className="border-b-2 border-black w-[530px] flex items-center mx-auto mb-10"></div>
//             {/* Section 1 */}
//             <div className="p-3 mb-4">
//               <div className="mb-4">
//                 <div className="flex items-center gap-2">
//                   <span className="text-lg whitespace-nowrap">Bank Name:</span>
//                   <span className="text-sm font-medium border-b border-black inline-block w-48 ml-2">
//                     {formData.bankName || "\u00A0"}
//                   </span>
//                   <span className="text-lg whitespace-nowrap ml-4">State:</span>
//                   <span className="text-sm font-medium border-b border-black inline-block w-20 ml-2">
//                     {formData.state || "\u00A0"}
//                   </span>
//                 </div>
//               </div>

//               <div className="mb-4">
//                 <div className="flex items-center gap-2 justify-center">
//                   <span className=" whitespace-nowrap">I wish to deposit:</span>
//                   <span className="text-sm font-medium border-b border-black inline-block w-24 ml-2">
//                     {formData.depositAmount
//                       ? `$${formData.depositAmount}.00`
//                       : "\u00A0"}
//                   </span>
//                   <span className=" whitespace-nowrap ml-4">or:</span>
//                   <span className="text-sm font-medium border-b border-black inline-block w-24 ml-2">
//                     {formData.depositPercentage
//                       ? `${formData.depositPercentage}% Net Pay`
//                       : "\u00A0"}
//                   </span>
//                 </div>
//               </div>

//               <div className="mb-6">
//                 <div className="flex items-center gap-2">
//                   <span className="text-lg whitespace-nowrap">
//                     Transit/ABA No.:
//                   </span>
//                   <span className="text-lg border-b border-black inline-block w-32 ml-2">
//                     {formData.transitAbaNo || "\u00A0"}
//                   </span>
//                   <span className="text-lg whitespace-nowrap ml-4">
//                     Account No.:
//                   </span>
//                   <span className="text-sm font-medium border-b border-black inline-block w-40 ml-2">
//                     {formData.accountNo || "\u00A0"}
//                   </span>
//                 </div>
//               </div>

//               <div className="border border-gray-400 p-8 text-center bg-gray-50">
//                 <p className="font-bold mb-2">ATTACH VOIDED CHECK HERE</p>
//                 <p className="text-xs">
//                   The numbers on the bottom of your voided check are used
//                 </p>
//                 <p className="text-xs">
//                   To make the electronic funds transfer directly to you account.
//                 </p>
//               </div>
//             </div>

//             <p className="text-center text-xl font-medium">
//               *****************************************************************************************
//             </p>

//             {/* Section 2 */}
//             <div className="p-3 mb-6">
//               <h3 className="text-xl text-center">
//                 <span className="font-medium">SECTION 2 SAVINGS ACCOUNT;</span>{" "}
//                 Call Your Bank To Obtain the Following Information:
//               </h3>

//               <div className="border-b-2 border-black flex items-center mx-auto mb-7"></div>

//               <div className="mb-4">
//                 <span className="text-lg">
//                   BANK NAME: ______________________________________________
//                 </span>
//                 <span className="ml-4 text-lg">STATE: ________________</span>
//               </div>
//               <div className="mb-4 text-center">
//                 <span className="">
//                   I wish to deposit $____________.00 or __________% Net Pay
//                 </span>
//               </div>
//               <div className="mb-4">
//                 <span className="text-lg">
//                   SAVINGS BANK/ROUTING OR TRANSIT NUMBER________________________
//                   (This Must Be 9 Digits)
//                 </span>
//               </div>

//               <span className="text-lg">
//                 EMPLOYEE SAVINGS ACCOUNT NUMBER
//                 __________________________________________________
//               </span>
//             </div>
//             <span className="ml-4 text-lg">
//               EMPLOYEE SIGNATURE __________________________________
//             </span>
//             <span className="ml-4 text-lg">DATE ________________________</span>
//           </div>

//           {/* Page 4 */}
//           <div className="p-8 print:p-12 page-break">
//             {/* Company Use Only Section */}
//             <div className=" pt-4">
//               <h3 className="font-bold bg-gray-300 text-center mb-3">
//                 CBYRAC, INC. Use Only
//               </h3>

//               <div className="space-y-2 mb-4 font-medium">
//                 <div>
//                   <span>
//                     Check One: ☐ New Hire ☐ Re-Hire Status: ☐ Full Time ☐ Part
//                     Time
//                   </span>
//                 </div>
//                 <div className="flex items-center gap-2 flex-wrap">
//                   <span className="whitespace-nowrap">Job Description:</span>
//                   <span className="border-b border-black inline-block w-60">
//                     {formData.companyUse?.jobDescription || "\u00A0"}
//                   </span>
//                   <span className="ml-4 whitespace-nowrap">W/C Code:</span>
//                   <span className="border-b border-black inline-block w-28">
//                     {formData.companyUse?.wcCode || "\u00A0"}
//                   </span>
//                   <span className="ml-4 whitespace-nowrap">Hire Date:</span>
//                   <span className="border-b border-black inline-block w-40">
//                     {formData.companyUse?.hireDate || "\u00A0"}
//                   </span>
//                 </div>
//                 <div className="flex items-center gap-2">
//                   <span className="whitespace-nowrap">Termination:</span>
//                   <span className="border-b border-black inline-block w-40">
//                     {formData.companyUse?.termination || "\u00A0"}
//                   </span>
//                 </div>
//               </div>

//               <div className="space-y-2 mb-4 font-medium">
//                 <div className="flex items-center gap-2">
//                   <span className="whitespace-nowrap">
//                     Pay Rate: ☐ Hourly $
//                   </span>
//                   <span className="border-b border-black inline-block w-32">
//                     {formData.companyUse?.hourlyRate || "\u00A0"}
//                   </span>
//                   <span className="whitespace-nowrap">
//                     per hour ☐ Commission
//                   </span>
//                 </div>
//                 <div className="ml-16 flex items-center gap-2">
//                   <span className="whitespace-nowrap">
//                     ☐ Salary O.T. Exempt $
//                   </span>
//                   <span className="border-b border-black inline-block w-32">
//                     {formData.companyUse?.salaryOTExempt || "\u00A0"}
//                   </span>
//                   <span className="whitespace-nowrap">per pay period</span>
//                 </div>
//                 <div className="ml-16 flex items-center gap-2">
//                   <span className="whitespace-nowrap">
//                     ☐ Salary O.T. Non-Exempt $
//                   </span>
//                   <span className="border-b border-black inline-block w-32">
//                     {formData.companyUse?.salaryOTNonExempt || "\u00A0"}
//                   </span>
//                   <span className="whitespace-nowrap">per pay period</span>
//                 </div>
//               </div>

//               <p className=" mb-2 font-medium">
//                 *If salary O.T. non-exempt, what is the special breakdown of
//                 rates to be included in salary?
//               </p>
//               <div className="font-medium mb-2 flex items-center gap-2 flex-wrap">
//                 <span className="whitespace-nowrap">
//                   Regular rate (1st 40 hours) = $
//                 </span>
//                 <span className="border-b border-black inline-block w-32">
//                   {formData.companyUse?.regularRate || "\u00A0"}
//                 </span>
//                 <span className="ml-8 whitespace-nowrap">O.T. Rate = $</span>
//                 <span className="border-b border-black inline-block w-32">
//                   {formData.companyUse?.otRate || "\u00A0"}
//                 </span>
//               </div>
//               <div className="mb-4 font-medium flex items-center gap-2">
//                 <span className="whitespace-nowrap">
//                   **Work Hours per pay period:
//                 </span>
//                 <span className="border-b border-black inline-block w-32">
//                   {formData.companyUse?.workHours || "\u00A0"}
//                 </span>
//               </div>
//               <div className="mb-4 font-medium flex items-center gap-2">
//                 <span className="whitespace-nowrap">☐ Other:</span>
//                 <span className="border-b border-black flex-1 min-w-0">
//                   {formData.companyUse?.other || "\u00A0"}
//                 </span>
//               </div>

//               <h3 className="text-center bg-gray-300 font-bold mb-3">
//                 Human Resource Use Only
//               </h3>
//               <div className="font-medium flex items-center gap-2 flex-wrap">
//                 <span className="whitespace-nowrap">Received By:</span>
//                 <span className="border-b border-black inline-block w-64">
//                   {formData.hrUse?.receivedBy || "\u00A0"}
//                 </span>
//                 <span className="ml-4 whitespace-nowrap">Date:</span>
//                 <span className="border-b border-black inline-block w-40">
//                   {formData.hrUse?.date || "\u00A0"}
//                 </span>
//               </div>
//             </div>
//           </div>
//         </div>

//         <style>{`
//         @media print {
//           .page-break {
//             page-break-after: always;
//           }
//           body {
//             print-color-adjust: exact;
//             -webkit-print-color-adjust: exact;
//           }
//         }
//       `}</style>
//       </div>
//     </div>
//   );
// };

// export default PdfViewer;

import html2pdf from "html2pdf.js";
import { Download, Printer } from "lucide-react";
import { useRef, useState } from "react";

const PdfViewer = () => {
  const [formData, setFormData] = useState({});

  // CORRECT WAY TO TYPE useRef
  /** @type {import('react').RefObject<HTMLDivElement>} */
  const printRef = useRef(null);

  const handlePrint = () => {
    window.print();
  };

  const handleDownloadPDF = () => {
    console.log("clicked button");
    if (!printRef.current) return;

    const element = printRef.current;

    const opt = {
      margin: [0.5, 0.5, 0.5, 0.5],
      filename: "CBYRAC_Employment_Application.pdf",
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: { scale: 2, useCORS: true, letterRendering: true },
      jsPDF: { unit: "in", format: "letter", orientation: "portrait" },
    };

    html2pdf().set(opt).from(element).save();
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4 print:p-0 print:bg-white">
      <div className="max-w-4xl mx-auto bg-white shadow-lg print:shadow-none">
        {/* Buttons - Hidden on Print */}
        <div className="p-4 print:hidden flex justify-end gap-4">
          <button
            onClick={handlePrint}
            className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            <Printer size={20} />
            Print Form
          </button>
          <button
            onClick={handleDownloadPDF}
            className="flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
          >
            <Download size={20} />
            Download PDF
          </button>
        </div>

        {/* === PRINTABLE CONTENT STARTS HERE === */}
        <div ref={printRef}>
          {/* Page 1 */}
          <div className="p-8 print:p-12 page-break">
            <div className="flex justify-between mb-6">
              <div>
                <h1 className="text-xl font-bold">CBYRAC, INC</h1>
                <p className="text-sm">633 NE 167TH STREET, SUITE 709</p>
                <p className="text-sm font-medium">
                  NORTH MIAMI BEACH, FL. 33162
                </p>
                <p className="text-sm font-medium">PH: 786-403-5043</p>
                <p className="text-sm font-medium">
                  E-MAIL: cbyracinc@gmail.com
                </p>
              </div>
              <div>
                <img
                  className="w-48 h-22"
                  src="/logo-with-name.png"
                  alt="CBYRAC Logo"
                  crossOrigin="anonymous"
                />
              </div>
            </div>

            <h2 className="bg-black text-white text-center text-lg font-bold py-2 mb-4">
              APPLICATION FOR EMPLOYMENT
            </h2>

            <p className="text-center font-bold mb-4">
              Please Answer All Questions. Resumes Are Not A Substitute For A
              Completed Application.
            </p>

            <div className="text-right font-medium mb-4">
              Date _________________________
            </div>

            <p className="text-[13px] mb-3 leading-relaxed font-medium">
              We are an equal opportunity employer. Applicants are considered
              for positions without regard to veteran status, uniformed
              servicemember status, race, color, religion, sex, national origin,
              age, physical or mental disability, genetic information or any
              other category protected by applicable federal, state, or local
              laws.
            </p>

            <p className="text-sm font-semibold mb-6 leading-relaxed">
              THIS COMPANY IS AN AT-WILL EMPLOYER AS ALLOWED BY APPLICABLE STATE
              LAW. THIS MEANS THAT REGARDLESS OF ANY PROVISION IN THIS
              APPLICATION, IF HIRED, THE COMPANY OR I MAY TERMINATE THE
              EMPLOYMENT RELATIONSHIP AT ANY TIME, FOR ANY REASON, WITH OR
              WITHOUT CAUSE OR NOTICE.
            </p>

            {/* Personal Info */}
            <div className="grid grid-cols-3 gap-4 mb-4">
              <div className="flex items-center gap-2">
                <span className="text-sm font-medium">Last Name:</span>
                <span className="border-b border-black flex-1 min-w-[180px]">
                  {formData.lastName || "\u00A0"}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sm font-medium">First Name:</span>
                <span className="border-b border-black flex-1 min-w-[180px]">
                  {formData.firstName || "\u00A0"}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sm font-medium">Middle Name:</span>
                <span className="border-b border-black flex-1 min-w-[150px]">
                  {formData.middleName || "\u00A0"}
                </span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-4">
              <div className="flex items-center gap-2">
                <span className="text-sm font-medium">
                  Social Security Number:
                </span>
                <span className="border-b border-black flex-1">
                  {formData.ssn || "\u00A0"}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sm font-medium">DOB:</span>
                <span className="border-b border-black flex-1">
                  {formData.dob || "\u00A0"}
                </span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-4">
              <div className="flex items-center gap-2">
                <span className="text-sm font-medium">Telephone Number:</span>
                <span className="border-b border-black flex-1">
                  {formData.telephoneNumber || "\u00A0"}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sm font-medium">Email Address:</span>
                <span className="border-b border-black flex-1">
                  {formData.emailAddress || "\u00A0"}
                </span>
              </div>
            </div>

            <div className="mb-4">
              <div className="flex items-center gap-2">
                <span className="text-sm font-medium">Address:</span>
                <span className="border-b border-black flex-1">
                  {formData.address || "\u00A0"}
                </span>
              </div>
              <p className="text-sm italic ml-16">
                Street/Apartment/City/State/Zip
              </p>
            </div>

            <div className="mb-6">
              <div className="flex items-center gap-2">
                <span className="text-sm font-medium">
                  Emergency Contact Person:
                </span>
                <span className="border-b border-black flex-1">
                  {formData.emergencyContactPerson || "\u00A0"}
                </span>
              </div>
              <p className="text-sm italic ml-40">
                Name          Relation          Telephone
              </p>
            </div>

            {/* Employment Type */}
            <div className="mb-4">
              <div className="flex items-center gap-2">
                <span className="text-sm font-medium">
                  Type of employment desired? Full-time ☐ Part-time ☐ Desired
                  Salary/Hourly Rate
                </span>
                <span className="border-b border-black w-32">
                  {formData.desiredSalary || "\u00A0"}
                </span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-4">
              <div className="flex items-center gap-2">
                <span className="text-sm font-medium">
                  Position Applied For:
                </span>
                <span className="border-b border-black flex-1">
                  {formData.positionAppliedFor || "\u00A0"}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sm font-medium">Dept.:</span>
                <span className="border-b border-black flex-1">
                  {formData.department || "\u00A0"}
                </span>
              </div>
            </div>

            <div className="mb-6">
              <div className="flex items-center gap-2">
                <span className="text-sm font-medium">
                  Are you willing to work overtime? Yes ☐ No ☐ Date on which you
                  can start work if hired
                </span>
                <span className="border-b border-black w-32">
                  {formData.startDate || "\u00A0"}
                </span>
              </div>
            </div>

            {/* Previous Employment */}
            <div className="space-y-3 mb-6">
              <p className="text-sm font-medium">
                Have you previously applied for employment with this company?
                Yes ☐ No ☐
              </p>
              <div className="flex items-center gap-2">
                <span className="text-sm font-medium">
                  If yes, when and where did you apply?
                </span>
                <span className="border-b border-black flex-1">
                  {formData.previousApplicationDetails || "\u00A0"}
                </span>
              </div>
              <p className="text-sm font-medium">
                Have you ever been employed by this Company? Yes ☐ No ☐
              </p>
              <div className="flex items-center gap-2">
                <span className="text-sm font-medium">
                  If yes, provide dates of employment, location and reason for
                  separation from employment.
                </span>
                <span className="border-b border-black flex-1">
                  {formData.previousEmploymentDetails || "\u00A0"}
                </span>
              </div>
            </div>

            {/* Education */}
            <h3 className="text-sm font-bold mb-2">Education</h3>
            <table className="w-full border border-black text-sm mb-6">
              <thead>
                <tr className="border-b border-black">
                  <th className="border-r border-black p-1 text-left font-medium">
                    School Name
                    <br />
                    (Address, City, State)
                  </th>
                  <th className="border-r border-black p-1 text-left font-medium">
                    Course of
                    <br />
                    Study or Major
                  </th>
                  <th className="border-r border-black p-1 text-left font-medium">
                    Graduate?
                    <br />Y or N
                  </th>
                  <th className="border-r border-black p-1 text-left font-medium">
                    # of Years
                    <br />
                    Completed
                  </th>
                  <th className="p-1 text-left font-medium">
                    Honors
                    <br />
                    Received
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-black">
                  <td className="border-r border-black p-1 font-medium">
                    High School
                  </td>
                  <td className="border-r border-black p-1">
                    {formData.education?.highSchool?.course || "\u00A0"}
                  </td>
                  <td className="border-r border-black p-1">
                    {formData.education?.highSchool?.graduate || "\u00A0"}
                  </td>
                  <td className="border-r border-black p-1">
                    {formData.education?.highSchool?.yearsCompleted || "\u00A0"}
                  </td>
                  <td className="p-1">
                    {formData.education?.highSchool?.honors || "\u00A0"}
                  </td>
                </tr>
              </tbody>
            </table>

            <h3 className="font-bold mb-2">WORK EXPERIENCE</h3>
            <p className="text-sm font-semibold leading-relaxed">
              Please list the names of your present and/or previous employers in
              chronological order... (rest of text)
            </p>
          </div>

          {/* Page 2 */}
          <div className="p-8 print:p-12 page-break">
            <div className="text-right text-sm mb-4">2</div>
            <h2 className="text-xl font-medium text-center mb-2">
              EMPLOYEE DIRECT DEPOSIT AUTHORIZATION AGREEMENT
            </h2>
            <div className="border-b-2 border-black w-full max-w-xl mx-auto mb-2"></div>
            <h3 className="text-xl text-center mb-6">(ACH CREDIT & DEBITS)</h3>

            <div className="flex items-center gap-6 mb-6 justify-center">
              <label className="flex items-center gap-2">
                <span className="text-sm font-medium">
                  New Payroll Deposit:
                </span>
                <input
                  type="checkbox"
                  readOnly
                  checked={formData.newPayrollDeposit}
                />
              </label>
              <label className="flex items-center gap-2">
                <span className="text-sm font-medium">
                  Change Deposit Information:
                </span>
                <input
                  type="checkbox"
                  readOnly
                  checked={formData.changeDepositInfo}
                />
              </label>
              <label className="flex items-center gap-2">
                <span className="text-sm font-medium">
                  Revoke Authorization:
                </span>
                <input
                  type="checkbox"
                  readOnly
                  checked={formData.revokeAuthorization}
                />
              </label>
            </div>

            <div className="text-right mb-6">
              <span className="text-sm font-medium">Date: </span>
              <span className="border-b border-black inline-block w-40">
                {formData.date || "\u00A0"}
              </span>
            </div>

            <div className="flex justify-center gap-8 mb-6">
              <div className="flex items-center gap-2">
                <span className="text-lg">Name:</span>
                <span className="border-b border-black w-48">
                  {formData.name || "\u00A0"}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-lg">SSN:</span>
                <span className="border-b border-black w-40">
                  {formData.ssn || "\u00A0"}
                </span>
              </div>
            </div>

            <p className="text-sm font-medium leading-relaxed mb-6">
              I authorize my employer... (full paragraph)
            </p>

            <p className="text-center text-lg font-bold mb-4">
              Complete Sections 1 or 2 as applicable
            </p>
            <div className="border-b-2 border-black w-96 mx-auto mb-4"></div>

            <h3 className="text-xl text-center mb-4">
              SECTION 1 CHECKING ACCOUNT; Attach a Voided Check
            </h3>
            <div className="border-b-2 border-black w-full max-w-md mx-auto mb-6"></div>

            <div className="space-y-4 mb-6">
              <div className="flex justify-center gap-8">
                <div className="flex items-center gap-2">
                  <span className="text-lg">Bank Name:</span>
                  <span className="border-b border-black w-48">
                    {formData.bankName || "\u00A0"}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-lg">State:</span>
                  <span className="border-b border-black w-20">
                    {formData.state || "\u00A0"}
                  </span>
                </div>
              </div>

              <div className="text-center">
                <span>I wish to deposit: </span>
                <span className="border-b border-black inline-block w-32">
                  {formData.depositAmount
                    ? `$${formData.depositAmount}.00`
                    : "\u00A0"}
                </span>
                <span> or: </span>
                <span className="border-b border-black inline-block w-32">
                  {formData.depositPercentage
                    ? `${formData.depositPercentage}% Net Pay`
                    : "\u00A0"}
                </span>
              </div>

              <div className="flex justify-center gap-8">
                <div className="flex items-center gap-2">
                  <span className="text-lg">Transit/ABA No.:</span>
                  <span className="border-b border-black w-40">
                    {formData.transitAbaNo || "\u00A0"}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-lg">Account No.:</span>
                  <span className="border-b border-black w-48">
                    {formData.accountNo || "\u00A0"}
                  </span>
                </div>
              </div>
            </div>

            <div className="border border-gray-400 p-8 text-center bg-gray-50 mb-8">
              <p className="font-bold">ATTACH VOIDED CHECK HERE</p>
              <p className="text-xs">
                The numbers on the bottom of your voided check are used
              </p>
              <p className="text-xs">
                To make the electronic funds transfer directly to your account.
              </p>
            </div>

            <p className="text-center text-xl font-medium mb-6">
              *****************************************************************************************
            </p>

            <h3 className="text-xl text-center mb-4">
              SECTION 2 SAVINGS ACCOUNT; Call Your Bank To Obtain the Following
              Information:
            </h3>
            <div className="border-b-2 border-black w-full max-w-xl mx-auto mb-6"></div>

            <div className="text-center space-y-4">
              <p>
                <span>BANK NAME: </span>
                <span className="border-b border-black inline-block w-64">
                  {"\u00A0"}
                </span>
                <span className="ml-8">STATE: </span>
                <span className="border-b border-black inline-block w-32">
                  {"\u00A0"}
                </span>
              </p>
              <p>I wish to deposit $____________.00 or __________% Net Pay</p>
              <p>
                SAVINGS BANK/ROUTING OR TRANSIT NUMBER________________________
                (This Must Be 9 Digits)
              </p>
              <p>
                EMPLOYEE SAVINGS ACCOUNT NUMBER
                __________________________________________________
              </p>
              <p className="mt-8">
                EMPLOYEE SIGNATURE __________________________________ DATE
                ________________________
              </p>
            </div>
          </div>

          {/* Page 4 */}
          <div className="p-8 print:p-12 page-break">
            <h3 className="font-bold bg-gray-300 text-center py-2 mb-4">
              CBYRAC, INC. Use Only
            </h3>

            <div className="space-y-3 mb-6 font-medium">
              <p>
                Check One: ☐ New Hire ☐ Re-Hire Status: ☐ Full Time ☐ Part Time
              </p>
              <div className="flex flex-wrap gap-4">
                <span>Job Description:</span>
                <span className="border-b border-black w-64">
                  {formData.companyUse?.jobDescription || "\u00A0"}
                </span>
                <span>W/C Code:</span>
                <span className="border-b border-black w-32">
                  {formData.companyUse?.wcCode || "\u00A0"}
                </span>
                <span>Hire Date:</span>
                <span className="border-b border-black w-40">
                  {formData.companyUse?.hireDate || "\u00A0"}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span>Termination:</span>
                <span className="border-b border-black w-40">
                  {formData.companyUse?.termination || "\u00A0"}
                </span>
              </div>
            </div>

            <div className="space-y-3 mb-6 font-medium">
              <div className="flex items-center gap-2">
                <span>Pay Rate: ☐ Hourly $</span>
                <span className="border-b border-black w-32">
                  {formData.companyUse?.hourlyRate || "\u00A0"}
                </span>
                <span>per hour ☐ Commission</span>
              </div>
              <div className="ml-16 flex items-center gap-2">
                <span>☐ Salary O.T. Exempt $</span>
                <span className="border-b border-black w-32">
                  {formData.companyUse?.salaryOTExempt || "\u00A0"}
                </span>
                <span>per pay period</span>
              </div>
              <div className="ml-16 flex items-center gap-2">
                <span>☐ Salary O.T. Non-Exempt $</span>
                <span className="border-b border-black w-32">
                  {formData.companyUse?.salaryOTNonExempt || "\u00A0"}
                </span>
                <span>per pay period</span>
              </div>
            </div>

            <p className="font-medium mb-2">
              *If salary O.T. non-exempt, what is the special breakdown of rates
              to be included in salary?
            </p>
            <div className="flex items-center gap-4 mb-4">
              <span>Regular rate (1st 40 hours) = $</span>
              <span className="border-b border-black w-32">
                {formData.companyUse?.regularRate || "\u00A0"}
              </span>
              <span>O.T. Rate = $</span>
              <span className="border-b border-black w-32">
                {formData.companyUse?.otRate || "\u00A0"}
              </span>
            </div>

            <div className="flex items-center gap-2 mb-4">
              <span>**Work Hours per pay period:</span>
              <span className="border-b border-black w-32">
                {formData.companyUse?.workHours || "\u00A0"}
              </span>
            </div>

            <div className="flex items-center gap-2 mb-6">
              <span>☐ Other:</span>
              <span className="border-b border-black flex-1">
                {formData.companyUse?.other || "\u00A0"}
              </span>
            </div>

            <h3 className="text-center bg-gray-300 font-bold py-2 mb-3">
              Human Resource Use Only
            </h3>
            <div className="flex items-center gap-4">
              <span>Received By:</span>
              <span className="border-b border-black w-64">
                {formData.hrUse?.receivedBy || "\u00A0"}
              </span>
              <span>Date:</span>
              <span className="border-b border-black w-40">
                {formData.hrUse?.date || "\u00A0"}
              </span>
            </div>
          </div>

          {/* Page 5 */}
          <div className="p-8 leading-tight print:p-12 page-break">
            {/* Header */}
            <div className="flex justify-between items-start mb-4 border-b-2 border-black pb-2">
              <div className="w-20 h-20 flex items-center justify-center">
                <div className="w-16 h-16 rounded-full border-4 border-black flex items-center justify-center">
                  <div className="text-center text-sm font-bold">
                    <div>DHS</div>
                    <div className="text-[6px]">
                      DEPT OF
                      <br />
                      HOMELAND
                      <br />
                      SECURITY
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex-1 text-center">
                <h1 className="text-lg font-bold">
                  Employment Eligibility Verification
                </h1>
                <p className="text-xs font-semibold">
                  Department of Homeland Security
                </p>
                <p className="text-xs">
                  U.S. Citizenship and Immigration Services
                </p>
              </div>
              <div className="text-right text-xs">
                <p className="font-bold">USCIS</p>
                <p className="font-bold">Form I-9</p>
                <p>OMB No.1615-0047</p>
                <p>Expires 10/31/2027</p>
              </div>
            </div>

            {/* START HERE Notice */}
            <div className="bg-gray-100 border border-black p-2 mb-3 text-sm">
              <p>
                <span className="font-bold">START HERE:</span> Employers must
                ensure the form instructions are available to employees when
                completing this form. Employers are liable for failing to comply
                with the requirements for completing this form. See below and
                the <span className="font-bold underline">Instructions</span>.
              </p>
            </div>

            {/* Anti-Discrimination Notice */}
            <div className="bg-gray-100 border border-black p-2 mb-3  text-sm">
              <p>
                <span className="font-bold">ANTI-DISCRIMINATION NOTICE:</span>{" "}
                All employers and others who complete or use this form must
                present Form I-9. Employers cannot ask employees for
                documentation to verify information in Section 1, or specify
                which acceptable documentation employees must present for
                Section 2 or Supplement B, Reverification and Rehire. Treating
                employees differently based on their citizenship, immigration
                status, or national origin may be illegal.
              </p>
            </div>

            {/* Section 1 Header */}
            <div className="bg-gray-300 text-black p-1 mb-4 text-xs font-bold">
              Section 1. Employee Information and Attestation: Employees must
              complete and sign Section 1 of Form I-9 no later than the first
              day of employment, but not before accepting a job offer.
            </div>

            {/* Personal Info */}
            <div className="grid grid-cols-3 gap-3 mb-3">
              <div className="flex flex-col">
                <label className="text-sm mb-1">Last name</label>
                <div className="border border-black px-1 py-2 text-sm h-8">
                  <p>Pronoy</p>
                </div>
              </div>
              <div className="flex flex-col">
                <label className="text-sm mb-1">First name</label>
                <div className="border border-black px-1 py-2 text-sm h-8">
                  <p>Pronoy</p>
                </div>
              </div>
              <div className="flex flex-col">
                <label className="text-sm mb-1">Middle Initial (if any)</label>
                <div className="border border-black px-1 py-2 text-sm h-8">
                  <p>Pronoy</p>
                </div>
              </div>
            </div>

            <div className="mb-3">
              <label className="text-sm mb-1 block">
                Other Last Names Used (if any)
              </label>
              <div className="border border-black px-1 py-2 text-xs h-8 w-full"></div>
            </div>

            {/* Address */}
            <div className="grid grid-cols-12 gap-2 mb-3">
              <div className="col-span-6 flex flex-col">
                <label className="text-sm mb-1">
                  Address (Street Number and Name)
                </label>
                <div className="border border-black px-1 py-2 text-xs h-8"></div>
              </div>
              <div className="col-span-2 flex flex-col">
                <label className="text-sm mb-1">Apt. Number (if any)</label>
                <div className="border border-black px-1 py-2 text-xs h-8"></div>
              </div>
              <div className="col-span-2 flex flex-col">
                <label className="text-sm mb-1">City or Town</label>
                <div className="border border-black px-1 py-2 text-xs h-8"></div>
              </div>
              <div className="col-span-1 flex flex-col">
                <label className="text-sm mb-1">State</label>
                <div className="border border-black px-1 py-2 text-xs h-8"></div>
              </div>
              <div className="col-span-1 flex flex-col">
                <label className="text-sm mb-1">ZIP Code</label>
                <div className="border border-black px-1 py-2 text-xs h-8"></div>
              </div>
            </div>

            {/* Date of Birth, SSN, Email */}
            <div className="grid grid-cols-3 gap-3 mb-3">
              <div className="flex flex-col">
                <label className="text-sm mb-1">
                  Date of Birth (mm/dd/yyyy)
                </label>
                <div className="border border-black px-1 py-2 text-xs h-8"></div>
              </div>
              <div className="flex flex-col">
                <label className="text-sm mb-1">
                  U.S. Social Security Number
                </label>
                <div className="border border-black px-1 py-2 text-xs h-8"></div>
              </div>
              <div className="flex flex-col">
                <label className="text-sm mb-1">Employee's Email Address</label>
                <div className="border border-black px-1 py-2 text-xs h-8"></div>
              </div>
            </div>

            <div className="mb-3">
              <label className="text-sm mb-1 block">
                Employee's Telephone Number
              </label>
              <div className="border border-black px-1 py-2 text-xs h-8 w-full"></div>
            </div>

            {/* Citizenship Attestation */}
            <div className="border border-black p-3 mb-3">
              <div className="grid grid-cols-12 gap-2">
                <div className="col-span-3 border-r p-2 text-sm">
                  <p className="font-medium">
                    I am aware that federal law provides for imprisonment and/or
                    fines for false statements, or the use of false documents,
                    in connection with the completion of this form. I attest,
                    under penalty of perjury, that this information, including
                    my selection of the box attesting to my citizenship or
                    immigration status, is true and correct.
                  </p>
                </div>
                <div className="col-span-9">
                  <p className="text-sm mb-2">
                    Check one of the following boxes to attest to your
                    citizenship or immigration status (See page 2 and 3 of the
                    instructions):
                  </p>
                  <div className="space-y-1 text-sm">
                    <label className="flex items-start gap-2">
                      <div className="w-3 h-3 border border-black mt-0.5"></div>
                      <span>1. A citizen of the United States</span>
                    </label>
                    <label className="flex items-start gap-2">
                      <div className="w-3 h-3 border border-black mt-0.5"></div>
                      <span>
                        2. A noncitizen national of the United States (See
                        instructions.)
                      </span>
                    </label>
                    <label className="flex items-start gap-2">
                      <div className="w-3 h-3 border border-black mt-0.5"></div>
                      <span>
                        3. A lawful permanent resident (Enter USCIS or
                        A-Number.)
                      </span>
                    </label>
                    <label className="flex items-start gap-2">
                      <div className="w-3 h-3 border border-black mt-0.5"></div>
                      <span>
                        4. A noncitizen (Other than item Numbers 2 and 3, above)
                        authorized to work until (exp. date, if any)
                      </span>
                    </label>
                  </div>
                  <p className="text-sm mt-2 font-semibold">
                    If you check Item Number 4, enter one of these:
                  </p>
                  <div className="grid grid-cols-2 gap-2 mt-2">
                    <div className="flex flex-col">
                      <label className="text-sm mb-1">USCIS A-Number</label>
                      <div className="border border-black px-1 py-1 text-xs h-6">
                        A-
                      </div>
                    </div>
                    <div className="flex flex-col">
                      <label className="text-sm mb-1">
                        Form I-94 Admission Number
                      </label>
                      <div className="border border-black px-1 py-1 text-xs h-6"></div>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-2 mt-2">
                    <div className="flex flex-col">
                      <label className="text-sm mb-1">
                        Foreign Passport Number and Country of Issuance
                      </label>
                      <div className="border border-black px-1 py-1 text-xs h-6"></div>
                    </div>
                    <div className="flex flex-col">
                      <label className="text-sm mb-1">
                        Country of Issuance
                      </label>
                      <div className="border border-black px-1 py-1 text-xs h-6"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3 mt-3 pt-3 border-t border-black">
                <div className="flex flex-col">
                  <label className="text-sm mb-1">Signature of Employee</label>
                  <div className="border-b-2 border-black px-1 py-2 text-xs h-8 bg-transparent"></div>
                </div>
                <div className="flex flex-col">
                  <label className="text-sm mb-1">
                    Today's Date (mm/dd/yyyy)
                  </label>
                  <div className="border-b-2 border-black px-1 py-2 text-xs h-8 bg-transparent"></div>
                </div>
              </div>
            </div>

            {/* Preparer/Translator Notice */}
            <div className="bg-gray-100 border border-black p-2 mb-3 text-sm">
              <p className="font-medium">
                If a preparer and/or translator assisted you in completing
                Section 1, that person MUST complete the Preparer and/or
                Translator Certification on Page 3.
              </p>
            </div>

            {/* Section 2 Header */}
            <div className="bg-gray-300 text-black p-1 mb-5 text-xs font-bold">
              Section 2. Employer Review and Verification: Employers or their
              authorized representative must complete and sign Section 2 within
              three business days after the employee's first day of employment,
              and must physically examine, or examine consistent with an
              alternative procedure authorized by the Secretary of DHS,
              documentation from List A OR a combination of documentation from
              List B and List C. Enter any additional documentation in the
              Additional Information box; see instructions.
            </div>

            {/* List A, B, C Table */}
            <div className="grid grid-cols-3 gap-0 mb-3 border border-black">
              <div className="border-r border-black">
                <div className="bg-gray-200 p-1 text-center font-bold text-sm border-b border-black">
                  List A
                </div>
                <div className="p-2 space-y-2">
                  <div>
                    <label className="text-sm block mb-1">
                      Document Title 1:
                    </label>
                    <div className="border border-gray-400 px-1 py-1 text-sm w-full h-6"></div>
                  </div>
                  <div>
                    <label className="text-sm block mb-1">
                      Issuing Authority:
                    </label>
                    <div className="border border-gray-400 px-1 py-1 text-sm w-full h-6"></div>
                  </div>
                  <div>
                    <label className="text-sm block mb-1">
                      Document Number (if any):
                    </label>
                    <div className="border border-gray-400 px-1 py-1 text-sm w-full h-6"></div>
                  </div>
                  <div>
                    <label className="text-sm block mb-1">
                      Expiration Date (if any):
                    </label>
                    <div className="border border-gray-400 px-1 py-1 text-sm w-full h-6"></div>
                  </div>
                  <div className="pt-2 border-t border-gray-400">
                    <label className="text-sm block mb-1">
                      Document Title 2 (if any):
                    </label>
                    <div className="border border-gray-400 px-1 py-1 text-sm w-full h-6"></div>
                  </div>
                  <div>
                    <label className="text-sm block mb-1">
                      Issuing Authority:
                    </label>
                    <div className="border border-gray-400 px-1 py-1 text-sm w-full h-6"></div>
                  </div>
                  <div>
                    <label className="text-sm block mb-1">
                      Document Number (if any):
                    </label>
                    <div className="border border-gray-400 px-1 py-1 text-sm w-full h-6"></div>
                  </div>
                  <div>
                    <label className="text-sm block mb-1">
                      Expiration Date (if any):
                    </label>
                    <div className="border border-gray-400 px-1 py-1 text-sm w-full h-6"></div>
                  </div>
                  <div className="pt-2 border-t border-gray-400">
                    <label className="text-sm block mb-1">
                      Document Title 3 (if any):
                    </label>
                    <div className="border border-gray-400 px-1 py-1 text-sm w-full h-6"></div>
                  </div>
                  <div>
                    <label className="text-sm block mb-1">
                      Issuing Authority:
                    </label>
                    <div className="border border-gray-400 px-1 py-1 text-sm w-full h-6"></div>
                  </div>
                  <div>
                    <label className="text-sm block mb-1">
                      Document Number (if any):
                    </label>
                    <div className="border border-gray-400 px-1 py-1 text-sm w-full h-6"></div>
                  </div>
                  <div>
                    <label className="text-sm block mb-1">
                      Expiration Date (if any):
                    </label>
                    <div className="border border-gray-400 px-1 py-1 text-sm w-full h-6"></div>
                  </div>
                </div>
              </div>
              <div className="border-r border-black">
                <div className="bg-gray-200 p-1 text-center font-bold text-sm border-b border-black">
                  List B<br />
                  <span className="font-normal text-sm">AND</span>
                </div>
                <div className="p-2">
                  <div className="mb-2">
                    <label className="text-sm block mb-1">
                      Document Title:
                    </label>
                    <div className="border border-gray-400 px-1 py-1 text-sm w-full h-6"></div>
                  </div>
                </div>
              </div>
              <div>
                <div className="bg-gray-200 p-1 text-center font-bold text-sm border-b border-black">
                  List C
                </div>
                <div className="p-2">
                  <div className="mb-2">
                    <label className="text-sm block mb-1">
                      Document Title:
                    </label>
                    <div className="border border-gray-400 px-1 py-1 text-sm w-full h-6"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Additional Information */}
            <div className="border border-black p-2 mb-3">
              <label className="text-sm font-semibold block mb-1">
                Additional Information
              </label>
              <div className="border border-gray-400 px-1 py-1 text-xs w-full h-16"></div>
              <div className="flex items-start gap-2 mt-2">
                <div className="w-3 h-3 border border-black mt-1"></div>
                <span className="text-sm">
                  Check here if you used an alternative procedure authorized by
                  DHS to examine documents.
                </span>
              </div>
            </div>
            {/* certification Text */}
            <div className="border border-black p-2 mb-3">
              <p className="text-sm mb-2 font-medium">
                Certification: I attest, under penalty of perjury, that (1) I
                have examined the documentation presented by the above-named
                employee, (2) the above-listed documentation appears to be
                genuine and to relate to the employee named, and (3) to the best
                of my knowledge, the employee is authorized to work in the
                United States.
              </p>
            </div>
            {/* Certification */}
            <div className="border border-black p-2 mb-3">
              <div className="grid grid-cols-2 gap-2 mb-2">
                <div className="flex flex-col">
                  <label className="text-sm mb-1">
                    First Day of Employment (mm/dd/yyyy):
                  </label>
                  <div className="border border-black px-1 py-2 text-xs h-7"></div>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-2 mb-4">
                <div className="flex flex-col">
                  <label className="text-sm mb-1">
                    Last Name, First Name and Title of Employer or Authorized
                    Representative
                  </label>
                  <div className="border border-black px-1 py-2 text-xs h-7"></div>
                </div>
                <div className="flex flex-col">
                  <label className="text-sm mb-1">
                    Signature of Employer or Authorized Representative
                  </label>
                  <div className="border-b-2 border-black px-1 py-2 text-xs h-7 bg-transparent"></div>
                </div>
                <div className="flex flex-col">
                  <label className="text-sm mb-1">
                    Today's Date (mm/dd/yyyy)
                  </label>
                  <div className="border border-black px-1 py-2 text-xs h-7"></div>
                </div>
              </div>
              <div className="border-t border-black pt-2">
                <div className="grid grid-cols-2 gap-2">
                  <div className="flex flex-col">
                    <label className="text-sm mb-6">
                      Employer's Business or Organization Name
                    </label>
                    <div className="border border-black px-1 py-2 text-xs h-7"></div>
                  </div>
                  <div className="flex flex-col">
                    <label className="text-sm mb-1">
                      Employer's Business or Organization Address, City or Town,
                      State, ZIP Code
                    </label>
                    <div className="border border-black px-1 py-2 text-xs h-7"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* === END PRINTABLE CONTENT === */}

        {/* Print Styles */}
        <style jsx>{`
          @media print {
            .page-break {
              page-break-after: always;
            }
            body {
              -webkit-print-color-adjust: exact;
              print-color-adjust: exact;
            }
            .print\\:hidden {
              display: none !important;
            }
          }
        `}</style>
      </div>
    </div>
  );
};

export default PdfViewer;
