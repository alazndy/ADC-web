import Link from 'next/link';
import Image from 'next/image';
import { sectors } from '@/lib/data';
import { findImage } from '@/lib/placeholder-images';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';

export default function SektorlerPage() {
    return (
        <>
            <div className="bg-secondary">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
                    <h1 className="text-4xl font-bold font-headline">Sektörler</h1>
                    <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
                        Her sektörün kendine özgü zorlukları olduğunu biliyoruz. Uluslararası, çok araçlı bir filo veya küçük bir işletme işletiyor olun, araç ve mobil tesis güvenlik gereksinimlerinizde size yardımcı olacak uzmanlığa sahibiz.
                    </p>
                </div>
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {sectors.map((sector) => {
                        const image = findImage(sector.imageUrls[0]);
                        return (
                            <Link href={`/sektorler/${sector.slug}`} key={sector.id} className="group flex">
                                <Card className="flex flex-col w-full bg-card hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10">
                                    <CardHeader className="flex flex-row items-start gap-4">
                                        <div className="bg-primary/10 p-3 rounded-lg">
                                            <sector.icon className="h-8 w-8 text-primary" />
                                        </div>
                                        <div className='flex-1'>
                                            <CardTitle className="font-headline text-xl">{sector.name}</CardTitle>
                                        </div>
                                    </CardHeader>
                                    <CardContent className="flex-grow">
                                        <CardDescription>{sector.description}</CardDescription>
                                    </CardContent>
                                    <div className="p-6 pt-0 mt-auto">
                                        <span className="font-semibold text-primary group-hover:underline flex items-center">
                                            Daha Fazla Bilgi <ArrowRight className="ml-2 h-4 w-4" />
                                        </span>
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

    
