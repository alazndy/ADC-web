import Image from "next/image";
import Link from "next/link";
import { findImage } from "@/lib/placeholder-images";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ChevronLeft, Volume2, Mic, Settings, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

const mainImage = findImage('rtc-pa-main');
const backchatImage = findImage('brigade-backchat');

export default function RTCPAProjectPage() {
    return (
        <>
            <div className="bg-secondary">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
                    <div className="inline-block mb-4">
                        <Button asChild variant="ghost" size="sm">
                            <Link href="/projeler">
                                <ChevronLeft className="mr-2 h-4 w-4" />
                                Tüm Projeler
                            </Link>
                        </Button>
                    </div>
                    <Badge variant="outline" className="text-sm">ÖZEL PROJE</Badge>
                    <h1 className="text-4xl font-bold font-headline mt-4">RTC-PA Vinç Operatör Haberleşme Sistemi</h1>
                    <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
                        Gümrük sahalarındaki RTC (Lastik Tekerlekli Konteyner Vinci) operatörleri ile yer personeli arasında kesintisiz ve güvenli bir iletişim sağlamak için tasarlanmış özel sesli anons ve haberleşme sistemi.
                    </p>
                </div>
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="max-w-5xl mx-auto">
                    {/* Intro Section */}
                    <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
                        <div>
                            <h2 className="text-3xl font-bold font-headline">Projenin Amacı</h2>
                            <p className="mt-4 text-muted-foreground">
                                Bu proje, gürültülü ve geniş liman sahalarında çalışan RTC vinç operatörleri ile sahadaki yer personeli arasındaki iletişimi güçlendirmek amacıyla geliştirilmiştir. Sistem, Brigade&apos;in güvenilir Backchat haberleşme altyapısını, ADC Tasarım tarafından geliştirilen özel amplifikatör ve güç devresiyle birleştirerek, hem operatör ile yerdeki personel arasında iki yönlü iletişime olanak tanır hem de operatörün anonslarını vinç dışındaki geniş bir alana yüksek sesle ve net bir şekilde iletir.
                            </p>
                            <p className="mt-4 text-muted-foreground">
                                Bu entegrasyon, operasyonel verimliliği artırırken, sahadaki iş güvenliğini en üst düzeye çıkarmayı hedefler.
                            </p>
                        </div>
                        <div className="bg-card p-4 rounded-lg border">
                            {mainImage && (
                                <Image
                                    src={mainImage.imageUrl}
                                    alt="RTC-PA Haberleşme Sistemi"
                                    width={600}
                                    height={400}
                                    className="rounded-md object-contain w-full"
                                    data-ai-hint={mainImage.imageHint}
                                />
                            )}
                        </div>
                    </div>

                    {/* Features Section */}
                    <div className="mb-20">
                        <h2 className="text-3xl font-bold font-headline text-center mb-12">Sistemin Ana Bileşenleri ve Özellikleri</h2>
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                            <Card className="text-center">
                                <CardHeader>
                                    <Mic className="mx-auto h-12 w-12 text-primary" />
                                    <CardTitle className="mt-4 font-headline">Brigade Backchat</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-muted-foreground text-sm">Zorlu endüstriyel ortamlar için tasarlanmış, kanıtlanmış, güvenilir iki yönlü haberleşme sistemi.</p>
                                </CardContent>
                            </Card>
                            <Card className="text-center">
                                <CardHeader>
                                    <Settings className="mx-auto h-12 w-12 text-primary" />
                                    <CardTitle className="mt-4 font-headline">ADC Amplifikatör</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-muted-foreground text-sm">ADC Tasarım tarafından geliştirilen, sesi güçlendirerek geniş alanlara net bir şekilde yayan özel amplifikatör devresi.</p>
                                </CardContent>
                            </Card>
                            <Card className="text-center">
                                <CardHeader>
                                    <Volume2 className="mx-auto h-12 w-12 text-primary" />
                                    <CardTitle className="mt-4 font-headline">Harici Hoparlör</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-muted-foreground text-sm">Operatörün sesli anonslarını vinç çevresindeki tüm yer personeline duyuran yüksek güçlü harici hoparlör (Loudspeaker).</p>
                                </CardContent>
                            </Card>
                            <Card className="text-center">
                                <CardHeader>
                                    <Shield className="mx-auto h-12 w-12 text-primary" />
                                    <CardTitle className="mt-4 font-headline">Artan İş Güvenliği</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-muted-foreground text-sm">Net ve anlık iletişim sayesinde, yanlış anlaşılmalardan kaynaklanan kazaların ve operasyonel hataların önüne geçer.</p>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                    
                    <Separator className="my-16" />

                    {/* How it works */}
                    <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
                         <div className="bg-card p-4 rounded-lg border order-last md:order-first">
                            {backchatImage && (
                                <Image
                                    src={backchatImage.imageUrl}
                                    alt="Brigade Backchat Sistemi"
                                    width={600}
                                    height={400}
                                    className="rounded-md object-contain w-full"
                                    data-ai-hint={backchatImage.imageHint}
                                />
                            )}
                        </div>
                        <div>
                            <h2 className="text-3xl font-bold font-headline">Nasıl Çalışır?</h2>
                            <p className="mt-4 text-muted-foreground">
                                Vinç operatörü, kabin içindeki Brigade Backchat ünitesini kullanarak yerdeki personel ile doğrudan konuşabilir. Aynı zamanda, operatörün sesi ADC Tasarım&apos;ın özel amplifikatör devresi tarafından güçlendirilir ve vincin dışına monte edilmiş olan yüksek güçlü hoparlör aracılığıyla tüm sahaya anons olarak yayınlanır. Bu sayede, &quot;konteyner indiriliyor&quot;, &quot;dikkat, yük hareketi var&quot; gibi kritik güvenlik uyarıları, gürültülü liman ortamında bile herkes tarafından net bir şekilde duyulur.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
