"use client";

import { useState } from "react";
import Sidebar from "./Sidebar";

export default function HomeShell({ children }: { children: React.ReactNode }) {
  const [homeMenuOpen, setHomeMenuOpen] = useState(false);

  return (
    <div className="min-h-screen overflow-hidden bg-[linear-gradient(180deg,#F23200_2%,#C72C00_17%,#4A0E00_70%,#0D0D0D_100%)] flex items-center justify-center p-6">
      <div className="w-[min(1150px,95vw)] h-[min(650px,85vh)] rounded-3xl bg-[#1F1F1F] p-6 shadow-2xl">
        <div className="h-full w-full flex gap-6">
          <Sidebar homeMenuOpen={homeMenuOpen} setHomeMenuOpen={setHomeMenuOpen} />
          <div className="h-full flex-1 flex flex-col gap-4">{children}</div>
        </div>
      </div>
    </div>
  );
}
