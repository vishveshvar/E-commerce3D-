"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Star,
  ShieldCheck,
  Truck,
  RotateCcw,
  Heart,
  ShoppingBag,
  ArrowLeft,
  Check,
} from "lucide-react";
import { Product } from "@/types/product";
import { formatPrice } from "@/lib/utils";
import { useCartStore } from "@/features/cart/cartStore";
import { useWishlistStore } from "@/features/wishlist/wishlistStore";
import { ProductCard } from "@/components/products/ProductCard";

interface ProductDetailClientProps {
  product: Product;
  relatedProducts: Product[];
}

export function ProductDetailClient({ product, relatedProducts }: ProductDetailClientProps) {
  const [selectedImage, setSelectedImage] = useState<string>(product.image);
  const [selectedVariant, setSelectedVariant] = useState<string>(
    product.variants?.[0]?.options[0] || ""
  );
  const [quantity, setQuantity] = useState<number>(1);
  const [addedNotice, setAddedNotice] = useState<boolean>(false);

  const { addItem } = useCartStore();
  const { isInWishlist, toggleItem } = useWishlistStore();

  const handleAddToCart = () => {
    addItem(product, quantity, selectedVariant);
    setAddedNotice(true);
    setTimeout(() => setAddedNotice(false), 3000);
  };

  const inWishlist = isInWishlist(product.id);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
      {/* Back link */}
      <Link
        href="/products"
        className="inline-flex items-center space-x-2 text-xs font-mono uppercase tracking-wider text-zinc-400 hover:text-amber-400 transition-colors"
      >
        <ArrowLeft className="h-4 w-4" />
        <span>Return to Catalog</span>
      </Link>

      {/* Main Product Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left: Image Gallery */}
        <div className="lg:col-span-7 space-y-4">
          {/* Main Large Image */}
          <div className="relative aspect-[3/4] w-full overflow-hidden bg-zinc-900 border border-zinc-800">
            <Image
              src={selectedImage}
              alt={product.name}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 60vw"
              className="object-cover"
            />
            {product.tag && (
              <span className="absolute top-4 left-4 bg-black/80 backdrop-blur-md border border-zinc-800 text-amber-400 text-xs font-mono uppercase tracking-widest px-3 py-1">
                {product.tag}
              </span>
            )}
          </div>

          {/* Thumbnail Gallery */}
          {product.gallery.length > 1 && (
            <div className="flex gap-3 overflow-x-auto pb-2">
              {product.gallery.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedImage(img)}
                  className={`relative h-20 w-20 flex-shrink-0 border bg-zinc-900 transition-all ${
                    selectedImage === img
                      ? "border-amber-500 ring-1 ring-amber-500"
                      : "border-zinc-800 opacity-60 hover:opacity-100"
                  }`}
                  aria-label={`View gallery image ${idx + 1}`}
                >
                  <Image src={img} alt="" fill sizes="80px" className="object-cover" />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Right: Product Metadata & Actions */}
        <div className="lg:col-span-5 space-y-6 lg:sticky lg:top-28">
          {/* Category & Rating */}
          <div className="flex items-center justify-between text-xs font-mono text-zinc-400">
            <span className="text-amber-400 font-bold uppercase tracking-widest">
              {product.brand || product.category}
            </span>
            <div className="flex items-center space-x-1 text-amber-400">
              <Star className="h-3.5 w-3.5 fill-current" />
              <span className="font-bold">{product.rating}</span>
              <span className="text-zinc-500">({product.reviewCount} customer reviews)</span>
            </div>
          </div>

          {/* Title */}
          <h1 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-white font-mono leading-snug">
            {product.name}
          </h1>

          {/* Pricing */}
          <div className="flex items-baseline space-x-3 border-y border-zinc-800/80 py-4">
            <span className="text-2xl font-bold font-mono text-white">
              {formatPrice(product.price)}
            </span>
            {product.originalPrice && (
              <span className="text-sm font-mono text-zinc-400 line-through">
                {formatPrice(product.originalPrice)}
              </span>
            )}
            <span className="text-xs font-mono text-emerald-400 ml-auto uppercase">
              In Stock & Insured
            </span>
          </div>

          {/* Description */}
          <p className="text-sm text-zinc-300 font-sans leading-relaxed">
            {product.description}
          </p>

          {/* Variants */}
          {product.variants && product.variants.length > 0 && (
            <div className="space-y-4 pt-2">
              {product.variants.map((v) => (
                <div key={v.name} className="space-y-2">
                  <div className="flex justify-between text-xs font-mono">
                    <span className="text-zinc-400 uppercase tracking-wider">{v.name}:</span>
                    <span className="text-white font-bold">{selectedVariant}</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {v.options.map((opt) => (
                      <button
                        key={opt}
                        onClick={() => setSelectedVariant(opt)}
                        className={`px-3 py-1.5 text-xs font-mono uppercase tracking-wider border transition-all ${
                          selectedVariant === opt
                            ? "border-amber-500 bg-amber-500/10 text-white font-bold"
                            : "border-zinc-800 bg-zinc-900/60 text-zinc-400 hover:border-zinc-600"
                        }`}
                      >
                        {opt}
                      </button>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Quantity Selector */}
          <div className="flex items-center space-x-4 pt-2">
            <span className="text-xs font-mono uppercase tracking-wider text-zinc-400">
              Quantity:
            </span>
            <div className="flex items-center border border-zinc-800 bg-zinc-900">
              <button
                onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                className="px-3 py-1.5 text-zinc-400 hover:text-white"
                aria-label="Decrease quantity"
              >
                -
              </button>
              <span className="w-10 text-center font-mono text-xs text-white">{quantity}</span>
              <button
                onClick={() => setQuantity((q) => Math.min(10, q + 1))}
                className="px-3 py-1.5 text-zinc-400 hover:text-white"
                aria-label="Increase quantity"
              >
                +
              </button>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="space-y-3 pt-4">
            <div className="flex gap-3">
              <button
                onClick={handleAddToCart}
                className="flex-1 bg-amber-500 hover:bg-amber-400 text-black py-3.5 px-6 text-xs font-bold uppercase tracking-wider flex items-center justify-center space-x-2 transition-colors shadow-xl"
              >
                <ShoppingBag className="h-4 w-4" />
                <span>Add to Shopping Bag</span>
              </button>

              <button
                onClick={() => toggleItem(product)}
                className={`p-3.5 border transition-colors ${
                  inWishlist
                    ? "border-rose-600 bg-rose-600/20 text-rose-400"
                    : "border-zinc-800 bg-zinc-900 text-zinc-300 hover:border-zinc-600"
                }`}
                aria-label="Toggle wishlist item"
              >
                <Heart className={`h-4 w-4 ${inWishlist ? "fill-current" : ""}`} />
              </button>
            </div>

            {addedNotice && (
              <div className="flex items-center space-x-2 text-xs font-mono text-emerald-400 bg-emerald-950/40 border border-emerald-800 p-2.5 animate-in fade-in">
                <Check className="h-4 w-4" />
                <span>Added to bag successfully! Check your cart drawer.</span>
              </div>
            )}
          </div>

          {/* Archival Guarantees */}
          <div className="border-t border-zinc-800/80 pt-6 space-y-3 text-xs text-zinc-400">
            <div className="flex items-center space-x-3">
              <Truck className="h-4 w-4 text-amber-400 flex-shrink-0" />
              <span>Complimentary insured courier delivery on orders over $200</span>
            </div>
            <div className="flex items-center space-x-3">
              <ShieldCheck className="h-4 w-4 text-amber-400 flex-shrink-0" />
              <span>Direct provenance certificate and tamper-sealed packaging</span>
            </div>
            <div className="flex items-center space-x-3">
              <RotateCcw className="h-4 w-4 text-amber-400 flex-shrink-0" />
              <span>14-day hassle-free archival returns and size exchanges</span>
            </div>
          </div>
        </div>
      </div>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <div className="pt-16 border-t border-zinc-900 space-y-8">
          <div className="space-y-1">
            <span className="text-xs font-mono uppercase tracking-widest text-amber-400">
              RELATED PIECES
            </span>
            <h2 className="text-2xl font-black uppercase text-white font-mono">
              Complementary Archive Objects
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedProducts.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
