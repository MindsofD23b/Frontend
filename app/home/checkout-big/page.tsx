"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

export default function CheckoutBigPage() {
  const router = useRouter();

  const goPayment = () => {
    localStorage.setItem("selectedPlan", "big");
    router.push("/home/payment");
  };

  return (
    <div className="h-full flex flex-col gap-4">
      <div className="h-20 rounded-2xl bg-[#2A2A2A] px-6 flex items-center justify-between">
        <div className="text-white text-lg font-semibold">Checkout: Big Package</div>
        <Link className="text-white/70 hover:text-white" href="/home/add-server">
          Back
        </Link>
      </div>

      <div className="flex-1 rounded-2xl bg-[#2A2A2A] p-6 text-white/80">
        <div className="text-xl font-semibold text-white">19.99 CHF / month</div>

        <div className="mt-3 space-y-1 text-white/70">
          <div>• 32GB RAM</div>
          <div>• Free IP</div>
          <div>• 8 Players</div>
        </div>

        <button
          onClick={goPayment}
          className="mt-6 rounded-xl bg-red-600 px-5 py-3 font-semibold text-white hover:bg-red-500"
        >
          Confirm & Pay
        </button>
      </div>
    </div>
  );
}
