import { mockSectors } from "@/lib/mock-data";
import { PlaceholderContent } from "@/components/placeholder-content";

export async function generateStaticParams() {
    return mockSectors.map((sector) => ({
        slug: sector.slug,
    }));
}

export default function SektorDetayPage({ params }: { params: { slug: string } }) {
    const sector = mockSectors.find(p => p.slug === params.slug);

    if (!sector) {
        return <PlaceholderContent title="Sektör Bulunamadı" description="Aradığınız sektör mevcut değil." />;
    }

    return <PlaceholderContent title={sector.name} description={sector.challenges} />;
}
