export default function AddServerPage() {
  return (
    <>
      {/* Top Bar */}
      <div className="flex items-center gap-3">
        <div className="flex-1 h-20 rounded-2xl bg-gradient-to-r from-[#1C1C1C] to-[#232323] px-6 flex items-center justify-center shadow-inner ring-1 ring-white/10">
          <div className="text-white/90 text-lg font-semibold tracking-wide">
            Add Server
          </div>
        </div>

        <button className="h-12 w-12 rounded-full bg-gradient-to-br from-red-500 to-red-700 text-white shadow-[0_0_18px_rgba(255,60,60,0.6)] hover:scale-105 transition">
          🗑
        </button>
      </div>

      {/* Main Panel */}
      <div className="flex-1 rounded-2xl bg-black/40 backdrop-blur-xl p-6 ring-1 ring-white/10 shadow-2xl">
        <div className="h-full rounded-3xl bg-gradient-to-br from-[#161616]/80 to-[#1F1F1F]/80 p-6 ring-1 ring-white/10">
          <div className="grid grid-cols-3 gap-6 h-full">

            {/* Small */}
            <div className="rounded-3xl bg-gradient-to-b from-[#242424] to-[#1A1A1A] p-6 flex flex-col ring-1 ring-orange-500/20 shadow-[0_0_25px_rgba(255,120,40,0.15)] hover:shadow-[0_0_35px_rgba(255,120,40,0.35)] transition">
              <h3 className="text-center text-white font-semibold mb-4 tracking-wide">
                Small Package
              </h3>

              <div className="text-white/70 text-sm space-y-1">
                <div>16GB RAM</div>
                <div>Free IP</div>
                <div>8 Players</div>
                <div>...</div>
              </div>

              <div className="mt-auto flex justify-center pt-6">
                <button className="rounded-full px-7 py-2 bg-gradient-to-r from-orange-400 to-orange-600 text-white font-semibold shadow-[0_0_18px_rgba(255,140,60,0.6)] hover:scale-105 transition">
                  9.99 CHF
                </button>
              </div>
            </div>

            {/* Big (Primary / Recommended) */}
            <div className="rounded-3xl bg-gradient-to-b from-[#262626] to-[#1C1C1C] p-6 flex flex-col ring-2 ring-red-500/40 shadow-[0_0_35px_rgba(255,60,60,0.35)] hover:shadow-[0_0_45px_rgba(255,60,60,0.6)] transition relative">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-red-500 px-4 py-1 text-xs font-semibold text-white shadow-[0_0_15px_rgba(255,60,60,0.8)]">
                Recommended
              </div>

              <h3 className="text-center text-white font-semibold mb-4 tracking-wide mt-3">
                Big Package
              </h3>

              <div className="text-white/70 text-sm space-y-1">
                <div>32GB RAM</div>
                <div>Free IP</div>
                <div>8 Players</div>
                <div>...</div>
              </div>

              <div className="mt-auto flex justify-center pt-6">
                <button className="rounded-full px-7 py-2 bg-gradient-to-r from-red-500 to-red-700 text-white font-semibold shadow-[0_0_22px_rgba(255,60,60,0.7)] hover:scale-105 transition">
                  19.99 CHF
                </button>
              </div>
            </div>

            {/* Custom (Neutral, no new color) */}
            <div className="rounded-3xl bg-gradient-to-b from-[#222222] to-[#181818] p-6 flex flex-col ring-1 ring-white/15 shadow-[0_0_20px_rgba(255,255,255,0.08)] hover:ring-white/30 transition">
              <h3 className="text-center text-white font-semibold mb-4 tracking-wide">
                Custom
              </h3>

              <div className="text-white/70 text-sm space-y-1">
                <div>Free IP</div>
                <div>Custom RAM</div>
                <div>...</div>
              </div>

              <div className="mt-auto flex justify-center pt-6">
                <button className="rounded-full px-7 py-2 bg-white/10 hover:bg-white/20 text-white font-semibold ring-1 ring-white/20 transition">
                  Customize
                </button>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
}
