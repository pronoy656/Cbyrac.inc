// import React from "react";

import { Download, Loader2 } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";

const PayrollCalender = () => {
  const [loadingType, setLoadingType] = useState(null);

  // pdf url
  const pdfUrl = "2026 PAYROLL CALENDAR.pdf";
  const {
    formState: { errors },
  } = useForm({
    defaultValues: {
      citizenship: [],
    },
  });

  // pdf download button
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
      a.download = "PAYROLL CALENDAR.pdf";
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
        CBYRAC, Inc Payroll Calendar
      </p>
      <div className="flex items-center justify-center">
        <img src="/Screenshot 2025-10-28 035348.png" alt="" />
      </div>
      <div className="flex justify-center items-center mt-14">
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
            : "Download Payroll calender"}
        </button>
      </div>
    </div>
  );
};

export default PayrollCalender;
