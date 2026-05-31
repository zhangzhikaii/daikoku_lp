"use client";

import { Activity } from "@/types";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";

type Props = {
  activity: Activity;
};

export const Card: React.FC<Props> = ({ activity }) => {
  return (
    <Link
      className={clsx(
        "overflow-hidden border-2 border-gray-200 rounded-2xl shadow-xl h-fit",
        "md:max-w-[300px] lg:max-w-[360px]",
        "transition-all duration-200 ease-out",
        "hover:ring-5 hover:ring-gray-200",
      )}
      href={`./activity/${activity.id}`}
    >
      <div className="shrink-0">
        <Image
          src={activity.imageUrl}
          alt={activity.imageUrl}
          width={1066}
          height={1600}
          className="w-full h-[250px] object-cover pointer-events-none"
          priority
        />
      </div>
      <div className="py-8 px-6">
        <div className="text-md font-semibold tracking-wide text-black uppercase">
          {activity.title}
        </div>
        <p className="mt-2 mb-4 text-gray-500">{activity.shortDescription}</p>
      </div>
    </Link>
  );
};
