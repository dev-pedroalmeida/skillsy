import { Button } from "@/components/Button";
import { ArrowUpRight, ChevronsDown } from "lucide-react";
import Link from "next/link";
import * as motion from "motion/react-client";
import { BentoGridContainer } from "@/components/BentoGrid";

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

      <div className="w-fit mx-auto my-20 rounded-full p-1 animate-bounce">
        <ChevronsDown size={30} />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: {
            duration: 1,
          },
        }}
      >
        <section>
          <h2 className="text-3xl font-bold mb-10 text-center">
            Porque escolher a Skillsy?
          </h2>
          <BentoGridContainer>
            <div className="bg-gray-100 p-8 rounded-lg shadow-sm col-span-2">
              <header className="mb-4">
                <h3 className="text-xl font-semibold">
                  Rede de Talentos Selecionados
                </h3>
                <p className="text-sm text-gray-500">
                  Somente os Melhores, Selecionados para Você
                </p>
              </header>
              <p className="text-gray-800">
                Cada freelancer da Skillsy é cuidadosamente avaliado e
                classificado, garantindo acesso a profissionais que entregam
                trabalho de qualidade, sempre.
              </p>
            </div>
          </BentoGridContainer>
        </section>
      </motion.div>

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
