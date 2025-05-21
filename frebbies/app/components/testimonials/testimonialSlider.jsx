import { useState } from "react";
import { motion } from "framer-motion";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import TestimonialCard from "./testimonialCard";

export default function TestimonialSlider({ testimonial }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const cardsPerPage = 4.5;
  const totalCards = testimonial.cards.length;

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % totalCards);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? totalCards - 1 : prev - 1));
  };

  // Kortelės pločio procentas (dalinama iš rodomų vienu metu)
  const cardWidthPercent = 100 / cardsPerPage;

  return (
    <div className="flex flex-col items-center mt-20 w-full overflow-hidden">
      <div className="relative w-full overflow-hidden">
        <motion.div
          className="flex gap-8"
          animate={{
            x: `-${currentIndex * (100 / cardsPerPage)}%`,
          }}
          transition={{
            type: "tween",
            ease: "easeInOut",
            duration: 0.4,
          }}
          style={{
            width: `${(testimonial.cards.length * 100) / cardsPerPage}%`,
          }}
        >
          {testimonial.cards.map((e, i) => (
            <div
              key={i}
              style={{
                width: `${cardWidthPercent}%`,
                flexShrink: 0,
              }}
            >
              <TestimonialCard e={e} />
            </div>
          ))}
        </motion.div>
      </div>

      <div className="flex gap-4 mt-10">
        <div
          onClick={handlePrev}
          className="w-[60px] h-[60px] border-2 border-[#F53838] rounded-full flex justify-center items-center transition-all duration-200 bg-white text-[#F53838] hover:bg-[#F53838] hover:text-white cursor-pointer"
        >
          <FaArrowLeftLong className="text-2xl" />
        </div>
        <div
          onClick={handleNext}
          className="w-[60px] h-[60px] border-2 border-[#F53838] rounded-full flex justify-center items-center transition-all duration-200 bg-white text-[#F53838] hover:bg-[#F53838] hover:text-white cursor-pointer"
        >
          <FaArrowRightLong className="text-2xl" />
        </div>
      </div>
    </div>
  );
}
