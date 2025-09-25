import { mockProducts } from '@/lib/mock-data';
import { ProductCard } from '@/components/product-card';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { Separator } from '@/components/ui/separator';

const categories = [...new Set(mockProducts.map(p => p.category))];
// In a real app, this would come from a 'sectors' collection
const sectors = ['Lojistik ve Taşımacılık', 'İnşaat ve Hafriyat', 'Belediye ve Atık Yönetimi', 'Yolcu Taşımacılığı'];

export default function UrunlerPage() {
  return (
    <>
      <div className="bg-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h1 className="text-4xl font-bold font-headline">Ürün Kataloğu</h1>
          <p className="mt-2 text-lg text-muted-foreground max-w-3xl mx-auto">
            Operasyonel mükemmellik için tasarlanmış Brigade Electronics güvenlik ve verimlilik ürünleri.
          </p>
        </div>
      </div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-4 gap-8 items-start">
          <aside className="lg:col-span-1 sticky top-24">
            <Card>
              <CardHeader>
                <CardTitle className="font-headline">Filtrele</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h3 className="font-semibold mb-4">Kategori</h3>
                  <div className="space-y-3">
                    {categories.map(category => (
                      <div key={category} className="flex items-center space-x-2">
                        <Checkbox id={category} />
                        <Label htmlFor={category} className="font-normal leading-tight">{category}</Label>
                      </div>
                    ))}
                  </div>
                </div>
                <Separator />
                 <div>
                  <h3 className="font-semibold mb-4">Sektör</h3>
                  <div className="space-y-3">
                    {sectors.map(sector => (
                      <div key={sector} className="flex items-center space-x-2">
                        <Checkbox id={sector} />
                        <Label htmlFor={sector} className="font-normal leading-tight">{sector}</Label>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </aside>
          <main className="lg:col-span-3">
            <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-6">
              {mockProducts.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </main>
        </div>
      </div>
    </>
  );
}
