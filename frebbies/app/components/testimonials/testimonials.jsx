import { testimonial } from "@/app/data/testimonial";
import TestimonialSlider from "./testimonialSlider";
import { useContext } from "react";
import { ScrollContext } from "@/app/context/scrollContext";

export default function Testimonials() {
  const { refs } = useContext(ScrollContext);
  return (
    <div
      ref={refs.Testimonials}
      className="flex flex-col items-center mt-20 pb-40 w-full"
    >
      <div className="flex flex-col w-[500px] text-center items-center gap-6 ">
        <h2 className="head">{testimonial.head}</h2>
        <p className="para">{testimonial.param}</p>
      </div>
      <div className="w-full">
        <TestimonialSlider testimonial={testimonial} />
      </div>
    </div>
  );
}
