
'use client';
import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { sectors } from '@/lib/data';
import { findImage } from '@/lib/placeholder-images';
import Autoplay from "embla-carousel-autoplay";
import React from "react";
import { motion } from "framer-motion";

const sectionVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

// Variants for hover animations on each card
const cardHoverVariants = {
  rest: { 
    y: 0,
  },
  hover: { 
    y: -8,
    transition: { duration: 0.3, ease: "easeOut" }
  },
};

const imageHoverVariants = {
  rest: { scale: 1 },
  hover: { scale: 1.08, transition: { duration: 0.4, ease: "easeOut" } },
};

const overlayHoverVariants = {
  rest: { opacity: 0 },
  hover: { opacity: 1, transition: { duration: 0.3 } },
};

const titleHoverVariants = {
    rest: { y: 20, opacity: 0 },
    hover: { y: 0, opacity: 1, transition: { duration: 0.3, delay: 0.1, ease: "easeOut" } },
};


export function SectorsCarousel() {
  const plugin = React.useRef(
    Autoplay({ delay: 3000, stopOnInteraction: true })
  );

  return (
    <motion.section 
      className="py-16 sm:py-24 bg-background"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div className="text-center mb-12" variants={itemVariants}>
          <h2 className="text-3xl font-bold font-headline tracking-tight sm:text-4xl">
            Her Sektöre Özel Uzmanlık
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            Farklı endüstrilerin benzersiz zorluklarına, yenilikçi ve amaca yönelik mühendislik yaklaşımları sunuyoruz.
          </p>
        </motion.div>
        <motion.div variants={itemVariants}>
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
                     <motion.div 
                        initial="rest"
                        whileHover="hover"
                        animate="rest"
                        variants={cardHoverVariants}
                        className="h-full"
                     >
                      <Link href={`/sektorler/${sector.slug}`}>
                          <Card className="overflow-hidden h-full group relative border-2 border-transparent hover:border-primary/50 hover:shadow-xl transition-all duration-300">
                            <CardContent className="relative aspect-[3/4] flex flex-col items-center justify-end p-4">
                              {image && (
                                <motion.div 
                                    className='absolute inset-0'
                                    variants={imageHoverVariants}
                                >
                                    <Image
                                        src={image.imageUrl}
                                        alt={sector.name}
                                        fill
                                        sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 20vw"
                                        className="object-cover transition-transform duration-300"
                                        data-ai-hint={image.imageHint}
                                    />
                                </motion.div>
                              )}
                              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                              <motion.div 
                                className="absolute inset-0 bg-primary/20"
                                variants={overlayHoverVariants}
                              />
                              <div className="relative z-10 w-full text-center overflow-hidden">
                                <motion.h3 
                                    variants={titleHoverVariants}
                                    className="font-semibold text-white"
                                >
                                  {sector.name}
                                </motion.h3>
                              </div>
                            </CardContent>
                          </Card>
                      </Link>
                     </motion.div>
                  </CarouselItem>
                );
              })}
            </CarouselContent>
            <CarouselPrevious className="absolute -left-4 top-1/2 -translate-y-1/2 hidden sm:flex" />
            <CarouselNext className="absolute -right-4 top-1/2 -translate-y-1/2 hidden sm:flex" />
          </Carousel>
        </motion.div>
      </div>
    </motion.section>
  );
}
