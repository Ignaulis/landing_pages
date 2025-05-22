import { plan } from "@/app/data/plan";
import PlanCard from "./planCard";
import { useContext } from "react";
import { ScrollContext } from "@/app/context/scrollContext";

export default function Plan() {
  const { refs } = useContext(ScrollContext);
  return (
    <section
      ref={refs.Pricing}
      className="padding-custom-sides flex flex-col gap-20 pt-10"
    >
      <div className="flex w-full flex-col items-center gap-6">
        <h2 className="head">{plan.head}</h2>
        <p className="para">{plan.para}</p>
      </div>
      <div className="flex flex-wrap justify-around gap-3 lg:flex-nowrap lg:gap-0">
        {plan.plans.map((e) => (
          <PlanCard key={e.head} data={e} />
        ))}
      </div>
    </section>
  );
}
