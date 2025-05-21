import { info } from "@/app/data/info";
import InfoCard from "./infoCard";

export default function Info() {
  return (
    <section className="flex padding-custom-sides justify-around mt-20">
      <div className="w-[512px] h-[414px]">
        <img src={info.img} />
      </div>
      <InfoCard info={info} />
    </section>
  );
}
