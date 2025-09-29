
import { products } from '@/lib/data';
import { cameraMonitorSubCategories } from '@/lib/data/subcategories';
import { ProductCard } from '@/components/product-card';
import { Breadcrumbs } from '@/components/breadcrumbs';
import { CheckCircle } from 'lucide-react';
import Image from 'next/image';
import { findImage } from '@/lib/placeholder-images';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function Backeye360Page() {
  const subCategory = cameraMonitorSubCategories.find(sc => sc.slug === 'backeye-360');
  const filteredProducts = products.filter(p => p.subCategorySlug === 'backeye-360');
  const heroImage = findImage('backeye-hero') || findImage('placeholder-1');

  if (!subCategory) {
    return <div>Alt kategori bulunamadı.</div>;
  }

  return (
    <div className="bg-background text-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <Breadcrumbs crumbs={[
                { name: 'Ürünler', href: '/urunler' },
                { name: 'Kamera Monitör Sistemleri', href: '/urunler/kategori/kamera-monitor-sistemleri' },
                { name: subCategory.title, href: '/urunler/kategori/kamera-monitor-sistemleri/backeye-360' }
            ]} />
        </div>

        {/* Hero Section */}
        <div className="relative h-80 bg-gray-800 text-white overflow-hidden mb-12">
            <div className="absolute inset-0 z-0">
                {heroImage && (
                    <Image 
                        src={heroImage.imageUrl}
                        alt={subCategory.title}
                        fill
                        sizes="100vw"
                        className="object-cover opacity-40"
                    />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
            </div>
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center items-center text-center relative z-10">
                <h1 className="text-4xl md:text-5xl font-bold font-headline text-white">{subCategory.title}</h1>
                <p className="mt-4 text-lg text-white/90 max-w-3xl">Kör Noktaları Ortadan Kaldırın, Manevraları Güvenle Yapın</p>
            </div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8">

            {/* Description and Features Section */}
            <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
                <div>
                    <h2 className="text-2xl font-bold font-headline mb-4">Gerçek Zamanlı Kuşbakışı Görünüm</h2>
                    <p className="text-muted-foreground leading-relaxed">{subCategory.description}</p>
                </div>
                <div>
                    <h3 className="text-xl font-semibold mb-4">Temel Özellikler:</h3>
                    <ul className="space-y-3">
                        {subCategory.features?.map((feature, index) => (
                            <li key={index} className="flex items-center">
                                <CheckCircle className="h-5 w-5 text-primary mr-3 flex-shrink-0" />
                                <span>{feature}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            {/* Products Section */}
            <div>
                <h2 className="text-3xl font-bold font-headline text-center mb-12">Backeye®360 Ürünleri</h2>
                {filteredProducts.length > 0 ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                        {filteredProducts.map(product => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-12 border-2 border-dashed rounded-lg">
                        <p className="text-muted-foreground">Bu teknolojiye sahip ürünler yakında eklenecektir.</p>
                        <Button asChild className="mt-4">
                            <Link href="/urunler">Tüm Ürünlere Göz Atın</Link>
                        </Button>
                    </div>
                )}
            </div>
        </div>
    </div>
  );
}
