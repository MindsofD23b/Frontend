// app/Hompage/page.tsx
export default function Hompage() {
  return (
    <div className="w-full max-w-6xl rounded-[32px] bg-[#1F1F1F] p-6 md:p-8 lg:p-10 shadow-[0_18px_45px_rgba(0,0,0,0.75)] flex gap-6">
      {/* SIDEBAR */}
      <aside className="w-60 rounded-[24px] bg-[#141414] px-5 py-6 flex flex-col justify-between">
        <div className="space-y-4 text-sm">
          <div>
            <p className="font-semibold mb-2 text-gray-100">
              Current Active Servers
            </p>
            <ul className="space-y-1 text-gray-300">
              <li className="text-white">Current Active Servers</li>
              <li>Add Server</li>
              <li>Delete Server</li>
              <li>Stop All Servers</li>
            </ul>
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
      <main className="flex-1 rounded-[24px] bg-[#141414] px-6 py-5 flex flex-col">
        {/* HEADER BAR */}
        <div className="flex items-center justify-between rounded-[999px] bg-[#1F1F1F] px-6 py-3">
          <h2 className="text-lg font-semibold text-gray-100">
            Current Active Servers
          </h2>

          <div className="flex items-center gap-3">
            {/* Add Server */}
            <button
              type="button"
              className="h-9 w-9 rounded-full bg-emerald-500 flex items-center justify-center text-xl leading-none"
            >
              +
            </button>

            {/* Delete Server */}
            <button
              type="button"
              className="h-9 w-9 rounded-full bg-red-500 flex items-center justify-center text-lg leading-none"
            >
              🗑
            </button>
          </div>
        </div>

        {/* SERVER LIST */}
        <div className="mt-6 flex-1 rounded-[24px] bg-[#1F1F1F] px-4 py-4">
          <div className="max-h-64 space-y-4 overflow-y-auto pr-2 custom-scrollbar">
            {/* SERVER ROW 1 */}
            <div className="flex items-center gap-3 rounded-[24px] bg-[#2A2A2A] px-3 py-2">
              {/* Bild-Platzhalter – hier später dein Minecraft-Bild */}
              <div className="h-20 flex-1 rounded-[24px] bg-gradient-to-r from-green-700 to-green-500 flex items-center px-4">
                <span className="text-sm font-semibold">
                  Super Earth Survival
                </span>
              </div>

              {/* Pause Button */}
              <button
                type="button"
                className="h-11 w-11 rounded-full bg-emerald-500 flex items-center justify-center text-xl"
              >
                ⏸
              </button>
            </div>

            {/* SERVER ROW 2 */}
            <div className="flex items-center gap-3 rounded-[24px] bg-[#2A2A2A] px-3 py-2">
              <div className="h-20 flex-1 rounded-[24px] bg-gradient-to-r from-green-700 to-green-500 flex items-center px-4">
                <span className="text-sm font-semibold">
                  Survival Minecraft World
                </span>
              </div>

              <button
                type="button"
                className="h-11 w-11 rounded-full bg-emerald-500 flex items-center justify-center text-xl"
              >
                ▶
              </button>
            </div>

            {/* SERVER ROW 3 */}
            <div className="flex items-center gap-3 rounded-[24px] bg-[#2A2A2A] px-3 py-2">
              <div className="h-20 flex-1 rounded-[24px] bg-gradient-to-r from-green-700 to-green-500 flex items-center px-4">
                <span className="text-sm font-semibold">
                  Creative Test World
                </span>
              </div>

              <button
                type="button"
                className="h-11 w-11 rounded-full bg-emerald-500 flex items-center justify-center text-xl"
              >
                ▶
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
