import React, { useState, useCallback } from "react";
import { useForm } from "react-hook-form";
import { Upload, X, FileText } from "lucide-react";
import { FaHome } from "react-icons/fa";
import { CiCircleCheck, CiCircleInfo } from "react-icons/ci";

// ✅ UploadField Component (JSX version)
const UploadField = ({
  label,
  name,
  isDragOver,
  preview,
  error,
  onDragOver,
  onDragLeave,
  onDrop,
  onFileSelect,
  onRemove,
  onChooseClick,
}) => (
  <div className="mt-6">
    <h1 className="text-lg font-medium text-white mb-2">{label}</h1>
    <div
      className={`relative border-2 border-dashed rounded-lg p-12 text-center transition-colors ${
        isDragOver
          ? "border-[#8D6851] bg-gray-900"
          : "border-[#8D6851] bg-slate-950"
      }`}
      onDragOver={onDragOver}
      onDragLeave={onDragLeave}
      onDrop={onDrop}
    >
      <div className="mb-6">
        <div className="w-16 h-16 mx-auto bg-[#201925] rounded-lg flex items-center justify-center">
          <Upload className="w-8 h-8 text-[#8D6851]" />
        </div>
      </div>
      <h2 className="text-xl font-semibold text-white mb-3">
        Upload Documents
      </h2>
      <p className="text-gray-400 mb-6">Drag and drop files here, or browse</p>
      <button
        type="button"
        className="bg-[#8D6851] text-white px-6 py-2 rounded-md font-medium hover:bg-[#9e7c5e] transition-colors"
        onClick={onChooseClick}
      >
        Choose File
      </button>
      <input
        id={name}
        type="file"
        accept=".jpg,.jpeg,.png,.pdf"
        className="hidden"
        onChange={onFileSelect}
      />
      <p className="text-sm text-gray-400 mt-2">
        Supports JPG, PNG, PDF up to 10MB
      </p>
    </div>

    {preview && (
      <div className="mt-4">
        <div className="relative inline-block">
          {preview.type === "image" && preview.preview ? (
            <img
              src={preview.preview || "/placeholder.svg"}
              alt="Preview"
              className="w-[200px] h-[120px] object-cover border border-[#8D6851] rounded-md"
            />
          ) : (
            <div className="w-[200px] h-[120px] bg-slate-800 border border-[#8D6851] rounded-md flex items-center justify-center">
              <div className="text-center">
                <FileText className="w-8 h-8 text-[#8D6851] mx-auto mb-2" />
                <p className="text-xs text-gray-400">{preview.file.name}</p>
              </div>
            </div>
          )}
          <button
            type="button"
            onClick={onRemove}
            className="absolute -top-2 -right-2 bg-red-500 text-white p-1 rounded-full hover:bg-red-600 transition-colors"
            aria-label="Remove file"
          >
            <X size={14} />
          </button>
        </div>
      </div>
    )}

    {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
  </div>
);

// ✅ Main Component (JSX version)
const SelectCitizenship = ({ prevStep, step, setFormData, getValues }) => {
  const [selectedJobType, setSelectedJobType] = useState("");
  const [uploadedFiles, setUploadedFiles] = useState({
    photoId: null,
    ssn: null,
    residentCard: null,
    workAuth: null,
    employeeSignature: null,
  });

  const [isDragOver, setIsDragOver] = useState({
    photoId: false,
    ssn: false,
    residentCard: false,
    workAuth: false,
    employeeSignature: false,
  });

  const [errors, setErrors] = useState({});

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors: formErrors },
  } = useForm({
    defaultValues: {
      photoId: null,
      ssn: null,
      residentCard: null,
      workAuth: null,
      employeeSignature: null,
    },
  });

  const ALLOWED_TYPES = ["image/jpeg", "image/png", "application/pdf"];
  const MAX_FILE_SIZE = 10 * 1024 * 1024; // 10MB

  const validateFile = (file) => {
    if (!ALLOWED_TYPES.includes(file.type)) {
      return {
        valid: false,
        error: "Invalid file type. Allowed: JPG, PNG, PDF",
      };
    }
    if (file.size > MAX_FILE_SIZE) {
      return { valid: false, error: "File size exceeds 10MB limit" };
    }
    return { valid: true };
  };

  const getFileType = (file) => {
    if (file.type.startsWith("image/")) return "image";
    if (file.type === "application/pdf") return "pdf";
    return "other";
  };

  const onSubmit = (data) => {
    const finalData = {
      ...getValues(),
      citizenShipForm: {
        citizenshipStatus:
          selectedJobType === "Citizen"
            ? "citizen"
            : selectedJobType === "Resident"
            ? "resident"
            : selectedJobType === "WorkAuth"
            ? "workAuthorization"
            : null,
        photoID: uploadedFiles.photoId?.file?.name
          ? `/documents/photoId/${uploadedFiles.photoId.file.name}`
          : null,
        socialSecurityCard: uploadedFiles.ssn?.file?.name
          ? `/documents/ssn/${uploadedFiles.ssn.file.name}`
          : null,
        residentCard: uploadedFiles.residentCard?.file?.name
          ? `/documents/residentCard/${uploadedFiles.residentCard.file.name}`
          : null,
        workAuthorizationDocument: uploadedFiles.workAuth?.file?.name
          ? `/documents/workAuth/${uploadedFiles.workAuth.file.name}`
          : null,
        signature: uploadedFiles.employeeSignature?.file?.name
          ? `/employeeSignature/${uploadedFiles.employeeSignature.file.name}`
          : null,
      },
    };

    setFormData(finalData);
    console.log("✅ Final Form Data:", finalData);
  };

  const handleSelection = (type) => {
    setSelectedJobType(type);
  };

  const handleDragOver = useCallback((e, field) => {
    e.preventDefault();
    setIsDragOver((prev) => ({ ...prev, [field]: true }));
  }, []);

  const handleDragLeave = useCallback((e, field) => {
    e.preventDefault();
    setIsDragOver((prev) => ({ ...prev, [field]: false }));
  }, []);

  const handleDrop = useCallback((e, field) => {
    e.preventDefault();
    setIsDragOver((prev) => ({ ...prev, [field]: false }));
    const files = e.dataTransfer.files;
    if (files.length > 0) handleFileUpload(files[0], field);
  }, []);

  const handleFileUpload = (file, field) => {
    const validation = validateFile(file);
    if (!validation.valid) {
      setErrors((prev) => ({ ...prev, [field]: validation.error }));
      return;
    }

    setErrors((prev) => ({ ...prev, [field]: "" }));
    const fileType = getFileType(file);

    if (fileType === "image") {
      const reader = new FileReader();
      reader.onload = (e) => {
        setUploadedFiles((prev) => ({
          ...prev,
          [field]: { file, preview: e.target?.result, type: fileType },
        }));
      };
      reader.readAsDataURL(file);
    } else {
      setUploadedFiles((prev) => ({
        ...prev,
        [field]: { file, preview: "", type: fileType },
      }));
    }
  };

  const handleFileSelect = (e, field) => {
    const files = e.target.files;
    if (files && files.length > 0) handleFileUpload(files[0], field);
  };

  const handleRemoveFile = (field) => {
    setUploadedFiles((prev) => ({ ...prev, [field]: null }));
    setErrors((prev) => ({ ...prev, [field]: "" }));
  };

  // ✅ Render Upload Fields Dynamically
  const renderUploadFields = () => {
    if (selectedJobType === "Citizen") {
      return (
        <>
          <UploadField
            label="Add Documents - Photo I.D. (Driver's License, Passport) *"
            name="photoId"
            isDragOver={isDragOver.photoId}
            preview={uploadedFiles.photoId}
            error={errors.photoId}
            onDragOver={(e) => handleDragOver(e, "photoId")}
            onDragLeave={(e) => handleDragLeave(e, "photoId")}
            onDrop={(e) => handleDrop(e, "photoId")}
            onFileSelect={(e) => handleFileSelect(e, "photoId")}
            onRemove={() => handleRemoveFile("photoId")}
            onChooseClick={() => document.getElementById("photoId")?.click()}
          />
          <UploadField
            label="Add Documents - Social Security Card *"
            name="ssn"
            isDragOver={isDragOver.ssn}
            preview={uploadedFiles.ssn}
            error={errors.ssn}
            onDragOver={(e) => handleDragOver(e, "ssn")}
            onDragLeave={(e) => handleDragLeave(e, "ssn")}
            onDrop={(e) => handleDrop(e, "ssn")}
            onFileSelect={(e) => handleFileSelect(e, "ssn")}
            onRemove={() => handleRemoveFile("ssn")}
            onChooseClick={() => document.getElementById("ssn")?.click()}
          />
        </>
      );
    }

    if (selectedJobType === "Resident") {
      return (
        <>
          <UploadField
            label="Add Documents - Photo I.D. (Driver's License, Passport) *"
            name="photoId"
            isDragOver={isDragOver.photoId}
            preview={uploadedFiles.photoId}
            error={errors.photoId}
            onDragOver={(e) => handleDragOver(e, "photoId")}
            onDragLeave={(e) => handleDragLeave(e, "photoId")}
            onDrop={(e) => handleDrop(e, "photoId")}
            onFileSelect={(e) => handleFileSelect(e, "photoId")}
            onRemove={() => handleRemoveFile("photoId")}
            onChooseClick={() => document.getElementById("photoId")?.click()}
          />
          <UploadField
            label="Add Documents - Social Security Card *"
            name="ssn"
            isDragOver={isDragOver.ssn}
            preview={uploadedFiles.ssn}
            error={errors.ssn}
            onDragOver={(e) => handleDragOver(e, "ssn")}
            onDragLeave={(e) => handleDragLeave(e, "ssn")}
            onDrop={(e) => handleDrop(e, "ssn")}
            onFileSelect={(e) => handleFileSelect(e, "ssn")}
            onRemove={() => handleRemoveFile("ssn")}
            onChooseClick={() => document.getElementById("ssn")?.click()}
          />
          <UploadField
            label="Add Documents - Resident Card *"
            name="residentCard"
            isDragOver={isDragOver.residentCard}
            preview={uploadedFiles.residentCard}
            error={errors.residentCard}
            onDragOver={(e) => handleDragOver(e, "residentCard")}
            onDragLeave={(e) => handleDragLeave(e, "residentCard")}
            onDrop={(e) => handleDrop(e, "residentCard")}
            onFileSelect={(e) => handleFileSelect(e, "residentCard")}
            onRemove={() => handleRemoveFile("residentCard")}
            onChooseClick={() =>
              document.getElementById("residentCard")?.click()
            }
          />
        </>
      );
    }

    if (selectedJobType === "WorkAuth") {
      return (
        <>
          <UploadField
            label="Add Documents - Photo I.D. (Driver's License, Passport) *"
            name="photoId"
            isDragOver={isDragOver.photoId}
            preview={uploadedFiles.photoId}
            error={errors.photoId}
            onDragOver={(e) => handleDragOver(e, "photoId")}
            onDragLeave={(e) => handleDragLeave(e, "photoId")}
            onDrop={(e) => handleDrop(e, "photoId")}
            onFileSelect={(e) => handleFileSelect(e, "photoId")}
            onRemove={() => handleRemoveFile("photoId")}
            onChooseClick={() => document.getElementById("photoId")?.click()}
          />
          <UploadField
            label="Add Documents - Social Security Card *"
            name="ssn"
            isDragOver={isDragOver.ssn}
            preview={uploadedFiles.ssn}
            error={errors.ssn}
            onDragOver={(e) => handleDragOver(e, "ssn")}
            onDragLeave={(e) => handleDragLeave(e, "ssn")}
            onDrop={(e) => handleDrop(e, "ssn")}
            onFileSelect={(e) => handleFileSelect(e, "ssn")}
            onRemove={() => handleRemoveFile("ssn")}
            onChooseClick={() => document.getElementById("ssn")?.click()}
          />
          <UploadField
            label="Add Documents - Work Authorization Card/Document *"
            name="workAuth"
            isDragOver={isDragOver.workAuth}
            preview={uploadedFiles.workAuth}
            error={errors.workAuth}
            onDragOver={(e) => handleDragOver(e, "workAuth")}
            onDragLeave={(e) => handleDragLeave(e, "workAuth")}
            onDrop={(e) => handleDrop(e, "workAuth")}
            onFileSelect={(e) => handleFileSelect(e, "workAuth")}
            onRemove={() => handleRemoveFile("workAuth")}
            onChooseClick={() => document.getElementById("workAuth")?.click()}
          />
        </>
      );
    }

    return null;
  };

  return (
    <div className="text-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex space-x-96 mb-4">
          <div>
            <div className="font-bold text-lg mb-2">CBYRAC, INC</div>
            <div>123 MAIN STREET SUITE 100</div>
            <div>ANYTOWN, STATE 12345</div>
            <div>PHONE: 555-555-5555</div>
            <div>EMAIL: info@cbyrac.com</div>
          </div>
          <div className="w-24 h-24 bg-white rounded">
            <img src="/cbyrac-logo.png" alt="Company Logo" />
          </div>
        </div>

        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold mb-2">Employment Application</h1>
          <p className="text-sm text-gray-300 mb-7">
            Please fill all forms, signatures are not a substitute for a
            completed application
          </p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)}>
          <p className="text-[40px] font-bold text-center mt-12 mb-14">
            Select Your Citizenship
          </p>

          {/* Citizenship Buttons */}
          <div className="flex justify-center gap-6">
            {["Citizen", "Resident", "WorkAuth"].map((type) => (
              <button
                key={type}
                type="button"
                className={`w-[250px] text-2xl h-[140px] rounded-lg ${
                  selectedJobType === type
                    ? "bg-[#9e7c5e] border-2 border-white"
                    : "bg-gradient-to-r from-[#8C6750] to-[#D4BFB2]"
                }`}
                onClick={() => handleSelection(type)}
              >
                <div className="flex items-center justify-between text-2xl text-white px-6">
                  <div className="text-3xl">
                    <FaHome />
                  </div>
                  <CiCircleCheck />
                </div>
                <p className="text-start px-6 mt-8">
                  {type === "WorkAuth" ? "Work Authorization" : type}
                </p>
              </button>
            ))}
          </div>

          {/* Upload Fields */}
          <div className="max-w-2xl mx-auto mt-8">{renderUploadFields()}</div>

          {/* Submit Buttons */}
          <div className="mt-9 flex justify-center">
            <button
              type="submit"
              className="w-80 py-3.5 bg-[#8D6851] text-white rounded-md font-medium hover:bg-[#9e7c5e] transition-colors"
            >
              Submit Application
            </button>
          </div>

          <div className="mt-6 flex justify-center">
            <button
              type="button"
              className="w-80 py-3.5 border-2 border-[#8D6851] text-white rounded-md font-medium hover:bg-[#8D6851]/10 transition-colors"
            >
              See Your Application
            </button>
          </div>

          <div className="flex items-center max-w-2xl mx-auto gap-2 mt-8 text-gray-300">
            <CiCircleInfo className="text-3xl text-[#F4E53D]" />
            <div>
              <p className="text-sm mt-3.5">
                You will need to review your application carefully, and if you
                agree with everything, click on 'Agree' to proceed.
              </p>
              <p className="text-sm text-center">
                Only then will you be able to submit your application.
              </p>
            </div>
          </div>

          <div className="flex justify-end mt-6 gap-4">
            <button
              type="button"
              onClick={prevStep}
              className="px-6 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition-colors"
            >
              Previous
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SelectCitizenship;
