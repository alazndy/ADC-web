
'use client';

import Link from "next/link";
import Image from "next/image";
import { findImage } from "@/lib/placeholder-images";
import { ArrowRight, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
// CORRECTED IMPORT: Now that `index.ts` is fixed, we can use the central export path.
import { productCategoryDetails } from '@/lib/data'; 
import { motion } from "framer-motion";

const productCategoriesForPage = productCategoryDetails.map(cat => ({
    ...cat,
    image: findImage(cat.imagePlaceholder)
}));

export default function UrunlerPage() {
    return (
        <div className="bg-background text-foreground">
            {/* Hero Section */}
            <div className="relative bg-gray-100 dark:bg-gray-800 text-center py-20 md:py-32">
                <div className="container mx-auto px-4">
                    <motion.h1 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-4xl md:text-6xl font-bold font-headline">
                        Araç Güvenlik Sistemleri
                    </motion.h1>
                    <motion.p 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="mt-4 text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
                        Ticari araçlar ve iş makineleri için tasarlanmış, hayat kurtaran ve verimliliği artıran en gelişmiş güvenlik çözümleri.
                    </motion.p>
                </div>
            </div>

            {/* Categories Section */}
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
                <div className="space-y-16">
                    {productCategoriesForPage.map((category, index) => (
                        <motion.div 
                            key={category.slug}
                            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className={`flex flex-col md:flex-row items-center gap-8 md:gap-12 ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
                            
                            <div className="md:w-1/2">
                                {category.image && (
                                    <Image 
                                        src={category.image.src}
                                        alt={category.name}
                                        width={600}
                                        height={400}
                                        className="rounded-lg shadow-xl object-cover aspect-video"
                                    />
                                )}
                            </div>
                            <div className="md:w-1/2">
                                <h2 className="text-3xl font-bold font-headline mb-4">{category.name}</h2>
                                <p className="text-muted-foreground mb-6">{category.description}</p>
                                <ul className="space-y-3 mb-8">
                                    {category.featuredItems.map((item, i) => (
                                        <li key={i} className="flex items-center">
                                            <CheckCircle className="h-5 w-5 text-primary mr-3" />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                                <Button asChild size="lg">
                                    <Link href={`/urunler/kategori/${category.slug}`}>
                                        {category.name} Keşfet <ArrowRight className="ml-2 h-5 w-5" />
                                    </Link>
                                </Button>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
}
