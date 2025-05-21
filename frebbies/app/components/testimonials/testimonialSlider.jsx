import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import TestimonialCard from "./testimonialCard"; // Assuming TestimonialCard is correctly implemented

export default function TestimonialSlider({ testimonial }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const cardsPerPage = 3; // Number of cards to display at once

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonial.cards.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonial.cards.length - 1 : prevIndex - 1
    );
  };

  // Determine the cards to display based on the current index
  const getVisibleCards = () => {
    const cards = [];
    const totalCards = testimonial.cards.length;

    // Add the card to the left of the center
    cards.push(testimonial.cards[(currentIndex - 1 + totalCards) % totalCards]);
    // Add the center card
    cards.push(testimonial.cards[currentIndex]);
    // Add the card to the right of the center
    cards.push(testimonial.cards[(currentIndex + 1) % totalCards]);

    return cards;
  };

  const visibleCards = getVisibleCards();

  return (
    <div className="flex flex-col items-center mt-20 w-full overflow-hidden">
      <div className="relative w-full flex justify-center items-center h-[400px]">
        {" "}
        {/* Added a height for better visualization */}
        <AnimatePresence initial={false} custom={currentIndex}>
          {visibleCards.map((card, index) => {
            let position = "center";
            if (index === 0) position = "left";
            if (index === 2) position = "right";

            const variants = {
              center: { x: "0%", opacity: 1, scale: 1, zIndex: 2 },
              left: { x: "-100%", opacity: 0.8, scale: 0.9, zIndex: 1 },
              right: { x: "100%", opacity: 0.8, scale: 0.9, zIndex: 1 },
              enterRight: { x: "100%", opacity: 0.8, scale: 0.9, zIndex: 1 },
              enterLeft: { x: "-100%", opacity: 0.8, scale: 0.9, zIndex: 1 },
              exitLeft: { x: "-200%", opacity: 0, scale: 0.7, zIndex: 0 },
              exitRight: { x: "200%", opacity: 0, scale: 0.7, zIndex: 0 },
            };

            // Calculate the animation state based on the current position
            let animateState = "center";
            let initialLeft = "enterRight";
            let exitLeft = "exitLeft";
            let initialRight = "enterLeft";
            let exitRight = "exitRight";

            if (position === "left") {
              animateState = "left";
            } else if (position === "right") {
              animateState = "right";
            }

            return (
              <motion.div
                key={card.name + index} // Use a unique key for each card, combination of name and index
                className="absolute w-1/3 flex justify-center" // Adjust width to show 3 cards
                variants={variants}
                initial={initialLeft} // You'll need more sophisticated initial/exit for smooth transitions
                animate={animateState}
                exit={exitRight}
                transition={{ duration: 0.5, ease: "easeInOut" }}
              >
                <TestimonialCard e={card} />
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>

      <div className="flex gap-4 mt-10">
        <div
          className="custom-arrow-button cursor-pointer"
          onClick={handlePrev}
        >
          <FaArrowLeftLong className="text-2xl" />
        </div>
        <div
          className="custom-arrow-button cursor-pointer"
          onClick={handleNext}
        >
          <FaArrowRightLong className="text-2xl" />
        </div>
      </div>
    </div>
  );
}
