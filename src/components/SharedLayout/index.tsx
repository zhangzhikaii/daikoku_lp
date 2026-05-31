import { PropsWithChildren } from "react";

type Props = {
  maxWidth?: "large";
};

export default function SharedLayout({
  children,
  maxWidth,
}: PropsWithChildren<Props>) {
  return (
    <div className="min-h-screen bg-white text-black font-sans px-6 py-36">
      <main className={`${maxWidth ? "max-w-4xl" : "max-w-2xl"} mx-auto`}>
        {children}
      </main>
    </div>
  );
}
