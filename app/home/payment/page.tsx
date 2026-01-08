"use client";

import { useEffect, useState } from "react";

type PaymentMethod =
  | { type: "none" }
  | {
      type: "card";
      holderName: string;
      brand: "Visa" | "Mastercard" | "Amex" | "Other";
      last4: string;
      expMonth: string;
      expYear: string;
    }
  | {
      type: "paypal";
      email: string;
    };

const STORAGE_KEY = "nethr_payment_method_v1";

function safeParse<T>(value: string | null): T | null {
  if (!value) return null;
  try {
    return JSON.parse(value) as T;
  } catch {
    return null;
  }
}

function BrandBadge({ brand }: { brand: string }) {
  const glow =
    brand === "Visa"
      ? "shadow-[0_0_18px_rgba(60,120,255,0.35)] ring-blue-500/25"
      : brand === "Mastercard"
      ? "shadow-[0_0_18px_rgba(255,120,60,0.35)] ring-orange-500/25"
      : brand === "Amex"
      ? "shadow-[0_0_18px_rgba(90,255,200,0.25)] ring-emerald-500/25"
      : "shadow-[0_0_18px_rgba(255,255,255,0.08)] ring-white/15";

  return (
    <span
      className={`inline-flex items-center rounded-full px-3 py-1 text-xs text-white/80 bg-black/30 ring-1 ${glow}`}
    >
      {brand}
    </span>
  );
}

export default function PaymentPage() {
  const [method, setMethod] = useState<PaymentMethod>({ type: "none" });

  // form states
  const [tab, setTab] = useState<"card" | "paypal">("card");
  const [holderName, setHolderName] = useState("");
  const [brand, setBrand] = useState<"Visa" | "Mastercard" | "Amex" | "Other">(
    "Visa"
  );
  const [last4, setLast4] = useState("");
  const [expMonth, setExpMonth] = useState("01");
  const [expYear, setExpYear] = useState("2028");
  const [paypalEmail, setPaypalEmail] = useState("");
  const [msg, setMsg] = useState<string>("");

  useEffect(() => {
    const stored = safeParse<PaymentMethod>(localStorage.getItem(STORAGE_KEY));
    if (stored) setMethod(stored);
  }, []);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(method));
  }, [method]);

  const clearMessageSoon = () => {
    setTimeout(() => setMsg(""), 2200);
  };

  const saveCard = () => {
    setMsg("");

    const cleanLast4 = last4.trim();
    if (!holderName.trim()) {
      setMsg("Please enter the card holder name.");
      clearMessageSoon();
      return;
    }
    if (!/^\d{4}$/.test(cleanLast4)) {
      setMsg("Last 4 digits must be exactly 4 numbers.");
      clearMessageSoon();
      return;
    }

    setMethod({
      type: "card",
      holderName: holderName.trim(),
      brand,
      last4: cleanLast4,
      expMonth,
      expYear,
    });

    setMsg("Payment method saved.");
    clearMessageSoon();
  };

  const savePaypal = () => {
    setMsg("");

    const mail = paypalEmail.trim();
    if (!mail || !mail.includes("@")) {
      setMsg("Please enter a valid PayPal email.");
      clearMessageSoon();
      return;
    }

    setMethod({ type: "paypal", email: mail });

    setMsg("Payment method saved.");
    clearMessageSoon();
  };

  const removeMethod = () => {
    setMethod({ type: "none" });
    setMsg("Payment method removed.");
    clearMessageSoon();
  };

  return (
    <>
      {/* Top Bar */}
      <div className="flex items-center gap-3">
        <div className="flex-1 h-20 rounded-2xl bg-gradient-to-r from-[#1C1C1C] to-[#232323] px-6 flex items-center justify-center shadow-inner ring-1 ring-white/10">
          <div className="text-white/90 text-lg font-semibold tracking-wide">
            Payment Method
          </div>
        </div>

        <button
          type="button"
          onClick={removeMethod}
          className="h-12 px-5 rounded-full bg-gradient-to-br from-red-500 to-red-700 text-white font-semibold shadow-[0_0_18px_rgba(255,60,60,0.55)] hover:scale-[1.02] transition"
        >
          Remove
        </button>
      </div>

      {/* Main Panel */}
      <div className="flex-1 rounded-2xl bg-black/40 backdrop-blur-xl p-6 ring-1 ring-white/10 shadow-2xl">
        <div className="h-full rounded-3xl bg-gradient-to-br from-[#161616]/80 to-[#1F1F1F]/80 p-6 ring-1 ring-white/10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 h-full">

            {/* LEFT: Saved Method */}
            <div className="rounded-3xl bg-gradient-to-b from-[#242424] to-[#1A1A1A] p-6 flex flex-col ring-1 ring-orange-500/15 shadow-[0_0_25px_rgba(255,120,40,0.12)]">
              <div className="flex items-start justify-between">
                <h3 className="text-white font-semibold tracking-wide">
                  Saved Payment
                </h3>
                <span className="rounded-full bg-orange-500/15 px-3 py-1 text-xs text-orange-200 ring-1 ring-orange-400/25">
                  Stored locally (demo)
                </span>
              </div>

              <p className="mt-2 text-sm text-white/60 leading-relaxed">
                This is your currently saved payment method. For now it is stored
                in the browser (localStorage). Later this will be linked to your account.
              </p>

              <div className="mt-6 rounded-3xl bg-black/25 ring-1 ring-white/10 p-5 shadow-[0_0_22px_rgba(255,120,40,0.08)]">
                {method.type === "none" ? (
                  <div className="text-white/60 text-sm">
                    No payment method saved yet.
                    <div className="mt-3 text-xs text-white/40">
                      Add one on the right side.
                    </div>
                  </div>
                ) : method.type === "card" ? (
                  <>
                    <div className="flex items-center justify-between">
                      <div className="text-white font-semibold text-lg">
                        •••• •••• •••• {method.last4}
                      </div>
                      <BrandBadge brand={method.brand} />
                    </div>

                    <div className="mt-4 grid grid-cols-2 gap-3 text-sm">
                      <div className="rounded-2xl bg-white/5 ring-1 ring-white/10 p-4">
                        <div className="text-white/50 text-xs">Card Holder</div>
                        <div className="mt-1 text-white/85 font-semibold">
                          {method.holderName}
                        </div>
                      </div>

                      <div className="rounded-2xl bg-white/5 ring-1 ring-white/10 p-4">
                        <div className="text-white/50 text-xs">Expires</div>
                        <div className="mt-1 text-white/85 font-semibold">
                          {method.expMonth}/{method.expYear}
                        </div>
                      </div>
                    </div>

                    <div className="mt-4 text-xs text-white/45">
                      Tip: You can replace it anytime by saving a new one.
                    </div>
                  </>
                ) : (
                  <>
                    <div className="flex items-center justify-between">
                      <div className="text-white font-semibold text-lg">
                        PayPal
                      </div>
                      <span className="inline-flex items-center rounded-full px-3 py-1 text-xs text-white/80 bg-black/30 ring-1 ring-white/15 shadow-[0_0_18px_rgba(90,180,255,0.25)]">
                        Connected
                      </span>
                    </div>

                    <div className="mt-4 rounded-2xl bg-white/5 ring-1 ring-white/10 p-4">
                      <div className="text-white/50 text-xs">Email</div>
                      <div className="mt-1 text-white/85 font-semibold">
                        {method.email}
                      </div>
                    </div>

                    <div className="mt-4 text-xs text-white/45">
                      Tip: You can replace it anytime by saving a new one.
                    </div>
                  </>
                )}
              </div>

              {msg && (
                <div className="mt-5 rounded-2xl bg-white/5 ring-1 ring-white/10 p-4 text-sm text-white/80">
                  {msg}
                </div>
              )}

              <div className="mt-auto pt-6 text-xs text-white/40">
                Later: real billing + Stripe customer vault + invoices.
              </div>
            </div>

            {/* RIGHT: Add/Update Method */}
            <div className="rounded-3xl bg-gradient-to-b from-[#262626] to-[#1C1C1C] p-6 flex flex-col ring-2 ring-red-500/25 shadow-[0_0_35px_rgba(255,60,60,0.25)]">
              <div className="flex items-start justify-between">
                <h3 className="text-white font-semibold tracking-wide">
                  Add / Update
                </h3>
                <span className="rounded-full bg-red-500/15 px-3 py-1 text-xs text-red-200 ring-1 ring-red-400/25">
                  Setup
                </span>
              </div>

              <p className="mt-2 text-sm text-white/60 leading-relaxed">
                Choose a method and save it. This is a UI mock that matches the
                final dashboard experience.
              </p>

              {/* Tabs */}
              <div className="mt-5 flex gap-3">
                <button
                  type="button"
                  onClick={() => setTab("card")}
                  className={[
                    "rounded-full px-5 py-2 text-sm font-semibold ring-1 transition",
                    tab === "card"
                      ? "bg-gradient-to-r from-orange-400 to-orange-600 text-white ring-orange-400/40 shadow-[0_0_18px_rgba(255,140,60,0.45)]"
                      : "bg-white/5 text-white/70 ring-white/10 hover:bg-white/10",
                  ].join(" ")}
                >
                  Card
                </button>

                <button
                  type="button"
                  onClick={() => setTab("paypal")}
                  className={[
                    "rounded-full px-5 py-2 text-sm font-semibold ring-1 transition",
                    tab === "paypal"
                      ? "bg-gradient-to-r from-red-500 to-red-700 text-white ring-red-400/40 shadow-[0_0_18px_rgba(255,60,60,0.5)]"
                      : "bg-white/5 text-white/70 ring-white/10 hover:bg-white/10",
                  ].join(" ")}
                >
                  PayPal
                </button>
              </div>

              {/* Form */}
              {tab === "card" ? (
                <div className="mt-6 space-y-4">
                  <div>
                    <label className="block text-xs text-white/60 mb-2">
                      Card Holder Name
                    </label>
                    <input
                      value={holderName}
                      onChange={(e) => setHolderName(e.target.value)}
                      className="w-full rounded-2xl bg-[#2A2A2A] px-4 py-3 text-sm text-white placeholder:text-white/30 outline-none ring-1 ring-white/10 focus:ring-orange-400/60"
                      placeholder="e.g. John Pork"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs text-white/60 mb-2">
                        Brand
                      </label>
                      <select
                        value={brand}
                        onChange={(e) =>
                          setBrand(e.target.value as any)
                        }
                        aria-label="Card brand"
                        className="w-full rounded-2xl bg-[#2A2A2A] px-4 py-3 text-sm text-white outline-none ring-1 ring-white/10 focus:ring-orange-400/60"
                      >
                        <option>Visa</option>
                        <option>Mastercard</option>
                        <option>Amex</option>
                        <option>Other</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs text-white/60 mb-2">
                        Last 4 digits
                      </label>
                      <input
                        value={last4}
                        onChange={(e) => setLast4(e.target.value)}
                        className="w-full rounded-2xl bg-[#2A2A2A] px-4 py-3 text-sm text-white placeholder:text-white/30 outline-none ring-1 ring-white/10 focus:ring-orange-400/60"
                        placeholder="1234"
                        maxLength={4}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs text-white/60 mb-2">
                        Expiration Month
                      </label>
                      <input
                        value={expMonth}
                        onChange={(e) => setExpMonth(e.target.value)}
                        className="w-full rounded-2xl bg-[#2A2A2A] px-4 py-3 text-sm text-white placeholder:text-white/30 outline-none ring-1 ring-white/10 focus:ring-orange-400/60"
                        placeholder="MM"
                      />
                    </div>
                    <div>
                      <label className="block text-xs text-white/60 mb-2">
                        Expiration Year
                      </label>
                      <input
                        value={expYear}
                        onChange={(e) => setExpYear(e.target.value)}
                        className="w-full rounded-2xl bg-[#2A2A2A] px-4 py-3 text-sm text-white placeholder:text-white/30 outline-none ring-1 ring-white/10 focus:ring-orange-400/60"
                        placeholder="YYYY"
                      />
                    </div>
                  </div>

                  <div className="pt-2 flex justify-end">
                    <button
                      type="button"
                      onClick={saveCard}
                      className="rounded-full px-7 py-2 bg-gradient-to-r from-orange-400 to-orange-600 text-white font-semibold shadow-[0_0_18px_rgba(255,140,60,0.6)] hover:scale-105 transition"
                    >
                      Save Card
                    </button>
                  </div>

                  <div className="text-xs text-white/40">
                    Note: This is a demo UI. Later: real secure vault storage.
                  </div>
                </div>
              ) : (
                <div className="mt-6 space-y-4">
                  <div>
                    <label className="block text-xs text-white/60 mb-2">
                      PayPal Email
                    </label>
                    <input
                      value={paypalEmail}
                      onChange={(e) => setPaypalEmail(e.target.value)}
                      className="w-full rounded-2xl bg-[#2A2A2A] px-4 py-3 text-sm text-white placeholder:text-white/30 outline-none ring-1 ring-white/10 focus:ring-red-400/60"
                      placeholder="your@email.com"
                    />
                  </div>

                  <div className="rounded-2xl bg-white/5 ring-1 ring-white/10 p-4 text-sm text-white/70">
                    PayPal will be used for recurring server payments and invoices.
                  </div>

                  <div className="pt-2 flex justify-end">
                    <button
                      type="button"
                      onClick={savePaypal}
                      className="rounded-full px-7 py-2 bg-gradient-to-r from-red-500 to-red-700 text-white font-semibold shadow-[0_0_18px_rgba(255,60,60,0.55)] hover:scale-105 transition"
                    >
                      Save PayPal
                    </button>
                  </div>

                  <div className="text-xs text-white/40">
                    Note: This is a demo UI. Later: real PayPal/Stripe integration.
                  </div>
                </div>
              )}

              <div className="mt-auto pt-6 text-xs text-white/40">
                You can replace your method anytime — the last saved one is active.
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
}
