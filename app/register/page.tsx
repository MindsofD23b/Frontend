"use client";

import Link from "next/link";
import { useState } from "react";
import { apiFetch } from "../service/apiClient";

export default function RegisterPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

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

      window.location.href = "/login";
    } catch (err) {
      setError("Server unreachable");
      console.error("Registration error:", err);
    }
  }

  return (
    <div className="min-h-screen overflow-hidden bg-[linear-gradient(180deg,#F23200_2%,#C72C00_17%,#4A0E00_70%,#0D0D0D_100%)] flex items-center justify-center">
      <div className="w-full max-w-6xl flex items-center justify-between px-6 md:px-10 lg:px-16">
       {/* LEFT SIDE – Nether Fortress (GIF or video) */}
<div className="hidden md:block flex-1 relative h-[360px] lg:h-[420px] overflow-hidden rounded-3xl ring-1 ring-white/10">
  <img
    src="/Hungry_Lets_Go_GIF_by_Minecraft.gif"
    alt="Hungry Lets Go GIF by Minecraft"
    className="absolute inset-0 h-full w-full object-cover"
  />

  {/* Dark overlay */}
  <div className="absolute inset-0 bg-black/25" />

  {/* Optional glow gradient */}
  <div className="absolute inset-0 bg-linear-to-tr from-black/60 via-transparent to-transparent" />
</div>

        {/* RIGHT SIDE – REGISTER CARD */}
        <div className="flex-1 flex justify-center">
          <div className="w-full max-w-md rounded-4xl bg-[#1F1F1F] px-8 py-10 lg:px-10 lg:py-12 shadow-[0_18px_45px_rgba(0,0,0,0.7)]">
            <h1 className="text-2xl font-semibold text-center mb-6">
              Create Account
            </h1>

            {/* ERROR MESSAGE */}
            {error && (
              <p className="text-red-400 text-sm text-center mb-4">{error}</p>
            )}

            {/* FORM */}
            <form onSubmit={handleRegister} className="space-y-6">
              {/* Email */}
              <div>
                <label className="block text-sm mb-2 text-gray-200">Email</label>
                <input
                  type="email"
                  value={email}
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

                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full rounded-full bg-[#2A2A2A] px-4 py-3 pr-12 text-sm text-white placeholder:text-gray-400 outline-none border border-transparent focus:border-[#FF5E1E] focus:ring-2 focus:ring-[#FF5E1E]/60"
                    placeholder="Enter your password"
                    autoComplete="new-password"
                  />

                  <button
                    type="button"
                    onClick={() => setShowPassword((v) => !v)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white"
                    aria-label={showPassword ? "Hide password" : "Show password"}
                  >
                    {showPassword ? (
                      // eye-off
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-5 h-5"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c1.64 0 3.182-.369 4.547-1.03M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.774 3.162 10.066 7.5a10.523 10.523 0 01-4.293 5.568M6.228 6.228L3 3m3.228 3.228l12.544 12.544"
                        />
                      </svg>
                    ) : (
                      // eye
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-5 h-5"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.964-7.178z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                    )}
                  </button>
                </div>
              </div>

              {/* Confirm Password */}
              <div>
                <label className="block text-sm mb-2 text-gray-200">
                  Confirm Password
                </label>

                <div className="relative">
                  <input
                    type={showConfirm ? "text" : "password"}
                    value={confirm}
                    onChange={(e) => setConfirm(e.target.value)}
                    className="w-full rounded-full bg-[#2A2A2A] px-4 py-3 pr-12 text-sm text-white placeholder:text-gray-400 outline-none border border-transparent focus:border-[#FF5E1E] focus:ring-2 focus:ring-[#FF5E1E]/60"
                    placeholder="Repeat your password"
                    autoComplete="new-password"
                  />

                  <button
                    type="button"
                    onClick={() => setShowConfirm((v) => !v)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white"
                    aria-label={showConfirm ? "Hide password" : "Show password"}
                  >
                    {showConfirm ? (
                      // eye-off
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-5 h-5"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c1.64 0 3.182-.369 4.547-1.03M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.774 3.162 10.066 7.5a10.523 10.523 0 01-4.293 5.568M6.228 6.228L3 3m3.228 3.228l12.544 12.544"
                        />
                      </svg>
                    ) : (
                      // eye
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-5 h-5"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.964-7.178z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                    )}
                  </button>
                </div>
              </div>

              {/* REGISTER BUTTON */}
              <button
                type="submit"
                className="mt-2 w-full rounded-full bg-[#FF5E1E] py-3 text-sm font-semibold text-white hover:brightness-110 transition"
              >
                Register
              </button>

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
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
