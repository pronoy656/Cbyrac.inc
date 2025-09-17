import { useForm } from "react-hook-form";
import { Eye, EyeOff } from "lucide-react";
import { Link } from "react-router-dom";

const PasswordRecovery = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Form Data:", data);
  };

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
          <div className="mb-5">
            <img
              src="/cbyrac-logo.png"
              alt="CBYRAC Logo"
              className="w-24 mx-auto"
            />
          </div>
          <p className="text-white text-2xl font-semibold mb-4">CBYRAC, Inc</p>
          <h1 className="text-white text-5xl font-medium">Password Recovery</h1>
          <p className="font-medium text-white mt-6">
            Enter The Email Address Associated With Your Account.
          </p>
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

          {/* Submit */}
          <div className="flex justify-center">
            <button
              type="submit"
              className="px-28 py-3 rounded-md bg-[#8D6851] text-white font-semibold hover:opacity-90"
            >
              Continue
            </button>
          </div>

          <div className="flex justify-center">
            <Link to={"/role-selector"}>
              <button
                type="submit"
                className="flex justify-center px-28 py-3 rounded-md border border-[#8D6851] text-white font-semibold hover:opacity-90"
              >
                Back
              </button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PasswordRecovery;
