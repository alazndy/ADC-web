
'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Video, Monitor, CheckCircle, Construction, Bus, Warehouse, Tractor } from 'lucide-react';

import { findImage } from '@/lib/placeholder-images';
import { products } from '@/lib/data/products';
import { cameraMonitorSubcategories } from '@/lib/data/subcategories';

// Kategoriye özel ürünleri ve alt kategorileri filtrele
const categoryProducts = products.filter(p => p.category === 'Kamera Monitör Sistemleri');
const heavyDutyCameras = categoryProducts.filter(p => p.name.toLowerCase().includes('kamera'));
const monitorProducts = categoryProducts.filter(p => p.name.toLowerCase().includes('monitör'));

const cameraSubcategory = cameraMonitorSubcategories.find(sc => sc.slug === 'agir-hizmet-tipi-kameralar');
const monitorSubcategory = cameraMonitorSubcategories.find(sc => sc.slug === 'monitorler');

const usageAreas = [
    { name: 'İnşaat', icon: <Construction className="h-10 w-10 mb-2" /> },
    { name: 'Otobüs & Yolcu Taşıma', icon: <Bus className="h-10 w-10 mb-2" /> },
    { name: 'Lojistik & Depolama', icon: <Warehouse className="h-10 w-10 mb-2" /> },
    { name: 'Tarım', icon: <Tractor className="h-10 w-10 mb-2" /> },
];

export default function KameraMonitorSistemleriPage() {

    const heroImage = findImage('kamera-monitor');

    const fadeIn = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
    };

    return (
        <div className="bg-background text-foreground">
            {/* Hero Section */}
            <motion.section
                initial="hidden"
                animate="visible"
                variants={fadeIn}
                className="relative pt-20 pb-12 md:pt-32 md:pb-20 text-center bg-gray-50 dark:bg-gray-900/50"
            >
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <motion.h1 variants={fadeIn} className="text-4xl md:text-6xl font-bold font-headline text-primary mb-4">
                            Kamera Monitör Sistemleri
                        </motion.h1>
                        <motion.p variants={fadeIn} className="mt-4 text-lg md:text-xl text-muted-foreground">
                            Kör noktaları tamamen ortadan kaldırın, manevra kabiliyetinizi artırın ve operasyonel güvenliği en üst düzeye çıkarın. Profesyonel kamera ve monitör çözümlerimizle tanışın.
                        </motion.p>
                    </div>
                </div>
                 {heroImage && <Image src={heroImage.src} alt="Kamera Monitör Sistemleri" layout="fill" objectFit="cover" className="absolute top-0 left-0 w-full h-full opacity-5 z-0"/>}
            </motion.section>

            {/* Why Choose Section */}
            <section className="py-16 md:py-24">
                <div className="container mx-auto px-4">
                    <div className="text-center max-w-3xl mx-auto mb-12">
                         <h2 className="text-3xl font-bold font-headline">Neden Kamera Monitör Sistemleri?</h2>
                         <p className="mt-4 text-muted-foreground">
                            Araç çevresindeki görüş eksikliği, hem yayalar hem de çalışanlar için büyük bir risk oluşturur. Sistemlerimiz, bu riskleri en aza indirerek somut faydalar sağlar.
                         </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="text-center p-6 bg-secondary/50 rounded-lg">
                            <CheckCircle className="mx-auto h-12 w-12 text-primary mb-4"/>
                            <h3 className="text-xl font-semibold mb-2">Maksimum Güvenlik</h3>
                            <p className="text-muted-foreground">Ölümlü ve yaralanmalı kazaları, araç ve mülk hasarlarını önleyin.</p>
                        </div>
                         <div className="text-center p-6 bg-secondary/50 rounded-lg">
                            <CheckCircle className="mx-auto h-12 w-12 text-primary mb-4"/>
                            <h3 className="text-xl font-semibold mb-2">Operasyonel Verimlilik</h3>
                            <p className="text-muted-foreground">Daha hızlı ve daha güvenli manevralar ile zamandan tasarruf edin.</p>
                        </div>
                         <div className="text-center p-6 bg-secondary/50 rounded-lg">
                            <CheckCircle className="mx-auto h-12 w-12 text-primary mb-4"/>
                            <h3 className="text-xl font-semibold mb-2">Kanıt ve Koruma</h3>
                            <p className="text-muted-foreground">Sahte sigorta taleplerine karşı güçlü kanıtlar oluşturun.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Products Section with Tabs */}
            <section className="py-16 md:py-24 bg-secondary">
                <div className="container mx-auto px-4">
                    <Tabs defaultValue="kameralar" className="w-full">
                        <TabsList className="grid w-full grid-cols-2 max-w-lg mx-auto mb-12">
                            <TabsTrigger value="kameralar" className="py-3">
                                <Video className="mr-2 h-5 w-5"/> Ağır Hizmet Tipi Kameralar
                            </TabsTrigger>
                            <TabsTrigger value="monitorler" className="py-3">
                                <Monitor className="mr-2 h-5 w-5"/> Monitörler
                            </TabsTrigger>
                        </TabsList>

                        <TabsContent value="kameralar">
                            {cameraSubcategory && (
                                <div className="text-center max-w-3xl mx-auto mb-12">
                                    <h2 className="text-3xl font-bold font-headline">{cameraSubcategory.title}</h2>
                                    <p className="mt-4 text-muted-foreground">{cameraSubcategory.description}</p>
                                </div>
                            )}
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                                {heavyDutyCameras.map(product => (
                                    <ProductCard key={product.id} product={product} />
                                ))}
                            </div>
                        </TabsContent>

                        <TabsContent value="monitorler">
                            {monitorSubcategory && (
                                <div className="text-center max-w-3xl mx-auto mb-12">
                                    <h2 className="text-3xl font-bold font-headline">{monitorSubcategory.title}</h2>
                                    <p className="mt-4 text-muted-foreground">{monitorSubcategory.description}</p>
                                </div>
                            )}
                             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                                {monitorProducts.map(product => (
                                    <ProductCard key={product.id} product={product} />
                                ))}
                            </div>
                        </TabsContent>
                    </Tabs>
                </div>
            </section>
            
            {/* Usage Areas Section */}
             <section className="py-16 md:py-24">
                <div className="container mx-auto px-4">
                     <div className="text-center max-w-3xl mx-auto mb-12">
                         <h2 className="text-3xl font-bold font-headline">Yaygın Kullanım Alanları</h2>
                         <p className="mt-4 text-muted-foreground">
                            Kamera monitör sistemlerimiz, en zorlu koşullarda bile performans göstermek üzere tasarlanmıştır.
                         </p>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {usageAreas.map(area => (
                            <div key={area.name} className="flex flex-col items-center text-center p-4">
                                {area.icon}
                                <p className="font-semibold">{area.name}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-primary text-primary-foreground">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold mb-4">Projeniz İçin En Uygun Çözümü Birlikte Bulalım</h2>
                    <p className="max-w-2xl mx-auto mb-8">
                        Filo büyüklüğünüz veya operasyonel ihtiyaçlarınız ne olursa olsun, size özel bir güvenlik çözümü sunabiliriz.
                    </p>
                    <Button asChild size="lg" variant="secondary">
                        <Link href="/iletisim">
                            Teklif Alın <ArrowRight className="ml-2 h-5 w-5" />
                        </Link>
                    </Button>
                </div>
            </section>
        </div>
    );
}

// Product Card Component
function ProductCard({ product }: { product: typeof categoryProducts[0] }) {
    const productImage = findImage(product.imageUrls[0]);
    return (
        <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
            <Card className="h-full flex flex-col overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                    {productImage && (
                        <div className="aspect-video relative w-full mb-4">
                            <Image src={productImage.src} alt={product.name} layout="fill" objectFit="contain" />
                        </div>
                    )}
                    <CardTitle>{product.name}</CardTitle>
                    <CardDescription>{product.shortDescription}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                     <div className="flex flex-wrap gap-2">
                        {product.features.map(feature => (
                            <Badge key={feature} variant="secondary">{feature}</Badge>
                        ))}
                    </div>
                </CardContent>
                <CardFooter>
                    <Button asChild className="w-full">
                        <Link href={`/urunler/${product.slug}`}>
                            Detayları İncele <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                    </Button>
                </CardFooter>
            </Card>
        </motion.div>
    );
}
