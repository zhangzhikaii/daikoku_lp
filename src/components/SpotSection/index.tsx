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
          products={[
            {
              title: "Daikoku PA (Morning)",
              url: "https://carlifejapan.rezdy.com/763018/morning-daikoku-pa-car-meet-visit?_gl=1*1r6fjxd*_gcl_au*MTc1NjU2MTE0OS4xNzc4MDY3Mzk1LjEyNzk1MDgyODAuMTc3ODA3NTM0Ny4xNzc4MDc1MzQ2*_ga*MTE4NTMzODc0NS4xNzc3MTMwMzQz*_ga_J7SXS0R0D6*czE3NzgwNjczMTkkbzckZzEkdDE3NzgwNzU0ODUkajQ5JGwwJGg0NjMwOTk5Njk",
            },
          ]}
        >
          In the calm of the morning, away from the nighttime crowds, watch
          classic and collector cars gather in Tokyo’s prestigious Meiji Jingu
          Gaien before setting off on a relaxed cruise toward Daikoku PA.
        </Card>
        <Card
          title={"Daikoku PA (Night)"}
          imageUrl={"/daikoku-6.avif"}
          products={[
            {
              title: "Daikoku PA (Night)",
              url: "https://carlifejapan.rezdy.com/763004/daikoku-pa-car-meet-visit?_gl=1%2A1lavcmo%2A_gcl_au%2AMTc1NjU2MTE0OS4xNzc4MDY3Mzk1LjEyNzk1MDgyODAuMTc3ODA3NTM0Ny4xNzc4MDc1MzQ2%2A_ga%2AMTE4NTMzODc0NS4xNzc3MTMwMzQz%2A_ga_J7SXS0R0D6%2AczE3NzgwNjczMTkkbzckZzEkdDE3NzgwNzU0NzckajU3JGwwJGg0NjMwOTk5Njk.&lang=en",
            },
            {
              title: "Daikoku PA (Night, with GR86)",
              url: "https://carlifejapan.rezdy.com/763009/daikoku-pa-car-meet-visit-in-a-gr86?_gl=1*1awzq87*_gcl_au*MTc1NjU2MTE0OS4xNzc4MDY3Mzk1LjEyNzk1MDgyODAuMTc3ODA3NTM0Ny4xNzc4MDc1MzQ2*_ga*MTE4NTMzODc0NS4xNzc3MTMwMzQz*_ga_J7SXS0R0D6*czE3NzgwNjczMTkkbzckZzEkdDE3NzgwNzU0ODIkajUyJGwwJGg0NjMwOTk5Njk",
            },
            {
              title: "Daikoku PA (Night, with Supra)",
              url: "https://carlifejapan.rezdy.com/763011/ride-in-style-ride-the-gr-supra-to-daikoku?_gl=1*1r6fjxd*_gcl_au*MTc1NjU2MTE0OS4xNzc4MDY3Mzk1LjEyNzk1MDgyODAuMTc3ODA3NTM0Ny4xNzc4MDc1MzQ2*_ga*MTE4NTMzODc0NS4xNzc3MTMwMzQz*_ga_J7SXS0R0D6*czE3NzgwNjczMTkkbzckZzEkdDE3NzgwNzU0ODUkajQ5JGwwJGg0NjMwOTk5Njk",
            },
          ]}
        >
          As the city lights come alive, supercars, tuned machines, and street
          icons gather in one of Japan’s most legendary car meet spots. The
          atmosphere is electric — engines rev, cameras flash, and every arrival
          turns heads.
        </Card>
        <Card
          title={"Hakone Touge (Coming soon)"}
          imageUrl={"/tatsumi-2.jpeg"}
          products={[{ title: "Hakone Touge", url: "./hakone" }]}
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
