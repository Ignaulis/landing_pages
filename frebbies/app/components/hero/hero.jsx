import { hero } from "@/app/data/hero";
import Image from "next/image";
import HeroText from "./heroText";
import HeroCard from "./heroCard";
import { useContext } from "react";
import { ScrollContext } from "@/app/context/scrollContext";

export default function Hero() {
  return (
    <section className="w-full padding-custom-sides mt-20 flex flex-col gap-20">
      {/* top */}
      <div className="flex justify-between items-center">
        {/* left side */}
        <HeroText hero={hero} />

        {/* image */}
        <Image alt="hero" src={hero.img} width={610} height={382} />
      </div>

      {/* bottom card */}
      <div className="w-full flex">
        <HeroCard />
      </div>
    </section>
  );
}
