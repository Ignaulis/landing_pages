import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

import TestimonialCard from "./testimonialCard";

export default function TestimonialSlider({ testimonial }) {
  return (
    <div className="flex flex-col items-center mt-20 w-full">
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        loop={true}
        centeredSlides
        navigation={{
          nextEl: ".custom-swiper-next",
          prevEl: ".custom-swiper-prev",
        }}
        modules={[Navigation]}
        className="w-full custom-swiper"
      >
        {testimonial.cards.map((e, i) => (
          <SwiperSlide
            key={i}
            className="flex items-center justify-center w-full h-full"
          >
            <TestimonialCard e={e} />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Bottom Navigation */}
      <div className="flex justify-center gap-4 mt-6">
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
