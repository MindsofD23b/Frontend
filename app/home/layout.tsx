// app/home/layout.tsx
import Link from "next/link";

export default function HomeLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen overflow-hidden bg-[linear-gradient(180deg,#F23200_2%,#C72C00_17%,#4A0E00_70%,#0D0D0D_100%)] flex items-center justify-center p-6">
      <div className="w-[min(1150px,95vw)] h-[min(650px,85vh)] rounded-3xl bg-[#1F1F1F] p-6 shadow-2xl">
        <div className="h-full w-full flex gap-6">
          {/* Sidebar */}
          <div className="h-full w-[260px] rounded-3xl bg-[#2A2A2A] p-5 flex flex-col">
            <div className="rounded-2xl p-4">
              <div className="text-white/80 text-lg mb-3 rounded-2xl">
                <div className="p-2">Active Servers</div>

                <div className="flex gap-4">
                  <div className="w-0.5 bg-white/20 rounded-full" />

                  <div className="flex flex-col gap-3 flex-1">
                    <Link
                      className="text-white/80 hover:text-white text-base hover:bg-[#1F1F1F] rounded-2xl"
                      href="/home/add-server"
                    >
                      <p className="px-4 py-2">Add Server</p>
                    </Link>

                    <Link
                      className="text-white/80 hover:text-white text-base hover:bg-[#1F1F1F] rounded-2xl"
                      href="/home/delete-server"
                    >
                      <p className="px-4 py-2">Delete Server</p>
                    </Link>

                    <Link
                      className="text-white/80 hover:text-white text-base hover:bg-[#1F1F1F] rounded-2xl"
                      href="/home/stop-all"
                    >
                      <p className="px-4 py-2">Stop All Servers</p>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 flex flex-col gap-3">
              <Link className="hover:bg-[#1F1F1F] rounded-2xl" href="/profile">
                <div className="text-white/80 text-lg p-2">Profile</div>
              </Link>

              <Link className="hover:bg-[#1F1F1F] rounded-2xl" href="/about">
                <div className="text-white/80 text-lg p-2">About Us</div>
              </Link>
            </div>

            <div className="mt-auto pt-6 flex justify-center">
              <Link className="text-red-500 hover:text-red-400 text-lg" href="/logout">
                Logout
              </Link>
            </div>
          </div>

          {/* Content Area (Header + Content) */}
          <div className="h-full flex-1 flex flex-col gap-4">{children}</div>
        </div>
      </div>
    </div>
  );
}