"use client";

import { Price } from "@/types";

type Props = {
  price: Price;
  hasFrom?: boolean;
};

export const PriceElement: React.FC<Props> = ({ price, hasFrom = true }) => {
  const { basePrice, discountPrice } = price;

  return (
    <div className="flex text-gray-600 text-md items-end gap-2">
      {hasFrom && "From"}
      {discountPrice != null && (
        <span className="line-through">¥{basePrice.toLocaleString()}</span>
      )}
      <span
        className={`font-semibold text-xl ${
          discountPrice != null ? "text-red-700" : "text-gray-900"
        }`}
      >
        ¥{(discountPrice ?? basePrice).toLocaleString()}
      </span>
    </div>
  );
};
