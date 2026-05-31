"use client";

import { Optioin } from "@/types";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { PriceElement } from "../PriceElement";

type Props = {
  option: Optioin;
};

export const OptionCard: React.FC<Props> = ({ option }) => {
  return (
    <Link
      className={clsx(
        "border-2 border-gray-200 rounded-2xl shadow-md my-4 flex px-6",
        "flex-col py-4 gap-3",
        "md:flex-row md:items-center md:py-0 md:gap-10",
        "transition-all duration-200 ease-out",
        "hover:ring-3 hover:ring-gray-200",
      )}
      href={option.url}
    >
      <div className="shrink-0">
        <Image
          src={option.imageUrl}
          alt={option.imageUrl}
          width={20}
          height={20}
          className="h-fit w-36 pointer-events-none"
          priority
        />
      </div>
      <div className="flex-1 text-md">
        <div className="font-semibold tracking-wide uppercase">
          {option.title}
        </div>
        <div className="text-gray-600">{option.shortDescription}</div>
      </div>
      <PriceElement price={option.price} hasFrom={false} />
    </Link>
  );
};
