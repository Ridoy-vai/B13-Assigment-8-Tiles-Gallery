"use client";
import Link from "next/link";
import { MdEmail, MdLock, MdPerson, MdImage } from "react-icons/md";
import { useForm } from "react-hook-form";
// import { authClient } from "@/lib/auth-client";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";
import { authClient } from "../../../lib/auth-client";

export default function RegisterPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleRegister = async (data) => {
    setLoading(true);

    const { name, email, photo, password } = data;

    const { data: res, error } = await authClient.signUp.email({
      name,
      email,
      password,
      image: photo || "", 
    });

    setLoading(false);

    if (error) {
      toast.error(error.message || "Registration Failed ❌");
      console.log(error)
      return;
    }

    if (res) {
      toast.success("Account Created Successfully ✅");
      router.push("/Authinatication/Login");
    }
  };
  const togglePassword = () => {
    setShowPassword(!showPassword);
  };


  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200">
      <div className="card w-full max-w-md bg-base-100 shadow-xl p-6">
        <h2 className="text-3xl font-bold text-center mb-6">Register</h2>

        <form onSubmit={handleSubmit(handleRegister)} className="space-y-4">

          {/* Name */}
          <div>
            <label className="label">
              <span className="label-text flex items-center gap-2">
                <MdPerson /> Name
              </span>
            </label>
            <input
              type="text"
              {...register("name", { required: "Name is required" })}
              className="input input-bordered w-full"
              placeholder="Enter your name"
            />
            {errors.name && (
              <p className="text-red-500 text-sm">{errors.name.message}</p>
            )}
          </div>

          {/* Email */}
          <div>
            <label className="label">
              <span className="label-text flex items-center gap-2">
                <MdEmail /> Email
              </span>
            </label>
            <input
              type="email"
              {...register("email", { required: "Email is required" })}
              className="input input-bordered w-full"
              placeholder="Enter your email"
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email.message}</p>
            )}
          </div>

          {/* Photo */}
          <div>
            <label className="label">
              <span className="label-text flex items-center gap-2">
                <MdImage /> Photo URL
              </span>
            </label>
            <input
              type="text"
              {...register("photo")}
              className="input input-bordered w-full"
              placeholder="Enter image link"
            />
          </div>

          {/* Password */}
          <div className="relative">
            <label className="label">
              <span className="label-text flex items-center gap-2">
                <MdLock /> Password
              </span>
            </label>

            <input
              type={showPassword ? "text" : "password"}
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Minimum 6 characters",
                },
              })}
              className="input input-bordered w-full pr-10"
              placeholder="Enter your password"
            />

            <button
              type="button"
              onClick={togglePassword}
              className="absolute right-3 top-[42px] text-lg"
            >
              {showPassword ? <IoEyeOffOutline /> : <IoEyeOutline />}
            </button>
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">
                {errors.password.message}
              </p>
            )}
          </div>


          {/* Submit */}
          <button
            type="submit"
            className="btn btn-primary w-full"
            disabled={loading}
          >
            {loading ? "Creating Account..." : "Registation"}
          </button>
        </form>

        <p className="text-center mt-4">
          Already have an account?{" "}
          <Link href="./Login" className="text-primary">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}