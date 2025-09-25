
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
    Autoplay({ delay: 3000, stopOnInteraction: true })
  );

  if (!mainFeatured) return null;

  return (
    <section className="py-16 sm:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-left mb-12">
          <h2 className="text-3xl font-bold font-headline tracking-tight sm:text-4xl">
            Popüler Ürünler
          </h2>
          <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
            En çok tercih edilen, güvenlik ve verimlilikte standartları belirleyen Brigade teknolojileri.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8 items-center">
            <Link href={`/urunler/${mainFeatured.slug}`} className="group">
                <Card className="border-border/20 hover:border-primary/50 transition-all duration-300">
                    <CardContent className="p-0">
                         {mainImage && (
                            <div className="aspect-[4/3] relative overflow-hidden rounded-t-lg bg-card">
                                <Image
                                    src={mainImage.imageUrl}
                                    alt={mainFeatured.name}
                                    fill
                                    className="object-contain p-8 group-hover:scale-105 transition-transform duration-300"
                                    data-ai-hint={mainImage.imageHint}
                                />
                            </div>
                        )}
                        <div className="p-6">
                            <Badge variant="destructive" className="w-fit mb-2">{mainFeatured.category}</Badge>
                            <h3 className="text-2xl font-bold font-headline">{mainFeatured.name}</h3>
                            <p className="mt-2 text-muted-foreground line-clamp-3">{mainFeatured.shortDescription}</p>
                             <span className="font-semibold text-primary group-hover:underline flex items-center mt-4">
                                Ürünü İncele <ArrowRight className="ml-2 h-4 w-4" />
                            </span>
                        </div>
                    </CardContent>
                </Card>
            </Link>

            <div>
                 <Carousel 
                    plugins={[plugin.current]}
                    opts={{ loop: true, align: 'start' }} 
                    className="w-full"
                    onMouseEnter={plugin.current.stop}
                    onMouseLeave={plugin.current.reset}
                    orientation="vertical"
                 >
                    <CarouselContent className="-mt-4 h-[500px]">
                    {otherFeatured.map((product) => (
                        <CarouselItem key={product.id} className="pt-4 basis-1/3">
                            <ProductCard product={product} />
                        </CarouselItem>
                    ))}
                    </CarouselContent>
                </Carousel>
            </div>
        </div>
      </div>
    </section>
  );
}


