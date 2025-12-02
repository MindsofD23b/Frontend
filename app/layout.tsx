import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nether Command",
  description: "Spreading Managed Democracy.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full">
      <body className="h-full bg-nether-wallpaper text-white">{children}</body>
    </html>
  );
}
