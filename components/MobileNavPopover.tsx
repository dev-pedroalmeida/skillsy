import { Menu } from "lucide-react";
import { Button } from "./Button";
import { Popover, PopoverTrigger } from "./ui/popover";
import { PopoverContent } from "@radix-ui/react-popover";
import { Item } from "./Navbar";
import { NavLink } from "./NavLink";
import * as motion from "motion/react-client";
import Link from "next/link";

export function MobileNavPopover({ items }: { items: Item[] }) {
  return (
    <Popover>
      <PopoverTrigger className="py-2 px-4 text-sm flex items-center justify-center rounded-md font-medium transition-all ease-out bg-gray-100 text-gray-900 hover:bg-gray-200">
        <Menu />
      </PopoverTrigger>
      <PopoverContent className="w-[100vw] md:w-80">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="bg-gray-100/90 mx-4 mt-3 rounded-xl flex flex-col gap-2"
        >
          {items.map((item, index) => (
            <Link key={index} href={item.href} className="py-2 px-4">
              {item.text}
            </Link>
          ))}
        </motion.div>
      </PopoverContent>
    </Popover>
  );
}
