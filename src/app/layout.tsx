import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import { CartDrawer } from "@/components/layout/CartDrawer";
import SplashCursor from "@/components/ui/SplashCursor";
import Iridescence from "@/components/ui/Iridescence";
import { BRAND_NAME, BRAND_TAGLINE } from "@/lib/utils";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: `${BRAND_NAME} | ${BRAND_TAGLINE}`,
  description: "Next-Generation Interactive Digital Marketplace combining editorial fashion, acoustics, and sculptural living.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased flex flex-col font-sans relative selection:bg-amber-500 selection:text-black">
        {/* Overall Background: Ambient Interactive Iridescence Canvas */}
        <div
          className="fixed inset-0 pointer-events-none z-0 overflow-hidden"
          style={{ opacity: 0.28 }}
          aria-hidden="true"
        >
          <Iridescence
            color="#2a324b"
            hueShift={20}
            saturation={0.9}
            brightness={1.3}
            contrast={1.1}
            speed={0.65}
            scale={1.2}
            detail={6}
            warp={1.2}
            rotation={15}
            mouseReact={true}
            amplitude={0.08}
            stir={0.4}
            sheen={0.25}
            clickSwirl={true}
            grain={0.03}
            fade={0}
          />
        </div>

        {/* Fluid Physics Splash Cursor Trail */}
        <SplashCursor
          SIM_RESOLUTION={128}
          DYE_RESOLUTION={1024}
          DENSITY_DISSIPATION={3.8}
          VELOCITY_DISSIPATION={2.2}
          PRESSURE={0.15}
          CURL={3.5}
          SPLAT_RADIUS={0.18}
          SPLAT_FORCE={5500}
          RAINBOW_MODE={true}
        />

        {/* Global UI & Page Shell */}
        <div className="relative z-10 flex flex-col min-h-screen">
          <Navigation />
          <main className="flex-1">{children}</main>
          <Footer />
          <CartDrawer />
        </div>
      </body>
    </html>
  );
}
