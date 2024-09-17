"use client";

import { sendWhatsapp } from "@/app/utils/sendlinks";
import { Dispatch, SetStateAction } from "react";
import { PropsData } from "./ModalRoulette";

import dynamic from "next/dynamic";
const Wheel = dynamic(
  () => import("react-custom-roulette").then((mod) => mod.Wheel),
  { ssr: false }
);

type PropsRoulette = {
  mustSpin: boolean;
  prizeNumber: number;
  setMustSpin: Dispatch<SetStateAction<boolean>>;
  data: PropsData[];
  setOpen: Dispatch<SetStateAction<boolean>>;
};

export default function Roulette({
  mustSpin,
  prizeNumber,
  setMustSpin,
  data,
  setOpen,
}: PropsRoulette) {
  return (
    <>
      <Wheel
        mustStartSpinning={mustSpin}
        prizeNumber={prizeNumber}
        data={data}
        onStopSpinning={() => {
          sendWhatsapp(
            `Olá ganhei ${data[prizeNumber].option}, desejo utilizar na minha primeira vez visitando a LM`,
            true
          );
          setMustSpin(false);
          setOpen(false);
          typeof window !== "undefined"
            ? window.localStorage.setItem(
                "@CUPOM",
                `${data[prizeNumber].option}`
              )
            : false;
        }}
      />
    </>
  );
}
