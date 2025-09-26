import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function KullanimSartlariPage() {
    return (
        <>
            <div className="bg-secondary">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
                    <h1 className="text-4xl font-bold font-headline">Kullanım Şartları</h1>
                    <p className="mt-2 text-lg text-muted-foreground max-w-3xl mx-auto">
                        Web sitemizi kullanmadan önce lütfen bu şartları dikkatlice okuyun.
                    </p>
                </div>
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <Card className="max-w-4xl mx-auto">
                    <CardHeader>
                        <CardTitle className="font-headline">Web Sitesi Kullanım Şartları ve Koşulları</CardTitle>
                    </CardHeader>
                    <CardContent className="prose dark:prose-invert max-w-none">
                        <p>Son Güncelleme: [Tarih]</p>

                        <h2>1. Şartların Kabulü</h2>
                        <p>Bu web sitesine (&quot;Site&quot;) erişerek, bu Kullanım Şartları ve Koşullarına, geçerli tüm yasalara ve düzenlemelere bağlı kalmayı kabul edersiniz ve geçerli yerel yasalara uymaktan sorumlu olduğunuzu kabul edersiniz. Bu şartlardan herhangi birini kabul etmiyorsanız, bu siteyi kullanmanız veya siteye erişmeniz yasaktır. Bu sitede yer alan materyaller, ilgili telif hakkı ve marka kanunları ile korunmaktadır.</p>

                        <h2>2. Kullanım Lisansı</h2>
                        <p>Yalnızca kişisel, ticari olmayan geçici görüntüleme için ADC Tasarım&apos;ın web sitesindeki materyallerin (bilgi veya yazılım) bir kopyasını geçici olarak indirme izni verilir. Bu, bir lisans devri olup, bir mülkiyet devri değildir ve bu lisans altında şunları yapamazsınız:</p>
                        <ul>
                            <li>materyalleri değiştiremez veya kopyalayamazsınız;</li>
                            <li>materyalleri herhangi bir ticari amaç için veya herhangi bir kamusal sergileme için (ticari veya ticari olmayan) kullanamazsınız;</li>
                            <li>ADC Tasarım&apos;ın web sitesinde bulunan herhangi bir yazılımı kaynak koda dönüştürmeye veya tersine mühendislik yapmaya çalışamazsınız;</li>
                            <li>materyallerden herhangi bir telif hakkı veya diğer tescilli belgeleri kaldıramazsınız; veya</li>
                            <li>materyalleri başka bir kişiye devredemez veya materyalleri başka bir sunucuda &quot;aynalayamazsınız&quot;.</li>
                        </ul>
                        <p>Bu kısıtlamalardan herhangi birini ihlal etmeniz durumunda bu lisans otomatik olarak sona erer ve ADC Tasarım tarafından herhangi bir zamanda sonlandırılabilir. Bu materyalleri görüntülemenizin sona ermesi veya bu lisansın sona ermesi üzerine, elinizde bulunan indirilmiş materyalleri elektronik veya basılı formatta imha etmeniz gerekir.</p>

                        <h2>3. Sorumluluk Reddi</h2>
                        <p>ADC Tasarım&apos;ın web sitesindeki materyaller &apos;olduğu gibi&apos; sağlanmaktadır. ADC Tasarım, açık veya zımni hiçbir garanti vermez ve burada, zımni garantiler veya satılabilirlik koşulları, belirli bir amaca uygunluk veya fikri mülkiyetin ihlal edilmemesi veya diğer hakların ihlal edilmemesi dahil ancak bunlarla sınırlı olmamak üzere diğer tüm garantileri reddeder ve geçersiz kılar.</p>

                        <h2>4. Sınırlamalar</h2>
                        <p>Hiçbir durumda ADC Tasarım veya tedarikçileri, ADC Tasarım&apos;ın web sitesindeki materyallerin kullanımından veya kullanılamamasından kaynaklanan herhangi bir zarardan (sınırlama olmaksızın, veri veya kar kaybı veya iş kesintisi nedeniyle oluşan zararlar dahil) sorumlu tutulamaz, ADC Tasarım veya bir ADC Tasarım yetkili temsilcisine sözlü veya yazılı olarak bu tür bir hasar olasılığı bildirilmiş olsa bile.</p>

                        <h2>5. Değişiklikler</h2>
                        <p>ADC Tasarım, web sitesi için bu kullanım şartlarını herhangi bir zamanda bildirimde bulunmaksızın revize edebilir. Bu web sitesini kullanarak, o sırada geçerli olan Kullanım Şartları ve Koşullarına bağlı kalmayı kabul etmiş olursunuz.</p>

                        <h2>6. Geçerli Hukuk</h2>
                        <p>Bu şartlar ve koşullar, İstanbul, Türkiye yasalarına göre yönetilir ve yorumlanır ve siz, o Devlet veya yerdeki mahkemelerin münhasır yargı yetkisine geri dönülmez bir şekilde tabi olursunuz.</p>
                    </CardContent>
                </Card>
            </div>
        </>
    );
}
