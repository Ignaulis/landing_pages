import { info } from "@/app/data/info";
import InfoCard from "./infoCard";
import { useContext } from "react";
import { ScrollContext } from "@/app/context/scrollContext";

export default function Info() {
  const { refs } = useContext(ScrollContext);
  return (
    <section
      ref={refs.Features}
      className="padding-custom-sides mt-20 flex flex-wrap justify-around gap-8 pb-20 sm:gap-20 lg:flex-nowrap lg:gap-0"
    >
      <div className="h-[414px] w-[512px]">
        <img src={info.img} />
      </div>
      <InfoCard info={info} />
    </section>
  );
}
