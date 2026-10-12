"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronLeft, ChevronRight, Sparkles } from "lucide-react";
import { heroCampaigns } from "@/data/campaigns";

export function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-cycle through campaigns
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroCampaigns.length);
    }, 7000);
    return () => clearInterval(timer);
  }, []);

  const slide = heroCampaigns[currentSlide];

  return (
    <section className="relative min-h-[85vh] lg:min-h-[92vh] flex items-center bg-black overflow-hidden border-b border-zinc-800">
      {/* Background Campaign Imagery with transitions */}
      <div className="absolute inset-0 z-0">
        {heroCampaigns.map((item, idx) => (
          <div
            key={item.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              idx === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
          >
            <Image
              src={item.image}
              alt={item.title}
              fill
              priority={idx === 0}
              sizes="100vw"
              className="object-cover object-center filter brightness-60 contrast-110"
            />
            {/* Dramatic Editorial Gradient Gradients */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/60" />
            <div className="absolute inset-0 bg-gradient-to-r from-black via-black/50 to-transparent" />
          </div>
        ))}
      </div>

      {/* Grid overlay for editorial architectural feel */}
      <div className="absolute inset-0 z-10 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />

      {/* Hero Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
        <div className="max-w-3xl space-y-8">
          {/* Subtitle badge */}
          <div className="inline-flex items-center space-x-2 border border-zinc-700 bg-black/60 backdrop-blur-md px-3.5 py-1.5 text-[11px] font-mono tracking-widest uppercase text-zinc-300">
            <Sparkles className="h-3.5 w-3.5 text-amber-400" />
            <span>{slide.subtitle}</span>
          </div>

          {/* Oversized Headline */}
          <div className="space-y-3">
            <span className="text-xs font-mono tracking-ultra-wide uppercase text-amber-400 block">
              {slide.title}
            </span>
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black uppercase tracking-tight text-white leading-[1.05] font-mono">
              {slide.headline}
            </h1>
          </div>

          {/* Description */}
          <p className="text-sm sm:text-base text-zinc-300 max-w-xl leading-relaxed font-sans">
            {slide.description}
          </p>

          {/* Call to actions */}
          <div className="flex flex-wrap items-center gap-4 pt-4">
            <Link
              href={`/categories/${slide.categorySlug}`}
              className="inline-flex items-center space-x-3 bg-amber-500 hover:bg-amber-400 text-black px-7 py-3.5 text-xs font-bold uppercase tracking-wider transition-all shadow-xl hover:translate-x-1"
            >
              <span>Explore Collection</span>
              <ArrowRight className="h-4 w-4" />
            </Link>

            <Link
              href="/products"
              className="inline-flex items-center space-x-2 border border-zinc-600 bg-black/40 backdrop-blur-md hover:bg-white hover:text-black text-white px-7 py-3.5 text-xs font-semibold uppercase tracking-wider transition-all"
            >
              <span>View All Archive</span>
            </Link>
          </div>
        </div>

        {/* Slide Indicator & Controls */}
        <div className="mt-16 pt-8 border-t border-zinc-800/80 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center space-x-3">
            {heroCampaigns.map((item, idx) => (
              <button
                key={item.id}
                onClick={() => setCurrentSlide(idx)}
                className={`text-left transition-all duration-300 p-1 ${
                  idx === currentSlide
                    ? "w-16 h-1 bg-amber-400"
                    : "w-8 h-1 bg-zinc-700 hover:bg-zinc-500"
                }`}
                aria-label={`Jump to campaign slide ${idx + 1}: ${item.title}`}
              />
            ))}
            <span className="text-xs font-mono text-zinc-400 pl-3">
              0{currentSlide + 1} / 0{heroCampaigns.length}
            </span>
          </div>

          <div className="flex items-center space-x-2">
            <button
              onClick={() =>
                setCurrentSlide((prev) => (prev - 1 + heroCampaigns.length) % heroCampaigns.length)
              }
              className="p-2 border border-zinc-700 bg-black/60 text-zinc-300 hover:bg-white hover:text-black transition-colors"
              aria-label="Previous campaign slide"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <button
              onClick={() => setCurrentSlide((prev) => (prev + 1) % heroCampaigns.length)}
              className="p-2 border border-zinc-700 bg-black/60 text-zinc-300 hover:bg-white hover:text-black transition-colors"
              aria-label="Next campaign slide"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
