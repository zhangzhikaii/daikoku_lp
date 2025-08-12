import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="font-sans items-center justify-items-center min-h-screen bg-white">
      <main className="flex flex-col items-center sm:items-start">
        <div className="relative w-full">
          <div className="flex w-full">
            {[1, 2, 3].map((n) => (
              <div key={n} className="w-1/3">
                <Image
                  src={`/cover_${n}.jpeg`}
                  alt={`cover ${n}`}
                  width={1066}
                  height={1600}
                  className="w-full h-auto object-cover pointer-events-none"
                  priority
                />
              </div>
            ))}
          </div>
          <h1 className="absolute inset-0 bottom-1/10 flex items-center justify-center text-6xl text-white font-bold text-shadow-lg/20 pointer-events-none">
            Start your JDM tour here
          </h1>
        </div>
        <div className="flex flex-row px-20 py-30 gap-20">
          <Image
            src={`/intro.jpeg`}
            alt={`intro`}
            width={1566}
            height={1600}
            className="w-4/11 h-auto object-cover pointer-events-none"
            priority
          />
          <div className="flex flex-col justify-between">
            <h1 className="text-5xl text-black font-bold">About</h1>
            <div>
              <h1 className="text-xl text-black ">
                The street racing culture in Tokyo emerged on the network of the
                Shuto Expressway. As Japan's economy surged in the 1980s and the
                expressway expanded, it became a haven for young enthusiasts
                drawn to high-speed racing and custom car modifications.
              </h1>
              <a
                href="/daikoku/history"
                className="text-gray-500 hover:underline"
              >
                More about underground racing in Tokyo→
              </a>
            </div>
            <h1 className="text-xl text-black">
              Today, while the days of reckless speeding have faded, the spirit
              of the culture still lives on.
            </h1>
          </div>
        </div>
      </main>
    </div>
  );
}
