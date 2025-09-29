
import { projects } from '@/lib/data/projects';
import { products } from '@/lib/data';
import { notFound } from 'next/navigation';
import { findImage } from '@/lib/placeholder-images';
import Image from 'next/image';
import Link from 'next/link';
import { ProductCard } from '@/components/product-card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function KayitSistemleriPage() {
    const projectSlug = 'demo-mdr-ai-dashcam';
    const project = projects.find(p => p.slug === projectSlug);

    if (!project) {
        notFound();
    }

    const coverImage = findImage(project.coverImage);
    const usedProductsList = products.filter(p => project.usedProducts.includes(p.id));

    return (
        <div className="bg-background text-foreground">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
                
                {/* Navigation Header */}
                <div className="mb-8 flex items-center justify-between">
                    <Link href="/cozumler" className="text-sm text-muted-foreground hover:text-primary flex items-center">
                         <ArrowLeft className="h-4 w-4 mr-1" />
                        Tüm Çözümlere Geri Dön
                    </Link>
                    <Badge variant="secondary">{project.sector}</Badge>
                </div>

                {/* Project Title */}
                <h1 className="text-3xl md:text-5xl font-bold font-headline text-center mb-8 md:mb-12">
                    {project.title}
                </h1>

                {/* Cover Image */}
                <div className="mb-12 md:mb-16">
                    {coverImage && (
                        <Image 
                            src={coverImage.src}
                            alt={project.title}
                            width={1200}
                            height={600}
                            className="rounded-lg shadow-xl object-cover aspect-video mx-auto"
                        />
                    )}
                </div>

                {/* Project Details Grid */}
                <div className="grid md:grid-cols-2 gap-12 md:gap-16 mb-16">
                    <div className="bg-card p-6 rounded-lg border">
                        <h2 className="text-2xl font-semibold font-headline mb-4 text-primary">Zorluk</h2>
                        <p className="text-muted-foreground text-lg leading-relaxed">{project.challenge}</p>
                    </div>
                    <div className="bg-card p-6 rounded-lg border">
                        <h2 className="text-2xl font-semibold font-headline mb-4 text-primary">Çözüm</h2>
                        <p className="text-muted-foreground text-lg leading-relaxed">{project.solution}</p>
                    </div>
                </div>

                {/* Result Section */}
                <div className="bg-primary/5 border border-primary/20 rounded-lg p-8 md:p-12 text-center mb-16">
                     <h2 className="text-2xl md:text-3xl font-bold font-headline mb-4">Sonuç</h2>
                     <p className="text-lg md:text-xl text-primary-foreground/90 max-w-4xl mx-auto">{project.result}</p>
                </div>

                {/* Used Products Section */}
                {usedProductsList.length > 0 && (
                    <div>
                        <h2 className="text-3xl font-bold font-headline text-center mb-10">Bu Çözümde Kullanılan Ürünler</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
                            {usedProductsList.map(product => (
                                <ProductCard key={product.id} product={product} />
                            ))}
                        </div>
                    </div>
                )}
                 <div className="text-center mt-16">
                    <Button size="lg" asChild>
                         <Link href="/iletisim">Daha Fazla Bilgi ve Demo İçin İletişime Geçin <ArrowRight className="ml-2 h-5 w-5" /></Link>
                    </Button>
                </div>
            </div>
        </div>
    );
}
