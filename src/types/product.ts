export interface Product {
  id: string;
  name: string;
  slug: string;
  category: string;
  categorySlug: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviewCount: number;
  description: string;
  image: string;
  gallery: string[];
  tag?: string;
  isFeatured?: boolean;
  isTrending?: boolean;
  inStock: boolean;
  brand?: string;
  variants?: {
    name: string;
    options: string[];
  }[];
}
