export const metadata = {
  title: "Not found",
};

export default function NotFound() {
  return (
    <div className="min-h-[75vh] bg-white text-black font-sans px-6 py-36">
      <div className="mx-40 my-20">
        <h1 className="text-4xl font-bold mb-2">404</h1>
        <h2 className="text-2xl font-semibold text-gray-600">
          Page not found, please check the URL
        </h2>
      </div>
    </div>
  );
}
