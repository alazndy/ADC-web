
'use client';

import { findImage } from "@/lib/placeholder-images";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import type { Product } from '@/lib/types';
import { categoryToSlug } from '@/lib/product-categories';

export function ProductCard({ product }: { product: Product }) {
  // Corrected to use imagePlaceholder, which exists on the Product type
  const image = findImage(product.imagePlaceholder);
  const kategoriSlug = categoryToSlug(product.category);

  // Fallback in case the slug can't be generated
  if (!kategoriSlug) {
    return (
        <div className="bg-card rounded-lg overflow-hidden shadow-lg p-4 border border-destructive">
            <p className="text-destructive-foreground">Ürün verisi yüklenemedi.</p>
        </div>
    );
  }

  const productUrl = `/urunler/kategori/${kategoriSlug}/${product.subCategorySlug}#${product.id}`;

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="bg-card rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col h-full"
    >
      <Link href={productUrl} className="block group">
        <div className="relative h-48 w-full bg-muted/30">
          {image ? (
            <Image 
              src={image.src} 
              alt={product.name} 
              fill 
              style={{ objectFit: 'contain' }} 
              className="p-4 group-hover:scale-105 transition-transform duration-300"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-muted-foreground">Resim yok</div>
          )}
        </div>
      </Link>
      <div className="p-4 border-t border-border/50 flex-grow flex flex-col">
        <h3 className="font-semibold text-base leading-snug flex-grow">
          <Link href={productUrl}>{product.name}</Link>
        </h3>
        <p className="text-sm text-muted-foreground mt-2 line-clamp-2">{product.shortDescription}</p>
      </div>
    </motion.div>
  );
}
