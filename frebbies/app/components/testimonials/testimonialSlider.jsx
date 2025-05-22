import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

import TestimonialCard from "./testimonialCard";
import { useEffect, useState } from "react";

export default function TestimonialSlider({ testimonial }) {
  const [screenSize, setScreenSize] = useState("desktop");

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width <= 650) {
        setScreenSize("mobile");
      } else if (width <= 950) {
        setScreenSize("tablet");
      } else {
        setScreenSize("desktop");
      }
    };

    if (typeof window !== "undefined") {
      window.addEventListener("resize", handleResize);
      handleResize();
    }

    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("resize", handleResize);
      }
    };
  }, []);

  const slidesPerView =
    screenSize === "mobile" ? 1.1 : screenSize === "tablet" ? 2 : 3.1;

  return (
    <div className="mt-20 flex w-full flex-col items-center">
      <Swiper
        slidesPerView={slidesPerView}
        spaceBetween={30}
        loop={true}
        centeredSlides
        navigation={{
          nextEl: ".custom-swiper-next",
          prevEl: ".custom-swiper-prev",
        }}
        modules={[Navigation]}
        className="custom-swiper w-full cursor-grab"
      >
        {testimonial.cards.map((e, i) => (
          <SwiperSlide
            key={i}
            className="flex h-full w-full items-center justify-center"
          >
            <TestimonialCard e={e} />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Bottom Navigation */}
      <div className="mt-6 flex justify-center gap-4">
        <button className="custom-swiper-prev custom-arrow-button">
          <FaArrowLeftLong className="text-2xl" />
        </button>
        <button className="custom-swiper-next custom-arrow-button">
          <FaArrowRightLong className="text-2xl" />
        </button>
      </div>
    </div>
  );
}
