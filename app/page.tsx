import Link from "next/link";
import { cinzel } from "./layout";

export default function Home() {
  return (
    <div className="min-h-screen bg-[linear-gradient(180deg,#0D0D0D_0.1%,#AB360B_17%,#4A0E00_70%,#0D0D0D_100%)] text-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-10 sm:py-12 md:py-16">
        {/* TOP / TITLE */}
        <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
          <div className="w-full text-center sm:text-left">
            <h1
              className={`brand-logo ${cinzel.className} select-none text-5xl sm:text-6xl md:text-7xl leading-none`}
            >
              NETHR
            </h1>
            <p className="mt-3 text-sm sm:text-base text-gray-300 text-center sm:text-left">
              Minecraft hosting, without the stress
            </p>
          </div>

          <div className="flex w-full sm:w-auto items-center justify-center sm:justify-end gap-3">
            <Link
              href="https://github.com/MindsofD23b"
              target="_blank"
              rel="noreferrer"
              className="hidden sm:inline text-sm text-gray-200 hover:underline"
            >
              GitHub
            </Link>

            <Link
              href="/login"
              className="w-full sm:w-auto text-center rounded-full bg-[#a33b15] px-5 py-2 text-sm font-semibold hover:brightness-110 transition"
            >
              Login
            </Link>
          </div>
        </div>

        {/* HERO */}
        <div className="mt-12 sm:mt-14 md:mt-20 grid grid-cols-1 gap-10 md:grid-cols-2 md:items-center">
          <div className="text-center md:text-left">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
              Host & manage your Minecraft server
              <span className="text-[#FF5E1E]"> in minutes</span>.
            </h2>

            <p className="mt-5 text-sm sm:text-base text-gray-200 leading-relaxed">
              Nethr is a platform that lets you easily start, monitor, and control
              Minecraft servers – without complicated setup. Everything runs through
              the dashboard.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row sm:flex-wrap gap-3 justify-center md:justify-start">
              <Link
                href="/register"
                className="w-full sm:w-auto text-center rounded-full bg-[#FF5E1E] px-6 py-3 text-sm font-semibold hover:brightness-110 transition"
              >
                Get started
              </Link>

              <Link
                href="/login"
                className="w-full sm:w-auto text-center rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold hover:bg-white/10 transition"
              >
                I already have an account
              </Link>
            </div>

            <div className="mt-6 text-xs sm:text-sm text-gray-400">
              For friends’ servers, communities, or modpacks – scalable from small to large.
            </div>
          </div>

          {/* HERO CARD */}
          <div className="flex justify-center md:justify-end">
            <div className="w-full max-w-md rounded-[28px] sm:rounded-[32px] bg-[#1F1F1F] px-5 sm:px-8 py-8 sm:py-10 shadow-[0_18px_45px_rgba(0,0,0,0.7)]">
              <div className="text-sm text-gray-300">What you get in the dashboard</div>

              <div className="mt-5 space-y-4">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <div className="font-semibold">Instant setup</div>
                  <div className="text-sm text-gray-300 mt-1">
                    Start your server in seconds – no fiddling around.
                  </div>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <div className="font-semibold">Live monitoring</div>
                  <div className="text-sm text-gray-300 mt-1">
                    Keep an eye on uptime, performance, and activity in real time.
                  </div>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <div className="font-semibold">Resource control</div>
                  <div className="text-sm text-gray-300 mt-1">
                    Adjust CPU, RAM & slots flexibly whenever you need more.
                  </div>
                </div>
              </div>

              <div className="mt-6 flex flex-wrap gap-x-4 gap-y-2">
                <Link
                  href="https://github.com/MindsofD23b/Documentations"
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm text-[#FF5E1E] hover:underline"
                >
                  Documentation
                </Link>
                <Link
                  href="https://github.com/MindsofD23b/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm text-gray-300 hover:underline"
                >
                  Contributors
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* WHY SECTION */}
        <div className="mt-14 sm:mt-16">
          <h2 className="text-xl sm:text-2xl font-semibold text-center md:text-left">
            Why Nethr?
          </h2>
          <p className="mt-3 text-sm sm:text-base text-gray-200 leading-relaxed text-center md:text-left">
            Many people know the pain: setting up servers is often technical, expensive,
            or confusing. Nethr makes everything simple, transparent, and scalable – so
            you can focus on playing and your community.
          </p>

          <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <div className="font-semibold">Simple</div>
              <p className="mt-2 text-sm text-gray-300">
                No complicated configurations. No expert knowledge needed.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <div className="font-semibold">Flexible</div>
              <p className="mt-2 text-sm text-gray-300">
                Resources and server setup adapt to your needs.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <div className="font-semibold">Stable & secure</div>
              <p className="mt-2 text-sm text-gray-300">
                Focus on a stable cloud infrastructure and secure data/payments.
              </p>
            </div>
          </div>
        </div>

        {/* HOW IT WORKS */}
        <div className="mt-14 sm:mt-16">
          <h2 className="text-xl sm:text-2xl font-semibold text-center md:text-left">
            How does it work?
          </h2>

          <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3">
            <div className="rounded-2xl border border-white/10 bg-[#1F1F1F] p-5 sm:p-6">
              <div className="text-xs text-gray-400">Step 1</div>
              <div className="mt-1 font-semibold">Create an account</div>
              <p className="mt-2 text-sm text-gray-300">
                Register, log in, and jump into the dashboard.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-[#1F1F1F] p-5 sm:p-6">
              <div className="text-xs text-gray-400">Step 2</div>
              <div className="mt-1 font-semibold">Start your server</div>
              <p className="mt-2 text-sm text-gray-300">
                Choose version/settings and your server is up in no time.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-[#1F1F1F] p-5 sm:p-6">
              <div className="text-xs text-gray-400">Step 3</div>
              <div className="mt-1 font-semibold">Manage & scale</div>
              <p className="mt-2 text-sm text-gray-300">
                Check monitoring, adjust resources, stay stable.
              </p>
            </div>
          </div>
        </div>

        {/* TECH */}
        <div className="mt-14 sm:mt-16">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-5 sm:p-8">
            <h2 className="text-xl sm:text-2xl font-semibold text-center md:text-left">
              Tech
            </h2>
            <p className="mt-3 text-sm sm:text-base text-gray-200 leading-relaxed text-center md:text-left">
              Nethr uses a modern setup with a dashboard and containerization. The
              frontend is built with React/Next + Tailwind, servers run in Docker, and
              hosting/infra is planned on AWS.
            </p>

            <div className="mt-6 flex flex-wrap justify-center md:justify-start gap-2 text-xs text-gray-300">
              <span className="rounded-full bg-black/30 px-3 py-1 border border-white/10">
                React / Next
              </span>
              <span className="rounded-full bg-black/30 px-3 py-1 border border-white/10">
                TailwindCSS
              </span>
              <span className="rounded-full bg-black/30 px-3 py-1 border border-white/10">
                Docker
              </span>
              <span className="rounded-full bg-black/30 px-3 py-1 border border-white/10">
                AWS (planned)
              </span>
            </div>
          </div>
        </div>

        {/* FINAL CTA */}
        <div className="mt-14 sm:mt-16 text-center">
          <h3 className="text-xl sm:text-2xl font-semibold">Ready?</h3>
          <p className="mt-3 text-sm sm:text-base text-gray-200">
            Log in and start your first server, easy.
          </p>

          <div className="mt-6 flex flex-col sm:flex-row justify-center gap-3">
            <Link
              href="/register"
              className="w-full sm:w-auto text-center rounded-full bg-[#FF5E1E] px-7 py-3 text-sm font-semibold hover:brightness-110 transition"
            >
              Create account
            </Link>
            <Link
              href="/login"
              className="w-full sm:w-auto text-center rounded-full border border-white/20 bg-white/5 px-7 py-3 text-sm font-semibold hover:bg-white/10 transition"
            >
              Login
            </Link>
          </div>
        </div>

        {/* FOOTER */}
        <div className="mt-14 sm:mt-16 border-t border-white/10 pt-6 text-center text-xs text-gray-400">
          © <span suppressHydrationWarning>{new Date().getFullYear()}</span> Nethr -
          Minecraft Server Hosting &amp; Management
        </div>
      </div>
    </div>
  );
}
