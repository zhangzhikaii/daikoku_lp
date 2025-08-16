"use client";

// import { useInView } from "react-intersection-observer";
import { Card } from "../Card";

export const SpotSection: React.FC = () => {
  // const { ref, inView } = useInView({
  //   threshold: 0.5,
  //   triggerOnce: true,
  // });
  return (
    <div
      // ref={ref}
      className={[
        "m-10 md:m-0 md:w-full lg:px-50 lg:my-20",
        "transition-all duration-2000 ease-out",
        // inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-[30px]",
      ].join(" ")}
    >
      <h1 className="text-5xl text-black font-bold mb-5">Spot</h1>
      <div className="flex flex-col gap-5 md:flex-row md:justify-between">
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
