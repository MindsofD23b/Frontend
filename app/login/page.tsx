"use client";

import Link from "next/link";
import { useState } from "react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    setError("");

    try {
      const res = await fetch("http://localhost:3000/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error || "Login failed");
        return;
      }

      console.log("Logged in:", data);
      window.location.href = "/Homepage";
    } catch (err) {
      setError("Server unreachable");
    }
  }

  return (
    <div className="min-h-screen overflow-hidden bg-[linear-gradient(180deg,#F23200_2%,#C72C00_17%,#4A0E00_70%,#0D0D0D_100%)] flex items-center justify-center">
      <div className="w-full max-w-6xl flex items-center justify-between px-6 md:px-10 lg:px-16">
        
        {/* LEFT SIDE – Nether Fortress placeholder */}
        <div className="hidden md:block flex-1 relative h-[360px] lg:h-[420px]">
          {/* place image here later */}
        </div>

        {/* RIGHT SIDE – LOGIN CARD */}
        <div className="flex-1 flex justify-center">
          <div
            className="w-full max-w-md rounded-[32px] bg-[#1F1F1F] px-8 py-10 lg:px-10 lg:py-12
                       shadow-[0_18px_45px_rgba(0,0,0,0.7)]"
          > 
            <h1 className="text-2xl font-semibold text-center mb-6">
              Login
            </h1>

            {/* ERROR MESSAGE */}
            {error && (
              <p className="text-red-400 text-sm text-center mb-4">
                {error}
              </p>
            )}

            {/* FORM */}
            <form onSubmit={handleLogin} className="space-y-6">
              
              {/* Email */}
              <div>
                <label className="block text-sm mb-2 text-gray-200">
                  Email
                </label>
                <input
                  type="email"
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full rounded-full bg-[#2A2A2A] px-4 py-3 text-sm text-white placeholder:text-gray-400 outline-none border border-transparent focus:border-[#FF5E1E] focus:ring-2 focus:ring-[#FF5E1E]/60"
                  placeholder="Enter your email"
                />
              </div>

              {/* Password */}
              <div>
                <label className="block text-sm mb-2 text-gray-200">
                  Password
                </label>
                <input
                  type="password"
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full rounded-full bg-[#2A2A2A] px-4 py-3 text-sm text-white placeholder:text-gray-400 outline-none border border-transparent focus:border-[#FF5E1E] focus:ring-2 focus:ring-[#FF5E1E]/60"
                  placeholder="Enter your password"
                />
              </div>

              {/* LOGIN BUTTON */}
              <button
                type="submit"
                className="mt-2 w-full rounded-full bg-[#FF5E1E] py-3 text-sm font-semibold
                           text-white hover:brightness-110 transition"
              >
                Login
              </button>
            </form>

            {/* LINKS */}
            <div className="mt-6 text-xs text-gray-300 leading-relaxed">
              <p>
                Forgot your password? Click{" "}
                <button
                  type="button"
                  className="text-[#FF5E1E] hover:underline"
                >
                  here
                </button>{" "}
                to reset it.
              </p>

              <p className="mt-3">
                Don’t have an account? Create one{" "}
                <Link
                  href="/register"
                  className="text-[#FF5E1E] hover:underline"
                >
                  here
                </Link>.
              </p>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
