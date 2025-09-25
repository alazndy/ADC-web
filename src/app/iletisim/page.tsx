import { ContactForm } from "@/components/contact-form";
import { Mail, Phone, MapPin } from "lucide-react";

export default function IletisimPage() {
  return (
    <>
      <div className="bg-primary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
            <h1 className="text-4xl font-bold font-headline text-primary-foreground">İletişim</h1>
            <p className="mt-2 text-lg text-primary-foreground/80">Sorularınız, projeleriniz veya işbirliği talepleriniz için bize ulaşın.</p>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-5 gap-12">
          <div className="lg:col-span-2 space-y-8">
            <div>
              <h2 className="text-2xl font-bold font-headline">İletişim Bilgileri</h2>
              <p className="mt-2 text-muted-foreground">Doğrudan bizimle temasa geçmek için aşağıdaki bilgileri kullanabilirsiniz.</p>
            </div>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-secondary p-3 rounded-full">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold">Adres</h3>
                  <p className="text-muted-foreground">Örnek Mah. Teknoloji Cad. No:123, 34750 Ataşehir/İstanbul</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-secondary p-3 rounded-full">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold">Telefon</h3>
                  <a href="tel:+902161234567" className="text-muted-foreground hover:text-primary">+90 (216) 123 45 67</a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-secondary p-3 rounded-full">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold">E-posta</h3>
                  <a href="mailto:info@adctasarim.com" className="text-muted-foreground hover:text-primary">info@adctasarim.com</a>
                </div>
              </div>
            </div>
            <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden border">
                <div className="bg-muted w-full h-full flex items-center justify-center">
                    <p className="text-muted-foreground">Google Haritalar burada görünecek.</p>
                </div>
            </div>
          </div>
          <div className="lg:col-span-3 bg-card p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold font-headline">Bize Mesaj Gönderin</h2>
            <p className="mt-2 text-muted-foreground">Formu doldurun, ekibimiz en kısa sürede size geri dönüş yapacaktır.</p>
            <div className="mt-8">
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
