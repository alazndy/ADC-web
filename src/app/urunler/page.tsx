import { mockProducts } from '@/lib/mock-data';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';
import { findImage } from '@/lib/placeholder-images';
import Image from 'next/image';

const categories = [...new Set(mockProducts.map(p => p.category))].sort();

// Helper to create a URL-friendly slug from a category name
const categoryToSlug = (categoryName: string) => {
  return categoryName.toLowerCase()
    .replace(/ /g, '-')
    .replace(/[^\w-]+/g, '');
};

// Find a representative product for each category to display an image
const getCategoryImage = (category: string) => {
    const productInCategory = mockProducts.find(p => p.category === category);
    if (productInCategory) {
        return findImage(productInCategory.imageUrls[0]);
    }
    return findImage('placeholder-1'); // Fallback image
}


export default function UrunlerPage() {
  return (
    <>
      <div className="bg-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h1 className="text-4xl font-bold font-headline">Ürün Kategorileri</h1>
          <p className="mt-2 text-lg text-muted-foreground max-w-3xl mx-auto">
            Operasyonel mükemmellik için tasarlanmış Brigade Electronics güvenlik ve verimlilik ürünlerimizi kategorilere ayrılmış olarak keşfedin.
          </p>
        </div>
      </div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map(category => {
                const image = getCategoryImage(category);
                return (
                    <Link key={category} href={`/urunler/kategori/${categoryToSlug(category)}`} className="group">
                         <Card className="h-full flex flex-col overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                            <CardHeader className='p-0'>
                                {image && (
                                <div className="relative aspect-video">
                                    <Image
                                        src={image.imageUrl}
                                        alt={category}
                                        fill
                                        className="object-contain p-4 transition-transform duration-300 group-hover:scale-105"
                                        data-ai-hint={image.imageHint || "product category"}
                                    />
                                     <div className="absolute inset-0 bg-gradient-to-t from-black/5 via-transparent to-white/5 dark:from-black/10 dark:to-white/5" />
                                </div>
                                )}
                            </CardHeader>
                            <CardContent className="p-6 flex-grow flex items-center justify-between">
                                <h2 className="text-xl font-bold font-headline">{category}</h2>
                                <ArrowRight className="h-6 w-6 text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300 -translate-x-4 group-hover:translate-x-0" />
                            </CardContent>
                        </Card>
                    </Link>
                )
            })}
        </div>
      </div>
    </>
  );
}
