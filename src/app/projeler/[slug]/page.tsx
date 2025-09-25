import { mockProjects, mockProducts } from "@/lib/mock-data";
import { findImage } from "@/lib/placeholder-images";
import Image from "next/image";
import Link from "next/link";
import { PlaceholderContent } from "@/components/placeholder-content";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, AlertTriangle, Shield, TrendingUp } from "lucide-react";
import { ProductCard } from "@/components/product-card";


export async function generateStaticParams() {
    return mockProjects.map((project) => ({
        slug: project.slug,
    }));
}

export default function ProjeDetayPage({ params }: { params: { slug: string } }) {
    const project = mockProjects.find(p => p.slug === params.slug);

    if (!project) {
        return <PlaceholderContent title="Proje Bulunamadı" description="Aradığınız proje mevcut değil." />;
    }

    const image = findImage(project.coverImage);
    const relatedProducts = mockProducts.filter(p => project.usedProducts.includes(p.slug));

    return (
        <>
            <div className="relative h-96">
                {image && (
                    <Image 
                        src={image.imageUrl}
                        alt={project.title}
                        fill
                        className="object-cover"
                        data-ai-hint={project.imageHint}
                    />
                )}
                <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
                        <Badge variant="destructive" className="mb-4 text-base">{mockSectors.find(s => s.slug === project.sector)?.name}</Badge>
                        <h1 className="text-4xl font-bold font-headline">{project.title}</h1>
                        {project.clientName && <p className="mt-2 text-lg text-white/80">Müşteri: {project.clientName}</p>}
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="max-w-4xl mx-auto">
                    <div className="grid md:grid-cols-3 gap-8 text-center mb-16">
                        <Card className="bg-white/5 border-white/10">
                            <CardHeader>
                                <AlertTriangle className="mx-auto h-10 w-10 text-red-500"/>
                                <CardTitle className="font-headline text-xl mt-2 text-white">Zorluk</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-white/70">{project.challenge}</p>
                            </CardContent>
                        </Card>
                        <Card className="bg-white/5 border-white/10">
                            <CardHeader>
                                <Shield className="mx-auto h-10 w-10 text-red-500"/>
                                <CardTitle className="font-headline text-xl mt-2 text-white">Çözüm</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-white/70">{project.solution}</p>
                            </CardContent>
                        </Card>
                         <Card className="bg-white/5 border-white/10">
                            <CardHeader>
                                <TrendingUp className="mx-auto h-10 w-10 text-green-500"/>
                                <CardTitle className="font-headline text-xl mt-2 text-white">Sonuç</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="font-semibold text-lg text-white">{project.result}</p>
                            </CardContent>
                        </Card>
                    </div>

                    {relatedProducts.length > 0 && (
                        <div className="mt-16">
                            <h2 className="text-3xl font-bold font-headline text-center mb-8 text-white">Projede Kullanılan Ürünler</h2>
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
