import { map, mapImages } from "@/app/data/map";

export default function Map() {
  return (
    <section className="padding-custom-sides mt-30 flex flex-col items-center gap-20">
      <div className="flex flex-col items-center justify-center gap-6">
        <h2 className="head w-[400px] text-center">{map.head}</h2>
        <p className="para">{map.param}</p>
      </div>
      <img src={map.img} />
      <div className="flex w-full items-center justify-between">
        {mapImages.map((e) => (
          <div
            key={e}
            className="w-[80px] sm:w-[100px] md:w-[150px] lg:w-[200px]"
          >
            <img className="hover-map-logos" src={e} alt={e} />
          </div>
        ))}
      </div>
    </section>
  );
}
