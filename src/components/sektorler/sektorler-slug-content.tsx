'use client';
import { sectors, products } from "@/lib/data";
import { findImage } from "@/lib/placeholder-images";
import { PlaceholderContent } from "@/components/placeholder-content";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AlertTriangle, Shield } from "lucide-react";
import { ProductCard } from "@/components/product-card";
import { motion } from "framer-motion";

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

export default function SektorlerSlugContent({ slug }: { slug: string }) {
    const sector = sectors.find(p => p.slug === slug);

    if (!sector) {
        return <PlaceholderContent title="Sektör Bulunamadı" description="Aradığınız sektör mevcut değil." />;
    }

    const image = findImage(sector.imageUrls[0]);
    const relatedProducts = products.filter(p => p.relatedSectors.includes(sector.slug));

    return (
        <>
            <motion.div 
                className="relative h-96"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
            >
                {image && (
                    <Image
                        src={image.imageUrl}
                        alt={sector.name}
                        fill
                        className="object-cover"
                        data-ai-hint={sector.imageHint}
                    />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent" />
                <motion.div 
                    className="absolute inset-0 flex items-end justify-center"
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
                >
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center text-white pb-12">
                        <h1 className="text-4xl font-bold font-headline">{sector.name}</h1>
                        <p className="mt-2 text-lg text-white/80 max-w-3xl mx-auto">Bu sektöre özel güvenlik ve verimlilik çözümlerimiz.</p>
                    </div>
                </motion.div>
            </motion.div>
            
            <motion.div 
                className="container mx-auto px-4 sm:px-6 lg:px-8 py-16"
                variants={sectionVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
            >
                <div className="max-w-4xl mx-auto">
                    <motion.div className="prose dark:prose-invert max-w-none mb-16" variants={itemVariants}>
                        <p className="text-lg lead text-muted-foreground">{sector.description}</p>
                    </motion.div>

                    <motion.div className="grid md:grid-cols-2 gap-8 mb-12" variants={sectionVariants}>
                        <motion.div variants={itemVariants}>
                            <Card className="bg-card h-full">
                                <CardHeader className="flex flex-row items-center gap-4">
                                    <AlertTriangle className="h-8 w-8 text-primary flex-shrink-0"/>
                                    <CardTitle className="font-headline text-xl">Sektörel Zorluklar</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-muted-foreground">{sector.challenges}</p>
                                </CardContent>
                            </Card>
                        </motion.div>
                        <motion.div variants={itemVariants}>
                            <Card className="bg-card h-full">
                                <CardHeader className="flex flex-row items-center gap-4">
                                    <Shield className="h-8 w-8 text-primary flex-shrink-0"/>
                                    <CardTitle className="font-headline text-xl">ADC Çözümleri</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <div className="prose-sm dark:prose-invert text-muted-foreground" dangerouslySetInnerHTML={{ __html: sector.solutionsContent }}/>
                                </CardContent>
                            </Card>
                        </motion.div>
                    </motion.div>
                    
                    {relatedProducts.length > 0 && (
                        <motion.div 
                            className="mt-20"
                            variants={sectionVariants}
                        >
                            <motion.h2 variants={itemVariants} className="text-3xl font-bold font-headline text-center mb-8">{sector.name} İçin Önerilen Ürünler</motion.h2>
                            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                                {relatedProducts.map(product => (
                                    <motion.div
                                        key={product.id}
                                        variants={itemVariants}
                                    >
                                        <ProductCard product={product} />
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    )}
                </div>
            </motion.div>
        </>
    );
}
