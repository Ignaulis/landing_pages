import { plan } from "@/app/data/plan";
import PlanCard from "./planCard";

export default function Plan() {
  return (
    <section className="flex flex-col padding-custom-sides mt-20 gap-20">
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
