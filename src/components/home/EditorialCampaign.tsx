import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Layers, ShieldCheck, Sparkles } from "lucide-react";

export function EditorialCampaign() {
  return (
    <section className="bg-zinc-950 py-24 border-b border-zinc-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Asymmetrical Feature 1: Acoustic Hardware & Spatial Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 relative">
            <div className="relative aspect-[16/10] w-full overflow-hidden border border-zinc-800 bg-zinc-900 group">
              <Image
                src="/images/bg.jpg"
                alt="Acoustic engineering and architectural soundscapes"
                fill
                sizes="(max-width: 1024px) 100vw, 60vw"
                className="object-cover contrast-110 filter brightness-90 group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            </div>

            {/* Overlapping Floating Inset - Headphone Product */}
            <div className="hidden sm:block absolute -bottom-8 -right-8 w-56 aspect-square border border-zinc-700 bg-black/90 p-3 shadow-2xl backdrop-blur-md">
              <div className="relative w-full h-full">
                <Image
                  src="/images/headphone.jpg"
                  alt="Spatial Studio Reference Headphone"
                  fill
                  sizes="220px"
                  className="object-cover"
                />
              </div>
              <div className="absolute bottom-2 left-3 right-3 bg-black/80 p-1.5 text-center">
                <span className="text-[10px] font-mono text-amber-400 font-bold block">
                  FREQUENCY LABS
                </span>
                <span className="text-[9px] text-zinc-300">$380.00</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-2">
              <span className="text-xs font-mono uppercase tracking-widest text-cyan-400">
                CAMPAIGN NO. 01 // AUDITORY LANDSCAPES
              </span>
              <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tight text-white font-mono leading-tight">
                High-Fidelity Engineering Meets Monolithic Design
              </h2>
            </div>

            <p className="text-sm text-zinc-400 leading-relaxed font-sans">
              Our acoustic systems eliminate decorative excess in pursuit of pure spatial resolution. Hand-milled aircraft-grade chassis, custom beryllium drivers, and low-latency studio-grade streaming.
            </p>

            <div className="space-y-3 pt-2">
              <div className="flex items-center space-x-3 text-xs text-zinc-300">
                <ShieldCheck className="h-4 w-4 text-cyan-400 flex-shrink-0" />
                <span>Individually tuned frequency response curve certification</span>
              </div>
              <div className="flex items-center space-x-3 text-xs text-zinc-300">
                <Sparkles className="h-4 w-4 text-cyan-400 flex-shrink-0" />
                <span>Zero-loss balanced balanced analog & 32-bit digital inputs</span>
              </div>
            </div>

            <div className="pt-4">
              <Link
                href="/categories/electronics"
                className="inline-flex items-center space-x-3 border border-cyan-500/50 bg-cyan-950/20 hover:bg-cyan-500 hover:text-black text-cyan-300 px-6 py-3 text-xs font-bold uppercase tracking-wider transition-all font-mono"
              >
                <span>Explore Acoustic Systems</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>

        {/* Asymmetrical Feature 2: Lifestyle & Curated Ceramics */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center pt-12">
          <div className="lg:col-span-5 order-2 lg:order-1 space-y-6">
            <div className="space-y-2">
              <span className="text-xs font-mono uppercase tracking-widest text-amber-400">
                CAMPAIGN NO. 02 // TACTILE LIVING
              </span>
              <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tight text-white font-mono leading-tight">
                Quiet Sanctuaries for the Thoughtful Collector
              </h2>
            </div>

            <p className="text-sm text-zinc-400 leading-relaxed font-sans">
              Objects that anchor your domestic sanctuary. Organic wheel-thrown stoneware vessels, raw linen textiles, and timeless mechanical timepieces that enrich daily contemplative rhythms.
            </p>

            <div className="space-y-3 pt-2">
              <div className="flex items-center space-x-3 text-xs text-zinc-300">
                <Layers className="h-4 w-4 text-amber-400 flex-shrink-0" />
                <span>Wheel-thrown stoneware glazed in natural volcanic slips</span>
              </div>
              <div className="flex items-center space-x-3 text-xs text-zinc-300">
                <ShieldCheck className="h-4 w-4 text-amber-400 flex-shrink-0" />
                <span>Certified archival grade lifetime durability</span>
              </div>
            </div>

            <div className="pt-4">
              <Link
                href="/categories/home-living"
                className="inline-flex items-center space-x-3 border border-amber-500/50 bg-amber-950/20 hover:bg-amber-500 hover:text-black text-amber-300 px-6 py-3 text-xs font-bold uppercase tracking-wider transition-all font-mono"
              >
                <span>Explore Home & Living</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

          <div className="lg:col-span-7 order-1 lg:order-2 relative">
            <div className="relative aspect-[16/10] w-full overflow-hidden border border-zinc-800 bg-zinc-900 group">
              <Image
                src="/images/bg2.jpg"
                alt="Tactile interior objects and modern lifestyle"
                fill
                sizes="(max-width: 1024px) 100vw, 60vw"
                className="object-cover contrast-110 filter brightness-90 group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            </div>

            {/* Overlapping Floating Inset - Watch */}
            <div className="hidden sm:block absolute -top-8 -left-8 w-56 aspect-square border border-zinc-700 bg-black/90 p-3 shadow-2xl backdrop-blur-md">
              <div className="relative w-full h-full">
                <Image
                  src="/images/watch.jpg"
                  alt="Precision Minimalist Chronometer 40mm"
                  fill
                  sizes="220px"
                  className="object-cover"
                />
              </div>
              <div className="absolute bottom-2 left-3 right-3 bg-black/80 p-1.5 text-center">
                <span className="text-[10px] font-mono text-amber-400 font-bold block">
                  TEMPO ATELIER
                </span>
                <span className="text-[9px] text-zinc-300">$590.00</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
