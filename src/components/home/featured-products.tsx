import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { mockProducts } from "@/lib/mock-data";
import { findImage } from "@/lib/placeholder-images";
import { Badge } from "@/components/ui/badge";

const featuredProducts = mockProducts.filter(p => p.isFeatured);

export function FeaturedProducts() {
  return (
    <section className="py-16 sm:py-24 bg-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold font-headline tracking-tight sm:text-4xl text-white">
            Öne Çıkan Ürünler
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-white/70">
            Güvenlik ve verimlilikte standartları belirleyen Brigade teknolojileri.
          </p>
        </div>
        <div className="mt-12">
           <Carousel opts={{ loop: true, align: 'start' }} className="w-full">
            <CarouselContent className="-ml-4">
              {featuredProducts.map((product) => {
                const image = findImage(product.imageUrls[0]);
                return (
                  <CarouselItem key={product.id} className="pl-4 md:basis-1/2 lg:basis-1/3">
                      <Card className="h-full flex flex-col group bg-white/5 border-white/10 hover:border-red-500/50 transition-all duration-300">
                        <CardHeader className="p-0">
                          <div className="aspect-video relative overflow-hidden rounded-t-lg bg-white/5">
                            {image && (
                              <Image
                                src={image.imageUrl}
                                alt={product.name}
                                fill
                                className="object-contain p-8 group-hover:scale-105 transition-transform duration-300"
                                data-ai-hint={image.imageHint}
                              />
                            )}
                          </div>
                        </CardHeader>
                        <div className="p-6 flex flex-col flex-grow">
                          <Badge variant="destructive" className="w-fit mb-2">{product.category}</Badge>
                          <CardTitle className="mt-2 font-headline text-white flex-grow">{product.name}</CardTitle>
                          <CardDescription className="mt-2 text-sm line-clamp-3 text-white/60">{product.shortDescription}</CardDescription>
                        </div>
                        <CardFooter className="p-6 pt-0">
                          <Button asChild className="w-full">
                            <Link href={`/urunler/${product.slug}`}>Detayları Gör</Link>
                          </Button>
                        </CardFooter>
                      </Card>
                  </CarouselItem>
                );
              })}
            </CarouselContent>
            <CarouselPrevious className="hidden sm:flex" />
            <CarouselNext className="hidden sm:flex" />
          </Carousel>
        </div>
      </div>
    </section>
  );
}
