import Link from 'next/link';
import Image from 'next/image';
import { mockSectors } from '@/lib/mock-data';
import { findImage } from '@/lib/placeholder-images';
import { Card, CardContent } from '@/components/ui/card';

export default function SektorlerPage() {
    return (
        <>
            <div className="bg-secondary">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
                    <h1 className="text-4xl font-bold font-headline">Sektörler</h1>
                    <p className="mt-2 text-lg text-muted-foreground max-w-3xl mx-auto">
                        Hizmet verdiğimiz sektörler ve bu sektörlerin benzersiz zorluklarına özel geliştirdiğimiz mühendislik çözümleri.
                    </p>
                </div>
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid md:grid-cols-2 gap-8">
                    {mockSectors.map((sector) => {
                        const image = findImage(sector.imageUrl);
                        return (
                            <Link href={`/sektorler/${sector.slug}`} key={sector.id} className="group">
                                <Card className="overflow-hidden h-full">
                                    <div className="grid lg:grid-cols-2 h-full">
                                        <div className="relative aspect-video lg:aspect-auto">
                                            {image && (
                                                <Image
                                                    src={image.imageUrl}
                                                    alt={sector.name}
                                                    fill
                                                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                                                    data-ai-hint={sector.imageHint}
                                                />
                                            )}
                                        </div>
                                        <div className="p-6 flex flex-col">
                                            <h2 className="text-2xl font-bold font-headline">{sector.name}</h2>
                                            <p className="mt-3 text-muted-foreground"><strong>Temel Zorluklar:</strong> {sector.challenges}</p>
                                            <div className="mt-auto pt-4">
                                                <span className="font-semibold text-primary group-hover:underline">Çözümleri Gör →</span>
                                            </div>
                                        </div>
                                    </div>
                                </Card>
                            </Link>
                        );
                    })}
                </div>
            </div>
        </>
    );
}