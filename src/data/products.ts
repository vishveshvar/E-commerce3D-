import { Product } from "@/types/product";

export const products: Product[] = [
  {
    id: "prod-1",
    name: "Architectural Double-Breasted Wool Overcoat",
    slug: "architectural-double-breasted-wool-overcoat",
    category: "Fashion",
    categorySlug: "fashion",
    price: 495,
    originalPrice: 620,
    rating: 4.9,
    reviewCount: 38,
    description: "Crafted from heavyweight virgin melton wool with structured drop shoulders, hand-stitched peak lapels, and an exaggerated relaxed drape. Engineered for effortless seasonal transitions with breathable cupro lining.",
    image: "/images/coatsuit.jpg",
    gallery: [
      "/images/coatsuit.jpg",
      "/images/boy2.jpg",
      "/images/category-fashion-01.png",
    ],
    tag: "Editorial Pick",
    isFeatured: true,
    isTrending: true,
    inStock: true,
    brand: "ATELIER COUTURE",
    variants: [
      { name: "Size", options: ["S", "M", "L", "XL"] },
      { name: "Color", options: ["Midnight Charcoal", "Cast Stone", "Obsidian"] },
    ],
  },
  {
    id: "prod-2",
    name: "Spatial Acoustics Studio Reference Headphones",
    slug: "spatial-acoustics-studio-headphones",
    category: "Electronics",
    categorySlug: "electronics",
    price: 380,
    originalPrice: 420,
    rating: 4.8,
    reviewCount: 92,
    description: "Equipped with custom 45mm beryllium drivers, open-back aluminum casing, and memory-foam ear cushions wrapped in breathable lambskin. Tuned for transparent spatial response and all-day fatigue-free mixing.",
    image: "/images/headphone.jpg",
    gallery: [
      "/images/headphone.jpg",
      "/images/category-electronics-01.png",
    ],
    tag: "High Fidelity",
    isFeatured: true,
    isTrending: true,
    inStock: true,
    brand: "FREQUENCY LABS",
    variants: [
      { name: "Finish", options: ["Brushed Silver", "Matte Carbon"] },
    ],
  },
  {
    id: "prod-3",
    name: "Subversive Minimalist Japanese Raw Denim",
    slug: "minimalist-japanese-raw-denim",
    category: "Fashion",
    categorySlug: "fashion",
    price: 240,
    originalPrice: 280,
    rating: 4.7,
    reviewCount: 54,
    description: "14oz unwashed selvedge denim woven in Okayama on vintage shuttle looms. Features a modern wide-straight profile, custom oxidized iron rivets, and contrasting chain-stitched hems.",
    image: "/images/jeans.jpg",
    gallery: [
      "/images/jeans.jpg",
      "/images/boy1.jpg",
      "/images/clothes.jpg",
    ],
    tag: "Limited Release",
    isFeatured: true,
    isTrending: true,
    inStock: true,
    brand: "SELVEDGE LAB",
    variants: [
      { name: "Waist", options: ["28", "30", "32", "34", "36"] },
      { name: "Inseam", options: ["30", "32", "34"] },
    ],
  },
  {
    id: "prod-4",
    name: "Precision Minimalist Chronometer 40mm",
    slug: "precision-minimalist-chronometer-40mm",
    category: "Accessories",
    categorySlug: "accessories",
    price: 590,
    originalPrice: 650,
    rating: 5.0,
    reviewCount: 27,
    description: "Self-winding mechanical automatic movement with 42-hour power reserve. Housed in 316L bead-blasted surgical stainless steel with a sapphire crystal face and quick-release horween leather band.",
    image: "/images/watch.jpg",
    gallery: [
      "/images/watch.jpg",
      "/images/tie.jpg",
    ],
    tag: "Bespoke Horology",
    isFeatured: true,
    isTrending: true,
    inStock: true,
    brand: "TEMPO ATELIER",
    variants: [
      { name: "Strap", options: ["Natural Horween", "Matte Obsidian Steel"] },
    ],
  },
  {
    id: "prod-5",
    name: "Trail-Engineered Kinetic Aerodynamic Runner",
    slug: "trail-engineered-kinetic-runner",
    category: "Sports & Outdoors",
    categorySlug: "sports-outdoors",
    price: 215,
    originalPrice: 250,
    rating: 4.8,
    reviewCount: 76,
    description: "Carbon composite propulsion plate bonded with dual-density nitrogen-infused supercritical foam. Vibram Megagrip traction lug outsole handles loose scree and wet asphalt with unmatched stability.",
    image: "/images/sportshoe.jpg",
    gallery: [
      "/images/sportshoe.jpg",
      "/images/category-sports-outdoors-01.png",
    ],
    tag: "Active Tech",
    isFeatured: false,
    isTrending: true,
    inStock: true,
    brand: "KINETIC PERFORMANCE",
    variants: [
      { name: "US Size", options: ["8", "9", "10", "11", "12"] },
      { name: "Colorway", options: ["Solar Ember / Stone", "Monochrome Shadow"] },
    ],
  },
  {
    id: "prod-6",
    name: "Botanical Velvet Matte Lip Pigment Trio",
    slug: "botanical-velvet-matte-lip-pigment",
    category: "Beauty & Personal Care",
    categorySlug: "beauty-personal-care",
    price: 85,
    originalPrice: 105,
    rating: 4.9,
    reviewCount: 114,
    description: "Infused with wild cold-pressed rosehip oil and antioxidant moringa butter. Delivers featherweight, non-drying intense matte saturation that stays luminous throughout the evening.",
    image: "/images/lipstick.jpg",
    gallery: [
      "/images/lipstick.jpg",
      "/images/girl2.jpg",
      "/images/category-beauty-01.png",
    ],
    tag: "Clean Formula",
    isFeatured: true,
    isTrending: true,
    inStock: true,
    brand: "LUMIÈRE ESSENCE",
    variants: [
      { name: "Palette", options: ["Terracotta Crimson", "Smoked Rosewood", "Berry Noir"] },
    ],
  },
  {
    id: "prod-7",
    name: "Raw Textured Mulberry Silk Artisanal Tie",
    slug: "raw-textured-mulberry-silk-tie",
    category: "Accessories",
    categorySlug: "accessories",
    price: 130,
    originalPrice: 160,
    rating: 4.6,
    reviewCount: 19,
    description: "Hand-rolled untipped edges woven from organic raw shantung mulberry silk. Possesses tactile slub texture that pairs seamlessly with structured tailoring or casual unstructured blazers.",
    image: "/images/tie.jpg",
    gallery: [
      "/images/tie.jpg",
      "/images/coatsuit.jpg",
    ],
    tag: "Handcrafted",
    isFeatured: false,
    isTrending: false,
    inStock: true,
    brand: "TIE & TEXTILE",
    variants: [
      { name: "Color", options: ["Moss Sage", "Slate Ink", "Burnt Umber"] },
    ],
  },
  {
    id: "prod-8",
    name: "Oversized Heavyweight Garment-Dyed Tee",
    slug: "oversized-heavyweight-garment-dyed-tee",
    category: "Fashion",
    categorySlug: "fashion",
    price: 90,
    rating: 4.7,
    reviewCount: 63,
    description: "320 GSM combed organic cotton with custom cold-pigment garment wash. Reinforced ribbed neckline, subtle drop shoulder, and relaxed boxy cut constructed for enduring daily wear.",
    image: "/images/clothes.jpg",
    gallery: [
      "/images/clothes.jpg",
      "/images/boy2.jpg",
      "/images/girl3.jpg",
    ],
    tag: "Wardrobe Essential",
    isFeatured: false,
    isTrending: true,
    inStock: true,
    brand: "ATELIER BASIC",
    variants: [
      { name: "Size", options: ["S", "M", "L", "XL"] },
      { name: "Color", options: ["Washed Clay", "Graphite Grey", "Bone White"] },
    ],
  },
  {
    id: "prod-9",
    name: "Sculptural Ceramic Vessel No. 04",
    slug: "sculptural-ceramic-vessel-no-04",
    category: "Home & Living",
    categorySlug: "home-living",
    price: 175,
    originalPrice: 210,
    rating: 4.9,
    reviewCount: 41,
    description: "Individually wheel-thrown stoneware coated in matte volcanic slip glaze. Features organic asymmetrical curves designed to elevate living spaces with architectural presence.",
    image: "/images/category-home-living-01.png",
    gallery: [
      "/images/category-home-living-01.png",
      "/images/bg.jpg",
    ],
    tag: "Artisanal Living",
    isFeatured: true,
    isTrending: false,
    inStock: true,
    brand: "SPATIAL FORM",
  },
  {
    id: "prod-10",
    name: "High-Altitude Polar Shell Parka",
    slug: "high-altitude-polar-shell-parka",
    category: "Sports & Outdoors",
    categorySlug: "sports-outdoors",
    price: 520,
    originalPrice: 620,
    rating: 4.9,
    reviewCount: 33,
    description: "3-layer seam-sealed GORE membrane rated for sub-zero alpine storms. Features storm hood with Cohaesive cord locks, waterproof YKK Aquaguard zippers, and ergonomic articulated sleeves.",
    image: "/images/category-sports-outdoors-01.png",
    gallery: [
      "/images/category-sports-outdoors-01.png",
      "/images/sportshoe.jpg",
    ],
    tag: "Expedition Tech",
    isFeatured: true,
    isTrending: false,
    inStock: true,
    brand: "KINETIC PERFORMANCE",
    variants: [
      { name: "Size", options: ["M", "L", "XL"] },
      { name: "Color", options: ["Arctic Ochre", "Stealth Onyx"] },
    ],
  },
  {
    id: "prod-11",
    name: "Bespoke Cashmere Double-Face Wrap Coat",
    slug: "bespoke-cashmere-double-face-wrap-coat",
    category: "Fashion",
    categorySlug: "fashion",
    price: 780,
    rating: 5.0,
    reviewCount: 15,
    description: "Double-face woven Mongolian cashmere unlined for pure fluid lightness. Hand-finished split seams, matching tie belt, and kimono-inspired sleeve construction.",
    image: "/images/girl1.jpg",
    gallery: [
      "/images/girl1.jpg",
      "/images/girl5.jpg",
      "/images/coatsuit.jpg",
    ],
    tag: "Private Archive",
    isFeatured: true,
    isTrending: false,
    inStock: true,
    brand: "ATELIER COUTURE",
    variants: [
      { name: "Size", options: ["36", "38", "40", "42"] },
      { name: "Color", options: ["Camel Sand", "Midnight Navy"] },
    ],
  },
  {
    id: "prod-12",
    name: "Architectural Wireless Smart Hub & Amp",
    slug: "architectural-wireless-smart-hub-amp",
    category: "Electronics",
    categorySlug: "electronics",
    price: 340,
    originalPrice: 399,
    rating: 4.7,
    reviewCount: 29,
    description: "CNC-milled monolithic anodized aluminum chassis housing high-resolution 32-bit DAC and 100W Class-D amplifier. Seamless multi-room AirPlay 2, Spotify Connect, and Roon Ready streaming.",
    image: "/images/category-electronics-01.png",
    gallery: [
      "/images/category-electronics-01.png",
      "/images/headphone.jpg",
    ],
    tag: "Smart Living",
    isFeatured: false,
    isTrending: false,
    inStock: true,
    brand: "FREQUENCY LABS",
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getProductsByCategory(categorySlug: string): Product[] {
  return products.filter((p) => p.categorySlug.toLowerCase() === categorySlug.toLowerCase());
}

export function getTrendingProducts(): Product[] {
  return products.filter((p) => p.isTrending);
}

export function getFeaturedProducts(): Product[] {
  return products.filter((p) => p.isFeatured);
}

export function searchProducts(query: string): Product[] {
  const clean = query.trim().toLowerCase();
  if (!clean) return products;
  return products.filter((p) => {
    return (
      p.name.toLowerCase().includes(clean) ||
      p.category.toLowerCase().includes(clean) ||
      p.description.toLowerCase().includes(clean) ||
      (p.brand && p.brand.toLowerCase().includes(clean)) ||
      (p.tag && p.tag.toLowerCase().includes(clean))
    );
  });
}
