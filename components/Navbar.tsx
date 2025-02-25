"use client";

import Link from "next/link";
import { Button } from "./Button";
import { NavLink } from "./NavLink";
import { MobileNavPopover } from "./MobileNavPopover";

export interface Item {
  text: string,
  href: string
}

const items : Item[] = [
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

export const Navbar = () => {
  return (
    <nav
      id="top"
      className="grid grid-cols-2 lg:grid-cols-[1fr,2fr,1fr] items-center bg-gray-50/60 backdrop-blur-[6px] py-2 px-4 mb-14 mx-4 md:mx-14 rounded-xl sticky top-4"
    >
      <h1 className="font-extrabold tracking-tighter text-xl text-black hover:text-neutral-800">
        <Link href={"/#top"}>SKILLSY</Link>
      </h1>
      <div className="hidden lg:flex items-center gap-10 justify-center text-sm">
        {items.map((item, index) => (
          <NavLink key={index} href={item.href} text={item.text} />
        ))}
      </div>
      <div className="hidden lg:flex items-center justify-end gap-4">
        <Button variant={"secondary"}>Entrar</Button>
        <Button>Cadastre-se</Button>
      </div>
      <div className="flex lg:hidden items-center justify-end">
        <MobileNavPopover items={items} />
      </div>
    </nav>
  );
};
