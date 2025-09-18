// import { useForm } from "react-hook-form";
import ProgressBar from "../../progressBar/ProgressBar";
import { IoPeopleOutline } from "react-icons/io5";
import { CiCircleCheck } from "react-icons/ci";

const OnlyCbyracInc = ({
  prevStep,
  nextStep,
  step,
  register,
  handleSubmit,
  errors,
  onSubmit,
}) => {
  const totalSteps = 8; // total number of steps for progress bar

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
          <p className="text-2xl font-medium mt-8 text-center">
            CBYRAC, INC. Use Only
          </p>
          {/* <div className="border w-72 mb-5"></div> */}
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="rounded-2xl  max-w-7xl mx-auto"
          >
            {/* Step 2 Info */}
            <div>
              {/* <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  value="US Citizen"
                  {...register("citizenship", {
                    required: "You must select at least one option",
                  })}
                  className="w-5 h-5"
                />
                Agree With Above Conditions
              </label> */}
            </div>
            {/* Additional General Info */}
            <div>
              <label className="text-white mb-1 block">Check One </label>
              <div className={inputWrapperClass}>
                <select
                  {...register("mayWeContact", {
                    required: "This field is required",
                  })}
                  className={inputClass}
                >
                  <option value="">Select</option>
                  <option value="yes">New Hire</option>
                  <option value="no">Re-Hire</option>
                </select>
              </div>
              {errors.mayWeContact && (
                <p className="text-red-500 text-sm">
                  {errors.mayWeContact.message}
                </p>
              )}
            </div>
            <div>
              <label className="text-white mb-1 block">Status </label>
              <div className={inputWrapperClass}>
                <select
                  {...register("mayWeContact", {
                    required: "This field is required",
                  })}
                  className={inputClass}
                >
                  <option value="">Select</option>
                  <option value="yes">Full Time</option>
                  <option value="no">Part time</option>
                </select>
              </div>
              {errors.mayWeContact && (
                <p className="text-red-500 text-sm">
                  {errors.mayWeContact.message}
                </p>
              )}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
              <div>
                <label className="text-white mb-1 block">
                  Job Description{" "}
                </label>
                <div className={inputWrapperClass}>
                  <input
                    type="email"
                    placeholder="Enter Your Answer"
                    {...register("email")}
                    className={inputClass}
                  />
                </div>
              </div>
              <div>
                <label className="text-white mb-1 block">W/C Code</label>
                <div className={inputWrapperClass}>
                  <input
                    type="email"
                    placeholder="Enter W/C Code"
                    {...register("email")}
                    className={inputClass}
                  />
                </div>
              </div>

              <div>
                <label className="text-white mb-1 block">Hire Date</label>
                <div className={inputWrapperClass}>
                  <input
                    type="email"
                    placeholder="MM-DD-YYYY"
                    {...register("email")}
                    className={inputClass}
                  />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="text-white mb-1 block">Termination</label>
                <div className={inputWrapperClass}>
                  <input
                    type="date"
                    placeholder="MM-DD-YYYY"
                    {...register("telephone")}
                    className={inputClass}
                  />
                </div>
              </div>
              <div>
                <label className="text-white mb-1 block">Pay Rate</label>
                <div className={inputWrapperClass}>
                  <select
                    {...register("mayWeContact", {
                      required: "This field is required",
                    })}
                    className={inputClass}
                  >
                    <option value="">Select</option>
                    <option value="yes">Hourly</option>
                    <option value="no">Salary(O.T Exempt)</option>
                    <option value="no">salary (O.T Non-Exempt)</option>
                  </select>
                </div>
                {errors.mayWeContact && (
                  <p className="text-red-500 text-sm">
                    {errors.mayWeContact.message}
                  </p>
                )}
              </div>
            </div>
            <div>
              <label className="text-white mb-1 block">Salary Amount</label>
              <div className={inputWrapperClass}>
                <input
                  type="number"
                  placeholder="Enter salary Amount"
                  {...register("telephone")}
                  className={inputClass}
                />
              </div>
            </div>
            <li>
              If salary O.T. non-exempt, what is the special breakdown of rates
              to be included in salary?
            </li>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="text-white mb-1 block">
                  Regular rate (1st 40 hours)
                </label>
                <div className={inputWrapperClass}>
                  <input
                    type="date"
                    placeholder="MM-DD-YYYY"
                    {...register("telephone")}
                    className={inputClass}
                  />
                </div>
              </div>
              <div>
                <label className="text-white mb-1 block">O.T. Rate</label>
                <div className={inputWrapperClass}>
                  <select
                    {...register("mayWeContact", {
                      required: "This field is required",
                    })}
                    className={inputClass}
                  >
                    <option value="">Select</option>
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                  </select>
                </div>
                {errors.mayWeContact && (
                  <p className="text-red-500 text-sm">
                    {errors.mayWeContact.message}
                  </p>
                )}
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
              <div>
                <label className="text-white mb-1 block">
                  Work Hours per pay period
                </label>
                <div className={inputWrapperClass}>
                  <input
                    type="text"
                    placeholder="Enter Job Title"
                    {...register("telephone")}
                    className={inputClass}
                  />
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
              <div>
                <label className="text-white mb-1 block">Received By *</label>
                <div className={inputWrapperClass}>
                  <input
                    type="text"
                    placeholder="Enter Job Title"
                    {...register("telephone")}
                    className={inputClass}
                  />
                </div>
              </div>
              <div>
                <label className="text-white mb-1 block">Date *</label>
                <div className={inputWrapperClass}>
                  <input
                    type="date"
                    placeholder="MM-DD-YYYY"
                    {...register("telephone")}
                    className={inputClass}
                  />
                </div>
              </div>
            </div>

            <button
              type="submit"
              className="mt-9 px-6 py-2 bg-gradient-to-r from-[#8D6851] to-[#D3BFB2] text-white rounded-md hover:opacity-90"
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

export default OnlyCbyracInc;
