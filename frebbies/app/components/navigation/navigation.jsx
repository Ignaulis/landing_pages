import { ScrollContext } from "@/app/context/scrollContext";
import { nav } from "@/app/data/nav";
import Image from "next/image";
import { useContext } from "react";

export default function Navigation() {
  const { handleScroll } = useContext(ScrollContext);

  return (
    <section className="flex justify-between items-center padding-custom-sides pt-6">
      <Image
        src={nav.img}
        alt="logo"
        className="cursor-pointer"
        width={149}
        height={36}
      />
      {/* navigation */}
      <nav className="flex gap-10 text-[16px]">
        {nav.nav.map((e) => (
          <span
            onClick={() => handleScroll(e)}
            className="text-color cursor-pointer transition-custom"
            key={e}
          >
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
                : "button-small"
            }`}
          >
            {item}
          </span>
        ))}
      </div>
    </section>
  );
}
