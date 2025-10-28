import React, { useRef, useState } from "react";

import { Dialog } from "@headlessui/react";
import { FileText, ImageIcon, Upload, X, Loader2 } from "lucide-react";
import { Button } from "antd";

const AdminCalender = () => {
  // upload file states
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const [isDragging, setIsDragging] = useState(false);
  const [error, setError] = useState("");
  const fileInputRef = useRef(null);

  const [loading, setLoading] = useState(false);

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

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      alert("Form submitted!");
    }, 2000);
  };

  return (
    <div className="">
      <div className="flex space-x-[450px] mb-2 text-white">
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
      <p className="text-white text-3xl font-semibold text-center mb-14">
        CBYRAC, Inc 2025 Payroll Calendar
      </p>
      <form onSubmit={handleSubmit}>
        {/* // Upload field */}
        <div className="w-full max-w-7xl mx-auto mt-12 mb-12">
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
              <div className="w-20 h-20 rounded-full bg-slate-800 flex items-center justify-center">
                <Upload className="w-10 h-10 text-amber-600" />
              </div>

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
                    className="relative border border-white rounded-lg overflow-hidden bg-card hover:shadow-lg transition-shadow"
                  >
                    {/* Image Preview */}
                    {uploadedFile.type === "image" && uploadedFile.preview && (
                      <div className="relative w-full h-48 bg-muted">
                        <img
                          src={uploadedFile.preview || "/placeholder.svg"}
                          alt={uploadedFile.file.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    )}

                    {/* PDF/Other File Preview */}
                    {uploadedFile.type !== "image" && (
                      <div className="w-full h-48 bg-muted flex items-center justify-center">
                        <div className="text-center text-white">
                          {getFileIcon(uploadedFile.type)}
                          <p className="text-xs text-white mt-2">
                            {uploadedFile.type === "pdf"
                              ? "PDF Document"
                              : "File"}
                          </p>
                        </div>
                      </div>
                    )}

                    {/* File Info */}
                    <div className="p-3 border-t border border-white">
                      <p className="text-sm font-medium text-foreground truncate text-white">
                        {uploadedFile.file.name}
                      </p>
                      <p className="text-xs text-muted-foreground text-white">
                        {(uploadedFile.file.size / 1024).toFixed(2)} KB
                      </p>
                    </div>

                    {/* Remove Button */}
                    <button
                      onClick={() => removeFile(index)}
                      className="absolute top-2 right-2 p-1 bg-red-500 hover:bg-red-600 rounded-full text-white transition-colors"
                      aria-label="Remove file"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="flex justify-center mt-10">
            <button
              type="submit"
              disabled={loading}
              className="flex items-center gap-3 px-20 py-3.5 bg-[#946344] text-white text-xl font-medium rounded-md hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed transition"
            >
              {/* Loading spinner */}
              {loading ? (
                <Loader2 className="w-5 h-5 animate-spin" />
              ) : (
                <Upload className="w-5 h-5" />
              )}

              {loading ? "Uploading..." : "Submit"}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AdminCalender;
