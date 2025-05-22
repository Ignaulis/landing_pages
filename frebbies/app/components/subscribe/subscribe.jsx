import { card } from "@/app/data/card";

export default function Subscribe() {
  return (
    <section className="flex justify-between mx-38 px-20 py-8 mt-20 mb-20 items-center bg-white shadow-2xl shadow-black/10 rounded-2xl transition-all duration-300 hover:shadow-transparent ">
      <div className="flex flex-col gap-6 w-2/5">
        <h2 className="head">{card.head}</h2>
        <p className="text-[#4F5665] text-[16px] leading-[30px] w-[550px]">
          {card.param}
        </p>
      </div>
      <button className="hero-button">{card.button}</button>
    </section>
  );
}
