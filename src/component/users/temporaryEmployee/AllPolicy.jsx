import React from "react";
import ProgressBar from "../../progressBar/ProgressBar";

const AllPolicy = ({
  prevStep,
  nextStep,
  step,
  register,
  handleSubmit,
  errors,
  onSubmit,
}) => {
  const totalSteps = 9; // total number of steps for progress bar

  //   const {
  //     register,
  //     handleSubmit,
  //     formState: { errors },
  //   } = useForm();

  //   const onSubmit = (data) => {
  //     console.log("Bank Account Data Submitted:", data);
  //     alert("Form submitted successfully! Check console.");
  //   };

  const inputWrapperClass =
    "rounded-md bg-gradient-to-r from-[#8D6851] to-[#D3BFB2] mt-1 p-[1px]";
  const inputClass =
    "w-full bg-slate-900 text-white rounded-md py-2 px-3 focus:outline-none focus:ring-0";
  return (
    <div>
      <div className="text-white ">
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
            <h1 className="text-2xl font-bold mb-2">Employment Application</h1>
            <p className="text-sm text-gray-300 mb-7">
              Please fill all forms. Resumes are not a substitute for a
              completed application
            </p>
            {/* progressbar */}
            <ProgressBar currentStep={step} totalSteps={totalSteps} />
          </div>
          <p className="text-2xl font-medium mt-8 ">Objective</p>
          <div className="border w-28 mb-5"></div>
          <p>
            The purpose of this policy is to outline the timesheet policy of
            CBYRAC, INC. Timesheets are processed every week. By January 1 of
            each year, payroll provides each employee with an annual schedule
            indicating pay period ending dates and pay dates for the year.
          </p>
          <p className="text-2xl font-medium mt-8 ">Applicability</p>
          <div className="border w-35 mb-5"></div>
          <p>
            Every employee (exempt and nonexempt) must record the appropriate
            department or division name on the timesheet. The employee’s name
            must be written as it appears on his or her Social Security card.
            Detailed instructions on how and when to complete timesheets, will
            be explained by the Human Resource Personnel at time of enrollment.
            Employees should check with CBYRAC, INC. with every question
            concerning time sheet at (786) 403-5043
          </p>
          <p className="text-2xl font-medium mt-8 ">Overtime</p>
          <div className="border w-28 mb-5"></div>
          <p>
            Employees who work overtime must indicate the actual hours or
            minutes to the nearest quarter worked. (i.e. 8:45, 8:30, 8:15 or
            8:75, 8:50, 8:25 or 8:¾, 8:½ , 8:¼ )
          </p>
          <p className="text-2xl font-medium mt-8 ">Supervisor’s Signature</p>
          <div className="border w-65 mb-5"></div>
          <p>
            All employee and his or her supervisor must sign the timesheet and
            submit it according to the established schedule:
          </p>
          <p className="mt-5 text-xl font-bold text-red-500">
            Time Sheets Submittal: Every Friday Mondays before 12 noon: only if
            an employee is scheduled to work the weekend.
          </p>
          <p className="text-2xl font-medium mt-8 ">Enforcement</p>
          <div className="border w-38 mb-5"></div>
          <p>
            Failure of an employee to submit a timesheet when required or
            submitting a fraudulent timesheet may result in disciplinary action
            and none payment.
          </p>
          <div className="mb-8 mt-6">
            <label className="flex items-center text-lg font-semibold gap-2">
              <input
                type="checkbox"
                value="US Citizen"
                {...register("citizenship", {
                  required: "You must select at least one option",
                })}
                className="w-5 h-5"
              />
              I have read and understand this policy:
            </label>
          </div>
          <div>
            <label className="text-white mb-2 block">
              Name <span className="text-red-500">*</span>
            </label>
            <div className={inputWrapperClass}>
              <input
                type="email"
                placeholder="Enter Duty Name"
                {...register("email")}
                className={inputClass}
              />
            </div>
          </div>

          <div className="mb-8 mt-6">
            <label className="flex items-center text-lg font-semibold gap-2">
              <input
                type="checkbox"
                value="US Citizen"
                {...register("citizenship", {
                  required: "You must select at least one option",
                })}
                className="w-5 h-5"
              />
              This policy has been explained to me and I understand this policy:
            </label>
          </div>
          <div>
            <label className="text-white mb-2 block">
              Name <span className="text-red-500">*</span>
            </label>
            <div className={inputWrapperClass}>
              <input
                type="email"
                placeholder="Enter Duty Name"
                {...register("email")}
                className={inputClass}
              />
            </div>
          </div>
          <div className="mb-8 mt-6">
            <label className="flex items-center text-lg font-semibold gap-2">
              <input
                type="checkbox"
                value="US Citizen"
                {...register("citizenship", {
                  required: "You must select at least one option",
                })}
                className="w-5 h-5"
              />
              By signing below, I confirm I’ve completed this form and uploaded
              my signature after reading and understanding all terms.
            </label>
          </div>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="rounded-2xl  max-w-7xl mx-auto"
          >
            {/* Employee Signature and date */}
            <div className="grid grid-cols-1 sm:grid-cols-3 mb-4 mt-6">
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
          </form>
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
              onClick={nextStep}
              className="px-6 py-2 bg-gradient-to-r from-[#8D6851] to-[#D3BFB2] text-white rounded-md hover:opacity-90"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllPolicy;
