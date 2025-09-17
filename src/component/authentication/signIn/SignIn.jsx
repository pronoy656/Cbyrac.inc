import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Eye, EyeOff } from "lucide-react";
import { Link } from "react-router-dom";

const SignIn = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [showPassword, setShowPassword] = useState(false);
  //   const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const onSubmit = (data) => {
    console.log("Form Data:", data);
  };

  //   const password = watch("password");

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
          <h1 className="text-white text-5xl font-bold">Welcome Back</h1>
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-full space-y-6 text-white"
        >
          {/* Email */}
          <div>
            <label className="block text-base font-medium mb-1">
              Email Address <span className="text-red-500">*</span>
            </label>
            <div className={gradientWrapper}>
              <input
                type="email"
                placeholder="Enter Email Address"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "Invalid email address",
                  },
                })}
                className={inputClass}
              />
            </div>
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email.message}</p>
            )}
          </div>

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

          {/* ✅ Remember & Forgot Password */}
          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                {...register("remember")}
                className="h-4 w-4 rounded border-gray-400"
              />
              <span className="text-gray-300">Remember Me</span>
            </label>
            <Link
              to="/password-recovery"
              className="text-[#8D6851] hover:underline"
            >
              Forgot Password?
            </Link>
          </div>

          {/* Submit */}
          <div className="flex justify-center">
            <button
              type="submit"
              className="px-28 py-3 rounded-md bg-[#8D6851] text-white font-semibold hover:opacity-90"
            >
              Login
            </button>
          </div>

          {/* Login link */}
          <p className="text-center font-medium text-gray-300">
            Already have an account?
          </p>
          <div className="flex justify-center">
            <Link to={"/role-selector"}>
              <button
                type="submit"
                className="flex justify-center px-28 py-3 rounded-md border border-[#8D6851] text-white font-semibold hover:opacity-90"
              >
                Sign Up
              </button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
