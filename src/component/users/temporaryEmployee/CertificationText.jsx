import React from "react";
import ProgressBar from "../../progressBar/ProgressBar";

const CertificationText = ({
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

  //   const inputWrapperClass =
  //     "rounded-md bg-gradient-to-r from-[#8D6851] to-[#D3BFB2] mt-1 p-[1px]";
  //   const inputClass =
  //     "w-full bg-slate-900 text-white rounded-md py-2 px-3 focus:outline-none focus:ring-0";
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
            APPLICANT CERTIFICATION :
          </p>
          <div className="border w-72 mb-5"></div>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="rounded-2xl  max-w-7xl mx-auto"
          >
            {/* Terms and condition text*/}
            <p className="text-lg font-normal leading-7 mb-6 text-gray-200">
              The welfare and success of CBYRAC, INC., the "Company", depends on
              the physical and psychological health of all its employees. While
              the company is committed to maintaining a safe and productive
              workplace, it is the responsibility of both the company and the
              employees to create and maintain a safe, healthful and efficient
              working environment. Therefore, for the protection of its clients,
              employees, property, and the general public, the Company has
              adopted this Substance Abuse Policy.
            </p>
            <p className="text-2xl font-medium mt-8 ">1. PURPOSE AND SCOPE</p>
            <div className="border w-72 mb-5"></div>
            <p className="text-lg font-normal leading-7 mb-6 text-gray-200">
              1.01 PURPOSE: The purpose of this Policy is to maintain a safe,
              healthful, and efficient working environment by eliminating any
              abuse of legal and illegal drugs, alcohol and inhalants on the
              Company premises or at any time while on company business, and
              requiring all employees of the Company to be free from the effects
              of legal and illegal drugs, alcohol and inhalants while on the
              company or at any time while on Company business.
            </p>
            <p className="text-lg font-normal leading-7 mb-6 text-gray-200">
              1.02 SCOPE: This policy applies to all employees of this Company:
              (a) at all times while on the Company premises, (b) during the
              course and scope of their employment regardless of location and ©
              during any Company - sponsored activities.
            </p>
            <p className="text-2xl font-medium mt-8 ">
              2. DISCIPLINARY ACTION AND PROHIBITED CONDUCT
            </p>
            <div className="border w-72 mb-5"></div>
            <p className="text-lg font-normal mb-6 leading-relaxed text-gray-200">
              2.01 DISCIPLINARY ACTION: An employee's failure to comply with any
              part of this policy will result in disciplinary action up to and
              including termination of employment.
            </p>
            <p className="text-lg font-normal mb-6 leading-relaxed text-gray-200">
              2.02 PROHIBITED CONDUCT: Any employee will be subjected to the
              above measures of Paragraph 2.01 for any of the following: c.)
              Conviction under any criminal statue for the possession, use or
              sale of drugs or alcohol or any related activity.
            </p>
            <p>
              a.) The manufacture, distribution, possession, use or sale of
              alcohol, inhalants, unauthorized or illegal drugs or the misuse of
              legal or prescription drugs on Company premises, while on company
              business, or during any Company - sponsored activities.
            </p>
            <p>b.) Being under the influence of any substance described</p>
            <p>Company - sponsored activities.</p>

            <p>
              c.) Conviction under any criminal statue for the possession, use
              or sale of drugs or alcohol or any related activity.
            </p>
            <p>
              d.) Refusing to submit to a medical evaluation, including drug or
              alcohol testing as provided for in section 3 of this policy.
            </p>
            <p>
              {" "}
              e.) Generating test results which indicate any drug, alcohol or
              any other substance abuse.
            </p>
            <p className="text-2xl font-medium mt-8 ">3. TESTING</p>
            <div className="border w-72 mb-5"></div>
            <p>
              3.01 DEFINITION: For the purpose of this policy, "drug" is defined
              as any alcoholic beverage, illegal inhalant, illegal drug or other
              substance, the use, possession,{" "}
            </p>
            <p>
              manufacture, distribution, or dispensation of which is prohibited
              by any state or federal law or regulation and any drug substance
              obtained by prescription, over-the counter or otherwise.
            </p>
            <p>3.02 APPLICABILITY OF DRUG TESTING:</p>
            <p>
              a.) All persons applying for a position with the Company may be
              required to submit to a drug test as a condition to employment.
            </p>
            <p>
              b.) All current and future employees must submit to a drug test
              upon the request of the Company under the following
            </p>
            <p>
              1.) When special safety considerations attendant to certain jobs
              indicated that such testing presents a reasonable means to assure
              a safe working environment.
            </p>
            <p>
              2.) When the employee either sustains an injury in the course and
              scope of employment or contributes to or causes another employee
            </p>
            <p>
              3.) When the employee causes, indirectly or directly, damage to
              the Company's property or to the property of another.
            </p>
            <p>
              4.) When the employee contributes or causes injury to any third
              party while the employee is in the course and scope of employment.
            </p>
            <p>
              5.) When the employee is convicted under any criminal drug statue
              for a violation accruing during the course and scope of
              employment.
            </p>
            <p>
              If such a conviction occurs, it is the employee's responsibility
              to notify the Company within five (5) days of the conviction. This
            </p>
            <p>
              requirement includes any finding of guilt, guilty plea, plea of no
              contest or imposition of sentence or any other penalty whatsoever
              by
            </p>
            <p>
              any court of competent jurisdiction or otherwise in connection
              with any state or federal criminal statue involving the
              manufacture,
            </p>
            <p>
              distribution, dispensation, use or, possession of any controlled
              substance or drug, including alcohol.
            </p>
            <p>
              6.) When the Company, in its sole discretion, determines that it
              is in the Company's best interest to conduct such a drug test.
            </p>

            <p className="text-2xl font-medium mt-8 ">
              4. MISCELLANEOUS PROVISION
            </p>
            <div className="border w-72 mb-5"></div>
            <p>
              4.01 COOPERATION WITH LAW ENFORCEMENT: In addition, any illegal
              drug or other substance obtained by the Company from any employee
              may be turned
            </p>
            <p>
              over to a law enforcement agency and may result in criminal
              prosecution.
            </p>
            <p>
              4.02 REPORTING: each employee is responsible for promptly
              reporting to the appropriate Company officers any use of
              prescribed medication which may affect{" "}
            </p>
            <p>the employee's judgment, performance and behavior.</p>
            <p>
              4.03 OTHER PROCEDURES: The Company will establish such other
              procedures as it finds necessary to effectively enforce this
              Policy. This may include a{" "}
            </p>
            <p>
              requirement that employees cooperate in personal or facility
              searches when there is reason to believe drugs or alcohol are
              present, when their performance is impaired{" "}
            </p>
            <p>
              or their behavior is erratic. Refusing to cooperate with these
              procedures may be cause for disciplinary action as
            </p>
            <p>provided in Section 2.</p>
            <p>
              4.04 MEDICAL FACILITY: The Company shall not be responsible for,
              and makes no representation or warranties on behalf of the
              laboratory or medical facility{" "}
            </p>
            <p>conducting the drug test.</p>
            <p className="text-[28px] font-bold">
              CBYRAC, INC.Substance Abuse Policy – English
            </p>

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

export default CertificationText;
