"use client";

import { useEffect, useState } from "react";
import Sidebar from "./Sidebar";

export default function HomeShell({
  children,
  title = "Dashboard",
}: {
  children: React.ReactNode;
  title?: string;
}) {
  const [drawerOpen, setDrawerOpen] = useState(false);   // mobile drawer
  const [homeSubOpen, setHomeSubOpen] = useState(false); // Home submenu
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 639px)");
    const update = () => {
      setIsMobile(mq.matches);
      if (!mq.matches) setDrawerOpen(false);
    };
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    if (!isMobile) return;
    document.body.style.overflow = drawerOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [drawerOpen, isMobile]);

  return (
    <div className="h-screen overflow-hidden bg-[linear-gradient(180deg,#F23200_2%,#C72C00_17%,#4A0E00_70%,#0D0D0D_100%)] flex items-center justify-center p-4 sm:p-6">
      <div className="w-full max-w-[1150px] h-full max-h-[min(650px,85vh)] rounded-3xl bg-[#1F1F1F] p-4 sm:p-6 shadow-2xl overflow-hidden">
        <div className="h-full w-full flex flex-col sm:flex-row gap-4 sm:gap-6 min-h-0 relative">

          {/* DESKTOP SIDEBAR */}
          {!isMobile && (
            <Sidebar
              homeMenuOpen={homeSubOpen}
              setHomeMenuOpen={setHomeSubOpen}
            />
          )}

          {/* MAIN COLUMN */}
          <div className="h-full flex-1 min-w-0 min-h-0 flex flex-col gap-4 relative">
            {/* TOP BAR (mobile-only) */}
            <div
              className={`relative bg-[#2A2A2A] px-4 sm:px-6 py-4 flex items-center justify-center rounded-2xl ${
                isMobile ? "" : "hidden"
              }`}
            >
              {isMobile && !drawerOpen && (
                <button
                  onClick={() => setDrawerOpen(true)}
                  className="absolute left-3 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full  text-white transition active:scale-95"
                  aria-label="Open menu"
                >
                  ☰
                </button>
              )}

              <div className="text-white/90 font-semibold">{title}</div>
            </div>

            <div className="flex-1 min-h-0 overflow-y-auto overscroll-contain">
              {children}
            </div>
          </div>

          {/* MOBILE DRAWER */}
          {isMobile && (
            <>
              <div
                onClick={() => setDrawerOpen(false)}
                className={`absolute inset-0 z-40 bg-black transition-opacity duration-300 ${
                  drawerOpen
                    ? "opacity-60 pointer-events-auto"
                    : "opacity-0 pointer-events-none"
                }`}
              />

              <aside
                className={`absolute left-0 top-0 z-50 h-full w-[82%] max-w-[340px]
                bg-[#2A2A2A]
                transform transition-transform duration-300 ease-out
                ${drawerOpen ? "translate-x-0" : "-translate-x-[110%]"}`}
              >
                <div className="h-14 px-4 flex items-center justify-between border-b border-white/10">
                  <div className="text-white/90 font-semibold">Menu</div>
                  <button
                    onClick={() => setDrawerOpen(false)}
                    className="h-10 w-10 rounded-full bg-white/10 text-white ring-1 ring-white/15 transition active:scale-95"
                    aria-label="Close menu"
                  >
                    ✕
                  </button>
                </div>

                <div className="p-4 h-[calc(100%-3.5rem)] overflow-y-auto overscroll-contain">
                  <Sidebar
                    homeMenuOpen={homeSubOpen}
                    setHomeMenuOpen={setHomeSubOpen}
                    onNavigate={() => setDrawerOpen(false)}
                  />
                </div>
              </aside>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
