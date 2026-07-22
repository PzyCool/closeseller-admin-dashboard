type ProductInfo = {
  displayName: string;
  category: string;
  condition: string;
  description: string;
  price: string;
  discount: string;
  stock: string;
  lowStockAlert: string;
  deliveryTimeline: string;
  shippingFee: string;
};

function DetailField({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <dt className="text-[16px] font-medium text-foreground">{label}</dt>
      <dd className="mt-3 pl-5 text-[16px] text-muted">{value}</dd>
    </div>
  );
}

export function ProductInfoPanel({ product }: { product: ProductInfo }) {
  return (
    <section className="rounded-xl bg-white p-[18px] shadow-[0_8px_24px_rgba(91,58,153,0.10)]">
      <h2 className="text-[20px] font-bold text-foreground">General Information</h2>

      <div className="mt-8 space-y-8">
        <div>
          <h3 className="text-[18px] font-medium text-foreground">Product Information</h3>
          <dl className="mt-7 space-y-5">
            <DetailField label="Product Name" value={product.displayName} />
            <DetailField label="Category" value={product.category} />
            <DetailField label="Condition" value={product.condition} />
            <div>
              <dt className="text-[16px] font-medium text-foreground">Description</dt>
              <dd className="mt-3 pl-5 text-[14px] leading-6 text-muted">{product.description}</dd>
            </div>
          </dl>
        </div>

        <div>
          <h3 className="text-[18px] font-medium text-foreground">Pricing & Stock</h3>
          <dl className="mt-7 space-y-5">
            <DetailField label="Price" value={product.price} />
            <DetailField label="Discount" value={product.discount} />
            <DetailField label="Stock Quantity" value={product.stock} />
            <DetailField label="Low Stock Alert" value={product.lowStockAlert} />
          </dl>
        </div>

        <div>
          <h3 className="text-[18px] font-medium text-foreground">Shipping Details</h3>
          <dl className="mt-7 space-y-5">
            <DetailField label="Estimated Delivery Timeline" value={product.deliveryTimeline} />
            <DetailField label="Shipping Fee" value={product.shippingFee} />
          </dl>
        </div>
      </div>
    </section>
  );
}
