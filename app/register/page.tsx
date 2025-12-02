// app/login/page.tsx
import Link from "next/link";

export default function LoginPage() {
  return (
    <div className="min-h-screen overflow-hidden bg-[linear-gradient(180deg,#F23200_2%,#C72C00_17%,#4A0E00_70%,#0D0D0D_100%)] flex items-center justify-center">
      <div className="w-full max-w-6xl flex items-center justify-between px-6 md:px-10 lg:px-16">
        {/* LEFT SIDE – placeholder for Nether Fortress image */}
        <div className="hidden md:block flex-1 relative h-[360px] lg:h-[420px]">
          {/* Later you can add your animated image here, e.g.: */}
          {/* <Image src="/nether-fortress.png" alt="Nether Fortress" fill className="object-contain object-left-bottom" /> */}
        </div>

        {/* RIGHT SIDE – LOGIN CARD */}
        <div className="flex-1 flex justify-center">
          <div
            className="w-full max-w-md rounded-4xl bg-[#1F1F1F] px-8 py-10 lg:px-10 lg:py-12
                       shadow-[0_18px_45px_rgba(0,0,0,0.7)]"
          >
            <h1 className="text-2xl font-semibold text-center mb-8">Sign in</h1>

            <form className="space-y-6">
              {/* Username */}
              <div>
                <label className="block text-sm mb-2 text-gray-200">
                  Username
                </label>
                <input
                  type="text"
                  className="w-full rounded-full bg-[#2A2A2A] px-4 py-3 text-sm
                             text-white placeholder:text-gray-400
                             outline-none border border-transparent
                             focus:border-[#red-500] focus:ring-2 focus:ring-[#red-500]/60"
                  placeholder="Enter your username"
                />
              </div>

              {/* Password */}
              <div>
                <label className="block text-sm mb-2 text-gray-200">
                  Password
                </label>
                <input
                  type="password"
                  className="w-full rounded-full bg-[#2A2A2A] px-4 py-3 text-sm text-white placeholder:text-gray-400 outline-none border border-transparent focus:border-[#] focus:ring-2 focus:ring-[#]/60"
                  placeholder="Enter your password"
                />
              </div>

              <div>
                <label className="block text-sm mb-2 text-gray-200">
                  Confirm Password
                </label>
                <input
                  type="password"
                  className="w-full rounded-full bg-[#2A2A2A] px-4 py-3 text-sm text-white placeholder:text-gray-400 outline-none border border-transparent focus:border-[#] focus:ring-2 focus:ring-[#]/60"
                  placeholder="Enter your password"
                />
              </div>

              {/* Login button – optional, keeps the layout complete */}
              <button
                type="submit"
                className="mt-2 w-full rounded-full bg-[#] py-3 text-sm font-semibold
                           text-white hover:brightness-110 transition"
              >
                Sign in
              </button>
            </form>

            {/* Links */}
            <div className="mt-6 text-xs text-gray-300 leading-relaxed">
              <p>
                Did you forget your password? Click{" "}
                <button
                  type="button"
                  className="text-[#] hover:underline"
                >
                  here
                </button>{" "}
                to reset your password.
              </p>

              <p className="mt-3">
                Already have an Account{" "}
                <Link href="/login" className="text-[#] hover:underline">
                  here
                </Link>
                .
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
