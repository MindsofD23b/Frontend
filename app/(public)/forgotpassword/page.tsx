"use client";

import Link from "next/link";
import { useState } from "react";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  async function handleForgotPassword(e: React.FormEvent) {
    e.preventDefault();
    setError("");

    try {
      const res = await fetch("/auth/forgot-password", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error || "Request failed");
        return;
      }

      console.log("Reset email sent:", data);
    } catch (err) {
      setError("Server unreachable");
    }
  }

  return (
    <div className="min-h-screen overflow-hidden bg-[linear-gradient(180deg,#F23200_2%,#C72C00_17%,#4A0E00_70%,#0D0D0D_100%)] flex items-center justify-center">
      <div className="w-full max-w-6xl flex items-center justify-between px-6 md:px-10 lg:px-16">
        
        {/* LEFT SIDE – placeholder */}
        <div className="hidden md:block flex-1 relative h-[360px] lg:h-[420px]" />

        {/* RIGHT SIDE – CARD */}
        <div className="flex-1 flex justify-center">
          <div
            className="w-full max-w-md rounded-[32px] bg-[#1F1F1F] px-8 py-10 lg:px-10 lg:py-12
                       shadow-[0_18px_45px_rgba(0,0,0,0.7)]"
          > 
            <h1 className="text-2xl font-semibold text-center mb-3">
              Forgot your password?
            </h1>

            <p className="text-sm text-gray-300 text-center mb-6 leading-relaxed">
              Enter your email address and we’ll send you a link to reset your password.
            </p>

            {/* ERROR MESSAGE */}
            {error && (
              <p className="text-red-400 text-sm text-center mb-4">
                {error}
              </p>
            )}

            {/* FORM */}
            <form onSubmit={handleForgotPassword} className="space-y-6">
              
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

              {/* BUTTON */}
              <button
                type="submit"
                className="mt-2 w-full rounded-full bg-[#FF5E1E] py-3 text-sm font-semibold
                           text-white hover:brightness-110 transition"
              >
                Send reset link
              </button>
            </form>

            {/* BACK TO LOGIN */}
            <div className="mt-6 text-xs text-gray-300 text-center">
              <Link
                href="/login"
                className="text-[#FF5E1E] hover:underline"
              >
                Back to login
              </Link>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
