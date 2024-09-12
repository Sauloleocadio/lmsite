"use client";

import {
  FloatingButtons,
  Footer,
  Header,
  HeroSection,
  ModalRoulette,
  Products,
  Whyanlm,
} from "@/app/components";
import { month } from "@/app/utils/month";
import Head from "next/head";
import { Toaster } from "react-hot-toast";

export default function Home() {
  return (
    <div className="bg-gray-100 text-gray-800">
      <ModalRoulette />
      <Toaster />
      <FloatingButtons />
      <Head>
        <title>Estética Automotiva</title>
        <meta
          name="description"
          content="Serviços de Estética Automotiva de Qualidade"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Cabeçalho */}
      <Header />

      {/* Apresentação */}
      <HeroSection />

      {/* Seção de Serviços */}
      <section id="serviços" className="py-2 bg-white">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold text-blue-600">Nossos Serviços</h2>
          <p className="text-gray-600 mt-4">
            Oferecemos uma gama completa de serviços para manter seu carro
            impecável.
          </p>

          <Products promotion={false} />
        </div>
      </section>

      {/* Porque escolher a LM */}
      <section id="porque" className="py-2 bg-white">
        <div className="container mx-auto text-center">
          <Whyanlm />
        </div>
      </section>

      {/* Ofertas da semana */}

      <section id="promoções" className="py-2 bg-white">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold text-blue-600">
            Ofertas do mês de {month}
          </h2>
          <p className="text-gray-600 mt-4">
            🔥 Ofertas Imperdíveis do mês de {month}! 🔥 Não perca essa chance
            única de aproveitar descontos incríveis em nossos serviços de
            estética automotiva! 🚗✨ Válido apenas até o final deste mês de{" "}
            {month} – garanta o melhor para o seu carro antes que acabe! ⏳💥 👉
            Corre! As vagas são limitadas e o tempo está acabando!
          </p>
          <Products promotion />
        </div>
      </section>

      {/* Rodapé */}
      <section id="informações" className="py-2 bg-white">
        <Footer />
      </section>
    </div>
  );
}
