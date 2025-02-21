import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import Link from "next/link";
import { NavLink } from "@/components/NavLink";
import { Button } from "@/components/Button";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Skillsy",
  description: "Scale Your Business with On-Demand Talent",
};

export const viewpost: Viewport = {
  width: "device-width",
};

const items = [
  {
    text: "Funcionalidades",
    href: "#funcionalidades",
  },
  {
    text: "Preços",
    href: "#precos",
  },
  {
    text: "Blog",
    href: "#blog",
  },
];

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
        <Navbar items={items} />
        {children}
      </body>
    </html>
  );
}
