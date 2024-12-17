"use client";

import Link from "next/link";
import { Button } from "./Button";
import { Url } from "next/dist/shared/lib/router/router";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="grid grid-cols-[1fr,2fr,1fr] items-center bg-gray-50/80 backdrop-blur-[6px] py-2 px-4 rounded-lg sticky top-5 shadow-sm shadow-gray-500/10">
      <h1 className="font-bold text-xl">
        <Link href={"/"}>Skillsy</Link>
      </h1>
      <div className="flex items-center gap-10 justify-center text-sm">
        <NavLink href={"/pricing"} text="Preços" pathname={pathname} />
        <NavLink href={"/blog"} text="Blog" pathname={pathname} />
        <NavLink href={"/contato"} text="Contato" pathname={pathname} />
      </div>
      <div className="flex items-center justify-end gap-4">
        <Button variant={"secondary"}>Entrar</Button>
        <Button>Cadastre-se</Button>
      </div>
    </nav>
  );
}

function NavLink({
  href,
  text,
  pathname,
}: {
  href: Url;
  text: string;
  pathname: string;
}) {
  return (
    <Link href={href}>
      <div
        className={cn(
          "py-1 px-4 rounded-md text-gray-800 hover:bg-teal-100/50 hover:text-gray-900 transition-all",
          pathname === href ? "bg-teal-100/50 text-gray-900" : ""
        )}
      >
        {text}
      </div>
    </Link>
  );
}
