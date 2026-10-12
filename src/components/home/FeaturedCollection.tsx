import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { formatPrice } from "@/lib/utils";
import { products } from "@/data/products";

export function FeaturedCollection() {
  const collection = [
    products.find((p) => p.slug === "architectural-double-breasted-wool-overcoat")!,
    products.find((p) => p.slug === "minimalist-japanese-raw-denim")!,
    products.find((p) => p.slug === "botanical-velvet-matte-lip-pigment")!,
    products.find((p) => p.slug === "trail-engineered-kinetic-runner")!,
    products.find((p) => p.slug === "raw-textured-mulberry-silk-tie")!,
  ].filter(Boolean);

  return (
    <section className="bg-zinc-950 py-24 border-b border-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-zinc-800 pb-6">
          <div className="space-y-2">
            <div className="flex items-center space-x-2 text-xs font-mono uppercase tracking-widest text-emerald-400">
              <Sparkles className="h-3.5 w-3.5" />
              <span>SPECIAL CAPSULE RELEASE</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tight text-white font-mono">
              The Monochrome Edit
            </h2>
          </div>
          <p className="text-xs text-zinc-400 max-w-md font-sans">
            A distinctive editorial gallery pairing structural tailoring, Japanese raw denim, artisanal silks, and trail tech.
          </p>
        </div>

        {/* Dynamic Gallery Strip Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {collection.map((item, index) => (
            <Link
              key={item.id}
              href={`/products/${item.slug}`}
              className="group relative flex flex-col bg-zinc-900/40 border border-zinc-800 hover:border-amber-500 transition-all duration-300"
            >
              <div className="relative aspect-[3/4] w-full overflow-hidden bg-zinc-900">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 20vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-2 left-2 bg-black/80 px-2 py-0.5 text-[9px] font-mono uppercase tracking-widest text-zinc-300">
                  REF. 0{index + 1}
                </div>
              </div>

              <div className="p-3.5 flex flex-col justify-between flex-1 space-y-2">
                <div>
                  <span className="text-[10px] font-mono text-zinc-400 uppercase block">
                    {item.brand || item.category}
                  </span>
                  <h3 className="text-xs font-semibold text-zinc-200 group-hover:text-amber-400 transition-colors line-clamp-1">
                    {item.name}
                  </h3>
                </div>

                <div className="flex items-center justify-between pt-1 border-t border-zinc-800/80">
                  <span className="text-xs font-mono font-bold text-white">
                    {formatPrice(item.price)}
                  </span>
                  <div className="text-zinc-500 group-hover:text-white transition-colors">
                    <ArrowRight className="h-3.5 w-3.5" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
