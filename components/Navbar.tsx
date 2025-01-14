"use client";

import Link from "next/link";
import { Button } from "./Button";
import { Url } from "next/dist/shared/lib/router/router";
import { cn } from "@/lib/utils";

export default function Navbar() {
  return (
    <nav id="top" className="grid grid-cols-[1fr,2fr,1fr] items-center bg-gray-50/60 backdrop-blur-[6px] py-2 px-4 mb-14 mx-2 rounded-xl sticky top-4 z-10">
      <h1 className="font-extrabold tracking-tighter text-xl text-black hover:text-neutral-800">
        <Link href={"/#top"}>SKILLSY</Link>
      </h1>
      <div className="flex items-center gap-10 justify-center text-sm">
        <NavLink href={"#funcionalidades"} text="Funcionalidades" />
        <NavLink href={"#precos"} text="Preços" />
        <NavLink href={"#blog"} text="Blog" />
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
}: {
  href: Url;
  text: string;
}) {
  return (
    <Link href={href}>
      <div
        className={cn(
          "py-1 px-4 rounded-md text-gray-800 hover:bg-indigo-100/50 hover:text-gray-900 transition-all"
        )}
      >
        {text}
      </div>
    </Link>
  );
}
