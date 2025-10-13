import ProgressBar from "../../progressBar/ProgressBar";

const TermsText = ({
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
            APPLICANT CERTIFICATION :
          </p>
          <div className="border w-72 mb-5"></div>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="rounded-2xl  max-w-7xl mx-auto"
          >
            {/* Terms and condition text*/}
            <p className="text-lg font-normal leading-7 mb-6 text-gray-200">
              I understand and agree that if driving is a requirement of the job
              for which I am applying, my employment and/or continued employment
              is contingent on possessing a valid driver’s license for the state
              in which I reside and automobile liability insurance in an amount
              equal to the minimum required by the state where I reside. I
              understand that the Company may now have, or may establish, a
              drug-free workplace or drug and/or alcohol testing program
              consistent with applicable federal, state, and local law. If the
              Company has such program and I am offered a conditional offer of
              employment, I understand that if a pre-employment (post-offer)
              drug and/or alcohol test is positive, the employment offer may be
              withdrawn. I agree to work under the conditions requiring a
              drug-free workplace, consistent with applicable federal, state,
              and local law. I also understand that all employees of the
              location, pursuant to the Company’s policy and federal, state, and
              local law, may be subject to urinalysis and/or blood screening or
              other medically recognized tests designed to detect the presence
              of alcohol or illegal or controlled drugs. If employed, I
              understand that the taking of alcohol and/or drug test is a
              condition of continual employment and I agree to undergo alcohol
              and drug testing consistent with Cbyrac, Inc policies and
              applicable federal, state and local law.If employed by Cbyrac,
              Inc., I understand and agree that the Company, to the extent
              permitted by federal, state, and local law, may exercise its
              right, without prior warning or notice, to conduct investigations
              of property (including, but not limited to, files, lockers, desks,
              vehicles, and computers) and, in certain circumstances, my
              personal property.I understand and agree that as a condition of
              employment and to the extent permitted by federal, state, and
              local law, I may be required to sign a confidentiality,
              restrictive covenant, and/or conflict of interest statement.I
              certify that all the information on this application, my resume,
              or any supporting documents I may present during any interview is
              and will be complete and accurate to the best of my knowledge. I
              understand that any falsification, misrepresentation, or omission
              of any information may result in disqualification from
              consideration for employment or, if employed, disciplinary action,
              up to and including immediate dismissal.
            </p>
            <p className="text-lg font-normal leading-7 mb-6 text-gray-200">
              CBYRAC, INC. IS AN AT-WILL EMPLOYER AS ALLOWED BY APPLICABLE STATE
              LAW, THIS MEANS THAT REGARDLESS OF ANY PROVISION IN THIS
              APPLICATION, IF HIRED, THE CBYRAC, INC. OR I MAY TERMINATE THE
              EMPLOYMENT RELATINSHIP AT ANY TIME, FOR ANY RESON, WITH ORWITHOUT
              CAUSE OR NOTICE. NOTHING IN THIS APPLICATION OR IN ANY DOCUMENT OR
              STATEMENT, WRITTEN OR ORAL, SHALL LIMIT THE RIGHT TO TERMINATE
              EMPLOYMENT AT-WILL. NOT OFFICERS, EMPLYEE OR REPRESENTATIVE OF
              CBYRAC, INC. IS AUTHORIZED TO ENTER INTO AN AGREEMENT – EXPRESS OR
              IMPLIED—WITH ME OR ANY APPLICANT FOR EMPLOYMENT FOR A SPECIFIED
              PERIOD OF TIME UNLESS SUCH AN AGREEMENT IS IN A WRITTEN CONTRACT
              SIGNED BY THE PRESIDENT OF CBYRAC, INC. IF HIRED, I AGREE TO
              CONFORM TO THE RULES AND REGULATIONS OF CBYRAC, INC., AND I
              UNDERSTAND THAT CBYRAC, INC. HAS COMPLETE DISCRETION TO MODIFY
              SUCH RULES AND REGULATIONS AT ANY TIME, EXCEPT THAT IT WILL NOT
              MODIFY ITS POLICY OF EMPLOYMENT AT-WILL.
            </p>
            <p className="text-lg font-normal mb-6 leading-relaxed text-gray-200">
              I authorize the CBYRAC, INC. or its agents to confirm all
              statements contained in this application and/or resume as it
              relates to the position I am seeking to the extent permitted by
              federal, state, or local law. I agree to complete any requisite
              authorization forms for the background investigation which may be
              permitted by federal, state and/or local law. If applicable and
              allowed by law, I will receive separate written notification
              regarding the Company’s intent to obtain “consumer reports.”I
              authorize and consent to, without reservation, any party or agency
              contacted by this employer to furnish the above-mentioned
              information. I hereby release, discharge, and hold harmless, to
              the extent permitted by federal, state, and local law, any party
              delivering information to CBYRAC, INC. or its duly authorized
              representative pursuant to this authorization from any liability,
              claims, charges, or causes of action which I may have as a result
              of the delivery or disclosure of the above requested information.
              I hereby release from liability CBYRAC, INC. and its
              representative for seeking such information and all other persons,
              corporations, or organizations furnishing such information.
              Further, if hired, I authorize CBYRAC, INC. to provide truthful
              information concerning my employment to future employers and hold
              the CBYRAC, INC. harmless for providing such information.If hired
              by CBYRAC, INC., I understand that I will be required to provide
              genuine documentation establishing my identity and eligibility to
              be legally employed in the United States by this Company. I also
              understand this Company employs only individuals who are legally
              eligible to work in the United States.THIS APPLICATION WILL BE
              CONSIDERED ACTIVE FOR A MAXIMUM OF SIXTY (60) DAYS. IF YOU WISH TO
              BE CONSIDERED FOR EMPLOYMENT AFTER THAT TIME. YOU MUST REAPPLY.I
              CERTIFY THAT ALL OF THE INFORMATION THAT I HAVE PROVIDED ON THIS
              APPLICATION IS TRUE, ACCURATE, AND COMPLETE
            </p>
            <p className="text-lg font-semibold text-red-600 mb-6">
              DO NOT SIGN UNTIL YOU HAVE READ ALL THE INFORMATION CONTAINED IN
              THE APPLICATION.
            </p>
            <div className="mb-6">
              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  value="US Citizen"
                  {...register("citizenship", {
                    required: "You must select at least one option",
                  })}
                  className="w-5 h-5"
                />
                In signing below, I acknowledge that I have read and understand
                all the terms of this Application for Employment
              </label>
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
                    className={`py-3.5 date-input  ${inputClass}`}
                  />
                </div>
                {errors.signDate && (
                  <p className="text-red-500 text-sm">
                    {errors.signDate.message}
                  </p>
                )}
              </div>
            </div>
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

export default TermsText;
