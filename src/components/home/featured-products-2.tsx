
'use client';
import React from 'react';
import Image from "next/image";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { products } from "@/lib/data";
import { findImage } from "@/lib/placeholder-images";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";
import { ProductCard } from '@/components/product-card';
import Autoplay from "embla-carousel-autoplay";
import { motion } from 'framer-motion';

const sectionVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const mainCardHoverVariants = {
  rest: {
    y: 0,
    boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)" 
  },
  hover: {
    y: -8,
    boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)",
    transition: { duration: 0.3, ease: "easeOut" }
  },
};

const mainImageHoverVariants = {
  rest: { scale: 1 },
  hover: { scale: 1.05, transition: { duration: 0.4, ease: "easeOut" } },
};

const arrowHoverVariants = {
    rest: { x: 0 },
    hover: { x: 4, transition: { duration: 0.3, ease: 'easeInOut'} },
}

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
    <motion.section 
      className="py-16 sm:py-24 bg-background"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div className="text-left mb-12" variants={itemVariants}>
          <h2 className="text-3xl font-bold font-headline tracking-tight sm:text-4xl">
            Öne Çıkan Teknolojiler
          </h2>
          <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
            Sektörde fark yaratan, güvenliği ve verimliliği yeniden tanımlayan en yenilikçi çözümlerimiz.
          </p>
        </motion.div>
        
        <motion.div className="grid lg:grid-cols-2 gap-8 items-stretch" variants={itemVariants}>
            <motion.div initial="rest" whileHover="hover" animate="rest" variants={mainCardHoverVariants}>
                 <Link href={`/urunler/${mainFeatured.slug}`} className="group h-full">
                    <Card className="h-full flex flex-col border-border/20 transition-all duration-300">
                        <CardContent className="p-0 flex flex-col flex-grow">
                             {mainImage && (
                                <div className="aspect-[4/3] relative overflow-hidden rounded-t-lg bg-card">
                                    <motion.div className='absolute inset-0' variants={mainImageHoverVariants}>
                                        <Image
                                            src="https://firebasestorage.googleapis.com/v0/b/adc-web-473522.firebasestorage.app/o/Product_Images%2FBN360-300-Kit.jpg?alt=media&token=60ba59d4-ce58-4be6-9e3b-cb291efdd62b"
                                            alt={mainFeatured.name}
                                            fill
                                            sizes="(max-width: 1024px) 100vw, 50vw"
                                            className="object-contain p-8 transition-transform duration-300"
                                        />
                                    </motion.div>
                                </div>
                            )}
                            <div className="p-6 flex flex-col flex-grow">
                                <Badge variant="default" className="w-fit mb-2">{mainFeatured.category}</Badge>
                                <h3 className="text-2xl font-bold font-headline flex-grow">{mainFeatured.name}</h3>
                                <p className="mt-2 text-muted-foreground line-clamp-3">{mainFeatured.shortDescription}</p>
                                 <div className="font-semibold text-primary group-hover:underline flex items-center mt-4">
                                    Ürünü İncele 
                                    <motion.div variants={arrowHoverVariants}>
                                        <ArrowRight className="ml-2 h-4 w-4" />
                                    </motion.div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </Link>
            </motion.div>

            <div className="flex flex-col justify-center">
                 <Carousel 
                    plugins={[plugin.current]}
                    opts={{ loop: true, align: 'start' }} 
                    className="w-full"
                    onMouseEnter={plugin.current.stop}
                    onMouseLeave={plugin.current.reset}
                 >
                    <CarouselContent className="-ml-4">
                    {otherFeatured.map((product, index) => (
                        <CarouselItem key={product.id} className="pl-4 md:basis-1/2">
                          <motion.div
                             variants={itemVariants} 
                             custom={index} 
                           >
                            <ProductCard product={product} />
                           </motion.div>
                        </CarouselItem>
                    ))}
                    </CarouselContent>
                    <CarouselPrevious className="absolute -left-4 top-1/2 -translate-y-1/2 hidden sm:flex" />
                    <CarouselNext className="absolute -right-4 top-1/2 -translate-y-1/2 hidden sm:flex" />
                </Carousel>
            </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
