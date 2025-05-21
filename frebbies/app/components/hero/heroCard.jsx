import { heroCard } from "@/app/data/hero";

export default function HeroCard() {
  return (
    <section className="flex w-full shadow-2xl shadow-[#00000040] bg-white rounded-2xl h-[180px] items-center justify-around gap-10">
      {heroCard.map((e, index) => (
        <div
          key={e.name}
          className={`flex gap-10 h-max py-6 justify-center items-center ${
            index === 1 ? "border-x border-gray-300 px-20" : ""
          }`}
        >
          <div className="p-4 rounded-full bg-[#FFECEC] flex justify-center items-center">
            <e.img className="text-[#F53838] text-2xl" />
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-[25px]">{e.num}</span>
            <span className="text-[20px]">{e.name}</span>
          </div>
        </div>
      ))}
    </section>
  );
}
