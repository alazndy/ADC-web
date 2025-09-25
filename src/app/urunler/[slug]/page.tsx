import { mockProducts } from "@/lib/mock-data";
import { PlaceholderContent } from "@/components/placeholder-content";

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

    return <PlaceholderContent title={product.name} description={product.shortDescription} />;
}
