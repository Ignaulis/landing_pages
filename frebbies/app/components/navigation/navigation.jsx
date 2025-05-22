import { ScrollContext } from "@/app/context/scrollContext";
import { nav } from "@/app/data/nav";
import { useContext, useEffect, useState } from "react";

export default function Navigation() {
  const { handleScroll } = useContext(ScrollContext);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 850);

  useEffect(() => {
    const handlewidth = () => {
      setIsMobile(window.innerWidth <= 850);
    };

    window.addEventListener("resize", handlewidth);
    handlewidth();

    return () => {
      window.removeEventListener("resize", handlewidth);
    };
  }, []);

  return (
    <section className="padding-custom-sides flex items-center justify-between pt-6">
      <img
        src={nav.img}
        alt="logo"
        className="cursor-pointer"
        width={149}
        height={36}
      />
      {/* navigation */}
      <nav
        className={`flex gap-10 text-[16px] ${isMobile ? "hidden" : "block"}`}
      >
        {nav.nav.map((e) => (
          <span
            onClick={() => handleScroll(e)}
            className="text-color transition-custom cursor-pointer"
            key={e}
          >
            {e}
          </span>
        ))}
      </nav>
      {/* signin / signup */}
      <div
        className={`flex items-center gap-10 text-[16px] ${isMobile ? "hidden" : "block"}`}
      >
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
