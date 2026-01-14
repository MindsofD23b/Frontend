"use client";

import { useState } from "react";

type Props = {
    label: string;
    value?: string;
    field: string;
    onSave?: (field: string, value: string) => Promise<void>;
    disabled?: boolean;
};

export function InlineField({
    label,
    value,
    field,
    onSave,
    disabled = false,
}: Props) {
    const [editing, setEditing] = useState(false);
    const [localValue, setLocalValue] = useState(value ?? "");
    const [saving, setSaving] = useState(false);

    async function handleSave() {
        if (!onSave) return;
        setSaving(true);
        await onSave(field, localValue);
        setSaving(false);
        setEditing(false);
    }

    return (
        <div className="rounded-2xl border border-white/10 bg-white/5 p-4 sm:p-5">
            {/* Header */}
            <div className="flex items-center justify-between gap-2">
                <div className="text-sm text-white/60">{label}</div>

                {!disabled && !editing && (
                    <button
                        onClick={() => setEditing(true)}
                        className="text-white/40 hover:text-white transition text-sm"
                        aria-label={`Edit ${label}`}
                    >
                        ✎
                    </button>
                )}
            </div>

            {/* Value / Editor */}
            {!editing ? (
                <div className="mt-1 text-white font-semibold break-words">
                    {value || "—"}
                </div>
            ) : (
                <div className="mt-3 flex flex-col sm:flex-row sm:items-center gap-2">
                    <input
                        className="w-full rounded-lg bg-black/40 border border-white/10 px-3 py-2 text-sm text-white outline-none focus:border-white/30"
                        value={localValue}
                        onChange={(e) => setLocalValue(e.target.value)}
                        autoFocus
                    />

                    <div className="flex gap-2 sm:flex-none">
                        <button
                            onClick={handleSave}
                            disabled={saving}
                            className="flex-1 sm:flex-none px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 transition text-sm"
                        >
                            ✓
                        </button>

                        <button
                            onClick={() => {
                                setLocalValue(value ?? "");
                                setEditing(false);
                            }}
                            className="flex-1 sm:flex-none px-4 py-2 rounded-lg bg-white/5 hover:bg-white/10 transition text-sm"
                        >
                            ✕
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}
