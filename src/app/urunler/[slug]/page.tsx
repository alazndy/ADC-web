import { mockProducts, mockSectors } from "@/lib/mock-data";
import { findImage } from "@/lib/placeholder-images";
import { PlaceholderContent } from "@/components/placeholder-content";
import Image from "next/image";
import Link from "next/link";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, FileText } from "lucide-react";


export async function generateStaticParams() {
    return mockProducts.map((product) => ({
        slug: product.slug,
    }));
}

export default function UrunDetayPage({ params }: { params: { slug: string } }) {
    const product = mockProducts.find(p => p.slug === params.slug);

    if (!product) {
        return <PlaceholderContent title="Ürün Bulunamadı" description="Aradığınız ürün mevcut değil." />;
    }

    const relatedSectors = mockSectors.filter(s => product.relatedSectors.includes(s.slug));

    return (
       <>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="grid lg:grid-cols-2 gap-12">
                <div>
                     <Carousel>
                        <CarouselContent>
                            {product.imageUrls.map((imgId, index) => {
                                const image = findImage(imgId);
                                return (
                                    <CarouselItem key={index}>
                                        <Card className="overflow-hidden">
                                            <CardContent className="p-0 aspect-square relative">
                                                {image && (
                                                    <Image
                                                        src={image.imageUrl}
                                                        alt={`${product.name} - ${index + 1}`}
                                                        fill
                                                        className="object-contain"
                                                        data-ai-hint={image.imageHint}
                                                    />
                                                )}
                                            </CardContent>
                                        </Card>
                                    </CarouselItem>
                                )
                            })}
                        </CarouselContent>
                        <CarouselPrevious className="left-2" />
                        <CarouselNext className="right-2" />
                    </Carousel>
                </div>
                <div>
                    <Badge variant="secondary">{product.category}</Badge>
                    <h1 className="text-3xl md:text-4xl font-bold font-headline mt-2">{product.name}</h1>
                    <p className="mt-4 text-lg text-muted-foreground">{product.shortDescription}</p>

                    <div className="mt-8 border-t pt-8">
                        <h2 className="text-2xl font-bold font-headline">Açıklama</h2>
                        <p className="mt-4 text-muted-foreground">{product.longDescription}</p>
                    </div>

                    <div className="mt-8">
                         <h3 className="font-semibold text-lg mb-4">Özellikler</h3>
                         <ul className="space-y-3">
                             {product.features.map((feature, index) => (
                                 <li key={index} className="flex items-start gap-3">
                                     <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0"/>
                                     <span className="text-muted-foreground">{feature}</span>
                                 </li>
                             ))}
                         </ul>
                    </div>

                    <div className="mt-8 flex flex-wrap gap-4">
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
                    </div>
                </div>
            </div>

            {relatedSectors.length > 0 && (
                 <div className="mt-24">
                    <h2 className="text-3xl font-bold font-headline text-center mb-8">İlgili Sektörler</h2>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {relatedSectors.map(sector => {
                            const image = findImage(sector.imageUrl)
                            return (
                                <Link key={sector.id} href={`/sektorler/${sector.slug}`}>
                                    <Card className="overflow-hidden group h-full">
                                        <CardContent className="relative aspect-square flex flex-col items-center justify-end p-4">
                                        {image && (
                                            <Image
                                            src={image.imageUrl}
                                            alt={sector.name}
                                            fill
                                            className="object-cover group-hover:scale-105 transition-transform duration-300"
                                            data-ai-hint={image.imageHint}
                                            />
                                        )}
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
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
        </div>
       </>
    );
}