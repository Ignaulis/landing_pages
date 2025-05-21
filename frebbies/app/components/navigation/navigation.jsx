import { nav } from "@/app/data/nav";
import Image from "next/image";

export default function Navigation() {
  return (
    <section className="flex justify-between items-center padding-custom-sides mt-6">
      <Image
        src={nav.img}
        alt="logo"
        className="cursor-pointer"
        width={149}
        height={36.23}
      />
      {/* navigation */}
      <nav className="flex gap-10 text-[16px]">
        {nav.nav.map((e) => (
          <span className="text-color cursor-pointer transition-custom" key={e}>
            {e}
          </span>
        ))}
      </nav>
      {/* signin / signup */}
      <div className="flex items-center text-[16px] gap-10">
        {nav.sign.map((item) => (
          <span
            key={item}
            className={`cursor-pointer font-medium ${
              item === "Sign In"
                ? "text-color transition-custom"
                : " text-[#F53855] px-8 py-2 rounded-full border border-[#F53855] transition-all duration-200 hover:text-white hover:bg-[#F53855]"
            }`}
          >
            {item}
          </span>
        ))}
      </div>
    </section>
  );
}
