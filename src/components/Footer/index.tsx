"use client";

import clsx from "clsx";

export const Footer: React.FC = () => {
  return (
    <div className={clsx("bg-gray-100 py-5 h-20")}>
      <span>ABC K.K. John Smith</span>
      <span>**-** 12 Nagatacho, Chiyoda-ku， Tokyo 〒100-6178</span>
      <span>contact@example.jp</span>
      <span>John Smith</span>
    </div>
  );
};
