"use client";

import Image from "next/image";
import Link from "next/link";
import { Heart, ShoppingBag, Eye, Star } from "lucide-react";
import { Product } from "@/types/product";
import { formatPrice } from "@/lib/utils";
import { useCartStore } from "@/features/cart/cartStore";
import { useWishlistStore } from "@/features/wishlist/wishlistStore";
import { useIsMounted } from "@/lib/useIsMounted";

interface ProductCardProps {
  product: Product;
  priority?: boolean;
}

export function ProductCard({ product, priority = false }: ProductCardProps) {
  const mounted = useIsMounted();
  const { addItem } = useCartStore();
  const { isInWishlist, toggleItem } = useWishlistStore();

  const inWishlist = mounted ? isInWishlist(product.id) : false;

  return (
    <div className="group relative flex flex-col bg-zinc-950 border border-zinc-900 hover:border-zinc-700 transition-all duration-300">
      {/* Image Container with Badges */}
      <div className="relative aspect-[3/4] w-full overflow-hidden bg-zinc-900">
        <Image
          src={product.image}
          alt={product.name}
          fill
          priority={priority}
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />

        {/* Tag & Discount badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-1.5 z-10">
          {product.tag && (
            <span className="bg-black/80 backdrop-blur-sm border border-zinc-800 text-amber-400 text-[10px] font-mono uppercase tracking-widest px-2.5 py-1">
              {product.tag}
            </span>
          )}
          {product.originalPrice && (
            <span className="bg-rose-950/80 border border-rose-800 text-rose-300 text-[9px] font-mono uppercase tracking-wider px-2 py-0.5">
              SAVE {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}%
            </span>
          )}
        </div>

        {/* Wishlist Button */}
        <button
          onClick={(e) => {
            e.preventDefault();
            toggleItem(product);
          }}
          className={`absolute top-3 right-3 z-10 p-2 rounded-full backdrop-blur-md transition-colors ${
            inWishlist
              ? "bg-rose-600 text-white"
              : "bg-black/60 text-zinc-300 hover:bg-black/90 hover:text-white"
          }`}
          aria-label={inWishlist ? "Remove from wishlist" : "Add to wishlist"}
        >
          <Heart className={`h-4 w-4 ${inWishlist ? "fill-current" : ""}`} />
        </button>

        {/* Hover Action Overlay */}
        <div className="absolute inset-x-0 bottom-0 p-3 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center gap-2">
          <button
            onClick={(e) => {
              e.preventDefault();
              addItem(product);
            }}
            className="flex-1 bg-amber-500 hover:bg-amber-400 text-black py-2.5 px-3 text-xs font-bold uppercase tracking-wider flex items-center justify-center space-x-1.5 transition-colors shadow-lg"
          >
            <ShoppingBag className="h-3.5 w-3.5" />
            <span>Add to Bag</span>
          </button>
          <Link
            href={`/products/${product.slug}`}
            className="p-2.5 bg-zinc-900/90 hover:bg-white hover:text-black text-white border border-zinc-700 transition-colors"
            aria-label={`View details for ${product.name}`}
          >
            <Eye className="h-3.5 w-3.5" />
          </Link>
        </div>
      </div>

      {/* Product Information */}
      <div className="p-4 flex flex-1 flex-col justify-between space-y-2">
        <div className="space-y-1">
          <div className="flex items-center justify-between text-[11px] font-mono text-zinc-400">
            <span>{product.category}</span>
            <div className="flex items-center space-x-1 text-amber-400">
              <Star className="h-3 w-3 fill-current" />
              <span>{product.rating}</span>
              <span className="text-zinc-500">({product.reviewCount})</span>
            </div>
          </div>

          <Link href={`/products/${product.slug}`}>
            <h3 className="text-sm font-medium text-zinc-100 group-hover:text-amber-400 transition-colors line-clamp-1">
              {product.name}
            </h3>
          </Link>
        </div>

        <div className="flex items-baseline space-x-2 pt-1 border-t border-zinc-900">
          <span className="text-sm font-bold text-white font-mono">
            {formatPrice(product.price)}
          </span>
          {product.originalPrice && (
            <span className="text-xs text-zinc-400 line-through font-mono">
              {formatPrice(product.originalPrice)}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
