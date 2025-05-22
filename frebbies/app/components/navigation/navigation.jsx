import { ScrollContext } from "@/app/context/scrollContext";
import { nav } from "@/app/data/nav";
import { useContext, useEffect, useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { IoMdClose } from "react-icons/io";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

export default function Navigation() {
  const { handleScroll } = useContext(ScrollContext);
  const [isMobile, setIsMobile] = useState(false);
  const [open, setOpen] = useState(false);

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
    <section className="padding-custom-sides relative flex items-center justify-between pt-6">
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <img src={nav.img} alt="logo" width={149} height={36} />
      </motion.div>

      <div
        className={isMobile ? "block" : "hidden"}
        onClick={() => setOpen((e) => !e)}
      >
        {open ? (
          <IoMdClose className="scale-150 cursor-pointer transition-all duration-200 hover:scale-160 active:scale-140" />
        ) : (
          <AiOutlineMenu className="scale-150 cursor-pointer transition-all duration-200 hover:scale-160 active:scale-140" />
        )}
      </div>

      {/* navigation */}
      {!isMobile && (
        <>
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <nav className="flex gap-10 text-[16px]">
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
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="flex items-center gap-10 text-[16px]">
              {nav.sign.map((item) => (
                <Link
                  href="/soon"
                  key={item}
                  className={`cursor-pointer font-medium ${
                    item === "Sign In"
                      ? "text-color transition-custom"
                      : "button-small"
                  }`}
                >
                  {item}
                </Link>
              ))}
            </div>
          </motion.div>
        </>
      )}

      <AnimatePresence>
        {isMobile && open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="absolute top-20 right-0 flex w-full flex-col gap-6 bg-white p-4 shadow-md"
          >
            <nav className="flex flex-col items-center gap-4 text-[16px]">
              {nav.nav.map((e) => (
                <span
                  key={e}
                  onClick={() => {
                    handleScroll(e);
                    setOpen(false);
                  }}
                  className="text-color transition-custom cursor-pointer"
                >
                  {e}
                </span>
              ))}
            </nav>

            <div className="flex flex-col items-center gap-4 text-[16px]">
              {nav.sign.map((item) => (
                <Link
                  href={"/soon"}
                  key={item}
                  className={`cursor-pointer font-medium ${
                    item === "Sign In"
                      ? "text-color transition-custom"
                      : "button-small"
                  }`}
                >
                  {item}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
