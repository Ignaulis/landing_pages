import { FaCheckCircle } from "react-icons/fa";

export default function InfoCard({ info }) {
  return (
    <div className="flex flex-col justify-around w-[420px]">
      <div className="font-bold text-[35px] leading-[50px]">{info.head}</div>
      <div className="leading-[30px] text-[16px] text-color">{info.para}</div>
      <div className="flex flex-col gap-4">
        {info.checks.map((e) => (
          <div key={e} className="flex gap-2 items-center">
            <FaCheckCircle className="text-[#2FAB73]" />
            <div className="text-color">{e}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
