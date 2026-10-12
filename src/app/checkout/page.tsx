"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, CheckCircle2, ShieldCheck, Lock } from "lucide-react";
import { useCartStore } from "@/features/cart/cartStore";
import { formatPrice } from "@/lib/utils";
import { useIsMounted } from "@/lib/useIsMounted";

export default function CheckoutPage() {
  const mounted = useIsMounted();
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "Elena",
    lastName: "Vance",
    email: "elena.vance@atelier-archive.io",
    address: "442 Boulevard Saint-Germain",
    city: "Paris",
    postalCode: "75005",
    country: "France",
    shippingMethod: "express",
    paymentMethod: "card",
  });

  const { items, getSubtotal, clearCart } = useCartStore();

  if (!mounted) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center font-mono text-zinc-500">
        INITIALIZING CHECKOUT PORTAL...
      </div>
    );
  }

  const subtotal = getSubtotal();
  const shipping = subtotal > 200 ? 0 : subtotal > 0 ? 15 : 0;
  const total = subtotal + shipping;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    clearCart();
  };

  if (submitted) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-24 text-center space-y-6">
        <div className="h-20 w-20 mx-auto rounded-full bg-emerald-950/60 border border-emerald-500 flex items-center justify-center text-emerald-400">
          <CheckCircle2 className="h-10 w-10" />
        </div>

        <div className="space-y-2">
          <span className="text-xs font-mono uppercase tracking-widest text-emerald-400">
            DEMO DISPATCH ORDER // SIMULATION CONFIRMED
          </span>
          <h1 className="text-3xl font-black uppercase text-white font-mono">
            Order #ARC-2026-9812 Logged
          </h1>
          <p className="text-sm text-zinc-300 max-w-md mx-auto">
            This is a frontend demonstration. No financial transactions were processed, and no backend was contacted.
          </p>
        </div>

        <div className="p-6 bg-zinc-900/60 border border-zinc-800 text-left max-w-md mx-auto space-y-2 text-xs font-mono text-zinc-400">
          <p>Dispatched to: {formData.firstName} {formData.lastName}</p>
          <p>Destination: {formData.address}, {formData.city}, {formData.country}</p>
          <p>Courier Tier: {formData.shippingMethod.toUpperCase()} DIPLOMATIC</p>
          <p className="text-amber-400 font-bold">Total Staged: {formatPrice(total)}</p>
        </div>

        <div className="pt-6">
          <Link
            href="/"
            className="inline-flex items-center space-x-2 bg-amber-500 hover:bg-amber-400 text-black px-6 py-3 text-xs font-bold uppercase tracking-wider transition-colors"
          >
            <span>Return to Homepage</span>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-12">
      {/* Header */}
      <div className="border-b border-zinc-800 pb-6 flex items-center justify-between">
        <div>
          <span className="text-xs font-mono uppercase tracking-widest text-amber-400">
            SECURE CLIENT PORTAL
          </span>
          <h1 className="text-3xl font-black uppercase tracking-tight text-white font-mono">
            Archival Order Checkout
          </h1>
        </div>
        <Link
          href="/cart"
          className="inline-flex items-center space-x-1 text-xs font-mono text-zinc-400 hover:text-white"
        >
          <ArrowLeft className="h-3.5 w-3.5" />
          <span>Back to Bag</span>
        </Link>
      </div>

      {items.length === 0 ? (
        <div className="py-24 text-center border border-dashed border-zinc-800 space-y-4">
          <p className="font-mono text-sm uppercase text-zinc-400">
            Your shopping bag is empty. Please add items before proceeding.
          </p>
          <Link
            href="/products"
            className="inline-block bg-amber-500 text-black px-6 py-2.5 text-xs font-bold uppercase"
          >
            Browse Products
          </Link>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Form Fields Column */}
          <div className="lg:col-span-7 space-y-8">
            {/* Step 1: Contact Information */}
            <div className="p-6 bg-zinc-900/40 border border-zinc-800 space-y-4">
              <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-amber-400 flex items-center space-x-2">
                <span>01 // CLIENT RECIPIENT INFORMATION</span>
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] font-mono uppercase text-zinc-400 mb-1">
                    First Name
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.firstName}
                    onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                    className="w-full bg-black border border-zinc-800 px-3 py-2 text-xs text-white focus:outline-none focus:border-amber-400"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-mono uppercase text-zinc-400 mb-1">
                    Last Name
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.lastName}
                    onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                    className="w-full bg-black border border-zinc-800 px-3 py-2 text-xs text-white focus:outline-none focus:border-amber-400"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-mono uppercase text-zinc-400 mb-1">
                  Email Address (For Dispatch Tracking)
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-black border border-zinc-800 px-3 py-2 text-xs text-white focus:outline-none focus:border-amber-400"
                />
              </div>
            </div>

            {/* Step 2: Shipping Destination */}
            <div className="p-6 bg-zinc-900/40 border border-zinc-800 space-y-4">
              <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-amber-400 flex items-center space-x-2">
                <span>02 // SHIPPING DESTINATION</span>
              </h2>

              <div>
                <label className="block text-[11px] font-mono uppercase text-zinc-400 mb-1">
                  Street Address
                </label>
                <input
                  type="text"
                  required
                  value={formData.address}
                  onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                  className="w-full bg-black border border-zinc-800 px-3 py-2 text-xs text-white focus:outline-none focus:border-amber-400"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-[11px] font-mono uppercase text-zinc-400 mb-1">
                    City
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    className="w-full bg-black border border-zinc-800 px-3 py-2 text-xs text-white focus:outline-none focus:border-amber-400"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-mono uppercase text-zinc-400 mb-1">
                    Postal Code
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.postalCode}
                    onChange={(e) => setFormData({ ...formData, postalCode: e.target.value })}
                    className="w-full bg-black border border-zinc-800 px-3 py-2 text-xs text-white focus:outline-none focus:border-amber-400"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-mono uppercase text-zinc-400 mb-1">
                    Country
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.country}
                    onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                    className="w-full bg-black border border-zinc-800 px-3 py-2 text-xs text-white focus:outline-none focus:border-amber-400"
                  />
                </div>
              </div>
            </div>

            {/* Step 3: Payment Method (Demo) */}
            <div className="p-6 bg-zinc-900/40 border border-zinc-800 space-y-4">
              <div className="flex items-center justify-between">
                <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-amber-400">
                  03 // PAYMENT METHOD (FRONTEND DEMONSTRATION)
                </h2>
                <div className="flex items-center space-x-1 text-xs text-emerald-400 font-mono">
                  <Lock className="h-3.5 w-3.5" />
                  <span>SIMULATED VAULT</span>
                </div>
              </div>

              <div className="p-4 bg-black/60 border border-zinc-800 text-xs text-zinc-400 space-y-2">
                <p>
                  No real card details are collected or processed. Submitting this form tests frontend state transitions and order staging.
                </p>
                <div className="flex items-center space-x-2 text-zinc-300 font-mono">
                  <ShieldCheck className="h-4 w-4 text-amber-400" />
                  <span>Payment Gateway Test Sandbox Mode Enabled</span>
                </div>
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-amber-500 hover:bg-amber-400 text-black py-4 text-xs font-bold uppercase tracking-wider transition-colors shadow-2xl flex items-center justify-center space-x-2"
            >
              <Lock className="h-4 w-4" />
              <span>Complete Demonstration Purchase</span>
            </button>
          </div>

          {/* Right Column: Order Summary */}
          <div className="lg:col-span-5 border border-zinc-800 bg-zinc-900/60 p-6 space-y-6 lg:sticky lg:top-28">
            <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-white border-b border-zinc-800 pb-3">
              Order Breakdown ({items.reduce((acc, i) => acc + i.quantity, 0)} Items)
            </h3>

            <div className="divide-y divide-zinc-800/80 max-h-72 overflow-y-auto pr-2">
              {items.map((item) => (
                <div key={`${item.product.id}-${item.selectedVariant || "default"}`} className="py-3 flex gap-3 text-xs">
                  <div className="relative h-14 w-12 flex-shrink-0 bg-zinc-900 border border-zinc-800">
                    <Image
                      src={item.product.image}
                      alt={item.product.name}
                      fill
                      sizes="48px"
                      className="object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <p className="font-medium text-white line-clamp-1">{item.product.name}</p>
                    <p className="text-[11px] text-zinc-400 font-mono">Qty: {item.quantity}</p>
                  </div>
                  <div className="font-mono text-zinc-200">
                    {formatPrice(item.product.price * item.quantity)}
                  </div>
                </div>
              ))}
            </div>

            <div className="space-y-2 text-xs border-t border-zinc-800 pt-4">
              <div className="flex justify-between text-zinc-400">
                <span>Subtotal</span>
                <span className="font-mono text-white">{formatPrice(subtotal)}</span>
              </div>
              <div className="flex justify-between text-zinc-400">
                <span>Courier Transport</span>
                <span className="font-mono text-white">
                  {shipping === 0 ? "FREE" : formatPrice(shipping)}
                </span>
              </div>
              <div className="flex justify-between text-zinc-400">
                <span>Customs & Duties</span>
                <span className="font-mono text-emerald-400">INCLUDED</span>
              </div>
              <div className="border-t border-zinc-800 pt-3 flex justify-between text-sm font-bold text-white">
                <span>Order Total</span>
                <span className="font-mono text-amber-400">{formatPrice(total)}</span>
              </div>
            </div>
          </div>
        </form>
      )}
    </div>
  );
}
