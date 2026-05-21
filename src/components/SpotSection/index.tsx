"use client";

import { useInView } from "react-intersection-observer";
import { Card } from "../Card";
import clsx from "clsx";
import { activities } from "../../../db/activities";

export const SpotSection: React.FC = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });
  return (
    <section
      ref={ref}
      className={clsx(
        "flex flex-col p-10",
        "md:w-[45rem] md:mx-auto md:py-30",
        "lg:w-auto",
        "transition-all duration-2000 ease-out",
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-[30px]",
      )}
      id="spot"
    >
      <h1 className="text-5xl text-black font-bold mb-5">Our offerings</h1>
      <div className={clsx("flex flex-col gap-5", "md:flex-row")}>
        {activities.map((activity, i) => {
          return (
            <Card
              title={activity.title}
              imageUrl={activity.imageUrl}
              options={activity.options}
              key={i}
            >
              {activity.shortDescription}
            </Card>
          );
        })}
      </div>
    </section>
  );
};
