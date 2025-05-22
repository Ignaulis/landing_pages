import { hero } from "@/app/data/hero";
import HeroText from "./heroText";
import HeroCard from "./heroCard";

export default function Hero() {
  return (
    <section className="padding-custom-sides padding-custom-sides mt-20 flex w-full flex-col gap-20">
      {/* top */}
      <div className="flex w-full flex-wrap-reverse items-center justify-center gap-20 lg:flex-nowrap lg:justify-between lg:gap-0">
        {/* left side */}
        <HeroText hero={hero} />

        {/* image */}
        <div className="w-full sm:w-4/5 lg:w-1/2">
          <img alt="hero" src={hero.img} />
        </div>
      </div>

      {/* bottom card */}
      <div className="flex w-full justify-center">
        <HeroCard />
      </div>
    </section>
  );
}
