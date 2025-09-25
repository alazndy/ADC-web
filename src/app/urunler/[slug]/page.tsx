import { mockProducts, mockSectors } from "@/lib/mock-data";
import { findImage } from "@/lib/placeholder-images";
import { PlaceholderContent } from "@/components/placeholder-content";
import Image from "next/image";
import Link from "next/link";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, FileText, Tag, Truck } from "lucide-react";


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
                     <Carousel className="w-full">
                        <CarouselContent>
                            {product.imageUrls.map((imgId, index) => {
                                const image = findImage(imgId);
                                return (
                                    <CarouselItem key={index}>
                                        <Card className="overflow-hidden bg-white/5">
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
                        <CarouselPrevious className="left-2" />
                        <CarouselNext className="right-2" />
                    </Carousel>
                </div>
                <div>
                    <Badge variant="destructive" className="text-sm">{product.category}</Badge>
                    <h1 className="text-3xl md:text-4xl font-bold font-headline mt-2">{product.name}</h1>
                    {product.partNumber && <p className="text-sm text-white/50 mt-1">Parça No: {product.partNumber}</p>}
                    <p className="mt-4 text-lg text-white/80">{product.shortDescription}</p>

                    <div className="mt-8 border-t border-white/10 pt-8">
                        <h2 className="text-2xl font-bold font-headline">Açıklama</h2>
                        <p className="mt-4 text-white/70">{product.longDescription}</p>
                    </div>

                    {product.features && product.features.length > 0 && (
                      <div className="mt-8">
                         <h3 className="font-semibold text-lg mb-4">Özellikler</h3>
                         <ul className="space-y-3">
                             {product.features.map((feature, index) => (
                                 <li key={index} className="flex items-start gap-3">
                                     <CheckCircle className="h-5 w-5 text-red-500 mt-1 flex-shrink-0"/>
                                     <span className="text-white/80">{feature}</span>
                                 </li>
                             ))}
                         </ul>
                      </div>
                    )}
                    
                    {product.specs && (
                      <div className="mt-8">
                         <h3 className="font-semibold text-lg mb-4">Teknik Özellikler</h3>
                         <div className="grid grid-cols-2 gap-4 text-sm">
                            {Object.entries(product.specs).map(([key, value]) => (
                              <div key={key} className="bg-white/5 p-3 rounded-md">
                                <p className="font-semibold text-white/90">{key}</p>
                                <p className="text-white/70">{value}</p>
                              </div>
                            ))}
                         </div>
                      </div>
                    )}

                    <div className="mt-8 flex flex-wrap gap-4 items-center">
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
                    </div>

                    {product.notes && (
                      <p className="text-xs text-white/50 mt-4">{product.notes}</p>
                    )}
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
                                    <Card className="overflow-hidden group h-full bg-white/5 border-white/10">
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
        </div>
       </>
    );
}
