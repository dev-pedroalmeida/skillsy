import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Skillsy",
  description: "Scale Your Business with On-Demand Talent",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head />
      <body
        className={
          inter.className +
          "bg-gray-50 text-gray-900 min-h-screen"
        }
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
