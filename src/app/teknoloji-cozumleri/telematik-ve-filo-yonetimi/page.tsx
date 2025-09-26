
import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { findImage } from "@/lib/placeholder-images";
import { CheckCircle, Map, BarChart, Bell, Route, Video, Cloud, Cpu, ArrowRight, Bot } from "lucide-react";

export default function TelematikPage() {
    const telematicsImage = findImage('telematics-hero');
    const geotabImage = findImage('geotab-logo');
    const mdrImage = findImage('mdr-644');
    const backeye360Image = findImage('backeye-360-system');
    const dashcamImage = findImage('ai-dashcam');

    const videoTelematicsBenefits = [
        { title: "Sürücü Koçluğu", description: "Olay kayıtlarını kullanarak sürücü davranışlarını iyileştirin." },
        { title: "Soruşturma Süresini Azaltma", description: "Olaylara anında erişimle incelemeleri hızlandırın." },
        { title: "Kanıt Paylaşımı (FNOL)", description: "İlk Hasar Bildirimi için video kanıtlarını kolayca paylaşın." },
        { title: "AI Otomatik İndirmeler", description: "Yapay zeka, kritik olayların videolarını otomatik olarak indirir." },
        { title: "Basit Arayüz", description: "Kullanıcı dostu platformumuzla verilere kolayca erişin." },
        { title: "Hyperlapse Yakalama", description: "Uzun kayıtları hızlı ve özetlenmiş video kliplerle izleyin." },
    ];

    const telematicsFeatures = [
        {
            title: "Araç Takibi",
            description: "Filonuzun tam konumunu her zaman bilin, rota planlamasını optimize edin.",
            imageName: "telematics-tracking",
            imageHint: "Illustration of a map with a truck icon showing vehicle tracking."
        },
        {
            title: "Coğrafi Sınırlar",
            description: "Belirli alanlar için sanal sınırlar oluşturun ve giriş/çıkışlarda uyarılar alın.",
            imageName: "telematics-geofence",
            imageHint: "Illustration of a map showing a defined geofence area."
        },
        {
            title: "Raporlama ve Analitik",
            description: "Verimliliği artırmak ve maliyetleri düşürmek için veriye dayalı kararlar alın.",
            imageName: "telematics-reporting",
            imageHint: "Illustration of various charts and graphs for data analytics."
        },
        {
            title: "Uyarılar ve Bildirimler",
            description: "Özelleştirilmiş kurallara göre anlık bildirimler alarak proaktif yönetim sağlayın.",
            imageName: "telematics-alerts",
            imageHint: "Illustration of a smartphone screen with alert notifications."
        },
        {
            title: "Sürücü Davranış Analizi",
            description: "Sürüş alışkanlıklarını izleyerek güvenliği artırın ve işletme maliyetlerini düşürün.",
            imageName: "telematics-driver-behavior",
            imageHint: "Dashboard showing driver behavior scores and analytics."
        },
    ];

    return (
        <>
            <div className="relative bg-black text-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <p className="font-semibold text-primary">Connected Services</p>
                            <h1 className="mt-2 text-4xl md:text-5xl font-bold font-headline">Video Telematik ve Filo Yönetimi</h1>
                            <p className="mt-4 text-lg text-white/80">
                                Brigade’in gelişmiş Video Telematik Çözümü, filo performansını gerçek zamanlı olarak izlemek, korumak ve iyileştirmek için en son yapay zeka, bulut tabanlı kolaylık ve sürücü merkezli araçları bir araya getirir.
                            </p>
                            <Button size="lg" asChild className="mt-8">
                                <Link href="/iletisim">Çözümleri Keşfedin</Link>
                            </Button>
                        </div>
                        <div className="hidden lg:block">
                            {telematicsImage && (
                                <Image
                                    src={telematicsImage.imageUrl}
                                    alt="Video Telematik Paneli"
                                    width={600}
                                    height={400}
                                    className="rounded-lg shadow-2xl"
                                    data-ai-hint={telematicsImage.imageHint}
                                />
                            )}
                        </div>
                    </div>
                </div>
            </div>

            <div className="py-16 sm:py-24 bg-background">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto">
                        <h2 className="text-3xl font-bold font-headline">Brigade Video Telematics</h2>
                        <p className="mt-4 text-muted-foreground text-lg">
                            Filonuzu korumak, izlemek ve performansını artırmak için tasarlanmış, yapay zeka destekli güçlü bir çözüm.
                        </p>
                    </div>
                    <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {videoTelematicsBenefits.map((item, index) => (
                             <Card key={index} className="bg-card border-border/50">
                                <CardHeader>
                                    <CardTitle className="font-headline text-xl">{item.title}</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-muted-foreground">{item.description}</p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                    <div className="mt-16 grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                        <Card className="flex flex-col">
                            <CardHeader>
                                <CardTitle className="font-headline text-2xl flex items-center gap-3"><Video className="text-primary"/> View 365 Days</CardTitle>
                                <CardDescription>Canlı izleme, uzaktan video indirme ve kanıt paylaşımı gibi temel video telematik özellikleri.</CardDescription>
                            </CardHeader>
                            <CardContent className="flex-grow">
                                <ul className="space-y-3">
                                    {["Canlı Araç Takibi", "Canlı Video Yayını", "Kanıt Paylaşımı (FNOL)", "Uzaktan Oynatma ve İndirme", "365 Gün Video Saklama"].map((feature, index) => (
                                        <li key={index} className="flex items-center gap-3"><CheckCircle className="h-5 w-5 text-primary flex-shrink-0" /><span className="text-muted-foreground">{feature}</span></li>
                                    ))}
                                </ul>
                            </CardContent>
                        </Card>
                        <Card className="flex flex-col border-primary/50 shadow-lg">
                            <CardHeader>
                                <CardTitle className="font-headline text-2xl flex items-center gap-3"><Cloud className="text-primary"/> View AI 365 Days</CardTitle>
                                <CardDescription>View paketinin tüm özelliklerine ek olarak, yapay zeka destekli otomatik olay tespiti ve güvenlik analizi.</CardDescription>
                            </CardHeader>
                            <CardContent className="flex-grow">
                                <ul className="space-y-3">
                                     <li className="flex items-center gap-3"><CheckCircle className="h-5 w-5 text-primary flex-shrink-0" /><span className="font-semibold text-foreground">View 365 Days Paketindeki Her Şey</span></li>
                                    {["AI ADAS & DMS Otomatik İndirmeleri", "Gelişmiş Güvenlik Analizi Raporları"].map((feature, index) => (
                                        <li key={index} className="flex items-center gap-3"><CheckCircle className="h-5 w-5 text-primary flex-shrink-0" /><span className="text-muted-foreground">{feature}</span></li>
                                    ))}
                                </ul>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>

            <div className="py-16 sm:py-24 bg-secondary">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto">
                        <h2 className="text-3xl font-bold font-headline">Brigade Telematics</h2>
                        <p className="mt-4 text-muted-foreground text-lg">
                           Güvenliği, verimliliği ve uyumluluğu artırmak için araç konumu, sürücü davranışı ve sistem durumu hakkında gerçek zamanlı bilgiler sağlayan akıllı bir filo yönetimi çözümüdür.
                        </p>
                    </div>
                    <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {telematicsFeatures.map((feature) => {
                            const image = findImage(feature.imageName);
                            return (
                                <Card key={feature.title} className="bg-card overflow-hidden flex flex-col">
                                    <CardHeader className="p-0">
                                        {image && (
                                            <Image 
                                                src={image.imageUrl} 
                                                alt={feature.title} 
                                                width={400} 
                                                height={250} 
                                                className="rounded-t-lg object-cover w-full aspect-video"
                                                data-ai-hint={feature.imageHint}
                                            />
                                        )}
                                    </CardHeader>
                                    <CardContent className="p-6 flex-grow">
                                        <h3 className="font-bold font-headline text-xl">{feature.title}</h3>
                                        <p className="mt-2 text-muted-foreground">{feature.description}</p>
                                    </CardContent>
                                </Card>
                            );
                        })}
                    </div>
                     <div className="mt-16 grid lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
                        <Card className="flex flex-col">
                            <CardHeader>
                                <CardTitle className="font-headline text-2xl">Track Lite</CardTitle>
                                <CardDescription>Günlük filo operasyonlarını yönetmek için basit ve canlı bir araç takip çözümü.</CardDescription>
                            </CardHeader>
                            <CardContent className="flex-grow">
                                <ul className="space-y-3">
                                    {["Canlı Araç Takibi", "Geçmiş İzleme", "Temel Raporlar", "Bildirimler"].map((feature, index) => (
                                        <li key={index} className="flex items-center gap-3"><CheckCircle className="h-5 w-5 text-primary flex-shrink-0" /><span className="text-muted-foreground">{feature}</span></li>
                                    ))}
                                </ul>
                            </CardContent>
                        </Card>
                        <Card className="flex flex-col">
                            <CardHeader>
                                <CardTitle className="font-headline text-2xl">Track</CardTitle>
                                <CardDescription>Verimli filo yönetimi ve optimizasyonu için kapsamlı ve güçlü özellikler.</CardDescription>
                            </CardHeader>
                            <CardContent className="flex-grow">
                                <ul className="space-y-3">
                                    <li className="flex items-center gap-3"><CheckCircle className="h-5 w-5 text-primary flex-shrink-0" /><span className="font-semibold text-foreground">Tüm Track Lite Özellikleri</span></li>
                                    {["Gelişmiş Raporlama ve Panolar", "Coğrafi Sınırlar (Geofencing)", "Otomatik Raporlar ve Araç Verileri"].map((feature, index) => (
                                        <li key={index} className="flex items-center gap-3"><CheckCircle className="h-5 w-5 text-primary flex-shrink-0" /><span className="text-muted-foreground">{feature}</span></li>
                                    ))}
                                </ul>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>

             <div className="py-16 sm:py-24 bg-background">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div className="order-2 lg:order-1">
                             <h2 className="text-3xl font-bold font-headline">Yazılım Entegrasyonları: Geotab</h2>
                             <p className="mt-4 text-muted-foreground">
                                Brigade ve Geotab, hepsi bir arada güçlü bir filo güvenliği ve telematik çözümü sunmak için bir araya geldi. Bu entegrasyon, Brigade’in yapay zeka kameralarını, engel tespitini ve sürücü uyarılarını Geotab’ın gelişmiş veri platformuyla birleştirir.
                             </p>
                             <p className="mt-4 text-muted-foreground">
                                Filo yöneticileri tek bir yerden tam görünürlük elde ederek güvenliği artırır, çarpışmaları azaltır, sürücü sorumluluğunu güçlendirir ve maliyetleri düşürür.
                             </p>
                              <Button variant="outline" asChild className="mt-8">
                                <Link href="#" target="_blank">Daha Fazla Bilgi <ArrowRight className="ml-2 h-4 w-4" /></Link>
                              </Button>
                        </div>
                        <div className="order-1 lg:order-2">
                           {geotabImage && (
                                <Image 
                                    src={geotabImage.imageUrl}
                                    alt="Geotab Logo"
                                    width={500}
                                    height={250}
                                    className="object-contain mx-auto"
                                    data-ai-hint={geotabImage.imageHint}
                                />
                            )}
                        </div>
                    </div>
                </div>
            </div>

            <div className="py-16 sm:py-24 bg-secondary">
                 <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto">
                        <h2 className="text-3xl font-bold font-headline">Bağlantılı Donanım Çözümleri</h2>
                        <p className="mt-4 text-muted-foreground text-lg">
                           Brigade, Filo Yönetim Sistemi (FMS) çözümlerimizle uyumlu bir dizi donanım sunar. Bu donanımlar, filonuzun güvenliğini ve performansını en üst düzeye çıkarmak için tasarlanmıştır.
                        </p>
                    </div>
                    <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <Card className="bg-card">
                            <CardHeader className="p-0">
                                {dashcamImage && <Image src={dashcamImage.imageUrl} alt="AI Dashcam" width={400} height={250} className="rounded-t-lg object-cover" />}
                            </CardHeader>
                            <CardContent className="p-6">
                                <h3 className="font-bold font-headline text-xl">AI Destekli Araç Kameraları</h3>
                                <p className="mt-2 text-muted-foreground">Gerçek dünya senaryolarını analiz ederek risk kalıplarını belirleyin ve sürücü davranışlarını iyileştirmek için özel koçluk programları oluşturun.</p>
                            </CardContent>
                        </Card>
                         <Card className="bg-card">
                            <CardHeader className="p-0">
                                {backeye360Image && <Image src={backeye360Image.imageUrl} alt="Backeye®360 AI" width={400} height={250} className="rounded-t-lg object-cover" />}
                            </CardHeader>
                            <CardContent className="p-6">
                                <h3 className="font-bold font-headline text-xl">360˚ Kamera Çözümü - Backeye®360 AI</h3>
                                <p className="mt-2 text-muted-foreground">Telematik çözümleri içinde erişilebilen bu sistem, araç çevresinin kapsamlı bir görünümünü sunarak sürücü farkındalığını artırır.</p>
                            </CardContent>
                        </Card>
                         <Card className="bg-card">
                            <CardHeader className="p-0">
                                {mdrImage && <Image src={mdrImage.imageUrl} alt="MDR-644" width={400} height={250} className="rounded-t-lg object-cover" />}
                            </CardHeader>
                            <CardContent className="p-6">
                                <h3 className="font-bold font-headline text-xl">Mobil Dijital Kayıt Cihazı - MDR</h3>
                                <p className="mt-2 text-muted-foreground">MDR'a bağlanan herhangi bir cihaz, verilerin ve videoların platformlarımız üzerinden erişilip yönetilmesine olanak tanır.</p>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
            
            <div className="py-16 sm:py-24 bg-primary text-primary-foreground">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl font-bold font-headline">Filonuzun Tüm Potansiyelini Açığa Çıkarın</h2>
                    <p className="mt-4 max-w-2xl mx-auto text-lg text-primary-foreground/80">
                       Brigade Electronics olarak, filonuzun tam potansiyelini ortaya çıkarmanıza yardımcı olmaya kararlıyız. Telematik çözümlerimizin işletmenize nasıl fayda sağlayabileceği hakkında daha fazla bilgi edinmek için bugün bize ulaşın.
                    </p>
                    <Button asChild size="lg" variant="secondary" className="mt-8">
                        <Link href="/iletisim">Bize Ulaşın</Link>
                    </Button>
                </div>
            </div>
        </>
    );
}
