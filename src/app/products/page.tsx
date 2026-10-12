import { Metadata } from "next";
import { ProductCatalogClient } from "@/components/products/ProductCatalogClient";
import { BRAND_NAME } from "@/lib/utils";

export const metadata: Metadata = {
  title: `Complete Catalog | ${BRAND_NAME}`,
  description: "Browse the curated multi-category product catalog with interactive filtering and sorting.",
};

export default function ProductsPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-12">
      {/* Editorial Header */}
      <div className="border-b border-zinc-800 pb-8 space-y-3">
        <span className="text-xs font-mono uppercase tracking-widest text-amber-400">
          INDEX // ARCHIVE COLLECTION
        </span>
        <h1 className="text-4xl sm:text-5xl font-black uppercase tracking-tight text-white font-mono">
          Complete Catalog
        </h1>
        <p className="text-sm text-zinc-400 max-w-2xl font-sans leading-relaxed">
          Explore our seasonal drops across tailoring, studio acoustics, artisanal ceramics, botanical pigments, and trail footwear.
        </p>
      </div>

      {/* Catalog Client with Live Filters */}
      <ProductCatalogClient />
    </div>
  );
}
