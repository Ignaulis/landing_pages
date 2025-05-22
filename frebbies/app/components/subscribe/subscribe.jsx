import { card } from "@/app/data/card";
import Link from "next/link";

export default function Subscribe() {
  return (
    <section className="absolute -top-34 left-1/2 z-10 flex w-2/3 -translate-x-1/2 flex-col items-center justify-between gap-8 rounded-2xl bg-white px-8 py-8 shadow-2xl shadow-black/10 transition-all duration-300 hover:shadow-transparent md:-top-28 md:w-4/5 md:flex-row md:gap-0 md:px-20">
      <div className="flex w-full flex-col gap-6 md:w-3/5">
        <h2 className="text-center text-[18px] font-bold sm:text-[24px] md:text-start md:text-[30px] lg:text-[35px]">
          {card.head}
        </h2>
        <p className="max-w-[550px] text-center text-[12px] leading-[16px] text-[#4F5665] sm:text-[16px] sm:leading-[30px] md:text-start">
          {card.param}
        </p>
      </div>
      <Link href={"/soon"}>
        <button className="hero-button">{card.button}</button>
      </Link>
    </section>
  );
}
