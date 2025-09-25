import Link from 'next/link';
import Image from 'next/image';
import { mockSectors } from '@/lib/mock-data';
import { findImage } from '@/lib/placeholder-images';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';

export default function SektorlerPage() {
    return (
        <>
            <div className="bg-black/50">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
                    <h1 className="text-4xl font-bold font-headline text-white">Sektörler</h1>
                    <p className="mt-4 text-lg text-white/70 max-w-3xl mx-auto">
                        Her sektörün kendine özgü zorlukları olduğunu biliyoruz. Uluslararası, çok araçlı bir filo veya küçük bir işletme işletiyor olun, araç ve mobil tesis güvenlik gereksinimlerinizde size yardımcı olacak uzmanlığa sahibiz.
                    </p>
                </div>
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {mockSectors.map((sector) => {
                        const image = findImage(sector.imageUrl);
                        return (
                            <Link href={`/sektorler/${sector.slug}`} key={sector.id} className="group flex">
                                <Card className="flex flex-col w-full bg-white/5 border-white/10 hover:border-red-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-red-500/10">
                                    <CardHeader className="flex flex-row items-start gap-4">
                                        <div className="bg-red-500/10 p-3 rounded-lg">
                                            <sector.icon className="h-8 w-8 text-red-500" />
                                        </div>
                                        <div className='flex-1'>
                                            <CardTitle className="font-headline text-xl text-white">{sector.name}</CardTitle>
                                        </div>
                                    </CardHeader>
                                    <CardContent className="flex-grow">
                                        <CardDescription className="text-white/60">{sector.description}</CardDescription>
                                    </CardContent>
                                    <div className="p-6 pt-0 mt-auto">
                                        <span className="font-semibold text-red-500 group-hover:underline flex items-center">
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

    