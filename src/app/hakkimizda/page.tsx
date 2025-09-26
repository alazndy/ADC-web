import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Target, Milestone } from "lucide-react";
import { findImage } from "@/lib/placeholder-images";

export default function HakkimizdaPage() {
  const teamMembers = [
    { name: "Ahmet Yılmaz", role: "Kurucu & CEO", image: "person-1", imageHint: "man portrait" },
    { name: "Ayşe Kaya", role: "Operasyon Direktörü", image: "person-2", imageHint: "woman portrait" },
    { name: "Mehmet Demir", role: "Baş Mühendis", image: "person-3", imageHint: "man portrait" },
  ];

  const officeImage = findImage("office-photo");

  return (
    <>
      <div className="bg-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
            <h1 className="text-4xl font-bold font-headline">Biz Kimiz?</h1>
            <p className="mt-2 text-lg text-muted-foreground max-w-3xl mx-auto">ADC Tasarım olarak, teknoloji ve mühendisliği birleştirerek daha güvenli ve verimli bir gelecek inşa ediyoruz.</p>
        </div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="text-3xl font-bold font-headline tracking-tight">Bir Güvenlik ve Verimlilik Ortağı</h2>
            <p className="mt-4 text-muted-foreground">2010 yılında, ticari araç güvenliğinde devrim yaratma hedefiyle yola çıktık. Bugün, Brigade Electronics&apos;in Türkiye&apos;deki yetkili distribütörü ve mühendislik ortağı olarak, lojistikten madenciliğe, tarımdan inşaata kadar geniş bir yelpazede endüstrilere yön veriyoruz.</p>
            <p className="mt-4 text-muted-foreground">ADC Tasarım sadece bir ürün tedarikçisi değil, aynı zamanda bir çözüm ortağıdır. Her müşterinin operasyonel zorluklarını anlıyor, analiz ediyor ve bu zorluklara özel, yenilikçi ve yüksek performanslı sistemler tasarlıyoruz. Tutkumuz, en zorlu koşullarda bile güvenliği ve verimliliği en üst düzeye çıkarmaktır.</p>
          </div>
           <div className="order-1 lg:order-2 aspect-w-4 aspect-h-3">
              {officeImage && (
                <Image
                  src={officeImage.imageUrl}
                  alt="Ofisimiz"
                  width={600}
                  height={450}
                  className="rounded-lg shadow-xl object-cover w-full h-full"
                  data-ai-hint={officeImage.imageHint}
                />
              )}
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mt-24">
            <Card className="bg-background hover:shadow-md transition-shadow">
                <CardHeader className="flex flex-row items-center gap-4">
                    <div className="p-3 bg-primary/10 rounded-full">
                        <Target className="h-8 w-8 text-primary"/>
                    </div>
                    <CardTitle className="font-headline">Misyonumuz</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-muted-foreground">Ticari araç operasyonlarında kaza riskini ortadan kaldırmak için en gelişmiş güvenlik teknolojilerini erişilebilir kılmak, bu sayede insan hayatını korurken müşterilerimizin operasyonel verimliliğini en üst seviyeye taşımak.</p>
                </CardContent>
            </Card>
            <Card className="bg-background hover:shadow-md transition-shadow">
                <CardHeader className="flex flex-row items-center gap-4">
                    <div className="p-3 bg-primary/10 rounded-full">
                        <Milestone className="h-8 w-8 text-primary"/>
                    </div>
                    <CardTitle className="font-headline">Vizyonumuz</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-muted-foreground">Araç güvenliği ve filo yönetimi teknolojileri alanında, Türkiye ve çevre coğrafyalarda yenilikçiliğin, kalitenin ve güvenilirliğin simgesi haline gelerek sektörün lider çözüm ortağı olmak.</p>
                </CardContent>
            </Card>
        </div>

        <div className="mt-24 text-center">
            <h2 className="text-3xl font-bold font-headline">Ekibimizle Tanışın</h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">Başarımızın arkasındaki güç, alanında uzman ve tutkulu ekibimizdir.</p>
            <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {teamMembers.map((member, index) => {
                    const memberImage = findImage(member.image);
                    return (
                        <Card key={index} className="text-center group border border-transparent hover:border-primary/50 transition-colors">
                            <CardContent className="p-6">
                                {memberImage && (
                                    <div className="w-32 h-32 mx-auto relative">
                                        <Image 
                                        src={memberImage.imageUrl} 
                                        alt={member.name} 
                                        fill
                                        sizes="128px"
                                        className="rounded-full object-cover" 
                                        data-ai-hint={member.imageHint} 
                                        />
                                    </div>
                                )}
                                <h3 className="text-lg font-semibold font-headline mt-4">{member.name}</h3>
                                <p className="text-primary">{member.role}</p>
                            </CardContent>
                        </Card>
                    )
                })}
            </div>
        </div>
      </div>
    </>
  );
}
