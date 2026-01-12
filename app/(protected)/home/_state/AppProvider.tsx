"use client";

import React, { createContext, useContext, useEffect, useMemo, useState } from "react";
import type { PaymentMethod, Server } from "./types";

type AppState = {
  servers: Server[];
  addServer: (s: Omit<Server, "id" | "running">) => void;
  deleteServer: (id: string) => void;
  setRunning: (id: string, running: boolean) => void;
  stopAll: () => void;

  payment: PaymentMethod;
  savePayment: (p: PaymentMethod) => void;
};

const STORAGE_SERVERS = "nethr_servers_v1";
const STORAGE_PAYMENT = "nethr_payment_v1";

const defaultServers: Server[] = [
  {
    id: "super-earth",
    name: "Super Earth Survival",
    maxPlayers: 20,
    version: "1.20.4",
    ramGb: 4,
    cpuCores: 2,
    modded: false,
    region: "EU",
    running: true,
  },
  {
    id: "survival",
    name: "Survival Minecraft World",
    maxPlayers: 10,
    version: "1.21",
    ramGb: 3,
    cpuCores: 2,
    modded: false,
    region: "EU",
    running: false,
  },
  {
    id: "creative",
    name: "Creative Test World",
    maxPlayers: 5,
    version: "1.20.1",
    ramGb: 2,
    cpuCores: 1,
    modded: false,
    region: "US",
    running: false,
  },
];

const AppCtx = createContext<AppState | null>(null);

function safeParse<T>(value: string | null): T | null {
  if (!value) return null;
  try {
    return JSON.parse(value) as T;
  } catch {
    return null;
  }
}

function makeId(name: string) {
  return (
    name
      .toLowerCase()
      .trim()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "") +
    "-" +
    Math.random().toString(16).slice(2, 8)
  );
}

export function AppProvider({ children }: { children: React.ReactNode }) {
  const [servers, setServers] = useState<Server[]>(defaultServers);
  const [payment, setPayment] = useState<PaymentMethod>({ type: "none" });

  // load
  useEffect(() => {
    const storedServers = safeParse<Server[]>(localStorage.getItem(STORAGE_SERVERS));
    if (storedServers && Array.isArray(storedServers)) setServers(storedServers);

    const storedPayment = safeParse<PaymentMethod>(localStorage.getItem(STORAGE_PAYMENT));
    if (storedPayment) setPayment(storedPayment);
  }, []);

  // persist
  useEffect(() => {
    localStorage.setItem(STORAGE_SERVERS, JSON.stringify(servers));
  }, [servers]);

  useEffect(() => {
    localStorage.setItem(STORAGE_PAYMENT, JSON.stringify(payment));
  }, [payment]);

  const value = useMemo<AppState>(() => {
    return {
      servers,

      addServer: (s) => {
        const id = makeId(s.name);
        setServers((prev) => [
          ...prev,
          {
            id,
            running: false,
            ...s,
          },
        ]);
      },

      deleteServer: (id) => {
        setServers((prev) => prev.filter((x) => x.id !== id));
      },

      setRunning: (id, running) => {
        setServers((prev) => prev.map((x) => (x.id === id ? { ...x, running } : x)));
      },

      stopAll: () => {
        setServers((prev) => prev.map((x) => ({ ...x, running: false })));
      },

      payment,

      savePayment: (p) => setPayment(p),
    };
  }, [servers, payment]);

  return <AppCtx.Provider value={value}>{children}</AppCtx.Provider>;
}

export function useApp() {
  const ctx = useContext(AppCtx);
  if (!ctx) throw new Error("useApp must be used inside AppProvider");
  return ctx;
}
