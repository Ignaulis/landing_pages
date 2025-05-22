export default function HeroText({ hero }) {
  return (
    <div className=" gap-12 flex flex-col">
      <div className="flex flex-col gap-6">
        {/* header */}
        <h2 className="text-[50px] w-[500px] leading-[70px] font-medium h-max">
          {hero.header}
          <span className="font-bold leading-[30px]">{hero.headerBold}</span>
        </h2>
        {/* paragraph */}
        <p className="text-color text-[16px] w-[500px] h-max">{hero.para}</p>
      </div>

      {/* button */}
      <div className="">
        <button className="hero-button">{hero.button}</button>
      </div>
    </div>
  );
}
