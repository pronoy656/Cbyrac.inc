import { Eye, EyeOff } from "lucide-react";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { registerUser } from "../../../redux/feature/user/userSlice";

const InternRegister = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const selectedJobType = location.state?.selectedJobType;
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const { isSuccess } = useSelector((state) => state.user);

  // redirect when role not selected
  useEffect(() => {
    if (!selectedJobType) {
      navigate("/role-selector");
    }
  }, [selectedJobType, navigate]);

  useEffect(() => {
    if (isSuccess) {
      navigate("/sign-in");
    }
  }, [isSuccess, navigate]);
  const onSubmit = (data) => {
    // 1️⃣ Check if passwords match
    if (data.password !== data.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    // 2️⃣ Create payload object
    const payload = {
      ...data, // all form fields
      employee_role: selectedJobType, // append jobType
    };

    // 3️⃣ Remove confirmPassword before sending
    delete payload.confirmPassword;

    // 4️⃣ Dispatch registration
    dispatch(registerUser(payload));
    console.log("Payload Submitted:", payload);
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
          <h1 className="text-white text-4xl font-bold">
            Creating <span className="text-red-500">{selectedJobType} </span>
            Account
          </h1>
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-full space-y-6 text-white"
        >
          {/* First + Last Name */}
          <div className="flex gap-6">
            <div className="w-1/2">
              <label className="block text-base font-medium mb-1">
                First Name <span className="text-red-500">*</span>
              </label>
              <div className={gradientWrapper}>
                <input
                  type="text"
                  placeholder="Enter First Name"
                  {...register("firstName", {
                    required: "First Name is required",
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
            <div className="w-1/2">
              <label className="block text-base font-medium mb-1">
                Last Name <span className="text-red-500">*</span>
              </label>
              <div className={gradientWrapper}>
                <input
                  type="text"
                  placeholder="Enter Last Name"
                  {...register("lastName", {
                    required: "Last Name is required",
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
              Create Account
            </button>
          </div>

          {/* Login link */}
          <Link to={"/sign-in"}>
            <p className="text-center text-sm text-gray-400">
              Already have an account?{" "}
              <a href="/login" className="text-white underline">
                Login
              </a>
            </p>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default InternRegister;
