"use client";

import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";

function Chip({ text }: { text: string }) {
  return (
    <span className="inline-flex items-center rounded-full bg-black/30 px-3 py-1 text-xs text-white/70 ring-1 ring-white/10">
      {text}
    </span>
  );
}

type PlanKey = "small" | "big" | "custom";

type Plan = {
  key: PlanKey;
  title: string;
  badge: string;
  accent: "orange" | "red" | "white";
  description: string;
  priceLabel: string;
  onClick: () => void;
  bullets: string[];
  specs: { label: string; value: string }[];
  chips: string[];
  recommended?: boolean;
  goodFor: string;
};

function PlanCard({ plan }: { plan: Plan }) {
  const accentRing =
    plan.accent === "orange"
      ? "ring-1 ring-orange-500/25 shadow-[0_0_25px_rgba(255,120,40,0.18)]"
      : plan.accent === "red"
      ? "ring-2 ring-red-500/40 shadow-[0_0_35px_rgba(255,60,60,0.35)]"
      : "ring-1 ring-white/15 shadow-[0_0_20px_rgba(255,255,255,0.08)]";

  const accentBadge =
    plan.accent === "orange"
      ? "bg-orange-500/20 text-orange-200 ring-orange-400/30"
      : plan.accent === "red"
      ? "bg-red-500/20 text-red-200 ring-red-400/30"
      : "bg-white/10 text-white/70 ring-white/15";

  const priceBtn =
    plan.accent === "orange"
      ? "bg-gradient-to-r from-orange-400 to-orange-600 shadow-[0_0_18px_rgba(255,140,60,0.6)]"
      : plan.accent === "red"
      ? "bg-gradient-to-r from-red-500 to-red-700 shadow-[0_0_22px_rgba(255,60,60,0.7)]"
      : "bg-white/10 hover:bg-white/20 ring-1 ring-white/20";

  return (
    // ✅ min-h-0 so it never forces parent taller
    <div
      className={`relative rounded-3xl bg-gradient-to-b from-[#242424] to-[#1A1A1A] p-5 flex flex-col ${accentRing} min-h-0`}
    >
      {plan.recommended && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-red-500 px-4 py-1 text-xs font-semibold text-white shadow-[0_0_15px_rgba(255,60,60,0.8)]">
          Recommended
        </div>
      )}

      <div className="flex items-start justify-between gap-3">
        <h3 className="text-white font-semibold tracking-wide">{plan.title}</h3>
        <span
          className={`shrink-0 rounded-full px-3 py-1 text-xs ring-1 ${accentBadge}`}
        >
          {plan.badge}
        </span>
      </div>

      <p className="mt-2 text-sm text-white/60 leading-relaxed">
        {plan.description}
      </p>

      {/* ✅ scroll area that stays INSIDE the card */}
      <div className="mt-4 flex-1 min-h-0 overflow-y-auto overscroll-contain pr-2 space-y-4">
        {plan.specs.length > 0 && (
          <div className="grid gap-2 text-sm text-white/70">
            {plan.specs.map((s) => (
              <div key={s.label} className="flex items-center justify-between">
                <span>{s.label}</span>
                <span className="text-white font-semibold">{s.value}</span>
              </div>
            ))}
          </div>
        )}

        <div className="flex flex-wrap gap-2">
          {plan.chips.map((c) => (
            <Chip key={c} text={c} />
          ))}
        </div>

        <div className="rounded-2xl bg-white/5 ring-1 ring-white/10 p-4">
          <div className="text-xs text-white/50">
            {plan.key === "custom" ? "Customizable" : "Included"}
          </div>
          <ul className="mt-2 text-sm text-white/70 space-y-1">
            {plan.bullets.map((b) => (
              <li key={b}>• {b}</li>
            ))}
          </ul>
        </div>

        {plan.key === "custom" && (
          <div className="rounded-2xl bg-gradient-to-r from-[#0f0f0f] to-[#1a1a1a] ring-1 ring-white/10 p-4">
            <div className="text-xs text-white/50">Perfect for</div>
            <p className="mt-2 text-sm text-white/70">
              Networks, special modpacks, performance-heavy worlds, or anything
              that needs a tailored setup.
            </p>
          </div>
        )}
      </div>

      {/* footer fixed */}
      <div className="pt-4">
        <button
          onClick={plan.onClick}
          className={`w-full rounded-full px-7 py-2 text-white font-semibold hover:scale-[1.01] transition ${priceBtn}`}
        >
          {plan.priceLabel}
        </button>

        <div className="mt-3 text-center text-xs text-white/40">
          Good for: {plan.goodFor}
        </div>
      </div>
    </div>
  );
}

export default function AddServerPage() {
  const router = useRouter();
  const [mobileIndex, setMobileIndex] = useState(0);

  const goCheckout = (plan: PlanKey) => {
    router.push(`/home/checkout-${plan}`);
  };

  const plans: Plan[] = useMemo(
    () => [
      {
        key: "small",
        title: "Small Package",
        badge: "Starter",
        accent: "orange",
        description:
          "Best for a small friend group. Simple, stable, and cheap – perfect for survival worlds.",
        priceLabel: "9.99 CHF",
        onClick: () =>
          router.push("https://buy.stripe.com/test_bJe7sKcwHfMU4S8b098Vi00"),
        specs: [
          { label: "RAM", value: "16 GB" },
          { label: "CPU", value: "2 vCores" },
          { label: "Storage", value: "30 GB SSD" },
          { label: "Players", value: "Up to 8" },
        ],
        chips: ["Free IP", "Daily Backups", "Vanilla / Paper", "Basic DDoS"],
        bullets: [
          "1-click server install",
          "Basic console access",
          "Auto restart on crash",
          "Starter monitoring",
          "Community presets",
          "Basic file manager",
        ],
        goodFor: "survival, small SMP, chill sessions",
      },
      {
        key: "big",
        title: "Big Package",
        badge: "Performance",
        accent: "red",
        recommended: true,
        description:
          "Built for active communities. More headroom, better stability under load, and smoother redstone.",
        priceLabel: "19.99 CHF",
        onClick: () => goCheckout("big"),
        specs: [
          { label: "RAM", value: "32 GB" },
          { label: "CPU", value: "4 vCores" },
          { label: "Storage", value: "80 GB NVMe" },
          { label: "Players", value: "Up to 20" },
        ],
        chips: [
          "Free IP",
          "Hourly Backups",
          "Plugins / Mods",
          "Priority CPU",
          "Advanced DDoS",
          "Live Monitoring",
        ],
        bullets: [
          "Full panel access + live stats",
          "Scheduled restarts",
          "One-click modpack installer",
          "Faster support response",
          "Better performance under load",
          "More stable for big builds",
        ],
        goodFor: "communities, modpacks, bigger SMPs",
      },
      {
        key: "custom",
        title: "Custom",
        badge: "Build your own",
        accent: "white",
        description:
          "Choose exactly what you need. Scale players, RAM, CPU and storage to match your world.",
        priceLabel: "Customize",
        onClick: () => goCheckout("custom"),
        specs: [],
        chips: [
          "Free IP",
          "Custom Backups",
          "Choose Region",
          "Advanced Config",
          "Modpacks",
        ],
        bullets: [
          "Player slots",
          "RAM / CPU / Storage",
          "Region & version",
          "Modpacks / plugins / configs",
          "Backups frequency",
          "Advanced performance presets",
        ],
        goodFor: "custom needs, scaling, special setups",
      },
    ],
    [router]
  );

  const current = plans[mobileIndex];
  const prev = () =>
    setMobileIndex((i) => (i - 1 + plans.length) % plans.length);
  const next = () => setMobileIndex((i) => (i + 1) % plans.length);

  return (
    <>
      {/* Top Bar */}
      <div className=" rounded-2xl sm:px-6 py-4 bg-[#2A2A2A] sm:py-0 flex items-center justify-center ">
          <div className="text-white/90 text-base sm:text-lg font-semibold tracking-wide">
            Add Server
          </div>
        </div>

      {/* Main Panel */}
      <div className="flex-1 min-h-0 rounded-2xl  backdrop-blur-xl p-4 sm:p-6 bg-[#2A2A2A] shadow-2xl overflow-x-hidden">
        {/* ✅ overflow-hidden here clips glows so nothing can “stick out” */}
        <div className="h-full min-h-0 rounded-3xl bg-gradient-to-br  p-4 sm:p-6overflow-x-hidden">
          {/* MOBILE */}
          <div className="lg:hidden flex flex-col gap-4 min-h-0">
            <div className="flex items-center justify-between gap-3">
              <button
                onClick={prev}
                className="h-11 w-11 rounded-full bg-white/10 hover:bg-white/15 ring-1 ring-white/15 text-white transition active:scale-95"
                aria-label="Previous plan"
              >
                ◀
              </button>

              <div className="text-center">
                <div className="text-white/90 font-semibold tracking-wide">
                  {current.title}
                </div>
                <div className="mt-2 flex items-center justify-center gap-2">
                  {plans.map((p, idx) => (
                    <button
                      key={p.key}
                      onClick={() => setMobileIndex(idx)}
                      className={`h-2 w-2 rounded-full transition ${
                        idx === mobileIndex ? "bg-white/80" : "bg-white/20"
                      }`}
                      aria-label={`Go to ${p.title}`}
                    />
                  ))}
                </div>
              </div>

              <button
                onClick={next}
                className="h-11 w-11 rounded-full bg-white/10 hover:bg-white/15 ring-1 ring-white/15 text-white transition active:scale-95"
                aria-label="Next plan"
              >
                ▶
              </button>
            </div>

            <PlanCard plan={current} />
          </div>

          {/* DESKTOP */}
          {/* ✅ real grid is back + cards auto render + no fixed min heights */}
          <div className="hidden lg:grid grid-cols-3 gap-6 h-full min-h-0">
            {plans.map((p) => (
              <PlanCard key={p.key} plan={p} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
