"use client";
import Link from "next/link";
import { MdEmail, MdLock } from "react-icons/md";
import { FcGoogle } from "react-icons/fc";
import { useForm } from "react-hook-form";
import { authClient } from "@/lib/auth-client";

export default function LoginPage() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()

  const handleLogin = async (data) => {
    // console.log(data)
    const { name, email, photo, password } = data
    // console.log(name, email, photo, password)
    const { data: res, error } = await authClient.signIn.email({
      email: email, // required
      password: password, // required
      rememberMe: true,
      callbackURL: "/",
    });
    console.log(res, error, 'login')
  }
  const handleGoogleLogin = async () => {
    const data = await authClient.signIn.social({
      provider: "google",
    });

    console.log(data)
  }

  console.log(watch('email'), "watch")
  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200">
      <div className="card w-full max-w-md bg-base-100 shadow-xl p-6">
        <h2 className="text-3xl font-bold text-center mb-4">Login</h2>

        <form onSubmit={handleSubmit(handleLogin)} className="space-y-4">

          {/* Email */}
          <div>
            <label className="label">
              <span className="label-text flex items-center gap-2">
                <MdEmail /> Email
              </span>
            </label>
            <input
              type="email"
              {...register("email")}
              className="input input-bordered w-full"
              placeholder="Enter your email"
            />
          </div>

          {/* Password */}
          <div>
            <label className="label">
              <span className="label-text flex items-center gap-2">
                <MdLock /> Password
              </span>
            </label>
            <input
              type="password"
              {...register("password", { required: "Password Fild is Reqierd" })}
              className="input input-bordered w-full"
              placeholder="Enter your password"
            />
            {errors.password ? <p className="text-red-500">{errors.password.message}</p> : ""}
          </div>

          <button
            onClick={handleGoogleLogin}
            className="btn w-full mt-3 flex items-center justify-center gap-2"
          >
            <FcGoogle size={20} />
            Continue with Google
          </button>
          <button className="btn btn-primary w-full">Login</button>
        </form>

        <p className="text-center mt-4">
          Don’t have an account?{" "}
          <Link href="./Registation" className="text-primary">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
}