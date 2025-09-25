import { mockServices, mockTechSolutions } from "@/lib/mock-data";
import { PlaceholderContent } from "@/components/placeholder-content";

export async function generateStaticParams() {
    return mockTechSolutions.map((service) => ({
        slug: service.slug,
    }));
}

export default function TeknolojiCozumDetayPage({ params }: { params: { slug: string } }) {
    const service = mockTechSolutions.find(p => p.slug === params.slug);

    if (!service) {
        return <PlaceholderContent title="Çözüm Bulunamadı" description="Aradığınız teknoloji çözümü mevcut değil." />;
    }

    return <PlaceholderContent title={service.title} description={service.summary} />;
}
