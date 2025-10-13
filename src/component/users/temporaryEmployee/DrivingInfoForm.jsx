// import { useForm } from "react-hook-form";
import ProgressBar from "../../progressBar/ProgressBar";
import { useState } from "react";
import { useForm } from "react-hook-form";

const DrivingInfoForm = ({ prevStep, nextStep }) => {
  const [step, setStep] = useState(1);
  const totalSteps = 12; // total number of steps for progress bar

  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
    trigger, // <-- important for step-wise validation
  } = useForm();

  const onSubmit = (data) => {
    console.log("Form Data Submitted:", data);
    alert("Driving Information Form submitted successfully!");
  };

  // Step-wise Next button validation
  const nextStepHandler = async () => {
    // Trigger validation for all fields
    const result = await trigger();
    if (result) {
      const allData = getValues(); // ✅ এখন ব্যবহার হচ্ছে
      console.log("Driving info form data:", allData);
      nextStep(); // Next Step

      setStep((prev) => prev + 1);
    } else {
      // Errors exist, stay on current step
      console.log("Validation errors:", errors);
    }
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
            {/* Additional General Info */}
            <div className="mb-4">
              <label className="text-white mb-2 block">
                Do you have a current valid driver’s license?{" "}
                <span className="text-red-500">*</span>
              </label>
              <div className={inputWrapperClass}>
                <select
                  {...register("hasValidLicense", {
                    required: "This field is required",
                  })}
                  className={inputClass}
                >
                  <option value="">Select</option>
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                </select>
              </div>
              {errors.hasValidLicense && (
                <p className="text-red-500 text-sm">
                  {errors.hasValidLicense.message}
                </p>
              )}
            </div>
            <div className="mb-4">
              <label className="text-white mb-2 block">
                If yes, License No. <span className="text-red-500">*</span>
              </label>
              <div className={inputWrapperClass}>
                <input
                  type="text"
                  placeholder="Enter License No."
                  {...register("licenseNumber", {
                    required: "This field is required",
                  })}
                  className={inputClass}
                />
              </div>
              {errors.licenseNumber && (
                <p className="text-red-500 text-sm">
                  {errors.licenseNumber.message}
                </p>
              )}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="text-white mb-2 block">
                  State <span className="text-red-500">*</span>
                </label>
                <div className={inputWrapperClass}>
                  <input
                    type="text"
                    placeholder="Enter State"
                    {...register("licenseState", {
                      required: "This field is required",
                    })}
                    className={inputClass}
                  />
                </div>
                {errors.licenseState && (
                  <p className="text-red-500 text-sm">
                    {errors.licenseState.message}
                  </p>
                )}
              </div>

              <div>
                <label className="text-white mb-2 block">
                  Expiration Date <span className="text-red-500">*</span>
                </label>
                <div className={inputWrapperClass}>
                  <input
                    type="date"
                    {...register("licenseExpiration", {
                      required: "This field is required",
                    })}
                    className={inputClass}
                  />
                </div>
                {errors.licenseExpiration && (
                  <p className="text-red-500 text-sm">
                    {errors.licenseExpiration.message}
                  </p>
                )}
              </div>
            </div>
            <div className="mb-4">
              <label className="text-white mb-2 block">
                If you do not have a driver’s license for the state in which you
                currently reside, why not?{" "}
                <span className="text-red-500">*</span>
              </label>
              <div className={inputWrapperClass}>
                <input
                  type="text"
                  placeholder="Explain why not"
                  {...register("noLicenseReason", {
                    required: "This field is required",
                  })}
                  className={inputClass}
                />
              </div>
              {errors.noLicenseReason && (
                <p className="text-red-500 text-sm">
                  {errors.noLicenseReason.message}
                </p>
              )}
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="text-white mb-2 block">
                  Has your license ever been suspended or revoked?{" "}
                  <span className="text-red-500">*</span>
                </label>
                <div className={inputWrapperClass}>
                  <select
                    {...register("licenseSuspended", {
                      required: "This field is required",
                    })}
                    className={inputClass}
                  >
                    <option value="">Select</option>
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                  </select>
                </div>
                {errors.licenseSuspended && (
                  <p className="text-red-500 text-sm">
                    {errors.licenseSuspended.message}
                  </p>
                )}
              </div>
              <div>
                <label className="text-white mb-2 block">
                  If yes, explain <span className="text-red-500">*</span>
                </label>
                <div className={inputWrapperClass}>
                  <input
                    type="text"
                    placeholder="Explain suspension or revocation"
                    {...register("suspensionExplanation", {
                      required: "This field is required",
                    })}
                    className={inputClass}
                  />
                </div>
                {errors.suspensionExplanation && (
                  <p className="text-red-500 text-sm">
                    {errors.suspensionExplanation.message}
                  </p>
                )}
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="text-white mb-2 block">
                  Do you have personal automobile insurance?{" "}
                  <span className="text-red-500">*</span>
                </label>
                <div className={inputWrapperClass}>
                  <select
                    {...register("hasAutoInsurance", {
                      required: "This field is required",
                    })}
                    className={inputClass}
                  >
                    <option value="">Select</option>
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                  </select>
                </div>
                {errors.hasAutoInsurance && (
                  <p className="text-red-500 text-sm">
                    {errors.hasAutoInsurance.message}
                  </p>
                )}
              </div>
              <div>
                <label className="text-white mb-2 block">
                  If no, explain <span className="text-red-500">*</span>
                </label>
                <div className={inputWrapperClass}>
                  <input
                    type="text"
                    placeholder="Explain lack of insurance"
                    {...register("noInsuranceReason", {
                      required: "This field is required",
                    })}
                    className={inputClass}
                  />
                </div>
                {errors.noInsuranceReason && (
                  <p className="text-red-500 text-sm">
                    {errors.noInsuranceReason.message}
                  </p>
                )}
              </div>
            </div>
            <div className="w-full gap-4 mb-2">
              <div>
                <label className="text-white mb-2 block">
                  Have you ever been denied personal automobile insurance or has
                  it ever been terminated or suspended?{" "}
                  <span className="text-red-500">*</span>
                </label>
                <div className={inputWrapperClass}>
                  <select
                    {...register("insuranceDenied", {
                      required: "This field is required",
                    })}
                    className={inputClass}
                  >
                    <option value="">Select</option>
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                  </select>
                </div>
                {errors.insuranceDenied && (
                  <p className="text-red-500 text-sm">
                    {errors.insuranceDenied.message}
                  </p>
                )}
              </div>
            </div>

            <div className=" grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="mb-4">
                <label className="text-white mb-2 block">
                  If yes, explain <span className="text-red-500">*</span>
                </label>
                <div className={inputWrapperClass}>
                  <input
                    type="text"
                    placeholder="Explain denial, termination or suspension"
                    {...register("insuranceExplanation", {
                      required: "This field is required",
                    })}
                    className={inputClass}
                  />
                </div>
                {errors.insuranceExplanation && (
                  <p className="text-red-500 text-sm">
                    {errors.insuranceExplanation.message}
                  </p>
                )}
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
                  <td className="border border-[#8D6851] px-4 py-2">
                    <input
                      type="text"
                      placeholder="Enter offense"
                      {...register("violationOffense1", {
                        required: "This field is required",
                      })}
                      className="w-full bg-slate-900 py-1.5 text-white focus:outline-none"
                    />
                  </td>
                  <td className="border border-[#8D6851] px-4 py-2">
                    <input
                      type="date"
                      {...register("violationDate1", {
                        required: "This field is required",
                      })}
                      className="w-full bg-slate-900 py-1.5 text-white focus:outline-none date-input"
                    />
                  </td>
                  <td className="border border-[#8D6851] px-4 py-2">
                    <input
                      type="text"
                      placeholder="Enter location"
                      {...register("violationLocation1", {
                        required: "This field is required",
                      })}
                      className="w-full bg-slate-900 py-1.5 text-white focus:outline-none"
                    />
                  </td>
                  <td className="border border-[#8D6851] px-4 py-2">
                    <input
                      type="text"
                      placeholder="Enter comments"
                      {...register("violationComments1", {
                        required: "This field is required",
                      })}
                      className="w-full bg-slate-900 py-1.5 text-white focus:outline-none"
                    />
                  </td>
                </tr>
                {/* Row 2 */}
                <tr>
                  <td className="border border-[#8D6851] px-4 py-2">
                    <input
                      type="text"
                      placeholder="Enter offense"
                      {...register("violationOffense2", {
                        required: "This field is required",
                      })}
                      className="w-full bg-slate-900 py-1.5 text-white focus:outline-none"
                    />
                  </td>
                  <td className="border border-[#8D6851] px-4 py-2">
                    <input
                      type="date"
                      {...register("violationDate2", {
                        required: "This field is required",
                      })}
                      className="w-full bg-slate-900 py-1.5 text-white focus:outline-none date-input"
                    />
                  </td>
                  <td className="border border-[#8D6851] px-4 py-2">
                    <input
                      type="text"
                      placeholder="Enter location"
                      {...register("violationLocation2", {
                        required: "This field is required",
                      })}
                      className="w-full bg-slate-900 py-1.5 text-white focus:outline-none"
                    />
                  </td>
                  <td className="border border-[#8D6851] px-4 py-2">
                    <input
                      type="text"
                      placeholder="Enter comments"
                      {...register("violationComments2", {
                        required: "This field is required",
                      })}
                      className="w-full bg-slate-900 py-1.5 text-white focus:outline-none"
                    />
                  </td>
                </tr>
                {/* Row 3 */}
                <tr>
                  <td className="border border-[#8D6851] px-4 py-2">
                    <input
                      type="text"
                      placeholder="Enter offense"
                      {...register("violationOffense3", {
                        required: "This field is required",
                      })}
                      className="w-full bg-slate-900 py-1.5 text-white focus:outline-none"
                    />
                  </td>
                  <td className="border border-[#8D6851] px-4 py-2">
                    <input
                      type="date"
                      {...register("violationDate3", {
                        required: "This field is required",
                      })}
                      className="w-full bg-slate-900 py-1.5 text-white focus:outline-none date-input"
                    />
                  </td>
                  <td className="border border-[#8D6851] px-4 py-2">
                    <input
                      type="text"
                      placeholder="Enter location"
                      {...register("violationLocation3", {
                        required: "This field is required",
                      })}
                      className="w-full bg-slate-900 py-1.5 text-white focus:outline-none"
                    />
                  </td>
                  <td className="border border-[#8D6851] px-4 py-2">
                    <input
                      type="text"
                      placeholder="Enter comments"
                      {...register("violationComments3", {
                        required: "This field is required",
                      })}
                      className="w-full bg-slate-900 py-1.5 text-white focus:outline-none"
                    />
                  </td>
                </tr>
                {/* Row 4 */}
                <tr>
                  <td className="border border-[#8D6851] px-4 py-2">
                    <input
                      type="text"
                      placeholder="Enter offense"
                      {...register("violationOffense4", {
                        required: "This field is required",
                      })}
                      className="w-full bg-slate-900 py-1.5 text-white focus:outline-none"
                    />
                  </td>
                  <td className="border border-[#8D6851] px-4 py-2">
                    <input
                      type="date"
                      {...register("violationDate4", {
                        required: "This field is required",
                      })}
                      className="w-full bg-slate-900 py-1.5 text-white focus:outline-none date-input"
                    />
                  </td>
                  <td className="border border-[#8D6851] px-4 py-2">
                    <input
                      type="text"
                      placeholder="Enter location"
                      {...register("violationLocation4", {
                        required: "This field is required",
                      })}
                      className="w-full bg-slate-900 py-1.5 text-white focus:outline-none"
                    />
                  </td>
                  <td className="border border-[#8D6851] px-4 py-2">
                    <input
                      type="text"
                      placeholder="Enter comments"
                      {...register("violationComments4", {
                        required: "This field is required",
                      })}
                      className="w-full bg-slate-900 py-1.5 text-white focus:outline-none"
                    />
                  </td>
                </tr>
              </tbody>
            </table>
          </form>
          <div className="flex justify-center gap-4 mt-12">
            <button
              type="button"
              onClick={prevStep}
              className="px-6 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-700"
            >
              Previous
            </button>

            <button
              type="button"
              onClick={nextStepHandler}
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
