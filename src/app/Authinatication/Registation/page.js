"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { MdEmail, MdLock, MdPerson, MdImage } from "react-icons/md";
import { FcGoogle } from "react-icons/fc";

export default function RegisterPage() {
  const router = useRouter();

  const [form, setForm] = useState({
    name: "",
    email: "",
    photo: "",
    password: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleRegister = (e) => {
    e.preventDefault();

    if (form.password.length < 6) {
      setError("Password must be at least 6 characters ❌");
      return;
    }

    console.log("User Registered:", form);
    router.push("/login");
  };
  const handleGoogleLogin = () => {

  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200">
      <div className="card w-full max-w-md bg-base-100 shadow-xl p-6">
        <h2 className="text-3xl font-bold text-center mb-4">Register</h2>

        <form onSubmit={handleRegister} className="space-y-4">

          {/* Name */}
          <div>
            <label className="label">
              <span className="label-text flex items-center gap-2">
                <MdPerson /> Name
              </span>
            </label>
            <input
              type="text"
              name="name"
              className="input input-bordered w-full"
              placeholder="Enter your name"
              onChange={handleChange}
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
              name="email"
              className="input input-bordered w-full"
              placeholder="Enter your email"
              onChange={handleChange}
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
              name="photo"
              className="input input-bordered w-full"
              placeholder="Enter image link"
              onChange={handleChange}
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
              name="password"
              className="input input-bordered w-full"
              placeholder="Enter password"
              onChange={handleChange}
              required
            />
          </div>

          {error && <p className="text-red-500">{error}</p>}
          <button
            onClick={handleGoogleLogin}
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