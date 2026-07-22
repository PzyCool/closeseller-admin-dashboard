import { notFound } from "next/navigation";
import { AdminShell } from "@/components/layout/AdminShell";
import { ProductInfoPanel } from "@/components/product-details/ProductInfoPanel";
import { ProductMediaCard } from "@/components/product-details/ProductMediaCard";
import { ProductSummaryCard } from "@/components/product-details/ProductSummaryCard";
import { productDetails } from "@/lib/data";

export function generateStaticParams() {
  return productDetails.map((product) => ({ id: product.id }));
}

export default async function ProductDetailsPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const product = productDetails.find((item) => item.id === id);

  if (!product) notFound();

  return (
    <AdminShell>
      <div className="grid max-w-[1121px] gap-6 xl:grid-cols-[427px_1fr]">
        <div className="space-y-5">
          <ProductMediaCard status={product.status} />
          <ProductSummaryCard product={product} />
        </div>
        <ProductInfoPanel product={product} />
      </div>
    </AdminShell>
  );
}
