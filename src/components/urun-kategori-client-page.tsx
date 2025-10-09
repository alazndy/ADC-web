
'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { findImage } from '@/lib/placeholder-images';
import { AnimatePresence, motion } from 'framer-motion';
import type { Product } from '@/lib/types';
// CORRECTED IMPORT: Ensure categoryToSlug is imported correctly
import { categoryToSlug } from '@/lib/product-categories'; 

interface SubCategory {
    title: string;
    slug: string;
    description: string;
    imagePlaceholder: string;
}

interface UrunKategoriClientPageProps {
    categoryName: string;
    pageDescription: string;
    subCategories: SubCategory[];
    filteredProducts: Product[];
}

const ProductCard = ({ product }: { product: Product }) => {
    const image = findImage(product.imagePlaceholder);
    // The page now has the function to correctly generate this slug
    const kategoriSlug = categoryToSlug(product.category);

    if (!kategoriSlug) return null; // Or some fallback UI

    return (
        <motion.div
            layout
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.3 }}
            className="bg-card rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 flex flex-col"
        >
            <Link href={`/urunler/kategori/${kategoriSlug}/${product.subCategorySlug}#${product.id}`} className="block">
                <div className="relative h-48 w-full">
                    {image && <Image src={image.src} alt={product.name} fill style={{ objectFit: 'contain' }} className="p-4" />}
                </div>
            </Link>
            <div className="p-4 border-t border-border flex-grow flex flex-col">
                <h3 className="font-bold text-lg flex-grow">
                    <Link href={`/urunler/kategori/${kategoriSlug}/${product.subCategorySlug}#${product.id}`}>{product.name}</Link>
                </h3>
                <p className="text-sm text-muted-foreground mt-2">{product.shortDescription}</p>
            </div>
        </motion.div>
    );
};

export function UrunKategoriClientPage({
    categoryName,
    pageDescription,
    subCategories,
    filteredProducts,
}: UrunKategoriClientPageProps) {
    const [activeTab, setActiveTab] = useState('all');

    const getProductsForTab = (tab: string) => {
        if (tab === 'all') return filteredProducts;
        return filteredProducts.filter(p => p.subCategorySlug === tab);
    };

    const productsToShow = getProductsForTab(activeTab);

    return (
        <div className="container mx-auto px-4 py-16">
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-center mb-12">
                <h1 className="text-4xl md:text-5xl font-bold font-headline">{categoryName}</h1>
                <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">{pageDescription}</p>
            </motion.div>

            <div className="sticky top-0 z-10 bg-background/80 backdrop-blur-md mb-8 py-4">
                <div className="flex justify-center flex-wrap gap-2">
                    <button
                        onClick={() => setActiveTab('all')}
                        className={`px-4 py-2 rounded-full text-sm font-semibold transition-colors ${activeTab === 'all' ? 'bg-primary text-primary-foreground' : 'bg-muted hover:bg-muted/80'}`}>
                        Tüm Ürünler
                    </button>
                    {subCategories.map(sc => (
                        <button
                            key={sc.slug}
                            onClick={() => setActiveTab(sc.slug)}
                            className={`px-4 py-2 rounded-full text-sm font-semibold transition-colors ${activeTab === sc.slug ? 'bg-primary text-primary-foreground' : 'bg-muted hover:bg-muted/80'}`}>
                            {sc.title}
                        </button>
                    ))}
                </div>
            </div>

            <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                <AnimatePresence>
                    {productsToShow.map(product => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </AnimatePresence>
            </motion.div>
        </div>
    );
}
