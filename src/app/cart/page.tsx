"use client";

import Image from "next/image";
import Link from "next/link";
import { Plus, Minus, Trash2, ArrowRight, ShoppingBag } from "lucide-react";
import { useCartStore } from "@/features/cart/cartStore";
import { formatPrice } from "@/lib/utils";
import { useIsMounted } from "@/lib/useIsMounted";

export default function CartPage() {
  const mounted = useIsMounted();
  const { items, removeItem, updateQuantity, clearCart, getSubtotal } = useCartStore();

  if (!mounted) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center font-mono text-zinc-500">
        LOADING ARCHIVE BAG...
      </div>
    );
  }

  const subtotal = getSubtotal();
  const shipping = subtotal > 200 ? 0 : subtotal > 0 ? 15 : 0;
  const total = subtotal + shipping;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-12">
      {/* Header */}
      <div className="border-b border-zinc-800 pb-6 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
        <div>
          <span className="text-xs font-mono uppercase tracking-widest text-amber-400">
            TRANSACTION STAGING
          </span>
          <h1 className="text-4xl font-black uppercase tracking-tight text-white font-mono">
            Shopping Bag ({items.reduce((acc, i) => acc + i.quantity, 0)})
          </h1>
        </div>
        {items.length > 0 && (
          <button
            onClick={clearCart}
            className="text-xs font-mono uppercase text-zinc-400 hover:text-rose-400 transition-colors"
          >
            Clear Entire Bag
          </button>
        )}
      </div>

      {items.length === 0 ? (
        <div className="py-24 text-center border border-dashed border-zinc-800 space-y-6">
          <div className="h-16 w-16 mx-auto rounded-full border border-zinc-800 flex items-center justify-center bg-zinc-900/50">
            <ShoppingBag className="h-7 w-7 text-zinc-500" />
          </div>
          <p className="font-mono text-sm uppercase text-zinc-400">
            Your shopping bag contains zero active pieces
          </p>
          <Link
            href="/products"
            className="inline-flex items-center space-x-2 bg-amber-500 hover:bg-amber-400 text-black px-6 py-3 text-xs font-bold uppercase tracking-wider transition-colors"
          >
            <span>Explore Catalog Archive</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Items Table */}
          <div className="lg:col-span-8 space-y-4">
            <div className="border border-zinc-800 divide-y divide-zinc-800 bg-zinc-950">
              {items.map((item) => (
                <div
                  key={`${item.product.id}-${item.selectedVariant || "default"}`}
                  className="p-6 flex flex-col sm:flex-row gap-6 items-start sm:items-center justify-between"
                >
                  <div className="flex gap-4 items-center">
                    <div className="relative h-24 w-20 flex-shrink-0 bg-zinc-900 border border-zinc-800">
                      <Image
                        src={item.product.image}
                        alt={item.product.name}
                        fill
                        sizes="80px"
                        className="object-cover"
                      />
                    </div>
                    <div className="space-y-1">
                      <span className="text-[10px] font-mono uppercase text-amber-400">
                        {item.product.category}
                      </span>
                      <Link
                        href={`/products/${item.product.slug}`}
                        className="text-sm font-bold text-white hover:text-amber-400 transition-colors block line-clamp-1"
                      >
                        {item.product.name}
                      </Link>
                      {item.selectedVariant && (
                        <p className="text-xs text-zinc-400 font-mono">
                          Variant: {item.selectedVariant}
                        </p>
                      )}
                      <p className="text-xs font-mono text-zinc-300">
                        Unit: {formatPrice(item.product.price)}
                      </p>
                    </div>
                  </div>

                  {/* Quantity & Total */}
                  <div className="flex items-center justify-between w-full sm:w-auto gap-8 pt-4 sm:pt-0 border-t sm:border-t-0 border-zinc-900">
                    <div className="flex items-center border border-zinc-800 bg-zinc-900">
                      <button
                        onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                        className="p-2 text-zinc-400 hover:text-white"
                        aria-label="Decrease quantity"
                      >
                        <Minus className="h-3 w-3" />
                      </button>
                      <span className="w-10 text-center text-xs font-mono text-white">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                        className="p-2 text-zinc-400 hover:text-white"
                        aria-label="Increase quantity"
                      >
                        <Plus className="h-3 w-3" />
                      </button>
                    </div>

                    <div className="text-right">
                      <p className="font-mono text-sm font-bold text-white">
                        {formatPrice(item.product.price * item.quantity)}
                      </p>
                    </div>

                    <button
                      onClick={() => removeItem(item.product.id)}
                      className="text-zinc-500 hover:text-rose-400 p-2"
                      aria-label="Remove item"
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Order Summary Card */}
          <div className="lg:col-span-4 border border-zinc-800 bg-zinc-900/60 p-6 space-y-6">
            <h2 className="text-sm font-mono font-bold uppercase tracking-wider text-white border-b border-zinc-800 pb-3">
              Order Calculation
            </h2>

            <div className="space-y-3 text-xs">
              <div className="flex justify-between text-zinc-400">
                <span>Subtotal</span>
                <span className="font-mono text-white">{formatPrice(subtotal)}</span>
              </div>
              <div className="flex justify-between text-zinc-400">
                <span>Courier Dispatch</span>
                <span className="font-mono text-white">
                  {shipping === 0 ? "FREE (PROMO)" : formatPrice(shipping)}
                </span>
              </div>
              <div className="flex justify-between text-zinc-400">
                <span>Estimated Duties & Taxes</span>
                <span className="font-mono text-white">INCLUDED</span>
              </div>

              <div className="border-t border-zinc-800 pt-4 flex justify-between text-sm font-bold text-white">
                <span>Total</span>
                <span className="font-mono text-amber-400">{formatPrice(total)}</span>
              </div>
            </div>

            <Link
              href="/checkout"
              className="flex w-full items-center justify-center space-x-2 bg-amber-500 hover:bg-amber-400 text-black py-3.5 text-xs font-bold uppercase tracking-wider transition-colors shadow-xl"
            >
              <span>Proceed to Checkout</span>
              <ArrowRight className="h-4 w-4" />
            </Link>

            <p className="text-[10px] text-zinc-500 text-center font-mono">
              FRONTEND STAGING // PROCEED TO SECURE CHECKOUT DEMO
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
