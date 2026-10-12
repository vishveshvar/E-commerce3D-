import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ProductCard } from "@/components/products/ProductCard";
import { getTrendingProducts } from "@/data/products";

export function TrendingProductsSection() {
  const trending = getTrendingProducts();

  return (
    <section className="bg-zinc-950 py-24 border-b border-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-zinc-800 pb-6">
          <div className="space-y-2">
            <span className="text-xs font-mono uppercase tracking-widest text-amber-400">
              CURATED SELECTIONS // NOW TRENDING
            </span>
            <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tight text-white font-mono">
              The Trending Archive
            </h2>
          </div>
          <Link
            href="/products"
            className="inline-flex items-center space-x-2 text-xs font-mono uppercase tracking-wider text-zinc-400 hover:text-amber-400 transition-colors"
          >
            <span>View All Products</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {trending.slice(0, 8).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
