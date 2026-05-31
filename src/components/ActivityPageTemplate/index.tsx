"use client";

import { Activity } from "@/types";
import GoogleMapComponent from "../GoogleMap";
import SharedLayout from "../SharedLayout";
import Image from "next/image";
import { OptionCard } from "../OptionCard";

type Props = {
  product: Activity;
};

export const ActivityPageTemplate: React.FC<Props> = ({ product }) => {
  return (
    <SharedLayout maxWidth="large">
      <div className="shrink-0">
        <Image
          src={product.imageUrl}
          alt={product.imageUrl}
          width={2000}
          height={1800}
          className="w-full h-[330px] object-cover pointer-events-none rounded-xl mt-[-50px]"
          priority
        />
      </div>

      <header className="mt-12">
        <h1 className="text-4xl font-bold mb-2">{product.title}</h1>
        <h4 className="text-md font-semibold text-gray-600">
          {product.shortDescription}
        </h4>
      </header>

      <div className="mt-12">
        <h2 className="text-3xl font-bold mb-2">Route</h2>
        <GoogleMapComponent activity={product} />
      </div>

      <div className="mt-12">
        <h2 className="text-3xl font-bold mb-2">Options</h2>
        <h4>Select an option to view availability and make a booking.</h4>
        {product.options.map((option, index) => (
          <OptionCard key={index} option={option} />
        ))}
      </div>
    </SharedLayout>
  );
};
