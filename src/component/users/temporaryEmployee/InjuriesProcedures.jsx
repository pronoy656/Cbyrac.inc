import React from "react";
import ProgressBar from "../../progressBar/ProgressBar";

const InjuriesProcedures = ({
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
              Terms and Condition Form
            </h1>
            <p className="text-sm text-gray-300 mb-7">
              Please fill all forms. Resumes are not a substitute for a
              completed application
            </p>
            {/* progressbar */}
            <ProgressBar currentStep={step} totalSteps={totalSteps} />
          </div>
          <p className="text-2xl font-medium mt-8 ">
            ACCIDENTS / INJURIES PROCEDURES :
          </p>
          <p>
            The following procedures must be followed for all work-related
            injuries
          </p>
          <p>
            1. ALL ACCIDENTS/INJURIES must be reported to your foreman or
            supervisor, immediately even if no medical attention is required.
            The injured employee must complete a Report of Employee
            Injury/Accident whether or not medical attention is required. It
            will be placed in their medical file for future reference in case of
            problems.
          </p>
          <p>
            2. The supervisor must complete a Supervisor’s Reports of Accident,
            i.e. the person you report to on your assignment, at the same time
            the employee accident report is being filled out, regardless of
            whether medical attention is required. Both reports need to be faxed
            to CBYRAC, INC office at (786)403-5043.
          </p>
          <p>
            3. If the injury requires medical attention and is not an emergency
            situation, have your supervisor call (786)403-5043 prior to going to
            a medical facility. In case of an emergency, have your supervisor
            call and report which medical facility you are being transported to.
            We need to authorize treatment, arrange for proper billing, and
            determine that the facility follows proper procedures.
          </p>
          <p>
            4. If an employee must be off on disability, he/she must notify
            CBYRAC, INC office. If off for an extended period of time, the
            employee must go by their office or call at least once a week to
            advise CBYRAC, INC office of their status. Upon receiving a release
            to return to work, you must call the office to report your
            availability.
          </p>
          <p>
            5. Anytime an employee is on light duty the doctor’s restrictions
            must be followed. The employee may return to his/her regular duties
            only when release in writing by the doctor. It is your
            responsibility to tell the doctor that CBYRAC, INC has all types of
            light duty work.
          </p>
          <p>
            6. A drug screen is required for all injuries. A drug test is
            required to be taken within 24hours after an injury is reported.
            Refusal to submit to a drug test will result in the same
            consequences as a positive drug or alcohol test.
          </p>
          <p>
            7. I understand and agree to abide by the above accident procedures.
            I understand that any payments made to me or to anyone else for
            expenses in connection with my accident and resulting injury is not
            an admission of liability on the part CBYRAC, INC. In the event of
            an injury, I authorize full access to copies of medical records,
            radiology reports, drug/alcohol screenings and documents of any kind
            relating to my past or present injury/illness to CBYRAC, INC.I
            hereby agree to release this information and Hold all such medical
            providers harmless from the release of this information as set forth
            in this authorization.
          </p>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="rounded-2xl  max-w-7xl mx-auto"
          >
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

export default InjuriesProcedures;
