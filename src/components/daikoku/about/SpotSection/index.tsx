"use client";

import { useInView } from "react-intersection-observer";
import { Card } from "../Card";
import clsx from "clsx";

export const SpotSection: React.FC = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });
  return (
    <div
      ref={ref}
      className={clsx(
        "flex flex-col m-10 mx-auto",
        "md:w-[70rem]",
        "transition-all duration-2000 ease-out",
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-[30px]",
      )}
    >
      <h1 className="text-5xl text-black font-bold mb-5">Spot</h1>
      <div className={clsx("flex flex-col gap-5", "md:flex-row")}>
        <Card title={"Daikoku PA"} imageUrl={"/daikoku-4.jpeg"}>
          Looking to take your team away on a retreat to enjoy awesome food and
          take in some sunshine? We have a list of places to do just that.
        </Card>
        <Card title={"Umihotaru PA"} imageUrl={"/umihotaru.jpeg"}>
          Looking to take your team away on a retreat to enjoy awesome food and
          take in some sunshine? We have a list of places to do just that.
        </Card>
        <Card title={"Tatsumi PA"} imageUrl={"/tatsumi-2.jpeg"}>
          Looking to take your team away on a retreat to enjoy awesome food and
          take in some sunshine? We have a list of places to do just that.
        </Card>
      </div>
    </div>
  );
};
