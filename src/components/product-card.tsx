"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { findImage } from "@/lib/placeholder-images";
import { Badge } from "@/components/ui/badge";
import type { Product } from "@/lib/types";


const cardHoverVariants = {
  rest: {
    y: 0,
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.05)"
  },
  hover: {
    y: -5,
    boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.1)",
    transition: { duration: 0.3, ease: "easeOut" }
  },
};

const imageHoverVariants = {
  rest: { scale: 1 },
  hover: { scale: 1.05, transition: { duration: 0.4, ease: "easeOut" } },
};

const titleHoverVariants = {
    rest: { color: 'inherit' },
    hover: { color: 'var(--primary)', transition: { duration: 0.3 } },
};


export function ProductCard({ product }: { product: Product }) {
  const image = findImage(product.imageUrls[0]);

  return (
    <motion.div
      initial="rest"
      whileHover="hover"
      animate="rest"
      className="h-full"
      variants={cardHoverVariants}
    >
      <Card className="h-full flex flex-col group overflow-hidden transition-all duration-300 bg-card border-border/20">
        <CardHeader className="p-0">
          <Link href={`/urunler/${product.slug}`} className="block aspect-video relative overflow-hidden bg-secondary/50">
            {image && (
                <motion.div className="absolute inset-0" variants={imageHoverVariants}>
                    <Image
                        src={image.imageUrl}
                        alt={product.name}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-contain p-4 transition-transform duration-300"
                        data-ai-hint={image.imageHint}
                    />
                </motion.div>
            )}
             <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-white/5 pointer-events-none dark:from-black/20 dark:to-white/5" />
          </Link>
        </CardHeader>
        <div className="p-4 flex flex-col flex-grow">
          <Badge variant="outline" className="w-fit mb-2 text-xs">{product.category}</Badge>
          <motion.div variants={titleHoverVariants}>
            <CardTitle className="text-base font-headline flex-grow mt-1 text-card-foreground">
                <Link href={`/urunler/${product.slug}`} className="transition-colors">
                    <span className="absolute inset-0" />
                    {product.name}
                </Link>
            </CardTitle>
          </motion.div>
          <p className="mt-2 text-sm text-muted-foreground line-clamp-2">{product.shortDescription}</p>
        </div>
      </Card>
    </motion.div>
  );
}
