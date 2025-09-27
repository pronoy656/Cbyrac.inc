import { useForm } from "react-hook-form";
import ProgressBar from "../../progressBar/ProgressBar";
import { IoPeopleOutline } from "react-icons/io5";
import { CiCircleCheck } from "react-icons/ci";

const W4Form = ({ prevStep, nextStep, step }) => {
  const totalSteps = 5; // total number of steps for progress bar

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Bank Account Data Submitted:", data);
    alert("Form submitted successfully! Check console.");
  };

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
            <h1 className="text-2xl font-bold mb-2">
              Employee Withholding Certificate ( Form W-4 )
            </h1>
            <p className="text-sm text-gray-300 mb-7">
              Your Withholding is subject to review by the IRS
            </p>
            {/* progressbar */}
            <ProgressBar currentStep={step} totalSteps={totalSteps} />
          </div>
          {/* Step 1 Info */}
          <p className="text-[32px] font-bold mt-8 ">Step 1 :</p>
          <div className="border-2 w-32 mb-5"></div>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="rounded-2xl  max-w-7xl mx-auto"
          >
            {/* Step 1 Info */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
              <div>
                <label className="text-white mb-1 block">
                  Bank Name <span className="text-red-500">*</span>
                </label>
                <div className={inputWrapperClass}>
                  <input
                    type="text"
                    placeholder="Enter Bank Name"
                    {...register("telephone")}
                    className={inputClass}
                  />
                </div>
              </div>

              <div>
                <label className="text-white mb-1 block">
                  SSN (Last 4) <span className="text-red-500">*</span>
                </label>
                <div className={inputWrapperClass}>
                  <input
                    type="email"
                    placeholder="XXX-XX-____"
                    {...register("email")}
                    className={inputClass}
                  />
                </div>
              </div>
              <div>
                <label className="text-white mb-1 block">
                  SSN (Last 4) <span className="text-red-500">*</span>
                </label>
                <div className={inputWrapperClass}>
                  <input
                    type="email"
                    placeholder="XXX-XX-____"
                    {...register("email")}
                    className={inputClass}
                  />
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <div>
                <label className="text-white mb-1 block">
                  Social Security Number <span className="text-red-500">*</span>
                </label>
                <div className={inputWrapperClass}>
                  <input
                    type="text"
                    placeholder="Enter Social Security Number *"
                    {...register("telephone")}
                    className={inputClass}
                  />
                </div>
              </div>
              <div>
                <label className="text-white mb-1 block">
                  Address <span className="text-red-500">*</span>
                </label>
                <div className={inputWrapperClass}>
                  <input
                    type="text"
                    placeholder="City Or Town ,State, ZIP"
                    {...register("telephone")}
                    className={inputClass}
                  />
                </div>
              </div>
              <div>
                <label className="text-white mb-1 block">
                  Marital Status <span className="text-red-500">*</span>
                </label>
                <div className={inputWrapperClass}>
                  <select
                    {...register("maritalStatus", { required: true })}
                    className={inputClass}
                    defaultValue=""
                  >
                    <option value="single">Single</option>
                    <option value="married">Married</option>
                    <option value="divorced">Divorced</option>
                    <option value="widowed">Widowed</option>
                  </select>
                </div>
              </div>
            </div>
            {/* Step 2 Info */}
            <div>
              <p className="text-[32px] font-bold mt-8 ">Step 2 :</p>
              <div className="border-2 w-32 mb-5"></div>
              <p className="text-lg mb-4">
                Complete this step if you (1) hold more than one job at a time,
                or (2) are married filing jointly and your spouse also works.
                The correct amount of withholding depends on income earned from
                all of these jobs.
              </p>
              <p className="text-lg mb-4">
                Do only one of the following - (a) Use the estimator at
                www.irs.gov/W4App for the most accurate withholding for this
                step (and Steps 3–4). If you or your spouse have self-employment
                income, use this option; or
              </p>
              <p className="text-lg mb-4">
                (b) Use the Multiple Jobs Worksheet on page 3 and enter the
                result in Step 4(c) below; or
              </p>
              <p className="text-lg mb-4">
                (c) If there are only two jobs total, you may check this box. Do
                the same on Form W-4 for the other job. This option is generally
                more accurate than (b) if pay at the lower paying job is more
                than half of the pay at the higher paying job. Otherwise, (b) is
                more accurate{" "}
              </p>
              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  value="US Citizen"
                  {...register("citizenship", {
                    required: "You must select at least one option",
                  })}
                  className="w-5 h-5"
                />
                Agree With Above Conditions
              </label>
            </div>
            {/* Step 3 Info */}
            <p className="text-[32px] font-bold mt-8 ">Step 3 :</p>
            <div className="border-2 w-32 mb-5"></div>
            <li>
              If your total income will be $200,000 or less ($400,000 or less if
              married filing jointly): Multiply the number of qualifying
              children under age 17 by $2,000
            </li>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4 mt-2">
              <div>
                <label className="text-white mb-1 block">
                  How Many Children <span className="text-red-500">*</span>
                </label>
                <div className={inputWrapperClass}>
                  <input
                    type="text"
                    placeholder="Enter Bank Name"
                    {...register("telephone")}
                    className={inputClass}
                  />
                </div>
              </div>

              <div>
                <label className="text-white mb-1 block">State </label>
                <div className={inputWrapperClass}>
                  <input
                    type="email"
                    placeholder="Enter State"
                    {...register("email")}
                    className={inputClass}
                  />
                </div>
              </div>
            </div>{" "}
            <li>
              If your total income will be $200,000 or less ($400,000 or less if
              married filing jointly): Multiply the number of other dependents
              by $500
            </li>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4 mt-2">
              <div>
                <label className="text-white mb-1 block">Deposit type *</label>
                <div className={inputWrapperClass}>
                  <select
                    {...register("depositType", {
                      required: "Please select a deposit type",
                    })}
                    className={`${inputClass} bg-[#05051A]`}
                  >
                    <option value="">Select</option>
                    <option value="full">Full Pay Check</option>
                    <option value="partial">Partial Pay Check</option>
                  </select>
                </div>
                {errors.depositType && (
                  <p className="text-red-500 text-sm">
                    {errors.depositType.message}
                  </p>
                )}
              </div>

              <div>
                <label className="text-white mb-1 block">
                  Deposit Percentage *
                </label>
                <div className={`${inputWrapperClass} relative`}>
                  <input
                    type="number"
                    placeholder="Enter Percentage"
                    {...register("percentage", {
                      required: "Percentage is required",
                      min: { value: 1, message: "Minimum 1%" },
                      max: { value: 100, message: "Maximum 100%" },
                    })}
                    className={`${inputClass} pr-10`} // right side padding for % sign
                  />
                  {/* % Sign */}
                  <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400">
                    %
                  </span>
                </div>
                {errors.percentage && (
                  <p className="text-red-500 text-sm">
                    {errors.percentage.message}
                  </p>
                )}
              </div>
            </div>{" "}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
              <div>
                <label className="text-white mb-1 block">
                  Transit/ABA No *
                </label>
                <div className={inputWrapperClass}>
                  <input
                    type="text"
                    placeholder="Enter Transit/ABA No"
                    {...register("telephone")}
                    className={inputClass}
                  />
                </div>
              </div>
            </div>{" "}
            {/* Step 4 Info */}
            <p className="text-[32px] font-bold mt-8 ">Step 4 :</p>
            <div className="border-2 w-32 mb-5"></div>
            <p>
              Other income (not from jobs). If you want tax withheld for other
              income you expect this year that won’t have withholding, enter the
              amount of other income here. This may include interest, dividends,
              and retirement income.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4 mt-4">
              <div>
                <label className="text-white mb-1 block">
                  Second Bank Name *
                </label>
                <div className={inputWrapperClass}>
                  <input
                    type="text"
                    placeholder="Enter Bank Name"
                    {...register("telephone")}
                    className={inputClass}
                  />
                </div>
              </div>
            </div>
            <p>
              Other income (not from jobs). If you want tax withheld for other
              income you expect this year that won’t have withholding, enter the
              amount of other income here. This may include interest, dividends,
              and retirement income.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4 mt-4">
              <div>
                <label className="text-white mb-1 block">
                  Second Bank Name *
                </label>
                <div className={inputWrapperClass}>
                  <input
                    type="text"
                    placeholder="Enter Bank Name"
                    {...register("telephone")}
                    className={inputClass}
                  />
                </div>
              </div>
            </div>
            <p>
              Other income (not from jobs). If you want tax withheld for other
              income you expect this year that won’t have withholding, enter the
              amount of other income here. This may include interest, dividends,
              and retirement income.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4 mt-4">
              <div>
                <label className="text-white mb-1 block">
                  Second Bank Name *
                </label>
                <div className={inputWrapperClass}>
                  <input
                    type="text"
                    placeholder="Enter Bank Name"
                    {...register("telephone")}
                    className={inputClass}
                  />
                </div>
              </div>
            </div>
            {/* Employee Signature and date */}
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
            <button
              type="submit"
              className="px-6 py-2 bg-gradient-to-r from-[#8D6851] to-[#D3BFB2] text-white rounded-md hover:opacity-90"
            >
              Submit
            </button>
          </form>
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

export default W4Form;
