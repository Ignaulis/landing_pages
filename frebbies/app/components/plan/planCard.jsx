import { FaCheck } from "react-icons/fa";

export default function PlanCard({ data }) {
  return (
    <div className="flex flex-col justify-around border-2 border-[#DDDDDD] h-[760px] w-[330px] bg-white rounded-2xl">
      <div className="flex flex-col gap-10">
        <div className="flex flex-col items-center gap-4">
          <div className="w-[144px] h-[163px]">
            <img src={data.img} alt={data.priceBold} />
          </div>
          <h4 className="font-bold text-[18px]">{data.head}</h4>
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
      <div className="flex flex-col gap-6 items-center">
        <span className="font-bold text-[25px]">
          {data.priceBold}
          <span className="font-light">{data.price}</span>
        </span>
        <button className="button-small">{data.button}</button>
      </div>
    </div>
  );
}
