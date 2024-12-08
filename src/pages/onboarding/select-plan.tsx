import clsx from "clsx";
import { useEffect, useState } from "react";
import { AccountType, Plan } from "../pages.d";
import {
  accountTypes,
  commonPlans,
  plans as subscriptionPlans,
} from "@app/constants/subscription-plans";
import { Logo } from "@app/components";
import { ArrowBigRightIcon, Sofa } from "lucide-react";

export default function SelectPlan() {
  const [data, setData] = useState<{
    accountType: AccountType;
    plan: Plan | null;
  }>({
    accountType: AccountType.INDIVIDUAL,
    plan: null,
  });
  const [plans, setPlans] = useState<Plan[]>([]);

  const handlePlanSelection = (plan: Plan) => {
    if (data.plan?.name !== plan.name) {
      setData({ ...data, plan });
    }
  };

  useEffect(() => {
    setPlans([
      commonPlans[0],
      ...subscriptionPlans[data.accountType],
      ...(data.accountType === AccountType.BUSINESS
        ? commonPlans.slice(1)
        : []),
    ]);
  }, [data.accountType]);

  return (
    <div className="py-10 px-3 space-y-16 overflow-y-auto h-full">
      <div className="flex items-center justify-between gap-5 container mx-auto max-w-screen-xl">
      <Logo size={3} />
        <h3 className="text-4xl font-bold mx-auto">Choose a plan</h3>
        <div role="tablist" className="tabs tabs-boxed">
          {accountTypes.map((type) => (
            <button
              key={type}
              role="tab"
              className={clsx("tab tab-border-3 font-semibold", {
                "tab-active": data.accountType === type,
              })}
              onClick={() => setData({ accountType: type, plan: null })}
            >
              {type.toLocaleUpperCase()}
            </button>
          ))}
        </div>
      </div>
      <div className="rounded-md container mx-auto max-w-screen-xl text-white">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={clsx("relative rounded-box p-5 bg-secondary cursor-pointer", {
                "border-4 border-primary opacity-70 pointer-events-none":
                  data.plan === plan,
                "opacity-70 pointer-events-none": plan.disabled,
              })}
              onClick={handlePlanSelection.bind(null, plan)}
            >
                {plan.disabled && (
                    <div className="absolute inset-0 rounded-box bg-primary-content bg-opacity-70 flex items-center justify-center">
                    <p className="text-gray-300 text-4xl font-extralight transform rotate-45 flex flex-col items-center">
                        <Sofa size={64} color="gray" />
                        Coming soon
                    </p>
                    </div>
                )}
              <h4
                className={`text-sm font-bold badge badge-outline badge-${plan.color} badge-lg`}
              >
                {plan.name}
              </h4>
              <div>
                <p className="text-green-200 mt-3 font-extrabold text-4xl">
                  {plan.currency}{" "}
                  {plan.amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                </p>
                <p className="text-secondary-content text-sm font-extralight">
                  {plan.description}
                </p>
              </div>
              <ul className="mt-5 space-y-3">
                {plan.features?.map((feature, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <ArrowBigRightIcon size={16} />
                    <span className="text-md">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="container mx-auto max-w-screen-xl text-end">
        <button
          className={clsx("text-white btn btn-primary btn-lg btn-wide", {
            "btn-disabled": !data.plan,
          })}
          tabIndex={data.plan ? 0 : -1}
          role="button"
          aria-disabled={!data.plan}
        >
          Continue
        </button>
      </div>
    </div>
  );
}
