
import type { ProductCategoryDetail } from "../types";

export const productCategoryDetails: ProductCategoryDetail[] = [
    {
        name: "Kamera Monitör Sistemleri",
        slug: "kamera-monitor-sistemleri",
        description: "Araç çevresindeki kör noktaları ortadan kaldırarak güvenli manevra ve sürüş sağlayan, yüksek çözünürlüklü kamera ve monitör sistemleri.",
        imagePlaceholder: "kamera-monitor",
        featuredItems: [
            "360° kuşbakışı görünüm sağlayan sistemler",
            "Geri görüş ve yan görüş kameraları",
            "Ağır hizmet tipi, suya ve toza dayanıklı tasarımlar",
            "Farklı araç tipleri için özelleştirilmiş çözümler"
        ]
    },
    {
        name: "Tespit Sistemleri",
        slug: "tespit-sistemleri",
        description: "Radar ve ultrasonik sensörler kullanarak araçların kör noktalarındaki yayaları, bisikletlileri ve diğer engelleri tespit eden akıllı güvenlik sistemleri.",
        imagePlaceholder: "tespit-sistemleri",
        featuredItems: [
            "Ultrasonik ve radar tabanlı sensörler",
            "Düşük hızda otomatik devreye girme",
            "Sürücü için sesli ve görsel uyarılar",
            "Dönüş asistanı ve kör nokta uyarı sistemleri"
        ]
    },
    {
        name: "Kayıt Sistemleri",
        slug: "kayit-sistemleri",
        description: "Kaza anı kanıtı, sürücü performansı izleme ve hırsızlığa karşı koruma sağlayan, çok kanallı mobil dijital video kayıt (MDR) cihazları.",
        imagePlaceholder: "kayit-sistemleri",
        featuredItems: [
            "4 ila 24 kamera kanalını destekleyen MDR üniteleri",
            "GPS ile konum ve hız takibi",
            "4G/5G üzerinden uzaktan canlı izleme ve veri indirme",
            "Yapay zeka destekli olay algılama (örn: sert fren, kaza)"
        ]
    },
    {
        name: "Sürücü Güvenlik Sistemleri",
        slug: "surucu-guvenlik-sistemleri",
        description: "Sürücü yorgunluğunu, dikkat dağınıklığını ve tehlikeli sürüş alışkanlıklarını tespit ederek kazaları önlemeye yardımcı olan yapay zeka tabanlı sistemler.",
        imagePlaceholder: "surucu-guvenlik",
        featuredItems: [
            "Yapay zeka ile yüz ve göz takibi",
            "Yorgunluk, esneme, telefon kullanımı algılama",
            "Şerit ihlali ve takip mesafesi uyarıları",
            "Gerçek zamanlı sesli ve görsel sürücü uyarıları"
        ]
    },
    {
        name: "Uyarı Sistemleri",
        slug: "uyari-sistemleri",
        description: "Araçların manevraları (geri gitme, dönüş yapma) sırasında çevredeki insanları etkili bir şekilde uyaran, gürültü kirliliği yaratmayan akıllı alarm sistemleri.",
        imagePlaceholder: "uyari-sistemleri",
        featuredItems: [
            "Beyaz gürültü (white sound) yayan akıllı alarmlar",
            "Sadece tehlike anında devreye girme",
            "Gece modu ve sessiz çalışma opsiyonları",
            "Yönlendirilmiş ses ile etkin uyarı"
        ]
    }
];
