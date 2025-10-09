import Image from "next/image";
import Link from "next/link";
import { findImage } from "@/lib/placeholder-images";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ChevronLeft, Cog, Cpu, Shield, Wifi } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Separator } from "@/components/ui/separator";
import UCPSInteractiveGuide from "@/components/ucps-interactive-guide";

const mainImage = findImage('ucps-main');
const boxContentImage = findImage('ucps-box-content');

const boxContent = [
    { no: 1, desc: 'UCPS-2SA Ana Ünite', model: 'UCPS-2SB-MU', unit: 'Ad', qty: 1 },
    { no: '1a', desc: 'Arka Montaj Plakası', model: 'ADC-AMP-02', unit: 'Ad', qty: 1 },
    { no: 2, desc: 'CanBus Kablosu, 4x0.5 mm²', model: 'CAN-CAB', unit: 'Mt', qty: 2 },
    { no: 3, desc: 'Güç Kablosu, 2x1.0 mm²', model: 'PS-CAB', unit: 'Mt', qty: 4 },
    { no: 4, desc: 'Push Buton Kablosu, 2x1.0 mm²', model: 'PB-CAB', unit: 'Mt', qty: 12 },
    { no: 5, desc: 'I/O Kablosu, 4x0.5 mm²', model: 'I/O-CAB', unit: 'Mt', qty: 6 },
    { no: 6, desc: 'Brigade UDS-CAN-ECU', model: 'S5869', unit: 'Ad', qty: 1 },
    { no: 7, desc: 'Brigade Sensör Uzatma Kablosu 4.5 mt', model: '3720', unit: 'Ad', qty: 3 },
    { no: 8, desc: 'Brigade Sensör Uzatma Kablosu 7 mt', model: 'S5623', unit: 'Ad', qty: 1 },
    { no: 9, desc: 'Brigade Sensör Uzatma Kablosu 8 mt', model: 'S5677', unit: 'Ad', qty: 1 },
    { no: 10, desc: 'Brigade Yüksek Hass. Ultrasonik Sensor', model: '3718', unit: 'Ad', qty: 2 },
    { no: 11, desc: 'Brigade Sensor Braketi', model: '3726', unit: 'Ad', qty: 2 },
    { no: 12, desc: 'Brigade Sensor Kılıfı', model: '3720', unit: 'Ad', qty: 2 },
];


export default function UCPSProjectPage() {
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
                    <h1 className="text-4xl font-bold font-headline mt-4">UCPS-2SA Ultrasonik Çarpışma Önleme Sistemi</h1>
                    <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
                        ADC Tasarım tarafından geliştirilen, Brigade&apos;in ultrasonik sensörlerini kullanan, havalimanı yer hizmetleri gibi kritik operasyonlar için tasarlanmış akıllı çarpışma önleme sistemi.
                    </p>
                </div>
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="max-w-5xl mx-auto">
                    {/* Intro Section */}
                    <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
                        <div>
                            <h2 className="text-3xl font-bold font-headline">Proje Tanıtımı</h2>
                            <p className="mt-4 text-muted-foreground">
                                Bu proje, Brigade&apos;in yüksek hassasiyetli ultrasonik sensörlerini ve ADC Tasarım&apos;ın geliştirdiği özel kontrol ünitesini (UCPS HMI Controller) bir araya getirerek, özellikle havalimanı yer hizmetleri (Turkish Fuel Services) gibi yüksek riskli ve hassas operasyonlar için tasarlanmıştır. Sistem, aracın çevresindeki mesafeyi sürekli okur, sürücüyü sesli ve görsel olarak uyarır ve kritik bir yakınlaşma durumunda aracı otomatik olarak durdurarak olası çarpmaları önler.
                            </p>
                            <p className="mt-4 text-muted-foreground">
                                Sistem, ayrıca radar sensörleri ile çalışan RCPS (Radar Collision Prevention System) versiyonuna da sahiptir ve kullanıcı taleplerine göre esnek bir şekilde ayarlanabilir.
                            </p>
                            <div className="mt-6 font-semibold text-primary">PATENT NO: 2024-GE-624945</div>
                        </div>
                        <div className="bg-card p-4 rounded-lg border">
                            {mainImage && (
                                <Image
                                    src={mainImage.imageUrl}
                                    alt="UCPS-2SA Ana Ünite"
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
                        <h2 className="text-3xl font-bold font-headline text-center mb-12">Ana Özellikler</h2>
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                            <Card className="text-center">
                                <CardHeader>
                                    <Cpu className="mx-auto h-12 w-12 text-primary" />
                                    <CardTitle className="mt-4 font-headline">Akıllı Kontrol</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-muted-foreground text-sm">Yüksek hızlı endüstriyel mikro denetleyici sayesinde hassas mesafe ayarı ve anlık müdahale.</p>
                                </CardContent>
                            </Card>
                            <Card className="text-center">
                                <CardHeader>
                                    <Shield className="mx-auto h-12 w-12 text-primary" />
                                    <CardTitle className="mt-4 font-headline">Otomatik Durdurma</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-muted-foreground text-sm">Ayarlanabilir kritik mesafeye ulaşıldığında aracı otomatik olarak kilitleyerek çarpışmayı önler.</p>
                                </CardContent>
                            </Card>
                            <Card className="text-center">
                                <CardHeader>
                                    <Cog className="mx-auto h-12 w-12 text-primary" />
                                    <CardTitle className="mt-4 font-headline">Esnek Yapı</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-muted-foreground text-sm">Şifre korumalı menüler üzerinden kullanıcı talebine göre ayarlanabilir durdurma mesafesi ve gecikme süreleri.</p>
                                </CardContent>
                            </Card>
                            <Card className="text-center">
                                <CardHeader>
                                    <Wifi className="mx-auto h-12 w-12 text-primary" />
                                    <CardTitle className="mt-4 font-headline">Brigade Sensörleri</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-muted-foreground text-sm">Sektör lideri Brigade&apos;in IP69K korumalı, yüksek hassasiyetli ultrasonik sensör altyapısını kullanır.</p>
                                </CardContent>
                            </Card>
                        </div>
                    </div>

                    <UCPSInteractiveGuide />

                    {/* Technical Specs Section */}
                    <div className="mb-20">
                         <h2 className="text-3xl font-bold font-headline text-center mb-12">Teknik Özellikler</h2>
                         <div className="grid md:grid-cols-2 gap-8">
                            <Card>
                                <CardHeader>
                                    <CardTitle className="font-headline">A) Sensör Grubu (Brigade)</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <Table>
                                        <TableBody>
                                            <TableRow><TableCell>ECU IP Sınıfı</TableCell><TableCell>IP69K</TableCell></TableRow>
                                            <TableRow><TableCell>Çalışma Sıcaklığı</TableCell><TableCell>-30°C ila +85°C</TableCell></TableRow>
                                            <TableRow><TableCell>Onaylanmış Standartlar</TableCell><TableCell>FCC, IC, ECE R10</TableCell></TableRow>
                                            <TableRow><TableCell>Çalışma Gerilimi</TableCell><TableCell>19 – 32 VDC</TableCell></TableRow>
                                            <TableRow><TableCell>CAN İletişim Hızı</TableCell><TableCell>250 Kbps</TableCell></TableRow>
                                            <TableRow><TableCell>Algılama Aralığı</TableCell><TableCell>2.5 mt&apos;ye kadar</TableCell></TableRow>
                                        </TableBody>
                                    </Table>
                                </CardContent>
                            </Card>
                             <Card>
                                <CardHeader>
                                    <CardTitle className="font-headline">B) Akıllı Gösterge ve Kontrol Ünitesi (ADC)</CardTitle>
                                </CardHeader>
                                <CardContent>
                                     <Table>
                                        <TableBody>
                                            <TableRow><TableCell>Ana Ünite IP Sınıfı</TableCell><TableCell>IP44</TableCell></TableRow>
                                            <TableRow><TableCell>Çalışma Sıcaklığı</TableCell><TableCell>-20°C ila +70°C</TableCell></TableRow>
                                            <TableRow><TableCell>Çalışma Gerilimi</TableCell><TableCell>9 – 32 VDC</TableCell></TableRow>
                                            <TableRow><TableCell>Gösterge</TableCell><TableCell>4.3” TFT LCD (Rezistif Dokunmatik)</TableCell></TableRow>
                                            <TableRow><TableCell>Durdurma Mesafesi</TableCell><TableCell>30 cm (Ayarlanabilir)</TableCell></TableRow>
                                            <TableRow><TableCell>Garanti</TableCell><TableCell>İmalat hatalarına karşı 2 yıl</TableCell></TableRow>
                                        </TableBody>
                                    </Table>
                                </CardContent>
                            </Card>
                         </div>
                    </div>
                    
                    <Separator className="my-16" />

                    {/* Box Content Section */}
                     <div className="mb-20">
                         <h2 className="text-3xl font-bold font-headline text-center mb-12">Kutu İçeriği</h2>
                         <Card>
                            <CardContent className="p-6">
                               <div className="grid md:grid-cols-2 gap-8 items-center">
                                 <div>
                                   <Table>
                                       <TableHeader>
                                           <TableRow>
                                               <TableHead>No</TableHead>
                                               <TableHead>Açıklama</TableHead>
                                               <TableHead>Miktar</TableHead>
                                           </TableRow>
                                       </TableHeader>
                                       <TableBody>
                                           {boxContent.map(item => (
                                               <TableRow key={item.no}>
                                                   <TableCell>{item.no}</TableCell>
                                                   <TableCell>{item.desc}</TableCell>
                                                   <TableCell>{item.qty} {item.unit}</TableCell>
                                               </TableRow>
                                           ))}
                                       </TableBody>
                                   </Table>
                                 </div>
                                 <div className="bg-muted p-4 rounded-lg border">
                                    {boxContentImage && (
                                        <Image 
                                            src={boxContentImage.imageUrl}
                                            alt="Kutu İçeriği"
                                            width={800}
                                            height={600}
                                            className="rounded-md w-full"
                                            data-ai-hint={boxContentImage.imageHint}
                                        />
                                    )}
                                 </div>

                               </div>
                            </CardContent>
                         </Card>
                     </div>
                </div>
            </div>
        </>
    );
}
