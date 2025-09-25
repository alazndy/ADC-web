
import { products } from '@/lib/data';
import { ProductCard } from '@/components/product-card';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ChevronLeft, Check, Download } from 'lucide-react';
import { PlaceholderContent } from '@/components/placeholder-content';
import { categoryToSlug, slugToCategory, allCategories } from '@/lib/product-categories';
import { SubCategoryShowcase } from '@/components/subcategory-showcase';
import Image from 'next/image';
import { findImage } from '@/lib/placeholder-images';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

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

const driverSafetySystemSubCategories = [
    {
        title: 'Sürücü Güvenlik Kameraları',
        slug: 'driver-safety-cameras',
        description: 'Sürücü uyuşukluğu ve uyanıklık uyarı sistemleri (DDAW), dikkatsizlik, dikkat dağınıklığı ve yorgunluktan kaynaklanan potansiyel sorunlara karşı sürücü uyarıları sağlamak için AI teknolojisini kullanan kompakt, kabin içi sürücü destek sistemleridir.',
        features: ['Uyuşukluk', 'Dikkat Dağınıklığı', 'Esneme', 'Cep telefonu kullanımı', 'Emniyet kemeri takmama', 'Sigara içme'],
        image: 'placeholder-20',
        imageHint: 'driver safety camera',
    },
    {
        title: 'MDR AI Kameralar',
        slug: 'mdr-ai-cameras',
        description: 'MDR AI Kameralar, dikkatsizlik, dikkat dağınıklığı ve yorgunluktan kaynaklanan potansiyel sorunlara karşı sürücü uyarıları sağlamak için AI teknolojisini kullanan kompakt, kabin içi sürücü destek sistemleridir.',
        features: [
            'Sürücü yorgunluğu', 
            'Esneme', 
            'Sürücü dikkat dağınıklığı', 
            'El cihazı kullanma', 
            'Sigara içme',
            'Şeritten ayrılma (LDW)',
            'Takip mesafesi uyarısı (HMW)',
            'Önden çarpışma uyarısı (FCW)'
        ],
        image: 'placeholder-19',
        imageHint: 'AI dashcam',
    },
];

const recordingSystemSubCategories = [
    {
        title: 'Dijital Kayıt Cihazları (MDR)',
        slug: 'digital-recorders-mdr',
        description: 'Brigade\'in MDR dijital video kayıt cihazları, bir olay durumunda yanılmaz kanıtlar ve doğru tanıklıklar sağlayarak ideal çözümü sunar. Sizi ve sürücülerinizi koruduğundan emin olabilirsiniz.',
        features: ['Koruma Sağlar', 'En İyi Sürücü Pratiklerini Teşvik Eder', 'Vandalizmi Caydırır', 'İç Huzuru'],
        image: 'placeholder-16',
        imageHint: 'digital video recorder',
    },
    {
        title: 'Araç Kameraları (Dashcams)',
        slug: 'dashcams',
        description: 'Brigade\'in Araç Kameraları – kompakt, birleşik kamera ve kayıt sistemleri – araç olayları durumunda kanıt sağlar. Avuç içi büyüklüğündeki cihazlar, ön camınıza kolayca takılarak ilerideki yolu kaydetmenizi sağlar.',
        features: ['Yüksek Çözünürlük', 'Konum ve Hız', 'Çoklu Kayıt Modları', 'İndirilebilir Yazılım'],
        image: 'placeholder-18',
        imageHint: 'dashcam view',
    },
    {
        title: 'Yapay Zeka Destekli Araç Kameraları',
        slug: 'ai-connected-dashcams',
        description: 'Yapay Zeka Destekli Araç Kamerası, olay uyarıları, yüksek çözünürlüklü olay kaydı ve sürücü davranışını izlemek için AI teknolojisini kullanan, ön cama monte edilen kompakt bir çift kamera sistemidir.',
        features: ['Yapay Zeka', '4G Bağlantısı', '1TB Depolama', 'Yüksek Çözünürlük'],
        image: 'placeholder-19',
        imageHint: 'AI dashcam interface',
    },
    {
        title: 'AI Sürücü Dikkat Dağınıklığı Kameraları',
        slug: 'ai-driver-distraction-cameras',
        description: 'AI Sürücü Dikkat Dağınıklığı Kameraları, sürücü dikkat dağınıklığını ve yorgunluğunu azaltmak için tasarlanmış gelişmiş bir güvenlik sistemidir. Aracın içine yerleştirilen kamera, sürücünün yüzünü, gözlerini ve kafa hareketlerini sürekli olarak izler. Dahili AI, dikkat dağınıklığı ve yorgunluk belirtilerini tespit etmek için sürücüyü analiz eder ve sürücüye sesli uyarılar verir.',
        features: ['Daha Güvenli Yollar', 'Aşamalı Uyarılar', 'Sürücü Güvencesi'],
        image: 'placeholder-20',
        imageHint: 'driver monitoring camera',
    },
];

const warningSystemSubCategories = [
    {
        title: 'Sessiz Araç Ses Cihazı (AVAS)',
        slug: 'quiet-vehicle-sounder-avas',
        description: 'Brigade, patentli bbs-tek® teknolojisini entegre eden çok frekanslı bir Sessiz Araç Ses Cihazı geliştirmiştir. bbs-tek®, geniş bir Beyaz Ses® frekans aralığı kullanır. Bu, aracın doğrudan yolundaki herkesin sesin nereden ve hangi yönden geldiğini anında bulmasını ve gerekirse kaçınma eylemi yapmasını sağlar. Daha güvenli bir alternatif yoktur.',
        features: ['Yayaları Uyarır', 'Patentli Teknoloji', 'Otomatik Ses Seviyesi', 'Kesme Özelliği'],
        image: 'placeholder-27',
        imageHint: 'vehicle sounder device',
    },
    {
        title: 'Geri Vites ve Uyarı Alarmları',
        slug: 'reversing-warning-alarms',
        description: 'Patentli Beyaz Ses® alarmlarımız dünyanın en güvenli geri vites alarmlarıdır ve gürültü rahatsızlığına neden olmaz. Takması basit ve nispeten ucuz olan ‘şşş şşş’ beyaz gürültü, kulaklık veya kulak koruyucu takarken bile veya işitme zorluğu çeken insanlar için bile tehlike bölgesinde son derece net bir şekilde duyulabilir.',
        features: ['Gürültü Rahatsızlığına Neden Olmaz', '-5 dB Daha Sessiz', 'Gece Teslimatları', 'Ömür Boyu Garanti'],
        image: 'placeholder-26',
        imageHint: 'reversing alarm',
    },
    {
        title: 'Tonal Alarmlar',
        slug: 'tonal-alarms',
        description: 'Bu alarmlar, ortam gürültüsünü aşarak yayaları ve çalışanları hareket eden araçların veya ekipmanların varlığına karşı uyarmak için kolayca tanınabilen belirli bir ton yaymak üzere tasarlanmıştır. Tonal alarmları kullanmanın birincil nedeni, bölgedeki diğer seslerin üzerinde duyulabilen net, sesli bir uyarı sağlayarak olay ve yaralanma riskini azaltmaktır.',
        features: ['Akıllı Alarmlar', 'Ağır Hizmet', 'Orta Hizmet', 'Hafif Hizmet'],
        image: 'placeholder-28',
        imageHint: 'industrial alarm',
    },
];

const brigadeVanProducts = {
    "Kamera Monitör Sistemleri": [
        {
            title: "AHD Ön Kamera",
            features: ["PAL/NTSC Modelleri", "Yüksek Çözünürlük (720p)", "IP55", "Görüş açısı: 92x51x102.9°", "Boyut: 115x98x53mm", "1 yıl garanti"],
            image: "placeholder-7"
        },
        {
            title: "AHD Plaka Kamerası",
            features: ["PAL/NTSC Modelleri", "Yüksek Çözünürlük (720p)", "IP69K", "Görüş açısı: 145x80x165.6°", "Boyut: 215x68x42mm", "LED'ler", "Ses", "1 yıl garanti"],
            image: "placeholder-9"
        },
        {
            title: "AHD Eyeball Kamera",
            features: ["PAL/NTSC Modelleri", "Yüksek Çözünürlük (720p)", "IP69K", "Görüş açısı: 110x82x152°", "Boyut: 57x42x70mm", "Dönebilen Lens", "LED'ler", "Ses", "3 yıl garanti"],
            image: "placeholder-9"
        },
        {
            title: "7″ FHD Ayna Monitör",
            features: ["7″ Modeller", "Yüksek Çözünürlük (1080p)", "2 Kamera girişi", "2 Alarm tetikleyicisi", "Boyut: 250x107x40mm", "Ses", "1 yıl garanti"],
            image: "placeholder-15"
        }
    ],
    "Kayıt Sistemleri": [
        {
            title: "FHD Dijital Kayıt Cihazı",
            features: ["Yüksek Çözünürlük (1080p)", "4 Kamera girişi", "4 Alarm tetikleyicisi", "256GB", "Boyut: 153x141x42mm", "Ses", "1 yıl garanti"],
            image: "placeholder-16"
        },
        {
            title: "AHD Dashcam Kayıt Cihazı",
            features: ["Yüksek Çözünürlük (720p)", "12-24Vdc", "Dahili kamera", "1 harici kamera girişi", "1 video çıkışı", "Hızlı indirilebilir kayıtlar", "1 yıl garanti"],
            image: "placeholder-18"
        }
    ]
};


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
  const isDriverSafety = params.kategoriSlug === 'surucu-guvenlik-sistemleri';
  const isRecordingSystem = params.kategoriSlug === 'kayit-sistemleri';
  const isWarningSystem = params.kategoriSlug === 'uyari-alarmlari';
  const isBrigadeVan = params.kategoriSlug === 'brigade-van';

  let subCategories = [];
  if (isCameraMonitor) subCategories = cameraMonitorSubCategories;
  else if (isDetectionSystem) subCategories = detectionSystemSubCategories;
  else if (isDriverSafety) subCategories = driverSafetySystemSubCategories;
  else if (isRecordingSystem) subCategories = recordingSystemSubCategories;
  else if (isWarningSystem) subCategories = warningSystemSubCategories;
  
  const hasSpecialLayout = subCategories.length > 0 || isBrigadeVan;

  let pageDescription = "Bu kategoriye ait tüm ürünlerimizi aşağıda bulabilirsiniz.";
  if (isCameraMonitor) {
    pageDescription = "Araç kameraları, sürücünün kör noktaları görmesine yardımcı olabilir. Kameranın görüş alanındaki her şeyi monitörde canlı olarak göstererek, sürücülerin ve operatörlerin güvenli bir şekilde manevra yapmasını ve araç kullanmasını sağlarlar.";
  } else if (isDetectionSystem) {
    pageDescription = "Brigade’in Tespit Sistemleri, hareketli veya sabit olsun, araca yakın engeller hakkında sürücüyü uyarır. Kabin içindeki sesli ve/veya görsel bir uyarı, mesafeyi bildirirken, arabanın döndüğünü bisikletlilere ve yayalara bildirmek için isteğe bağlı bir harici konuşma alarmı eklenebilir.";
  } else if (isDriverSafety) {
    pageDescription = "Brigade’in Sürücü Güvenlik Sistemleri, yol koşullarını ve sürücü davranışını izlemek, uyuşukluk, dikkat dağınıklığı ve yorgunluk belirtilerini tespit etmek için AI teknolojisinden yararlanır. Bu kompakt, kabin içi sistemler, sürücü güvenliğini ve uyanıklığını artırmak için gerçek zamanlı sesli uyarılar verir.";
  } else if (isRecordingSystem) {
    pageDescription = "Filo güvenliğinizi, Brigade Electronics'in araç kayıt sistemleriyle artırın. Filonuz için en üst düzeyde güvenlik sağlamak üzere kapsamlı izleme ile.";
  } else if (isWarningSystem) {
    pageDescription = "Brigade Electronics, kentsel ve çalışma ortamlarındaki alarmların etkinliği sorunlarını ele alan ilk geri vites alarmı modellerini tanıttığından beri geri vites alarmı teknolojisinin ön saflarında yer almaktadır.";
  } else if (isBrigadeVan) {
    pageDescription = "Van pazarında karşılaşılan güvenlik zorluklarıyla mücadele etmek için özel olarak geliştirilen Brigade Van, hızlı hareket eden bu pazar için özel olarak seçilmiş kaliteli ürünleri rekabetçi fiyatlarla sunar.";
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
                <>
                {isBrigadeVan ? (
                    <div className="space-y-16">
                        <div>
                            <h2 className="text-3xl font-headline font-bold text-center mb-10">Kamera Monitör Sistemleri</h2>
                            <p className="max-w-3xl mx-auto text-center text-muted-foreground mb-12">Brigade Van kamera monitör sistemleri, sürücülerin güvenli bir şekilde manevra yapmasını ve araç kullanmasını sağlar. Kameralar, sürücünün kör noktaları görmesine yardımcı olabilir ve aracın kamera görüşündeki her şeyi (insanlar veya engeller dahil) monitörde canlı bir besleme sunarak geri vites yardımı sağlar. Tüm kameralar Brigade Van kayıt cihazlarıyla uyumludur.</p>
                            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                                {brigadeVanProducts["Kamera Monitör Sistemleri"].map((product, index) => (
                                    <Card key={index} className="flex flex-col">
                                        <CardHeader>
                                             <div className="aspect-square relative rounded-md overflow-hidden bg-card">
                                                <Image src={findImage(product.image)!.imageUrl} alt={product.title} fill className="object-contain p-4"/>
                                             </div>
                                            <CardTitle className="pt-4">{product.title}</CardTitle>
                                        </CardHeader>
                                        <CardContent className="flex-grow">
                                            <ul className="text-sm text-muted-foreground space-y-2">
                                            {product.features.map((feature, i) => (
                                                <li key={i} className="flex items-center gap-2">
                                                    <Check className="h-4 w-4 text-primary" />
                                                    <span>{feature}</span>
                                                </li>
                                            ))}
                                            </ul>
                                        </CardContent>
                                    </Card>
                                ))}
                            </div>
                        </div>

                        <div>
                            <h2 className="text-3xl font-headline font-bold text-center mb-10">Kayıt Sistemleri</h2>
                            <p className="max-w-3xl mx-auto text-center text-muted-foreground mb-12">Sahte iddialar, "çarpışma için para" dolandırıcılıkları ve kayıplar, işletmelere her yıl milyonlara mal oluyor; ayrıca araç vandalizmi ve sürücülere yönelik saldırılar gibi sorunlar da var. Brigade Van'ın dijital kayıt ürünleri, bir olay durumunda doğru bir tanık sağlayarak ve reddedilemez kanıtlar sunarak bir çözüm sunar.</p>
                             <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                                {brigadeVanProducts["Kayıt Sistemleri"].map((product, index) => (
                                     <Card key={index} className="flex flex-col">
                                        <CardHeader>
                                             <div className="aspect-square relative rounded-md overflow-hidden bg-card">
                                                <Image src={findImage(product.image)!.imageUrl} alt={product.title} fill className="object-contain p-4"/>
                                             </div>
                                            <CardTitle className="pt-4">{product.title}</CardTitle>
                                        </CardHeader>
                                        <CardContent className="flex-grow">
                                            <ul className="text-sm text-muted-foreground space-y-2">
                                            {product.features.map((feature, i) => (
                                                <li key={i} className="flex items-center gap-2">
                                                    <Check className="h-4 w-4 text-primary" />
                                                    <span>{feature}</span>
                                                </li>
                                            ))}
                                            </ul>
                                        </CardContent>
                                    </Card>
                                ))}
                            </div>
                        </div>

                         <div className="grid md:grid-cols-2 gap-8">
                             <Card>
                                <CardHeader>
                                    <CardTitle>Uyarı Sistemleri</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <h3 className="font-semibold">Sessiz Araç Ses Cihazı</h3>
                                    <p className="text-muted-foreground mt-2 mb-4">Elektrikli ve hibrit araçlar için ön hoparlör sistemi olan QVS, sessiz bir aracın yaklaştığını yayalara ve diğer savunmasız yol kullanıcılarına bildirir. bbs-tek® teknolojisini içeren bu sistemde, sesin perdesi ve seviyesi, içten yanmalı bir motora benzer şekilde araç hızıyla birlikte artar.</p>
                                     <h3 className="font-semibold">bbs-tek® Beyaz Ses® Geri Vites Alarmı</h3>
                                    <p className="text-muted-foreground mt-2">Anında bulunabilirliği ve yönlü sesi sayesinde dünyanın en güvenli alarmlarıdır. Çok frekanslı alarmlar sadece tehlike bölgesinde duyulur, böylece yerel sakinler için gürültü rahatsızlığını ortadan kaldırır.</p>
                                </CardContent>
                            </Card>
                             <Card>
                                <CardHeader>
                                    <CardTitle>Sensör Sistemleri</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-muted-foreground">Brigade'in ultrasonik yakınlık sensörleri, hem araç hasarını hem de yayalar, bisikletliler veya nesnelerle çarpışmaları en aza indirir. Kapalı alanlarda çalışan veya düşük hızda manevra yapan araçlar için mükemmeldir. Algılama sistemi, hareketli veya sabit olsun, araca yakın engeller hakkında sürücüyü uyarır.</p>
                                     <ul className="text-sm text-muted-foreground space-y-2 mt-4">
                                        <li className="flex items-center gap-2"><Check className="h-4 w-4 text-primary" />4 sensörlü sistem aracın arkasına takılır</li>
                                        <li className="flex items-center gap-2"><Check className="h-4 w-4 text-primary" />Askılı veya gömme montaj</li>
                                        <li className="flex items-center gap-2"><Check className="h-4 w-4 text-primary" />Sistem geri vitesle etkinleştirilir</li>
                                    </ul>
                                </CardContent>
                            </Card>
                         </div>
                    </div>
                ) : (
                    <div className="space-y-16">
                        {subCategories.map((subCat, index) => (
                            <SubCategoryShowcase
                                key={subCat.slug}
                                {...subCat}
                                direction={index % 2 === 0 ? 'normal' : 'reverse'}
                            />
                        ))}
                    </div>
                )}
                </>
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


    