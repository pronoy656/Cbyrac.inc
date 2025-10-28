import { Button } from "antd";
import { Download, Loader2, Printer, Upload, X, FileText } from "lucide-react";
import { useRef, useState } from "react";
import { useForm } from "react-hook-form";

const Timesheet = () => {
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const [isDragging, setIsDragging] = useState(false);
  const [error, setError] = useState("");
  const fileInputRef = useRef(null);
  const [loadingType, setLoadingType] = useState(null);

  const ALLOWED_TYPES = ["image/jpeg", "image/png", "application/pdf"];
  const MAX_FILE_SIZE = 10 * 1024 * 1024; // 10MB

  const getFileType = (file) => {
    if (file.type.startsWith("image/")) return "image";
    if (file.type === "application/pdf") return "pdf";
    return "other";
  };

  const validateFile = (file) => {
    if (!ALLOWED_TYPES.includes(file.type)) {
      setError("Invalid file type. Allowed: JPG, PNG, PDF");
      return false;
    }

    if (file.size > MAX_FILE_SIZE) {
      setError("File size exceeds 10MB limit");
      return false;
    }

    setError("");
    return true;
  };

  const handleFiles = (files) => {
    if (!files) return;

    const newFiles = [];

    Array.from(files).forEach((file) => {
      if (validateFile(file)) {
        const fileType = getFileType(file);
        const preview = "";

        const uploadedFile = {
          file,
          preview,
          type: fileType,
        };

        newFiles.push(uploadedFile);

        if (fileType === "image") {
          const reader = new FileReader();
          reader.onload = (e) => {
            setUploadedFiles((prev) =>
              prev.map((f) =>
                f.file === file ? { ...f, preview: e.target.result } : f
              )
            );
          };
          reader.readAsDataURL(file);
        }
      }
    });

    setUploadedFiles((prev) => [...prev, ...newFiles]);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    handleFiles(e.dataTransfer.files);
  };

  const handleFileSelect = (e) => {
    handleFiles(e.target.files);
  };

  const removeFile = (index) => {
    setUploadedFiles((prev) => prev.filter((_, i) => i !== index));
  };

  const getFileIcon = (fileType) => {
    switch (fileType) {
      case "image":
        return <ImageIcon className="w-6 h-6" />;
      case "pdf":
        return <FileText className="w-6 h-6" />;
      default:
        return <File className="w-6 h-6" />;
    }
  };
  // pdf url
  const pdfUrl = "/Cbyrac_ Inc F2L timesheet (Fillable).pdf";
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      citizenship: [],
    },
  });

  const onSubmit = (data) => {
    console.log("I-9 Form Data Submitted:", data);
    alert("Form submitted successfully! Check console.");
  };

  const inputWrapperClass =
    "rounded-md bg-gradient-to-r from-[#8D6851] to-[#D3BFB2] mt-1 p-[1px]";
  const inputClass =
    "w-full bg-slate-900 text-white rounded-md py-2 px-3 focus:outline-none focus:ring-0";

  // Download handler for pdf
  const handleDownload = async () => {
    setLoadingType("download");

    try {
      const response = await fetch(pdfUrl);
      if (!response.ok) throw new Error("Failed to fetch PDF");

      // convert file to blob
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);

      // create a link element and trigger download
      const a = document.createElement("a");
      a.href = url;
      a.download = "Timesheet.pdf";
      document.body.appendChild(a);
      a.click();
      a.remove();

      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error("Download error:", error);
      alert("Failed to download the PDF file!");
    } finally {
      setLoadingType(null);
    }
  };
  // Print handler for pdf
  const handlePrint = async () => {
    setLoadingType("print");
    // simulate delay
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setLoadingType(null);
    alert("Timesheet printed!");
  };

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
          <div className="w-24 h-24 bg-white rounded flex items-center justify-center">
            <img src="/cbyrac-logo.png" alt="Company Logo" />
          </div>
        </div>

        {/* Title */}
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold mb-2">
            Employee Weekly Time Sheet (For Intern Employee)
          </h1>
          <p className="text-lg text-gray-200 mb-7">
            Submit Timesheet to Payroll@Cbyracinc.com
          </p>
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="rounded-2xl max-w-7xl mx-auto"
        >
          {/* General Information */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-3">
            {/* First Name */}
            <div>
              <label className="mb-1 block">
                Employee First Name <span className="text-red-500">*</span>
              </label>
              <div className={inputWrapperClass}>
                <input
                  type="text"
                  placeholder="Enter First Name"
                  {...register("firstName", {
                    required: "First name is required",
                  })}
                  className={inputClass}
                />
              </div>
              {errors.firstName && (
                <p className="text-red-500 text-sm">
                  {errors.firstName.message}
                </p>
              )}
            </div>

            {/* Last Name */}
            <div>
              <label className="mb-1 block">
                Employee Last Name <span className="text-red-500">*</span>
              </label>
              <div className={inputWrapperClass}>
                <input
                  type="text"
                  placeholder="Enter Last Name"
                  {...register("lastName", {
                    required: "Last name is required",
                  })}
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

          {/* Department Name & Job Title */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-3">
            <div>
              <label className="mb-1 block">
                Department Name <span className="text-red-500">*</span>
              </label>
              <div className={inputWrapperClass}>
                <input
                  type="text"
                  placeholder="Enter Department Name"
                  {...register("department", {
                    required: "Department is required",
                  })}
                  className={inputClass}
                />
              </div>
              {errors.department && (
                <p className="text-red-500 text-sm">
                  {errors.department.message}
                </p>
              )}
            </div>

            <div>
              <label className="mb-1 block">
                Job Title <span className="text-red-500">*</span>
              </label>
              <div className={inputWrapperClass}>
                <input
                  type="text"
                  placeholder="Enter Job Title"
                  {...register("jobTitle", {
                    required: "Job title is required",
                  })}
                  className={inputClass}
                />
              </div>
              {errors.jobTitle && (
                <p className="text-red-500 text-sm">
                  {errors.jobTitle.message}
                </p>
              )}
            </div>
          </div>

          {/* Address & Phone */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="mb-1 block">
                Address <span className="text-red-500">*</span>
              </label>
              <div className={inputWrapperClass}>
                <input
                  type="text"
                  placeholder="Enter Address"
                  {...register("address", {
                    required: "Address is required",
                  })}
                  className={inputClass}
                />
              </div>
              {errors.address && (
                <p className="text-red-500 text-sm">{errors.address.message}</p>
              )}
            </div>

            <div>
              <label className="mb-1 block">
                Phone Number <span className="text-red-500">*</span>
              </label>
              <div className={inputWrapperClass}>
                <input
                  type="tel"
                  placeholder="Enter Phone Number"
                  {...register("phone", {
                    required: "Phone number is required",
                  })}
                  className={inputClass}
                />
              </div>
              {errors.phone && (
                <p className="text-red-500 text-sm">{errors.phone.message}</p>
              )}
            </div>
          </div>

          {/* Supervisor Email & Phone */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="mb-1 block">
                Supervisor’s Email <span className="text-red-500">*</span>
              </label>
              <div className={inputWrapperClass}>
                <input
                  type="email"
                  placeholder="Enter Supervisor Email"
                  {...register("supervisorEmail", {
                    required: "Email is required",
                  })}
                  className={inputClass}
                />
              </div>
              {errors.supervisorEmail && (
                <p className="text-red-500 text-sm">
                  {errors.supervisorEmail.message}
                </p>
              )}
            </div>

            <div>
              <label className="mb-1 block">
                Supervisor’s Phone <span className="text-red-500">*</span>
              </label>
              <div className={inputWrapperClass}>
                <input
                  type="tel"
                  placeholder="Enter Supervisor Phone"
                  {...register("supervisorPhone", {
                    required: "Phone number is required",
                  })}
                  className={inputClass}
                />
              </div>
              {errors.supervisorPhone && (
                <p className="text-red-500 text-sm">
                  {errors.supervisorPhone.message}
                </p>
              )}
            </div>
          </div>
          <div className="flex justify-center space-x-5 mt-14">
            {/* Download Button */}
            <button
              type="button"
              onClick={handleDownload}
              className="flex items-center gap-2 px-12 py-3 bg-[#946344] text-white text-lg font-medium rounded-md hover:opacity-90 disabled:opacity-70"
              disabled={loadingType === "download"}
            >
              {loadingType === "download" ? (
                <Loader2 className="animate-spin w-5 h-5" />
              ) : (
                <Download className="w-5 h-5" />
              )}
              {loadingType === "download"
                ? "Downloading..."
                : "Download Timesheet"}
            </button>

            {/* Print Button */}
            <button
              type="button"
              onClick={handlePrint}
              className="flex items-center gap-2 px-12 py-3 bg-[#946344] text-white text-lg font-medium rounded-md hover:opacity-90 disabled:opacity-70"
              disabled={loadingType === "print"}
            >
              {loadingType === "print" ? (
                <Loader2 className="animate-spin w-5 h-5" />
              ) : (
                <Printer className="w-5 h-5" />
              )}
              {loadingType === "print" ? "Printing..." : "Print Timesheet"}
            </button>
          </div>

          {/* // Upload field */}
          <div className="w-full max-w-7xl mx-auto mt-12 mb-12">
            {/* Upload Area */}
            <div
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              onDrop={handleDrop}
              className={`border-3 border-dashed rounded-lg p-12 text-center transition-colors ${
                isDragging
                  ? "border-amber-600 bg-amber-500/5"
                  : "border-amber-500/40"
              }`}
            >
              <div className="flex flex-col items-center gap-4">
                {/* Upload Icon */}
                <div className="w-20 h-20 rounded-full bg-slate-800 flex items-center justify-center">
                  <Upload className="w-10 h-10 text-amber-600" />
                </div>

                {/* Text Content */}
                <div>
                  <h2 className="text-2xl font-semibold text-white mb-2">
                    Upload Documents
                  </h2>
                  <p className="text-gray-400 mb-6">
                    Drag and drop files here, or browse
                  </p>
                </div>

                {/* Choose File Button */}
                <Button
                  onClick={() => fileInputRef.current?.click()}
                  className="!bg-[#946344] hover:bg-amber-700 !text-white !px-9 !py-5 rounded-lg font-semibold"
                >
                  Choose File
                </Button>

                {/* File Info */}
                <p className="text-sm text-gray-400">
                  Supports JPG, PNG, PDF up to 10MB
                </p>
              </div>

              {/* Hidden File Input */}
              <input
                ref={fileInputRef}
                type="file"
                multiple
                accept=".jpg,.jpeg,.png,.pdf"
                onChange={handleFileSelect}
                className="hidden"
              />
            </div>

            {/* Error Message */}
            {error && (
              <div className="mt-4 p-3 bg-red-500/10 border border-red-500/50 rounded-lg text-red-500 text-sm">
                {error}
              </div>
            )}

            {/* Uploaded Files Preview */}
            {uploadedFiles.length > 0 && (
              <div className="mt-8">
                <h3 className="text-lg font-semibold text-foreground mb-4">
                  Uploaded Files ({uploadedFiles.length})
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {uploadedFiles.map((uploadedFile, index) => (
                    <div
                      key={index}
                      className="relative border border-border rounded-lg overflow-hidden bg-card/80 hover:shadow-lg transition-shadow"
                    >
                      {/* Image Preview */}
                      {uploadedFile.type === "image" &&
                        uploadedFile.preview && (
                          <div className="relative w-full h-48 bg-muted">
                            <img
                              src={uploadedFile.preview || "/placeholder.svg"}
                              alt={uploadedFile.file.name}
                              className="w-full h-full object-cover rounded-t-lg"
                            />
                            {/* Overlay gradient for better visibility */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                          </div>
                        )}

                      {/* PDF/Other File Preview */}
                      {uploadedFile.type !== "image" && (
                        <div className="w-full h-48 bg-muted flex items-center justify-center">
                          <div className="text-center text-foreground">
                            {getFileIcon(uploadedFile.type)}
                            <p className="text-xs mt-2 opacity-80">
                              {uploadedFile.type === "pdf"
                                ? "PDF Document"
                                : "File"}
                            </p>
                          </div>
                        </div>
                      )}

                      {/* File Info */}
                      <div className="p-3 border-t border-border bg-background/70 backdrop-blur-sm">
                        <p className="text-sm font-medium text-foreground truncate">
                          {uploadedFile.file.name}
                        </p>
                        <p className="text-xs text-white">
                          {(uploadedFile.file.size / 1024).toFixed(2)} KB
                        </p>
                      </div>

                      {/* Remove Button */}
                      <button
                        onClick={() => removeFile(index)}
                        className="absolute top-2 right-2 p-1 bg-red-500 hover:bg-red-600 rounded-full text-white transition-colors shadow-md"
                        aria-label="Remove file"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
          {/* Signature & Date */}
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

          <div className="grid grid-cols-1 sm:grid-cols-3 mb-4">
            <div>
              <label className="block mb-2">
                Supervisor’s Signature <span className="text-red-500">*</span>
              </label>
              <div className="w-[350px] h-[50px] bg-gradient-to-l from-[#D4BFB2] to-[#8D6851] rounded-md mt-1 flex items-center justify-center">
                <label className="w-full h-full flex items-center justify-center text-white cursor-pointer">
                  <span className="text-center">Upload Signature</span>
                  <input
                    type="file"
                    accept="image/*"
                    {...register("supervisorSignature", {
                      required: "Signature is required",
                    })}
                    className="hidden"
                  />
                </label>
              </div>
              {errors.supervisorSignature && (
                <p className="text-red-500 text-sm">
                  {errors.supervisorSignature.message}
                </p>
              )}
            </div>
            <div>
              <label className="mb-1 block">Title</label>
              <div className={inputWrapperClass}>
                <input
                  type="text"
                  {...register("title", { required: "Title is required" })}
                  className={`py-3.5 ${inputClass}`}
                />
              </div>
              {errors.title && (
                <p className="text-red-500 text-sm">{errors.title.message}</p>
              )}
            </div>
          </div>

          {/* Submit */}
          <div className="max-w-6xl mx-auto flex justify-center mt-10">
            <button
              type="submit"
              className="px-20 py-4 bg-[#946344] text-white text-lg font-medium rounded-md hover:opacity-90"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Timesheet;
