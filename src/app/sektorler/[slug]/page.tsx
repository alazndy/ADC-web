import { mockSectors, mockProducts } from "@/lib/mock-data";
import { findImage } from "@/lib/placeholder-images";
import { PlaceholderContent } from "@/components/placeholder-content";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AlertTriangle, Shield } from "lucide-react";
import { ProductCard } from "@/components/product-card";

export async function generateStaticParams() {
    return mockSectors.map((sector) => ({
        slug: sector.slug,
    }));
}

export default function SektorDetayPage({ params }: { params: { slug:string } }) {
    const sector = mockSectors.find(p => p.slug === params.slug);

    if (!sector) {
        return <PlaceholderContent title="Sektör Bulunamadı" description="Aradığınız sektör mevcut değil." />;
    }

    const image = findImage(sector.imageUrl);
    const relatedProducts = mockProducts.filter(p => p.relatedSectors.includes(sector.slug));

    return (
        <>
            <div className="relative h-96">
                {image && (
                    <Image
                        src={image.imageUrl}
                        alt={sector.name}
                        fill
                        className="object-cover"
                        data-ai-hint={sector.imageHint}
                    />
                )}
                <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
                        <h1 className="text-4xl font-bold font-headline">{sector.name}</h1>
                        <p className="mt-2 text-lg text-white/80 max-w-3xl mx-auto">Bu sektöre özel güvenlik ve verimlilik çözümlerimiz.</p>
                    </div>
                </div>
            </div>
            
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="max-w-4xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-8 mb-12">
                        <Card className="border-l-4 border-destructive">
                             <CardHeader className="flex flex-row items-center gap-4">
                                <AlertTriangle className="h-8 w-8 text-destructive flex-shrink-0"/>
                                <CardTitle className="font-headline text-xl">Sektörel Zorluklar</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-muted-foreground">{sector.challenges}</p>
                            </CardContent>
                        </Card>
                        <Card className="border-l-4 border-primary">
                             <CardHeader className="flex flex-row items-center gap-4">
                                <Shield className="h-8 w-8 text-primary flex-shrink-0"/>
                                <CardTitle className="font-headline text-xl">ADC Çözümleri</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="text-muted-foreground" dangerouslySetInnerHTML={{ __html: sector.solutionsContent }}/>
                            </CardContent>
                        </Card>
                    </div>
                    
                    {relatedProducts.length > 0 && (
                        <div className="mt-20">
                            <h2 className="text-3xl font-bold font-headline text-center mb-8">{sector.name} İçin Önerilen Ürünler</h2>
                            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                                {relatedProducts.map(product => (
                                    <ProductCard key={product.id} product={product} />
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
}