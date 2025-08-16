"use client";

import clsx from "clsx";
import Image from "next/image";
import { useInView } from "react-intersection-observer";

export const TitleSection: React.FC = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });
  return (
    <div className="relative w-full">
      <div ref={ref} className={clsx("grid grid-cols-1", "sm:grid-cols-3")}>
        <Image
          src={`/cover_1.jpeg`}
          alt={`cover 1`}
          width={1066}
          height={1600}
          className={clsx(
            "hidden w-full h-auto object-cover pointer-events-none",
            "sm:block",
          )}
          priority
        />
        <Image
          src={`/cover_2.jpeg`}
          alt={`cover 2`}
          width={1066}
          height={1600}
          className={clsx(
            "hidden w-full h-auto object-cover pointer-events-none",
            "sm:block",
          )}
          priority
        />
        <Image
          src={`/cover_3.jpeg`}
          alt={`cover 3`}
          width={1066}
          height={1600}
          className="w-full h-auto object-cover pointer-events-none"
          priority
        />
      </div>
      <div
        className={clsx(
          "absolute inset-0 flex items-center justify-center",
          "transition-all duration-2000 ease-out",
          inView
            ? "opacity-100 translate-x-0"
            : "opacity-0 translate-x-[-5rem]",
        )}
      >
        <div className="flex flex-col items-start">
          <h1
            className={clsx(
              "pointer-events-none text-white font-bold text-6xl drop-shadow",
              "lg:text-7xl",
            )}
          >
            Start your <br className="md:hidden" />
            JDM tour <br className="md:hidden" />
            here
          </h1>
          <button
            className={clsx(
              "text-md font-semibold text-black uppercase bg-white py-2 px-3 rounded-md mt-3 opacity-80 border-2 border-gray-100",
              "transition-all duration-300 ease-out",
              "hover:bg-transparent hover:text-white hover:opacity-100",
              "md:text-xl md:px-4 md:mt-5",
            )}
          >
            Book now
          </button>
        </div>
      </div>
    </div>
  );
};
