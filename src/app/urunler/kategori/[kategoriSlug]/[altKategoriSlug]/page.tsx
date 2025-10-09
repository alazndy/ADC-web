
import { getAllSubCategoryParams } from '@/lib/product-categories';
import AltKategoriSlugContent from "@/components/urunler/alt-kategori-slug-content";

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
    return <AltKategoriSlugContent kategoriSlug={params.kategoriSlug} altKategoriSlug={params.altKategoriSlug} />;
}
