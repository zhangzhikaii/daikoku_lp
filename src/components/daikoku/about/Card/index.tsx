"use client";

import clsx from "clsx";
import Image from "next/image";
import { PropsWithChildren } from "react";

type CardProps = {
  title: string;
  imageUrl: string;
};

export const Card: React.FC<PropsWithChildren<CardProps>> = ({
  title,
  imageUrl,
  children,
}) => {
  return (
    <div
      className={clsx(
        "overflow-hidden border-2 border-gray-100 rounded-2xl shadow-xl",
        "md:max-w-[400px] md:w-auto",
      )}
    >
      <div className="shrink-0">
        <Image
          src={imageUrl}
          alt={imageUrl}
          width={1066}
          height={1600}
          className="w-full h-[250px] object-cover pointer-events-none"
          priority
        />
      </div>
      <div className="py-8 px-6">
        <div className="text-md font-semibold tracking-wide text-black uppercase">
          {title}
        </div>
        <p className="mt-2 mb-4 text-gray-500">{children}</p>
        <a href="#" className="text-gray-500 hover:underline">
          More about {title}→
        </a>
      </div>
    </div>
  );
};
