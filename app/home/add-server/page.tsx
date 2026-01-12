"use client";

import { useRouter } from "next/navigation";

function Chip({ text }: { text: string }) {
  return (
    <span className="inline-flex items-center rounded-full bg-black/30 px-3 py-1 text-xs text-white/70 ring-1 ring-white/10">
      {text}
    </span>
  );
}

export default function AddServerPage() {
  const router = useRouter();

  const goCheckout = (plan: "small" | "big" | "custom") => {
    router.push(`/home/checkout-${plan}`);
  };

  return (
    <>
      {/* Top Bar */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
        <div className="flex-1 h-auto sm:h-20 rounded-2xl bg-gradient-to-r from-[#1C1C1C] to-[#232323] px-4 sm:px-6 py-4 sm:py-0 flex items-center justify-center shadow-inner ring-1 ring-white/10">
          <div className="text-white/90 text-base sm:text-lg font-semibold tracking-wide">
            Add Server
          </div>
        </div>

        {/* optional icon button (currently not wired) */}
        <button
          type="button"
          className="h-11 sm:h-12 w-full sm:w-12 rounded-full bg-gradient-to-br from-red-500 to-red-700 text-white shadow-[0_0_18px_rgba(255,60,60,0.6)] hover:scale-[1.02] transition"
          aria-label="Delete server (not connected)"
          title="Delete server (not connected)"
        >
          🗑
        </button>
      </div>

      {/* Main Panel */}
      <div className="flex-1 rounded-2xl bg-black/40 backdrop-blur-xl p-4 sm:p-6 ring-1 ring-white/10 shadow-2xl">
        <div className="h-full rounded-3xl bg-gradient-to-br from-[#161616]/80 to-[#1F1F1F]/80 p-4 sm:p-6 ring-1 ring-white/10">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 h-full">
            {/* Small */}
            <div className="rounded-3xl bg-gradient-to-b from-[#242424] to-[#1A1A1A] p-4 sm:p-6 flex flex-col ring-1 ring-orange-500/20 shadow-[0_0_25px_rgba(255,120,40,0.15)] hover:shadow-[0_0_35px_rgba(255,120,40,0.35)] transition min-h-[520px]">
              {/* Header fixed */}
              <div className="flex items-start justify-between gap-3">
                <h3 className="text-white font-semibold tracking-wide">
                  Small Package
                </h3>
                <span className="shrink-0 rounded-full bg-orange-500/20 px-3 py-1 text-xs text-orange-200 ring-1 ring-orange-400/30">
                  Starter
                </span>
              </div>

              <p className="mt-2 text-sm text-white/60 leading-relaxed">
                Best for a small friend group. Simple, stable, and cheap –
                perfect for survival worlds.
              </p>

              {/* Scroll area */}
              <div className="mt-4 flex-1 overflow-auto pr-2 space-y-4">
                <div className="grid gap-2 text-sm text-white/70">
                  <div className="flex items-center justify-between">
                    <span>RAM</span>
                    <span className="text-white font-semibold">16 GB</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>CPU</span>
                    <span className="text-white font-semibold">2 vCores</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Storage</span>
                    <span className="text-white font-semibold">30 GB SSD</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Players</span>
                    <span className="text-white font-semibold">Up to 8</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  <Chip text="Free IP" />
                  <Chip text="Daily Backups" />
                  <Chip text="Vanilla / Paper" />
                  <Chip text="Basic DDoS" />
                </div>

                <div className="rounded-2xl bg-white/5 ring-1 ring-white/10 p-4">
                  <div className="text-xs text-white/50">Included</div>
                  <ul className="mt-2 text-sm text-white/70 space-y-1">
                    <li>• 1-click server install</li>
                    <li>• Basic console access</li>
                    <li>• Auto restart on crash</li>
                    <li>• Starter monitoring</li>
                    <li>• Community presets</li>
                    <li>• Basic file manager</li>
                  </ul>
                </div>
              </div>

              {/* Footer fixed */}
              <div className="pt-4">
                <div className="flex justify-center">
                  <button
                    onClick={() =>
                      router.push(
                        "https://buy.stripe.com/test_bJe7sKcwHfMU4S8b098Vi00"
                      )
                    }
                    className="w-full sm:w-auto rounded-full px-7 py-2 bg-gradient-to-r from-orange-400 to-orange-600 text-white font-semibold shadow-[0_0_18px_rgba(255,140,60,0.6)] hover:scale-[1.02] transition"
                  >
                    9.99 CHF
                  </button>
                </div>

                <div className="mt-3 text-center text-xs text-white/40">
                  Good for: survival, small SMP, chill sessions
                </div>
              </div>
            </div>

            {/* Big */}
            <div className="rounded-3xl bg-gradient-to-b from-[#262626] to-[#1C1C1C] p-4 sm:p-6 flex flex-col ring-2 ring-red-500/40 shadow-[0_0_35px_rgba(255,60,60,0.35)] hover:shadow-[0_0_45px_rgba(255,60,60,0.6)] transition relative min-h-[520px]">
              {/* Recommended badge fixed */}
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-red-500 px-4 py-1 text-xs font-semibold text-white shadow-[0_0_15px_rgba(255,60,60,0.8)]">
                Recommended
              </div>

              {/* Header fixed */}
              <div className="flex items-start justify-between mt-3 gap-3">
                <h3 className="text-white font-semibold tracking-wide">
                  Big Package
                </h3>
                <span className="shrink-0 rounded-full bg-red-500/20 px-3 py-1 text-xs text-red-200 ring-1 ring-red-400/30">
                  Performance
                </span>
              </div>

              <p className="mt-2 text-sm text-white/60 leading-relaxed">
                Built for active communities. More headroom, better stability
                under load, and smoother redstone.
              </p>

              {/* Scroll bar */}
              <div
                className="mt-4 flex-1 overflow-auto pr-2 space-y-4
                scrollbar-thin
                scrollbar-thumb-black/40
                scrollbar-track-transparent
                hover:scrollbar-thumb-black/60"
              >
                {/* Scroll area */}
                <div className="grid gap-2 text-sm text-white/70">
                  <div className="flex items-center justify-between">
                    <span>RAM</span>
                    <span className="text-white font-semibold">32 GB</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>CPU</span>
                    <span className="text-white font-semibold">4 vCores</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Storage</span>
                    <span className="text-white font-semibold">80 GB NVMe</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Players</span>
                    <span className="text-white font-semibold">Up to 20</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  <Chip text="Free IP" />
                  <Chip text="Hourly Backups" />
                  <Chip text="Plugins / Mods" />
                  <Chip text="Priority CPU" />
                  <Chip text="Advanced DDoS" />
                  <Chip text="Live Monitoring" />
                </div>

                <div className="rounded-2xl bg-white/5 ring-1 ring-white/10 p-4">
                  <div className="text-xs text-white/50">Included</div>
                  <ul className="mt-2 text-sm text-white/70 space-y-1">
                    <li>• Full panel access + live stats</li>
                    <li>• Scheduled restarts</li>
                    <li>• One-click modpack installer</li>
                    <li>• Faster support response</li>
                    <li>• Better performance under load</li>
                    <li>• More stable for big builds</li>
                  </ul>
                </div>
              </div>

              {/* Footer fixed */}
              <div className="pt-4">
                <div className="flex justify-center">
                  <button
                    onClick={() => goCheckout("big")}
                    className="w-full sm:w-auto rounded-full px-7 py-2 bg-gradient-to-r from-red-500 to-red-700 text-white font-semibold shadow-[0_0_22px_rgba(255,60,60,0.7)] hover:scale-[1.02] transition"
                  >
                    19.99 CHF
                  </button>
                </div>

                <div className="mt-3 text-center text-xs text-white/40">
                  Good for: communities, modpacks, bigger SMPs
                </div>
              </div>
            </div>

            {/* Custom */}
            <div className="rounded-3xl bg-gradient-to-b from-[#222222] to-[#181818] p-4 sm:p-6 flex flex-col ring-1 ring-white/15 shadow-[0_0_20px_rgba(255,255,255,0.08)] hover:ring-white/30 transition min-h-[520px]">
              {/* Header fixed */}
              <div className="flex items-start justify-between gap-3">
                <h3 className="text-white font-semibold tracking-wide">
                  Custom
                </h3>
                <span className="shrink-0 rounded-full bg-white/10 px-3 py-1 text-xs text-white/70 ring-1 ring-white/15">
                  Build your own
                </span>
              </div>

              <p className="mt-2 text-sm text-white/60 leading-relaxed">
                Choose exactly what you need. Scale players, RAM, CPU and
                storage to match your world.
              </p>

              {/* Scroll area */}
              <div className="mt-4 flex-1 overflow-auto pr-2 space-y-4">
                <div className="rounded-2xl bg-white/5 ring-1 ring-white/10 p-4">
                  <div className="text-xs text-white/50">Customizable</div>
                  <ul className="mt-2 text-sm text-white/70 space-y-1">
                    <li>• Player slots</li>
                    <li>• RAM / CPU / Storage</li>
                    <li>• Region & version</li>
                    <li>• Modpacks / plugins / configs</li>
                    <li>• Backups frequency</li>
                    <li>• Advanced performance presets</li>
                  </ul>
                </div>

                <div className="flex flex-wrap gap-2">
                  <Chip text="Free IP" />
                  <Chip text="Custom Backups" />
                  <Chip text="Choose Region" />
                  <Chip text="Advanced Config" />
                  <Chip text="Modpacks" />
                </div>

                <div className="rounded-2xl bg-gradient-to-r from-[#0f0f0f] to-[#1a1a1a] ring-1 ring-white/10 p-4">
                  <div className="text-xs text-white/50">Perfect for</div>
                  <p className="mt-2 text-sm text-white/70">
                    Networks, special modpacks, performance-heavy worlds, or
                    anything that needs a tailored setup.
                  </p>
                </div>
              </div>

              {/* Footer fixed */}
              <div className="pt-4">
                <div className="flex justify-center">
                  <button
                    onClick={() => goCheckout("custom")}
                    className="w-full sm:w-auto rounded-full px-7 py-2 bg-white/10 hover:bg-white/20 text-white font-semibold ring-1 ring-white/20 transition"
                  >
                    Customize
                  </button>
                </div>

                <div className="mt-3 text-center text-xs text-white/40">
                  Good for: custom needs, scaling, special setups
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
``
