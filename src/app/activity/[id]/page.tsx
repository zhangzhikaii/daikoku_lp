import { ActivityPageTemplate } from "@/components/ActivityPageTemplate";
import { activities, getProduct } from "@/db/activities";
import type { Metadata } from "next";
import { notFound, redirect } from "next/navigation";
import { cache } from "react";

type Props = {
  params: Promise<{
    id: string;
  }>;
};

const getCachedProduct = cache(getProduct);

export async function generateStaticParams() {
  return activities.map((activity) => ({
    id: String(activity.id),
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;

  const product = await getCachedProduct(id);

  return {
    title: product?.title ?? "Product",
  };
}

export default async function ProductPage({ params }: Props) {
  const { id } = await params;

  const product = await getCachedProduct(id);

  if (!product) notFound();

  if (product.id === "hakone") redirect("/coming-soon");

  return <ActivityPageTemplate product={product} />;
}
