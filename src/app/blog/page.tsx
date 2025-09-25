import Link from 'next/link';
import Image from 'next/image';
import { mockBlogPosts } from '@/lib/mock-data';
import { findImage } from '@/lib/placeholder-images';
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { format } from 'date-fns';
import { tr } from 'date-fns/locale';

export default function BlogPage() {
    return (
        <>
            <div className="bg-secondary">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
                    <h1 className="text-4xl font-bold font-headline">Blog</h1>
                    <p className="mt-2 text-lg text-muted-foreground max-w-3xl mx-auto">
                        Sektörel haberler, teknolojik gelişmeler, vaka analizleri ve uzman görüşleri.
                    </p>
                </div>
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {mockBlogPosts.map((post) => {
                        const image = findImage(post.coverImage);
                        return (
                            <Card key={post.id} className="group overflow-hidden flex flex-col">
                                <CardHeader className="p-0">
                                    <Link href={`/blog/${post.slug}`} className="block relative aspect-video">
                                        {image && (
                                            <Image
                                                src={image.imageUrl}
                                                alt={post.title}
                                                fill
                                                className="object-cover transition-transform duration-300 group-hover:scale-105"
                                                data-ai-hint={post.imageHint}
                                            />
                                        )}
                                    </Link>
                                </CardHeader>
                                <CardContent className="p-6 flex-grow">
                                    <div className='flex gap-2 mb-2'>
                                    {post.tags.map(tag => (
                                        <Badge key={tag} variant="secondary">{tag}</Badge>
                                    ))}
                                    </div>
                                    <CardTitle className="font-headline text-xl">
                                        <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                                    </CardTitle>
                                    <CardDescription className="mt-3 line-clamp-3">{post.summary}</CardDescription>
                                </CardContent>
                                <CardFooter className="p-6 pt-0 text-sm text-muted-foreground">
                                    <span>{format(new Date(post.publishDate), 'dd MMMM yyyy', { locale: tr })}</span>
                                    <span className="mx-2">•</span>
                                    <span>{post.author}</span>
                                </CardFooter>
                            </Card>
                        );
                    })}
                </div>
            </div>
        </>
    );
}