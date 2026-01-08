export default function ProfilePage() {
  return (
    <>
      <div className="h-20 rounded-2xl bg-[#2A2A2A] px-6 flex items-center">
        <div className="text-white text-lg font-semibold">Profile</div>
      </div>

      <div className="flex-1 rounded-2xl bg-[#2A2A2A] p-6 overflow-auto">
        <div className="text-white/90 text-base leading-relaxed">
          <p className="text-xl font-semibold mb-2">Your Account</p>
          <p className="text-white/70">
            This page will show your user data, plan status, and server access later on.
          </p>

          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <div className="text-sm text-white/60">Email</div>
              <div className="mt-1 text-white font-semibold">—</div>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <div className="text-sm text-white/60">Plan</div>
              <div className="mt-1 text-white font-semibold">—</div>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <div className="text-sm text-white/60">Servers</div>
              <div className="mt-1 text-white font-semibold">—</div>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <div className="text-sm text-white/60">Member Since</div>
              <div className="mt-1 text-white font-semibold">—</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
