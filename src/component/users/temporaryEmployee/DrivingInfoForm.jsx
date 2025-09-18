// import { useForm } from "react-hook-form";
import ProgressBar from "../../progressBar/ProgressBar";
import { IoPeopleOutline } from "react-icons/io5";
import { CiCircleCheck } from "react-icons/ci";

const DrivingInfoForm = ({
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
            <h1 className="text-2xl font-bold mb-2">
              Driving Information Form
            </h1>
            <p className="text-sm text-gray-300 mb-7">
              Please fill all forms. Resumes are not a substitute for a
              completed application
            </p>
            {/* progressbar */}
            <ProgressBar currentStep={step} totalSteps={totalSteps} />
          </div>
          <p className="text-2xl font-medium mt-8 ">DRIVING INFORMATION :</p>
          <div className="border w-72 mb-5"></div>
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
              <label className="text-white mb-1 block">May We Contact</label>
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
            <div>
              <label className="text-white mb-1 block">Duties *</label>
              <div className={inputWrapperClass}>
                <input
                  type="email"
                  placeholder="Enter Duty Name"
                  {...register("email")}
                  className={inputClass}
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="text-white mb-1 block">Duties *</label>
                <div className={inputWrapperClass}>
                  <input
                    type="email"
                    placeholder="Enter Duty Name"
                    {...register("email")}
                    className={inputClass}
                  />
                </div>
              </div>

              <div>
                <label className="text-white mb-1 block">Duties *</label>
                <div className={inputWrapperClass}>
                  <input
                    type="email"
                    placeholder="Enter Duty Name"
                    {...register("email")}
                    className={inputClass}
                  />
                </div>
              </div>
            </div>
            <div>
              <label className="text-white mb-1 block">Duties *</label>
              <div className={inputWrapperClass}>
                <input
                  type="email"
                  placeholder="Enter Duty Name"
                  {...register("email")}
                  className={inputClass}
                />
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="text-white mb-1 block">May We Contact</label>
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
              <div>
                <label className="text-white mb-1 block">
                  Supervisor’s Name *
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
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="text-white mb-1 block">May We Contact</label>
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
              <div>
                <label className="text-white mb-1 block">
                  Supervisor’s Name *
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
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="text-white mb-1 block">May We Contact</label>
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
              <div>
                <label className="text-white mb-1 block">
                  Supervisor’s Name *
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

            <div>
              <div>
                <label className="text-white mb-1 block">
                  How much notice did you give when resigning? If none, explain.
                </label>
                <div className={inputWrapperClass}>
                  <input
                    type="text"
                    placeholder="Enter Your Answer "
                    {...register("telephone")}
                    className={inputClass}
                  />
                </div>
              </div>
            </div>
            <p className="text-xl font-medium mt-8 ">
              Please list all moving traffic violations in the last five (5)
              years :
            </p>
            <div className="border w-[584px] mb-5"></div>
            <table className="min-w-full border border-[#8D6851] text-white rounded-lg mt-9">
              <thead>
                <tr className="bg-slate-900 text-left">
                  <th className="border border-[#8D6851] px-4 py-2 font-normal text-sm">
                    OFFENSE
                  </th>
                  <th className="border border-[#8D6851] px-4 py-2 font-normal text-sm">
                    DATE
                  </th>
                  <th className="border border-[#8D6851] px-4 py-2 font-normal text-sm">
                    LOCATION
                  </th>
                  <th className="border border-[#8D6851] px-4 py-2 font-normal text-sm">
                    COMMENTS
                  </th>
                </tr>
              </thead>
              <tbody>
                {/* Row 1 */}
                <tr>
                  <td className="border border-[#8D6851] px-4 py-6"></td>
                  <td className="border border-[#8D6851] px-4 py-6"></td>
                  <td className="border border-[#8D6851] px-4 py-6"></td>
                  <td className="border border-[#8D6851] px-4 py-6"></td>
                </tr>
                {/* Row 2 */}
                <tr>
                  <td className="border border-[#8D6851] px-4 py-6"></td>
                  <td className="border border-[#8D6851] px-4 py-6"></td>
                  <td className="border border-[#8D6851] px-4 py-6"></td>
                  <td className="border border-[#8D6851] px-4 py-6"></td>
                </tr>
                {/* Row 3 */}
                <tr>
                  <td className="border border-[#8D6851] px-4 py-6"></td>
                  <td className="border border-[#8D6851] px-4 py-6"></td>
                  <td className="border border-[#8D6851] px-4 py-6"></td>
                  <td className="border border-[#8D6851] px-4 py-6"></td>
                </tr>
                {/* Row 4 */}
                <tr>
                  <td className="border border-[#8D6851] px-4 py-6"></td>
                  <td className="border border-[#8D6851] px-4 py-6"></td>
                  <td className="border border-[#8D6851] px-4 py-6"></td>
                  <td className="border border-[#8D6851] px-4 py-6"></td>
                </tr>
              </tbody>
            </table>

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

export default DrivingInfoForm;
