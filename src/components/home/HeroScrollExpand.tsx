"use client";

import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import ScrollExpand from "@/components/ui/ScrollExpand";

export function HeroScrollExpand() {
  return (
    <section className="relative w-full bg-black border-b border-zinc-900">
      <ScrollExpand
        src="/images/hero-main-marketplace.png"
        alt="Runway and Archival Marketplace Edit"
        title="THE RUNWAY ARCHIVE"
        scrollHint="SCROLL TO EXPAND ARCHIVE"
        useWindowScroll
        mediaZoom={1.3}
        scrollDistance={1.3}
        holdDistance={0.4}
        startWidth={48}
        startHeight={64}
        startRadius={20}
        endRadius={0}
        overlayScrim={0.65}
      >
        <div className="max-w-3xl mx-auto space-y-6 text-center px-4">
          <div className="inline-flex items-center space-x-2 border border-amber-500/50 bg-black/70 backdrop-blur-md px-3.5 py-1 text-[11px] font-mono tracking-widest uppercase text-amber-400">
            <Sparkles className="h-3.5 w-3.5" />
            <span>FULL BLEED PERSPECTIVE // SS26</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-white font-mono leading-tight">
            Every Silhouetted Form, Revealed in Full Bleed
          </h2>

          <p className="text-sm sm:text-base text-zinc-300 max-w-xl mx-auto font-sans leading-relaxed">
            As the frame unfolds, witness our master tailor garments, acoustic hardware, and sculptural ceramic objects taking over the entire horizon.
          </p>

          <div className="pt-2 flex flex-wrap justify-center gap-4">
            <Link
              href="/products"
              className="inline-flex items-center space-x-2 bg-amber-500 hover:bg-amber-400 text-black px-7 py-3.5 text-xs font-bold uppercase tracking-wider transition-all shadow-xl font-mono"
            >
              <span>Explore Archival Catalog</span>
              <ArrowRight className="h-4 w-4" />
            </Link>

            <Link
              href="/categories/fashion"
              className="inline-flex items-center space-x-2 border border-zinc-700 bg-black/60 hover:bg-white hover:text-black text-white px-7 py-3.5 text-xs font-semibold uppercase tracking-wider transition-all font-mono"
            >
              <span>Inspect Tailoring</span>
            </Link>
          </div>
        </div>
      </ScrollExpand>
    </section>
  );
}
