import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { findImage } from "@/lib/placeholder-images";

export function HeroSection() {
  const heroImage = findImage("hero-background");

  return (
    <section className="relative h-[80vh] min-h-[500px] w-full flex items-center justify-center text-white">
      {heroImage && (
        <Image
          src={heroImage.imageUrl}
          alt={heroImage.description}
          fill
          className="object-cover"
          priority
          data-ai-hint={heroImage.imageHint}
        />
      )}
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative z-10 text-center px-4">
        <h1 className="text-4xl md:text-6xl font-bold font-headline tracking-tight">
          Geleceğin Güvenlik ve Verimlilik Teknolojileri
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg md:text-xl text-white/80">
          ADC Tasarım, Brigade Electronics'in yenilikçi çözümleriyle filonuzu ve operasyonlarınızı daha güvenli, akıllı ve verimli hale getirir.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Button size="lg" asChild>
            <Link href="/urunler">Ürünleri Keşfet</Link>
          </Button>
          <Button size="lg" variant="secondary" asChild>
            <Link href="/iletisim">Özel Çözüm Alın</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
