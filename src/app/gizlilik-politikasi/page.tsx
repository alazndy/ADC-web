import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function GizlilikPolitikasiPage() {
    return (
        <>
            <div className="bg-secondary">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
                    <h1 className="text-4xl font-bold font-headline">Gizlilik Politikası</h1>
                    <p className="mt-2 text-lg text-muted-foreground max-w-3xl mx-auto">
                        Verilerinizin nasıl kullanıldığı ve korunduğu hakkında bilgiler.
                    </p>
                </div>
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <Card className="max-w-4xl mx-auto">
                    <CardHeader>
                        <CardTitle className="font-headline">Gizlilik Politikamız</CardTitle>
                    </CardHeader>
                    <CardContent className="prose dark:prose-invert max-w-none">
                        <p>Son Güncelleme: [Tarih]</p>
                        
                        <h2>1. Giriş</h2>
                        <p>ADCentral ("biz", "bizim" veya "şirket") olarak, kullanıcılarımızın ("siz", "sizin") gizliliğine saygı duyuyoruz. Bu Gizlilik Politikası, web sitemizi [Web Sitesi Adresi] ("Site") ziyaret ettiğinizde topladığımız, kullandığımız, ifşa ettiğimiz ve koruduğumuz bilgileri açıklamaktadır.</p>

                        <h2>2. Topladığımız Bilgiler</h2>
                        <p>Sizinle ilgili bilgileri çeşitli yollarla toplayabiliriz. Site üzerinden toplayabileceğimiz bilgiler şunlardır:</p>
                        <ul>
                            <li><strong>Kişisel Veriler:</strong> İsim, e-posta adresi, telefon numarası gibi bize gönüllü olarak verdiğiniz kişisel kimlik bilgileri.</li>
                            <li><strong>Türev Veriler:</strong> IP adresiniz, tarayıcı türünüz, işletim sisteminiz gibi sunucularımızın otomatik olarak topladığı bilgiler.</li>
                        </ul>

                        <h2>3. Bilgilerinizin Kullanımı</h2>
                        <p>Hakkınızda doğru bilgilere sahip olmak, size sorunsuz, verimli ve özelleştirilmiş bir deneyim sunmamızı sağlar. Özellikle, Site aracılığıyla topladığımız bilgileri şu amaçlarla kullanabiliriz:</p>
                        <ul>
                            <li>Hesabınızı oluşturmak ve yönetmek.</li>
                            <li>Size hedeflenmiş reklam, kupon, bülten ve diğer promosyon bilgilerini göndermek.</li>
                            <li>İletişim formları aracılığıyla gönderdiğiniz taleplere yanıt vermek.</li>
                        </ul>

                        <h2>4. Bilgilerinizin İfşası</h2>
                        <p>Topladığımız bilgileri belirli durumlarda paylaşabiliriz. Bilgileriniz aşağıdaki şekilde ifşa edilebilir:</p>
                        <ul>
                            <li><strong>Yasalara Uygunluk veya Hakların Korunması:</strong> Eğer hakkınızdaki bilgilerin açıklanmasının yasal bir sürece yanıt vermek, potansiyel politika ihlallerimizi araştırmak veya önlemek veya başkalarının haklarını, mülkiyetini ve güvenliğini korumak için gerekli olduğuna inanırsak, bilgilerinizi yasalara uygun olarak veya izin verildiği ölçüde paylaşabiliriz.</li>
                        </ul>

                        <h2>5. Bilgilerinizin Güvenliği</h2>
                        <p>Kişisel bilgilerinizi korumak için idari, teknik ve fiziksel güvenlik önlemleri kullanıyoruz. Bu önlemleri almış olsak da, lütfen hiçbir güvenlik önleminin mükemmel veya aşılamaz olmadığını ve hiçbir veri aktarım yönteminin herhangi bir müdahaleye karşı garanti edilemeyeceğini unutmayın.</p>

                        <h2>6. Politika Değişiklikleri</h2>
                        <p>Bu Gizlilik Politikasını zaman zaman güncelleme hakkımızı saklı tutarız. Herhangi bir değişiklikten haberdar olmak için bu Gizlilik Politikasını periyodik olarak gözden geçirmenizi öneririz.</p>

                        <h2>7. Bize Ulaşın</h2>
                        <p>Bu Gizlilik Politikası ile ilgili sorularınız veya yorumlarınız varsa, lütfen bizimle iletişime geçin: [E-posta Adresi]</p>
                    </CardContent>
                </Card>
            </div>
        </>
    );
}