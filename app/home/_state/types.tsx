export type Server = {
  id: string;
  name: string;
  maxPlayers: number;
  version: string;
  ramGb: number;
  cpuCores: number;
  modded: boolean;
  region: string;
  running: boolean;
};

export type PaymentMethod =
  | { type: "none" }
  | {
      type: "card";
      holderName: string;
      brand: "Visa" | "Mastercard" | "Amex" | "Other";
      last4: string;
      expMonth: string;
      expYear: string;
    };
