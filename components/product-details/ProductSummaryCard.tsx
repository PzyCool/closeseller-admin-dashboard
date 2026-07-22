type ProductSummary = {
  displayName: string;
  category: string;
  condition: string;
  vendor: string;
  dateAdded: string;
};

const fields = [
  ["Product Name", "displayName"],
  ["Category badge", "category"],
  ["Condition badge", "condition"],
  ["Vendor name", "vendor"],
  ["Date added", "dateAdded"],
] as const;

export function ProductSummaryCard({ product }: { product: ProductSummary }) {
  return (
    <section className="rounded-xl bg-white p-[18px] shadow-[0_8px_24px_rgba(91,58,153,0.10)]">
      <h2 className="text-[18px] font-medium text-foreground">Product Details</h2>
      <dl className="mt-8 space-y-5">
        {fields.map(([label, key]) => (
          <div key={key}>
            <dt className="text-[16px] font-medium text-foreground">{label}</dt>
            <dd className="mt-3 pl-5 text-[16px] text-muted">{product[key]}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
