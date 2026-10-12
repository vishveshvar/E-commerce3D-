export interface LookbookItem {
  id: string;
  model: string;
  title: string;
  role: string;
  quote: string;
  image: string;
  items: {
    name: string;
    price: string;
    slug?: string;
  }[];
}

export const lookbookItems: LookbookItem[] = [
  {
    id: "look-1",
    model: "Soren V.",
    title: "Monochrome Tailoring & Overcoat Volume",
    role: "Urban Architecture",
    quote: "Structure is not restriction; it is clarity given form.",
    image: "/images/boy1.jpg",
    items: [
      { name: "Heavyweight Double-Breasted Wool Overcoat", price: "$495", slug: "architectural-double-breasted-wool-overcoat" },
      { name: "Raw Shantung Silk Artisanal Tie", price: "$130", slug: "raw-textured-mulberry-silk-tie" },
    ],
  },
  {
    id: "look-2",
    model: "Elena K.",
    title: "Minimalist Cashmere & Clean Formulations",
    role: "Studio Director",
    quote: "Subtlety commands attention louder than excess ever could.",
    image: "/images/girl1.jpg",
    items: [
      { name: "Bespoke Cashmere Double-Face Wrap Coat", price: "$780", slug: "bespoke-cashmere-double-face-wrap-coat" },
      { name: "Botanical Velvet Matte Lip Pigment", price: "$85", slug: "botanical-velvet-matte-lip-pigment" },
    ],
  },
  {
    id: "look-3",
    model: "Julian M.",
    title: "Utilitarian Heavyweight Cottons & Raw Denim",
    role: "Industrial Design",
    quote: "Materials should age honestly with the person wearing them.",
    image: "/images/boy2.jpg",
    items: [
      { name: "Subversive Okayama Raw Denim", price: "$240", slug: "minimalist-japanese-raw-denim" },
      { name: "Heavyweight Garment-Dyed Tee", price: "$90", slug: "oversized-heavyweight-garment-dyed-tee" },
    ],
  },
  {
    id: "look-4",
    model: "Aria T.",
    title: "Sculptural Silhouette & Luminous Botanicals",
    role: "Creative Direction",
    quote: "Form follows mood, texture follows touch.",
    image: "/images/girl2.jpg",
    items: [
      { name: "Botanical Lip Pigment Trio", price: "$85", slug: "botanical-velvet-matte-lip-pigment" },
      { name: "Precision Chronometer 40mm", price: "$590", slug: "precision-minimalist-chronometer-40mm" },
    ],
  },
  {
    id: "look-5",
    model: "Mira C.",
    title: "Relaxed Studio Knits & Spatial Audio",
    role: "Sound Curator",
    quote: "A quiet space requires objects of intentional presence.",
    image: "/images/girl3.jpg",
    items: [
      { name: "Spatial Acoustics Studio Headphones", price: "$380", slug: "spatial-acoustics-studio-headphones" },
      { name: "Sculptural Ceramic Vessel No. 04", price: "$175", slug: "sculptural-ceramic-vessel-no-04" },
    ],
  },
  {
    id: "look-6",
    model: "Nicolette D.",
    title: "Atmospheric Editorial & Transitional Layers",
    role: "Art Photography",
    quote: "Contrast creates the rhythm of an ensemble.",
    image: "/images/girl5.jpg",
    items: [
      { name: "Cashmere Double-Face Wrap Coat", price: "$780", slug: "bespoke-cashmere-double-face-wrap-coat" },
      { name: "Precision Chronometer 40mm", price: "$590", slug: "precision-minimalist-chronometer-40mm" },
    ],
  },
  {
    id: "look-7",
    model: "Sasha L.",
    title: "Contemporary Minimalist Profile",
    role: "Set Designer",
    quote: "Every element holds purpose, nothing is accidental.",
    image: "/images/girl6.jpg",
    items: [
      { name: "Botanical Velvet Matte Lip Pigment", price: "$85", slug: "botanical-velvet-matte-lip-pigment" },
      { name: "Raw Shantung Silk Artisanal Tie", price: "$130", slug: "raw-textured-mulberry-silk-tie" },
    ],
  },
];
