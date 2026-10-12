import { Compass, Shield, Award } from "lucide-react";
import { BRAND_NAME } from "@/lib/utils";

export function BrandStory() {
  return (
    <section className="bg-zinc-950 py-24 border-b border-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 space-y-4">
            <span className="text-xs font-mono uppercase tracking-widest text-amber-400">
              PHILOSOPHY // MANIFESTO
            </span>
            <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tight text-white font-mono leading-tight">
              Curated Commerce Built Upon Editorial Restraint
            </h2>
          </div>

          <div className="lg:col-span-7 space-y-6 text-zinc-300 text-sm leading-relaxed font-sans">
            <p>
              {BRAND_NAME} was conceived as an antidote to disposable mass commerce. We reject algorithmic clutter in favor of deliberate curation, elevating everyday essentials into archival artifacts of enduring aesthetic and physical value.
            </p>
            <p className="text-zinc-400">
              By bridging runway tailoring, high-fidelity acoustic design, and sculptural domestic objects under one unified digital architecture, we celebrate the artisans, ateliers, and independent laboratories shaping the contemporary visual landscape.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6 border-t border-zinc-800">
              <div className="space-y-2">
                <Compass className="h-5 w-5 text-amber-400" />
                <h4 className="text-xs font-mono font-bold text-white uppercase">Curated Sourcing</h4>
                <p className="text-xs text-zinc-400">Direct provenance from verified heritage mills & labs.</p>
              </div>
              <div className="space-y-2">
                <Shield className="h-5 w-5 text-amber-400" />
                <h4 className="text-xs font-mono font-bold text-white uppercase">Insured Transit</h4>
                <p className="text-xs text-zinc-400">Climate-neutral express dispatch with tamper-seal authenticity.</p>
              </div>
              <div className="space-y-2">
                <Award className="h-5 w-5 text-amber-400" />
                <h4 className="text-xs font-mono font-bold text-white uppercase">Enduring Quality</h4>
                <p className="text-xs text-zinc-400">Designed to age with character over seasons and decades.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
