import Link from "next/link";

export default function CheckoutCustomPage() {
  return (
    <div className="h-full flex flex-col gap-4">
      {/* HEADER */}
      <div className="h-auto sm:h-20 rounded-2xl bg-[#2A2A2A] px-4 sm:px-6 py-4 sm:py-0 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
        <div className="text-white text-base sm:text-lg font-semibold">
          Checkout: Custom
        </div>

        <Link
          className="text-white/70 hover:text-white text-sm sm:text-base"
          href="/home/add-server"
        >
          Back
        </Link>
      </div>

      {/* CONTENT */}
      <div className="flex-1 rounded-2xl bg-[#2A2A2A] p-4 sm:p-6 text-white/80">
        <div className="text-lg sm:text-xl font-semibold text-white">
          Custom Pricing
        </div>

        <div className="mt-3 space-y-1 text-sm sm:text-base text-white/70">
          <div>• Free IP</div>
          <div>• Choose your RAM</div>
          <div>• Extra options</div>
        </div>

        <button className="mt-6 w-full sm:w-auto rounded-xl bg-white/15 px-5 py-3 font-semibold text-white hover:bg-white/20 transition">
          Continue
        </button>
      </div>
    </div>
  );
}

