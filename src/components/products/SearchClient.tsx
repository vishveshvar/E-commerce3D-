"use client";

import { useSearchParams } from "next/navigation";
import { useState, useMemo } from "react";
import { searchProducts } from "@/data/products";
import { ProductCard } from "@/components/products/ProductCard";
import { Search, X } from "lucide-react";

export function SearchClient() {
  const searchParams = useSearchParams();
  const initialQuery = searchParams.get("q") || "";
  const [query, setQuery] = useState(initialQuery);

  const results = useMemo(() => {
    return searchProducts(query);
  }, [query]);

  return (
    <div className="space-y-12">
      {/* Search Input Bar */}
      <div className="max-w-2xl mx-auto">
        <div className="relative flex items-center">
          <Search className="absolute left-4 h-5 w-5 text-amber-400" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search by keywords, materials, category, or brand..."
            className="w-full bg-zinc-900 border border-zinc-800 py-3.5 pl-12 pr-12 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-amber-400 font-sans"
          />
          {query && (
            <button
              onClick={() => setQuery("")}
              className="absolute right-4 text-zinc-500 hover:text-white"
              aria-label="Clear search input"
            >
              <X className="h-5 w-5" />
            </button>
          )}
        </div>
      </div>

      {/* Results Header */}
      <div className="flex justify-between items-center border-b border-zinc-800 pb-4 text-xs font-mono text-zinc-400">
        <span>
          {query ? `RESULTS FOR "${query.toUpperCase()}"` : "ALL ARCHIVE CATALOG"} (
          {results.length})
        </span>
        {query && (
          <button
            onClick={() => setQuery("")}
            className="text-amber-400 hover:underline uppercase"
          >
            Clear Search
          </button>
        )}
      </div>

      {/* Results Grid */}
      {results.length === 0 ? (
        <div className="py-24 text-center border border-dashed border-zinc-800 space-y-4">
          <p className="font-mono text-sm uppercase text-zinc-400">
            No matching pieces found for &quot;{query}&quot;
          </p>
          <p className="text-xs text-zinc-500 max-w-sm mx-auto">
            Try searching for broad terms like &quot;overcoat&quot;, &quot;headphone&quot;, &quot;denim&quot;, &quot;ceramic&quot;, or &quot;watch&quot;.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {results.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
}
