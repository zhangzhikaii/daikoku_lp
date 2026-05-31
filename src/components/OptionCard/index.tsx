"use client";

import { Optioin } from "@/types";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";

type Props = {
  option: Optioin;
};

export const OptionCard: React.FC<Props> = ({ option }) => {
  return (
    <Link
      className={clsx(
        "overflow-hidden border-2 border-gray-200 rounded-2xl shadow-md h-fit my-4 flex flex-col md:flex-row md:items-center",
        "transition-all duration-200 ease-out",
        "hover:ring-2 hover:ring-gray-200",
      )}
      href={option.url}
    >
      <div className="shrink-0 mx-5">
        <Image
          src={option.imageUrl}
          alt={option.imageUrl}
          width={20}
          height={20}
          className="h-fit w-36 object-cover pointer-events-none"
          priority
        />
      </div>
      <div className="py-4 px-6 text-md">
        <div className="font-semibold tracking-wide uppercase">
          {option.title}
        </div>
        <div className="text-gray-600">{option.shortDescription}</div>
      </div>
    </Link>
  );
};
