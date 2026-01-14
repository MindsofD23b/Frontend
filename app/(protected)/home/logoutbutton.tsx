"use client";

import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { useAuthStore } from "@/app/stores/auth";

export default function LogoutButton() {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const cancelRef = useRef<HTMLButtonElement | null>(null);


  const logout = useAuthStore((s) => s.logout)

  // ESC schliesst Modal
  useEffect(() => {
    if (!open) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };

    window.addEventListener("keydown", onKeyDown);
    // Fokus auf "Cancel" für bessere UX
    setTimeout(() => cancelRef.current?.focus(), 0);

    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  const handleLogout = () => {
    
    setOpen(false);
    logout();
    router.push("/login");
  };

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="text-red-500 hover:text-red-400 text-base sm:text-lg transition"
      >
        Logout
      </button>

      {open && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
          role="dialog"
          aria-modal="true"
          aria-label="Logout confirmation"
        >
          {/* Backdrop */}
          <button
            type="button"
            className="absolute inset-0 bg-black/60"
            onClick={() => setOpen(false)}
            aria-label="Close dialog"
          />

          {/* Modal Card */}
          <div className="relative w-full max-w-[92vw] sm:max-w-md rounded-3xl border border-white/10 bg-[#1F1F1F] shadow-[0_18px_45px_rgba(0,0,0,0.8)] overflow-hidden">
            {/* Nether-ish header glow */}
            <div className="h-2 bg-[linear-gradient(90deg,#F23200_0%,#C72C00_40%,#4A0E00_75%,#0D0D0D_100%)]" />

            <div className="p-5 sm:p-6">
              <div className="flex items-start gap-3">
                {/* Icon */}
                <div className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-[#2A2A2A] border border-white/10">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-[#FF5E1E]"
                  >
                    <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
                    <polyline points="16 17 21 12 16 7" />
                    <line x1="21" y1="12" x2="9" y2="12" />
                  </svg>
                </div>

                <div className="flex-1 min-w-0">
                  <h3 className="text-base sm:text-lg font-semibold text-white">
                    Log out?
                  </h3>
                  <p className="mt-1 text-sm text-white/70 leading-relaxed">
                    Are you sure you want to log out of your account? You’ll be
                    redirected to the login page.
                  </p>
                </div>
              </div>

              <div className="mt-6 flex flex-col-reverse sm:flex-row gap-3 sm:justify-end">
                <button
                  ref={cancelRef}
                  type="button"
                  onClick={() => setOpen(false)}
                  className="w-full sm:w-auto rounded-full border border-white/15 bg-white/5 px-5 py-2 text-sm font-semibold text-white/80 hover:bg-white/10 hover:text-white transition"
                >
                  Cancel
                </button>

                <button
                  type="button"
                  onClick={handleLogout}
                  className="w-full sm:w-auto rounded-full bg-[#FF5E1E] px-5 py-2 text-sm font-semibold text-white hover:brightness-110 transition"
                >
                  Yes, log out
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
