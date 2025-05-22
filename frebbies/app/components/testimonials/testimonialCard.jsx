import { FaStar } from "react-icons/fa6";

export default function TestimonialCard({ e }) {
  return (
    <div className="w-max-[200px] h-[230px] flex bg-white items-center border-transition px-4 rounded-xl ">
      <div className="flex flex-col gap-6 justify-end">
        <div className="flex justify-between">
          <div className="flex justify-around gap-4">
            <img src={e.img} alt={e.name} />
            <div className="flex flex-col">
              <span className="font-bold">{e.name}</span>
              <span className="text-color">{e.location}</span>
            </div>
          </div>
          <div className="flex">
            <span>{e.stars}</span>
            <div className="">
              <FaStar className="text-[#FEA250]" />
            </div>
          </div>
        </div>
        <div className="">
          <p>{e.param}</p>
        </div>
      </div>
    </div>
  );
}
