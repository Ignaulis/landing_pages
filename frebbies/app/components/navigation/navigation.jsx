import { ScrollContext } from "@/app/context/scrollContext";
import { nav } from "@/app/data/nav";
import { useContext, useEffect, useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";

export default function Navigation() {
  const { handleScroll } = useContext(ScrollContext);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleWidth = () => {
      setIsMobile(window.innerWidth <= 850);
    };

    if (typeof window !== "undefined") {
      handleWidth();
      window.addEventListener("resize", handleWidth);
    }

    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("resize", handleWidth);
      }
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
      <div className={isMobile ? "block" : "hidden"}>
        <AiOutlineMenu className="scale-150 cursor-pointer transition-all duration-200 hover:scale-160 active:scale-140" />
      </div>

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
