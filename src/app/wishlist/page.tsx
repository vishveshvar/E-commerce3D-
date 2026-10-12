"use client";

import Link from "next/link";
import { Heart, ArrowRight, Trash2 } from "lucide-react";
import { useWishlistStore } from "@/features/wishlist/wishlistStore";
import { ProductCard } from "@/components/products/ProductCard";
import { useIsMounted } from "@/lib/useIsMounted";

export default function WishlistPage() {
  const mounted = useIsMounted();
  const { items, clearWishlist } = useWishlistStore();

  if (!mounted) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center font-mono text-zinc-500">
        LOADING SAVED ARCHIVE...
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-12">
      {/* Header */}
      <div className="border-b border-zinc-800 pb-6 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
        <div>
          <span className="text-xs font-mono uppercase tracking-widest text-rose-400">
            PERSONAL ARCHIVE CURATION
          </span>
          <h1 className="text-4xl font-black uppercase tracking-tight text-white font-mono">
            Saved Wishlist ({items.length})
          </h1>
        </div>
        {items.length > 0 && (
          <button
            onClick={clearWishlist}
            className="flex items-center space-x-1 text-xs font-mono uppercase text-zinc-400 hover:text-rose-400 transition-colors"
          >
            <Trash2 className="h-3.5 w-3.5" />
            <span>Clear Saved Items</span>
          </button>
        )}
      </div>

      {items.length === 0 ? (
        <div className="py-24 text-center border border-dashed border-zinc-800 space-y-6">
          <div className="h-16 w-16 mx-auto rounded-full border border-zinc-800 flex items-center justify-center bg-zinc-900/50">
            <Heart className="h-7 w-7 text-zinc-500" />
          </div>
          <p className="font-mono text-sm uppercase text-zinc-400">
            You have not bookmarked any archive objects yet
          </p>
          <Link
            href="/products"
            className="inline-flex items-center space-x-2 bg-amber-500 hover:bg-amber-400 text-black px-6 py-3 text-xs font-bold uppercase tracking-wider transition-colors"
          >
            <span>Discover Products</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
}
