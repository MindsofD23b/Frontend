"use client";

import { useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import { useAuthStore } from "../stores/auth";

export default function ProtectedLayout({ children }: { children: React.ReactNode }) {
    const router = useRouter();
    const pathname = usePathname();

    const hasHydrated = useAuthStore((s) => s.hasHydrated);
    const token = useAuthStore((s) => s.token);

    useEffect(() => {
        if (!hasHydrated) return;
        if (!token) {
            const next = encodeURIComponent(pathname ?? "/home");
            router.replace(`/login?next=${next}`);
        }
    }, [hasHydrated, token, router, pathname]);

    if (!hasHydrated) {
        return (
            <div className="min-h-screen grid place-items-center text-sm text-white/70">
                Loading session
            </div>
        );
    }

    if (!token) {
        return (
            <div className="min-h-screen grid place-items-center text-sm text-white/70">
                Redirecting
            </div>
        );
    }

    return <>{children}</>;
}
