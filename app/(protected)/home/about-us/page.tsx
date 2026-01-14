export default function AboutUsPage() {
  return (
    <>
      {/* HEADER */}
      <div className="h-auto sm:h-20 rounded-2xl bg-[#2A2A2A] px-4 sm:px-6 py-4 sm:py-0 flex items-center">
        <div className="text-white text-base sm:text-lg font-semibold">
          About Us
        </div>
      </div>

      {/* CONTENT */}
      <div className="flex-1 rounded-2xl bg-[#2A2A2A] p-4 sm:p-6 overflow-auto">
        <div className="text-white/90 leading-relaxed text-sm sm:text-base">
          <p className="text-lg sm:text-xl font-semibold mb-4">Who we are</p>

          <p className="text-white/80">
            At Nether.io, we live and breathe Minecraft. We’re a team of gamers,
            tech nerds and redstone enjoyers who were tired of laggy, overpriced
            servers – so we built the kind of hosting we always wished existed.
          </p>

          <p className="mt-4 text-white/80">
            Our mission is simple: Make it insanely easy for you and your friends
            to play Minecraft together – fast, stable, and without stress.
          </p>

          <p className="mt-8 text-base sm:text-lg font-semibold">
            What we stand for
          </p>

          <div className="mt-4 space-y-4">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4 sm:p-5">
              <div className="font-semibold text-white">
                Blazing-fast performance
              </div>
              <p className="mt-2 text-sm text-white/70">
                We use modern hardware, NVMe storage and optimized configurations
                so your worlds load quickly, mobs don’t stutter and big redstone
                builds run smooth.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-4 sm:p-5">
              <div className="font-semibold text-white">Instant setup</div>
              <p className="mt-2 text-sm text-white/70">
                Your server is ready in minutes – pick your version, click start,
                and jump straight into the game. No complicated configs, no
                terminal chaos.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-4 sm:p-5">
              <div className="font-semibold text-white">
                Beginner-friendly, but powerful
              </div>
              <p className="mt-2 text-sm text-white/70">
                Whether you’re starting your first survival world or managing a
                big modded network: our control panel stays simple, but gives you
                full control when you need it.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
