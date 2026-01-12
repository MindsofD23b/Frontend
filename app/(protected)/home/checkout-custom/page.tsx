import Link from "next/link";

export default function CheckoutCustomPage() {
  return (
    <div className="h-full flex flex-col gap-4">
      <div className="h-20 rounded-2xl bg-[#2A2A2A] px-6 flex items-center justify-between">
        <div className="text-white text-lg font-semibold">Checkout: Custom</div>
        <Link className="text-white/70 hover:text-white" href="/home/add-server">
          Back
        </Link>
      </div>

      <div className="flex-1 rounded-2xl bg-[#2A2A2A] p-6 text-white/80">
        <div className="text-xl font-semibold text-white">Custom Pricing</div>
        <div className="mt-3 space-y-1 text-white/70">
          <div>• Free IP</div>
          <div>• Choose your RAM</div>
          <div>• Extra options</div>
        </div>

        <button className="mt-6 rounded-xl bg-white/15 px-5 py-3 font-semibold text-white hover:bg-white/20">
          Continue
        </button>
      </div>
    </div>
  );
}
