# ATELIER // ARCHIVE — Next-Generation Interactive 3D E-Commerce Marketplace

A modern, multi-category e-commerce marketplace built with Next.js App Router, TypeScript, and Tailwind CSS, featuring an editorial design system, interactive 3D WebGL components, and fluid animations.

## Key Features & Interactive Architecture

- **Interactive 3D Horology Artifact (`<ModelViewer />`)**: Interactive Three.js/Fiber 3D chronometer piece with orbital controls, studio environment lighting, and contact shadows.
- **Ambient Canvas Shader (`<Iridescence />`)**: WebGL2 dual-octave fluid shader operating as the non-blocking ambient backdrop.
- **Fluid Physics Cursor (`<SplashCursor />`)**: Dynamic Jacobi-pressure fluid physics cursor trail across the entire digital storefront.
- **Scroll Expansion Canvas (`<ScrollExpand />`)**: Window-scroll driven editorial expansion zooming from an inset card into a full-bleed horizon.
- **Collapsible Muse Lookbook**: Interactive accordion showcasing campaign models with direct wardrobe references.
- **Multi-Category Storefront**: Full catalog filtering by category, price slider, and sorting order.
- **Complete Shopping Workflow**: Dynamic product detail routes (`/products/[slug]`), category archives (`/categories/[slug]`), keyword search (`/search`), cart drawer, wishlist, and simulated checkout (`/checkout`).

## Getting Started

First, install dependencies:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to experience the marketplace.

## Build for Production

```bash
npm run build
npm run start
```
