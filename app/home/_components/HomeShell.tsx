"use client";

import { useEffect, useState } from "react";
import Sidebar from "./Sidebar";

export default function HomeShell({ children }: { children: React.ReactNode }) {
  const [homeMenuOpen, setHomeMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Tailwind "sm" is 640px, so mobile is < 640
    const mq = window.matchMedia("(max-width: 639px)");

    const update = () => {
      setIsMobile(mq.matches);
      if (!mq.matches) setHomeMenuOpen(false); // close drawer when leaving mobile
    };

    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  return (
    <div className="h-screen overflow-hidden bg-[linear-gradient(180deg,#F23200_2%,#C72C00_17%,#4A0E00_70%,#0D0D0D_100%)] flex items-center justify-center p-4 sm:p-6">
      <div className="w-full max-w-[1150px] h-full max-h-[min(650px,85vh)] rounded-3xl bg-[#1F1F1F] p-4 sm:p-6 shadow-2xl overflow-x-hidden">
        <div className="h-full w-full flex flex-col sm:flex-row gap-4 sm:gap-6 min-h-0 relative">
          {/* Burger ONLY on mobile (JS enforced) */}
          {isMobile && (
            <button
              type="button"
              onClick={() => setHomeMenuOpen(true)}
              className="absolute top-3 left-3 z-40 h-11 w-11 rounded-full bg-black/30 backdrop-blur text-white active:scale-95 transition"
              aria-label="Open menu"
              title="Open menu"
            >
              ☰
            </button>
          )}

          {/* Sidebar: normal on desktop, hidden on mobile */}
          {!isMobile && (
            <Sidebar
              homeMenuOpen={homeMenuOpen}
              setHomeMenuOpen={setHomeMenuOpen}
            />
          )}

          {/* Main content */}
          <div className="h-full flex-1 min-w-0 min-h-0 flex flex-col gap-4 overflow-y-auto overscroll-contain">
            {children}
          </div>

          {/* Drawer only on mobile */}
          {isMobile && homeMenuOpen && (
            <div className="absolute inset-0 z-50">
              <button
                className="absolute inset-0 bg-black/60"
                onClick={() => setHomeMenuOpen(false)}
                aria-label="Close menu"
              />

              <div className="absolute left-0 top-0  w-[85%] max-w-[320px] p-4">
                <div className="flex items-center justify-between mb-4">
                  <button
                    onClick={() => setHomeMenuOpen(false)}
                    className="h-10 w-10 rounded-full bg-white/10  text-white transition"
                    aria-label="Close menu"
                  >
                    ✕
                  </button>
                </div>

                <Sidebar
                  homeMenuOpen={homeMenuOpen}
                  setHomeMenuOpen={setHomeMenuOpen}
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
