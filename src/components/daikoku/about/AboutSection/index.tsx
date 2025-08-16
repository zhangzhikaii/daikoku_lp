"use client";

import clsx from "clsx";
import Image from "next/image";
import { useInView } from "react-intersection-observer";

export const AboutSection: React.FC = () => {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });
  return (
    <div
      ref={ref}
      className={clsx(
        "flex flex-col m-10 gap-10",
        "md:flex-row md:my-40 md:justify-center",
        "lg:gap-20",
      )}
    >
      <div
        className={clsx(
          "order-first flex flex-col justify-between gap-5",
          "md:order-last md:max-w-xl",
          "lg:max-w-2xl lg:p-5",
          "",
          "transition-all duration-2000 ease-out",
          inView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-[30px]",
        )}
      >
        <h1 className="text-5xl text-black font-bold">About</h1>
        <div>
          <h1 className="text-xl text-black">
            The street racing culture in Tokyo emerged on the network of the
            Shuto Expressway. As Japan&apos;s economy surged in the 1980s and
            the expressway expanded, it became a haven for young enthusiasts
            drawn to high-speed racing and custom car modifications.
          </h1>
          <a href="/daikoku/history" className="text-gray-500 hover:underline">
            More about underground racing in Tokyo→
          </a>
        </div>
        <h1 className="text-xl text-black">
          Today, while the days of reckless speeding have faded, the spirit of
          the culture still lives on.
        </h1>
      </div>
      <div
        className={clsx(
          "order-last shadow-2xl self-start",
          "md:order-first md:w-sm",
          "transition-all duration-2000 ease-out",
          inView
            ? "opacity-100 translate-x-0"
            : "opacity-0 -translate-x-[30px]",
        )}
      >
        <Image
          src={`/intro.jpeg`}
          alt={`intro`}
          width={1566}
          height={1600}
          className="w-full h-auto object-cover pointer-events-none"
          priority
        />
      </div>
    </div>
  );
};
