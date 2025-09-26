
'use client';
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { findImage } from "@/lib/placeholder-images";
import { ChevronRight } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import React from "react";

export function HeroSection() {
  const heroImages = [
      findImage("hero-background"),
      findImage("sector-logistics"),
      findImage("sector-construction"),
  ].filter(Boolean);

  const plugin = React.useRef(
    Autoplay({ delay: 5000, stopOnInteraction: true })
  );

  return (
    <section className="relative h-[70vh] min-h-[500px] w-full flex items-center justify-center text-white overflow-hidden">
      <Carousel
        plugins={[plugin.current]}
        className="absolute inset-0 w-full h-full"
        opts={{ loop: true }}
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
      >
        <CarouselContent className="h-full">
          {heroImages.map((image, index) => (
            <CarouselItem key={index} className="h-full relative">
              {image && (
                <Image
                  src={image.imageUrl}
                  alt={image.description}
                  fill
                  sizes="100vw"
                  className="object-cover"
                  priority={index === 0}
                  data-ai-hint={image.imageHint}
                />
              )}
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
      
      <div className="absolute inset-0 bg-black/60" />
      
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold font-headline tracking-tight">
              Güvenlik ve Verimlilikte Yeni Dönem
            </h1>
            <p className="mt-6 max-w-2xl text-lg md:text-xl text-white/80">
              Brigade Electronics'in Türkiye'deki yetkili distribütörü ADC Tasarım olarak, operasyonlarınızı geleceğe taşıyan öncü teknolojiler sunuyoruz.
            </p>
            <div className="mt-10 flex flex-wrap justify-start gap-4">
            <Button size="lg" asChild>
                <Link href="/urunler">Ürünleri Keşfedin <ChevronRight className="ml-2 h-5 w-5" /></Link>
            </Button>
            <Button size="lg" variant="outline" className="bg-transparent backdrop-blur-sm border-white/20 hover:bg-white/10 text-white">
                <Link href="/iletisim">İletişime Geçin</Link>
            </Button>
            </div>
        </div>
      </div>
    </section>
  );
}
