import { FaCheck } from "react-icons/fa";
import Link from "next/link";

export default function PlanCard({ data }) {
  return (
    <div className="border-transition flex h-[760px] w-[330px] flex-col justify-around rounded-2xl bg-white">
      <div className="flex flex-col gap-10">
        <div className="flex flex-col items-center gap-4">
          <div className="h-[163px] w-[144px]">
            <img src={data.img} alt={data.priceBold} />
          </div>
          <h4 className="text-[18px] font-bold">{data.head}</h4>
        </div>
        <div className="flex flex-col gap-6 pl-16">
          {data.checks.map((e) => (
            <div key={e} className="flex gap-4">
              <FaCheck className="text-[#2FAB73]" />
              <span className="text-color">{e}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col items-center gap-6">
        <span className="text-[25px] font-bold">
          {data.priceBold}
          <span className="font-light">{data.price}</span>
        </span>
        <Link href={"/soon"} className="button-small">
          {data.button}
        </Link>
      </div>
    </div>
  );
}
