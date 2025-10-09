import HizmetSlugContent from "@/components/hizmetler/hizmetler-slug-content";
import { services, techSolutions } from "@/lib/data";

interface HizmetDetayPageProps {
    params: {
        slug: string;
    };
}

export async function generateStaticParams() {
    return [...services, ...techSolutions].map((service) => ({
        slug: service.slug,
    }));
}

export default function HizmetDetayPage({ params }: HizmetDetayPageProps) {
    return <HizmetSlugContent slug={params.slug} />;
}
