export default function HeroText({ hero }) {
  return (
    <div className="flex flex-col items-center justify-center gap-12 lg:items-start lg:justify-center">
      <div className="flex w-full flex-col items-center gap-6 lg:items-start">
        {/* header */}
        <h2 className="custom-transform h-max w-full text-center text-[45px] leading-[60px] font-medium sm:w-4/5 lg:w-[400px] lg:text-start lg:text-[40px] lg:leading-[40px] xl:w-[500px] xl:text-[50px] xl:leading-[70px]">
          {hero.header}
          <span className="leading-[30px] font-bold">{hero.headerBold}</span>
        </h2>
        {/* paragraph */}
        <p className="custom-transform text-color h-max w-full text-center text-[14px] sm:w-4/5 lg:w-[500px] lg:text-start lg:text-[16px]">
          {hero.para}
        </p>
      </div>

      {/* button */}
      <div className="">
        <button className="hero-button">{hero.button}</button>
      </div>
    </div>
  );
}
