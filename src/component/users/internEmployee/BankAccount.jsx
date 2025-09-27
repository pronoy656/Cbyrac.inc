////////////////////////
import React, { useState, useCallback } from "react";
import { useForm } from "react-hook-form";
import ProgressBar from "../../progressBar/ProgressBar";
import { IoPeopleOutline } from "react-icons/io5";
import { CiCircleCheck } from "react-icons/ci";
import { Eye, Upload, X } from "lucide-react";

// সাধারণ Button কম্পোনেন্ট বানালাম
const Button = ({ type = "button", className, onClick, children }) => (
  <button
    type={type}
    onClick={onClick}
    className={`px-6 py-2 rounded-md font-medium ${className}`}
  >
    {children}
  </button>
);

const BankAccount = ({ prevStep, step, nextStep }) => {
  const [selectedAccount, setSelectedAccount] = useState(null);
  const [depositType, setDepositType] = useState("");
  const [selectedPercentage, setSelectedPercentage] = useState(0);
  const [files, setFiles] = useState([]); // uploaded files state
  const [selectedPDF, setSelectedPDF] = useState(null); // modal pdf state for full view
  const [preview, setPreview] = useState(null); // For Signature preview

  // File upload state [error: 'isDragOver' is declared but its value is never read.]
  const [isDragOver, setIsDragOver] = useState(false);
  // const depositType = watch("depositType");

  const totalSteps = 3;

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,

    // watch,
  } = useForm({
    defaultValues: {
      documents: null,
    },
  });

  // Next button এর জন্য function
  const handleNext = (data) => {
    console.log("Form Data:", data); // সব form data console এ দেখাবে
    nextStep(); // তারপর পরের step এ যাবে
  };

  // Drag drop handlers
  const handleDragOver = useCallback((e) => {
    e.preventDefault();
    setIsDragOver(true);
  }, []);

  const handleDragLeave = useCallback((e) => {
    e.preventDefault();
    setIsDragOver(false);
  }, []);

  const handleDrop = useCallback(
    (e) => {
      e.preventDefault();
      setIsDragOver(false);

      const droppedFiles = Array.from(e.dataTransfer.files);
      if (droppedFiles.length > 0) {
        const updatedFiles = [...files, ...droppedFiles];
        setFiles(updatedFiles);

        const dt = new DataTransfer();
        updatedFiles.forEach((file) => dt.items.add(file));
        setValue("documents", dt.files);
      }
    },
    [files, setValue]
  );

  const handleFileSelect = (e) => {
    const selectedFiles = Array.from(e.target.files);
    if (selectedFiles.length > 0) {
      const updatedFiles = [...files, ...selectedFiles];
      setFiles(updatedFiles);

      const dt = new DataTransfer();
      updatedFiles.forEach((file) => dt.items.add(file));
      setValue("documents", dt.files);
    }
  };

  // Remove file handler
  const handleRemoveFile = (index) => {
    const updatedFiles = files.filter((_, i) => i !== index);
    setFiles(updatedFiles);

    const dt = new DataTransfer();
    updatedFiles.forEach((file) => dt.items.add(file));
    setValue("documents", dt.files);
  };

  // Signature preview handler
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setPreview(URL.createObjectURL(file));
    }
  };

  // For removing the selected signature image
  const handleRemoveImage = () => {
    setPreview(null);
  };

  const inputWrapperClass =
    "rounded-md bg-gradient-to-r from-[#8D6851] to-[#D3BFB2] mt-1 p-[1px]";
  const inputClass =
    "w-full bg-slate-900 text-white rounded-md py-2 px-3 focus:outline-none focus:ring-0";

  return (
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
            <img src="/cbyrac-logo.png" alt="" />
          </div>
        </div>

        {/* Title */}
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold mb-2">
            Employee Direct Deposit Authorization Agreement
          </h1>
          <p className="text-sm text-gray-300 mb-7">(ACH CREDIT & DEBITS)</p>
          <ProgressBar currentStep={step} totalSteps={totalSteps} />
        </div>

        {/* Account Type Buttons */}
        <p className="text-[40px] font-bold text-center mt-12 ">
          Select Bank Account Type
        </p>
        <p className="text-red-600 mb-14 text-center text-lg font-medium">
          Select Checking & 100%. Saving option only if needed.
        </p>
        <div className="flex justify-center gap-6">
          <div className="grid grid-cols-1 sm:grid-cols-1 gap-6">
            <button
              type="button"
              className={`w-[293px] h-[158px] text-white rounded-lg transition-all duration-300 ${
                selectedAccount === "checking"
                  ? "bg-[#9e7c5e] border-3 border-white"
                  : "bg-gradient-to-r from-[#8C6750] to-[#D4BFB2]"
              }`}
              onClick={() => setSelectedAccount("checking")}
            >
              <div className="flex items-center justify-between text-2xl text-white px-10">
                <IoPeopleOutline className="text-3xl" />
                <CiCircleCheck />
              </div>
              <p className="flex justify-start px-10 mt-8 text-2xl font-semibold">
                Checking Account
              </p>
            </button>

            <button
              type="button"
              className={`w-[293px] h-[158px] text-white rounded-lg transition-all duration-300 ${
                selectedAccount === "savings"
                  ? "bg-[#9e7c5e] border-3 border-white"
                  : "bg-gradient-to-r from-[#8C6750] to-[#D4BFB2]"
              }`}
              onClick={() => setSelectedAccount("savings")}
            >
              <div className="flex items-center justify-between text-2xl text-white px-10">
                <IoPeopleOutline className="text-3xl" />
                <CiCircleCheck />
              </div>
              <p className="flex justify-start px-6 mt-8 text-2xl font-semibold">
                Savings Account
              </p>
            </button>
          </div>
        </div>

        {/* Conditionally render form */}
        {selectedAccount && (
          <form
            // onSubmit={handleSubmit(onSubmit)}
            className="rounded-2xl max-w-7xl mx-auto mt-10"
          >
            <header className="text-xl text-white font-semibold mt-9">
              {selectedAccount === "checking"
                ? "Checking Account Details"
                : "Savings Account Details"}
            </header>

            {/* === Checking Account First 6 Fields === */}
            {selectedAccount === "checking" && (
              <>
                {/* First 6 inputs */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4 mt-4">
                  <div>
                    <label className="text-white mb-1 block">
                      Bank Name <span className="text-red-500">*</span>
                    </label>
                    <div className={inputWrapperClass}>
                      <input
                        type="text"
                        placeholder="Enter Bank Name"
                        {...register("bankName", {
                          required: "Bank name is required",
                        })}
                        className={inputClass}
                      />
                    </div>
                    {errors.bankName && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.bankName.message}
                      </p>
                    )}
                  </div>
                  <div>
                    <label className="text-white mb-1 block">State</label>
                    <div className={inputWrapperClass}>
                      <input
                        type="text"
                        placeholder="Enter State"
                        {...register("state")}
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

                {/* Deposit Type and Percentage */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="text-white mb-1 block">
                      Deposit type <span className="text-red-500">*</span>
                    </label>
                    <div className={inputWrapperClass}>
                      <select
                        {...register("depositType", {
                          required: "Please select a deposit type",
                        })}
                        value={depositType}
                        onChange={(e) => setDepositType(e.target.value)}
                        className={`${inputClass} bg-[#05051A]`}
                      >
                        <option value="">Select</option>
                        <option value="full">Full Pay Check</option>
                        <option value="partial">Partial Pay Check</option>
                      </select>
                    </div>

                    {errors.depositType && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.depositType.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="text-white mb-1 block">
                      Deposit Percentage <span className="text-red-500">*</span>
                    </label>
                    <div className={`${inputWrapperClass} relative`}>
                      {depositType === "full" ? (
                        <input
                          type="number"
                          value={100}
                          readOnly
                          className={`${inputClass} cursor-not-allowed`}
                        />
                      ) : depositType === "partial" ? (
                        <select
                          {...register("depositPercentage", {
                            required:
                              depositType === "partial"
                                ? "Please select deposit percentage"
                                : false,
                          })}
                          value={selectedPercentage}
                          onChange={(e) =>
                            setSelectedPercentage(Number(e.target.value))
                          }
                          className={`${inputClass} bg-[#05051A]`}
                        >
                          <option value="">Select Percentage</option>
                          {Array.from({ length: 21 }, (_, i) => i * 5).map(
                            (val) => (
                              <option key={val} value={val}>
                                {val}%
                              </option>
                            )
                          )}
                        </select>
                      ) : (
                        <input
                          type="text"
                          placeholder="Select deposit type first"
                          readOnly
                          className={`${inputClass} cursor-not-allowed`}
                        />
                      )}
                    </div>

                    {errors.depositPercentage && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.depositPercentage.message}
                      </p>
                    )}
                  </div>
                </div>

                {/* Transit/ABA and Account No */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="text-white mb-1 block">
                      Transit/ABA No <span className="text-red-500">*</span>
                    </label>
                    <div className={inputWrapperClass}>
                      <input
                        type="text"
                        placeholder="Enter Transit/ABA No"
                        {...register("transitNo", {
                          required: "Transit/ABA No is required",
                        })}
                        className={inputClass}
                      />
                    </div>

                    {errors.transitNo && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.transitNo.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="text-white mb-1 block">
                      Account No <span className="text-red-500">*</span>
                    </label>
                    <div className={inputWrapperClass}>
                      <input
                        type="text"
                        placeholder="Enter Account No"
                        {...register("accountNo", {
                          required: "Account No is required",
                        })}
                        className={inputClass}
                      />
                    </div>

                    {errors.accountNo && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.accountNo.message}
                      </p>
                    )}
                  </div>
                </div>

                {/* File Upload Box */}
                <div className="mb-6">
                  <h2 className="text-lg font-medium mb-2">
                    Add Documents (Direct Deposit Form / Voided Check){" "}
                    <span className="text-red-500">*</span>
                  </h2>

                  <div
                    className="relative border-2 border-dashed rounded-lg p-12 text-center transition-colors border-[#8D6851]"
                    onDragOver={handleDragOver}
                    onDragLeave={handleDragLeave}
                    onDrop={handleDrop}
                  >
                    <Upload className="w-8 h-8 text-[#8D6851] mx-auto mb-4" />
                    <p className="mb-4">Drag and drop files or browse</p>
                    <Button
                      type="button"
                      className="bg-[#8D6851] hover:bg-amber-800 text-white"
                      onClick={() =>
                        document.getElementById("file-input")?.click()
                      }
                    >
                      Choose File
                    </Button>
                    <input
                      id="file-input"
                      type="file"
                      multiple
                      accept=".jpg,.jpeg,.png,.pdf"
                      className="hidden"
                      {...register("documents", {
                        required: "Please select at least one document",
                      })}
                      onChange={handleFileSelect}
                    />
                  </div>

                  {/* File Preview Section */}
                  {files.length > 0 && (
                    <div className="mt-4 grid grid-cols-2 md:grid-cols-3 gap-4">
                      {files.map((file, index) => {
                        const fileURL = URL.createObjectURL(file);
                        const isImage = file.type.startsWith("image/");
                        const isPDF = file.type === "application/pdf";

                        return (
                          <div
                            key={index}
                            className="relative border rounded-md p-2 bg-white shadow-md"
                          >
                            {/* Cross Button */}
                            <button
                              type="button"
                              onClick={() => handleRemoveFile(index)}
                              className="absolute -top-2 -right-2 bg-red-500 text-white p-1 rounded-full hover:bg-red-600"
                            >
                              <X size={14} />
                            </button>

                            {/* Image Preview */}
                            {isImage && (
                              <img
                                src={fileURL}
                                alt={file.name}
                                className="w-full h-32 object-contain rounded-md"
                              />
                            )}
                            {/* PDF Preview */}
                            {isPDF && (
                              <div
                                className="w-full h-32 border rounded-md relative cursor-pointer hover:bg-gray-50"
                                onClick={() => setSelectedPDF(fileURL)}
                              >
                                <iframe
                                  src={fileURL}
                                  title={file.name}
                                  className="w-full h-full transform scale-90 origin-top-left"
                                />
                                <div className="absolute inset-0 flex items-center justify-center bg-black/10">
                                  <p className="text-black text-xl font-semibold flex items-center gap-3 bg-gray-300 p-3 rounded-md">
                                    <Eye size={22} /> View PDF
                                  </p>
                                </div>
                              </div>
                            )}

                            {/* File Name */}
                            <p className="text-xs mt-2 truncate">{file.name}</p>
                          </div>
                        );
                      })}
                    </div>
                  )}

                  {errors.documents && (
                    <p className="text-red-500 text-sm mt-2">
                      {errors.documents.message}
                    </p>
                  )}
                </div>
              </>
            )}

            {/* === Savings Account Last 4 Fields === */}
            {selectedAccount === "savings" && (
              <>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4 mt-4">
                  <div>
                    <label className="text-white mb-1 block">
                      Second Bank Name <span className="text-red-500">*</span>
                    </label>
                    <div className={inputWrapperClass}>
                      <input
                        type="text"
                        placeholder="Enter Bank Name"
                        {...register("secondBankName", {
                          required: "Second Bank Name is required",
                        })}
                        className={inputClass}
                      />
                    </div>

                    {errors.secondBankName && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.secondBankName.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="text-white mb-1 block">
                      Deposit Percentage remaining{" "}
                      <span className="text-red-500">*</span>
                    </label>
                    <div className={inputWrapperClass}>
                      <input
                        type="number"
                        value={
                          depositType === "full"
                            ? 0
                            : depositType === "partial"
                            ? 100 - selectedPercentage
                            : ""
                        }
                        readOnly
                        className={`${inputClass} cursor-not-allowed`}
                      />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="text-white mb-1 block">
                      Transit/ABA No <span className="text-red-500">*</span>
                    </label>
                    <div className={inputWrapperClass}>
                      <input
                        type="text"
                        placeholder="Enter Transit/ABA No"
                        {...register("savingsTransitNo", {
                          required: "Transit/ABA No is required",
                        })}
                        className={inputClass}
                      />
                    </div>
                    {errors.savingsTransitNo && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.savingsTransitNo.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="text-white mb-1 block">
                      Account No <span className="text-red-500">*</span>
                    </label>
                    <div className={inputWrapperClass}>
                      <input
                        type="text"
                        placeholder="Enter Account No"
                        {...register("savingsAccountNo", {
                          required: "Account No is required",
                        })}
                        className={inputClass}
                      />
                    </div>
                    {errors.savingsAccountNo && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.savingsAccountNo.message}
                      </p>
                    )}
                  </div>
                </div>
              </>
            )}

            {/* Signature and Date */}
            <div className="grid grid-cols-1 sm:grid-cols-3 mb-4">
              <div className="mb-6">
                <label className="text-white block mb-3">
                  Upload Employee Signature{" "}
                  <span className="text-red-500">*</span>{" "}
                </label>

                {/* Upload Button Hide যদি preview থাকে */}
                {!preview && (
                  <div className="w-[350px] h-[50px] bg-gradient-to-l from-[#D4BFB2] to-[#8D6851] rounded-md mt-1 flex items-center justify-center">
                    <label className="w-full h-full flex items-center justify-center text-white cursor-pointer">
                      <span className="text-center">Upload Signature</span>
                      <input
                        type="file"
                        accept="image/*"
                        {...register("employeeSignature", {
                          required: "Signature is required",
                          onChange: handleFileChange,
                        })}
                        className="hidden"
                      />
                    </label>
                  </div>
                )}

                {/* Image Preview with Cross */}
                {preview && (
                  <div className="mt-3 relative inline-block">
                    <img
                      src={preview}
                      alt="Signature Preview"
                      className="w-[200px] h-[80px] object-contain border rounded-md"
                    />
                    <button
                      type="button"
                      onClick={handleRemoveImage}
                      className="absolute -top-2 -right-2 bg-red-500 text-white p-1 rounded-full hover:bg-red-600"
                    >
                      <X size={14} />
                    </button>
                  </div>
                )}

                {errors.employeeSignature && (
                  <p className="text-red-500 text-sm mt-2">
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
                    className={`${inputClass} py-3.5`}
                  />
                </div>

                {errors.signDate && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.signDate.message}
                  </p>
                )}
              </div>
            </div>
          </form>
        )}

        {/* PDF Full View Modal */}
        {selectedPDF && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white w-11/12 h-5/6 rounded-lg shadow-lg relative">
              {/* Close Button */}
              <button
                onClick={() => setSelectedPDF(null)}
                className="absolute top-2 right-2 bg-red-500 text-white p-2 rounded-full hover:bg-red-600"
              >
                <X size={18} />
              </button>
              <iframe
                src={selectedPDF}
                title="Full PDF"
                className="w-full h-full rounded-lg"
              ></iframe>
            </div>
          </div>
        )}

        {/* Navigation */}
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
      </div>
    </div>
  );
};

export default BankAccount;
