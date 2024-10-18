"use client";

import photo1 from "@/app/assets/images/herophotos/1.jpg";
import photo3 from "@/app/assets/images/herophotos/3.jpg";
import photo4 from "@/app/assets/images/herophotos/4.jpg";
import photo5 from "@/app/assets/images/herophotos/5.jpg";
import photo6 from "@/app/assets/images/herophotos/6.jpg";
import { sendMaps, sendWhatsapp } from "@/app/utils/sendlinks";
import Image from "next/image";
import { FaWhatsapp } from "react-icons/fa";

export default function HeroSection() {
  return (
    <div className="bg-white">
      <main>
        <div className="relative isolate">
          <svg
            aria-hidden="true"
            className="absolute inset-x-0 top-0 -z-10 h-[64rem] w-full stroke-gray-200 [mask-image:radial-gradient(32rem_32rem_at_center,white,transparent)]"
          >
            <defs>
              <pattern
                x="50%"
                y={-1}
                id="041aace7-37de-4c0a-a8b0-a6e3b4d44b84"
                width={200}
                height={200}
                patternUnits="userSpaceOnUse"
              >
                <path d="M.5 200V.5H200" fill="none" />
              </pattern>
            </defs>
            <svg x="50%" y={-1} className="overflow-visible fill-gray-50">
              <path
                d="M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z"
                strokeWidth={0}
              />
            </svg>
            <rect
              fill="url(#041aace7-37de-4c0a-a8b0-a6e3b4d44b84)"
              width="100%"
              height="100%"
              strokeWidth={0}
            />
          </svg>
          <div
            aria-hidden="true"
            className="absolute left-1/2 right-0 top-0 -z-10 -ml-24 transform-gpu overflow-hidden blur-3xl lg:ml-24 xl:ml-48"
          >
            <div
              style={{
                clipPath:
                  "polygon(63.1% 29.5%, 100% 17.1%, 76.6% 3%, 48.4% 0%, 44.6% 4.7%, 54.5% 25.3%, 59.8% 49%, 55.2% 57.8%, 44.4% 57.2%, 27.8% 47.9%, 35.1% 81.5%, 0% 97.7%, 39.2% 100%, 35.2% 81.4%, 97.2% 52.8%, 63.1% 29.5%)",
              }}
              className="aspect-[801/1036] w-[50.0625rem] bg-gradient-to-tr from-[#000000] to-[#86817C] opacity-30"
            />
          </div>
          <div className="overflow-hidden">
            <div className="mx-auto max-w-7xl px-6 pb-32 pt-8 sm:pt-16 lg:px-8 lg:pt-6">
              <div className="mx-auto max-w-2xl gap-x-14 lg:mx-0 lg:flex lg:max-w-none lg:items-center">
                <div className="relative w-full max-w-xl lg:shrink-0 xl:max-w-2xl">
                  <div>
                    <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                      A Estética automotiva
                    </h1>
                    <h1 className="text-4xl font-bold tracking-tight text-[#86817C] sm:text-5xl">
                      onde cada detalhe importa.
                    </h1>
                  </div>
                  <p className="mt-6 text-lg leading-8 text-black sm:max-w-md lg:max-w-none">
                    Seu carro merece o melhor cuidado, e na LM estética
                    automotiva, oferecemos um serviço de excelência, com a
                    transparência que você procura e preços justos que cabem no
                    seu bolso. Transformamos seu veículo com técnicas avançadas
                    e produtos de alta qualidade, garantindo brilho e proteção.
                    Venha descobrir por que somos a escolha certa para quem
                    valoriza o carro e o investimento feito nele!
                  </p>
                  <div className="mt-10 flex items-center gap-x-6">
                    <a
                      href={sendWhatsapp()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className=" flex items-center justify-center gap-1 rounded-md bg-green-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
                    >
                      <FaWhatsapp size={18} />
                      Quero conhecer
                    </a>
                    <a
                      href={sendMaps()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-semibold leading-6 text-gray-900"
                    >
                      📍 R. Fiscal Saraiva, 72 – Siqueira – Fortaleza(CE)
                      60732-150
                      <span aria-hidden="true"> →</span>
                    </a>
                  </div>
                </div>
                <div className="mt-14 flex justify-end gap-8 sm:-mt-44 sm:justify-start sm:pl-20 lg:mt-0 lg:pl-0">
                  <div className="ml-auto w-44 flex-none space-y-8 pt-32 sm:ml-0 sm:pt-80 lg:order-last lg:pt-36 xl:order-none xl:pt-80">
                    <div className="relative">
                      <Image
                        width={120}
                        height={120}
                        alt="foto 1"
                        src={photo1}
                        className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                      />
                      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                    </div>
                  </div>
                  <div className="mr-auto w-44 flex-none space-y-8 sm:mr-0 sm:pt-52 lg:pt-36">
                    <div className="relative">
                      <Image
                        width={120}
                        height={120}
                        alt="foto 6"
                        src={photo6}
                        className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                      />
                      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                    </div>
                    <div className="relative">
                      <Image
                        width={120}
                        height={120}
                        alt="foto 3"
                        src={photo3}
                        className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                      />
                      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                    </div>
                  </div>
                  <div className="w-44 flex-none space-y-8 pt-32 sm:pt-0">
                    <div className="relative">
                      <Image
                        width={120}
                        height={120}
                        alt="foto 4"
                        src={photo4}
                        className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                      />
                      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                    </div>
                    <div className="relative">
                      <Image
                        width={120}
                        height={120}
                        alt="foto 5"
                        src={photo5}
                        className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                      />
                      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
