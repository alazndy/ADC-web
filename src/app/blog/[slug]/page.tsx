import { mockBlogPosts } from "@/lib/mock-data";
import { PlaceholderContent } from "@/components/placeholder-content";

export async function generateStaticParams() {
    return mockBlogPosts.map((post) => ({
        slug: post.slug,
    }));
}

export default function BlogDetayPage({ params }: { params: { slug: string } }) {
    const post = mockBlogPosts.find(p => p.slug === params.slug);

    if (!post) {
        return <PlaceholderContent title="Yazı Bulunamadı" description="Aradığınız blog yazısı mevcut değil." />;
    }

    return <PlaceholderContent title={post.title} description={post.summary} />;
}
