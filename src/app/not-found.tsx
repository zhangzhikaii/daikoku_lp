import SharedLayout from "@/components/SharedLayout";

export const metadata = {
  title: "Not found",
};

export default function NotFound() {
  return (
    <SharedLayout>
      <div className="my-20">
        <h1 className="text-4xl font-bold mb-2">404</h1>
        <h2 className="text-2xl font-semibold text-gray-600">
          Page not found, please check the URL
        </h2>
      </div>
    </SharedLayout>
  );
}
