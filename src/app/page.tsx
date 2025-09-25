import { HeroSection } from "@/components/home/hero-section";
import { ServicesGrid } from "@/components/home/services-grid";
import { FeaturedProducts } from "@/components/home/featured-products";
import { SectorsCarousel } from "@/components/home/sectors-carousel";
import { ProjectHighlight } from "@/components/home/project-highlight";
import { CallToActionBanner } from "@/components/home/cta-banner";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ServicesGrid />
      <FeaturedProducts />
      <SectorsCarousel />
      <ProjectHighlight />
      <CallToActionBanner />
    </>
  );
}
