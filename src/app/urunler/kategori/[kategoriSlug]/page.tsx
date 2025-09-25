import { mockProducts, mockSectors } from '@/lib/mock-data';
import { ProductCard } from '@/components/product-card';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ChevronLeft } from 'lucide-react';
import { PlaceholderContent } from '@/components/placeholder-content';

const allCategories = [...new Set(mockProducts.map(p => p.category))].sort();
const categoryToSlug = (categoryName: string) => {
  return categoryName.toLowerCase()
    .replace(/ /g, '-')
    .replace(/[^\w-]+/g, '');
};
const slugToCategory = (slug: string) => {
    return allCategories.find(cat => categoryToSlug(cat) === slug);
}


export async function generateStaticParams() {
    return allCategories.map((category) => ({
        kategoriSlug: categoryToSlug(category),
    }));
}

export default function UrunKategoriPage({ params }: { params: { kategoriSlug: string } }) {
  const categoryName = slugToCategory(params.kategoriSlug);

  if (!categoryName) {
      return <PlaceholderContent title="Kategori Bulunamadı" description="Aradığınız ürün kategorisi mevcut değil." />
  }
  
  const products = mockProducts.filter(p => p.category === categoryName);

  return (
    <>
      <div className="bg-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <Button asChild variant="ghost" className="mb-4">
            <Link href="/urunler">
                <ChevronLeft className="mr-2 h-4 w-4" />
                Tüm Kategoriler
            </Link>
          </Button>
          <h1 className="text-4xl font-bold font-headline">{categoryName}</h1>
          <p className="mt-2 text-lg text-muted-foreground max-w-3xl mx-auto">
            Bu kategoriye ait tüm ürünlerimizi aşağıda bulabilirsiniz.
          </p>
        </div>
      </div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <main>
            <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-6">
              {products.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
        </main>
      </div>
    </>
  );
}
