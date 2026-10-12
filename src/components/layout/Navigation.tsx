"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Search, ShoppingBag, Heart, Menu, X, ArrowUpRight } from "lucide-react";
import { BRAND_NAME } from "@/lib/utils";
import { useCartStore } from "@/features/cart/cartStore";
import { useWishlistStore } from "@/features/wishlist/wishlistStore";
import { useIsMounted } from "@/lib/useIsMounted";
import { categories } from "@/data/categories";

export function Navigation() {
  const router = useRouter();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const mounted = useIsMounted();

  const { items: cartItems, openCart } = useCartStore();
  const { items: wishlistItems } = useWishlistStore();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const totalCartCount = mounted ? cartItems.reduce((acc, i) => acc + i.quantity, 0) : 0;
  const totalWishlistCount = mounted ? wishlistItems.length : 0;

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
      setSearchOpen(false);
      setSearchQuery("");
    }
  };

  return (
    <>
      {/* Announcement Bar */}
      <div className="bg-zinc-950 border-b border-zinc-800 text-[11px] font-mono tracking-widest text-zinc-400 py-1.5 px-4 text-center">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <span className="hidden sm:inline-block text-amber-500 font-bold uppercase tracking-widest">
            EDITION // SS26
          </span>
          <p className="flex-1 text-center truncate">
            COMPLIMENTARY WORLDWIDE COURIER DISPATCH ON ORDERS OVER $200 — DUTIES INCLUDED
          </p>
          <span className="hidden sm:inline-block text-zinc-400 hover:text-white cursor-pointer transition-colors">
            ARCHIVE LOG: ACTIVE
          </span>
        </div>
      </div>

      {/* Main Navbar */}
      <header
        className={`sticky top-0 z-40 w-full transition-all duration-300 ${
          isScrolled
            ? "bg-zinc-950/90 backdrop-blur-md border-b border-zinc-800/80 py-3 shadow-lg"
            : "bg-zinc-950/70 backdrop-blur-sm border-b border-zinc-900 py-4"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Left: Brand Identity */}
            <div className="flex items-center space-x-6">
              <button
                onClick={() => setMobileMenuOpen(true)}
                className="lg:hidden p-2 text-zinc-400 hover:text-white"
                aria-label="Open navigation menu"
              >
                <Menu className="h-6 w-6" />
              </button>

              <Link href="/" className="group flex flex-col">
                <span className="text-lg md:text-xl font-black tracking-tight text-white group-hover:text-amber-400 transition-colors uppercase font-mono">
                  {BRAND_NAME}
                </span>
                <span className="text-[9px] uppercase tracking-ultra-wide text-zinc-400 -mt-1 hidden sm:inline-block font-mono">
                  Curated Multi-Category Archive
                </span>
              </Link>
            </div>

            {/* Center: Category Navigation (Desktop) */}
            <nav className="hidden lg:flex items-center space-x-7 text-xs font-semibold uppercase tracking-wider text-zinc-300">
              <Link
                href="/products"
                className="hover:text-amber-400 transition-colors py-1 relative group"
              >
                Catalog
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-400 transition-all duration-300 group-hover:w-full" />
              </Link>
              {categories.map((cat) => (
                <Link
                  key={cat.id}
                  href={`/categories/${cat.slug}`}
                  className="hover:text-white transition-colors py-1 relative group text-zinc-300"
                >
                  {cat.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-400 transition-all duration-300 group-hover:w-full" />
                </Link>
              ))}
            </nav>

            {/* Right: Actions */}
            <div className="flex items-center space-x-4">
              {/* Search Toggle */}
              <button
                onClick={() => setSearchOpen(!searchOpen)}
                className="p-2 text-zinc-300 hover:text-amber-400 transition-colors"
                aria-label="Toggle search input"
              >
                <Search className="h-4 w-4" />
              </button>

              {/* Wishlist */}
              <Link
                href="/wishlist"
                className="relative p-2 text-zinc-300 hover:text-amber-400 transition-colors"
                aria-label="View saved wishlist items"
              >
                <Heart className="h-4 w-4" />
                {totalWishlistCount > 0 && (
                  <span className="absolute top-1 right-1 flex h-3.5 w-3.5 items-center justify-center rounded-full bg-rose-500 text-[9px] font-bold text-white">
                    {totalWishlistCount}
                  </span>
                )}
              </Link>

              {/* Cart Drawer Trigger */}
              <button
                onClick={openCart}
                className="relative flex items-center space-x-2 border border-zinc-800 bg-zinc-900/80 hover:bg-zinc-800 px-3 py-1.5 transition-colors"
                aria-label="Open shopping bag"
              >
                <ShoppingBag className="h-4 w-4 text-amber-400" />
                <span className="text-xs font-mono font-bold text-zinc-200">
                  {totalCartCount}
                </span>
              </button>
            </div>
          </div>

          {/* Search Dropdown / Bar */}
          {searchOpen && (
            <div className="pt-3 pb-1 border-t border-zinc-800 mt-3 animate-in fade-in duration-200">
              <form onSubmit={handleSearchSubmit} className="relative flex items-center">
                <Search className="absolute left-3 h-4 w-4 text-zinc-500" />
                <input
                  type="text"
                  placeholder="Search overcoats, acoustics, denim, horology, stoneware..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  autoFocus
                  className="w-full bg-zinc-900 border border-zinc-800 py-2 pl-10 pr-10 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-amber-400"
                />
                <button
                  type="button"
                  onClick={() => setSearchOpen(false)}
                  className="absolute right-3 text-zinc-500 hover:text-white"
                  aria-label="Close search input"
                >
                  <X className="h-4 w-4" />
                </button>
              </form>
            </div>
          )}
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 flex lg:hidden">
          <div
            className="fixed inset-0 bg-black/80 backdrop-blur-sm"
            onClick={() => setMobileMenuOpen(false)}
            aria-hidden="true"
          />
          <aside className="relative z-10 flex h-full w-4/5 max-w-sm flex-col bg-zinc-950 border-r border-zinc-800 p-6 text-white shadow-2xl animate-in slide-in-from-left duration-300">
            <div className="flex items-center justify-between pb-6 border-b border-zinc-800">
              <span className="font-mono text-sm font-bold uppercase tracking-wider text-amber-400">
                {BRAND_NAME}
              </span>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-1.5 text-zinc-400 hover:text-white"
                aria-label="Close mobile menu"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="py-6 flex-1 overflow-y-auto space-y-4">
              <div className="text-[10px] uppercase font-mono tracking-widest text-zinc-500">
                Navigation
              </div>
              <Link
                href="/products"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between text-base font-medium text-zinc-200 hover:text-amber-400 transition-colors py-2 border-b border-zinc-900"
              >
                <span>Full Catalog</span>
                <ArrowUpRight className="h-4 w-4 text-zinc-500" />
              </Link>
              {categories.map((cat) => (
                <Link
                  key={cat.id}
                  href={`/categories/${cat.slug}`}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-between text-sm text-zinc-300 hover:text-white transition-colors py-2 border-b border-zinc-900"
                >
                  <span>{cat.name}</span>
                  <span className="text-xs font-mono text-zinc-500">{cat.itemCount}</span>
                </Link>
              ))}

              <div className="pt-4 space-y-2">
                <Link
                  href="/wishlist"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center space-x-3 text-sm text-zinc-300 py-2 hover:text-white"
                >
                  <Heart className="h-4 w-4 text-rose-400" />
                  <span>Saved Wishlist ({totalWishlistCount})</span>
                </Link>
                <Link
                  href="/cart"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center space-x-3 text-sm text-zinc-300 py-2 hover:text-white"
                >
                  <ShoppingBag className="h-4 w-4 text-amber-400" />
                  <span>Shopping Bag ({totalCartCount})</span>
                </Link>
              </div>
            </div>

            <div className="pt-4 border-t border-zinc-800 text-xs text-zinc-500 font-mono">
              CURATED DIGITAL ARCHIVE // 2026
            </div>
          </aside>
        </div>
      )}
    </>
  );
}
