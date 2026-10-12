import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { categories } from "@/data/categories";
import { getProductsByCategory } from "@/data/products";
import { ProductCard } from "@/components/products/ProductCard";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { BRAND_NAME } from "@/lib/utils";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return categories.map((cat) => ({
    slug: cat.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const category = categories.find((c) => c.slug === slug);
  if (!category) return { title: `Category Not Found | ${BRAND_NAME}` };

  return {
    title: `${category.name} | ${BRAND_NAME}`,
    description: category.description,
  };
}

export default async function CategoryPage({ params }: PageProps) {
  const { slug } = await params;
  const category = categories.find((c) => c.slug === slug);

  if (!category) {
    notFound();
  }

  const categoryProducts = getProductsByCategory(slug);

  return (
    <div className="space-y-16 py-12">
      {/* Category Hero Banner */}
      <section className="relative min-h-[45vh] flex items-end bg-black border-b border-zinc-800 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src={category.image}
            alt={category.name}
            fill
            priority
            sizes="100vw"
            className="object-cover filter contrast-125 brightness-50"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/60 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 w-full space-y-4">
          <Link
            href="/products"
            className="inline-flex items-center space-x-2 text-xs font-mono uppercase tracking-wider text-amber-400 hover:text-white transition-colors"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            <span>Back to All Categories</span>
          </Link>

          <div className="space-y-2">
            <span className="text-xs font-mono uppercase tracking-widest text-zinc-400 block">
              {category.subtitle || "CURATED ARCHIVE SELECTION"}
            </span>
            <h1 className="text-4xl sm:text-6xl font-black uppercase tracking-tight text-white font-mono">
              {category.name}
            </h1>
          </div>

          <p className="text-sm text-zinc-300 max-w-xl font-sans leading-relaxed">
            {category.description}
          </p>
        </div>
      </section>

      {/* Category Products */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex justify-between items-center border-b border-zinc-800 pb-4 text-xs font-mono text-zinc-400">
          <span>{categoryProducts.length} PIECES IN DEPARTMENT</span>
          <span className="text-amber-400 font-bold uppercase">ARCHIVE VERIFIED</span>
        </div>

        {categoryProducts.length === 0 ? (
          <div className="py-20 text-center border border-dashed border-zinc-800 space-y-4">
            <p className="font-mono text-sm uppercase text-zinc-400">
              New seasonal arrivals arriving shortly for {category.name}
            </p>
            <Link
              href="/products"
              className="inline-block bg-zinc-900 border border-zinc-700 px-4 py-2 text-xs font-mono text-white uppercase hover:bg-white hover:text-black transition-colors"
            >
              Browse Complete Catalog
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {categoryProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </div>

      {/* Cross-Category Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 border-t border-zinc-900">
        <span className="text-[10px] font-mono uppercase tracking-widest text-zinc-400 block mb-6">
          DISCOVER OTHER ARCHIVAL DEPARTMENTS:
        </span>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          {categories
            .filter((c) => c.slug !== slug)
            .map((cat) => (
              <Link
                key={cat.id}
                href={`/categories/${cat.slug}`}
                className="p-3 bg-zinc-900/60 border border-zinc-800 hover:border-amber-400 hover:bg-zinc-900 transition-colors flex justify-between items-center text-xs text-zinc-300 font-mono"
              >
                <span>{cat.name}</span>
                <ArrowUpRight className="h-3 w-3 text-zinc-500" />
              </Link>
            ))}
        </div>
      </div>
    </div>
  );
}
