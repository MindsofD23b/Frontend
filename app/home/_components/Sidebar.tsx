"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import LogoutButton from "../logoutbutton";

function NavItem({
  href,
  label,
  onClick,
  active,
  indent = false,
}: {
  href: string;
  label: string;
  onClick?: () => void;
  active?: boolean;
  indent?: boolean;
}) {
  return (
    <Link
      href={href}
      onClick={() => onClick?.()}
      className={[
        "rounded-2xl transition px-3 sm:px-4 py-2 text-sm sm:text-base block",
        indent ? "pl-6 sm:pl-7" : "",
        active
          ? "bg-[#1F1F1F] text-white"
          : "text-white/80 hover:text-white hover:bg-[#1F1F1F]",
      ].join(" ")}
      aria-current={active ? "page" : undefined}
    >
      {label}
    </Link>
  );
}

export default function Sidebar({
  homeMenuOpen,
  setHomeMenuOpen,
  onNavigate,
}: {
  homeMenuOpen: boolean; // NOTE: only used as "Home submenu expanded"
  setHomeMenuOpen: (v: boolean) => void;
  onNavigate?: () => void; // closes mobile drawer
}) {
  const pathname = usePathname();
  const router = useRouter();

  // active helpers
  const isHomeRoot = pathname === "/home";
  const isHomeSection = pathname === "/home" || pathname?.startsWith("/home/");
  const isSub = (p: string) => pathname === p;

  

  return (
    <div className="h-full w-full sm:w-[260px] rounded-3xl bg-[#2A2A2A] p-4 sm:p-5 flex flex-col">
      {/* HOME header */}
      <button
     
  type="button"
  onClick={() => {
    setHomeMenuOpen(!homeMenuOpen);
    router.push("/home");
  }}


        className={[
          "w-full text-left rounded-2xl px-3 sm:px-4 py-3 transition",
          isHomeRoot ? "bg-[#1F1F1F]" : "hover:bg-[#1F1F1F]",
        ].join(" ")}
    >
        <div className="flex items-center justify-between">
          <div className="text-white/90 text-base sm:text-lg font-semibold">
            Home
          </div>
          <div className="text-white/60 text-sm">{homeMenuOpen ? "—" : "+"}</div>
        </div>
        <div className="text-white/50 text-xs mt-1">Servers & actions</div>
      </button>

      {/* HOME submenu group */}
      <div
        className={[
          "mt-3 rounded-2xl border border-white/10 bg-[#242424] transition-all",
          homeMenuOpen ? "opacity-100 max-h-80 p-3" : "opacity-0 max-h-0 p-0 overflow-hidden",
        ].join(" ")}
      >
        {/* Group marker so it looks connected */}
        <div className="flex flex-col gap-1 border-l-2 border-white/10 pl-2">
          <NavItem
            href="/home/add-server"
            label="Add Server"
            onClick={onNavigate}
            active={isSub("/home/add-server")}
            indent
          />
          <NavItem
            href="/home/delete-server"
            label="Delete Server"
            onClick={onNavigate}
            active={isSub("/home/delete-server")}
            indent
          />
          <NavItem
            href="/home/stop-all"
            label="Stop All Servers"
            onClick={onNavigate}
            active={isSub("/home/stop-all")}
            indent
          />

          <div className="h-px bg-white/10 my-2" />

          <NavItem
            href="/home/payment"
            label="Payment Method"
            onClick={onNavigate}
            active={isSub("/home/payment")}
            indent
          />
        </div>
      </div>

      {/* Profile / About */}
      <div className="mt-6 flex flex-col gap-2 sm:gap-3">
        <NavItem
          href="/home/profile"
          label="Profile"
          onClick={onNavigate}
          active={isSub("/home/profile")}
        />
        <NavItem
          href="/home/about-us"
          label="About Us"
          onClick={onNavigate}
          active={isSub("/home/about-us")}
        />
      </div>

      {/* Logout */}
      <div className="mt-auto pt-6 flex justify-center">
        <LogoutButton />
      </div>
    </div>
  );
}
