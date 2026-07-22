"use client";

import { useState } from "react";
import Image from "next/image";
import { StatusDot } from "@/components/ui/StatusDot";

const productImages = [
  {
    thumbnail: "/product-thumbnails/product-thumb-1.png",
    preview: "/product-thumbnails/product-preview-1.png",
  },
  {
    thumbnail: "/product-thumbnails/product-thumb-2.png",
    preview: "/product-thumbnails/product-preview-2.png",
  },
  {
    thumbnail: "/product-thumbnails/product-thumb-3.png",
    preview: "/product-thumbnails/product-preview-3.png",
  },
  {
    thumbnail: "/product-thumbnails/product-thumb-4.png",
    preview: "/product-thumbnails/product-preview-4.png",
  },
];

export function ProductMediaCard({ status }: { status: string }) {
  const [selectedImage, setSelectedImage] = useState("/product-thumbnails/product-preview-main.png");

  return (
    <div className="space-y-5">
      <section className="rounded-xl bg-white p-5 shadow-[0_8px_24px_rgba(91,58,153,0.10)]">
        <h2 className="text-[18px] font-medium text-foreground">Thumbnails</h2>
        <div className="mt-4 overflow-hidden rounded-xl">
          <Image
            src={selectedImage}
            alt="Sky-blue Jordan sneakers"
            width={389}
            height={221}
            className="h-[221px] w-full object-cover"
            priority
          />
        </div>

        <div className="mt-[10px] grid grid-cols-4 gap-[3px]">
          {productImages.map((image, index) => (
            <button
              key={image.thumbnail}
              type="button"
              className={`overflow-hidden rounded-[6px] border transition ${
                selectedImage === image.preview ? "border-brand" : "border-transparent"
              }`}
              aria-label={`Show product image ${index + 1}`}
              onClick={() => setSelectedImage(image.preview)}
            >
              <Image
                src={image.thumbnail}
                alt={`Product thumbnail ${index + 1}`}
                width={95}
                height={80}
                className="h-20 w-full object-cover"
              />
            </button>
          ))}
        </div>
      </section>

      <section className="rounded-xl bg-white p-5 shadow-[0_8px_24px_rgba(91,58,153,0.10)]">
        <div className="border-b border-border pb-3">
          <h2 className="text-[18px] font-medium text-foreground">Status</h2>
        </div>
        <p className="mt-8 text-[16px] font-medium text-muted">Set Status</p>
        <div className="mt-3 rounded-[9px] border border-border bg-[#f0fff1] px-5 py-2 text-[16px] text-[#2e7d32]">
          <StatusDot status={status} />
        </div>
      </section>
    </div>
  );
}
