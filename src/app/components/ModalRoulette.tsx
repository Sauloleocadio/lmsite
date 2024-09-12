"use client";

import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import { useEffect, useState } from "react";
import Roulette from "./Roulette";

export interface PropsData {
  option: string;
  style: {
    backgroundColor: string;
    textColor: string;
    fontSize: number;
  };
}

const data: PropsData[] = [
  {
    option: "10% de desconto",
    style: { backgroundColor: "#0024B9", textColor: "white", fontSize: 12 },
  },
  {
    option: "5% de desconto",
    style: { backgroundColor: "#01B2D4", textColor: "white", fontSize: 12 },
  },
  {
    option: "7% de desconto",
    style: { backgroundColor: "#8C1FBB", textColor: "white", fontSize: 12 },
  },
  {
    option: "10% de desconto",
    style: { backgroundColor: "#F52395", textColor: "white", fontSize: 12 },
  },
  {
    option: "5% de desconto",
    style: { backgroundColor: "#01B902", textColor: "white", fontSize: 12 },
  },
  {
    option: "7% de desconto",
    style: { backgroundColor: "#84CE03", textColor: "white", fontSize: 12 },
  },
  {
    option: "2% de desconto",
    style: { backgroundColor: "#FE2101", textColor: "white", fontSize: 12 },
  },
  {
    option: "5% de desconto",
    style: { backgroundColor: "#FF7E00", textColor: "white", fontSize: 12 },
  },
];

export default function ModalRoulette() {
  const existsCupom = localStorage.getItem("@CUPOM");
  const [mustSpin, setMustSpin] = useState(false);
  const [prizeNumber, setPrizeNumber] = useState(0);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      if (event.clientY <= 10 && !existsCupom) {
        setOpen(true);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [existsCupom]);

  const handleSpinClick = () => {
    if (!mustSpin) {
      const newPrizeNumber = Math.floor(Math.random() * data.length);
      setPrizeNumber(newPrizeNumber);
      setMustSpin(true);
    }
  };

  return (
    <Dialog open={open} onClose={setOpen} className="relative z-10">
      <DialogBackdrop
        transition
        className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
      />

      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <DialogPanel
            transition
            className="relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:my-8 sm:p-6 data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95"
          >
            <div className="flex items-center justify-center">
              <Roulette
                mustSpin={mustSpin}
                prizeNumber={prizeNumber}
                setMustSpin={setMustSpin}
                data={data}
                setOpen={setOpen}
              />
            </div>
            <div className="mt-3 text-center sm:mt-5">
              <DialogTitle
                as="h3"
                className="text-lg font-semibold leading-6 text-blue-700"
              >
                Não saia agora, temos um brinde para você!
              </DialogTitle>
              <div className="mt-2">
                <p className="text-xs text-gray-500">
                  *Promoção válida no primeiro serviço realizado na LM.
                </p>
              </div>
            </div>
            <div className="mt-5 sm:mt-6">
              <button
                type="button"
                onClick={() => handleSpinClick()}
                className="inline-flex w-full justify-center rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
              >
                Girar roleta
              </button>
            </div>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  );
}
