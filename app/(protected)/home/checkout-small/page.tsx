"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

export default function CheckoutSmallPage() {
  const router = useRouter();

  const goPayment = () => {
    localStorage.setItem("selectedPlan", "small");
    router.push("/home/payment");
  };

  return (
    <div className="h-full flex flex-col gap-4">
      {/* HEADER */}
      <div className="h-auto sm:h-20 rounded-2xl bg-[#2A2A2A] px-4 sm:px-6 py-4 sm:py-0 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
        <div className="text-white text-base sm:text-lg font-semibold">
          Checkout: Small Package
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
          9.99 CHF / month
        </div>

        <div className="mt-3 space-y-1 text-sm sm:text-base text-white/70">
          <div>• 16GB RAM</div>
          <div>• Free IP</div>
          <div>• 8 Players</div>
        </div>

        <button
          onClick={goPayment}
          className="mt-6 w-full sm:w-auto rounded-xl bg-orange-500 px-5 py-3 font-semibold text-white hover:bg-orange-400 transition"
        >
          Confirm & Pay
        </button>
      </div>
    </div>
  );
}
