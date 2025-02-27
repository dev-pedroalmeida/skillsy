import { Menu } from "lucide-react";
import { Popover, PopoverTrigger } from "./ui/popover";
import { PopoverContent } from "@radix-ui/react-popover";
import { Item } from "./Navbar";
import * as motion from "motion/react-client";
import Link from "next/link";
import { Button } from "./Button";

export function MobileNavPopover({ items }: { items: Item[] }) {
  return (
    <Popover>
      <PopoverTrigger className="py-2 px-4 text-sm flex items-center justify-center rounded-md font-medium transition-all ease-out bg-gray-100 text-gray-900 hover:bg-gray-200">
        <Menu />
      </PopoverTrigger>
      <PopoverContent className="w-[90vw] overflow-hidden md:max-w-80 mx-3 mt-3">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="bg-gray-100/90 p-4 rounded-xl flex flex-col gap-1"
        >
          {items.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className="text-center py-2 px-12 hover:bg-gray-100 rounded-xl transition-all"
            >
              {item.text}
            </Link>
          ))}
          <Button variant={"secondary"} className="mt-2">Entrar</Button>
          <Button>Cadastre-se</Button>
        </motion.div>
      </PopoverContent>
    </Popover>
  );
}
