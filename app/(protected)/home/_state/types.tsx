export type Server = {
  id: string;
  name: string;
  maxPlayers: number;
  minecraftVersion: string;
  ramGb: number;
  cpuCores: number;
  modded: boolean;
  region: string;
  status: string;
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
