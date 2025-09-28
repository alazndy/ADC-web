'use client';
import { projects, products, sectors } from "@/lib/data";
import { findImage } from "@/lib/placeholder-images";
import Image from "next/image";
import Link from "next/link";
import { PlaceholderContent } from "@/components/placeholder-content";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, AlertTriangle, Shield, TrendingUp } from "lucide-react";
import { ProductCard } from "@/components/product-card";
import { motion } from "framer-motion";


export async function generateStaticParams() {
    return projects.map((project) => ({
        slug: project.slug,
    }));
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

export default function ProjeDetayPage({ params }: { params: { slug: string } }) {
    const project = projects.find(p => p.slug === params.slug);

    if (!project) {
        return <PlaceholderContent title="Proje Bulunamadı" description="Aradığınız proje mevcut değil." />;
    }

    const image = findImage(project.coverImage);
    const relatedProducts = products.filter(p => project.usedProducts.includes(p.slug));
    const sector = sectors.find(s => s.slug === project.sector);

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
                        alt={project.title}
                        fill
                        className="object-cover"
                        data-ai-hint={project.imageHint}
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
                        {sector && <Badge variant="destructive" className="mb-4 text-base">{sector.name}</Badge>}
                        <h1 className="text-4xl font-bold font-headline">{project.title}</h1>
                        {project.clientName && <p className="mt-2 text-lg text-white/80">Müşteri: {project.clientName}</p>}
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
                    <motion.div className="grid md:grid-cols-3 gap-8 text-center mb-16" variants={sectionVariants}>
                        <motion.div variants={itemVariants}>
                          <Card className="bg-card h-full">
                              <CardHeader>
                                  <AlertTriangle className="mx-auto h-10 w-10 text-primary"/>
                                  <CardTitle className="font-headline text-xl mt-2">Zorluk</CardTitle>
                              </CardHeader>
                              <CardContent>
                                  <p className="text-muted-foreground">{project.challenge}</p>
                              </CardContent>
                          </Card>
                        </motion.div>
                        <motion.div variants={itemVariants}>
                          <Card className="bg-card h-full">
                              <CardHeader>
                                  <Shield className="mx-auto h-10 w-10 text-primary"/>
                                  <CardTitle className="font-headline text-xl mt-2">Çözüm</CardTitle>
                              </CardHeader>
                              <CardContent>
                                  <p className="text-muted-foreground">{project.solution}</p>
                              </CardContent>
                          </Card>
                        </motion.div>
                        <motion.div variants={itemVariants}>
                           <Card className="bg-card h-full">
                              <CardHeader>
                                  <TrendingUp className="mx-auto h-10 w-10 text-green-500"/>
                                  <CardTitle className="font-headline text-xl mt-2">Sonuç</CardTitle>
                              </CardHeader>
                              <CardContent>
                                  <p className="font-semibold text-lg">{project.result}</p>
                              </CardContent>
                          </Card>
                        </motion.div>
                    </motion.div>

                    {relatedProducts.length > 0 && (
                        <motion.div 
                          className="mt-16"
                          variants={sectionVariants}
                        >
                            <motion.h2 variants={itemVariants} className="text-3xl font-bold font-headline text-center mb-8">Projede Kullanılan Ürünler</motion.h2>
                             <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                                {relatedProducts.map((product, i) => (
                                    <motion.div 
                                        key={product.id} 
                                        custom={i}
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
