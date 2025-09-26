import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Video, Briefcase } from "lucide-react";

export default function RandevuAlPage() {
  return (
    <>
      <div className="bg-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
            <h1 className="text-4xl font-bold font-headline">Online Toplantı veya Demo Planlayın</h1>
            <p className="mt-2 text-lg text-muted-foreground max-w-3xl mx-auto">
              Uzmanlarımızla birebir görüşerek ihtiyaçlarınızı analiz edelim ve size en uygun çözümleri sunalım. Aşağıdaki takvimden size uygun bir zaman dilimi seçerek toplantınızı anında oluşturun.
            </p>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <Card className="max-w-4xl mx-auto">
          <CardHeader>
            <CardTitle className="font-headline">Randevu Takvimi</CardTitle>
            <CardDescription>
              &quot;Ürün Demosu&quot; veya &quot;Proje Danışmanlığı&quot; gibi toplantı tiplerini seçebilirsiniz.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div 
              className="bg-muted rounded-lg w-full min-h-[600px] flex items-center justify-center border"
              aria-label="Calendly entegrasyon alanı"
            >
              <div className="text-center text-muted-foreground">
                <p className="font-semibold">Calendly Randevu Sistemi</p>
                <p className="text-sm">Randevu planlama aracı burada görünecek.</p>
              </div>
            </div>
            <div className="mt-8 grid sm:grid-cols-2 gap-6 text-center">
              <div className="bg-background border p-6 rounded-lg">
                <Video className="h-10 w-10 text-primary mx-auto"/>
                <h3 className="mt-4 font-semibold font-headline">Ürün Demosu</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Seçtiğiniz Brigade ürünlerinin özelliklerini canlı olarak görün ve sorularınızı uzmanlarımıza sorun.
                </p>
              </div>
              <div className="bg-background border p-6 rounded-lg">
                <Briefcase className="h-10 w-10 text-primary mx-auto"/>
                <h3 className="mt-4 font-semibold font-headline">Proje Danışmanlığı</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Filonuz veya operasyonlarınız için özel mühendislik çözümleri hakkında ücretsiz danışmanlık alın.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
