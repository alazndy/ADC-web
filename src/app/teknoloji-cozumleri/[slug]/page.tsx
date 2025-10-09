import TeknolojiCozumleriSlugContent from "@/components/teknoloji-cozumleri/teknoloji-cozumleri-slug-content";
import { techSolutions } from "@/lib/data";


export async function generateStaticParams() {
    // Exclude telematics slug, as it has its own dedicated page
    return techSolutions.filter(s => s.slug !== 'telematik-ve-filo-yonetimi').map((service) => ({
        slug: service.slug,
    }));
}

export default function TeknolojiCozumDetayPage({ params }: { params: { slug: string } }) {
    return <TeknolojiCozumleriSlugContent slug={params.slug} />;
}
