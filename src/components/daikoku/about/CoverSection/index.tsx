"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";

export const CoverSection: React.FC = () => {
  const [show, setShow] = useState(false);
  useEffect(() => setShow(true), []);
  return (
    <div className="relative w-full">
      <div className="grid grid-cols-1 sm:grid-cols-3">
        <Image
          src={`/cover_1.jpeg`}
          alt={`cover 1`}
          width={1066}
          height={1600}
          className="hidden sm:block w-full h-auto object-cover pointer-events-none"
          priority
        />
        <Image
          src={`/cover_2.jpeg`}
          alt={`cover 2`}
          width={1066}
          height={1600}
          className="hidden sm:block w-full h-auto object-cover pointer-events-none"
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
      <h1
        className={[
          "absolute inset-0 flex items-center justify-center text-white font-bold drop-shadow pointer-events-none text-6xl lg:text-7xl",
          "transition-all duration-2000 ease-out",
          show ? "opacity-100 translate-x-0" : "opacity-0 translate-x-[-5rem]",
        ].join(" ")}
      >
        Start your <br className="md:hidden" />
        JDM tour <br className="md:hidden" />
        here
      </h1>
    </div>
  );
};
