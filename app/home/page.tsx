"use client";

import { useState } from "react";

type Server = {
  id: string;
  name: string;
};

const SERVERS: Server[] = [
  { id: "super-earth", name: "Super Earth Survival" },
  { id: "survival", name: "Survival Minecraft World" },
  { id: "creative", name: "Creative Test World" },
];

export default function HomePage() {
  const [runningIds, setRunningIds] = useState<string[]>([]);

  const toggleRunning = (id: string) => {
    setRunningIds((prev) => (prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]));
  };

  return (
    <>
      <div className="h-20 rounded-2xl bg-[#2A2A2A] px-6 flex items-center">
        <div className="text-white text-lg font-semibold">Current Active Servers</div>
      </div>

      <div className="flex-1 rounded-2xl bg-[#2A2A2A] p-6 overflow-auto">
        <div className="flex flex-col gap-4">
          {SERVERS.map((s) => {
            const isRunning = runningIds.includes(s.id);

            return (
              <div key={s.id} className="relative w-full h-[110px] rounded-3xl overflow-hidden">
                <div
                  className="absolute inset-0 bg-center bg-cover"
                  style={{ backgroundImage: "url('/minecraft.png')" }}
                />
                <div className="absolute inset-0 bg-black/15" />

                <div className="relative h-full w-full flex items-center justify-between px-6">
                  <div className="text-white font-extrabold text-4xl leading-none drop-shadow-[0_2px_0_rgba(255,255,255,0.35)]">
                    {s.name}
                  </div>

                  <button
                    type="button"
                    onClick={() => toggleRunning(s.id)}
                    className="h-12 w-12 rounded-full bg-emerald-500 flex items-center justify-center"
                  >
                    {isRunning ? (
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
            );
          })}
        </div>
      </div>
    </>
  );
}
