"use client";

import { useApp } from "./_state/AppProvider";

export default function HomePage() {
  const { servers, setRunning } = useApp();

  return (
    <>
      <div className="h-20 rounded-2xl bg-[#2A2A2A] px-6 flex items-center">
        <div className="text-white text-lg font-semibold">Current Servers</div>
      </div>

      <div className="flex-1 rounded-2xl bg-[#2A2A2A] p-6 overflow-auto">
        <div className="flex flex-col gap-4">
          {servers.map((s) => (
            <div key={s.id} className="relative w-full h-[110px] rounded-3xl overflow-hidden">
              <div
                className="absolute inset-0 bg-center bg-cover"
                style={{ backgroundImage: "url('/minecraft.png')" }}
              />
              <div className="absolute inset-0 bg-black/20" />

              <div className="relative h-full w-full flex items-center justify-between px-6">
                <div>
                  <div className="text-white font-extrabold text-3xl leading-none drop-shadow-[0_2px_0_rgba(255,255,255,0.25)]">
                    {s.name}
                  </div>
                  <div className="mt-2 text-xs text-white/70">
                    {s.version} • {s.region} • {s.ramGb}GB RAM • {s.cpuCores} CPU • Max {s.maxPlayers} players
                    {s.modded ? " • Modded" : ""}
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => setRunning(s.id, !s.running)}
                  className={[
                    "h-12 w-12 rounded-full flex items-center justify-center transition",
                    s.running ? "bg-emerald-500 hover:brightness-110" : "bg-emerald-500/80 hover:brightness-110",
                  ].join(" ")}
                  aria-label={s.running ? "Stop server" : "Start server"}
                >
                  {s.running ? (
                    <div className="flex gap-1">
                      <div className="h-5 w-1.5 bg-white rounded-sm" />
                      <div className="h-5 w-1.5 bg-white rounded-sm" />
                    </div>
                  ) : (
                    <div
                      className="w-0 h-0 ml-1"
                      style={{
                        borderTop: "10px solid transparent",
                        borderBottom: "10px solid transparent",
                        borderLeft: "16px solid white",
                      }}
                    />
                  )}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
