"use client";

import Link from "next/link";
import { useState } from "react";
import { apiFetch } from "../service/apiClient";
import { useAuthStore } from "../stores/auth";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const setSession = useAuthStore((s) => s.setSession);

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    setError("");

    try {
      const res = await apiFetch("/auth/login", {
        method: "POST",
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error || "Login failed");
        return;
      }

      // Erwartung: Backend liefert { token: "..." } (ggf. auch email/user)
      const token = data.token;
      if (!token) {
        setError("Login response missing token");
        return;
      }

      setSession(token, data.email ?? email);

      window.location.href = "/home";
    } catch (err) {
      setError("Server unreachable");
    }
  }


  return (
<<<<<<< HEAD
    <div className="min-h-screen bg-[linear-gradient(180deg,#F23200_2%,#C72C00_17%,#4A0E00_70%,#0D0D0D_100%)]">
      <div className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-10">
        <div className="w-full max-w-6xl flex flex-col md:flex-row items-center md:items-stretch justify-between gap-10">
          {/* LEFT SIDE – Nether Fortress placeholder */}
          <div className="hidden md:block flex-1 relative min-h-[360px] lg:min-h-[420px]">
            {/* place image here later */}
          </div>

          {/* RIGHT SIDE – LOGIN CARD */}
          <div className="flex-1 flex justify-center md:justify-end">
            <div
              className="w-full max-w-md rounded-[28px] sm:rounded-[32px] bg-[#1F1F1F] px-5 sm:px-8 py-8 sm:py-10 lg:px-10 lg:py-12
                         shadow-[0_18px_45px_rgba(0,0,0,0.7)]"
            >
              <h1 className="text-xl sm:text-2xl font-semibold text-center mb-6">
=======
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

                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full rounded-full bg-[#2A2A2A] px-4 py-3 pr-12 text-sm text-white placeholder:text-gray-400 outline-none border border-transparent focus:border-[#FF5E1E] focus:ring-2 focus:ring-[#FF5E1E]/60"
                    placeholder="Enter your password"
                  />

                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white"
                  >
                    {showPassword ? (
                      // eye-off icon
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
                      // eye icon
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


              {/* LOGIN BUTTON */}
              <button
                type="submit"
                className="mt-2 w-full rounded-full bg-[#FF5E1E] py-3 text-sm font-semibold
                           text-white hover:brightness-110 transition"
              >
>>>>>>> 01862860ff9e4fde2882a130e2b8e863fd768ac5
                Login
              </h1>

              {/* ERROR MESSAGE */}
              {error && (
                <p className="text-red-400 text-sm text-center mb-4">{error}</p>
              )}

              {/* FORM */}
              <form onSubmit={handleLogin} className="space-y-5 sm:space-y-6">
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

                  <div className="relative">
                    <input
                      type={showPassword ? "text" : "password"}
                      onChange={(e) => setPassword(e.target.value)}
                      className="w-full rounded-full bg-[#2A2A2A] px-4 py-3 pr-12 text-sm text-white placeholder:text-gray-400 outline-none border border-transparent focus:border-[#FF5E1E] focus:ring-2 focus:ring-[#FF5E1E]/60"
                      placeholder="Enter your password"
                      autoComplete="current-password"
                    />

                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white"
                      aria-label={showPassword ? "Hide password" : "Show password"}
                    >
                      {showPassword ? (
                        // eye-off icon
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
                        // eye icon
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

                {/* LOGIN BUTTON */}
                <button
                  type="submit"
                  className="mt-2 w-full rounded-full bg-[#FF5E1E] py-3 text-sm font-semibold text-white hover:brightness-110 transition"
                >
                  Login
                </button>
              </form>

              {/* LINKS */}
              <div className="mt-6 text-xs text-gray-300 leading-relaxed text-center sm:text-left">
                <p>
                  Forgot your password? Click{" "}
                  <Link
                    href="/forgotpassword"
                    className="text-[#FF5E1E] hover:underline"
                  >
                    here
                  </Link>
                  .
                </p>

                <p className="mt-3">
                  Don’t have an account? Create one{" "}
                  <Link
                    href="/register"
                    className="text-[#FF5E1E] hover:underline"
                  >
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
