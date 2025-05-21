import { map, mapImages } from "@/app/data/map";

export default function Map() {
  return (
    <section className="flex flex-col items-center mt-30 padding-custom-sides gap-20">
      <div className="flex flex-col gap-6 justify-center items-center">
        <h2 className="head text-center w-[400px]">{map.head}</h2>
        <p className="para">{map.param}</p>
      </div>
      <img src={map.img} />
      <div className="flex justify-between items-center">
        {mapImages.map((e) => (
          <div key={e} className="w-[200px]">
            <img src={e} alt={e} />
          </div>
        ))}
      </div>
    </section>
  );
}
