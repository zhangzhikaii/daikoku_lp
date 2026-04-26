"use client";

import clsx from "clsx";
import Image from "next/image";
import { PropsWithChildren } from "react";

type CardProps = {
  title: string;
  imageUrl: string;
  pageUrl?: string;
};

export const Card: React.FC<PropsWithChildren<CardProps>> = ({
  title,
  imageUrl,
  pageUrl,
  children,
}) => {
  return (
    <div
      className={clsx(
        "overflow-hidden border-2 border-gray-200 rounded-2xl shadow-xl ",
        "md:max-w-[300px] lg:max-w-[360px]",
        "transition-all duration-200 ease-out",
        "hover:ring-5 hover:ring-gray-200",
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
        <a href={pageUrl} className="text-gray-500 hover:underline">
          More about {title}→
        </a>
      </div>
    </div>
  );
};
