import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PlusCircle } from "lucide-react";

export default function AdminProductsContent() {
  return (
    <div className="p-4 sm:p-6 lg:p-8">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold font-headline">Ürünleri Yönet</h1>
        <Button>
          <PlusCircle className="mr-2 h-4 w-4" /> Yeni Ürün Ekle
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Tüm Ürünler</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">
            Ürün listesi ve yönetim araçları burada yer alacak. (Tablo, arama, filtreleme vb.)
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
