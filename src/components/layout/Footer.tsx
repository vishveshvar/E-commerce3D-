"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import { BRAND_NAME } from "@/lib/utils";
import { categories } from "@/data/categories";

export function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim() && email.includes("@")) {
      setSubscribed(true);
      setEmail("");
    }
  };

  return (
    <footer className="bg-zinc-950 border-t border-zinc-800 text-zinc-300">
      {/* Editorial Dispatch / Delivery Banner */}
      <div className="border-b border-zinc-800/80 bg-zinc-900/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            <div className="relative h-28 rounded-none overflow-hidden border border-zinc-800 group">
              <Image
                src="/images/devilery.jpg"
                alt="Global courier dispatch logistics"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover grayscale contrast-125 group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/60 p-4 flex flex-col justify-end">
                <span className="text-[10px] font-mono uppercase tracking-widest text-amber-400">
                  Global Logistics
                </span>
                <p className="text-xs font-semibold text-white">
                  Worldwide Climate-Compensated Express Dispatch
                </p>
              </div>
            </div>

            <div className="md:col-span-2 space-y-3">
              <div className="text-[11px] font-mono uppercase tracking-widest text-zinc-400">
                DISPATCH & AUTHENTICITY STANDARDS
              </div>
              <h3 className="text-xl font-bold uppercase tracking-tight text-white font-mono">
                Every archive object is certified, numbered, and insured.
              </h3>
              <p className="text-xs text-zinc-400 max-w-xl leading-relaxed">
                Direct dispatch from international ateliers in Okayama, Milan, and Zurich. Uncompromising craftsmanship with verified chain of provenance.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Links & Newsletter */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-6">
            <div className="space-y-2">
              <Link href="/" className="font-mono text-xl font-black uppercase text-white tracking-tight">
                {BRAND_NAME}
              </Link>
              <p className="text-xs text-zinc-400 max-w-sm leading-relaxed font-sans">
                Next-Generation Interactive Digital Marketplace. Unifying editorial fashion, high-fidelity acoustic tech, sculptural living forms, and athletic hardware into one continuous experience.
              </p>
            </div>

            {/* Newsletter Subscription */}
            <div className="space-y-3">
              <div className="text-[10px] uppercase font-mono tracking-widest text-amber-400">
                ARCHIVE DISPATCH NOTIFICATIONS
              </div>
              {subscribed ? (
                <div className="flex items-center space-x-2 text-xs text-emerald-400 bg-emerald-950/40 border border-emerald-800 p-3">
                  <CheckCircle2 className="h-4 w-4 flex-shrink-0" />
                  <span>Subscription confirmed. You will receive private collection notifications.</span>
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="flex max-w-sm">
                  <input
                    type="email"
                    required
                    placeholder="Enter email for private drops..."
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="flex-1 bg-zinc-900 border border-zinc-800 px-3 py-2 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-amber-400"
                  />
                  <button
                    type="submit"
                    className="bg-amber-500 hover:bg-amber-400 text-black px-4 text-xs font-bold uppercase tracking-wider transition-colors"
                  >
                    Join
                  </button>
                </form>
              )}
              <p className="text-[10px] text-zinc-400">
                Front-end demonstration. No unsolicited marketing emails are distributed.
              </p>
            </div>
          </div>

          {/* Catalog Categories */}
          <div className="space-y-4">
            <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-white">
              Categories
            </h4>
            <ul className="space-y-2.5 text-xs text-zinc-400">
              {categories.map((cat) => (
                <li key={cat.id}>
                  <Link
                    href={`/categories/${cat.slug}`}
                    className="hover:text-amber-400 transition-colors flex items-center justify-between"
                  >
                    <span>{cat.name}</span>
                    <span className="text-[10px] font-mono text-zinc-400">{cat.itemCount}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-white">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-xs text-zinc-400">
              <li>
                <Link href="/products" className="hover:text-white transition-colors">
                  Complete Catalog
                </Link>
              </li>
              <li>
                <Link href="/cart" className="hover:text-white transition-colors">
                  Shopping Bag
                </Link>
              </li>
              <li>
                <Link href="/wishlist" className="hover:text-white transition-colors">
                  Saved Wishlist
                </Link>
              </li>
              <li>
                <Link href="/checkout" className="hover:text-white transition-colors">
                  Checkout Portal
                </Link>
              </li>
              <li>
                <Link href="/search" className="hover:text-white transition-colors">
                  Product Search
                </Link>
              </li>
            </ul>
          </div>

          {/* Editorial & Archival Note */}
          <div className="space-y-4">
            <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-white">
              Archive Standards
            </h4>
            <ul className="space-y-2.5 text-xs text-zinc-400">
              <li>Verified Provenance</li>
              <li>Direct Atelier Partners</li>
              <li>Zero Synthetic Deadstock</li>
              <li>Sustainable Packaging</li>
              <li className="pt-2">
                <span className="inline-flex items-center text-[11px] font-mono text-amber-400 border border-amber-900/50 bg-amber-950/20 px-2 py-1">
                  SYSTEM VERSION: 2.6.4
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-zinc-900 flex flex-col sm:flex-row items-center justify-between text-[11px] font-mono text-zinc-400 gap-4">
          <p>© 2026 {BRAND_NAME}. ALL RIGHTS RESERVED. DEMO PLATFORM.</p>
          <div className="flex space-x-6">
            <span className="hover:text-zinc-300 cursor-pointer">PRIVACY POLICY</span>
            <span className="hover:text-zinc-300 cursor-pointer">TERMS OF SALE</span>
            <span className="hover:text-zinc-300 cursor-pointer">ACCESSIBILITY</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
