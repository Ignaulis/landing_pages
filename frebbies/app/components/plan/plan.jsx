import { plan } from "@/app/data/plan";
import PlanCard from "./planCard";
import { useContext } from "react";
import { ScrollContext } from "@/app/context/scrollContext";

export default function Plan() {
  const { refs } = useContext(ScrollContext);
  return (
    <section
      ref={refs.Pricing}
      className="flex flex-col padding-custom-sides pt-10 gap-20"
    >
      <div className="flex flex-col w-full gap-6 items-center">
        <h2 className="head">{plan.head}</h2>
        <p className="para">{plan.para}</p>
      </div>
      <div className="flex justify-around">
        {plan.plans.map((e) => (
          <PlanCard key={e.head} data={e} />
        ))}
      </div>
    </section>
  );
}
