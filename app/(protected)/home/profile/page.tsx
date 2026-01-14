"use client";

import { useEffect, useState } from "react";
import { apiFetch } from "../../../service/apiClient";
import { InlineField } from "./InlineField";

export default function ProfilePage() {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    apiFetch("/user/me/profile")
      .then(res => res.json())
      .then(setData)
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <div className="flex-1 rounded-2xl bg-[#2A2A2A] p-6 text-white/70">
        Loading profile…
      </div>
    );
  }

  const { user, profile, stats } = data ?? {};

  async function updateProfileField(payload: Record<string, any>) {
    const res = await apiFetch("/user/me/profile", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    if (!res.ok) throw new Error("Update failed");
    return res.json();
  }
  async function handleSave(field: string, value: string) {
    const updatedProfile = await updateProfileField({ [field]: value });

    setData((prev: any) => ({
      ...prev,
      profile: {
        ...(prev.profile ?? {}),
        ...updatedProfile,
      },
    }));
  }


  return (
    <>
      {/* HEADER */}
      <div className="relative rounded-2xl bg-[#2A2A2A] px-4 sm:px-6 py-4 sm:py-5 mb-4 sm:mb-6 flex items-center justify-center">
        <div className="text-white/90 text-base sm:text-lg font-semibold tracking-wide">
          Profile
        </div>
      </div>

      {/* CONTENT */}
      <div className="flex-1 rounded-2xl bg-[#2A2A2A] p-4 sm:p-6 overflow-auto">
        <p className="text-lg sm:text-xl font-semibold mb-2">Your Account</p>
        <p className="text-white/70 mb-6">
          This page shows your account and profile information.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <InlineField label="Email" value={user?.email} field="email" disabled />

          <InlineField
            label="Firstname"
            value={profile?.firstName}
            field="firstName"
            onSave={handleSave}
          />

          <InlineField
            label="Lastname"
            value={profile?.lastName}
            field="lastName"
            onSave={handleSave}
          />

          <InlineField
            label="Phone"
            value={profile?.phone}
            field="phone"
            onSave={handleSave}
          />

          <InlineField
            label="Country"
            value={profile?.country}
            field="country"
            onSave={handleSave}
          />

          <InlineField label="Servers" value={stats.serverCount} field="servers" disabled />
        </div>

      </div>
    </>
  );
}

function Info({ label, value }: { label: string; value?: string }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-4 sm:p-5">
      <div className="text-sm text-white/60">{label}</div>
      <div className="mt-1 text-white font-semibold">
        {value || "—"}
      </div>
    </div>
  );
}
