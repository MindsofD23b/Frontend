import { getAuthHeader, useAuthStore } from "../stores/auth";

const BASE_URL = process.env.NEXT_PUBLIC_BACKEND_URL ?? "http://localhost:3000";

function toRecordHeaders(h?: HeadersInit): Record<string, string> {
    if (!h) return {};

    if (h instanceof Headers) {
        const obj: Record<string, string> = {};
        h.forEach((v, k) => (obj[k] = v));
        return obj;
    }

    if (Array.isArray(h)) {
        return Object.fromEntries(h);
    }

    // object case
    return h as Record<string, string>;
}

export async function apiFetch(path: string, options: RequestInit = {}) {
    const merged: Record<string, string> = {
        "Content-Type": "application/json",
        ...toRecordHeaders(options.headers),
        ...getAuthHeader(),
    };

    const resp = await fetch(`${BASE_URL}${path}`, {
        ...options,
        headers: merged,
    });

    if (resp.status === 401 && typeof window !== "undefined") {
        useAuthStore.getState().logout();
    }

    return resp;
}
