import SektorlerSlugContent from "@/components/sektorler/sektorler-slug-content";
import { sectors } from "@/lib/data";

export async function generateStaticParams() {
    return sectors.map((sector) => ({
        slug: sector.slug,
    }));
}

export default function SektorDetayPage({ params }: { params: { slug: string } }) {
    return <SektorlerSlugContent slug={params.slug} />;
}
