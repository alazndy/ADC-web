import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel';
import { mockSectors } from '@/lib/mock-data';
import { findImage } from '@/lib/placeholder-images';

export function SectorsCarousel() {
  return (
    <section className="py-16 sm:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold font-headline tracking-tight sm:text-4xl">
            Sektörel Çözümler
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            Farklı endüstrilerin benzersiz zorluklarına özel mühendislik yaklaşımları.
          </p>
        </div>
        <Carousel opts={{ align: 'start', loop: true }} className="w-full">
          <CarouselContent className="-ml-2">
            {[...mockSectors, ...mockSectors].map((sector, index) => {
              const image = findImage(sector.imageUrl);
              return (
                <CarouselItem key={`${sector.id}-${index}`} className="basis-1/2 md:basis-1/3 lg:basis-1/5 pl-2">
                  <Link href={`/sektorler/${sector.slug}`}>
                    <div className="p-1">
                      <Card className="overflow-hidden group">
                        <CardContent className="relative aspect-square flex flex-col items-center justify-end p-4">
                          {image && (
                            <Image
                              src={image.imageUrl}
                              alt={sector.name}
                              fill
                              className="object-cover group-hover:scale-105 transition-transform duration-300"
                              data-ai-hint={image.imageHint}
                            />
                          )}
                          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                          <h3 className="relative text-center font-semibold text-white z-10">
                            {sector.name}
                          </h3>
                        </CardContent>
                      </Card>
                    </div>
                  </Link>
                </CarouselItem>
              );
            })}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
}
