"use client";

import { sendWhatsapp } from "@/app/utils/sendlinks";
import Image, { StaticImageData } from "next/image";
import { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import Drawer from "./Drawer";

import {
  image1,
  image10,
  image11,
  image12,
  image13,
  image14,
  image15,
  image16,
  image17,
  image18,
  image19,
  image2,
  image20,
  image21,
  image22,
  image3,
  image4,
  image5,
  image6,
  image7,
  image8,
  image9,
} from "@/app/assets/images/products";

type PropsProducts = {
  promotion: boolean;
};

export interface Products {
  id: number;
  name: string;
  href: string;
  imageSrc: StaticImageData;
  price: string;
  oldPrice: string;
  percentage: string;
  observation: string;
  trophy: string;
  details: string;
}

export interface ProductsWithPromotion extends Products {}

type PropsOpen = {
  promotion: boolean;
  products: Products;
  productsWithPromotion: ProductsWithPromotion;
};

const products: Products[] = [
  {
    id: 1,
    name: "Lavagem rotativa (carro)",
    href: "#lavagemcarro",
    imageSrc: image1,
    price: "R$ 39,90",
    oldPrice: "R$ 80",
    percentage: "50% de desconto",
    observation: "*Preço pode variar a partir do tamanho e sujidade do carro",
    trophy: "💸 Super Desconto",
    details:
      "Amplo processo de limpeza interna e lavagem externa, a onde vai um amplo processo de aspiração de cabine e porta malas, limpeza úmida e hidratação de painel e console, remoção de sujidades do pneu, caixas de rodas, aplicação de pretinho, limpeza dos vidros e enceramento da lataria do veículo. Temos todo o cuidado de um rico check-list de qualidade, penssado para quem está querendo qualidade, preço justo e uma lavagem mais rápida pro dia a dia de rotina.",
  },
  {
    id: 2,
    name: "Lavagem detalhada (carro)",
    href: "#lavagemcarro",
    imageSrc: image2,
    price: "R$ 99,90",
    oldPrice: "R$ 150",
    percentage: "33% de desconto",
    observation: "*Preço pode variar a partir do tamanho e sujidade do carro",
    trophy: "🔥 Mais vendido",
    details:
      "Nosso processo de lavagem detalhada oferece um cuidado minucioso tanto no interior quanto no exterior do veículo, garantindo um acabamento impecável. A limpeza interna inclui uma aspiração completa da cabine e do porta-malas, seguida de uma limpeza úmida e hidratação do painel e console, garantindo que todos os detalhes estejam livres de impurezas. Os pneus e as caixas de rodas recebem uma atenção especial com remoção de sujidades, aplicação de pretinho e condicionamento com duração de mais de 30 dias, trazendo um visual renovado. Externamente, realizamos uma lavagem completa e cuidadosa, seguida da aplicação de uma cera em pasta de alta qualidade com duração de até 4 meses, que proporciona proteção e brilho duradouro para a lataria. Também fazemos a restauração dos plásticos externos e internos com duração de 2 meses os externos e 6 meses os internos, garantindo que os detalhes do veículo estejam como novos. Os vidros são limpos com precisão, proporcionando máxima visibilidade, trazendo produtos anti-risco, enquanto a manutenção da pintura ajuda a preservar a estética original do seu veículo. Para garantir que cada detalhe seja impecável, contamos com um rigoroso check-list de qualidade. Nosso serviço é ideal para quem busca não só uma limpeza de rotina, mas um tratamento superior para seu carro, com preço justo e acabamento de excelência.",
  },
  {
    id: 3,
    name: "Polimento comercial (carro)",
    href: "#polimento",
    imageSrc: image3,
    price: "R$ 449,90",
    oldPrice: "R$ 700",
    percentage: "35% de desconto",
    observation: "*Preço pode variar a partir do tamanho e sujidade do carro",
    trophy: "✨ Sucesso de vendas",
    details:
      "Este polimento comercial traz de volta o brilho original do seu carro, removendo pequenas imperfeições na pintura. Utilizamos produtos de alta qualidade para garantir um acabamento duradouro e impecável. Ideal para quem deseja um serviço eficaz e acessível, sem abrir mão de um excelente resultado estético.",
  },
  {
    id: 4,
    name: "Polimento técnico (carro)",
    href: "#polimento",
    imageSrc: image4,
    price: "R$ 899,90",
    oldPrice: "R$ 1200",
    percentage: "25% de desconto",
    observation: "*Preço pode variar a partir do tamanho e sujidade do carro",
    trophy: "⬆️ Top de Linha",
    details:
      "O polimento técnico é um tratamento especializado que restaura profundamente a pintura do seu carro, corrigindo arranhões, oxidações e defeitos mais graves. Usamos equipamentos e produtos de última geração para garantir uma restauração profissional e duradoura, trazendo um brilho incomparável à pintura.",
  },
  {
    id: 5,
    name: "Higienização interna",
    href: "#higienização",
    imageSrc: image5,
    price: "R$ 400",
    oldPrice: "R$ 600",
    percentage: "33% de desconto",
    observation: "*Preço pode variar a partir do tamanho e sujidade do carro",
    trophy: "💙 Preferido pelos clientes",
    details:
      "Nossa higienização interna elá é feita em 4 etapas, etapa de aspiração, limpeza com antibactericida, uso de bactericida para matar todos os tipos ácaros, fungos e bactérias e um santetizante a onde  garante a proteção de até 3 meses contra ácaros, fungos e bactérias, proporcionando um ambiente mais saudável e confortável dentro do veículo. Realizamos uma limpeza completa dos estofados, carpetes e painéis, deixando seu carro com um aroma agradável e livre de impurezas com Restauração dos plásticos com aplicação de proteção UV com durabilidade de 6 meses, aplicação de oxi-sanitização para remover o mau cheiro e eliminar 99,9% dos fungos.",
  },
  {
    id: 6,
    name: "Restauração de farol",
    href: "#farol",
    imageSrc: image6,
    price: "R$ 149,90 (o par)",
    oldPrice: "R$ 200",
    percentage: "25% de desconto",
    observation: "*Preço pode variar a partir do tamanho e sujidade do carro",
    trophy: "🤝 Exclusivo",
    details:
      "Nossa restauração de faróis remove a opacidade e os danos causados pelo tempo, devolvendo a transparência e a eficiência original do sistema de iluminação do veículo. Usamos técnicas especializadas para garantir a durabilidade do serviço, além de melhorar a visibilidade e a segurança ao dirigir à noite.",
  },
  {
    id: 7,
    name: "Lavagem rotativa (moto)",
    href: "#lavagemmoto",
    imageSrc: image7,
    price: "R$ 20",
    oldPrice: "R$ 50",
    percentage: "60% de desconto",
    observation: "*Preço pode variar a partir do tamanho e sujidade da moto",
    trophy: "💸 Super Desconto",
    details:
      "Lavagem rotativa especialmente projetada para motos, combinando rapidez e eficiência. Inclui a limpeza completa da carenagem, pneus e rodas, além da aplicação de produtos que mantêm a pintura e os plásticos protegidos. Ideal para o dia a dia, com um ótimo custo-benefício.",
  },
  {
    id: 8,
    name: "Lavagem detalhada (moto)",
    href: "#lavagemmoto",
    imageSrc: image8,
    price: "R$ 99,90",
    oldPrice: "R$ 150",
    percentage: "33% de desconto",
    observation: "*Preço pode variar a partir do tamanho e sujidade da moto",
    trophy: "🔥 Mais vendido",
    details:
      "Nosso serviço de lavagem detalhada para motos garante uma limpeza profunda em todas as partes do veículo, incluindo motor, rodas e carenagem. Aplicamos produtos especiais para dar brilho e proteção extra, garantindo uma moto limpa e brilhante por mais tempo.",
  },
  {
    id: 9,
    name: "Polimento comercial (moto)",
    href: "#lavagemmoto",
    imageSrc: image9,
    price: "R$ 229,90",
    oldPrice: "R$ 400",
    percentage: "43% de desconto",
    observation: "*Preço pode variar a partir do tamanho e sujidade da moto",
    trophy: "✨ Sucesso de vendas",
    details:
      "O polimento comercial para motos restaura o brilho original da pintura, removendo pequenas imperfeições e arranhões. Utilizamos produtos de alta performance que proporcionam um acabamento impecável, realçando a beleza e a cor da sua moto.",
  },
  {
    id: 10,
    name: "Polimento técnico (moto)",
    href: "#lavagemmoto",
    imageSrc: image10,
    price: "R$ 399,90",
    oldPrice: "R$ 600",
    percentage: "33% de desconto",
    observation: "*Preço pode variar a partir do tamanho e sujidade da moto",
    trophy: "⬆️ Top de Linha",
    details:
      "Nosso polimento técnico para motos é uma solução profissional para quem busca restaurar a pintura, corrigindo arranhões profundos e marcas de uso. Usamos equipamentos e produtos de última geração para um acabamento superior e duradouro, garantindo proteção à pintura.",
  },
  {
    id: 11,
    name: "Vitrificação de vidros",
    href: "#vitrificação",
    imageSrc: image11,
    price: "R$ 99,90",
    oldPrice: "R$ 150",
    percentage: "33% de desconto",
    observation:
      "*Preço pode variar a partir do tamanho, sujidade do carro e o coating cerámico",
    trophy: "🤝 Exclusivo",
    details:
      "A vitrificação de vidros cria uma camada protetora que repele água e sujeira, melhorando a visibilidade em condições de chuva e facilitando a limpeza. Este tratamento é ideal para aumentar a durabilidade dos vidros, trazendo mais segurança e praticidade no dia a dia.",
  },
  {
    id: 12,
    name: "Vitrificação de pintura",
    href: "#vitrificação",
    imageSrc: image12,
    price: "R$ 999,90",
    oldPrice: "R$ 1500",
    percentage: "33% de desconto",
    observation:
      "*Preço pode variar a partir do tamanho, sujidade do carro e o coating cerámico",
    trophy: "😮 Imperdível",
    details:
      "A vitrificação de pintura é uma proteção duradoura que cria uma película resistente sobre a lataria onde protege o verniz do veículo, preservando o brilho e evitando danos causados pelo tempo, como manchas e riscos. Perfeita para manter a pintura do seu veículo impecável por meses ou anos.",
  },
  {
    id: 13,
    name: "Vitrificação de plásticos",
    href: "#vitrificação",
    imageSrc: image13,
    price: "R$ 189,90",
    oldPrice: "R$ 250",
    percentage: "31% de desconto",
    observation:
      "*Preço pode variar a partir do tamanho, sujidade do carro e o coating cerámico",
    trophy: "😮 Imperdível",
    details:
      "Este serviço renova e protege as partes plásticas do seu veículo, criando uma camada que impede o desbotamento e traz de volta a aparência original. A vitrificação de plásticos é ideal para quem deseja prolongar a vida útil e a estética dessas peças.",
  },
  {
    id: 14,
    name: "Vitrificação de motor",
    href: "#vitrificação",
    imageSrc: image14,
    price: "R$ 189,90",
    oldPrice: "R$ 250",
    percentage: "31% de desconto",
    observation:
      "*Preço pode variar a partir do tamanho, sujidade do carro e o coating cerámico",
    trophy: "😮 Imperdível",
    details:
      "A vitrificação de motor oferece uma camada protetora resistente à sujeira e ao calor, mantendo o compartimento do motor sempre limpo e com aparência nova. Esse tratamento aumenta a durabilidade das peças e facilita a manutenção do veículo.",
  },
  {
    id: 15,
    name: "Vitrificação de banco de couro",
    href: "#vitrificação",
    imageSrc: image15,
    price: "R$ 189,90",
    oldPrice: "R$ 250",
    percentage: "31% de desconto",
    observation:
      "*Preço pode variar a partir do tamanho, sujidade do carro e o coating cerámico",
    trophy: "😮 Imperdível",
    details:
      "Nossa vitrificação de bancos de couro garante proteção contra rachaduras, desbotamento e manchas, mantendo o couro hidratado e com aparência renovada. Esse tratamento prolonga a vida útil dos bancos e preserva o conforto e a estética do veículo.",
  },
  {
    id: 16,
    name: "Limpeza técnica do motor",
    href: "#diversos",
    imageSrc: image16,
    price: "R$ 60",
    oldPrice: "R$ 120",
    percentage: "50% de desconto",
    observation: "*Preço pode variar a partir do tamanho e sujidade do carro",
    trophy: "👉 Recomendado",
    details:
      "A limpeza técnica do motor remove sujeiras acumuladas, óleo e resíduos, mantendo o compartimento do motor limpo e eficiente. Usamos técnicas seguras e produtos especializados para garantir a proteção das peças durante o processo.",
  },
  {
    id: 17,
    name: "Limpeza técnica de chassi",
    href: "#diversos",
    imageSrc: image17,
    price: "R$ 80",
    oldPrice: "R$ 160",
    percentage: "50% de desconto",
    observation: "*Preço pode variar a partir do tamanho e sujidade do carro",
    trophy: "👉 Recomendado",
    details:
      "A limpeza técnica de chassi remove detritos, lama e sujeira acumulada nas partes mais baixas do veículo, garantindo a preservação e o bom funcionamento da estrutura. Ideal para manter o carro em perfeitas condições, especialmente em estradas sujas ou lamaçais.",
  },
  {
    id: 18,
    name: "Limpeza técnica de rodas e caixas",
    href: "#diversos",
    imageSrc: image18,
    price: "R$ 40",
    oldPrice: "R$ 80",
    percentage: "50% de desconto",
    observation: "*Preço pode variar a partir do tamanho e sujidade do carro",
    trophy: "👉 Recomendado",
    details:
      "Este serviço remove a sujeira acumulada nas rodas e caixas de roda, oferecendo um tratamento detalhado para essas áreas muitas vezes esquecidas. Garante não só um visual mais limpo, mas também protege contra o desgaste prematuro.",
  },
  {
    id: 19,
    name: "Impermeabilização",
    href: "#diversos",
    imageSrc: image19,
    price: "R$ 249,90",
    oldPrice: "R$ 400",
    percentage: "60% de desconto",
    observation: "*Preço pode variar a partir do tamanho e sujidade do carro",
    trophy: "💎 Seleção Premium",
    details:
      "Nossa impermeabilização é ideal para estofados e carpetes, criando uma barreira contra líquidos e sujeiras. Mantém o interior do veículo protegido contra derramamentos e manchas, facilitando a limpeza e prolongando a durabilidade dos materiais.",
  },
  {
    id: 20,
    name: "Hidratação de couro",
    href: "#diversos",
    imageSrc: image20,
    price: "R$ 60",
    oldPrice: "R$ 120",
    percentage: "50% de desconto",
    observation: "*Preço pode variar a partir do tamanho e sujidade do carro",
    trophy: "👉 Recomendado",
    details:
      "Nosso serviço de hidratação de couro é ideal para preservar a durabilidade e o aspecto novo dos bancos de couro do seu veículo. Utilizamos produtos de alta qualidade que penetram nas fibras, mantendo a maciez e evitando o ressecamento. Além de proporcionar proteção contra rachaduras e desgaste, a hidratação garante uma aparência renovada e toque suave, prolongando a vida útil do material. Este é um cuidado essencial para manter o interior do carro com aspecto luxuoso e bem conservado, com durabilidade garantida.",
  },
  {
    id: 21,
    name: "Oxi-Sanitização",
    href: "#diversos",
    imageSrc: image21,
    price: "R$ 49,90",
    oldPrice: "R$ 100",
    percentage: "50% de desconto",
    observation: "*Preço pode variar a partir do tamanho e sujidade do carro",
    trophy: "👉 Recomendado ",
    details:
      "A Oxi-Sanitização é um processo avançado que elimina fungos, bactérias e odores desagradáveis do interior do veículo, usando tecnologia de oxigênio ativo. Ideal para quem busca um ambiente mais saudável e livre de contaminações, com ação prolongada.",
  },
  {
    id: 22,
    name: "Combos",
    href: "#combos",
    imageSrc: image22,
    price: "R$ 0",
    oldPrice: "R$ 0",
    percentage: "Pode variar pelo combo escolhido, conversar com a LM",
    observation: "*Preço pode variar a partir do tamanho e sujidade do carro",
    trophy: "💎 Seleção Premium",
    details:
      "Nossos combos oferecem uma combinação de serviços com um preço especial, garantindo uma manutenção completa para o seu veículo. Aproveite para cuidar da pintura, vidros e interior com um desconto exclusivo. Ideal para quem busca economia e resultados de alto padrão.",
  },
];

const productsWithPromotion: ProductsWithPromotion[] = [
  {
    id: 1,
    name: "Lavagem rotativa (carro)",
    href: "#lavagemcarro",
    imageSrc: image1,
    price: "R$ 39,90",
    oldPrice: "R$ 80",
    percentage: "50% de desconto",
    observation: "*Preço pode variar a partir do tamanho e sujidade do carro",
    trophy: "🤑 Escolha do Mês",
    details:
      "Amplo processo de limpeza interna e lavagem externa, a onde vai um amplo processo de aspiração de cabine e porta malas, limpeza úmida e hidratação de painel e console, remoção de sujidades do pneu, caixas de rodas, aplicação de pretinho, limpeza dos vidros e enceramento da lataria do veículo. Temos todo o cuidado de um rico check-list de qualidade, penssado para quem está querendo qualidade, preço justo e uma lavagem mais rápida pro dia a dia de rotina.",
  },
  {
    id: 2,
    name: "Lavagem detalhada (carro)",
    href: "#lavagemcarro",
    imageSrc: image2,
    price: "R$ 99,90",
    oldPrice: "R$ 150",
    percentage: "33% de desconto",
    observation: "*Preço pode variar a partir do tamanho e sujidade do carro",
    trophy: "🤑 Escolha do Mês",
    details:
      "Nosso processo de lavagem detalhada oferece um cuidado minucioso tanto no interior quanto no exterior do veículo, garantindo um acabamento impecável. A limpeza interna inclui uma aspiração completa da cabine e do porta-malas, seguida de uma limpeza úmida e hidratação do painel e console, garantindo que todos os detalhes estejam livres de impurezas. Os pneus e as caixas de rodas recebem uma atenção especial com remoção de sujidades, aplicação de pretinho e condicionamento com duração de mais de 30 dias, trazendo um visual renovado. Externamente, realizamos uma lavagem completa e cuidadosa, seguida da aplicação de uma cera em pasta de alta qualidade com duração de até 4 meses, que proporciona proteção e brilho duradouro para a lataria. Também fazemos a restauração dos plásticos externos e internos com duração de 2 meses os externos e 6 meses os internos, garantindo que os detalhes do veículo estejam como novos. Os vidros são limpos com precisão, proporcionando máxima visibilidade, trazendo produtos anti-risco, enquanto a manutenção da pintura ajuda a preservar a estética original do seu veículo. Para garantir que cada detalhe seja impecável, contamos com um rigoroso check-list de qualidade. Nosso serviço é ideal para quem busca não só uma limpeza de rotina, mas um tratamento superior para seu carro, com preço justo e acabamento de excelência.",
  },
  {
    id: 3,
    name: "Polimento comercial",
    href: "#polimento",
    imageSrc: image3,
    price: "R$ 449,90",
    oldPrice: "R$ 700",
    percentage: "35% de desconto",
    observation: "*Preço pode variar a partir do tamanho e sujidade do carro",
    trophy: "🤑 Escolha do Mês",
    details:
      "Este polimento comercial traz de volta o brilho original do seu carro, removendo pequenas imperfeições na pintura. Utilizamos produtos de alta qualidade para garantir um acabamento duradouro e impecável. Ideal para quem deseja um serviço eficaz e acessível, sem abrir mão de um excelente resultado estético.",
  },
  {
    id: 4,
    name: "Vitrificação de pintura",
    href: "#vitrificação",
    imageSrc: image12,
    price: "R$ 999,90",
    oldPrice: "R$ 1500",
    percentage: "33% de desconto",
    observation:
      "*Preço pode variar a partir do tamanho, sujidade do carro e o coating cerámico",
    trophy: "🤑 Escolha do Mês",
    details:
      "A vitrificação de pintura é uma proteção duradoura que cria uma película resistente sobre a lataria onde protege o verniz do veículo, preservando o brilho e evitando danos causados pelo tempo, como manchas e riscos. Perfeita para manter a pintura do seu veículo impecável por meses ou anos.",
  },
];

export default function Products({ promotion }: PropsProducts) {
  const [open, setOpen] = useState(false);
  const [productsInfo, setProductsInfo] = useState({} as Products);
  const [productsWithPromotionInfo, setProductsWithPromotionInfo] = useState(
    {} as ProductsWithPromotion
  );

  function handleProductsOpen({
    products,
    productsWithPromotion,
    promotion,
  }: PropsOpen) {
    if (promotion) {
      setProductsWithPromotionInfo(productsWithPromotion);
    } else {
      setProductsInfo(products);
    }
    setOpen(true);
  }

  if (promotion) {
    return (
      <>
        <Drawer
          open={open}
          setOpen={setOpen}
          products={{} as Products}
          productsWithPromotion={productsWithPromotionInfo}
        />
        <div className="bg-white">
          <div className="mx-auto max-w-2xl px-4 py-8 sm:px-6 sm:py-12 lg:max-w-7xl lg:px-8">
            <div className="mt-2 grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8 place-items-center">
              {productsWithPromotion.map((product) => (
                <div id={product.href.replace("#", "")} key={product.id}>
                  <div className="relative">
                    <div className="relative h-72 w-full overflow-hidden rounded-lg">
                      <Image
                        width={1080}
                        height={1080}
                        alt={product.name}
                        src={product.imageSrc}
                        className="h-full w-full object-cover object-center"
                      />
                    </div>
                    <div className="relative mt-4">
                      <h3 className="text-xl text-gray-900 font-bold">
                        {product.name}
                      </h3>
                      <p className="mt-1 text-sm text-gray-500 line-through">
                        de: {product.oldPrice}
                      </p>
                      <p className="mt-1 text-base text-black font-bold">
                        por apenas: {product.price}
                      </p>
                      <p className="mt-1 text-sm text-green-500 font-semibold">
                        ({product.percentage})
                      </p>
                      <p className="mt-1 text-xs text-gray-500 font-medium">
                        {product.observation}
                      </p>
                    </div>
                    <div className="absolute inset-x-0 top-0 flex h-72 items-end justify-end overflow-hidden rounded-lg p-4 flex-col">
                      <div
                        aria-hidden="true"
                        className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-black opacity-50"
                      />

                      <p className="relative text-xs font-semibold text-green-600 bg-white px-2 rounded-full">
                        {product.trophy}
                      </p>
                    </div>
                  </div>
                  <div className="mt-6 gap-2 flex flex-col">
                    <a
                      href={sendWhatsapp(
                        `Olá quero agendar um serviço de ${product.name} com a LM`
                      )}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full gap-1 relative flex items-center justify-center rounded-md border border-transparent bg-green-500 px-8 py-2 text-sm text-white font-bold hover:bg-green-700"
                    >
                      <FaWhatsapp size={18} /> Agendar serviço
                    </a>
                    <button
                      onClick={() =>
                        handleProductsOpen({
                          products: {} as Products,
                          productsWithPromotion: product,
                          promotion: true,
                        })
                      }
                      className="text-xs font-semibold leading-6 text-blue-700"
                    >
                      Ver detalhes do serviço
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <Drawer
        open={open}
        setOpen={setOpen}
        products={productsInfo}
        productsWithPromotion={{} as ProductsWithPromotion}
      />
      <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 py-8 sm:px-6 sm:py-12 lg:max-w-7xl lg:px-8">
          <div className="mt-2 grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8">
            {products.map((product) => (
              <div id={product.href.replace("#", "")} key={product.id}>
                <div className="relative">
                  <div className="relative h-72 w-full overflow-hidden rounded-lg">
                    <Image
                      width={1080}
                      height={1080}
                      alt={product.name}
                      src={product.imageSrc}
                      className="h-full w-full object-cover object-center"
                    />
                  </div>
                  <div className="relative mt-4">
                    <h3 className="text-xl text-gray-900 font-bold">
                      {product.name}
                    </h3>
                    <p className="mt-1 text-sm text-gray-500 line-through">
                      de: {product.oldPrice}
                    </p>
                    <p className="mt-1 text-base text-black font-bold">
                      por apenas: {product.price}
                    </p>
                    <p className="mt-1 text-sm text-green-500 font-semibold">
                      ({product.percentage})
                    </p>
                    <p className="mt-1 text-xs text-gray-500 font-medium">
                      {product.observation}
                    </p>
                  </div>
                  <div className="absolute inset-x-0 top-0 flex h-72 items-end justify-end overflow-hidden rounded-lg p-4 flex-col">
                    <div
                      aria-hidden="true"
                      className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-black opacity-50"
                    />

                    <p className="relative text-xs font-semibold text-green-600 bg-white px-2 rounded-full">
                      {product.trophy}
                    </p>
                  </div>
                </div>
                <div className="mt-6 gap-2 flex flex-col">
                  <a
                    href={sendWhatsapp(
                      `Olá quero agendar um serviço de ${product.name} com a LM`
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full gap-1 relative flex items-center justify-center rounded-md border border-transparent bg-green-500 px-8 py-2 text-sm text-white font-bold hover:bg-green-700"
                  >
                    <FaWhatsapp size={18} /> Agendar serviço
                  </a>
                  <button
                    onClick={() =>
                      handleProductsOpen({
                        products: product,
                        productsWithPromotion: {} as ProductsWithPromotion,
                        promotion: false,
                      })
                    }
                    className="text-xs font-semibold leading-6 text-blue-700"
                  >
                    Ver detalhes do serviço
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
