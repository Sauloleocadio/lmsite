"use client";

import {
  sendInstagram,
  sendMaps,
  sendWaze,
  sendWhatsapp,
} from "@/app/utils/sendlinks";
import { FC } from "react";
import { FaGoogle, FaInstagram, FaWaze, FaWhatsapp } from "react-icons/fa";

const FloatingButtons: FC = () => {
  return (
    <div className="z-50 fixed right-4 top-[80%] transform -translate-y-1/2 flex-col space-y-4 hidden md:flex">
      <a
        href={sendInstagram()}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-green-800 text-white p-3 rounded-full shadow-lg hover:bg-green-700"
      >
        <FaInstagram size={24} />
      </a>
      <a
        href={sendMaps()}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-green-800 text-white p-3 rounded-full shadow-lg hover:bg-green-700"
      >
        <FaGoogle size={24} />
      </a>
      <a
        href={sendWaze()}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-green-800 text-white p-3 rounded-full shadow-lg hover:bg-green-700"
      >
        <FaWaze size={24} />
      </a>
      <a
        href={sendWhatsapp()}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-green-800 text-white p-3 rounded-full shadow-lg hover:bg-green-700"
      >
        <FaWhatsapp size={24} />
      </a>
    </div>
  );
};

export default FloatingButtons;
