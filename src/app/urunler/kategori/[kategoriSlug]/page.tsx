
import { products } from '@/lib/data';
import { ProductCard } from '@/components/product-card';
import { Card, CardContent } from '@/components/ui/card';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ChevronLeft } from 'lucide-react';
import { PlaceholderContent } from '@/components/placeholder-content';
import { categoryToSlug, slugToCategory, allCategories } from '@/lib/product-categories';
import { SubCategoryShowcase } from '@/components/subcategory-showcase';

const cameraMonitorSubCategories = [
    {
        title: '360 Derece Kameralar',
        slug: 'backeye-360',
        description: 'Backeye®360, sürücüye aracın etrafının tam bir \'kuş bakışı\' görünümünü gerçek zamanlı olarak tek bir görüntüde sunan akıllı bir kamera monitör sistemidir.',
        features: ['Kör Noktaları Ortadan Kaldırır', 'Gerçek Zamanlı Görünümler', 'Özelleştirilebilir Görünümler', 'Kaydedilebilir'],
        image: 'placeholder-1',
        imageHint: '360 camera view',
    },
    {
        title: 'Araca Monte Kameralar',
        slug: 'vehicle-mounted-cameras',
        description: 'Kalibre edilmiş kameralar, aracın veya makinenin kör noktaları dahil tüm çevresini yakalar. Tek bir kamera, 180°\'nin üzerinde bir görüş açısıyla aracın bir tam yanını kapsar.',
        features: ['Kör Noktaları Ortadan Kaldırır', 'Gerçek Zamanlı Görünümler', 'Ultra Geniş Açılı Kameralar', 'Kaydedilebilir'],
        image: 'placeholder-4',
        imageHint: 'vehicle camera',
    },
    {
        title: 'İnsan Formu Tanıma (HFR) Kameraları',
        slug: 'human-form-recognition-cameras',
        description: 'Yapay Zeka kullanarak, bu kameralar önceden tanımlanmış algılama bölgesi içindeki insan formunu algılar ve olası bir çarpışmadan önce sürücüyü görsel ve/veya sesli olarak güvenilir bir şekilde uyarır.',
        features: ['Tak ve Çalıştır', 'Yapay Zeka', 'Görüntü İşleme & Yer Paylaşımı', 'Sıfır Saniye Başlatma Süresi'],
        image: 'placeholder-3',
        imageHint: 'AI camera detection',
    },
     {
        title: '360° Kameralar ve AI Teknolojisi',
        slug: 'backeye-360-ai',
        description: 'Backeye®360 AI Akıllı algılama, insanları tanımlamak ve tüm kör noktaları etkili bir şekilde ortadan kaldırmak için son teknoloji AI teknolojisiyle geliştirilmiş, 360 derecelik yüksek çözünürlüklü dört kameralı bir sistemdir.',
        image: 'placeholder-2',
        imageHint: 'AI 360 camera',
    },
    {
        title: 'IP Kameralar',
        slug: 'ip-cameras',
        description: 'Tüm IP kameralar yüksek çözünürlüklü video, web tarayıcı erişimi ve CMOS teknolojisine sahiptir, bu da sert ışıkta görüntüde lekelenme ve daha az parlama anlamına gelir.',
        features: ['Yüksek Çözünürlüklü Görüntüler', 'Çoklu Kameralar', 'Kanıt Yakalama', 'Kaydedilebilir'],
        image: 'placeholder-12',
        imageHint: 'IP camera',
    },
    {
        title: 'Monitörler',
        slug: 'monitors',
        description: 'Monitörler, sürücülerin ve operatörlerin güvenli bir şekilde manevra yapmasını ve araç kullanmasını sağlar. Brigade monitörleri, sürücünün insanları veya engelleri de içeren kamera görüntüsündeki her şeyi canlı bir beslemeyle görmesine yardımcı olarak kör noktaları görmesine ve geri vites yardımı sunmasına olanak tanır.',
        features: ['Yüksek Çözünürlüklü', 'Gerçek Zamanlı Görünümler', 'Ses', 'Çoklu Kamera Girişleri'],
        image: 'placeholder-14',
        imageHint: 'in-cab monitor',
    },
    {
        title: 'Kablosuz Kamera Monitör Sistemi',
        slug: 'wireless-camera-system',
        description: 'Büyük bir araca veya makineye bir geri görüş kamerası sistemi bağlamak, kurulacak kablo miktarı nedeniyle zaman alıcı ve zahmetli olabilir. Brigade’in kablosuz sistemi fazla kablolamayı ortadan kaldırır, iki saate kadar montaj süresinden tasarruf sağlar ve mafsallı araçlarda ek geri çekilebilir sarmal kablo ihtiyacını ortadan kaldırır.',
        features: ['Uyumluluk', 'Verici Eşleştirme', 'Basitleştirilmiş', 'Değiştirilebilir'],
        image: 'placeholder-1',
        imageHint: 'wireless camera system'
    },
    {
        title: 'AI Teknolojili Kameralar',
        slug: 'ai-cameras',
        description: 'Acil servis araçlarının sürücüleri sayısız tehlikeyle karşılaşır. Olaylara hızla müdahale etmek, yoğun trafikte ve kalabalık yaya alanlarında yüksek hızlarda gezinmeyi gerektirir. Yapay Zeka kullanarak, kameralar önceden tanımlanmış algılama bölgesi içindeki yayaları algılar ve tanır ve olası bir çarpışmadan önce sürücüyü görsel ve/veya sesli olarak güvenilir bir şekilde uyarır.',
        image: 'placeholder-19',
        imageHint: 'AI camera technology',
    },
];

const detectionSystemSubCategories = [
    {
        title: 'Backsense® Radar',
        slug: 'backsense-radar',
        description: 'Backsense® ağır hizmet tipi radar yakınlık sensör sistemleri, kör noktalardaki nesneleri tespit etmek için tasarlanmıştır ve olayları önemli ölçüde azaltır. Sensörler, sabit algılama menzilli modellerde ve özel algılama alanlarına izin veren ve sabit nesneleri veya kaportayı kalibre etme yeteneğine sahip tamamen programlanabilir modellerde mevcuttur.',
        features: ['Yanlış Uyarıları En Aza İndirir', 'Sesli Sürücü Uyarıları', 'Hem yol içi hem de yol dışı uygulamalar için uygundur', 'Ağır Hizmet Tipi'],
        image: 'placeholder-24',
        imageHint: 'radar sensor',
    },
    {
        title: 'Radar Predict',
        slug: 'radar-predict',
        description: 'Yapay Zeka teknolojisini kullanan Radar Predict, hem aracın hem de bisikletlinin hız ve yönü gibi verileri analiz eden çift radarlı bir sistemdir. Statik ve hareketli nesneler arasında ayrım yaparak, Radar Predict algoritması bir bisikletli ile çarpışma olasılığı yüksek olduğunda sürücüyü uyarır.',
        features: ['Yan kör nokta yönetmeliklerine uygundur', 'Yanlış alarmları azaltır', 'Zahmetsiz kurulum', 'Geniş algılama alanı'],
        image: 'placeholder-22',
        imageHint: 'AI radar prediction',
    },
    {
        title: 'Ultrasonik Sensörler',
        slug: 'ultrasonic-sensors',
        description: 'Ultrasonik sensörler kullanarak engel tespiti, hem araç hasarını hem de yayalar veya bisikletlilerle çarpışmaları en aza indirebilir. Kapalı alanlarda çalışan veya düşük hızda manevra yapan karayolu ticari araçları için mükemmeldir.',
        features: ['Sensör ve Montaj Ekipmanları', 'Görsel ve Sesli Ekran', 'Algoritma ECU', 'Sonradan Takılabilir'],
        image: 'placeholder-21',
        imageHint: 'ultrasonic parking sensor',
    },
    {
        title: 'Ön Radar',
        slug: 'front-radar',
        description: 'DVS Ön Radar ve R159 Ön Radar, aracın önünde 180° algılama açısına sahip gelişmiş çift radarlı çarpışma tahmin sistemleridir. Sürücü, yakın çevrede savunmasız bir yol kullanıcısı tespit edilirse, görsel ve sesli sinyallerle ön yardım radarı aracılığıyla uyarılır.',
        features: ['Görsel ve Sesli Ekran', 'Yanlış alarmları azaltır', 'Zahmetsiz kurulum', 'Geniş algılama alanı'],
        image: 'placeholder-23',
        imageHint: 'front vehicle radar',
    },
    {
        title: 'ZoneSafe® RFID Tespiti',
        slug: 'zonesafe-rfid-detection',
        description: 'ZoneSafe®, araçlar ve mobil tesisler etrafında algılama bölgeleri oluşturmak için Radyo Frekansı Tanımlama (RFID) teknolojisini kullanır. Sistem, işçiler ve araçlar için kısıtlı veya kontrollü erişim için bariyerleri, kapıları vb. tetiklemek üzere bağlanabilir.',
        features: ['Görüş Hattı Gerekmez', 'Saha Güvenliğini Artırır', 'Tam 360° Algılama', 'Benzersiz Etiket ID'],
        image: 'placeholder-25',
        imageHint: 'RFID safety system',
    },
    {
        title: 'Careye® AI Dönüş Asistanı',
        slug: 'careye-ai-turn-assist',
        description: 'CAREYE®, bir araca takılan kameralardan gelen görüntüleri doğru bir şekilde değerlendirmek için yapay zeka kullanır ve yakındaki insanların veya nesnelerin gelecekteki hareket seyrini hesaplayabilir. Bu verilere dayanarak, sistem sürücüyü olası bir çarpışma gerçekleşmeden önce gerçek zamanlı olarak güvenilir ve doğru bir şekilde uyarır.',
        features: ['Yanlış Pozitif Uyarıları En Aza İndirir', 'Her Türlü Araç İçin Uygundur', 'Gelişmiş Algılama', 'Nesneleri Sınıflandırma Yeteneği'],
        image: 'placeholder-21',
        imageHint: 'AI collision warning',
    },
];


export async function generateStaticParams() {
    return allCategories.map((category) => ({
        kategoriSlug: categoryToSlug(category),
    }));
}

export default function UrunKategoriPage({ params }: { params: { kategoriSlug: string } }) {
  const categoryName = slugToCategory(params.kategoriSlug);

  if (!categoryName) {
      return <PlaceholderContent title="Kategori Bulunamadı" description="Aradığınız ürün kategorisi mevcut değil." />
  }
  
  const filteredProducts = products.filter(p => p.category === categoryName);

  const isCameraMonitor = params.kategoriSlug === 'kamera-monitor-sistemleri';
  const isDetectionSystem = params.kategoriSlug === 'tespit-sistemleri';
  const hasSpecialLayout = isCameraMonitor || isDetectionSystem;

  let pageDescription = "Bu kategoriye ait tüm ürünlerimizi aşağıda bulabilirsiniz.";
  if (isCameraMonitor) {
    pageDescription = "Araç kameraları, sürücünün kör noktaları görmesine yardımcı olabilir. Kameranın görüş alanındaki her şeyi monitörde canlı olarak göstererek, sürücülerin ve operatörlerin güvenli bir şekilde manevra yapmasını ve araç kullanmasını sağlarlar.";
  } else if (isDetectionSystem) {
    pageDescription = "Brigade’in Tespit Sistemleri, hareketli veya sabit olsun, araca yakın engeller hakkında sürücüyü uyarır. Kabin içindeki sesli ve/veya görsel bir uyarı, mesafeyi bildirirken, arabanın döndüğünü bisikletlilere ve yayalara bildirmek için isteğe bağlı bir harici konuşma alarmı eklenebilir.";
  }


  return (
    <>
      <div className="bg-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
            <div className="inline-block">
                <Button asChild variant="ghost" size="sm">
                    <Link href="/urunler">
                        <ChevronLeft className="mr-2 h-4 w-4" />
                        Tüm Kategoriler
                    </Link>
                </Button>
            </div>
          <h1 className="text-4xl font-bold font-headline mt-2">{categoryName}</h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
            {pageDescription}
          </p>
        </div>
      </div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <main>
            {hasSpecialLayout ? (
                 <div className="space-y-16">
                    {(isCameraMonitor ? cameraMonitorSubCategories : detectionSystemSubCategories).map((subCat, index) => (
                        <SubCategoryShowcase
                            key={subCat.slug}
                            {...subCat}
                            direction={index % 2 === 0 ? 'normal' : 'reverse'}
                        />
                    ))}
                </div>
            ) : (
                <>
                    <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-6">
                        {filteredProducts.map(product => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </div>
                    {filteredProducts.length === 0 && (
                        <div className="text-center py-12">
                            <Card className="max-w-md mx-auto p-8">
                                <p className="text-muted-foreground">Bu kategoride gösterilecek ürün bulunmamaktadır.</p>
                                <Button asChild className="mt-4">
                                    <Link href="/urunler">Diğer Kategorilere Göz Atın</Link>
                                </Button>
                            </Card>
                        </div>
                    )}
                </>
            )}
        </main>
      </div>
    </>
  );
}

    