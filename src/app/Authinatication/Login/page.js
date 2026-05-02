"use client";
import Link from "next/link";
import { MdEmail, MdLock } from "react-icons/md";
import { FcGoogle } from "react-icons/fc";
import { IoEyeOutline, IoEyeOffOutline } from "react-icons/io5";
import { useForm } from "react-hook-form";
import { authClient } from "@/lib/auth-client";
import { toast } from "react-toastify";
import { useState } from "react";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleLogin = async (data) => {
    setLoading(true);

    const { email, password } = data;

    const { data: res, error } = await authClient.signIn.email({
      email,
      password,
      rememberMe: true,
      // callbackURL: "/",
    });

    setLoading(false);

    if (error) {
      toast.error(error.message || "Login Failed ❌");
      return;
    }

    if (res) {
      toast.success("Login Successful ✅");
      window.location.href = "/";
    }
  };

  const handleGoogleLogin = async () => {
    const { error } = await authClient.signIn.social({
      provider: "google",
    });

    if (error) {
      toast.error("Google Login Failed ❌");
      return;
    }
  };

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200">
      <div className="card w-full max-w-md bg-base-100 shadow-xl p-6">
        <h2 className="text-3xl font-bold text-center mb-6">Login</h2>

        <form onSubmit={handleSubmit(handleLogin)} className="space-y-4">
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
              <p className="text-red-500 text-sm mt-1">
                {errors.email.message}
              </p>
            )}
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
              className="absolute right-3 top-10.5 text-lg"
            >
              {showPassword ? <IoEyeOffOutline /> : <IoEyeOutline />}
            </button>
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">
                {errors.password.message}
              </p>
            )}
          </div>

          <button
            type="submit"
            className="btn btn-primary w-full"
            disabled={loading}
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>


        <button
          onClick={handleGoogleLogin}
          className="btn w-full mt-3 flex items-center justify-center gap-2"
        >
          <FcGoogle size={20} />
          Continue with Google
        </button>


        <p className="text-center mt-4">
          Don’t have an account?{" "}
          <Link href="./Registation" className="text-primary">
            Registation
          </Link>
        </p>
      </div>
    </div>
  );
}