import { cn } from "@/lib/utils";
import { Url } from "next/dist/shared/lib/router/router";
import Link from "next/link";

export const NavLink = ({
  href,
  text,
  className,
}: {
  href: Url;
  text: string;
  className?: string;
}) => {
  return (
    <Link href={href}>
      <div
        className={cn(
          "py-1 px-4 rounded-md text-gray-800 hover:bg-indigo-100/50 hover:text-gray-900 hover:font-medium transition-all",
          className
        )}
      >
        {text}
      </div>
    </Link>
  );
};
