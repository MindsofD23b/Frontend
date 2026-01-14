"use client";

import Link from "next/link";
import { useState } from "react";
import { apiFetch } from "../../service/apiClient";

export default function RegisterPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [error, setError] = useState("");

  async function handleRegister(e: React.FormEvent) {
    e.preventDefault();
    setError("");

    if (password !== confirm) {
      setError("Passwords do not match");
      return;
    }

    try {
      const res = await apiFetch("/auth/register", {
        method: "POST",
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error || "Registration failed");
        return;
      }

      console.log("Registered:", data);
      window.location.href = "/login";
    } catch (err) {
      setError("Server unreachable");
      console.error("Registration error:", err);
    }
  }

  return (
    <div className="min-h-screen bg-[linear-gradient(180deg,#F23200_2%,#C72C00_17%,#4A0E00_70%,#0D0D0D_100%)]">
      <div className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-10">
        <div className="w-full max-w-6xl flex flex-col md:flex-row items-center md:items-stretch justify-between gap-10">
          {/* LEFT SIDE – placeholder for fortress image */}
          <div className="hidden md:block flex-1 relative min-h-[360px] lg:min-h-[420px]">
            {/* Add animated nether fortress later */}
          </div>

          {/* RIGHT SIDE – REGISTER CARD */}
          <div className="flex-1 flex justify-center md:justify-end">
            <div className="w-full max-w-md rounded-[28px] sm:rounded-[32px] bg-[#1F1F1F] px-5 sm:px-8 py-8 sm:py-10 lg:px-10 lg:py-12 shadow-[0_18px_45px_rgba(0,0,0,0.7)]">
              <h1 className="text-xl sm:text-2xl font-semibold text-center mb-6">
                Create Account
              </h1>

              {/* ERROR MESSAGE */}
              {error && (
                <p className="text-red-400 text-sm text-center mb-4">{error}</p>
              )}

              {/* FORM */}
              <form onSubmit={handleRegister} className="space-y-5 sm:space-y-6">
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
                    autoComplete="email"
                    inputMode="email"
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
                    autoComplete="new-password"
                  />
                </div>

                {/* Confirm Password */}
                <div>
                  <label className="block text-sm mb-2 text-gray-200">
                    Confirm Password
                  </label>
                  <input
                    type="password"
                    onChange={(e) => setConfirm(e.target.value)}
                    className="w-full rounded-full bg-[#2A2A2A] px-4 py-3 text-sm text-white placeholder:text-gray-400 outline-none border border-transparent focus:border-[#FF5E1E] focus:ring-2 focus:ring-[#FF5E1E]/60"
                    placeholder="Repeat your password"
                    autoComplete="new-password"
                  />
                </div>

                {/* REGISTER BUTTON */}
                <button
                  type="submit"
                  className="mt-2 w-full rounded-full bg-[#FF5E1E] py-3 text-sm font-semibold text-white hover:brightness-110 transition"
                >
                  Register
                </button>
              </form>

              {/* LINKS */}
              <div className="mt-6 text-xs text-gray-300 leading-relaxed text-center sm:text-left">
                <p>
                  Already have an account? Login{" "}
                  <Link href="/login" className="text-[#FF5E1E] hover:underline">
                    here
                  </Link>
                  .
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
