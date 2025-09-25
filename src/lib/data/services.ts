import type { Service } from '@/lib/types';
import { ShieldCheck, Wrench, Route, Cpu } from 'lucide-react';

export const services: Service[] = [
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

export const techSolutions: Service[] = [
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
