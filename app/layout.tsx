import type { Metadata } from "next";
import "./globals.css";
import { Inter, Cinzel } from "next/font/google";

export const inter = Inter({
  subsets: ["latin"],
});

export const cinzel = Cinzel({
  subsets: ["latin"],
  weight: ["600", "700"],
});

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
    <html lang="en" className="h-full" suppressHydrationWarning>
      <body className={`h-full bg-nether-wallpaper text-white ${inter.className}`}>
        {children}
      </body>
    </html>
  );
}

