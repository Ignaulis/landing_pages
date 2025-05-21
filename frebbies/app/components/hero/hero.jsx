import { hero } from "@/app/data/hero";
import Image from "next/image";
import HeroText from "./heroText";

export default function Hero() {
  return (
    <section className="flex justify-between padding-custom-sides mt-20 items-center">
      {/* left side */}
      <HeroText hero={hero} />

      {/* image */}
      <Image alt="hero" src={hero.img} width={610} height={382} />
    </section>
  );
}
