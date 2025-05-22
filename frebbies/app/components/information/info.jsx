import { info } from "@/app/data/info";
import InfoCard from "./infoCard";
import { useContext } from "react";
import { ScrollContext } from "@/app/context/scrollContext";

export default function Info() {
  const { refs } = useContext(ScrollContext);
  return (
    <section
      ref={refs.Features}
      className="flex padding-custom-sides justify-around pb-20 mt-20"
    >
      <div className="w-[512px] h-[414px]">
        <img src={info.img} />
      </div>
      <InfoCard info={info} />
    </section>
  );
}
