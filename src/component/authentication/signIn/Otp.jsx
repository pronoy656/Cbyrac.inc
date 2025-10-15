import React, { useRef } from "react";

import { useForm, Controller } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { verifyOtp } from "../../../redux/feature/user/userSlice";
// import { adaptEventHandlers } from "recharts/types/util/types";

const Otp = () => {
  const inputRefs = useRef([]);
  const dispatch = useDispatch();
  const location = useLocation();
  const email = location.state?.email || "";
  const { isLoading } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const { control, handleSubmit, setValue, getValues } = useForm({
    defaultValues: {
      otp: ["", "", "", ""],
    },
  });

  const handleChange = (index, value) => {
    if (value.length > 1) value = value.slice(-1);
    if (!/^\d*$/.test(value)) return;

    setValue(`otp.${index}`, value);

    if (value && index < 3) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (index, e) => {
    const otp = getValues("otp");
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handlePaste = (e) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData("text").slice(0, 4);
    if (!/^\d+$/.test(pastedData)) return;

    pastedData.split("").forEach((char, index) => {
      if (index < 4) {
        setValue(`otp.${index}`, char);
      }
    });

    const otp = getValues("otp");
    const nextEmpty = otp.findIndex((val) => !val);
    if (nextEmpty !== -1) {
      inputRefs.current[nextEmpty]?.focus();
    } else {
      inputRefs.current[3]?.focus();
    }
  };

  const onSubmit = async (data) => {
    const otpValue = data.otp.join("");
    console.log("Verifying OTP:", otpValue);
    alert(`Verifying OTP: ${otpValue}`);
    const otpData = await dispatch(
      verifyOtp({ email, oneTimeCode: Number(otpValue) })
    );
    if (otpData?.payload) {
      navigate("/reset-password", { state: { token: otpData.payload } });
    }
  };

  const handleResend = () => {
    console.log("Resending OTP");
    alert("Resending OTP...");
  };
  if (isLoading) {
    return <div className="text-white text-center mt-10">Loading...</div>;
  }

  return (
    <div>
      <div
        className="min-h-screen flex items-center justify-center px-4"
        style={{ backgroundColor: "#0A1628" }}
      >
        <div className="w-full max-w-md space-y-8">
          {/* Logo */}
          <div className="flex justify-center">
            <div className="bg-white p-4 rounded-lg">
              <img
                src="/cbyrac-logo-shield-with-feather.jpg"
                alt="CBYRAC Logo"
                width={80}
                height={80}
                style={{ borderRadius: "8px" }}
              />
            </div>
          </div>

          {/* Company Name */}
          <div className="text-center">
            <h2 className="text-white text-lg font-medium tracking-wide">
              CBYRAC, Inc
            </h2>
          </div>

          {/* Heading */}
          <div className="text-center space-y-2">
            <h1 className="text-white text-4xl font-bold">Verify Your Code</h1>
            <p className="text-gray-400 text-sm">
              Enter the 4-digit code sent to your email
            </p>
          </div>

          {/* OTP Inputs */}
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex justify-center gap-3">
              {[0, 1, 2, 3].map((index) => (
                <Controller
                  key={index}
                  control={control}
                  name={`otp.${index}`}
                  render={({ field }) => (
                    <input
                      {...field}
                      ref={(el) => (inputRefs.current[index] = el)}
                      type="text"
                      inputMode="numeric"
                      maxLength={1}
                      onChange={(e) => handleChange(index, e.target.value)}
                      onKeyDown={(e) => handleKeyDown(index, e)}
                      onPaste={handlePaste}
                      className="w-12 h-14 text-center text-2xl font-semibold text-white bg-transparent rounded-lg focus:outline-none focus:ring-2 transition-all"
                      style={{
                        border: "2px solid #A67C52",
                        outlineColor: "#A67C52",
                      }}
                    />
                  )}
                />
              ))}
            </div>

            {/* Verify Button */}
            <div className="pt-4">
              <button
                type="submit"
                className="w-full h-12 text-white font-medium rounded-lg transition-all hover:opacity-90"
                style={{ backgroundColor: "#A67C52" }}
              >
                Verify Code
              </button>
            </div>
          </form>

          {/* Resend Link */}
          <div className="text-center">
            <p className="text-gray-400 text-sm">
              Didn&apos;t receive the code?
              <button
                onClick={handleResend}
                className="ml-2 font-medium transition-colors hover:opacity-80"
                style={{ color: "#A67C52", background: "none", border: "none" }}
              >
                Resend
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Otp;
