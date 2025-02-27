import { Button } from "@/components/Button";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="w-full flex flex-col gap-5 items-center justify-center text-center py-48 px-8">
      <h2 className="font-bold text-3xl md:text-4xl">Página não encontrada!</h2>
      <p>Tente voltar à página inicial</p>
      <Button>
        <Link href={"/"}>Página inicial</Link>
      </Button>
    </div>
  );
}
