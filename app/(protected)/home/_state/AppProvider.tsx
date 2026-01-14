"use client";

import React, { createContext, useContext, useEffect, useMemo, useState } from "react";
import type { PaymentMethod, Server } from "./types";
import { apiFetch } from "@/app/service/apiClient";

type AppState = {
  servers: Server[];
  addServer: (s: Omit<Server, "id" | "status">) => void;
  deleteServer: (id: string) => void;
  setRunning: (id: string, status: string) => void;
  stopAll: () => void;

  payment: PaymentMethod;
  savePayment: (p: PaymentMethod) => void;
};

const STORAGE_SERVERS = "nethr_servers_v1";
const STORAGE_PAYMENT = "nethr_payment_v1";

const defaultServers: Server[] = await fetch_server();

async function fetch_server() {
  const res = await apiFetch("/servers", { method: "GET" });

  const data = await res.json();

  return data.servers;
}

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
            status: "STOPPED",
            ...s,
          },
        ]);
      },

      deleteServer: async (id) => {
        setServers((prev) => prev.filter((x) => x.id !== id));
        await apiFetch(`/servers/${id}`, { method: "DELETE" });
      },

      setRunning: (id, status) => {
        setServers((prev) => prev.map((x) => (x.id === id ? { ...x, status } : x)));
      },

      stopAll: () => {
        setServers((prev) => prev.map((x) => ({ ...x, status: "STOPPED" })));
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
