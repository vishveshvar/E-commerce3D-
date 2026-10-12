import { Suspense } from "react";
import { Metadata } from "next";
import { SearchClient } from "@/components/products/SearchClient";
import { BRAND_NAME } from "@/lib/utils";

export const metadata: Metadata = {
  title: `Search Archive | ${BRAND_NAME}`,
  description: "Search all products, brands, and materials in the marketplace archive.",
};

export default function SearchPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-12">
      <div className="text-center space-y-3 max-w-xl mx-auto">
        <span className="text-xs font-mono uppercase tracking-widest text-amber-400">
          INDEX QUERY // SYSTEM SEARCH
        </span>
        <h1 className="text-4xl font-black uppercase tracking-tight text-white font-mono">
          Product Search
        </h1>
        <p className="text-xs text-zinc-400">
          Filter through our real-time multi-category directory with instantaneous keyword matching.
        </p>
      </div>

      <Suspense fallback={<div className="text-center py-20 text-zinc-500 font-mono text-xs">INITIALIZING SEARCH ENGINE...</div>}>
        <SearchClient />
      </Suspense>
    </div>
  );
}
