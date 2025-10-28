import { Download, Printer } from "lucide-react";
import { useState } from "react";

const PdfViewer = () => {
  const [formData, setFormData] = useState({});

  const handlePrint = () => {
    window.print();
  };

  const handleDownloadPDF = () => {
    // Use browser's print to PDF feature
    window.download();
  };

  return (
    <div>
      <div className="min-h-screen bg-gray-50 p-4 print:p-0 print:bg-white">
        <div className="max-w-4xl mx-auto bg-white shadow-lg print:shadow-none">
          {/* Print Button - Hidden when printing */}
          <div className="p-4 print:hidden flex justify-end">
            <button
              onClick={handlePrint}
              className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              <Printer size={20} />
              Print Form
            </button>
            <button
              onClick={handleDownloadPDF}
              className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              <Download size={20} />
              Download Form
            </button>
          </div>

          {/* Page 1 */}
          <div className="p-8 print:p-12 page-break">
            <div className="flex justify-between">
              {/* Header */}
              <div className=" pb-4 mb-6">
                <h1 className="text-xl font-bold">CBYRAC, INC</h1>
                <p className="text-sm mt-1">633 NE 167TH STREET, SUITE 709</p>
                <p className="text-sm font-medium">
                  NORTH MIAMI BEACH, FL. 33162
                </p>
                <p className="text-sm font-medium">PH:786-403-5043</p>
                <p className="text-sm font-medium">
                  E-MAIL: cbyracinc@gmail.com
                </p>
              </div>
              <div>
                <img className="w-48 h-22" src="/logo-with-name.png" alt="" />
              </div>
            </div>
            <h2 className="bg-black text-white text-center text-lg font-bold mb-4">
              APPLICATION FOR EMPLOYMENT
            </h2>

            <p className=" font-bold text-center mb-4">
              Please Answer All Questions. Resumes Are Not A Substitute For A
              Completed Application.
            </p>

            <div className="flex mb-4 justify-end font-medium">
              <span>Date _________________________</span>
            </div>

            <p className="text-[13px] mb-3 leading-relaxed font-medium">
              We are an equal opportunity employer. Applicants are considered
              for positions without regard to veteran status, uniformed
              servicemember status, race color, religion, sex, national origin,
              age, physical or mental disability, genetic information or any
              other category protected by applicable federal, state, or local
              laws.
            </p>

            <p className="text-smmb-4 leading-relaxed font-semibold">
              THIS COMPANY IS AN AT-WILL EMPLOYER AS ALLOWED BY APPLICABLE STATE
              LAW. THIS MEANS THAT REGARDLESS OF ANY PROVISION IN THIS
              APPLICATION, IF HIRED, THE COMPANY OR I MAY TERMINATE THE
              EMPLOYMENT RELATIONSHIP AT ANY TIME, FOR ANY REASON, WITH OR
              WITHOUT CAUSE OR NOTICE.
            </p>

            {/* Personal Information */}
            <div className="space-y-3 mb-4">
              <div className="grid grid-cols-3 gap-4 mt-6">
                <div className="flex items-center gap-2">
                  <span className="text-sm font-medium">Last Name:</span>
                  <span className="border-b border-black flex-1 min-w-[180px]">
                    {formData.lastName || "\u00A0"}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-sm font-medium">First Name:</span>
                  <span className="text-sm font-medium border-b border-black flex-1 min-w-[180px]">
                    {formData.firstName || "\u00A0"}
                  </span>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-sm font-medium">Middle Name:</span>
                  <span className="text-sm font-medium border-b border-black flex-1 min-w-[150px]">
                    {formData.middleName || "\u00A0"}
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center gap-2">
                  <span className="text-sm font-medium whitespace-nowrap">
                    Social Security Number:
                  </span>
                  <span className="text-sm font-medium border-b border-black flex-1 min-w-0">
                    {formData.ssn || "\u00A0"}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-sm font-medium whitespace-nowrap">
                    DOB:
                  </span>
                  <span className="text-sm font-medium border-b border-black flex-1 min-w-0">
                    {formData.dob || "\u00A0"}
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center gap-2">
                  <span className="text-sm font-medium whitespace-nowrap">
                    Telephone Number:
                  </span>
                  <span className="text-sm font-medium border-b border-black flex-1 min-w-0">
                    {formData.telephoneNumber || "\u00A0"}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-sm font-medium whitespace-nowrap">
                    Email Address:
                  </span>
                  <span className="text-sm font-medium border-b border-black flex-1 min-w-0">
                    {formData.emailAddress || "\u00A0"}
                  </span>
                </div>
              </div>

              <div>
                <div className="flex items-center gap-2">
                  <span className="text-sm font-medium whitespace-nowrap">
                    Address:
                  </span>
                  <span className="text-sm font-medium border-b border-black flex-1 min-w-0">
                    {formData.address || "\u00A0"}
                  </span>
                </div>
                <p className="text-sm italic ml-16">
                  Street/Apartment/City/State/Zip
                </p>
              </div>

              <div>
                <div className="flex items-center gap-2">
                  <span className="text-sm font-medium whitespace-nowrap">
                    Emergency Contact Person:
                  </span>
                  <span className="text-sm font-medium border-b border-black flex-1 min-w-0">
                    {formData.emergencyContactPerson || "\u00A0"}
                  </span>
                </div>
                <p className="text-sm italic ml-40">
                  Name&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Relation&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Telephone
                </p>
              </div>
            </div>

            {/* Employment Type */}
            <div className="space-y-2 mb-4">
              <div className="flex items-center gap-2">
                <span className="text-sm font-medium whitespace-nowrap">
                  Type of employment desired? Full-time ☐ Part-time ☐ Desired
                  Salary/Hourly Rate
                </span>
                <span className="text-sm font-medium border-b border-black flex-1 min-w-0">
                  {formData.desiredSalary || "\u00A0"}
                </span>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center gap-2">
                  <span className="text-sm font-medium whitespace-nowrap">
                    Position Applied For:
                  </span>
                  <span className="text-sm font-medium border-b border-black flex-1 min-w-0">
                    {formData.positionAppliedFor || "\u00A0"}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-sm font-medium whitespace-nowrap">
                    Dept.:
                  </span>
                  <span className="text-sm font-medium border-b border-black flex-1 min-w-0">
                    {formData.department || "\u00A0"}
                  </span>
                </div>
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-sm font-medium whitespace-nowrap">
                    Are you willing to work overtime? Yes ☐ No ☐ Date on which
                    you can start work if hired
                  </span>
                  <span className="text-sm font-medium border-b border-black flex-1 min-w-0">
                    {formData.startDate || "\u00A0"}
                  </span>
                </div>
              </div>
            </div>

            {/* Previous Employment Questions */}
            <div className="space-y-2 mb-4">
              <div>
                <span className="text-sm font-medium">
                  Have you previously applied for employment with this company?
                  Yes ☐ No ☐
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sm font-medium whitespace-nowrap">
                  If yes, when and where did you apply?
                </span>
                <span className="text-sm font-medium border-b border-black flex-1 min-w-0">
                  {formData.previousApplicationDetails || "\u00A0"}
                </span>
              </div>
              <div>
                <span className="text-sm font-medium">
                  Have you ever been employed by this Company? Yes ☐ No ☐
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sm font-medium whitespace-nowrap">
                  If yes, provide dates of employment, location and reason for
                  separation from employment.
                </span>
                <span className="text-sm font-medium border-b border-black flex-1 min-w-0">
                  {formData.previousEmploymentDetails || "\u00A0"}
                </span>
              </div>
            </div>

            {/* Education Section */}
            <h3 className="text-sm font-bold mb-2">Education</h3>
            <table className="w-full border border-black mb-4">
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
                <tr className="border-b border-black">
                  <td className="border-r border-black p-1 font-medium">
                    College
                  </td>
                  <td className="border-r border-black p-1">
                    {formData.education?.college?.course || "\u00A0"}
                  </td>
                  <td className="border-r border-black p-1">
                    {formData.education?.college?.graduate || "\u00A0"}
                  </td>
                  <td className="border-r border-black p-1">
                    {formData.education?.college?.yearsCompleted || "\u00A0"}
                  </td>
                  <td className="p-1">
                    {formData.education?.college?.honors || "\u00A0"}
                  </td>
                </tr>
                <tr className="border-b border-black">
                  <td className="border-r border-black p-1 font-medium">
                    Graduate/Professional
                  </td>
                  <td className="border-r border-black p-1">
                    {formData.education?.graduate?.course || "\u00A0"}
                  </td>
                  <td className="border-r border-black p-1">
                    {formData.education?.graduate?.graduate || "\u00A0"}
                  </td>
                  <td className="border-r border-black p-1">
                    {formData.education?.graduate?.yearsCompleted || "\u00A0"}
                  </td>
                  <td className="p-1">
                    {formData.education?.graduate?.honors || "\u00A0"}
                  </td>
                </tr>
                <tr>
                  <td className="border-r border-black p-1 font-medium">
                    Trade or Correspondence
                  </td>
                  <td className="border-r border-black p-1">
                    {formData.education?.trade?.course || "\u00A0"}
                  </td>
                  <td className="border-r border-black p-1">
                    {formData.education?.trade?.graduate || "\u00A0"}
                  </td>
                  <td className="border-r border-black p-1">
                    {formData.education?.trade?.yearsCompleted || "\u00A0"}
                  </td>
                  <td className="p-1">
                    {formData.education?.trade?.honors || "\u00A0"}
                  </td>
                </tr>
              </tbody>
            </table>

            {/* Work Experience Header */}
            <h3 className="font-bold mb-2">WORK EXPERIENCE</h3>
            <p className="text-sm font-semibold mb-3 leading-relaxed">
              Please list the names of your present and/or previous employers in
              chronological order with present or most recent employer listed
              first. Provide information for at least the most recent ten (10)
              year period. Attach additional sheets if needed. If self-employed,
              supply firm name and business references. You may include any
              verifiable work performed on a volunteer basis, internships, or
              military service. Your failure to completely respond to each
              inquiry may disqualify you for consideration from employment. Do
              not answer "see resume."
            </p>
          </div>

          {/* Page 2 */}
          <div className="p-8 print:p-12 page-break">
            <div className="text-right text-sm mb-4">2</div>

            {/* Employer 1 */}
            <div className="mb-6">
              <div className="grid grid-cols-2 gap-4 mb-2">
                <div>
                  <span className="font-medium">Employer 1</span>
                  <br />
                  <span className="text-sm font-medium border-b border-black inline-block w-full min-w-0">
                    {formData.employer1?.name || "\u00A0"}
                  </span>
                  <br />
                  <span className="">Name</span>
                </div>
                <div className="mt-6">
                  <span className="text-sm font-medium border-b border-black inline-block w-full min-w-0">
                    {formData.employer1?.address || "\u00A0"}
                  </span>
                  <br />
                  <span className="">Address</span>
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="text-sm font-medium whitespace-nowrap">
                    Telephone (____)
                  </span>
                  <span className="text-sm font-medium border-b border-black inline-block w-40">
                    {formData.employer1?.telephone || "\u00A0"}
                  </span>
                  <span className="text-sm font-medium whitespace-nowrap">
                    Dates Employed From
                  </span>
                  <span className="text-sm font-medium border-b border-black inline-block w-32">
                    {formData.employer1?.dateFrom || "\u00A0"}
                  </span>
                  <span className="text-sm font-medium whitespace-nowrap">
                    To
                  </span>
                  <span className="text-sm font-medium border-b border-black inline-block w-32">
                    {formData.employer1?.dateTo || "\u00A0"}
                  </span>
                </div>

                <div className="flex items-center gap-2 flex-wrap">
                  <span className="text-sm font-medium whitespace-nowrap">
                    Job Title
                  </span>
                  <span className="text-sm font-medium border-b border-black inline-block w-48">
                    {formData.employer1?.jobTitle || "\u00A0"}
                  </span>
                  <span className="text-sm ml-4 font-medium whitespace-nowrap">
                    Duties
                  </span>
                  <span className="text-sm font-medium border-b border-black flex-1 min-w-0">
                    {formData.employer1?.duties || "\u00A0"}
                  </span>
                </div>

                <div className="flex items-center gap-2 flex-wrap">
                  <span className="text-sm font-medium whitespace-nowrap">
                    Supervisor's Name
                  </span>
                  <span className="text-sm font-medium border-b border-black inline-block w-48">
                    {formData.employer1?.supervisorName || "\u00A0"}
                  </span>
                  <span className="text-sm ml-4 font-medium whitespace-nowrap">
                    May we contact? Yes ☐ No ☐ if No, why not?
                  </span>
                </div>

                <div className="flex items-center gap-2 flex-wrap">
                  <span className="text-sm font-medium whitespace-nowrap">
                    Wages Start
                  </span>
                  <span className="text-sm font-medium border-b border-black inline-block w-32">
                    {formData.employer1?.wagesStart || "\u00A0"}
                  </span>
                  <span className="text-sm ml-4 font-medium whitespace-nowrap">
                    Final
                  </span>
                  <span className="text-sm font-medium border-b border-black inline-block w-32">
                    {formData.employer1?.wagesFinal || "\u00A0"}
                  </span>
                  <span className="text-sm ml-4 font-medium whitespace-nowrap">
                    Reason for Leaving?
                  </span>
                  <span className="text-sm font-medium border-b border-black flex-1 min-w-0">
                    {formData.employer1?.reasonLeaving || "\u00A0"}
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <span className="text-sm font-medium whitespace-nowrap">
                    What will this employer say was the reason your employment
                    terminated?
                  </span>
                  <span className="text-sm font-medium border-b border-black flex-1 min-w-0">
                    {formData.employer1?.terminationReason || "\u00A0"}
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <span className="text-sm font-medium whitespace-nowrap">
                    Were you ever disciplined? If so, for what?
                  </span>
                  <span className="text-sm font-medium border-b border-black flex-1 min-w-0">
                    {formData.employer1?.disciplined || "\u00A0"}
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <span className="text-sm font-medium whitespace-nowrap">
                    How much notice did you give when resigning? If none,
                    explain.
                  </span>
                  <span className="text-sm font-medium border-b border-black flex-1 min-w-0">
                    {formData.employer1?.notice || "\u00A0"}
                  </span>
                </div>
              </div>
            </div>
            <div className="border-2 mb-5"></div>
            {/* Employer 2 */}
            <div className="mb-6">
              <div className="grid grid-cols-2 gap-4 mb-2">
                <div>
                  <span className="font-medium">Employer 2</span>
                  <br />
                  <span className="text-sm font-medium border-b border-black inline-block w-full min-w-0">
                    {formData.employer2?.name || "\u00A0"}
                  </span>
                  <br />
                  <span className="">Name</span>
                </div>
                <div className="mt-6">
                  <span className="text-sm font-medium border-b border-black inline-block w-full min-w-0">
                    {formData.employer2?.address || "\u00A0"}
                  </span>
                  <br />
                  <span className="">Address</span>
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="text-sm font-medium whitespace-nowrap">
                    Telephone (____)
                  </span>
                  <span className="text-sm font-medium border-b border-black inline-block w-40">
                    {formData.employer2?.telephone || "\u00A0"}
                  </span>
                  <span className="text-sm font-medium whitespace-nowrap">
                    Dates Employed From
                  </span>
                  <span className="text-sm font-medium border-b border-black inline-block w-32">
                    {formData.employer2?.dateFrom || "\u00A0"}
                  </span>
                  <span className="text-sm font-medium whitespace-nowrap">
                    To
                  </span>
                  <span className="text-sm font-medium border-b border-black inline-block w-32">
                    {formData.employer2?.dateTo || "\u00A0"}
                  </span>
                </div>

                <div className="flex items-center gap-2 flex-wrap">
                  <span className="text-sm font-medium whitespace-nowrap">
                    Job Title
                  </span>
                  <span className="text-sm font-medium border-b border-black inline-block w-48">
                    {formData.employer2?.jobTitle || "\u00A0"}
                  </span>
                  <span className="text-sm ml-4 font-medium whitespace-nowrap">
                    Duties
                  </span>
                  <span className="text-sm font-medium border-b border-black flex-1 min-w-0">
                    {formData.employer2?.duties || "\u00A0"}
                  </span>
                </div>

                <div className="flex items-center gap-2 flex-wrap">
                  <span className="text-sm font-medium whitespace-nowrap">
                    Supervisor's Name
                  </span>
                  <span className="text-sm font-medium border-b border-black inline-block w-48">
                    {formData.employer2?.supervisorName || "\u00A0"}
                  </span>
                  <span className="text-sm ml-4 font-medium whitespace-nowrap">
                    May we contact? Yes ☐ No ☐ if No, why not?
                  </span>
                </div>

                <div className="flex items-center gap-2 flex-wrap">
                  <span className="text-sm font-medium whitespace-nowrap">
                    Wages Start
                  </span>
                  <span className="text-sm font-medium border-b border-black inline-block w-32">
                    {formData.employer2?.wagesStart || "\u00A0"}
                  </span>
                  <span className="text-sm ml-4 font-medium whitespace-nowrap">
                    Final
                  </span>
                  <span className="text-sm font-medium border-b border-black inline-block w-32">
                    {formData.employer2?.wagesFinal || "\u00A0"}
                  </span>
                  <span className="text-sm ml-4 font-medium whitespace-nowrap">
                    Reason for Leaving?
                  </span>
                  <span className="text-sm font-medium border-b border-black flex-1 min-w-0">
                    {formData.employer2?.reasonLeaving || "\u00A0"}
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <span className="text-sm font-medium whitespace-nowrap">
                    What will this employer say was the reason your employment
                    terminated?
                  </span>
                  <span className="text-sm font-medium border-b border-black flex-1 min-w-0">
                    {formData.employer2?.terminationReason || "\u00A0"}
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <span className="text-sm font-medium whitespace-nowrap">
                    Were you ever disciplined? If so, for what?
                  </span>
                  <span className="text-sm font-medium border-b border-black flex-1 min-w-0">
                    {formData.employer2?.disciplined || "\u00A0"}
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <span className="text-sm font-medium whitespace-nowrap">
                    How much notice did you give when resigning? If none,
                    explain.
                  </span>
                  <span className="text-sm font-medium border-b border-black flex-1 min-w-0">
                    {formData.employer2?.notice || "\u00A0"}
                  </span>
                </div>
              </div>
            </div>
            <div className="border-2 mb-5"></div>
            {/* Employer 3 */}
            <div className="mb-6">
              <div className="grid grid-cols-2 gap-4 mb-2">
                <div>
                  <span className="font-medium">Employer 3</span>
                  <br />
                  <span className="text-sm font-medium border-b border-black inline-block w-full min-w-0">
                    {formData.employer3?.name || "\u00A0"}
                  </span>
                  <br />
                  <span className="">Name</span>
                </div>
                <div className="mt-6">
                  <span className="text-sm font-medium border-b border-black inline-block w-full min-w-0">
                    {formData.employer3?.address || "\u00A0"}
                  </span>
                  <br />
                  <span className="">Address</span>
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="text-sm font-medium whitespace-nowrap">
                    Telephone (____)
                  </span>
                  <span className="text-sm font-medium border-b border-black inline-block w-40">
                    {formData.employer3?.telephone || "\u00A0"}
                  </span>
                  <span className="text-sm font-medium whitespace-nowrap">
                    Dates Employed From
                  </span>
                  <span className="text-sm font-medium border-b border-black inline-block w-32">
                    {formData.employer3?.dateFrom || "\u00A0"}
                  </span>
                  <span className="text-sm font-medium whitespace-nowrap">
                    To
                  </span>
                  <span className="text-sm font-medium border-b border-black inline-block w-32">
                    {formData.employer3?.dateTo || "\u00A0"}
                  </span>
                </div>

                <div className="flex items-center gap-2 flex-wrap">
                  <span className="text-sm font-medium whitespace-nowrap">
                    Job Title
                  </span>
                  <span className="text-sm font-medium border-b border-black inline-block w-48">
                    {formData.employer3?.jobTitle || "\u00A0"}
                  </span>
                  <span className="text-sm ml-4 font-medium whitespace-nowrap">
                    Duties
                  </span>
                  <span className="text-sm font-medium border-b border-black flex-1 min-w-0">
                    {formData.employer3?.duties || "\u00A0"}
                  </span>
                </div>

                <div className="flex items-center gap-2 flex-wrap">
                  <span className="text-sm font-medium whitespace-nowrap">
                    Supervisor's Name
                  </span>
                  <span className="text-sm font-medium border-b border-black inline-block w-48">
                    {formData.employer3?.supervisorName || "\u00A0"}
                  </span>
                  <span className="text-sm ml-4 font-medium whitespace-nowrap">
                    May we contact? Yes ☐ No ☐ if No, why not?
                  </span>
                </div>

                <div className="flex items-center gap-2 flex-wrap">
                  <span className="text-sm font-medium whitespace-nowrap">
                    Wages Start
                  </span>
                  <span className="text-sm font-medium border-b border-black inline-block w-32">
                    {formData.employer3?.wagesStart || "\u00A0"}
                  </span>
                  <span className="text-sm ml-4 font-medium whitespace-nowrap">
                    Final
                  </span>
                  <span className="text-sm font-medium border-b border-black inline-block w-32">
                    {formData.employer3?.wagesFinal || "\u00A0"}
                  </span>
                  <span className="text-sm ml-4 font-medium whitespace-nowrap">
                    Reason for Leaving?
                  </span>
                  <span className="text-sm font-medium border-b border-black flex-1 min-w-0">
                    {formData.employer3?.reasonLeaving || "\u00A0"}
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <span className="text-sm font-medium whitespace-nowrap">
                    What will this employer say was the reason your employment
                    terminated?
                  </span>
                  <span className="text-sm font-medium border-b border-black flex-1 min-w-0">
                    {formData.employer3?.terminationReason || "\u00A0"}
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <span className="text-sm font-medium whitespace-nowrap">
                    Were you ever disciplined? If so, for what?
                  </span>
                  <span className="text-sm font-medium border-b border-black flex-1 min-w-0">
                    {formData.employer3?.disciplined || "\u00A0"}
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <span className="text-sm font-medium whitespace-nowrap">
                    How much notice did you give when resigning? If none,
                    explain.
                  </span>
                  <span className="text-sm font-medium border-b border-black flex-1 min-w-0">
                    {formData.employer3?.notice || "\u00A0"}
                  </span>
                </div>
              </div>
            </div>

            {/* Termination Questions */}
            <div className="space-y-2 mb-4">
              <div className="flex items-center gap-2">
                <span className="text-sm font-medium whitespace-nowrap">
                  Have you ever been terminated or asked to resign from any job?
                  Yes ☐ No ☐ If Yes how many times?
                </span>
                <span className="text-sm font-medium border-b border-black inline-block w-20">
                  {formData.terminatedTimes || "\u00A0"}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sm font-medium whitespace-nowrap">
                  Has your employment ever been terminated by mutual agreement?
                  Yes ☐ No ☐ If Yes how many times?
                </span>
                <span className="text-sm font-medium border-b border-black inline-block w-20">
                  {formData.mutualAgreementTimes || "\u00A0"}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sm font-medium whitespace-nowrap">
                  Have you ever been given the choice to resign rather than be
                  terminated? Yes ☐ No ☐ If Yes how many times?
                </span>
                <span className="text-sm font-medium border-b border-black inline-block w-20">
                  {formData.resignChoiceTimes || "\u00A0"}
                </span>
              </div>
              <div>
                <span className="text-sm font-medium">
                  If you answered Yes to any of the above three questions,
                  please explain the circumstances of each occasion.
                </span>
              </div>
            </div>
            <div className="border mb-6"></div>
            <div className="border mb-6"></div>
            <div className="border mb-6"></div>
            <div className="border mb-6"></div>
            {/* References Section */}
            <h3 className="text-sm font-bold mb-2">REFERENCES (Optional)</h3>
            <p className="text-sm mb-3 font-medium">
              Please list the names of additional work related references we may
              contact. Individuals with no prior work experience may list school
              or volunteer-related references.
            </p>

            <table className="w-full border border-black text-sm mb-4">
              <thead>
                <tr className="border-b border-black">
                  <th className="border-r border-black p-1 text-left font-medium">
                    NAME
                  </th>
                  <th className="border-r border-black p-1 text-left font-medium">
                    POSITION
                  </th>
                  <th className="border-r border-black p-1 text-left font-medium">
                    COMPANY
                  </th>
                  <th className="border-r border-black p-1 text-left font-medium">
                    WORK RELATIONSHIP
                    <br />
                    (i.e. supervisor, co-worker)
                  </th>
                  <th className="p-1 text-left font-medium">TELEPHONE</th>
                </tr>
              </thead>
              <tbody>
                <tr className="h-8 border-b border-black">
                  <td className="border-r border-black p-1">
                    {formData.workReferences?.[0]?.name || "\u00A0"}
                  </td>
                  <td className="border-r border-black p-1">
                    {formData.workReferences?.[0]?.position || "\u00A0"}
                  </td>
                  <td className="border-r border-black p-1">
                    {formData.workReferences?.[0]?.company || "\u00A0"}
                  </td>
                  <td className="border-r border-black p-1">
                    {formData.workReferences?.[0]?.relationship || "\u00A0"}
                  </td>
                  <td className="p-1">
                    {formData.workReferences?.[0]?.telephone || "\u00A0"}
                  </td>
                </tr>
                <tr className="h-8 border-b border-black">
                  <td className="border-r border-black p-1">
                    {formData.workReferences?.[1]?.name || "\u00A0"}
                  </td>
                  <td className="border-r border-black p-1">
                    {formData.workReferences?.[1]?.position || "\u00A0"}
                  </td>
                  <td className="border-r border-black p-1">
                    {formData.workReferences?.[1]?.company || "\u00A0"}
                  </td>
                  <td className="border-r border-black p-1">
                    {formData.workReferences?.[1]?.relationship || "\u00A0"}
                  </td>
                  <td className="p-1">
                    {formData.workReferences?.[1]?.telephone || "\u00A0"}
                  </td>
                </tr>
                <tr className="h-8">
                  <td className="border-r border-black p-1">
                    {formData.workReferences?.[2]?.name || "\u00A0"}
                  </td>
                  <td className="border-r border-black p-1">
                    {formData.workReferences?.[2]?.position || "\u00A0"}
                  </td>
                  <td className="border-r border-black p-1">
                    {formData.workReferences?.[2]?.company || "\u00A0"}
                  </td>
                  <td className="border-r border-black p-1">
                    {formData.workReferences?.[2]?.relationship || "\u00A0"}
                  </td>
                  <td className="p-1">
                    {formData.workReferences?.[2]?.telephone || "\u00A0"}
                  </td>
                </tr>
              </tbody>
            </table>

            <p className="text-sm font-medium mb-2">
              Please list the names of personal references (not previous
              employers or relatives) who you know that we may contact.
            </p>
          </div>

          {/* Page 3 */}
          <div className="p-8 print:p-12 page-break">
            <div className="text-right text-sm mb-4">3</div>

            <table className="w-full border border-black text-sm mb-6">
              <thead>
                <tr className="border-b border-black">
                  <th className="border-r border-black p-1 text-left font-medium">
                    NAME
                  </th>
                  <th className="border-r border-black p-1 text-left font-medium">
                    OCCUPATION
                  </th>
                  <th className="border-r border-black p-1 text-left font-medium">
                    TELEPHONE
                  </th>
                  <th className="border-r border-black p-1 text-left font-medium">
                    NUMBER OF YEARS
                    <br />
                    KNOWN
                  </th>
                  <th className="p-1 text-left font-medium">
                    BEST TIME TO CALL
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="h-8 border-b border-black">
                  <td className="border-r border-black p-1">
                    {formData.personalReferences?.[0]?.name || "\u00A0"}
                  </td>
                  <td className="border-r border-black p-1">
                    {formData.personalReferences?.[0]?.occupation || "\u00A0"}
                  </td>
                  <td className="border-r border-black p-1">
                    {formData.personalReferences?.[0]?.telephone || "\u00A0"}
                  </td>
                  <td className="border-r border-black p-1">
                    {formData.personalReferences?.[0]?.yearsKnown || "\u00A0"}
                  </td>
                  <td className="p-1">
                    {formData.personalReferences?.[0]?.bestTimeToCall ||
                      "\u00A0"}
                  </td>
                </tr>
                <tr className="h-8 border-b border-black">
                  <td className="border-r border-black p-1">
                    {formData.personalReferences?.[1]?.name || "\u00A0"}
                  </td>
                  <td className="border-r border-black p-1">
                    {formData.personalReferences?.[1]?.occupation || "\u00A0"}
                  </td>
                  <td className="border-r border-black p-1">
                    {formData.personalReferences?.[1]?.telephone || "\u00A0"}
                  </td>
                  <td className="border-r border-black p-1">
                    {formData.personalReferences?.[1]?.yearsKnown || "\u00A0"}
                  </td>
                  <td className="p-1">
                    {formData.personalReferences?.[1]?.bestTimeToCall ||
                      "\u00A0"}
                  </td>
                </tr>
                <tr className="h-8">
                  <td className="border-r border-black p-1">
                    {formData.personalReferences?.[2]?.name || "\u00A0"}
                  </td>
                  <td className="border-r border-black p-1">
                    {formData.personalReferences?.[2]?.occupation || "\u00A0"}
                  </td>
                  <td className="border-r border-black p-1">
                    {formData.personalReferences?.[2]?.telephone || "\u00A0"}
                  </td>
                  <td className="border-r border-black p-1">
                    {formData.personalReferences?.[2]?.yearsKnown || "\u00A0"}
                  </td>
                  <td className="p-1">
                    {formData.personalReferences?.[2]?.bestTimeToCall ||
                      "\u00A0"}
                  </td>
                </tr>
              </tbody>
            </table>

            {/* Driving Information */}
            <h3 className="text-sm font-bold mb-3">DRIVING INFORMATION</h3>
            <div className="space-y-2 mb-4">
              <div className="flex items-center gap-2">
                <span className="text-sm font-medium whitespace-nowrap">
                  Do you have a current valid driver's license? Yes ☐ No ☐ If
                  yes, License No.:
                </span>
                <span className="text-sm font-medium border-b border-black inline-block w-48">
                  {formData.driverLicense?.licenseNo || "\u00A0"}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sm font-medium whitespace-nowrap">
                  State:
                </span>
                <span className="text-sm font-medium border-b border-black inline-block w-32">
                  {formData.driverLicense?.state || "\u00A0"}
                </span>
                <span className="text-sm font-medium whitespace-nowrap ml-4">
                  Expiration Date:
                </span>
                <span className="text-sm font-medium border-b border-black inline-block w-48">
                  {formData.driverLicense?.expirationDate || "\u00A0"}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sm font-medium whitespace-nowrap">
                  If you do not have a driver's license for the state in which
                  you currently reside, why not?
                </span>
                <span className="text-sm font-medium border-b border-black flex-1 min-w-0">
                  {formData.driverLicense?.noLicenseReason || "\u00A0"}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sm font-medium whitespace-nowrap">
                  Has your license ever been suspended or revoked? Yes ☐ No ☐ If
                  yes, explain
                </span>
                <span className="text-sm font-medium border-b border-black flex-1 min-w-0">
                  {formData.driverLicense?.suspendedExplain || "\u00A0"}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sm font-medium whitespace-nowrap">
                  Do you have personal automobile insurance? Yes ☐ No ☐ If no,
                  explain
                </span>
                <span className="text-sm font-medium border-b border-black flex-1 min-w-0">
                  {formData.driverLicense?.noInsuranceExplain || "\u00A0"}
                </span>
              </div>
              <div>
                <span className="text-sm font-medium">
                  Have you ever been denied personal automobile insurance or has
                  it ever been terminated or suspended? Yes ☐ No ☐
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sm font-medium whitespace-nowrap">
                  If yes, explain
                </span>
                <span className="text-sm font-medium border-b border-black flex-1 min-w-0">
                  {formData.driverLicense?.insuranceDeniedExplain || "\u00A0"}
                </span>
              </div>
            </div>

            <p className="mb-2 font-medium">
              Please list all moving traffic violations in the last five (5)
              years:
            </p>

            <table className="w-full border border-black text-sm mb-6">
              <thead>
                <tr className="border-b border-black">
                  <th className="border-r border-black p-1 text-left font-medium">
                    OFFENSE
                  </th>
                  <th className="border-r border-black p-1 text-left font-medium">
                    DATE
                  </th>
                  <th className="border-r border-black p-1 text-left font-medium">
                    LOCATION
                  </th>
                  <th className="p-1 text-left font-medium">COMMENTS</th>
                </tr>
              </thead>
              <tbody>
                <tr className="h-8 border-b border-black">
                  <td className="border-r border-black p-1">
                    {formData.trafficViolations?.[0]?.offense || "\u00A0"}
                  </td>
                  <td className="border-r border-black p-1">
                    {formData.trafficViolations?.[0]?.date || "\u00A0"}
                  </td>
                  <td className="border-r border-black p-1">
                    {formData.trafficViolations?.[0]?.location || "\u00A0"}
                  </td>
                  <td className="p-1">
                    {formData.trafficViolations?.[0]?.comments || "\u00A0"}
                  </td>
                </tr>
                <tr className="h-8 border-b border-black">
                  <td className="border-r border-black p-1">
                    {formData.trafficViolations?.[1]?.offense || "\u00A0"}
                  </td>
                  <td className="border-r border-black p-1">
                    {formData.trafficViolations?.[1]?.date || "\u00A0"}
                  </td>
                  <td className="border-r border-black p-1">
                    {formData.trafficViolations?.[1]?.location || "\u00A0"}
                  </td>
                  <td className="p-1">
                    {formData.trafficViolations?.[1]?.comments || "\u00A0"}
                  </td>
                </tr>
                <tr className="h-8">
                  <td className="border-r border-black p-1">
                    {formData.trafficViolations?.[2]?.offense || "\u00A0"}
                  </td>
                  <td className="border-r border-black p-1">
                    {formData.trafficViolations?.[2]?.date || "\u00A0"}
                  </td>
                  <td className="border-r border-black p-1">
                    {formData.trafficViolations?.[2]?.location || "\u00A0"}
                  </td>
                  <td className="p-1">
                    {formData.trafficViolations?.[2]?.comments || "\u00A0"}
                  </td>
                </tr>
              </tbody>
            </table>

            {/* Applicant Certification */}
            <h3 className="text-lg text-center bg-black text-white font-bold mb-3">
              APPLICANT CERTIFICATION
            </h3>

            <div className="space-y-3 text-sm font-medium leading-relaxed">
              <p>
                I understand and agree that if driving is a requirement of the
                job for which I am applying, my employment and/or continued
                employment is contingent on possessing a valid driver's license
                for the state in which I reside and automobile liability
                insurance in an amount equal to the minimum required by the
                state where I reside.
              </p>

              <p>
                I understand that the Company may now have, or may establish, a
                drug-free workplace or drug and/or alcohol testing program
                consistent with applicable federal, state, and local law. If the
                Company has such program and I am offered a conditional offer of
                employment, I understand that if a pre-employment (post-offer)
                drug and/or alcohol test is positive, the employment offer may
                be withdrawn. I agree to work under the conditions requiring a
                drug-free workplace, consistent with applicable federal, state,
                and local law. I also understand that all employees of the
                location, pursuant to the Company's policy and federal, state,
                and local law, may be subject to urinalysis and/or blood
                screening or other medically recognized tests designed to detect
                the presence of alcohol or illegal or controlled drugs. If
                employed, I understand that the taking of alcohol and/or drug
                test is a condition of continual employment and I agree to
                undergo alcohol and drug testing consistent with Cbyrac, Inc
                policies and applicable federal, state and local law.
              </p>

              <p>
                If employed by Cbyrac, Inc., I understand and agree that the
                Company, to the extent permitted by federal, state, and local
                law, may exercise its right, without prior warning or notice, to
                conduct investigations of property (including, but not limited
                to, files, lockers, desks, vehicles, and computers) and, in
                certain circumstances, my personal property.
              </p>

              <p>
                I understand and agree that as a condition of employment and to
                the extent permitted by federal, state, and local law, I may be
                required to sign a confidentiality, restrictive covenant, and/or
                conflict of interest statement.
              </p>

              <p>
                I certify that all the information on this application, my
                resume, or any supporting documents I may present during any
                interview is and will be complete and accurate to the best of my
                knowledge. I understand that any falsification,
                misrepresentation, or omission of any information may result in
                disqualification from consideration for employment or, if
                employed, disciplinary action, up to and including immediate
                dismissal.
              </p>
            </div>
          </div>

          {/* Page 4 */}
          <div className="p-8 print:p-12 page-break">
            <div className="text-right text-sm mb-4">4</div>

            <div className="space-y-3 text-sm font-medium leading-relaxed mb-6">
              <span>
                <p className="font-bold underline mb-6">
                  CBYRAC, INC. IS AN AT-WILL EMPLOYER AS ALLOWED BY APPLICABLE
                  STATE LAW, THIS MEANS THAT REGARDLESS OF ANY PROVISION IN THIS
                  APPLICATION, IF HIRED, THE CBYRAC, INC. OR I MAY TERMINATE THE
                  EMPLOYMENT RELATINSHIP AT ANY TIME, FOR ANY RESON, WITH OR
                  WITHOUT CAUSE OR NOTICE. NOTHING IN THIS APPLICATION OR IN ANY
                  DOCUMENT OR STATEMENT, WRITTEN OR ORAL, SHALL LIMIT THE RIGHT
                  TO TERMINATE EMPLOYMENT AT-WILL. NOT OFFICERS, EMPLYEE OR
                  REPRESENTATIVE OF CBYRAC, INC. IS AUTHORIZED TO ENTER INTO AN
                  AGREEMENT – EXPRESS OR IMPLIED—WITH ME OR ANY APPLICANT FOR
                  EMPLOYMENT FOR A SPECIFIED PERIOD OF TIME UNLESS SUCH AN
                  AGREEMENT IS IN A WRITTEN CONTRACT SIGNED BY THE PRESIDENT OF
                  CBYRAC, INC. IF HIRED, I AGREE TO CONFORM TO THE RULES AND
                  REGULATIONS OF CBYRAC, INC., AND I UNDERSTAND THAT CBYRAC,
                  INC. HAS COMPLETE DISCRETION TO MODIFY SUCH RULES AND
                  REGULATIONS AT ANY TIME, EXCEPT THAT IT WILL NOT MODIFY ITS
                  POLICY OF EMPLOYMENT AT-WILL.
                </p>
              </span>
              <p>
                I authorize the CBYRAC, INC. or its agents to confirm all
                statements contained in this application and/or resume as it
                relates to the position I am seeking to the extent permitted by
                federal, state, or local law. I agree to complete any requisite
                authorization forms for the background investigation which may
                be permitted by federal, state and/or local law. If applicable
                and allowed by law, I will receive separate written notification
                regarding the Company's intent to obtain "consumer reports."
              </p>

              <p>
                I authorize and consent to, without reservation, any party or
                agency contacted by this employer to furnish the above-mentioned
                information. I hereby release, discharge, and hold harmless, to
                the extent permitted by federal, state, and local law, any party
                delivering information to CBYRAC, INC. or its duly authorized
                representative pursuant to this authorization from any
                liability, claims, charges, or causes of action which I may have
                as a result of the delivery or disclosure of the above requested
                information. I hereby release from liability CBYRAC, INC. and
                its representative for seeking such information and all other
                persons, corporations, or organizations furnishing such
                information. Further, if hired, I authorize CBYRAC, INC. to
                provide truthful information concerning my employment to future
                employers and hold the CBYRAC, INC. harmless for providing such
                information.
              </p>

              <p>
                If hired by CBYRAC, INC., I understand that I will be required
                to provide genuine documentation establishing my identity and
                eligibility to be legally employed in the United States by this
                Company. I also understand this Company employs only individuals
                who are legally eligible to work in the United States.
              </p>

              <p className="">
                THIS APPLICATION WILL BE CONSIDERED ACTIVE FOR A MAXIMUM OF
                SIXTY (60) DAYS. IF YOU WISH TO BE CONSIDERED FOR EMPLOYMENT
                AFTER THAT TIME. YOU MUST REAPPLY.
              </p>

              <p className="">
                I CERTIFY THAT ALL OF THE INFORMATION THAT I HAVE PROVIDED ON
                THIS APPLICATION IS TRUE, ACCURATE, AND COMPLETE.
              </p>
            </div>

            <p className="text-sm font-bold mb-4">
              DO NOT SIGN UNTIL YOU HAVE READ ALL THE INFORMATION CONTAINED IN
              THE APPLICATION.
            </p>

            <p className="text-sm bg-gray-300 text-center mb-6 font-medium">
              In signing below, I acknowledge that I have read and understand
              all the terms of this Application for Employment
            </p>
            <div className="mb-8 flex items-center gap-4">
              <span className="font-medium whitespace-nowrap">
                Applicant Signature
              </span>
              <span className="font-medium border-b border-black inline-block w-80">
                {formData.applicantSignature || "\u00A0"}
              </span>
              <span className="ml-8 font-medium whitespace-nowrap">Date</span>
              <span className="font-medium border-b border-black inline-block w-48">
                {formData.signatureDate || "\u00A0"}
              </span>
            </div>

            {/* Company Use Only Section */}
            <div className="border-t-2 border-black pt-4">
              <h3 className="font-bold bg-gray-300 text-center mb-3">
                CBYRAC, INC. Use Only
              </h3>

              <div className="space-y-2 mb-4 font-medium">
                <div>
                  <span>
                    Check One: ☐ New Hire ☐ Re-Hire Status: ☐ Full Time ☐ Part
                    Time
                  </span>
                </div>
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="whitespace-nowrap">Job Description:</span>
                  <span className="border-b border-black inline-block w-60">
                    {formData.companyUse?.jobDescription || "\u00A0"}
                  </span>
                  <span className="ml-4 whitespace-nowrap">W/C Code:</span>
                  <span className="border-b border-black inline-block w-28">
                    {formData.companyUse?.wcCode || "\u00A0"}
                  </span>
                  <span className="ml-4 whitespace-nowrap">Hire Date:</span>
                  <span className="border-b border-black inline-block w-40">
                    {formData.companyUse?.hireDate || "\u00A0"}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="whitespace-nowrap">Termination:</span>
                  <span className="border-b border-black inline-block w-40">
                    {formData.companyUse?.termination || "\u00A0"}
                  </span>
                </div>
              </div>

              <div className="space-y-2 mb-4 font-medium">
                <div className="flex items-center gap-2">
                  <span className="whitespace-nowrap">
                    Pay Rate: ☐ Hourly $
                  </span>
                  <span className="border-b border-black inline-block w-32">
                    {formData.companyUse?.hourlyRate || "\u00A0"}
                  </span>
                  <span className="whitespace-nowrap">
                    per hour ☐ Commission
                  </span>
                </div>
                <div className="ml-16 flex items-center gap-2">
                  <span className="whitespace-nowrap">
                    ☐ Salary O.T. Exempt $
                  </span>
                  <span className="border-b border-black inline-block w-32">
                    {formData.companyUse?.salaryOTExempt || "\u00A0"}
                  </span>
                  <span className="whitespace-nowrap">per pay period</span>
                </div>
                <div className="ml-16 flex items-center gap-2">
                  <span className="whitespace-nowrap">
                    ☐ Salary O.T. Non-Exempt $
                  </span>
                  <span className="border-b border-black inline-block w-32">
                    {formData.companyUse?.salaryOTNonExempt || "\u00A0"}
                  </span>
                  <span className="whitespace-nowrap">per pay period</span>
                </div>
              </div>

              <p className=" mb-2 font-medium">
                *If salary O.T. non-exempt, what is the special breakdown of
                rates to be included in salary?
              </p>
              <div className="font-medium mb-2 flex items-center gap-2 flex-wrap">
                <span className="whitespace-nowrap">
                  Regular rate (1st 40 hours) = $
                </span>
                <span className="border-b border-black inline-block w-32">
                  {formData.companyUse?.regularRate || "\u00A0"}
                </span>
                <span className="ml-8 whitespace-nowrap">O.T. Rate = $</span>
                <span className="border-b border-black inline-block w-32">
                  {formData.companyUse?.otRate || "\u00A0"}
                </span>
              </div>
              <div className="mb-4 font-medium flex items-center gap-2">
                <span className="whitespace-nowrap">
                  **Work Hours per pay period:
                </span>
                <span className="border-b border-black inline-block w-32">
                  {formData.companyUse?.workHours || "\u00A0"}
                </span>
              </div>
              <div className="mb-4 font-medium flex items-center gap-2">
                <span className="whitespace-nowrap">☐ Other:</span>
                <span className="border-b border-black flex-1 min-w-0">
                  {formData.companyUse?.other || "\u00A0"}
                </span>
              </div>

              <h3 className="text-center bg-gray-300 font-bold mb-3">
                Human Resource Use Only
              </h3>
              <div className="font-medium flex items-center gap-2 flex-wrap">
                <span className="whitespace-nowrap">Received By:</span>
                <span className="border-b border-black inline-block w-64">
                  {formData.hrUse?.receivedBy || "\u00A0"}
                </span>
                <span className="ml-4 whitespace-nowrap">Date:</span>
                <span className="border-b border-black inline-block w-40">
                  {formData.hrUse?.date || "\u00A0"}
                </span>
              </div>
            </div>
          </div>

          {/* Page 5 - Substance Abuse Policy */}
          <div className="p-8 print:p-12 page-break">
            <div className="text-right text-sm mb-4">5</div>

            <div className="text-center border-b-2 border-black pb-2 mb-4">
              <h2 className="text-lg font-bold">CBYRAC, INC</h2>
              <h3 className="text-base font-bold">SUBSTANCE ABUSE POLICY</h3>
            </div>

            <p className="text-sm mb-4 leading-relaxed">
              The welfare and success of CBYRAC, INC., the "Company", depends on
              the physical and psychological health of all its employees. While
              the company is committed to maintaining a safe and productive
              workplace, it is the responsibility of both the company and the
              employees to create and maintain a safe, healthful and efficient
              working environment. Therefore, for the protection of its clients,
              employees, property, and the general public, the Company has
              adopted this Substance Abuse Policy.
            </p>

            <h3 className="text-sm font-bold mb-2">1. PURPOSE AND SCOPE</h3>

            <p className="text-sm mb-2 leading-relaxed">
              <span className="font-bold">
                <span className="mr-6">1.01</span> PURPOSE:
              </span>{" "}
              The purpose of this Policy is to maintain a safe, healthful, and
              efficient working environment by eliminating any abuse of legal
              and illegal drugs, alcohol and inhalants on the Company premises
              or at any time while on company business, and requiring all
              employees of the Company to be free from the effects of legal and
              illegal drugs, alcohol and inhalants while on the company or at
              any time while on Company business.
            </p>

            <p className="text-sm mb-4 leading-relaxed">
              <span className="font-bold">
                <span className="mr-6">1.02</span> SCOPE:
              </span>{" "}
              This policy applies to all employees of this Company: (a) at all
              times while on the Company premises, (b) during the course and
              scope of their employment regardless of location and (c) during
              any Company - sponsored activities.
            </p>

            <h3 className="text-sm font-bold mb-2">
              2. DISCIPLINARY ACTION AND PROHIBITED CONDUCT
            </h3>

            <p className="text-sm mb-2 leading-relaxed">
              <span className="font-bold">
                <span className="inline-block w-12">2.01</span> DISCIPLINARY
                ACTION:
              </span>{" "}
              An employee’s failure to comply with any part of this policy will
              result in disciplinary action, up to and including termination of
              employment.
            </p>

            <p className="text-sm mb-2 leading-relaxed">
              <span className="font-bold">
                <span className="inline-block w-12">2.02</span> PROHIBITED
                CONDUCT:
              </span>{" "}
              Any employee will be subject to the measures described in
              Paragraph 2.01 for any of the following:
            </p>

            <div className="text-sm ml-4 mb-4 space-y-2 leading-relaxed">
              <p>
                <span className="inline-block w-6 font-medium">a.)</span>
                The manufacture, distribution, possession, use, or sale of
                alcohol, inhalants, unauthorized or illegal drugs, or the misuse
                of legal or prescription drugs on Company premises, while on
                company business, or during any Company-sponsored activities.
              </p>

              <p>
                <span className="inline-block w-6 font-medium">b.)</span>
                Being under the influence of any substance described in (a)
                above which impairs judgment, performance, or behavior while on
                Company premises, or during Company-sponsored activities.
              </p>

              <p>
                <span className="inline-block w-6 font-medium">c.)</span>
                Conviction under any criminal statute for the possession, use,
                or sale of drugs or alcohol, or any related activity.
              </p>

              <p>
                <span className="inline-block w-6 font-medium">d.)</span>
                Refusing to submit to a medical evaluation, including drug or
                alcohol testing as provided for in Section 3 of this policy.
              </p>

              <p>
                <span className="inline-block w-6 font-medium">e.)</span>
                Generating test results which indicate any drug, alcohol, or
                other substance abuse.
              </p>
            </div>

            <h3 className="font-bold mb-2">3. TESTING</h3>

            <p className="mb-2 leading-relaxed">
              <span className="font-bold">
                <span className="inline-block w-12">3.01</span> DEFINITION:
              </span>{" "}
              For the purpose of this policy, "drug" is defined as any alcoholic
              beverage, illegal inhalant, illegal drug, or other substance, the
              use, possession, manufacture, distribution, or dispensation of
              which is prohibited by any state or federal law or regulation, and
              any drug substance obtained by prescription, over-the-counter, or
              otherwise.
            </p>

            <p className="text-sm mb-2 leading-relaxed">
              <span className="font-bold">
                <span className="inline-block w-12">3.02</span> APPLICABILITY OF
                DRUG TESTING:
              </span>
            </p>

            <div className="text-sm ml-4 mb-4 space-y-2 leading-relaxed">
              {/* Section a */}
              <p>
                <span className="inline-block w-6 font-medium">a.)</span>
                All persons applying for a position with the Company may be
                required to submit to a drug test as a condition to employment.
              </p>

              {/* Section b */}
              <p>
                <span className="inline-block w-6 font-medium">b.)</span>
                All current and future employees must submit to a drug test upon
                the request of the Company under the following:
              </p>

              {/* Subpoints */}
              <div className="ml-8 space-y-2">
                <p>
                  <span className="inline-block w-6 font-medium">1.)</span>
                  When special safety considerations attendant to certain jobs
                  indicate that such testing presents a reasonable means to
                  assure a safe working environment.
                </p>

                <p>
                  <span className="inline-block w-6 font-medium">2.)</span>
                  When the employee either sustains an injury in the course and
                  scope of employment or contributes to or causes another
                  employee to sustain an injury in the course and scope of
                  employment.
                </p>

                <p>
                  <span className="inline-block w-6 font-medium">3.)</span>
                  When the employee causes, indirectly or directly, damage to
                  the Company's property or to the property of another.
                </p>

                <p>
                  <span className="inline-block w-6 font-medium">4.)</span>
                  When the employee contributes or causes injury to any third
                  party while the employee is in the course and scope of
                  employment.
                </p>

                <p>
                  <span className="inline-block w-6 font-medium">5.)</span>
                  When the employee is convicted under any criminal drug statute
                  for a violation occurring during the course and scope of
                  employment. If such a conviction occurs, it is the employee's
                  responsibility to notify the Company within five (5) days of
                  the conviction. This requirement includes any finding of
                  guilt, guilty plea, plea of no contest, or imposition of
                  sentence or any other penalty whatsoever by any court of
                  competent jurisdiction or otherwise in connection with any
                  state or federal criminal statute involving the manufacture,
                  distribution, dispensation, use, or possession of any
                  controlled substance or drug, including alcohol.
                </p>

                <p>
                  <span className="inline-block w-6 font-medium">6.)</span>
                  When the Company, in its sole discretion, determines that it
                  is in the Company's best interest to conduct such a drug test.
                </p>
              </div>
            </div>

            <h3 className="font-bold mb-2">4. MISCELLANEOUS PROVISIONS</h3>

            <p className="text-sm mb-2 leading-relaxed">
              <span className="font-bold">
                <span className="inline-block w-16">4.01</span>
                COOPERATION WITH LAW ENFORCEMENT:
              </span>{" "}
              Any illegal drug or other substance obtained by the Company from
              any employee may be turned over to a law enforcement agency and
              may result in criminal prosecution.
            </p>

            <p className="text-sm mb-2 leading-relaxed">
              <span className="font-bold">
                <span className="inline-block w-16">4.02</span>
                REPORTING:
              </span>{" "}
              Each employee is responsible for promptly reporting to the
              appropriate Company officers any use of prescribed medication that
              may affect the employee’s judgment, performance, or behavior.
            </p>

            <p className="text-sm mb-2 leading-relaxed">
              <span className="font-bold">
                <span className="inline-block w-16">4.03</span>
                OTHER PROCEDURES:
              </span>{" "}
              The Company will establish such other procedures as it finds
              necessary to effectively enforce this policy. This may include a
              requirement that employees cooperate in personal or facility
              searches when there is reason to believe drugs or alcohol are
              present, when their performance is impaired, or their behavior is
              erratic. Refusing to cooperate with these procedures may be cause
              for disciplinary action as provided in Section 2.
            </p>

            <p className="text-sm mb-4 leading-relaxed">
              <span className="font-bold">
                <span className="inline-block w-16">4.04</span>
                MEDICAL FACILITY:
              </span>{" "}
              The Company shall not be responsible for, and makes no
              representations or warranties on behalf of, the laboratory or
              medical facility conducting the drug test.
            </p>

            <div className="border-t border-black pt-3">
              <p className="font-bold">
                CBYRAC, INC. Substance Abuse Policy – English
              </p>
              <p className="text-sm font-bold mt-2 flex items-center gap-2">
                <span className="whitespace-nowrap">Initial</span>
                <span className="border-b border-black inline-block w-64">
                  {formData.substanceAbuse?.initial || "\u00A0"}
                </span>
              </p>
            </div>
          </div>

          {/* Page 6 - Accidents/Injuries Procedures */}
          <div className="p-8 print:p-12 page-break">
            <div className="text-right text-sm mb-4">6</div>

            <div className="text-center  pb-2 mb-4">
              <h2 className="text-lg font-bold">CBYRAC, INC</h2>
              <p className="text-sm font-medium italic">
                633 N.E.167TH STREET, SUITE 709
              </p>
              <p className="text-sm font-medium italic">
                NORTH MIAMI BEACH, FLORIDA 33162
              </p>
            </div>
            <h3 className="text-base font-bold mt-2">
              ACCIDENTS / INJURIES PROCEDURES
            </h3>
            <div className="border-b-2 border-black w-[300px] mb-6"></div>
            <p className="font-semibold text-center mb-3">
              The following procedures must be followed for all work-related
              injuries
            </p>

            <div className="space-y-3 text-sm leading-relaxed">
              <p>
                <span className="font-bold inline-block w-6">1.</span>
                ALL ACCIDENTS/INJURIES must be reported to your foreman or
                supervisor immediately, even if no medical attention is
                required. The injured employee must complete a Report of
                Employee Injury/Accident, whether or not medical attention is
                required. It will be placed in their medical file for future
                reference in case of problems.
              </p>

              <p>
                <span className="font-bold inline-block w-6">2.</span>
                The supervisor must complete a Supervisor’s Report of Accident
                (i.e., the person you report to on your assignment) at the same
                time the employee accident report is being filled out,
                regardless of whether medical attention is required. Both
                reports must be faxed to{" "}
                <span className="font-bold">CBYRAC, INC</span> at (786)
                403-5043.
              </p>

              <p>
                <span className="font-bold inline-block w-6">3.</span>
                If the injury requires medical attention and is not an emergency
                situation, have your supervisor call (786) 403-5043 prior to
                going to a medical facility. In case of an emergency, have your
                supervisor call and report which medical facility you are being
                transported to. We need to authorize treatment, arrange for
                proper billing, and ensure that the facility follows proper
                procedures.
              </p>

              <p>
                <span className="font-bold inline-block w-6">4.</span>
                If an employee must be off on disability, he/she must notify
                <span className="font-bold"> CBYRAC, INC</span>. If off for an
                extended period of time, the employee must visit the office or
                call at least once a week to advise{" "}
                <span className="font-bold">CBYRAC, INC</span> of their status.
                Upon receiving a release to return to work, the employee must
                call the office to report availability.
              </p>

              <p>
                <span className="font-bold inline-block w-6">5.</span>
                Anytime an employee is on light duty, the doctor’s restrictions
                must be followed. The employee may return to regular duties only
                when released in writing by the doctor. It is the employee’s
                responsibility to inform the doctor that{" "}
                <span className="font-bold">CBYRAC, INC</span> has all types of
                light duty work available.
              </p>

              <p>
                <span className="font-bold inline-block w-6">6.</span>A drug
                screen is required for all injuries. A drug test must be taken
                within 24 hours after an injury is reported. Refusal to submit
                to a drug test will result in the same consequences as a
                positive drug or alcohol test.
              </p>

              <p>
                <span className="font-bold inline-block w-6">7.</span>I
                understand and agree to abide by the above accident procedures.
                I understand that any payments made to me or to anyone else for
                expenses in connection with my accident and resulting injury are
                not an admission of liability on the part of{" "}
                <span className="font-bold">CBYRAC, INC</span>. In the event of
                an injury, I authorize full access to copies of medical records,
                radiology reports, drug/alcohol screenings, and documents of any
                kind relating to my past or present injury/illness to
                <span className="font-bold"> CBYRAC, INC</span>.
              </p>

              <p className="ml-0.5">
                I hereby agree to release this information and Hold all such
                medical providers harmless from the release of this information
                as set forth in this authorization.
              </p>
            </div>

            <div className="mt-8">
              <div className="flex items-center gap-8">
                <div className="flex-1">
                  <span className="text-sm font-medium border-b border-black inline-block w-40">
                    {formData.accidentProcedures?.signature || "\u00A0"}
                  </span>
                </div>
                <div>
                  <span className="text-sm font-medium border-b border-black inline-block w-40">
                    {formData.accidentProcedures?.date || "\u00A0"}
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-8 mt-1">
                <p className="font-semibold flex-1">Signature</p>
                <p className="font-semibold w-40">Date</p>
              </div>
            </div>
          </div>

          {/* Page 7 - Timesheet Policy */}
          <div className="p-8 print:p-12 page-break">
            <div className="text-right text-sm mb-4">7</div>

            <div className="text-center pb-2 mb-4">
              <h2 className="text-xl font-bold">TIME SHEET SUBMITTAL POLICY</h2>
            </div>

            <h3 className="text-sm font-bold mb-2">Objective</h3>
            <p className="text-sm mb-4 leading-relaxed">
              The purpose of this policy is to outline the timesheet policy of
              CBYRAC, INC. Timesheets are processed every week. By January 1 of
              each year, payroll provides each employee with an annual schedule
              indicating pay period ending dates and pay dates for the year.
            </p>

            <h3 className="text-sm font-bold mb-2">Applicability</h3>
            <p className=" mb-4 leading-relaxed">
              Every employee (exempt and nonexempt) must record the appropriate
              department or division name on the timesheet. The employee's name
              must be written as it appears on his or her Social Security card.
              Detailed instructions on how and when to complete timesheets, will
              be explained by the Human Resource Personnel at time of
              enrollment. Employees should check with CBYRAC, INC. with every
              question concerning time sheet at (786) 403-5043
            </p>

            <h3 className="text-sm font-bold mb-2">Overtime</h3>
            <p className=" mb-4 leading-relaxed">
              Employees who work overtime must indicate the actual hours or
              minutes to the nearest quarter worked. (i.e. 8:45, 8:30, 8:15 or
              8:75, 8:50, 8:25 or 8:¾, 8:½ , 8:¼ )
            </p>

            <h3 className="text-sm font-bold mb-2">Supervisor's Signature</h3>
            <p className=" mb-2 leading-relaxed">
              All employee and his or her supervisor must sign the timesheet and
              submit it according to the established schedule:
            </p>
            <p className="leading-relaxed">
              <span className="font-bold">Time Sheets Submittal:</span> Every
              Friday
            </p>
            <div className="border-b-2 border-black w-[265px] mb-4"></div>
            <p className="">
              <span className="font-bold ">Mondays before 12 noon:</span> only
              if an employee is scheduled to work the weekend.
            </p>
            <div className="border-b-2 border-black w-[585px] mb-4"></div>
            <h3 className="font-bold mb-2">Enforcement</h3>
            <p className="mb-6 leading-relaxed">
              Failure of an employee to submit a timesheet when required or
              submitting a fraudulent timesheet may result in disciplinary
              action and none payment.
            </p>

            <p className="mb-3">I have read and understand this policy:</p>
            <div className="mb-6">
              <div className="mb-1">
                <span className="text-sm font-medium whitespace-nowrap">
                  Name:
                </span>
                <span className="text-sm font-medium border-b border-black inline-block w-40 ml-2">
                  {formData.name || "\u00A0"}
                </span>
              </div>
              <div className="mb-1">
                <span className="text-sm font-medium whitespace-nowrap">
                  Signature:
                </span>
                <span className="text-sm font-medium border-b border-black inline-block w-40 ml-2">
                  {formData.signature || "\u00A0"}
                </span>
              </div>
              <div>
                <span className="text-sm font-medium whitespace-nowrap">
                  Date:
                </span>
                <span className="text-sm font-medium border-b border-black inline-block w-40 ml-2">
                  {formData.date || "\u00A0"}
                </span>
              </div>
            </div>
            <p className="mb-3">
              This policy has been explained to me and I understand this policy:
            </p>
            <div className="mb-6">
              <div className="mb-1">
                <span className="text-sm font-medium whitespace-nowrap">
                  Name:
                </span>
                <span className="text-sm font-medium border-b border-black inline-block w-40 ml-2">
                  {formData.name || "\u00A0"}
                </span>
              </div>
              <div className="mb-1">
                <span className="text-sm font-medium whitespace-nowrap">
                  Signature:
                </span>
                <span className="text-sm font-medium border-b border-black inline-block w-40 ml-2">
                  {formData.signature || "\u00A0"}
                </span>
              </div>
              <div>
                <span className="text-sm font-medium whitespace-nowrap">
                  Date:
                </span>
                <span className="text-sm font-medium border-b border-black inline-block w-40 ml-2">
                  {formData.date || "\u00A0"}
                </span>
              </div>
            </div>
          </div>

          {/* Page 8 - Direct Deposit */}
          <div className="p-8 print:p-12 page-break">
            <div className="text-right text-sm mb-4">8</div>

            <h2 className="text-xl font-medium text-center">
              EMPLOYEE DIRECT DEPOSIT AUTHORIZATION AGREEMENT
            </h2>
            <div className="border-b-2 border-black w-[580px] flex items-center mx-auto mb-2"></div>

            <h3 className="text-xl text-center mb-7">(ACH CREDIT & DEBITS)</h3>

            <div className="flex items-center gap-10 mb-6">
              <span className="text-sm font-medium whitespace-nowrap">
                New Payroll Deposit:
              </span>
              <input
                type="checkbox"
                className="text-sm font-medium border-b border-black inline-block w-10 h-5"
                checked={formData.newPayrollDeposit || false}
                readOnly
              />
              <span className="text-sm font-medium whitespace-nowrap ml-4">
                Change Deposit Information:
              </span>
              <input
                type="checkbox"
                className="text-sm font-medium border-b border-black inline-block w-10 h-5"
                checked={formData.changeDepositInfo || false}
                readOnly
              />
              <span className="text-sm font-medium whitespace-nowrap ">
                Revoke Authorization:
              </span>
              <input
                type="checkbox"
                className="text-sm font-medium border-b border-black inline-block w-10 h-5"
                checked={formData.revokeAuthorization || false}
                readOnly
              />
            </div>
            <div className="mb-10">
              <div className="flex items-center gap-2 justify-end">
                <span className="text-sm font-medium whitespace-nowrap">
                  Date:
                </span>
                <span className="text-sm font-medium border-b border-black inline-block w-40 ml-2">
                  {formData.date || "\u00A0"}
                </span>
              </div>
            </div>
            <div className="mb-4">
              <div className="flex items-center gap-2">
                <span className="text-lg whitespace-nowrap">Name:</span>
                <span className="font-medium border-b border-black inline-block w-40 ml-2">
                  {formData.name || "\u00A0"}
                </span>
                <span className="text-lg whitespace-nowrap ml-4">SSN:</span>
                <span className="font-medium border-b border-black inline-block w-40 ml-2">
                  {formData.ssn || "\u00A0"}
                </span>
              </div>
            </div>

            <p className="text-sm mb-6 font-medium leading-relaxed">
              I authorize my employer or a payroll processor on my employer's
              behalf to deposit any amounts owned to me by initiating credit
              entries to my account at the financial institution (BANK) indicted
              below. Further, I authorize Bank to accept and credit entries
              indicated by Cbyrac, Inc. to my ☐ Checking ☐ Saving account
              (select one). I acknowledge the deposit of any amount is an
              advance of funds on behalf of my employer and the responsibility
              of my employer. I also authorize my employer, if any, to debit my
              account in the event of a credit which should not have been made
              for an amount not to exceed the original amount of the erroneous
              credit.
            </p>

            <p className="text-lg font-bold text-center">
              Complete Sections 1 or 2 as applicable
            </p>
            <div className="border-b-2 border-black w-82 flex items-center mx-auto mb-6"></div>
            <h3 className="text-xl text-center">
              <span className="font-medium">SECTION 1 CHECKING ACCOUNT;</span>{" "}
              Attach a Voided Check
            </h3>
            <div className="border-b-2 border-black w-[530px] flex items-center mx-auto mb-10"></div>
            {/* Section 1 */}
            <div className="p-3 mb-4">
              <div className="mb-4">
                <div className="flex items-center gap-2">
                  <span className="text-lg whitespace-nowrap">Bank Name:</span>
                  <span className="text-sm font-medium border-b border-black inline-block w-48 ml-2">
                    {formData.bankName || "\u00A0"}
                  </span>
                  <span className="text-lg whitespace-nowrap ml-4">State:</span>
                  <span className="text-sm font-medium border-b border-black inline-block w-20 ml-2">
                    {formData.state || "\u00A0"}
                  </span>
                </div>
              </div>

              <div className="mb-4">
                <div className="flex items-center gap-2 justify-center">
                  <span className=" whitespace-nowrap">I wish to deposit:</span>
                  <span className="text-sm font-medium border-b border-black inline-block w-24 ml-2">
                    {formData.depositAmount
                      ? `$${formData.depositAmount}.00`
                      : "\u00A0"}
                  </span>
                  <span className=" whitespace-nowrap ml-4">or:</span>
                  <span className="text-sm font-medium border-b border-black inline-block w-24 ml-2">
                    {formData.depositPercentage
                      ? `${formData.depositPercentage}% Net Pay`
                      : "\u00A0"}
                  </span>
                </div>
              </div>

              <div className="mb-6">
                <div className="flex items-center gap-2">
                  <span className="text-lg whitespace-nowrap">
                    Transit/ABA No.:
                  </span>
                  <span className="text-lg border-b border-black inline-block w-32 ml-2">
                    {formData.transitAbaNo || "\u00A0"}
                  </span>
                  <span className="text-lg whitespace-nowrap ml-4">
                    Account No.:
                  </span>
                  <span className="text-sm font-medium border-b border-black inline-block w-40 ml-2">
                    {formData.accountNo || "\u00A0"}
                  </span>
                </div>
              </div>

              <div className="border border-gray-400 p-8 text-center bg-gray-50">
                <p className="font-bold mb-2">ATTACH VOIDED CHECK HERE</p>
                <p className="text-xs">
                  The numbers on the bottom of your voided check are used
                </p>
                <p className="text-xs">
                  To make the electronic funds transfer directly to you account.
                </p>
              </div>
            </div>

            <p className="text-center text-xl font-medium">
              *****************************************************************************************
            </p>

            {/* Section 2 */}
            <div className="p-3 mb-6">
              <h3 className="text-xl text-center">
                <span className="font-medium">SECTION 2 SAVINGS ACCOUNT;</span>{" "}
                Call Your Bank To Obtain the Following Information:
              </h3>

              <div className="border-b-2 border-black flex items-center mx-auto mb-7"></div>

              <div className="mb-4">
                <span className="text-lg">
                  BANK NAME: ______________________________________________
                </span>
                <span className="ml-4 text-lg">STATE: ________________</span>
              </div>
              <div className="mb-4 text-center">
                <span className="">
                  I wish to deposit $____________.00 or __________% Net Pay
                </span>
              </div>
              <div className="mb-4">
                <span className="text-lg">
                  SAVINGS BANK/ROUTING OR TRANSIT NUMBER________________________
                  (This Must Be 9 Digits)
                </span>
              </div>

              <span className="text-lg">
                EMPLOYEE SAVINGS ACCOUNT NUMBER
                __________________________________________________
              </span>
            </div>
            <span className="ml-4 text-lg">
              EMPLOYEE SIGNATURE __________________________________
            </span>
            <span className="ml-4 text-lg">DATE ________________________</span>
          </div>

          {/* Page 9 - Document Checklist */}
          <div className="p-8 print:p-12 page-break">
            <div className="text-right text-sm mb-4">9</div>
          </div>
        </div>

        <style>{`
        @media print {
          .page-break {
            page-break-after: always;
          }
          body {
            print-color-adjust: exact;
            -webkit-print-color-adjust: exact;
          }
        }
      `}</style>
      </div>
    </div>
  );
};

export default PdfViewer;
