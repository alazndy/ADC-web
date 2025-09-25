import { HeroSection } from "@/components/home/hero-section";
import { ServicesGrid } from "@/components/home/services-grid";
import { FeaturedProducts2 } from "@/components/home/featured-products-2";
import { SectorsCarousel } from "@/components/home/sectors-carousel";
import { ProjectHighlight } from "@/components/home/project-highlight";
import { CallToActionBanner } from "@/components/home/cta-banner";

export default function Home() {
  return (
    <>
      <HeroSection />
      <FeaturedProducts2 />
      <ServicesGrid />
      <SectorsCarousel />
      <ProjectHighlight />
      <CallToActionBanner />
    </>
  );
}
