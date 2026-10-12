import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { categories } from "@/data/categories";

export function FeaturedCategories() {
  return (
    <section className="bg-zinc-950 py-24 border-b border-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-zinc-800 pb-6">
          <div className="space-y-2">
            <span className="text-xs font-mono uppercase tracking-widest text-amber-400">
              EXPLORE CURATED DEPARTMENTS
            </span>
            <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tight text-white font-mono">
              Marketplace Categories
            </h2>
          </div>
          <p className="text-xs text-zinc-400 max-w-md font-sans">
            Every category represents an independent aesthetic pillar—from runway couture to horology and spatial acoustics.
          </p>
        </div>

        {/* Categories Grid - Expressive Asymmetric Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat, index) => (
            <Link
              key={cat.id}
              href={`/categories/${cat.slug}`}
              className="group relative flex flex-col justify-end overflow-hidden bg-zinc-900 border border-zinc-800 hover:border-zinc-600 transition-all duration-500 h-[380px] lg:h-[420px]"
            >
              {/* Image Background */}
              <div className="absolute inset-0 z-0">
                <Image
                  src={cat.image}
                  alt={cat.name}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover object-center filter grayscale contrast-125 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/20 group-hover:via-black/20 transition-all duration-500" />
              </div>

              {/* Card Meta Content */}
              <div className="relative z-10 p-6 space-y-3">
                <div className="flex items-center justify-between text-[11px] font-mono text-zinc-400">
                  <span className="text-amber-400 font-bold">0{index + 1} {"//"} ARCHIVE</span>
                  <span>{cat.itemCount} Objects</span>
                </div>

                <div className="space-y-1">
                  <div className="flex items-center justify-between">
                    <h3 className="text-2xl font-bold uppercase text-white group-hover:text-amber-400 transition-colors font-mono">
                      {cat.name}
                    </h3>
                    <div className="h-8 w-8 rounded-full border border-zinc-700 bg-black/60 flex items-center justify-center text-zinc-300 group-hover:bg-amber-500 group-hover:text-black group-hover:border-amber-500 transition-colors">
                      <ArrowUpRight className="h-4 w-4" />
                    </div>
                  </div>
                  <p className="text-xs text-zinc-300 font-sans line-clamp-2">
                    {cat.description}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
