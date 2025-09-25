'use client'
import { mockProducts } from '@/lib/mock-data';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { findImage } from '@/lib/placeholder-images';
import Image from 'next/image';

const categories = [...new Set(mockProducts.map(p => p.category))].sort();

// Helper to create a URL-friendly slug from a category name
const categoryToSlug = (categoryName: string) => {
  return categoryName.toLowerCase()
    .replace(/ /g, '-')
    .replace(/[^\w-]+/g, '');
};

// Find a representative product for each category to display an image
const getCategoryImage = (category: string) => {
    const productInCategory = mockProducts.find(p => p.category === category);
    if (productInCategory) {
        return findImage(productInCategory.imageUrls[0]);
    }
    return findImage('placeholder-1'); // Fallback image
}

export default function UrunlerPage() {
  return (
    <div className="bg-black text-white">
      {/* Hero Section */}
      <div className="relative text-white">
        <div className="absolute inset-0">
            <Image 
                src={findImage('hero-background')?.imageUrl || ''} // Replace with a suitable background image
                alt="Ticari Araç Güvenliği"
                layout="fill"
                objectFit="cover"
                className="opacity-30"
            />
        </div>
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 text-left">
          <h1 className="text-4xl md:text-6xl font-bold font-headline max-w-3xl">Ticari Araç Güvenlik Ürünleri</h1>
        </div>
      </div>

      {/* Breadcrumb - A simple version */}
      <div className="bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-3 text-sm text-gray-400">
          <Link href="/">Anasayfa</Link> &raquo; <span>Tüm Ürünler</span>
        </div>
      </div>


      {/* Introduction Section */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold font-headline mb-4">Çarpışmaları Önler, Hayat Kurtarırız.</h2>
            <p className="mb-4 text-gray-300">
              Brigade olarak, ticari ve arazi araçları için karmaşık güvenlik sorunlarını yönetme ve kör noktaları ortadan kaldırma konusunda yılların deneyimine sahibiz. Kamyonlardan ağır iş makinelerine kadar, sürücüleri, yer personelini, yayaları ve bisikletlileri zarardan koruyan yüksek kaliteli araç kamera sistemleri ve araç ürünleri yelpazesi oluşturmak için yorulmadan çalıştık.
            </p>
            <p className="font-semibold mb-6">
              Misyonumuz çarpışmaları önlemek ve hayat kurtarmaktır. Pasif ve aktif güvenlik sistemlerinden oluşan tamamlayıcı yelpazemiz, hangi sektörde faaliyet gösterirseniz gösterin, herkes için araç güvenliğini sağlamanın temelini oluşturur.
            </p>
            <ul className="space-y-3">
              <li className="flex items-start">
                <CheckCircle2 className="h-6 w-6 text-green-500 mr-3 flex-shrink-0" />
                <span>Ana üretim tesislerimiz IATF 16949:2016 sertifikalıdır</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="h-6 w-6 text-green-500 mr-3 flex-shrink-0" />
                <span>Tüm uygulanabilir ürünler Avrupa'da CE işaretine ve Kuzey Amerika'da FCC/IC onayına sahiptir</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="h-6 w-6 text-green-500 mr-3 flex-shrink-0" />
                <span>Ürünlerimizin çoğunluğu BM ECE Yönetmeliği 46'ya uygundur</span>
              </li>
            </ul>
             <Button className="mt-8 bg-white text-black hover:bg-gray-200" asChild>
                <Link href="#product-catalogue">Ürün Kataloğunu İndir</Link>
             </Button>
          </div>
          <div>
            <Image
                src={findImage('brigade-logo-strapline')?.imageUrl || ''} // Replace with a relevant image
                alt="Brigade Electronics Logosu"
                width={500}
                height={203}
                className="w-full h-auto filter invert"
                data-ai-hint="logo"
            />
          </div>
        </div>
      </div>

      {/* Product Categories Section */}
      <div className="bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h2 className="text-3xl font-bold font-headline text-center mb-12">Ticari Araç ve İş Makineleri İçin Güvenlik Ürünleri</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {categories.map(category => {
                  const image = getCategoryImage(category);
                  return (
                      <Link key={category} href={`/urunler/kategori/${categoryToSlug(category)}`} className="group">
                           <Card className="h-full flex flex-col overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 bg-gray-800 border-gray-700">
                              <CardHeader className='p-0 relative aspect-video'>
                                  {image && (
                                    <Image
                                        src={image.imageUrl}
                                        alt={category}
                                        fill
                                        className="object-contain p-4 transition-transform duration-300 group-hover:scale-105"
                                        data-ai-hint={image.imageHint || "product category"}
                                    />
                                  )}
                                  <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors"></div>
                              </CardHeader>
                              <CardContent className="p-6 flex-grow flex items-center justify-between">
                                  <h3 className="text-xl font-bold font-headline text-white">{category}</h3>
                                  <ArrowRight className="h-6 w-6 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 -translate-x-4 group-hover:translate-x-0" />
                              </CardContent>
                          </Card>
                      </Link>
                  )
              })}
          </div>
        </div>
      </div>
      
      {/* "Purchase with Peace of Mind" Section */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="md:col-span-2 text-center">
                     <h2 className="text-3xl font-bold font-headline mb-4">İçiniz Rahat Olsun</h2>
                     <p className="max-w-3xl mx-auto text-gray-300">
                        Kalite ve güvenilirlik, güvenlik standartlarını korumak için esastır. Ürünlerimize o kadar güveniyoruz ki, bir, iki, üç ve beş yıllık garantilerin yanı sıra bazı durumlarda ömür boyu garanti sunmaktan gurur duyuyoruz.
                     </p>
                </div>
           </div>
      </div>


      {/* Download Catalogue Section */}
      <div id="product-catalogue" className="bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                     <h3 className="text-xl font-semibold">Brigade Electronics</h3>
                     <h2 className="text-4xl font-bold font-headline mb-4">Ürün Kataloğu</h2>
                     <p className="text-gray-300 mb-8">Aşağıdaki formu doldurun, Ürün Kataloğumuzu doğrudan gelen kutunuza gönderelim.</p>
                     <form className="space-y-4">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div>
                                <Label htmlFor="firstName">İsim *</Label>
                                <Input id="firstName" placeholder="İsim" required className="bg-gray-800 border-gray-700 text-white"/>
                            </div>
                            <div>
                                <Label htmlFor="lastName">Soyisim *</Label>
                                <Input id="lastName" placeholder="Soyisim" required className="bg-gray-800 border-gray-700 text-white"/>
                            </div>
                        </div>
                         <div>
                            <Label htmlFor="email">E-posta *</Label>
                            <Input id="email" type="email" placeholder="E-posta Adresi" required className="bg-gray-800 border-gray-700 text-white"/>
                        </div>
                        <div>
                            <Label htmlFor="company">Şirket Adı *</Label>
                            <Input id="company" placeholder="Şirket Adı" required className="bg-gray-800 border-gray-700 text-white"/>
                        </div>
                        <div>
                            <Label htmlFor="country">Ülke *</Label>
                            <Input id="country" placeholder="Ülke" required className="bg-gray-800 border-gray-700 text-white"/>
                        </div>
                        <div>
                            <Label htmlFor="message">Mesaj</Label>
                            <Textarea id="message" placeholder="Mesajınız..." className="bg-gray-800 border-gray-700 text-white"/>
                        </div>
                         <Button type="submit" className="bg-white text-black hover:bg-gray-200">Gönder</Button>
                     </form>
                </div>
                 <div className="hidden md:block">
                    <Image
                        src={findImage('product-catalogue-cover')?.imageUrl || ''} // Replace with a relevant image
                        alt="Ürün Kataloğu"
                        width={600}
                        height={400}
                        className="rounded-lg shadow-lg"
                        data-ai-hint="product catalogue cover"
                    />
                 </div>
            </div>
        </div>
      </div>
    </div>
  );
}
