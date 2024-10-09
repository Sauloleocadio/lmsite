import image1 from "@/app/assets/images/teamsproducts/1.jpeg";
import image2 from "@/app/assets/images/teamsproducts/2.webp";
import image3 from "@/app/assets/images/teamsproducts/3.png";
import image4 from "@/app/assets/images/teamsproducts/4.png";
import image5 from "@/app/assets/images/teamsproducts/5.png";
import image6 from "@/app/assets/images/teamsproducts/6.png";
import Image from "next/image";

export default function TeamsProducts() {
  return (
    <div className="mx-auto max-w-7xl px-6 lg:px-8 mb-20">
      <h2 className="text-center text-lg font-semibold leading-8 text-gray-900">
        Oferecemos o que há de melhor no mercado, porque confiamos nas grandes
        marcas que fazem a diferença!
      </h2>
      <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-6">
        <Image
          alt="vonnix"
          src={image1}
          width={158}
          height={70}
          className="col-span-2 max-h-32 w-full object-contain lg:col-span-1"
        />
        <Image
          alt="dub boys"
          src={image2}
          width={158}
          height={48}
          className="col-span-2 max-h-32 w-full object-contain lg:col-span-1"
        />
        <Image
          alt="protelim"
          src={image3}
          width={158}
          height={48}
          className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
        />
        <Image
          alt="alcance profissional"
          src={image4}
          width={158}
          height={48}
          className="col-span-2 max-h-40 w-full object-contain sm:col-start-2 lg:col-span-1"
        />
        <Image
          alt="soft 99"
          src={image5}
          width={158}
          height={48}
          className="col-span-2 col-start-2 max-h-16 w-full object-contain sm:col-start-auto lg:col-span-1"
        />
        <Image
          alt="nasiol"
          src={image6}
          width={158}
          height={48}
          className="col-span-2 col-start-2 max-h-20 w-full object-contain sm:col-start-auto lg:col-span-1"
        />
      </div>
    </div>
  );
}
