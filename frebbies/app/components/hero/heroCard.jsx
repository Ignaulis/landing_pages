import { heroCard } from "@/app/data/hero";

export default function HeroCard() {
  return (
    <section className="custom-transform flex h-max w-2/3 flex-col items-center justify-around rounded-2xl bg-white py-10 shadow-2xl shadow-[#00000040] transition-all duration-300 hover:shadow-[#00000020] sm:w-2/5 md:h-[180px] md:w-full md:flex-row md:py-0">
      {heroCard.map((e, index) => (
        <div
          key={e.name}
          className={`flex h-max items-center justify-center gap-10 py-6 ${
            index === 1
              ? "border-y border-gray-300 px-2 py-14 sm:px-10 md:border-x md:border-y-0 md:py-6 lg:px-20"
              : ""
          }`}
        >
          <div className="flex items-center justify-center rounded-full bg-[#FFECEC] p-4">
            <e.img className="text-xl text-[#F53838] md:text-2xl" />
          </div>
          <div className="flex flex-col">
            <span className="text-[20px] font-bold md:text-[25px]">
              {e.num}
            </span>
            <span className="text-[15px] md:text-[20px]">{e.name}</span>
          </div>
        </div>
      ))}
    </section>
  );
}
