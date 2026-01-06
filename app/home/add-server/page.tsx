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

        <button className="h-12 w-12 rounded-full bg-gradient-to-br from-red-500 to-red-700 text-white shadow-lg hover:scale-105 transition">
          🗑
        </button>
      </div>

      {/* Main Panel */}
      <div className="flex-1 rounded-2xl bg-black/40 backdrop-blur-xl p-6 ring-1 ring-white/10 shadow-2xl">
        <div className="h-full rounded-3xl bg-gradient-to-br from-[#161616]/80 to-[#1F1F1F]/80 p-6 ring-1 ring-white/10">
          <div className="grid grid-cols-3 gap-6 h-full">

            {/* Small */}
            <div className="rounded-3xl bg-gradient-to-b from-[#242424] to-[#1A1A1A] p-6 flex flex-col ring-1 ring-white/10 shadow-xl hover:translate-y-[-2px] transition">
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
                <button className="rounded-full px-7 py-2 bg-gradient-to-r from-orange-400 to-orange-600 text-white font-semibold shadow-lg hover:scale-105 transition">
                  9.99 CHF
                </button>
              </div>
            </div>

            {/* Big */}
            <div className="rounded-3xl bg-gradient-to-b from-[#262626] to-[#1C1C1C] p-6 flex flex-col ring-1 ring-red-500/20 shadow-xl hover:translate-y-[-2px] transition">
              <h3 className="text-center text-white font-semibold mb-4 tracking-wide">
                Big Package
              </h3>

              <div className="text-white/70 text-sm space-y-1">
                <div>32GB RAM</div>
                <div>Free IP</div>
                <div>8 Players</div>
                <div>...</div>
              </div>

              <div className="mt-auto flex justify-center pt-6">
                <button className="rounded-full px-7 py-2 bg-gradient-to-r from-red-500 to-red-700 text-white font-semibold shadow-lg hover:scale-105 transition">
                  19.99 CHF
                </button>
              </div>
            </div>

            {/* Custom */}
            <div className="rounded-3xl bg-gradient-to-b from-[#232323] to-[#191919] p-6 flex flex-col ring-1 ring-blue-500/20 shadow-xl hover:translate-y-[-2px] transition">
              <h3 className="text-center text-white font-semibold mb-4 tracking-wide">
                Custom
              </h3>

              <div className="text-white/70 text-sm space-y-1">
                <div>Free IP</div>
                <div>Custom RAM</div>
                <div>...</div>
              </div>

              <div className="mt-auto flex justify-center pt-6">
                <button className="rounded-full px-7 py-2 bg-gradient-to-r from-blue-500 to-blue-700 text-white font-semibold shadow-lg hover:scale-105 transition">
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
