
import { products } from '@/lib/data';
import { getAllSubCategoryParams, slugToSubCategory, slugToCategory } from '@/lib/product-categories';
import { ProductCard } from '@/components/product-card';
import { Breadcrumbs } from '@/components/breadcrumbs';
import { CheckCircle } from 'lucide-react';
import Image from 'next/image';
import { findImage } from '@/lib/placeholder-images';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { notFound } from 'next/navigation';

// Pre-build all sub-category pages for performance and SEO
export function generateStaticParams() {
  return getAllSubCategoryParams();
}

interface AltKategoriPageProps {
    params: {
        kategoriSlug: string;
        altKategoriSlug: string;
    }
}

export default function AltKategoriPage({ params }: AltKategoriPageProps) {
    const { kategoriSlug, altKategoriSlug } = params;

    // Fetch category and sub-category data
    const subCategory = slugToSubCategory(kategoriSlug, altKategoriSlug);
    const categoryName = slugToCategory(kategoriSlug);

    // If data not found, show 404 page
    if (!subCategory || !categoryName) {
        notFound();
    }

    // Filter products for this sub-category
    const filteredProducts = products.filter(p => p.subCategorySlug === altKategoriSlug);
    const heroImage = findImage(subCategory.image) || findImage('placeholder-1');

    return (
        <div className="bg-background text-foreground">
            {/* Breadcrumbs */}
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <Breadcrumbs crumbs={[
                    { name: 'Ürünler', href: '/urunler' },
                    { name: categoryName, href: `/urunler/kategori/${kategoriSlug}` },
                    { name: subCategory.title, href: `/urunler/kategori/${kategoriSlug}/${altKategoriSlug}` }
                ]} />
            </div>

            {/* Hero Section */}
            <div className="relative bg-gray-100 dark:bg-gray-800 text-foreground overflow-hidden mb-16 py-12 md:py-20">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold font-headline">{subCategory.title}</h1>
                    <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">{subCategory.description}</p>
                </div>
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8">

                {/* Features Section (if they exist) */}
                {subCategory.features && subCategory.features.length > 0 && (
                    <div className="mb-16 bg-card border rounded-lg p-8">
                         <h2 className="text-2xl font-bold font-headline mb-6 text-center">Temel Özellikler</h2>
                        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
                            {subCategory.features?.map((feature, index) => (
                                <li key={index} className="flex items-start">
                                    <CheckCircle className="h-6 w-6 text-primary mr-3 mt-1 flex-shrink-0" />
                                    <span>{feature}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}

                {/* Products Section */}
                <div>
                    <h2 className="text-3xl font-bold font-headline text-center mb-12">Bu Ailedeki Ürünler</h2>
                    {filteredProducts.length > 0 ? (
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                            {filteredProducts.map(product => (
                                <ProductCard key={product.id} product={product} />
                            ))}
                        </div>
                    ) : (
                        <div className="text-center py-16 border-2 border-dashed rounded-lg bg-card">
                            <p className="text-muted-foreground">Bu ürün ailesine ait ürünler yakında eklenecektir.</p>
                            <Button asChild className="mt-6">
                                <Link href="/urunler">Tüm Ürünlere Göz Atın</Link>
                            </Button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
