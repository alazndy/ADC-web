import { mockProjects } from "@/lib/mock-data";
import { PlaceholderContent } from "@/components/placeholder-content";

export async function generateStaticParams() {
    return mockProjects.map((project) => ({
        slug: project.slug,
    }));
}

export default function ProjeDetayPage({ params }: { params: { slug: string } }) {
    const project = mockProjects.find(p => p.slug === params.slug);

    if (!project) {
        return <PlaceholderContent title="Proje Bulunamadı" description="Aradığınız proje mevcut değil." />;
    }

    return <PlaceholderContent title={project.title} description={project.challenge} />;
}
