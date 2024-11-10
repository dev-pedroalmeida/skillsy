import Link from "next/link";
import { Button } from "./Button";

export default function Navbar() {
  return (
    <nav className="grid grid-cols-[1fr,2fr,1fr]">
      <h1 className="font-bold text-2xl">Skillsy</h1>
      <div className="flex items-center gap-8 justify-center">
        <Link href={"/"}>Home</Link>
        <Link href={"/pricing"}>Pricing</Link>
        <Link href={"/blog"}>Blog</Link>
      </div>
      <div className="flex items-center justify-end gap-4">
        <Button variant={"secondary"}>
          Log in
        </Button>
        <Button>
          Sign up
        </Button>
      </div>
    </nav>
  );
}
