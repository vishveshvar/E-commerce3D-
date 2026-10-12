"use client";

import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { X, Plus, Minus, Trash2, ArrowRight, ShoppingBag } from "lucide-react";
import { useCartStore } from "@/features/cart/cartStore";
import { formatPrice } from "@/lib/utils";
import { useIsMounted } from "@/lib/useIsMounted";

export function CartDrawer() {
  const { items, isOpen, closeCart, removeItem, updateQuantity, getSubtotal } = useCartStore();
  const mounted = useIsMounted();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!mounted || !isOpen) return null;

  const subtotal = getSubtotal();
  const shipping = subtotal > 200 ? 0 : subtotal > 0 ? 15 : 0;
  const total = subtotal + shipping;

  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/70 backdrop-blur-sm transition-opacity"
        onClick={closeCart}
        aria-hidden="true"
      />

      {/* Drawer */}
      <aside
        className="relative z-10 flex h-full w-full max-w-md flex-col bg-zinc-950 border-l border-zinc-800 text-zinc-100 shadow-2xl animate-in slide-in-from-right duration-300"
        aria-label="Shopping Cart Drawer"
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-zinc-800 px-6 py-5">
          <div className="flex items-center space-x-3">
            <ShoppingBag className="h-5 w-5 text-amber-400" />
            <h2 className="text-sm font-semibold uppercase tracking-wider text-zinc-200">
              Your Bag ({items.reduce((acc, i) => acc + i.quantity, 0)})
            </h2>
          </div>
          <button
            onClick={closeCart}
            className="rounded-full p-2 text-zinc-400 hover:bg-zinc-900 hover:text-white transition-colors"
            aria-label="Close cart"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Cart items list */}
        <div className="flex-1 overflow-y-auto px-6 py-4 divide-y divide-zinc-900">
          {items.length === 0 ? (
            <div className="flex h-full flex-col items-center justify-center space-y-4 text-center py-16">
              <div className="h-16 w-16 rounded-full border border-zinc-800 flex items-center justify-center bg-zinc-900/50">
                <ShoppingBag className="h-7 w-7 text-zinc-500" />
              </div>
              <p className="text-sm uppercase tracking-widest text-zinc-400">
                Your archive bag is empty
              </p>
              <p className="max-w-xs text-xs text-zinc-500">
                Explore the latest runway releases, studio electronics, and curated interior objects.
              </p>
              <button
                onClick={closeCart}
                className="mt-4 inline-flex items-center space-x-2 border border-zinc-700 bg-zinc-900 px-6 py-2.5 text-xs font-semibold uppercase tracking-wider text-white hover:bg-white hover:text-black transition-all"
              >
                <span>Continue Exploring</span>
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          ) : (
            items.map((item) => (
              <div key={`${item.product.id}-${item.selectedVariant || "default"}`} className="py-4 flex gap-4">
                <div className="relative h-24 w-20 flex-shrink-0 overflow-hidden bg-zinc-900 border border-zinc-800">
                  <Image
                    src={item.product.image}
                    alt={item.product.name}
                    fill
                    sizes="80px"
                    className="object-cover"
                  />
                </div>

                <div className="flex flex-1 flex-col justify-between">
                  <div className="space-y-1">
                    <div className="flex justify-between items-start">
                      <Link
                        href={`/products/${item.product.slug}`}
                        onClick={closeCart}
                        className="text-xs font-medium text-zinc-200 hover:text-amber-400 transition-colors line-clamp-2"
                      >
                        {item.product.name}
                      </Link>
                      <button
                        onClick={() => removeItem(item.product.id)}
                        className="text-zinc-500 hover:text-rose-400 p-1 transition-colors"
                        aria-label="Remove item"
                      >
                        <Trash2 className="h-3.5 w-3.5" />
                      </button>
                    </div>

                    {item.selectedVariant && (
                      <p className="text-[10px] text-zinc-400 uppercase tracking-wider">
                        Variant: {item.selectedVariant}
                      </p>
                    )}
                    <p className="text-xs font-semibold text-zinc-100">
                      {formatPrice(item.product.price)}
                    </p>
                  </div>

                  <div className="flex items-center space-x-3 mt-2">
                    <div className="flex items-center border border-zinc-800 bg-zinc-900">
                      <button
                        onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                        className="p-1.5 text-zinc-400 hover:text-white transition-colors"
                        aria-label="Decrease quantity"
                      >
                        <Minus className="h-3 w-3" />
                      </button>
                      <span className="w-8 text-center text-xs font-medium text-zinc-200">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                        className="p-1.5 text-zinc-400 hover:text-white transition-colors"
                        aria-label="Increase quantity"
                      >
                        <Plus className="h-3 w-3" />
                      </button>
                    </div>

                    <span className="text-[11px] text-zinc-500">
                      Subtotal: {formatPrice(item.product.price * item.quantity)}
                    </span>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer calculation */}
        {items.length > 0 && (
          <div className="border-t border-zinc-800 bg-zinc-900/60 p-6 space-y-4">
            <div className="space-y-2 text-xs">
              <div className="flex justify-between text-zinc-400">
                <span>Subtotal</span>
                <span className="font-medium text-zinc-200">{formatPrice(subtotal)}</span>
              </div>
              <div className="flex justify-between text-zinc-400">
                <span>Complimentary Courier (over $200)</span>
                <span className="font-medium text-zinc-200">
                  {shipping === 0 ? "FREE" : formatPrice(shipping)}
                </span>
              </div>
              <div className="flex justify-between text-sm font-semibold text-white pt-2 border-t border-zinc-800">
                <span>Estimated Total</span>
                <span className="text-amber-400">{formatPrice(total)}</span>
              </div>
            </div>

            <div className="space-y-2 pt-2">
              <Link
                href="/checkout"
                onClick={closeCart}
                className="flex w-full items-center justify-center space-x-2 bg-amber-500 py-3 text-xs font-bold uppercase tracking-wider text-black hover:bg-amber-400 transition-colors"
              >
                <span>Proceed to Checkout</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/cart"
                onClick={closeCart}
                className="flex w-full items-center justify-center border border-zinc-700 py-2.5 text-xs font-semibold uppercase tracking-wider text-zinc-300 hover:bg-zinc-800 hover:text-white transition-colors"
              >
                <span>View Full Bag</span>
              </Link>
            </div>
          </div>
        )}
      </aside>
    </div>
  );
}
