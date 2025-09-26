
import { services, techSolutions } from "@/lib/data";
import Link from "next/link";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { ArrowRight, Wrench, Users, ShieldCheck, Cpu } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function HizmetlerPage() {
    
    const whyUsItems = [
        {
            icon: Wrench,
            title: "Uzman Teknik Servis",
            description: "Brigade Electronics'in yetkili distribütörü ve çözüm ortağı olarak, en yüksek standartlarda montaj ve destek hizmeti sunuyoruz."
        },
        {
            icon: Users,
            title: "Müşteri Odaklı Yaklaşım",
            description: "Her filonun ve operasyonun benzersiz olduğunu biliyor, ihtiyaçlarınıza özel mühendislik çözümleri üretiyoruz."
        },
        {
            icon: ShieldCheck,
            title: "Uçtan Uca Güvenlik",
            description: "Sadece ürün satmıyor, projelendirmeden kuruluma ve satış sonrası desteğe kadar tam bir güvenlik ortaklığı sunuyoruz."
        }
    ];

    return (
        <>
            <div className="bg-secondary">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
                    <h1 className="text-4xl font-bold font-headline">Mühendislik Hizmetlerimiz</h1>
                    <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
                        Filonuzun güvenliğini ve operasyonel verimliliğini en üst düzeye çıkarmak için tasarladığımız profesyonel hizmetler.
                    </p>
                </div>
            </div>

            <div className="py-16 sm:py-24 bg-background">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto">
                        <h2 className="text-3xl font-bold font-headline">Neden ADC Tasarım?</h2>
                         <p className="mt-4 text-muted-foreground text-lg">
                           Standartların ötesinde bir hizmet anlayışıyla, güvenliğinizi ve verimliliğinizi garanti altına alıyoruz.
                        </p>
                    </div>
                    <div className="mt-16 grid lg:grid-cols-3 gap-8">
                        {whyUsItems.map((item, index) => (
                           <Card key={index} className="text-center bg-card">
                                <CardHeader className="items-center">
                                    <div className="bg-primary/10 p-4 rounded-full">
                                        <item.icon className="h-10 w-10 text-primary" />
                                    </div>
                                    <CardTitle className="font-headline text-2xl pt-4">{item.title}</CardTitle>
                                </CardHeader>
                                <CardContent>
                                     <p className="text-muted-foreground">{item.description}</p>
                                </CardContent>
                           </Card>
                        ))}
                    </div>
                </div>
            </div>

            <div className="py-16 sm:py-24 bg-secondary">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="space-y-16">
                        <div>
                            <div className="text-center max-w-3xl mx-auto">
                                <h2 className="text-3xl font-bold font-headline">Mühendislik Hizmetlerimiz</h2>
                                <p className="mt-4 text-muted-foreground text-lg">
                                    Araçlarınıza özel, en yüksek standartlarda profesyonel kurulum ve projelendirme hizmetleri.
                                </p>
                            </div>
                            <div className="mt-12 grid gap-8 sm:grid-cols-2">
                                {services.map((service) => (
                                    <Link href={`/hizmetler/${service.slug}`} key={service.id} className="group h-full">
                                        <Card className="h-full hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col">
                                            <CardHeader>
                                                <div className="flex items-center gap-4">
                                                    <div className="bg-primary/10 p-3 rounded-full">
                                                        <service.icon className="h-8 w-8 text-primary" />
                                                    </div>
                                                    <CardTitle className="font-headline text-xl">{service.title}</CardTitle>
                                                </div>
                                            </CardHeader>
                                            <CardContent className="flex-grow">
                                                <CardDescription>{service.summary}</CardDescription>
                                            </CardContent>
                                            <div className="p-6 pt-0">
                                                <span className="font-semibold text-primary group-hover:underline flex items-center">
                                                    Detayları Gör <ArrowRight className="ml-2 h-4 w-4" />
                                                </span>
                                            </div>
                                        </Card>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="py-16 sm:py-24 bg-primary text-primary-foreground">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl font-bold font-headline">Daha Fazlasını Keşfedin</h2>
                    <p className="mt-4 max-w-2xl mx-auto text-lg text-primary-foreground/80">
                       Filonuzu daha akıllı, daha güvenli ve daha verimli hale getiren entegre teknoloji uygulamalarımızı keşfedin.
                    </p>
                    <div className="mt-8 flex flex-wrap justify-center gap-4">
                        <Button asChild size="lg" variant="secondary">
                            <Link href="/teknoloji-cozumleri">Teknoloji Çözümleri</Link>
                        </Button>
                    </div>
                </div>
            </div>
        </>
    );
}