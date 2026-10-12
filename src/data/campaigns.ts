export interface CampaignSlide {
  id: string;
  title: string;
  subtitle: string;
  headline: string;
  description: string;
  image: string;
  categorySlug: string;
  accent: string;
  tag: string;
}

export const heroCampaigns: CampaignSlide[] = [
  {
    id: "hero-1",
    title: "THE AUTUMN EDITORIAL",
    subtitle: "COLLECTION 01 // BESPOKE SILHOUETTES",
    headline: "SCULPTURAL TAILORING & MODERN PROPORTIONS",
    description: "Architectural wool overcoats, raw Okayama denim, and tailored precision for the modern cosmopolitan archive.",
    image: "/images/hero-main-marketplace.png",
    categorySlug: "fashion",
    accent: "text-amber-400",
    tag: "RUNWAY & ARCHIVE",
  },
  {
    id: "hero-2",
    title: "ACOUSTIC PRECISION",
    subtitle: "COLLECTION 02 // SPATIAL ARCHITECTURE",
    headline: "MINIMALIST AUDIO & TACTILE HIGH-FIDELITY",
    description: "Beryllium studio drivers, CNC milled anodized amplifiers, and precision soundscapes built for purists.",
    image: "/images/bg.jpg",
    categorySlug: "electronics",
    accent: "text-cyan-400",
    tag: "STUDIO HARDWARE",
  },
  {
    id: "hero-3",
    title: "URBAN ESSENTIALS",
    subtitle: "COLLECTION 03 // CONTEMPORARY LIVING",
    headline: "EVERYDAY CARRY, BOTANICALS & OBJECTS",
    description: "Curated stoneware, horological mechanical timepieces, and botanical extracts formulated for daily rituals.",
    image: "/images/bg2.jpg",
    categorySlug: "home-living",
    accent: "text-rose-400",
    tag: "CURATED LIFESTYLE",
  },
  {
    id: "hero-4",
    title: "AVANT-GARDE VISION",
    subtitle: "COLLECTION 04 // EDITORIAL PERSPECTIVE",
    headline: "NEW PERSPECTIVES IN FORM & PROPORTION",
    description: "Expressive editorial portraiture and directional silhouettes challenging conventional wardrobe boundaries.",
    image: "/images/Gemini_Generated_Image_jfpnl4jfpnl4jfpn.png",
    categorySlug: "fashion",
    accent: "text-emerald-400",
    tag: "SPECIAL EDITION",
  },
];
