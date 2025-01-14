import { Button } from "@/components/Button";
import { ArrowUpRight, ChevronsDown } from "lucide-react";
import Link from "next/link";
import * as motion from "motion/react-client";
import { BentoGridContainer, BentoGridItem } from "@/components/BentoGrid";

export default function Home() {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: {
            duration: 1,
          },
        }}
      >
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
      </motion.div>

      <div className="w-fit mx-auto my-20 rounded-full p-1 animate-bounce">
        <ChevronsDown size={30} />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: {
            duration: 1,
          },
        }}
      >
        <section className="mb-36">
          <h2 className="text-3xl font-bold mb-10 text-center">
            Porque escolher a Skillsy?
          </h2>
          <BentoGridContainer>
            <BentoGridItem
              title="Rede de Talentos Selecionados"
              subtitle="Somente os Melhores, Selecionados para Você"
              description="Cada freelancer da Skillsy é cuidadosamente avaliado e classificado, garantindo acesso a profissionais que entregam trabalho de qualidade, sempre."
              className="col-span-2"
            />
            <BentoGridItem
              title="Opções de Contratação Flexíveis"
              subtitle="Cresça Sob Demanda"
              description="Contrate para projetos pontuais, tarefas recorrentes ou parcerias de longo prazo. As opções flexíveis da Skillsy garantem que você pague apenas pelo que precisa."
            />
            <BentoGridItem
              title="Pagamentos Seguros"
              subtitle="Transações Seguras e Transparentes"
              description="Seus pagamentos ficam protegidos em uma conta de garantia até que o trabalho seja concluído, garantindo tranquilidade para você e seu freelancer."
            />
            <BentoGridItem
              title="Ferramentas de Colaboração em Tempo Real"
              subtitle="Gestão de Projetos Sem Complicações"
              description="Acompanhe seus projetos com as ferramentas integradas de comunicação e rastreamento da Skillsy. Veja o progresso, se comunique facilmente e cumpra todos os prazos."
              className="col-span-2"
            />
          </BentoGridContainer>
        </section>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
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
            Nossos Preços
          </h2>
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
