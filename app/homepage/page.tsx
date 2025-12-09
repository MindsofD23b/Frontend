"use client";

import { useState } from "react";

type Server = {
  id: string;
  name: string;
  game: string;
  version: string;
  ip: string;
  players: string;
  tps: string;
  ping: string;
  uptime: string;
  ram: string;
};

const SERVERS: Server[] = [
  {
    id: "super-earth",
    name: "Super Earth Survival",
    game: "Minecraft Java",
    version: "1.20.4 (Paper)",
    ip: "survival.superearth.net:25565",
    players: "8 / 40",
    tps: "19.9 / 20",
    ping: "32 ms",
    uptime: "01:23:54",
    ram: "4.1 GB / 8 GB",
  },
  {
    id: "survival",
    name: "Survival Minecraft World",
    game: "Minecraft Java",
    version: "1.20.4 (Paper)",
    ip: "survival2.superearth.net:25565",
    players: "12 / 60",
    tps: "19.5 / 20",
    ping: "45 ms",
    uptime: "03:12:18",
    ram: "5.3 GB / 10 GB",
  },
  {
    id: "creative",
    name: "Creative Test World",
    game: "Minecraft Java",
    version: "1.20.4",
    ip: "creative.superearth.net:25565",
    players: "3 / 20",
    tps: "20 / 20",
    ping: "25 ms",
    uptime: "00:47:09",
    ram: "2.0 GB / 4 GB",
  },
];

export default function Homepage() {
  const [selectedId, setSelectedId] = useState<string>(SERVERS[0].id);
  const selectedServer = SERVERS.find((s) => s.id === selectedId)!;

  return (
    <div className="min-h-screen bg-[linear-gradient(180deg,#F23200_2%,#C72C00_17%,#4A0E00_70%,#0D0D0D_100%)] flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-7xl rounded-[40px] bg-[#1F1F1F] p-8 lg:p-10 shadow-[0_28px_80px_rgba(0,0,0,0.9)] flex gap-7 lg:gap-10">
        {/* SIDEBAR */}
        <aside className="w-64 rounded-[28px] bg-[#141414] px-6 py-7 flex flex-col justify-between">
          <div className="space-y-5 text-sm">
            <div>
              <p className="font-semibold mb-3 text-gray-100">
                Current Active Servers
              </p>
              <div className="rounded-[999px] border border-[#2A2A2A] px-3 py-3">
                <ul className="space-y-1 text-gray-300">
                  <li className="text-white">Current Active Servers</li>
                  <li>Add Server</li>
                  <li>Delete Server</li>
                  <li>Stop All Servers</li>
                </ul>
              </div>
            </div>

            <div className="pt-2 space-y-1 text-gray-300">
              <p>Profile</p>
              <p>About Us</p>
            </div>
          </div>

          <button
            type="button"
            className="text-xs font-semibold text-[#FF5E1E] hover:underline"
          >
            Logout
          </button>
        </aside>

        {/* MAIN AREA */}
        <main className="flex-1 rounded-[28px] bg-[#141414] px-7 py-6 flex flex-col gap-5">
          {/* HEADER BAR */}
          <div className="flex items-center justify-between rounded-[999px] bg-[#1F1F1F] px-6 py-3">
            <h2 className="text-lg lg:text-xl font-semibold text-gray-100">
              Current Active Servers
            </h2>

            <div className="flex items-center gap-3">
              {/* Add button (Icon kommt von dir) */}
              <button
                type="button"
                className="h-10 w-10 rounded-full bg-emerald-500 flex items-center justify-center text-xl font-bold shadow-[0_0_20px_rgba(0,255,120,0.45)]"
              >
                +
              </button>

              {/* Delete button (Icon kommt von dir) */}
              <button
                type="button"
                className="h-10 w-10 rounded-full bg-red-500 flex items-center justify-center text-lg shadow-[0_0_20px_rgba(255,80,80,0.45)]"
              >
                🗑
              </button>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row gap-5 lg:gap-6 flex-1">
            {/* SERVER LIST */}
            <section className="lg:w-[45%] rounded-[24px] bg-[#1F1F1F] px-4 py-4">
              <div className="max-h-[300px] space-y-4 overflow-y-auto pr-2 custom-scrollbar">
                {SERVERS.map((server) => {
                  const isActive = server.id === selectedId;
                  return (
                    <button
                      key={server.id}
                      type="button"
                      onClick={() => setSelectedId(server.id)}
                      className={`w-full flex items-center gap-3 rounded-[24px] px-3 py-2 transition
                        ${
                          isActive
                            ? "bg-[#262626] ring-2 ring-[#FF5E1E]/80"
                            : "bg-[#202020] hover:bg-[#262626]"
                        }`}
                    >
                      {/* Green pill */}
                      <div className="h-16 flex-1 rounded-[24px] bg-gradient-to-r from-[#00A62E] to-[#27D849] flex items-center px-4 shadow-[0_0_25px_rgba(0,200,50,0.4)]">
                        <span className="text-sm font-semibold text-white truncate">
                          {server.name}
                        </span>
                      </div>

                      {/* Play/Pause button placeholder */}
                      <div className="h-11 w-11 rounded-full bg-[#00C853] flex items-center justify-center text-lg text-white shadow-[0_0_18px_rgba(0,255,120,0.6)]">
                        ▶
                      </div>
                    </button>
                  );
                })}
              </div>
            </section>

            {/* DETAILS PANEL */}
            <section className="flex-1 rounded-[24px] bg-[#1F1F1F] px-5 py-5 flex flex-col gap-4">
              {/* Banner */}
              <div className="h-32 rounded-[26px] bg-[#2A2A2A] overflow-hidden mb-2 flex items-center justify-center">
                {/* Ersetze das durch dein echtes Bild */}
                {/* <Image src="/banners/super-earth.jpg" ... /> */}
                <span className="text-sm text-gray-300">
                  Banner for {selectedServer.name}
                </span>
              </div>

              {/* Info grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-3 text-xs sm:text-sm text-gray-200">
                <div>
                  <p className="text-[11px] uppercase tracking-wide text-gray-500">
                    Server Name
                  </p>
                  <p className="mt-1 text-white">{selectedServer.name}</p>
                </div>

                <div>
                  <p className="text-[11px] uppercase tracking-wide text-gray-500">
                    Spieler
                  </p>
                  <p className="mt-1 text-white">{selectedServer.players}</p>
                </div>

                <div>
                  <p className="text-[11px] uppercase tracking-wide text-gray-500">
                    Spiel / Version
                  </p>
                  <p className="mt-1 text-white">
                    {selectedServer.game} {selectedServer.version}
                  </p>
                </div>

                <div>
                  <p className="text-[11px] uppercase tracking-wide text-gray-500">
                    TPS
                  </p>
                  <p className="mt-1 text-white">{selectedServer.tps}</p>
                </div>

                <div>
                  <p className="text-[11px] uppercase tracking-wide text-gray-500">
                    IP
                  </p>
                  <p className="mt-1 text-white">{selectedServer.ip}</p>
                </div>

                <div>
                  <p className="text-[11px] uppercase tracking-wide text-gray-500">
                    Ping (Durchschnitt)
                  </p>
                  <p className="mt-1 text-white">{selectedServer.ping}</p>
                </div>

                <div>
                  <p className="text-[11px] uppercase tracking-wide text-gray-500">
                    Uptime
                  </p>
                  <p className="mt-1 text-white">{selectedServer.uptime}</p>
                </div>

                <div>
                  <p className="text-[11px] uppercase tracking-wide text-gray-500">
                    RAM-Nutzung
                  </p>
                  <p className="mt-1 text-white">{selectedServer.ram}</p>
                </div>
              </div>
            </section>
          </div>
        </main>
      </div>
    </div>
  );
}
