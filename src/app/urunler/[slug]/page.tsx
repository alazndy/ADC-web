import UrunlerSlugContent from "@/components/urunler/urunler-slug-content";
import { products } from "@/lib/data";


export async function generateStaticParams() {
    return products.map((product) => ({
        slug: product.slug,
    }));
}

export default function UrunDetayPage({ params }: { params: { slug: string } }) {
    return <UrunlerSlugContent slug={params.slug} />;
}
