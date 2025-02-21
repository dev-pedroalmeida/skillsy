import { Button } from "@/components/Button";
import { ArrowUpRight, ChevronsDown } from "lucide-react";
import Link from "next/link";
import * as motion from "motion/react-client";
import { BentoGridContainer, BentoGridItem } from "@/components/BentoGrid";
import { PricingCard } from "@/components/PricingCard";
import { BlogCard } from "@/components/BlogCard";
import Image from "next/image";
import ctaImage from "../assets/cta.jpg";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div>
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: {
            duration: 1,
          },
        }}
        viewport={{ once: true }}
      >
        <main className="max-w-screen min-h-[80vh] mb-16 px-8 mx-4 md:mx-12 flex flex-col items-center justify-center bg-gradient-to-bl from-indigo-400 to-red-500 rounded-xl">
          <h1 className="text-center font-mono font-bold text-4xl md:text-6xl lg:text-7xl mb-6 text-neutral-50 tracking-tighter leading-tight drop-shadow-lg">
            Expanda seu Negócio
            <br />
            com <span className=""> Talentos Sob Demanda</span>
          </h1>
          <p className="text-center text-neutral-50 text-base md:text-lg">
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

      <div className="w-fit mx-auto mt-20 rounded-full p-1 animate-bounce">
        <ChevronsDown size={30} />
      </div>

      <section
        id="funcionalidades"
        className="mt-20 mb-20 py-28 bg-gray-100/80"
      >
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
          <div className="mx-4 md:mx-16 lg:mx-32">
            <h2 className="text-2xl md:text-4xl font-mono font-bold mb-10 text-center">
              Porque escolher a Skillsy?
            </h2>
            <BentoGridContainer>
              <BentoGridItem
                title="Rede de Talentos Selecionados"
                subtitle="Somente os Melhores, Selecionados para Você"
                description="Cada freelancer da Skillsy é cuidadosamente avaliado e classificado, garantindo acesso a profissionais que entregam trabalho de qualidade, sempre."
                className="md:col-span-2"
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
                className="md:col-span-2"
              />
            </BentoGridContainer>
          </div>
        </motion.div>
      </section>

      <section id="precos" className="mb-28 mx-4">
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
          <h2 className="pt-28 text-2xl md:text-4xl font-mono font-bold mb-10 text-center">
            Planos e preços
          </h2>

          <div className="flex justify-center gap-12 flex-wrap">
            <PricingCard
              title="Básico"
              price="50,00"
              description="Ideal para pequenas empresas"
              includesList={[
                "Até 5 freelancers por mês",
                "Até 3 projetos simultâneos",
                "Rastreamento de projetos",
                "Suporte via chat",
              ]}
            />

            <PricingCard
              isPopular={true}
              title="Profissional"
              price="199,00"
              description="Perfeito para empresas em crescimento"
              includesList={[
                "Até 15 freelancers por mês",
                "Até 10 projetos simultâneos",
                "Ferramentas avançadas de colaboração e integração",
                "Pagamentos seguros com gerenciamento de contratos",
                "Suporte prioritário",
              ]}
            />

            <PricingCard
              isPremium={true}
              title="Premium"
              price="399,00"
              description="Feito para empresas que precisam de soluções personalizadas e suporte constante"
              includesList={[
                "Acesso ilimitado a freelancers",
                "Gestão de projetos ilimitados",
                "Ferramentas premium de comunicação e análises detalhadas",
                "Gerente de conta dedicado",
                "Suporte 24/7",
              ]}
            />
          </div>
        </motion.div>
      </section>

      <section id="blog" className="mb-28 py-28">
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
          <h2 className="text-2xl md:text-4xl font-mono font-bold mb-10 text-center">
            Confira nosso blog
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mx-8 md:mx-14 lg:mx-40">
            <BlogCard
              title="5 Dicas para Encontrar o Freelancer Perfeito para Seu Projeto"
              description="Descubra como escolher o freelancer ideal para suas necessidades específicas. Desde a definição clara do escopo do projeto até a avaliação de portfólios e comunicação eficaz, aprenda as melhores práticas para garantir o sucesso do seu projeto."
              index="01"
            />
            <BlogCard
              title="Por Que a Flexibilidade é a Chave para o Sucesso das Pequenas Empresas"
              description="Exploramos como a contratação de freelancers pode oferecer a flexibilidade necessária para pequenas empresas crescerem sem os altos custos de uma equipe fixa. Veja como a Skillsy pode ajudar a adaptar seus recursos às demandas do mercado."
              index="02"
            />
            <BlogCard
              title="Como Gerenciar Projetos com Freelancers de Forma Eficiente"
              description="Gerenciar uma equipe remota pode ser desafiador. Neste post, compartilhamos dicas sobre como usar ferramentas de gestão de projetos e comunicação para garantir que seu projeto seja concluído no prazo e com alta qualidade."
              index="03"
            />
            <BlogCard
              title="Os Benefícios de Contratar Freelancers Especializados para Projetos de Curto Prazo"
              description="Descubra como a contratação de freelancers especializados pode trazer expertise de alto nível para seus projetos, sem o compromisso de longo prazo. Veja exemplos práticos de como pequenas empresas e startups estão se beneficiando dessa abordagem."
              index="04"
            />
          </div>
        </motion.div>
      </section>

      <section className="mb-36">
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
          <h2 className="text-2xl md:text-4xl font-bold mb-10 text-center font-mono">
            Pronto para Transformar Seu Negócio?
          </h2>
          <div className="rounded-xl bg-neutral-100 mx-8 md:mx-36 grid grid-cols-1 lg:grid-cols-2">
            <div className="px-8 py-6 md:px-12 md:py-8">
              <h1 className="font-extrabold tracking-tighter text-xl text-black">
                SKILLSY
              </h1>
              <p className="font-thin text-xl md:text-3xl my-10 text-balance">
                Seja você um iniciante ou precisa de habilidades especializadas
                para crescer, a Skillsy torna fácil encontrar o freelancer
                perfeito. Vamos construir sua equipe dos sonhos!
              </p>
              <Button>Junte-se à Skillsy Hoje</Button>
            </div>
            <div className="m-6 rounded-xl overflow-hidden">
              <Image src={ctaImage} alt="White board with notes" />
            </div>
          </div>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
}
