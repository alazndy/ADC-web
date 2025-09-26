
'use client';
import React from 'react';
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { products } from "@/lib/data";
import { findImage } from "@/lib/placeholder-images";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";
import { ProductCard } from '@/components/product-card';
import Autoplay from "embla-carousel-autoplay";

export function FeaturedProducts2() {
  const featuredProducts = products.filter(p => p.isFeatured);
  const mainFeatured = featuredProducts[0];
  const otherFeatured = featuredProducts.slice(1);
  const mainImage = findImage(mainFeatured?.imageUrls[0] || '');

  const plugin = React.useRef(
    Autoplay({ delay: 4000, stopOnInteraction: true })
  );

  if (!mainFeatured) return null;

  return (
    <section className="py-16 sm:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-left mb-12">
          <h2 className="text-3xl font-bold font-headline tracking-tight sm:text-4xl">
            Öne Çıkan Teknolojiler
          </h2>
          <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
            Sektörde fark yaratan, güvenliği ve verimliliği yeniden tanımlayan en yenilikçi çözümlerimiz.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8 items-stretch">
            <Link href={`/urunler/${mainFeatured.slug}`} className="group">
                <Card className="h-full flex flex-col border-border/20 hover:border-primary/50 transition-all duration-300">
                    <CardContent className="p-0 flex flex-col flex-grow">
                         {mainImage && (
                            <div className="aspect-[4/3] relative overflow-hidden rounded-t-lg bg-card">
                                <Image
                                    src={mainImage.imageUrl}
                                    alt={mainFeatured.name}
                                    fill
                                    sizes="(max-width: 1024px) 100vw, 50vw"
                                    className="object-contain p-8 group-hover:scale-105 transition-transform duration-300"
                                    data-ai-hint={mainImage.imageHint}
                                />
                            </div>
                        )}
                        <div className="p-6 flex flex-col flex-grow">
                            <Badge variant="default" className="w-fit mb-2">{mainFeatured.category}</Badge>
                            <h3 className="text-2xl font-bold font-headline flex-grow">{mainFeatured.name}</h3>
                            <p className="mt-2 text-muted-foreground line-clamp-3">{mainFeatured.shortDescription}</p>
                             <span className="font-semibold text-primary group-hover:underline flex items-center mt-4">
                                Ürünü İncele <ArrowRight className="ml-2 h-4 w-4" />
                            </span>
                        </div>
                    </CardContent>
                </Card>
            </Link>

            <div className="flex flex-col justify-center">
                 <Carousel 
                    plugins={[plugin.current]}
                    opts={{ loop: true, align: 'start' }} 
                    className="w-full"
                    onMouseEnter={plugin.current.stop}
                    onMouseLeave={plugin.current.reset}
                 >
                    <CarouselContent className="-ml-4">
                    {otherFeatured.map((product) => (
                        <CarouselItem key={product.id} className="pl-4 md:basis-1/2">
                            <ProductCard product={product} />
                        </CarouselItem>
                    ))}
                    </CarouselContent>
                    <CarouselPrevious className="absolute -left-4 top-1/2 -translate-y-1/2 hidden sm:flex" />
                    <CarouselNext className="absolute -right-4 top-1/2 -translate-y-1/2 hidden sm:flex" />
                </Carousel>
            </div>
        </div>
      </div>
    </section>
  );
}

