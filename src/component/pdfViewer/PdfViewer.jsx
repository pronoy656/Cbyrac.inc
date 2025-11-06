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

          {/* Page 4 */}
          <div className="p-8 print:p-12 page-break">
            {/* Company Use Only Section */}
            <div className=" pt-4">
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
          {/* Page 9 - Document Checklist */}
          {/* <div className="p-8 print:p-12 page-break">
            <div className="text-right text-sm mb-4">9</div>
          </div> */}
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
