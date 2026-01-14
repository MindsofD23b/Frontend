"use client";

import { apiFetch } from "@/app/service/apiClient";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function CheckoutBigPage() {
  const router = useRouter();

  // BIG package defaults (you can change these)
  const [serverName, setServerName] = useState("My Minecraft Server");
  const [version, setVersion] = useState("1.20.4");
  const [mode, setMode] = useState<"survival" | "creative" | "adventure">("survival");
  const [difficulty, setDifficulty] = useState<"peaceful" | "easy" | "normal" | "hard">("normal");
  const [maxPlayers, setMaxPlayers] = useState(8); // big plan says 8 players
  const [viewDistance, setViewDistance] = useState(10);

  const [pvp, setPvp] = useState(true);
  const [onlineMode, setOnlineMode] = useState(true);
  const [enableWhitelist, setEnableWhitelist] = useState(true);
  const [whitelistText, setWhitelistText] = useState("Blackpatrickstar"); // comma separated
  const [seed, setSeed] = useState<string>("0");

  const memory = "16G"; // BIG plan memory fixed
  const eula = true;

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const goPayment = async () => {
    setLoading(true);
    setError(null);

    // turn "a,b,c" into ["a","b","c"]
    const whitelist = enableWhitelist
      ? whitelistText
        .split(",")
        .map((x) => x.trim())
        .filter(Boolean)
      : [];

    // seed must be number (your backend expects number)
    const seedNumber = Number(seed);
    const safeSeed = Number.isFinite(seedNumber) ? seedNumber : 0;

    try {
      const res = await apiFetch("/servers", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          serverName,
          eula,
          version,
          mode,
          difficulty,
          maxPlayers,
          viewDistance,
          pvp,
          enableWhiteList: enableWhitelist,
          whitelist,
          onlineMode,
          seed: safeSeed,
          memory, // fixed by plan
        }),
      });

      // if your apiFetch already throws on non-2xx, this is enough
      // otherwise you can check res.ok or read JSON depending on your apiFetch implementation

      // Example: redirect after creation
      router.push("/home/servers");
    } catch (err: any) {
      setError(err?.message ?? "Failed to create server.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="h-full flex flex-col gap-4">
      {/* HEADER */}
      <div className="relative rounded-2xl bg-[#2A2A2A] px-4 sm:px-6 py-4 sm:py-5 mb-4 sm:mb-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
          {/* Title */}
          <div className="text-white/90 text-base sm:text-lg font-semibold tracking-wide">
            Checkout: Big Package
          </div>

          {/* Back link */}
          <Link
            href="/home/add-server"
            className="text-white/70 hover:text-white text-sm sm:text-base"
          >
            Back
          </Link>
        </div>
      </div>

      {/* CONTENT */}
      <div className="flex-1 rounded-2xl bg-[#2A2A2A] p-4 sm:p-6 text-white/80">
        <div className="text-lg sm:text-xl font-semibold text-white">
          19.99 CHF / month
        </div>

        <div className="mt-3 space-y-1 text-sm sm:text-base text-white/70">
          <div>• 32GB RAM</div>
          <div>• Free IP</div>
          <div>• 8 Players</div>
        </div>

        {/* SETTINGS */}
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Server Name */}
          <div>
            <label className="block text-white/80 text-sm mb-1">Server Name</label>
            <input
              value={serverName}
              onChange={(e) => setServerName(e.target.value)}
              className="w-full rounded-xl bg-[#1f1f1f] ring-1 ring-white/10 px-4 py-3 text-white outline-none"
              placeholder="My Minecraft Server"
            />
          </div>

          {/* Version */}
          <div>
            <label className="block text-white/80 text-sm mb-1">Version</label>
            <select
              value={version}
              onChange={(e) => setVersion(e.target.value)}
              className="w-full rounded-xl bg-[#1f1f1f] ring-1 ring-white/10 px-4 py-3 text-white outline-none"
            >
              <option value="1.20.4">1.20.4</option>
              <option value="1.21">1.21</option>
              <option value="1.19.4">1.19.4</option>
            </select>
          </div>

          {/* Mode */}
          <div>
            <label className="block text-white/80 text-sm mb-1">Gamemode</label>
            <select
              value={mode}
              onChange={(e) => setMode(e.target.value as any)}
              className="w-full rounded-xl bg-[#1f1f1f] ring-1 ring-white/10 px-4 py-3 text-white outline-none"
            >
              <option value="survival">Survival</option>
              <option value="creative">Creative</option>
              <option value="adventure">Adventure</option>
            </select>
          </div>

          {/* Difficulty */}
          <div>
            <label className="block text-white/80 text-sm mb-1">Difficulty</label>
            <select
              value={difficulty}
              onChange={(e) => setDifficulty(e.target.value as any)}
              className="w-full rounded-xl bg-[#1f1f1f] ring-1 ring-white/10 px-4 py-3 text-white outline-none"
            >
              <option value="peaceful">Peaceful</option>
              <option value="easy">Easy</option>
              <option value="normal">Normal</option>
              <option value="hard">Hard</option>
            </select>
          </div>

          {/* Max Players */}
          <div>
            <label className="block text-white/80 text-sm mb-1">Max Players</label>
            <input
              type="number"
              min={1}
              max={64}
              value={maxPlayers}
              onChange={(e) => setMaxPlayers(Number(e.target.value))}
              className="w-full rounded-xl bg-[#1f1f1f] ring-1 ring-white/10 px-4 py-3 text-white outline-none"
            />
            <div className="text-xs text-white/50 mt-1">Big plan default is 8.</div>
          </div>

          {/* View Distance */}
          <div>
            <label className="block text-white/80 text-sm mb-1">View Distance</label>
            <input
              type="number"
              min={2}
              max={32}
              value={viewDistance}
              onChange={(e) => setViewDistance(Number(e.target.value))}
              className="w-full rounded-xl bg-[#1f1f1f] ring-1 ring-white/10 px-4 py-3 text-white outline-none"
            />
          </div>

          {/* Seed */}
          <div>
            <label className="block text-white/80 text-sm mb-1">Seed</label>
            <input
              value={seed}
              onChange={(e) => setSeed(e.target.value)}
              className="w-full rounded-xl bg-[#1f1f1f] ring-1 ring-white/10 px-4 py-3 text-white outline-none"
              placeholder="0"
            />
          </div>

          {/* Memory (read only) */}
          <div>
            <label className="block text-white/80 text-sm mb-1">Memory</label>
            <input
              value={memory}
              readOnly
              className="w-full rounded-xl bg-[#141414] ring-1 ring-white/10 px-4 py-3 text-white/60 outline-none cursor-not-allowed"
            />
          </div>
        </div>

        {/* Toggles */}
        <div className="mt-6 space-y-3">
          <Toggle label="PvP" checked={pvp} onChange={setPvp} />
          <Toggle label="Online Mode (cracked = OFF)" checked={onlineMode} onChange={setOnlineMode} />
          <Toggle label="Enable Whitelist" checked={enableWhitelist} onChange={setEnableWhitelist} />

          {enableWhitelist && (
            <div className="mt-2">
              <label className="block text-white/80 text-sm mb-1">Whitelist (comma separated)</label>
              <input
                value={whitelistText}
                onChange={(e) => setWhitelistText(e.target.value)}
                className="w-full rounded-xl bg-[#1f1f1f] ring-1 ring-white/10 px-4 py-3 text-white outline-none"
                placeholder="Steve, Alex, Blackpatrickstar"
              />
            </div>
          )}
        </div>

        {/* Error */}
        {error && (
          <div className="mt-4 rounded-xl bg-red-500/15 ring-1 ring-red-500/30 px-4 py-3 text-red-200 text-sm">
            {error}
          </div>
        )}

        <button
          onClick={goPayment}
          disabled={loading}
          className="mt-6 w-full sm:w-auto rounded-xl bg-red-600 px-5 py-3 font-semibold text-white hover:bg-red-500 transition disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {loading ? "Creating..." : "Create Server"}
        </button>
      </div>
    </div>
  );
}

function Toggle({
  label,
  checked,
  onChange,
}: {
  label: string;
  checked: boolean;
  onChange: (v: boolean) => void;
}) {
  return (
    <label className="flex items-center justify-between gap-3 rounded-xl bg-[#1f1f1f] ring-1 ring-white/10 px-4 py-3">
      <span className="text-white/80">{label}</span>
      <input
        type="checkbox"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
        className="h-5 w-5"
      />
    </label>
  );
}
