import { mockBlogPosts, mockProducts } from "@/lib/mock-data";
import { findImage } from "@/lib/placeholder-images";
import { PlaceholderContent } from "@/components/placeholder-content";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { format } from 'date-fns';
import { tr } from 'date-fns/locale';
import { Calendar, User } from "lucide-react";

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

    const image = findImage(post.coverImage);

    return (
        <>
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl py-16">
                <article>
                    <header className="mb-8 text-center">
                        <div className="flex justify-center gap-2 mb-4">
                            {post.tags.map(tag => (
                                <Badge key={tag} variant="outline">{tag}</Badge>
                            ))}
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold font-headline">{post.title}</h1>
                        <div className="mt-4 flex justify-center items-center gap-6 text-muted-foreground">
                            <div className="flex items-center gap-2">
                                <User className="h-4 w-4" />
                                <span>{post.author}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Calendar className="h-4 w-4" />
                                <time dateTime={post.publishDate}>
                                    {format(new Date(post.publishDate), 'dd MMMM yyyy', { locale: tr })}
                                </time>
                            </div>
                        </div>
                    </header>

                    {image && (
                        <div className="relative aspect-video rounded-lg overflow-hidden mb-8">
                            <Image
                                src={image.imageUrl}
                                alt={post.title}
                                fill
                                className="object-cover"
                                priority
                                data-ai-hint={post.imageHint}
                            />
                        </div>
                    )}
                    
                    <div 
                        className="prose prose-lg dark:prose-invert max-w-none mx-auto
                                   prose-headings:font-headline prose-a:text-primary 
                                   prose-strong:font-semibold"
                        dangerouslySetInnerHTML={{ __html: post.content }} 
                    />
                </article>
            </div>
        </>
    );
}