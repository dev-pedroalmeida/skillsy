import type { Metadata } from "next";
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
      <body className={inter.className + "bg-gray-50 text-gray-900 max-w-screen overflow-x-hidden"}>
        <SidebarProvider>
          <Sidebar>
            <SidebarContent>
              <SidebarGroup className="flex flex-col">
                <SidebarGroupLabel className="flex justify-between">
                  <h1 className="font-extrabold tracking-tighter text-2xl text-black hover:text-neutral-800">
                    <Link href={"/#top"}>SKILLSY</Link>
                  </h1>
                  <SidebarTrigger />
                </SidebarGroupLabel>
                <SidebarGroupContent>
                  <SidebarMenu className="flex flex-col gap-4 my-6">
                    {items.map((item, index) => (
                      <SidebarMenuItem key={index}>
                        <SidebarMenuButton asChild>
                          <NavLink
                            className="hover:bg-transparent"
                            key={index}
                            href={item.href}
                            text={item.text}
                          />
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                    ))}
                  </SidebarMenu>
                </SidebarGroupContent>
                <SidebarGroupContent>
                  <SidebarMenu className="flex flex-col gap-4">
                    <SidebarMenuItem>
                      <Button className="w-full" variant={"secondary"}>
                        Entrar
                      </Button>
                    </SidebarMenuItem>
                    <SidebarMenuItem>
                      <Button className="w-full">Cadastre-se</Button>
                    </SidebarMenuItem>
                  </SidebarMenu>
                </SidebarGroupContent>
              </SidebarGroup>
            </SidebarContent>
          </Sidebar>
          <div>
            <Navbar items={items} />
            {children}
          </div>
        </SidebarProvider>
      </body>
    </html>
  );
}
