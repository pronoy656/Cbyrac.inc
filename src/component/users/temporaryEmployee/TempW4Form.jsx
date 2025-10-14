import { useForm } from "react-hook-form";
import ProgressBar from "../../progressBar/ProgressBar";

const TempW4Form = ({ prevStep, nextStep, step }) => {
  const totalSteps = 12;

  const {
    register,
    handleSubmit,
    // watch,
    formState: { errors },
  } = useForm({});

  // Handle Next button
  const handleNext = (data) => {
    console.log("W4 Form Data:", data);
    nextStep();
  };

  const inputWrapperClass =
    "rounded-md bg-gradient-to-r from-[#8D6851] to-[#D3BFB2] mt-1 p-[1px]";
  const inputClass =
    "w-full bg-slate-900 text-white rounded-md py-2 px-3 focus:outline-none focus:ring-0";

  return (
    <div>
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
            <div className="w-24 h-24 bg-white rounded justify-center">
              <img src="/cbyrac-logo.png" alt="Company Logo" />
            </div>
          </div>

          {/* Title */}
          <div className="text-center mb-8">
            <h1 className="text-2xl font-bold mb-2">
              Employee Withholding Certificate (Form W-4)
            </h1>
            <p className="text-sm text-gray-300 mb-7">
              Your Withholding is subject to review by the IRS
            </p>
            <ProgressBar currentStep={step} totalSteps={totalSteps} />
          </div>

          {/* Step 1 Info */}
          <p className="text-[32px] font-bold mt-8">Step 1:</p>
          <div className="border-2 w-32 mb-5"></div>
          <form
            onSubmit={handleSubmit(handleNext)}
            className="rounded-2xl max-w-7xl mx-auto"
          >
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
              <div>
                <label className="text-white mb-2  block">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <div className={inputWrapperClass}>
                  <input
                    type="text"
                    placeholder="Enter Full Name"
                    {...register("fullName", {
                      required: "Full name is required",
                    })}
                    className={inputClass}
                  />
                </div>
                {errors.fullName && (
                  <p className="text-red-500 text-sm">
                    {errors.fullName.message}
                  </p>
                )}
              </div>

              <div>
                <label className="text-white mb-2 block">Middle Name</label>
                <div className={inputWrapperClass}>
                  <input
                    type="text"
                    placeholder="Enter Middle Name"
                    {...register("middleName", {})}
                    className={inputClass}
                  />
                </div>
              </div>

              <div>
                <label className="text-white mb-2 block">
                  Last Name <span className="text-red-500">*</span>
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
            <div className="space-y-4 mt-2">
              <div>
                <label className="text-white mb-2 block">
                  Social Security Number <span className="text-red-500">*</span>
                </label>
                <div className={inputWrapperClass}>
                  <input
                    type="text"
                    placeholder="XXX-XX-XXXX"
                    {...register("ssn", {
                      required: "Full SSN is required",
                      pattern: {
                        value: /^\d{3}-\d{2}-\d{4}$/,
                        message: "SSN must be in XXX-XX-XXXX format",
                      },
                    })}
                    className={inputClass}
                  />
                </div>
                {errors.ssn && (
                  <p className="text-red-500 text-sm">{errors.ssn.message}</p>
                )}
              </div>
              <div>
                <label className="text-white mb-2  block">
                  Address <span className="text-red-500">*</span>
                </label>
                <div className={inputWrapperClass}>
                  <input
                    type="text"
                    placeholder="City, State, ZIP"
                    {...register("address", {
                      required: "Address is required",
                    })}
                    className={inputClass}
                  />
                </div>
                {errors.address && (
                  <p className="text-red-500 text-sm">
                    {errors.address.message}
                  </p>
                )}
              </div>

              <div>
                <label className="text-white mb-2  block">
                  Marital Status <span className="text-red-500">*</span>
                </label>
                <div className={inputWrapperClass}>
                  <select
                    {...register("maritalStatus", {
                      required: "Marital status is required",
                    })}
                    className={`${inputClass} bg-[#05051A]`}
                  >
                    <option value="">Select</option>
                    <option value="single">Single</option>
                    <option value="married">Married</option>
                    <option value="marriedSeparate">
                      Married Filing Separately
                    </option>
                  </select>
                </div>
                {errors.maritalStatus && (
                  <p className="text-red-500 text-sm">
                    {errors.maritalStatus.message}
                  </p>
                )}
              </div>
            </div>
            {/* Step 2 Info */}
            <p className="text-[32px] font-bold mt-8">Step 2:</p>
            <div className="border-2 w-32 mb-5"></div>
            <p className="text-lg mb-4">
              Complete this step if you (1) hold more than one job at a time, or
              (2) are married filing jointly and your spouse also works. The
              correct amount of withholding depends on income earned from all of
              these jobs.
            </p>
            <p className="text-lg mb-4">
              Do only one of the following - (a) Use the estimator at
              www.irs.gov/W4App for the most accurate withholding for this step
              (and Steps 3–4). If you or your spouse have self-employment
              income, use this option; or
            </p>
            <p className="text-lg mb-4">
              (b) Use the Multiple Jobs Worksheet on page 3 and enter the result
              in Step 4(c) below; or
            </p>
            <p className="text-lg mb-4">
              (c) If there are only two jobs total, you may check this box. Do
              the same on Form W-4 for the other job. This option is generally
              more accurate than (b) if pay at the lower-paying job is more than
              half of the pay at the higher-paying job. Otherwise, (b) is more
              accurate.
            </p>
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                {...register("twoJobs", {
                  required: "You must agree if applicable",
                })}
                className="w-5 h-5"
              />
              Agree With Above Conditions
            </label>
            {errors.twoJobs && (
              <p className="text-red-500 text-sm">{errors.twoJobs.message}</p>
            )}

            {/* Step 3 Info */}
            <p className="text-[32px] font-bold mt-8">Step 3:</p>
            <div className="border-2 w-32 mb-5"></div>
            <p>
              If your total income will be $200,000 or less ($400,000 or less if
              married filing jointly): Multiply the number of qualifying
              children under age 17 by $2,000
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4 mt-2">
              <div>
                <label className="text-white mb-2  block">
                  Number of Qualifying Children{" "}
                  <span className="text-red-500">*</span>
                </label>
                <div className={inputWrapperClass}>
                  <input
                    type="number"
                    placeholder="Enter number of children"
                    {...register("qualifyingChildren", {
                      required: "Number of qualifying children is required",
                      min: { value: 0, message: "Cannot be negative" },
                    })}
                    className={inputClass}
                  />
                </div>
                {errors.qualifyingChildren && (
                  <p className="text-red-500 text-sm">
                    {errors.qualifyingChildren.message}
                  </p>
                )}
              </div>

              <div>
                <label className="text-white mb-2  block">
                  Total Child Tax Credit <span className="text-red-500">*</span>
                </label>
                <div className={inputWrapperClass}>
                  <input
                    type="number"
                    placeholder="Enter total ($)"
                    {...register("childTaxCredit", {
                      required: "Child tax credit amount is required",
                      min: { value: 0, message: "Cannot be negative" },
                    })}
                    className={inputClass}
                  />
                </div>
                {errors.childTaxCredit && (
                  <p className="text-red-500 text-sm">
                    {errors.childTaxCredit.message}
                  </p>
                )}
              </div>
            </div>
            <p>
              If your total income will be $200,000 or less ($400,000 or less if
              married filing jointly): Multiply the number of other dependents
              by $500
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4 mt-2">
              <div>
                <label className="text-white mb-2  block">
                  Number of Other Dependents{" "}
                  <span className="text-red-500">*</span>
                </label>
                <div className={inputWrapperClass}>
                  <input
                    type="number"
                    placeholder="Enter number of dependents"
                    {...register("otherDependents", {
                      required: "Number of other dependents is required",
                      min: { value: 0, message: "Cannot be negative" },
                    })}
                    className={inputClass}
                  />
                </div>
                {errors.otherDependents && (
                  <p className="text-red-500 text-sm">
                    {errors.otherDependents.message}
                  </p>
                )}
              </div>

              <div>
                <label className="text-white mb-2  block">
                  Total Dependent Credit <span className="text-red-500">*</span>
                </label>
                <div className={inputWrapperClass}>
                  <input
                    type="number"
                    placeholder="Enter total ($)"
                    {...register("dependentCredit", {
                      required: "Dependent credit amount is required",
                      min: { value: 0, message: "Cannot be negative" },
                    })}
                    className={inputClass}
                  />
                </div>
                {errors.dependentCredit && (
                  <p className="text-red-500 text-sm">
                    {errors.dependentCredit.message}
                  </p>
                )}
              </div>
            </div>

            {/* Step 4 Info */}
            <p className="text-[32px] font-bold mt-8">Step 4:</p>
            <div className="border-2 w-32 mb-5"></div>
            <p>
              Other income (not from jobs). If you want tax withheld for other
              income you expect this year that won’t have withholding, enter the
              amount of other income here. This may include interest, dividends,
              and retirement income.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4 mt-4">
              <div>
                <label className="text-white mb-2  block">
                  Other Income <span className="text-red-500">*</span>
                </label>
                <div className={inputWrapperClass}>
                  <input
                    type="number"
                    placeholder="Enter other income ($)"
                    {...register("otherIncome", {
                      required: "Other income amount is required",
                      min: { value: 0, message: "Cannot be negative" },
                    })}
                    className={inputClass}
                  />
                </div>
                {errors.otherIncome && (
                  <p className="text-red-500 text-sm">
                    {errors.otherIncome.message}
                  </p>
                )}
              </div>
            </div>

            {/* Employee Signature and Date */}
            <div className="grid grid-cols-1 sm:grid-cols-2 mb-4">
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

              <div>
                <label className="mb-2  block">
                  Date <span className="text-red-500">*</span>
                </label>
                <div className={inputWrapperClass}>
                  <input
                    type="date"
                    {...register("signDate", { required: "Date is required" })}
                    className={`py-3.5 ${inputClass}`}
                  />
                </div>
                {errors.signDate && (
                  <p className="text-red-500 text-sm">
                    {errors.signDate.message}
                  </p>
                )}
              </div>
            </div>

            {/* Navigation Buttons */}
            <div className="flex justify-center mt-6 gap-4">
              <button
                type="button"
                onClick={prevStep}
                className="px-6 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-700"
              >
                Previous
              </button>

              <button
                type="button"
                onClick={handleSubmit(handleNext)}
                className="px-6 py-2 bg-gradient-to-r from-[#8D6851] to-[#D3BFB2] text-white rounded-md hover:opacity-90"
              >
                Next
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default TempW4Form;
