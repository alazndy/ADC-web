
'use client';
import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { sectors } from '@/lib/data';
import { findImage } from '@/lib/placeholder-images';
import Autoplay from "embla-carousel-autoplay";
import React from "react";

export function SectorsCarousel() {
  const plugin = React.useRef(
    Autoplay({ delay: 3000, stopOnInteraction: true })
  );

  return (
    <section className="py-16 sm:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold font-headline tracking-tight sm:text-4xl">
            Her Sektöre Özel Uzmanlık
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            Farklı endüstrilerin benzersiz zorluklarına, yenilikçi ve amaca yönelik mühendislik yaklaşımları sunuyoruz.
          </p>
        </div>
        <Carousel 
          plugins={[plugin.current]}
          opts={{ align: 'start', loop: true }} 
          className="w-full"
          onMouseEnter={plugin.current.stop}
          onMouseLeave={plugin.current.reset}
        >
          <CarouselContent className="-ml-4">
            {[...sectors, ...sectors].map((sector, index) => {
              const image = findImage(sector.imageUrls[0]);
              return (
                <CarouselItem key={`${sector.id}-${index}`} className="basis-1/2 md:basis-1/3 lg:basis-1/5 pl-4">
                  <Link href={`/sektorler/${sector.slug}`}>
                      <Card className="overflow-hidden group relative">
                         <CardContent className="relative aspect-[3/4] flex flex-col items-center justify-end p-4">
                          {image && (
                            <Image
                              src={image.imageUrl}
                              alt={sector.name}
                              fill
                              sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 20vw"
                              className="object-cover group-hover:scale-105 transition-transform duration-300"
                              data-ai-hint={image.imageHint}
                            />
                          )}
                          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                          <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                          <h3 className="relative text-center font-semibold text-white z-10">
                            {sector.name}
                          </h3>
                        </CardContent>
                      </Card>
                  </Link>
                </CarouselItem>
              );
            })}
          </CarouselContent>
           <CarouselPrevious className="absolute -left-4 top-1/2 -translate-y-1/2 hidden sm:flex" />
           <CarouselNext className="absolute -right-4 top-1/2 -translate-y-1/2 hidden sm:flex" />
        </Carousel>
      </div>
    </section>
  );
}
