"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { MdEmail, MdLock } from "react-icons/md";
import { FcGoogle } from "react-icons/fc";

export default function LoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    if (email === "test@gmail.com" && password === "123456") {
      router.push("/");
    } else {
      setError("Invalid email or password ❌");
    }
  };
  const handleGoogleLogin = () => {

  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200">
      <div className="card w-full max-w-md bg-base-100 shadow-xl p-6">
        <h2 className="text-3xl font-bold text-center mb-4">Login</h2>

        <form onSubmit={handleLogin} className="space-y-4">

          {/* Email */}
          <div>
            <label className="label">
              <span className="label-text flex items-center gap-2">
                <MdEmail /> Email
              </span>
            </label>
            <input
              type="email"
              className="input input-bordered w-full"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
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
              className="input input-bordered w-full"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
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