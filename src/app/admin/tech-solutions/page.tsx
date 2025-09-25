import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PlusCircle } from "lucide-react";

export default function AdminTechSolutionsPage() {
  return (
    <div className="p-4 sm:p-6 lg:p-8">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold font-headline">Teknoloji Çözümlerini Yönet</h1>
        <Button>
          <PlusCircle className="mr-2 h-4 w-4" /> Yeni Çözüm Ekle
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Tüm Teknoloji Çözümleri</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">
            Teknoloji çözümleri listesi ve yönetim araçları burada yer alacak.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
