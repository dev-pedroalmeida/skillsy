import { Button } from "@/components/Button";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <main className="h-[80vh] mb-16 flex flex-col items-center justify-center bg-gradient-to-bl from-indigo-400 to-red-500 rounded-xl">
        <h1 className="text-center font-bold text-7xl mb-10 text-white tracking-tighter leading-tight drop-shadow-lg">
          Expanda seu Negócio
          <br />
          com <span className=""> Talentos Sob Demanda</span>
        </h1>
        <p className="text-center text-white text-lg">
          Encontre e contrate freelancers de alto nível para qualquer projeto
          <br />
          desde marketing até desenvolvimento
        </p>
        <Button
          className="mx-auto mt-16 tracking-tighter"
          size={"lg"}
          RightIcon={<ArrowUpRight />}
        >
          <Link href={"/"}>Comece agora de graça</Link>
        </Button>
      </main>
      <p>
        Junte-se a milhares de pequenas empresas e startups construindo suas
        equipes dos sonhos com a rede de especialistas da Skillsy.
      </p>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </>
  );
}
