"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronDown, ArrowRight, Quote } from "lucide-react";
import { lookbookItems } from "@/data/lookbook";

export function LookbookCollapseSection() {
  const [activeId, setActiveId] = useState<string>(lookbookItems[0].id);

  const activeLook = lookbookItems.find((l) => l.id === activeId) || lookbookItems[0];

  return (
    <section className="bg-zinc-950 py-24 border-b border-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Header */}
        <div className="border-b border-zinc-800 pb-6 space-y-2">
          <div className="flex items-center space-x-2 text-xs font-mono uppercase tracking-widest text-amber-400">
            <span>EDITORIAL COLLAPSIBLE LOOKBOOK</span>
            <span>{"//"}</span>
            <span>ALL CAMPAIGN TALENTS</span>
          </div>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-white font-mono">
              The Portrait Collective
            </h2>
            <p className="text-xs text-zinc-400 max-w-md font-sans">
              Expand and collapse each muse to inspect their signature archival styling, silhouettes, and wardrobe composition.
            </p>
          </div>
        </div>

        {/* Collapsible Accordion & Featured Preview Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Interactive Accordion List */}
          <div className="lg:col-span-7 space-y-3">
            {lookbookItems.map((look, index) => {
              const isOpen = look.id === activeId;
              return (
                <div
                  key={look.id}
                  className={`border transition-all duration-300 ${
                    isOpen
                      ? "border-amber-500 bg-zinc-900/60"
                      : "border-zinc-800/80 bg-zinc-900/20 hover:border-zinc-700"
                  }`}
                >
                  <button
                    onClick={() => setActiveId(look.id)}
                    className="w-full text-left p-5 flex items-center justify-between gap-4"
                    aria-expanded={isOpen}
                  >
                    <div className="flex items-center space-x-4">
                      <span className="font-mono text-xs text-amber-400 font-bold">
                        0{index + 1}
                      </span>
                      <div className="relative h-10 w-10 flex-shrink-0 overflow-hidden border border-zinc-800">
                        <Image
                          src={look.image}
                          alt={look.model}
                          fill
                          sizes="40px"
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <h3 className="text-sm sm:text-base font-bold text-white uppercase font-mono">
                          {look.model}
                        </h3>
                        <span className="text-[11px] text-zinc-400 font-mono">
                          {look.role}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center space-x-3">
                      <span className="hidden sm:inline-block text-xs text-zinc-400 font-sans">
                        {look.title}
                      </span>
                      <ChevronDown
                        className={`h-4 w-4 text-zinc-400 transition-transform duration-300 ${
                          isOpen ? "rotate-180 text-amber-400" : ""
                        }`}
                      />
                    </div>
                  </button>

                  {/* Expanded Accordion Body */}
                  {isOpen && (
                    <div className="px-5 pb-6 pt-2 border-t border-zinc-800/60 space-y-4 animate-in fade-in duration-300">
                      <div className="flex items-start space-x-2 text-xs text-zinc-300 italic">
                        <Quote className="h-4 w-4 text-amber-400 flex-shrink-0 not-italic" />
                        <p>“{look.quote}”</p>
                      </div>

                      <div className="space-y-2 pt-2">
                        <span className="text-[10px] font-mono uppercase tracking-widest text-zinc-400 block">
                          Featured Wardrobe Items:
                        </span>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          {look.items.map((item, i) => (
                            <div
                              key={i}
                              className="p-3 bg-black/60 border border-zinc-800 flex justify-between items-center text-xs"
                            >
                              <div className="space-y-0.5">
                                <span className="text-zinc-200 font-medium block">
                                  {item.name}
                                </span>
                                <span className="font-mono text-amber-400 font-bold">
                                  {item.price}
                                </span>
                              </div>
                              {item.slug && (
                                <Link
                                  href={`/products/${item.slug}`}
                                  className="text-zinc-400 hover:text-white p-1"
                                >
                                  <ArrowRight className="h-3.5 w-3.5" />
                                </Link>
                              )}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Right Column: Editorial Hero View for the Active Muse */}
          <div className="lg:col-span-5 sticky top-28 space-y-4">
            <div className="relative aspect-[3/4] w-full overflow-hidden border border-zinc-800 bg-zinc-900 group shadow-2xl">
              <Image
                src={activeLook.image}
                alt={activeLook.model}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover object-center filter contrast-110 group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />

              <div className="absolute bottom-6 left-6 right-6 space-y-2">
                <div className="inline-block bg-amber-500 text-black px-2.5 py-0.5 text-[10px] font-mono font-bold uppercase tracking-wider">
                  CURRENT MUSE
                </div>
                <h3 className="text-2xl font-black uppercase text-white font-mono">
                  {activeLook.model}
                </h3>
                <p className="text-xs text-zinc-300 font-sans">
                  {activeLook.title}
                </p>
              </div>
            </div>

            <div className="p-4 bg-zinc-900/60 border border-zinc-800 flex items-center justify-between text-xs">
              <span className="font-mono text-zinc-400">ROLE: {activeLook.role.toUpperCase()}</span>
              <Link
                href="/products"
                className="text-amber-400 hover:text-amber-300 font-mono font-bold uppercase tracking-wider flex items-center space-x-1"
              >
                <span>Shop Muse Look</span>
                <ArrowRight className="h-3 w-3" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
