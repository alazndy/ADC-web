
import Link from 'next/link';
import Image from 'next/image';
import { findImage } from '@/lib/placeholder-images';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';

const productCategories = [
  {
    title: 'Kamera Sistemleri',
    image: findImage('placeholder-1'),
    items: ['Backeye®360', 'Backeye® Kablosuz Sistem', 'Kameralar', 'HFR Kameralar (Yapay Zekalı)', 'HFR HD Backeye®360 (360 AI)', 'IP Kameralar', 'Monitörler'],
    link: '#'
  },
  {
    title: 'Tespit Sistemleri',
    image: findImage('placeholder-21'),
    items: ['Backsense® Radar', 'CAREYE® Yapay Zekalı Dönüş Asistanı', 'Ön Radar', 'Radar Predict', 'Ultrasonik Sensörler', 'ZoneSafe® RFID Tespiti'],
    link: '#'
  },
  {
    title: 'Sürücü Güvenlik Sistemleri',
    image: findImage('placeholder-20'),
    items: ['Sürücü Güvenlik Kameraları', 'MDR Yapay Zekalı Kameralar'],
    link: '#'
  },
  {
    title: 'Kayıt Sistemleri',
    image: findImage('placeholder-16'),
    items: ['Yapay Zekalı Bağlantılı Araç Kamerası', 'Araç Kameraları (Dashcams)', 'Mobil Dijital Kayıt Cihazları'],
    link: '#'
  },
  {
    title: 'Uyarı Sistemleri',
    image: findImage('placeholder-26'),
    items: ['Sessiz Araç Ses Cihazı (AVAS)', 'Tonal Alarmlar', 'Geri Vites & Uyarı Alarmları'],
    link: '#'
  },
  {
    title: 'Brigade Van',
    image: findImage('sector-distribution'),
    items: ['Hafif ticari araçlar için özel güvenlik çözümleri.'],
    link: '#'
  },
  {
    title: 'Brigade Telematik',
    image: findImage('placeholder-18'),
    items: ['Telematik', 'Telematik Görüntüleme'],
    link: '#'
  },
];


export default function UrunlerPage() {
  return (
    <div className="bg-white text-gray-800">
      {/* Hero Section */}
      <div className="relative h-[400px] md:h-[500px] bg-gray-800 text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image 
              src={findImage('hero-background')?.imageUrl || ''}
              alt="Çalışma alanında güvenlik yeleği giyen bir Brigade çalışanı"
              fill
              sizes="100vw"
              className="object-cover opacity-40"
              data-ai-hint="background image of workers"
          />
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
            <div className="relative z-10 w-full md:w-2/3 lg:w-1/2">
                <h1 className="text-4xl md:text-6xl font-bold font-headline max-w-md text-white">Ticari Araç Güvenlik Ürünleri</h1>
                <p className="mt-6 text-lg text-white/90 max-w-xl">
                  Brigade olarak, ticari ve arazi araçları için karmaşık güvenlik sorunlarını yönetme ve kör noktaları ortadan kaldırma konusunda yılların deneyimine sahibiz. Misyonumuz çarpışmaları önlemek ve hayat kurtarmaktır.
                </p>
            </div>
        </div>
      </div>

      {/* Categories Section */}
      <div className="bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h2 className="text-3xl font-bold font-headline text-center mb-12 text-gray-900">Ürün Kategorilerimiz</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {productCategories.map((category, index) => (
                  <Card key={index} className="flex flex-col overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 border-gray-200 bg-white">
                    <CardHeader className='p-0 relative aspect-video'>
                        {category.image && (
                          <Image
                              src={category.image.imageUrl}
                              alt={category.title}
                              fill
                              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                              className="object-cover"
                              data-ai-hint={category.image.imageHint || "product category"}
                          />
                        )}
                         <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    </CardHeader>
                    <CardContent className="p-6 flex flex-col flex-grow">
                        <CardTitle className="font-headline text-xl text-gray-900">{category.title}</CardTitle>
                        <ul className="mt-4 space-y-2 text-sm text-gray-600 flex-grow">
                            {category.items.map((item, itemIndex) => (
                                <li key={itemIndex} className="flex items-center gap-2">
                                    <ArrowRight className="h-4 w-4 text-primary flex-shrink-0" />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </CardContent>
                    <div className='p-6 pt-0 mt-4'>
                        <Button variant="outline" className='w-full' asChild>
                            <Link href={category.link}>Kategoriyi İncele</Link>
                        </Button>
                    </div>
                  </Card>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
