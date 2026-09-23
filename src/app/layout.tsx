import type { Metadata } from "next";
import { Lobster, Outfit } from "next/font/google";
import "./globals.css";

// Same kind of script as the reference name.
const script = Lobster({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-script",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

export const metadata: Metadata = {
  title: "Muqadas Ibrar | Software Engineer",
  description:
    "I build AI-powered solutions, modern websites, and practical software applications that turn ideas into useful digital experiences.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${outfit.variable} ${script.variable}`}>
      <body className="min-h-[100dvh] antialiased">{children}</body>
    </html>
  );
}
