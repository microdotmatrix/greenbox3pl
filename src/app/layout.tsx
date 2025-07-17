import { Header } from "@/components/layout/header";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "GreenBox 3PL",
  description:
    "The preferred 3PL partner for Smoke Drop vendors. We specialize in cannabis accessory fulfillment with the personal touch your brand deserves. Compliant, reliable, and tailored to your unique needs.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          geistSans.variable,
          geistMono.variable,
          "antialiased [--nav-height:6rem] flex flex-col min-h-dvh"
        )}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
