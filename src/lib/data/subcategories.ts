
interface SubCategory {
    title: string;
    slug: string;
    description: string;
    features?: string[];
    image: string;
    imageHint?: string;
}

export const cameraMonitorSubCategories: SubCategory[] = [
    {
        title: 'Backeye®360',
        slug: 'backeye-360',
        description: 'Backeye®360, dört ultra geniş açılı kameradan gelen canlı görüntüleri birleştirerek, aracın çevresinin gerçek zamanlı, tek bir kuşbakışı görüntüsünü oluşturan akıllı bir kamera monitör sistemidir. Kör noktaları tamamen ortadan kaldırarak sürücülerin düşük hızlarda güvenle manevra yapmasını sağlar.',
        features: [
            '360° kuşbakışı görünüm',
            'Kör noktaları ortadan kaldırır',
            'Düşük hızlarda manevra güvenliğini artırır',
            'Özelleştirilebilir görüntüleme seçenekleri',
            'Tetikleyicilerle (örneğin geri vites) otomatik ekran aktivasyonu'
        ],
        image: 'subcategory-backeye360',
        imageHint: 'A commercial truck from above showing the 360 degree camera view',
    },
    {
        title: 'Akıllı Kameralar',
        slug: 'akilli-kameralar',
        description: 'Yapay zeka ile güçlendirilmiş bu kameralar, insanları ve araçları aktif olarak algılayarak sürücüyü potansiyel tehlikelere karşı uyarır. Sadece bir kamera değil, proaktif bir güvenlik asistanıdır.',
        features: [
            'Yapay Zeka ile İnsan Tespiti',
            'Görsel ve Sesli Sürücü Uyarıları',
            'Gereksiz uyarıları azaltmak için akıllı filtreleme',
            'Geniş görüş açısı'
        ],
        image: 'subcategory-ai-camera',
        imageHint: 'An AI camera detecting pedestrians near a construction vehicle',
    },
    {
        title: 'Ağır Hizmet Tipi Kameralar',
        slug: 'agir-hizmet-tipi-kameralar',
        description: 'En zorlu koşullara dayanacak şekilde tasarlanmış bu kameralar, darbelere, titreşime, toza ve neme karşı dayanıklıdır. İnşaat, madencilik ve tarım gibi sektörler için idealdir.',
        features: [
            'Yüksek IP koruma sınıfları (IP68, IP69K)',
            'Darbeye ve titreşime dayanıklı yapı',
            'Geniş çalışma sıcaklığı aralığı',
            'Mükemmel düşük ışık performansı'
        ],
        image: 'subcategory-heavy-duty-camera',
        imageHint: 'A rugged, heavy-duty camera mounted on an excavator',
    },
    {
        title: 'Monitörler',
        slug: 'monitorler',
        description: 'Sürücü kabini için tasarlanmış yüksek çözünürlüklü monitörlerimiz, kamera görüntülerinin net ve anlaşılır bir şekilde görüntülenmesini sağlar. Farklı boyut ve konfigürasyonlarda mevcuttur.',
        features: [
            'Yüksek çözünürlüklü, parlama önleyici ekranlar',
            'Birden fazla kamera girişini destekleme',
            'Dayanıklı ve kompakt tasarım',
            'Kolay okunabilir arayüz'
        ],
        image: 'subcategory-monitors',
        imageHint: 'An in-cab monitor showing multiple camera feeds',
    },
];

export const detectionSystemSubCategories: SubCategory[] = [
    {
        title: 'Radar Sensör Sistemleri',
        slug: 'radar-sensor-sistemleri',
        description: 'Radar sensörleri, aracın kör noktalarındaki hareketli ve sabit nesneleri algılamak için kullanılır. Kötü hava koşullarında ve düşük görüşte bile güvenilir performans sunar.',
        image: 'subcategory-radar',
        imageHint: 'Radar waves detecting an obstacle behind a truck',
        features: [
            'Her türlü hava koşulunda çalışır',
            'Programlanabilir algılama bölgeleri',
            'Görsel ve sesli uyarılar sağlar',
            'Hatalı alarmları en aza indirir'
        ],
    },
    {
        title: 'Ultrasonik Sensörler',
        slug: 'ultrasonik-sensorler',
        description: 'Düşük hızlarda manevra yaparken aracın yakın çevresindeki engelleri tespit etmek için idealdir. Özellikle park etme ve dar alanlarda çalışma sırasında etkilidir.',
        image: 'subcategory-ultrasonic',
        imageHint: 'Ultrasonic sensors on the bumper of a delivery van',
        features: [
            'Yakın mesafe engelleri için hassas algılama',
            'Kademeli sesli ve görsel uyarılar',
            'Dayanıklı ve boyanabilir sensörler',
            'Düşük maliyetli ve etkili çözüm'
        ],
    },
];

export const recordingSystemSubCategories: SubCategory[] = [
    {
        title: 'Mobil Dijital Kayıt Cihazları (MDR)',
        slug: 'mobil-dijital-kayit-cihazlari-mdr',
        description: 'MDR sistemleri, araca bağlı kameralardan gelen görüntüleri kaydeder. Kaza analizi, sürücü eğitimi ve sigorta talepleri için değerli kanıtlar sunar.',
        image: 'subcategory-mdr',
        imageHint: 'A secure Mobile Digital Recorder (MDR) unit',
        features: [
            'Çok kanallı video kaydı',
            'GPS ile konum ve hız takibi',
            '4G/5G ile uzaktan erişim (opsiyonel)',
            'Kilitlenebilir, sabotaja karşı korumalı depolama'
        ],
    },
];

export const driverSafetySystemSubCategories: SubCategory[] = [
    {
        title: 'Sürücü Yorgunluk ve Dikkat Tespiti',
        slug: 'surucu-yorgunluk-tespiti',
        description: 'Yapay zeka ve yüz tanıma teknolojisi kullanarak sürücünün yorgunluk, uykusuzluk ve dikkat dağınıklığı belirtilerini anlık olarak analiz eden ve sürücüyü uyaran sistemlerdir.',
        image: 'subcategory-fatigue-detection',
        imageHint: 'An in-cab camera monitoring a driver for signs of fatigue',
        features: [
            'Göz kapağı kapanma tespiti',
            'Esnerne algılama',
            'Telefonla konuşma ve sigara içme tespiti',
            'Sesli ve görsel uyarılar'
        ],
    }
];

export const warningSystemSubCategories: SubCategory[] = [
    {
        title: 'bbs-tek® Beyaz Sesli Alarmlar',
        slug: 'beyaz-sesli-alarmlar',
        description: 'Geleneksel \'bip bip\' alarmlarının aksine, sadece tehlike bölgesinde duyulan, anında fark edilen ve gürültü kirliliğini azaltan patentli beyaz sesli geri vites alarmları.',
        image: 'subcategory-bbs-tek',
        imageHint: 'A white sound backup alarm emitting sound waves',
        features: [
            'Anında duyulabilir ve kaynağı belirlenebilir',
            'Sadece tehlike bölgesinde duyulur, gürültü kirliliğini önler',
            'Çoklu frekanslı \'şşş\' sesi',
            'Ağır hizmet tipi ve dayanıklı yapı'
        ],
    }
];
