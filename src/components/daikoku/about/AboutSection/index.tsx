import Image from "next/image";

export const AboutSection: React.FC = () => {
  return (
    <div className="flex flex-col md:flex-row m-10 md:my-10 md:mx-auto gap-5 justify-items-center">
      <div className="order-first md:order-last flex flex-col justify-between gap-5 flex-1">
        <h1 className="text-5xl text-black font-bold">About</h1>
        <div>
          <h1 className="text-xl text-black max-w-2xl">
            The street racing culture in Tokyo emerged on the network of the
            Shuto Expressway. As Japan&apos;s economy surged in the 1980s and
            the expressway expanded, it became a haven for young enthusiasts
            drawn to high-speed racing and custom car modifications.
          </h1>
          <a href="/daikoku/history" className="text-gray-500 hover:underline">
            More about underground racing in Tokyo→
          </a>
        </div>
        <h1 className="text-xl text-black max-w-2xl">
          Today, while the days of reckless speeding have faded, the spirit of
          the culture still lives on.
        </h1>
      </div>
      <div className="order-last md:order-first flex-1">
        <Image
          src={`/intro.jpeg`}
          alt={`intro`}
          width={1566}
          height={1600}
          className="w-full h-auto object-cover pointer-events-none"
          priority
        />
      </div>
    </div>
  );
};
