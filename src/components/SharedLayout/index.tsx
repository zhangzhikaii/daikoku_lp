import { PropsWithChildren } from "react";

export default function SharedLayout({ children }: PropsWithChildren) {
  return (
    <div className="min-h-screen bg-white text-black font-sans px-6 py-36">
      <main className="max-w-2xl mx-auto">{children}</main>
    </div>
  );
}
