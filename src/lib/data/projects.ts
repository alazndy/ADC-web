import type { Project } from '@/lib/types';

export const projects: Project[] = [
  {
    id: '1',
    title: 'Büyük Bir Lojistik Firması İçin Filo Güvenlik Modernizasyonu',
    slug: 'lojistik-filo-guvenlik-modernizasyonu',
    clientName: 'Gizli Lojistik A.Ş.',
    sector: 'nakliye-ve-lojistik',
    coverImage: 'placeholder-29',
    imageHint: 'truck fleet',
    challenge: 'Müşterimiz, şehir içi dağıtım yapan çekici ve kamyon filosunda, özellikle sağa dönüşler ve geri manevralar sırasında sık sık küçük çaplı kazalar yaşıyordu. Bu durum hem maddi hasara hem de sigorta maliyetlerinde artışa neden oluyordu.',
    solution: 'Filodaki 50 araca, Brigade Backeye®360 BN360-300 sistemi ve Sidescan®Flex ultrasonik sensörler entegre edildi. Backeye®360, şoförlere manevra sırasında tam bir kuşbakışı görüş sağlarken, Sidescan® sistemi dönüşlerde kör noktaya giren bisikletli ve yayalara karşı sesli uyarı verdi.',
    result: 'Projenin ilk 6 ayında, manevra kaynaklı kaza oranı %85 oranında azaldı. Şoförlerin manevra stresi önemli ölçüde düştü ve sigorta primlerinde düşüş için zemin hazırlandı.',
    usedProducts: ['ahd-360-kamera-sistemi-bn360-300', 'sidescan-flex-ss-4200w'],
  },
  {
    id: '2',
    title: 'Belediye Atık Toplama Araçlarında Yaya Güvenliği Projesi',
    slug: 'belediye-atik-toplama-yaya-guvenligi',
    clientName: 'Anadolu Yakası Belediyesi',
    sector: 'cop-ve-atik-yonetimi',
    coverImage: 'placeholder-30',
    imageHint: 'garbage truck city',
    challenge: 'Belediyenin atık toplama kamyonları, dar sokaklarda ve yoğun yaya trafiğinin olduğu bölgelerde çalışırken ciddi güvenlik riskleri oluşturuyordu. Özellikle aracın arkasında ve yanında çalışan personelin güvenliği en büyük endişeydi.',
    solution: 'Her bir atık toplama aracına, 4 kameralı bir MDR-600 serisi mobil DVR sistemi, aracın arkası ve yanları için özel kameralar ve operatörü sesli olarak uyaran bir bbs-tek® Akıllı Alarm kuruldu. Sistem, araç geri vitese takıldığında otomatik olarak devreye giriyor ve sürücü monitöründe arka kamera görüntüsünü gösteriyordu.',
    result: 'Proje sonrasında, araç çevresindeki iş kazaları sıfıra indirildi. Olası anlaşmazlık durumları için tüm operasyonlar kayıt altına alındı ve halktan gelen şikayetlerin çözümünde video kanıtları kullanıldı.',
    usedProducts: ['mdr-600-serisi', 'bbs-tek-akilli-alarm'],
  },
  {
    id: '3',
    title: 'UCPS-2SA Ultrasonik Çarpışma Önleme Sistemi',
    slug: 'ucps-2sa-carpima-onleme',
    clientName: 'Turkish Fuel Services',
    sector: 'havalimanlari',
    coverImage: 'ucps-main',
    imageHint: 'ultrasonic collision prevention',
    challenge: 'Havalimanı yer hizmetleri operasyonlarında kullanılan araçların, uçak gibi değerli varlıklara düşük hızda manevra yaparken çarpma riskini ortadan kaldırmak.',
    solution: 'ADC Tasarım tarafından geliştirilen, Brigade\'in ultrasonik sensörlerini ve özel bir kontrol ünitesini (UCPS HMI Controller) kullanan UCPS-2SA sistemi geliştirildi. Sistem; ayarlanabilir mesafe okuma, sesli/görsel uyarılar ve kritik mesafede aracı otomatik durdurma yeteneklerine sahiptir.',
    result: 'Sistem sayesinde, kritik manevralar sırasında insan hatasından kaynaklanabilecek çarpışma riski minimize edildi. Ayarlanabilir ve şifre korumalı yapısı sayesinde farklı operasyonel ihtiyaçlara göre esneklik sağlandı ve sistemin genel güvenilirliği artırıldı.',
    usedProducts: ['sidescan-flex-ss-4200w'],
  }
];
