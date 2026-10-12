"use client";

import { useState, useMemo } from "react";
import { ProductCard } from "@/components/products/ProductCard";
import { products } from "@/data/products";
import { categories } from "@/data/categories";
import { SlidersHorizontal, ArrowUpDown } from "lucide-react";

export function ProductCatalogClient() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [sortBy, setSortBy] = useState<string>("featured");
  const [maxPrice, setMaxPrice] = useState<number>(1000);

  const filteredProducts = useMemo(() => {
    return products
      .filter((p) => {
        if (selectedCategory !== "all" && p.categorySlug !== selectedCategory) return false;
        if (p.price > maxPrice) return false;
        return true;
      })
      .sort((a, b) => {
        if (sortBy === "price-low") return a.price - b.price;
        if (sortBy === "price-high") return b.price - a.price;
        if (sortBy === "rating") return b.rating - a.rating;
        return 0; // featured default
      });
  }, [selectedCategory, sortBy, maxPrice]);

  return (
    <div className="space-y-8">
      {/* Filters Toolbar */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 border border-zinc-800 bg-zinc-900/40 p-4 sm:p-6">
        {/* Category Pills */}
        <div className="flex flex-wrap gap-2 items-center">
          <span className="text-[11px] font-mono text-zinc-400 uppercase tracking-widest mr-2 flex items-center space-x-1">
            <SlidersHorizontal className="h-3.5 w-3.5 text-amber-400" />
            <span>Category:</span>
          </span>
          <button
            onClick={() => setSelectedCategory("all")}
            className={`px-3 py-1.5 text-xs font-mono uppercase tracking-wider transition-colors border ${
              selectedCategory === "all"
                ? "bg-amber-500 text-black border-amber-500 font-bold"
                : "bg-black/60 text-zinc-300 border-zinc-800 hover:border-zinc-600"
            }`}
          >
            All Archive ({products.length})
          </button>
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.slug)}
              className={`px-3 py-1.5 text-xs font-mono uppercase tracking-wider transition-colors border ${
                selectedCategory === cat.slug
                  ? "bg-amber-500 text-black border-amber-500 font-bold"
                  : "bg-black/60 text-zinc-300 border-zinc-800 hover:border-zinc-600"
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Price & Sort Controls */}
        <div className="flex flex-wrap items-center gap-6">
          {/* Price Range Slider */}
          <div className="flex items-center space-x-3">
            <span className="text-[11px] font-mono text-zinc-400 uppercase tracking-wider">
              Under: <span className="text-white font-bold">${maxPrice}</span>
            </span>
            <input
              type="range"
              min={80}
              max={1000}
              step={20}
              value={maxPrice}
              onChange={(e) => setMaxPrice(Number(e.target.value))}
              className="accent-amber-500 cursor-pointer w-28 sm:w-36"
            />
          </div>

          {/* Sort selector */}
          <div className="flex items-center space-x-2">
            <ArrowUpDown className="h-3.5 w-3.5 text-amber-400" />
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="bg-black border border-zinc-800 px-3 py-1.5 text-xs font-mono uppercase tracking-wider text-zinc-200 focus:outline-none focus:border-amber-400"
            >
              <option value="featured">Featured Order</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating">Highest Rated</option>
            </select>
          </div>
        </div>
      </div>

      {/* Results Count & Product Grid */}
      <div className="space-y-4">
        <div className="flex justify-between items-center text-xs font-mono text-zinc-400">
          <span>SHOWING {filteredProducts.length} ARCHIVAL PIECES</span>
          {selectedCategory !== "all" && (
            <button
              onClick={() => setSelectedCategory("all")}
              className="text-amber-400 hover:underline"
            >
              RESET CATEGORY
            </button>
          )}
        </div>

        {filteredProducts.length === 0 ? (
          <div className="py-20 text-center border border-dashed border-zinc-800 space-y-4">
            <p className="font-mono text-sm uppercase text-zinc-400">
              No archive products match your active filter criteria
            </p>
            <button
              onClick={() => {
                setSelectedCategory("all");
                setMaxPrice(1000);
              }}
              className="bg-zinc-900 border border-zinc-700 px-4 py-2 text-xs font-mono text-white uppercase hover:bg-white hover:text-black transition-colors"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
