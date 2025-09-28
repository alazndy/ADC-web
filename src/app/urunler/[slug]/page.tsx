'use client';
import { products, sectors } from "@/lib/data";
import { findImage } from "@/lib/placeholder-images";
import { PlaceholderContent } from "@/components/placeholder-content";
import Image from "next/image";
import Link from "next/link";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, FileText, Tag, Truck, Wrench } from "lucide-react";
import { motion } from "framer-motion";


export async function generateStaticParams() {
    return products.map((product) => ({
        slug: product.slug,
    }));
}

const sectionVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function UrunDetayPage({ params }: { params: { slug: string } }) {
    const product = products.find(p => p.slug === params.slug);

    if (!product) {
        return <PlaceholderContent title="Ürün Bulunamadı" description="Aradığınız ürün mevcut değil." />;
    }

    const relatedSectors = sectors.filter(s => product.relatedSectors.includes(s.slug));

    return (
       <>
        <motion.div 
            className="container mx-auto px-4 sm:px-6 lg:px-8 py-16"
            variants={sectionVariants}
            initial="hidden"
            animate="visible"
        >
            <div className="grid lg:grid-cols-2 gap-12">
                <motion.div variants={itemVariants}>
                     <Carousel className="w-full">
                        <CarouselContent>
                            {product.imageUrls.map((imgId, index) => {
                                const image = findImage(imgId);
                                return (
                                    <CarouselItem key={index}>
                                        <Card className="overflow-hidden bg-card">
                                            <CardContent className="p-0 aspect-square relative">
                                                {image && (
                                                    <Image
                                                        src={image.imageUrl}
                                                        alt={`${product.name} - ${index + 1}`}
                                                        fill
                                                        className="object-contain p-4"
                                                        data-ai-hint={image.imageHint}
                                                    />
                                                )}
                                            </CardContent>
                                        </Card>
                                    </CarouselItem>
                                )
                            })}
                        </CarouselContent>
                        <CarouselPrevious className="left-2 bg-background" />
                        <CarouselNext className="right-2 bg-background" />
                    </Carousel>
                </motion.div>
                <motion.div variants={itemVariants}>
                    <Badge variant="destructive" className="text-sm">{product.category}</Badge>
                    <h1 className="text-3xl md:text-4xl font-bold font-headline mt-2">{product.name}</h1>
                    {product.partNumber && <p className="text-sm text-muted-foreground mt-1">Parça No: {product.partNumber}</p>}
                    <p className="mt-4 text-lg text-muted-foreground">{product.shortDescription}</p>

                    <motion.div className="mt-8 border-t border-border pt-8" variants={itemVariants}>
                        <h2 className="text-2xl font-bold font-headline">Açıklama</h2>
                        <p className="mt-4 text-muted-foreground">{product.longDescription}</p>
                    </motion.div>

                    {product.features && product.features.length > 0 && (
                      <motion.div className="mt-8" variants={itemVariants}>
                         <h3 className="font-semibold text-lg mb-4">Özellikler</h3>
                         <ul className="space-y-3">
                             {product.features.map((feature, index) => (
                                 <li key={index} className="flex items-start gap-3">
                                     <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0"/>
                                     <span className="text-muted-foreground">{feature}</span>
                                 </li>
                             ))}
                         </ul>
                      </motion.div>
                    )}
                    
                    {product.specs && (
                      <motion.div className="mt-8" variants={itemVariants}>
                         <h3 className="font-semibold text-lg mb-4">Teknik Özellikler</h3>
                         <div className="grid grid-cols-2 gap-4 text-sm">
                            {Object.entries(product.specs).map(([key, value]) => (
                              <div key={key} className="bg-secondary/50 p-3 rounded-md">
                                <p className="font-semibold">{key}</p>
                                <p className="text-muted-foreground">{value}</p>
                              </div>
                            ))}
                         </div>
                      </motion.div>
                    )}

                    <motion.div className="mt-8 flex flex-wrap gap-4 items-center" variants={itemVariants}>
                        <Button size="lg" asChild>
                            <Link href="/randevu-al">Demo Talep Et</Link>
                        </Button>
                        {product.datasheetUrl && (
                            <Button size="lg" variant="outline" asChild>
                                <Link href={product.datasheetUrl} target="_blank">
                                    <FileText className="mr-2 h-4 w-4"/>
                                    Teknik Doküman
                                </Link>
                            </Button>
                        )}
                        {product.warranty && <Badge variant={"secondary"} className="text-sm">{product.warranty} Garanti</Badge>}
                    </motion.div>

                    {product.notes && (
                      <motion.p className="text-xs text-muted-foreground mt-4" variants={itemVariants}>{product.notes}</motion.p>
                    )}
                </motion.div>
            </div>
        </motion.div>

        <motion.div 
            className="container mx-auto px-4 sm:px-6 lg:px-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={sectionVariants}
        >
            {product.technicalDrawingUrl && (
              <div className="py-16">
                <h2 className="text-3xl font-bold font-headline text-center mb-8">Teknik Çizim</h2>
                <Card className="overflow-hidden bg-card">
                  <CardContent className="p-2">
                    <div className="aspect-[4/3] w-full max-w-4xl mx-auto">
                        <iframe src={product.technicalDrawingUrl} width="100%" height="100%" className="bg-white rounded" />
                    </div>
                  </CardContent>
                </Card>
              </div>
            )}

            {relatedSectors.length > 0 && (
                 <div className="py-16">
                    <h2 className="text-3xl font-bold font-headline text-center mb-8">İlgili Sektörler</h2>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {relatedSectors.map(sector => {
                            const image = findImage(sector.imageUrls[0])
                            return (
                                <Link key={sector.id} href={`/sektorler/${sector.slug}`}>
                                    <Card className="overflow-hidden group h-full bg-card">
                                        <CardContent className="relative aspect-[4/3] flex flex-col items-center justify-end p-4">
                                        {image && (
                                            <Image
                                            src={image.imageUrl}
                                            alt={sector.name}
                                            fill
                                            className="object-cover group-hover:scale-105 transition-transform duration-300"
                                            data-ai-hint={image.imageHint}
                                            />
                                        )}
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                                        <h3 className="relative text-center font-semibold text-white z-10">
                                            {sector.name}
                                        </h3>
                                        </CardContent>
                                    </Card>
                                </Link>
                            )
                        })}
                    </div>
                </div>
            )}
        </motion.div>
       </>
    );
}
