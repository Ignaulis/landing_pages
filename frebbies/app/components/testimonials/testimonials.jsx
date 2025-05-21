import { testimonial } from "@/app/data/testimonial";
import TestimonialSlider from "./testimonialSlider";

export default function Testimonials() {
  return (
    <div className="flex flex-col items-center mt-20 w-full">
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
