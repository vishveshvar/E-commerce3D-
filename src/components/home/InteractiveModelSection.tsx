"use client";

import dynamic from "next/dynamic";
import Link from "next/link";
import { Sparkles, Rotate3d, Compass, ArrowRight } from "lucide-react";

const ModelViewer = dynamic(() => import("@/components/ui/ModelViewer"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-[460px] flex flex-col items-center justify-center bg-zinc-950/80 border border-zinc-800 text-zinc-500 font-mono text-xs gap-3">
      <div className="h-6 w-6 border-2 border-amber-500 border-t-transparent rounded-full animate-spin" />
      <span>INITIALIZING 3D PRECISION HOROLOGY...</span>
    </div>
  ),
});

export function InteractiveModelSection() {
  return (
    <section className="bg-zinc-950 py-24 border-b border-zinc-900 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-zinc-800 pb-6">
          <div className="space-y-2">
            <div className="flex items-center space-x-2 text-xs font-mono uppercase tracking-widest text-amber-400">
              <Sparkles className="h-3.5 w-3.5" />
              <span>INTERACTIVE 3D ARTIFACT // REACT BITS</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-white font-mono">
              Precision Horology 3D
            </h2>
          </div>
          <p className="text-xs text-zinc-400 max-w-md font-sans">
            Interact with our 3D archival piece in real-time. Drag to rotate, inspect craftsmanship from every angle, and observe realistic studio contact lighting.
          </p>
        </div>

        {/* 3D Model Viewer Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-zinc-900/40 border border-zinc-800 p-6 sm:p-10">
          {/* Left: Model Viewer Canvas */}
          <div className="lg:col-span-7 flex justify-center items-center bg-black/60 border border-zinc-800/80 rounded-none overflow-hidden relative shadow-2xl">
            <ModelViewer
              url="/assets/3d/watch.glb"
              width="100%"
              height={480}
              environment="studio"
              autoRotate
              autoRotateSpeed={0.5}
              startAngle={-25}
              tilt={12}
              shadow
              shadowOpacity={0.5}
              zoom
              dragRotate
              hoverTilt={0.2}
            />

            {/* Interactive Badge Cue */}
            <div className="absolute bottom-4 left-4 bg-black/80 backdrop-blur-md border border-zinc-800 px-3 py-1.5 flex items-center space-x-2 text-[10px] font-mono uppercase tracking-wider text-zinc-300 pointer-events-none">
              <Rotate3d className="h-3.5 w-3.5 text-amber-400 animate-spin" />
              <span>DRAG TO ROTATE // DOUBLE-CLICK TO RESET</span>
            </div>
          </div>

          {/* Right: Horological Details & Action */}
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-2">
              <span className="text-[11px] font-mono uppercase tracking-widest text-amber-400 block">
                REF. TM-40-OBSIDIAN
              </span>
              <h3 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-white font-mono">
                Precision Chronometer 40mm
              </h3>
              <p className="text-sm font-mono text-zinc-300 font-bold">$590.00 USD</p>
            </div>

            <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed font-sans">
              Engineered with bead-blasted 316L surgical stainless steel, sapphire crystal exhibition back, and automated mechanical movement. Shown with brushed obsidian metallic casing.
            </p>

            <div className="space-y-3 pt-2 text-xs font-mono text-zinc-300">
              <div className="flex items-center space-x-2">
                <Compass className="h-4 w-4 text-amber-400" />
                <span>Caliber 9015 Automatic Mechanical Movement</span>
              </div>
              <div className="flex items-center space-x-2">
                <Sparkles className="h-4 w-4 text-amber-400" />
                <span>42-Hour Power Reserve & Anti-Magnetic Shielding</span>
              </div>
            </div>

            <div className="pt-4 flex flex-wrap gap-4">
              <Link
                href="/products/precision-minimalist-chronometer-40mm"
                className="inline-flex items-center space-x-2 bg-amber-500 hover:bg-amber-400 text-black px-6 py-3 text-xs font-bold uppercase tracking-wider transition-all shadow-xl font-mono"
              >
                <span>Inspect Specifications</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/categories/accessories"
                className="inline-flex items-center space-x-2 border border-zinc-700 bg-black/60 hover:bg-white hover:text-black text-white px-6 py-3 text-xs font-semibold uppercase tracking-wider transition-all font-mono"
              >
                <span>View Horology Department</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
