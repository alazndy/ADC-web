import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { brigadeVanProducts } from "@/lib/data";
import { findImage } from "@/lib/placeholder-images";
import { Check, ChevronLeft, ShieldCheck } from 'lucide-react';
import { categoryToSlug } from '@/lib/product-categories';

export default function BrigadeVanPage() {
    return (
        <>
            <div className="bg-secondary">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
                    <div className="inline-block">
                        <Button asChild variant="ghost" size="sm">
                            <Link href="/urunler">
                                <ChevronLeft className="mr-2 h-4 w-4" />
                                Tüm Kategoriler
                            </Link>
                        </Button>
                    </div>
                    <h1 className="text-4xl font-bold font-headline mt-2">Brigade Van</h1>
                    <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
                        Hafif ticari araç pazarındaki güvenlik zorluklarıyla mücadele etmek için özel olarak geliştirilen Brigade Van, hızlı hareket eden bu pazar için özel olarak seçilmiş kaliteli ürünleri rekabetçi fiyatlarla sunarak kamyonet pazarına güvenlik getiriyor.
                    </p>
                </div>
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="space-y-24">
                    
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl font-headline font-bold text-center mb-6">Kamyonet Sürücülerinin Karşılaştığı Zorluklar</h2>
                        <p className="max-w-3xl mx-auto text-center text-muted-foreground mb-12">
                            İnternet alışverişi ve son mil teslimatlarındaki artış, yollardaki kamyonet sayısının rekor seviyelere ulaşmasına neden oldu. Bu durum, kamyonetlerin karayolu yük taşımacılığı içindeki payını artırırken, sürüşle ilgili olaylarda da bir artışa yol açtı. Kamyonet sürücülerinin karşılaştığı bazı zorluklar şunlardır:
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
                            <Card className="bg-card border-none shadow-none">
                                <CardHeader className='flex-row items-center gap-4 space-y-0'>
                                    <ShieldCheck className="h-8 w-8 text-primary" />
                                    <CardTitle>Kör Nokta Çarpışmaları</CardTitle>
                                </CardHeader>
                                <CardContent><p className='text-muted-foreground'>Kör noktalardan kaynaklanan artan çarpışma riski.</p></CardContent>
                            </Card>
                            <Card className="bg-card border-none shadow-none">
                                <CardHeader className='flex-row items-center gap-4 space-y-0'>
                                    <ShieldCheck className="h-8 w-8 text-primary" />
                                    <CardTitle>Hırsızlık ve Suç Faaliyetleri</CardTitle>
                                </CardHeader>
                                <CardContent><p className='text-muted-foreground'>Araç ve içerisindeki yüke yönelik hırsızlık ve suç olayları.</p></CardContent>
                            </Card>
                            <Card className="bg-card border-none shadow-none">
                                <CardHeader className='flex-row items-center gap-4 space-y-0'>
                                    <ShieldCheck className="h-8 w-8 text-primary" />
                                    <CardTitle>Sürücü Hataları</CardTitle>
                                </CardHeader>
                                <CardContent><p className='text-muted-foreground'>Dikkat dağınıklıkları ve sürücü hatalarından kaynaklanan kazalar.</p></CardContent>
                            </Card>
                            <Card className="bg-card border-none shadow-none">
                                <CardHeader className='flex-row items-center gap-4 space-y-0'>
                                    <ShieldCheck className="h-8 w-8 text-primary" />
                                    <CardTitle>Sigorta Dolandırıcılıkları</CardTitle>
                                </CardHeader>
                                <CardContent><p className='text-muted-foreground'>&quot;Çarpmak için nakit&quot; gibi kasıtlı olarak düzenlenen sahte kaza senaryoları.</p></CardContent>
                            </Card>
                        </div>
                    </div>

                    <div>
                        <h2 className="text-3xl font-headline font-bold text-center mb-6">Kamera Monitör Sistemleri</h2>
                        <p className="max-w-3xl mx-auto text-center text-muted-foreground mb-12">Brigade Van kamera monitör sistemleri, sürücülerin güvenli bir şekilde manevra yapmasını ve araç kullanmasını sağlar. Kameralar, sürücünün kör noktaları görmesine yardımcı olabilir ve aracın kamera görüşündeki her şeyi (insanlar veya engeller dahil) monitörde canlı bir besleme sunarak geri vites yardımı sağlar. Tüm kameralar Brigade Van kayıt cihazlarıyla uyumludur.</p>
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {brigadeVanProducts["Kamera Monitör Sistemleri"].map((product, index) => (
                                <Card key={index} className="flex flex-col">
                                    <CardHeader>
                                            <div className="aspect-square relative rounded-md overflow-hidden bg-card border">
                                            <Image src={findImage(product.image)!.imageUrl} alt={product.title} fill sizes="(min-width: 1024px) 25vw, (min-width: 768px) 50vw, 100vw" className="object-contain p-4" data-ai-hint={product.imageHint} />
                                            </div>
                                        <CardTitle className="pt-4">{product.title}</CardTitle>
                                    </CardHeader>
                                    <CardContent className="flex-grow">
                                        <ul className="text-sm text-muted-foreground space-y-2">
                                        {product.features.map((feature, i) => (
                                            <li key={i} className="flex items-start gap-2">
                                                <Check className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                                                <span>{feature}</span>
                                            </li>
                                        ))}
                                        </ul>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h2 className="text-3xl font-headline font-bold text-center mb-6">Kayıt Sistemleri</h2>
                        <p className="max-w-3xl mx-auto text-center text-muted-foreground mb-12">Sahte iddialar, &quot;çarpışma için para&quot; dolandırıcılıkları ve kayıplar, işletmelere her yıl milyonlara mal oluyor; ayrıca araç vandalizmi ve sürücülere yönelik saldırılar gibi sorunlar da var. Brigade Van&apos;ın dijital kayıt ürünleri, bir olay durumunda doğru bir tanık sağlayarak ve reddedilemez kanıtlar sunarak bir çözüm sunar.</p>
                            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                            {brigadeVanProducts["Kayıt Sistemleri"].map((product, index) => (
                                    <Card key={index} className="flex flex-col">
                                    <CardHeader>
                                            <div className="aspect-square relative rounded-md overflow-hidden bg-card border">
                                            <Image src={findImage(product.image)!.imageUrl} alt={product.title} fill sizes="(min-width: 768px) 50vw, 100vw" className="object-contain p-4" data-ai-hint={product.imageHint}/>
                                            </div>
                                        <CardTitle className="pt-4">{product.title}</CardTitle>
                                    </CardHeader>
                                    <CardContent className="flex-grow">
                                        <ul className="text-sm text-muted-foreground space-y-2">
                                        {product.features.map((feature, i) => (
                                            <li key={i} className="flex items-start gap-2">
                                                <Check className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                                                <span>{feature}</span>
                                            </li>
                                        ))}
                                        </ul>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>

                        <div className="grid md:grid-cols-2 gap-8">
                            <Card className="bg-card p-6">
                            <CardHeader>
                                <CardTitle className="font-headline">Uyarı Sistemleri</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <h3 className="font-semibold text-lg">Sessiz Araç Ses Cihazı</h3>
                                <p className="text-muted-foreground mt-2 mb-4">Elektrikli ve hibrit araçlar için ön hoparlör sistemi olan QVS, sessiz bir aracın yaklaştığını yayalara ve diğer savunmasız yol kullanıcılarına bildirir. bbs-tek® teknolojisini içeren bu sistemde, sesin perdesi ve seviyesi, içten yanmalı bir motora benzer şekilde araç hızıyla birlikte artar.</p>
                                    <h3 className="font-semibold text-lg">bbs-tek® Beyaz Ses® Geri Vites Alarmı</h3>
                                <p className="text-muted-foreground mt-2">Anında bulunabilirliği ve yönlü sesi sayesinde dünyanın en güvenli alarmlarıdır. Çok frekanslı alarmlar sadece tehlike bölgesinde duyulur, böylece yerel sakinler için gürültü rahatsızlığını ortadan kaldırır.</p>
                                <Button asChild variant="outline" className="mt-6">
                                    <Link href={`/urunler/kategori/${categoryToSlug('Uyarı Sistemleri')}`}>Daha Fazla Bilgi</Link>
                                </Button>
                            </CardContent>
                        </Card>
                            <Card className="bg-card p-6">
                            <CardHeader>
                                <CardTitle className="font-headline">Sensör Sistemleri</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-muted-foreground">Brigade&apos;in ultrasonik yakınlık sensörleri, hem araç hasarını hem de yayalar, bisikletliler veya nesnelerle çarpışmaları en aza indirir. Kapalı alanlarda çalışan veya düşük hızda manevra yapan araçlar için mükemmeldir. Algılama sistemi, hareketli veya sabit olsun, araca yakın engeller hakkında sürücüyü uyarır.</p>
                                    <ul className="text-sm text-muted-foreground space-y-2 mt-4">
                                    <li className="flex items-center gap-2"><Check className="h-4 w-4 text-primary" />4 sensörlü sistem aracın arkasına takılır</li>
                                    <li className="flex items-center gap-2"><Check className="h-4 w-4 text-primary" />Askılı veya gömme montaj</li>
                                    <li className="flex items-center gap-2"><Check className="h-4 w-4 text-primary" />Sistem geri vitesle etkinleştirilir</li>
                                </ul>
                                    <Button asChild variant="outline" className="mt-6">
                                    <Link href={`/urunler/kategori/${categoryToSlug('Tespit Sistemleri')}`}>Daha Fazla Bilgi</Link>
                                </Button>
                            </CardContent>
                        </Card>
                        </div>
                </div>
            </div>
        </>
    );
}
