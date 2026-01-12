import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

type AuthState = {
    token: string | null;
    email: string | null;
    setSession: (token: string, email: string | null) => void;
    logout: () => void;
};

export const useAuthStore = create<AuthState>()(
    persist(
        (set) => ({
            token: null,
            email: null,
            setSession: (token, email) => set({ token, email }),
            logout: () => set({ token: null, email: null }),
        }),
        {
            name: "auth_session",
            storage: createJSONStorage(() => localStorage),
        }
    )
);

export function getAuthHeader(): Record<string, string> {
    const token = useAuthStore.getState().token;
    return token ? { Authorization: `Bearer ${token}` } : {};
}
