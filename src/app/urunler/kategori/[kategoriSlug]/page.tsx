
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
          {isCameraMonitor ? (
            <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
              Araç kameraları, sürücünün kör noktaları görmesine yardımcı olabilir. Kameranın görüş alanındaki her şeyi monitörde canlı olarak göstererek, sürücülerin ve operatörlerin güvenli bir şekilde manevra yapmasını ve araç kullanmasını sağlarlar.
            </p>
          ) : (
             <p className="mt-2 text-lg text-muted-foreground max-w-3xl mx-auto">
                Bu kategoriye ait tüm ürünlerimizi aşağıda bulabilirsiniz.
            </p>
          )}
        </div>
      </div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <main>
            {isCameraMonitor ? (
                 <div className="space-y-16">
                    {cameraMonitorSubCategories.map((subCat, index) => (
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
