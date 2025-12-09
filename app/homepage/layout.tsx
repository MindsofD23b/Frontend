// app/Hompage/layout.tsx
import type { ReactNode } from "react";

export default function HompageLayout({ children }: { children: ReactNode }) {
  return (
    <section className="min-h-screen flex items-center justify-center bg-[linear-gradient(180deg,#F23200_2%,#C72C00_17%,#4A0E00_70%,#0D0D0D_100%)] text-white">
      {children}
    </section>
  );
}
