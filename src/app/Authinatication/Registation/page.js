"use client";
import Link from "next/link";
import { MdEmail, MdLock, MdPerson, MdImage } from "react-icons/md";
import { FcGoogle } from "react-icons/fc";
import { useForm } from "react-hook-form";

export default function RegisterPage() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()

  const handleRegister = (data) => {
    console.log(data)
    const { name, email, photo, password } = data
    console.log(name, email, photo, password)
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200">
      <div className="card w-full max-w-md bg-base-100 shadow-xl p-6">
        <h2 className="text-3xl font-bold text-center mb-4">Register</h2>

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
              {...register("name")}
              className="input input-bordered w-full"
              placeholder="Enter your name"
              required
            />
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
              {...register("email")}
              className="input input-bordered w-full"
              placeholder="Enter your email"
              required
            />
          </div>

          {/* Photo URL */}
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
          <div>
            <label className="label">
              <span className="label-text flex items-center gap-2">
                <MdLock /> Password
              </span>
            </label>
            <input
              type="password"
              {...register("password")}
              className="input input-bordered w-full"
              placeholder="Enter password"
              required
            />
          </div>

          {/* {error && <p className="text-red-500">{error}</p>} */}
          <button
            className="btn w-full mt-3 flex items-center justify-center gap-2"
          >
            <FcGoogle size={20} />
            Continue with Google
          </button>


          <button className="btn btn-primary w-full">Register</button>
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