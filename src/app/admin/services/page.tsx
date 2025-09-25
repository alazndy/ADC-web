import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PlusCircle } from "lucide-react";

export default function AdminServicesPage() {
  return (
    <div className="p-4 sm:p-6 lg:p-8">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold font-headline">Hizmetleri Yönet</h1>
        <Button>
          <PlusCircle className="mr-2 h-4 w-4" /> Yeni Hizmet Ekle
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Tüm Hizmetler</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">
            Hizmet listesi ve yönetim araçları burada yer alacak.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
