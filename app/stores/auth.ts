import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

type AuthState = {
    token: string | null;
    email: string | null;
    hasHydrated: boolean;
    setSession: (token: string, email: string | null) => void;
    logout: () => void;
    setHasHydrated: (v: boolean) => void;
};

export const useAuthStore = create<AuthState>()(
    persist(
        (set) => ({
            token: null,
            email: null,
            hasHydrated: false,
            setHasHydrated: (v) => set({ hasHydrated: v }),
            setSession: (token, email) => set({ token, email }),
            logout: () => set({ token: null, email: null }),
        }),
        {
            name: "auth_session",
            storage: createJSONStorage(() => localStorage),
            onRehydrateStorage: () => (state) => {
                state?.setHasHydrated(true);
            },
        }
    )
);

export function getAuthHeader(): Record<string, string> {
    const token = useAuthStore.getState().token;
    return token ? { Authorization: `Bearer ${token}` } : {};
}
