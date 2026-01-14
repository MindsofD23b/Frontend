"use client";

import { useApp } from "../_state/AppProvider";

function TrashIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      className="text-white"
    >
      <path
        d="M3 6h18"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M8 6V4h8v2"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M6 6l1 16h10l1-16"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M10 11v6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M14 11v6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default function DeleteServerPage() {
  const { servers, deleteServer } = useApp();

  return (
    <>
      {/* HEADER */}
      <div className="relative rounded-2xl bg-[#2A2A2A]  px-4 sm:px-6 py-4 sm:py-5 mb-4 sm:mb-6 flex items-center justify-center">
        <div className="text-white/90 text-base sm:text-lg font-semibold tracking-wide">
          Delete Server
        </div>
      </div>


      {/* CONTENT */}
      <div className="flex-1 rounded-2xl bg-[#2A2A2A] p-4 sm:p-6 overflow-auto">
        <p className="text-sm text-white/70 mb-4">
          Select a server to remove it from your list. This is a UI action (no
          backend deletion yet).
        </p>

        <div className="space-y-3">
          {servers.map((s) => (
            <div
              key={s.id}
              className="rounded-2xl border border-white/10 bg-white/5 p-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4"
            >
              <div className="min-w-0">
                <div className="text-white font-semibold truncate">{s.name}</div>
                <div className="text-xs text-white/60 mt-1 wrap-break-words">
                  {s.minecraftVersion}
                </div>
              </div>

              <div className="flex justify-end">
                <button
                  type="button"
                  onClick={() => deleteServer(s.id)}
                  className="h-10 w-10 rounded-full bg-red-500/80 hover:bg-red-500 flex items-center justify-center transition shrink-0"
                  aria-label="Delete server"
                >
                  <TrashIcon />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
