import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { findImage } from "@/lib/placeholder-images";
import { CheckCircle, Map, BarChart, Bell, Route } from "lucide-react";

export default function TelematikPage() {
    const telematicsImage = findImage('telematics-hero');

    const features = [
        {
            icon: Map,
            title: "Araç Takibi (Vehicle Tracking)",
            description: "Gelişmiş gerçek zamanlı araç takip sistemimizle filonuzun kontrolünü elinizde tutun. Araçlarınızın tam konumunu her zaman izleyin, optimize edilmiş rota planlaması ve iyileştirilmiş zamanlama verimliliği sağlayın.",
        },
        {
            icon: Route,
            title: "Coğrafi Sınırlar (Geofences)",
            description: "Belirli alanlar etrafında sanal sınırlar oluşturarak, bir araç bu bölgelere girdiğinde veya çıktığında uyarılar ve ayrıntılı raporlar alın, böylece filo kontrolünü ve güvenliğini artırın.",
        },
        {
            icon: BarChart,
            title: "Raporlama ve Analitik (Reporting & Analytics)",
            description: "Kapsamlı raporlama ve analitik araçlarımızla filonuzun performansı hakkında değerli bilgiler edinin. Verimliliği artırmak ve maliyetleri düşürmek için veriye dayalı kararlar alın.",
        },
    ];

    const subscriptions = [
        {
            title: "Track Lite",
            description: "Kullanımı hızlı ve kolay olacak şekilde tasarlanmış basit bir canlı araç takip çözümü arayan kullanıcılar için tasarlanmıştır. Bu seçenek, müşterilerimizin günlük filo operasyonlarını daha iyi yönetmelerine yardımcı olmak için hem gerçek zamanlı hem de geçmişe dönük izleme verileri sağlar.",
            features: ["Canlı Araç Takibi", "Geçmiş İzleme", "Temel Raporlar"]
        },
        {
            title: "Track",
            description: "Daha ileri düzey kullanıcılar için tasarlanan bu abonelik, güçlü özelliklere kapsamlı erişim sunar. Bunlar arasında verimli filo yönetimi ve optimizasyonu için Canlı Araç Takibi, Coğrafi Sınırlama, Uyarılar, Raporlar, Panolar ve bildirimler bulunur.",
            features: ["Tüm Track Lite özellikleri", "Gelişmiş Raporlama ve Panolar", "Coğrafi Sınırlar (Geofencing)", "Anlık Uyarılar ve Bildirimler", "Otomatik Raporlar ve Araç Verileri"]
        }
    ];

    return (
        <>
            <div className="relative bg-black text-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h1 className="text-4xl md:text-5xl font-bold font-headline">Telematik Çözümleri</h1>
                            <p className="mt-4 text-lg text-white/80">
                                Brigade Electronics, filo yönetimini ve güvenliğini artırmak için gerçek zamanlı araç takibi, raporlama ve kapsamlı veri analitiği sağlayan bir telematik çözümü sunar.
                            </p>
                            <Button size="lg" className="mt-8">
                                <Link href="/iletisim">Daha Fazla Bilgi İsteyin</Link>
                            </Button>
                        </div>
                        <div className="hidden lg:block">
                            {telematicsImage && (
                                <Image
                                    src={telematicsImage.imageUrl}
                                    alt="Telematik Paneli"
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

            <div className="py-16 sm:py-24 bg-secondary">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto">
                        <h2 className="text-3xl font-bold font-headline">Telematik Gücünü Keşfedin</h2>
                        <p className="mt-4 text-muted-foreground text-lg">
                            Filonuzun verimliliğini ve güvenliğini en üst düzeye çıkarmak için tasarlanmış temel özelliklerimiz.
                        </p>
                    </div>
                    <div className="mt-16 grid md:grid-cols-3 gap-8">
                        {features.map((feature, index) => (
                            <Card key={index} className="bg-card">
                                <CardHeader>
                                    <div className="flex items-center gap-4">
                                        <div className="p-3 bg-primary/10 rounded-lg">
                                            <feature.icon className="h-8 w-8 text-primary" />
                                        </div>
                                        <CardTitle className="font-headline text-xl">{feature.title}</CardTitle>
                                    </div>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-muted-foreground">{feature.description}</p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </div>

             <div className="py-16 sm:py-24 bg-background">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto">
                        <h2 className="text-3xl font-bold font-headline">Abonelik Paketlerimiz</h2>
                         <p className="mt-4 text-muted-foreground text-lg">
                            İhtiyaçlarınıza en uygun telematik aboneliğini seçin.
                        </p>
                    </div>
                    <div className="mt-16 grid lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
                        {subscriptions.map((sub) => (
                           <Card key={sub.title} className="flex flex-col">
                                <CardHeader>
                                    <CardTitle className="font-headline text-2xl">{sub.title}</CardTitle>
                                    <CardDescription>{sub.description}</CardDescription>
                                </CardHeader>
                                <CardContent className="flex-grow">
                                     <ul className="space-y-3">
                                        {sub.features.map((feature, index) => (
                                            <li key={index} className="flex items-center gap-3">
                                                <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                                                <span className="text-muted-foreground">{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </CardContent>
                           </Card>
                        ))}
                    </div>
                </div>
            </div>

            <div className="py-16 sm:py-24 bg-secondary">
                 <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                             <h2 className="text-3xl font-bold font-headline">Donanım Çözümleri: Basic Tracker</h2>
                             <p className="mt-4 text-muted-foreground">
                                FMC920, GNSS ve GSM ile donatılmış, hafif, gerçek zamanlı bir takip terminalidir. Bu son teknoloji cihaz, hassas koordinatları ve temel verileri toplar, GSM ağı üzerinden sunucunuza sorunsuz bir şekilde iletir. 4G LTE Cat 1 ağ kapsama alanı ve 2G'ye geri dönüş ile benzersiz güvenilirlik yaşayın, filonuz için geleceğe dönük bağlantı sağlayın.
                             </p>
                             <p className="mt-4 text-muted-foreground">
                                FMC920, güvenlik, filo yönetimi, araba kiralama, taksiler, toplu taşıma, lojistik ve kişisel araçlar dahil olmak üzere geniş bir uygulama yelpazesi için idealdir.
                             </p>
                              <Button variant="outline" asChild className="mt-8">
                                <Link href="#">Teknik Özellikleri İndir</Link>
                              </Button>
                        </div>
                        <div>
                            <Card className="overflow-hidden">
                                <CardContent className="p-0">
                                    <Image 
                                        src={findImage('placeholder-18')?.imageUrl || ''}
                                        alt="Basic Tracker Cihazı"
                                        width={600}
                                        height={450}
                                        className="object-contain"
                                        data-ai-hint="gps tracker device"
                                    />
                                </CardContent>
                            </Card>
                        </div>
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
