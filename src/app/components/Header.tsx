"use client";

import logo from "@/app/assets/images/logo.svg";
import { month } from "@/app/utils/month";
import { sendWhatsapp } from "@/app/utils/sendlinks";
import {
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
} from "@headlessui/react";
import {
  ChevronDownIcon,
  FireIcon,
  PhoneIcon,
  QuestionMarkCircleIcon,
  RectangleGroupIcon,
  TicketIcon,
} from "@heroicons/react/20/solid";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import { useState } from "react";
import {
  FaBorderAll,
  FaCar,
  FaCarAlt,
  FaCarSide,
  FaHighlighter,
  FaLayerGroup,
  FaLightbulb,
  FaMotorcycle,
} from "react-icons/fa";

const services = [
  {
    name: "Lavagem rotativa e detalhada (Carros)",
    description:
      "Experimente um brilho impecável que chama a atenção em cada viagem.",
    href: "#lavagemcarro",
    icon: FaCar,
  },
  {
    name: "Polimento comercial e técnico",
    description:
      "Revitalize a superfície do seu veículo com precisão profissional.",
    href: "#polimento",
    icon: FaCarSide,
  },
  {
    name: "Higienização interna completa",
    description:
      "Garanta um interior fresco e livre de germes com uma limpeza profunda.",
    href: "#higienização",
    icon: FaCarAlt,
  },
  {
    name: "Restauração de farol",
    description:
      "Restaure a clareza e o brilho dos faróis para uma visão mais segura.",
    href: "#farol",
    icon: FaLightbulb,
  },
  {
    name: "Lavagem rotativa e detalhada (Motos)",
    description:
      "Deixe sua moto brilhando como nova, com cuidado especializado.",
    href: "#lavagemmoto",
    icon: FaMotorcycle,
  },
  {
    name: "Vitrificação",
    description:
      "Proteja a pintura do seu veículo com uma camada duradoura e resistente.",
    href: "#vitrificação",
    icon: FaHighlighter,
  },
  {
    name: "Diversos",
    description: "Diversos tipos de serviços e combos especialmente para você.",
    href: "#diversos",
    icon: FaBorderAll,
  },
  {
    name: "Combos",
    description:
      "Pacotes completos que oferecem economia e qualidade superior.",
    href: "#combos",
    icon: FaLayerGroup,
  },
];

const callsToAction = [
  {
    name: "Porque escolher LM Estética Automotiva?",
    href: "#porque",
    icon: QuestionMarkCircleIcon,
    type: 1,
  },
  { name: "Entrar em contato", href: "#", icon: PhoneIcon, type: 2 },
  {
    name: "Ver todos os serviços",
    href: "#serviços",
    icon: RectangleGroupIcon,
    type: 3,
  },
  // { name: "Assistir demonstrações (Em breve)", href: "#", icon: PlayCircleIcon, type: 1 },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="relative isolate z-10 bg-white">
      <nav
        aria-label="Global"
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
      >
        <div className="flex lg:flex-1">
          <a href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">LM Estética automotiva</span>
            <Image
              src={logo}
              width={500}
              height={500}
              alt="Logo LM"
              className="h-8 w-auto"
            />
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="h-6 w-6" />
          </button>
        </div>
        <PopoverGroup className="hidden lg:flex lg:gap-x-12">
          <a href="/" className="text-sm font-semibold leading-6 text-gray-900">
            Ínicio
          </a>
          <Popover>
            <PopoverButton className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900">
              Serviços
              <ChevronDownIcon
                aria-hidden="true"
                className="h-5 w-5 flex-none text-gray-400"
              />
            </PopoverButton>

            <PopoverPanel
              transition
              className="absolute inset-x-0 top-0 -z-10 bg-white pt-14 shadow-lg ring-1 ring-gray-900/5 transition data-[closed]:-translate-y-1 data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in"
            >
              <div className="mx-auto grid max-w-7xl grid-cols-4 gap-x-4 px-6 py-10 lg:px-8 xl:gap-x-8">
                {services.map((item) => (
                  <div
                    key={item.name}
                    className="group relative rounded-lg p-6 text-sm leading-6 hover:bg-gray-50"
                  >
                    <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                      <item.icon
                        aria-hidden="true"
                        className="h-6 w-6 text-gray-600 group-hover:text-green-800"
                      />
                    </div>
                    <a
                      href={item.href}
                      className="mt-6 block font-semibold text-gray-900"
                    >
                      {item.name}
                      <span className="absolute inset-0" />
                    </a>
                    <p className="mt-1 text-gray-600">{item.description}</p>
                  </div>
                ))}
              </div>
              <div className="bg-gray-50">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                  <div className="grid grid-cols-3 divide-x divide-gray-900/5 border-x border-gray-900/5">
                    {callsToAction.map((item) => (
                      <a
                        key={item.name}
                        href={item.type === 2 ? sendWhatsapp() : item.href}
                        target={item.type === 2 ? "_blank" : ""}
                        className="flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-100"
                      >
                        {item.type === 1 ? (
                          <item.icon
                            aria-hidden="true"
                            className="h-5 w-5 flex-none text-amber-600"
                          />
                        ) : item.type === 2 ? (
                          <item.icon
                            aria-hidden="true"
                            className="h-5 w-5 flex-none text-green-500"
                          />
                        ) : (
                          <item.icon
                            aria-hidden="true"
                            className="h-5 w-5 flex-none text-green-700"
                          />
                        )}

                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </PopoverPanel>
          </Popover>

          <a
            href="#promoções"
            className="text-sm font-semibold leading-6 text-green-500 items-center flex"
          >
            <TicketIcon
              aria-hidden="true"
              className="h-4 w-4 text-green-500 group-hover:text-indigo-600 mr-1"
            />
            Ofertas do mês de {month}
            <TicketIcon
              aria-hidden="true"
              className="h-4 w-4 text-green-500 group-hover:text-indigo-600 ml-1"
            />
          </a>
          <a
            href="#informações"
            className="text-sm font-semibold leading-6 text-gray-900"
          >
            Informações
          </a>
          {/* <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
            Portfólio
          </a> */}
        </PopoverGroup>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <a
            href={sendWhatsapp("Olá desejo fazer uma avaliação gratuita na LM")}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-semibold leading-6 text-green-500 items-center flex"
          >
            <FireIcon
              aria-hidden="true"
              className="h-4 w-4 text-red-700 group-hover:text-red-600 mr-1"
            />
            Avaliação gratuita 👈
          </a>
        </div>
      </nav>
      <Dialog
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
        className="lg:hidden"
      >
        <div className="fixed inset-0 z-10" />
        <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">LM Estética automotiva</span>
              <img
                alt=""
                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                className="h-8 w-auto"
              />
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="h-6 w-6" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <Disclosure as="div" className="-mx-3">
                  <DisclosureButton className="group flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                    Serviços
                    <ChevronDownIcon
                      aria-hidden="true"
                      className="h-5 w-5 flex-none group-data-[open]:rotate-180"
                    />
                  </DisclosureButton>
                  <DisclosurePanel className="mt-2 space-y-2">
                    {[...services, ...callsToAction].map((item) => (
                      <DisclosureButton
                        key={item.name}
                        as="a"
                        href={item.href}
                        className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                      >
                        {item.name}
                      </DisclosureButton>
                    ))}
                  </DisclosurePanel>
                </Disclosure>
                <a
                  href="#promoções"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-green-500 hover:bg-gray-50"
                >
                  Ofertas do mês de {month}
                </a>
                <a
                  href="#informações"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Informações
                </a>
                {/* <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Portfólio
                </a> */}
              </div>
              <div className="py-6">
                <a
                  href={sendWhatsapp(
                    "Olá desejo fazer uma avaliação gratuita na LM"
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Avaliação gratuita 👈
                </a>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
}
