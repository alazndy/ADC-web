
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { slugToCategory } from '@/lib/product-categories';
// CORRECTED IMPORT: The component is in the global components directory
import { UrunKategoriClientPage } from '@/components/urun-kategori-client-page'; 
import { cameraMonitorSubCategories, detectionSystemSubCategories, recordingSystemSubCategories, driverSafetySystemSubCategories, warningSystemSubCategories } from '@/lib/data/subcategories';
import { products } from '@/lib/data';

interface UrunKategoriPageProps {
    params: {
        kategoriSlug: string;
    };
}

const categoryToSubCategoryMap = {
    'kamera-monitor-sistemleri': cameraMonitorSubCategories,
    'tespit-sistemleri': detectionSystemSubCategories,
    'kayit-sistemleri': recordingSystemSubCategories,
    'surucu-guvenlik-sistemleri': driverSafetySystemSubCategories,
    'uyari-sistemleri': warningSystemSubCategories,
};

export default function UrunKategoriPage({ params }: UrunKategoriPageProps) {
    const { kategoriSlug } = params;
    const categoryName = slugToCategory(kategoriSlug);

    if (!categoryName) {
        notFound();
    }

    // Filter products for the client component
    const filteredProducts = products.filter(p => p.category === categoryName);
    const subCategories = categoryToSubCategoryMap[kategoriSlug];

    if (!subCategories || subCategories.length === 0) {
        return (
            <div className="container mx-auto px-4 py-16 text-center">
                <h1 className="text-4xl font-bold font-headline">{categoryName}</h1>
                <p className="mt-4 text-muted-foreground">Bu kategoriye ait ürün aileleri yakında eklenecektir.</p>
                 <Link href="/urunler" className="mt-8 inline-block bg-primary text-primary-foreground px-6 py-3 rounded-lg">Tüm Ürünlere Geri Dön</Link>
            </div>
        );
    }

    const pageDescription = subCategories[0]?.description || 'Briggs Automotive güvencesiyle en gelişmiş araç güvenlik teknolojilerini keşfedin.';
    const hasSpecialLayout = subCategories.some(sc => sc.slug === 'backeye-360');

    return (
        <UrunKategoriClientPage
            categoryName={categoryName}
            pageDescription={pageDescription}
            subCategories={subCategories}
            hasSpecialLayout={hasSpecialLayout}
            filteredProducts={filteredProducts}
        />
    );
}
