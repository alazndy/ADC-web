import type { Product, Service, Sector, Project } from '@/lib/types';
import { Camera, ShieldCheck, Wrench, Route, Cpu, Ship, Truck, Bus, Tractor, Construction } from 'lucide-react';

export const mockServices: Service[] = [
  {
    id: '1',
    title: 'Brigade Sistem Entegrasyonu',
    slug: 'brigade-sistem-entegrasyonu',
    icon: Wrench,
    summary: 'Araçlarınıza özel Brigade güvenlik sistemlerinin profesyonel montaj ve entegrasyonu.',
    content: '<p>ADC Tasarım olarak, Brigade Electronics ürünlerinin yetkili servis ve montaj merkeziyiz. Uzman ekibimiz, her türlü ticari araca ve mobil iş makinesine yönelik kamera monitör sistemleri, radar sensörleri ve mobil dijital kayıt cihazları gibi çözümlerin entegrasyonunu titizlikle gerçekleştirir.</p><p>Sürecimiz, aracınızın ve operasyonel ihtiyaçlarınızın analiziyle başlar. En uygun sistem konfigürasyonunu belirledikten sonra, fabrika standartlarında montaj ve kalibrasyon işlemlerini tamamlarız. Sistemlerin araç elektroniği ile tam uyumlu çalışmasını sağlayarak, maksimum güvenlik ve performans elde etmenizi garanti ederiz.</p>',
  },
  {
    id: '2',
    title: 'Özelleştirilmiş Güvenlik Çözümleri',
    slug: 'ozellestirilmis-guvenlik-cozumleri',
    icon: ShieldCheck,
    summary: 'Filo ve operasyonlarınıza özel, uçtan uca güvenlik ve verimlilik sistemleri tasarlıyoruz.',
    content: '<p>Her filonun ve şantiyenin kendine özgü zorlukları olduğunun farkındayız. Standart çözümlerin yetersiz kaldığı durumlarda, ADC Tasarım\'ın mühendislik birikimi devreye girer. Kör noktaların tamamen ortadan kaldırılması, karmaşık manevra alanlarında tam görüş sağlanması veya özel mobil takip sistemlerinin geliştirilmesi gibi konularda size özel projeler üretiyoruz.</p>',
  },
];

export const mockTechSolutions: Service[] = [
    {
    id: '3',
    title: 'Telematik ve Filo Yönetimi',
    slug: 'telematik-ve-filo-yonetimi',
    icon: Route,
    summary: 'Araç takibi, sürücü davranışı analizi ve operasyonel verimlilik için gelişmiş telematik çözümleri.',
    content: '<p>BRIDGE mobil dijital kayıt cihazları ve telematik altyapısını kullanarak filonuzun tam kontrolünü elinize alın. Araçlarınızın konumunu anlık olarak izleyin, yakıt tüketimini optimize edin, sürücü performansını değerlendirin ve bakım süreçlerini otomatikleştirin. Topladığımız verilerle size özel raporlar sunarak, operasyonel maliyetlerinizi düşürmenize yardımcı oluyoruz.</p>',
  },
  {
    id: '4',
    title: 'Mobil DVR ve Bulut Depolama',
    slug: 'mobil-dvr-ve-bulut-depolama',
    icon: Cpu,
    summary: 'Olay anı görüntülerini anında kaydeden, uzaktan erişilebilir mobil DVR sistemleri.',
    content: '<p>Brigade\'in MDR serisi mobil dijital kayıt cihazları ile kaza anlarını, hırsızlık girişimlerini veya operasyonel hataları saniye saniye kaydedin. 4G bağlantısı sayesinde bu kayıtlara dünyanın her yerinden anında erişin. Otomatik bulut yedekleme çözümlerimizle, kritik verilerinizin güvende olduğundan emin olun.</p>',
  }
];


export const mockSectors: Sector[] = [
  {
    id: '1',
    name: 'Lojistik ve Taşımacılık',
    slug: 'lojistik-ve-tasimacilik',
    imageUrl: 'sector-logistics',
    imageHint: 'trucks warehouse',
    challenges: 'Kör noktalar, geri manevra kazaları, yük ve araç güvenliği, artan yakıt maliyetleri.',
    solutionsContent: 'Backeye®360 kamera sistemleri ile aracın etrafında 360 derece kuşbakışı görüş sağlayarak manevra kazalarını önlüyoruz. Mobil DVR sistemleri ile yük güvenliğini sağlıyor, telematik çözümlerle rota ve yakıt optimizasyonu sunuyoruz.',
  },
  {
    id: '2',
    name: 'İnşaat ve Hafriyat',
    slug: 'insaat-ve-hafriyat',
    imageUrl: 'sector-construction',
    imageHint: 'construction site',
    challenges: 'Şantiye alanındaki personel ve diğer araçların operatör tarafından fark edilmemesi, zorlu arazi koşullarında manevra zorlukları, ekipman güvenliği.',
    solutionsContent: 'Brigade\'in ultra dayanıklı kamera ve radar sistemleri, en zorlu şantiye koşullarında bile kusursuz çalışır. Sidescan® ve Backscan® radar sensörleri, operatörü sesli ve görsel olarak uyararak kör noktalardaki tehlikeleri bertaraf eder.',
  },
  {
    id: '3',
    name: 'Belediye ve Atık Yönetimi',
    slug: 'belediye-ve-atik-yonetimi',
    imageUrl: 'sector-waste',
    imageHint: 'garbage truck',
    challenges: 'Dar sokaklar, yaya ve bisikletli trafiği, geri manevra sırasında yaşanan kazalar, personel güvenliği.',
    solutionsContent: 'Özellikle çöp kamyonları ve yol süpürme araçları için tasarlanan 360 derece kamera sistemleri ve radar çözümleri, operatörün çevresindeki tüm hareketliliği görmesini sağlar. Bu, özellikle meskun mahallerdeki operasyonlarda kaza riskini minimuma indirir.',
  },
    {
    id: '4',
    name: 'Yolcu Taşımacılığı',
    slug: 'yolcu-tasimaciligi',
    imageUrl: 'sector-bus',
    imageHint: 'city bus',
    challenges: 'Duraklara yanaşma, yolcu indirme-bindirme sırasında güvenlik, şehir içi manevralar, vandalizm.',
    solutionsContent: 'Okul servisleri, şehir içi ve şehirler arası otobüsler için geliştirdiğimiz kamera ve kayıt sistemleri, hem yolcu güvenliğini artırır hem de olası adli durumlarda kanıt niteliği taşır. Kör nokta kameraları, şoförün aracın yan ve arka taraflarını tam olarak görmesini sağlar.',
  },
];

export const mockProducts: Product[] = [
  {
    id: '1',
    name: 'Backeye®360 BN360-200',
    slug: 'backeye-360-bn360-200',
    category: 'Kamera Monitör Sistemleri',
    shortDescription: '4 kameralı, gerçek zamanlı 360° kuşbakışı görüntü sağlayan akıllı kamera monitör sistemi.',
    longDescription: 'Brigade Backeye®360, dört ultra geniş açılı kameradan gelen görüntüleri birleştirerek aracın çevresinin gerçek zamanlı, tek bir kuşbakışı görüntüsünü oluşturur. Bu sistem, sürücünün kör noktaları tamamen ortadan kaldırarak düşük hızlarda manevra yaparken bisikletliler, yayalar veya engeller gibi potansiyel tehlikeleri görmesini sağlar. Sistem, park etme, yanaşma ve dar alanlarda hareket etme gibi durumlar için idealdir.',
    features: ['4 kamera ile 360° tam görüş', 'Gerçek zamanlı görüntü işleme', 'Özelleştirilebilir ekran görünümleri', 'Tetikleyicilerle otomatik görünüm değiştirme (örn: geri vites)', 'Ağır hizmet tipi, suya ve toza dayanıklı kameralar'],
    imageUrls: ['product-backeye-360-1', 'product-backeye-360-2'],
    datasheetUrl: '/docs/BN360-200-datasheet.pdf',
    relatedSectors: ['lojistik-ve-tasimacilik', 'insaat-ve-hafriyat'],
    isFeatured: true,
  },
  {
    id: '2',
    name: 'Sidescan® Ultrasonik Sensörler',
    slug: 'sidescan-ultrasonic-sensorler',
    category: 'Radar ve Sensör Sistemleri',
    shortDescription: 'Aracın yan tarafındaki kör noktaları algılayan ultrasonik sensör sistemi.',
    longDescription: 'Sidescan® sistemi, özellikle büyük kamyon ve otobüslerin dönüş manevraları sırasında yan kör noktalara giren yayaları, bisikletlileri veya diğer araçları algılamak için tasarlanmıştır. Sistem, sürücüyü kademeli bir sesli uyarı ve görsel bir ekran ile uyararak olası bir çarpışmayı önlemesine yardımcı olur. Özellikle şehir içi kullanım için kritik bir güvenlik donanımıdır.',
    features: ['4 sensörlü algılama kiti', 'Kademeli sesli ve görsel uyarı', 'Düşük hızlarda otomatik aktivasyon', 'Sadece hareketli nesneleri algılama özelliği (opsiyonel)', 'Dayanıklı ve hava koşullarından etkilenmeyen tasarım'],
    imageUrls: ['product-sidescan-1', 'product-sidescan-2'],
    datasheetUrl: '/docs/Sidescan-datasheet.pdf',
    relatedSectors: ['lojistik-ve-tasimacilik', 'belediye-ve-atik-yonetimi', 'yolcu-tasimaciligi'],
    isFeatured: true,
  },
  {
    id: '3',
    name: 'MDR-508 Mobil DVR',
    slug: 'mdr-508-mobil-dvr',
    category: 'Mobil Kayıt Cihazları',
    shortDescription: '8 kanallı, 1TB depolama ve 4G/WiFi özellikli mobil dijital kayıt cihazı.',
    longDescription: 'Brigade MDR-508, filonuzdaki araçlardan yüksek kaliteli video kaydı almak için tasarlanmış sağlam bir mobil DVR sistemidir. 8 adede kadar kamerayı destekler ve 1TB dahili depolama alanına sahiptir. Dahili 4G ve WiFi modülleri sayesinde, kayıtlara uzaktan erişebilir, canlı görüntü izleyebilir ve olay anında anlık bildirimler alabilirsiniz. GPS modülü ile araç konumu ve hızı da kaydedilir.',
    features: ['8 AHD kamera kanalı', '1TB HDD (2TB opsiyonel)', 'Dahili 4G, WiFi ve GPS', 'G-sensör ile olay tespiti', 'Kilitli ve titreşime dayanıklı kasa'],
    imageUrls: ['product-mdr-508-1'],
    datasheetUrl: '/docs/MDR-508-datasheet.pdf',
    relatedSectors: ['lojistik-ve-tasimacilik', 'yolcu-tasimaciligi', 'insaat-ve-hafriyat'],
    isFeatured: false,
  },
    {
    id: '4',
    name: 'Backeye®360 BN360-300',
    slug: 'backeye-360-bn360-300',
    category: 'Kamera Monitör Sistemleri',
    shortDescription: 'Yeni nesil HD kalite 360° kuşbakışı görüntü sağlayan akıllı kamera monitör sistemi.',
    longDescription: 'Brigade Backeye®360 serisinin en yeni üyesi BN360-300, HD kameraları ve gelişmiş görüntü işleme algoritması ile daha net ve akıcı bir 360 derece görüş sunar. Özellikle büyük iş makineleri ve karmaşık araç geometrileri için tasarlanmıştır.',
    features: ['HD 720p kameralar', '1080p HD monitör çıkışı', 'Gelişmiş gece görüşü', 'Daha hızlı ve akıcı görüntü birleştirme', 'Araç üzeri grafik bindirme (Overlay)'],
    imageUrls: ['product-backeye-360-1', 'product-backeye-360-2'],
    datasheetUrl: '/docs/BN360-300-datasheet.pdf',
    relatedSectors: ['insaat-ve-hafriyat', 'lojistik-ve-tasimacilik'],
    isFeatured: true,
  },
];

export const mockProjects: Project[] = [
  {
    id: '1',
    title: 'Büyük Bir Lojistik Firması İçin Filo Güvenlik Modernizasyonu',
    slug: 'lojistik-filo-guvenlik-modernizasyonu',
    clientName: 'Gizli Lojistik A.Ş.',
    sector: 'lojistik-ve-tasimacilik',
    coverImage: 'project-logistics-1',
    imageHint: 'truck fleet',
    challenge: 'Müşterimiz, şehir içi dağıtım yapan çekici ve kamyon filosunda, özellikle sağa dönüşler ve geri manevralar sırasında sık sık küçük çaplı kazalar yaşıyordu. Bu durum hem maddi hasara hem de sigorta maliyetlerinde artışa neden oluyordu.',
    solution: 'Filodaki 50 araca, Brigade Backeye®360 BN360-200 sistemi ve Sidescan® ultrasonik sensörler entegre edildi. Backeye®360, şoförlere manevra sırasında tam bir kuşbakışı görüş sağlarken, Sidescan® sistemi dönüşlerde kör noktaya giren bisikletli ve yayalara karşı sesli uyarı verdi.',
    result: 'Projenin ilk 6 ayında, manevra kaynaklı kaza oranı %85 oranında azaldı. Şoförlerin manevra stresi önemli ölçüde düştü ve sigorta primlerinde düşüş için zemin hazırlandı.',
    usedProducts: ['backeye-360-bn360-200', 'sidescan-ultrasonic-sensorler'],
  },
  {
    id: '2',
    title: 'Belediye Atık Toplama Araçlarında Yaya Güvenliği Projesi',
    slug: 'belediye-atik-toplama-yaya-guvenligi',
    clientName: 'Anadolu Yakası Belediyesi',
    sector: 'belediye-ve-atik-yonetimi',
    coverImage: 'project-waste-1',
    imageHint: 'garbage truck city',
    challenge: 'Belediyenin atık toplama kamyonları, dar sokaklarda ve yoğun yaya trafiğinin olduğu bölgelerde çalışırken ciddi güvenlik riskleri oluşturuyordu. Özellikle aracın arkasında ve yanında çalışan personelin güvenliği en büyük endişeydi.',
    solution: 'Her bir atık toplama aracına, 4 kameralı bir MDR-508 mobil DVR sistemi, aracın arkası ve yanları için özel kameralar ve operatörü sesli olarak uyaran bir Backscan® radar sistemi kuruldu. Sistem, araç geri vitese takıldığında otomatik olarak devreye giriyor ve sürücü monitöründe arka kamera görüntüsünü gösteriyordu.',
    result: 'Proje sonrasında, araç çevresindeki iş kazaları sıfıra indirildi. Olası anlaşmazlık durumları için tüm operasyonlar kayıt altına alındı ve halktan gelen şikayetlerin çözümünde video kanıtları kullanıldı.',
    usedProducts: ['mdr-508-mobil-dvr'],
  },
];
