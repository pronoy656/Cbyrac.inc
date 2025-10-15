import { Eye, EyeOff } from "lucide-react";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { resetPassword } from "../../../redux/feature/user/userSlice";

const ResetPassword = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();
  const location = useLocation();
  const dispatch = useDispatch();
  const token = location.state?.token || "";
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    const payload = {
      newPassword: data.password,
      confirmPassword: data.confirmPassword,
    };

    try {
      const result = await dispatch(resetPassword({ payload, token }));
      if (resetPassword.fulfilled.match(result)) {
        // Success → navigate
        alert(result.payload.message || "Password reset successful!");
        navigate("/sign-in");
      } else {
        // Error → show message
        console.error("Password reset failed:", result.payload);
        alert(
          result.payload?.message || "Password reset failed. Please try again."
        );
      }
    } catch (err) {
      console.error("Unexpected error:", err);
      alert("Something went wrong. Please try again.");
    }
  };

  const password = watch("password");

  // ✅ Gradient Border Wrapper
  const gradientWrapper =
    "p-[2px] rounded-md bg-gradient-to-r from-[#8D6851] to-[#D4BFB2]";

  // ✅ Input Class
  const inputClass =
    "w-full px-3 py-2 bg-[#05051A] text-white rounded-md focus:outline-none";
  return (
    <div className="bg-[#05051A] min-h-screen flex items-center justify-center">
      <div className="max-w-3xl w-full mx-auto rounded-lg p-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="mb-8">
            <img
              src="/cbyrac-logo.png"
              alt="CBYRAC Logo"
              className="w-24 mx-auto"
            />
          </div>
          <p className="text-white text-2xl font-semibold mb-4">CBYRAC, Inc</p>
          <h1 className="text-white text-4xl font-bold">Welcome Back</h1>
          <p>Type your new password twice to ensure accuracy.</p>
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-full space-y-6 text-white"
        >
          {/* Password */}
          <div>
            <label className="block text-base font-medium mb-1">
              Password <span className="text-red-500">*</span>
            </label>
            <div className={`${gradientWrapper} relative`}>
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter Password"
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 6,
                    message: "Password must be at least 6 characters",
                  },
                })}
                className={inputClass}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400"
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
            {errors.password && (
              <p className="text-red-500 text-sm">{errors.password.message}</p>
            )}
          </div>

          {/* Confirm Password */}
          <div>
            <label className="block text-base font-medium mb-1">
              Confirm Password <span className="text-red-500">*</span>
            </label>
            <div className={`${gradientWrapper} relative`}>
              <input
                type={showConfirmPassword ? "text" : "password"}
                placeholder="Re-Enter Password"
                {...register("confirmPassword", {
                  required: "Confirm Password is required",
                  validate: (value) =>
                    value === password || "Passwords do not match",
                })}
                className={inputClass}
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400"
              >
                {showConfirmPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
            {errors.confirmPassword && (
              <p className="text-red-500 text-sm">
                {errors.confirmPassword.message}
              </p>
            )}
          </div>

          {/* Submit */}
          <div className="flex justify-center">
            <button
              type="submit"
              className="px-28 py-3 rounded-md bg-[#8D6851] text-white font-semibold hover:opacity-90"
            >
              Confirm
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ResetPassword;
