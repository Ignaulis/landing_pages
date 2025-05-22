import { testimonial } from "@/app/data/testimonial";
import TestimonialSlider from "./testimonialSlider";
import { useContext } from "react";
import { ScrollContext } from "@/app/context/scrollContext";

export default function Testimonials() {
  const { refs } = useContext(ScrollContext);
  return (
    <div
      ref={refs.Testimonials}
      className="mt-20 flex w-full flex-col items-center pb-40"
    >
      <div className="flex max-w-[500px] flex-col items-center gap-6 text-center">
        <h2 className="head">{testimonial.head}</h2>
        <p className="para">{testimonial.param}</p>
      </div>
      <div className="w-full">
        <TestimonialSlider testimonial={testimonial} />
      </div>
    </div>
  );
}
