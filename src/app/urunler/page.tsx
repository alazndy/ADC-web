'use client';

import Link from "next/link";
import Image from "next/image";
import { findImage } from "@/lib/placeholder-images";
import { ArrowRight, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Autoplay from "embla-carousel-autoplay";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
// CORRECTED IMPORT: Now that `index.ts` is fixed, we can use the central export path.
import { productCategoryDetails } from '@/lib/data'; 
import { motion } from "framer-motion";

const productCategoriesForPage = productCategoryDetails.map(cat => ({
    ...cat,
    image: findImage(cat.imagePlaceholder)
}));

const cameraMonitorImages = [
    "https://firebasestorage.googleapis.com/v0/b/adc-web-473522.firebasestorage.app/o/Product_Images%2F1744390955wpdm_Essential-AHD-CMS-Kit.jpg?alt=media&token=49f797d3-c3d3-4350-8470-68706a0db52b",
    "https://firebasestorage.googleapis.com/v0/b/adc-web-473522.firebasestorage.app/o/Product_Images%2F1744390933wpdm_BE-870L-000.jpg?alt=media&token=753e3d05-e7d5-4f69-83d4-bc4f37d812ab",
    "https://firebasestorage.googleapis.com/v0/b/adc-web-473522.firebasestorage.app/o/Product_Images%2FVBV-770HM-.jpg?alt=media&token=a7a6b300-2742-427d-bc3a-3589163e5f83",
    "https://firebasestorage.googleapis.com/v0/b/adc-web-473522.firebasestorage.app/o/Product_Images%2FVBV-7104FM.jpg?alt=media&token=cce6b963-5d4b-436e-837d-f659616517a4",
    "https://firebasestorage.googleapis.com/v0/b/adc-web-473522.firebasestorage.app/o/Product_Images%2FVBV-7100C.jpg?alt=media&token=54810b27-33c0-4a37-87e1-cb5acc6e41de",
    "https://firebasestorage.googleapis.com/v0/b/adc-web-473522.firebasestorage.app/o/Product_Images%2FIP-1100C.jpg?alt=media&token=e3cded15-0f05-41b9-99d7-3c67a2402545",
    "https://firebasestorage.googleapis.com/v0/b/adc-web-473522.firebasestorage.app/o/Product_Images%2FBN360-300-Kit.jpg?alt=media&token=60ba59d4-ce58-4be6-9e3b-cb291efdd62b",
    "https://firebasestorage.googleapis.com/v0/b/adc-web-473522.firebasestorage.app/o/Product_Images%2F360-View-on-Monitor.jpg?alt=media&token=7c1c6232-7b12-4a19-9a11-fc15250e3c06",
    "https://firebasestorage.googleapis.com/v0/b/adc-web-473522.firebasestorage.app/o/Product_Images%2FVBV-360-1000-Kit.jpg?alt=media&token=2e77e497-cdc4-481f-9dbe-cd4488d2e6d3"
];

const detectionSystemImages = [
    "https://firebasestorage.googleapis.com/v0/b/adc-web-473522.firebasestorage.app/o/Product_Images%2FRadar-Predict-Kit-LHD.png?alt=media&token=6fc35dca-8af2-4263-aa97-ce7ed8d7c8d8",
    "https://firebasestorage.googleapis.com/v0/b/adc-web-473522.firebasestorage.app/o/Product_Images%2FSidescan-kit.jpg?alt=media&token=e5a77eac-b80f-4b7c-bc6d-e8667057c791",
    "https://firebasestorage.googleapis.com/v0/b/adc-web-473522.firebasestorage.app/o/Product_Images%2FTag-tester.jpg?alt=media&token=6b617d46-7e2f-4856-9959-5d1dfedf7da2",
    "https://firebasestorage.googleapis.com/v0/b/adc-web-473522.firebasestorage.app/o/Product_Images%2FUltrasonic-sensor-2.jpg?alt=media&token=cf3aedc0-7249-46d1-b5e5-c587a7d95dad",
    "https://firebasestorage.googleapis.com/v0/b/adc-web-473522.firebasestorage.app/o/Product_Images%2FZoneSafe-Complete-System-Antenna-Control-Unit-Tags.jpg?alt=media&token=5d967b1c-667a-4297-9cbd-9e00acab1cac"
];

const recordingSystemImages = [
    "https://firebasestorage.googleapis.com/v0/b/adc-web-473522.firebasestorage.app/o/Product_Images%2Fmdr-644.png?alt=media&token=378a17a2-3b08-4cbc-b077-a248358d86bd",
    "https://firebasestorage.googleapis.com/v0/b/adc-web-473522.firebasestorage.app/o/Product_Images%2FMDR-500-MCU.jpg?alt=media&token=9594c6c9-ee45-434c-afc6-86727f3647ae",
    "https://firebasestorage.googleapis.com/v0/b/adc-web-473522.firebasestorage.app/o/Product_Images%2FMDR-641.jpg?alt=media&token=d326f031-ab84-46fc-a6d4-74449e7a02c5",
    "https://firebasestorage.googleapis.com/v0/b/adc-web-473522.firebasestorage.app/o/Product_Images%2FDC-204-AI.png?alt=media&token=d637d22f-12e5-4d0a-84bd-0b6c9aac19c0",
    "https://firebasestorage.googleapis.com/v0/b/adc-web-473522.firebasestorage.app/o/Product_Images%2Fai-connected-dashcam-dashboard.png.png?alt=media&token=13257240-818d-48d3-ba69-e0cac9647097",
    "https://firebasestorage.googleapis.com/v0/b/adc-web-473522.firebasestorage.app/o/Product_Images%2FDC-102.jpg?alt=media&token=eefebb6d-5bd3-4aea-943d-727a90396afc",
    "https://firebasestorage.googleapis.com/v0/b/adc-web-473522.firebasestorage.app/o/Product_Images%2FDC-102-IRC.jpg?alt=media&token=008f5f1a-dc7e-4b2e-bdfa-59dc50d48982"
];

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
                                {category.slug === 'kamera-monitor-sistemleri' ? (
                                    <Carousel className="w-full" plugins={[Autoplay({delay: 3000,})]}>
                                        <CarouselContent>
                                            {cameraMonitorImages.map((imageUrl, index) => (
                                                <CarouselItem key={index} className="relative aspect-video">
                                                    <Image
                                                        src={imageUrl}
                                                        alt={`Kamera Monitör Sistemleri ${index + 1}`}
                                                        layout="fill"
                                                        className="rounded-lg shadow-xl object-contain"
                                                    />
                                                </CarouselItem>
                                            ))}
                                        </CarouselContent>
                                        <CarouselPrevious />
                                        <CarouselNext />
                                    </Carousel>
                                ) : category.slug === 'tespit-sistemleri' ? (
                                    <Carousel className="w-full" plugins={[Autoplay({delay: 3000,})]}>
                                        <CarouselContent>
                                            {detectionSystemImages.map((imageUrl, index) => (
                                                <CarouselItem key={index} className="relative aspect-video">
                                                    <Image
                                                        src={imageUrl}
                                                        alt={`Tespit Sistemleri ${index + 1}`}
                                                        layout="fill"
                                                        className="rounded-lg shadow-xl object-contain"
                                                    />
                                                </CarouselItem>
                                            ))}
                                        </CarouselContent>
                                        <CarouselPrevious />
                                        <CarouselNext />
                                    </Carousel>
                                ) : category.slug === 'kayit-sistemleri' ? (
                                    <Carousel className="w-full" plugins={[Autoplay({delay: 3000,})]}>
                                        <CarouselContent>
                                            {recordingSystemImages.map((imageUrl, index) => (
                                                <CarouselItem key={index} className="relative aspect-video">
                                                    <Image
                                                        src={imageUrl}
                                                        alt={`Kayıt Sistemleri ${index + 1}`}
                                                        layout="fill"
                                                        className="rounded-lg shadow-xl object-contain"
                                                    />
                                                </CarouselItem>
                                            ))}
                                        </CarouselContent>
                                        <CarouselPrevious />
                                        <CarouselNext />
                                    </Carousel>
                                ) : (
                                    category.image && (
                                        <Image 
                                            src={category.image.imageUrl}
                                            alt={category.name}
                                            width={600}
                                            height={400}
                                            className="rounded-lg shadow-xl object-cover aspect-video"
                                        />
                                    )
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