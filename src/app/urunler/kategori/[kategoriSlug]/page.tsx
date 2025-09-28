import { products } from '@/lib/data';
import { PlaceholderContent } from '@/components/placeholder-content';
import { categoryToSlug, slugToCategory, allCategories } from '@/lib/product-categories';
import { 
    cameraMonitorSubCategories, 
    detectionSystemSubCategories, 
    driverSafetySystemSubCategories, 
    recordingSystemSubCategories, 
    warningSystemSubCategories 
} from '@/lib/data/subcategories';
import { UrunKategoriClientPage } from '@/components/urun-kategori-client-page';

export async function generateStaticParams() {
    return allCategories
        .filter(cat => categoryToSlug(cat) !== 'brigade-van')
        .map((category) => ({
            kategoriSlug: categoryToSlug(category),
    }));
}

export default function UrunKategoriPage({ params }: { params: { kategoriSlug: string } }) {
  const categoryName = slugToCategory(params.kategoriSlug);

  if (!categoryName || params.kategoriSlug === 'brigade-van') {
      return <PlaceholderContent title="Kategori Bulunamadı" description="Aradığınız ürün kategorisi mevcut değil." />
  }
  
  const filteredProducts = products.filter(p => p.category === categoryName);

  const isCameraMonitor = params.kategoriSlug === 'kamera-monitor-sistemleri';
  const isDetectionSystem = params.kategoriSlug === 'tespit-sistemleri';
  const isDriverSafety = params.kategoriSlug === 'surucu-guvenlik-sistemleri';
  const isRecordingSystem = params.kategoriSlug === 'kayit-sistemleri';
  const isWarningSystem = params.kategoriSlug === 'uyari-sistemleri';
  
  let subCategories: any[] = [];
  if (isCameraMonitor) subCategories = cameraMonitorSubCategories;
  else if (isDetectionSystem) subCategories = detectionSystemSubCategories;
  else if (isDriverSafety) subCategories = driverSafetySystemSubCategories;
  else if (isRecordingSystem) subCategories = recordingSystemSubCategories;
  else if (isWarningSystem) subCategories = warningSystemSubCategories;
  
  const hasSpecialLayout = subCategories.length > 0;

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
  }

  const pageProps = {
    categoryName,
    pageDescription,
    hasSpecialLayout,
    subCategories,
    filteredProducts,
  };

  return <UrunKategoriClientPage {...pageProps} />;
}
