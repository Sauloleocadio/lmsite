"use client";

import { sendWhatsapp } from "@/app/utils/sendlinks";
import { Dispatch, SetStateAction } from "react";
import { Wheel } from "react-custom-roulette";
import { PropsData } from "./ModalRoulette";

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
          console.log(data[prizeNumber]);

          sendWhatsapp(
            `Olá ganhei ${data[prizeNumber].option}, desejo utilizar na minha primeira vez visitando a LM`,
            true
          );
          setMustSpin(false);
          setOpen(false);
          localStorage.setItem("@CUPOM", `${data[prizeNumber].option}`);
        }}
      />
    </>
  );
}
