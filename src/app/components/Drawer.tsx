"use client";

import { copyLink, sendWhatsapp } from "@/app/utils/sendlinks";
import { Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import { Dispatch, SetStateAction } from "react";
import { Products, ProductsWithPromotion } from "./Products";

type PropsDrawer = {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  products: Products;
  productsWithPromotion: ProductsWithPromotion;
};

export default function Drawer({
  open,
  setOpen,
  products,
  productsWithPromotion,
}: PropsDrawer) {
  if (Object.keys(products).length > 0) {
    return (
      <Dialog open={open} onClose={setOpen} className="relative z-10">
        <div
          className="fixed inset-0 bg-black bg-opacity-50"
          aria-hidden="true"
        />

        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10 sm:pl-16">
              <DialogPanel
                transition
                className="pointer-events-auto w-screen max-w-2xl transform transition duration-500 ease-in-out data-[closed]:translate-x-full sm:duration-700"
              >
                <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                  <div className="px-4 py-6 sm:px-6">
                    <div className="flex items-start justify-between">
                      <DialogTitle className="text-base font-semibold leading-6 text-gray-900">
                        {products.name}
                      </DialogTitle>
                      <div className="ml-3 flex h-7 items-center">
                        <button
                          type="button"
                          onClick={() => setOpen(false)}
                          className="relative rounded-md bg-white text-gray-400 hover:text-gray-500 focus:ring-2 focus:ring-blue-500"
                        >
                          <span className="absolute -inset-2.5" />
                          <XMarkIcon aria-hidden="true" className="h-6 w-6" />
                        </button>
                      </div>
                    </div>
                  </div>
                  {/* Main */}
                  <div className="divide-y divide-gray-200">
                    <div className="pb-6">
                      <div className="h-24 bg-blue-700 sm:h-20 lg:h-28" />
                      <div className="-mt-12 flow-root px-4 sm:-mt-8 sm:flex sm:items-end sm:px-6 lg:-mt-16">
                        <div>
                          <div className="-m-1 flex">
                            <div className="inline-flex overflow-hidden rounded-lg border-4 border-white">
                              <Image
                                width={192}
                                height={192}
                                alt={products.name}
                                src={products.imageSrc}
                                className="h-24 w-24 flex-shrink-0 sm:h-40 sm:w-40 lg:h-48 lg:w-48"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="mt-6 sm:ml-6 sm:flex-1">
                          <div>
                            <div className="flex items-center">
                              <h3 className="text-xl font-bold text-gray-900 sm:text-2xl">
                                a partir {products.price}
                              </h3>
                            </div>
                            <p className="text-sm text-gray-500">
                              {products.observation}
                            </p>
                          </div>
                          <div className="mt-5 flex flex-wrap space-y-3 sm:space-x-3 sm:space-y-0">
                            <a
                              href={sendWhatsapp(
                                `Olá quero agendar um serviço de ${products.name} com a LM`
                              )}
                              target="_blank"
                              rel="noopener noreferrer"
                              type="button"
                              className="inline-flex w-full flex-shrink-0 items-center justify-center rounded-md bg-green-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600 sm:flex-1"
                            >
                              Agendar serviço
                            </a>
                            <button
                              onClick={() => copyLink(`${products.href}`)}
                              type="button"
                              className="inline-flex w-full flex-1 items-center justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                            >
                              Compartilhar
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="px-4 py-5 sm:px-0 sm:py-0">
                      <dl className="space-y-8 sm:space-y-0 sm:divide-y sm:divide-gray-200">
                        <div className="sm:flex sm:px-6 sm:py-5">
                          <dt className="text-sm font-bold text-gray-500 sm:w-40 sm:flex-shrink-0 lg:w-48">
                            Detalhes
                          </dt>
                          <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:ml-6 sm:mt-0">
                            <p>{products.details}</p>
                          </dd>
                        </div>
                        <div className="sm:flex sm:px-6 sm:py-5">
                          <dt className="text-sm font-bold text-gray-500 sm:w-40 sm:flex-shrink-0 lg:w-48">
                            Desconto
                          </dt>
                          <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:ml-6 sm:mt-0">
                            o preço antigo era {products.oldPrice} e está com{" "}
                            {products.percentage}
                          </dd>
                        </div>
                        <div className="sm:flex sm:px-6 sm:py-5">
                          <dt className="text-sm font-bold text-gray-500 sm:w-40 sm:flex-shrink-0 lg:w-48">
                            Oferta
                          </dt>
                          <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:ml-6 sm:mt-0">
                            {products.trophy}
                          </dd>
                        </div>
                      </dl>
                    </div>
                  </div>
                </div>
              </DialogPanel>
            </div>
          </div>
        </div>
      </Dialog>
    );
  }

  if (Object.keys(productsWithPromotion).length > 0) {
    return (
      <Dialog open={open} onClose={setOpen} className="relative z-10">
        <div
          className="fixed inset-0 bg-black bg-opacity-50"
          aria-hidden="true"
        />

        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10 sm:pl-16">
              <DialogPanel
                transition
                className="pointer-events-auto w-screen max-w-2xl transform transition duration-500 ease-in-out data-[closed]:translate-x-full sm:duration-700"
              >
                <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                  <div className="px-4 py-6 sm:px-6">
                    <div className="flex items-start justify-between">
                      <DialogTitle className="text-base font-semibold leading-6 text-gray-900">
                        {productsWithPromotion.name}
                      </DialogTitle>
                      <div className="ml-3 flex h-7 items-center">
                        <button
                          type="button"
                          onClick={() => setOpen(false)}
                          className="relative rounded-md bg-white text-gray-400 hover:text-gray-500 focus:ring-2 focus:ring-blue-500"
                        >
                          <span className="absolute -inset-2.5" />
                          <XMarkIcon aria-hidden="true" className="h-6 w-6" />
                        </button>
                      </div>
                    </div>
                  </div>
                  {/* Main */}
                  <div className="divide-y divide-gray-200">
                    <div className="pb-6">
                      <div className="h-24 bg-blue-700 sm:h-20 lg:h-28" />
                      <div className="-mt-12 flow-root px-4 sm:-mt-8 sm:flex sm:items-end sm:px-6 lg:-mt-16">
                        <div>
                          <div className="-m-1 flex">
                            <div className="inline-flex overflow-hidden rounded-lg border-4 border-white">
                              <Image
                                width={192}
                                height={192}
                                alt={productsWithPromotion.name}
                                src={productsWithPromotion.imageSrc}
                                className="h-24 w-24 flex-shrink-0 sm:h-40 sm:w-40 lg:h-48 lg:w-48"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="mt-6 sm:ml-6 sm:flex-1">
                          <div>
                            <div className="flex items-center">
                              <h3 className="text-xl font-bold text-gray-900 sm:text-2xl">
                                a partir {productsWithPromotion.price}
                              </h3>
                            </div>
                            <p className="text-sm text-gray-500">
                              {productsWithPromotion.observation}
                            </p>
                          </div>
                          <div className="mt-5 flex flex-wrap space-y-3 sm:space-x-3 sm:space-y-0">
                            <a
                              href={sendWhatsapp(
                                `Olá quero agendar um serviço de ${productsWithPromotion.name} com a LM`
                              )}
                              target="_blank"
                              rel="noopener noreferrer"
                              type="button"
                              className="inline-flex w-full flex-shrink-0 items-center justify-center rounded-md bg-green-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600 sm:flex-1"
                            >
                              Agendar serviço
                            </a>
                            <button
                              onClick={() =>
                                copyLink(`${productsWithPromotion.href}`)
                              }
                              type="button"
                              className="inline-flex w-full flex-1 items-center justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                            >
                              Compartilhar
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="px-4 py-5 sm:px-0 sm:py-0">
                      <dl className="space-y-8 sm:space-y-0 sm:divide-y sm:divide-gray-200">
                        <div className="sm:flex sm:px-6 sm:py-5">
                          <dt className="text-sm font-bold text-gray-500 sm:w-40 sm:flex-shrink-0 lg:w-48">
                            Detalhes
                          </dt>
                          <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:ml-6 sm:mt-0">
                            <p>{productsWithPromotion.details}</p>
                          </dd>
                        </div>
                        <div className="sm:flex sm:px-6 sm:py-5">
                          <dt className="text-sm font-bold text-gray-500 sm:w-40 sm:flex-shrink-0 lg:w-48">
                            Desconto
                          </dt>
                          <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:ml-6 sm:mt-0">
                            o preço antigo era {productsWithPromotion.oldPrice}{" "}
                            e está com {productsWithPromotion.percentage}
                          </dd>
                        </div>
                        <div className="sm:flex sm:px-6 sm:py-5">
                          <dt className="text-sm font-bold text-gray-500 sm:w-40 sm:flex-shrink-0 lg:w-48">
                            Oferta
                          </dt>
                          <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:ml-6 sm:mt-0">
                            {productsWithPromotion.trophy}
                          </dd>
                        </div>
                      </dl>
                    </div>
                  </div>
                </div>
              </DialogPanel>
            </div>
          </div>
        </div>
      </Dialog>
    );
  }
}
