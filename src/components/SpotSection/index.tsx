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
        <Card
          title={"Daikoku PA (Morning)"}
          imageUrl={"/daikoku-morning-2.jpeg"}
          pageUrl={"./daikoku/morning"}
        >
          In the calm of the morning, away from the nighttime crowds, watch
          classic and collector cars gather in Tokyo’s prestigious Meiji Jingu
          Gaien before setting off on a relaxed cruise toward Daikoku PA.
        </Card>
        <Card
          title={"Daikoku PA (Night)"}
          imageUrl={"/daikoku-6.avif"}
          pageUrl={"./daikoku/night"}
        >
          As the city lights come alive, supercars, tuned machines, and street
          icons gather in one of Japan’s most legendary car meet spots. The
          atmosphere is electric — engines rev, cameras flash, and every arrival
          turns heads.
        </Card>
        <Card
          title={"Hakone Touge"}
          imageUrl={"/tatsumi-2.jpeg"}
          pageUrl={"./hakone"}
        >
          Leave the city behind and experience the birthplace of Japan’s
          drifting culture. flowing through winding curves, surrounded by
          forest, fresh air, and breathtaking views. Each turn reveals a new
          perspective, each stretch a moment to connect with the road.
        </Card>
      </div>
    </section>
  );
};
