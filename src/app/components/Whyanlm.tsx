"use client";

import { sendWhatsapp } from "@/app/utils/sendlinks";
import { CheckIcon, XMarkIcon } from "@heroicons/react/20/solid";
import { FaWhatsapp } from "react-icons/fa";

const tiers = [
  {
    name: "LM Estética Automotiva",
    id: "tier-personal",
    href: "#",
    features: [
      "Atendimento Especializado",
      "Equipe altamente qualificada e certificada",
      "Avaliação gratuita do seu carro",
      "Entendemos que seu carro é seu patrimônio e ele é uma história da sua vida",
      "Cuidamos da sua saúde usando produtos pro seu bem estar em higienizações internas",
      "Aqui cada detalhe importa",
      "Local agradável pensado com todo carinho lhe esperando",
      "Preço justo com a entrega dos serviços de ponta",
      "Certificado de higienização com validação dos produtos pela anvisa",
      "Vitrificação com selo de garantia e acompanhamento pós vitrificações",
    ],
    featured: true,
  },
  {
    name: "Outras",
    id: "tier-team",
    href: "#",
    features: [
      "Atendimento padrão",
      "Equipe padrão",
      "Sem avaliação do seu carro",
      "Só lava o seu carro como outro qualquer",
      "Higienização padrão como outras",
      "Detalhes não fazem diferença",
      "Sem espaço para o cliente",
      "Barato ou caro que não entrega o que você deseja",
      "Produtos duvidosos sem certificados",
      "Vitrificação duvidosa",
    ],
    featured: false,
  },
];

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

export default function Whyanlm() {
  return (
    <div className="relative isolate bg-white px-6 py-16 sm:py-16 lg:px-8">
      <div
        aria-hidden="true"
        className="absolute inset-x-0 -top-3 -z-10 transform-gpu overflow-hidden px-36 blur-3xl"
      >
        <div
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
          className="mx-auto aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-[#1c6afc] to-[#1002c9] opacity-30"
        />
      </div>
      <div className="mx-auto max-w-2xl text-center lg:max-w-4xl">
        <p className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
          Porque escolher
        </p>
        <p className="mt-2 text-4xl font-bold tracking-tight text-blue-700 sm:text-5xl">
          LM Estética Automotiva?
        </p>
      </div>
      <p className="mx-auto mt-6 max-w-2xl text-center text-lg leading-8 text-gray-600">
        Prestamos um atendimento personalizado, com serviços de primeira
        qualidade, confira abaixo!​
      </p>
      <div className="mx-auto mt-16 grid max-w-lg grid-cols-1 items-center gap-y-6 sm:mt-20 sm:gap-y-0 lg:max-w-4xl lg:grid-cols-2">
        {tiers.map((tier, tierIdx) => (
          <div
            key={tier.id}
            className={classNames(
              tier.featured
                ? "relative bg-white shadow-2xl"
                : "bg-white/60 sm:mx-8 lg:mx-0",
              tier.featured
                ? ""
                : tierIdx === 0
                ? "rounded-t-3xl sm:rounded-b-none lg:rounded-bl-3xl lg:rounded-tr-none"
                : "sm:rounded-t-none lg:rounded-bl-none lg:rounded-tr-3xl",
              "rounded-3xl p-8 ring-1 ring-gray-900/10 sm:p-10"
            )}
          >
            {tier.id === "tier-personal" ? (
              <h3
                id={tier.id}
                className="text-lg font-semibold leading-7 text-blue-600"
              >
                {tier.name}
              </h3>
            ) : (
              <h3
                id={tier.id}
                className="text-base font-semibold leading-7 text-red-600"
              >
                {tier.name}
              </h3>
            )}

            {tier.id === "tier-personal" ? (
              <ul
                role="list"
                className="mt-8 space-y-3 text-sm leading-6 text-gray-600 sm:mt-10"
              >
                {tier.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex gap-x-3 text-left text-base"
                  >
                    <CheckIcon
                      aria-hidden="true"
                      className="h-6 w-5 flex-none text-indigo-600"
                    />
                    {feature}
                  </li>
                ))}
              </ul>
            ) : (
              <ul
                role="list"
                className="mt-8 space-y-3 text-sm leading-6 text-gray-600 sm:mt-10"
              >
                {tier.features.map((feature) => (
                  <li key={feature} className="flex gap-x-3 text-left">
                    <XMarkIcon
                      aria-hidden="true"
                      className="h-6 w-5 flex-none text-red-600"
                    />
                    {feature}
                  </li>
                ))}
              </ul>
            )}

            <a
              href={sendWhatsapp("Olá quero agendar um serviço com a LM")}
              target="_blank"
              rel="noopener noreferrer"
              aria-describedby={tier.id}
              className={classNames(
                tier.featured
                  ? "bg-green-600 text-white shadow hover:bg-green-500"
                  : "text-green-600 ring-1 ring-inset ring-green-200 hover:ring-green-300",
                " flex items-center justify-center gap-1 mt-8 rounded-md px-3.5 py-2.5 text-center text-sm font-semibold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600 sm:mt-10"
              )}
            >
              <FaWhatsapp size={18} />
              Agendar serviço com a LM
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
