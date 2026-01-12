"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import LogoutButton from "../logoutbutton";

function NavItem({
  href,
  label,
  disabled,
}: {
  href: string;
  label: string;
  disabled?: boolean;
}) {
  return (
    <Link
      href={disabled ? "#" : href}
      aria-disabled={disabled ? "true" : "false"}
      className={[
        "rounded-2xl transition px-4 py-2 text-base",
        disabled
          ? "text-white/30 cursor-not-allowed pointer-events-none"
          : "text-white/80 hover:text-white hover:bg-[#1F1F1F]",
      ].join(" ")}
    >
      {label}
    </Link>
  );
}

export default function Sidebar({
  homeMenuOpen,
  setHomeMenuOpen,
}: {
  homeMenuOpen: boolean;
  setHomeMenuOpen: (v: boolean) => void;
}) {
  const pathname = usePathname();
  const router = useRouter();

  const isHomeActive = pathname === "/home" || pathname?.startsWith("/home/");
  const faded = homeMenuOpen; // when menu open -> fade profile/about

  return (
    <div className="h-full w-[260px] rounded-3xl bg-[#2A2A2A] p-5 flex flex-col">
      {/* HOME header (click toggles menu) */}
      <button
        type="button"
        onClick={() => {
          setHomeMenuOpen(!homeMenuOpen);
          router.push("/home");
        }}
        className={[
          "w-full text-left rounded-2xl px-4 py-3 transition",
          isHomeActive ? "bg-[#1F1F1F]" : "hover:bg-[#1F1F1F]",
        ].join(" ")}
      >
        <div className="flex items-center justify-between">
          <div className="text-white/90 text-lg font-semibold">Home</div>
          <div className="text-white/60 text-sm">{homeMenuOpen ? "—" : "+"}</div>
        </div>
        <div className="text-white/50 text-xs mt-1">Servers & actions</div>
      </button>

      {/* HOME submenu */}
      {homeMenuOpen && (
        <div className="mt-3 rounded-2xl border border-white/10 bg-white/5 p-3">
          <div className="flex flex-col gap-2">
            <NavItem href="/home/add-server" label="Add Server" />
            <NavItem href="/home/delete-server" label="Delete Server" />
            <NavItem href="/home/stop-all" label="Stop All Servers" />
            <div className="h-px bg-white/10 my-1" />
            <NavItem href="/home/payment" label="Payment Method" />
          </div>
        </div>
      )}

      {/* Profile / About (fade when home menu open) */}
      <div className={["mt-6 flex flex-col gap-3 transition", faded ? "opacity-30" : "opacity-100"].join(" ")}>
        <NavItem href="/home/profile" label="Profile" disabled={faded} />
        <NavItem href="/home/about-us" label="About Us" disabled={faded} />
      </div>

      {/* Logout */}
      <div className="mt-auto pt-6 flex justify-center">
        <LogoutButton />
      </div>
    </div>
  );
}
