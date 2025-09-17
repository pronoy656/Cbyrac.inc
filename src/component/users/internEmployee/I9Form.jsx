import { useForm } from "react-hook-form";
import ProgressBar from "../../progressBar/ProgressBar";
import { IoPeopleOutline } from "react-icons/io5";
import { CiCircleCheck } from "react-icons/ci";

const I9Form = ({ prevStep, nextStep, step }) => {
  const totalSteps = 3; // total number of steps for progress bar

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      citizenship: [], // initially unchecked
    },
  });

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
              Employment Eligibility Verification ( Form I-9 )
            </h1>
            <p className="text-sm text-gray-300 mb-7">
              U.S. Citizenship and Immigration Services
            </p>
            {/* progressbar */}
            <ProgressBar currentStep={step} totalSteps={totalSteps} />
          </div>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="rounded-2xl  max-w-7xl mx-auto"
          >
            {/* General Information */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-3"></div>
            {/* Additional General Info */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-3">
              <div>
                <label className="text-white mb-1 block">
                  Last Name ( Family Name) *
                </label>
                <div className={inputWrapperClass}>
                  <input
                    type="text"
                    placeholder="Enter Last Name"
                    {...register("telephone")}
                    className={inputClass}
                  />
                </div>
              </div>

              <div>
                <label className="text-white mb-1 block">
                  First Name (Given Name) *
                </label>
                <div className={inputWrapperClass}>
                  <input
                    type="email"
                    placeholder="Enter First Name"
                    {...register("email")}
                    className={inputClass}
                  />
                </div>
              </div>
            </div>
            {/* Additional General Info */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4 mt-9">
              <div>
                <label className="text-white mb-1 block">
                  Middle Initial ( if any) *
                </label>
                <div className={inputWrapperClass}>
                  <input
                    type="text"
                    placeholder="Enter Middle Name"
                    {...register("telephone")}
                    className={inputClass}
                  />
                </div>
              </div>

              <div>
                <label className="text-white mb-1 block">
                  Other Last Names Used ( if any) *
                </label>
                <div className={inputWrapperClass}>
                  <input
                    type="email"
                    placeholder="Enter Other Last Name"
                    {...register("email")}
                    className={inputClass}
                  />
                </div>
              </div>
            </div>{" "}
            {/* Additional General Info */}
            <div className="mb-4">
              <label className="text-white mb-1 block">
                Address * Enter Your Name
              </label>
              <div className={inputWrapperClass}>
                <input
                  type="text"
                  placeholder="Street Number & Name, City Or Town, State, ZIP"
                  {...register("telephone")}
                  className={inputClass}
                />
              </div>
            </div>
            {/* Additional General Info */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="text-white mb-1 block">Date Of Birth *</label>
                <div className={inputWrapperClass}>
                  <input
                    type="text"
                    placeholder="MM-DD-YY"
                    {...register("telephone")}
                    className={inputClass}
                  />
                </div>
              </div>

              <div>
                <label className="text-white mb-1 block">
                  U.S. Social Security Number *
                </label>
                <div className={inputWrapperClass}>
                  <input
                    type="email"
                    placeholder="Enter U.S. Social Security Number"
                    {...register("email")}
                    className={inputClass}
                  />
                </div>
              </div>
            </div>
            {/* Additional General Info */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="text-white mb-1 block">
                  Employee’s Email Address *
                </label>
                <div className={inputWrapperClass}>
                  <input
                    type="text"
                    placeholder="Enter Email Address "
                    {...register("telephone")}
                    className={inputClass}
                  />
                </div>
              </div>

              <div>
                <label className="text-white mb-1 block">
                  Employee’s Telephone Number *
                </label>
                <div className={inputWrapperClass}>
                  <input
                    type="email"
                    placeholder="Enter Telephone Number"
                    {...register("email")}
                    className={inputClass}
                  />
                </div>
              </div>
            </div>
            {/* Check Boxes */}
            <div className="mb-5 mt-8 space-y-3">
              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  value="US Citizen"
                  {...register("citizenship")}
                  className="w-5 h-5"
                />
                A citizen of the United States
              </label>

              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  value="Noncitizen National"
                  {...register("citizenship")}
                  className="w-5 h-5"
                />
                A noncitizen national of the United States
              </label>

              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  value="Lawful Permanent Resident"
                  {...register("citizenship")}
                  className="w-5 h-5"
                />
                A lawful permanent resident (Enter USCIS or A-Number)
              </label>

              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  value="Other Noncitizen"
                  {...register("citizenship")}
                  className="w-5 h-5"
                />
                A noncitizen (Other than Item Numbers 2 and 3 above)
              </label>
            </div>
            {/* Employee Signature */}
            <div className="mb-6">
              <label className="text-white block mb-2">
                Employee Signature *
              </label>
              <div className="w-[350px] h-[50px] bg-gradient-to-l from-[#D4BFB2] to-[#8D6851]  rounded-md mt-1 flex items-center justify-center">
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
            <button>submit</button>
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

export default I9Form;
