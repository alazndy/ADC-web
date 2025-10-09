import ProjelerSlugContent from "@/components/projeler/projeler-slug-content";
import { projects } from "@/lib/data";

export async function generateStaticParams() {
    return projects.map((project) => ({
        slug: project.slug,
    }));
}

export default function ProjeDetayPage({ params }: { params: { slug: string } }) {
    return <ProjelerSlugContent slug={params.slug} />;
}
