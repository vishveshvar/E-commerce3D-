import { HeroSection } from "@/components/home/HeroSection";
import { HeroScrollExpand } from "@/components/home/HeroScrollExpand";
import { FeaturedCategories } from "@/components/home/FeaturedCategories";
import { TrendingProductsSection } from "@/components/home/TrendingProductsSection";
import { LookbookCollapseSection } from "@/components/home/LookbookCollapseSection";
import { EditorialCampaign } from "@/components/home/EditorialCampaign";
import { InteractiveModelSection } from "@/components/home/InteractiveModelSection";
import { FeaturedCollection } from "@/components/home/FeaturedCollection";
import { BrandStory } from "@/components/home/BrandStory";

export default function HomePage() {
  return (
    <div className="flex flex-col w-full">
      {/* 1. Immersive Multi-Campaign Hero */}
      <HeroSection />

      {/* 2. ScrollExpand Interactive Experience (React Bits) */}
      <HeroScrollExpand />

      {/* 3. Featured Categories Grid */}
      <FeaturedCategories />

      {/* 4. Trending Archive Products */}
      <TrendingProductsSection />

      {/* 5. Editorial Collapsible Lookbook Section (Features all portrait talents) */}
      <LookbookCollapseSection />

      {/* 6. Asymmetrical Editorial Campaign (Hardware & Tactile Living) */}
      <EditorialCampaign />

      {/* 7. Interactive 3D ModelViewer Section (React Bits) - strictly above Monochrome Edit */}
      <InteractiveModelSection />

      {/* 8. Featured Collection Capsule (The Monochrome Edit) */}
      <FeaturedCollection />

      {/* 9. Brand Story & Manifesto */}
      <BrandStory />
    </div>
  );
}
