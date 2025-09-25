import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Target, Milestone } from "lucide-react";

export default function HakkimizdaPage() {
  const teamMembers = [
    { name: "Ahmet Yılmaz", role: "Kurucu & CEO", image: "https://picsum.photos/seed/person1/400/400" },
    { name: "Ayşe Kaya", role: "Operasyon Direktörü", image: "https://picsum.photos/seed/person2/400/400" },
    { name: "Mehmet Demir", role: "Baş Mühendis", image: "https://picsum.photos/seed/person3/400/400" },
  ];

  return (
    <>
      <div className="bg-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
            <h1 className="text-4xl font-bold font-headline">Hakkımızda</h1>
            <p className="mt-2 text-lg text-muted-foreground max-w-3xl mx-auto">ADC Tasarım'ın vizyonu, misyonu ve ekibi hakkında daha fazla bilgi edinin.</p>
        </div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold font-headline">Biz Kimiz?</h2>
            <p className="mt-4 text-muted-foreground">ADC Tasarım, 2010 yılında araç güvenlik sistemleri alanında yenilikçi çözümler sunmak amacıyla kurulmuştur. Brigade Electronics'in Türkiye'deki yetkili distribütörü ve çözüm ortağı olarak, lojistikten inşaata, atık yönetiminden yolcu taşımacılığına kadar birçok farklı sektörde faaliyet gösteren firmalara hizmet veriyoruz.</p>
            <p className="mt-4 text-muted-foreground">Mühendislik bilgimizi teknoloji tutkumuzla birleştirerek, her müşterimizin ihtiyacına özel, verimliliği ve güvenliği en üst düzeye çıkaran sistemler tasarlıyoruz.</p>
          </div>
          <div className="aspect-w-4 aspect-h-3">
              <Image
                src="https://picsum.photos/seed/office/600/450"
                alt="Ofisimiz"
                width={600}
                height={450}
                className="rounded-lg shadow-xl object-cover w-full h-full"
                data-ai-hint="modern office"
              />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mt-24">
            <Card>
                <CardHeader className="flex flex-row items-center gap-4">
                    <div className="p-3 bg-primary/10 rounded-full">
                        <Target className="h-8 w-8 text-primary"/>
                    </div>
                    <CardTitle className="font-headline">Misyonumuz</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-muted-foreground">Ticari araç operasyonlarında sıfır kaza hedefine ulaşmak için en ileri teknolojileri erişilebilir kılmak ve bu sayede hem insan hayatını korumak hem de müşterilerimizin operasyonel verimliliğini artırmak.</p>
                </CardContent>
            </Card>
            <Card>
                <CardHeader className="flex flex-row items-center gap-4">
                    <div className="p-3 bg-primary/10 rounded-full">
                        <Milestone className="h-8 w-8 text-primary"/>
                    </div>
                    <CardTitle className="font-headline">Vizyonumuz</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-muted-foreground">Türkiye'de ve çevre coğrafyalarda, araç güvenliği ve filo yönetimi teknolojileri alanında ilk akla gelen, en güvenilir ve en yenilikçi çözüm ortağı olmak.</p>
                </CardContent>
            </Card>
        </div>

        <div className="mt-24 text-center">
            <h2 className="text-3xl font-bold font-headline">Ekibimizle Tanışın</h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">Başarımızın arkasındaki güç, alanında uzman ve tutkulu ekibimizdir.</p>
            <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {teamMembers.map((member, index) => (
                    <Card key={index} className="text-center">
                        <CardContent className="p-6">
                            <Image src={member.image} alt={member.name} width={128} height={128} className="rounded-full mx-auto mb-4" data-ai-hint="person portrait" />
                            <h3 className="text-lg font-semibold font-headline">{member.name}</h3>
                            <p className="text-primary">{member.role}</p>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
      </div>
    </>
  );
}
