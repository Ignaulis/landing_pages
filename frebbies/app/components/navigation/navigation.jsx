import { nav } from "@/app/data/nav";
import Image from "next/image";

export default function Navigation() {
  return (
    <section className="flex justify-around mt-6">
      <Image
        src={nav.img}
        alt="logo"
        className="cursor-pointer"
        width={149}
        height={36.23}
      />
      <nav className="flex gap-10 text-[16px]">
        {nav.nav.map((e) => (
          <span className="cursor-pointer transition-custom" key={e}>
            {e}
          </span>
        ))}
      </nav>
      <div className="flex text-[16px] gap-10">
        {nav.sign.map((e) => (
          <span className="cursor-pointer transition-custom" key={e}>
            {e}
          </span>
        ))}
      </div>
    </section>
  );
}
