import { mockServices, mockTechSolutions } from "@/lib/mock-data";
import { PlaceholderContent } from "@/components/placeholder-content";

export async function generateStaticParams() {
    return [...mockServices, ...mockTechSolutions].map((service) => ({
        slug: service.slug,
    }));
}

export default function HizmetDetayPage({ params }: { params: { slug: string } }) {
    const service = [...mockServices, ...mockTechSolutions].find(p => p.slug === params.slug);

    if (!service) {
        return <PlaceholderContent title="Hizmet Bulunamadı" description="Aradığınız hizmet mevcut değil." />;
    }

    return <PlaceholderContent title={service.title} description={service.summary} />;
}
