"use client";

import { useEffect, useState } from "react";
import Sidebar from "./Sidebar";

export default function HomeShell({ children }: { children: React.ReactNode }) {
  const [homeMenuOpen, setHomeMenuOpen] = useState(false);

  useEffect(() => {
    const html = document.documentElement;
    const body = document.body;

    const prevHtmlOverflow = html.style.overflow;
    const prevBodyOverflow = body.style.overflow;
    const prevBodyBg = body.style.backgroundColor;

    html.style.overflow = "hidden";
    body.style.overflow = "hidden";
    body.style.backgroundColor = "#0D0D0D"; 

    return () => {
      html.style.overflow = prevHtmlOverflow;
      body.style.overflow = prevBodyOverflow;
      body.style.backgroundColor = prevBodyBg;
    };
  }, []);

  return (
 
    <div className="h-screen overflow-hidden bg-[linear-gradient(180deg,#F23200_2%,#C72C00_17%,#4A0E00_70%,#0D0D0D_100%)] flex items-center justify-center p-4 sm:p-6">
      <div className="w-full max-w-[1150px] h-full max-h-[min(650px,85vh)] rounded-3xl bg-[#1F1F1F] p-4 sm:p-6 shadow-2xl overflow-hidden">
        <div className="h-full w-full flex flex-col sm:flex-row gap-4 sm:gap-6 min-h-0">
          <Sidebar
            homeMenuOpen={homeMenuOpen}
            setHomeMenuOpen={setHomeMenuOpen}
          />

          <div className="flex-1 min-w-0 min-h-0 overflow-y-auto overscroll-contain flex flex-col gap-4">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
