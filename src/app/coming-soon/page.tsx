import SharedLayout from "@/components/SharedLayout";

export const metadata = {
  title: "Coming soon",
};

export default function NotFound() {
  return (
    <SharedLayout>
      <div className="my-20">
        <h1 className="text-4xl font-bold mb-2">Coming soon</h1>
        <h2 className="text-2xl font-semibold text-gray-600">
          We are almost ready to launch!
        </h2>
      </div>
    </SharedLayout>
  );
}
