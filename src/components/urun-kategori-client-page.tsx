'use client';
import { ProductCard } from '@/components/product-card';
import { Card } from '@/components/ui/card';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ChevronLeft } from 'lucide-react';
import { SubCategoryShowcase } from '@/components/subcategory-showcase';
import { motion } from "framer-motion";
import type { Product } from '@/lib/types';

interface SubCategory {
    title: string;
    slug: string;
    description: string;
    features?: string[];
    image: string;
    imageHint?: string;
}

interface UrunKategoriClientPageProps {
    categoryName: string;
    pageDescription: string;
    hasSpecialLayout: boolean;
    subCategories: SubCategory[];
    filteredProducts: Product[];
}

const sectionVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export function UrunKategoriClientPage({ 
    categoryName, 
    pageDescription,
    hasSpecialLayout,
    subCategories,
    filteredProducts 
}: UrunKategoriClientPageProps) {
  
  return (
    <>
      <motion.div 
        className="bg-secondary"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
            <motion.div 
                className="inline-block"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
            >
                <Button asChild variant="ghost" size="sm">
                    <Link href="/urunler">
                        <ChevronLeft className="mr-2 h-4 w-4" />
                        Tüm Kategoriler
                    </Link>
                </Button>
            </motion.div>
          <motion.h1 className="text-4xl font-bold font-headline mt-2" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.6 }}>{categoryName}</motion.h1>
          <motion.p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4, duration: 0.6 }}>
            {pageDescription}
          </motion.p>
        </div>
      </motion.div>
      <motion.div 
        className="container mx-auto px-4 sm:px-6 lg:px-8 py-16"
        variants={sectionVariants}
        initial="hidden"
        animate="visible"
      >
        <main>
            {hasSpecialLayout ? (
                <motion.div className="space-y-16" variants={sectionVariants}>
                    {subCategories.map((subCat, index) => (
                        <motion.div key={subCat.slug} variants={itemVariants}>
                          <SubCategoryShowcase
                              {...subCat}
                              direction={index % 2 === 0 ? 'normal' : 'reverse'}
                          />
                        </motion.div>
                    ))}
                </motion.div>
            ) : (
                <>
                    <motion.div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-6" variants={sectionVariants}>
                        {filteredProducts.map(product => (
                            <motion.div key={product.id} variants={itemVariants}>
                              <ProductCard product={product} />
                            </motion.div>
                        ))}
                    </motion.div>
                    {filteredProducts.length === 0 && (
                        <motion.div className="text-center py-12" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>
                            <Card className="max-w-md mx-auto p-8 bg-card">
                                <p className="text-muted-foreground">Bu kategoride gösterilecek ürün bulunmamaktadır.</p>
                                <Button asChild className="mt-4">
                                    <Link href="/urunler">Diğer Kategorilere Göz Atın</Link>
                                </Button>
                            </Card>
                        </motion.div>
                    )}
                </>
            )}
        </main>
      </motion.div>
    </>
  );
}
